'use strict';
import https from 'https';

const TOKEN = process.env.RAILWAY_API_TOKEN;
const serviceId = 'ffcbee4e-415a-4e0a-8721-91c6cd555cfe';

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
          if (p.errors?.length) reject(new Error(JSON.stringify(p.errors, null, 2)));
          else resolve(p.data);
        });
      }
    );
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

const { service } = await gql(
  `query($id: String!) {
    service(id: $id) {
      id name
      source { repo branch image }
    }
  }`,
  { id: serviceId }
);

console.log(JSON.stringify(service, null, 2));
