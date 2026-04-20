---
title: "Vatanen et al. 2024 — Gut Microbiome Associations with Glycemic Control in Type 1 Diabetes (INNODIA)"
type: source
created: 2026-04-14
updated: 2026-04-14
authors: [Tommi Vatanen, Jarno Honkanen, Leena Engman, Henrik Donnér, Samppa Ryhänen, Heli Siljander, Mikael Knip]
year: 2024
journal: "Diabetologia"
doi: "10.1007/s00125-024-06192-7"
evidence_level: prospective-cohort
sample_size: "n=292 (860 samples)"
tags: [type-1-diabetes, glycemic-control, HbA1c, C-peptide, INNODIA]
library_category: signatures
platform: both
condition: "type-1-diabetes"
karen_brain_primitives: [5, 9]
metals_discussed: [zinc]
taxa_discussed: [faecalibacterium-prausnitzii, blautia, coprococcus, sutterella]
key_findings:
  - "F. prausnitzii inversely correlated with HbA1c (P=0.0019)"
  - "Blautia obeum inversely associated with C-peptide decline"
  - "Sutterella KLE1602 enriched in T1D progressors"
---

## Key Findings

- **F. prausnitzii inversely correlated with HbA1c**: **[[faecalibacterium-prausnitzii]]** abundance was significantly inversely associated with HbA1c levels (P=0.0019), establishing it as a marker of better glycemic control ([[vatanen-2024-innodia-gut-microbiome-t1d-glycemic]], prospective-cohort, n=292).
- **Blautia obeum protective**: **[[blautia]]** obeum abundance was inversely associated with C-peptide decline rate, suggesting a role in preserving residual beta-cell function.
- **Sutterella KLE1602 as progressor marker**: **[[sutterella]]** KLE1602 was enriched in T1D patients with faster glycemic deterioration, representing a potential biomarker for aggressive disease course.
- **Zinc connection**: Zinc-dependent metabolic pathways were among the differentially represented functions, linking microbiome composition to the ZnT8 autoantibody axis.

## Methods

**Prospective longitudinal cohort study** from the INNODIA consortium. 292 individuals with recently diagnosed T1D provided 860 stool samples for shotgun metagenomic sequencing over the follow-up period. Glycemic control was assessed by serial HbA1c measurements and C-peptide levels (reflecting residual beta-cell function). Taxonomic profiling and functional pathway analysis were performed on metagenomic data. Associations between microbial taxa/pathways and glycemic outcomes (HbA1c trajectory, C-peptide decline rate) were assessed using linear mixed-effects models accounting for repeated measures, age, sex, and clinical covariates.

## Detailed Summary

Vatanen et al. conducted a prospective longitudinal study through the INNODIA consortium — a European network for T1D research — to investigate how the gut microbiome relates to glycemic control after T1D diagnosis. While the TEDDY study ([[vatanen-2018-teddy-gut-microbiome-t1d-nature]]) characterized the pre-diagnostic microbiome, this study addresses the post-diagnosis question: does the gut microbiome influence disease trajectory in established T1D?

The central finding — **[[faecalibacterium-prausnitzii]]** abundance inversely correlating with HbA1c (P=0.0019) — establishes this butyrate-producing bacterium as a marker of better glycemic control in T1D. This extends the TEDDY findings: F. prausnitzii is depleted before T1D onset (TEDDY) and its persistence after diagnosis predicts better control (INNODIA). The mechanistic basis likely involves butyrate's effects on gut barrier integrity (preventing antigen translocation that drives beta-cell autoimmunity), systemic anti-inflammatory effects (butyrate inhibits NF-kB and HDAC activity), and potential direct effects on beta-cell function through FFAR2/3 signaling.

**[[blautia]]** obeum's inverse association with C-peptide decline rate is clinically important because C-peptide reflects residual beta-cell mass — slowing its decline means preserving the patient's remaining insulin-producing capacity. Blautia obeum produces acetate and propionate and has immunomodulatory properties that may contribute to beta-cell preservation by dampening autoimmune destruction.

**[[sutterella]]** KLE1602 enrichment in rapid progressors is a novel finding. Sutterella species are mucin-degrading, pro-inflammatory bacteria that have been associated with autism spectrum disorder and IBD. Their enrichment in aggressive T1D may reflect or contribute to gut barrier disruption and mucosal immune activation.

The **[[zinc]] pathway** finding connects to a major feature of T1D autoimmunity: ZnT8 (zinc transporter 8) is a major autoantigen in T1D, and autoantibodies against ZnT8 are used clinically for T1D prediction and diagnosis. Zinc is concentrated in pancreatic beta-cell granules (co-secreted with insulin), and zinc-dependent metabolic pathways in the microbiome may reflect or influence the zinc economy relevant to beta-cell biology.

## Relevance to WikiBiome

Updates entity pages for **[[faecalibacterium-prausnitzii]]** (glycemic control association in established T1D), **[[blautia]]** (beta-cell preservation), and introduces **[[sutterella]]** as a disease-progression-relevant taxon. The zinc pathway finding supports the zinc-T1D connection on the **[[zinc]]** entity page and provides a mechanistic bridge between microbial zinc metabolism and ZnT8 autoimmunity.

This study complements [[vatanen-2018-teddy-gut-microbiome-t1d-nature]] by extending the microbiome-T1D narrative from pre-diagnosis (TEDDY: SCFA-producer depletion predicts T1D) to post-diagnosis (INNODIA: SCFA-producer persistence predicts better control). Together, these form a longitudinal arc informing the T1D signature page.

Informs: [[faecalibacterium-prausnitzii]], [[blautia]], [[sutterella]], [[zinc]], [[type-1-diabetes]]

## Relevance to Cureva

Provides post-diagnosis biomarker data for the T1D signature. The F. prausnitzii-HbA1c correlation is clinically actionable — interventions that restore F. prausnitzii may improve glycemic control. Sutterella KLE1602 enrichment could serve as a progression biomarker in the Cureva pipeline. The zinc pathway finding connects to STOP considerations around zinc supplementation in T1D (Primitive 4).

## Open Questions

- Is Sutterella KLE1602 causally related to glycemic deterioration or a bystander — would its suppression improve outcomes?
- Can F. prausnitzii restoration via dietary intervention (prebiotic fiber, direct supplementation) measurably reduce HbA1c in T1D?
- Does the zinc-dependent pathway finding reflect microbial competition for zinc that depletes beta-cell zinc stores, or microbial zinc metabolism that modulates ZnT8 antigenicity?
- Whether combining microbiome profiling with traditional autoantibody panels improves prediction of T1D disease trajectory.
