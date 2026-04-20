---
title: "Assessment of peritoneal microbial features and tumor marker levels as potential diagnostic tools for ovarian cancer"
type: source
created: 2026-04-09
updated: 2026-04-17
authors: [Miao R, Badger TC, Groesch K, Diaz-Sylvester PL, Wilson T, Ghareeb A, Martin JA, Welge M, Bushell C, Auvil L, Zhu R, Brard L, Braundmeier-Fleming A]
journal: PLoS ONE
year: 2020
doi: "10.1371/journal.pone.0227707"
tags: [ovarian-cancer, peritoneal-microbiome, CA-125, HE4, diagnostic-biomarker, machine-learning, 16S-rRNA, NGS]
platform: wikibiome
karen_brain_primitives: [3]
evidence_level: cross-sectional
key_findings:
  - "18 microbial features were highly specific to ovarian cancer pathology in the peritoneal fluid"
  - "Combining microbial features with CA-125 and HE4 improved diagnostic accuracy over tumor markers alone"
  - "OC patients had a distinct peritoneal microbiome compared to benign and healthy controls"
---

# Peritoneal Microbial Features and Tumor Markers as OC Diagnostic Tools

## Key Findings

- **18 microbial features were highly specific to OC pathology** in peritoneal fluid, distinguishing cancer patients from benign conditions and healthy controls ([[miao-2020-peritoneal-microbial-features-ovarian-cancer-diagnostics]], cross-sectional)
- **Combining microbial features with tumor markers** (CA-125, HE4) improved diagnostic accuracy beyond what either approach achieved alone
- **OC patients had a distinct peritoneal microbiome** with altered alpha and beta diversity compared to controls
- **Machine learning classification** using microbial and tumor marker features together achieved improved sensitivity and specificity <!-- NEEDS VERIFICATION: exact AUC values -->
- **16S rRNA gene sequencing** of peritoneal fluid revealed microbial communities not previously characterized in this compartment

## Methods

Cross-sectional study using next-generation 16S rRNA gene sequencing of peritoneal fluid samples from ovarian cancer patients, patients with benign ovarian conditions, and healthy controls. Peritoneal fluid was collected during surgery. Microbial data were combined with serum CA-125 and HE4 tumor marker levels. Machine learning approaches were used to build diagnostic classifiers. <!-- NEEDS VERIFICATION: exact sample sizes per group -->

## Detailed Summary

This study characterized the peritoneal microbiome in ovarian cancer and evaluated whether microbial features could enhance conventional tumor marker-based diagnostics. The peritoneal cavity, traditionally considered sterile, harbors microbial communities that differ between health and disease states. Using 16S rRNA sequencing, the authors identified 18 microbial features (likely at the genus or OTU level) that were specifically associated with OC.

The key innovation was combining microbial biomarkers with established tumor markers (CA-125 and HE4). CA-125 alone has limited specificity, as it is elevated in many benign conditions (endometriosis, pelvic inflammatory disease). By adding microbial features to the diagnostic model, the authors improved discriminatory power. This suggests that the tumor-associated microbiome provides orthogonal diagnostic information that complements protein biomarkers.

The presence of distinct microbial communities in OC peritoneal fluid raises questions about whether these microbes are passengers (colonizing the tumor microenvironment) or drivers (contributing to carcinogenesis through inflammation, immune evasion, or metabolite production).

## Relevance to WikiBiome

- Directly informs the [[ovarian-cancer]] entity page regarding the peritoneal microbiome as a diagnostic and mechanistic feature
- Supports the [[dysbiosis]] concept — extends dysbiosis beyond the gut to the peritoneal compartment
- Relevant to [[biomarkers]] — microbial features as novel diagnostic biomarkers
- Connects to [[gut-metal-microbiome]] — peritoneal microbial communities may be influenced by metal availability in the tumor microenvironment, similar to gut communities

## Open Questions

- Are the 18 OC-specific microbial features of gut origin (translocation) or from other sources?
- How does the peritoneal metallomic environment (iron, zinc, nickel) influence these microbial communities?
- Do these microbial features have prognostic value beyond diagnosis?
- Can peritoneal microbiome profiling distinguish OC histological subtypes?
