---
title: "Chen 2024 — Causal Relationship Between Gut Microbiota and Male Erectile Dysfunction: A Mendelian Randomization Analysis"
type: source
created: 2026-04-19
updated: 2026-04-19
authors: [Shuaiqi Chen, Xiaolong Liu, Shangrong Wu, Guangyu Sun, Ranlu Liu]
corresponding_author: "Guangyu Sun; Ranlu Liu"
corresponding_email: "806860535@qq.com; Ranluliu@126.com"
institution: "Tianjin Medical University General Hospital; The First Affiliated Hospital of Xinxiang Medical University"
year: 2024
journal: "Frontiers in Microbiology"
doi: "10.3389/fmicb.2024.1367740"
evidence_level: cross-sectional
sample_size: "n=223,805 (6,175 ED cases + 217,630 controls for outcome; 18,340 for microbiota exposure)"
tags: [erectile-dysfunction, gut-microbiota, mendelian-randomization, GWAS, lachnospiraceae, ruminococcaceae, oscillibacter, tyzzerella, causal-inference]
library_category: causal
platform: both
condition: "erectile dysfunction"
karen_brain_primitives: [1, 5]
metals_discussed: []
taxa_discussed: [lachnospiraceae, lachnospiraceae-nc2004-group, oscillibacter, ruminococcaceae-ucg013, tyzzerella, alistipes, clostridium, lactobacillus, bifidobacterium, escherichia-coli]
key_findings:
  - "Genus Ruminococcaceae UCG013 has a protective causal relationship with ED (OR=0.761, 95% CI 0.626-0.926, p=0.006)"
  - "Family Lachnospiraceae causally increases ED risk (OR=1.264, 95% CI 1.063-1.504, p=0.008), the strongest positive association found"
  - "Genus Oscillibacter causally increases ED risk (OR=1.213, 95% CI 1.066-1.381, p=0.003)"
keystone: false
---

## Key Findings

- **Genus Ruminococcaceae UCG013** showed a protective causal relationship with male ED (OR = 0.761, 95% CI 0.626--0.926, p = 0.006 by IVW), suggesting this taxon may reduce ED risk.
- **Family [[lachnospiraceae]]** was causally associated with increased ED risk (OR = 1.264, 95% CI 1.063--1.504, p = 0.008 by IVW), representing the strongest positive association identified.
- **Genus [[oscillibacter]]** was causally associated with increased ED risk (OR = 1.213, 95% CI 1.066--1.381, p = 0.003 by IVW).
- **Genus Lachnospiraceae NC2004 group** (OR = 1.189, 95% CI 1.029--1.374, p = 0.019) and **genus Tyzzerella3** (OR = 1.134, 95% CI 1.018--1.262, p = 0.023) also showed positive causal associations with ED.
- Sensitivity analyses (Cochran's Q test, MR-Egger intercept, MR-PRESSO, leave-one-out) confirmed no significant heterogeneity or horizontal pleiotropy across all five positive findings.

## Methods

- **Design:** Two-sample Mendelian randomization analysis following STROBE-MR guidelines.
- **Exposure data:** Gut microbiota GWAS summary statistics from the MiBioGen consortium (n = 18,340 from 24 cohorts, predominantly European descent), covering 211 taxa (131 genera, 35 families, 20 orders, 16 classes, 9 phyla) based on 16S rRNA gene sequencing.
- **Outcome data:** ED GWAS from Bovijn et al. (2019), comprising 6,175 cases and 217,630 controls from Partners HealthCare Biobank, Estonian Genome Center, and UK Biobank (all European descent). ED defined by self-report, physician diagnosis (ICD-10 N48.4/F52.2), ED medication use, or ED surgery history.
- **IV selection:** SNPs at p < 1 x 10^-5 (relaxed threshold due to limited genome-wide significant hits), LD clumping R^2 < 0.001 at 10,000 kb distance, F-statistic > 10 for all IVs (no weak instrument bias). Palindromic and inconsistent alleles excluded. 2,564 SNPs identified across 211 taxa.
- **Statistical methods:** Five MR methods applied -- IVW (primary), MR-Egger, weighted median, weighted mode, and simple mode. Consistency in direction across all five methods required for causal inference.
- **Sensitivity:** Cochran's Q test for heterogeneity, MR-Egger intercept and MR-PRESSO for horizontal pleiotropy, leave-one-out analysis for result stability. PhenoScanner used to verify IVs were not associated with known ED risk factors (diabetes, smoking, endocrine disorders).
- **Software:** TwoSampleMR package (v0.5.5) in R (v4.0.1).

## Detailed Summary

This study applied two-sample MR to investigate whether genetically predicted gut microbiota composition causally influences male erectile dysfunction. Of 211 bacterial taxa tested, five showed statistically significant causal associations with ED at p < 0.05 by IVW.

**Protective taxon:**

| Taxon | OR (IVW) | 95% CI | p-value | nSNP |
|-------|----------|--------|---------|------|
| Genus Ruminococcaceae UCG013 | 0.761 | 0.626--0.926 | 0.006 | 14 |

The authors note that Ruminococcaceae UCG013 has been positively correlated with serum HDL cholesterol and negatively correlated with total cholesterol and LDL cholesterol (Feng et al., 2022), suggesting the protective effect on ED may operate through lipid metabolism and vascular endothelial function.

**Risk-increasing taxa:**

| Taxon | OR (IVW) | 95% CI | p-value | nSNP |
|-------|----------|--------|---------|------|
| Family Lachnospiraceae | 1.264 | 1.063--1.504 | 0.008 | 18 |
| Genus Oscillibacter | 1.213 | 1.066--1.381 | 0.003 | 17 |
| Genus Lachnospiraceae NC2004 group | 1.189 | 1.029--1.374 | 0.019 | 10 |
| Genus Tyzzerella3 | 1.134 | 1.018--1.262 | 0.023 | 14 |

The authors contextualize that Lachnospiraceae has controversial health effects -- protective in some contexts (asthma, colorectal cancer) but enriched in liver cirrhosis and major depressive disorder. Three of the five positive taxa belong to or are subgroups within Lachnospiraceae, suggesting family-level dysbiosis may be particularly relevant.

The discussion highlights mechanistic pathways by which gut microbiota could influence erectile function: (1) metabolites such as short-chain fatty acids and amino acids affecting glucose/lipid metabolism and penile vascular endothelial cells; (2) nitric oxide (NO) production, where Lactobacillus and Bifidobacterium are efficient NO producers while E. coli and Bacteroides may deplete NO; (3) gut-testis axis effects on testosterone and spermatogenesis.

**Limitations acknowledged:** European-only GWAS populations limit generalizability; relatively small ED case sample (n = 6,175); relaxed SNP threshold (p < 1 x 10^-5 vs. conventional p < 5 x 10^-8) may introduce weaker instruments, though all F-statistics exceeded 10.

## Relevance to WikiBiome

This study provides MR-level causal evidence linking specific gut microbial taxa to erectile dysfunction, strengthening the case that the gut-reproductive axis is a genuine biological phenomenon rather than an artifact of confounding. Key entity pages to update or create:

- **[[lachnospiraceae]]** -- add ED to conditions where this family is enriched; note the controversial dual role (protective in some contexts, harmful in others).
- **[[oscillibacter]]** -- add ED association.
- **[[erectile-dysfunction]]** -- disease entity page should include microbiome associations section referencing this MR evidence alongside the observational data from Okamoto et al. (2020) showing Alistipes and Clostridium XVIII associations.
- Relevant to the concept of **[[nitric-oxide]]** in gut-vascular communication, as the paper discusses NO-producing and NO-depleting taxa as a mechanistic link to erectile function.

## Relevance to Cureva

- Provides causal (not merely associational) evidence for the ED microbiome signature, strengthening confidence in taxonomic layer assignments.
- **Ruminococcaceae UCG013** as a protective taxon suggests a potential probiotic or ecological restoration target -- its enrichment could be an intervention hypothesis for the ED signature.
- The Lachnospiraceae family-level risk signal, combined with subgenus-level specificity (NC2004 group, Tyzzerella3), informs targeted ecological engineering (Primitive 5) -- not all Lachnospiraceae need suppression, only specific subgroups.
- The lipid metabolism pathway (Ruminococcaceae UCG013 --> HDL/LDL --> vascular endothelial function --> erectile function) suggests metabolic intermediaries that could inform intervention triangle edges.
- The NO production pathway (specific taxa modulating NO levels --> penile vascular function) connects to potential dietary/probiotic interventions targeting NO-producing strains.

## Contradictions / Tensions

- The paper frames Lachnospiraceae as a risk factor for ED, but [[lachnospiraceae]] is widely considered a beneficial SCFA-producing family in many disease contexts (depleted in IBD, colorectal cancer). The authors acknowledge this controversy explicitly. This dual role needs careful annotation on the entity page -- the family-level signal may mask divergent effects of specific genera. <!-- NEEDS VERIFICATION: reconcile with other vault pages discussing Lachnospiraceae as protective -->
- The relaxed SNP threshold (p < 1 x 10^-5) is a common compromise in microbiome MR studies but weakens causal inference compared to genome-wide significance. Results should be interpreted as suggestive causal evidence, not definitive.
- No metals were directly investigated in this study. The connection to WikiBiome's metallomic framework is indirect -- through metabolic pathways (lipid metabolism, NO production) that metals are known to influence. The metallomic layer of any ED signature would need to draw on other sources.

## Open Questions

1. What are the specific metabolites or pathways through which Lachnospiraceae subgroups increase ED risk? The family produces both acetate and butyrate -- is the harmful effect mediated through a different metabolic product?
2. Does Ruminococcaceae UCG013 exert its protective effect primarily through lipid metabolism, or are there additional pathways (anti-inflammatory, NO modulation)?
3. Would these causal relationships replicate in non-European populations with different baseline microbiome compositions?
4. What is the role of Oscillibacter in ED pathophysiology? The paper identifies it as a risk taxon but provides minimal mechanistic context.
5. How do the taxa identified here overlap with metal-dependent organisms? If any of these taxa have metal dependencies, the metallomic layer of an ED signature could be informed by this causal evidence.
6. Could fecal microbiota transplantation or targeted probiotics enriching Ruminococcaceae UCG013 serve as an ED intervention? No clinical trials exist yet.
