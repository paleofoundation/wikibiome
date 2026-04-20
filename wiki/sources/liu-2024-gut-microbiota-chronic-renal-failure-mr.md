---
title: "Liu et al. 2024 — Causal Relationship between Gut Microbiota and Chronic Renal Failure: A Two-Sample MR Study"
type: source
created: 2026-04-09
updated: 2026-04-17
authors: [Xingzheng Liu, Jinying Mo, Xuerui Yang, Ling Peng, Youjia Zeng, Yihou Zheng, Gaofeng Song]
year: 2024
journal: "Frontiers in Microbiology"
doi: "10.3389/fmicb.2024.1356478"
evidence_level: computational-prediction
sample_size: "N/A (GWAS summary statistics from MiBioGen and IEU OpenGWAS)"
tags: [chronic-kidney-disease, CKD, mendelian-randomization, chronic-renal-failure, Escherichia-Shigella, Howardella, gut-microbiota, causal-inference, genetics]
platform: wikibiome
library_category: causal
condition: "chronic kidney disease"
taxa_discussed: [escherichia-coli, ruminococcus, shigella]
karen_brain_primitives: [1, 3]
key_findings:
  - "Ruminococcus gauvreauii genetically protective against chronic renal failure (OR 0.82)"
  - "Escherichia-Shigella (OR 1.22) and Howardella (OR 1.18) are genetically predicted risk factors for CRF"
  - "After FDR correction, only Escherichia-Shigella and Howardella remain significantly causal"
---

# Causal Relationship between Gut Microbiota and Chronic Renal Failure

## Key Findings

- **Ruminococcus gauvreauii** was identified as genetically protective against chronic renal failure, with an odds ratio of 0.82 — suggesting that higher genetically predicted abundance of this taxon reduces CRF risk.
- **Escherichia-Shigella** (OR = 1.22) and **Howardella** (OR = 1.18) were identified as genetically predicted **risk factors** for chronic renal failure.
- After **FDR correction** for multiple comparisons, only Escherichia-Shigella and Howardella retained statistical significance, strengthening the evidence for their causal role.
- The Mendelian randomization design provides stronger causal inference than observational studies by using genetic variants as instrumental variables, reducing confounding and reverse causation bias.
- Multiple MR methods (IVW, MR-Egger, weighted median, MR-PRESSO, simple mode) were applied for robustness, with consistent directions of effect across methods.

## Methods

**Two-sample Mendelian randomization (MR) study** using publicly available GWAS summary statistics. Gut microbiota genetic instruments were drawn from the **MiBioGen consortium** (the largest genome-wide association study of gut microbiota composition), and chronic renal failure outcome data came from the **IEU OpenGWAS database**. Five MR methods were applied: inverse-variance weighted (IVW), MR-Egger, weighted median, MR-PRESSO (to detect and correct for pleiotropy), and simple mode. Sensitivity analyses included Cochran's Q test for heterogeneity, MR-Egger intercept test for directional pleiotropy, and leave-one-out analysis. FDR correction was applied to account for multiple taxa tested.

## Detailed Summary

Liu et al. applied two-sample Mendelian randomization to investigate whether genetically predicted gut microbiota composition is causally related to chronic renal failure risk. MR uses genetic variants (SNPs) associated with the exposure (microbial abundance) as instrumental variables, exploiting the random assignment of alleles at conception to mimic a natural experiment. This approach circumvents two major limitations of observational microbiome-CKD studies: confounding (by diet, medications, comorbidities) and reverse causation (CKD altering the microbiome rather than vice versa).

The identification of Escherichia-Shigella as a causal risk factor for CRF after FDR correction is notable because this genus is consistently enriched in observational studies of CKD patients. The MR evidence suggests that this enrichment is not merely a consequence of CKD-altered gut environment but may be causally contributing to kidney damage — potentially through LPS-mediated inflammation, production of uremic toxin precursors, or direct epithelial damage.

Howardella — a less-studied genus — was also identified as a causal risk factor. This genus is associated with protein fermentation and may contribute to the production of proteolytic metabolites that are toxic to renal tissue.

The protective effect of Ruminococcus gauvreauii aligns with the broader pattern of SCFA-producing commensals being protective in kidney disease, though the specific mechanisms by which this species confers protection remain to be elucidated.

The computational nature of MR means that these findings indicate genetic-level causal relationships but do not demonstrate interventional efficacy — reducing Escherichia-Shigella or increasing Ruminococcus gauvreauii in CKD patients has not yet been shown to improve outcomes in clinical trials.

## Relevance to WikiBiome

This study provides **causal evidence** (via genetic instruments) for what observational studies have suggested: that specific gut taxa are not merely passengers in CKD but active contributors to disease. The finding that Escherichia-Shigella is causally implicated strengthens the case for targeting this genus as part of microbiome-directed therapy in CKD.

From a metallomics perspective, Escherichia species are highly dependent on iron (via siderophore systems including enterobactin) and express nickel-dependent enzymes (urease, hydrogenase). Their causal role in CRF connects the metals-as-selective-pressures framework directly to kidney disease progression.

Informs: [[chronic-kidney-disease]], [[escherichia-coli]], [[dysbiosis]]

## Open Questions

- Can the causal relationship between Escherichia-Shigella and CRF be intercepted by iron restriction strategies or siderophore competition?
- What specific metabolites or virulence factors produced by Escherichia-Shigella mediate the causal effect on kidney damage?
- Does the MR-identified protective effect of Ruminococcus gauvreauii translate into clinical benefit when supplemented as a probiotic in CKD patients?
