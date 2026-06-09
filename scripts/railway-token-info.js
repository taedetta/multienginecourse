'use strict';
import https from 'https';

const TOKEN = process.env.RAILWAY_TOKEN || process.env.RAILWAY_API_TOKEN;

function req(headers, query) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({ query });
    const r = https.request(
      {
        hostname: 'backboard.railway.com',
        path: '/graphql/v2',
        method: 'POST',
        headers: { ...headers, 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) },
      },
      (res) => {
        let d = '';
        res.on('data', (c) => { d += c; });
        res.on('end', () => resolve({ status: res.statusCode, body: d }));
      }
    );
    r.on('error', reject);
    r.write(body);
    r.end();
  });
}

const q = `query {
  me { id email name }
  projects { edges { node { id name services { edges { node { id name } } } environments { edges { node { id name } } } } } }
  projectToken { projectId environmentId }
}`;

for (const [label, headers] of [
  ['Bearer', { Authorization: `Bearer ${TOKEN}` }],
  ['Project-Access-Token', { 'Project-Access-Token': TOKEN }],
]) {
  const { status, body } = await req(headers, q);
  console.log(`\n=== ${label} (${status}) ===`);
  console.log(body.slice(0, 4000));
}
