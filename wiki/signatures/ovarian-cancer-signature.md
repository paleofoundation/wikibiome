---
title: "Ovarian Cancer — Microbiome Signature"
type: signature
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources:
  - alhilli-2025-dietary-fat-gut-microbiome-ovarian-cancer-mouse
  - al-natsheh-2022-stress-probiotics-ovarian-cancer-thesis
  - qin-2022-metagenomic-upper-reproductive-tract-ovarian-cancer
  - chen-2024-mediterranean-diet-ovarian-cancer-survival
  - reid-2017-epidemiology-ovarian-cancer-review
  - yammine-2020-dietary-fatty-acids-ovarian-cancer-epic
  - zhang-2022-metallomics-cancer-review
  - jaishankar-2014-heavy-metal-toxicity-mechanisms
source_count: 8
tags: [ovarian-cancer, cadmium, nickel, arsenic, iron, metalloestrogens, ferroptosis, microbiome, peritoneal-microbiome, multi-compartment]

metallomic_signature:
  elevated: [cadmium, nickel, arsenic, iron-tumor]
  depleted: [glutathione, selenium]

taxonomic_signature:
  enriched:
    - taxon: "[[fusobacterium-nucleatum]]"
      role: "Enriched in ovarian tumor tissue; FadA-mediated E-cadherin/beta-catenin disruption; NF-kB inflammation"
    - taxon: "[[escherichia-coli]]"
      role: "Gut enrichment; LPS production; siderophore-mediated iron scavenging in iron-accumulating tumor microenvironment"
    - taxon: "[[candida-albicans]]"
      role: "Identified in ovarian tumor tissue; beta-glucan immune modulation via Dectin-1; iron-dependent virulence"
  depleted:
    - taxon: "[[lactobacillus]]"
      role: "Cervicovaginal Lactobacillus dominance lost; protective acid barrier compromised; ascending infection enabled"
    - taxon: "[[faecalibacterium-prausnitzii]]"
      role: "Butyrate producer depleted in gut; loss removes anti-inflammatory protection"
    - taxon: "[[bifidobacterium]]"
      role: "SCFA producer depleted; heavy metal binder lost"

nutritional_immunity:
  elevated: [tumor-associated-macrophages, inflammatory-cytokines, LPS, transferrin-receptor-1]
  depleted: [glutathione, selenium, ferroportin]

ecological_features: [multi-compartment-oncobiosis, ferroptosis-resistance, ascending-infection-model, SCFA-depletion, metalloestrogen-signaling, diet-microbiome-cancer-axis]

virulence_enzymes: [LPS-biosynthesis, beta-glucuronidase, siderophores, oxidative-stress-tolerance-enzymes]

confidence:
  metallomic: moderate
  taxonomic: preliminary
  nutritional_immunity: preliminary
  ecological: preliminary
  virulence_enzymes: preliminary

associated_conditions:
  - condition: "[[endometriosis]]"
    shared_metals: [iron, cadmium, nickel]
    shared_taxa: [escherichia-coli, fusobacterium-nucleatum]
    shared_ecological: [estrogen-recirculation, iron-accumulation, biofilm]
    overlap_score: 0.65
  - condition: "[[breast-cancer]]"
    shared_metals: [cadmium, iron, nickel]
    shared_taxa: [escherichia-coli, fusobacterium-nucleatum]
    shared_ecological: [metalloestrogen-signaling, estrobolome-dysfunction]
    overlap_score: 0.60
  - condition: "[[colorectal-cancer]]"
    shared_metals: [iron, cadmium]
    shared_taxa: [fusobacterium-nucleatum, bacteroides-fragilis]
    shared_ecological: [SCFA-depletion, inflammation-driven-carcinogenesis]
    overlap_score: 0.55
  - condition: "[[pancreatic-cancer]]"
    shared_metals: [cadmium, nickel]
    shared_taxa: [proteobacteria-enriched]
    shared_ecological: [inflammation-driven, ferroptosis-resistance]
    overlap_score: 0.40

cureva_status: partial
validated_interventions: []
stops: []
karen_brain_primitives: [1, 2, 3, 4, 5, 6, 7, 8]
---

# Ovarian Cancer -- Microbiome Signature

## Overview

Ovarian cancer is the most lethal gynecological malignancy, with approximately 314,000 new cases and 207,000 deaths annually worldwide. Its poor prognosis stems from late-stage diagnosis (>70% at stage III/IV) and chemoresistance development. The microbiome signature of ovarian cancer is distinctive for its **multi-compartment oncobiosis** -- simultaneous dysbiosis across gut, cervicovaginal, peritoneal, and tumor tissue compartments -- and for the convergence of **metalloestrogen biology**, **ferroptosis resistance**, and **ascending infection pathways**.

From a metallomics perspective, ovarian cancer sits at the intersection of cadmium's picomolar-affinity estrogen receptor binding, iron-driven ferroptosis biology, and nickel-mediated epigenetic carcinogenesis. The metallomic dimension offers both mechanistic insight and therapeutic targets, particularly through ferroptosis-inducing strategies.

This signature is built from **8 source pages** in the wiki corpus, supplemented by entity page data.

## Metallomic Signature

**Confidence: moderate** -- strong mechanistic evidence for cadmium metalloestrogen biology and iron-ferroptosis connection; limited direct tissue quantification pairing metals with microbiome profiling in the same OC cohorts.

| Metal | Direction | Key Evidence |
|-------|-----------|-------------|
| **[[cadmium]]** | Elevated | Primary metalloestrogen. Binds ERalpha with Kd ~4.5 x 10^-10 M (nearly equivalent to estradiol). Activates ER-dependent transcription in OC cells at 1 uM. Also signals through GPR30/GPER in ER-negative cells at 50-500 nM. Half-life 12-30 years creates cumulative ovarian burden. |
| **[[nickel]]** | Elevated | Binds ERalpha noncompetitively; drives epigenetic changes (global loss of histone acetylation, H3K9 methylation) promoting carcinogenesis independently of estrogenic effects [[reid-2017-epidemiology-ovarian-cancer-review]] |
| **[[arsenic]]** | Elevated | Associated with increased OC risk through oxidative stress, DNA damage, and interference with DNA repair [[jaishankar-2014-heavy-metal-toxicity-mechanisms]] |
| **[[iron]]** | Elevated in tumor microenvironment | OC cells upregulate TfR1 and downregulate ferroportin, creating iron-accumulating phenotype. Endometriosis-associated subtypes (clear cell, endometrioid) develop in iron-rich environment from retrograde menstruation. |
| **Glutathione** | Depleted/dysregulated | Central to platinum resistance. Metal-induced depletion removes antioxidant protection [[jaishankar-2014-heavy-metal-toxicity-mechanisms]] |
| **[[selenium]]** | Depleted | Impaired selenoprotein antioxidant defense [[zhang-2022-metallomics-cancer-review]] |

The critical metallomic insight: **cadmium is a molecular mimic of estradiol** at picomolar concentrations, binding ERalpha with nearly identical affinity. Co-exposure with nickel produces potentially synergistic carcinogenic effects through converging estrogenic and epigenetic mechanisms.

## Environmental Exposures

| Source | Metals | Relevance |
|--------|--------|-----------|
| **Smoking** | Cadmium (primary) | 35-50% higher Cd body burden in smokers |
| **Diet** | Cd, As, Ni | Contaminated soils, rice, shellfish, leafy greens |
| **Occupational** | Cd, Ni, As | Battery production, smelting, electronics |
| **Talc** | As, trace metals | Historical concern for perineal talc use [[reid-2017-epidemiology-ovarian-cancer-review]] |
| **Water** | As | Arsenic-contaminated groundwater in endemic areas |
| **Endometriosis** | Iron | Repeated retrograde menstruation deposits iron in peritoneal/ovarian tissue |

## Nutritional Immunity Response

**Confidence: preliminary** -- scattered immune data across studies; no systematic nutritional immunity profiling in the source corpus.

| Marker | Direction | Evidence |
|--------|-----------|---------|
| **Transferrin receptor 1 (TfR1)** | Elevated on OC cells | Iron-accumulating phenotype; OC cells upregulate TfR1 to acquire iron |
| **Ferroportin** | Downregulated on OC cells | Traps iron intracellularly; creates Fenton chemistry substrate |
| **Tumor-associated macrophages** | Elevated | Inflammatory tumor microenvironment |
| **LPS** | Present in tumor tissue | From Gram-negative bacteria in tumor microbiome |
| **Glutathione** | Depleted in sensitive tumors / elevated in resistant | Central to ferroptosis resistance in platinum-resistant cells |
| **Selenium/selenoproteins** | Depleted | Impaired GPx-mediated antioxidant defense |

The iron metabolism dysregulation creates a therapeutic paradox: iron feeds tumor growth through Fenton chemistry AND could be the mechanism for tumor killing if ferroptosis resistance is overcome.

## Taxonomic Analysis

**Confidence: preliminary** -- limited source pages directly profiling OC microbiome; strongest data from entity page synthesis and animal model.

### Tumor and Peritoneal Microbiome

Ovarian cancer tissues harbor a distinct microbiome compared to normal ovarian tissue. **Fusobacterium** enrichment has been documented, paralleling its well-established role in colorectal cancer. *Fusobacterium nucleatum* promotes tumor progression through FadA adhesin binding to E-cadherin, activating beta-catenin signaling and NF-kB-mediated inflammation.

The peritoneal cavity, long assumed sterile, harbors a low-biomass microbiome altered in ovarian cancer. Ascitic fluid from OC patients contains distinct bacterial communities compared to benign conditions [[qin-2022-metagenomic-upper-reproductive-tract-ovarian-cancer]].

### Cervicovaginal Compartment

Loss of **Lactobacillus** dominance in the cervicovaginal compartment is a key feature. Non-Lactobacillus community states enable pathogen ascension to the upper reproductive tract, connecting to the ascending infection model of OC pathogenesis. Tubal ligation disrupts this pathway [[qin-2022-metagenomic-upper-reproductive-tract-ovarian-cancer]].

### Gut Microbiome

High-fat and ketogenic diets significantly accelerated epithelial ovarian cancer tumor growth compared to low-fat/high-carbohydrate diet in mouse models, with gut microbiome diversity markedly reduced, correlating with tumor growth [[alhilli-2025-dietary-fat-gut-microbiome-ovarian-cancer-mouse]]. Functional pathways in KD mice indicated polyamine biosynthesis and fatty acid oxidation enrichment.

### Mycobiome

*Candida* and *Malassezia* species have been identified in ovarian tumor tissue. Fungal beta-glucans can activate complement and modulate anti-tumor immunity through Dectin-1 receptor signaling. The mycobiome may interact with bacterial communities to shape the overall tumor microenvironment.

### Probiotic Evidence

E. coli Nissle 1917 reduced tumor burden via TLR-4 downregulation and IL-23 upregulation in unstressed mice, but **stress overrode probiotic benefits** -- EcN failed in stressed mice [[al-natsheh-2022-stress-probiotics-ovarian-cancer-thesis]]. This stress-probiotic interaction is a critical clinical consideration.

## Virulence Enzymes and Features

**Confidence: preliminary** -- functional predictions from taxonomic composition; limited direct enzyme measurement in OC-specific studies.

| Enzyme/Feature | Function | Taxon |
|----------------|----------|-------|
| **LPS biosynthesis** | TLR4 activation; NF-kB-driven inflammation; confirmed in tumor tissue by immunohistochemistry | Gram-negative bacteria |
| **Beta-glucuronidase** | Estrogen deconjugation; drives estrogen recirculation feeding estrogen-dependent OC | E. coli, Bacteroides |
| **Siderophores** | Iron piracy; competitive advantage in iron-accumulating tumor microenvironment | E. coli, Proteobacteria |
| **Oxidative stress tolerance enzymes** | Survival in ROS-rich tumor environment | Tumor-associated bacteria |

## Ecological State

**Confidence: preliminary** -- ecological features inferred from multi-source synthesis; limited direct ecological profiling in OC-specific studies.

### 1. Multi-Compartment Oncobiosis
Simultaneous dysbiosis across gut, cervicovaginal, peritoneal, and tumor tissue compartments. This multi-site disruption distinguishes ovarian cancer from cancers with primarily gut-centered dysbiosis.

### 2. Ferroptosis Resistance
Iron-accumulating OC cells should be vulnerable to ferroptosis (iron-dependent lipid peroxidation), but platinum-resistant cells upregulate the Keap1-Nrf2-GPX4 axis to resist iron-dependent cell death. Erastin and RSL3 (GPX4 inhibitors) can trigger ferroptosis in cisplatin-resistant OC cells, and combination with ferroptosis inducers may overcome platinum resistance.

### 3. Ascending Infection Model
Vaginal pathogen ascension to the upper reproductive tract is enabled by loss of Lactobacillus dominance. Tubal ligation disrupts this pathway, providing anatomical evidence for the ascending infection model [[qin-2022-metagenomic-upper-reproductive-tract-ovarian-cancer]].

### 4. Metalloestrogen Signaling
Cadmium and nickel function as metalloestrogens, driving proliferative responses in ovarian epithelial cells. This metallomic dimension explains why environmental metal exposure contributes to a hormonally-driven cancer through a non-hormonal mechanism.

### 5. Diet-Microbiome-Cancer Axis
High-fat and ketogenic diets accelerate EOC tumor growth via microbiome disruption [[alhilli-2025-dietary-fat-gut-microbiome-ovarian-cancer-mouse]]. Mediterranean diet shows survival benefit in OC patients [[chen-2024-mediterranean-diet-ovarian-cancer-survival]].

### 6. SCFA Depletion
Systematic loss of butyrate-producing genera in the gut removes anti-inflammatory protection and impairs Treg induction, enabling immune evasion by tumor cells.

## Associated Conditions

| Condition | Shared Metals | Shared Taxa | Shared Ecology | Overlap Score |
|-----------|--------------|-------------|----------------|---------------|
| **[[endometriosis]]** | Iron, Cd, Ni | E. coli, F. nucleatum | Estrogen recirculation, iron accumulation, biofilm | 0.65 |
| **[[breast-cancer]]** | Cd, Fe, Ni | E. coli, F. nucleatum | Metalloestrogen signaling, estrobolome dysfunction | 0.60 |
| **[[colorectal-cancer]]** | Fe, Cd | F. nucleatum, B. fragilis | SCFA depletion, inflammation-driven carcinogenesis | 0.55 |
| **[[pancreatic-cancer]]** | Cd, Ni | Proteobacteria enriched | Inflammation-driven, ferroptosis resistance | 0.40 |

**Endometriosis** is a direct risk factor for OC, with iron deposits from retrograde menstruation contributing to carcinogenesis in clear cell and endometrioid subtypes. The cadmium-nickel metalloestrogen connection links ovarian cancer to breast cancer through shared ERalpha binding mechanisms.

## Open Questions

1. **Direct metallomic quantification**: No study in the source corpus directly measures Cd, Ni, As tissue concentrations alongside microbiome profiling in the same OC cohort. This would cement Layer 1.
2. **Ferroptosis induction**: Can ferroptosis-inducing agents overcome platinum resistance in recurrent OC? GPX4 inhibitors show preclinical promise.
3. **Cervicovaginal screening**: Can non-Lactobacillus community state type serve as early OC biomarker, especially in BRCA carriers?
4. **Peritoneal microbiome specifics**: The peritoneal cavity microbiome in OC is acknowledged but incompletely characterized.
5. **Stress-probiotic interaction**: Chronic stress overrides probiotic benefits in mouse models -- can HPA axis interventions rescue probiotic efficacy?
6. **Estrobolome quantification**: Beta-glucuronidase activity in OC patient gut microbiome has not been directly measured.

## Karen's Brain Primitives Active

- **1. Metals as Selective Pressures** -- Cadmium, nickel, arsenic select for metal-tolerant pathobionts in tumor microenvironment
- **2. Nutritional Immunity as Interpretive Constraint** -- Iron accumulation in OC cells reflects dysregulated iron trafficking, not simple iron excess
- **3. Mis-metallation and Toxic Metal Entry** -- Cadmium mimics estradiol at ERalpha; nickel drives epigenetic carcinogenesis via histone modification
- **4. Microbial Metal Dependencies as Achilles' Heels** -- Iron-dependent ferroptosis as therapeutic strategy; restrict GPX4 to sensitize tumors
- **5. Two-Sided Ecological Engineering** -- Suppress pathobionts AND restore butyrate producers; antibiotics do the opposite
- **6. Interkingdom Relationships and Functional Shielding** -- Fungal-bacterial interactions in tumor microenvironment; Candida/Malassezia in tumor tissue
- **7. Estrobolome and Hormone Recirculation** -- Beta-glucuronidase-mediated estrogen recirculation feeds estrogen-dependent OC
- **8. Siderophore Competition and Iron Ecology** -- E. coli enrichment consistent with iron-scavenging competitive advantage in iron-accumulating tumor
