'use strict';
import https from 'https';

const TOKEN = process.env.RAILWAY_API_TOKEN;
const environmentId = 'ba636cae-2565-4ad2-bd5b-239950d51976';
const serviceId = 'ffcbee4e-415a-4e0a-8721-91c6cd555cfe';
const TARGET_SHA = process.argv[2] || '1ce496e';

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

async function waitForLive() {
  const url = 'https://web-production-66631.up.railway.app/';
  for (let i = 0; i < 30; i++) {
    await new Promise((r) => setTimeout(r, 10000));
    const html = await fetch(url).then((r) => r.text()).catch(() => '');
    const hasStudy = html.includes('BYcPpN9J') || html.includes('DSN7lHYd');
    const { deployments } = await gql(
      `query($input: DeploymentListInput!) {
        deployments(input: $input) {
          edges { node { id status meta } }
        }
      }`,
      { input: { serviceId, environmentId } }
    );
    const latest = deployments.edges[0]?.node;
    process.stdout.write(`\rDeploy: ${latest?.status || '?'} | new bundle: ${hasStudy ? 'YES' : 'no'}   `);
    if (latest?.status === 'SUCCESS' && hasStudy) {
      console.log('\nLive with latest build.');
      return true;
    }
    if (latest?.status === 'FAILED') {
      console.log('\nDeploy FAILED');
      return false;
    }
  }
  console.log('\nTimeout waiting for new bundle');
  return false;
}

async function main() {
  console.log(`Triggering deploy (target ~${TARGET_SHA})...`);
  await gql(
    `mutation Deploy($environmentId: String!, $serviceId: String!) {
      serviceInstanceDeployV2(environmentId: $environmentId, serviceId: $serviceId)
    }`,
    { environmentId, serviceId }
  );
  await waitForLive();
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
