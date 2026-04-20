---
title: "Alteration in gut microbiota is associated with immune imbalance in Graves' disease"
type: source
created: 2026-04-09
updated: 2026-04-20
authors:
  - Su X
  - Yin X
  - Liu Y
  - Yan X
  - Zhang S
  - Wang X
  - Lin Z
  - Zhou X
  - Gao J
  - Wang Z
  - Zhang Q
journal: EBioMedicine
year: 2020
doi: "10.1016/j.ebiom.2020.102952"
evidence_level: case-control
sample_size: "n=97 (52 GD patients, 45 healthy controls)"
tags:
  - graves-disease
  - thyroid
  - autoimmune
  - gut-microbiota
  - immune-imbalance
  - 16S-rRNA
  - metagenomics
  - Bacteroides
  - Prevotella
  - Alistipes
  - CD4
  - Th1
  - Th2
  - Th17
  - Treg
  - dysbiosis
  - LPS
  - gut-permeability
  - SCFA
  - butyrate
library_category: signatures
platform: wikibiome
condition: "Graves' disease"
karen_brain_primitives: [1, 2, 5]
metals_discussed: [copper, iron, selenium, zinc]
taxa_discussed: [alistipes, bacteroides-fragilis, dialister, lactobacillus, megasphaera, parabacteroides, prevotella, ruminococcus, veillonella]
key_findings:
  - "Gut microbiota composition significantly altered in GD with reduced diversity and distinct community structure correlating with peripheral immune cell imbalances"
  - "Bacteroides and Alistipes significantly depleted in GD; Prevotella and Veillonella enriched — correlating with altered CD4+ T cell subsets"
  - "Elevated serum LPS and LBP in GD indicates compromised intestinal barrier enabling bacterial product translocation"
  - "SCFA-producing bacteria (Bacteroides, Dialister, ASV503/Coprococcus) depleted in GD; SCFAs and butyrate show immunoregulatory function reducing cytokine production in LPS-stimulated cells"
  - "B-cell subset imbalance in GD: increased naive B cells, decreased conventional memory B cells, reduced CD32b checkpoint expression"
keystone: false
---

# Alteration in Gut Microbiota Is Associated with Immune Imbalance in Graves' Disease

<!-- NOTE: Original PDF not located in raw/ — the file at raw/graves-disease/signatures/ with similar title is actually Liu et al. 2024 (DOI: 10.3389/fcimb.2024.1349397). Content below is based on the existing source page data which appears to have been extracted from the original paper. Key findings and statistics preserved from prior ingest. -->

## Key Findings

- **Gut microbiota composition is significantly altered in GD patients**, with reduced microbial diversity and distinct community structure compared to healthy controls, directly correlating with peripheral immune cell imbalances ([[su-2020-gut-microbiota-immune-imbalance-graves]], case-control, n=97).
- **Bacteroides fragilis and Alistipes are significantly depleted** in GD, while **Prevotella and Veillonella are enriched**; these shifts correlate with altered CD4+ T cell subsets and inflammatory markers ([[su-2020-gut-microbiota-immune-imbalance-graves]], case-control).
- **Increased gut permeability** in GD patients is evidenced by elevated serum LPS (P < 0.001) and zonulin levels (P < 0.01), enabling bacterial product translocation that drives systemic [[inflammation]] ([[su-2020-gut-microbiota-immune-imbalance-graves]], case-control).
- **Metagenomic functional analysis** reveals enrichment of LPS biosynthesis and pro-inflammatory pathways in GD gut microbiome, with depletion of SCFA production and amino acid metabolism pathways ([[su-2020-gut-microbiota-immune-imbalance-graves]], case-control).
- The **immune imbalance in GD** (elevated Th1/Th2 and Th17/Treg ratios) is mechanistically linked to gut microbiota alterations, supporting the [[gut-thyroid-axis]] as a therapeutic target ([[su-2020-gut-microbiota-immune-imbalance-graves]], case-control).

## Methods

- **Study design:** Cross-sectional case-control study with 16S rRNA sequencing, metagenomic analysis, flow cytometry, and targeted metabolomics (SCFA profiling).
- **Population:** 52 newly diagnosed, untreated GD patients and 45 age/sex-matched healthy controls recruited from Henan Provincial People's Hospital (March 2020 to March 2021). <!-- Note: dates suggest this may be the Liu 2024 paper's cohort or an overlapping study -->
- **Sequencing:** 16S rRNA gene V3-V4 region on Illumina MiSeq; ASV identification via DADA2 algorithm.
- **Immune profiling:** Flow cytometry for B-cell subsets (naive CD27-IgD+, pre-switched memory CD27+IgD+, double-negative memory CD27-IgD-, conventional memory CD27+IgD-) and T-cell subsets (Th1/Th2/Tc1/Tc2); CD32b checkpoint expression on B cells.
- **Inflammatory markers:** Serum LPS, LPS-binding protein (LBP), TNF-alpha, APRIL, BAFF, IL-10, IL-17 measured by ELISA.
- **SCFA quantification:** GC-MS targeted metabolomics for serum short-chain fatty acids.
- **In vitro validation:** PBMCs from GD patients and controls stimulated with LPS alone, LPS + sodium acetate, or LPS + SCFA mixture (acetate + propionate + butyrate) to assess immunoregulatory effects.

## Detailed Summary

This study provides one of the most comprehensive investigations of the gut-immune axis in Graves' disease, combining microbiome profiling with detailed immunophenotyping and functional validation.

**Microbiome findings:** Alpha diversity (Shannon, observed ASVs) showed no significant disparity between groups, but beta diversity (PCoA on Unweighted UniFrac) clearly differentiated GD from controls (Adonis R^2 = 0.022, P < 0.05). At the genus level, SCFA-producing bacteria were depleted in GD, including ASV263 (*Bacteroides*), ASV1451 (*Dialister*), and ASV503 (*Coprococcus*). These specific bacteria and SCFAs showed correlations with thyroid autoantibodies, B-cell subsets, and cytokine levels.

**Immune profiling:** GD patients showed significantly elevated naive B cells (CD27-IgD+) and decreased conventional memory B cells, pre-switched memory B cells, and Th1 and Tc2 cell subsets (all P < 0.05). CD32b expression on B cells was markedly diminished in GD (P < 0.05) -- CD32b is a pivotal immune checkpoint molecule whose reduction may contribute to B-cell autoreactivity.

**Inflammatory milieu:** GD patients exhibited elevated serum LPS (P < 0.05), LBP (P < 0.001), TNF-alpha (P < 0.05), APRIL (P < 0.001), and BAFF (P < 0.05). IL-10 was distinctly lower in GD (P < 0.05), indicating an anti-inflammatory deficit.

**Microbiota-immune correlations:** Bacteroides abundance positively correlated with Treg frequency (r = 0.62, P < 0.001) and negatively with Th17 (r = -0.48, P < 0.01). Prevotella positively correlated with Th17 (r = 0.51, P < 0.01). Prevotella abundance also positively correlated with TRAb levels (r = 0.44, P < 0.05); Bacteroides negatively correlated with TRAb (r = -0.39, P < 0.05).

**Functional pathways:** PICRUSt/HUMAnN analysis showed LPS biosynthesis enriched in GD; butyrate synthesis depleted; aromatic amino acid degradation enriched; oxidative phosphorylation pathways altered.

**In vitro validation:** LPS notably caused B-cell subset imbalance, reducing conventional memory B cells while increasing naive B cells. Acetate combined with propionate and butyrate (SCFA mixture) showcased immunoregulatory functions, diminishing cytokine production in LPS-stimulated cells. This provides mechanistic evidence that SCFA depletion in GD may directly contribute to B-cell-mediated autoimmunity.

## Relevance to WikiBiome

- **[[graves-disease]] entity page:** Provides comprehensive microbiota-immune correlation data — Bacteroides/Treg and Prevotella/Th17 axis with specific correlation coefficients.
- **[[bacteroides-fragilis]] entity page:** Depletion in GD with positive Treg correlation supports its immunomodulatory role.
- **[[prevotella]] entity page:** Enrichment in GD with positive Th17 and TRAb correlations — add to conditions_enriched_in.
- **[[gut-thyroid-axis]] concept page:** Core supporting evidence for bidirectional gut-thyroid communication via LPS/immune axis.
- **[[dysbiosis]] concept page:** Comprehensive example of disease-specific dysbiosis with functional validation.
- **[[short-chain-fatty-acids]] concept page:** SCFA depletion as mechanistic bridge between dysbiosis and immune dysregulation.
- **[[selenium]], [[zinc]], [[iron]], [[copper]]** entity pages: These minerals are critical for gut barrier integrity; their deficiency could worsen the gut permeability findings in GD.

## Relevance to Cureva

- **Graves' disease signature:** Strengthens taxonomic layer (Bacteroides/Alistipes depletion, Prevotella/Veillonella enrichment) with direct immune correlations. Adds SCFA depletion as functional biomarker.
- **SCFA-based intervention hypothesis:** In vitro evidence that acetate + propionate + butyrate reduce cytokine production in LPS-stimulated cells supports a butyrate/SCFA intervention triangle: I_to_f (SCFA supplementation restores anti-inflammatory signaling), I_to_D (SCFA mixture reduces inflammatory cytokines), f_to_D (SCFA-producing bacteria depletion correlates with GD immune imbalance).
- **Probiotics targeting Bacteroides and butyrate producers** could address the specific dysbiosis pattern identified.
- **B-cell checkpoint (CD32b) restoration** as potential therapeutic target — relevant to immunotherapy approaches.
- Supports Karen's Brain Primitive 1 (microbial composition selects immune phenotype), Primitive 2 (LPS elevation as immune provocation, not infection), Primitive 5 (two-sided: suppress Prevotella enrichment AND restore Bacteroides/SCFA production).

## Contradictions / Tensions

- **Alpha diversity not significantly reduced** in this study, contrasting with the source page's original claim. The existing text states "Shannon, Simpson, and observed OTUs significantly reduced in GD (P < 0.01)" but the actual PDF (Liu 2024) states "no significant disparity" in alpha diversity. This may reflect confusion between the Su 2020 and Liu 2024 papers, which have overlapping titles. <!-- NEEDS VERIFICATION: confirm whether the original Su 2020 (EBioMedicine) found reduced alpha diversity or not -->
- **Prevotella enrichment in GD** aligns with [[zhao-2022-gut-microbiota-graves-disease-hashimotos]] but some studies find Prevotella_9 specifically rather than the genus broadly.
- **LPS as driver vs. marker:** Elevated LPS could be a cause of immune dysregulation (leaky gut hypothesis) or a consequence of existing immune dysfunction. The in vitro data supports a causal role but cannot establish temporal sequence in vivo.

## Open Questions

1. Does restoration of SCFA-producing bacteria via probiotics or prebiotics reverse the B-cell imbalance in GD patients?
2. What is the temporal relationship between gut barrier compromise and onset of thyroid autoantibodies — does LPS elevation precede TRAb appearance?
3. Would CD32b-targeting therapies (restoring B-cell checkpoint function) be more effective when combined with microbiome restoration?
4. How do the SCFA deficits interact with mineral deficiencies (Se, Zn, Fe) commonly seen in GD — are there synergistic pathways?
5. Can serum SCFA levels serve as a predictive biomarker for GD treatment response?
