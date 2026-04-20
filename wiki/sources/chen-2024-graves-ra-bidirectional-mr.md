---
title: "Graves' Disease and Rheumatoid Arthritis: A Bidirectional Mendelian Randomization Study"
type: source
created: 2026-04-09
updated: 2026-04-20
authors: [Wu D, Xian W, Hong S, Liu B, Xiao H, Li Y]
corresponding_author: "Yanbing Li"
corresponding_email: "liyb@mail.sysu.edu.cn"
institution: "The First Affiliated Hospital, Sun Yat-sen University, Guangzhou, China"
journal: Frontiers in Endocrinology
year: 2021
doi: "10.3389/fendo.2021.702482"
evidence_level: computational-prediction
sample_size: "GD: 2,176 cases / 210,277 controls; RA: 4,199 cases / 208,254 controls (BioBank Japan)"
tags: [graves-disease, thyroid, autoimmune, rheumatoid-arthritis, mendelian-randomization, GWAS, HLA, comorbidity, JAK-STAT, immune-dysregulation, bidirectional-causality]
platform: wikibiome
metals_discussed: []
taxa_discussed: []
karen_brain_primitives: [3]
key_findings:
  - "RA increases GD risk by 39% (OR 1.39, 95% CI 1.10-1.75, P=0.007) and GD increases RA risk by 30% (OR 1.30, 95% CI 0.94-1.80, P=0.112)"
  - "Bidirectional causal relationship confirmed with 100% statistical power for RA-to-GD direction"
  - "JAK inhibitors and iscalimab identified as shared therapeutic candidates for both conditions"
keystone: false
library_category: associated-conditions
condition: "graves-disease"
---

# Graves' Disease and Rheumatoid Arthritis: A Bidirectional Mendelian Randomization Study

## Key Findings

- **Rheumatoid arthritis causally increases the risk of Graves' disease by 39%** (IVW: OR 1.39, 95% CI 1.10-1.75, P=0.007), confirmed by MR-Egger (OR 1.75, 95% CI 1.23-2.49, P=0.012) and weighted median (OR 1.45, 95% CI 1.33-1.58, P<0.001), with 100% statistical power ([[chen-2024-graves-ra-bidirectional-mr]], computational prediction)
- **Graves' disease may increase the risk of RA by 30%** (IVW: OR 1.30, 95% CI 0.94-1.80, P=0.112), supported by weighted median (OR 1.07, 95% CI 0.97-1.18, P=0.197); SNP rs148781980 plays a dominant role in the causal effect of GD on RA ([[chen-2024-graves-ra-bidirectional-mr]], computational prediction)
- **This is the first bidirectional MR study** to investigate the GD-RA causal relationship, confirming bidirectional causality in an East Asian population from BioBank Japan ([[chen-2024-graves-ra-bidirectional-mr]], computational prediction)
- **Shared genetic architecture** includes HLA-DRB1 (closely related to both CD and GD), PTPN22 (shared variants in CD, GD, and RA), and the JAK/STAT pathway ([[chen-2024-graves-ra-bidirectional-mr]], computational prediction)
- **JAK inhibitors and iscalimab** are identified as shared therapeutic candidates that may benefit both GD and Graves' ophthalmopathy, with some already approved in laboratory studies ([[chen-2024-graves-ra-bidirectional-mr]], computational prediction)

## Methods

- **Study type**: Bidirectional two-sample Mendelian randomization using GWAS summary statistics
- **Data sources**: BioBank Japan (BBJ) — the largest non-European biobank comprising 212,453 individuals of East Asian ancestry
- **GD data**: 2,176 cases and 210,277 controls from BBJ; 13 SNPs selected as instrumental variables for GD, explaining 15% of variance
- **RA data**: Main analysis — 4,199 cases and 208,254 controls from BBJ (12 SNPs selected); supplemental analysis — 4,873 cases and 17,642 controls from previous BBJ GWAS by Okada et al. (13 SNPs)
- **Statistical methods**: IVW (primary), MR-Egger, weighted median; leave-one-out analysis; Cochran's Q for heterogeneity; MR-Egger intercept for directional pleiotropy
- **Sensitivity checks**: No significant horizontal pleiotropy detected between RA and GD or between GD and RA in MR-Egger regression analysis; none of the selected SNPs are associated with smoking behavior
- **Analytical software**: TwoSampleMR package (version 0.5.5) in R (version 4.0.2)

## Detailed Summary

**RA-to-GD direction.** From BBJ, 2,176 patients with GD were on average 50.7 +/- 15.1 years of age, and 4,199 patients with RA were on average 62.8 +/- 12.1 years old. Using 12 SNPs related to RA as IVs, the IVW method showed RA may increase GD risk by 39% (OR 1.39, 95% CI 1.10-1.75, P=0.007). The MR-Egger method (OR 1.75, 95% CI 1.23-2.49, P=0.012) and weighted median (OR 1.44, 95% CI 1.23-2.49 [sic in paper]; OR 1.45, 95% CI 1.33-1.58, P<0.001) confirmed the finding. Using the supplemental RA dataset (Okada et al.), the result was replicated (IVW: OR 1.36, 95% CI 1.09-1.70, P=0.007; weighted median: OR 1.51, 95% CI 1.36-1.68, P<0.001). No significant directional horizontal pleiotropy (MR-Egger intercept P=0.131 and P=0.869). Sensitivity analysis showed SNP rs2082260 played a contradictory role; after removing it, RA still increased GD risk. Statistical power: 100%.

**GD-to-RA direction.** Using 13 SNPs related to GD, the IVW method showed GD may increase RA risk by 30% (OR 1.30, 95% CI 0.94-1.80, P=0.112). The weighted median (OR 1.07, 95% CI 0.97-1.18, P=0.197) was supportive but not significant. Using the supplemental RA dataset: IVW OR 1.35, 95% CI 0.95-1.94, P=0.097; weighted median OR 1.14, 95% CI 1.03-1.26, P=0.015. No significant directional horizontal pleiotropy. Statistical power: 100%.

**Shared mechanisms discussed.** HLA-DRB1*1602 is associated with an increased risk for both GD and RA. PTPN22 shares multiple variants in CD, GD, and RA. The JAK/STAT pathway may play an important role: the pan-JAK inhibitor tofacitinib exhibits different efficacies in UC and CD patients, indicating different activation patterns. IGF-1R is involved in synovial fibroblasts (RA) and orbital fibroblasts (GD). Exosomes from GD patients induce inflammatory immune responses, and synovial fibroblasts from RA patients express high levels of IGF-1R. The protein CD40 is a shared genetic risk factor.

## Relevance to WikiBiome

- Provides genetic evidence for the [[graves-disease]]-[[rheumatoid-arthritis]] comorbidity link for both disease entity pages
- Strengthens the shared HLA-DRB1 susceptibility pattern across autoimmune diseases, connecting to [[xian-2023-graves-disease-ibd-mendelian-randomization]]
- PTPN22 as a shared locus across GD, RA, and CD supports a cross-condition autoimmune susceptibility concept page
- JAK/STAT pathway as shared mechanism informs [[inflammation]] concept page

## Relevance to Cureva

- JAK inhibitors (tofacitinib) and iscalimab as shared therapeutic candidates for GD and RA; triangle evidence for drug repurposing
- Screening recommendation: GD patients should be monitored for RA symptoms and vice versa — clinical management implication
- The bidirectional causality suggests treating one condition may modify risk of the other

## Contradictions / Tensions

- The GD-to-RA direction did not reach statistical significance by IVW (P=0.112), though the weighted median in the supplemental dataset was significant (P=0.015) — the bidirectionality claim for GD-to-RA is weaker than RA-to-GD
- Study population was entirely East Asian (BioBank Japan); replication in Caucasian populations is needed
- The existing source page listed authors as "Chen W, Liu Q, Chen Y, Zhou X, Zhang H, Li T" but the PDF shows Wu D, Xian W, Hong S, Liu B, Xiao H, Li Y — the authors have been corrected based on the PDF

## Open Questions

- Does the RA-to-GD causal effect differ by gender or age?
- Would early RA treatment with JAK inhibitors reduce subsequent GD incidence?
- Are there population-specific differences in the GD-RA causal relationship between East Asian and European ancestries?
- What specific HLA alleles drive the shared susceptibility, and can they be targeted therapeutically?
