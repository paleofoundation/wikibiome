---
title: "Characteristics and potential diagnostic value of gut microbiota in ovarian tumor patients"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Gong W, Jin G, Bao Y, Liu Q, Ni M, Wang J, Mao S, Zhang Y, Zheng Z]
journal: Scientific Reports
year: 2025
doi: "10.1038/s41598-025-99912-x"
tags: [ovarian-cancer, gut-microbiota, 16S-rRNA, Escherichia-Shigella, diagnostic-biomarker, benign-ovarian-tumor, dysbiosis]
platform: wikibiome
taxa_discussed: [coprococcus, escherichia-coli, shigella, oscillibacter, prevotella, selenomonas]
key_findings:
  - "Escherichia-Shigella markedly higher in ovarian tumor; Coprococcus, Oscillibacter depleted"
  - "Random forest AUC of 0.77 for benign ovarian tumors, 0.86 for ovarian cancer vs healthy controls"
  - "382 individuals profiled; 14 genera significantly different between OT and HC"
karen_brain_primitives: [1, 3]
---

# Characteristics and Potential Diagnostic Value of Gut Microbiota in Ovarian Tumor Patients

## Key Findings

- **Gut microbiota composition differs significantly** between ovarian tumor patients and healthy controls, with alterations in both bacterial abundance and alpha diversity ([[gong-2025-gut-microbiota-diagnostic-ovarian-tumor]], cross-sectional).
- **Escherichia-Shigella was markedly enriched** in the ovarian tumor group, while **[[coprococcus]]**, Fusicatenibacter, Butyricicoccus, and **[[oscillibacter]]** were depleted — a pattern consistent with loss of SCFA producers and gain of pro-inflammatory Gram-negatives.
- **Random forest diagnostic models** using gut microbiota composition achieved AUC of 0.77 for benign ovarian tumors and 0.86 for ovarian cancer vs. healthy controls, demonstrating clinical diagnostic potential.
- **Ovarian cancer and benign ovarian tumors showed distinct microbial signatures**, suggesting that gut microbiota changes are not merely a consequence of malignancy but may differentiate tumor biology.
- **14 genera showed significant differences** at the genus level between ovarian tumor and healthy control groups.

## Methods

- **Study design**: Cross-sectional case-control study
- **Population**: 382 individuals — 239 ovarian tumor (OT), 90 benign ovarian tumor (OBT), 53 healthy controls (HC) — recruited at Zhejiang Cancer Hospital, May 2018 to January 2022
- **Key measurements**: 16S rRNA V4 region sequencing; QIIME2 bioinformatics pipeline; alpha and beta diversity metrics; random forest classification with AUC evaluation
- **Statistical approach**: LEfSe analysis for discriminant taxa; random forest for diagnostic model construction; stratified analysis separating ovarian cancer from benign tumors
- **Sample size**: n=382 (large for a single-center ovarian microbiome study)

## Detailed Summary

This study profiled the gut microbiota of 382 individuals across three groups — ovarian cancer, benign ovarian tumors, and healthy controls — using 16S rRNA sequencing. The most consistent finding was enrichment of **Escherichia-Shigella** in ovarian tumor patients, a genus cluster that includes potentially pathogenic strains capable of lipopolysaccharide production, beta-glucuronidase activity, and estrogen deconjugation. The depletion of SCFA-producing genera (**[[coprococcus]]**, Fusicatenibacter, Butyricicoccus, **[[oscillibacter]]**) mirrors patterns seen in other estrogen-sensitive malignancies and reproductive disorders. The random forest classification models demonstrated that gut microbiota composition has genuine diagnostic discriminatory power (AUC 0.86 for ovarian cancer), potentially complementing existing biomarkers like CA-125. The distinction between ovarian cancer and benign tumor microbiota signatures is particularly notable — it suggests the gut microbiome may reflect tumor biology (malignant vs. benign) rather than just the presence of an ovarian mass. The study's large sample size (n=382) strengthens confidence in the taxonomic patterns identified, though as a single-center study from eastern China, generalizability requires validation.

## Relevance to WikiBiome

Informs entity pages for **[[coprococcus]]**, **[[oscillibacter]]**, **[[prevotella]]**, **[[selenomonas]]**, and **[[escherichia-coli]]**. Supports the concept of gut-ovarian axis communication through **[[dysbiosis]]** and **[[gut-metal-microbiome]]**. The Escherichia-Shigella enrichment is relevant to [[ferroptosis]] and estrogen metabolism pathways. The diagnostic model approach demonstrates clinical translation potential for microbiome profiling.

## Relevance to Cureva

Supports Primitive 1 (metals as selective pressures — the enrichment of iron-dependent Escherichia-Shigella in a cancer context) and Primitive 3 (the diagnostic model demonstrates that microbiome signatures can distinguish tumor biology). The depletion of SCFA producers informs intervention hypotheses: SCFA restoration (butyrate supplementation, dietary fiber) as adjunctive support for ovarian tumor patients. The gut-ovarian axis data may inform female infertility and ovarian cancer signature pages.

## Contradictions / Tensions

None with existing wiki content. The Escherichia-Shigella enrichment pattern is consistent with observations in other estrogen-sensitive conditions (endometriosis, breast cancer).

## Open Questions

- Does the gut microbiome change precede ovarian tumor development, or is it a consequence of the tumor microenvironment and systemic inflammation?
- Can the diagnostic model generalize across populations with different dietary and geographic backgrounds?
- What specific metabolic functions (e.g., beta-glucuronidase, estrogen deconjugation) are driving the association between Escherichia-Shigella and ovarian tumors?
- Would microbiome-based diagnostics complement CA-125 to improve early ovarian cancer detection?
