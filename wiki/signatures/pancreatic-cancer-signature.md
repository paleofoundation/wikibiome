---
title: "Pancreatic Cancer — Microbiome Signature"
type: signature
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources:
  - schilling-2020-urine-metallomics-pancreatic-cancer
  - zhang-2022-metallomics-cancer-review
  - meng-2025-oral-bacterial-fungal-microbiome-pancreatic-cancer-risk
  - guo-2021-tumor-microbiome-basal-like-pdac
  - luo-2025-microbiome-metabolome-interplay-pancreatic-cancer
  - kita-2020-ferrichrome-probiotics-pancreatic-cancer
  - daniel-2024-mendelian-randomization-gut-bacteria-metabolites-pdac
  - jiang-2023-mendelian-randomization-gut-microbiota-pancreatic-cancer
  - wei-2022-oral-mycobiota-pancreatic-adenocarcinoma
  - zhao-2025-intestinal-fungal-microbiota-acute-pancreatitis
  - maher-2024-synbiotics-immunomodulation-pdac-resection
  - liu-2026-gut-virome-anti-pd1-nsclc
  - li-2020-gut-microbiota-roles-pancreatic-cancer
  - kobayashi-2013-serum-metabolomics-pancreatic-cancer
  - lee-2019-bcaa-pancreatic-cancer-lipid-metabolism
  - li-2023-phage-based-peptides-pancreatic-cancer
  - berrington-2003-obesity-pancreatic-cancer-meta-analysis
  - huxley-2005-diabetes-pancreatic-cancer-meta-analysis
  - wang-2015-dietary-fiber-pancreatic-cancer-risk-meta-analysis
  - zhou-2010-quercetin-pancreatic-cancer-stem-cells
  - yamamura-2025-fmt-therapeutic-strategy-pancreatic-cancer
  - han-2024-lgg-gallium-polyphenol-intratumor-microbiota-pancreatic-cancer
source_count: 22
tags: [pancreatic-cancer, PDAC, copper, zinc, cadmium, metallomics, oral-microbiome, tumor-microbiome, mycobiome, metabolomics]

metallomic_signature:
  elevated: [copper, cadmium, arsenic]
  depleted: [zinc-tissue, calcium-urine, magnesium-urine, selenium]

taxonomic_signature:
  enriched:
    - taxon: "[[fusobacterium]]"
      role: "Pro-inflammatory oral/gut pathobiont -- oral-pancreatic translocation; enriched in PDAC tissue"
    - taxon: "[[porphyromonas]]"
      role: "Red complex periodontal pathogen -- P. gingivalis in 27-microbe MRS; hematogenous/biliary translocation to pancreas"
    - taxon: "[[pseudomonas-aeruginosa]]"
      role: "Predominant intratumoral genus -- Gammaproteobacteria dominant; bacterial CDD metabolizes gemcitabine"
    - taxon: "[[acinetobacter]]"
      role: "Enriched in basal-like PDAC subtype -- predicts worse survival; intratumoral pathobiont"
    - taxon: "[[streptococcus]]"
      role: "MR risk-increasing (OR 1.712) -- oral-gut axis pathobiont"
  depleted:
    - taxon: "[[faecalibacterium-prausnitzii]]"
      role: "Primary butyrate producer -- loss removes anti-inflammatory protection; responder-enriched phages target this taxon"
    - taxon: "[[roseburia]]"
      role: "Butyrate/propionate producer -- depleted; phages targeting Roseburia enriched in immunotherapy responders"
    - taxon: "[[dysbiosis|romboutsia]]"
      role: "MR-confirmed protective (OR 0.87) -- depleted in PDAC across multiple sensitivity analyses"
    - taxon: "[[senegalimassilia]]"
      role: "MR-confirmed protective (OR 0.635) -- depleted in PDAC"

nutritional_immunity:
  elevated: [copper-serum, LPS, pro-inflammatory-cytokines]
  depleted: [selenium, SCFAs, secondary-bile-acids]

ecological_features: [tumor-microbiome-subtypes, gemcitabine-resistance-bacterial-CDD, oral-pancreatic-translocation, chronic-low-grade-inflammation, bile-acid-dysmetabolism, BCAA-driven-lipogenesis]

virulence_enzymes: [bacterial-CDD-cytidine-deaminase, LPS-endotoxin, siderophores, bile-salt-hydrolases]

confidence:
  metallomic: moderate
  taxonomic: moderate
  nutritional_immunity: moderate
  ecological: moderate
  virulence_enzymes: moderate

associated_conditions:
  - condition: "[[colorectal-cancer]]"
    shared_metals: [iron, cadmium]
    shared_taxa: [fusobacterium, faecalibacterium-prausnitzii, roseburia]
    shared_ecological: [chronic-low-grade-inflammation, bile-acid-dysmetabolism, SCFA-depletion]
    overlap_score: 0.65
  - condition: "[[type-2-diabetes]]"
    shared_metals: [iron, cadmium, arsenic, nickel]
    shared_taxa: [escherichia-coli, enterobacteriaceae, faecalibacterium-prausnitzii, bifidobacterium]
    shared_ecological: [dysbiosis, SCFA-depletion, chronic-low-grade-inflammation]
    overlap_score: 0.58
  - condition: "[[obesity]]"
    shared_metals: [cadmium, iron]
    shared_taxa: [fusobacterium, streptococcus, faecalibacterium-prausnitzii, roseburia]
    shared_ecological: [chronic-low-grade-inflammation, SCFA-depletion]
    overlap_score: 0.48
  - condition: "[[gastric-cancer]]"
    shared_metals: [cadmium, iron]
    shared_taxa: [fusobacterium, porphyromonas-gingivalis]
    shared_ecological: [chronic-inflammation, oral-pathogen-translocation]
    overlap_score: 0.35

cureva_status: partial
validated_interventions: []
stops: []
karen_brain_primitives: [1, 4, 5, 6, 8, 9]
---

# Pancreatic Cancer -- Microbiome Signature

## Overview

Pancreatic cancer is the fifth leading cause of cancer death in Western nations. Pancreatic ductal adenocarcinoma (PDAC) accounts for >90% of cases, with five-year survival of approximately 12%. The microbiome signature framework reveals pancreatic cancer as a convergence disease where metallomic disruption, oral-gut-tumor microbiome translocation, and mycobiome dysbiosis create an ecology that promotes carcinogenesis, evades detection, and drives therapeutic resistance.

The signature spans multiple biological kingdoms -- bacteria, fungi, viruses, and phages -- and multiple body compartments -- oral cavity, gut, bile duct, and tumor tissue itself. The intratumoral microbiome directly mediates chemotherapy resistance through bacterial cytidine deaminase (CDD) metabolism of gemcitabine. This is not merely a biomarker story; the microbiome is a functional participant in disease progression.

This signature is built from 22 peer-reviewed papers spanning urine metallomics, tumor microbiome sequencing, a JAMA Oncology oral microbiome prospective study, Mendelian randomization, mycobiome profiling, metabolomics, and intervention trials.

## Metallomic Signature

Confidence: moderate -- strong discovery-phase data from Schilling et al. (2020, n=67) but requires prospective validation.

The landmark urine metallomics study demonstrated that a combined panel of Ca, Mg, Zn, and Cu achieves AUC 0.99 (sensitivity 95.2%, specificity 97.8%) for PDAC detection [[schilling-2020-urine-metallomics-pancreatic-cancer]]. NOTE: This is a discovery study requiring prospective validation.

| Metal | Direction | Key Evidence |
|-------|-----------|-------------|
| [[copper]] | Elevated (urine, serum) | ATP7A overexpression in PDAC; Cu elevated across cancer types as near-universal biomarker [[zhang-2022-metallomics-cancer-review]] |
| [[zinc]] | Elevated (urine), depleted (tissue) | Disrupted ZnT/ZIP transporters (ZIP3, SLC30A); Zn isotope fractionation as novel biomarker (median delta-66/64-Zn = -0.15 per mille vs +0.02 controls, p=0.002) [[schilling-2020-urine-metallomics-pancreatic-cancer]] |
| Ca | Decreased (urine) | S100 protein dysregulation; AUC 0.796 individually [[schilling-2020-urine-metallomics-pancreatic-cancer]] |
| Mg | Decreased (urine) | Disrupted cell proliferation; AUC 0.783 individually [[schilling-2020-urine-metallomics-pancreatic-cancer]] |
| [[cadmium]] | Elevated | Cd increase confirmed in pancreatic cancer tissue [[zhang-2022-metallomics-cancer-review]] |
| Se | Depleted | Impaired selenoprotein antioxidant defense [[zhang-2022-metallomics-cancer-review]] |

The healthy Zn-to-Cu concentration correlation (r2=0.66) is completely abolished in PDAC (r2=0.0002), indicating fundamental disruption of metal homeostasis [[schilling-2020-urine-metallomics-pancreatic-cancer]].

## Environmental Exposures

| Source | Metals | Relevance |
|--------|--------|-----------|
| Smoking | Cadmium (primary) | Each cigarette contains 1-2 ug Cd; established PC risk factor |
| Occupational | Cadmium, arsenic | Smelting, battery production, pesticides |
| Diet | Cadmium, arsenic | Contaminated soils, rice |
| Obesity/T2DM | Systemic metal dysregulation | Both established PC risk factors; converge on gut dysbiosis |
| Periodontal disease | -- | Oral pathobiont reservoir for pancreatic translocation |

## Nutritional Immunity Response

Confidence: moderate -- copper and selenium dysregulation well-documented; SCFA and bile acid depletion supported by multiple studies.

| Marker | Direction | Evidence |
|--------|-----------|---------|
| Copper (serum) | Elevated | Near-universal cancer biomarker; ATP7A overexpression [[zhang-2022-metallomics-cancer-review]] |
| LPS | Elevated | Gram-negative bacteria drive NF-kB and MAPK activation [[li-2020-gut-microbiota-roles-pancreatic-cancer]] |
| Pro-inflammatory cytokines | Elevated | LPS-driven NF-kB signaling; chronic low-grade inflammation |
| Selenium | Depleted | Impaired selenoprotein defense [[zhang-2022-metallomics-cancer-review]] |
| SCFAs | Depleted | SCFA producer depletion removes anti-inflammatory brake [[li-2020-gut-microbiota-roles-pancreatic-cancer]] |
| Secondary bile acids | Depleted/dysregulated | Deoxycholic acid promotes DNA damage via EGFR ligand amphiregulin [[li-2020-gut-microbiota-roles-pancreatic-cancer]] |

## Taxonomic Analysis

Confidence: moderate -- multiple independent lines of evidence (observational microbiome studies, Mendelian randomization, tumor sequencing) but sample sizes are generally modest.

### Oral Microbiome

The JAMA Oncology study by Meng et al. (2025) -- a nested case-control within 122,000 individuals (445 PC cases, median 8.8-year follow-up) -- established the oral microbiome as a prospective predictor of pancreatic cancer [[meng-2025-oral-bacterial-fungal-microbiome-pancreatic-cancer-risk]]. A microbial risk score (MRS) combining 27 bacterial and fungal species conferred 3.44-fold increased PC risk per 1-SD increase (95% CI 2.63-4.51). Key pathogens include P. gingivalis, E. nodatum, P. micra (red/orange complex periodontal pathogens), and *Candida tropicalis*.

### Tumor Microbiome

PDAC tumors harbor intratumoral bacteria, confirmed by 16S rRNA FISH and LPS immunohistochemistry [[guo-2021-tumor-microbiome-basal-like-pdac]]. Gammaproteobacteria dominate, with *Pseudomonas* as the predominant genus. Basal-like tumors are enriched in *Acinetobacter*, *Pseudomonas*, and *Sphingopyxis*, predicting significantly worse survival. *Pseudomonas* abundance correlated with altered amino acid metabolism [[luo-2025-microbiome-metabolome-interplay-pancreatic-cancer]].

### Gut Microbiome -- Enriched

| Taxon | Evidence | Pathogenic Mechanism |
|-------|----------|---------------------|
| [[fusobacterium]] | Enriched in PDAC gut and tumor | Pro-inflammatory; oral-gut translocation; NF-kB activation [[li-2020-gut-microbiota-roles-pancreatic-cancer]] |
| [[porphyromonas]] | Key MRS component | Periodontal pathogen; hematogenous translocation [[meng-2025-oral-bacterial-fungal-microbiome-pancreatic-cancer-risk]] |
| [[streptococcus]] | MR risk-increasing (OR 1.712) | Causal association [[jiang-2023-mendelian-randomization-gut-microbiota-pancreatic-cancer]] |
| Odoribacter | MR risk-increasing (OR 1.899) | Strongest MR risk signal [[jiang-2023-mendelian-randomization-gut-microbiota-pancreatic-cancer]] |

### Gut Microbiome -- Depleted

| Taxon | Normal Function | Evidence |
|-------|----------------|---------|
| [[faecalibacterium-prausnitzii]] | Primary butyrate producer; anti-inflammatory | Depleted; responder-enriched phages target Faecalibacterium [[liu-2026-gut-virome-anti-pd1-nsclc]] |
| [[roseburia]] | Butyrate/propionate production | Depleted; phages targeting Roseburia enriched in responders [[liu-2026-gut-virome-anti-pd1-nsclc]] |
| Romboutsia | Gut homeostasis | MR-confirmed protective (OR 0.87) [[daniel-2024-mendelian-randomization-gut-bacteria-metabolites-pdac]] |
| Senegalimassilia | Gut homeostasis | MR-confirmed protective (OR 0.635) [[jiang-2023-mendelian-randomization-gut-microbiota-pancreatic-cancer]] |

### Mycobiome

Oral and gut fungal communities are markedly altered in PDAC. *Aspergillus* achieves AUC 0.983 as a salivary biomarker, with Cladosporium at AUC 0.969 [[wei-2022-oral-mycobiota-pancreatic-adenocarcinoma]]. PDAC patients show dramatically expanded oral fungal diversity (5,022 vs 830 OTUs). In acute pancreatitis (a PC precursor), *Candida* dominates the fecal mycobiome at 61% [[zhao-2025-intestinal-fungal-microbiota-acute-pancreatitis]].

## Virulence Enzymes and Features

Confidence: moderate -- bacterial CDD mechanism is well-characterized; other enzymes inferred from taxonomic composition.

| Enzyme/Feature | Function | Taxon |
|----------------|----------|-------|
| Bacterial CDD (cytidine deaminase) | Metabolizes gemcitabine into inactive dFdU; directly mediates chemotherapy resistance | Gammaproteobacteria (intratumoral) |
| LPS (endotoxin) | TLR4 activation; NF-kB and MAPK signaling; chronic low-grade inflammation | All Gram-negatives |
| Siderophores | Iron piracy; competitive advantage in iron-dysregulated environment | E. coli, Proteobacteria |
| Bile salt hydrolases | Bile acid deconjugation; production of carcinogenic deoxycholic acid | Fusobacterium, Bacteroides |

The bacterial CDD enzyme represents a direct, targetable mechanism linking the intratumoral microbiome to clinical treatment failure. This is not correlation -- it is functional causation.

## Ecological State

Confidence: moderate -- multiple ecological features documented across independent studies.

### 1. Tumor Microbiome Subtypes
Basal-like PDAC harbors a distinct intratumoral microbiome (*Acinetobacter*, *Pseudomonas*, *Sphingopyxis*) that predicts worse survival [[guo-2021-tumor-microbiome-basal-like-pdac]]. The tumor microbiome reflects selection by the tumor microenvironment, not random colonization.

### 2. Gemcitabine Resistance via Bacterial CDD
Intratumoral Gammaproteobacteria express cytidine deaminase that converts gemcitabine to its inactive metabolite. This is a direct mechanistic link between the microbiome and treatment failure [[guo-2021-tumor-microbiome-basal-like-pdac]].

### 3. Oral-Pancreatic Translocation
Periodontal pathogens translocate to the pancreas via hematogenous or biliary routes. The oral MRS predates diagnosis by a median of 8.8 years, suggesting translocation is an early event [[meng-2025-oral-bacterial-fungal-microbiome-pancreatic-cancer-risk]].

### 4. Chronic Low-Grade Inflammation
LPS from Gram-negative bacteria activates NF-kB and MAPK signaling. SCFA depletion removes anti-inflammatory brake. Obesity and T2D -- both PC risk factors -- converge on this inflammatory dysbiosis [[li-2020-gut-microbiota-roles-pancreatic-cancer]].

### 5. Bile Acid Dysmetabolism
Altered bacterial bile acid deconjugation produces excess deoxycholic acid, which promotes DNA damage via EGFR ligand amphiregulin. This connects the gut microbiome to pancreatic carcinogenesis through the biliary-pancreatic anatomical axis.

### 6. BCAA-Driven Lipogenesis
BCAAs (leucine, isoleucine, valine) sustain PDAC growth by fueling lipogenesis through BCAT2/BCKDHA, independent of glycolysis [[lee-2019-bcaa-pancreatic-cancer-lipid-metabolism]]. Intratumoral *Pseudomonas* abundance correlates with amino acid metabolite alterations [[luo-2025-microbiome-metabolome-interplay-pancreatic-cancer]].

## Associated Conditions

| Condition | Shared Metals | Shared Taxa | Shared Ecology | Overlap Score |
|-----------|--------------|-------------|----------------|---------------|
| [[colorectal-cancer]] | Iron, cadmium | Fusobacterium, F. prausnitzii, Roseburia | Chronic low-grade inflammation, bile acid dysmetabolism, SCFA depletion | 0.65 |
| [[type-2-diabetes]] | Iron, cadmium, arsenic, nickel | E. coli, Enterobacteriaceae, F. prausnitzii, Bifidobacterium | Dysbiosis, SCFA depletion, chronic low-grade inflammation | 0.58 |
| [[obesity]] | Cadmium, iron | Fusobacterium, Streptococcus, F. prausnitzii, Roseburia | Chronic low-grade inflammation, SCFA depletion | 0.48 |
| [[gastric-cancer]] | Cadmium, iron | Fusobacterium, P. gingivalis | Chronic inflammation, oral pathogen translocation | 0.35 |

The colorectal-pancreatic overlap is the strongest, reflecting shared oral pathobiont translocation pathways, SCFA producer depletion, and bile acid dysmetabolism. T2D and obesity share risk factors with PDAC through converging gut dysbiosis.

## Open Questions

1. Oral microbiome screening: Can the Meng 2025 MRS (27 species) be reduced to a clinically feasible screening panel? What is the cost-effectiveness in average-risk populations?
2. Intratumoral antibiotic targeting: Can narrow-spectrum antibiotics or phage therapy selectively eliminate CDD-producing Gammaproteobacteria without collateral damage?
3. Mycobiome validation: Aspergillus AUC 0.983 in saliva -- does this replicate in prospective validation? What is the lead time before diagnosis?
4. Metal homeostasis restoration: Does correcting the Zn/Cu ratio imbalance (r2 collapse from 0.66 to 0.0002) alter disease trajectory?
5. Virome-guided immunotherapy: Can phage profiling guide immunotherapy selection for PDAC patients?
6. FMT from long-term survivors: What specific taxa or metabolites from survivor microbiomes drive anti-tumor immunity?

## Karen's Brain Primitives Active

- 1. Metals as Selective Pressures -- Cu elevation + Zn tissue depletion + Cd/As exposure creates pro-carcinogenic metal ecology
- 4. Microbial Metal Dependencies as Achilles' Heels -- Ferrichrome (L. casei siderophore) exploits iron dependency to induce tumor cell death via p53 activation [[kita-2020-ferrichrome-probiotics-pancreatic-cancer]]
- 5. Two-Sided Ecological Engineering -- Must suppress Gammaproteobacteria/Fusobacterium AND restore SCFA producers; synbiotics RCT demonstrates this approach [[maher-2024-synbiotics-immunomodulation-pdac-resection]]
- 6. Interkingdom Relationships and Functional Shielding -- Bacterial-fungal cooperation (Aspergillus, Candida) in tumor ecology; trans-kingdom MRS in oral cavity
- 8. Siderophore Competition and Iron Ecology -- Ferrichrome from L. casei induces ferroptosis in PDAC cells; fungal iron acquisition reshapes mycobiome
- 9. Oxygen State as Ecological Determinant -- Tumor hypoxia selects for anaerobic/microaerophilic intratumoral microbiome composition
