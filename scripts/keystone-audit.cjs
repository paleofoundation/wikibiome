const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const SRC = '/sessions/keen-fervent-brown/mnt/Raw/wiki/sources';
const files = fs.readdirSync(SRC).filter(f => f.endsWith('.md'));

// HEAVY/TRANSITION metals only — calcium/magnesium/selenium are essential minerals
// often mentioned without being the subject
const HEAVY = ['nickel','iron','zinc','copper','cadmium','lead','arsenic','mercury','chromium','manganese','aluminum','cobalt','molybdenum'];

const audits = [];
for (const f of files) {
  const content = fs.readFileSync(path.join(SRC, f), 'utf8');
  const m = content.match(/^---\n([\s\S]*?)\n---/);
  if (!m) continue;
  let fm;
  try { fm = yaml.load(m[1]) || {}; } catch { continue; }
  if (fm.keystone !== true) continue;
  const body = content.slice(m[0].length).toLowerCase();

  // Count substantive metal mentions
  const metalCounts = {};
  for (const metal of HEAVY) {
    const re = new RegExp(`\\b${metal}s?\\b`, 'gi');
    const matches = body.match(re) || [];
    if (matches.length > 0) metalCounts[metal] = matches.length;
  }
  const totalMetalMentions = Object.values(metalCounts).reduce((a,b)=>a+b,0);
  const distinctMetals = Object.keys(metalCounts).length;

  // Check if "metallomic" or "metal" terms appear
  const metallomicsContext = (body.match(/\bmetal(s|lomic|-|\.)/gi) || []).length;

  const slug = f.replace(/\.md$/, '');
  audits.push({
    slug,
    totalMetalMentions,
    distinctMetals,
    metallomicsContext,
    topMetals: Object.entries(metalCounts).sort((a,b)=>b[1]-a[1]).slice(0,3).map(([k,v])=>`${k}:${v}`).join(', '),
  });
}

audits.sort((a,b) => a.totalMetalMentions - b.totalMetalMentions);
console.log('LOW METAL CONTENT (likely false positives):\n');
for (const a of audits.filter(x => x.totalMetalMentions < 5)) {
  console.log(`${a.totalMetalMentions} mentions | ${a.distinctMetals} distinct | ${a.slug}`);
  console.log(`   topMetals: ${a.topMetals || '(none)'}\n`);
}
console.log(`\nTotal keystone: ${audits.length}`);
console.log(`With <5 metal mentions: ${audits.filter(x=>x.totalMetalMentions<5).length}`);
console.log(`With <10 metal mentions: ${audits.filter(x=>x.totalMetalMentions<10).length}`);
