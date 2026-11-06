---
title: "The Composition of Gut Microbiota in Patients Bearing Hashimoto's Thyroiditis with Euthyroidism and Hypothyroidism"
type: source
created: 2026-11-03
updated: 2026-11-03
authors: [Liu S, An Y, Cao B, Sun R, Ke J, Zhao D]
corresponding_author: "Jing Ke; Dong Zhao"
corresponding_email: "kejing@ccmu.edu.cn"
institution: "Center for Endocrine Metabolism and Immune Diseases, Beijing Luhe Hospital, Capital Medical University, Beijing, China"
journal: "International Journal of Endocrinology"
year: 2020
doi: "10.1155/2020/5036959"
pmid: "33224194"
pmcid: "PMC7673947"
evidence_level: case-control
sample_size: "n=97 (45 euthyroid HT, 18 hypothyroid HT, 34 controls; all female)"
tags: [hashimotos-thyroiditis, gut-microbiome, 16s-rrna, thyroid-function, hypothyroidism, euthyroid, phascolarctobacterium, alpha-diversity, picrust, china, women]
library_category: signatures
platform: wikibiome
condition: "Hashimoto's thyroiditis"
karen_brain_primitives: [5]
metals_discussed: []
taxa_discussed: [phascolarctobacterium, lachnospiraceae-incertae-sedis, lactonifactor, alistipes, subdoligranulum, faecalibacterium, intestinimonas, ruminococcus, prevotella, bacteroidetes]
key_findings: ["Gut richness and Shannon diversity were lower in HT women than controls, lowest in hypothyroid HT (HTH vs euthyroid HT not significant)", "LEfSe: Lachnospiraceae_incertae_sedis, Lactonifactor, Alistipes, Subdoligranulum enriched in euthyroid HT; Phascolarctobacterium enriched in hypothyroid HT; Faecalibacterium, Intestinimonas, Ruminococcus 2 in controls", "Beta diversity separated the three groups (CPCoA, p=0.012); groups not age-matched"]
keystone: false
---

# The Composition of Gut Microbiota in Patients Bearing Hashimoto's Thyroiditis with Euthyroidism and Hypothyroidism

## Key Findings

- **Lower richness and diversity in HT**, especially hypothyroid HT. Richness and Shannon indices were significantly lower in HT than controls; HTH was lower than HTN but not significantly (case-control)
- **Community structure differed across the three groups** (CPCoA on Bray distance, P=0.012) (case-control)
- **Stage-specific taxa by LEfSe (LDA >2, P<0.05)**: Lachnospiraceae_incertae_sedis, Lactonifactor, Alistipes, Subdoligranulum enriched in euthyroid HT; Phascolarctobacterium enriched in hypothyroid HT; Faecalibacterium, Intestinimonas and Ruminococcus 2 enriched in controls (case-control)
- **Hypothyroid HT had higher Bacteroidetes and Prevotella** per the authors' abundance analysis (case-control)
- **Predicted function (PICRUSt)**: Phascolarctobacterium correlated negatively with most KEGG pathway classes; HT, especially HTH, had less predicted cellular-process and environmental-information-processing gene abundance (computational prediction within a case-control dataset)

## Methods

- **Design**: Self-described cross-sectional study comparing HT patients with healthy controls (case-control by repo convention; manifest guessed "observational").
- **Population**: 97 women of Han nationality, outpatients at Beijing Luhe Hospital, Capital Medical University, China, recruited June 2018 to March 2019. 34 healthy controls (CON), 45 euthyroid HT (HTN), 18 hypothyroid HT (HTH).
- **HT definition**: elevated TPOAb and/or TGAb plus diffuse thyroid morphology on ultrasound. Excluded: other autoimmune disease (Graves', T1D), thyroid surgery, pregnancy, antibiotics in the prior week.
- **Clinical characteristics (mean ± SEM)**: age CON 29.6 ± 0.6, HTN 34.6 ± 1.0, HTH 36.3 ± 2.1 (P=0.0003); BMI 21.4, 22.2, 23.7 (P=0.0674); disease course HTN 13.6 ± 2.7 vs HTH 29.7 ± 10.7 months; levothyroxine use HTN 13 (30%) vs HTH 13 (72%) (Table 1 P=0.0001; text gives P=0.0034); TSH 1.87, 2.19, 12.70 µIU/mL (P=0.0001).
- **Sequencing**: Fecal DNA (SDS freeze-thaw), 16S rRNA V4 (515F/806R), Illumina HiSeq 250 bp paired-end; OTUs at 97% (Vsearch, USEARCH, Silva).
- **Analysis**: Richness and Shannon indices; CPCoA; LEfSe (LDA >2, P<0.05); PICRUSt functional prediction to KEGG with Spearman correlations; one-way ANOVA with Tukey HSD and Benjamini-Hochberg correction.

## Detailed Summary

- 13,489,147 valid sequences, 11,106,451 high-quality tags, mean 105,776 per sample, 16,657 OTUs.
- Alpha diversity: HT had significantly lower Richness and Shannon than controls (Figure 1; exact p-values shown only as asterisks). HTH lower than HTN, not significant. Rarefaction curves matched.
- Beta diversity: distinct separation of the three groups, P=0.012.
- Composition: controls and HTN shared a similar pattern at phylum and genus level; HTH had significantly higher Bacteroidetes (phylum) and Prevotella (genus).
- LEfSe: HTN enriched for Lachnospiraceae_incertae_sedis, Lactonifactor, Alistipes, Subdoligranulum; HTH enriched for Phascolarctobacterium; CON enriched for Faecalibacterium, Intestinimonas, Ruminococcus 2.
- Function: Phascolarctobacterium negatively correlated with pathways in cellular processes, environmental information processing, genetic information processing, and metabolism; control/HTN-enriched taxa (except Faecalibacterium) correlated positively. HT, especially HTH, significantly less enriched in predicted cellular processes and environmental information processing pathways.
- Authors speculate Phascolarctobacterium (an acetate/propionate producer) may be involved in HT progression; this is hypothesis only.

### Authors' stated limitations
Single-center, relatively small sample; age and disease course not well matched among groups. They note the all-female design avoids sex confounding.

## Relevance to WikiBiome

- [[hashimotos-thyroiditis]]: one of the few studies stratifying HT by thyroid function; supports the idea that the HT microbiome differs by functional stage.
- [[phascolarctobacterium]], [[alistipes]], [[subdoligranulum]], [[faecalibacterium]], [[intestinimonas]], [[prevotella]]: stage-linked direction-of-change data.
- [[microbiome-diversity-metrics]]: reports lower richness in HT, in contrast to pooled meta-analyses.
- Directly comparable with [[li-2026-thyroid-functional-state-gut-dysbiosis-hashimotos]], which uses a similar stratification.

## Relevance to Cureva

- Faecalibacterium enriched in controls relative to HT is consistent with a butyrate-producer depletion hypothesis, but no intervention data.
- Levothyroxine use (72% of HTH vs 30% of HTN) is entangled with thyroid status, so "hypothyroid signatures" here may partly be treatment signatures.

## Contradictions / Tensions

- Richness **lower** in HT here, but **higher** in HT in [[gong-2021-gut-microbiota-autoimmune-thyroid-disease-meta-analysis]] and [[sawicka-gutaj-2022-microbiota-autoimmune-thyroid-diseases-systematic-review]] (which included this study), and in Zhao 2018.
- [[li-2026-thyroid-functional-state-gut-dysbiosis-hashimotos]] found euthyroid HT had **higher** richness than controls and lower richness in dysthyroid HT; only the "dysthyroid lowest" part agrees.
- Liu reports Prevotella higher in HTH; Zhao 2018 reported Prevotella_9 lower in HT.

## Open Questions

- Controls were about 5 to 7 years younger than HT groups; age was not adjusted for in microbiome analyses.
- Exact effect sizes and p-values for diversity and individual taxa are only shown graphically.
- PICRUSt predictions from 16S data are inferential; no metagenomic or metabolomic confirmation.
- Would Phascolarctobacterium enrichment persist after adjusting for levothyroxine?
