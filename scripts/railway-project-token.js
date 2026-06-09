'use strict';
import https from 'https';

const TOKEN = process.env.RAILWAY_API_TOKEN;
const projectId = '6aeda248-e0ad-4ab7-b234-47e64bd70c36';

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

const data = await gql(
  `mutation($input: ProjectTokenCreateInput!) {
    projectTokenCreate(input: $input)
  }`,
  { input: { projectId, name: 'cursor-deploy' } }
);
console.log(data.projectTokenCreate);
