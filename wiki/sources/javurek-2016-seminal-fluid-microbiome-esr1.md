---
title: "Javurek 2016 — Discovery of a Novel Seminal Fluid Microbiome and Influence of Estrogen Receptor Alpha Genetic Status"
type: source
created: 2026-04-19
updated: 2026-04-19
authors: [Angela B. Javurek, William G. Spollen, Amber M. Mann Ali, Sarah A. Johnson, Dennis B. Lubahn, Nathan J. Bivens, Karen H. Bromert, Mark R. Ellersieck, Scott A. Givan, Cheryl S. Rosenfeld]
corresponding_author: "Cheryl S. Rosenfeld"
corresponding_email: "rosenfeldc@missouri.edu"
institution: "University of Missouri, Columbia"
year: 2016
journal: "Scientific Reports"
doi: "10.1038/srep23027"
pmid: ""
evidence_level: animal-model
sample_size: "WT fecal=12, ESR1 KO fecal=11, WT seminal fluid=10, ESR1 KO seminal fluid=10"
tags: [seminal-fluid-microbiome, estrogen-receptor, prostate-cancer, male-reproductive-health, ESR1, P-acnes, Lachnospiraceae, Christensenellaceae, dysbiosis]
library_category: causal
platform: both
condition: "erectile dysfunction"
karen_brain_primitives: [1, 7, 9]
metals_discussed: []
taxa_discussed: [propionibacterium-acnes, lachnospiraceae, christensenellaceae, bacteroides, fusobacteria, streptococcus, staphylococcus, corynebacterium, lactobacillus, ruminococcus, dehalobacterium, sutterella, oscillospira, parabacteroides, coprococcus, clostridium, rikenellaceae, acinetobacter, neisseriaceae, peptoniphilus, xanthomonadaceae, anaeroccocus, finegoldia]
key_findings:
  - "Seminal vesicles harbor a unique microbiome distinct from the fecal microbiome, with 593 OTUs found only in seminal fluid"
  - "Propionibacterium acnes is significantly more abundant in seminal fluid of WT vs ESR1 KO mice (P < 0.0007), correlating with higher prostate cancer incidence"
  - "ESR1 gene status influences both seminal fluid and fecal microbiome composition, with Lachnospiraceae and Christensenellaceae enriched in ESR1 KO mice"
keystone: false
stub: false
---

## Key Findings

- **Seminal vesicles harbor a unique microbiome** (seminal fluid microbiome, SFM) that is compositionally distinct from the fecal microbiome in the same animals, with only 285 of 2,690 total OTUs shared between the two compartments ([[javurek-2016-seminal-fluid-microbiome-esr1]], animal model).
- ***Propionibacterium acnes* is significantly more abundant in the SFM of wild-type (WT) mice** compared to estrogen receptor alpha knockout (ESR1 KO) mice (P < 0.0007), and WT mice show greater prostate cancer incidence in certain genetic backgrounds ([[javurek-2016-seminal-fluid-microbiome-esr1]], animal model).
- **ESR1 gene status shapes both the SFM and fecal microbiome composition**, with ESR1 KO males showing enrichment of *Lachnospiraceae* and *Christensenellaceae* — families previously linked to obesity and metabolic disruption in these animals ([[javurek-2016-seminal-fluid-microbiome-esr1]], animal model).
- **The SFM is dominated by Proteobacteria, Actinobacteria, Fusobacteria, and Firmicutes**, distinct from the Firmicutes/Bacteroidetes dominance of fecal samples, likely reflecting the unique biochemical environment (fructose-rich, slightly basic pH ~7.2) of seminal fluid ([[javurek-2016-seminal-fluid-microbiome-esr1]], animal model).
- **Metabolic pathway correlations differ by genotype**: in WT males, increased *P. acnes* abundance correlated with greater oxidative phosphorylation — a pathway that generates reactive oxygen species and may increase prostate cancer risk ([[javurek-2016-seminal-fluid-microbiome-esr1]], animal model).

## Methods

- **Study design:** Animal model study using wild-type (WT) and estrogen receptor alpha knockout (ESR1 KO) male mice.
- **Sample collection:** Fecal and seminal fluid samples collected from adult males aged 3–13 months. WT fecal n=12, ESR1 KO fecal n=11, WT SFM n=10, ESR1 KO SFM n=10.
- **Sequencing:** 16S rRNA gene sequencing (V4 region) on Illumina MiSeq platform. Reads clustered at 97% identity against Greengenes database v13_5 using QIIME v1.8.
- **Analysis:** Alpha diversity (Chao1, Shannon), beta diversity (PCoA, PERMANOVA), LEfSe for differential abundance, metagenomeSeq for OTU-level genotype comparisons, PICRUSt for predicted metabolic pathway analysis, Kendall rank correlations for taxon–pathway associations.
- **Controls:** Fecal samples from same animals served as within-animal comparison to establish the SFM as a distinct community.

## Detailed Summary

This study provides the first characterization of the seminal fluid microbiome (SFM) as a distinct microbial community in mice. The seminal vesicles produce approximately 50–70% of the seminal fluid, which is slightly basic (pH < 7.2) and enriched with fructose, proteins, enzymes, mucus, vitamin C, flavins, phosphorylcholine, and prostaglandins — creating a unique niche for microorganisms distinct from the gut.

**SFM vs. fecal microbiome:** Using 16S rRNA sequencing, the authors identified 2,690 total OTUs across both compartments. Only 285 OTUs were shared; 593 were unique to seminal fluid and 1,812 were unique to feces. PCoA analysis confirmed distinct clustering by sample type (p = 0.0001 by PERMANOVA). The SFM was less species-rich and less diverse than the fecal community. LEfSe analysis showed that Bacilli, Proteobacteria, Gammaproteobacteria, Actinobacteria, Cyanobacteria, Alphaproteobacteria, and Betaproteobacteria characterized the SFM, while Deferribacteres, TM7, Tenericutes, Verrucomicrobia, Deltaproteobacteria, Erysipelotrichia, Clostridia, Bacteroidetes, and Bacteroidia were fecal-dominant.

**ESR1 genotype effects on SFM:** While the majority of OTUs occurred in both genotypes, metagenomeSeq identified several differentially abundant taxa. *Propionibacterium acnes* was significantly more prevalent in WT seminal fluid (P < 0.0007). Other genera more plentiful in WT SFM included *Acinetobacter*, *Corynebacterium*, *Streptophyta*, *Staphylococcus*, and *Neisseriaceae*. In ESR1 KO SFM, *Turicibacter*, *Rhodocyclaceae*, *Streptococcus*, and *Xanthomonadaceae* were more abundant.

**ESR1 genotype effects on fecal microbiome:** WT fecal samples were enriched with *Ruminococcus*, *Dehalobacterium*, *Dorea*, *Sutterella*, and *Oscillospira*. ESR1 KO fecal samples showed greater abundance of *Parabacteroides*, *Coprococcus*, and *Clostridium*. Two *Lachnospiraceae* members were increased in ESR1 KO fecal samples — this bacterial family is associated with increased body weight and hyperglycemia in germ-free ob/ob mice. *Christensenellaceae* was also enriched in ESR1 KO feces, and *Rikenellaceae* was the top overexpressed OTU in older mice regardless of genotype.

**Prostate cancer connection:** *P. acnes* is the causative agent in men for chronic prostatitis that can culminate in prostate cancer. The seminal fluid may serve as a storage pool for *P. acnes*, which may incite infection or cancer only after reaching the prostate gland. WT and ESR1 KO mice typically do not develop prostate cancer, but when bred with TRansgenic Adenocarcinoma of Mouse Prostate (TRAMP) mice, ESR1 KO/TRAMP mice were less likely to develop aggressive prostate cancer compared to WT/TRAMP mice (5% vs. 19% incidence). The decreased prostate cancer in ESR1 KO mice may be due to lower *P. acnes* abundance in their seminal fluid.

**Metabolic pathway correlations:** In WT males, *P. acnes* abundance positively correlated with oxidative phosphorylation, amino acid metabolism, pantothenate, and CoA biosynthesis. In ESR1 KO males, *P. acnes* correlated with amino acid metabolism but was negatively correlated with signal transduction. The *P. acnes* genome encodes all essential components of oxidative phosphorylation, which may increase reactive oxygen species, free radical damage, and cancer risk.

**Age effects:** The SFM did not change with age, while the fecal microbiome was altered by age (p = 0.01 by PERMANOVA). This suggests the seminal fluid environment may be more stable over time.

**Paternal transmission implications:** The SFM composition could influence female reproductive partners, offspring health (via developmental origins of health and disease, DOHaD), and future descendants through epigenetic transmission via seminal fluid.

## Relevance to WikiBiome

This study is relevant to several WikiBiome domains:

- **[[propionibacterium-acnes]]** — Establishes *P. acnes* as a dominant member of the seminal fluid microbiome with direct relevance to prostate cancer risk. Expands the organism's known ecological niches beyond skin.
- **[[lachnospiraceae]]** — Provides evidence that this family is enriched in ESR1 KO mice and linked to metabolic disruption (obesity, hyperglycemia), adding to the picture of Lachnospiraceae as a metabolically relevant taxon.
- **[[christensenellaceae]]** — Documents enrichment in ESR1 KO mice, contributing to the phenotypic picture of these mutant animals.
- **Seminal fluid microbiome** as a concept — This is the first study to confirm the existence of a distinct SFM in mice, establishing a new microbial niche relevant to male reproductive health.
- **Estrogen receptor and microbiome** — Demonstrates that host estrogen signaling (via ESR1) shapes both gut and reproductive tract microbial communities, relevant to the [[estrobolome]] concept and broader estrogen–microbiome interactions.

## Relevance to Cureva

- **Erectile dysfunction signature** — While this study does not directly address ED, the characterization of the seminal fluid microbiome and its sensitivity to estrogen receptor status is foundational for understanding male reproductive microbial ecology. Estrogen dysregulation and *P. acnes*-driven inflammation are potential mechanistic links to ED through chronic prostatitis and pelvic inflammatory pathways.
- **Primitive 7 (Estrobolome)** — ESR1 genotype directly shapes the SFM composition, confirming that estrogen signaling is a determinant of reproductive tract microbial ecology.
- **Primitive 1 (Metals as Selective Pressures)** — The study does not directly measure metals, but the distinct biochemical environment of seminal fluid (fructose-rich, basic pH) represents a selective pressure that shapes microbial community composition differently from the gut.
- **Primitive 9 (Oxygen State)** — The SFM is dominated by aerobic and facultatively anaerobic organisms (Proteobacteria, Actinobacteria), unlike the anaerobe-dominated gut, indicating that oxygen availability is a key ecological determinant of this niche.
- **Potential STOP signal:** Estrogen-modulating therapies in men could inadvertently shift the SFM toward or away from *P. acnes* dominance, with implications for prostate cancer risk. This warrants investigation before recommending hormonal interventions for ED.

## Contradictions / Tensions

- This is an **animal model study** using ESR1 knockout mice. Translation to human male reproductive microbiome and ED is indirect. Prior human studies have identified bacteria in semen samples (including *Peptoniphilus*, *Anaerococcus*, *Finegoldia*, *Corynebacterium*, *Enterococcus*, *Lactobacillus*, *Gardnerella*, *Prevotella*, and *Escherichia coli*), but it is unclear whether these originate from seminal vesicles or elsewhere in the urogenital tract.
- The study uses 16S rRNA sequencing, which provides taxonomic but not functional resolution. The metabolic pathway predictions are inferred via PICRUSt, not measured directly.
- The connection to erectile dysfunction is indirect — the study is filed under ED but is primarily about seminal fluid microbiome characterization and prostate cancer risk via *P. acnes*. The relevance to ED is through shared male reproductive microbial ecology and estrogen signaling pathways.

## Open Questions

1. **Does a distinct seminal fluid microbiome exist in humans**, and does it differ from urethral, prostatic, and bladder microbiomes?
2. **Does ESR1 polymorphism status in human males** correlate with SFM composition or ED risk?
3. **Can *P. acnes* abundance in seminal fluid serve as a biomarker** for prostate cancer risk or chronic prostatitis?
4. **Does the SFM composition directly influence erectile function** through inflammatory pathways, or is the relationship mediated entirely through prostate health?
5. **What metals are present in seminal fluid**, and do they exert selective pressure on the SFM analogous to gut metal ecology?
