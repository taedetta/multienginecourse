'use strict';
import https from 'https';

const TOKEN = process.env.RAILWAY_API_TOKEN;
const serviceId = 'ffcbee4e-415a-4e0a-8721-91c6cd555cfe';
const environmentId = 'ba636cae-2565-4ad2-bd5b-239950d51976';

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
  for (const mut of ['serviceDomainCreate', 'serviceInstanceDomainCreate']) {
    try {
      const data = await gql(
        `mutation($input: ServiceDomainCreateInput!) {
          ${mut}(input: $input) {
            ... on ServiceDomain {
              id
              domain
            }
          }
        }`,
        { input: { serviceId, environmentId } }
      );
      const result = data[mut];
      if (result?.domain) {
        console.log(`https://${result.domain}`);
        return;
      }
    } catch (e) {
      console.log(`${mut}: ${e.message}`);
    }
  }

  const { service } = await gql(
    `query($id: String!, $environmentId: String!) {
      service(id: $id) {
        serviceInstances(environmentId: $environmentId) {
          edges {
            node {
              domains { serviceDomains { domain } }
            }
          }
        }
      }
    }`,
    { id: serviceId, environmentId }
  );

  const domain = service?.serviceInstances?.edges?.[0]?.node?.domains?.serviceDomains?.[0]?.domain;
  if (domain) console.log(`https://${domain}`);
  else console.log('No domain generated');
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
