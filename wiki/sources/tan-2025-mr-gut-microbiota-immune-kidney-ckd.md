---
title: "Mendelian Randomization Study Revealed a Gut Microbiota-Immune System-Kidney Junction Axis in Chronic Kidney Disease"
type: source
created: 2026-04-09
updated: 2026-04-17
authors: [Junjie Tan, Zhile Xiong, Shengyou Yu, Wei Lu, Li Yu]
year: 2025
journal: "Scientific Reports"
doi: "10.1038/s41598-025-05941-x"
tags: [chronic-kidney-disease, CKD, mendelian-randomization, immune-cells, eGFR, UACR, mediator-analysis, Alistipes-indistinctus, Alistipes-putredinis]
platform: wikibiome
evidence_level: computational-prediction
taxa_discussed: [alistipes]
karen_brain_primitives: [3]
sample_size: "GWAS summary statistics (CKDGen, MiBioGen, DMP consortia)"
library_category: causal
condition: "chronic-kidney-disease"
metals_discussed: []
key_findings:
  - "Causal relationships identified between 16 gut microbiota taxa and CKD using two-sample MR"
  - "Immune cells (CD28+ CD8RA+ CD8+ T cells) mediate the causal effect of specific microbiota on CKD"
  - "Alistipes indistinctus and A. putredinis affect CKD through immune cell activity modulation"
---

# MR Study Revealed a Gut Microbiota-Immune System-Kidney Junction Axis in CKD

## Key Findings

- **Causal relationships were identified between 16 gut microbiota taxa** (8 from MiBioGen, 8 from the Dutch Microbiome Project) and [[chronic-kidney-disease]], using two-sample Mendelian randomization.
- **25 cytokine and immune cell characteristics** were causally associated with CKD, establishing the immune system as a mediating layer between the gut microbiome and kidney function.
- **CD28+ CD8RA+ CD8+ T cells** were identified as a key mediator through which specific gut microbiota exert their effects on CKD, revealed by mediation MR analysis.
- **[[alistipes]] species (A. indistinctus and A. putredinis)** were causally linked to CKD through immune cell modulation, adding mechanistic detail to the known association between Alistipes and kidney disease.
- The study provides a three-layer causal chain: gut microbiota → immune cell phenotype → kidney function, supporting the microbiota-immune-kidney junction axis.

## Methods

- **Design**: Two-sample Mendelian randomization with mediation analysis.
- **Data sources**: CKDGen consortium (kidney function GWAS), MiBioGen consortium (gut microbiota GWAS), Dutch Microbiome Project (DMP), and immune cell trait GWAS data.
- **Exposure**: Genetically predicted gut microbiota abundance.
- **Mediators**: 731 immune cell traits including T cell subsets, B cell subsets, monocyte markers, and cytokines.
- **Outcome**: eGFR, UACR, and CKD diagnosis.
- **Statistical methods**: IVW, MR-Egger, weighted median, with mediator MR for pathway analysis.

## Detailed Summary

This study applied a multilayer Mendelian randomization framework to dissect the causal chain from gut microbiota through immune cells to kidney function. By leveraging large-scale GWAS summary statistics from independent consortia, the authors avoided confounding and reverse causation that plague observational gut-kidney studies. The identification of 16 causally associated taxa across two independent microbiome GWAS datasets provides robust evidence that gut ecology genuinely influences CKD risk. The mediation analysis is the study's key innovation: by inserting immune cell traits as intermediate variables, the authors demonstrated that specific gut taxa influence CKD through immunological mechanisms. The finding that [[alistipes]] species operate through CD28+ CD8RA+ CD8+ T cell modulation connects to known biology — Alistipes species produce indole and succinate that can influence T cell differentiation and function. This three-layer causal architecture (microbiota → immunity → kidney) has implications for intervention design: targeting the gut microbiome may indirectly modulate the immune-mediated renal damage that drives CKD progression.

## Relevance to WikiBiome

Strengthens the causal evidence for the gut-kidney axis in CKD beyond observational association. The [[alistipes]] entity page should be updated with this causal evidence for kidney function effects mediated through immune cell modulation. Relevant to the [[chronic-kidney-disease]] entity page and to concept pages on the gut-kidney axis and immune-microbiome interactions.

## Open Questions

- Whether interventions that increase beneficial Alistipes species could reduce immune-mediated renal damage in CKD.
- How the MR-identified causal taxa compare with taxa identified in longitudinal clinical cohort studies of CKD progression.
- Whether the immune mediation pathway differs across CKD etiologies (diabetic vs. hypertensive vs. glomerulonephritis).
