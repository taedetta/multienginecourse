'use strict';
import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const PROJECT_TOKEN = process.env.RAILWAY_TOKEN || process.env.RAILWAY_API_TOKEN;
const projectId = '6aeda248-e0ad-4ab7-b234-47e64bd70c36';
const environmentId = 'ba636cae-2565-4ad2-bd5b-239950d51976';
const serviceId = 'ffcbee4e-415a-4e0a-8721-91c6cd555cfe';
const LIVE_URL = 'https://web-production-66631.up.railway.app';

function postTarball(tarballPath) {
  return new Promise((resolve, reject) => {
    const body = fs.readFileSync(tarballPath);
    const url = `/project/${projectId}/environment/${environmentId}/up?serviceId=${serviceId}`;
    const req = https.request(
      {
        hostname: 'backboard.railway.com',
        path: url,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${PROJECT_TOKEN}`,
          'Content-Type': 'application/octet-stream',
          'Content-Length': body.length,
        },
      },
      (res) => {
        let d = '';
        res.on('data', (c) => { d += c; });
        res.on('end', () => {
          if (res.statusCode >= 400) {
            reject(new Error(`Upload failed ${res.statusCode}: ${d}`));
          } else {
            try {
              resolve(JSON.parse(d));
            } catch {
              resolve({ raw: d });
            }
          }
        });
      }
    );
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function waitForLive() {
  for (let i = 1; i <= 36; i++) {
    await new Promise((r) => setTimeout(r, 10000));
    const html = await fetch(LIVE_URL, { headers: { 'Cache-Control': 'no-cache' } })
      .then((r) => r.text())
      .catch(() => '');
    const ok = html.includes('Study Guide') || html.includes('BYcPpN9J') || html.includes('DSN7lHYd');
    process.stdout.write(`\rPoll ${i}/36: ${ok ? 'NEW BUILD LIVE' : 'building...'}   `);
    if (ok) {
      console.log(`\nLive: ${LIVE_URL}`);
      return true;
    }
  }
  console.log('\nBuild may still be finishing — check Railway dashboard.');
  return false;
}

async function main() {
  if (!PROJECT_TOKEN) throw new Error('RAILWAY_TOKEN required');

  console.log('Building...');
  execSync('npm run build', { cwd: root, stdio: 'inherit' });

  const tarPath = path.join(root, '.deploy.tar.gz');
  console.log('Creating tarball...');
  try {
    fs.unlinkSync(tarPath);
  } catch {}

  if (process.platform === 'win32') {
    execSync(
      `tar -czf "${tarPath}" --exclude=node_modules --exclude=.git --exclude=.deploy.tar.gz -C "${root}" .`,
      { stdio: 'inherit', shell: true }
    );
  } else {
    execSync(`tar -czf "${tarPath}" --exclude=node_modules --exclude=.git --exclude=.deploy.tar.gz -C "${root}" .`, {
      stdio: 'inherit',
    });
  }

  console.log('Uploading to Railway...');
  const result = await postTarball(tarPath);
  console.log('Upload response:', JSON.stringify(result, null, 2));

  fs.unlinkSync(tarPath);
  await waitForLive();
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
