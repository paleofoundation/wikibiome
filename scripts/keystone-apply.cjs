const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const SRC_DIR = '/sessions/keen-fervent-brown/mnt/Raw/wiki/sources';
const candidates = require('/sessions/keen-fervent-brown/mnt/Raw/wiki/keystone-candidates.json');

// Only apply to 4/5 and 5/5
const toApply = candidates.filter(c => c.total >= 4 && !c.alreadyTagged);
console.log(`Applying to ${toApply.length} sources (${candidates.filter(c=>c.total===5 && !c.alreadyTagged).length} at 5/5, ${candidates.filter(c=>c.total===4 && !c.alreadyTagged).length} at 4/5)`);

const CRIT_NAMES = {
  1: 'Cross-Domain Bridge',
  2: 'Signature Layer Dependency',
  3: 'Cross-Condition Pattern Enabler',
  4: 'Mechanistic Linchpin',
  5: 'Paradigm Reframe',
};

function buildWhyKeystone(cand) {
  const crits = cand.criteriaMet.map(n => CRIT_NAMES[n]);
  const title = (cand.title || '').replace(/"/g, "'").trim();
  const year = cand.year || '';
  const j = cand.journal || '';
  const metalList = (cand.metals || []).slice(0, 4).join(', ');

  // Build a meaningful editorial blurb based on criteria combinations
  const parts = [];
  if (crits.includes('Cross-Domain Bridge')) {
    parts.push(`bridges metallomics and microbial/disease ecology`);
  }
  if (crits.includes('Mechanistic Linchpin')) {
    parts.push(`provides the mechanistic explanation linking metal exposure to downstream pathology`);
  }
  if (crits.includes('Cross-Condition Pattern Enabler') && metalList) {
    parts.push(`contributes cross-condition evidence for the role of ${metalList} across multiple WikiBiome disease signatures`);
  } else if (crits.includes('Cross-Condition Pattern Enabler')) {
    parts.push(`contributes cross-condition evidence used in multiple WikiBiome disease signatures`);
  }
  if (crits.includes('Signature Layer Dependency')) {
    parts.push(`is cited across entity, concept, and signature pages as a primary source for this material`);
  }
  if (crits.includes('Paradigm Reframe')) {
    parts.push(`reframes how the field interprets this relationship, opening new investigative avenues for WikiBiome`);
  }

  const joined = parts.length > 1
    ? parts.slice(0, -1).join('; ') + '; and ' + parts.slice(-1)
    : parts[0] || 'supports WikiBiome core content';

  return `This study ${joined}. Without it, WikiBiome could not draw the connections between ${metalList || 'the metals discussed'} and the conditions, organisms, or mechanisms it informs. Criteria satisfied: ${crits.join(', ')}.`;
}

let changed = 0;
for (const cand of toApply) {
  const filePath = path.join(SRC_DIR, `${cand.slug}.md`);
  if (!fs.existsSync(filePath)) { console.warn(`Missing: ${filePath}`); continue; }
  const content = fs.readFileSync(filePath, 'utf8');
  const m = content.match(/^---\n([\s\S]*?)\n---/);
  if (!m) { console.warn(`No frontmatter: ${cand.slug}`); continue; }

  let fm;
  try { fm = yaml.load(m[1]) || {}; }
  catch (e) { console.warn(`YAML error in ${cand.slug}: ${e.message}`); continue; }

  // Skip if already tagged (safety)
  if (fm.keystone === true) continue;

  fm.keystone = true;
  fm.keystone_criteria_met = cand.criteriaMet;
  fm.why_keystone = buildWhyKeystone(cand);

  // Preserve other frontmatter fields, reserialize
  const newFm = yaml.dump(fm, { lineWidth: -1, quotingType: '"', forceQuotes: false });
  const newContent = `---\n${newFm}---\n\n${content.slice(m[0].length).replace(/^\n+/, '')}`;
  fs.writeFileSync(filePath, newContent);
  changed++;
}
console.log(`Wrote ${changed} source files.`);
