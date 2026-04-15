const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const blurbs = require('/tmp/blurbs.json');

const SRC = '/sessions/keen-fervent-brown/mnt/Raw/wiki/sources';
let count = 0;
for (const [slug, newBlurb] of Object.entries(blurbs)) {
  const fp = path.join(SRC, `${slug}.md`);
  if (!fs.existsSync(fp)) { console.warn(`Missing: ${slug}`); continue; }
  const content = fs.readFileSync(fp, 'utf8');
  const m = content.match(/^---\n([\s\S]*?)\n---/);
  if (!m) continue;
  const fm = yaml.load(m[1]) || {};
  fm.why_keystone = newBlurb;
  const newFm = yaml.dump(fm, { lineWidth: -1, quotingType: '"', forceQuotes: false });
  fs.writeFileSync(fp, `---\n${newFm}---\n\n${content.slice(m[0].length).replace(/^\n+/, '')}`);
  count++;
}
console.log(`Rewrote ${count} blurbs.`);
