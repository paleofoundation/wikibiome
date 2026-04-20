---
title: "Huang 2023 — Association Between Polyunsaturated Fatty Acid Intake and the Prevalence of Erectile Dysfunction"
type: source
created: 2026-04-19
updated: 2026-04-19
authors: [Yong Huang, Yingying Wang, Huiyi Su, Hexi Wang, Haoyu Xu, Chengwei Xu, Fulin Zhou, Yao Zhang]
corresponding_author: "Yao Zhang"
corresponding_email: "zhangyao7407@126.com"
institution: "The First Affiliated Hospital of Chongqing Medical University, Chongqing, China"
year: 2023
journal: "Lipids in Health and Disease"
doi: "10.1186/s12944-023-01950-9"
pmid: ""
evidence_level: cross-sectional
sample_size: "n=3730"
tags: [erectile-dysfunction, polyunsaturated-fatty-acids, arachidonic-acid, omega-6, inflammation, endothelial-function, NHANES, dietary-intake]
library_category: diet
platform: both
condition: "erectile dysfunction"
karen_brain_primitives: [5]
metals_discussed: []
taxa_discussed: []
key_findings:
  - "Higher arachidonic acid (AA) intake linearly associated with reduced ED prevalence (OR=0.33, 95% CI 0.20–0.56, P<0.001)"
  - "AA intake associated with decreased inflammatory biomarkers (MHR, NHR, NLR) and homocysteine"
  - "Among all PUFAs tested, only AA maintained robust protective association with ED across all adjustment models and after propensity score matching"
keystone: false
---

## Key Findings

- **Arachidonic acid (AA) intake is linearly and inversely associated with ED prevalence.** In the fully adjusted model (Model 3), each quartile increase in AA intake reduced ED odds: Q4 vs. Q1 OR = 0.72 (0.59, 0.89), P for trend < 0.001 before PSM; OR = 0.74 (0.58, 0.94), P for trend = 0.005 after PSM (cross-sectional, n=3730).
- **AA was the only PUFA with robust results across all models.** While TPFA, omega-3, omega-6, ALA, DPA, DHA, LA, and AA all showed associations in some models, only AA maintained significance across all three adjustment models both before and after propensity score matching (cross-sectional, n=3730).
- **AA intake was negatively associated with inflammatory biomarkers and homocysteine.** Significant associations were found with MHR (beta = -0.062, P=0.014), NHR (beta = -0.427, P=0.028), NLR (beta = -0.319, P=0.015), and homocysteine (beta = -1.327, P=0.005) (cross-sectional, n=3683–3722).
- **XGBoost machine learning ranked AA as the most important PUFA** for predicting ED among all individual PUFAs, with BMI, AA, ALA, DHA, and omega-6 PUFA as the top five variables overall.
- **The dose-response relationship between AA and ED is linear**, not nonlinear (P for nonlinearity = 0.717 before PSM, 0.791 after PSM), suggesting a consistent protective gradient.

## Methods

- **Design:** Cross-sectional analysis of NHANES 2001–2004 data.
- **Population:** 3,730 adult males aged ≥20 years with complete PUFA and ED data. After 1:1 propensity score matching, 2,280 participants (1,140 ED / 1,140 non-ED).
- **ED assessment:** Self-reported questionnaire — "How would you describe your ability to achieve and maintain sufficient erections for satisfactory intercourse?" Stricter definition used: only "always or always able" classified as non-ED; "usually able," "sometimes able," and "never able" classified as ED.
- **PUFA measurement:** 24-hour dietary recall interviews. Individual PUFAs calculated: TPFA, omega-3 PUFA, omega-6 PUFA, ALA, SDA, EPA, DPA, DHA, LA, and AA.
- **Statistical analysis:** Univariate analysis, multivariate regression (3 adjustment models), XGBoost algorithm for variable importance, restricted cubic splines (RCS) for dose-response, generalized additive model (GAM) and smooth curve fitting, threshold effect analysis, propensity score matching (1:1), subgroup analyses stratified by age, race, education, BMI, hypertension, CVD, diabetes, vigorous activity, moderate activity, and smoking status.
- **Covariates:** Age, BMI, race, education, hypertension, cardiovascular disease, diabetes, vigorous activity, moderate activity, smoking status.

## Detailed Summary

### Study population

From 21,161 NHANES 2001–2004 participants, the study excluded females (n=10,860), those <20 years (n=5,347), those missing PUFA data (n=569) or ED data (n=358), those on PDE5 inhibitors or yohimbine (n=18), and those missing covariates (n=297), yielding 3,730 participants (1,768 with ED, 1,962 without). Participants with ED were predominantly ≥40 years old (80.28%), had higher BMI (28.74 vs. 27.69), lower education attainment, and higher rates of hypertension (42.99% vs. 19.97%), diabetes (15.07% vs. 3.91%), and cardiovascular disease (18.04% vs. 7.34%). Critically, ED participants had significantly lower intake of all PUFAs, including TPFA, omega-3, omega-6, and especially AA (0.153 ± 0.126 vs. 0.178 ± 0.161 g/day, P<0.0001).

### PUFA–ED associations

In multivariate regression (Model 3, fully adjusted), the following PUFAs showed significant inverse association with ED before PSM: TPFA (OR=0.99, P=0.014), DPA (OR=0.24, P=0.035), DHA (OR=0.73, P=0.038), omega-6 PUFA (OR=0.99, P=0.013), LA (OR=0.99, P=0.015), and AA (OR=0.33, P<0.001). After PSM, only AA maintained significance across all models (Model 3: OR=0.36, 95% CI 0.20–0.65, P<0.001).

### Dose-response and threshold analysis

RCS analysis confirmed a linear negative relationship between AA intake and ED prevalence (P for nonlinearity >0.7 in both pre- and post-PSM analyses). Threshold effect analysis found no statistically significant inflection point (log likelihood ratio = 0.341 before PSM, 0.645 after PSM), confirming a single-line model best described the relationship. The linear effect: OR = 0.33 (0.20, 0.56) before PSM; OR = 0.36 (0.20, 0.65) after PSM (both P<0.001).

### Mechanistic exploration via inflammatory biomarkers

AA intake was significantly negatively associated with:
- Monocyte-to-HDL cholesterol ratio (MHR): beta = -0.062 (P=0.014)
- Neutrophil-to-HDL cholesterol ratio (NHR): beta = -0.427 (P=0.028)
- Neutrophil-to-lymphocyte ratio (NLR): beta = -0.319 (P=0.015)
- Homocysteine: beta = -1.327 (P=0.005)

No significant association was found with WBC, neutrophils, lymphocytes, monocytes, CRP, CRP-to-lymphocyte ratio, or CRP-to-albumin ratio.

### Subgroup analysis

AA was protective in participants aged ≥40, non-Hispanic Whites, those with more than high school education, those with and without hypertension, those without diabetes, those without CVD, those not engaged in vigorous activity, and non-smokers (all P<0.05). An interaction was found with education (P for interaction = 0.010 before PSM, 0.009 after PSM).

## Relevance to WikiBiome

- Informs the [[erectile-dysfunction]] entity page regarding dietary fatty acid associations with ED prevalence.
- Connects to concepts around [[inflammation]] and [[endothelial-function]] as mechanistic pathways linking diet to ED.
- The homocysteine finding links to [[homocysteine]] as a potential mediator — homocysteine is an endothelial toxin and its reduction by AA intake may partially explain the protective effect.
- Relevant to any future entity page on [[arachidonic-acid]] or [[polyunsaturated-fatty-acids]] — AA is typically framed as pro-inflammatory (precursor to prostaglandins, thromboxanes, leukotrienes), yet this study shows higher dietary intake correlates with anti-inflammatory biomarker profiles, a nuanced finding worth highlighting.

## Relevance to Cureva

- Supports a potential dietary intervention for the [[erectile-dysfunction-signature]]: increasing arachidonic acid intake from dietary sources (eggs, fish, meat) as a protective factor against ED.
- The anti-inflammatory and anti-endothelial injury mechanism provides two legs of a potential intervention triangle:
  - **I_to_f:** AA intake reduces inflammatory biomarkers (MHR, NHR, NLR) and homocysteine, which are features of the ED pathophysiology.
  - **I_to_D:** AA intake linearly reduces ED prevalence (OR=0.33–0.36 in fully adjusted models).
  - **f_to_D:** Inflammation and endothelial dysfunction are established contributors to ED pathogenesis.
- The AA metabolite epoxyeicosatrienoic acid (EET) is noted as promoting cavernosal relaxation via cGMP/NO pathway activation — a direct mechanistic link to erectile function.
- Potential STOP consideration: avoidance of omega-6 PUFAs is sometimes recommended in anti-inflammatory diets, but this data suggests AA (an omega-6) is actually protective for ED, complicating blanket omega-6 restriction advice.

## Contradictions / Tensions

- **AA as anti-inflammatory is counterintuitive.** Arachidonic acid is conventionally understood as a pro-inflammatory omega-6 PUFA (precursor to prostaglandins, thromboxanes, leukotrienes). This study finds higher AA intake associated with *lower* inflammatory markers. The authors cite Roberts et al. finding that AA supplementation reduced inflammatory responses in resistance-trained males, and Roy et al. finding AA supplementation attenuated adipocyte inflammation. This tension between AA's pro-inflammatory metabolite pathway and its observed anti-inflammatory dietary association needs resolution.
- **Cross-sectional limitation.** The study cannot establish causation. Healthier individuals who are less likely to have ED may also consume more AA-rich foods (eggs, fish, meat) as part of a generally better diet. Reverse causation and residual confounding remain possible.
- **Self-reported ED.** ED was classified by questionnaire, not clinical assessment, introducing potential misclassification bias.

## Open Questions

1. **Does the protective association hold in prospective cohorts or RCTs?** This cross-sectional design cannot establish temporality. A cohort study or randomized supplementation trial would be needed.
2. **What is the role of AA metabolites (EETs, prostaglandins) in the observed protection?** The authors mention EET-mediated cavernosal relaxation but do not measure metabolite levels.
3. **Does the association differ by ED severity or type?** The study used a binary ED classification and could not assess organic vs. psychogenic ED or severity grades.
4. **How does AA interact with the gut microbiome in the context of ED?** AA is metabolized by both host and microbial enzymes; gut microbial metabolism of AA could modulate its bioavailability and metabolite profile. No microbiome data were collected.
5. **Does the AA–homocysteine relationship reflect a direct metabolic effect or confounding by B-vitamin intake?** Homocysteine is primarily regulated by folate, B6, and B12 — the study did not control for these.
