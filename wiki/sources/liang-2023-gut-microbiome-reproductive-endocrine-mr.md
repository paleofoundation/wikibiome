---
title: "Liang 2023 — Gut Microbiome and Reproductive Endocrine Diseases (MR Study)"
type: source
created: 2026-04-20
updated: 2026-04-20
authors: [Ye Liang, Weihong Zeng, Tao Hou, Haikun Yang, Boming Wu, Ru Pan, Lishan Huang]
corresponding_author: "Lishan Huang"
corresponding_email: "mzslishan2019@163.com"
institution: "Meizhou People's Hospital, Guangdong, China"
year: 2023
journal: "Frontiers in Endocrinology"
doi: "10.3389/fendo.2023.1164186"
evidence_level: mendelian-randomization
sample_size: "n=18,473 (microbiome) + 113,238 (PCOS) + 104,225 (infertility) + 77,257 (endometriosis)"
tags: [mendelian-randomization, pcos, endometriosis, female-infertility, gut-microbiome, reproductive-endocrine]
library_category: causal
platform: both
condition: pcos
karen_brain_primitives: [1, 5, 7]
metals_discussed: []
taxa_discussed: [streptococcus, ruminococcaceae-ucg005, sellimonas, ruminococcaceae-ucg011, coprococcus-2, ruminococcus-torques, olsenella, oscillospira, anaerotruncus]
key_findings:
  - "Streptococcus (OR=1.52) and Ruminococcaceae UCG005 (OR=1.04) causally associated with PCOS risk"
  - "Coprococcus 2 (OR=1.20) increases female infertility risk; Ruminococcus torques (OR=0.69) is protective"
  - "Olsenella (OR=1.11) and Oscillospira (OR=1.21) linked to endometriosis risk"
keystone: false
---

# Liang 2023 — Gut Microbiome and Reproductive Endocrine Diseases (MR Study)

## Key Findings

- **PCOS:** Streptococcus (OR=1.52, 95%CI 1.13–2.06, p=0.006) and Ruminococcaceae UCG005 (OR=1.04–1.86) associated with high PCOS risk. Sellimonas (OR=0.69) and Ruminococcaceae UCG011 (OR=0.76) protective ([[liang-2023-gut-microbiome-reproductive-endocrine-mr]], MR).
- **Female infertility:** Coprococcus 2 (OR=1.20, 95%CI 1.01–1.43, p=0.039) correlated with increased risk. Ruminococcus torques (OR=0.69, 95%CI 0.54–0.88, p=0.002) protective ([[liang-2023-gut-microbiome-reproductive-endocrine-mr]]).
- **Endometriosis:** Olsenella (OR=1.11, 95%CI 1.01–1.22, p=0.036), Anaerotruncus (OR=1.25, 95%CI 1.03–1.53, p=0.025), Oscillospira (OR=1.21, 95%CI 1.01–1.46, p=0.035) linked to high risk ([[liang-2023-gut-microbiome-reproductive-endocrine-mr]]).
- **No genome-wide significant** causal links found — results are at locus-wide significance only ([[liang-2023-gut-microbiome-reproductive-endocrine-mr]]).

## Methods

Two-sample MR using MiBioGen (n=18,473, 119 genera) and GWAS data for PCOS (Apollo, n=113,238), female infertility (FinnGen, n=104,225), and endometriosis (OpenGWAS, n=77,257). Two IV thresholds: locus-wide (p<1×10⁻⁵) and genome-wide (p<5×10⁻⁸). IVW main method with MR-Egger and weighted median sensitivity.

## Relevance to WikiBiome

- **Entity pages:** [[pcos]], [[endometriosis]], [[female-infertility]] — MR-level causal microbiome associations.
- **Cross-condition patterns:** Ruminococcaceae UCG005/011 and Anaerotruncus appear across multiple reproductive conditions.

## Relevance to Cureva

- Shared taxonomic risk factors across PCOS/endometriosis/infertility support the "reproductive endocrine disorder family" cross-condition signature concept.
- Ruminococcus torques as protective factor for infertility — intervention target.

## Open Questions

- Do these locus-wide findings replicate with larger GWAS?
- Overlap with PMDD taxonomic signatures (Anaerotruncus also flagged in Yao 2024)?
