#!/usr/bin/env node
/**
 * v4 - Fix capitalized ghosts, immune markers, taxonomic families, source refs
 */
const fs = require('fs');
const path = require('path');
const WIKI_DIR = path.join(__dirname, '..');
const DIRS = ['entities', 'concepts', 'sources', 'interventions', 'signatures', 'stops', 'analyses'];
const existingSlugs = new Set();
for (const dir of DIRS) {
  const dirPath = path.join(WIKI_DIR, dir);
  if (!fs.existsSync(dirPath)) continue;
  for (const file of fs.readdirSync(dirPath)) {
    if (file.endsWith('.md') && !file.startsWith('_')) existingSlugs.add(file.replace('.md', ''));
  }
}

const ALIASES = {
  // Capitalized disease/metal terms → existing entity slugs
  'Cadmium Toxicity': 'cadmium', 'Lead Toxicity': 'lead', 'Mercury Toxicity': 'mercury',
  'Tin Toxicity': 'tin', 'Arsenic Toxicity': 'arsenic',
  'Environmental Exposures': 'environmental-metal-exposure',
  'Gut Microbiome and Metal Exposure': 'gut-metal-microbiome',
  'Metal Bioaccumulation': 'heavy-metals', 'Metal Detoxification Mechanisms': 'heavy-metals',
  'Developmental Toxicology': 'developmental-metal-vulnerability',
  'Environmental Justice': 'environmental-metal-exposure',
  'Trace Element Deficiency': 'metal-homeostasis',
  'Contact Dermatitis': 'nickel-allergy',
  'Systemic contact dermatitis': 'nickel-allergy',
  'COVID-19': 'long-covid',

  // Immune markers/cytokines → inflammation concept
  'NF-kB': 'nf-kappa-b', 'TNF-alpha': 'inflammation', 'IL-6': 'inflammation',
  'IL-1beta': 'inflammation', 'IL-8': 'inflammation', 'IL-2': 'inflammation',
  'IL-4': 'inflammation', 'IL-5': 'inflammation', 'IL-10': 'inflammation',
  'IL-17A': 'inflammation', 'IL-22': 'inflammation', 'IL-33': 'inflammation',
  'IL-1': 'inflammation',
  'IFN-gamma': 'inflammation', 'IFN-beta': 'inflammation',
  'CRP': 'inflammation', 'hs-CRP': 'inflammation',
  'Th17': 'inflammation', 'Treg': 'inflammation', 'Tregs': 'inflammation',
  'treg': 'inflammation', 'regulatory-t-cells': 'inflammation',
  'T regulatory cells': 'inflammation', 'Foxp3': 'inflammation',
  'th17-treg-balance': 'inflammation',
  'HPA axis': 'gut-brain-axis', 'HPA-axis': 'gut-brain-axis',
  'TGF-beta': 'inflammation', 'MAPK': 'inflammation',
  'NLRP3': 'inflammation', 'PPAR-gamma': 'inflammation',
  'pd-l1': 'inflammation', 'tim-3': 'inflammation',
  'TLR2': 'toll-like-receptors', 'TLR3': 'toll-like-receptors',
  'TLR7': 'toll-like-receptors', 'TLR9': 'toll-like-receptors',
  'TLR': 'toll-like-receptors',
  'Dectin-1': 'mycobiome',
  'JAK/STAT pathway': 'inflammation',
  'NSAIDs': 'pharmacomicrobiomics', 'Aspirin': 'pharmacomicrobiomics',
  'Valproic acid': 'pharmacomicrobiomics',
  'Proton pump inhibitor': 'pharmacomicrobiomics',
  'Levothyroxine': 'gut-thyroid-axis',
  'GD': 'graves-disease',
  'NERD': 'gerd',

  // Taxonomic families/classes/orders → redirect or create-needed
  'Streptococcaceae': 'streptococcus', 'Lactobacillaceae': 'lactobacillus',
  'Lactobacillales': 'lactobacillus',
  'Bifidobacteria': 'bifidobacterium', 'Bifidobacteraceae': 'bifidobacterium',
  'Bifidobacterium longum': 'bifidobacterium', 'Bifidobacterium adolescentis': 'bifidobacterium',
  'Bifidobacterium lactis': 'bifidobacterium',
  'Lactobacillus plantarum': 'lactobacillus', 'Lactobacillus casei': 'lactobacillus',
  'Lactobacillus rhamnosus': 'lactobacillus',
  'Lactiplantibacillus plantarum': 'lactobacillus',
  'Ligilactobacillus salivarius': 'lactobacillus',
  'Lactococcus lactis': 'lactobacillus',
  'Desulfovibrionaceae': 'desulfovibrio', 'Desulfobacterota': 'desulfovibrio',
  'Erysipelotrichaceae': 'dysbiosis', 'Erysipelotrichales': 'dysbiosis',
  'Coriobacteriaceae': 'dysbiosis',
  'Acidobacteria': 'dysbiosis', 'Actinobacteriota': 'actinobacteria',
  'Actinomycetaceae': 'actinomyces', 'Actinomycetes': 'actinomyces',
  'Bacillaceae': 'bacillus', 'Bacilli': 'bacillus',
  'Clostridiaceae_1': 'clostridium', 'clostridiaceae': 'clostridium',
  'Clostridium leptum': 'clostridium', 'Clostridium cluster XVIII': 'clostridium',
  'Clostridium coccoides': 'clostridium', 'Clostridia': 'clostridia',
  'Prevotellaceae': 'prevotellaceae',
  'Veillonellaceae': 'veillonellaceae',
  'Oscillospira': 'oscillospiraceae', 'oscillospirales': 'oscillospiraceae',
  'Tenericutes': 'mollicutes',
  'Barnesiella': 'parabacteroides', 'Megamonas': 'megasphaera',
  'Enterovirus': 'viral-microbiota', 'Epstein-Barr virus': 'viral-microbiota',
  'cytomegalovirus': 'viral-microbiota', 'herpesvirus 6': 'viral-microbiota',
  'HHV-6': 'viral-microbiota', 'HPV': 'viral-microbiota', 'HSV': 'viral-microbiota',
  'EBV': 'viral-microbiota', 'parvovirus B19': 'viral-microbiota',
  'SARS-CoV-2': 'long-covid', 'Caudovirales': 'viral-microbiota',
  'Fusobacteria': 'fusobacterium-nucleatum',
  'Ruminiclostridium': 'ruminococcaceae', 'Ruminococcaceae': 'ruminococcaceae',
  'Ruminiclostridium5': 'ruminococcaceae',
  'Corynebacterium': 'corynebacterium',
  'Proteobacteriota': 'dysbiosis', 'Gammaproteobacteria': 'dysbiosis',
  'Deltaproteobacteria': 'desulfovibrio',
  'Bacteroidota': 'bacteroidales',
  'Pseudomonadaceae': 'pseudomonas-aeruginosa',
  'Pasteurellaceae': 'haemophilus', 'Pasterellaceae': 'haemophilus',
  'Verrucomicrobia': 'akkermansia-muciniphila',
  'Verrucomicrobiaceae': 'akkermansia-muciniphila',
  'Ascomycota': 'mycobiome', 'Basidiomycota': 'mycobiome',
  'Saccharomycetaceae': 'saccharomyces-cerevisiae',
  'Neisseria': 'neisseria-meningitidis',
  'Salmonella': 'salmonella',
  'Bacillus cereus': 'bacillus',
  'Haemophilus parainfluenzae': 'haemophilus',
  'Escherichia': 'escherichia-coli', 'Escherichia-Shigella': 'escherichia-coli',
  'Escherichia/Shigella': 'escherichia-coli',
  'Campylobacter concisus': 'campylobacter-jejuni',

  // Genetic/molecular
  'APOE4': 'alzheimers-disease', 'AKT1': 'metal-carcinogenesis',
  'TP53': 'metal-carcinogenesis', 'EGFR': 'metal-carcinogenesis',
  'PI3K-Akt signaling pathway': 'metal-carcinogenesis',
  'KRAS': 'metal-carcinogenesis', 'PI3K': 'metal-carcinogenesis',
  'HLA': 'autoimmunity', 'HLA-DRB1': 'autoimmunity',
  'PTPN22': 'autoimmunity', 'nod2': 'autoimmunity',
  'SLC39A8': 'metal-homeostasis', 'DMT1': 'metal-homeostasis',
  'DMT-1 transporter': 'metal-homeostasis',
  'DIO2': 'gut-thyroid-axis',
  'SHANK3': 'autism-spectrum-disorder',
  'IDO1': 'kynurenine-pathway', 'IDO': 'kynurenine-pathway',
  'TRPV1': 'inflammation',
  'DUOX2': 'oxidative-stress', 'duox2': 'oxidative-stress',
  'COG0523': 'metallochaperone',
  'NMDA-receptor': 'neuroinflammation', 'nmda-receptor': 'neuroinflammation',
  'GABA': 'gut-brain-axis', 'gaba-a-receptor': 'gut-brain-axis',
  'SERT': 'gut-brain-axis',
  'BDNF': 'gut-brain-axis', 'bdnf': 'gut-brain-axis',
  'Fur': 'gene-regulation',
  'mTOR': 'insulin-resistance',
  'GCN2K': 'insulin-resistance',
  'ARG1': 'tryptophan',
  'enos': 'cardiovascular-disease',
  'cgmp-pathway': 'cardiovascular-disease',
  'endothelial-dysfunction': 'cardiovascular-disease',
  'MACE': 'cardiovascular-disease',
  'TMA': 'tmao', 'GPCR': 'tmao',
  'LDL': 'cardiovascular-disease', 'HDL': 'cardiovascular-disease',
  'HbA1c': 'type-2-diabetes',
  'TSH': 'gut-thyroid-axis',
  'apoa1': 'cardiovascular-disease',
  'Endotoxin': 'toll-like-receptors',
  'LPS-biosynthesis': 'toll-like-receptors',

  // Metabolites/amino acids
  'Glutamine': 'tryptophan', 'glutamine': 'tryptophan',
  'Glutamate': 'tryptophan', 'glutamate': 'tryptophan',
  'Arginine': 'tryptophan', 'arginine': 'tryptophan',
  'histidine': 'tryptophan',
  'Tyrosine': 'tryptophan', 'tyrosine': 'tryptophan',
  'glycine': 'tryptophan', 'Serine': 'tryptophan', 'serine': 'tryptophan',
  'leucine': 'tryptophan', 'alanine': 'tryptophan',
  'phenylalanine': 'tryptophan', 'aspartate': 'tryptophan',
  'citrulline': 'tryptophan',
  'BCAA': 'tryptophan', 'BCAAs': 'tryptophan',
  'Propionate': 'short-chain-fatty-acids',
  'Spermidine': 'short-chain-fatty-acids',
  'Urolithins': 'polyphenols', 'Urolithin A': 'polyphenols',
  'quinolinic acid': 'kynurenine-pathway', 'xanthurenic acid': 'kynurenine-pathway',
  'melatonin': 'tryptophan',
  'hypotaurine': 'tryptophan',
  'isoaspartic-acid': 'tryptophan',
  'indolyl-3-acetic acid': 'indoles', 'indolyl lactate': 'indoles',
  '2-hydroxybutyrate': 'short-chain-fatty-acids',
  'beta-hydroxybutyrate': 'short-chain-fatty-acids',
  'HDAC-inhibition': 'short-chain-fatty-acids',
  'arachidonic acid': 'inflammation',
  'palmitic acid': 'inflammation',
  'prostaglandin': 'inflammation',
  'COX-2': 'inflammation',
  'hydrogen-sulfide': 'fermentative-metabolism',
  'hydrogen-peroxide': 'oxidative-stress',

  // Misc
  'Microplastics': 'environmental-metal-exposure',
  'PFAS': 'environmental-metal-exposure',
  'nanoparticles': 'environmental-metal-exposure',
  'particulate matter': 'environmental-metal-exposure',
  'Protein': 'tryptophan',
  'Dietary acid load': 'dietary-metal-microbiome-interactions',
  'Gluten': 'celiac-disease',
  'Chinese herbal medicine': 'pharmacomicrobiomics',
  'Acupuncture': 'pharmacomicrobiomics',
  'PTSD': 'gut-brain-axis',
  'DHEAS': 'hyperandrogenism', 'SHBG': 'hyperandrogenism',
  'luteinizing hormone': 'hyperandrogenism',
  'luteinizing hormone (LH)': 'hyperandrogenism',
  'hormonal therapy': 'estrobolome',
  'adenomyosis': 'endometriosis',
  'uterine leiomyomas': 'endometriosis',
  'uterine-fibroids': 'endometriosis',
  'osteoporosis': 'chronic-kidney-disease',
  'osteoarthritis': 'rheumatoid-arthritis',
  'bone metabolism': 'chronic-kidney-disease',
  'skin diseases': 'autoimmunity',
  'cachexia': 'inflammation',
  'Wilson disease': 'copper',
  'hemochromatosis': 'iron',
  'anemia': 'iron',
  'NHANES': 'environmental-metal-exposure',
  'Warburg effect': 'acidic-microenvironment',
  'prepulse-inhibition': 'schizophrenia',
  'neuropsychiatric disorders': 'gut-brain-axis',
  'autism spectrum disorders': 'autism-spectrum-disorder',
  'mammary gland': 'breast-cancer',
  'Chronic pancreatitis': 'pancreatitis',
  'Gemcitabine': 'pancreatic-cancer',
  'Neuromelanin': 'parkinsons-disease',
  'late-onset-Alzheimers-disease': 'alzheimers-disease',
  'BBB-dysfunction': 'blood-brain-barrier',
  'Myelin-basic-protein': 'multiple-sclerosis',
  'experimental-autoimmune-encephalomyelitis': 'multiple-sclerosis',
  'optic-neuritis': 'multiple-sclerosis',
  'Saturated-fat': 'dietary-metal-microbiome-interactions',
  'PUFA': 'dietary-metal-microbiome-interactions', 'PUFAs': 'dietary-metal-microbiome-interactions',
  'omega-3': 'dietary-metal-microbiome-interactions',
  'omega-3-fatty-acids': 'dietary-metal-microbiome-interactions',
  'folate': 'dietary-metal-microbiome-interactions',
  'riboflavin': 'dietary-metal-microbiome-interactions',
  'biotin': 'dietary-metal-microbiome-interactions',
  'vitamin-b6': 'dietary-metal-microbiome-interactions',
  'Vitamin-A': 'dietary-metal-microbiome-interactions',
  'fat intake': 'dietary-metal-microbiome-interactions',
  'dietary fat': 'dietary-metal-microbiome-interactions',
  'glycemic index': 'insulin-resistance',
  'Glycemic load': 'insulin-resistance',
  'Paleolithic-diet': 'mediterranean-diet',
  'vegetarian-diet': 'mediterranean-diet',
  'low-carbohydrate diet': 'low-carbohydrate-diet',
  'high-fiber diet': 'high-fiber-diet',
  'Microbial translocation': 'intestinal-permeability',
  'gut-transit-time': 'dysbiosis',
  'animal-model': 'dysbiosis',
  'ergothioneine': 'oxidative-stress',
  'thioredoxin reductase': 'selenium',
  'thioredoxin reductases': 'selenium',
  'selenoprotein-synthesis': 'selenium',
  'bioavailability': 'metal-homeostasis',
  'Bioaccessibility': 'metal-homeostasis',
  'bioremediation': 'environmental-metal-exposure',
  'metabolic-engineering': 'gene-regulation',
  'ocean-biogeochemistry': 'environmental-metal-exposure',
  'radiation-resistance': 'antimicrobial-resistance',
  'wildlife ecotoxicology': 'environmental-metal-exposure',
  'food safety regulation': 'environmental-metal-exposure',
  'silicon': 'environmental-metal-exposure',
  'rare-earth-elements': 'environmental-metal-exposure',
  'cesium': 'environmental-metal-exposure',
  'lithium': 'environmental-metal-exposure',
  'lithium-ion-battery': 'environmental-metal-exposure',
  'vanadium': 'environmental-metal-exposure',
  'tungsten': 'environmental-metal-exposure',
  'Tungsten': 'environmental-metal-exposure',
  'wikilinks': 'dysbiosis', // meta-reference, just fix
  'condition-name': 'dysbiosis', // template placeholder
};

function findTarget(ghost) {
  if (ALIASES[ghost] && existingSlugs.has(ALIASES[ghost])) return ALIASES[ghost];
  const lower = ghost.toLowerCase();
  const hyphenated = lower.replace(/\s+/g, '-').replace(/[()'"]/g, '');
  if (existingSlugs.has(hyphenated)) return hyphenated;
  if (ALIASES[hyphenated] && existingSlugs.has(ALIASES[hyphenated])) return ALIASES[hyphenated];
  if (hyphenated.endsWith('s') && existingSlugs.has(hyphenated.slice(0, -1))) return hyphenated.slice(0, -1);
  // Source ref
  const m = ghost.match(/^([A-Z][a-z]+)\s+(\d{4})/);
  if (m) { const p = `${m[1].toLowerCase()}-${m[2]}`; for (const s of existingSlugs) if (s.startsWith(p)) return s; }
  const m2 = ghost.match(/^([A-Z][a-z]+)\s+et\s+al/);
  if (m2) { const p = m2[1].toLowerCase(); for (const s of existingSlugs) if (s.startsWith(p+'-')) return s; }
  // Broken wikilink starting with [
  if (ghost.startsWith('[')) {
    const clean = ghost.replace(/^\[+/, '');
    if (existingSlugs.has(clean)) return clean;
  }
  return null;
}

let totalFixes = 0, filesChanged = 0;
const stillMissing = new Map();

for (const dir of DIRS) {
  const dirPath = path.join(WIKI_DIR, dir);
  if (!fs.existsSync(dirPath)) continue;
  for (const file of fs.readdirSync(dirPath).filter(f => f.endsWith('.md') && !f.startsWith('_'))) {
    const filepath = path.join(dirPath, file);
    let content = fs.readFileSync(filepath, 'utf8');
    const regex = /\[\[([^\]|]+)(\|[^\]]+)?\]\]/g;
    let match;
    const replacements = [];
    while ((match = regex.exec(content)) !== null) {
      const slug = match[1], display = match[2] || '', fullMatch = match[0];
      if (existingSlugs.has(slug)) continue;
      const target = findTarget(slug);
      if (target && existingSlugs.has(target) && target !== slug) {
        replacements.push({ from: fullMatch, to: `[[${target}|${slug}]]` });
      } else {
        stillMissing.set(slug, (stillMissing.get(slug) || 0) + 1);
      }
    }
    if (replacements.length > 0) {
      for (const { from, to } of replacements) content = content.split(from).join(to);
      fs.writeFileSync(filepath, content, 'utf8');
      totalFixes += replacements.length;
      filesChanged++;
    }
  }
}

console.log(`v4 fixes: ${totalFixes} links in ${filesChanged} files. Remaining: ${stillMissing.size} ghosts`);
const sorted = [...stillMissing.entries()].sort((a, b) => b[1] - a[1]);
console.log('\n=== Still missing (top 30) ===');
for (const [slug, count] of sorted.slice(0, 30)) console.log(`${count}\t${slug}`);
console.log(`\n... ${sorted.length} total remaining`);
