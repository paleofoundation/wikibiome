---
title: "Perez-Prieto 2024 — Gut Microbiome in Endometriosis: A Cohort Study on 1000 Individuals"
type: source
created: 2026-04-19
updated: 2026-04-19
authors: [Inmaculada Perez-Prieto, Eva Vargas, Eduardo Salas-Espejo, Kreete Lull, Analuce Canha-Gouveia, Laura Antequera Perez, Juan Fontes, Andres Salumets, Reidar Andreson, Oliver Aasmets, Katrine Whiteson, Elin Org, Signe Altmae]
corresponding_author: "Inmaculada Perez-Prieto"
corresponding_email: "inmaperezpr@ugr.es"
institution: "University of Granada, Spain"
orcid: ""
year: 2024
journal: "BMC Medicine"
doi: "10.1186/s12916-024-03503-y"
pmid: ""
evidence_level: case-control
sample_size: "n=1000 (136 endometriosis, 864 controls)"
tags: [endometriosis, gut-microbiome, metagenomics, estrobolome, shotgun-sequencing, Estonian-Microbiome-cohort]
library_category: signatures
platform: both
condition: "endometriosis"
karen_brain_primitives: [1, 5, 7]
metals_discussed: []
taxa_discussed: [clostridium, acinetobacter, ruminococcus, roseburia, prevotella-copri, bacteroides, fusobacterium, lachnospiraceae, paraprevotella, parabacteroides]
key_findings:
  - "No significant differences in gut microbial alpha- or beta-diversity between endometriosis and controls after FDR correction"
  - "28 bacteria showed nominal differential abundance but none survived multiple testing correction"
  - "Estrobolome-associated enzyme sequences (beta-glucuronidases, beta-galactosidases) showed no significant differences between groups"
keystone: false
---

## Key Findings

- **No significant alpha-diversity differences** between women with and without endometriosis (Shannon diversity index and observed richness; all p-values > 0.05) ([[perez-prieto-2024-gut-microbiome-endometriosis-cohort-1000]], case-control, n=1000).
- **No significant beta-diversity differences** after FDR correction (PERMANOVA on species and KO profiles: both R^2 < 0.0007, p-values > 0.05). Stool consistency (Bristol scale), gut emptying frequency, antibiotics frequency, age, and BMI were stronger drivers of community variation than endometriosis status.
- **28 bacterial species showed nominal differential abundance** (ANCOM-BC, p < 0.05 before correction): *Clostridium* sp. CAG:307 (logFC = 0.595, p = 0.019) and *Acinetobacter* sp. CAG:196 (logFC = 0.745, p = 0.017) were enriched in endometriosis; *Ruminococcus* sp. CAG:177 (logFC = -0.420, p = 0.023) and *Roseburia* sp. CAG:45 (logFC = -0.369, p = 0.005) were decreased. **None survived Benjamini-Hochberg FDR correction** (all adjusted p > 0.05).
- **12 KEGG orthologs showed nominal differential abundance** in functional analysis, including decreased nitrogen metabolism (logFC = -0.176, p = 0.016) and oxidative phosphorylation (logFC = -0.040, p = 0.025), and increased fatty acid biosynthesis (logFC = 0.145, p = 0.035) and amino acid metabolism (logFC = 0.049, p = 0.016) in endometriosis. **None survived FDR correction.**
- **Fatty acid synthase (FASN)** KO was nominally increased in endometriosis — a gene linked to estrogen metabolism and cell proliferation in endometrial tissue. However, this too did not survive multiple testing correction.
- **Estrobolome pathway analysis** examining 156 estrogen pathway-related enzymes (beta-glucuronidases, beta-galactosidases) found **no significant differences** in total read counts or individual enzyme abundances between groups (all p > 0.05 after FDR correction).
- **Sensitivity analysis** excluding women at menopause (>50 years; n=591 remaining: 66 endometriosis, 525 controls) confirmed all null findings.
- **PAM clustering** identified two enterotypes driven by *Prevotella copri* and *Bacteroides* spp.; 72% of samples fell in the *Bacteroides* enterotype and 28% in the *P. copri* enterotype. Enterotypes were **not correlated** with endometriosis status but were associated with BMI and stool consistency.

## Methods

- **Study design:** Case-control study nested within the **Estonian Microbiome cohort** (EstMB; n=2,509 total, established 2017 with the Estonian Biobank/EaBB).
- **Population:** 1,000 women — 136 with endometriosis (confirmed by diagnostic laparoscopy per electronic health records, ICD-10) and 864 controls without endometriosis or any of the most prevalent comorbidities.
- **Sample collection:** Fresh stool samples collected 2017-2019 immediately after defecation using a sterile Pasteur pipette; stored at 4 degrees C, then -80 degrees C until processing.
- **Sequencing:** Shotgun metagenomics using Illumina NextSeq (paired-end, 2x150 bp). DNA extracted with QIAamp DNA Stool Mini Kit. Average of 6,942,273 species reads and 4,913,880 KO reads per sample.
- **Taxonomic assignment:** MetaPhlAn and NCBI nr database via DIAMOND. Identified 890 species and 1,629 KOs after filtering (prevalence > 10%, relative abundance > 0.01%).
- **Statistical analysis:** Alpha-diversity (Shannon, richness) via linear mixed-effects models; beta-diversity via PERMANOVA on Bray-Curtis dissimilarity; differential abundance via ANCOM-BC; functional pathway analysis via ALDEx2. Confounders: age, BMI, antibiotics, M01A/A06/A02BC consumption, gut emptying frequency, stool consistency. FDR correction via Benjamini-Hochberg.
- **Estrobolome analysis:** 279 unique microbial beta-glucuronidase enzymes from the Human Microbiome Project database mapped to metagenomic reads via DIAMOND; 156 enzymes with accessible IDs included. Total counts compared (Mann-Whitney U) and individual enzymes compared (ALDEx2).

## Detailed Summary

This is the **largest metagenome study on endometriosis to date** and the **first to use whole shotgun metagenomics** (capturing bacteria, viruses, fungi, protozoa, and archaea) rather than 16S rRNA gene sequencing. The Estonian Microbiome cohort provides a well-characterized, population-based setting with extensive digital health data linkage.

**Microbial landscape:** The most predominant phyla were *Bacteroidetes* (45.15%) and *Firmicutes* (39.86%), followed by *Proteobacteria* (7.07%), *Actinobacteria* (1.53%), and *Verrucomicrobia* (0.82%). Most abundant genera: [[bacteroides]], *Prevotella*, [[clostridium]], [[alistipes]], and [[faecalibacterium]]. Most abundant species: *Prevotella copri*, *Bacteroides vulgatus*, *Faecalibacterium prausnitzii*, *Bacteroides plebeius*, and *Alistipes putredinis*.

**Diversity findings:** Neither alpha-diversity (Shannon, richness) nor beta-diversity (PCoA on Bray-Curtis) showed significant differences between endometriosis and controls after adjusting for confounders. The strongest beta-diversity associations were with stool consistency (R^2 > 0.03), gut emptying frequency (R^2 > 0.01), antibiotics frequency (R^2 > 0.008), age (R^2 > 0.004), and BMI (R^2 > 0.003) — all far exceeding the endometriosis effect size.

**Differential abundance — nominal findings:** Before FDR correction, *Clostridium* sp. and *Acinetobacter* sp. were enriched in endometriosis while *Ruminococcus* sp. and *Roseburia* sp. were depleted. These findings align directionally with smaller prior studies but did not survive correction for the large number of comparisons.

**Functional analysis:** 12 KOs showed nominal differential abundance. Notably, nitrogen metabolism and oxidative phosphorylation KOs were decreased, while fatty acid biosynthesis and amino acid metabolism KOs were increased in endometriosis. The FASN (fatty acid synthase) ortholog was nominally increased — relevant because FASN expression in endometrial tissue is regulated by estradiol and progesterone and linked to proliferative cell behavior. However, no functional differences survived FDR.

**Estrobolome:** Despite the estrogen-recirculation hypothesis being central to endometriosis pathogenesis, this study found **no differences** in beta-glucuronidase or beta-galactosidase enzyme sequences between groups. This is the most direct test of the gut estrobolome in endometriosis to date and it came back null.

**Enterotypes:** PAM clustering revealed two enterotypes (*P. copri*-dominant vs. *Bacteroides*-dominant). Enterotype was associated with BMI and stool consistency but not with endometriosis. This suggests that the gut ecosystem's broad structural organization is not disrupted in endometriosis.

**Confounders:** Study groups significantly differed in age at sample collection, M01A (anti-inflammatory/anti-rheumatic drugs), A06 (drugs for constipation), and A02BC (proton pump inhibitor) consumption — all higher in the endometriosis group. These were included as covariates.

## Relevance to WikiBiome

This study is critically important for the [[endometriosis]] entity page because it **challenges the prevailing narrative** that endometriosis is associated with gut dysbiosis. Most prior studies used 16S rRNA sequencing with small sample sizes (largest prior: n=264). This shotgun metagenomics study with n=1,000 found no compositional or functional differences after rigorous statistical correction.

Key implications for WikiBiome content:

- The [[estrobolome]] concept page should note that the most powered direct test of gut beta-glucuronidase differences in endometriosis found null results.
- Entity pages for [[clostridium]], [[roseburia]], [[ruminococcus]], and [[acinetobacter]] should note the nominal (non-significant after correction) associations.
- The [[bacteroides]] and *Prevotella copri* enterotype finding contributes to general microbiome landscape knowledge but does not connect to endometriosis specifically.
- This study supports a cautious framing on WikiBiome: endometriosis-microbiome associations remain preliminary, and the gut microbiome may not be as directly involved as smaller studies suggested.

## Relevance to Cureva

This study has important implications for the [[endometriosis-signature]] page:

- **Taxonomic confidence should be tempered.** If the signature currently relies on gut microbiome compositional data, this large null study weakens that evidence. The taxonomic layer confidence should reflect this tension.
- **Estrobolome layer needs reassessment.** The null finding on beta-glucuronidase differences challenges the mechanistic pathway from gut dysbiosis -> estrogen recirculation -> endometriosis. This does not invalidate the estrobolome concept entirely (uterine microbiome may be more relevant), but it weakens the gut-specific estrobolome arm.
- **Intervention implications:** Interventions targeting gut microbiome composition to manage endometriosis (e.g., probiotics, dietary modifications for gut dysbiosis) lose support from this study. Interventions should be evaluated on their own clinical trial evidence rather than assumed to work through a gut dysbiosis mechanism.
- **STOP signal potential:** If any current Cureva recommendations assume gut dysbiosis as a primary driver of endometriosis, this study provides evidence to flag those assumptions as weakly supported.

## Contradictions / Tensions

- **Contradicts smaller 16S studies** (references 52-54 in paper): Prior studies by Svensson 2021 (n=66+198), Shan 2021, and Ata 2019 reported microbial differences (e.g., higher *Parabacteroides*, lower *Paraprevotella*) between endometriosis and controls. This larger, more technically rigorous study (shotgun vs. 16S, n=1000 vs. <264) found no differences after FDR correction. Per the Supersession Protocol (Section 2e), this study's findings should take primary position given its larger sample size and superior methodology within the same evidence level (case-control).
- **Contradicts the gut estrobolome hypothesis for endometriosis:** While Baker 2017 and others have proposed that gut microbial beta-glucuronidase activity drives estrogen recirculation in endometriosis, this study's direct test found no differences in estrobolome enzyme sequences. This tension must be noted on the [[estrobolome]] concept page.
- **Consistent with** a prior 16S marker gene study (reference 52, Ata 2019) that also found no distinct microbial profiles, suggesting the null finding is not isolated.
- **Does not address uterine/endometrial microbiome:** The study explicitly notes that prior work has detected microbial differences at the disease site (uterine, vaginal, cervical). The null gut finding does not contradict uterine microbiome findings — it constrains the *gut-specific* arm of the dysbiosis hypothesis.

## Open Questions

1. **Is the uterine/endometrial microbiome more relevant than the gut microbiome for endometriosis pathogenesis?** This study's null gut findings, combined with positive uterine microbiome studies (references 48-50), suggest site-specific rather than systemic dysbiosis.
2. **Could longitudinal sampling reveal temporal gut microbiome shifts** that cross-sectional sampling misses? Endometriosis is a chronic condition with cyclical hormone fluctuations — a single stool sample may not capture relevant dynamics.
3. **Does disease stage matter?** The study did not stratify by ASRM stage (I-IV). Stage 3/4 endometriosis may have different microbiome associations than stage 1/2.
4. **Are the nominally significant taxa (Clostridium, Acinetobacter, Ruminococcus, Roseburia) worth pursuing in larger, multi-cohort studies?** The effect sizes were small but directionally consistent with some prior work.
5. **Does the gut estrobolome operate differently in endometriosis subtypes** (superficial peritoneal vs. deep infiltrating vs. ovarian endometrioma)? This study pooled all subtypes.
6. **What role do gut-derived metabolites play** independent of compositional differences? Functional metagenomics (metabolomics, transcriptomics) might reveal differences invisible to DNA-level shotgun sequencing.
