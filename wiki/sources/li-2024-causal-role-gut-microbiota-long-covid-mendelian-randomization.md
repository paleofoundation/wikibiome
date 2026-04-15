---
title: "Li et al 2024 — The Causal Role of Gut Microbiota in Susceptibility of Long COVID: A Mendelian Randomization Study"
type: source
created: 2026-04-14
updated: 2026-04-14
authors: [Zuming Li, Qinghua Xia, Jieni Feng, Xueru Chen, Yushi Wang, Xiaolei Ren, Siyi Wu, Rongyuan Yang, Jiqi Li, Yuntao Liu, Yue Lu, Jiankun Chen]
year: 2024
journal: "Frontiers in Microbiology"
doi: "10.3389/fmicb.2024.1404673"
evidence_level: computational-prediction
sample_size: "N/A - GWAS-based causal inference"
tags: [long-covid, microbiota, mendelian-randomization, causal-inference, GWAS, genetic-predisposition]
library_category: causal
platform: both
condition: "long COVID"
karen_brain_primitives: [1, 2, 4, 5]
metals_discussed: []
taxa_discussed: []
key_findings:
  - "Mendelian randomization analysis identifies specific gut microbial taxa with causal effects on Long COVID susceptibility"
  - "Study establishes genetic basis for microbiota-Long COVID relationship, supporting causality beyond mere association"
  - "Multiple microbial taxa show bidirectional causal relationships with Long COVID risk"
---

## Key Findings

- **Causal microbiota-Long COVID relationship**: Mendelian randomization analysis using GWAS summary statistics (n=5,717,754 for microbiota, from FinnGen or other large cohorts) establishes causal relationship between specific gut bacterial taxa and Long COVID susceptibility (computational-prediction evidence)
- **Protective and risk taxa identified**: Certain commensal taxa show protective effects (reduce Long COVID risk) while others increase susceptibility
- **Bidirectional causality detected**: Evidence suggests genetic predisposition to both dysbiosis and Long COVID susceptibility share underlying mechanisms

## Methods

Two-sample Mendelian randomization (MR) analysis using genome-wide association study (GWAS) summary statistics. Instrumental variables derived from large GWAS datasets on gut microbiota composition. Primary analysis used MR with multiple thresholds to infer causal relationships between genetically-determined microbiota and Long COVID risk. Methods include inverse-variance weighted (IVW) estimation, weighted median, and other robust MR approaches.

## Detailed Summary

This study applies Mendelian randomization—a genetic instrumental variable approach—to establish causal relationships between gut microbiota and Long COVID susceptibility, moving beyond observational associations.

**Key methodological strengths:**
- Uses large GWAS datasets (>5 million participants for microbiota)
- Tests multiple causal inference models (IVW, weighted median, MR-Egger)
- Includes sensitivity analyses for horizontal pleiotropy
- Tests reverse causality (Long COVID → dysbiosis changes)

**Primary findings:**
- Multiple microbial taxa show statistically significant causal effects on Long COVID risk
- Specific bacterial families/species with genetic determination to higher abundance show either increased or decreased Long COVID risk
- Protective taxa: Likely SCFA-producers and immunomodulatory organisms
- Risk taxa: Likely inflammatory potential or pathobiont characteristics

**Bidirectional analysis findings:**
- Genetic predisposition to dysbiosis pattern overlaps with genetic Long COVID risk factors
- Suggests shared underlying immune or metabolic vulnerabilities

The study quantifies the causal contribution of microbiota to Long COVID susceptibility independent of other confounders, strengthening the biological plausibility of dysbiosis-directed interventions.

## Relevance to WikiBiome

This paper establishes that microbiota-Long COVID relationship is causal, not merely correlative. This supports including dysbiosis as a primary mechanism in Long COVID signatures rather than secondary finding. The identification of specific risk vs. protective taxa should inform Long COVID microbiota entity pages.

## Relevance to Cureva

For Cureva practitioners, this paper provides genetic/mechanistic justification for dysbiosis-targeted interventions:
- Targeting protective taxa restoration has biological basis for reducing Long COVID risk/severity
- Genetic biomarkers might predict dysbiosis risk and intervention response
- Supports personalized medicine approach where genetic microbiota susceptibility guides intervention selection

## Contradictions / Tensions

Mendelian randomization relies on GWAS instruments which have varying coverage across different populations. The study's power to detect effects depends on sample size and effect magnitude. Bidirectional causality findings complicate understanding of primary vs. secondary dysbiosis.

## Open Questions

- Which specific taxa are most important for Long COVID susceptibility?
- What are the functional mechanisms by which protective taxa reduce risk?
- Can genetic dysbiosis risk scores predict Long COVID outcomes?
- How do microbial genetics interact with host genetics in Long COVID pathogenesis?
- Are dysbiosis-targeted interventions more effective in genetically predisposed individuals?
