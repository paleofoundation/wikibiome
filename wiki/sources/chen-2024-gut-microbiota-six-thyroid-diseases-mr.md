---
title: "Uncovering a Causal Connection between Gut Microbiota and Six Thyroid Diseases: A Two-Sample Mendelian Randomization Study"
type: source
created: 2026-04-09
updated: 2026-04-20
authors: [Chen J, Wang Y, Yao H, Li Y, Song H]
corresponding_author: "Hong Song"
corresponding_email: "20021017@zcmu.edu.cn"
institution: "School of Basic Medical Sciences, Zhejiang Chinese Medical University, Hangzhou, China"
journal: Biology
year: 2024
doi: "10.3390/biology13090714"
evidence_level: computational-prediction
sample_size: "GM GWAS: 18,340 (MiBioGen); GD: 4,846 cases / 349,717 controls (FinnGen R10)"
tags: [graves-disease, thyroid, autoimmune, gut-microbiota, mendelian-randomization, thyroid-nodules, thyroid-cancer, Plummer-disease, gut-thyroid-axis, Bifidobacterium, SCFA, Butyricimonas, Desulfovibrio, genus-level, six-diseases]
platform: wikibiome
metals_discussed: []
taxa_discussed: [bifidobacterium, butyricimonas, catenibacterium, collinsella, desulfovibrio, eubacterium-rectale, lachnospira, oscillospira, ruminiclostridium, victivallis]
karen_brain_primitives: [4, 5]
key_findings:
  - "32 gut microbial taxa are causally linked to six thyroid diseases at genus level; 9 genera specifically associated with Graves' disease"
  - "Bifidobacterium paradox: protective against nontoxic multinodular goiter (OR 0.771) but increases GD risk (OR 1.246, P=0.011)"
  - "Butyricimonas (OR 0.824) and Ruminiclostridium9 (OR 0.749) are protective against GD, suggesting SCFA-mediated mechanisms"
keystone: false
library_category: signatures
condition: "graves-disease"
---

# Uncovering a Causal Connection between Gut Microbiota and Six Thyroid Diseases: A Two-Sample Mendelian Randomization Study

## Key Findings

- **32 gut microbial taxa are causally linked to the risk of six thyroid diseases** at the genus level, identified via two-sample Mendelian randomization using MiBioGen and FinnGen R10 data ([[chen-2024-gut-microbiota-six-thyroid-diseases-mr]], computational prediction)
- **Nine genera are specifically associated with Graves' disease risk**: protective genera include Ruminiclostridium9 (OR 0.749, 95% CI 0.586-0.957, P=0.021), Victivallis (OR 0.847, 95% CI 0.745-0.964, P=0.012), and Butyricimonas (OR 0.824, 95% CI 0.698-0.972, P=0.022); risk-increasing genera include Eubacterium rectale group (OR 1.305, 95% CI 1.049-1.624, P=0.017), Desulfovibrio (OR 1.216, 95% CI 1.006-1.468, P=0.043), Bifidobacterium (OR 1.246, 95% CI 1.051-1.476, P=0.011), Collinsella (OR 1.301, 95% CI 1.023-1.655, P=0.032), Oscillospira (OR 1.231, 95% CI 1.003-1.510, P=0.046), and Catenibacterium (OR 1.331, 95% CI 1.035-1.710, P=0.026) ([[chen-2024-gut-microbiota-six-thyroid-diseases-mr]], computational prediction)
- **Bifidobacterium shows a paradoxical disease-specific role**: protective against nontoxic multinodular goiter (OR 0.771, 95% CI 0.662-0.898, P=0.001) but associated with increased risk of Graves' disease (OR 1.246, P=0.011), challenging the conventional view of Bifidobacterium as universally beneficial ([[chen-2024-gut-microbiota-six-thyroid-diseases-mr]], computational prediction)
- **Butyricimonas and Lachnospira are protective against both GD and Plummer disease** (Butyricimonas: GD OR 0.824, PD OR 0.743; Lachnospira: PD OR 0.560), suggesting shared SCFA-mediated protective mechanisms across hyperthyroid conditions ([[chen-2024-gut-microbiota-six-thyroid-diseases-mr]], computational prediction)
- **The study is the first to use MR** to explore causal relationships between gut microbiota and the incidence of six distinct thyroid diseases simultaneously ([[chen-2024-gut-microbiota-six-thyroid-diseases-mr]], computational prediction)

## Methods

- **Study type**: Two-sample Mendelian randomization analysis
- **GM GWAS data**: MiBioGen consortium (18,340 participants); 12 unknown genera excluded, resulting in 119 genera for analysis
- **Thyroid disease GWAS data**: FinnGen R10 database (European ancestry) — six thyroid diseases: nontoxic diffuse goiter (NDG, n=906), nontoxic multinodular goiter (NMG, n=6,699), nontoxic single thyroid nodule (NSTN, n=2,203), Graves' disease (GD, n=4,846), Plummer disease (PD, n=1,717), thyrotoxicosis with toxic single thyroid nodule (TSTN, n=246); controls: 349,717-403,309
- **IV selection**: SNPs associated with exposure at P<1x10^-5; linkage disequilibrium parameters: kb=10,000, r^2<0.001; palindromic SNPs excluded; F-statistic >10 required
- **Total IVs**: 1,531 SNPs from 119 genera, all F-statistic >10
- **MR methods**: Five methods — IVW (primary), weighted median, simple mode, MR-Egger, weighted mode
- **Sensitivity analyses**: Cochran's Q for heterogeneity, MR-Egger intercept for directional pleiotropy, MR-PRESSO for horizontal pleiotropy, leave-one-out analysis, funnel plots, forest plots
- **Software**: R 4.3.2

## Detailed Summary

**GD-specific results.** Nine genera reached significance by IVW for GD. The strongest protective association was Ruminiclostridium9 (OR 0.749), a genus within Firmicutes. The strongest risk association was Catenibacterium (OR 1.331). No significant heterogeneity or horizontal pleiotropy was detected for GD-associated taxa (Table 2: all Cochran's Q P>0.05, all MR-PRESSO P>0.05, all Egger intercept P>0.05).

**Cross-disease patterns.** NDG: Clostridium innocuum group (protective, OR 0.716), Ruminiclostridium5 (protective, OR 0.618), and 6 risk-increasing genera. NMG: Bifidobacterium (protective, OR 0.771) and Sutterella (protective, OR 0.830), while Ruminococcus gauvreauii group increases risk (OR 1.307 after outlier removal). NSTN: Defluviitaleaceae UCG011 (protective), Alistipes and Ruminococcus gauvreauii group (risk). PD: Dorea (strongest risk factor, OR 2.262), Eggerthella, Odoribacter, Lactobacillus, Intestinimonas, Phascolarctobacterium (all risk-increasing); Butyricimonas and Lachnospira (protective). TSTN: Sutterella (OR 3.178), Oscillibacter, Clostridium sensu stricto1 (risk); Parasutterella (protective).

**Bifidobacterium paradox explained.** The review discusses that Bifidobacterium, prevalent in both human and animal guts as part of Firmicutes, is crucial for maintaining intestinal health and immune balance. Its metabolic byproducts (SCFAs) could reduce intestinal inflammation and autoimmunity, explaining NMG protection. However, combining Bifidobacterium with methimazole may affect neurotransmitters and blood micronutrients through gut-brain and gut-thyroid axes, potentially explaining the increased GD risk. Research shows Bifidobacterium longum improved thyroid function in GD patients when combined with methimazole, suggesting the context of use matters.

**Butyricimonas discussion.** Research in hyperthyroid gerbils found diminished levels of Butyricimonas, which regulates resting metabolic rate and food intake. The protective effect against both GD and PD suggests shared thermogenic/metabolic mechanisms mediated by gut microbiota modifications of thyroid hormone effects.

## Relevance to WikiBiome

- Genus-level GD risk taxa inform [[bifidobacterium]], [[desulfovibrio]], [[collinsella]], and [[oscillospira]] entity pages with disease-specific associations
- The Bifidobacterium paradox (protective for goiter, risk for GD) is a key finding for understanding disease-specific microbial roles — relevant to entity and concept pages
- Cross-disease comparisons (6 thyroid diseases) provide the broadest MR-based microbiota-thyroid mapping to date
- Butyricimonas protection across GD and PD supports [[short-chain-fatty-acids]] concept page

## Relevance to Cureva

- Probiotic intervention design: Bifidobacterium supplementation may be counterproductive for GD patients despite being generally considered beneficial — potential STOP signal
- Butyricimonas and Ruminiclostridium9 as protective targets suggest dietary or probiotic interventions that enhance SCFA-producing taxa
- Desulfovibrio as a GD risk factor links to sulfate-reducing bacteria and hydrogen sulfide metabolism — potential target for dietary sulfate restriction
- Lachnospira protection against Plummer disease suggests shared mechanisms with GD prevention

## Contradictions / Tensions

- Bifidobacterium paradox directly contradicts the widespread clinical use of Bifidobacterium-containing probiotics for autoimmune conditions — the GD risk association (OR 1.246) challenges this practice
- This contradicts [[han-2022-berberine-methimazole-graves-microbiome]] where Bifidobacterium longum improved GD outcomes when combined with methimazole — the MR finding identifies genetic predisposition to Bifidobacterium abundance as a GD risk factor, while the clinical study showed therapeutic benefit of a specific strain
- European-ancestry GWAS data may not generalize to East Asian populations where GD prevalence differs
- Genus-level resolution may miss species/strain-level differences that determine pathogenic vs. protective roles

## Open Questions

- Does the Bifidobacterium paradox reflect species-specific effects (e.g., B. longum protective vs. other species harmful)?
- Can Butyricimonas or Ruminiclostridium9 be used as biomarkers for GD risk?
- Does Desulfovibrio increase GD risk through hydrogen sulfide-mediated thyroid dysfunction or through sulfate competition with thyroid metabolism?
- Would dietary interventions that reduce Collinsella and Oscillospira while enhancing Butyricimonas reduce GD incidence in at-risk populations?
- How do these genus-level MR findings compare with observational 16S rRNA studies of GD patients (e.g., [[yang-2022-intestinal-flora-graves-methimazole]])?
