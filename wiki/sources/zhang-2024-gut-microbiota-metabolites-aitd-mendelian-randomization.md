---
title: "The Gut Microbiota and Its Metabolites and Their Association with the Risk of Autoimmune Thyroid Disease: A Mendelian Randomization Study"
type: source
created: 2026-11-03
updated: 2026-11-03
authors: [Zhang C, Teng W, Wang C, Shan Z]
corresponding_author: "Chuyuan Wang; Zhongyan Shan"
corresponding_email: "chuyuan0215@163.com; 19902049@cmu.edu.cn"
institution: "Department of Endocrinology and Metabolism, The First Affiliated Hospital of China Medical University, Institute of Endocrinology, NHC Key Laboratory of Diagnosis and Treatment of Thyroid Diseases, Shenyang, China"
journal: "Nutrients"
year: 2024
doi: "10.3390/nu16223898"
pmid: "39599685"
pmcid: "PMC11597551"
evidence_level: computational-prediction
sample_size: "Microbiota exposure n=13,266 European (MiBioGen); AITD 30,234 cases / 725,172 controls; HT 15,654 cases / 379,986 controls; GD 1,678 cases / 456,942 controls"
tags: [hashimotos-thyroiditis, graves-disease, autoimmune-thyroid-disease, mendelian-randomization, gut-microbiota, metabolites, tryptophan-metabolism, indoles, 3-indoleglyoxylic-acid, taurocholic-acid, bile-acids, short-chain-fatty-acids, lipopolysaccharide, multivariable-mr]
library_category: metabolites
platform: wikibiome
condition: "Hashimoto's thyroiditis"
karen_brain_primitives: [5]
metals_discussed: [selenium, iodine]
taxa_discussed: [anaerostipes, turicibacter, akkermansia, butyrivibrio, prevotella, ruminococcaceae, ruminococcus-torques-group, bifidobacterium, coprobacter, flavonifractor, anaerofilum, marvinbryantia, tyzzerella, gordonibacter, oscillospira, eubacterium-rectale-group, lactobacillus]
key_findings: ["Circulating 3-indoleglyoxylic acid was the only exposure surviving FDR: AITD OR 1.09 (95% CI 1.05 to 1.14), p=2.43e-5, FDR=0.009", "22 nominal genus associations (incl. 6 for HT) all disappeared after FDR correction; no robust causal gut genus for HT", "Circulating taurocholic acid was nominally associated with HT risk and persisted after MVMR adjustment for BMI and alcohol"]
keystone: false
---

# The Gut Microbiota and Its Metabolites and Their Association with the Risk of Autoimmune Thyroid Disease: A Mendelian Randomization Study

## Key Findings

- **No gut genus had a causal association with AITD, Graves' disease (GD) or Hashimoto's thyroiditis (HT) after FDR correction.** Of the genus-level IVW analyses, 22 were nominally significant (p<0.05) but none survived Benjamini-Hochberg correction (computational-prediction)
- **For HT specifically, nominal (uncorrected) hits were**: Anaerostipes and Turicibacter (risk direction); Akkermansia, Butyrivibrio, Prevotella7 and Ruminococcaceae UCG011 (protective direction). None survived FDR (computational-prediction)
- **Circulating 3-indoleglyoxylic acid, a tryptophan/indole derivative, was the only exposure with a significant causal estimate after FDR**, and only for the composite AITD outcome: IVW OR 1.09 per SD (95% CI 1.05 to 1.14), p=2.43x10^-5, FDR=0.009; weighted median OR 1.06 (1.01 to 1.12), p=0.025; MR-PRESSO OR 1.09 (1.05 to 1.14), p=0.001 (computational-prediction)
- **Circulating taurocholic acid was nominally associated with higher HT risk** (did not survive FDR), and the association persisted in multivariable MR adjusting for BMI (OR 1.21, 95% CI 1.08 to 1.35, p=0.001) and alcoholic drinks per week (OR 1.22, 95% CI 1.04 to 1.43, p=0.014) (computational-prediction)
- **Ruminococcus torques group nominally increased GD risk**, but leave-one-out showed the signal was driven by a single SNP (rs10904297); authors state robust conclusions cannot be drawn (computational-prediction)

## Methods

- **Design**: Two-sample MR (forward), with sensitivity analyses and multivariable MR (MVMR) for BMI and alcohol consumption frequency. Reported per STROBE-MR.
- **Microbiota exposure**: MiBioGen 16S GWAS, 18,340 individuals from 24 cohorts; only European-descent individuals used (n=13,266); 119 genera extracted, 116 retained (>=3 SNPs at p<1x10^-5, r2<=0.01).
- **Metabolite exposures (9)**: fecal butyrate pathway PWY-5022 (Dutch Microbiome Project); circulating acetate (14 European cohorts, n=24,925); circulating propionate and TMAO (CRIC study, n=822); circulating indole-3-propionate (KORA/TwinsUK); 3-indoleglyoxylic acid, cholic acid, taurocholic acid and LPS proxied by 3-hydroxymyristate (CLSA cohort).
- **Outcomes**: AITD from Icelandic and UK biobanks (755,406 individuals; 30,234 cases, 725,172 controls; phenotype includes GD, HT, other hypothyroidism and/or thyroxine treatment). GD and HT from a 220-phenotype meta-analysis of BioBank Japan, UK Biobank and FinnGen, European ancestry only (GD 1,678 / 456,942; HT 15,654 / 379,986).
- **Analysis**: IVW primary (multiplicative random effects if heterogeneous); weighted median and MR-PRESSO for p<0.05 hits; MR-Egger intercept and MR-PRESSO global for pleiotropy; leave-one-out; Steiger directionality. FDR (Benjamini-Hochberg, 5%) defined "significant" (p<0.05 and FDR<0.05) versus "suggestive" (p<0.05, FDR>=0.05). R 4.1.2; TwoSampleMR 0.5.6, MendelianRandomization 0.9.0, MRPRESSO 1.0.

## Detailed Summary

**Genus level.** Out of 348 genus IVW analyses (Results text; Methods states 375 total primary IVWs including metabolites), 22 were nominally significant:
- AITD, risk direction: Anaerofilum, Candidatus Soleaferrea, Lachnospiraceae UCG010, Marvinbryantia, Ruminiclostridium5, Ruminococcaceae NK4A214 group, Tyzzerella3.
- AITD, protective direction: Defluviitaleaceae UCG011, Eubacterium rectale group, Family XIII AD3011 group, Gordonibacter, Oscillospira.
- GD, risk: Bifidobacterium, Ruminococcus torques group. GD, protective: Coprobacter, Flavonifractor.
- HT, risk: Anaerostipes, Turicibacter. HT, protective: Akkermansia, Butyrivibrio, Prevotella7, Ruminococcaceae UCG011.
- All 22 lost significance after FDR correction (effect sizes are in Supplementary Table S5, not in the main text).
- No genetically predicted Lactobacillus abundance was associated with any AITD outcome.

**Metabolites.** Of 24 metabolite analyses, three were nominally significant: 3-hydroxymyristate (LPS proxy) and 3-indoleglyoxylic acid for AITD, and taurocholic acid for HT. Only 3-indoleglyoxylic acid on AITD survived FDR. SCFAs (fecal butyrate pathway, circulating acetate, propionate) and TMAO showed no significant associations in the main text.

**Robustness.** Seven exposure-outcome pairs survived the robustness filter (weighted median and MR-PRESSO p<0.05, no MR-Egger intercept or MR-PRESSO global signal); Steiger tests supported the assumed direction for all IVs.

**MVMR.** 3-indoleglyoxylic acid on AITD remained after adjustment: with BMI OR 1.11 (95% CI 1.02 to 1.21), p=0.017; with alcoholic drinks per week OR 1.13 (95% CI 1.04 to 1.22), p=0.003. R. torques group on GD: with BMI OR 1.37 (1.04 to 1.81), p=0.027; with alcohol OR 1.58 (1.24 to 2.01), p=2.44x10^-4. Taurocholic acid on HT: with BMI OR 1.21 (1.08 to 1.35), p=0.001; with alcohol OR 1.22 (1.04 to 1.43), p=0.014.

**Reporting discrepancies in the paper**: the Abstract attributes the MVMR values "BMI: OR=1.21 ... drinks/week: OR=1.22" to 3-indoleglyoxylic acid, but the Results text assigns these values to taurocholic acid on HT (3-indoleglyoxylic acid MVMR values are 1.11 and 1.13). The Abstract also prints the MR-PRESSO CI as "1.15-1.14" while Results gives 1.05 to 1.14. Use the Results values.

**Mechanistic context (cited, non-clinical)**: authors cite a prior study [ref 42 in the paper] reporting that 3-indoleglyoxylic acid enhances autoimmunity and promotes IL-17 production by T cells in vitro (non-clinical, in vitro; not tested in this paper). Indole derivatives are aryl hydrocarbon receptor ligands.

**Author-stated limitations**: not all genera/metabolites included; relaxed SNP threshold (p<1x10^-5 rather than 5x10^-8); diet, season and other environmental factors not adjustable; genus-level resolution only; European-only populations limit generalizability. Authors also note publication bias may inflate positive microbiota findings in observational literature.

## Relevance to WikiBiome

- Important null-leaning counterweight for [[hashimotos-thyroiditis]] and [[gut-thyroid-axis]]: with 15,654 HT cases and FDR control, no gut genus showed a robust causal effect on HT.
- Metabolite angle links to [[tryptophan-metabolism]], [[indoles]], [[aryl-hydrocarbon-receptor]], [[il-17]], [[bile-acid-metabolism]], [[taurine]] and [[lipopolysaccharide]]. Method page: [[mendelian-randomization]].
- Taxa pages touched (nominal only): [[anaerostipes]], [[turicibacter]], [[akkermansia-muciniphila]], [[butyrivibrio]], [[bifidobacterium]], [[flavonifractor]], [[gordonibacter]].

## Relevance to Cureva

- Weak support for any genus-targeted intervention in HT; the paper's own conclusion is that MR found no significant causal gut microbiota effects.
- Tryptophan-indole metabolism (3-indoleglyoxylic acid) is a candidate mechanistic target for AITD broadly, not HT specifically. Treat as hypothesis.
- Taurocholic acid (a taurine-conjugated bile acid) as a nominal HT risk factor is hypothesis-generating for bile acid ecology; not FDR-significant.

## Contradictions / Tensions

- Conflicts with smaller MR papers (e.g. [[xiong-2024-gut-microbiota-autoimmune-thyroiditis-mendelian-randomization]]) and observational studies that report specific protective or harmful genera for HT; this paper shows such hits disappear under multiple-testing correction.
- Bifidobacterium is nominally a GD risk factor here, in tension with observational reports of reduced Bifidobacterium in AITD; authors connect it to molecular-mimicry modeling.
- The HT outcome GWAS (15,654 / 379,986) is the same dataset used by [[guo-2024-treg-cells-hashimotos-mendelian-randomization]]; results from the two papers are not independent replications.

## Open Questions

- Is 3-indoleglyoxylic acid primarily microbially produced in humans, and is its effect specific to HT, GD, or the broader hypothyroidism phenotype captured in the AITD outcome?
- Would species- or strain-level microbiome GWAS (rather than genus-level) reveal effects missed here?
- Does taurocholic acid replicate as an HT risk factor in an independent HT GWAS?
