---
title: "Xiong 2024 — Causal Relationship Between Gut Microbiota and Gynecological Tumor: A Two-Sample MR Study"
type: source
created: 2026-04-09
updated: 2026-04-17
authors: [Xiong Y, Zhang X, Niu X, Zhang L, Sheng Y, Xu A]
journal: "Frontiers in Microbiology"
year: 2024
doi: "10.3389/fmicb.2024.1417904"
evidence_level: computational-prediction
sample_size: "N/A"
tags: [ovarian-cancer, Mendelian-randomization, gut-microbiota, Lachnospiraceae, uterine-fibroids, endometrial-cancer, cervical-cancer, causal-inference]
library_category: causal
platform: wikibiome
condition: "gynecological cancers"
taxa_discussed: [lachnospiraceae, ruminococcaceae]
metals_discussed: []
karen_brain_primitives: [1, 5]
key_findings:
  - "Higher Lachnospiraceae abundance causally associated with lower uterine fibroid risk (OR 0.882)"
  - "Higher OC incidence causally associated with increased Lachnospiraceae abundance (OR 1.329, reverse direction)"
  - "No evidence of reverse causation from gynecological tumors to gut microbiota in forward MR"
keystone: false
---

# Causal Relationship Between Gut Microbiota and Gynecological Tumors

## Key Findings

- **[[lachnospiraceae]] abundance causally associated with lower uterine fibroid risk** (OR 0.882, 95% CI not crossing 1), suggesting a protective role for this SCFA-producing family in uterine fibroid pathogenesis ([[xiong-2024-causal-gut-microbiota-gynecological-tumor-mr]], computational-prediction).
- **Ovarian cancer incidence was associated with increased Lachnospiraceae abundance** in the reverse MR direction (OR 1.329), suggesting OC itself may alter the gut microbiome rather than Lachnospiraceae driving OC risk.
- **No evidence of reverse causation** from gynecological tumors to gut microbiota in the forward MR analysis, strengthening the causal interpretation of microbiota-to-disease effects.
- Multiple gut bacterial taxa showed associations across **four gynecological conditions** (uterine fibroids, ovarian cancer, endometrial cancer, cervical cancer), suggesting shared gut-reproductive axis mechanisms.
- Sensitivity analyses (MR-Egger, weighted median, MR-PRESSO) confirmed robustness with no significant pleiotropy detected.

## Methods

- **Study design**: Two-sample bidirectional Mendelian randomization
- **Exposure GWAS**: MiBioGen consortium gut microbiota GWAS (largest available microbiome GWAS)
- **Outcome GWAS**: IEU Open GWAS database for uterine fibroids, ovarian cancer, endometrial cancer, and cervical cancer
- **MR methods**: Inverse-variance weighted (IVW) as primary method, with MR-Egger, weighted median estimation, and MR-PRESSO for sensitivity analyses
- **Bidirectional design**: Forward MR (microbiota → cancer) and reverse MR (cancer → microbiota) to test directionality
- **Limitations**: MiBioGen GWAS has limited taxonomic resolution; MR assumes no horizontal pleiotropy; predominantly European ancestry populations limit generalizability

## Detailed Summary

Xiong et al. applied two-sample bidirectional MR to examine causal relationships between gut microbiota and four major gynecological conditions. The study's most notable finding is the protective association of Lachnospiraceae against uterine fibroids. Lachnospiraceae are major SCFA producers (particularly butyrate), and their protective effect aligns with the established anti-inflammatory and anti-proliferative properties of butyrate. Given that uterine fibroids are estrogen-dependent growths, the Lachnospiraceae-fibroid connection may also operate through the estrobolome — Lachnospiraceae species participate in estrogen metabolism, and their abundance could influence circulating estrogen levels.

The reverse MR finding — that OC increases Lachnospiraceae — is an important methodological result. It demonstrates that observational associations between gut microbiota and cancer can reflect the disease altering the microbiome rather than the microbiome driving the disease. This bidirectional complexity underscores the need for MR approaches rather than relying solely on cross-sectional observational studies.

The study's coverage of four gynecological conditions simultaneously enables cross-condition comparison. The shared and condition-specific microbial associations suggest that different gynecological tumors interact with the gut microbiome through partially overlapping mechanisms, potentially involving estrogen metabolism, immune modulation, and SCFA-mediated signaling.

## Relevance to WikiBiome

Supports the [[lachnospiraceae]] entity page with causal evidence for a protective role in uterine fibroids. Relevant to cross-condition pattern detection — the shared microbial associations across four gynecological conditions inform the associated conditions sections of multiple disease entity pages. The bidirectional finding for OC is a useful methodological example for the [[biomarkers]] concept page regarding the interpretation of microbiome-disease associations.

## Open Questions

- Through which mechanism does Lachnospiraceae protect against uterine fibroids — butyrate-mediated anti-proliferative effects, estrogen metabolism modulation, or immune regulation?
- Do the gynecological condition-specific microbial associations reflect condition-specific estrobolome activity?
- Can these MR findings be replicated in non-European ancestry populations where gynecological cancer incidence patterns differ?
- What specific Lachnospiraceae species drive the protective effect — is it the same species across different gynecological conditions?
