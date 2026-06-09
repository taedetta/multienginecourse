'use strict';
import https from 'https';

const TOKEN = process.env.RAILWAY_API_TOKEN;
const serviceId = process.argv[2] || 'ffcbee4e-415a-4e0a-8721-91c6cd555cfe';
const environmentId = process.argv[3] || 'ba636cae-2565-4ad2-bd5b-239950d51976';

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
          const p = JSON.parse(d);
          if (p.errors?.length) reject(new Error(p.errors.map((e) => e.message).join('; ')));
          else resolve(p.data);
        });
      }
    );
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function main() {
  const { service } = await gql(
    `query ServiceStatus($id: String!) {
      service(id: $id) {
        id
        name
      }
    }`,
    { id: serviceId }
  );

  const { domains } = await gql(
    `query Domains($projectId: String!, $environmentId: String!, $serviceId: String!) {
      domains(
        projectId: $projectId
        environmentId: $environmentId
        serviceId: $serviceId
      ) {
        serviceDomains {
          domain
          targetPort
        }
      }
    }`,
    {
      projectId: '6aeda248-e0ad-4ab7-b234-47e64bd70c36',
      environmentId,
      serviceId,
    }
  ).catch(async () => {
    const { serviceInstance } = await gql(
      `query SI($serviceId: String!, $environmentId: String!) {
        serviceInstance(serviceId: $serviceId, environmentId: $environmentId) {
          latestDeployment { status url }
          domains { serviceDomains { domain } }
        }
      }`,
      { serviceId, environmentId }
    );
    return { domains: null, serviceInstance };
  });

  const { deployments } = await gql(
    `query Deploys($input: DeploymentListInput!) {
      deployments(input: $input) {
        edges {
          node { id status url createdAt }
        }
      }
    }`,
    { input: { serviceId, environmentId } }
  );

  console.log('Service:', service.name);
  const deploys = deployments?.edges?.map((e) => e.node) || [];
  deploys.slice(0, 3).forEach((d) => {
    console.log(`Deploy: ${d.status} ${d.url || ''} (${d.id})`);
  });

  const serviceDomains = domains?.serviceDomains || [];
  if (serviceDomains.length) {
    console.log('\nURLs:');
    serviceDomains.forEach((d) => console.log(`  https://${d.domain}`));
  } else {
    const latest = deploys[0];
    if (latest?.url) console.log(`\nURL: ${latest.url}`);
    else console.log('\nNo domain yet — may still be building. Check railway.app dashboard.');
  }
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
