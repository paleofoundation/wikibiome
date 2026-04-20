---
title: "Jiang 2025 — The Microbiome-Derived Metabolite TMAO Is Associated with Chronic Kidney Disease Risk"
type: source
created: 2026-04-09
updated: 2026-04-17
authors: [Junyi Jiang, Peng Zhu, Xiaoying Ding, Li Zhou, Xiaoqiang Li, Yuyan Lei, Hao Wang, LuLu Chen, Xiang Li, Yunzhou Fei, Dongsheng Ouyang, Xiaohui Li, Wei Zhang]
year: 2025
journal: "Applied Microbiology and Biotechnology"
doi: "10.1007/s00253-025-13481-7"
evidence_level: systematic-review-meta-analysis
sample_size: "n=2125 (meta-analysis) + n=5584 (population study)"
tags: [chronic-kidney-disease, CKD, TMAO, metabolite, meta-analysis, population-based, biomarker, CKD-risk]
library_category: signatures
platform: both
condition: "chronic kidney disease"
metals_discussed: [iron]
taxa_discussed: []
key_findings:
  - "Significant association between elevated TMAO and CKD in meta-analysis of 2125 subjects (SMD = -0.93)"
  - "TMAO demonstrates moderate discriminative capacity between CKD and non-CKD (AUC = 0.614) in population-based study of 5584 subjects"
  - "Combined meta-analysis plus population-based study provides robust evidence that TMAO is both associated with and potentially predictive of CKD"
karen_brain_primitives: [3, 5]
---

## Key Findings

- **Meta-analysis confirms TMAO-CKD association**: Pooled analysis of studies including 1,240 controls and 885 CKD patients showed significant association between trimethylamine N-oxide (TMAO) and CKD (SMD = -0.93), establishing TMAO as a consistently elevated metabolite in CKD ([[jiang-2025-tmao-chronic-kidney-disease-risk|this study]], systematic review/meta-analysis).
- **Population-based validation**: An independent population-based study of 5,584 Chinese subjects confirmed the TMAO-CKD association, with TMAO showing moderate discriminative capacity (AUC = 0.614) for distinguishing CKD from non-CKD.
- **TMAO as a CKD biomarker**: While the AUC of 0.614 indicates only moderate discriminative ability as a standalone biomarker, TMAO may have value as part of a multi-biomarker panel for CKD risk stratification.
- **Dual evidence approach strengthens conclusions**: Combining systematic review with an independent population-based study provides complementary evidence — the meta-analysis establishes consistency across studies, while the population study provides a large-sample validation.

## Methods

- **Study design**: Two-component study: (1) Systematic review and meta-analysis of published TMAO-CKD studies; (2) Population-based cross-sectional study in a Chinese cohort.
- **Meta-analysis**: Pooled analysis of studies measuring TMAO in CKD vs. controls (total n=2,125: 1,240 controls + 885 CKD). Standardized mean difference (SMD) as effect measure. <!-- NEEDS VERIFICATION: number of studies included in meta-analysis, heterogeneity statistics (I-squared) -->
- **Population study**: 5,584 participants from a Chinese population cohort. TMAO measured by mass spectrometry. CKD defined by eGFR criteria.
- **Statistical analysis**: ROC curve analysis for discriminative capacity; multivariable adjustment for confounders.
- **Limitations**: Highest evidence level for the meta-analysis component, but the population study is cross-sectional (cannot establish causation). AUC of 0.614 is modest, suggesting TMAO alone is insufficient as a diagnostic biomarker. The SMD of -0.93 requires careful interpretation regarding direction. <!-- NEEDS VERIFICATION: whether the SMD direction means TMAO is higher or lower in CKD — the negative SMD with "elevated TMAO" in CKD needs clarification -->

## Detailed Summary

Jiang et al. provide the most comprehensive assessment to date of TMAO as a CKD-associated metabolite, combining a systematic meta-analysis with an independent large-scale population study.

**TMAO biology.** Trimethylamine N-oxide (TMAO) is a microbiome-derived metabolite produced through a two-step process: (1) Gut bacteria convert dietary choline, carnitine, and betaine to trimethylamine (TMA) via TMA lyase enzymes; (2) Hepatic flavin-containing monooxygenase 3 (FMO3) oxidizes TMA to TMAO. TMAO is normally excreted by the kidneys, so its elevation in CKD reflects both increased production (from CKD-associated dysbiosis) and decreased clearance (from impaired renal function).

**TMAO's pathogenic potential.** Beyond being a marker, TMAO has direct pathogenic effects: it promotes atherosclerosis (through macrophage foam cell formation and altered cholesterol metabolism), induces renal fibrosis and inflammation, and activates NLRP3 inflammasome signaling. In CKD, these effects create a vicious cycle: kidney damage → reduced TMAO clearance → TMAO accumulation → further kidney damage + cardiovascular complications (the leading cause of death in CKD).

**Dietary and microbial sources.** TMAO levels are influenced by: (1) Diet — red meat, eggs, and fish provide the precursors choline, carnitine, and TMAO directly; (2) Gut microbiome composition — specific bacterial communities (TMA-producing clade, including Prevotella, certain Clostridium, and Desulfovibrio species) determine TMA production capacity; (3) Kidney function — clearance rate.

**Iron connection.** The TMAO-iron axis operates through FMO3 and its regulatory context. FMO3 is a hepatic enzyme that uses FAD and NADPH as cofactors. Iron status influences hepatic metabolism broadly, and the NLRP3 inflammasome activation by TMAO involves iron-dependent ROS production. Additionally, TMAO promotes macrophage activation and foam cell formation, processes that involve iron loading of macrophages — creating a link between TMAO-driven inflammation and iron dysregulation in CKD.

**Biomarker limitations.** The AUC of 0.614 means TMAO alone correctly distinguishes CKD from non-CKD about 61% of the time (vs. 50% for random chance). This is insufficient for clinical diagnosis but may add value when combined with other gut-derived metabolites (IS, p-CS) in a multi-metabolite panel. The authors' approach of combining meta-analysis with population-based validation is methodologically rigorous and provides confidence in the association even if the biomarker performance is modest.

## Relevance to WikiBiome

- Central reference for TMAO-CKD content on the [[chronic-kidney-disease]] entity page.
- Supports a concept page on TMAO metabolism and the gut-kidney metabolite axis.
- Relevant to [[dysbiosis]] concept — the TMA-producing bacterial community as a functional marker of CKD-associated dysbiosis.
- Connects to [[iron]] through TMAO-mediated inflammasome activation and macrophage iron loading.

## Open Questions

- Can dietary interventions (reducing choline/carnitine intake, Mediterranean diet) lower TMAO levels sufficiently to slow CKD progression?
- Would targeted suppression of TMA-producing gut bacteria (specific antibiotics or bacteriophages against TMA lyase-expressing organisms) reduce TMAO and improve CKD outcomes?
- Does TMAO interact synergistically with other uremic toxins (IS, p-CS) to accelerate renal damage, and would a multi-metabolite-lowering strategy be more effective?
- Is the modest AUC (0.614) improved by combining TMAO with other microbiome-derived metabolites in a CKD biomarker panel?
