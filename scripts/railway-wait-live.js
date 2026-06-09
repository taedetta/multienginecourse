'use strict';

const URL = 'https://web-production-66631.up.railway.app/';
const MARKERS = ['BYcPpN9J', 'DSN7lHYd', 'Study Guide'];

async function check() {
  const html = await fetch(URL, { headers: { 'Cache-Control': 'no-cache' } }).then((r) => r.text());
  return MARKERS.some((m) => html.includes(m));
}

async function main() {
  for (let i = 1; i <= 24; i++) {
    const live = await check();
    console.log(`Check ${i}/24: ${live ? 'NEW BUILD LIVE' : 'waiting...'}`);
    if (live) {
      console.log(`\nReady: ${URL}`);
      process.exit(0);
    }
    await new Promise((r) => setTimeout(r, 10000));
  }
  console.log('\nStill serving previous build. GitHub may need to be connected in Railway for auto-deploys.');
  process.exit(1);
}

main();
