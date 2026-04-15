---
title: "Zhang 2024 — Gut Microbiota and Postpartum Depression: A Mendelian Randomization Study"
type: source
created: 2026-04-14
updated: 2026-04-14
authors: [Jianjun Zhang, Lechuan Wei, Hongfei Tan, Wenwen Pang]
corresponding_author: "Wenwen Pang"
corresponding_email: "pwenwen2008@163.com"
institution: "Department of Obstetrics, Affiliated Hospital of Weifang Medical University, China"
year: 2024
journal: "Frontiers in Psychiatry"
doi: "10.3389/fpsyt.2024.1282742"
pmid: "not yet verified"
evidence_level: computational-prediction
sample_size: "GWAS meta-analysis: 18,473 individuals (25 cohorts); PPD: 4,834 cases, 33,173 controls (UK Biobank)"
tags: [postpartum-depression, mendelian-randomization, causal-inference, microbiota-GWAS, gut-brain-axis]
library_category: causal
platform: cureva
condition: "postpartum depression"
karen_brain_primitives: [1, 2, 4, 5]
metals_discussed: []
taxa_discussed: [actinobacteria, holdemanella]
key_findings:
  - "Actinobacteria phylum has protective effect on PPD (OR=0.971, P=0.014)"
  - "Holdemanella genus causally associated with reduced PPD risk (OR=0.979, P=0.023)"
  - "Unknown genus IDs 2001 and 2755 also show protective effects"
  - "No evidence of horizontal pleiotropy or heterogeneity in MR analysis"
---

## Key Findings

1. **Actinobacteria Protection** — Phylum Actinobacteria inversely associated with PPD risk (OR=0.971, 95% CI=0.948-0.994, P=0.014, IVW method, 15 SNPs). Remains significant in weighted median and MR-Egger sensitivity analyses.

2. **Holdemanella Causal Effect** — Genus Holdemanella shows causal protective effect on PPD (OR=0.979, 95% CI=0.961-0.997, P=0.023, 11 SNPs). Consistent across multiple MR methods.

3. **Unknown Taxa with Protective Effects** — Two unknown genera (Unknown IDs 2001 and 2755) also identified as causally protective (P=0.025 and P=0.012 respectively, 10-13 SNPs each).

4. **Robustness and No Pleiotropy** — Sensitivity analyses show no heterogeneity (Q-statistic, MR-Egger), no horizontal pleiotropy (MR-Egger intercept, MR-PRESSO), and no single SNP driving the causal signal (forest plots).

5. **Directional Consistency** — MR Steiger directionality test confirms true causal correlation (variance explained by bacterial SNPs > variance explained by PPD SNPs).

## Methods

**Design:** Two-sample Mendelian randomization (MR) using GWAS summary statistics.

**Data Sources:**
- Gut microbiota: MiBioGen consortium (18,473 individuals, 25 cohorts, 16S rRNA gene sequencing, 211 taxa across 5 taxonomic levels: 9 phyla, 16 classes, 20 orders, 35 families, 131 genera)
- PPD phenotype: UK Biobank (4,834 cases, 33,173 controls, European ancestry, 11,982,120 SNPs)

**Instrumental Variable Selection:** 
- Stringent threshold P<1×10^-5 for SNP-exposure association
- Linkage disequilibrium (LD) threshold r²<0.001 within 10,000 kb window to ensure independence
- Removed "echo SNPs" and SNPs not present in outcome dataset
- Total 2,044 SNPs used as IVs for 211 taxa

**MR Methods:**
- Primary: Inverse variance weighted (IVW) with random effects model
- Sensitivity: MR-Egger regression, weighted median, simple mode, weighted mode
- Heterogeneity: Cochrane Q statistic via IVW and MR-Egger intercept test
- Pleiotropy: MR-Egger intercept test and MR-PRESSO global test
- Directionality: MR Steiger test
- Software: R 4.2.1, TwoSampleMR and MRPRESSO packages

**Significance:** P<0.05 for IVW analysis. All findings validated in sensitivity analyses.

## Detailed Summary

**Study Population:** MiBioGen consortium comprised 7,738 participants of European ancestry from 25 cohorts with 16S rRNA gene sequencing. PPD dataset (UK Biobank) restricted to European population to minimize ancestral heterogeneity.

**Taxonomic Coverage:** Analysis examined 211 bacterial taxa: 9 phyla, 16 classes, 20 orders, 35 families, 131 genera.

**Causal Estimates (IVW Method):**

| Exposure | SNPs | Beta | OR | 95% CI | P-value |
|----------|------|------|-----|---------|---------|
| Actinobacteria (phylum) | 15 | -0.050 | 0.971 | 0.948-0.994 | 0.014 |
| Holdemanella (genus) | 11 | -0.043 | 0.979 | 0.961-0.997 | 0.023 |
| Unknown IDs 2755 | 13 | -0.035 | 0.977 | 0.959-0.995 | 0.012 |
| Unknown IDs 2001 | 10 | -0.038 | 0.972 | 0.947-0.996 | 0.025 |

**Sensitivity Analysis Results:**
- MR-Egger regression: Consistent effect directions for all taxa
- Weighted median: Beta values aligned with IVW estimates
- Heterogeneity testing: No evidence of heterogeneity (Q-statistic, MR-Egger intercept test)
- Horizontal pleiotropy: MR-Egger intercept P>0.05 for all exposures; MR-PRESSO detected no outlier SNPs
- Forest plots: No single SNP drives causal association; effects distributed across multiple SNPs
- Steiger directionality test: Variance explained by bacterial SNPs > variance explained by PPD outcome, confirming true causal direction

**Mechanistic Insights:** Activation of GABA(A) receptors in pregnancy followed by sharp decline in neuroactive steroids postpartum may increase neuronal excitability in hippocampus. Actinobacteria and Holdemanella potentially upregulate GABA synthesis and improve intestinal barrier function, reducing systemic inflammation and mitigating PPD.

## Relevance to WikiBiome

This MR study identifies Actinobacteria and Holdemanella as causally protective against PPD—not merely associated. These taxa become priority entity pages explaining their functional capacity to produce GABA and maintain barrier integrity. The causal inference elevates these from correlation to mechanism-based targets.

## Relevance to Cureva

The causal evidence supports Actinobacteria/Holdemanella restoration as an evidence-graded intervention strategy. Practitioners can use these findings to justify microbiota-modulating treatments (probiotics, dietary shifts) as causally linked to PPD improvement rather than speculative. The unknown taxa IDs suggest opportunities for next-generation sequencing-guided interventions targeting specific genetic markers.

## Contradictions / Tensions

Complements Zhou et al. (2020) cross-sectional findings showing Firmicutes depletion in PPD. Actinobacteria here identified as protective; Zhou showed mixed changes in Actinobacteria levels. No direct contradiction—Actinobacteria reduction in PPD (Zhou) combined with causal protective effect (Zhang MR) suggests Actinobacteria loss is mechanistically important.

## Open Questions

1. What specific metabolic pathways via Holdemanella drive GABA production?
2. Are the "unknown" taxa actually species-level representatives of known genera, or truly undescribed?
3. Does probiotic supplementation with Actinobacteria/Bifidobacterium (Actinobacteria members) restore the protective effect?
4. What is the dose-response curve for Holdemanella abundance and PPD risk reduction?
