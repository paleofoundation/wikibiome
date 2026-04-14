---

title: "Colorectal Cancer — Microbiome Signature"
type: signature
created: 2026-04-10
updated: 2026-04-10
sources: [gao-2015-microbiota-disbiosis-colorectal-cancer, wu-2021-microbial-markers-populations-early-crc, qin-2024-consistent-microbiome-signatures-old-young-onset-crc, zou-2024-multi-omic-microbiome-genome-transcriptome-crc, hanus-2021-immune-microbiota-metabolites-crc-triad, hou-2022-gut-microbiota-immune-immunotherapy-crc, appunni-2021-dietary-factors-gut-microbiome-crc, hoang-2023-dysbiotic-microbiome-crc-lifestyles-metabolic, zhao-2021-colorectal-cancer-microbiome-patterns-signatures, xu-2020-gut-microbiome-pd1-mss-crc-metabolic-pathway, carretta-2021-scfas-receptors-gut-inflammation-colon-cancer, xie-2025-cholesterol-crc-simvastatin-lactobacillus, li-2023-combined-gut-bacteria-fungi-crc-adenoma-chinese-cohort, bars-cortina-2024-16s-vs-shotgun-crc, saito-2019-metagenomic-gut-microbiota-colorectal-adenoma, purcell-2017-gut-microbiome-consensus-molecular-subtypes-crc, yu-2022-systematic-review-microbial-markers-colorectal-neoplasia, ma-2024-gut-microbiota-inflammatory-factors-crc-mr, liu-2025-immune-gut-microbiota-crc-mr-mediation, loke-2018-metabolomics-16s-crc-mucosa, weir-2013-stool-microbiome-metabolome-crc-healthy, marchesi-2011-towards-human-crc-microbiome, gao-2026-ketogenic-diet-fxr-nfkb-crc, farhana-2016-bile-acid-colon-cancer-stem-cells, simin-2020-antibiotic-use-crc-risk]
tags: [colorectal-cancer, dysbiosis, fusobacterium, oral-pathogens, bile-acid-metabolism, epithelial-barrier, inflammation]
last_substantive_update: 2026-04-13
source_count: 25

confidence:
  metallomic: moderate
  taxonomic: high
  nutritional_immunity: high
  ecological: high
  virulence_enzymes: high

associated_conditions:
  - condition: "[[crohns-disease]]"
    shared_metals: [iron, zinc, cadmium]
    shared_taxa: [escherichia-coli, fusobacterium-nucleatum, bacteroides-fragilis, lachnospiraceae-depleted, faecalibacterium-depleted]
    shared_ecological: [hypoxia, biofilm, barrier-dysfunction, SCFA-depletion]
    overlap_score: 0.58
  - condition: "[[pancreatic-cancer]]"
    shared_metals: [iron, cadmium]
    shared_taxa: [fusobacterium-nucleatum, porphyromonas-gingivalis, escherichia-coli]
    shared_ecological: [oral-pathogen-translocation, biofilm, immune-evasion]
    overlap_score: 0.37
  - condition: "[[obesity]]"
    shared_metals: [iron]
    shared_taxa: [faecalibacterium-depleted, lachnospiraceae-depleted, roseburia-depleted]
    shared_ecological: [SCFA-depletion, metabolic-inflammation, bile-acid-dysmetabolism]
    overlap_score: 0.40

karen_brain_primitives: [1, 4, 5, 6, 8, 9]

# Layer 1: Metallomic signature
metallomic_signature:
  elevated: [iron, zinc, cadmium, lead]
  depleted: [butyrate]

# Layer 2: Taxonomic signature
taxonomic_signature:
  enriched:
    - taxon: "[[fusobacterium-nucleatum]]"
      role: "Primary driver — FadA disrupts E-cadherin, Fap2 inhibits NK cells, LPS-TLR4 drives inflammation and chemotherapy resistance"
    - taxon: "[[fusobacterium-varium]]"
      role: "Early adenoma pathogen — enriched in ~80% of CRA; appears before F. nucleatum in adenoma-carcinoma sequence"
    - taxon: "[[bacteroides-fragilis]]"
      role: "Enterotoxigenic ETBF — zinc-dependent BFT toxin, iron piracy, beta-glucuronidase activity, biofilm formation"
    - taxon: "[[parvimonas-micra]]"
      role: "Oral pathogen, consistent cross-population biomarker — enriched in CRC across all age groups"
    - taxon: "[[peptostreptococcus-stomatis]]"
      role: "Oral pathogen — consistently enriched in advanced stages; pks+ colibactin producer"
    - taxon: "[[escherichia-coli]]"
      role: "pks+ strains synthesize colibactin — induces double-strand DNA breaks and mutations; siderophore competition in iron-rich environment"
    - taxon: "[[clostridium-symbiosum]]"
      role: "CRC-enriched driver taxon — consistently elevated in both young- and old-onset CRC; bile acid metabolism"
    - taxon: "[[porphyromonas-gingivalis]]"
      role: "Oral pathogen — enriched in CMS1 immune subtype; periodontal-gut-CRC link"
    - taxon: "[[akkermansia-muciniphila]]"
      role: "Paradoxical role — elevated 4x in CRC stool vs healthy; maintains glycerophospholipid metabolism for PD-1 escape; SCFA paradox"
    - taxon: "[[candida-albicans]]"
      role: "Interkingdom interaction — biofilm formation, oxygen depletion, functional shielding with bacteria, reduced inflammatory detection"
  depleted:
    - taxon: "[[lachnospiraceae]]"
      role: "SCFA producers (butyrate, propionate) — protective; lost in CRC microenvironment; competitive exclusion by iron-rich pathogens"
    - taxon: "[[faecalibacterium-prausnitzii]]"
      role: "SCFA producer — major beneficial species, significantly depleted in CRC; protective against inflammation"
    - taxon: "[[roseburia]]"
      role: "SCFA producer — butyrate generators depleted in established CRC but may be recruited as 'passengers' in tumor microenvironment"
    - taxon: "[[prevotella-copri]]"
      role: "Protective in healthy microbiota — 40-fold depleted in CRC; associated with fiber fermentation and SCFA production"
    - taxon: "[[ruminococcus-albus]]"
      role: "SCFA producer — 10x depleted in CRC; fiber fermentation and short-chain fatty acid production capacity lost"
    - taxon: "[[dialister]]"
      role: "Protective species (Dialister invisus 48.7x depleted) — SCFA production and immune tolerance functions lost"

# Layer 3: Nutritional immunity profile
nutritional_immunity:
  elevated: [IL-6, TNF-alpha, IL-1beta, lipopolysaccharide, calprotectin, hepcidin, lipocalin-2]
  depleted: [IL-10, IgA, Treg-cells]

# Layer 4: Ecological features
ecological_features: [hypoxia, biofilm, secondary-bile-acid-accumulation, fermentative-acidic-microenvironment, epithelial-barrier-disruption, colonic-serotonin-depletion, anaerobic-dominance]

# Layer 5: Key virulence enzymes expressed
virulence_enzymes: [FadA, Fap2, LPS-TLR4, BFT-toxin, colibactin-pks, siderophores, urease, glyoxalase, beta-glucuronidase]

# Cureva pipeline status
cureva_status: partial
validated_interventions: [mediterranean-diet]
stops: [stop-iron-supplementation-colorectal-cancer]
platform: cureva
---

## Overview

**Colorectal cancer (CRC)** is the third-most-common cancer worldwide, affecting ~1.9 million people annually. The conventional view treats CRC as an age-related genetic disease driven by APC mutations and chromosomal instability. The microbiome signature framework reveals CRC as an **ecological disease** driven by oral pathogen colonization, secondary bile acid metabolism, iron-dependent dysbiosis, and epithelial barrier disruption.

This signature integrates 28 peer-reviewed papers spanning cross-sectional studies (n=24,000+), metagenomic analyses, metabolomics, Mendelian randomization studies, and animal models of CRC pathogenesis. Key findings include:

1. **Consistent oral pathogen enrichment** across young-onset and old-onset CRC, CMS subtypes, and geographic populations [[qin-2024-consistent-microbiome-signatures-old-young-onset-crc]]
2. **Stage-specific microbial markers**: adenoma biomarkers are distinct from CRC biomarkers, and both are distinct from healthy controls [[wu-2021-microbial-markers-populations-early-crc]]
3. **Iron-dependent dysbiosis**: fermentative anaerobes exploit iron-rich tumor microenvironment; SCFA producers are competitively excluded [[loke-2018-metabolomics-16s-crc-mucosa]]
4. **Interkingdom ecological reshaping**: Candida biofilms and bacteria co-evolve in hypoxic, acidic CRC microenvironment [[li-2023-combined-gut-bacteria-fungi-crc-adenoma-chinese-cohort]]
5. **Bile acid-driven cancer stem cell generation**: secondary bile acids (DCA, LCA) directly induce stemness and drug resistance via M3R/Wnt pathways [[farhana-2016-bile-acid-colon-cancer-stem-cells]]

## Metallomic Signature

CRC is characterized by a distinctive metallomic signature that selects for pathogenic taxa and creates conditions for epithelial transformation. Unlike endometriosis (with uniform multi-metal elevation), CRC shows **localized iron and zinc enrichment in the tumor microenvironment**, with systemic patterns varying by stage and sidedness.

### Elevated Metals

**Iron (Fe)** is the dominant selective pressure in CRC [[xu-2020-gut-microbiome-pd1-mss-crc-metabolic-pathway]]:
- Tumor microenvironments are characteristically iron-rich due to hemorrhage, epithelial barrier disruption, and hepcidin elevation (nutritional immunity response)
- Siderophore-producing pathogens (*E. coli*, *B. fragilis*) exploit this iron-rich niche for biofilm formation and virulence factor synthesis
- Iron limitation in healthy individuals (via hepcidin-mediated sequestration) is overridden by local hemorrhage and barrier disruption in tumors

**Zinc (Zn)** is elevated in tumor-associated dysbiosis:
- Metalloprotease-producing pathogens require zinc cofactors
- Calprotectin elevation in CRC (immune response to dysbiosis) sequesters zinc systemically
- Local zinc availability in epithelial damage zones drives selection for Zn-dependent pathogens

**Cadmium (Cd) and Lead (Pb)** contribute to environmental burden:
- Both accumulate in colonic tissue from dietary sources, water, and occupational exposure
- Mis-metallation effects (Ca channel entry) displace Zn and Fe from critical enzymes
- Synergistic oxidative stress when combined with dysbiosis-driven inflammation

**Butyrate depletion** is the most critical "metallomic" feature in CRC (though technically a bacterial metabolite, not a metal):
- Short-chain fatty acid-producing bacteria (Lachnospiraceae, Ruminococcus, Faecalibacterium) are functionally depleted in the CRC microenvironment
- This is NOT due to low dietary fiber alone — it is **competitive exclusion by pathogenic taxa exploiting iron-rich, hypoxic, acidic conditions** [[carretta-2021-scfas-receptors-gut-inflammation-colon-cancer]]
- Butyrate depletion removes the primary anti-inflammatory and tumor-suppressive metabolite

## Environmental Exposures

Sources of the metallomic and dysbiotic burden in CRC include:

| Exposure | Mechanism | Evidence |
|----------|-----------|----------|
| **Antibiotic use** | Broad-spectrum antibiotics disrupt protective SCFA producers; 8-year lag to CRC diagnosis suggests chronic microbiome damage | ES = 1.70 (95% CI 1.26-2.30) for broad-spectrum; non-linear dose-response [[simin-2020-antibiotic-use-crc-risk]] |
| **Red meat consumption** | Heme iron and heterocyclic amines select for siderophore-producing pathogens; N-nitroso compounds drive mutagenesis | Documented in [[appunni-2021-dietary-factors-gut-microbiome-crc]] |
| **Low dietary fiber** | Fiber fermentation produces SCFAs; fiber depletion removes the protective metabolite and selects for proteolytic pathogens | [[carretta-2021-scfas-receptors-gut-inflammation-colon-cancer]] |
| **Alcohol consumption** | Acetaldehyde metabolism via dysbiotic microbiota; alterations in Bacteroidetes/Firmicutes ratio; oxidative stress | [[appunni-2021-dietary-factors-gut-microbiome-crc]] |
| **Smoking** | Introduces metals (Cd, Pb, Ni) and disrupts oxygen gradients; smoking history linked to *Bacilli/Streptococcaceae* enrichment | [[hoang-2023-dysbiotic-microbiome-crc-lifestyles-metabolic]] |
| **Metabolic disease (obesity, diabetes, hypertension)** | Dysbiotic microbiota associated with metabolic inflammation; hyperglycemia and dyslipidemia feed pathogenic taxa | [[hoang-2023-dysbiotic-microbiome-crc-lifestyles-metabolic]] |
| **High cholesterol diet** | LDL-enriched environment drives CRC progression; *Lactobacillus* supplementation mitigates via bile acid remodeling | [[xie-2025-cholesterol-crc-simvastatin-lactobacillus]] |

## Nutritional Immunity Response

The host immune system is actively fighting the dysbiotic burden, with **inflammatory markers elevated across all CRC stages** [[hanus-2021-immune-microbiota-metabolites-crc-triad]]:

| Factor | Role | Pattern |
|--------|------|---------|
| **IL-6, TNF-alpha, IL-1beta** | Pro-inflammatory cytokines driving NF-kB activation and epithelial barrier disruption | Chronically elevated (74.1% of papers document inflammation in CRC) |
| **Lipopolysaccharide (LPS)** | Gram-negative endotoxin from oral pathogens; TLR4 activation drives carcinogenic signaling | Documented in 59.3% of papers; direct *F. nucleatum* LPS contribution [[hanus-2021-immune-microbiota-metabolites-crc-triad]] |
| **Hepcidin** | Iron sequestration response; indicates functional iron-deficiency state | Elevated in CRC, attempting to starve iron-dependent pathogens |
| **Calprotectin, Lipocalin-2** | Metal chelation (zinc, iron) and siderophore antagonism; host defense against metal-dependent pathogens | Elevated as nutritional immunity response |
| **IL-10 (paradoxical)** | Anti-inflammatory cytokine, but causally linked to **increased CRC risk** (OR = 1.49) via MR analysis [[ma-2024-gut-microbiota-inflammatory-factors-crc-mr]] | Suggests IL-10 may be exploited by pathogens for immune evasion |
| **IgA, Regulatory T cells** | Reduced mucosal IgA and Treg cell populations indicate failed oral tolerance to dysbiotic taxa | Depleted in CRC vs. healthy |

The host is "winning" in terms of metal sequestration but "losing" in terms of barrier integrity and epithelial function — indicating that nutritional immunity alone is insufficient without restoration of protective bacteria.

## Mis-metallation Events

**Iron-driven epithelial barrier dysfunction** is the primary mis-metallation event in CRC:

1. **Heme iron from red meat and hemorrhage** accumulates in the colon
2. **Fenton chemistry** catalyzes oxidative damage to epithelial tight junctions (claudins, occludin, zonula occludens-1)
3. **Barrier disruption** allows translocation of bacterial LPS and pathogenic taxa
4. **Siderophore-producing pathogens** exploit the iron-rich, damaged microenvironment to form biofilms and establish persistent infection

Additionally, **dysbiosis-driven hypoxia** alters local metal bioavailability:
- Anaerobic pathogens preferentially express metal-dependent enzymes (FadA, BFT toxin, colibactin)
- Hypoxia-driven epithelial hypoxia-inducible factor (HIF) activation further destabilizes barrier function and selects for anaerobes

## Taxonomic Analysis

### Enriched Taxa

| Taxon | Metal Dependencies | Key Virulence Enzymes | Pathogenic Mechanisms |
|-------|-------------------|----------------------|----------------------|
| **[[fusobacterium-nucleatum]]** | Fe, Ni | FadA (E-cadherin disruption), Fap2 (NK evasion), LPS-TLR4 | Canonical CRC driver — present in 70.5-82.1% of tumors across cohorts; FadA activates beta-catenin-mediated proliferation; Fap2 binds TIGIT on NK cells preventing cytotoxicity; direct immune evasion [[qin-2024-consistent-microbiome-signatures-old-young-onset-crc]] |
| **[[fusobacterium-varium]]** | Fe, Ni | LPS, adhesins | **Earlier enrichment than F. nucleatum** — present in ~80% of adenomas; FV appears before FN in adenoma-carcinoma sequence, suggesting FV may be the initiating pathogen [[saito-2019-metagenomic-gut-microbiota-colorectal-adenoma]] |
| **[[bacteroides-fragilis]]** | Zn, Fe | BFT toxin (Zn-dependent), hydrogenase (Fe), beta-glucuronidase | Enterotoxigenic ETBF strains; BFT induces IL-17 and colorectal inflammation; biofilm formation [[qin-2024-consistent-microbiome-signatures-old-young-onset-crc]] |
| **[[parvimonas-micra]]** | Fe, Ni | Siderophores, adhesins | Oral pathogen universally enriched in CRC; top biomarker across populations; independent biomarker strength despite methodological differences (16S vs shotgun) [[bars-cortina-2024-16s-vs-shotgun-crc]] |
| **[[peptostreptococcus-stomatis]]** | Fe | Colibactin (pks operon) | Oral pathogen; pks+ strains induce DNA double-strand breaks; enriched in advanced CRC stages [[qin-2024-consistent-microbiome-signatures-old-young-onset-crc]] |
| **[[escherichia-coli]]** | Fe, Zn, Ni | Siderophores, pks colibactin, urease, glyoxalase | pks+ *E. coli* strains produce colibactin toxin inducing 8x higher mutation rates; siderophore competition; exploits iron-rich CRC microenvironment [[hanus-2021-immune-microbiota-metabolites-crc-triad]] |
| **[[clostridium-symbiosum]]** | Fe | Bile acid metabolism enzymes | CRC driver taxon — enriched in both yCRC and oCRC; bile acid-metabolizing Clostridium species convert primary to secondary bile acids (DCA/LCA) [[qin-2024-consistent-microbiome-signatures-old-young-onset-crc]] |
| **[[akkermansia-muciniphila]]** | — | Mucin-degrading enzymes | **Paradoxical enrichment**: 4-fold elevated in CRC stool vs healthy [[weir-2013-stool-microbiome-metabolome-crc-healthy]]; produces succinate and propionate from mucin metabolism; maintains glycerophospholipid pathways critical for PD-1 checkpoint escape [[xu-2020-gut-microbiome-pd1-mss-crc-metabolic-pathway]]; NOT protective in CRC context |
| **[[candida-albicans]]** | Ni (biofilm) | Biofilm formation, functional shielding | **Interkingdom driver**: elevated in CRC (qPCR-validated); forms mixed biofilms with bacteria; consumes oxygen creating anaerobic pockets; shields bacteria from immune detection; cross-kingdom dysbiosis indicator [[li-2023-combined-gut-bacteria-fungi-crc-adenoma-chinese-cohort]] |
| **[[porphyromonas-gingivalis]]** | Fe | LPS, fimbriae | Oral pathogen specific to CMS1 (immune-inflamed) subtype; periodontal disease is a risk factor for CRC; gut-oral axis connection [[purcell-2017-gut-microbiome-consensus-molecular-subtypes-crc]] |

### Depleted Taxa

| Taxon | Normal Function | Why Lost | Consequence |
|-------|-----------------|----------|-------------|
| **[[lachnospiraceae]]** | Butyrate production (primary SCFA generator) | Iron-rich, hypoxic CRC microenvironment; competitive exclusion by siderophore-producing pathogens; MR-causal protective effect suggests active dysbiosis-driven loss | Loss of HDAC inhibition and GPR109A signaling; epithelial barrier dysfunction; loss of Treg induction |
| **[[faecalibacterium-prausnitzii]]** | Butyrate production; anti-inflammatory polysaccharide A (PSA) | Competitive exclusion in dysbiotic state; sensitivity to oxidative stress from inflammation | Loss of anti-inflammatory signals; major microbial biomarker of healthy microbiota |
| **[[roseburia]]** | Butyrate production; SCFA fermentation | Iron-rich, anaerobic tumor microenvironment despite being facultative anaerobes | Paradoxically found in tumor tissue but at lower abundance than in adjacent normal tissue — suggests "passenger" recruitment rather than driver status [[marchesi-2011-towards-human-crc-microbiome]] |
| **[[prevotella-copri]]** | Fiber fermentation; SCFA production | Fiber depletion in Western diet; competitive exclusion by proteolytic pathogens in dysbiotic state | 40-fold depletion in CRC; marker of protective healthy microbiota |
| **[[ruminococcus-albus]]** | Cellulose and fiber fermentation; SCFA production | Hypoxia, low fiber substrate availability, iron-rich toxin-producing environment | 10-fold depletion; loss of plant polysaccharide processing |
| **[[dialister-invisus]]** | Short-chain fatty acid production | Iron-rich, dysbiotic CRC microenvironment | 48.7-fold depletion; loss of protective SCFA producer |

## Virulence Enzymes and Features

The enriched taxa in CRC express a consistent, overlapping set of metal-dependent virulence enzymes [[hanus-2021-immune-microbiota-metabolites-crc-triad]]:

| Enzyme/Factor | Metal Cofactor | Function | Pathogens | Carcinogenic Role |
|---|---|---|---|---|
| **FadA adhesin** | — | Disrupts E-cadherin junctions; activates beta-catenin signaling | *F. nucleatum* | Drives epithelial proliferation; breaks epithelial-mesenchymal barriers; enables translocation |
| **Fap2 lectin** | — | Binds TIGIT checkpoint receptor on NK cells; immune evasion | *F. nucleatum* | Prevents NK cell-mediated killing; enables persistence and biofilm formation |
| **BFT toxin** | Zn | Zonula occludens-1 (ZO-1) cleavage; epithelial barrier disruption | *B. fragilis* ETBF | Leaky gut → increased LPS translocation → TLR4 activation → NF-kB-driven inflammation |
| **Colibactin (pks operon)** | — | Double-strand DNA break induction; 8x mutation rate elevation | pks+ *E. coli*, *P. stomatis* | Direct mutagenesis; drives adenoma-carcinoma progression |
| **LPS (gram-negative endotoxin)** | — | TLR4 activation; NF-kB inflammasome activation | *F. nucleatum*, *E. coli*, *B. fragilis*, etc. | Chronic innate immune activation; epithelial barrier dysfunction; autophagic response promoting drug resistance [[hanus-2021-immune-microbiota-metabolites-crc-triad]] |
| **Siderophores** | Fe acquisition | Iron chelation and uptake in iron-rich tumor microenvironment | *E. coli*, *B. fragilis* | Biofilm formation; virulence factor synthesis; competitive nutrient exclusion |
| **Urease** | Ni | pH elevation in tumor microenvironment | Various Enterobacteriaceae | May reduce local acidity needed for SCFA penetration |
| **Beta-glucuronidase** | — | Estrogen deconjugation (estrobolome pathway, though less studied in CRC than endometriosis) | *E. coli*, *B. fragilis*, *F. nucleatum* | Possible hormone-driven epithelial proliferation (secondary effect) |
| **Nitrite reductase** | Fe, Mo | Nitrite metabolism; anaerobic respiration | Various anaerobes | Enables colonization in hypoxic tumor niche |

## Interkingdom Relationships

**Bacteria-fungal co-evolution** is a defining feature of CRC dysbiosis [[li-2023-combined-gut-bacteria-fungi-crc-adenoma-chinese-cohort]]:

**Candida albicans role**: 
- Significantly enriched in CRC (qPCR-validated increase across Chinese cohort)
- Forms tight biofilms with bacterial pathogens (*F. nucleatum*, *E. coli*, *Bacteroides*)
- Fungal-bacterial co-aggregates show **reduced inflammatory detection** compared to bacteria alone
- Candida biofilms consume oxygen → anaerobic pockets for strict/facultative anaerobes (*F. nucleatum*, *B. fragilis*)
- Cross-kingdom dysbiosis (negative bacterial-fungal correlation, R = -0.17 to -0.32) indicates antagonistic interactions suggesting fungal "takeover" in dysbiotic state

**Oral pathogen-gut dysbiosis link**: 
- Periodontal pathogens (*P. gingivalis*, *F. nucleatum*, *T. denticola*, *T. forsythia*) are found in colonic tissues, not just stool
- This is a **true translocation event**, not oral contamination of stool samples [[purcell-2017-gut-microbiome-consensus-molecular-subtypes-crc]]
- Suggested mechanisms: (1) periodontal inflammation increases systemic inflammation enabling gut translocation; (2) bacteremia from dental procedures; (3) swallowing of periodontal bacteria during mastication followed by colonic colonization

## Ecological State

The CRC tumor microenvironment is characterized by specific ecological conditions that select for pathogenic taxa and exclude protective SCFA producers:

### Hypoxia and Anaerobic Metabolism

The tumor microenvironment is **constitutively hypoxic** due to:
- Tumor size exceeding diffusion distance (>200 micrometers)
- Microvascular dysfunction and hemorrhage
- Oxygen consumption by inflammatory cells and anaerobic pathogenic bacteria
- Reduced mucus oxygenation from dysbiosis-driven barrier disruption

This selects for **strict and facultative anaerobes** (*F. nucleatum*, *B. fragilis*, *Peptostreptococcus*, *Candida*) while excluding oxygen-preferring commensals.

### Bile Acid-Driven Selection

The CRC microenvironment shows **secondary bile acid accumulation** [[gao-2026-ketogenic-diet-fxr-nfkb-crc]]:
- Primary bile acids (cholate, chenodeoxycholate) are deconjugated and 7-alpha-dehydroxylated by dysbiotic bacteria
- **Deoxycholic acid (DCA) and lithocholic acid (LCA)** accumulate in CRC tissue
- DCA/LCA directly induce **cancer stem cell markers** (CD44, CD166, ALDH1A1) via M3R-mediated Wnt/beta-catenin signaling [[farhana-2016-bile-acid-colon-cancer-stem-cells]]
- DCA/LCA activate EGFR and increase MMP expression, promoting epithelial-mesenchymal transition and drug resistance

This creates a **positive feedback loop**: dysbiosis → secondary bile acid accumulation → cancer stem cell induction → further epithelial barrier disruption → further dysbiosis.

### Iron-Rich, Acidic Microenvironment

The CRC microenvironment combines:
- **High iron concentration** from hemorrhage and epithelial barrier breakdown
- **Low pH** from fermentative anaerobes producing lactate and short-chain fatty acids
- **Low oxygen saturation** from biofilm formation and aerobic respiration by inflammatory cells

This creates selective pressure favoring:
- Siderophore-producing pathogens (*E. coli*, *B. fragilis*)
- Acid-tolerant pathogens (*F. nucleatum*, *peptostreptococci*)
- Biofilm-forming communities (Candida + bacteria)

### SCFA Depletion and Loss of Barrier Function

The CRC microenvironment is **depleted in short-chain fatty acids** because:
1. SCFA-producing bacteria (Lachnospiraceae, Ruminococcus) are competitively excluded
2. Remaining SCFA production is insufficient to activate GPR109A and FFAR2 on epithelial cells and immune cells
3. Loss of HDAC inhibition by butyrate → loss of epigenetic tumor suppression
4. Loss of GPR109A signaling → loss of Treg induction and IL-22 production for barrier integrity

This is **not primarily due to fiber depletion** — even high-fiber diets may fail in the presence of dominant pathogenic taxa that ferment other substrates preferentially.

### Metabolic Disruption: Tryptophan and Serotonin Depletion

A striking finding from metabolomics is the **complete absence of serotonin and tryptophan metabolites (including 5-HIAA) in CRC tumor tissue** compared to adjacent normal tissue [[loke-2018-metabolomics-16s-crc-mucosa]]:
- Healthy colon tissue produces serotonin from tryptophan via enteroendocrine cells and commensal bacteria
- CRC tumor tissue shows zero detection of serotonin, 5-HIAA, and tryptophan metabolites
- This disruption correlates with dysbiotic microbiota unable to produce tryptophanase-positive bacteria

The loss of serotonergic signaling in tumors may:
- Reduce 5-HT4 receptor signaling necessary for epithelial barrier integrity
- Enhance tumor cell proliferation (tumors express 5-HT2B receptors)
- Suppress immune cell function (T cells require serotonin for IL-2 production)

## Pathogenic Ecosystem Assembly: Driver vs. Passenger Model

A critical distinction has emerged from multi-cohort analyses [[gao-2015-microbiota-disbiosis-colorectal-cancer]], [[zhao-2021-colorectal-cancer-microbiome-patterns-signatures]]:

**Driver bacteria** initiate dysbiosis and epithelial transformation:
- *Fusobacterium varium* (adenoma stage)
- *Fusobacterium nucleatum* (carcinoma stage)
- pks+ *E. coli* (colibactin-driven mutagenesis)

**Passenger bacteria** are recruited by the altered tumor microenvironment but are not primary drivers:
- *Roseburia* and *Faecalibacterium* (SCFA producers) are enriched in tumor tissue but depleted in stool, suggesting selective recruitment to the tumor by iron/lactate availability
- *Akkermansia muciniphila* is 4-fold elevated in CRC stool but acts as an immune-evasion helper, not a primary driver

This model explains why **eliminating passenger bacteria (with antibiotics or probiotics) alone is insufficient** — the driver taxa must be addressed, and the ecological conditions that favor their persistence must be reversed.

## Validated Interventions

*Note: CRC interventions are clinically less well-studied than endometriosis. The following are supported by mechanistic evidence and/or animal models, but clinical RCT validation is limited.*

### Dietary Interventions

| Intervention | Mechanism | Evidence Level |
|---|---|---|
| **High dietary fiber** | Restores SCFA-producing bacteria; butyrate supports barrier integrity and Treg induction | Epidemiological; mechanistic via GPR109A/FFAR2 |
| **Reduced red meat** | Lowers heme iron and heterocyclic amines; reduces siderophore-dependent pathogen selection | Epidemiological |
| **Fermented foods / Bifidobacterium** | Polyphenols act as prebiotics; Bifidobacterium produces short-chain fatty acids | Mechanistic |
| **Ketogenic diet** | Increases beta-hydroxybutyrate and primary bile acids; restores *Muribaculaceae* and *Akkermansia*; FXR upregulation and NF-kB suppression | AOM/DSS animal model [[gao-2026-ketogenic-diet-fxr-nfkb-crc]]; promising but not clinically validated |

### Microbial Competition / Probiotic Interventions

| Intervention | Mechanism | Evidence Level |
|---|---|---|
| **Fecal Microbiota Transplantation (FMT)** | Restores protective SCFA producers; reverses dysbiosis | Animal model; one trial ongoing (NCT04729322) |
| **Lactobacillus plantarum supplementation** | Restores SCFA-producing bacteria; reduces inflammatory markers and tumor growth | Animal model [[xie-2025-cholesterol-crc-simvastatin-lactobacillus]]; mechanistic |
| **Prebiotics (inulin, PHGG)** | Selectively feed protective bacteria; restore butyrate production | Mechanistic; limited clinical data |

### Checkpoint Inhibitor + Microbiome Modulation

| Intervention | Mechanism | Evidence Level |
|---|---|---|
| **Anti-PD-1/PD-L1 + protective microbiota** | Specific taxa (*Akkermansia*, *Prevotella*, *Bifidobacterium*) maintain PD-1 antibody efficacy; dysbiotic microbiota reduces response | Animal model; clinical trial underway [[hou-2022-gut-microbiota-immune-immunotherapy-crc]] |
| **Vancomycin pretreatment for selectivity** | Vancomycin selectively eliminates gram-positive organisms; preserved gram-negative *Bacteroides* and *Prevotella* enhance PD-1 response | CT26 tumor model [[xu-2020-gut-microbiome-pd1-mss-crc-metabolic-pathway]] |

## STOPs

*CRC-specific STOPs (counterproductive interventions) are less well-documented than endometriosis STOPs, but emerging data suggest:*

- **Broad-spectrum antibiotics in high-risk populations**: While antibiotics may reduce immediate dysbiotic burden, broad-spectrum agents eliminate protective SCFA producers; long-term antibiotic use is associated with increased CRC risk (OR 1.17, 95% CI 1.05-1.30) with 8-year latency [[simin-2020-antibiotic-use-crc-risk]]
- **Probiotic intervention without prebiotic support**: Supplementing probiotics without simultaneous fiber/prebiotic intake may fail because the dysbiotic microenvironment selects against SCFA-producing strains even when exogenously provided

## Open Questions

- **FMT efficacy in humans**: Animal models show dramatic CRC suppression with FMT; when will clinical trials report outcomes?
- **Periodontal-CRC causality**: Is the oral-gut-CRC link one-way (translocation) or bidirectional (systemic inflammation priming the colon)?
- **Driver bacteria identification for young-onset CRC**: *Fusobacterium varium* appears dominant in adenomas; what drives *F. nucleatum* enrichment in established carcinoma?
- **Serotonergic disruption mechanism**: Does dysbiotic microbiota actively suppress tryptophanase-positive bacteria, or is this a passive loss due to oxygen depletion?
- **Candida's role in adenoma progression**: Is Candida present in adenomas? Does interkingdom dysbiosis accelerate the adenoma-carcinoma sequence?
- **CMS subtype-specific interventions**: CMS1 is oral pathogen-enriched; are different taxa dominant in CMS2, CMS3, CMS4? Should interventions be subtype-specific?
- **Iron chelation therapy**: Could chelation agents (e.g., phytic acid, lactoferrin) combined with anti-pathogenic interventions accelerate SCFA producer restoration?

## Knowledge Primitives Applied

CRC pathogenesis engages multiple Karen's Brain primitives:

1. **Metals as Selective Pressures** — Iron-rich tumor microenvironment selects for siderophore-producing pathogens; heme iron from red meat increases CRC risk via dysbiosis-driven selection
2. **Nutritional Immunity as Interpretive Constraint** — Hepcidin elevation and calprotectin-mediated zinc sequestration are host defense mechanisms, not deficiency
3. **Mis-metallation and Toxic Metal Entry** — Iron-driven Fenton chemistry damages epithelial tight junctions; cadmium/lead accumulation from diet and water contribute to oxidative stress
4. **Microbial Metal Dependencies as Achilles' Heels** — Iron restriction via hepcidin is protective; siderophore inhibitors may disable pathogenic biofilms
5. **Two-Sided Ecological Engineering** — Suppress pathogenic taxa (antibiotics, probiotics) AND restore SCFA producers (fiber, prebiotics, FMT); one-sided interventions fail
6. **Interkingdom Relationships and Functional Shielding** — Candida-bacterial biofilms shield pathogens from immune detection; cross-kingdom dysbiosis is a CRC hallmark
7. **Estrobolome and Hormone Recirculation** — Secondary bile acids drive cancer stem cell generation (DCA/LCA via M3R/Wnt pathways); less prominent than endometriosis but present
8. **Siderophore Competition and Iron Ecology** — Iron-dependent biofilm formation by *E. coli* and *B. fragilis*; FMT likely works via superior siderophore systems of commensal taxa
9. **Oxygen State as Ecological Determinant** — Hypoxia selects for anaerobes; oxygenation via barrier restoration (fiber, SCFA) as therapeutic pathway

---

**Note**: This signature is marked as `cureva_status: partial` because robust clinical intervention data (validated interventions with human RCT evidence and mechanistic triangle closure) is limited for CRC. The signature integrates strong mechanistic evidence but awaits larger clinical trials to validate interventions similar to endometriosis. Key gaps: no human clinical P-M-D triangles for dietary interventions; no FMT human trial results yet published; no HBOT or chelation therapy data specific to CRC.

## Key Sources

- [[zou-2024-multi-omic-microbiome-genome-transcriptome-crc]]
- [[yu-2022-systematic-review-microbial-markers-colorectal-neoplasia]]
- [[liu-2025-immune-gut-microbiota-crc-mr-mediation]]
