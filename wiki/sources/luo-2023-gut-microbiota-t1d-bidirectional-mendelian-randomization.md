---
title: "Luo 2023 — Gut microbiota and type 1 diabetes: a two-sample bidirectional Mendelian randomization study"
type: source
created: 2026-04-16
updated: 2026-04-16
authors: [Luo M, Sun M, Wang T, Zhang S, Song X, Liu X, Wei J, Chen Q, Zhong T, Qin J]
corresponding_author: "Jiabi Qin"
corresponding_email: "qinjiabi123@163.com"
institution: "Xiangya School of Public Health, Central South University, Changsha, China"
year: 2023
journal: "Frontiers in Cellular and Infection Microbiology"
doi: "10.3389/fcimb.2023.1163898"
pmid: "not yet verified"
evidence_level: cross-sectional
sample_size: "n=264,137 (T1D outcome GWAS, FinnGen); n=18,340 (gut microbiota MiBioGen GWAS)"
tags: [t1d, mendelian-randomization, bacteroidetes, firmicutes, eubacterium, causality, gut-microbiota]
library_category: causal
platform: wikibiome
condition: "type-1-diabetes"
karen_brain_primitives: [1, 5]
metals_discussed: []
taxa_discussed: [bacteroidetes, bacteroidia, bacteroidales, eubacterium-eligens, firmicutes, clostridia, family-xi, peptococcaceae, veillonellaceae, butyricoccus, dorea, lachnospiraceae-ucg008, ruminococcaceae-ucg010, ruminococcus2, veillonella, holdemania, prevotellaceae, rikenellaceae]
key_findings:
  - "Bacteroidetes phylum causally increases T1D risk (OR=1.24, 95% CI 1.01–1.53, p=0.044, IVW), with Bacteroidia class and Bacteroidales order also significant (OR=1.28, p=0.009)"
  - "Eubacterium eligens group causally decreases T1D risk (OR=0.64, 95% CI 0.50–0.81, p=2.84×10⁻⁴, P_FDR=0.031, IVW) — the strongest protective signal in the study"
  - "Firmicutes taxa including Clostridia class, Family XI, Peptococcaceae, Veillonellaceae, Butyricoccus, Dorea, and Lachnospiraceae UCG008 showed nominally significant protective associations with T1D"
keystone: false
---

## Key Findings

- **Bacteroidetes phylum** causally increases T1D risk (OR = 1.24, 95% CI 1.01–1.53, p = 0.044, IVW); Bacteroidia class and Bacteroidales order both significant (OR = 1.28, 95% CI 1.06–1.53, p = 0.009, P_FDR = 0.085) — nominally significant after FDR correction [[luo-2023-gut-microbiota-t1d-bidirectional-mendelian-randomization]]
- **Eubacterium eligens group** (Firmicutes) causally decreases T1D risk (OR = 0.64, 95% CI 0.50–0.81, p = 2.84×10⁻⁴, P_FDR = 0.031, IVW) — FDR-significant and the strongest causal signal in the dataset
- Additional Firmicutes taxa with nominal T1D protection: Clostridia class (OR = 0.83, p = 0.049), Family XI (OR = 0.87, p = 0.007), Peptococcaceae (OR = 0.82, p = 0.034), Veillonellaceae (OR = 1.14, p = 0.027), Butyricoccus genus (OR = 1.25, p = 0.041), Dorea genus (OR = 0.81, p = 0.048), Lachnospiraceae UCG008 (OR = 0.86, p = 0.019)
- Tenericutes phylum showed significant causal correlation with T1D (OR = 0.80, 95% CI 0.64–0.99, p = 0.037) in the minor phyla analysis
- Reverse MR (T1D as exposure, gut microbiota as outcome) did not identify robust reverse causation signals, supporting unidirectional causality from microbiota to T1D risk

## Methods

Two-sample bidirectional Mendelian randomization study. Gut microbiota GWAS data from MiBioGen consortium (n = 18,340, 24 cohorts). T1D GWAS summary statistics from FinnGen (n = 264,137, cases = 8,671, controls = 255,466), adjusted for sex, age, genotyping batch. Analyses at phylum, class, order, family, and genus levels, covering 196 taxa (9 phyla, 16 classes, 20 orders, 35 families, 12 unknown genera, 131 genera). Four MR methods used: MR-Egger, weighted median, IVW, weighted mode. FDR correction via Benjamini-Hochberg. Heterogeneity assessed by Cochran's Q; pleiotropy by MR-Egger intercept and MR-PRESSO. No significant heterogeneity or pleiotropy detected for the four primary significant taxa.

## Detailed Summary

The study provides the most comprehensive MR analysis of gut microbiota and T1D to date, operating at five taxonomic levels and leveraging the large FinnGen T1D GWAS. Key causal signals:

**Pro-T1D taxa (Bacteroidetes-dominated):**
- Bacteroidetes phylum (OR = 1.24, IVW p = 0.044)
- Bacteroidia class (OR = 1.28, IVW p = 0.009, P_FDR = 0.085)
- Bacteroidales order (OR = 1.28, IVW p = 0.009, P_FDR = 0.085)
- Prevotellaceae family: MR-Egger only significant (OR = 0.53, p = 0.029); IVW not significant, horizontal pleiotropy detected — interpret cautiously
- Rikenellaceae family: MR-Egger significant (OR = 1.95, p = 0.013); IVW not significant, horizontal pleiotropy detected

**Protective taxa (Firmicutes-dominated):**
- Eubacterium eligens group (OR = 0.64, IVW p = 2.84×10⁻⁴, P_FDR = 0.031) — only FDR-significant protective signal
- Clostridia class (OR = 0.83, IVW p = 0.049)
- Family XI (OR = 0.87, IVW p = 0.007)
- Peptococcaceae (OR = 0.82, IVW p = 0.034)
- Lachnospiraceae UCG008 (OR = 0.86, IVW p = 0.019)
- Dorea genus (OR = 0.81, IVW p = 0.048)
- Ruminococcaceae UCG010 (OR = 0.81, IVW p = 0.038)

The inverse pattern between Bacteroidetes and Firmicutes is consistent with observational T1D cohort data. The study leveraged GWAS from predominantly European-ancestry cohorts; ethnic generalizability requires validation.

## Relevance to WikiBiome

Provides high-quality causal evidence (MR design) for the Bacteroidetes-T1D association previously described only observationally. Eubacterium eligens as a protective factor at genus level is new, granular, and actionable. Confirms Firmicutes depletion as causally linked to T1D risk rather than merely correlated.

## Relevance to Cureva

Eubacterium eligens protection signal (OR = 0.64, strongest in dataset) suggests a potential ecological intervention target. The Bacteroidetes causal signal supports the mechanistic model in which LPS-producing Bacteroidetes species activate innate immunity and accelerate islet autoimmunity.

## Contradictions / Tensions

The Veillonellaceae finding is paradoxical — the IVW shows increased T1D risk (OR = 1.14) while other Firmicutes are protective. Veillonella is a lactate-fermenting genus producing propionate; its individual association may reflect different ecological niches within Firmicutes. Some nominally significant findings did not survive FDR correction; interpret with caution.

## Open Questions

- What is the mechanism by which Eubacterium eligens protects against T1D? Is it butyrate production or another metabolite?
- Are these MR findings replicable in non-European populations?
- Do the causal signals persist after stratification by HLA-DR genetic risk?
