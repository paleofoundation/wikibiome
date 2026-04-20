---
title: "Jin 2025 — Dietary Fiber Intake and Pelvic Inflammatory Disease (NHANES 2015–2018)"
type: source
created: 2026-04-19
updated: 2026-04-19
authors: [Hongyu Jin, Zhaoyuan Niu, Xinyue Zhao]
corresponding_author: "Zhaoyuan Niu"
corresponding_email: "niuzhaoyuan@126.com"
institution: "Affiliated Hospital of Qingdao University / Qingdao University School of Medicine"
year: 2025
journal: "BMC Women's Health"
doi: "10.1186/s12905-025-03911-z"
evidence_level: cross-sectional
sample_size: "n=2,345"
tags: [pelvic-inflammatory-disease, dietary-fiber, SCFA, gut-microbiota, reproductive-health, NHANES, inflammation, estrobolome, magnesium]
library_category: diet
platform: both
condition: "pelvic inflammatory disease"
karen_brain_primitives: [1, 5, 7, 9]
metals_discussed: [magnesium]
taxa_discussed: [lachnospiraceae, akkermansia, lactobacillus, bifidobacterium]
key_findings:
  - "Each 1 g/day increase in dietary fiber was associated with 5% lower odds of PID (OR 0.95, 95% CI 0.92–0.98)"
  - "Highest fiber quartile (>19.3 g/day) had 69% lower PID prevalence vs. lowest quartile (OR 0.31, 95% CI 0.15–0.62)"
  - "L-shaped dose-response with inflection point at 19.45 g/day — above this threshold the protective association strengthened markedly"
keystone: false
---

## Key Findings

- **Each additional 1 g/day of dietary fiber intake was associated with a 5% reduction in the odds of PID** (fully adjusted OR = 0.95, 95% CI: 0.92–0.98, P = 0.002) ([[jin-2025-dietary-fiber-pelvic-inflammatory-disease-nhanes]], cross-sectional, n=2,345).
- **Women in the highest fiber intake quartile (Q4: 19.3–41.2 g/day) had 69% lower PID prevalence** compared to the lowest quartile (Q1: 0.2–9.2 g/day) (OR = 0.31, 95% CI: 0.15–0.62, P = 0.001), with a significant dose-response trend (P for trend = 0.002).
- **An L-shaped non-linear relationship** was identified via restricted cubic spline regression, with an inflection point at **19.45 g/day**. Below this threshold, the association was non-significant (OR = 0.99, 95% CI: 0.95–1.04); above it, the protective effect was pronounced (OR = 0.76, 95% CI: 0.64–0.91, P = 0.002).
- Women with PID had significantly lower mean dietary fiber intake (11.76 vs. 15.12 g/day, P < 0.001) and lower total energy intake (1,688 vs. 1,803 kcal/day, P = 0.032).
- Subgroup analyses showed consistent inverse associations across most demographic and clinical strata, with no statistically significant effect modification (all interaction P > 0.05).

## Methods

**Design:** Cross-sectional analysis of NHANES 2015–2018 data.

**Population:** 2,345 women aged 20–59 years (149 with self-reported PID history, 2,196 without). Exclusions: males, missing dietary recall data, missing PID response, age < 20, missing covariates, and extreme fiber outliers (>99th percentile, >41.2 g/day).

**Exposure assessment:** Dietary fiber intake averaged from two non-consecutive 24-hour dietary recalls using the USDA WWEIA protocol (one in-person, one telephone-based 3–10 days later).

**Outcome:** Self-reported PID history from the NHANES Reproductive Health Questionnaire (RHQ0078).

**Statistical approach:** Multivariable logistic regression across three models with progressive covariate adjustment. Model 3 (fully adjusted) controlled for age, race/ethnicity, education, marital status, PIR, BMI, smoking status, hypertension, diabetes, menstrual regularity, menopausal status, and total dietary energy intake. Restricted cubic spline (RCS) regression and piecewise logistic regression to assess non-linearity and threshold effects. Sensitivity analyses including re-inclusion of extreme outliers.

## Detailed Summary

This study used nationally representative NHANES data to examine whether higher dietary fiber intake is associated with lower PID prevalence in U.S. women. The PID prevalence in the sample was 6.35%. Women with PID were older, more likely to be Non-Hispanic White or Non-Hispanic Black, current smokers, had higher BMIs, lower poverty income ratios, and consumed significantly less dietary fiber and total energy.

In fully adjusted models, fiber intake showed a significant inverse association with PID whether treated as continuous or categorical. The quartile analysis revealed a clear dose-response: Q2 (OR = 0.78), Q3 (OR = 0.78), and Q4 (OR = 0.31) all showed lower odds relative to Q1, though only Q4 reached statistical significance in the fully adjusted model.

The threshold analysis was particularly notable: the relationship followed an L-shaped curve. Below 19.45 g/day, no significant association was detected. Above this threshold — which corresponds to roughly three servings of whole grains and two servings of vegetables — each additional gram of fiber was associated with substantially lower PID odds (OR = 0.76 per g/day above threshold). This threshold is below the recommended 25 g/day for adult women, suggesting a clinically meaningful benefit may be achievable at moderate fiber intakes.

Sensitivity analyses confirmed robustness: re-including the 24 outlier participants (fiber > 41.2 g/day) yielded nearly identical results, and stratification at both 19.45 g/day and 25 g/day cutpoints consistently showed protective associations above the thresholds.

### Proposed Mechanisms

The authors discuss several biological pathways:

1. **SCFA production:** Dietary fiber promotes [[lachnospiraceae-family]], [[akkermansia-muciniphila]], [[lactobacillus]], and [[bifidobacterium]], which ferment fiber into butyrate, propionate, and acetate. These [[short-chain-fatty-acids]] suppress NF-kB signaling and HDAC activity, reducing pro-inflammatory cytokines (IL-6, TNF-alpha) while boosting anti-inflammatory mediators (IL-10, TGF-beta).

2. **Gut-reproductive tract axis:** Higher fiber intake is associated with lower risk of [[bacterial-vaginosis]], suggesting fiber modulates vaginal microbiota composition and mucosal defense via the [[gut-vagina-axis]].

3. **Estrobolome pathway:** Gut microbiota can reactivate estrogen via [[beta-glucuronidase]], and fiber promotes microbial balance supporting this process. Estrogen enhances reproductive tract defenses by increasing vaginal epithelial thickness, promoting lactic acid production, and maintaining acidic vaginal pH — all factors reducing infection risk. This connects directly to the [[estrobolome]] concept.

4. **Magnesium co-intake:** Fiber-rich foods (whole grains, legumes, nuts, leafy greens) are important sources of [[magnesium]]. Magnesium is a cofactor in 300+ enzymatic reactions and has anti-inflammatory properties via NF-kB inhibition. Cross-sectional data suggest higher magnesium intake may independently reduce PID risk.

## Relevance to WikiBiome

- **[[pelvic-inflammatory-disease]]:** Adds dietary fiber as a modifiable factor associated with PID prevalence. The L-shaped threshold effect at 19.45 g/day is a concrete, citable finding for the disease entity page.
- **[[lachnospiraceae-family]]:** Reinforces the role of Lachnospiraceae as SCFA-producing commensals whose abundance is promoted by dietary fiber and whose metabolites have systemic anti-inflammatory effects.
- **[[gut-vagina-axis]]:** Supports the concept that gut microbiota composition influences reproductive tract health, adding PID to the list of conditions where this axis is implicated.
- **[[magnesium]]:** Suggests magnesium co-intake may partially mediate fiber's protective association with PID, adding a dietary-mineral dimension to the PID story.
- **[[short-chain-fatty-acids]] / [[microbiome-derived-metabolites]]:** Provides another condition where SCFA-mediated anti-inflammatory effects are proposed as protective.

## Relevance to Cureva

- **Dietary intervention hypothesis:** Fiber intake > 19.45 g/day as a potential dietary intervention target for PID risk reduction. This is below the standard 25 g/day recommendation, making it a more achievable target.
- **Ecological engineering (Primitive 5):** Fiber feeding of SCFA-producing commensals represents the "restore missing beneficial functions" arm of two-sided ecological engineering.
- **Estrobolome modulation (Primitive 7):** The beta-glucuronidase / estrogen recirculation pathway connects dietary fiber to reproductive tract mucosal defense via estrogen homeostasis — relevant to any estrogen-dependent condition signature.
- **Triangle evidence status:** This study provides I_to_D (dietary fiber inversely associated with PID, cross-sectional) and proposes mechanistic I_to_f (fiber → SCFA → anti-inflammation) and f_to_D (inflammation → ascending reproductive tract infection). All edges are preliminary; no RCT or prospective data yet exist for fiber-PID specifically.

## Contradictions / Tensions

- **Causal inference limited:** This is cross-sectional data with self-reported PID and dietary recall. Reverse causation is plausible — women with PID-related inflammation may eat less overall (reflected in lower energy intake in the PID group), which would reduce fiber intake as a consequence rather than a cause. The authors acknowledge this but cannot resolve it.
- **No microbiome data:** Despite extensive mechanistic discussion involving specific taxa and SCFAs, this study measured neither gut microbiota composition nor SCFA levels. The proposed mechanisms are borrowed from the broader fiber-inflammation literature, not demonstrated in PID patients.
- **Magnesium confounding:** The authors note that magnesium (co-present in fiber-rich foods) may independently reduce PID risk, but they did not adjust for magnesium intake in their models, leaving this potential confounder unresolved.
- **Sexual behavior unmeasured:** The strongest risk factors for PID (number of sexual partners, STI history) were not available as covariates in NHANES. Residual confounding from unmeasured sexual behavior could explain part of the association.

## Open Questions

1. Does increasing dietary fiber intake prospectively reduce PID incidence, or does the cross-sectional association reflect confounding by overall health behaviors?
2. What specific fiber types (soluble vs. insoluble, fermentable vs. non-fermentable) drive the association?
3. Does the 19.45 g/day threshold replicate in longitudinal cohorts or other populations?
4. Does fiber intake measurably alter vaginal microbiota composition or cervicovaginal SCFA levels?
5. Is the magnesium co-intake pathway independently important, or is it fully captured by the fiber variable?
6. How does this finding interact with known PID pathogens ([[chlamydia-trachomatis]], [[neisseria-gonorrhoeae]]) — does fiber modify susceptibility to specific organisms, or does it modulate the inflammatory response regardless of pathogen?
