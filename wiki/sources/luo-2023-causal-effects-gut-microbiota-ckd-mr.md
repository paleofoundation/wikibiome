---
title: "Luo 2023 — Causal Effects of Gut Microbiota on the Risk of Chronic Kidney Disease: A Mendelian Randomization Study"
type: source
created: 2026-04-09
updated: 2026-04-16
authors: [Mingli Luo, Jiahao Cai, Shulu Luo, Xiaosi Hong, Lingxin Xu, Honghong Lin, Xiong Chen, Wen Fu]
corresponding_author: "Xiong Chen; Wen Fu"
corresponding_email: "chenx239@mail2.sysu.edu.cn; lydia_fw@hotmail.com"
institution: "Guangzhou Women and Children's Medical Center, Guangzhou Medical University"
year: 2023
journal: "Frontiers in Cellular and Infection Microbiology"
doi: "10.3389/fcimb.2023.1142140"
pmid: "not yet verified"
evidence_level: quasi-experimental
sample_size: "41,395 CKD cases / 439,303 controls (N=480,698 total) in CKD outcome GWAS; 18,340 in gut microbiota GWAS"
tags: [chronic-kidney-disease, CKD, mendelian-randomization, gut-microbiota, Desulfovibrionales, Desulfovibrionaceae, Deltaproteobacteria, Eubacterium-eligens, Lachnospiraceae, causal-inference, GWAS, hydrogen-sulfide, gut-kidney-axis]
library_category: causal
platform: wikibiome
condition: "chronic-kidney-disease"
karen_brain_primitives: [1, 5]
metals_discussed: []
taxa_discussed: [desulfovibrionales, desulfovibrionaceae, deltaproteobacteria, eubacterium-eligens, lachnospiraceae, ruminococcaceae, peptostreptococcaceae, alcaligenaceae]
key_findings:
  - "Desulfovibrionales causally associated with increased CKD risk (IVW OR = 1.15, 95% CI 1.05–1.26, p = 0.0026)"
  - "Nine other gut bacterial taxa show potential causal associations with CKD at nominal significance"
  - "Lachnospiraceae UCG-010 causally protective against CKD (IVW OR = 0.89, 95% CI 0.81–0.98)"
keystone: false
---

# Luo 2023 — Causal Effects of Gut Microbiota on the Risk of CKD: Mendelian Randomization

## Key Findings

- **Desulfovibrionales** is the only taxon reaching Bonferroni-corrected significance for CKD causality: IVW OR = 1.15, 95% CI 1.05–1.26, p = 0.0026 (statistical power = 0.93). Confirmed by MR-PRESSO (OR = 1.15, 95% CI 1.09–1.22, p = 0.001) [[luo-2023-causal-effects-gut-microbiota-ckd-mr]]
- Nine additional taxa show nominal significance (p < 0.05):
  - **Risk-increasing**: *Eubacterium eligens* group (OR = 1.19), *Desulfovibrionaceae* (OR = 1.14), *Ruminococcaceae UCG-002* (OR = 1.12), *Deltaproteobacteria* (OR = 1.12), *Senegalimassilia* (OR = 1.13), *Peptostreptococcaceae* (OR = 1.10)
  - **Protective**: *Lachnospiraceae UCG-010* (OR = 0.89), *Alcaligenaceae* (OR = 0.91), *Ruminococcus torques group* (OR = 0.89)
- No horizontal pleiotropy detected in any of the 10 taxa (MR-Egger intercepts non-significant; no outliers by MR-PRESSO; Cochran's Q all p > 0.05)

## Methods

- **Design**: Two-sample Mendelian randomization; first large-scale MR study using gut microbiome GWAS for CKD causality
- **CKD GWAS**: CKDGen Consortium meta-analysis (Wuttke et al. 2019) — 41,395 CKD cases, 439,303 controls, all European ancestry; CKD defined as eGFR < 60 mL/min/1.73m²
- **Gut microbiome GWAS**: Kurilshikov et al. 2021 — meta-GWAS of human gut microbiota, 18,340 individuals, European ancestry; 196 gut bacterial taxa (9 phyla, 16 classes, 20 orders, 32 families, 119 genera)
- **IV selection**: relaxed genome-wide threshold p < 1×10⁻⁵; LD r² < 0.001, clumping window 10,000 kb; F-statistic > 10; PhenoScanner checked for confounder-associated SNPs
- **Primary analysis**: IVW; sensitivity: weighted median, MR-Egger, MR-PRESSO, mode-based estimation (MBE)
- **Statistical power**: 0.8 considered appropriate; Desulfovibrionales power = 0.93
- **Bonferroni correction thresholds**: phylum 5.56×10⁻³; class 3.13×10⁻³; order 2.5×10⁻³; family 1.56×10⁻³; genus 4.2×10⁻⁴

## Detailed Summary

This is the first large-scale MR study using gut microbiome GWAS data specifically designed to identify CKD-causal gut taxa. The study uses 196 bacterial taxa as independent exposures, applying Bonferroni correction appropriate to each taxonomic level.

**Desulfovibrionales: The Primary Causal Taxon**
The order *Desulfovibrionales* (class Deltaproteobacteria) is a sulfate-reducing anaerobe that metabolises sulfur-containing substances in the human gut, producing hydrogen sulfide (H₂S). H₂S is cytotoxic and has pro-inflammatory effects via multiple pathways:
1. Induction of systemic inflammation → elevated cholesterol absorption → CKD risk
2. H₂S immune disorders → increased inflammatory response
3. Elevated cholesterol is independently associated with increased CKD risk (Deedwania 2014)

**Protective taxa — the Lachnospiraceae pattern:**
*Lachnospiraceae UCG-010* (OR = 0.89) is protective, consistent with the broader Lachnospiraceae family's role as SCFA (butyrate/acetate) producers. This aligns with Yasuno et al. 2024 [[yasuno-2024-dysbiosis-gut-microbiota-ckd-stages]], which shows Lachnospiraceae are depleted in CKD patients from stage 3b onward.

**The Deltaproteobacteria convergence:**
Both *Desulfovibrionales* (an order) and *Deltaproteobacteria* (a class) appear independently in risk-increasing associations — the class association is partially driven by Desulfovibrionales, but likely represents a broader pattern of sulfate-reducing bacterial enrichment in CKD.

## Relevance to WikiBiome

- Establishes **Desulfovibrionales** as the first genetically-confirmed causal gut taxon in CKD pathogenesis — this is the key fact not on Wikipedia
- The H₂S mechanism links to CKD's inflammatory state, endothelial damage, and cardiovascular co-morbidity
- Protective Lachnospiraceae signal provides causal confirmation to supplement the observational staging data of [[yasuno-2024-dysbiosis-gut-microbiota-ckd-stages]]

## Relevance to Cureva

- Desulfovibrionales abundance as a CKD risk biomarker — interventions reducing sulfate-reducing bacteria (dietary sulfur restriction, competitive exclusion) are potential Cureva intervention hypotheses
- Lachnospiraceae UCG-010 as protective taxon: prebiotic/probiotic strategies to support Lachnospiraceae growth could be triangulated against CKD outcomes

## Contradictions / Tensions

- Sensitivity analyses using stricter LD threshold (r² < 0.001 with 10,000 kb vs. r² < 0.1 with 500 kb) showed consistent results, validating robustness
- Limitation: all GWAS are European ancestry; results need validation in Asian and other populations

## Open Questions

- What is the threshold Desulfovibrionales abundance at which CKD risk significantly elevates?
- Can dietary interventions (reduced red meat/sulfur amino acids) reduce Desulfovibrionales abundance and thereby slow CKD progression?
- Do the nine nominally significant taxa reflect independent causal pathways or colinear ecological niches?
