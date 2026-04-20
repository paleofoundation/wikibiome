---
title: "Graves Disease and Inflammatory Bowel Disease: A Bidirectional Mendelian Randomization"
type: source
created: 2026-04-09
updated: 2026-04-20
authors: [Xian W, Wu D, Liu B, Hong S, Huo Z, Xiao H, Li Y]
corresponding_author: "Yanbing Li"
corresponding_email: "liyb@mail.sysu.edu.cn"
institution: "Department of Endocrinology, First Affiliated Hospital of Sun Yat-sen University, Guangzhou, China"
journal: The Journal of Clinical Endocrinology & Metabolism
year: 2023
doi: "10.1210/clinem/dgac683"
evidence_level: computational-prediction
sample_size: "GD: 2,176 cases / 210,277 controls (BBJ); IBD: 2,824 CD cases + 1,134 UC cases / 3,719 controls (IIBDGC)"
tags: [graves-disease, thyroid, autoimmune, inflammatory-bowel-disease, Crohns-disease, ulcerative-colitis, mendelian-randomization, GWAS, comorbidity, HLA, JAK-STAT, PTPN22, epigenetics]
platform: wikibiome
metals_discussed: [iron, selenium, iodine]
taxa_discussed: []
karen_brain_primitives: [1, 3]
key_findings:
  - "IBD increases GD risk by 24% (OR 1.24, P=.041); Crohn's disease increases GD risk by 30% (OR 1.30, P=.010) while UC is protective (OR 0.71, P<.001)"
  - "CD and UC exhibit contradictory relationships with GD despite both being classified as IBD"
  - "After removing pleiotropic SNP rs1569723, GD significantly increases CD risk (OR 1.33, P<.001)"
keystone: false
library_category: associated-conditions
condition: "graves-disease"
---

# Graves Disease and Inflammatory Bowel Disease: A Bidirectional Mendelian Randomization

## Key Findings

- **Genetically predicted IBD increases the risk of GD by 24%** (IVW: OR 1.24, 95% CI 1.01-1.52, P=.041), driven primarily by Crohn's disease (OR 1.30, 95% CI 1.06-1.59, P=.010), while ulcerative colitis is paradoxically protective against GD (OR 0.71, 95% CI 0.58-0.86, P<.001) ([[xian-2023-graves-disease-ibd-mendelian-randomization]], computational prediction)
- **CD and UC exhibit contradictory relationships with GD** despite both being classified as IBD, revealing deeper unrecognized mechanistic differences between the two conditions; UC protection was confirmed by weighted median (OR 0.73, 95% CI 0.63-0.83, P<.001) ([[xian-2023-graves-disease-ibd-mendelian-randomization]], computational prediction)
- **Genetically predicted GD was not significantly associated with overall IBD** (IVW: OR 1.04, 95% CI 0.88-1.23, P=.618), but after removing pleiotropic SNP rs1569723, GD significantly increased CD risk (OR 1.33, 95% CI 1.15-1.53, P<.001) ([[xian-2023-graves-disease-ibd-mendelian-randomization]], computational prediction)
- **MR-PRESSO outlier-corrected results** were consistent: IBD-to-GD OR 1.20 (P=.040), CD-to-GD OR 1.30 (P=.012), UC-to-GD OR 0.69 (P<.001); for reverse direction, GD-to-UC OR 0.83 (P=.038) after outlier correction ([[xian-2023-graves-disease-ibd-mendelian-randomization]], computational prediction)
- **Shared genetic susceptibility** via HLA-DRB1, PTPN22, and the JAK/STAT pathway (STAT1 upregulated in CD and Chinese AITD patients) underlies the GD-IBD comorbidity ([[xian-2023-graves-disease-ibd-mendelian-randomization]], computational prediction)

## Methods

- **Study type**: Bidirectional two-sample Mendelian randomization using GWAS summary data
- **GD data source**: BioBank Japan (BBJ) — 2,176 cases and 210,277 controls of East Asian ancestry; diagnosis based on physicians' diagnoses at cooperating hospitals
- **IBD data sources**: International Inflammatory Bowel Disease Genetics Consortium (IIBDGC) — IBD: 2,824 cases and 3,719 controls; CD: 1,690 cases and 3,719 controls; UC: 1,134 cases and 3,719 controls; immunochip data from Japan (2,054 patients and 3,311 controls), Korea (453 patients and 144 controls), and China (317 patients and 264 controls)
- **IV selection**: SNPs associated with GD/IBD at P<5.0x10^-8; F-statistic >10; clumping window 10,000 kb, r^2 threshold 0.01; palindromic SNPs with effect allele frequencies 0.3-0.7 excluded
- **Statistical methods**: IVW (primary), MR-Egger, weighted median, MR-PRESSO; Cochran's Q for heterogeneity; leave-one-out analysis
- **IVs used**: 13 SNPs for GD (6 found in IIBDGC); 10 SNPs for IBD, 14 for CD, 7 for UC on GD; 7 eligible SNPs for GD on IBD
- **Software**: TwoSampleMR package (version 0.5.6) in R (version 4.1.0)

## Detailed Summary

**IBD-to-GD direction.** IBD as a whole increases GD risk by 24% (IVW: OR 1.24, P=.041). When divided into subtypes, the effects diverge strikingly: CD increases GD risk (OR 1.30, 95% CI 1.06-1.59, P=.010) while UC is protective (OR 0.71, 95% CI 0.58-0.86, P<.001). The weighted median method confirmed UC's protective effect (OR 0.73, P<.001). MR-PRESSO outlier correction removed 2 outliers from IBD-GD, 1 from CD-GD, and 3 from UC-GD analyses; corrected results remained consistent with raw estimates. No significant horizontal pleiotropy was noted (MR-Egger intercept P=.603 for IBD, P=.333 for CD, P=.713 for UC).

**GD-to-IBD direction.** GD was not significantly associated with overall IBD (IVW: OR 1.04, P=.618), though it showed a trend toward increasing CD risk (OR 1.23, 95% CI 0.99-1.53, P=.057). The SNP rs1569723 showed potential horizontal pleiotropy and was removed; after correction, GD significantly increased CD risk (OR 1.33, 95% CI 1.15-1.53, P<.001). GD was not associated with UC risk (OR 0.82, 95% CI 0.62-1.09, P=.178). MR-PRESSO confirmed GD-to-UC: OR 0.83 (P=.038).

**Shared pathways discussed.** Both GD and IBD are immune-mediated diseases sharing HLA associations and genetic susceptibility. HLA-DRB1 is closely related to both CD and GD. In T cells, STAT1 signaling is increased in CD but not UC, and STAT1 mRNA is upregulated in Chinese AITD patients, implying STAT1 as a potential mediator among CD, UC, and GD. PTPN22 shares multiple variants in both CD and GD as well as RA. Epigenetic mechanisms — DNA methylation differences specific to CD vs. UC (e.g., IGFBP4 methylation increased in CD vs. UC) — may explain the divergent effects. The microbiota in IBD may influence GD through modulating absorption of iodine, selenium, and iron. Concordance rates in monozygotic twins: CD up to 50%, UC only 15%, GD 35%. Vitamin D deficiency is positively associated with CD onset and course. Smoking is a shared risk factor for GD and IBD complications.

## Relevance to WikiBiome

- Critical evidence for [[graves-disease]] associated conditions section: CD as risk factor, UC as protective factor
- Strengthens the cross-condition pattern showing HLA-DRB1 and PTPN22 as shared autoimmune susceptibility loci, connecting to [[chen-2024-graves-ra-bidirectional-mr]]
- The CD-UC divergence despite both being IBD is a key insight for [[crohns-disease]] and [[ulcerative-colitis]] entity pages
- Microbiota-mediated nutrient absorption (iodine, selenium, iron) as mechanistic link supports [[gut-thyroid-axis]] concept

## Relevance to Cureva

- JAK/STAT pathway as shared therapeutic target — tofacitinib shows different efficacy in UC vs. CD, suggesting pathway-specific targeting may be needed
- CD patients should be screened for thyroid dysfunction; UC patients may have reduced GD risk — clinical stratification
- Treatments effective for CD might help prevent GD, but treatments for UC may not — important for comorbidity management
- Microbiome-targeting therapy as an essential strategy for both IBD and GD

## Contradictions / Tensions

- CD increases GD risk while UC protects against it — this paradox is unexplained and challenges the unitary "IBD" classification
- The GD-to-IBD overall effect was non-significant (P=.618), yet after removing one pleiotropic SNP, GD-to-CD became highly significant (P<.001) — sensitivity to single-SNP removal raises caution
- Asian population (BBJ) may not generalize to European or other ancestries
- The role of the altered gut microbiota is discussed but not directly tested in this MR framework

## Open Questions

- What specific mechanistic differences between CD and UC explain their opposing effects on GD risk?
- Does the microbiota-mediated nutrient absorption pathway (iodine, selenium, iron) fully account for the IBD-GD link, or are direct immune mechanisms more important?
- Would successful treatment of CD reduce subsequent GD incidence?
- Are the STAT1 and PTPN22 pathways independently contributing to the CD-GD association, or are they part of a single cascade?
- Can epigenetic profiling (DNA methylation) identify IBD patients at highest risk for developing GD?
