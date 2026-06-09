'use strict';

const URL = 'https://web-production-66631.up.railway.app';

async function check() {
  const health = await fetch(`${URL}/api/health`, { headers: { 'Cache-Control': 'no-cache' } })
    .then((r) => r.json())
    .catch(() => ({}));
  const html = await fetch(URL, { headers: { 'Cache-Control': 'no-cache' } })
    .then((r) => r.text())
    .catch(() => '');
  return {
    version: health.version,
    features: health.features,
    hasStudy: html.includes('Ca0YMm7O') || html.includes('Study Guide') || html.includes('DU1XthBA'),
  };
}

for (let i = 1; i <= 36; i++) {
  const s = await check();
  console.log(`[${i}/36] version=${s.version || 'old'} study=${s.hasStudy ? 'YES' : 'no'}`);
  if (s.version === '2.1.0' && s.hasStudy) {
    console.log(`\nLIVE: ${URL}`);
    process.exit(0);
  }
  await new Promise((r) => setTimeout(r, 10000));
}
console.log('\nStill on old build — connect GitHub in Railway Settings > Source');
process.exit(1);
