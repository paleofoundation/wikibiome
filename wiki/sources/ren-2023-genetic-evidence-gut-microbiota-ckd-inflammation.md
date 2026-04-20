---
title: "Ren 2023 — Genetic Evidence Supporting the Causal Role of Gut Microbiota in CKD and Chronic Systemic Inflammation"
type: source
created: 2026-04-09
updated: 2026-04-17
authors: [Feihong Ren, Qiubai Jin, Qi Jin, Yiyun Qian, Xuelei Ren, Tongtong Liu, Yongli Zhan]
year: 2023
journal: "Frontiers in Immunology"
doi: "10.3389/fimmu.2023.1287698"
evidence_level: quasi-experimental
sample_size: "GWAS summary statistics"
tags: [chronic-kidney-disease, CKD, mendelian-randomization, gut-microbiota, inflammation, eGFR, UACR, Lachnospiraceae, Desulfovibrionales]
library_category: causal
platform: both
condition: "chronic-kidney-disease"
karen_brain_primitives: [1, 3]
metals_discussed: []
taxa_discussed: [desulfovibrio, eubacterium, lachnospiraceae, streptococcus]
key_findings:
  - "Lachnospiraceae, Eubacterium eligens, Intestinimonas, and Streptococcus are causally protective against CKD"
  - "Lachnospiraceae UCG-010 is a causal risk factor for CKD"
  - "Multiple gut taxa causally associated with inflammatory markers CRP and UACR"
keystone: false
---

# Genetic Evidence Supporting the Causal Role of Gut Microbiota in CKD

## Key Findings

- **Protective causal factors** for [[chronic-kidney-disease]] identified through MR include **[[lachnospiraceae]]**, **Eubacterium eligens**, **Intestinimonas**, and **[[streptococcus]]** (Ren et al. 2023, quasi-experimental/MR).
- **Lachnospiraceae UCG-010 is a causal risk factor** for CKD, an important distinction from the broader Lachnospiraceae family which is generally protective -- this demonstrates genus/species-level heterogeneity within a single family.
- **Higher [[desulfovibrio]] abundance correlated with higher eGFR** (better kidney function), which contrasts with Luo 2023's finding that Desulfovibrionales order increases CKD risk. This apparent contradiction may reflect taxon-level resolution differences or population heterogeneity. <!-- NEEDS VERIFICATION: reconcile with Luo 2023 Desulfovibrionales finding -->
- **Multiple gut taxa were causally associated** with systemic inflammatory markers (CRP, UACR), establishing a microbiome-inflammation-CKD causal chain.
- The bilateral MR design assessed causation in both directions, testing whether gut microbiota drives CKD or CKD drives microbiome changes.

## Methods

- **Study design**: Bilateral two-sample Mendelian randomization
- **Exposures/Outcomes**: Bidirectional assessment of gut microbiota, CKD, eGFR, CRP, and urinary albumin-to-creatinine ratio (UACR)
- **Data**: GWAS summary statistics for gut microbiota composition and renal/inflammatory outcomes
- **MR methods**: Multiple MR approaches for robustness (IVW, MR-Egger, weighted median)
- **Novel contribution**: Links gut taxa not just to CKD directly but also to intermediate inflammatory markers
- **Limitations**: MR assumptions (no horizontal pleiotropy); genus-level resolution; GWAS population specificity

## Detailed Summary

Ren et al. extend the MR evidence for gut-kidney causation by incorporating intermediate inflammatory markers (CRP, UACR) alongside direct CKD outcomes. This allows mapping of a causal chain: gut taxa influence systemic inflammation (CRP), which contributes to glomerular damage (UACR), which drives CKD progression. The Lachnospiraceae finding is nuanced -- while the family overall is protective (consistent with Luo 2023 and observational studies), Lachnospiraceae UCG-010 is a risk factor, demonstrating that ecological generalizations at the family level can be misleading. The Desulfovibrio finding appears to contradict Luo 2023, which reported Desulfovibrionales as a CKD risk factor. This discrepancy likely reflects the difference between genus (Desulfovibrio) and order (Desulfovibrionales) level analysis, or different GWAS instruments.

## Relevance to WikiBiome

Strengthens the CKD disease entity page with inflammation-mediated causal evidence. The Lachnospiraceae UCG-010 distinction is important for accurate entity page content -- not all Lachnospiraceae are protective. Supports concept pages on systemic inflammation and the microbiome-inflammation-organ damage axis. The Desulfovibrio discrepancy with Luo 2023 should be noted on the [[desulfovibrio]] entity page.

## Relevance to Cureva

The three-step causal chain (microbiome to inflammation to CKD) identifies two intervention points (Primitives 1, 3): suppress pro-inflammatory taxa AND reduce systemic inflammation. The Lachnospiraceae family-level heterogeneity is a critical caution for intervention design -- generic "Lachnospiraceae restoration" could inadvertently promote the risk-associated UCG-010 subgroup. CRP as a mediator suggests anti-inflammatory interventions could complement microbiome approaches.

## Open Questions

- Why do Desulfovibrio findings differ between Ren 2023 and Luo 2023?
- Can CRP reduction through microbiome intervention be measured as an intermediate outcome in CKD trials?
- Are the protective Lachnospiraceae species identifiable at strain level for targeted probiotic development?
