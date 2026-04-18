#!/usr/bin/env node
/**
 * Fix ghost wikilinks v2 - more aggressive matching:
 * 1. Case normalization (Cadmium Toxicity → cadmium)
 * 2. Space→hyphen (gut-brain axis → gut-brain-axis)
 * 3. Known concept/entity aliases
 * 4. Source reference format fixes (Wang 2019 - Title → source slug)
 * 5. Plural→singular
 */

const fs = require('fs');
const path = require('path');

const WIKI_DIR = path.join(__dirname, '..');
const DIRS = ['entities', 'concepts', 'sources', 'interventions', 'signatures', 'stops'];

// Build index of all existing pages (slug → dir/slug)
const existingPages = new Map();
const existingSlugs = new Set();
for (const dir of DIRS) {
  const dirPath = path.join(WIKI_DIR, dir);
  if (!fs.existsSync(dirPath)) continue;
  for (const file of fs.readdirSync(dirPath)) {
    if (file.endsWith('.md') && !file.startsWith('_')) {
      const slug = file.replace('.md', '');
      existingSlugs.add(slug);
      existingPages.set(slug, dir);
    }
  }
}

// Manual alias map for common ghosts
const ALIASES = {
  'microbiome': 'gut-microbiome',
  'microbiota': 'gut-microbiome',
  'heavy metals': 'heavy-metals',
  'gut-brain axis': 'gut-brain-axis',
  'gut brain axis': 'gut-brain-axis',
  'siderophores': 'siderophore-competition',
  'siderophore': 'siderophore-competition',
  'scfa': 'butyrate',
  'scfas': 'butyrate',
  'short-chain fatty acid': 'butyrate',
  'polycystic-ovary-syndrome': 'pcos',
  'irritable-bowel-syndrome': 'ibs',
  'candida': 'candida-albicans',
  'faecalibacterium': 'faecalibacterium-prausnitzii',
  'staphylococcus': 'staphylococcus-aureus',
  'helicobacter': 'helicobacter-pylori',
  'pseudomonas': 'pseudomonas-aeruginosa',
  'campylobacter': 'campylobacter-jejuni',
  'citrobacter': 'citrobacter',
  'enterobacter': 'enterobacter',
  'haemophilus': 'haemophilus',
  'antibiotics': 'antimicrobial-resistance',
  'antibiotic': 'antimicrobial-resistance',
  'antibiotic-resistance': 'antimicrobial-resistance',
  'antibiotic-resistance-genes': 'antimicrobial-resistance',
  'antibiotic resistance genes': 'antimicrobial-resistance',
  'metabolites': 'metabolite',
  'polyphenols': 'polyphenol',
  'leaky gut': 'gut-barrier-dysfunction',
  'leaky-gut': 'gut-barrier-dysfunction',
  'gut-barrier': 'gut-barrier-dysfunction',
  'intestinal permeability': 'gut-barrier-dysfunction',
  'intestinal barrier': 'gut-barrier-dysfunction',
  'intestinal-barrier': 'gut-barrier-dysfunction',
  'barrier-integrity': 'gut-barrier-dysfunction',
  'gut barrier': 'gut-barrier-dysfunction',
  'gut barrier function': 'gut-barrier-dysfunction',
  'gut-permeability': 'gut-barrier-dysfunction',
  'mucosal-barrier': 'gut-barrier-dysfunction',
  'oxidative stress': 'oxidative-stress',
  'reactive oxygen species': 'oxidative-stress',
  'reactive-oxygen-species': 'oxidative-stress',
  'immune response': 'immune-dysregulation',
  'immune dysfunction': 'immune-dysregulation',
  'immune dysregulation': 'immune-dysregulation',
  'immune activation': 'immune-dysregulation',
  'autoimmune': 'autoimmunity',
  'autoimmune disease': 'autoimmunity',
  'autoimmunity': 'autoimmunity',
  'chelation-therapy': 'chelation-therapy',
  'chelation therapy': 'chelation-therapy',
  'Chelation-therapy': 'chelation-therapy',
  'aluminium': 'aluminum',
  'thallium': 'thallium',
  'Thallium': 'thallium',
  'vitamin D': 'vitamin-d-supplementation',
  'vitamin D deficiency': 'vitamin-d-supplementation',
  'vitamin-d': 'vitamin-d-supplementation',
  'tryptophan': 'tryptophan',
  'bipolar-disorder': 'bipolar-disorder',
  'Bipolar-disorder': 'bipolar-disorder',
  'insulin': 'insulin-resistance',
  'insulin resistance': 'insulin-resistance',
  'metabolic syndrome': 'metabolic-syndrome',
  'metabolic-endotoxemia': 'metabolic-syndrome',
  'estrogen': 'estrobolome',
  'estrogen-receptor': 'estrobolome',
  'estrogen receptor alpha': 'estrobolome',
  'testosterone': 'testosterone',
  'progesterone': 'progesterone',
  'bile acid': 'bile-acid-metabolism',
  'lipid metabolism': 'bile-acid-metabolism',
  'cholesterol': 'bile-acid-metabolism',
  'dietary-metal-paradoxes': 'dietary-metal-paradoxes',
  'metal-disease-matrix': 'metal-disease-matrix',
  'virulence': 'virulence-factors',
  'virulence-factors': 'virulence-factors',
  'virulence-enzymes': 'virulence-factors',
  'toll-like-receptors': 'toll-like-receptors',
  'tlr4-signaling': 'toll-like-receptors',
  'lipopolysaccharide': 'toll-like-receptors',
  'efflux-pumps': 'efflux-pumps',
  'metalloregulator': 'metalloregulator',
  'metallochaperone': 'metallochaperone',
  'metallothionein': 'metallothionein',
  'metallothioneins': 'metallothionein',
  'metalloestrogen': 'metalloestrogens',
  'metalloenzyme': 'metalloenzyme',
  'metalloprotein': 'metalloprotein',
  'metal-chelation': 'chelation-therapy',
  'colonization-resistance': 'colonization-resistance',
  'quorum-sensing': 'quorum-sensing',
  'gene-regulation': 'gene-regulation',
  'epigenetic': 'epigenetics',
  'epigenetic changes': 'epigenetics',
  'histone modifications': 'epigenetics',
  'chromatin modifications': 'epigenetics',
  'DNA methylation': 'epigenetics',
  'drug repurposing': 'drug-repurposing',
  'drug-repurposing': 'drug-repurposing',
  'shotgun-metagenomics': 'shotgun-metagenomics',
  'shotgun metagenomics': 'shotgun-metagenomics',
  'Shotgun metagenomics': 'shotgun-metagenomics',
  'Shotgun-metagenomics': 'shotgun-metagenomics',
  'metagenomic analysis': 'shotgun-metagenomics',
  '16S rRNA sequencing': '16s-rrna-sequencing',
  '16S-rRNA-sequencing': '16s-rrna-sequencing',
  '16S-rRNA': '16s-rrna-sequencing',
  'meta-analysis': 'meta-analysis',
  'animal-model': 'animal-model',
  'fermented foods': 'fermented-foods',
  'Fermented foods': 'fermented-foods',
  'iron deficiency': 'iron-deficiency-anemia',
  'iron-deficiency-anemia': 'iron-deficiency-anemia',
  'Iron deficiency': 'iron-deficiency-anemia',
  'anemia': 'iron-deficiency-anemia',
  'iron supplementation': 'iron-management',
  'iron homeostasis': 'iron-management',
  'ceruloplasmin': 'ceruloplasmin',
  'ferritin': 'ferritin',
  'ferroportin': 'ferroportin',
  'microglia': 'microglia',
  'Microglia': 'microglia',
  'neurotransmitter': 'neurotransmitter',
  'bdnf': 'bdnf',
  'BDNF': 'bdnf',
};

function findTarget(ghost) {
  // 1. Check alias map (case-insensitive key match)
  const lowerGhost = ghost.toLowerCase();
  if (ALIASES[ghost]) {
    const target = ALIASES[ghost];
    if (existingSlugs.has(target)) return target;
    return target; // still return - we'll create these pages
  }
  if (ALIASES[lowerGhost]) {
    const target = ALIASES[lowerGhost];
    if (existingSlugs.has(target)) return target;
    return target;
  }

  // 2. Direct lowercase hyphenation
  const hyphenated = lowerGhost.replace(/\s+/g, '-').replace(/[()'"]/g, '');
  if (existingSlugs.has(hyphenated)) return hyphenated;

  // 3. Try without trailing 's' (plural)
  if (hyphenated.endsWith('s') && existingSlugs.has(hyphenated.slice(0, -1))) {
    return hyphenated.slice(0, -1);
  }

  // 4. Source reference format: "Author Year - Title" → slug format
  const sourceMatch = ghost.match(/^([A-Z][a-z]+)\s+(\d{4})\s*[-–—]\s*(.+)$/);
  if (sourceMatch) {
    const author = sourceMatch[1].toLowerCase();
    const year = sourceMatch[2];
    const titleSlug = sourceMatch[3].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
    // Try common source slug patterns
    const candidates = [
      `${author}-${year}-${titleSlug}`,
      `${author}-${year}-${titleSlug.substring(0, 40).replace(/-$/, '')}`,
    ];
    for (const c of candidates) {
      if (existingSlugs.has(c)) return c;
    }
    // Try partial match
    const prefix = `${author}-${year}`;
    for (const slug of existingSlugs) {
      if (slug.startsWith(prefix)) return slug;
    }
  }

  // 5. "Author et al. Year" format
  const etalMatch = ghost.match(/^([A-Z][a-z]+)\s+et\s+al\.?\s*(\d{4})?/);
  if (etalMatch) {
    const author = etalMatch[1].toLowerCase();
    const year = etalMatch[2] || '';
    const prefix = year ? `${author}-${year}` : author;
    for (const slug of existingSlugs) {
      if (slug.startsWith(prefix)) return slug;
    }
  }

  return null;
}

// Only fix links where target EXISTS
let totalFixes = 0;
let filesChanged = 0;
const stillMissing = new Map();

for (const dir of DIRS) {
  const dirPath = path.join(WIKI_DIR, dir);
  if (!fs.existsSync(dirPath)) continue;

  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md') && !f.startsWith('_'));

  for (const file of files) {
    const filepath = path.join(dirPath, file);
    let content = fs.readFileSync(filepath, 'utf8');
    let changed = false;

    // Find all wikilinks
    const regex = /\[\[([^\]|]+)(\|[^\]]+)?\]\]/g;
    let match;
    const replacements = [];

    // Reset regex
    let searchContent = content;
    while ((match = regex.exec(searchContent)) !== null) {
      const slug = match[1];
      const display = match[2] || '';
      const fullMatch = match[0];

      // Skip if page exists
      if (existingSlugs.has(slug)) continue;

      const target = findTarget(slug);
      if (target && existingSlugs.has(target) && target !== slug) {
        const displayText = display || (slug !== target ? `|${slug}` : '');
        const newLink = `[[${target}${displayText}]]`;
        if (newLink !== fullMatch) {
          replacements.push({ from: fullMatch, to: newLink });
        }
      } else {
        stillMissing.set(slug, (stillMissing.get(slug) || 0) + 1);
      }
    }

    if (replacements.length > 0) {
      for (const { from, to } of replacements) {
        content = content.split(from).join(to);
      }
      fs.writeFileSync(filepath, content, 'utf8');
      totalFixes += replacements.length;
      filesChanged++;
    }
  }
}

console.log(`Wikilink fixes v2 complete:`);
console.log(`  Links fixed: ${totalFixes}`);
console.log(`  Files changed: ${filesChanged}`);
console.log(`  Remaining ghosts: ${stillMissing.size}`);
console.log('');

const sorted = [...stillMissing.entries()].sort((a, b) => b[1] - a[1]);

// Separate into categories
const entityGhosts = [];
const conceptGhosts = [];
const sourceGhosts = [];
const otherGhosts = [];

for (const [slug, count] of sorted) {
  if (/^\d|^[A-Z].*\d{4}|et al|^\[/.test(slug)) {
    sourceGhosts.push([slug, count]);
  } else if (/^[A-Z]/.test(slug)) {
    // Could be entity or concept with wrong case
    otherGhosts.push([slug, count]);
  } else {
    // Lowercase - likely real entity/concept gap
    if (count >= 2) {
      entityGhosts.push([slug, count]);
    } else {
      otherGhosts.push([slug, count]);
    }
  }
}

console.log(`\n=== ENTITY/CONCEPT GHOSTS NEEDING PAGES (${entityGhosts.length}, 2+ refs) ===`);
for (const [slug, count] of entityGhosts) {
  console.log(`${count}\t${slug}`);
}

console.log(`\n=== SOURCE REFERENCE GHOSTS (${sourceGhosts.length}) ===`);
for (const [slug, count] of sourceGhosts.slice(0, 20)) {
  console.log(`${count}\t${slug}`);
}
if (sourceGhosts.length > 20) console.log(`  ... and ${sourceGhosts.length - 20} more`);

console.log(`\n=== OTHER/CAPITALIZED GHOSTS (${otherGhosts.length}) ===`);
for (const [slug, count] of otherGhosts.slice(0, 20)) {
  console.log(`${count}\t${slug}`);
}
if (otherGhosts.length > 20) console.log(`  ... and ${otherGhosts.length - 20} more`);
