const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const SRC_DIR = '/sessions/keen-fervent-brown/mnt/Raw/wiki/sources';
const SIG_DIR = '/sessions/keen-fervent-brown/mnt/Raw/wiki/signatures';
const ENT_DIR = '/sessions/keen-fervent-brown/mnt/Raw/wiki/entities';
const CON_DIR = '/sessions/keen-fervent-brown/mnt/Raw/wiki/concepts';

function parse(content) {
  const m = content.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return { fm: {}, body: content };
  try { return { fm: yaml.load(m[1]) || {}, body: content.slice(m[0].length) }; }
  catch { return { fm: {}, body: content }; }
}
function readDir(dir) {
  return fs.readdirSync(dir).filter(f => f.endsWith('.md')).map(f => {
    const { fm, body } = parse(fs.readFileSync(path.join(dir, f), 'utf8'));
    return { slug: f.replace(/\.md$/, ''), fm, body };
  });
}

// Known lists
const METALS = ['nickel','iron','zinc','copper','cadmium','lead','arsenic','mercury','chromium','manganese','aluminum','cobalt','molybdenum','selenium','calcium','magnesium'];
const METAL_RE = new RegExp(`\\b(${METALS.join('|')})\\b`, 'i');
const TAXA_HINT = /\b(bacteri|microbio|microbiot|gut flora|archaea|fungi|candida|escherichia|bacteroides|fusobacter|helicobacter|salmonella|staphylococ|streptococ|proteus|clostrid|bifidobact|lactobacill|prevotel|akkermans|faecalibact|roseburia|lachnospir|enterobact|klebsiella|pseudomon|SCFA|dysbios)/i;
const DISEASE_RE = /\b(cancer|obesity|diabetes|parkinson|alzheim|colitis|endometri|IBD|crohn|CKD|autism|asd|pcos|thyroid|cardiovascular|MetS|metabolic syndrome|atheroscler|neurodeg|dement|steatotic|NAFLD|MASLD|liver disease|kidney disease|microbi|dysbios)/i;

const signatures = readDir(SIG_DIR);
const entities = readDir(ENT_DIR);
const concepts = readDir(CON_DIR);
const allPages = [...entities, ...concepts, ...signatures];

// Build metal → [sig slugs] and taxon → [sig slugs]
const sigMetals = {}, sigTaxa = {};
for (const s of signatures) {
  const elev = s.fm.metallomic_signature?.elevated || [];
  const dep = s.fm.metallomic_signature?.depleted || [];
  for (const m of [...elev, ...dep]) {
    const k = String(m).toLowerCase();
    (sigMetals[k] = sigMetals[k] || []).push(s.slug);
  }
  const extract = arr => (arr || []).map(x => typeof x === 'string' ? x : (x.taxon || '')).map(t => t.replace(/\[\[|\]\]/g, '').toLowerCase()).filter(Boolean);
  for (const t of [...extract(s.fm.taxonomic_signature?.enriched), ...extract(s.fm.taxonomic_signature?.depleted)]) {
    (sigTaxa[t] = sigTaxa[t] || []).push(s.slug);
  }
}

// Backlinks
const backlinks = {};
for (const p of allPages) {
  const text = JSON.stringify(p.fm) + '\n' + p.body;
  for (const m of (text.match(/\[\[([a-z0-9-]+)\]\]/gi) || [])) {
    const slug = m.replace(/\[\[|\]\]/g, '').toLowerCase();
    backlinks[slug] = (backlinks[slug] || 0) + 1;
  }
  for (const s of (p.fm.sources || [])) {
    const slug = String(s).toLowerCase();
    backlinks[slug] = (backlinks[slug] || 0) + 1;
  }
}

const sources = readDir(SRC_DIR);
const results = [];

for (const s of sources) {
  const fm = s.fm;
  const body = (s.body || '').toLowerCase();
  const fullText = body + ' ' + (fm.tags || []).join(' ').toLowerCase() + ' ' + (fm.title || '').toLowerCase();

  // Detect metals (from FM or body)
  const fmMetals = (fm.metals_discussed || []).map(x => String(x).toLowerCase());
  const bodyMetals = METALS.filter(m => new RegExp(`\\b${m}\\b`, 'i').test(fullText));
  const metals = [...new Set([...fmMetals, ...bodyMetals])];

  const hasMicrobe = TAXA_HINT.test(fullText);
  const hasDisease = DISEASE_RE.test(fullText);
  const hasMetal = metals.length > 0;

  const bl = backlinks[s.slug.toLowerCase()] || 0;
  const scores = { c1: 0, c2: 0, c3: 0, c4: 0, c5: 0 };
  const reasons = [];

  // C1: Cross-Domain Bridge — metal + microbe OR metal + disease
  if (hasMetal && hasMicrobe) { scores.c1 = 1; reasons.push('C1: metals + microbes'); }
  else if (hasMetal && hasDisease) { scores.c1 = 1; reasons.push('C1: metals + disease'); }

  // C2: Signature Layer Dependency — backlink threshold 5+
  if (bl >= 5) { scores.c2 = 1; reasons.push(`C2: ${bl} backlinks`); }

  // C3: Cross-Condition — metal appears in 2+ signatures
  let cc = 0;
  for (const m of metals) if ((sigMetals[m] || []).length >= 2) cc++;
  // also count taxa mentioned explicitly
  const fmTaxa = (fm.taxa_discussed || []).map(x => String(x).toLowerCase().replace(/\s+/g, '-'));
  for (const t of fmTaxa) if ((sigTaxa[t] || []).length >= 2) cc++;
  if (cc >= 2) { scores.c3 = 1; reasons.push(`C3: ${cc} cross-condition features`); }

  // C4: Mechanistic language — ≥4 hits
  const mechHits = (body.match(/\b(mechanism|pathway|cascade|catalyz|mediat|signaling|mis-metall|fenton|ferroptosis|nutritional immunity|virulence|cofactor|chelat|siderophore|biofilm|translocation|redox|oxidative (stress|damage)|disrupt|homeostasis|dysbiosis|barrier|permeabil|dependenc|enzyme|metabolite)\b/gi) || []).length;
  if (mechHits >= 4) { scores.c4 = 1; reasons.push(`C4: ${mechHits} mechanism-hits`); }

  // C5: Paradigm / influential
  const paradigm = /\b(paradigm|reframe|unified framework|first to|novel framework|reconceptualiz|challeng(es|ing) the|redefin|fundamental(ly)? (alter|change)|overturn|rethink)\b/i.test(body);
  const el = String(fm.evidence_level || '').toLowerCase();
  const isReview = /review|meta-analysis|synthesis/.test(el) || /review|systematic/.test(String(fm.journal || '').toLowerCase());
  if (paradigm) { scores.c5 = 1; reasons.push('C5: paradigm language'); }
  else if (isReview && bl >= 3) { scores.c5 = 1; reasons.push('C5: influential review'); }

  const total = scores.c1 + scores.c2 + scores.c3 + scores.c4 + scores.c5;
  const criteriaMet = [1,2,3,4,5].filter(i => scores[`c${i}`]);

  if (total >= 3) {
    results.push({
      slug: s.slug, title: fm.title || s.slug,
      year: fm.year || '', journal: fm.journal || '',
      authors: fm.authors || [],
      total, criteriaMet, reasons, bl, metals,
      alreadyTagged: fm.keystone === true,
    });
  }
}

results.sort((a, b) => b.total - a.total || b.bl - a.bl);

const byScore = { 3: 0, 4: 0, 5: 0 };
for (const r of results) byScore[r.total]++;
console.log(`Total sources: ${sources.length}`);
console.log(`Keystone candidates (≥3/5): ${results.length}`);
console.log(`  5/5: ${byScore[5]}  |  4/5: ${byScore[4]}  |  3/5: ${byScore[3]}`);
console.log(`Already tagged: ${results.filter(r => r.alreadyTagged).length}`);
fs.writeFileSync('/sessions/keen-fervent-brown/mnt/Raw/wiki/keystone-candidates.json', JSON.stringify(results, null, 2));
console.log('\nFull list: wiki/keystone-candidates.json');
