---
title: "Thyroid functional state-dependent dysbiosis of gut microbiota in Hashimoto's thyroiditis: a cross-sectional metagenomic profiling study"
type: source
created: 2026-11-03
updated: 2026-11-03
authors: [Li J, Guo S, Yu H, Hong X, Nie J, Sun H]
corresponding_author: "Hua Sun"
corresponding_email: "sunshine918@126.com"
institution: "Department of Geriatrics, Hangzhou Red Cross Hospital, Hangzhou, Zhejiang, China"
journal: "Thyroid Research"
year: 2026
doi: "10.1186/s13044-026-00297-4"
pmid: "42082982"
pmcid: "PMC13137569"
evidence_level: case-control
sample_size: "n=90 (67 HT: 19 hypothyroid, 25 euthyroid, 23 hyperthyroid; 23 controls)"
tags: [hashimotos-thyroiditis, gut-microbiome, 16s-rrna, thyroid-function, hypothyroidism, hyperthyroidism, euthyroid, clostridium-sensu-stricto-1, fusicatenibacter, picrust2, china]
library_category: signatures
platform: wikibiome
condition: "Hashimoto's thyroiditis"
karen_brain_primitives: [5]
metals_discussed: []
taxa_discussed: [clostridium-sensu-stricto-1, fusicatenibacter, fusobacterium, bifidobacterium, lactobacillus, ligilactobacillus, blautia, escherichia-shigella, streptococcus, klebsiella, stenotrophomonas, bacteroides, collinsella, agathobacter]
key_findings: ["Euthyroid HT had higher richness than controls; hypothyroid and hyperthyroid HT had lower Chao1 than euthyroid HT (P<0.05); hyperthyroid HT had lowest Shannon", "Clostridium sensu stricto_1 was the LEfSe marker of hypothyroid HT and correlated with TPO-Ab (r=0.21) and inversely with FT3 (r=-0.29)", "Despite the title, sequencing was 16S rDNA V3-V4 amplicon, not shotgun metagenomics"]
keystone: false
---

# Thyroid functional state-dependent dysbiosis of gut microbiota in Hashimoto's thyroiditis: a cross-sectional metagenomic profiling study

## Key Findings

- **Richness depended on thyroid state.** Euthyroid HT (HTN) had higher richness and diversity than controls; controls, hypothyroid HT (HTO) and hyperthyroid HT (HTE) all had lower Chao1 than HTN (P<0.05); HTE had lower Shannon than HTN (P<0.05) (case-control)
- **Clostridium sensu stricto_1 was the LEfSe biomarker for hypothyroid HT** and correlated positively with TPO-Ab (r=0.21, P<0.05) and negatively with FT3 (r=-0.29, P<0.01) across HT patients (case-control)
- **Bifidobacterium higher and Lactobacillus and Blautia lower** in both dysthyroid groups (HTE, HTO) vs HTN and controls (case-control)
- **FT3 correlated inversely with Escherichia-Shigella (r=-0.25, P<0.05) and Streptococcus (r=-0.28, P<0.01)**; TPO-Ab inversely with Bacteroides (r=-0.29, P<0.01) (case-control)
- **PICRUSt2 predictions**: higher "fatty acid salvage" in HTN, higher "L-tyrosine degradation I" and "renin-angiotensin system" in HTE, lower bile-acid metabolism in HTO (computational prediction within a case-control dataset)

## Methods

- **Design**: Self-described cross-sectional study; patients vs healthy controls and across thyroid states (case-control by repo convention; manifest guessed "observational").
- **Important note**: the title says "metagenomic profiling", but the methods describe 16S rDNA V3-V4 amplicon sequencing (341F/805R, Illumina NovaSeq 6000 PE250) with DADA2 ASVs and PICRUSt2 functional inference, not shotgun metagenomics.
- **Population**: 90 Chinese participants, Hangzhou Red Cross Hospital, January 2021 to December 2023 (ethics approval 2022-119). Newly diagnosed HT aged 18 to 80 with elevated TPO-Ab and/or Tg-Ab and HT ultrasound morphology, grouped by function: HTO (TSH ≥4.94 mIU/L with reduced FT3/FT4, n=19), HTN (normal TSH/FT3/FT4, n=25), HTE (TSH <0.35 with elevated FT3/FT4, n=23). Controls (n=23): normal thyroid function, no thyroid history, negative autoantibodies.
- **Demographics (Table 1)**: M/F HTO 6/13, HTN 17/8, HTE 11/12, HC 12/11 (overall HT 34 M / 33 F, unusually male-heavy for HT). Mean age about 57 to 60 in all groups (59.63, 58.28, 57.22, 57.70; P=0.607). Smoking 21.05%, 48.00%, 30.43%, 26.09%. TSH 8.75 ± 4.83, 1.83 ± 1.02, 0.07 ± 0.10, 1.98 ± 0.81.
- **Exclusions**: antibiotics, probiotics, PPIs/antacids or other microbiota-affecting drugs within 1 month; GI, autoimmune/rheumatic, severe cardiovascular/cerebrovascular, hepatic/renal/hematopoietic disease; pregnancy/lactation.
- **Analysis**: Alpha (Shannon, ACE, Simpson, Chao) and beta (PCoA) diversity; LEfSe (LDA >3.0, P<0.05); Spearman correlations with BH-FDR (Q<0.05 stated); PICRUSt2 to MetaCyc/KEGG.

## Detailed Summary

### Diversity
- Unique ASVs: HTN 3,026 (34.47%), HTE 1,610 (18.34%), HTO 1,428 (16.27%).
- HTN had elevated richness and diversity vs HC; HC, HTO, HTE all lower Chao1 than HTN (P<0.05); HTE lower Shannon than HTN (P<0.05). The abstract states the reduction was greater in hyperthyroidism.

### Composition
- Phylum: vs HC, Firmicutes increased in HTN and decreased in HTO; Actinobacteriota increased in HTO; Proteobacteria trended upward from HC to HTN to dysthyroid HT.
- Genus: vs HTN and HC, HTE and HTO had increased Bifidobacterium and decreased Lactobacillus and Blautia. HTE: Streptococcus, Clostridium sensu stricto_1 and Agathobacter decreased; Escherichia-Shigella and Stenotrophomonas increased. HTO vs HTN: Ligilactobacillus decreased; Streptococcus and Klebsiella increased.
- Effect sizes and p-values for these genus differences are shown only in figures.

### LEfSe
- HTO: Clostridium sensu stricto_1.
- HTE: Fusicatenibacter (results and conclusions). The abstract instead says "Fusobacterium", and the discussion conflates the two genera, an internal inconsistency.
- HTN: Firmicutes, Lactobacillus, Ligilactobacillus, Escherichia-Shigella, HT002, Agathobacter.

### Correlations (HT patients, Spearman)
- Clostridium sensu stricto_1: TPO-Ab r=0.21 (P<0.05); FT3 r=-0.29 (P<0.01).
- TRAb vs Klebsiella r=-0.29 (P<0.01).
- TPO-Ab vs Stenotrophomonas r=0.22 (P<0.05); vs Bacteroides r=-0.29 (P<0.01); vs Collinsella r=-0.23 (P<0.05).
- FT3 vs Escherichia-Shigella r=-0.25 (P<0.05); vs Streptococcus r=-0.28 (P<0.01).
- These are weak correlations (|r| 0.21 to 0.29); it is not stated whether they survive the described FDR correction.

### Predicted function (PICRUSt2)
- HTN: higher "fatty acid salvage" and "stilbenoid, diarylheptanoid and gingerol biosynthesis".
- HTE: higher "L-tyrosine degradation I" and "renin-angiotensin system".
- HTO: lower proportion of bile-acid metabolism pathways.

### Internal inconsistencies to flag
- Title "metagenomic" vs 16S amplicon methods.
- Fusobacterium (abstract) vs Fusicatenibacter (results).
- The discussion states Clostridium sensu stricto_1 was higher in euthyroid than hypothyroid HT, while LEfSe names it the hypothyroid marker.
- Table 1 as extracted lists HTN median TPO-Ab 0.60 IU/mL (IQR 0.40 to 21.45), below the 5.61 IU/mL reference cutoff, despite antibody-positive inclusion criteria (possible Tg-Ab-only positives or a table error).
- Limitations say levothyroxine effects were "eliminated", while patients are described as newly diagnosed; treatment status is not tabulated.

### Authors' stated limitations
Small sample; short duration of HT hyperthyroidism and sampling window; cross-sectional, so no causal inference; diet and defecation frequency not controlled; feces only (no mucosal or saliva samples); recommend shotgun metagenomics and metabolomics.

## Relevance to WikiBiome

- [[hashimotos-thyroiditis]]: the only study in this batch to include the hyperthyroid (destructive thyroiditis) phase of HT.
- [[bifidobacterium]], [[lactobacillus]], [[blautia]], [[fusicatenibacter]], [[streptococcus]], [[klebsiella]], [[bacteroides]], [[collinsella]]: direction-of-change and correlation data by thyroid state.
- [[bile-acid-metabolism]]: predicted (not measured) reduction in HTO.
- Stratified design parallels [[liu-2020-gut-microbiota-hashimotos-euthyroid-hypothyroid]].

## Relevance to Cureva

- If thyroid functional state drives large microbiome differences, any HT intervention study must stratify by state; pooled "HT signatures" may mostly reflect the mix of thyroid states.
- No intervention tested; Clostridium sensu stricto_1 and bile-acid hypotheses are speculative and drawn by the authors from other diseases.

## Contradictions / Tensions

- Bifidobacterium **increased** in dysthyroid HT here, versus **decreased** in [[cayres-2021-gut-microbiota-intestinal-permeability-hashimotos]] and in the AITD pool of [[gong-2021-gut-microbiota-autoimmune-thyroid-disease-meta-analysis]].
- Euthyroid HT richness **higher** than controls here, but [[liu-2020-gut-microbiota-hashimotos-euthyroid-hypothyroid]] found all HT (including euthyroid) lower than controls.
- Blautia decreased in dysthyroid HT here; Zhao 2018 (via [[sawicka-gutaj-2022-microbiota-autoimmune-thyroid-diseases-systematic-review]]) reported Blautia increased in HT.

## Open Questions

- Are the groups confounded by sex and smoking (HTN 68% male, 48% smokers)?
- Do the weak taxon-hormone correlations survive FDR correction and adjustment for sex, smoking and treatment?
- Would shotgun metagenomics or metabolomics confirm the predicted bile-acid and tyrosine pathway differences?
