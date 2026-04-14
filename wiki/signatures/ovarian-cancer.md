---
title: "Ovarian Cancer — Microbiome Signature"
type: signature
created: 2026-04-14
updated: 2026-04-14
last_substantive_update: 2026-04-14
sources: [zhou-2019-microbiome-biodiversity-ovarian-carcinoma.md, wang-2020-bacteria-distribution-ovarian-cancer-tissues.md, gong-2025-gut-microbiota-diagnostic-ovarian-tumor.md, nene-2019-cervicovaginal-microbiome-brca1-ovarian-cancer.md, guo-2025-causal-gut-microbiota-metabolites-ovarian-cancer-mr.md, zhang-2024-blood-metabolites-gut-microbiota-ovarian-cancer-mr.md, zhang-2024-ovarian-cancer-microbiome-inflammatory-microenvironment.md, sipos-2021-microbiome-ovarian-cancer-oncobiosis-review.md, miao-2020-peritoneal-microbial-features-ovarian-cancer-diagnostics.md, deng-2025-microbiota-derived-metabolites-ascites-ovarian-gi-cancer.md, chuan-2026-inflammatory-cytokines-gut-microbiota-ovarian-cancer-mr.md, hawkins-2022-antibiotics-microbiome-ovarian-cancer.md, zorea-2023-traf3-b-cells-microbiome-ovarian-cancer.md, alhilli-2025-dietary-fat-gut-microbiome-ovarian-cancer-mouse.md, qin-2022-metagenomic-upper-reproductive-tract-ovarian-cancer.md, lee-2021-peritoneal-microbiota-ovarian-endometrioma.md, englert-golon-2025-microbiota-ovarian-cancer-treatment-review.md, montoya-2013-metagenomic-analyses-bv-ovarian-cancer-thesis.md, fong-2011-metabolites-normal-ovary-ovarian-cancer.md, poisson-2015-metabolomic-platinum-resistance-ovarian-cancer.md, geng-2026-probiotic-therapy-gut-microbiota-omega-oxidation-ovarian-cancer.md, tian-2026-tripterygium-lactobacillus-cisplatin-ovarian-cancer.md, chen-2024-mediterranean-diet-ovarian-cancer-survival.md, dash-2015-indole-3-carbinol-dim-egfr-ovarian-cancer.md, taylor-harding-2012-indole-3-carbinol-bortezomib-ovarian-cancer.md, zheng-2018-dietary-fiber-ovarian-cancer-risk-meta-analysis.md, al-natsheh-2022-stress-probiotics-ovarian-cancer-thesis.md, zhu-2026-indole-3-carbinol-cisplatin-ovarian-fibrosis.md, kim-2014-endometriosis-ovarian-cancer-risk-meta-analysis.md, reid-2017-epidemiology-ovarian-cancer-review.md, yammine-2020-dietary-fatty-acids-ovarian-cancer-epic.md]
source_count: 31
tags: [ovarian-cancer, cadmium, nickel, arsenic, iron, ferroptosis, metalloestrogens, estrobolome, oncobiosis, peritoneal-microbiome, multi-compartment]

metallomic_signature:
  elevated: [cadmium, nickel, arsenic, iron]
  depleted: [glutathione, taurine]

taxonomic_signature:
  enriched:
    - taxon: "[[escherichia-coli]]"
      role: "Markedly enriched in gut of OC patients; LPS production; siderophore iron scavenging"
    - taxon: "[[proteobacteria]]"
      role: "Phylum-level increase in tumor tissue; high inflammatory potential; Proteobacteria/Firmicutes ratio elevated"
    - taxon: "[[propionibacterium]]"
      role: "P. acnes enriched in tumor tissue; inflammatory potential"
    - taxon: "[[candida-albicans]]"
      role: "Identified in ovarian tumor tissue; beta-glucan immune modulation via Dectin-1"
    - taxon: "[[dialister]]"
      role: "Causal risk factor identified by two independent Mendelian randomization studies"
  depleted:
    - taxon: "[[lactobacillus]]"
      role: "Cervicovaginal dominance lost; non-Lactobacillus community state OR 2.80 for OC in women <50"
    - taxon: "[[coprococcus]]"
      role: "Butyrate producer depleted in gut (n=382)"
    - taxon: "[[bifidobacterium]]"
      role: "MR-identified protective factor; SCFA producer; heavy metal binder"
    - taxon: "[[roseburia]]"
      role: "Butyrate producer; depleted at baseline, restored by probiotic therapy"
    - taxon: "[[butyricicoccus]]"
      role: "SCFA producer depleted in OC gut"
    - taxon: "[[oscillibacter]]"
      role: "SCFA producer depleted in OC gut"
    - taxon: "[[saccharomyces-cerevisiae]]"
      role: "Archaeal/fungal diversity reduced in tumor tissue (Crenarchaeota depleted)"

nutritional_immunity:
  elevated: [tumor-associated-macrophages, inflammatory-cytokines, LPS, lysophosphatidic-acid, TRAF3-immune-suppression]
  depleted: [glutathione, taurine, B-cell-IgA-response, indole-3-propionic-acid, omega-oxidation-enzymes]

ecological_features: [multi-compartment-oncobiosis, SCFA-depletion, ascending-infection-model, ferroptosis-resistance, polyamine-biosynthesis-upregulation, oxidative-stress-tolerance, diet-microbiome-cancer-axis, antibiotic-vulnerability, tryptophan-kynurenine-shunting]

virulence_enzymes: [LPS-biosynthesis, beta-glucuronidase, oxidative-stress-tolerance-enzymes, Keap1-Nrf2-GPX4-axis, siderophores]

confidence:
  metallomic: moderate
  taxonomic: moderate
  nutritional_immunity: preliminary
  ecological: moderate
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

cureva_status: complete
validated_interventions: [dietary-fiber-ovarian-cancer, mediterranean-diet-ovarian-cancer, indole-3-carbinol-ovarian-cancer]
stops: [stop-antibiotics-during-chemotherapy-ovarian-cancer, stop-probiotics-without-stress-management-ovarian-cancer]
karen_brain_primitives: [1, 2, 3, 4, 5, 6, 7, 8]
---

# Ovarian Cancer — Microbiome Signature

The most lethal gynecological malignancy (~314,000 new cases, ~207,000 deaths annually), with >70% diagnosed at stage III/IV. The microbiome signature of ovarian cancer is distinctive for its **multi-compartment oncobiosis** — simultaneous dysbiosis across gut, cervicovaginal, peritoneal, and tumor tissue compartments — and for the convergence of metalloestrogen biology, ferroptosis resistance, and ascending infection pathways. The microbiome is not merely associated with ovarian cancer; it is functionally required for immune surveillance of cancer stem cells and for the efficacy of chemotherapy.

## Metallomic Signature

**Confidence: moderate** — strong mechanistic evidence from entity page and epidemiological associations, but limited direct tissue quantification in the ingested source corpus.

- **[[Cadmium]] elevated**: Primary metalloestrogen. Binds ERalpha with Kd ~4.5 x 10^-10 M (nearly equivalent to estradiol). Activates ER-dependent transcription in OC cells at 1 uM. Also signals through GPR30/GPER in ER-negative cells at 50-500 nM. Half-life 12-30 years, creating cumulative ovarian tissue burden. Smoking is primary non-occupational exposure source.
- **[[Nickel]] elevated**: Binds ERalpha noncompetitively; drives epigenetic changes (global loss of histone acetylation, H3K9 methylation) that may promote carcinogenesis independently of estrogenic effects.
- **[[Arsenic]] elevated**: Associated with increased OC risk through oxidative stress, DNA damage, and interference with DNA repair pathways.
- **[[Iron]] elevated in tumor microenvironment**: OC cells upregulate transferrin receptor 1 (TfR1) and downregulate ferroportin, creating an iron-accumulating phenotype. Endometriosis-associated subtypes (clear cell, endometrioid) develop in iron-rich environment from retrograde menstruation. Iron drives Fenton chemistry generating ROS.
- **Glutathione depleted/dysregulated**: Central to platinum resistance. Glutathione synthesis is the most significantly altered pathway in platinum-resistant OC ([[poisson-2015-metabolomic-platinum-resistance-ovarian-cancer]]). Platinum-resistant cells upregulate glutathione, resisting ferroptosis.
- **Taurine depleted**: Antioxidant defense compromised in OC tissue ([[fong-2011-metabolites-normal-ovary-ovarian-cancer]]).

## Environmental Exposures

| Source | Metals | Relevance |
|--------|--------|-----------|
| **Smoking** | Cadmium (primary) | 35-50% higher Cd body burden in smokers |
| **Diet** | Cd, As, Ni | Contaminated soils, rice, shellfish, leafy greens |
| **Occupational** | Cd, Ni, As | Battery production, smelting, electronics |
| **Endometriosis** | Iron | Repeated retrograde menstruation deposits iron in peritoneal/ovarian tissue (RR 1.265 for OC, [[kim-2014-endometriosis-ovarian-cancer-risk-meta-analysis]]) |

## Nutritional Immunity Response

**Confidence: preliminary** — scattered immune data, no systematic nutritional immunity profiling in current sources.

| Marker | Direction | Evidence |
|--------|-----------|---------|
| **Tumor-associated macrophages** | Elevated | Infiltrate inflammatory tumor microenvironment ([[zhang-2024-ovarian-cancer-microbiome-inflammatory-microenvironment]]) |
| **Inflammatory cytokines** | Elevated; mediate gut-OC axis | Genetically predicted causal mediation ([[chuan-2026-inflammatory-cytokines-gut-microbiota-ovarian-cancer-mr]]) |
| **LPS** | Present in tumor tissue | Confirmed by immunohistochemistry ([[wang-2020-bacteria-distribution-ovarian-cancer-tissues]]) |
| **B-cell/IgA response** | Suppressed by TRAF3 | Intact microbiome required for B-cell antitumor immunity; TRAF3 knockout restores MHC-I and type-I IFN ([[zorea-2023-traf3-b-cells-microbiome-ovarian-cancer]]) |
| **Indole-3-propionic acid** | Depleted by antibiotics | Protective metabolite suppressed by dysbiosis; restored by FMT ([[hawkins-2022-antibiotics-microbiome-ovarian-cancer]]) |
| **Omega-oxidation enzymes** | Suppressed | PPARalpha, CYP4F3, CYP4A10 downregulated; restored by probiotics ([[geng-2026-probiotic-therapy-gut-microbiota-omega-oxidation-ovarian-cancer]]) |
| **Glutathione** | Depleted in sensitive tumors / elevated in resistant | Central to ferroptosis resistance ([[poisson-2015-metabolomic-platinum-resistance-ovarian-cancer]]) |

## Mis-metallation Events

- **Cadmium as molecular mimic of estradiol**: Cd displaces natural estrogen signaling at ERalpha, driving proliferative responses in ovarian epithelial cells. Co-exposure with nickel may produce synergistic carcinogenic effects through converging estrogenic and epigenetic mechanisms.
- **Iron accumulation and ferroptosis resistance**: Iron-accumulating OC cells should be vulnerable to ferroptosis, but platinum-resistant cells upregulate the Keap1-Nrf2-GPX4 axis to resist iron-dependent cell death. This creates a paradox: iron feeds tumor growth AND could be the mechanism for tumor killing if ferroptosis resistance is overcome.

## Taxonomic Analysis

**Confidence: moderate** — multiple studies across compartments, with MR causal evidence supplementing observational data.

### Multi-Compartment Oncobiosis

Ovarian cancer is unique in that dysbiosis occurs simultaneously across multiple body compartments:

**Tumor Tissue:**
| Taxon | Direction | Evidence |
|-------|-----------|---------|
| Proteobacteria (phylum) | Enriched | Proteobacteria/Firmicutes ratio increased ([[zhou-2019-microbiome-biodiversity-ovarian-carcinoma]], n=137) |
| Propionibacterium acnes | Enriched | Inflammatory potential ([[zhang-2024-ovarian-cancer-microbiome-inflammatory-microenvironment]]) |
| Firmicutes (phylum) | Depleted | Relative decrease ([[zhou-2019-microbiome-biodiversity-ovarian-carcinoma]]) |
| Crenarchaeota (archaea) | Depleted | Archaeal diversity reduced ([[wang-2020-bacteria-distribution-ovarian-cancer-tissues]]) |

**Gut:**
| Taxon | Direction | Evidence |
|-------|-----------|---------|
| Escherichia-Shigella | Enriched | Markedly higher in OC ([[gong-2025-gut-microbiota-diagnostic-ovarian-tumor]], n=382) |
| Dialister | Enriched (causal) | Two independent MR studies ([[guo-2025-causal-gut-microbiota-metabolites-ovarian-cancer-mr]], [[zhang-2024-blood-metabolites-gut-microbiota-ovarian-cancer-mr]]) |
| Coprococcus | Depleted | Butyrate producer ([[gong-2025-gut-microbiota-diagnostic-ovarian-tumor]]) |
| Fusicatenibacter | Depleted | SCFA producer ([[gong-2025-gut-microbiota-diagnostic-ovarian-tumor]]) |
| Butyricicoccus | Depleted | SCFA producer ([[gong-2025-gut-microbiota-diagnostic-ovarian-tumor]]) |
| Oscillibacter | Depleted | SCFA producer ([[gong-2025-gut-microbiota-diagnostic-ovarian-tumor]]) |
| Bifidobacterium bifidum | Protective (causal) | MR evidence ([[guo-2025-causal-gut-microbiota-metabolites-ovarian-cancer-mr]]) |

**Cervicovaginal:**
| Taxon | Direction | Evidence |
|-------|-----------|---------|
| Lactobacillus dominance | Lost | Non-Lactobacillus community type O: OR 2.80 for OC in women <50 ([[nene-2019-cervicovaginal-microbiome-brca1-ovarian-cancer]], Lancet Oncology, n=580) |

**Peritoneal:**
18 microbial features specific to OC pathology identified; combined with CA-125 and HE4, improved diagnostic accuracy ([[miao-2020-peritoneal-microbial-features-ovarian-cancer-diagnostics]]).

## Virulence Enzymes and Features

**Confidence: preliminary** — functional predictions from metagenomics, limited direct enzyme measurement.

- **LPS biosynthesis**: Gram-negative enrichment confirmed across compartments; LPS detected in tumor tissue by immunohistochemistry
- **Beta-glucuronidase (estrobolome)**: Estrogen deconjugation by gut bacteria implied by estrogen-dependent OC biology; not directly measured in current sources
- **Oxidative stress tolerance enzymes**: Enriched in tumor tissue bacteria (KEGG pathway analysis, [[wang-2020-bacteria-distribution-ovarian-cancer-tissues]])
- **Keap1-Nrf2-GPX4 axis**: Ferroptosis resistance pathway upregulated in platinum-resistant OC; targetable by Tripterygium + Lactobacillus ([[tian-2026-tripterygium-lactobacillus-cisplatin-ovarian-cancer]])
- **Siderophore systems**: Consistent with Escherichia-Shigella enrichment and iron-scavenging competitive advantage

## Interkingdom Relationships

- **Mycobiome**: Candida and Malassezia species identified in ovarian tumor tissue. Fungal beta-glucans activate complement and modulate antitumor immunity through Dectin-1 receptor signaling.
- **Ascending infection model**: Vaginal pathogens (Neisseria gonorrhoeae, Chlamydia trachomatis) increase OC risk. Lactobacillus depletion in cervicovaginal compartment enables pathogen ascension to upper reproductive tract. Tubal ligation disrupts this pathway ([[qin-2022-metagenomic-upper-reproductive-tract-ovarian-cancer]]).
- **IgA-coated bacteria in ascites**: Unique microbial-immune interaction at the tumor site; commensal microbiota required for B-cell-mediated antitumor immunity ([[zorea-2023-traf3-b-cells-microbiome-ovarian-cancer]]).

## Ecological State

**Confidence: moderate** — consistent patterns across multiple studies.

### 1. Multi-Compartment Oncobiosis
Simultaneous dysbiosis across gut, cervicovaginal, peritoneal, and tumor tissue. Shannon index significantly decreased in OC tumor tissue (P=0.0215, [[zhou-2019-microbiome-biodiversity-ovarian-carcinoma]]). Gut-based random forest classifier achieves AUC = 0.86 for OC detection ([[gong-2025-gut-microbiota-diagnostic-ovarian-tumor]]).

### 2. SCFA Depletion
Systematic loss of butyrate-producing genera (Coprococcus, Fusicatenibacter, Butyricicoccus, Oscillibacter) in gut. Butyric acid metabolites identified as protective factors by Mendelian randomization ([[guo-2025-causal-gut-microbiota-metabolites-ovarian-cancer-mr]]).

### 3. Ferroptosis Resistance
Platinum-resistant OC cells upregulate glutathione synthesis and the Keap1-Nrf2-GPX4 axis, resisting iron-dependent cell death. This is the primary chemoresistance mechanism and a key therapeutic target.

### 4. Microbiome-Dependent Chemotherapy Efficacy
Antibiotic-induced dysbiosis increases tumor growth AND cisplatin resistance. Gut microbiome is required for immune surveillance of cancer stem cells. IPA and indoxyl sulfate are key protective metabolites suppressed by antibiotics, restored by FMT ([[hawkins-2022-antibiotics-microbiome-ovarian-cancer]]).

### 5. Metabolic Reprogramming
Warburg-like shift in OC tissue: carnitine elevated 1.75-fold, butyrylcarnitine 3.62-fold, taurine depleted ([[fong-2011-metabolites-normal-ovary-ovarian-cancer]]). Stage IV OC ascites metabolome converges with GI cancers, suggesting gut barrier breakdown in advanced disease ([[deng-2025-microbiota-derived-metabolites-ascites-ovarian-gi-cancer]]).

### 6. Diet-Microbiome-Cancer Axis
High-fat and ketogenic diets accelerate EOC tumor growth via microbiome disruption and polyamine biosynthesis upregulation ([[alhilli-2025-dietary-fat-gut-microbiome-ovarian-cancer-mouse]]). Mediterranean diet shows survival benefit (HR=0.59, [[chen-2024-mediterranean-diet-ovarian-cancer-survival]]).

## Associated Conditions

| Condition | Shared Metals | Shared Taxa | Shared Ecology | Overlap Score |
|-----------|--------------|-------------|----------------|---------------|
| **[[Endometriosis]]** | Iron, Cd, Ni | E. coli, F. nucleatum | Estrogen recirculation, iron accumulation, biofilm | 0.65 |
| **[[Breast Cancer]]** | Cd, Fe, Ni | E. coli, F. nucleatum | Metalloestrogen signaling, estrobolome dysfunction | 0.60 |
| **[[Colorectal Cancer]]** | Fe, Cd | F. nucleatum, B. fragilis | SCFA depletion, inflammation-driven carcinogenesis | 0.55 |
| **[[Pancreatic Cancer]]** | Cd, Ni | Proteobacteria enriched | Inflammation-driven, ferroptosis resistance | 0.40 |

Endometriosis is a direct risk factor for OC (RR 1.265, [[kim-2014-endometriosis-ovarian-cancer-risk-meta-analysis]]), with iron deposits from retrograde menstruation contributing to carcinogenesis in clear cell and endometrioid subtypes.

## Validated Interventions

| Intervention | Class | Evidence | Key Outcome | Page |
|-------------|-------|---------|-------------|------|
| **Dietary fiber** | Dietary | SR/MA, 13 studies, n=142,189 | RR 0.78; 12% risk reduction per 10g/day | [[dietary-fiber-ovarian-cancer]] |
| **Mediterranean diet** | Dietary | Prospective cohort | HR 0.59 for overall survival | [[mediterranean-diet-ovarian-cancer]] |
| **Indole-3-carbinol** | Supplement | In vitro + animal model (3 papers) | EGFR inhibition, bortezomib sensitization, cisplatin chemoprotection | [[indole-3-carbinol-ovarian-cancer]] |

**Promising:**
- Tripterygium glycosides + L. paracasei — induces ferroptosis via GPX4 inhibition, microbiome-dependent ([[tian-2026-tripterygium-lactobacillus-cisplatin-ovarian-cancer]], animal model)
- Post-surgical probiotics — restores diversity, activates omega-oxidation ([[geng-2026-probiotic-therapy-gut-microbiota-omega-oxidation-ovarian-cancer]])
- E. coli Nissle 1917 — reduces tumor via TLR-4/IL-23, but only in unstressed mice ([[al-natsheh-2022-stress-probiotics-ovarian-cancer-thesis]])

## STOPs

| STOP | Rationale | Page |
|------|-----------|------|
| **Broad-spectrum antibiotics during chemotherapy** | ABX disrupts protective microbiome, increases tumor growth and cisplatin resistance, suppresses IPA/indoxyl sulfate, enriches cancer stem cells | [[stop-antibiotics-during-chemotherapy-ovarian-cancer]] |
| **Probiotics without stress management** | Chronic stress/cortisol overrides probiotic immune modulation; EcN failed in stressed mice | [[stop-probiotics-without-stress-management-ovarian-cancer]] |

## Open Questions

1. **Direct metallomic quantification**: No study in our corpus directly measures Cd, Ni, As tissue concentrations alongside microbiome profiling in the same OC cohort. This would cement Layer 1.
2. **Ferroptosis induction in clinical trials**: Can the Tripterygium + Lactobacillus approach overcome platinum resistance in humans?
3. **Cervicovaginal screening**: Can non-Lactobacillus community state type serve as early OC biomarker, especially in BRCA carriers?
4. **Peritoneal microbiome specifics**: Miao 2020 identified 18 OC-specific features — full characterization needed.
5. **Estrobolome quantification**: Beta-glucuronidase activity in OC patient gut microbiome has not been directly measured.
6. **Stress-probiotic interaction**: Can HPA axis interventions (cortisol management) rescue probiotic efficacy in OC patients?

## Knowledge Primitives Applied

- **1. Metals as Selective Pressures** — Cadmium, nickel, arsenic select for metal-tolerant pathobionts in tumor microenvironment
- **2. Nutritional Immunity as Interpretive Constraint** — TRAF3-mediated immune suppression overrides B-cell antitumor response
- **3. Mis-metallation and Toxic Metal Entry** — Cadmium mimics estradiol at ERalpha; nickel drives epigenetic carcinogenesis
- **4. Microbial Metal Dependencies as Achilles' Heels** — Iron-dependent ferroptosis as therapeutic strategy; restrict GPX4 to sensitize tumors
- **5. Two-Sided Ecological Engineering** — Suppress pathobionts AND restore butyrate producers; antibiotics do the opposite
- **6. Interkingdom Relationships and Functional Shielding** — Fungal-bacterial interactions in tumor microenvironment; Candida/Malassezia in tumor tissue
- **7. Estrobolome and Hormone Recirculation** — Beta-glucuronidase-mediated estrogen recirculation feeds estrogen-dependent OC
- **8. Siderophore Competition and Iron Ecology** — Escherichia-Shigella enrichment consistent with iron-scavenging competitive advantage
