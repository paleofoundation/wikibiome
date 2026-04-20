---
title: "Huang 2024 — Exploring the Link Between Dietary Zinc Intake and Endometriosis Risk"
type: source
created: 2026-04-19
updated: 2026-04-19
authors: [Yingmei Huang, Yumei Wei, Feng Liang, Yingqin Huang, Jianyong Huang, Xuehui Luo, Baoli Xie]
corresponding_author: "Baoli Xie"
corresponding_email: "762856f5@qq.com"
institution: "Gynecology Department, The First People's Hospital of Nanning, Nanning, China"
year: 2024
journal: "BMC Public Health"
doi: "10.1186/s12889-024-20433-9"
pmid: ""
evidence_level: cross-sectional
sample_size: "n=4315"
tags: [endometriosis, zinc, dietary-intake, NHANES, cross-sectional, trace-elements, immune-regulation]
library_category: heavy-metals
platform: both
condition: endometriosis
karen_brain_primitives: [1, 2, 4]
metals_discussed: [zinc, cadmium]
taxa_discussed: []
key_findings:
  - "Higher dietary zinc intake (>14 mg/day) associated with increased endometriosis risk (OR 1.60, 95% CI 1.12-2.27, p=0.009) vs. low intake (<=8 mg/day)"
  - "Dose-response relationship: medium zinc intake (8-14 mg/day) showed non-significant trend (OR 1.19, 95% CI 0.92-1.54, p=0.189)"
  - "Association remained robust across subgroup and sensitivity analyses with no significant effect modification by demographic or lifestyle factors"
keystone: false
---

## Key Findings

- **Positive association between dietary zinc intake and endometriosis risk.** In a fully adjusted multivariable logistic regression model (Model 3), women consuming >14 mg/day of dietary zinc had an adjusted OR of **1.60 (95% CI: 1.12--2.27, p=0.009)** for endometriosis compared to those consuming <=8 mg/day ([[huang-2024-dietary-zinc-endometriosis-risk]], cross-sectional, n=4315).
- **Dose-response trend approaching significance.** The 8--14 mg/day group showed OR 1.19 (95% CI: 0.92--1.54, p=0.189), and the trend test across all three categories was significant (p=0.008), suggesting a graded relationship ([[huang-2024-dietary-zinc-endometriosis-risk]], cross-sectional).
- **No significant effect modification.** Stratified analyses by age, race, BMI, marital status, family income, smoking status, education level, and dietary supplement use showed no significant interactions, indicating the association holds consistently across subgroups ([[huang-2024-dietary-zinc-endometriosis-risk]], cross-sectional).
- **Sensitivity analysis confirmed robustness.** After excluding participants with extreme energy intake (<500 or >5000 kcal/day), the association persisted: OR 1.22 (95% CI: 0.94--1.59, p=0.128) for 8--14 mg/day and OR 1.61 (95% CI: 1.13--2.29, p=0.009) for >14 mg/day ([[huang-2024-dietary-zinc-endometriosis-risk]], cross-sectional).
- **Prevalence in study population.** Of 4315 women aged 20--54, 331 (7.7%) had a diagnosis of endometriosis ([[huang-2024-dietary-zinc-endometriosis-risk]], cross-sectional).

## Methods

- **Design:** Cross-sectional analysis of NHANES data (1999--2006, four 2-year cycles combined).
- **Population:** 4315 non-pregnant American women aged 20--54 with complete endometriosis and dietary zinc data. Derived from an initial pool of 5557 participants after excluding 113 with missing zinc data, 991 pregnant women, and 138 with missing pregnancy status.
- **Endometriosis ascertainment:** Self-reported physician diagnosis via NHANES reproductive health questionnaire ("Has a doctor or other health professional ever told you that you had endometriosis?").
- **Dietary zinc measurement:** 24-hour dietary recall interview conducted during the Mobile Examination Center visit. Zinc intake categorized as <8, 8--14, and >14 mg/day.
- **Statistical approach:** Three logistic regression models with progressive covariate adjustment: Model 1 (crude), Model 2 (age, race/ethnicity, education, smoking, dietary supplements), Model 3 (Model 2 + vigorous activity, moderate activity, marital status, family income, BMI).
- **Additional analyses:** Subgroup stratification with interaction testing via likelihood ratio tests; sensitivity analysis excluding extreme energy intake values.
- **Software:** R 3.3.2 (The R Foundation) and Free Statistics Software 1.5.

## Detailed Summary

This study analyzed pooled NHANES data from 1999--2006 to investigate whether dietary [[zinc]] intake is associated with [[endometriosis]] risk in American women of reproductive age. The study population of 4315 women included 331 diagnosed with endometriosis (7.7% prevalence).

**Univariate associations (Table 2):** Dietary zinc intake, age, race, family income, education level, smoking status, and dietary supplement use were all significantly associated with endometriosis in univariate analysis. Zinc showed OR 1.03 (95% CI: 1.01--1.05, p=0.008) per unit increase.

**Multivariable results (Table 3):** With <8 mg/day as reference, the fully adjusted model (Model 3) yielded:
- 8--14 mg/day: OR 1.19 (95% CI: 0.92--1.54, p=0.189)
- >14 mg/day: OR 1.60 (95% CI: 1.12--2.27, p=0.009)
- P for trend: 0.008

The crude model (Model 1) showed similar directionality: OR 1.08 (95% CI: 0.85--1.38, p=0.537) for 8--14 mg/day and OR 1.42 (95% CI: 1.02--1.98, p=0.041) for >14 mg/day, with p-trend=0.053.

**Subgroup analyses (Figure 2):** Forest plot showing adjusted OR across all subgroups ranged from 1.01 to 1.08, all crossing 1.0 with no significant interaction terms. This uniformity across age, BMI, race/ethnicity, family income, smoking status, dietary supplement use, marital status, and education level strengthens the finding's generalizability within the US population.

**Mechanistic discussion:** The authors propose several biological pathways:
- [[Zinc]] is a cofactor for **matrix metalloproteinases (MMPs)**, particularly MMP-2 and MMP-9, which facilitate tissue invasion and remodeling in endometriotic lesion progression.
- Zinc plays a role in the **kisspeptin system**, which regulates the hypothalamic-pituitary-gonadal (HPG) axis; dysregulation of this system has been linked to endometriosis.
- Zinc influences **[[calprotectin]]** activity and MMP activation, both involved in tissue remodeling in endometriosis.
- Zinc modulates **estrogen receptor** function, and cadmium (a zinc mimic) has been shown to activate estrogen receptor-alpha.
- Zinc is essential for **T lymphocyte** function and immune regulation; even minor fluctuations in serum zinc affect T cell levels.

**Contradictory prior findings discussed:** The authors note that their finding of a *positive* correlation between dietary zinc and endometriosis contradicts earlier smaller studies:
- Messalli et al. found significantly *lower* serum zinc in endometriosis patients (1,010 vs. 1,294 microg/L).
- A study of 190 Asian women found an inverse association between zinc blood levels and endometriosis.
- Pollack et al. found no significant link between urinary zinc and endometriosis.

The authors attribute this discrepancy to differences in zinc compartment measured (dietary intake vs. serum vs. urine), small sample sizes in earlier work, and the distinction between absorption/metabolism of zinc vs. intake.

## Relevance to WikiBiome

This study informs the [[zinc]] entity page and the [[endometriosis]] entity page. Key contributions:

- Provides population-level epidemiological data (n=4315) on dietary zinc-endometriosis associations, the largest study of its kind to date.
- The MMP pathway discussion connects zinc to tissue invasion mechanisms relevant to the [[matrix-metalloproteinases]] concept page.
- The cadmium-as-zinc-mimic discussion (cadmium activating estrogen receptor-alpha) links to the [[cadmium]] entity page and the [[mis-metallation]] concept.
- The calprotectin connection bridges to [[calprotectin]] and [[nutritional-immunity]] concepts.
- Relevant for the "Associated Conditions" section of the endometriosis disease entity page, particularly regarding the role of dietary metal exposure in disease risk.

## Relevance to Cureva

- **Signature implications:** The finding that *higher* dietary zinc is associated with endometriosis risk adds complexity to the [[endometriosis-signature]] metallomic layer. While other studies show lower *serum* zinc in patients, higher *dietary* zinc may reflect increased zinc availability for MMP-dependent tissue remodeling and pathogen metal acquisition.
- **STOP signal potential:** This study raises a caution flag around zinc supplementation in endometriosis patients. If higher dietary zinc intake correlates with increased risk, zinc supplementation could theoretically be counterproductive — a potential [[stop-zinc-supplementation-endometriosis]] candidate requiring further triangulation.
- **Intervention nuance:** The distinction between serum zinc (low in patients) and dietary zinc (high intake associated with risk) suggests that zinc *redistribution* rather than zinc *deficiency* may be the operative mechanism. This aligns with Karen's Brain Primitive 2 (Nutritional Immunity as Interpretive Constraint) — low serum zinc may be host defense, not true deficiency.
- **Karen's Brain Primitives active:**
  - **Primitive 1 (Metals as Selective Pressures):** Dietary zinc intake creates a selective environment that may favor MMP-expressing organisms and tissue-remodeling processes.
  - **Primitive 2 (Nutritional Immunity as Interpretive Constraint):** The serum-vs-dietary zinc paradox exemplifies the danger of interpreting low serum metals as deficiency rather than host defense.
  - **Primitive 4 (Microbial Metal Dependencies as Achilles' Heels):** If endometriosis-associated organisms have zinc-dependent virulence factors, dietary zinc excess could fuel pathogenesis.

## Contradictions / Tensions

- **Serum vs. dietary zinc paradox.** Prior studies (Messalli et al., Singh et al.) report *lower* serum zinc in endometriosis patients, while this study finds *higher* dietary zinc intake associated with increased risk. This is not necessarily contradictory — it may reflect zinc sequestration by the host (nutritional immunity) or zinc redistribution into endometriotic tissue — but the tension must be tracked and resolved with future research.
- **Threshold effects.** The 8--14 mg/day group did not reach significance (p=0.189), suggesting a potential threshold effect rather than a linear dose-response. This complicates any simple narrative about zinc and endometriosis.
- **Self-reported diagnosis.** Endometriosis was ascertained by self-report, not surgical confirmation, which may introduce misclassification bias. Surgical confirmation is the gold standard.
- **Cross-sectional design.** Cannot establish causation or directionality. Women with endometriosis may alter their diet in response to symptoms, introducing reverse causation.

## Open Questions

1. **Does zinc compartmentalization explain the serum-dietary paradox?** Are endometriosis patients redistributing zinc from serum into tissue (particularly into endometriotic lesions where MMPs are active)?
2. **Which zinc-dependent enzymes are upregulated in endometriotic tissue?** Specifically, what is the MMP-2/MMP-9 expression profile relative to local zinc availability?
3. **Does dietary zinc interact with the endometriosis-associated microbiome?** No microbiome data were collected in this study — the interaction between dietary zinc and gut/endometrial microbiota in endometriosis is entirely unexplored.
4. **Is there a U-shaped relationship?** Both zinc deficiency (immune dysfunction, oxidative stress) and zinc excess (MMP activation, pathogen feeding) could theoretically promote endometriosis through different mechanisms.
5. **Does the association hold in surgically confirmed endometriosis?** Self-reported diagnosis may dilute or distort the true association.
