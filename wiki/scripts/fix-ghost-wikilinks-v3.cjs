#!/usr/bin/env node
/**
 * v3 - Aggressive ghost cleanup:
 * 1. Generic phrase wikilinks → existing concept/entity pages
 * 2. Source reference format → source slug resolution
 * 3. Remaining case/space normalization
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
    if (file.endsWith('.md') && !file.startsWith('_')) {
      existingSlugs.add(file.replace('.md', ''));
    }
  }
}

// Comprehensive alias map
const ALIASES = {
  // Generic microbiome phrases → existing pages
  'microbiome': 'dysbiosis',
  'microbiota': 'dysbiosis',
  'microbiome composition': 'dysbiosis',
  'microbiome-composition': 'dysbiosis',
  'Microbiome composition': 'dysbiosis',
  'microbiome and disease progression': 'dysbiosis',
  'microbiome-and-disease-progression': 'dysbiosis',
  'microbiome and inflammation': 'inflammation',
  'microbiome-and-inflammation': 'inflammation',
  'microbiome and immune system': 'inflammation',
  'microbiome-and-immune-system': 'inflammation',
  'microbiome-host interactions': 'gut-metal-microbiome',
  'microbiome-host-interactions': 'gut-metal-microbiome',
  'Microbiome-host interactions': 'gut-metal-microbiome',
  'microbiome-targeted therapy': 'probiotics',
  'microbiome-targeted-therapy': 'probiotics',
  'microbiome-modulating drugs': 'pharmacomicrobiomics',
  'microbiome-modulating-drugs': 'pharmacomicrobiomics',
  'microbiome signature': 'microbial-biomarkers',
  'microbiome-signature': 'microbial-biomarkers',
  'microbiome diet': 'dietary-metal-microbiome-interactions',
  'microbiome-diet': 'dietary-metal-microbiome-interactions',
  'microbiome review': 'dysbiosis',
  'microbiome causality': 'dysbiosis',
  'microbiome-derived metabolites': 'short-chain-fatty-acids',
  'microbiome-derived-metabolites': 'short-chain-fatty-acids',
  'microbial metabolites': 'short-chain-fatty-acids',
  'microbial-metabolites': 'short-chain-fatty-acids',
  'Microbial metabolites': 'short-chain-fatty-acids',
  'microbial metabolites as therapeutics': 'pharmacomicrobiomics',
  'metabolic pathways': 'fermentative-metabolism',
  'metabolic-pathways': 'fermentative-metabolism',
  'metabolites': 'short-chain-fatty-acids',
  'functional microbiome shifts': 'dysbiosis',
  'functional-microbiome-shifts': 'dysbiosis',
  'causal microbiome relationships': 'dysbiosis',
  'causal-microbiome-relationships': 'dysbiosis',
  'microbial biomarkers': 'microbial-biomarkers',
  'microbial diversity': 'dysbiosis',
  'gut dysbiosis': 'dysbiosis',
  'gut-dysbiosis': 'dysbiosis',
  'Gut dysbiosis': 'dysbiosis',
  'gut microbiota dysbiosis': 'dysbiosis',

  // Metal/mechanism redirects
  'metal-disease-matrix': 'metal-disease-matrix', // exists in analyses/
  'dietary-metal-paradoxes': 'dietary-metal-paradoxes', // exists in analyses/
  'metals and mental health': 'heavy-metal-neurotoxicity',
  'metals-and-mental-health': 'heavy-metal-neurotoxicity',
  'heavy metals': 'heavy-metals',
  'heavy metal': 'heavy-metals',
  'heavy metals and gut microbiome': 'gut-metal-microbiome',
  'heavy-metals-and-gut-microbiome': 'gut-metal-microbiome',
  'heavy metals and metabolic disease': 'gut-metal-microbiome',
  'metal toxicity mechanisms': 'heavy-metals',
  'metal-toxicology': 'heavy-metals',
  'metal toxicology': 'heavy-metals',
  'metal dyshomeostasis': 'dyshomeostasis',
  'metal-dyshomeostasis': 'dyshomeostasis',
  'metal-exposure': 'environmental-metal-exposure',
  'metal-chelation': 'metal-chelation-therapy',
  'chelation therapy': 'metal-chelation-therapy',
  'chelation-therapy': 'metal-chelation-therapy',
  'Chelation-therapy': 'metal-chelation-therapy',
  'trace element supplementation': 'metal-homeostasis',
  'trace metals': 'metal-homeostasis',
  'essential elements': 'metal-homeostasis',
  'environmental pollutants': 'environmental-metal-exposure',
  'environmental pollution': 'environmental-metal-exposure',
  'air pollution': 'environmental-metal-exposure',
  'air-pollution': 'environmental-metal-exposure',
  'soil contamination': 'environmental-metal-exposure',
  'soil-contamination': 'environmental-metal-exposure',
  'environmental justice': 'environmental-metal-exposure',
  'environmental-justice': 'environmental-metal-exposure',
  'environmental exposure pathways': 'environmental-metal-exposure',
  'environmental-risk-factors': 'environmental-metal-exposure',
  'dietary intervention': 'dietary-metal-microbiome-interactions',
  'dietary-intervention': 'dietary-metal-microbiome-interactions',
  'dietary-interventions': 'dietary-metal-microbiome-interactions',
  'dietary heavy metal exposure': 'dietary-metal-microbiome-interactions',
  'diet-heavy-metal-exposure': 'dietary-metal-microbiome-interactions',
  'dietary-metal-exposure': 'dietary-metal-microbiome-interactions',

  // Specific entity redirects
  'siderophore': 'siderophores',
  'nickel toxicology': 'nickel-allergy',
  'nickel toxicity': 'nickel-allergy',
  'nickel-toxicity': 'nickel-allergy',
  'nickel-toxicology': 'nickel-allergy',
  'nickel allergic contact dermatitis': 'nickel-allergy',
  'nickel gut microbiome interactions': 'nickel-allergy',
  'nickel-gut-microbiome-interactions': 'nickel-allergy',
  'nickel in food': 'dietary-nickel-exposure',
  'nickel dietary exposure': 'dietary-nickel-exposure',
  'nickel exposure limits': 'dietary-nickel-exposure',
  'oral nickel challenge': 'nickel-allergy',
  'oral-nickel-challenge': 'nickel-allergy',
  'systemic nickel allergy syndrome': 'nickel-allergy',
  'systemic-nickel-allergy-syndrome': 'nickel-allergy',
  'SNAS': 'nickel-allergy',
  'nickel-free diet': 'low-nickel-diet',
  'low-nickel diet': 'low-nickel-diet',
  'nickel carcinogenesis': 'metal-carcinogenesis',
  'occupational nickel exposure': 'environmental-metal-exposure',
  'occupational-exposure': 'environmental-metal-exposure',
  'occupational metal exposure': 'environmental-metal-exposure',
  'occupational metal co-exposures': 'environmental-metal-exposure',

  // Disease/condition aliases
  'irritable-bowel-syndrome': 'ibs',
  'polycystic-ovary-syndrome': 'pcos',
  'coronary artery disease': 'cardiovascular-disease',
  'coronary-artery-disease': 'cardiovascular-disease',
  'coronary heart disease': 'cardiovascular-disease',
  'myocardial infarction': 'cardiovascular-disease',
  'myocardial-infarction': 'cardiovascular-disease',
  'heart failure': 'cardiovascular-disease',
  'heart-failure': 'cardiovascular-disease',
  'ischemic stroke': 'cardiovascular-disease',
  'acute coronary syndrome': 'cardiovascular-disease',
  'premenstrual dysphoric disorder': 'pmdd',
  'premenstrual syndrome': 'pmdd',
  'premenstrual-syndrome': 'pmdd',
  'menstrual disorders': 'dysmenorrhea',
  'menstrual-disorders': 'dysmenorrhea',
  'hypothyroidism': 'hashimotos-thyroiditis',
  'thyroid disorders': 'hashimotos-thyroiditis',
  'thyroid-cancer': 'hashimotos-thyroiditis',
  'thyroid cancer': 'hashimotos-thyroiditis',
  'thyroid nodules': 'hashimotos-thyroiditis',
  'thyroid function': 'gut-thyroid-axis',
  'thyroid hormone': 'gut-thyroid-axis',
  'thyroid-hormone': 'gut-thyroid-axis',
  'thyroid-hormone-metabolism': 'gut-thyroid-axis',
  'thyroid peroxidase': 'thyroid-autoimmunity',
  'thyroid-peroxidase': 'thyroid-autoimmunity',
  'autoimmune thyroiditis': 'thyroid-autoimmunity',
  'autoimmune-thyroiditis': 'thyroid-autoimmunity',
  'autoimmune thyroid disease': 'thyroid-autoimmunity',
  'autoimmune thyroid diseases': 'thyroid-autoimmunity',
  'autoimmune-thyroid-diseases': 'thyroid-autoimmunity',
  'Autoimmune thyroid diseases': 'thyroid-autoimmunity',
  'methimazole': 'thyroid-autoimmunity',
  'methimazole': 'thyroid-autoimmunity',
  'autoimmune': 'autoimmunity',
  'autoimmune disease': 'autoimmunity',
  'autoimmune-disease': 'autoimmunity',
  'immune-response': 'inflammation',
  'immune response': 'inflammation',
  'immune dysfunction': 'inflammation',
  'immune-dysfunction': 'inflammation',
  'immune dysregulation': 'inflammation',
  'immune-dysregulation': 'inflammation',
  'immune activation': 'inflammation',
  'immune-modulation': 'inflammation',
  'inflammatory cytokines': 'inflammation',
  'inflammatory markers': 'inflammation',
  'inflammatory pathways': 'inflammation',
  'inflammatory response': 'inflammation',
  'cytokine': 'inflammation',
  'cytokines': 'inflammation',
  'cancer': 'metal-carcinogenesis',
  'carcinogenesis': 'metal-carcinogenesis',
  'tumor microbiome': 'metal-carcinogenesis',
  'tumor microenvironment': 'metal-carcinogenesis',
  'tumor-microbiome': 'metal-carcinogenesis',
  'stroma': 'metal-carcinogenesis',
  'bladder-cancer': 'metal-carcinogenesis',
  'lung-cancer': 'metal-carcinogenesis',
  'prostate-cancer': 'metal-carcinogenesis',
  'esophageal adenocarcinoma': 'barretts-esophagus',
  'esophageal-adenocarcinoma': 'barretts-esophagus',
  'esophageal inflammation': 'gerd',
  'esophagitis': 'gerd',
  'hiatal hernia': 'gerd',
  'diabetic-kidney-disease': 'chronic-kidney-disease',
  'chronic-fatigue-syndrome': 'fibromyalgia',
  'psoriasis': 'autoimmunity',
  'bipolar-disorder': 'schizophrenia',

  // Microbe redirects
  'candida': 'candida-albicans',
  'faecalibacterium': 'faecalibacterium-prausnitzii',
  'Faecalibacterium prausnitizii': 'faecalibacterium-prausnitzii',
  'staphylococcus': 'staphylococcus-aureus',
  'helicobacter': 'helicobacter-pylori',
  'pseudomonas': 'pseudomonas-aeruginosa',
  'campylobacter': 'campylobacter-jejuni',
  'citrobacter': 'citrobacter',
  'enterobacter': 'enterobacter',
  'Corynebacterium': 'corynebacterium',
  'corynebacterium': 'corynebacterium',
  'serratia': 'serratia',
  'ralstonia': 'ralstonia',
  'mucor': 'mucor',
  'alternaria': 'alternaria',
  'clostridioides-difficile-infection': 'clostridioides-difficile',
  'clostridia': 'clostridia',
  'clostridiales': 'clostridiales',
  'bacteroidales': 'bacteroidales',
  'mollicutes': 'mollicutes',
  'betaproteobacteria': 'betaproteobacteria',

  // Concept redirects
  'scfa': 'short-chain-fatty-acids',
  'scfas': 'short-chain-fatty-acids',
  'short-chain fatty acid': 'short-chain-fatty-acids',
  'SCFA': 'short-chain-fatty-acids',
  'fatty acids': 'short-chain-fatty-acids',
  'fatty-acids': 'short-chain-fatty-acids',
  'Fatty acids': 'short-chain-fatty-acids',
  'amino acids': 'tryptophan',
  'amino-acids': 'tryptophan',
  'amino acid': 'tryptophan',
  'amino-acid': 'tryptophan',
  'Amino acids': 'tryptophan',
  'Amino-acid': 'tryptophan',
  'amino-acid-metabolism': 'tryptophan',
  'polyphenol': 'polyphenols',
  'Polyphenols': 'polyphenols',
  'dietary-polyphenols': 'polyphenols',
  'Dietary polyphenols': 'polyphenols',
  'curcumin': 'polyphenols',
  'resveratrol': 'polyphenols',
  'sulforaphane': 'polyphenols',
  'berberine': 'polyphenols',
  'Berberine': 'polyphenols',
  'statins': 'pharmacomicrobiomics',
  'statin': 'pharmacomicrobiomics',
  'Statins': 'pharmacomicrobiomics',
  'antidepressants': 'pharmacomicrobiomics',
  'Antidepressants': 'pharmacomicrobiomics',
  'immunotherapy': 'pharmacomicrobiomics',
  'drug repurposing': 'pharmacomicrobiomics',
  'drug-repurposing': 'pharmacomicrobiomics',
  'Drug repurposing': 'pharmacomicrobiomics',
  'metabokines': 'short-chain-fatty-acids',
  'sRNA': 'gene-regulation',
  'riboswitch': 'gene-regulation',
  'ribosome': 'gene-regulation',
  'efflux-pumps': 'antimicrobial-resistance',
  'Efflux pumps': 'antimicrobial-resistance',
  'antibiotic resistance genes': 'antimicrobial-resistance',
  'antibiotics': 'antimicrobial-resistance',
  'Antibiotics': 'antimicrobial-resistance',
  'antibiotic': 'antimicrobial-resistance',
  'antibiotic-resistance': 'antimicrobial-resistance',
  'antibiotic-resistance-genes': 'antimicrobial-resistance',
  'cefiderocol': 'antimicrobial-resistance',
  'rifaximin': 'antimicrobial-resistance',
  'colonization-resistance': 'probiotics',
  'colonization resistance': 'probiotics',
  'probiotic': 'probiotics',
  'Probiotic': 'probiotics',
  'fecal microbiota transplant': 'fecal-microbiota-transplant',
  'Fecal Microbiota Transplantation': 'fecal-microbiota-transplant',
  'FMT': 'fecal-microbiota-transplant',
  'fermented foods': 'prebiotics',
  'Fermented foods': 'prebiotics',
  'fermented-foods': 'prebiotics',
  'hmos': 'prebiotics',
  'fructo-oligosaccharides': 'prebiotics',
  'leaky gut': 'intestinal-permeability',
  'leaky-gut': 'intestinal-permeability',
  'gut-barrier': 'intestinal-permeability',
  'gut barrier': 'intestinal-permeability',
  'gut barrier function': 'intestinal-permeability',
  'gut-barrier-dysfunction': 'intestinal-permeability',
  'barrier-integrity': 'intestinal-permeability',
  'intestinal barrier': 'intestinal-permeability',
  'intestinal-barrier': 'intestinal-permeability',
  'mucosal-barrier': 'intestinal-permeability',
  'gut-permeability': 'intestinal-permeability',
  'mucin': 'intestinal-permeability',
  'mucus-layer': 'intestinal-permeability',
  'claudin-1': 'intestinal-permeability',
  'claudins': 'intestinal-permeability',
  'occludin': 'intestinal-permeability',
  'zonula-occludens-1': 'intestinal-permeability',
  'ZO-1': 'intestinal-permeability',
  'tight junctions': 'intestinal-permeability',
  'vitamin D': 'vitamin-d-supplementation',
  'vitamin D deficiency': 'vitamin-d-supplementation',
  'vitamin-d': 'vitamin-d-supplementation',
  'vitamin E': 'oxidative-stress',
  'insulin': 'insulin-resistance',
  'insulin resistance': 'insulin-resistance',
  'HOMA-IR': 'insulin-resistance',
  'metabolic-endotoxemia': 'metabolic-syndrome',
  'cardiometabolic syndrome': 'metabolic-syndrome',
  'testosterone': 'hyperandrogenism',
  'progesterone': 'estrogen-recirculation',
  'estrogen': 'estrobolome',
  'estrogen-receptor': 'estrobolome',
  'estrogen receptor alpha': 'estrobolome',
  'estrogenic activity': 'metalloestrogens',
  'bile acid': 'bile-acid-metabolism',
  'bile-acid': 'bile-acid-metabolism',
  'lipid metabolism': 'bile-acid-metabolism',
  'cholesterol': 'bile-acid-metabolism',
  'ursodeoxycholic acid': 'bile-acid-metabolism',
  'molecular mimicry': 'autoimmunity',
  'biomarker': 'microbial-biomarkers',
  'biomarkers': 'microbial-biomarkers',
  'epigenetic changes': 'epigenetic-modifications',
  'histone modifications': 'epigenetic-modifications',
  'chromatin modifications': 'epigenetic-modifications',
  'DNA methylation': 'epigenetic-modifications',
  'DNA Damage': 'DNA-damage',
  'DNA damage': 'DNA-damage',
  'miRNA': 'epigenetic-modifications',
  'lncRNA': 'epigenetic-modifications',
  'metallothionein': 'metal-homeostasis',
  'metallothioneins': 'metal-homeostasis',
  'Metallothionein': 'metal-homeostasis',
  'Metallothioneins': 'metal-homeostasis',
  'metalloenzyme': 'metal-dependent-virulence',
  'metalloprotein': 'metal-homeostasis',
  'zinc-finger': 'metal-homeostasis',
  'zinc-homeostasis': 'metal-homeostasis',
  'zinc deficiency': 'metal-homeostasis',
  'iron-deficiency-anemia': 'iron',
  'iron deficiency': 'iron',
  'Iron deficiency': 'iron',
  'iron homeostasis': 'iron',
  'iron-homeostasis': 'iron',
  'iron supplementation': 'iron-management',
  'iron-dysregulation': 'iron',
  'Iron-dysregulation': 'iron',
  'ferritin': 'ferritin',
  'copper-dysregulation': 'copper',
  'copper-toxicity': 'copper',
  'copper-induced cytokine production': 'copper',
  'ceruloplasmin': 'ceruloplasmin',
  'aluminium': 'aluminum',
  'thallium': 'thallium',
  'Thallium': 'thallium',
  'amyloid-beta-aggregation': 'amyloid-beta',
  'amyloid': 'amyloid-beta',
  'tau-phosphorylation': 'alpha-synuclein',
  'protein-aggregation': 'alpha-synuclein',
  'protein-quality-control': 'alpha-synuclein',
  'ubiquitin-proteasome-system': 'alpha-synuclein',
  'uremic-toxins': 'tmao',
  'p-cresol': 'tmao',
  'p-Cresol': 'tmao',
  'indoxyl sulfate': 'tmao',
  'indoxyl-sulfate': 'tmao',
  'Indoxyl sulfate': 'tmao',
  'Indole': 'indoles',
  'indole': 'indoles',
  'indole-3-propionic-acid': 'indoles',
  'neurotransmitter': 'gut-brain-axis',
  'bdnf': 'gut-brain-axis',
  'BDNF': 'gut-brain-axis',
  'microglia': 'neuroinflammation',
  'Microglia': 'neuroinflammation',
  'macrophage': 'inflammation',
  'neuropeptides': 'gut-brain-axis',
  'demyelination': 'neuroinflammation',
  'myelination': 'neuroinflammation',
  'remyelination': 'neuroinflammation',
  'reactive oxygen species': 'oxidative-stress',
  'reactive-oxygen-species': 'oxidative-stress',
  'malondialdehyde': 'oxidative-stress',
  'Mitochondrial dysfunction': 'mitochondrial-dysfunction',
  'Mitochondria': 'mitochondrial-dysfunction',
  'glutathione peroxidase': 'glutathione',
  'glutathione peroxidases': 'glutathione',
  'glutathione-s-transferase': 'glutathione',
  'superoxide dismutase (SOD)': 'oxidative-stress',
  'xanthine oxidase': 'oxidative-stress',
  'antioxidant': 'oxidative-stress',
  'autophagy': 'autophagy',
  'shotgun-metagenomics': 'shotgun-metagenomics',
  'shotgun metagenomics': 'shotgun-metagenomics',
  'Shotgun metagenomics': 'shotgun-metagenomics',
  'Shotgun-metagenomics': 'shotgun-metagenomics',
  'metagenomic analysis': 'shotgun-metagenomics',
  'metagenomic-analysis': 'shotgun-metagenomics',
  'meta-analysis': 'shotgun-metagenomics',
  '16S rRNA sequencing': 'shotgun-metagenomics',
  '16S-rRNA-sequencing': 'shotgun-metagenomics',
  '16S-rRNA': 'shotgun-metagenomics',
  'metaproteomics': 'shotgun-metagenomics',
  'mass-spectrometry': 'shotgun-metagenomics',
  'metabolome': 'shotgun-metagenomics',
  'circulating microbiome': 'blood-brain-barrier',
  'animal-model': 'shotgun-metagenomics',
  'bacterial vaginosis': 'bacterial-vaginosis',
  'bacterial-vaginosis': 'bacterial-vaginosis',
  'vaginal microbiota': 'bacterial-vaginosis',
  'vaginal-microbiome': 'bacterial-vaginosis',
  'vaginal pH': 'bacterial-vaginosis',
  'vaginal-virome': 'viral-microbiota',
  'gut-virome': 'viral-microbiota',
  'viral dysbiosis': 'viral-microbiota',
  'viral-dysbiosis': 'viral-microbiota',
  'Viral dysbiosis': 'viral-microbiota',
  'bacteriophage': 'bacteriophages',
  'bacteriophages': 'bacteriophages',
  'infant-exposure': 'infant-exposure',
  'parenteral-nutrition': 'infant-exposure',
  'breast-milk': 'infant-exposure',
  'rice': 'dietary-arsenic-exposure',
  'rice-cereal': 'dietary-arsenic-exposure',
  'inorganic arsenic': 'dietary-arsenic-exposure',
  'inorganic-arsenic': 'dietary-arsenic-exposure',
  'Arsenic Toxicity': 'arsenic',
  'Arsenicosis': 'arsenic',
  'lead-neurotoxicity': 'heavy-metal-neurotoxicity',
  'mercury-neurotoxicity': 'heavy-metal-neurotoxicity',
  'manganese neurotoxicity': 'heavy-metal-neurotoxicity',
  'manganese-neurotoxicity': 'heavy-metal-neurotoxicity',
  'nickel-neurotoxicity': 'heavy-metal-neurotoxicity',
  'nephrotoxicity': 'chronic-kidney-disease',
  'ESRD': 'chronic-kidney-disease',
  'gut-kidney-axis': 'chronic-kidney-disease',
  'hyperparathyroidism': 'chronic-kidney-disease',
  'oxalates': 'chronic-kidney-disease',
  'dysmenorrhea': 'dysmenorrhea',
  'hirsutism': 'hyperandrogenism',
  'fertility': 'female-infertility',
  'reproductive health': 'female-infertility',
  'pregnancy outcomes': 'female-infertility',
  'hypertensive disorders of pregnancy': 'female-infertility',
  'recurrent-implantation-failure': 'female-infertility',
  'gestational-diabetes': 'type-2-diabetes',
  'small intestinal bacterial overgrowth': 'dysbiosis',
  'sibo': 'dysbiosis',
  'SIBO': 'dysbiosis',
  'constipation': 'ibs',
  'oral microbiota': 'biofilm',
  'salivary microbiome': 'biofilm',
  'oral-gut-axis': 'biofilm',
  'quorum-sensing': 'biofilm',
  'interkingdom-relationships': 'inter-kingdom-metal-shielding',
  'interkingdom-relationships-and-functional-shielding': 'functional-shielding',
  'fungal microbiota': 'mycobiome',
  'fungal-microbiota': 'mycobiome',
  'fungal dysbiosis': 'mycobiome',
  'fungal-dysbiosis': 'mycobiome',
  'Fungal microbiota': 'mycobiome',
  'gut-mycobiome': 'mycobiome',
  'mycobiome-enterotype': 'mycobiome',
  'essential-oils': 'polyphenols',
  'carvacrol': 'polyphenols',
  'thymol': 'polyphenols',
  'cinnamaldehyde': 'polyphenols',
  'cinnamon': 'polyphenols',
  'polyamines': 'short-chain-fatty-acids',
  'saccharolytic-fermentation': 'fermentative-metabolism',
  'saccharolytic fermentation': 'fermentative-metabolism',
  'outer-membrane': 'pathogen-metal-acquisition',
  'cell-wall': 'pathogen-metal-acquisition',
  'peptidoglycan': 'pathogen-metal-acquisition',
  'peptidoglycan-recognition-proteins': 'nutritional-immunity',
  'niche-partitioning': 'dysbiosis',
  'functional-redundancy': 'dysbiosis',
  'sex-differences': 'estrobolome',
  'sex-differences-microbiome': 'estrobolome',
  'smoking': 'environmental-metal-exposure',
  'weight loss': 'metabolic-syndrome',
  'ADHD': 'autism-spectrum-disorder',
  'cognitive-function': 'gut-brain-axis',
  'comorbidity': 'comorbidities',
  'comorbidities': 'comorbidities',
  'epigenetic': 'epigenetic-modifications',
  'nitrogen-cycle': 'gene-regulation',
  'sulfur-metabolism': 'fermentative-metabolism',
  'glycolysis': 'fermentative-metabolism',
  'pentose-phosphate-pathway': 'fermentative-metabolism',
  'advanced glycation end products': 'oxidative-stress',
  'quality of life': 'dysbiosis',
  'GLP-1': 'insulin-resistance',
  'glp-1-receptor-agonists': 'insulin-resistance',
  'liraglutide': 'insulin-resistance',
};

function findTarget(ghost) {
  if (ALIASES[ghost] && existingSlugs.has(ALIASES[ghost])) return ALIASES[ghost];
  const lower = ghost.toLowerCase();
  if (ALIASES[lower] && existingSlugs.has(ALIASES[lower])) return ALIASES[lower];
  const hyphenated = lower.replace(/\s+/g, '-').replace(/[()'"]/g, '');
  if (existingSlugs.has(hyphenated)) return hyphenated;
  if (hyphenated.endsWith('s') && existingSlugs.has(hyphenated.slice(0, -1))) return hyphenated.slice(0, -1);

  // Source reference: "Author Year - Title"
  const sourceMatch = ghost.match(/^([A-Z][a-z]+)\s+(\d{4})/);
  if (sourceMatch) {
    const prefix = `${sourceMatch[1].toLowerCase()}-${sourceMatch[2]}`;
    for (const slug of existingSlugs) {
      if (slug.startsWith(prefix)) return slug;
    }
  }
  // "Author et al"
  const etalMatch = ghost.match(/^([A-Z][a-z]+)\s+et\s+al/);
  if (etalMatch) {
    const prefix = etalMatch[1].toLowerCase();
    for (const slug of existingSlugs) {
      if (slug.startsWith(prefix + '-')) return slug;
    }
  }

  return null;
}

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
    const regex = /\[\[([^\]|]+)(\|[^\]]+)?\]\]/g;
    let match;
    const replacements = [];

    while ((match = regex.exec(content)) !== null) {
      const slug = match[1];
      const display = match[2] || '';
      const fullMatch = match[0];
      if (existingSlugs.has(slug)) continue;

      const target = findTarget(slug);
      if (target && existingSlugs.has(target) && target !== slug) {
        const displayText = display || `|${slug}`;
        replacements.push({ from: fullMatch, to: `[[${target}${displayText}]]` });
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

console.log(`v3 fixes: ${totalFixes} links in ${filesChanged} files. Remaining: ${stillMissing.size} ghosts`);
const sorted = [...stillMissing.entries()].sort((a, b) => b[1] - a[1]);
console.log('\n=== Still missing (top 50) ===');
for (const [slug, count] of sorted.slice(0, 50)) console.log(`${count}\t${slug}`);
console.log(`\n... ${sorted.length} total remaining`);
