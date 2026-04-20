#!/usr/bin/env node
/**
 * v5 - Final sweep: fix ALL remaining 227 ghosts
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
  // Direct slug fixes
  'barrier-dysfunction': 'intestinal-permeability',
  'irritable-bowel-syndrome': 'ibs',
  'serratia': 'serratia-marcescens',
  'primitive-9': 'hypoxia',
  'primitive-7': 'estrobolome',
  'primitive-6': 'functional-shielding',
  'primitive-4': 'metal-dependent-virulence',
  'primitive-3': 'mis-metallation',
  'gardnerella-vaginalis': 'gardnerella',
  'ketogenic-diet-ms': 'ketogenic-diet',
  'b-cell-depletion-therapy-ms': 'autoimmunity',
  'b-cell-depletion-therapy': 'autoimmunity',
  'wikilinks': null, // remove
  'vulvovaginitis-recurrent': 'bacterial-vaginosis',
  'vitamin-d-probiotic-schizophrenia': 'vitamin-d-supplementation',
  'van-goitsenhoven-2020-microbiome-antibiotics-autoimmune': 'antimicrobial-resistance',
  'ureg': 'urease', 'uref': 'urease', 'uree': 'urease', 'ured': 'urease', 'nixa': 'nickel-transporters',
  'tudca': 'bile-acid-metabolism',
  'tubal-infertility-signature': 'female-infertility',
  'tubal-infertility': 'female-infertility',
  'trans-anethole': 'polyphenols',
  'toxic-metals-ckd-systematic-review': 'chronic-kidney-disease',
  'thyroid-gut-microbiome-brain axis': 'gut-thyroid-axis',
  'thymoquinone': 'polyphenols',
  'target-eco-niche-shared-with-crc': 'colorectal-cancer',
  't2d-infertility-signature': 'type-2-diabetes',
  'syzygium': 'polyphenols', 'myrtaceae': 'polyphenols',
  'squalene': 'polyphenols',
  'spices': 'polyphenols',
  'shared-pcos-endometriosis-signature': 'pcos',
  'saresella-2017-diet-modulation-microbiome-ms-pilot': 'multiple-sclerosis',
  'rumminococcaceae': 'ruminococcaceae',
  'roseburia-spp': 'roseburia',
  'romboutsia': 'dysbiosis',
  'ralstonia': 'dysbiosis',
  'rabeprazole': 'pharmacomicrobiomics',
  'probiotics-with-ppi-gerd': 'probiotics',
  'primary-sclerosing-cholangitis': 'cholestasis',
  'primary-biliary-cholangitis': 'cholestasis',
  'poultry': 'dietary-metal-microbiome-interactions',
  'pleurotus-ostreatus': 'mycobiome',
  'phgg-partially-hydrolyzed-guar-gum-t2d-infertility': 'prebiotics',
  'phascolarctobacterium-succinatutens': 'short-chain-fatty-acids',
  'peptococcaceae': 'clostridium',
  'pediatric-crohns': 'crohns-disease',
  'pcos-metformin-liraglutide-combination': 'pcos',
  'pcos-diagnostic-metabolome-model': 'pcos',
  'pasteurellaceae': 'haemophilus',
  'oregano': 'polyphenols',
  'nutritional-ketosis': 'ketogenic-diet',
  'non-thyroidal illness syndrome': 'gut-thyroid-axis',
  'nigella-sativa': 'polyphenols', 'black-seed': 'polyphenols',
  'nickel-obesity': 'nickel-allergy',
  'nickel-dependent enzymes': 'metal-dependent-virulence',
  'nickel-allergic-contact-mucositis': 'nickel-allergy',
  'neurosteroids': 'gut-brain-axis',
  'neurocognitive-assessment': 'gut-brain-axis',
  'neisseria-gonorrhoeae': 'pelvic-inflammatory-disease',
  'muribaculaceae': 'prebiotics',
  'multi-strain-synbiotic-schizophrenia': 'probiotics',
  'mucor': 'mycobiome',
  'mortierellomycota': 'mortierella',
  'microbacterium-lacus': 'dysbiosis',
  'metals-as-selective-pressures': 'heavy-metals',
  'metal-dependencies': 'metal-dependent-virulence',
  'metal interactions': 'metal-homeostasis',
  'menstrual-migraine': 'migraine',
  'malt-lymphoma': 'helicobacter-pylori',
  'listeria-monocytogenes': 'dysbiosis',
  'leukocyte count': 'inflammation',
  'leaky-gut': 'intestinal-permeability',
  'leafy-greens': 'dietary-metal-microbiome-interactions',
  'lactoferrin-probiotic-combination': 'lactoferrin',
  'lactobacillus-crispatus-probiotic': 'lactobacillus-crispatus',
  'lactobacillus-casei-t2d': 'lactobacillus',
  'lactobacillus-bulgaricus': 'lactobacillus',
  'karen-brain-primitives': 'heavy-metals',
  'iodothyronine deiodinases': 'selenium',
  'infertility': 'female-infertility',
  'hypothalamic-pituitary-ovarian axis': 'gut-gonadal-axis',
  'hyperinsulinemia': 'insulin-resistance',
  'hydrogen-sulfide': 'fermentative-metabolism',
  'holophagae': 'dysbiosis',
  'heavy-metals-infertility-nhanes': 'female-infertility',
  'gut-skin-axis': 'autoimmunity',
  'gut-liver-axis': 'non-alcoholic-fatty-liver-disease',
  'glp-1-agonist-reproductive-function': 'insulin-resistance',
  'fusobacteriaceae': 'fusobacterium-nucleatum',
  'frontal cortex': 'neuroinflammation',
  'fertility-lead-cadmium': 'female-infertility',
  'fennel': 'polyphenols',
  'faecalibacterium-praushitzii': 'faecalibacterium-prausnitzii',
  'extibacter': 'dysbiosis',
  'exclusive-enteral-nutrition': 'prebiotics',
  'epithelial-to-mesenchymal-transition': 'epithelial-mesenchymal-transition',
  'epithelial-mesenchymal transition': 'epithelial-mesenchymal-transition',
  'environmental health disparities': 'environmental-metal-exposure',
  'enterobactin': 'siderophores',
  'endocrine-disruptor': 'endocrine-disruptors',
  'eisenbergiella': 'dysbiosis',
  'eggs': 'dietary-metal-microbiome-interactions',
  'drug-metabolism-variability': 'pharmacomicrobiomics',
  'dithiocarbamate': 'metal-chelation-therapy',
  'disulfiram': 'pharmacomicrobiomics',
  'diabetic-wounds': 'type-2-diabetes',
  'desulfomonas': 'desulfovibrio',
  'deinococcus-thermus': 'deinococcus',
  'deferasirox': 'metal-chelation-therapy',
  'defensins': 'nutritional-immunity',
  'coronary-heart-disease': 'cardiovascular-disease',
  'coal-combustion': 'environmental-metal-exposure',
  'clostridium-cluster-iv': 'clostridium',
  'chronic-wounds': 'biofilm',
  'chronic-sinusitis': 'biofilm',
  'chronic-pelvic-inflammatory-disease': 'pelvic-inflammatory-disease',
  'chronic kidney disease of unknown etiology': 'chronic-kidney-disease',
  'chitinase': 'mycobiome',
  'chili-pepper': 'polyphenols',
  'caryophyllene-oxide': 'polyphenols',
  'carbonate': 'metal-speciation',
  'candidiasis': 'candida-albicans',
  'candida-parapsilosis': 'candida-albicans',
  'cadmium-gut-dysbiosis': 'cadmium',
  'butyrivibrio': 'short-chain-fatty-acids',
  'bacteroidales': 'bacteroides-fragilis',
  'bacterial-vaginosis-signature': 'bacterial-vaginosis',
  'atmospheric-deposition': 'environmental-metal-exposure',
  'association-low-level-heavy-metal-ckd': 'chronic-kidney-disease',
  'asca': 'crohns-disease',
  'aneuploidy': 'metal-carcinogenesis',
  'anaerotaenia': 'dysbiosis',
  'anaerobacillus': 'dysbiosis',
  'allopregnanolone': 'gut-brain-axis',
  'aging': 'oxidative-stress',
  'aerobactin': 'siderophores',
  'adenomyosis-signature': 'endometriosis',
  // Capitalized taxa → existing pages
  'Zygosaccharomyces': 'mycobiome', 'Wallemia': 'mycobiome',
  'Victivallis': 'dysbiosis', 'Trichomonas vaginalis': 'bacterial-vaginosis',
  'TonB-dependent-transporter': 'siderophores',
  'Th1': 'inflammation', 'TCA-cycle': 'fermentative-metabolism',
  'T3': 'gut-thyroid-axis', 'LT4': 'gut-thyroid-axis',
  'Streptomyces': 'actinomyces', 'Sphingomonas': 'dysbiosis',
  'Solobacterium moorei': 'dysbiosis',
  'Sellimonas': 'dysbiosis', 'Sarcina': 'dysbiosis',
  'Saccharomycopsis': 'mycobiome', 'Ruminococcus_2': 'ruminococcaceae',
  'Romboutsia': 'dysbiosis', 'Rhodotorula': 'mycobiome',
  'Prevotella pallens': 'prevotella', 'Penicillium': 'mycobiome',
  'PLP': 'tryptophan',
  'Oxalobacteraceae': 'dysbiosis', 'Oxalobacter formigenes': 'oxalates',
  'Ornithinimicrobium': 'dysbiosis', 'Oribacterium': 'dysbiosis',
  'Neurofilament light chain': 'neuroinflammation',
  'Mitsuokella': 'dysbiosis', 'Methylomirabilota': 'dysbiosis',
  'Massilioclostridium coli': 'clostridium',
  'Lyme-disease': 'borrelia',
  'Lacrimispora amygdalina': 'clostridium',
  'Lachnospiraceae_NK4A136_group': 'lachnospiraceae',
  'Khan & Wang 2020': 'khan-2020-environmental-exposures-autoimmune-gut-microbiome',
  'Intestinal Barrier Function': 'intestinal-permeability',
  'Hydrogenedentes': 'dysbiosis', 'Holdemania': 'dysbiosis',
  'Hepatitis C virus': 'viral-microbiota',
  'Halobacteria': 'methanobrevibacter-smithii',
  'Gut microbiota': 'dysbiosis', 'Gemmiger': 'dysbiosis',
  'G-quadruplexes': 'gene-regulation',
  'Eubacterium rectale group': 'eubacterium-rectale',
  'Eubacterium dolchum': 'dysbiosis',
  'Eubacterium coprostanoligenes': 'bile-acid-metabolism',
  'Erysipelotrichaceae_UCG-003': 'dysbiosis',
  'Enterococcus hirae': 'enterococcus',
  'Enterobacter hormaechei': 'enterobacter-cloacae',
  'Elusimicrobia': 'dysbiosis', 'ERa': 'metalloestrogens',
  'Dorea formicigenerans': 'dorea',
  'Desulfosporosinus': 'desulfovibrio',
  'Cystobasidium': 'mycobiome', 'Cutaneotrichosporon': 'mycobiome',
  'Clostridium estertheticum': 'clostridium',
  'Chryseobacterium indologenes': 'dysbiosis',
  'Chloroflexi': 'dysbiosis', 'Catenibacterium': 'dysbiosis',
  'Candida albicans': 'candida-albicans',
  'Butyrivibrio': 'short-chain-fatty-acids',
  'BraMa-Ni diet': 'low-nickel-diet',
  'Blautia hansenii': 'blautia',
  'Bacteroidota': 'bacteroides-fragilis', 'Bacteroidia': 'bacteroides-fragilis',
  'B. longum': 'bifidobacterium-longum',
  'B. breve': 'bifidobacterium', 'B. angulatum': 'bifidobacterium',
  'Asthma': 'inflammation',
  'Anaerotstipes': 'anaerostipes', 'Anaerobacillus': 'dysbiosis',
  'AhR-signaling': 'ahr', 'AhR ligands': 'ahr',
  'Haag & Siegmund 2015': 'haag-2015-intestinal-microbiota-innate-immunity-crohns',
  'Serrano Fernandez et al. 2023': 'serrano-fernandez-2023-high-fiber-diet-crohns-meta-analysis',
};

// Source ref patterns - try to match
function findSourceSlug(ghost) {
  // Known source slugs that don't match pattern
  const m = ghost.match(/^([a-z]+-\d{4})/);
  if (m) {
    const prefix = m[1];
    for (const slug of existingSlugs) {
      if (slug.startsWith(prefix)) return slug;
    }
  }
  return null;
}

function findTarget(ghost) {
  if (ALIASES[ghost] !== undefined) {
    if (ALIASES[ghost] === null) return '__REMOVE__';
    if (existingSlugs.has(ALIASES[ghost])) return ALIASES[ghost];
  }
  // Try lowercase hyphenated
  const hyph = ghost.toLowerCase().replace(/\s+/g, '-').replace(/[()'"&]/g, '');
  if (existingSlugs.has(hyph)) return hyph;
  // Try source slug match
  const src = findSourceSlug(ghost);
  if (src) return src;
  // Try path-style (signatures/xxx or interventions/xxx)
  if (ghost.includes('/')) {
    const parts = ghost.split('/');
    const slug = parts[parts.length - 1];
    if (existingSlugs.has(slug)) return slug;
  }
  return null;
}

let totalFixes = 0, filesChanged = 0, removed = 0;
const stillMissing = new Map();

for (const dir of DIRS) {
  const dirPath = path.join(WIKI_DIR, dir);
  if (!fs.existsSync(dirPath)) continue;
  for (const file of fs.readdirSync(dirPath).filter(f => f.endsWith('.md') && !f.startsWith('_'))) {
    const filepath = path.join(dirPath, file);
    let content = fs.readFileSync(filepath, 'utf8');
    let origContent = content;
    const regex = /\[\[([^\]|]+)(\|[^\]]+)?\]\]/g;
    let match;

    while ((match = regex.exec(origContent)) !== null) {
      const slug = match[1], display = match[2] || '', fullMatch = match[0];
      if (existingSlugs.has(slug)) continue;
      const target = findTarget(slug);
      if (target === '__REMOVE__') {
        content = content.split(fullMatch).join(display ? display.slice(1) : slug);
        removed++;
        totalFixes++;
      } else if (target && existingSlugs.has(target) && target !== slug) {
        const displayText = display || `|${slug}`;
        content = content.split(fullMatch).join(`[[${target}${displayText}]]`);
        totalFixes++;
      } else {
        stillMissing.set(slug, (stillMissing.get(slug) || 0) + 1);
      }
    }

    if (content !== origContent) {
      fs.writeFileSync(filepath, content, 'utf8');
      filesChanged++;
    }
  }
}

console.log(`v5 fixes: ${totalFixes} links (${removed} removed) in ${filesChanged} files. Remaining: ${stillMissing.size} ghosts`);
const sorted = [...stillMissing.entries()].sort((a, b) => b[1] - a[1]);
if (sorted.length > 0) {
  console.log('\n=== Remaining ghosts ===');
  for (const [slug, count] of sorted) console.log(`${count}\t${slug}`);
}
