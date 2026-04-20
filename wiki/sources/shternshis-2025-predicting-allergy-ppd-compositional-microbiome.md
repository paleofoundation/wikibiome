---
title: "Shternshis 2025 — Predicting Allergy and Postpartum Depression from an Incomplete Compositional Microbiome"
type: source
created: 2026-04-09
updated: 2026-04-17
authors: [Andrey Shternshis, Bangzhuo Tong, Alkistis Skalkidou, Carolina Wahlby, Dave Zachariah, Luisa W. Hugerth, Prashant Singh]
year: 2025
journal: "BMC Genomics"
doi: "10.1186/s12864-025-12390-3"
evidence_level: computational-prediction
sample_size: "not yet verified"
tags: [postpartum-depression, gut-microbiome, machine-learning, compositional-data, prediction, imputation, pregnancy]
library_category: computational
platform: cureva
condition: "postpartum depression"
metals_discussed: []
taxa_discussed: []
key_findings:
  - "ML classification of gut microbiome time series predicts PPD with balanced accuracy of 0.62"
  - "Bacterial abundance ratios are statistically significant predictors of depression"
  - "Method handles incomplete compositional data through imputation and dimensionality reduction"
karen_brain_primitives: [3]
keystone: false
---

## Key Findings

- **Machine learning classification** using gut microbiome time series data collected during pregnancy can predict [[postpartum-depression]] with a balanced accuracy of 0.62 — modest but above chance, supporting the gut microbiome as a prospective biomarker ([[shternshis-2025-predicting-allergy-ppd-compositional-microbiome]], computational-prediction).
- **Bacterial abundance ratios** (log-ratios of specific taxa) extracted from microbiome time series are statistically significant predictors of depression, indicating that relative microbial community composition carries predictive information.
- The method handles **incomplete compositional data** through imputation, dimensionality reduction, and logarithmic transformation — addressing a major practical barrier in clinical microbiome studies where samples are frequently missing or have variable sequencing depth.
- Demonstrates that gut microbiome collected during pregnancy can serve as a **prospective biomarker for PPD**, identifying risk before symptom onset — a critical advantage for early intervention.
- The approach was validated on two case studies (infant food allergies and PPD prediction), demonstrating generalizability across different microbiome-disease prediction tasks.

## Methods

**Binary classification of compositional microbiome time series** using machine learning. Gut microbiome data were collected from pregnant women at approximately 6-week intervals throughout pregnancy. The compositional nature of microbiome data (relative abundances sum to 1) was addressed using log-ratio transformations, which convert the data to an unconstrained space suitable for standard ML algorithms. Missing timepoints were handled through imputation methods designed for compositional data. Dimensionality reduction was applied to manage the high-dimensional feature space. Multiple classifiers were evaluated, with performance assessed using balanced accuracy to account for class imbalance (PPD is less common than non-PPD). The PPD case study used clinically diagnosed PPD as the outcome variable.

## Detailed Summary

Shternshis et al. developed a computational framework for predicting health outcomes from incomplete compositional microbiome time series data, applying it to two clinically relevant prediction tasks: infant food allergies and postpartum depression. The PPD prediction component is relevant to WikiBiome and Cureva.

The core methodological contribution addresses a practical problem in clinical microbiome research: real-world longitudinal microbiome datasets invariably have missing timepoints (participants miss visits), variable sequencing depth, and the inherent compositional nature of relative abundance data. Standard machine learning algorithms perform poorly on such data without appropriate preprocessing. The authors' pipeline — combining compositional-aware imputation, log-ratio transformation, and dimensionality reduction — provides a principled framework for handling these challenges.

The balanced accuracy of 0.62 for PPD prediction is modest but significant. For context, clinical PPD prediction based on established risk factors (depression history, anxiety, stressful life events) achieves comparable accuracy, suggesting that microbiome data provides independent predictive information that could complement clinical risk assessment. The use of bacterial abundance ratios (rather than individual taxa abundances) as features is methodologically sound: ratios are more robust to compositional effects and may capture ecologically meaningful relationships between taxa.

The temporal aspect — collecting microbiome data during pregnancy at 6-week intervals — enables early identification of women at risk for PPD before symptoms emerge, typically weeks to months postpartum. This prediction window is clinically valuable because it aligns with a period when preventive interventions (psychotherapy, social support, microbiome-targeted interventions) could be initiated.

The study's limitations include the relatively small sample size, the use of 16S rRNA data (which has limited taxonomic and no functional resolution), and the modest accuracy — though the authors appropriately used balanced accuracy to account for the typically low prevalence of PPD in study populations.

## Relevance to WikiBiome

This study supports the [[gut-brain-axis]] as a predictive framework for mood disorders, demonstrating that gut microbiome composition during pregnancy carries information about future mental health outcomes. The predictive modeling approach complements causal inference approaches like [[zhang-2024-gut-microbiota-ppd-mendelian-randomization]] — MR establishes causal direction while ML prediction establishes clinical utility.

The finding that bacterial ratios (rather than individual taxa) are the most predictive features is consistent with ecological principles: community composition patterns matter more than single-organism abundances. This aligns with WikiBiome's emphasis on ecological dynamics over single-pathogen narratives.

Informs: [[postpartum-depression]], [[gut-brain-axis]], [[dysbiosis]]

## Open Questions

- Which specific bacterial ratios are most predictive of PPD — do they involve SCFA producers, tryptophan metabolizers, or estrogen-metabolizing bacteria?
- Can combining microbiome-based prediction with clinical risk factors (depression history, social support, hormonal markers) significantly improve PPD prediction accuracy?
- Would shotgun metagenomic data (providing functional pathway information) improve prediction accuracy over 16S rRNA-based taxonomic profiles?
- Can the same compositional microbiome time series framework be applied to predict other postpartum outcomes (recovery from gestational diabetes, postpartum thyroiditis)?
