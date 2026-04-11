---

title: "Gut Microbiota and Autoimmune Neurologic Disorders: A Two-Sample Bidirectional Mendelian Randomization Study"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Zhang M, Fang J, Zheng C, Lin Q, Zhang J]
journal: Frontiers in Microbiology
year: 2024
tags: [Mendelian-randomization, gut-microbiome, multiple-sclerosis, Guillain-Barre-syndrome, myasthenia-gravis, Ruminococcus, Roseburia, SCFA, causal-inference]
doi: "10.3389/fmicb.2024.1337632"
platform: wikibiome
---

# Gut Microbiota and Autoimmune Neurologic Disorders: A Two-Sample Bidirectional Mendelian Randomization Study

## Key Claims

- For [[multiple-sclerosis]]: higher *Ruminococcus2* (OR 1.213, P_FDR = 0.048) and *Roseburia* (OR 1.255, P_FDR = 0.048) were causally associated with increased MS risk, while *Ruminococcaceae UCG003* (OR 0.824), *Ruminiclostridium5* (OR 0.695), *Anaerotruncus* (OR 0.726), and order *Burkholderiales* (OR 0.800) were protective
- The protective taxa (*Ruminiclostridium5*, *Anaerotruncus*, *Ruminococcaceae*) are SCFA-producing bacteria that can increase acetic, propionic, and butyric acid production while reducing inflammatory factors
- Reverse MR analysis showed no evidence of reverse causation (diseases affecting gut microbiota), supporting a causal direction from microbiota to disease
- For Guillain-Barre syndrome: class *Mollicutes* and phylum *Tenericutes* (OR 3.016) and *Eubacterium hallii group* (OR 2.787) were risk factors
- No SNPs were identified as outliers through sensitivity analysis; all F-statistics >10; no heterogeneity or horizontal pleiotropy detected

## Methods/Findings

- **Design**: Two-sample bidirectional [[Mendelian-randomization]] using GWAS summary statistics
- **Data sources**: Gut microbiota from MiBioGen consortium (18,340 individuals, 24 cohorts); MS from IMSGC (115,803 individuals: 47,429 cases, 68,374 controls); GBS from FinnGen (213 cases, 215,718 controls); MG from FinnGen (232 cases, 217,056 controls)
- **Methods**: IVW (primary), MR-Egger, weighted median, weighted mode; P-value threshold raised to 1x10^-5 for more comprehensive IV selection; Cochran's Q, MR-Egger intercept, MR-PRESSO for sensitivity
- **194 taxa analyzed**: After quality control, 194 microbial taxa included across 9 phyla, 16 classes, 20 orders, 35 families, 131 genera
- **Key insight**: SCFA-producing bacteria (Ruminococcaceae, *Anaerotruncus*) linked to CD8+ and CD4+ T cell regulation and negatively correlated with TNF-alpha, IL-1beta, and IL-6

## Connections

- Extends [[xu-2022-causal-microbiota-autoimmune-mr]] by specifically focusing on neurological autoimmune conditions and using larger MS GWAS data (IMSGC)
- The *Roseburia* risk association is notable since this genus is typically considered beneficial (SCFA producer) -- depleted in MS in [[saresella-2020-circulating-fatty-acids-dysbiosis-ms]] -- suggesting complex species/strain-level effects
- Protective role of *Ruminiclostridium5* aligns with Clostridia cluster depletion in [[miyake-2015-dysbiosis-ms-clostridia-depletion]]
- Complements observational gut dysbiosis studies ([[jangi-2016-gut-microbiome-alterations-ms]], [[thirion-2023-gut-microbiota-ms-disease-activity]]) with genetic causal evidence
- Supports the rationale for [[microbiome-targeted-therapy]] and [[dietary-fiber]] interventions to boost protective SCFA-producing taxa
