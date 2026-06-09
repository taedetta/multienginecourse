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

const mutations = [
  ['serviceConnect', `mutation($id: String!, $input: ServiceConnectInput!) {
    serviceConnect(id: $id, input: $input) { id }
  }`, { id: serviceId, input: { repo: 'taedetta/multienginecourse', branch: 'main' } }],
  ['serviceSourceConnect', `mutation($serviceId: String!, $repo: String!, $branch: String!) {
    serviceSourceConnect(serviceId: $serviceId, repo: $repo, branch: $branch) { id }
  }`, { serviceId, repo: 'taedetta/multienginecourse', branch: 'main' }],
];

for (const [name, query, vars] of mutations) {
  try {
    const data = await gql(query, vars);
    console.log(name, 'OK', JSON.stringify(data));
  } catch (e) {
    console.log(name, 'FAIL', e.message);
  }
}

await gql(
  `mutation($environmentId: String!, $serviceId: String!) {
    serviceInstanceDeployV2(environmentId: $environmentId, serviceId: $serviceId)
  }`,
  { environmentId, serviceId }
);
console.log('Deploy triggered');
