---
title: "Zhang 2024 — CBC-Derived Inflammatory Biomarkers and Erectile Dysfunction in the United States"
type: source
created: 2026-04-19
updated: 2026-04-19
authors: [Yi Zhang, Tingzhen Li, Qixin Chen, Maobiao Shen, Xinyang Fu, Changjin Liu]
corresponding_author: "Changjin Liu"
corresponding_email: "41878071@qq.com"
institution: "Department of Urology, Kaiping Central Hospital, Kaiping, Jiangmen, China"
year: 2024
journal: "Scientific Reports"
doi: "https://doi.org/10.1038/s41598-024-83733-5"
pmid: ""
evidence_level: cross-sectional
sample_size: "n=3,639"
tags: [erectile-dysfunction, inflammation, inflammatory-biomarkers, CBC, NLR, MLR, SIRI, SII, NHANES, mortality]
library_category: causal
platform: both
condition: "erectile dysfunction"
karen_brain_primitives: [1, 2]
metals_discussed: []
taxa_discussed: []
key_findings:
  - "Elevated NLR, MLR, NMLR, and SIRI were significantly associated with increased ED prevalence in US men (NHANES 2001–2004)"
  - "MLR had the strongest predictive power for both ED incidence and all-cause mortality among ED patients"
  - "Among ED patients, those in highest quartiles of NLR, MLR, and SII had significantly elevated all-cause mortality risk"
keystone: false
stub: false
---

## Key Findings

- **Elevated CBC-derived inflammatory markers are associated with increased ED prevalence.** After full covariate adjustment, NLR (OR = 1.09, 95% CI 1.00–1.19, p = 0.021), MLR (OR = 2.97, 95% CI 1.18–7.50, p = 0.01), NMLR (OR = 1.10, 95% CI 1.01–1.11, p = 0.006), and SIRI (OR = 1.11, 95% CI 1.01–1.22, p = 0.017) remained significantly associated with ED prevalence (cross-sectional, [[zhang-2024-cbc-inflammatory-biomarkers-erectile-dysfunction]]).
- **MLR exhibits the strongest predictive power** for both ED incidence and all-cause mortality in the ED population, outperforming NLR, NMLR, SIRI, SII, and dNLR in random survival forest analysis (cross-sectional, [[zhang-2024-cbc-inflammatory-biomarkers-erectile-dysfunction]]).
- **CBC-derived markers predict all-cause mortality in ED patients.** Among 1,031 men with ED, 610 (59.17%) died during follow-up. In the fully adjusted model, higher MLR quartiles were significantly associated with increased all-cause mortality (HR = 2.00, 95% CI 1.33–3.01, p < 0.001; P for trend = 0.002) (cross-sectional with mortality follow-up, [[zhang-2024-cbc-inflammatory-biomarkers-erectile-dysfunction]]).
- **Restricted cubic spline analysis** demonstrated a nonlinear association between ED prevalence and levels of NLR, NMLR, and SIRI, with notable inflection points at 2.03, 0.26, and 471.21, respectively (cross-sectional, [[zhang-2024-cbc-inflammatory-biomarkers-erectile-dysfunction]]).
- **Neutrophil counts were significantly elevated** and lymphocyte and platelet counts were significantly reduced in men with ED compared to those without (cross-sectional, [[zhang-2024-cbc-inflammatory-biomarkers-erectile-dysfunction]]).

## Methods

- **Study design:** Cross-sectional analysis of NHANES 2001–2004 data with linked mortality follow-up through the National Death Index (NDI) to December 2019.
- **Population:** Adult US males aged ≥20 years with complete data on ED status and CBC. Final analytic cohort: n = 3,639 (weighted n = 78,785,355). Among these, 1,031 had ED (weighted n = 14,991,437).
- **ED assessment:** Self-reported via questionnaire ("How would you describe your ability to develop and maintain an erection sufficient for sexual intercourse?"). Responses of "never" or "sometimes" classified as ED.
- **Inflammatory markers:** Six CBC-derived indicators calculated from fasting venous blood: NLR, dNLR, MLR, NMLR, SIRI, SII.
- **Statistical analysis:** Mann-Whitney U test, chi-square test, multiple logistic regression (4 models with progressive covariate adjustment), restricted cubic splines (RCS), Cox regression for mortality, random survival forest (RSF) for predictive comparison, Spearman rank correlation.
- **Covariates:** Age, race, marital status, BMI, PIR, education, smoking, alcohol consumption, physical activity, hypertension, diabetes, hypercholesterolemia, cardiovascular disease.

## Detailed Summary

This study used two cycles of NHANES (2001–2002, 2003–2004), the only cycles providing comprehensive data on both ED and CBC. From an initial 21,161 participants, exclusions for female sex, age <20, missing data, and incomplete covariates yielded 3,639 men for analysis.

**ED prevalence and demographics:** Men with ED were significantly older (61.1 ± 15.3 vs. 41.3 ± 13.4 years), had higher BMI (29.1 ± 6.2 vs. 27.9 ± 5.3), and were more likely to have hypertension (41.4% vs. 71.2%), diabetes (21.2% vs. 3.4%), cardiovascular disease (22.6% vs. 4.6%), and high cholesterol (50.7% vs. 33.0%).

**Association with ED prevalence:** In the crude model, all six CBC-derived markers except dNLR showed significant positive associations with ED. After full adjustment (Model 3), NLR, MLR, NMLR, and SIRI maintained significance. dNLR and SII lost significance after covariate adjustment. When stratified into quartiles, the fully adjusted model showed no significant dose-response trend for any marker (P for trend >0.05), suggesting the association may not be strictly linear.

**Mortality among ED patients:** During follow-up, 59.17% of men with ED died. In the crude model, higher quartiles of NLR, MLR, NMLR, SIRI, and SII (but not dNLR) were associated with increased all-cause mortality. In the fully adjusted Model 3, only MLR maintained a significant association (P for trend = 0.002). The HR for MLR Q4 vs. Q1 in Model 3 was 1.44 (95% CI 1.09–1.90).

**Predictive comparison:** Random survival forest analysis ranked MLR as the strongest predictor of all-cause mortality in ED patients, followed by lymphocyte count, platelet count, and white blood cell count. NLR and NMLR ranked lower; dNLR had the lowest predictive importance.

**Correlation structure:** NLR and NMLR showed a near-perfect positive correlation (r = 1.00). MLR showed a strong negative correlation with monocyte count and dNLR (r = −0.35). MLR correlated moderately with SIRI (r = 0.81) and SII (r = 0.41).

## Relevance to WikiBiome

This study provides evidence that **systemic inflammation, as measured by low-cost CBC-derived ratios, is significantly associated with erectile dysfunction** in a nationally representative US cohort. This is relevant to WikiBiome's coverage of:

- **[[erectile-dysfunction]]** — Adds inflammatory biomarker associations to the disease entity page. The link between chronic inflammation and ED complements existing microbiome-based associations by establishing the inflammatory milieu in which dysbiosis operates.
- **[[inflammation]]** / **[[systemic-inflammation]]** — CBC-derived markers reflect the balance between innate immune cell populations (neutrophils, monocytes, lymphocytes, platelets). The monocyte-to-lymphocyte ratio (MLR) emerging as the strongest predictor points to monocyte-driven chronic inflammation as a key pathway.
- The finding that ED patients have elevated neutrophil counts and reduced lymphocyte counts is consistent with a chronic low-grade inflammatory state that could reflect or contribute to gut barrier dysfunction and microbial translocation.

## Relevance to Cureva

- **Signature layer implications:** The inflammatory biomarker profile (elevated neutrophils, monocytes; depleted lymphocytes, platelets) could inform the nutritional immunity layer of the [[erectile-dysfunction-signature]]. Elevated NLR and MLR may serve as accessible clinical proxies for the systemic inflammatory burden driven by metallomic-taxonomic dysbiosis.
- **Mortality prediction:** MLR as a prognostic marker in ED patients could be used in Cureva's risk stratification — practitioners could monitor MLR to track whether interventions targeting the underlying dysbiosis are reducing systemic inflammation.
- **Intervention monitoring:** CBC-derived markers are inexpensive and routinely available, making them practical biomarkers for tracking response to Cureva-recommended interventions (e.g., does chelation or probiotic therapy reduce MLR over time?).
- **STOP signal potential:** The strong association between inflammation and ED mortality reinforces that interventions which increase inflammatory burden (e.g., iron supplementation in the presence of elevated hepcidin) could worsen outcomes in ED patients with comorbid inflammatory states.

## Contradictions / Tensions

- **Dose-response attenuation:** While continuous measures of NLR, MLR, NMLR, and SIRI showed significant associations with ED after full adjustment, the quartile-based P for trend was not significant in Model 3 for any marker. This tension suggests the relationship may be nonlinear (supported by the RCS analysis showing inflection points) rather than a simple dose-response.
- **dNLR and SII lost significance** after covariate adjustment, contradicting earlier studies (e.g., Zhong et al. 2023, ref 16 in paper) that found SII independently associated with ED. This may reflect differences in covariate sets or population characteristics.
- **Self-reported ED** introduces potential misclassification bias. The study acknowledges this but notes prior validation studies supporting self-report reliability.

## Open Questions

1. **What drives the monocyte predominance?** MLR's superior predictive power over NLR suggests monocyte-driven chronic inflammation is more relevant to ED pathogenesis than neutrophil-driven acute inflammation. Is this monocyte activation driven by microbial translocation, metal-induced endothelial damage, or both?
2. **Are these inflammatory markers responsive to microbiome-targeted interventions?** If gut dysbiosis contributes to systemic inflammation in ED, do interventions that restore microbial balance (probiotics, dietary changes, metal restriction) reduce NLR/MLR?
3. **What is the causal direction?** The cross-sectional design cannot distinguish whether inflammation causes ED, ED causes inflammation (via stress, medication, comorbidity), or both share a common upstream cause (e.g., metallomic dysbiosis).
4. **How do these markers interact with the metallomic signature?** Heavy metal exposure is known to drive chronic inflammation — do ED patients with high metal burden show even more elevated MLR/NLR than those without?
