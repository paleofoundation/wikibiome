const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const SRC = '/sessions/keen-fervent-brown/mnt/Raw/wiki/sources';
const files = fs.readdirSync(SRC).filter(f => f.endsWith('.md'));

const HEAVY = ['nickel','iron','zinc','copper','cadmium','lead','arsenic','mercury','chromium','manganese','aluminum','cobalt','molybdenum'];
const TITLE_METAL_RE = /\b(metal|metals|metallomic|heavy\s*metal|trace element|nickel|iron|zinc|copper|cadmium|lead|arsenic|mercury|chromium|manganese|aluminum|cobalt|molybdenum|ferroptosis|siderophore|nutritional immunity|iron homeostasis|metal dyshomeostasis|metal ion|metalloestrogen|melanin|neuromelanin|pheomelanin|eumelanin)\b/i;

const PROTECTED = new Set([
  'maier-2019-nickel-microbial-pathogenesis',
  'liu-2025-cardiometabolic-nickel',
  'pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis',
  'pendergrass-2026-heavy-metals-obesity-epidemic',
  'pendergrass-2026-pheomelanin-neuromelanin-parkinsons-redheads',
]);

let removed = 0;
const removedList = [];
for (const f of files) {
  const filePath = path.join(SRC, f);
  const content = fs.readFileSync(filePath, 'utf8');
  const m = content.match(/^---\n([\s\S]*?)\n---/);
  if (!m) continue;
  let fm;
  try { fm = yaml.load(m[1]) || {}; } catch { continue; }
  if (fm.keystone !== true) continue;
  const slug = f.replace(/\.md$/, '');
  if (PROTECTED.has(slug)) continue;

  const title = String(fm.title || '');
  const tags = (fm.tags || []).join(' ');
  const body = content.slice(m[0].length).toLowerCase();

  const titleHasMetal = TITLE_METAL_RE.test(title) || TITLE_METAL_RE.test(tags);
  let metalCount = 0;
  for (const metal of HEAVY) {
    const matches = body.match(new RegExp(`\\b${metal}s?\\b`, 'gi')) || [];
    metalCount += matches.length;
  }
  // Also count "metal" / "metallomic" / related words
  metalCount += (body.match(/\b(metallomic|ferroptosis|siderophore|nutritional immunity|metal[- ]dependen|mis-metall|metalloprote|chelator|chelation|metal cofactor|nife-hydrogenase|zinc-dep|iron-dep|nickel-dep)/gi) || []).length;

  // Keep if title signals metals OR body has substantial metal content
  const keep = titleHasMetal || metalCount >= 10;

  if (!keep) {
    removedList.push({ slug, title: title.substring(0, 80), metalCount });
    delete fm.keystone;
    delete fm.keystone_criteria_met;
    delete fm.why_keystone;
    const newFm = yaml.dump(fm, { lineWidth: -1, quotingType: '"', forceQuotes: false });
    fs.writeFileSync(filePath, `---\n${newFm}---\n\n${content.slice(m[0].length).replace(/^\n+/, '')}`);
    removed++;
  }
}

console.log(`Removed keystone designation from ${removed} papers:\n`);
for (const r of removedList) console.log(`  - ${r.slug} (metal-mentions:${r.metalCount})`);
console.log(`\nRemaining keystone count:`);
