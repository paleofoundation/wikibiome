---
title: "Zhu 2023 — Association of High LDL Concentrations with Erectile Dysfunction from a Mendelian Randomization Study"
type: source
created: 2026-04-19
updated: 2026-04-19
authors: [Quan Zhu, Yao Tan, Xuyan Zou, Liqing Lu]
corresponding_author: "Liqing Lu"
corresponding_email: "Liqing1992@csu.edu.cn"
institution: "Xiangya Hospital, Central South University"
year: 2023
journal: "Scientific Reports"
doi: "10.1038/s41598-023-49771-1"
pmid: ""
evidence_level: computational-prediction
sample_size: "n=223,805 (6,175 ED cases, 217,630 controls); LDL GWAS n=173,082"
tags: [erectile-dysfunction, LDL-cholesterol, statins, HMGCR, mendelian-randomization, atherosclerosis, endothelial-dysfunction, lipid-metabolism]
library_category: causal
platform: both
condition: "erectile dysfunction"
karen_brain_primitives: [1, 4]
metals_discussed: []
taxa_discussed: []
key_findings:
  - "Increased HMGCR gene expression is causally associated with increased ED risk (OR 1.27, 95% CI 1.03–1.57, p=0.028)"
  - "NPC1L1 and PCSK9 gene expression showed no significant association with ED"
  - "HMGCR inhibitors (statins) may reduce ED risk via LDL lowering and endothelial function improvement"
keystone: false
---

## Key Findings

- **Increased HMGCR gene expression is positively associated with erectile dysfunction risk** (OR = 1.27, 95% CI 1.03–1.57; p = 0.028) in IVW-MR analysis, suggesting that genetically proxied higher HMG-CoA reductase activity — and therefore higher LDL cholesterol — causally increases ED risk.
- **NPC1L1 inhibitors showed no significant association with ED** (OR = 0.71, 95% CI 0.37–1.38; p = 0.31).
- **PCSK9 inhibitors showed no significant association with ED** (OR = 0.88, 95% CI 0.69–1.13; p = 0.32).
- Sensitivity analyses (MR-Egger regression, Cochran Q test, MR-PRESSO, leave-one-out) showed **no evidence of horizontal pleiotropy or heterogeneity** for any of the three drug targets, supporting the robustness of the HMGCR finding.
- Positive control analyses confirmed all three genetic instruments were significantly associated with coronary heart disease, validating instrument efficacy.

## Methods

- **Study design:** Two-sample Mendelian randomization (MR) using publicly available GWAS summary statistics. This is a computational/genetic epidemiology approach — no direct clinical intervention or biological measurement was performed.
- **Exposure data:** SNPs within ±100 kb of HMGCR (7 SNPs), NPC1L1 (3 SNPs), and PCSK9 (12 SNPs) gene regions, associated with LDL cholesterol at genome-wide significance (p < 5.0 x 10^-8), drawn from the Global Lipids Genetics Consortium (n = 173,082, European ancestry).
- **Outcome data:** Erectile dysfunction GWAS from the IEU GWAS database (6,175 cases, 217,630 controls, European ancestry).
- **Positive control:** Coronary heart disease from CARDIoGRAMplusC4D consortium (60,801 cases, 123,504 controls).
- **Primary analysis:** Inverse-variance-weighted MR (IVW-MR).
- **Sensitivity analyses:** F-statistic (>10 threshold for instrument strength), MR-Egger regression (pleiotropy intercept test), Cochran Q test (heterogeneity), MR-PRESSO (outlier detection), leave-one-out analysis.
- **Software:** R version 4.2.3, TwoSampleMR package.

## Detailed Summary

This study used Mendelian randomization to test whether genetically proxied lipid-lowering drug targets — HMGCR (statins), NPC1L1 (ezetimibe), and PCSK9 (PCSK9 inhibitors) — are causally associated with erectile dysfunction risk. MR leverages the random assortment of genetic variants at conception to approximate a natural experiment, reducing confounding compared to observational studies.

The primary finding was that **higher HMGCR expression** (which leads to higher LDL cholesterol production) was significantly associated with increased ED risk. By implication, HMGCR inhibition (i.e., statin therapy) would reduce ED risk. The effect size was modest (OR 1.27 per unit increase in genetically proxied HMGCR expression) but statistically significant and robust across sensitivity analyses.

The lack of significant findings for NPC1L1 and PCSK9 is notable. The authors suggest this may reflect: (1) the weaker lipid-lowering potency of ezetimibe compared to statins, (2) the fact that NPC1L1 and PCSK9 inhibitors tend to be prescribed to patients with refractory dyslipidemia (a confounded population), and (3) the possibility that statins exert ED-protective effects through **pleiotropic mechanisms beyond LDL lowering** — including enhanced nitric oxide bioavailability, anti-inflammatory effects, and improved endothelial function.

The authors discuss an important paradox in the statin-ED literature: while LDL reduction should improve endothelial function and therefore erectile function, statins also block early steps in cholesterol biosynthesis, potentially reducing **testosterone synthesis** (cholesterol is the precursor to all steroid hormones). Clinical studies have produced contradictory results — some showing ED improvement with statins, others showing decreased libido and lower testosterone. The MR design in this study bypasses this confounding by isolating the LDL-lowering pathway specifically.

**Limitations** include restriction to European ancestry populations, the inherent limitations of MR (potential residual pleiotropy), possible minor overlap between exposure and outcome GWAS cohorts, and the inability to distinguish between direct LDL effects and pleiotropic HMGCR pathway effects on ED.

## Relevance to WikiBiome

This study supports the vascular-endothelial mechanism underlying organic erectile dysfunction, which connects to WikiBiome's coverage of [[atherosclerosis]] and [[endothelial-dysfunction]] as systemic conditions. Key relevance:

- **ED as a vascular disease:** Reinforces the concept that ED and cardiovascular disease share common pathophysiology — LDL-driven [[atherosclerosis]] and endothelial damage affect penile arteries due to their small diameter, making them early indicators of systemic vascular disease.
- **Lipid metabolism and vascular biology:** Connects to entity pages on [[atherosclerosis]] — the mechanistic chain from LDL elevation → oxidized LDL → endothelial dysfunction → impaired nitric oxide signaling → reduced penile blood flow is well supported here.
- **Cross-condition associations:** Strengthens the link between [[erectile-dysfunction]] and [[cardiovascular-disease]] as shared-mechanism conditions, which is relevant for the associated conditions framework across disease entity pages.

<!-- NOTE: This paper does not discuss metals or microbiome directly. Its relevance to WikiBiome's metallomics framework is indirect — through the vascular/endothelial pathway that metals like cadmium also disrupt. -->

## Relevance to Cureva

- **Intervention hypothesis — statins for ED:** The MR evidence suggests HMGCR inhibitors may have a causal protective effect against ED, supporting a potential intervention page for statin use in ED patients with concurrent cardiovascular risk. This would require triangle validation: I→f (statin reduces LDL, improves endothelial function), I→D (clinical evidence of statin effect on ED — mixed per discussion), f→D (LDL/endothelial dysfunction → ED, well-established).
- **STOP signal consideration:** The testosterone-lowering effect of statins noted in the discussion could inform a nuanced STOP — statins should not be assumed universally beneficial for ED, particularly in patients with borderline testosterone. This tension between LDL-lowering benefit and testosterone-lowering harm requires patient-specific assessment.
- **Signature relevance:** Supports the vascular/endothelial dysfunction layer of the [[erectile-dysfunction]] signature. LDL-driven atherosclerosis is part of the ecological state that creates the conditions for ED pathophysiology.

## Contradictions / Tensions

- **Statin paradox:** The paper explicitly discusses contradictory clinical evidence — some studies show statins improve ED, others show they worsen libido and lower testosterone. This MR study favors the protective interpretation via the LDL-lowering pathway, but the testosterone-suppression mechanism remains a real concern that is not fully resolved by the MR design.
- **NPC1L1/PCSK9 null results vs. LDL hypothesis:** If ED risk is purely driven by LDL levels, all three drug targets should show association. The null results for NPC1L1 and PCSK9 suggest either (a) statins have pleiotropic ED-protective mechanisms beyond LDL lowering, or (b) the study was underpowered for the smaller SNP sets (3 SNPs for NPC1L1). This tension is unresolved.
- **No microbiome or metal data:** This study addresses ED through a purely cardiovascular/lipid lens with no engagement with the gut-penis axis, microbiome composition, or metal exposures. It neither contradicts nor supports the metallomics framework — it operates in a parallel explanatory domain.

## Open Questions

1. **Do statins exert ED-protective effects through mechanisms beyond LDL reduction?** The null results for NPC1L1 and PCSK9 suggest pleiotropic statin effects (NO bioavailability, anti-inflammatory) may be important — but this MR design cannot isolate those pathways.
2. **How does statin-induced testosterone reduction interact with the LDL-lowering benefit?** The net effect on erectile function likely depends on baseline testosterone levels, statin dose, and duration — none of which MR can address.
3. **Would these findings replicate in non-European populations?** The study used exclusively European-ancestry GWAS data.
4. **Is there a gut microbiome mediator of the LDL–ED relationship?** Gut microbiota influence bile acid metabolism and LDL levels — a potential bridge between this study's findings and WikiBiome's microbiome framework, but entirely unexplored here.
5. **Does cadmium-driven endothelial dysfunction interact with LDL-driven endothelial dysfunction synergistically?** Both pathways converge on impaired nitric oxide signaling in penile vasculature — a potential integrative hypothesis for the [[erectile-dysfunction]] signature.
