---
title: "Chen 2023 — Association Between Gut Microbiota and Erectile Dysfunction: A Two-Sample Mendelian Randomization Study"
type: source
created: 2026-04-19
updated: 2026-04-19
authors: [Wenkang Chen, Yijing Zhang, Hede Zou, Bolin Li, Hanfei Liu, Ruikun Wang, Jiayou Zhao]
corresponding_author: "Jiayou Zhao"
corresponding_email: "zhaojiayou520@126.com"
institution: "Graduate School of China Academy of Chinese Medical Sciences; The Sixth Affiliated Hospital of Sun Yat-sen University"
year: 2023
journal: "Research Square (preprint)"
doi: "10.21203/rs.3.rs-2491164/v1"
pmid: ""
evidence_level: cross-sectional
sample_size: "n=18,340 (microbiota GWAS, MiBioGen); n=223,805 (ED: 6,175 cases, 217,630 controls)"
tags: [erectile-dysfunction, gut-microbiota, mendelian-randomization, lachnospiraceae, oscillibacter, tyzzerella, erysipelotrichaceae, SCFA, causal-inference, GWAS]
library_category: causal
platform: both
condition: "erectile dysfunction"
karen_brain_primitives: [1, 5]
metals_discussed: []
taxa_discussed: [lachnospiraceae, oscillibacter, tyzzerella, erysipelotrichaceae-ucg003]
key_findings:
  - "Family Lachnospiraceae (OR=1.26, 95%CI 1.06-1.5, P=0.008), Oscillibacter (OR=1.2, 95%CI 1.04-1.39, P=0.016), Tyzzerella3 (OR=1.14, 95%CI 1.02-1.27, P=0.024), and Erysipelotrichaceae UCG003 (OR=2.05, 95%CI 1.54-2.56, P=0.006) are causal risk factors for ED"
  - "Reverse MR analysis found no causal effect of ED on gut microbiota composition, confirming unidirectional causality from microbiota to ED"
  - "All four risk taxa belong to the thick-walled phylum (Firmicutes) and are SCFA producers, implicating SCFA-mediated pathways in ED pathogenesis"
keystone: false
---

## Key Findings

- **Family *Lachnospiraceae*** is causally associated with increased ED risk (IVW: OR=1.26, 95%CI 1.06–1.5, P=0.008), confirmed by weighted median (OR=1.32, P=0.023) ([[chen-2023-gut-microbiota-erectile-dysfunction-mendelian-randomization]], cross-sectional/MR).
- **Genus *Oscillibacter*** is causally associated with increased ED risk (IVW: OR=1.2, 95%CI 1.04–1.39, P=0.016) ([[chen-2023-gut-microbiota-erectile-dysfunction-mendelian-randomization]], cross-sectional/MR).
- **Genus *Tyzzerella3*** is causally associated with increased ED risk (IVW: OR=1.14, 95%CI 1.02–1.27, P=0.024) ([[chen-2023-gut-microbiota-erectile-dysfunction-mendelian-randomization]], cross-sectional/MR).
- **Genus *Erysipelotrichaceae UCG003*** shows the strongest causal association with ED risk (IVW: OR=2.05, 95%CI 1.54–2.56, P=0.006; single SNP, Wald ratio) ([[chen-2023-gut-microbiota-erectile-dysfunction-mendelian-randomization]], cross-sectional/MR).
- **Reverse MR** found no causal effect of ED on intestinal flora, supporting unidirectional causality from gut microbiota to ED.

## Methods

- **Design:** Two-sample Mendelian randomization (MR) study.
- **Exposure data:** Gut microbiota GWAS summary statistics from the MiBioGen consortium (n=13,266 European ancestry; 18,340 total from 24 cohorts). 16S rRNA gene variable regions V4, V3-V4, and V1-V2 used for taxonomic classification.
- **Outcome data:** ED phenotype from a GWAS of 223,805 European men (6,175 ED cases, 217,630 controls), identified via ICD-10 code N52 and ED drug prescriptions (sildenafil, tadalafil, vardenafil, levitra) from the Partners Biobank.
- **Instrumental variables (IVs):** 1,646 SNPs selected from 148 bacterial genera (out of 212 explored) at locus-wide significance (P < 1.0 x 10^-5). LD clumping at R^2 < 0.001, window 10,000 kb. MAF > 0.01.
- **Statistical methods:** IVW (primary), MR-Egger regression, weighted median, weighted mode, MR-PRESSO. Cochran's Q for heterogeneity. FDR correction (Q-value < 0.1).
- **Sensitivity analyses:** F-statistic > 10 for all IVs (no weak instrument bias). No significant heterogeneity (Cochran's Q). No significant directional horizontal pleiotropy (MR-Egger intercept). MR-PRESSO detected no horizontal pleiotropy outliers.
- **Software:** R version 4.2.1, TwoSampleMR (v0.5.6), MR-PRESSO (v1.0), qvalue package.

## Detailed Summary

Out of 212 bacterial genera explored, 148 had at least one genetic variant at the locus-wide threshold. Four taxa showed statistically significant causal associations with ED:

**Lachnospiraceae (family level):** The strongest evidence among the multi-SNP analyses (18 SNPs as IVs). IVW OR=1.26 (95%CI 1.06–1.5, P=0.008). Consistent direction across weighted median (OR=1.32, P=0.023) and weighted mode (OR=1.36, P=0.092), though MR-Egger was non-significant (OR=1.5, P=0.089). *Lachnospiraceae* are major SCFA producers, particularly butyrate and propionate. The authors note that increased thick-walled phylum abundance is associated with obesity, high BMI, and metabolic disorders including diabetes, which are themselves ED risk factors ([[lachnospiraceae]]).

**Oscillibacter (genus level):** 13 SNPs. IVW OR=1.2 (95%CI 1.04–1.39, P=0.016). Other methods were non-significant but directionally consistent. *Oscillibacter*'s main metabolic end product is valerate, a homologue of the neurotransmitter GABA, with relevance to depression — a known ED risk factor. *Oscillibacter* abundance is also negatively correlated with BMI and linked to reducing serum triglyceride concentrations ([[oscillibacter]]).

**Tyzzerella3 (genus level):** 13 SNPs. IVW OR=1.14 (95%CI 1.02–1.27, P=0.024). Weighted median confirmed (OR=1.2, P=0.018). *Tyzzerella3* abundance is associated with preeclampsia-eclampsia and related to acute myocardial infarction. The authors hypothesize its link to ED may involve SCFA production capacity. *Tyzzerella3* has also been found significantly lower in post-stroke cognitive impairment patients.

**Erysipelotrichaceae UCG003 (genus level):** Only 1 SNP available, so Wald ratio was used (OR=2.05, 95%CI 1.54–2.56, P=0.006). This is the largest effect size but the least robust estimate (single IV). The HOMA-IR index of overweight/obesity and metabolic syndrome shows a positive correlation with *Erysipelotrichaceae UCG003* abundance, suggesting a metabolic link to ED.

**Reverse MR:** No causal effect of ED on any of the four identified taxa, supporting the directionality of the association from gut microbiota to ED.

**Environmental exposure note:** The authors cite a study showing that heavy metal exposure in mining and smelting areas alters gut microbiota, resulting in higher relative abundance of *Lachnospiraceae*, *Erysipelotrichaceae UCG-003*, and *Tyzzerella3* — the same taxa identified as ED risk factors. This may link environmental metal exposure to ED through gut microbiota mediation.

## Relevance to WikiBiome

This study provides causal inference evidence (via MR) for the gut-microbiota-to-ED axis, strengthening the factual basis for discussing microbiome associations with erectile dysfunction on the [[erectile-dysfunction]] entity page. The taxa identified — [[lachnospiraceae]], [[oscillibacter]], *Tyzzerella3*, and *Erysipelotrichaceae UCG003* — can be cross-referenced on their respective entity pages as conditions they are enriched in.

The environmental metal exposure finding (mining/smelting areas enriching ED-risk taxa) is particularly relevant to WikiBiome's metallomics framework, though this is a single cited observation rather than primary data from this study.

The SCFA pathway discussion connects to the [[short-chain-fatty-acids]] concept and the gut-brain axis, both relevant to general microbiome education.

## Relevance to Cureva

- **Signature update:** Supports the taxonomic layer of the [[erectile-dysfunction-signature]] — *Lachnospiraceae*, *Oscillibacter*, *Tyzzerella3*, and *Erysipelotrichaceae UCG003* as enriched taxa with causal evidence from MR.
- **Intervention hypotheses:** The SCFA-mediation pathway suggests that interventions targeting SCFA-producing taxa or their metabolic outputs could be relevant. The association of these taxa with metabolic syndrome, obesity, and inflammation points to dietary and lifestyle interventions as upstream levers.
- **Metal-microbiota-ED triangle:** The cited finding that heavy metal exposure enriches the same ED-risk taxa opens a potential metal-restriction intervention pathway, though this requires independent validation.
- **STOP consideration:** None directly from this study, though the metabolic disorder associations imply that interventions increasing *Lachnospiraceae* abundance (some prebiotics, high-fat diets) could theoretically worsen ED risk.

## Contradictions / Tensions

- **Near-duplicate analysis with [[chen-2024-causal-relationship-gut-microbiota-erectile-dysfunction-mr]]:** The Chen 2024 paper (Shuaiqi Chen et al., Frontiers in Microbiology) uses the identical MiBioGen and Partners Biobank GWAS datasets and finds nearly identical ORs for *Lachnospiraceae* (1.264 vs. 1.26) and *Oscillibacter* (1.213 vs. 1.2). Despite different author teams, these are essentially independent analyses of the same data. The Chen 2024 study additionally identifies *Ruminococcaceae UCG013* as protective (OR=0.761), which this preprint does not report.
- **Also overlaps with [[zhang-2023-causal-gut-microbiota-erectile-dysfunction-mendelian]]:** Zhang et al. 2023 (Frontiers in Microbiology) also uses MiBioGen data and finds *Lachnospiraceae*, *Oscillibacter*, and *Tyzzerella3* as risk factors, plus *Senegalimassilia* and *Lachnospiraceae NC2004 group*. Again, same underlying GWAS.
- **Preprint status:** This paper was posted on Research Square (March 2023) and has not undergone peer review. The results should be interpreted with that caveat, though the convergence with two peer-reviewed studies using the same data is reassuring regarding the statistical findings.
- **Single-SNP limitation for Erysipelotrichaceae UCG003:** The strongest OR (2.05) relies on a single SNP via Wald ratio, making it the least robust finding despite the largest effect size.
- **Population limitation:** All analyses used European ancestry GWAS data. The authors note that ethnographic differences in gut microbiota may limit generalizability to non-European populations.

## Open Questions

1. What specific mechanisms link SCFA-producing Firmicutes to ED pathogenesis — is it SCFA excess, SCFA-driven metabolic disruption, or a SCFA-independent pathway?
2. Does the environmental heavy metal exposure → gut microbiota enrichment → ED pathway hold when tested directly (not just as a cited observation)?
3. Why does *Erysipelotrichaceae UCG003* show such a large effect size (OR=2.05) compared to other taxa — is this a genuine outsized effect or an artifact of single-SNP estimation?
4. Can strain-level analysis within *Lachnospiraceae* identify which specific species drive the ED association, given that the family includes both beneficial butyrate producers and potentially harmful members?
5. What is the role of *Oscillibacter*'s valerate production and GABA-mimicry in ED pathogenesis — does this operate through the gut-brain axis affecting psychogenic ED?
