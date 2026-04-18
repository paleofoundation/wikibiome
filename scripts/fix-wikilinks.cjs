#!/usr/bin/env node
/**
 * Fix broken wikilinks caused by case/formatting mismatches.
 * Maps incorrect link text to the correct page slug.
 * Only modifies wikilinks, not body text.
 */

const fs = require('fs');
const path = require('path');

const WIKI_DIR = path.join(__dirname, '..', 'wiki');

// Map of broken wikilink text -> correct slug
const FIXES = {
  // Case mismatches — entities
  'Bacteroides': 'bacteroides',
  'Glutathione': 'glutathione',
  'Probiotics': 'probiotics',
  'Metalloestrogens': 'metalloestrogens',
  'Proteobacteria': 'proteobacteria',
  'Actinobacteria': 'actinobacteria',
  'Firmicutes': 'firmicutes',
  'Bacteroidetes': 'bacteroidetes',
  'Escherichia-coli': 'escherichia-coli',
  'Escherichia-Coli': 'escherichia-coli',
  'Pseudomonas': 'pseudomonas-aeruginosa',
  'Klebsiella': 'klebsiella-pneumoniae',
  'Haemophilus': 'haemophilus',
  'Campylobacter': 'campylobacter-jejuni',
  'Candida': 'candida-albicans',
  'Staphylococcus': 'staphylococcus-aureus',
  'Faecalibacterium': 'faecalibacterium-prausnitzii',
  'Faecalibacterium-prausnitzii': 'faecalibacterium-prausnitzii',
  'Lactoferrin': 'lactoferrin',
  'Calprotectin': 'calprotectin',
  'Metformin': 'metformin',
  'Mis-metallation': 'mis-metallation',
  'Inflammation': 'inflammation',
  'Dysbiosis': 'dysbiosis',
  'Alpha-synuclein': 'alpha-synuclein',

  // Case mismatches — concepts/conditions
  'Oxidative-stress': 'oxidative-stress',
  'Oxidative stress': 'oxidative-stress',
  'Ferroptosis': 'ferroptosis',
  'Neuroinflammation': 'neuroinflammation',
  'NF-kappa-B': 'nf-kappa-b',
  'Short-chain-fatty-acids': 'short-chain-fatty-acids',
  'Short-chain fatty acids': 'short-chain-fatty-acids',
  'Tryptophan-metabolism': 'tryptophan-metabolism',
  'Tryptophan Metabolism': 'tryptophan-metabolism',
  'Bile Acid Metabolism': 'bile-acid-metabolism',
  'Bile-acid': 'bile-acid-metabolism',
  'Gut-Brain Axis': 'gut-brain-axis',
  'Gut-brain axis': 'gut-brain-axis',

  // Formatting mismatches — spaces vs hyphens
  'gut microbiome': 'gut-microbiome',
  'gut microbiota': 'gut-microbiome',
  'gut-microbiota': 'gut-microbiome',
  'Gut microbiome': 'gut-microbiome',
  'Gut Microbiome': 'gut-microbiome',
  'bile acids': 'bile-acid-metabolism',
  'bile-acids': 'bile-acid-metabolism',
  'Bile acids': 'bile-acid-metabolism',
  'Bile Acids': 'bile-acid-metabolism',
  'short-chain fatty acids': 'short-chain-fatty-acids',
  'colon cancer': 'colorectal-cancer',
  'Mediterranean diet': 'mediterranean-diet',
  'Mediterranean Diet': 'mediterranean-diet',
  'Mendelian randomization': 'mendelian-randomization',
  'Mendelian-randomization': 'mendelian-randomization',
  'mendelian-randomization': 'mendelian-randomization',
  'oral microbiome': 'oral-microbiome',
  'Oral microbiome': 'oral-microbiome',
  'oral-microbiome': 'oral-microbiome',
  'Barretts esophagus': 'barretts-esophagus',
  "Barrett's esophagus": 'barretts-esophagus',
  'Phage therapy': 'virome',
  'phage therapy': 'virome',
  'dietary fiber': 'dietary-fiber',
  'Dietary fiber': 'dietary-fiber',
  'Dietary Fiber': 'dietary-fiber',
  'ketogenic diet': 'ketogenic-diet',
  'Ketogenic diet': 'ketogenic-diet',
  'Ketogenic-diet': 'ketogenic-diet',
  'iron-sulfur-clusters': 'iron-sulfur-clusters',
  'Fenton-chemistry': 'fenton-chemistry',
  'superoxide-dismutase': 'superoxide-dismutase',
  'antimicrobial-metals': 'antimicrobial-metals',
  'labile-metal-pool': 'labile-metal-pool',
  'metal-sensing': 'metal-sensing',
  'horizontal-gene-transfer': 'horizontal-gene-transfer',
  'mobile-genetic-elements': 'horizontal-gene-transfer',
  'metabolomics': 'metabolomics',
  'synbiotics': 'synbiotics',
  'synbiotic': 'synbiotics',
  'Synbiotics': 'synbiotics',
  'virome': 'virome',
  'bacterial-contamination-hypothesis': 'bacterial-contamination-hypothesis',
  'Bacterial-contamination-hypothesis': 'bacterial-contamination-hypothesis',
  'calcium': 'calcium',
  'Calcium': 'calcium',
  'dopamine': 'dopamine',
  'serotonin': 'serotonin',
  'kynurenine': 'kynurenine',
  'tlr4': 'tlr4',
  'TLR4': 'tlr4',
  'metformin': 'metformin',

  // Abbreviation mismatches
  'IBD': 'ibd',
  'IBS': 'ibs',
  'CKD': 'ckd',
  'cvd': 'cardiovascular-disease',
  'ckd': 'chronic-kidney-disease',
  'IBD': 'inflammatory-bowel-disease',

  // Disease name variants
  "Hashimoto's thyroiditis": 'hashimotos-thyroiditis',
  "Hashimoto's Thyroiditis": 'hashimotos-thyroiditis',
  'Hashimotos-thyroiditis': 'hashimotos-thyroiditis',
  'Crohns-disease': 'crohns-disease',
  'Parkinsons-disease': 'parkinsons-disease',
  "Alzheimer's": 'alzheimers-disease',
  'Alzheimers-disease': 'alzheimers-disease',
  'Multiple-sclerosis': 'multiple-sclerosis',
  'Type-2-diabetes': 'type-2-diabetes',
  'Cardiovascular-disease': 'cardiovascular-disease',
  'Chronic-kidney-disease': 'chronic-kidney-disease',
  'Inflammatory-bowel-disease': 'inflammatory-bowel-disease',

  // Clostridioides vs Clostridium
  'clostridium-difficile': 'clostridioides-difficile',
  'Clostridium difficile': 'clostridioides-difficile',
  'Clostridium-difficile': 'clostridioides-difficile',

  // Source slug fixes (common broken source refs)
  'kravchenko-2023-thyroid-minerals': 'kravchenko-2023-thyroid-hormones-minerals-AITD',
  'kravchenko-2023-thyroid-hormones-minerals-aitd': 'kravchenko-2023-thyroid-hormones-minerals-AITD',

  // Genus-to-species mapping for genera without genus pages
  'pseudomonas': 'pseudomonas-aeruginosa',
  'klebsiella': 'klebsiella-pneumoniae',

  // Other common mismatches
  'e.-coli': 'escherichia-coli',
  'E. coli': 'escherichia-coli',
  'E.-coli': 'escherichia-coli',
  'lps-(lipopolysaccharide)': 'proteobacteria',
  'propionate': 'propionic-acid',
  'acetate': 'short-chain-fatty-acids',
  'Butyrate': 'butyrate',
  'SCFA': 'short-chain-fatty-acids',
  'SCFAs': 'short-chain-fatty-acids',
  'SCFA-production': 'short-chain-fatty-acids',
  'LPS': 'proteobacteria',
  'FMT': 'fmt-intervention',
  'fmt': 'fmt-intervention',
  'fecal-microbiota-transplantation': 'fmt-intervention',
  'Fecal microbiota transplantation': 'fmt-intervention',
  'Fecal-microbiota-transplant': 'fmt-intervention',
  'Fecal-microbiota-transplantation': 'fmt-intervention',
};

function getAllMdFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...getAllMdFiles(fullPath));
    } else if (entry.name.endsWith('.md')) {
      results.push(fullPath);
    }
  }
  return results;
}

function fixWikilinks(content) {
  let fixed = content;
  let changeCount = 0;

  for (const [broken, correct] of Object.entries(FIXES)) {
    // Match [[broken]] or [[broken|display text]]
    const escaped = broken.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\[\\[${escaped}(\\|[^\\]]*)?\\]\\]`, 'g');

    fixed = fixed.replace(regex, (match, displayPart) => {
      // Don't fix if it's already correct
      if (match === `[[${correct}${displayPart || ''}]]`) return match;
      changeCount++;
      if (displayPart) {
        return `[[${correct}${displayPart}]]`;
      }
      return `[[${correct}]]`;
    });
  }

  return { fixed, changeCount };
}

// Run
const files = getAllMdFiles(WIKI_DIR);
let totalChanges = 0;
let filesChanged = 0;

for (const file of files) {
  // Skip templates
  if (path.basename(file).startsWith('_template')) continue;

  const content = fs.readFileSync(file, 'utf8');
  const { fixed, changeCount } = fixWikilinks(content);

  if (changeCount > 0) {
    fs.writeFileSync(file, fixed, 'utf8');
    const relPath = path.relative(WIKI_DIR, file);
    console.log(`  ${relPath}: ${changeCount} fixes`);
    totalChanges += changeCount;
    filesChanged++;
  }
}

console.log(`\nDone: ${totalChanges} wikilink fixes across ${filesChanged} files.`);
