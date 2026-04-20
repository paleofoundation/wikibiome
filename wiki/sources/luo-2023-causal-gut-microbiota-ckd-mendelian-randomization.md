---
title: "Luo 2023 — Causal Effects of Gut Microbiota on CKD Risk: Mendelian Randomization"
type: source
created: 2026-04-14
updated: 2026-04-17
authors: [Luo, Chen, Li, Wang, Zhang]
year: 2023
journal: "Frontiers in Cellular and Infection Microbiology"
doi: "10.3389/fcimb.2023.1142140"
evidence_level: quasi-experimental
sample_size: "n=480698"
tags: [chronic-kidney-disease, mendelian-randomization, causal-inference, desulfovibrio, lachnospiraceae]
library_category: causal
platform: both
condition: "chronic-kidney-disease"
karen_brain_primitives: [1]
metals_discussed: []
taxa_discussed: [desulfovibrionales, desulfovibrionaceae, eubacterium-eligens, lachnospiraceae]
key_findings:
  - "Desulfovibrionales causally increases CKD risk (OR=1.15, significant after Bonferroni correction)"
  - "Lachnospiraceae UCG-010 is causally protective against CKD (OR=0.89)"
  - "MR design supports causal rather than merely associational relationship between gut taxa and CKD"
---

## Key Findings

- **Desulfovibrionales order causally increases CKD risk** (OR=1.15), surviving Bonferroni correction for multiple testing. This moves the Desulfovibrio-CKD link from association to causal evidence.
- **Lachnospiraceae UCG-010 is causally protective** (OR=0.89), supporting the consistent observational finding that Lachnospiraceae depletion accompanies CKD.
- **[[eubacterium-eligens]]** also showed a protective causal signal.
- The Mendelian randomization design leverages genetic instruments to overcome confounding, providing **quasi-experimental evidence** that specific gut taxa directly influence CKD risk rather than merely reflecting renal dysfunction.
- The large sample (n=480,698) from GWAS summary statistics provides substantial statistical power.

## Methods

- **Study design**: Two-sample Mendelian randomization
- **Exposure**: Genetically predicted abundances of gut bacterial taxa from GWAS summary statistics
- **Outcome**: CKD risk from GWAS summary statistics (n=480,698)
- **MR methods**: Inverse variance weighted (IVW), MR-Egger, weighted median, and sensitivity analyses including Bonferroni correction for multiple testing
- **Limitations**: MR assumes no horizontal pleiotropy; GWAS instruments for gut taxa have limited power; genus-level resolution; primarily European-ancestry GWAS

## Detailed Summary

Luo et al. provide quasi-experimental evidence that specific gut taxa causally influence CKD risk, leveraging the natural randomization of genetic variants that influence gut microbiome composition. The Desulfovibrionales finding is biologically coherent: this sulfate-reducing order produces hydrogen sulfide (H2S), which at elevated concentrations damages the intestinal epithelium, promotes inflammation, and may contribute to systemic vascular injury that accelerates renal decline. The Lachnospiraceae UCG-010 protective signal aligns with the consistent observational finding that Lachnospiraceae depletion accompanies CKD, and the Eubacterium eligens protection is consistent with its role as a butyrate producer. The large sample size (n=480,698) provides statistical power that most observational CKD microbiome studies lack, and the survival of key findings after Bonferroni correction strengthens the causal inference.

## Relevance to WikiBiome

Elevates the microbiome-CKD story from correlation to causation. The Desulfovibrionales finding is particularly important — this sulfate-reducing order produces hydrogen sulfide, which damages the gut epithelium and may drive systemic inflammation leading to renal injury. Relevant to entity pages for [[desulfovibrio]] (as a causal risk factor) and [[lachnospiraceae]] (as a causal protective factor). Strengthens the CKD disease entity page with causal evidence.

## Relevance to Cureva

Provides the strongest causal evidence (Primitive 1) for specific taxa in CKD pathogenesis. The causal role of Desulfovibrionales supports intervention strategies targeting sulfate-reducing bacteria — either through direct suppression or competitive exclusion. The protective Lachnospiraceae signal validates restoration strategies. This MR evidence should be prominently cited in the CKD signature page as it upgrades confidence in the taxonomic layer from associational to causal.
