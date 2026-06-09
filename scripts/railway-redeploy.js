'use strict';
import https from 'https';

const TOKEN = process.env.RAILWAY_API_TOKEN;
const environmentId = 'ba636cae-2565-4ad2-bd5b-239950d51976';
const serviceId = 'ffcbee4e-415a-4e0a-8721-91c6cd555cfe';

function gql(query, variables) {
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

await gql(
  `mutation Deploy($environmentId: String!, $serviceId: String!) {
    serviceInstanceDeployV2(environmentId: $environmentId, serviceId: $serviceId)
  }`,
  { environmentId, serviceId }
);
console.log('Redeploy triggered');
