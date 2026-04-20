---
title: "Cardiovascular Disease — Microbiome Signature"
type: signature
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources:
  - lim-2023-plasma-metallomics-ami
  - jie-2017-gut-microbiome-acvd
  - fromentin-2022-microbiome-metabolome-cardiometabolic-spectrum
  - tonelli-2023-oral-microbiome-cvd-pathophysiology
  - wang-2022-gut-microbiota-health-cvd-review
  - chambers-2018-scfa-metabolic-cardiovascular-health
  - lu-2022-scfas-cardiovascular-metabolic-disease
  - paeslack-2022-tryptophan-metabolites-vascular-inflammation-cvd
  - almeida-2023-gut-microbiota-cardiovascular-axis
  - qiu-2023-gut-mycobiome-hypertension-ckd
  - zou-2022-mycobiome-dysbiosis-hypertension-light-chains
  - wei-2025-gut-mycobiome-cardiometabolic-disease
  - liu-2025-cardiometabolic-nickel
  - rasin-2025-cadmium-exposure-health-review
  - ghosh-2023-heavy-metals-gut-barrier-integrity
  - zhu-2024-toxic-essential-metals-gut-microbiota
  - pendergrass-2026-heavy-metals-obesity-epidemic
source_count: 17
tags: [cardiovascular-disease, CVD, atherosclerosis, hypertension, heart-failure, TMAO, copper, selenium, iron, lead, cadmium, nickel, SCFAs, bile-acids, microbiome, mycobiome]

metallomic_signature:
  elevated: [copper, lead, cadmium, nickel]
  depleted: [selenium, iron, manganese]

taxonomic_signature:
  enriched:
    - taxon: "[[enterobacteriaceae]]"
      role: "TMA lyase (CutC/D) carriers — TMAO production driving atherosclerosis; LPS biosynthesis; siderophore-mediated iron piracy"
    - taxon: "[[streptococcus]]"
      role: "Oral-to-gut translocation; enriched in ACVD and infective endocarditis; molecular mimicry (M protein in rheumatic heart disease)"
    - taxon: "[[escherichia-coli]]"
      role: "TMA/TMAO production; LPS source; enriched virulence factors in ACVD; copper homeostasis systems conferring survival advantage"
    - taxon: "[[eggerthella-lenta]]"
      role: "Enriched in ACVD metagenome; associated with drug metabolism confounding"
    - taxon: "[[ruminococcus-gnavus]]"
      role: "Enriched in ACVD; pro-inflammatory mucin degrader"
    - taxon: "[[candida-albicans]]"
      role: "Mycobiome: enriched in atherosclerosis and heart failure; barrier disruption via epithelial damage"
    - taxon: "[[malassezia]]"
      role: "Mycobiome: progressive enrichment from normotensive to pre-hypertension to hypertension; correlated with immunoglobulin light chains"
  depleted:
    - taxon: "[[roseburia]]"
      role: "Butyrate producer — lost in ACVD; depletion reduces SCFA-mediated blood pressure regulation and anti-inflammatory signaling"
    - taxon: "[[faecalibacterium-prausnitzii]]"
      role: "Major butyrate producer — depleted in ACVD; loss reduces gut barrier integrity and anti-inflammatory IL-10 production"
    - taxon: "[[lachnospiraceae]]"
      role: "SCFA-producing family — reduced capacity for butyrate synthesis in ACVD"
    - taxon: "[[clostridiales]]"
      role: "Butyrate producers and protective IPA (indole-3-propionic acid) producers — depleted in untreated ACVD"
    - taxon: "[[mycobiome|mucor]]"
      role: "Mycobiome: M. racemosus decreased in CHD; potentially protective fungal taxon"

nutritional_immunity:
  elevated: [ceruloplasmin, hepcidin, calprotectin, lipocalin-2]
  depleted: [selenium, selenoproteins, glutathione-peroxidase]

ecological_features: [endotoxemia, biofilm, oral-gut-translocation, TMAO-accumulation, indoxyl-sulfate-accumulation, fungal-bacterial-co-dysbiosis]

virulence_enzymes: [TMA-lyase-CutC-CutD, LPS-biosynthesis-enzymes, siderophores, beta-glucuronidase]

confidence:
  metallomic: high
  taxonomic: high
  nutritional_immunity: moderate
  ecological: high
  virulence_enzymes: moderate

associated_conditions:
  - condition: "[[type-2-diabetes]]"
    shared_metals: [iron, nickel, cadmium]
    shared_taxa: [enterobacteriaceae, escherichia-coli, roseburia-depleted, faecalibacterium-depleted]
    shared_ecological: [endotoxemia, SCFA-depletion]
    overlap_score: 0.68
  - condition: "[[obesity]]"
    shared_metals: [iron, cadmium]
    shared_taxa: [enterobacteriaceae, faecalibacterium-depleted, lachnospiraceae-depleted]
    shared_ecological: [endotoxemia, SCFA-depletion]
    overlap_score: 0.52
  - condition: "[[chronic-kidney-disease]]"
    shared_metals: [lead, cadmium]
    shared_taxa: [enterobacteriaceae, escherichia-coli]
    shared_ecological: [endotoxemia, indoxyl-sulfate-accumulation]
    overlap_score: 0.48
  - condition: "[[depression]]"
    shared_metals: [iron, copper]
    shared_taxa: [faecalibacterium-depleted, lachnospiraceae-depleted, roseburia-depleted]
    shared_ecological: [SCFA-depletion, tryptophan-shunting]
    overlap_score: 0.42

cureva_status: partial
validated_interventions: []
stops: []
karen_brain_primitives: [1, 2, 4, 5, 6, 8, 9]
---

# Cardiovascular Disease — Microbiome Signature

## Overview

Cardiovascular disease (CVD) -- encompassing atherosclerosis, coronary artery disease, hypertension, myocardial infarction, heart failure, and stroke -- is the leading cause of death globally. The gut-heart axis has emerged as a central paradigm linking microbial metabolites to CVD pathogenesis. This signature integrates metallomic profiling from ICP-MS/MS studies, metagenome-wide association data from landmark cohorts (ACVD n=218, MetaCardis n=1,241), SCFA biology, tryptophan metabolite pathways, and emerging mycobiome evidence. The convergence of **copper elevation and selenium depletion** in acute events, chronic **lead and cadmium** exposure, **TMAO overproduction** by enriched Enterobacteriaceae, and **SCFA depletion** from butyrate-producer loss creates a multi-layered framework linking metal dyshomeostasis to cardiovascular outcomes through the gut microbiome.

## Metallomic Signature

**Confidence: high** -- supported by ICP-MS/MS case-control data ([[lim-2023-plasma-metallomics-ami]], n=167), NHANES epidemiological analyses ([[liu-2025-cardiometabolic-nickel]]), and multiple reviews.

| Metal | Direction | Evidence |
|-------|-----------|---------|
| **[[copper]]** | Elevated | 0.85 vs 0.73 ug/mL in AMI (p<0.01); persists 1 month post-PCI; ceruloplasmin-mediated acute phase response ([[lim-2023-plasma-metallomics-ami]], case-control, n=167) |
| **[[selenium]]** | Depleted | 90.31 vs 99.98 ng/mL in AMI (p<0.01); persistent depression at 6 months; impairs selenoprotein antioxidant defense ([[lim-2023-plasma-metallomics-ami]]) |
| **[[iron]]** | Decreased | 0.95 vs 1.17 ug/mL in AMI; Fe/Cu ratio significantly decreased (p<0.0001) ([[lim-2023-plasma-metallomics-ami]]) |
| **[[lead]]** | Elevated (chronic) | Drives hypertension and atherosclerosis via endothelial damage; reduces claudin/occludin expression ([[ghosh-2023-heavy-metals-gut-barrier-integrity]], animal-model) |
| **[[cadmium]]** | Elevated (chronic) | Endothelial damage, LDL elevation, atherosclerosis promotion; 25-30 year half-life; smoking is predominant source ([[rasin-2025-cadmium-exposure-health-review]], expert-opinion) |
| **[[nickel]]** | Elevated (urinary) | NHANES data: 2nd and 3rd UNi quartiles show 3.57x and 3.61x CVD prevalence; inverse U-shaped dose-response ([[liu-2025-cardiometabolic-nickel]], cross-sectional) |

The **Cu/Se ratio** is the most discriminating element-pair ratio for AMI. A random forest classifier incorporating Cu/Se and Fe/Cu ratios alongside traditional risk factors achieved an AUC of 0.942 (95% CI 0.889-0.970) ([[lim-2023-plasma-metallomics-ami]]). Essential elements exhibit ambivalent (U- or J-shaped) relationships with AMI risk, meaning both deficiency and excess are harmful.

## Environmental Exposures

The metallomic signature traces to three primary exposure pathways:

1. **Smoking** -- the predominant determinant of plasma Cd, Al, Rb, Sr, U, V levels ([[lim-2023-plasma-metallomics-ami]]); smokers show 4-5x higher blood Cd ([[rasin-2025-cadmium-exposure-health-review]])
2. **Occupational/industrial exposure** -- Pb from legacy paint and plumbing; Ni from industrial processes; Cd from battery manufacturing and smelting
3. **Dietary exposure** -- Cd from phosphate fertilizer-contaminated foods; Ni from plant-based foods (legumes, nuts, whole grains); Pb from contaminated water systems
4. **Air pollution** -- Ni in ambient PM2.5/PM10 associated with worsening cardiovascular morbidity across 38 studies ([[liu-2025-cardiometabolic-nickel]])

## Nutritional Immunity Response

**Confidence: moderate** -- ceruloplasmin and selenium data are well-supported; hepcidin and calprotectin evidence is inferred from related conditions rather than CVD-specific studies.

- **Ceruloplasmin elevated** -- acute phase response driving copper elevation in AMI; Cu remains elevated 1 month post-PCI ([[lim-2023-plasma-metallomics-ami]])
- **Hepcidin elevated** -- iron sequestration contributing to functional iron deficiency despite adequate stores; parallels the nutritional immunity pattern seen in chronic inflammatory conditions
- **Selenoproteins depleted** -- persistent selenium depression at 6 months post-AMI impairs glutathione peroxidase and thioredoxin reductase antioxidant defense ([[lim-2023-plasma-metallomics-ami]])
- **Calprotectin/lipocalin-2** -- inferred from the gut barrier disruption and Enterobacteriaceae enrichment documented in ACVD ([[jie-2017-gut-microbiome-acvd]]); direct CVD-specific measurements are limited

## Taxonomic Analysis

**Confidence: high** -- supported by the Jie 2017 metagenome-wide study (n=405), MetaCardis multi-omic study (n=1,241), and multiple mycobiome studies.

### Enriched Taxa

**[[enterobacteriaceae]]** and **[[escherichia-coli]]** are the central pathogenic taxa in the CVD signature. The Jie 2017 ACVD study found functional enrichment of TMA lyase genes (CutC/D, YeaW/X) in ACVD gut metagenomes, directly linking microbial TMAO production capacity to disease state ([[jie-2017-gut-microbiome-acvd]], cross-sectional, n=405). These organisms are avid iron scavengers via siderophores, thriving in the iron-dysregulated CVD gut environment.

**[[streptococcus]]** spp. are enriched in ACVD and share enrichment with liver cirrhosis ([[jie-2017-gut-microbiome-acvd]]). Oral Streptococcus species translocate to atherosclerotic plaques through inflamed periodontium, with viridans group streptococci being the most common cause of infective endocarditis ([[tonelli-2023-oral-microbiome-cvd-pathophysiology]]).

**[[ruminococcus-gnavus]]** -- a pro-inflammatory mucin degrader enriched in ACVD ([[jie-2017-gut-microbiome-acvd]]).

**Fungal enrichment**: **[[candida-albicans]]** increased in atherosclerosis and heart failure patients with elevated intestinal permeability ([[wei-2025-gut-mycobiome-cardiometabolic-disease]]). **[[malassezia]]** shows progressive enrichment from normotensive to pre-hypertension to hypertension, positively correlated with immunoglobulin light chains ([[zou-2022-mycobiome-dysbiosis-hypertension-light-chains]]).

### Depleted Taxa

**[[roseburia]]**, **[[faecalibacterium-prausnitzii]]**, and **[[clostridiales]]** -- the core butyrate-producing consortium -- are depleted in ACVD ([[jie-2017-gut-microbiome-acvd]]). Their loss reduces SCFA-mediated cardioprotective effects including blood pressure regulation via Olfr78/GPR41, anti-atherosclerotic HDAC3 inhibition, post-MI M2 macrophage polarization, and gut barrier maintenance preventing LPS translocation ([[lu-2022-scfas-cardiovascular-metabolic-disease]]; [[chambers-2018-scfa-metabolic-cardiovascular-health]]).

Metal-induced depletion of these SCFA producers creates a vicious cycle: barrier disruption permits LPS translocation, driving endotoxemia and vascular inflammation, which further disrupts the gut environment ([[pendergrass-2026-heavy-metals-obesity-epidemic]]).

## Virulence Enzymes and Features

**Confidence: moderate** -- TMA lyase enrichment is directly demonstrated; other enzymes are inferred from taxonomic enrichment patterns.

- **TMA lyase (CutC/CutD, YeaW/X)** -- functionally enriched in ACVD metagenomes; converts dietary choline, phosphatidylcholine, and L-carnitine to TMA, which is oxidized to TMAO in the liver; TMAO promotes atherosclerosis via cholesterol deposition, platelet activation, and MAPK-mediated endothelial damage ([[jie-2017-gut-microbiome-acvd]])
- **LPS biosynthesis enzymes** -- enriched in ACVD functional metagenome; LPS translocation triggers TLR4/NLR/NLRP3 inflammasome activation ([[jie-2017-gut-microbiome-acvd]]; [[wang-2022-gut-microbiota-health-cvd-review]])
- **Siderophores** -- produced by enriched Enterobacteriaceae; enable iron piracy in the iron-depleted CVD gut environment ([[jie-2017-gut-microbiome-acvd]])
- **Bacterial tryptophanase** -- converts tryptophan to indole, which is sulfated to **indoxyl sulfate** (pro-atherogenic uremic toxin); cadmium exposure upregulates indoxyl sulfate production ([[paeslack-2022-tryptophan-metabolites-vascular-inflammation-cvd]])

## Ecological State

**Confidence: high** -- supported by multiple independent lines of evidence across gut barrier, metabolite, and multi-omic studies.

The CVD gut ecosystem is characterized by:

1. **Endotoxemia** -- LPS translocation through a compromised gut barrier drives systemic vascular inflammation; LPS biosynthesis is functionally enriched in ACVD metagenomes ([[jie-2017-gut-microbiome-acvd]]). Lead and cadmium directly attack tight junction proteins (ZO-1, occludin, claudin-1) ([[ghosh-2023-heavy-metals-gut-barrier-integrity]])
2. **TMAO accumulation** -- the most established microbiome-derived CVD metabolite; high TMAO levels increase atherosclerosis risk via cholesterol deposition and platelet activation ([[wang-2022-gut-microbiota-health-cvd-review]])
3. **Indoxyl sulfate escalation** -- a uremic toxin showing escalation from dysmetabolism to IHD in the MetaCardis trajectory; promotes vascular inflammation, procoagulant state, and endothelial dysfunction ([[fromentin-2022-microbiome-metabolome-cardiometabolic-spectrum]]; [[paeslack-2022-tryptophan-metabolites-vascular-inflammation-cvd]])
4. **SCFA depletion** -- reduced butyrate production from Clostridia/Roseburia/Faecalibacterium loss disrupts blood pressure regulation (Olfr78/GPR41), anti-inflammatory signaling, and gut barrier maintenance ([[chambers-2018-scfa-metabolic-cardiovascular-health]])
5. **Oral-gut translocation** -- oral bacteria (Streptococcus, S. aureus) seed systemic circulation through inflamed periodontium, directly inoculating atherosclerotic plaques ([[tonelli-2023-oral-microbiome-cvd-pathophysiology]])
6. **Fungal-bacterial co-dysbiosis** -- Candida and Malassezia enrichment compounds bacterial dysbiosis; Candida directly damages epithelial cells, amplifying metal-induced barrier disruption ([[wei-2025-gut-mycobiome-cardiometabolic-disease]])

The MetaCardis study identified a continuous **dysmetabolism-to-IHD trajectory** with 767 dysmetabolism features, 283 IHD-specific features, and progressive gene richness decline from healthy to heart failure ([[fromentin-2022-microbiome-metabolome-cardiometabolic-spectrum]], cross-sectional, n=1,241).

## Associated Conditions

CVD shares substantial signature overlap with multiple metabolic and inflammatory conditions:

### [[type-2-diabetes]] (overlap score: 0.68)
The strongest overlap. Shared iron dysregulation, nickel/cadmium exposure, Enterobacteriaceae enrichment, SCFA-producer depletion, and TMAO pathway. T2D doubles CVD risk. The MetaCardis study documented a continuous dysmetabolism-to-IHD trajectory spanning both conditions ([[fromentin-2022-microbiome-metabolome-cardiometabolic-spectrum]]).

### [[obesity]] (overlap score: 0.52)
Shared metabolic inflammation, gut barrier dysfunction, Enterobacteriaceae enrichment, and Faecalibacterium/Lachnospiraceae depletion. Adipose tissue is a source of pro-inflammatory cytokines (TNF-alpha, IL-6) that drive atherosclerosis. Cadmium functions as an environmental obesogen ([[pendergrass-2026-heavy-metals-obesity-epidemic]]).

### [[chronic-kidney-disease]] (overlap score: 0.48)
Shared uremic toxin accumulation (indoxyl sulfate, p-cresol sulfate), lead/cadmium exposure, and Enterobacteriaceae enrichment. CKD accelerates atherosclerosis. Gut mycobiome alterations overlap in HTN+CKD patients ([[qiu-2023-gut-mycobiome-hypertension-ckd]]).

### [[depression]] (overlap score: 0.42)
Shared gut-brain axis disruption, tryptophan pathway shifts toward pro-inflammatory kynurenine, SCFA depletion, and butyrate-producer loss. CVD patients have 2-3x higher depression rates. Depression independently increases CVD mortality.

## Open Questions

1. **Causal direction of Cu/Se dysregulation** -- Is the copper elevation / selenium depletion a cause or consequence of AMI? Prospective studies with pre-event metallomic profiling are needed.
2. **Drug confounding** -- Polypharmacy (fondaparinux, acarbose, metoprolol, atorvastatin) was the major confounding factor in the Jie 2017 study ([[jie-2017-gut-microbiome-acvd]]). How much of the observed dysbiosis is drug-induced vs. disease-driven?
3. **Nickel dose-response** -- The inverse U-shaped relationship between urinary nickel and CVD prevalence needs clarification with prospective data ([[liu-2025-cardiometabolic-nickel]]).
4. **Mycobiome therapeutic targets** -- Can antifungal interventions targeting Candida/Malassezia reduce CVD risk, or is fungal enrichment a downstream consequence?
5. **TMAO threshold** -- What plasma TMAO level constitutes clinically actionable cardiovascular risk, and can TMA lyase inhibitors serve as CVD therapeutics?
6. **Multi-site dysbiosis** -- Does oral-gut co-dysbiosis have a synergistic effect on CVD risk beyond either site alone?

## Karen's Brain Primitives Active

- **Primitive 1: Metals as Selective Pressures** -- Copper elevation and Pb/Cd exposure select for metal-tolerant Enterobacteriaceae while eliminating metal-sensitive butyrate producers (Roseburia, Faecalibacterium, Clostridiales)
- **Primitive 2: Nutritional Immunity as Interpretive Constraint** -- Iron depletion in AMI may reflect hepcidin-mediated host defense rather than true deficiency; selenium depletion reflects selenoprotein consumption during oxidative stress
- **Primitive 4: Microbial Metal Dependencies as Achilles' Heels** -- Enterobacteriaceae depend on iron via siderophores; restricting iron availability could reduce TMA lyase-carrying pathogen load
- **Primitive 5: Two-Sided Ecological Engineering** -- Suppress TMAO-producing Enterobacteriaceae AND restore SCFA-producing Roseburia/Faecalibacterium to re-establish the Olfr78/GPR41 blood pressure buffering system
- **Primitive 6: Interkingdom Relationships and Functional Shielding** -- Candida/Malassezia enrichment compounds bacterial dysbiosis and barrier disruption in CVD
- **Primitive 8: Siderophore Competition and Iron Ecology** -- Enterobacteriaceae siderophore production enables iron piracy in the CVD gut; competitive exclusion strategies may be viable
- **Primitive 9: Oxygen State as Ecological Determinant** -- Butyrate-producer depletion may shift the colonic environment toward higher oxygen tension, further favoring facultative anaerobes like E. coli
