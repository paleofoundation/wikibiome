---
title: "Jin 2023 — Gut Metabolite 3-HPAA Rejuvenates Spermatogenic Dysfunction in Aged Mice through GPX4-Mediated Ferroptosis"
type: source
created: 2026-04-19
updated: 2026-04-19
authors: [Zirun Jin, Yuzhuo Yang, Yalei Cao, Qi Wen, Yu Xi, Jianxing Cheng, Qiancheng Zhao, Jiaming Weng, Kai Hong, Hui Jiang, Jing Hang, Zhe Zhang]
corresponding_author: "Hui Jiang; Jing Hang; Zhe Zhang"
corresponding_email: "jianghui@bjmu.edu.cn; hangjbysy@163.com; zhezhang@bjmu.edu.cn"
institution: "Peking University Third Hospital; Peking University First Hospital"
year: 2023
journal: "Microbiome"
doi: "10.1186/s40168-023-01659-y"
pmid: "not yet verified"
evidence_level: animal-model
sample_size: "n=7-10 mice per group"
tags: [aging, spermatogenesis, gut-microbiota, ferroptosis, metabolites, fecal-microbiota-transplantation, erectile-dysfunction, male-fertility]
library_category: mechanistic-insights
platform: both
condition: "erectile dysfunction"
karen_brain_primitives: [1, 4, 5]
metals_discussed: [iron]
taxa_discussed: [lachnoclostridium, acutalibacter, helicobacter, bacteroides, bifidobacterium, lactobacillus, enterobacteriaceae]
key_findings:
  - "FMT from young to old mice rescued age-related spermatogenic dysfunction, while old-to-young FMT impaired it"
  - "Gut bacteria-derived metabolite 3-HPAA (3-hydroxyphenylacetic acid) restores spermatogenesis in aged mice by upregulating GPX4 and restraining ferroptosis"
  - "Aging shifts gut microbiota composition with enrichment of Bifidobacterium pseudolongum and depletion of Lachnoclostridium and Acutalibacter in old mice"
keystone: false
---

## Key Findings

- **Heterochronic fecal microbiota transplantation (FMT) directly modulates spermatogenesis**: FMT from young (6-week) to old (18-20-month) C57BL/6 mice (y FMT o) rescued sperm concentration, progressive motility, and total motility, while old-to-young FMT (o FMT y) impaired these parameters ([[jin-2023-3hpaa-spermatogenesis-ferroptosis]], animal-model, n=7-8 per group, P<0.05).
- **3-Hydroxyphenylacetic acid (3-HPAA) is the key mediating metabolite**: GC-MS metabolomics identified 3-HPAA as significantly elevated in cecal contents of young mice and in the rescued (y FMT o) group; oral administration of 3-HPAA (25 mg/day, 6 weeks) to old mice improved sperm concentration (P<0.05) and increased spermatogenic cell markers (DAZL+, SYCP3+, TNP1+, PGK2+) ([[jin-2023-3hpaa-spermatogenesis-ferroptosis]], animal-model).
- **3-HPAA acts through GPX4-mediated restraint of ferroptosis**: RNA sequencing and Western blot confirmed 3-HPAA upregulates GPX4 and NRF2 protein expression in testis tissue, increases glutathione peroxidase (GPx) activity and reduced glutathione (GSH) levels, and decreases malondialdehyde (MDA) — indicating suppression of lipid peroxidation and ferroptosis ([[jin-2023-3hpaa-spermatogenesis-ferroptosis]], animal-model, n=6-9 per group).
- **In vitro confirmation in GC-2 spermatocyte cells**: 3-HPAA treatment of H2O2-stressed GC-2 cells reduced apoptosis, decreased ROS, increased GPX4/NRF2 expression, and reduced iron accumulation (FerrOrange assay). RSL3-mediated GPX4 inhibition and Gpx4 siRNA knockdown both abolished 3-HPAA's protective effects, confirming GPX4 dependence ([[jin-2023-3hpaa-spermatogenesis-ferroptosis]], animal-model + in-vitro).

## Methods

**Study design**: Animal model study with bidirectional heterochronic FMT between young (6-week) and old (18-20-month) male C57BL/6 mice, combined with targeted metabolite administration and in vitro validation.

**FMT protocol**: Mice were antibiotic-depleted (vancomycin 0.5 g/L, ampicillin 1 g/L, kanamycin 1 g/L, metronidazole 1 g/L for 3 days) before intragastric FMT (100 uL cecal content, 1-day interval, 6 weeks). Four groups: y FMT y, o FMT y, y FMT o, o FMT o.

**Multi-omics approach**: Cecal shotgun metagenomics (Illumina NovaSeq 6000), GC-MS non-targeted metabolomics (cecal, plasma, testis), RNA sequencing (testis tissue), qRT-PCR, and Western blot.

**3-HPAA treatment**: Old mice received intragastric 3-HPAA (25 mg/day in normal saline) or vehicle daily for 6 weeks; plasma, testis tissues, and sperm collected at endpoint.

**In vitro validation**: GC-2 spermatocyte cell line treated with H2O2 (200 uM, 90 min oxidative stress), then 3-HPAA (50 uM) for 48 hours. GPX4 inhibition via RSL3 (200 nM) and Gpx4 siRNA knockdown used to confirm mechanism.

**Statistics**: Two-tailed unpaired Student's t test, Wilcoxon test, one-way ANOVA with Sidak's post hoc. P<0.05 threshold. n=7-10 mice per group for most experiments; n=3-6 for in vitro.

## Detailed Summary

### Aging-associated gut dysbiosis and spermatogenic decline

The authors established that aging C57BL/6 mice exhibit distinct gut microbiota composition from young mice via PCoA of beta-diversity (Bray-Curtis). LEfSe analysis identified age-dependent taxonomic shifts at both genus and species levels:

**Enriched in young mice**: *Lachnoclostridium*, *Acutalibacter*, *Helicobacter cinaedi*, *Acutalibacter muris*, *Lachnoclostridium* sp. YL32, *Helicobacter typhlonius*, *Lactobacillus johnsonii*

**Enriched in old mice**: *Bifidobacterium pseudolongum*, *Lactobacillus reuteri*, *Muribaculum intestinale*

Alpha diversity (Chao1, Shannon, Simpson) showed no significant difference between groups, indicating the shift is compositional rather than a loss of diversity.

### FMT bidirectional effects on spermatogenesis

- **y FMT o (rescue)**: Old mice receiving young microbiota showed increased sperm concentration (P<0.01), increased progressive motility, increased total motility (P<0.001), and increased spermatogenic cell markers (DAZL+, SYCP3+, TNP1+, PGK2+) by immunofluorescence.
- **o FMT y (damage)**: Young mice receiving old microbiota showed decreased sperm concentration (P<0.05), decreased sperm motility parameters, and reduced spermatogenic cells.

### Metabolomic identification of 3-HPAA

GC-MS metabolomics across cecal, plasma, and testis compartments identified 162 metabolites in cecal content, with 12 beneficial and 8 detrimental metabolites correlating with FMT direction. 3-HPAA was the standout metabolite:
- Significantly higher in young vs. old cecal microbiome
- Increased in y FMT o (rescued) group
- Decreased in o FMT y (damaged) group
- 3-HPAA is a major intestinal catabolite of quercetin glycosides, known for antioxidant and anti-apoptotic properties

### 3-HPAA treatment restores spermatogenesis in old mice

Direct oral 3-HPAA administration (25 mg/day, 6 weeks) to old mice:
- Increased sperm concentration (P<0.05)
- Increased DAZL+, SYCP3+, TNP1+, PGK2+ cells in seminiferous tubules
- Altered plasma metabolome (increased 2-HPAA, 4-coumaric acid; decreased pyroglutamic acid)
- Altered testis metabolome (increased L-malic acid, 4-coumaric acid; decreased 3-D-hydroxybutyric acid)

### Ferroptosis mechanism — GPX4 as the central node

RNA sequencing of 3-HPAA vs. vehicle testis tissues revealed 642 downregulated and 811 upregulated genes. GO analysis highlighted:
- Regulation of ion transport
- Cellular response to oxygen-containing compounds
- **Cellular response to lipid** (directly linked to ferroptosis)

Key ferroptosis-related gene expression changes:
- **Upregulated by 3-HPAA**: *Gpx4*, *Nfe2l2* (NRF2), *Slc7a11* (xCT — cystine transporter)
- **Downregulated by 3-HPAA**: *Ftl* (ferritin light chain), *Fth1* (ferritin heavy chain), *Acsl4* (pro-ferroptotic)

Protein-level validation confirmed GPX4 and NRF2 upregulation (P<0.01), ACSL4 downregulation. Oxidative stress markers showed increased GPx activity (P<0.01), increased GSH, increased GSH/GSSG ratio, and decreased MDA (P<0.05).

### In vitro confirmation of GPX4 dependence

In GC-2 spermatocyte cells under H2O2-induced oxidative stress:
- 3-HPAA reduced apoptosis from ~40% to ~24% (P<0.01)
- 3-HPAA decreased ROS levels (P<0.001)
- 3-HPAA upregulated GPX4, NRF2, xCT protein (P<0.05)
- 3-HPAA decreased FTL and increased iron efflux (decreased Fe2+ staining)
- **RSL3 (GPX4 inhibitor) abolished 3-HPAA's protective effect**, confirming GPX4 is necessary
- **Gpx4 siRNA knockdown similarly abolished protection**, with increased iron accumulation in knockdown cells

## Relevance to WikiBiome

This study provides strong mechanistic evidence for the **gut-testis axis** — the concept that gut microbiota composition directly influences male reproductive function via metabolite production. Key WikiBiome contributions:

- **[[lachnoclostridium]]** entity: enriched in young mice and associated with beneficial metabolite (3-HPAA) production; depletion in aging links to spermatogenic decline
- **[[bifidobacterium]]** entity: *B. pseudolongum* enrichment in old mice is a dysbiosis marker in this context — contrasts with its generally probiotic reputation
- **[[ferroptosis]]** concept: iron-dependent programmed cell death as a mechanism of aging-related tissue damage; GPX4 as the central protective enzyme
- **[[iron]]** entity: iron accumulation in testis tissue as a ferroptosis driver; connects to broader [[nutritional-immunity]] concepts
- **[[helicobacter]]** entity: *H. cinaedi* and *H. typhlonius* enriched in young mice, suggesting a different ecological role in the gut-reproductive axis than the pathogenic *H. pylori* paradigm
- **Aging and microbiome** concept: compositional shift without alpha-diversity loss — the problem is who's there, not how many

## Relevance to Cureva

- **[[erectile-dysfunction]] signature**: This study does not directly study ED but provides foundational evidence for the gut-reproductive axis. Aging-related spermatogenic dysfunction shares overlapping mechanisms with ED (oxidative stress, ferroptosis, vascular damage). The metabolite 3-HPAA and GPX4/NRF2 pathway are candidate intervention targets.
- **Potential intervention hypothesis**: 3-HPAA supplementation or dietary quercetin (3-HPAA's precursor) as interventions for age-related male reproductive dysfunction. Triangle evidence:
  - I_to_f: 3-HPAA upregulates GPX4, restrains ferroptosis (strong, this study)
  - I_to_D: 3-HPAA improves spermatogenesis in aged mice (animal-model only)
  - f_to_D: ferroptosis drives spermatogenic cell death in aging testes (this study + refs 58-62)
  - Status: promising (animal-model, no human data)
- **Potential STOP signal**: Iron supplementation in aging males with spermatogenic dysfunction — iron accumulation drives ferroptosis in testis tissue; supplementation could worsen the underlying mechanism. Aligns with Karen's Brain Primitive 2 (nutritional immunity as interpretive constraint).
- **FMT as intervention**: Young-donor FMT rescued spermatogenesis — adds to growing evidence for FMT in age-related conditions, though clinical translation requires human trials.

## Contradictions / Tensions

- **Bifidobacterium as harmful**: *B. pseudolongum* enrichment in old mice is framed as part of the dysbiotic profile, which contrasts with the generally positive framing of Bifidobacterium in the vault (probiotic, SCFA producer). This may reflect species-level specificity — *B. pseudolongum* may behave differently from *B. longum* or *B. breve*. Existing entity pages should note this nuance. <!-- NEEDS VERIFICATION: check if other sources report B. pseudolongum as detrimental in aging contexts -->
- **Lactobacillus reuteri enriched in old mice**: Similarly complicates the generally probiotic framing of *L. reuteri*. Species-level or strain-level context matters.
- **Iron framing**: The study focuses on intracellular iron accumulation driving ferroptosis but does not measure systemic iron or nutritional immunity markers (hepcidin, lactoferrin, transferrin). The iron story here is about cellular iron homeostasis dysregulation rather than environmental iron excess — a different mechanism than the siderophore-driven iron ecology in infectious disease signatures.

## Open Questions

1. **Which bacterial species produce 3-HPAA?** The study shows correlation between *Lachnoclostridium* abundance and 3-HPAA levels but does not establish which specific taxa metabolize quercetin glycosides to 3-HPAA. Mono-colonization or defined community experiments would clarify.
2. **Does 3-HPAA affect erectile function directly?** This study measured spermatogenesis, not erectile capacity. Given the shared ferroptosis and oxidative stress mechanisms, does 3-HPAA also improve endothelial NO synthase (eNOS) function or penile vascular health?
3. **Human translation**: All data are from C57BL/6 mice. Is 3-HPAA detectable in human seminal fluid or testis tissue? Does gut 3-HPAA correlate with semen parameters in aging men?
4. **Dietary quercetin as upstream intervention**: 3-HPAA is a catabolite of quercetin glycosides. Can dietary quercetin intake (onions, apples, berries) serve as a practical upstream intervention, or is gut microbiota composition the bottleneck for conversion?
5. **Ferroptosis in other reproductive conditions**: Does the GPX4/ferroptosis axis contribute to female reproductive aging (ovarian reserve decline) or endometriosis-associated infertility through similar mechanisms?
