---

title: "Pancreatic Cancer — Microbiome Signature"
type: signature
created: 2026-04-09
updated: 2026-04-13
last_substantive_update: 2026-04-13
paper_count: 22
sources: [schilling-2020-urine-metallomics-pancreatic-cancer, zhang-2022-metallomics-cancer-review, meng-2025-oral-bacterial-fungal-microbiome-pancreatic-cancer-risk, guo-2021-tumor-microbiome-basal-like-pdac, luo-2025-microbiome-metabolome-interplay-pancreatic-cancer, kita-2020-ferrichrome-probiotics-pancreatic-cancer, daniel-2024-mendelian-randomization-gut-bacteria-metabolites-pdac, jiang-2023-mendelian-randomization-gut-microbiota-pancreatic-cancer, wei-2022-oral-mycobiota-pancreatic-adenocarcinoma, zhao-2025-intestinal-fungal-microbiota-acute-pancreatitis, maher-2024-synbiotics-immunomodulation-pdac-resection, liu-2026-gut-virome-anti-pd1-nsclc, li-2020-gut-microbiota-roles-pancreatic-cancer, kobayashi-2013-serum-metabolomics-pancreatic-cancer, lee-2019-bcaa-pancreatic-cancer-lipid-metabolism, li-2023-phage-based-peptides-pancreatic-cancer, berrington-2003-obesity-pancreatic-cancer-meta-analysis, huxley-2005-diabetes-pancreatic-cancer-meta-analysis, wang-2015-dietary-fiber-pancreatic-cancer-risk-meta-analysis, zhou-2010-quercetin-pancreatic-cancer-stem-cells, yamamura-2025-fmt-therapeutic-strategy-pancreatic-cancer, han-2024-lgg-gallium-polyphenol-intratumor-microbiota-pancreatic-cancer]
source_count: 22
tags: [cancer, gastrointestinal, pancreatic, PDAC, metabolomic]

# Layer 1: Metallomic signature
metallomic_signature:
  elevated: [copper, cadmium, arsenic]
  depleted: [zinc-tissue, calcium-urine, magnesium-urine, selenium]

# Layer 2: Taxonomic signature
taxonomic_signature:
  enriched:
    - taxon: "[[fusobacterium]]"
      role: "Pro-inflammatory oral/gut pathobiont — enriched in PDAC; oral-pancreatic translocation pathway"
    - taxon: "[[porphyromonas]]"
      role: "Red complex periodontal pathogen — P. gingivalis in 27-microbe MRS (Meng 2025 JAMA); hematogenous translocation"
    - taxon: "[[gammaproteobacteria]]"
      role: "Intratumoral dominant class — Pseudomonas predominant; bacterial CDD metabolizes gemcitabine"
    - taxon: "[[streptococcus]]"
      role: "MR risk-increasing (OR 1.712); oral-gut axis pathobiont"
    - taxon: "[[odoribacter]]"
      role: "MR risk-increasing (OR 1.899)"
  depleted:
    - taxon: "[[faecalibacterium-prausnitzii]]"
      role: "Primary butyrate producer — loss removes anti-inflammatory protection"
    - taxon: "[[roseburia]]"
      role: "Butyrate/propionate producer — depleted; responder-enriched phages target this taxon"
    - taxon: "[[romboutsia]]"
      role: "MR-confirmed protective (OR 0.87) — depleted in PDAC"
    - taxon: "[[senegalimassilia]]"
      role: "MR-confirmed protective (OR 0.635) — depleted in PDAC"

# Layer 3: Nutritional immunity profile
nutritional_immunity:
  elevated: [copper-serum, LPS, pro-inflammatory-cytokines]
  depleted: [selenium, SCFAs, secondary-bile-acids, tryptophan-metabolites]

# Layer 4: Ecological features
ecological_features: [tumor-microbiome-subtypes, gemcitabine-resistance-bacterial-CDD, oral-pancreatic-translocation, chronic-low-grade-inflammation, bile-acid-dysmetabolism, BCAA-driven-lipogenesis]

# Layer 5: Key virulence enzymes expressed
virulence_enzymes: [bacterial-CDD-cytidine-deaminase, LPS-endotoxin, siderophores, bile-salt-hydrolases]

# Confidence per layer
confidence:
  metallomic: moderate
  taxonomic: moderate
  nutritional_immunity: moderate
  ecological: moderate
  virulence_enzymes: moderate

# Cross-condition pattern detection
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

# Cureva pipeline status
cureva_status: partial
validated_interventions: [ferrichrome-probiotics, synbiotics-pdac, dietary-fiber, quercetin]
stops: [stop-diagnostic-overclaiming-discovery-phase]
karen_brain_primitives: [1, 4, 5, 6, 8, 9]
platform: cureva
---

> **Clinical disclaimer**: This signature page synthesizes peer-reviewed evidence for practitioner education. It does not constitute medical advice. All interventions require individualized clinical assessment. Discuss changes with a qualified healthcare provider. Many findings described here are from discovery-phase studies with limited sample sizes; diagnostic and prognostic claims require prospective validation before clinical application.

## Overview

**Pancreatic cancer** is the fifth leading cause of cancer death in Western nations. Pancreatic ductal adenocarcinoma (PDAC) accounts for >90% of cases, with five-year survival of approximately 12%. The microbiome signature framework reveals pancreatic cancer as a convergence disease where **metallomic disruption**, **oral-gut-tumor microbiome translocation**, and **mycobiome dysbiosis** create an ecology that promotes carcinogenesis, evades detection, and drives therapeutic resistance.

The signature spans multiple biological kingdoms -- bacteria, fungi, viruses, and phages -- and multiple body compartments -- oral cavity, gut, bile duct, and tumor tissue itself. The intratumoral microbiome directly mediates chemotherapy resistance through bacterial cytidine deaminase (CDD) metabolism of gemcitabine. This is not merely a biomarker story; the microbiome is a functional participant in disease progression.

This signature is built from **22 peer-reviewed papers** spanning urine metallomics, tumor microbiome sequencing, a JAMA Oncology oral microbiome prospective study, Mendelian randomization, mycobiome profiling, metabolomics, and intervention trials.

## Metallomic Signature

The landmark urine metallomics study by **Schilling et al. (2020)** demonstrated that a combined panel of Ca, Mg, Zn, and Cu achieves **AUC 0.99** (sensitivity 95.2%, specificity 97.8%) for PDAC detection [[schilling-2020-urine-metallomics-pancreatic-cancer]].

**NOTE: This is a discovery study (n=67). The AUC 0.99 result requires prospective validation in larger, independent cohorts before any diagnostic claims can be made. Discovery-phase biomarker studies routinely show performance degradation upon external validation.**

| Metal | Direction | Key Evidence |
|-------|-----------|-------------|
| **[[copper]]** | Elevated (urine, serum) | ATP7A overexpression in PDAC; Cu elevated across cancer types as near-universal biomarker [[zhang-2022-metallomics-cancer-review]] |
| **[[zinc]]** | Elevated (urine), depleted (tissue) | Disrupted ZnT/ZIP transporters (ZIP3, SLC30A); **Zn isotope fractionation** as novel biomarker dimension (median delta-66/64-Zn = -0.15 per mille vs +0.02 controls, p=0.002) [[schilling-2020-urine-metallomics-pancreatic-cancer]] |
| **Ca** | Decreased (urine) | S100 protein dysregulation; AUC 0.796 individually [[schilling-2020-urine-metallomics-pancreatic-cancer]] |
| **Mg** | Decreased (urine) | Disrupted cell proliferation; AUC 0.783 individually [[schilling-2020-urine-metallomics-pancreatic-cancer]] |
| **[[cadmium]]** | Elevated | Cd increase confirmed in pancreatic cancer tissue [[zhang-2022-metallomics-cancer-review]] |
| **Arsenic** | Exposure risk | As exposure linked to pancreatic carcinogenesis; microbiome required for As detoxification |
| **Se** | Depleted | Impaired selenoprotein antioxidant defense [[zhang-2022-metallomics-cancer-review]] |

**Key finding**: The healthy Zn-to-Cu concentration correlation (r2=0.66) is **completely abolished** in PDAC (r2=0.0002), indicating fundamental disruption of metal homeostasis [[schilling-2020-urine-metallomics-pancreatic-cancer]].

## Oral Microbiome Connection

The **JAMA Oncology** study by **Meng et al. (2025)** -- a nested case-control within 122,000 individuals (445 PC cases, median 8.8-year follow-up) -- established the oral microbiome as a prospective predictor of pancreatic cancer [[meng-2025-oral-bacterial-fungal-microbiome-pancreatic-cancer-risk]].

| Finding | Detail |
|---------|--------|
| **Microbial Risk Score (MRS)** | 27 bacterial and fungal species combined |
| **Risk magnitude** | 3.44-fold increased PC risk per 1-SD increase (95% CI 2.63-4.51) |
| **Key pathogens** | *P. gingivalis*, *E. nodatum*, *P. micra* (red/orange complex periodontal pathogens) |
| **Fungal component** | *Candida tropicalis* included in MRS |
| **Translocation mechanism** | Hematogenous or biliary translocation of oral pathobionts and their inflammatory mediators |
| **Follow-up** | Median 8.8 years — oral signature predates diagnosis by nearly a decade |

This is the strongest epidemiological evidence to date linking the oral microbiome to pancreatic cancer risk, with a prospective design that addresses reverse causation.

## Tumor Microbiome

PDAC tumors harbor intratumoral bacteria, confirmed by 16S rRNA FISH and LPS immunohistochemistry [[guo-2021-tumor-microbiome-basal-like-pdac]]:

| Feature | Detail |
|---------|--------|
| **Dominant class** | Gammaproteobacteria (*Pseudomonas* predominant) |
| **Subtype variation** | Basal-like PDAC enriched in *Acinetobacter*, *Pseudomonas*, *Sphingopyxis* — predicting significantly worse survival |
| **Chemoresistance mechanism** | Bacterial **CDD (cytidine deaminase)** metabolizes gemcitabine into its inactive form (dFdU), directly mediating chemotherapy resistance |
| **Therapeutic implication** | Antibiotic co-administration may restore gemcitabine sensitivity |

The tumor microbiome is not a passenger -- it is a **functional participant** in treatment failure. Bacterial CDD activity represents a direct, targetable mechanism linking intratumoral microbiota to clinical outcomes.

## Gut Microbiome

### Enriched Taxa

| Taxon | Evidence | Pathogenic Mechanism |
|-------|----------|---------------------|
| **[[fusobacterium]]** | Enriched in PDAC gut and tumor | Pro-inflammatory; oral-gut translocation; promotes NF-kB activation [[li-2020-gut-microbiota-roles-pancreatic-cancer]] |
| **[[porphyromonas]]** | Key MRS component (Meng 2025) | Periodontal pathogen; hematogenous translocation to pancreas [[meng-2025-oral-bacterial-fungal-microbiome-pancreatic-cancer-risk]] |
| **[[streptococcus]]** | MR risk-increasing (OR 1.712) | Causal association via MR [[jiang-2023-mendelian-randomization-gut-microbiota-pancreatic-cancer]] |
| **Odoribacter** | MR risk-increasing (OR 1.899) | Strongest MR risk signal [[jiang-2023-mendelian-randomization-gut-microbiota-pancreatic-cancer]] |
| **Ruminiclostridium9** | MR risk-increasing (OR 1.976) | Causal association [[jiang-2023-mendelian-randomization-gut-microbiota-pancreatic-cancer]] |
| **Gammaproteobacteria** | Intratumoral dominant | *Pseudomonas* predominant; CDD-mediated gemcitabine resistance [[guo-2021-tumor-microbiome-basal-like-pdac]] |

### Depleted Taxa

| Taxon | Normal Function | Evidence |
|-------|----------------|---------|
| **[[faecalibacterium-prausnitzii]]** | Primary butyrate producer; anti-inflammatory | Depleted; responder-enriched phages target Faecalibacterium [[liu-2026-gut-virome-anti-pd1-nsclc]] |
| **[[roseburia]]** | Butyrate/propionate production | Depleted; phages targeting Roseburia enriched in immunotherapy responders [[liu-2026-gut-virome-anti-pd1-nsclc]] |
| **Romboutsia** | Gut homeostasis | MR-confirmed protective (OR 0.87) across multiple sensitivity analyses [[daniel-2024-mendelian-randomization-gut-bacteria-metabolites-pdac]] |
| **Senegalimassilia** | Gut homeostasis | MR-confirmed protective (OR 0.635) [[jiang-2023-mendelian-randomization-gut-microbiota-pancreatic-cancer]] |
| **SCFA producers (general)** | Barrier integrity; Treg induction; anti-inflammatory | Global SCFA producer depletion drives chronic low-grade inflammation [[li-2020-gut-microbiota-roles-pancreatic-cancer]] |

## Mycobiome

Oral and gut fungal communities are markedly altered in PDAC, representing a **critical and often overlooked** dimension of the signature:

| Finding | Detail | Source |
|---------|--------|--------|
| **[[aspergillus]] as salivary biomarker** | AUC 0.983 for PDAC detection | [[wei-2022-oral-mycobiota-pancreatic-adenocarcinoma]] |
| **Cladosporium** | AUC 0.969 for PDAC detection | [[wei-2022-oral-mycobiota-pancreatic-adenocarcinoma]] |
| **Oral fungal diversity explosion** | 5,022 vs 830 OTUs in PDAC vs controls (with decreased Shannon diversity) | [[wei-2022-oral-mycobiota-pancreatic-adenocarcinoma]] |
| **[[candida-albicans|Candida]] in pancreatitis** | Dominates fecal mycobiome at 61% in acute pancreatitis (PC precursor) | [[zhao-2025-intestinal-fungal-microbiota-acute-pancreatitis]] |
| **Aspergillus-WBC correlation** | Suggests fungal-driven inflammatory amplification | [[zhao-2025-intestinal-fungal-microbiota-acute-pancreatitis]] |

The mycobiome connects to the metallomic signature through fungal [[iron]] dependence: metal-driven shifts in the bacterial microbiome create ecological niches that fungi exploit, while fungal iron acquisition (siderophores) further disrupts metal ecology.

## Virome

The gut virome adds a third biological kingdom to the signature:

| Finding | Detail | Source |
|---------|--------|--------|
| **Virome predicts immunotherapy response** | AUC 0.768 (outperforms bacterium-only AUC 0.664) | [[liu-2026-gut-virome-anti-pd1-nsclc]] |
| **Responder-enriched phages** | Target *Faecalibacterium* and *Roseburia* (SCFA producers) | [[liu-2026-gut-virome-anti-pd1-nsclc]] |
| **Non-responder phages** | Target *Clostridium* and *Bacteroides* | [[liu-2026-gut-virome-anti-pd1-nsclc]] |
| **Phage-based therapeutics** | Phage-derived peptides show selective PDAC targeting | [[li-2023-phage-based-peptides-pancreatic-cancer]] |

## Metabolomics

| Metabolite Class | Direction | Key Evidence |
|-----------------|-----------|-------------|
| **SCFAs (butyrate, propionate)** | Depleted | SCFA producer depletion → chronic inflammation → carcinogenic environment [[li-2020-gut-microbiota-roles-pancreatic-cancer]] |
| **BCAAs (Leu, Ile, Val)** | Elevated in tumor | Sustain PDAC growth via BCAT2/BCKDHA-driven lipogenesis [[lee-2019-bcaa-pancreatic-cancer-lipid-metabolism]] |
| **Deoxycholic acid** | Elevated | Promotes DNA damage via EGFR ligand amphiregulin [[li-2020-gut-microbiota-roles-pancreatic-cancer]] |
| **Mannitol** | Protective (MR) | OR 0.97 per unit increase — causal protective metabolite [[daniel-2024-mendelian-randomization-gut-bacteria-metabolites-pdac]] |
| **Methionine** | Protective (MR) | OR 0.97 — causal protective metabolite [[daniel-2024-mendelian-randomization-gut-bacteria-metabolites-pdac]] |
| **Carnitine** | Risk-increasing (MR) | Causal risk metabolite [[daniel-2024-mendelian-randomization-gut-bacteria-metabolites-pdac]] |
| **Serum 4-metabolite panel** | Diagnostic | AUC 0.93 (xylitol, 1,5-AG, histidine, inositol) — outperforms CA19-9 in early-stage [[kobayashi-2013-serum-metabolomics-pancreatic-cancer]] |

## Ecological Features

**1. Tumor microbiome subtypes**: Basal-like PDAC harbors a distinct intratumoral microbiome (*Acinetobacter*, *Pseudomonas*, *Sphingopyxis*) that predicts worse survival. The tumor microbiome is not random colonization -- it reflects selection by the tumor microenvironment [[guo-2021-tumor-microbiome-basal-like-pdac]].

**2. Gemcitabine resistance via bacterial CDD**: Intratumoral Gammaproteobacteria express cytidine deaminase that converts gemcitabine to its inactive metabolite (dFdU). This is a **direct, mechanistic link** between the microbiome and treatment failure -- not a correlation [[guo-2021-tumor-microbiome-basal-like-pdac]].

**3. Oral-pancreatic translocation**: Periodontal pathogens (P. gingivalis, Fusobacterium) translocate to the pancreas via hematogenous or biliary routes. The oral MRS predates diagnosis by a median of 8.8 years, suggesting this translocation is an early event in carcinogenesis [[meng-2025-oral-bacterial-fungal-microbiome-pancreatic-cancer-risk]].

**4. Chronic low-grade inflammation**: LPS from Gram-negative bacteria activates NF-kB and MAPK signaling. SCFA depletion removes anti-inflammatory brake. Obesity and T2D -- both PC risk factors -- converge on this inflammatory dysbiosis [[li-2020-gut-microbiota-roles-pancreatic-cancer]].

**5. Bile acid dysmetabolism**: Altered bacterial bile acid deconjugation produces excess deoxycholic acid, which promotes DNA damage. This connects the gut microbiome to pancreatic carcinogenesis through the biliary-pancreatic anatomical axis.

## Validated Interventions

### Probiotic / Microbial

| Intervention | Mechanism | Evidence |
|-------------|-----------|---------|
| **Ferrichrome (from *L. casei*)** | Siderophore-mediated iron chelation; induces p53-mediated apoptosis in PDAC cells including 5-FU-resistant lines; 10 mg/kg reduces xenograft tumor volume | **Promising** — preclinical; connects iron biology to [[ferroptosis]] [[kita-2020-ferrichrome-probiotics-pancreatic-cancer]] |
| **Synbiotics (probiotics + inulin)** | RCT (90 patients, NCT06199752): CD8+ T cells elevated to 61.5% vs 15.8% placebo; reduced postoperative bacteremia | **Validated** — Phase II RCT [[maher-2024-synbiotics-immunomodulation-pdac-resection]] |
| **FMT (from long-term survivors)** | Transfers protective microbiome ecology from long-term PDAC survivors; enhances anti-tumor immunity | **Promising** — preclinical models [[yamamura-2025-fmt-therapeutic-strategy-pancreatic-cancer]] |
| **Gallium-polyphenol nanoparticles (LGG-loaded)** | Reprograms intratumoral microbiota and tumor immune microenvironment | **Experimental** — preclinical [[han-2024-lgg-gallium-polyphenol-intratumor-microbiota-pancreatic-cancer]] |

### Dietary

| Intervention | Mechanism | Evidence |
|-------------|-----------|---------|
| **Dietary fiber** | Protective against PC risk; supports SCFA-producing taxa | **Validated** — meta-analysis confirms dose-response protective association [[wang-2015-dietary-fiber-pancreatic-cancer-risk-meta-analysis]] |
| **Quercetin** | Inhibits pancreatic cancer stem cell self-renewal; attenuates sonic hedgehog and beta-catenin signaling | **Promising** — preclinical [[zhou-2010-quercetin-pancreatic-cancer-stem-cells]] |
| **Oral hygiene / periodontal care** | Reduces oral pathobiont burden (P. gingivalis, Fusobacterium) that translocation to pancreas | **Epidemiologically supported** — periodontal disease is established PC risk factor; Meng 2025 MRS provides mechanism [[meng-2025-oral-bacterial-fungal-microbiome-pancreatic-cancer-risk]] |

## STOPs

- **[[stop-diagnostic-overclaiming-discovery-phase|STOP: Diagnostic Overclaiming from Discovery-Phase Microbiome Data (Pancreatic Cancer)]]** — The current PDAC microbiome evidence base is almost entirely discovery-phase with no validated prospective diagnostic utility; practitioners who use microbiome signatures to screen for or rule out PDAC risk false reassurance and unnecessary intervention in healthy patients. Evidence: prospective-cohort.

| STOP | Why It Matters |
|------|---------------|
| **Do not overclaim diagnostic utility from discovery-phase biomarkers** | The Zn isotope fractionation AUC 0.99 (Schilling 2020, n=67) and Aspergillus salivary AUC 0.983 (Wei 2022) are **discovery-phase results**. Discovery AUCs routinely degrade 10-20% upon external validation. These are hypothesis-generating, not clinically actionable diagnostic thresholds. Prospective validation in independent, adequately powered cohorts is required before any clinical deployment. Practitioners should NOT present these as validated diagnostic tests to patients. |
| **Caution with antibiotic co-administration for gemcitabine sensitization** | While bacterial CDD mediates gemcitabine resistance, broad-spectrum antibiotics would simultaneously destroy protective SCFA producers and potentially worsen overall prognosis. Targeted intratumoral antibiotic strategies require development before clinical application. |

## Open Questions

- **Oral microbiome screening**: Can the Meng 2025 MRS (27 species) be reduced to a clinically feasible screening panel? What is the cost-effectiveness in average-risk populations?
- **Intratumoral antibiotic targeting**: Can narrow-spectrum antibiotics or phage therapy selectively eliminate CDD-producing Gammaproteobacteria without collateral damage?
- **Mycobiome as early biomarker**: Aspergillus AUC 0.983 in saliva -- does this replicate in prospective validation? What is the lead time before diagnosis?
- **FMT from long-term survivors**: What specific taxa or metabolites from survivor microbiomes drive anti-tumor immunity? Can these be isolated?
- **Virome-guided immunotherapy**: Can phage profiling guide immunotherapy selection for PDAC patients?
- **Metal homeostasis restoration**: Does correcting the Zn/Cu ratio imbalance (r2 collapse from 0.66 to 0.0002) alter disease trajectory?

## Knowledge Primitives Applied

1. **Metals as Selective Pressures** — Cu elevation + Zn tissue depletion + Cd/As exposure creates pro-carcinogenic metal ecology
2. **Nutritional Immunity as Interpretive Constraint** — Zn urinary elevation with tissue depletion reflects disrupted metal trafficking, not simple excess
3. **Mis-metallation and Toxic Metal Entry** — Cd/As as carcinogenic metals; Zn isotope fractionation reflects metalloprotein dysfunction
4. **Microbial Metal Dependencies as Achilles' Heels** — Ferrichrome (L. casei siderophore) exploits iron dependency to induce tumor cell death
5. **Two-Sided Ecological Engineering** — Must suppress Gammaproteobacteria/Fusobacterium AND restore SCFA producers; synbiotics RCT demonstrates this approach
6. **Interkingdom Relationships and Functional Shielding** — Bacterial-fungal cooperation (Aspergillus, Candida) in tumor ecology; trans-kingdom MRS in oral cavity
7. **Estrobolome and Hormone Recirculation** — Not primary driver; bile acid dysmetabolism is the relevant hormone-like metabolite axis
8. **Siderophore Competition and Iron Ecology** — Ferrichrome from L. casei induces ferroptosis in PDAC cells; fungal iron acquisition reshapes mycobiome
9. **Oxygen State as Ecological Determinant** — Tumor hypoxia selects for anaerobic/microaerophilic intratumoral microbiome composition

## Key Sources

- [[schilling-2020-urine-metallomics-pancreatic-cancer]]
- [[zhang-2022-metallomics-cancer-review]]
- [[meng-2025-oral-bacterial-fungal-microbiome-pancreatic-cancer-risk]]
- [[guo-2021-tumor-microbiome-basal-like-pdac]]
- [[luo-2025-microbiome-metabolome-interplay-pancreatic-cancer]]
- [[kita-2020-ferrichrome-probiotics-pancreatic-cancer]]
- [[daniel-2024-mendelian-randomization-gut-bacteria-metabolites-pdac]]
- [[jiang-2023-mendelian-randomization-gut-microbiota-pancreatic-cancer]]
- [[wei-2022-oral-mycobiota-pancreatic-adenocarcinoma]]
- [[zhao-2025-intestinal-fungal-microbiota-acute-pancreatitis]]
- [[maher-2024-synbiotics-immunomodulation-pdac-resection]]
- [[liu-2026-gut-virome-anti-pd1-nsclc]]
- [[li-2020-gut-microbiota-roles-pancreatic-cancer]]
- [[kobayashi-2013-serum-metabolomics-pancreatic-cancer]]
- [[lee-2019-bcaa-pancreatic-cancer-lipid-metabolism]]
- [[li-2023-phage-based-peptides-pancreatic-cancer]]
- [[wang-2015-dietary-fiber-pancreatic-cancer-risk-meta-analysis]]
- [[zhou-2010-quercetin-pancreatic-cancer-stem-cells]]
- [[yamamura-2025-fmt-therapeutic-strategy-pancreatic-cancer]]
- [[han-2024-lgg-gallium-polyphenol-intratumor-microbiota-pancreatic-cancer]]
- [[berrington-2003-obesity-pancreatic-cancer-meta-analysis]]
- [[huxley-2005-diabetes-pancreatic-cancer-meta-analysis]]
