#!/usr/bin/env node
/**
 * Batch upgrade source pages:
 * - Infer evidence_level from body text keywords
 * - Extract metals_discussed from body text
 * - Extract taxa_discussed from body text
 * - Infer karen_brain_primitives from content
 * - Extract key_findings from Key Claims/Key Findings sections
 */

const fs = require('fs');
const path = require('path');

const SOURCES_DIR = path.join(__dirname, '..', 'sources');

// Evidence level keywords (order matters - check most specific first)
const EVIDENCE_PATTERNS = [
  { pattern: /\b(systematic review|meta-analysis|meta analysis)\b/i, level: 'systematic-review-meta-analysis' },
  { pattern: /\b(randomized controlled|randomised controlled|RCT|double-blind.*placebo)\b/i, level: 'randomized-controlled-trial' },
  { pattern: /\b(quasi-experimental|quasi experimental|natural experiment)\b/i, level: 'quasi-experimental' },
  { pattern: /\b(prospective cohort|longitudinal cohort|prospective study|prospective observational)\b/i, level: 'prospective-cohort' },
  { pattern: /\b(retrospective cohort|retrospective study|retrospective analysis)\b/i, level: 'retrospective-cohort' },
  { pattern: /\b(case-control|case control)\b/i, level: 'case-control' },
  { pattern: /\b(cross-sectional|cross sectional|prevalence study|survey study)\b/i, level: 'cross-sectional' },
  { pattern: /\b(case series)\b/i, level: 'case-series' },
  { pattern: /\b(case report)\b/i, level: 'case-report' },
  { pattern: /\b(animal model|mouse model|rat model|murine|mice|rats|rodent|in vivo.*(?:mice|rat|mouse)|hamster model|piglet)\b/i, level: 'animal-model' },
  { pattern: /\b(in vitro|cell culture|cell line|HeLa|Caco-2|HEK293|cultured cells)\b/i, level: 'in-vitro' },
  { pattern: /\b(computational|bioinformatics|in silico|machine learning|network analysis|Mendelian randomization)\b/i, level: 'computational-prediction' },
  { pattern: /\b(narrative review|expert opinion|commentary|editorial|perspective|consensus statement|review article)\b/i, level: 'expert-opinion' },
];

// Metal names to detect
const METALS = [
  'iron', 'zinc', 'copper', 'nickel', 'cadmium', 'lead', 'mercury', 'arsenic',
  'chromium', 'manganese', 'cobalt', 'selenium', 'aluminum', 'aluminium',
  'bismuth', 'platinum', 'tin', 'molybdenum', 'vanadium', 'tungsten',
  'antimony', 'barium', 'beryllium', 'thallium', 'uranium', 'titanium',
  'lithium', 'strontium', 'magnesium', 'calcium'
];

const METAL_SLUGS = {
  'iron': 'iron', 'zinc': 'zinc', 'copper': 'copper', 'nickel': 'nickel',
  'cadmium': 'cadmium', 'lead': 'lead', 'mercury': 'mercury', 'arsenic': 'arsenic',
  'chromium': 'chromium', 'manganese': 'manganese', 'cobalt': 'cobalt',
  'selenium': 'selenium', 'aluminum': 'aluminum', 'aluminium': 'aluminum',
  'bismuth': 'bismuth', 'platinum': 'platinum', 'tin': 'tin',
  'molybdenum': 'molybdenum', 'vanadium': 'vanadium', 'tungsten': 'tungsten',
  'antimony': 'antimony', 'barium': 'barium', 'beryllium': 'beryllium',
  'thallium': 'thallium', 'uranium': 'uranium', 'titanium': 'titanium',
  'lithium': 'lithium', 'strontium': 'strontium', 'magnesium': 'magnesium',
  'calcium': 'calcium'
};

// Taxa names to detect (common genera in the wiki)
const TAXA = [
  'Escherichia', 'E\\. coli', 'Bacteroides', 'Prevotella', 'Fusobacterium',
  'Clostridium', 'Clostridioides', 'Lactobacillus', 'Bifidobacterium',
  'Streptococcus', 'Staphylococcus', 'Enterococcus', 'Helicobacter',
  'H\\. pylori', 'Candida', 'Pseudomonas', 'Klebsiella', 'Salmonella',
  'Campylobacter', 'Akkermansia', 'Faecalibacterium', 'Roseburia',
  'Ruminococcus', 'Blautia', 'Coprococcus', 'Eubacterium', 'Dorea',
  'Dialister', 'Megasphaera', 'Veillonella', 'Lachnospira', 'Lachnospiraceae',
  'Alistipes', 'Parabacteroides', 'Bilophila', 'Desulfovibrio',
  'Acinetobacter', 'Proteus', 'Citrobacter', 'Enterobacter',
  'Actinomyces', 'Corynebacterium', 'Propionibacterium', 'Cutibacterium',
  'Gardnerella', 'Atopobium', 'Ureaplasma', 'Mycoplasma',
  'Peptostreptococcus', 'Finegoldia', 'Anaerococcus', 'Porphyromonas',
  'Treponema', 'Brucella', 'Vibrio', 'Listeria', 'Shigella',
  'Aspergillus', 'Saccharomyces', 'Malassezia', 'Cladosporium',
  'Fusarium', 'Mucor', 'Debaryomyces', 'Torulaspora',
  'Methanobrevibacter', 'Methanosphaera',
  'Oscillospira', 'Oscillospiraceae', 'Christensenellaceae',
  'Alloprevotella', 'Butyricimonas', 'Anaerostipes', 'Collinsella',
  'Subdoligranulum', 'Haemophilus'
];

const TAXA_SLUG_MAP = {
  'escherichia': 'escherichia-coli', 'e. coli': 'escherichia-coli',
  'bacteroides': 'bacteroides-fragilis', 'prevotella': 'prevotella',
  'fusobacterium': 'fusobacterium-nucleatum', 'clostridium': 'clostridium',
  'clostridioides': 'clostridioides-difficile',
  'lactobacillus': 'lactobacillus', 'bifidobacterium': 'bifidobacterium',
  'streptococcus': 'streptococcus', 'staphylococcus': 'staphylococcus-aureus',
  'enterococcus': 'enterococcus', 'helicobacter': 'helicobacter-pylori',
  'h. pylori': 'helicobacter-pylori', 'candida': 'candida-albicans',
  'pseudomonas': 'pseudomonas-aeruginosa', 'klebsiella': 'klebsiella-pneumoniae',
  'salmonella': 'salmonella', 'campylobacter': 'campylobacter-jejuni',
  'akkermansia': 'akkermansia-muciniphila', 'faecalibacterium': 'faecalibacterium-prausnitzii',
  'roseburia': 'roseburia', 'ruminococcus': 'ruminococcus',
  'blautia': 'blautia', 'coprococcus': 'coprococcus',
  'eubacterium': 'eubacterium', 'dorea': 'dorea',
  'dialister': 'dialister', 'megasphaera': 'megasphaera',
  'veillonella': 'veillonella', 'lachnospira': 'lachnospira',
  'lachnospiraceae': 'lachnospiraceae', 'alistipes': 'alistipes',
  'parabacteroides': 'parabacteroides', 'bilophila': 'bilophila',
  'desulfovibrio': 'desulfovibrio', 'acinetobacter': 'acinetobacter',
  'proteus': 'proteus', 'citrobacter': 'citrobacter',
  'enterobacter': 'enterobacter', 'actinomyces': 'actinomyces',
  'gardnerella': 'gardnerella', 'brucella': 'brucella',
  'aspergillus': 'aspergillus', 'saccharomyces': 'saccharomyces-cerevisiae',
  'debaryomyces': 'debaryomyces', 'torulaspora': 'torulaspora',
  'methanobrevibacter': 'methanobrevibacter-smithii',
  'oscillospira': 'oscillospiraceae', 'oscillospiraceae': 'oscillospiraceae',
  'alloprevotella': 'alloprevotella', 'butyricimonas': 'butyricimonas',
  'anaerostipes': 'anaerostipes', 'collinsella': 'collinsella',
};

function inferEvidenceLevel(content) {
  for (const { pattern, level } of EVIDENCE_PATTERNS) {
    if (pattern.test(content)) {
      return level;
    }
  }
  // Check if title contains "review"
  if (/\breview\b/i.test(content.substring(0, 200))) {
    return 'expert-opinion';
  }
  return null;
}

function extractMetals(content) {
  const found = new Set();
  const lower = content.toLowerCase();
  for (const metal of METALS) {
    // Match whole word, case insensitive
    const regex = new RegExp(`\\b${metal}\\b`, 'i');
    if (regex.test(content)) {
      found.add(METAL_SLUGS[metal.toLowerCase()] || metal.toLowerCase());
    }
  }
  // Remove very common false positives - calcium and magnesium only if they appear in metallomic context
  // Keep them for now since this is a metallomics wiki
  return [...found].sort();
}

function extractTaxa(content) {
  const found = new Set();
  for (const taxon of TAXA) {
    const regex = new RegExp(`\\b${taxon}\\b`, 'i');
    if (regex.test(content)) {
      const key = taxon.replace(/\\\. /g, '. ').toLowerCase();
      const slug = TAXA_SLUG_MAP[key] || key.replace(/\s+/g, '-');
      found.add(slug);
    }
  }
  return [...found].sort();
}

function inferKBP(content, metals, taxa) {
  const primitives = new Set();
  const lower = content.toLowerCase();

  // P1: Metals as Selective Pressures
  if (metals.length > 0 && (
    /\b(selective pressure|metal.*(select|enrich|favor)|exposure.*(alter|shift|change).*microbi)/i.test(content) ||
    /\b(heavy metal.*microb|metal.*dysbiosis|metal.*gut|metal.*microbiome)\b/i.test(content)
  )) primitives.add(1);

  // P2: Nutritional Immunity
  if (/\b(nutritional immunity|calprotectin|lactoferrin|hepcidin|lipocalin|transferrin|metal sequestration|iron withholding|host defense.*metal|serum.*(?:iron|zinc|copper).*(?:low|deplet|deficien))/i.test(content))
    primitives.add(2);

  // P3: Mis-metallation
  if (/\b(mis-metallation|mismetallation|cadmium.*calcium|lead.*calcium|toxic metal.*entry|molecular mimicry.*metal|divalent.*channel|cadmium.*zinc.*replac)/i.test(content))
    primitives.add(3);

  // P4: Metal Dependencies as Achilles' Heels
  if (/\b(metal.*(depend|requir|cofactor|enzyme)|urease|hydrogenase|siderophore|metalloprotease|zinc.*enzyme|nickel.*enzyme|iron.*acqui|metal.*virulence)/i.test(content))
    primitives.add(4);

  // P5: Two-Sided Ecological Engineering
  if (/\b(ecological engineer|suppress.*pathogen.*restor|probiotic|prebiotic|synbiotic|FMT|fecal.*transplant|competitive exclusion|restore.*commensal|SCFA.*produc)/i.test(content))
    primitives.add(5);

  // P6: Interkingdom and Functional Shielding
  if (/\b(interkingdom|inter-kingdom|fungal.*bacterial|biofilm.*protect|functional shielding|polymicrobial|cross-kingdom)/i.test(content))
    primitives.add(6);

  // P7: Estrobolome
  if (/\b(estrobolome|beta-glucuronidase|β-glucuronidase|estrogen.*recirculation|estrogen.*deconjugat|GUS.*enzyme|estrogen.*microb)/i.test(content))
    primitives.add(7);

  // P8: Siderophore Competition
  if (/\b(siderophore|iron.*competition|iron.*acqui.*compet|enterobactin|yersiniabactin|aerobactin|iron.*piracy)/i.test(content))
    primitives.add(8);

  // P9: Oxygen State
  if (/\b(hypoxia|anaerob|aerob.*facultat|oxygen.*state|oxygenation|dysoxia|redox.*potential|oxygen.*gradient|butyrate.*oxygen)/i.test(content))
    primitives.add(9);

  // If metals are discussed with microbiome context, at minimum P1
  if (metals.length > 0 && taxa.length > 0 && primitives.size === 0) {
    primitives.add(1);
  }

  return [...primitives].sort((a, b) => a - b);
}

function extractKeyFindings(content) {
  // Look for "Key Claims" or "Key Findings" section
  const sectionMatch = content.match(/#+\s*Key (?:Claims|Findings)\s*\n([\s\S]*?)(?=\n#|\n---|\Z)/i);
  if (!sectionMatch) return [];

  const section = sectionMatch[1];
  // Extract bullet points, strip markdown
  const bullets = section.match(/^[-*]\s+\*\*(.+?)\*\*/gm);
  if (!bullets) return [];

  return bullets.slice(0, 3).map(b => {
    // Clean up: remove leading bullet and bold markers
    return b.replace(/^[-*]\s+\*\*/, '').replace(/\*\*.*$/, '').trim();
  }).filter(b => b.length > 10);
}

function parseFrontmatter(content) {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) return { frontmatter: '', body: content, raw: '' };
  return {
    raw: match[0],
    frontmatter: match[1],
    body: content.substring(match[0].length)
  };
}

function updateField(frontmatter, field, value, formatAsArray = false) {
  let formatted;
  if (formatAsArray) {
    if (Array.isArray(value) && value.length === 0) {
      formatted = `${field}: []`;
    } else {
      formatted = `${field}: [${value.join(', ')}]`;
    }
  } else {
    formatted = `${field}: ${value}`;
  }

  // Check if field exists
  const regex = new RegExp(`^${field}:.*$`, 'm');
  if (regex.test(frontmatter)) {
    return frontmatter.replace(regex, formatted);
  }
  // Add before the closing ---
  return frontmatter + '\n' + formatted;
}

function processFile(filepath) {
  const content = fs.readFileSync(filepath, 'utf8');
  const { raw, frontmatter, body } = parseFrontmatter(content);
  if (!frontmatter) return { changed: false };

  let fm = frontmatter;
  let changed = false;
  const fullText = content;

  // 1. Evidence level - only if missing or "not yet classified"
  const hasEvidenceLevel = /^evidence_level:\s*.+$/m.test(fm);
  const isNotClassified = /^evidence_level:\s*"?not yet classified"?/m.test(fm);

  if (!hasEvidenceLevel || isNotClassified) {
    const level = inferEvidenceLevel(fullText);
    if (level) {
      fm = updateField(fm, 'evidence_level', level);
      changed = true;
    }
  }

  // 2. metals_discussed - only if missing or empty []
  const hasMetals = /^metals_discussed:/m.test(fm);
  const emptyMetals = /^metals_discussed:\s*\[\]\s*$/m.test(fm);

  if (!hasMetals || emptyMetals) {
    const metals = extractMetals(fullText);
    if (metals.length > 0) {
      fm = updateField(fm, 'metals_discussed', metals, true);
      changed = true;
    }
  }

  // 3. taxa_discussed - only if missing or empty []
  const hasTaxa = /^taxa_discussed:/m.test(fm);
  const emptyTaxa = /^taxa_discussed:\s*\[\]\s*$/m.test(fm);

  if (!hasTaxa || emptyTaxa) {
    const taxa = extractTaxa(fullText);
    if (taxa.length > 0) {
      fm = updateField(fm, 'taxa_discussed', taxa, true);
      changed = true;
    }
  }

  // 4. karen_brain_primitives - only if missing or empty []
  const hasKBP = /^karen_brain_primitives:/m.test(fm);
  const emptyKBP = /^karen_brain_primitives:\s*\[\]\s*$/m.test(fm);

  if (!hasKBP || emptyKBP) {
    const metalsForKBP = extractMetals(fullText);
    const taxaForKBP = extractTaxa(fullText);
    const kbp = inferKBP(fullText, metalsForKBP, taxaForKBP);
    if (kbp.length > 0) {
      fm = updateField(fm, 'karen_brain_primitives', kbp, true);
      changed = true;
    }
  }

  // 5. key_findings - only if missing or empty []
  const hasFindings = /^key_findings:/m.test(fm);
  const emptyFindings = /^key_findings:\s*\[\]\s*$/m.test(fm);

  if (!hasFindings || emptyFindings) {
    const findings = extractKeyFindings(fullText);
    if (findings.length > 0) {
      const formatted = findings.map(f => `"${f.replace(/"/g, '\\"')}"`);
      fm = updateField(fm, 'key_findings', formatted, true);
      changed = true;
    }
  }

  if (changed) {
    const newContent = content.replace(raw, '---\n' + fm + '\n---');
    fs.writeFileSync(filepath, newContent, 'utf8');
  }

  return { changed };
}

// Main
const files = fs.readdirSync(SOURCES_DIR).filter(f => f.endsWith('.md'));
let updated = 0;
let skipped = 0;
let errors = 0;

for (const file of files) {
  try {
    const result = processFile(path.join(SOURCES_DIR, file));
    if (result.changed) {
      updated++;
    } else {
      skipped++;
    }
  } catch (err) {
    errors++;
    if (errors <= 5) console.error(`Error: ${file}: ${err.message}`);
  }
}

console.log(`Source batch upgrade complete:`);
console.log(`  Updated: ${updated}`);
console.log(`  Skipped (already complete): ${skipped}`);
console.log(`  Errors: ${errors}`);
console.log(`  Total: ${files.length}`);
