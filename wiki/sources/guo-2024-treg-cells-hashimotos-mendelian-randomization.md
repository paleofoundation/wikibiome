---
title: "Treg cells as a protective factor for Hashimoto`s thyroiditis: a Mendelian randomization study"
type: source
created: 2026-11-03
updated: 2026-11-03
authors: [Guo J, Si G, Si F]
corresponding_author: "Fuchun Si"
corresponding_email: "sifc2000@hotmail.com"
institution: "Academy of Zhongjing, Henan University of Chinese Medicine, Zhengzhou, China"
journal: "Frontiers in Endocrinology"
year: 2024
doi: "10.3389/fendo.2024.1347695"
pmid: "38524638"
pmcid: "PMC10957564"
evidence_level: computational-prediction
sample_size: "Treg traits n=3,757 European; HT European 15,654 cases / 379,986 controls; HT East Asian 537 cases / 172,656 controls"
tags: [hashimotos-thyroiditis, mendelian-randomization, treg-cells, immune-cells, cd25, cd28, cd4, causality, east-asian, european, th17-treg-balance]
library_category: mechanistic-insights
platform: wikibiome
condition: "Hashimoto's thyroiditis"
karen_brain_primitives: [5]
metals_discussed: []
taxa_discussed: []
key_findings: ["European cohort: 5 Treg traits inversely associated with HT (IVW ORs 0.926 to 0.983), e.g. resting Treg %CD4 OR 0.975 (0.954 to 0.998)", "East Asian cohort: 4 traits inversely associated, strongest CD127-CD8br %T cell OR 0.463 (0.311 to 0.687), P<0.001", "No microbiome data; cross-ancestry agreement was directional only, with none of the shared traits significant in both cohorts"]
keystone: false
---

# Treg cells as a protective factor for Hashimoto`s thyroiditis: a Mendelian randomization study

## Key Findings

- **This is an immune-cell MR study with no microbiome exposure or data.** It informs the immune arm of the gut-thyroid axis (Treg deficit in HT), not microbial taxa (computational-prediction)
- **European cohort: five Treg-related traits were inversely associated with HT risk** by IVW: CD25 on CD39+ resting Treg (OR 0.926, 95% CI 0.864 to 0.991, P=0.026); CD28- CD8dim %CD8dim (OR 0.983, 0.969 to 0.998, P=0.030); CD28 on activated & secreting Treg (OR 0.969, 0.942 to 0.996, P=0.025); CD4 on resting Treg (OR 0.938, 0.882 to 0.997, P=0.041); resting Treg %CD4 (OR 0.975, 0.954 to 0.998, P=0.030) (computational-prediction)
- **East Asian cohort: four traits inversely associated with HT**: CD127-CD8br %T cell (OR 0.463, 0.311 to 0.687, P<0.001); CD25hi %T cell (OR 0.635, CI printed "0.473~852", P=0.002); CD3 on resting Treg (OR 0.786, 0.621 to 0.994, P=0.044); CD4 Treg %CD4 (OR 0.829, 0.687 to 1.000, P=0.050) (computational-prediction)
- **Effect sizes in Europeans are very small** (ORs 0.93 to 0.98 per SD), and no trait was significant in both ancestries; the five "cross-validated" traits only shared OR<1 direction (computational-prediction)
- **Reverse MR (European) found HT associated with lower CD25 on CD39+ resting Treg** (IVW OR 0.891, 95% CI 0.798 to 0.996, P=0.042), raising bidirectionality or confounding concerns that the authors acknowledge (computational-prediction)

## Methods

- **Design**: Two-sample MR with reverse MR, in two ancestries (European and East Asian), followed by "mutual validation" across ancestries.
- **Exposure**: 165 Treg-related immune traits from a GWAS of 3,757 European individuals (GWAS Catalog; accessions in Supplementary Table 1).
- **Outcomes**: HT GWAS from GWAS Catalog. European GCST90018855: 395,640 individuals (15,654 cases, 379,986 controls). East Asian GCST90018635: 173,193 participants, predominantly Japanese (537 cases, 172,656 controls).
- **Instruments**: P<1x10^-5; LD R2<0.001, 10,000 kb; F<10 excluded; incompatible and palindromic SNPs removed; PhenoScanner check.
- **Analysis**: IVW primary; MR-Egger, weighted median, simple mode, weighted mode; Cochran's Q; MR-Egger intercept; leave-one-out; MR-PRESSO. R TwoSampleMR and MRPRESSO. Thyroid status, sex and age of cases not available (summary statistics).
- Note: the East Asian Treg traits used the same European-derived exposure GWAS (3,757 Europeans), so the East Asian analysis is a cross-ancestry instrument application.

## Detailed Summary

- **European results**: nine Treg traits significantly linked to HT; five protective (listed above) plus four others (CD3 on CD39+ secreting Treg, CD3 on CD4 Treg, CD3 on CD45RA+ CD4+, CD39+ activated Treg %activated Treg) whose direction is given in the forest plot (Fig. 2), not in the text. Cochran's Q P values for the shown traits ranged roughly 0.09 to 0.71 (no significant heterogeneity); MR-Egger intercepts were non-significant (e.g. CD25 on CD39+ resting Treg intercept -0.0067, P=0.641).
- **East Asian results**: seven traits linked; four protective (above) plus CD25 on CD39+ activated Treg, CD39+ CD8br %CD8br, CD39+ CD8br %T cell. Reverse MR showed no significant effect of HT on Treg traits.
- **Cross-ancestry comparison (Fig. 5)**: five traits had OR<1 in both ancestries without reaching significance in the replication cohort: CD25 on CD39+ resting Treg (East Asian 0.759, European 0.926); CD28- CD8dim %CD8dim (0.991, 0.983); CD28 on activated & secreting Treg (0.991, 0.969); resting Treg %CD4 (0.857, 0.975); CD4 Treg %CD4 (0.829, 0.964). The final "five protective traits" in the conclusion are this directionally consistent set.
- **Internal inconsistencies**: the abstract presents the European resting Treg/CD4 traits list differently from the final conclusion list; CD4 Treg %CD4 sits exactly at P=0.050 with an upper CI of 1.000. The Limitations section mentions applying "a more lenient FDR correction" that is not described in the Methods. The East Asian CD25hi CI is misprinted as "0.473~852".
- **Mechanistic discussion (cited, non-clinical)**: the authors cite animal experiments in which Treg absence leads to spontaneous autoimmune thyroiditis, and an experimental autoimmune thyroiditis (EAT) mouse study implicating CD4+CD25+Foxp3+ Tregs (non-clinical, animal model). Cited clinical literature is mixed: some studies show reduced circulating Treg frequency in HT, others show no difference or higher CD4+Foxp3+ Treg proportions.
- **Author-stated limitations**: residual confounding cannot be excluded; generalizability limited beyond European and Asian groups; no individual-level data for stratification; lenient multiple-testing approach raises type I error.

## Relevance to WikiBiome

- Supports the immune side of [[hashimotos-thyroiditis]] and [[thyroid-autoimmunity]], particularly [[th17-treg-balance]] and [[autoimmunity]], which microbiome sources often invoke via [[short-chain-fatty-acids]].
- Should not be cited as microbiome evidence despite the manifest grouping under "Gut-Thyroid Axis"; any link to [[gut-thyroid-axis]] is inferential.
- Uses the same European HT outcome GWAS as [[zhang-2024-gut-microbiota-metabolites-aitd-mendelian-randomization]].

## Relevance to Cureva

- Provides genetic support (small effects) for the premise that Treg-related traits are protective in HT, which underpins hypotheses that SCFA-producing ecology may help through Treg induction. The paper itself tests no intervention.
- Authors caution that simply activating or inhibiting CD28 may not be ideal for HT.

## Contradictions / Tensions

- Reverse MR suggests HT may lower CD25 on CD39+ resting Treg, so the forward "protective" interpretation for that trait is uncertain.
- Observational literature on Treg frequency in HT is inconsistent (cited by the authors), and this study's European effects are near-null in magnitude.

## Open Questions

- Do these Treg traits replicate with ancestry-matched immune-cell GWAS in East Asians?
- Is the HT protection specific to resting/CD39+ Treg subsets, and does it relate to gut-derived Treg induction?
- Would multivariable MR with microbial or metabolite exposures show mediation through Treg traits?
