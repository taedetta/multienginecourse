'use strict';
import https from 'https';

const TOKEN = process.env.RAILWAY_API_TOKEN;
const REPO = 'taedetta/multienginecourse';

function gql(query, variables = {}) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({ query, variables });
    const req = https.request(
      {
        hostname: 'backboard.railway.com',
        path: '/graphql/v2',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(body),
        },
      },
      (res) => {
        let d = '';
        res.on('data', (c) => { d += c; });
        res.on('end', () => {
          try {
            const p = JSON.parse(d);
            if (p.errors?.length) reject(new Error(p.errors.map((e) => e.message).join('; ')));
            else resolve(p.data);
          } catch (e) {
            reject(new Error(`Parse error: ${d.slice(0, 500)}`));
          }
        });
      }
    );
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function main() {
  if (!TOKEN) throw new Error('RAILWAY_API_TOKEN required');

  console.log('Creating Railway project...');
  const { projectCreate } = await gql(
    `mutation($name: String!) {
      projectCreate(input: { name: $name }) {
        id
        name
      }
    }`,
    { name: 'baron58-multiengine-course' }
  );
  const projectId = projectCreate.id;
  console.log(`Project created: ${projectId}`);

  const { environmentCreate } = await gql(
    `mutation($projectId: String!, $name: String!) {
      environmentCreate(input: { projectId: $projectId, name: $name }) {
        id
      }
    }`,
    { projectId, name: 'production' }
  ).catch(() => ({ environmentCreate: null }));

  let environmentId = environmentCreate?.id;

  if (!environmentId) {
    const { project } = await gql(
      `query($id: String!) {
        project(id: $id) {
          environments { edges { node { id name } } }
        }
      }`,
      { id: projectId }
    );
    environmentId = project.environments.edges[0]?.node?.id;
  }

  console.log(`Environment: ${environmentId}`);

  const { serviceCreate } = await gql(
    `mutation($input: ServiceCreateInput!) {
      serviceCreate(input: $input) {
        id
        name
      }
    }`,
    {
      input: {
        projectId,
        name: 'web',
        source: { repo: REPO },
      },
    }
  );
  const serviceId = serviceCreate.id;
  console.log(`Service created: ${serviceId}`);

  await gql(
    `mutation($serviceId: String!, $environmentId: String!) {
      serviceInstanceDeployV2(serviceId: $serviceId, environmentId: $environmentId)
    }`,
    { serviceId, environmentId }
  );
  console.log('Deploy triggered');

  const { domainCreate } = await gql(
    `mutation($input: DomainCreateInput!) {
      domainCreate(input: $input) {
        id
        domain
      }
    }`,
    {
      input: {
        serviceId,
        environmentId,
      },
    }
  ).catch((e) => {
    console.log('Domain create note:', e.message);
    return { domainCreate: null };
  });

  if (domainCreate?.domain) {
    console.log(`URL: https://${domainCreate.domain}`);
  } else {
    const { service } = await gql(
      `query($id: String!) {
        service(id: $id) {
          serviceInstances { edges { node { domains { serviceDomains { domain } } } } }
        }
      }`,
      { id: serviceId }
    );
    const domains = service?.serviceInstances?.edges?.[0]?.node?.domains?.serviceDomains;
    if (domains?.length) {
      console.log(`URL: https://${domains[0].domain}`);
    } else {
      console.log(`Check Railway dashboard for project ${projectId}`);
    }
  }
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
