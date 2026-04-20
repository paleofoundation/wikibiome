---
title: "Maes 2026 — Functional Shotgun Metagenomic Insights into Gut Microbial Pathway and Enzyme Disruptions Linking Metabolism, Affect, Cognition, and Suicidal Ideation in Major Depressive Disorder"
type: source
created: 2026-04-19
updated: 2026-04-19
authors: [Michael Maes, Abbas F. Almulla, Asara Vasupanrajit, Ketsupar Jirakran, Chavit Tunvirachaisakul, Annabel Maes, Prangwalai Chanchaem, Pavit Klomkliew, Sunchai Payungporn, Yingqian Zhang]
corresponding_author: "Yingqian Zhang"
corresponding_email: "18190727710@163.com"
institution: "International NIMETOX Center, Sichuan Provincial Center for Mental Health, Sichuan Provincial People's Hospital / Chulalongkorn University"
year: 2026
journal: "Acta Neuropsychiatrica"
doi: "10.1017/neu.2026.10056"
pmid: "not yet verified"
evidence_level: case-control
sample_size: "n=46 (23 MDD, 23 HC)"
tags: [major-depressive-disorder, gut-microbiome, shotgun-metagenomics, NIMETOX, suicidal-ideation, cognitive-impairment, dysbiosis, short-chain-fatty-acids, barrier-function, oxidative-stress]
library_category: signatures
platform: both
condition: "major depressive disorder"
karen_brain_primitives: [1, 2, 4, 5, 9]
metals_discussed: [iron, cobalamin]
taxa_discussed: [ruminococcus-gnavus, veillonella-rogosae, anaerobutyricum-hallii, vescimonas-coprocola, faecalibacterium-prausnitzii, faccalibacillus-intestinalis, coprococcus, lacrimispora-amygdalina, blautia-massiliensis, granulicatella, escherichia-coli]
key_findings:
  - "MDD enriched taxa (Ruminococcus gnavus, Veillonella rogosae, Anaerobutyricum hallii) reflect a dysbiosis enterotype linked to leaky gut and NIMETOX mechanisms"
  - "Pathway and gene scores explain 29.8–59.4% of the variance in depression severity, suicidal ideation, cognitive impairment, and illness recurrence"
  - "MDD pathways aggravate NIMETOX via folate transformations, peptidoglycan biosynthesis, formaldehyde assimilation, and serotonin degradation"
keystone: false
---

## Key Findings

- **MDD-enriched taxa reflect a dysbiosis enterotype** linked to gut barrier disruption and NIMETOX (neuro-immune, metabolic, oxidative stress) mechanisms. The top discriminant taxa in the multivariate model were *Ruminococcus gnavus*, *Veillonella rogosae*, and *[[anaerobutyricum-hallii|Anaerobutyricum hallii]]*, while protective taxa (*[[vescimonas-coprocola|Vescimonas coprocola]]*, *Coprococcus*, *[[faecalibacterium-prausnitzii|Faecalibacterium prausnitzii]]*, *Faccalibacillus intestinalis*) were enriched in controls ([[maes-2026-shotgun-metagenomics-mdd-nimetox]], case-control, n=46).
- **Pathway analysis demonstrates loss of barrier protection, antioxidant capacity, and SCFA production** in MDD. Enriched MDD pathways include folate transformations I, peptidoglycan biosynthesis IV (*Enterococcus faecium*), formaldehyde assimilation, and serotonin degradation. Control-enriched pathways include mycolate biosynthesis, 6-hydroxymethyl-dihydropterin diphosphate biosynthesis, and propanoate fermentation to 2-methylbutanoate ([[maes-2026-shotgun-metagenomics-mdd-nimetox]], case-control, n=46).
- **Gene and pathway scores explain a substantial proportion of clinical variance**: 29.8% of variance in overall severity of depression (OSOD), 32.2% of variance in suicidal ideation (SI), and 59.4% of variance in Stroop cognitive test scores. The pathways PWY 5989 (stearate production) and PWY 7254 were significant predictors of OSOD ([[maes-2026-shotgun-metagenomics-mdd-nimetox]], case-control, n=46).
- **Enzyme family profiling identified branched-chain amino acid (BCAA) synthesis, dephospho-CoA kinase, and beta-alanine metabolism** as the top three gene families associated with MDD (EC 1.1.1.86; EC 2.7.1.25; EC 4.1.1.11), which may disrupt neurotransmitter equilibrium and mitochondrial function ([[maes-2026-shotgun-metagenomics-mdd-nimetox]], case-control, n=46).
- **Protective taxa in controls indicate an anti-inflammatory ecosystem** with barrier-supporting properties. *Vescimonas coprocola* possesses anti-inflammatory barrier-supporting properties; *Coprococcus* ferments dietary fibre to SCFAs (butyrate); *F. prausnitzii* augments tight junctions and suppresses NF-kB; *F. intestinalis* contributes to gut barrier integrity and SCFA synthesis ([[maes-2026-shotgun-metagenomics-mdd-nimetox]], case-control, n=46).

## Methods

- **Study design**: Case-control study comparing 23 MDD patients and 23 healthy controls (HC), recruited from the outpatient clinic of the Department of Psychiatry at King Chulalongkorn Memorial Hospital, Bangkok, Thailand.
- **Inclusion criteria**: MDD patients aged 19–54 of both sexes, diagnosed via DSM-5 criteria, in an acute depressive episode. Healthy controls matched on age, sex, BMI.
- **Exclusion criteria**: Assessed via M.I.N.I. for Axis I disorders; exclusions included HAMD, total bilirubin BSIT, STAI, CORS (deriving OSOD/ROI per protocol). Assessments included FEAHM, Stroop test, recurrence of illness index, and adverse childhood experiences (ACE) measures.
- **Metagenomics**: Shotgun metagenomics with DNA extracted from faecal samples (20 mg) using ZymoBIOMICS DNA Miniprep Kit. DNA libraries prepared with paired-end 2x150 bp sequencing on DNBSEQ-G400 platform. Quality control via FastQC v0.28.1, adapter removal via Fastp, human read filtering via Bowtie2 against hg19, followed by Samtools v1.22 filtering.
- **Taxonomic profiling**: MetaPhlAn v4.0.6 (mpa_vJun23 database, clade-specific marker genes), keeping species with >0.1% relative abundance in ≥5 samples.
- **Functional profiling**: HUMAnN v3.9 aligning reads to species-specific pangenomes (Bowtie2 v2.5.4) then to UniRef90 v201901 via DIAMOND v2.1.9.
- **Statistical analysis**: Random Forest classification (AUC = 0.62 for taxa, 0.67 for gene families), Ridge regression for gene family profiling, multiple regression with pathway and gene scores as predictors of clinical/cognitive outcomes. PERMANOVA on Bray-Curtis dissimilarity (p = 0.2).

## Detailed Summary

### Microbial Diversity and Composition

Overall gut microbiome diversity (alpha and beta) was not significantly different between MDD and HC groups. The Shannon diversity index showed no significant difference (p = 0.27), and PERMANOVA on Bray-Curtis dissimilarity was non-significant (p = 0.2). This is consistent with prior shotgun metagenomic studies showing that compositional differences in MDD are moderate and somewhat inconsistent across populations.

However, the multivariate discriminant analysis revealed meaningful taxon-level differences. The top enriched taxa in MDD were:
- ***Ruminococcus gnavus*** — associated with inflammatory mechanisms, stimulates dendritic-cell TNF-alpha production, breaks down mucus glycans compromising intestinal barrier
- ***Veillonella rogosae*** — associated with inflammatory markers and IBD relapses
- ***Anaerobutyricum hallii*** — Gram-positive anaerobic bacillus synthesising butyrate/propionate but also generating reactive aldehyde intermediates (3-hydroxypropionaldehyde/acrolein) implicated in oxidative stress

The top four protective taxa enriched in controls were:
- ***Vescimonas coprocola*** — anti-inflammatory barrier-supporting properties
- ***Coprococcus*** — Gram-positive anaerobic coccus, ferments dietary fibre to SCFAs (butyrate)
- ***[[faecalibacterium-prausnitzii|Faecalibacterium prausnitzii]]*** — augments tight junctions, elevates IL-10, suppresses NF-kB
- ***Faccalibacillus intestinalis*** — gram-positive anaerobe contributing to gut barrier and SCFA synthesis

### Pathway Analysis

The log2 fold change analysis identified 20 differentially abundant pathways. MDD-enriched pathways included:
- **Folate transformations I** (largest fold change enrichment in MDD)
- **Peptidoglycan biosynthesis IV** (*Enterococcus faecium*)
- **Formaldehyde assimilation I** (serine pathway)
- **Phosphatidate metabolism**
- ***Escherichia coli* serotype O6 O-antigen biosynthesis**

Control-enriched pathways included:
- **Superpathway of mycolate biosynthesis**
- **6-hydroxymethyl-dihydropterin diphosphate biosynthesis II**
- **Propanoate fermentation to 2-methylbutanoate**

The correlation network analysis revealed distinct pathway interaction topologies. The HC network featured catechol degradation II, L-tyrosine biosynthesis, and UDP-N-acetyl-D-glucosamine biosynthesis as central hubs. The MDD network featured LPS biosynthesis, CDP-archaeol biosynthesis, and 7-(3-amino-3-carboxypropyl)-tyrosine biosynthesis as central nodes — pathways that may aggravate NIMETOX.

### Regression Analysis: Pathways Predicting Clinical Outcomes

| Outcome | R² | Key Pathway/Gene Predictors |
|---------|-----|---------------------------|
| OSOD (depression severity) | 0.298 | PWY 5989 (+), PWY 7254 (−) |
| Suicidal ideation (SI) | 0.322 | P105-PWY TCA-cycle (+), PWY 7254 (−) |
| Recurrence of illness (ROI) | 0.157 | PWY 5989 (+) |
| Stroop (cognition) | 0.594 | COBALSYN PWY (−), ACE abuse+neglect (−), PWY 5055 (+) |
| VEGF-SCF (growth factors) | 0.443 | FASYN-ELONG-PWY (+), LACTOSECAT PWY (+), PWY 6936 (−) |
| AIP (atherogenic index) | 0.572 | BMI (+), PWY 6588 (+), PWY 6902 (−), P122 PWY (−) |

PWY 5989 (stearate production) is strongly associated with OSOD and ROI, favouring saturated fatty acid production and increased lipotoxicity — part of the NIMETOX framework. The cobalamin biosynthetic pathway (COBALSYN PWY) was the strongest predictor of Stroop cognitive scores (beta = −0.864), suggesting that microbial cobalamin disruption may compromise B12 levels and contribute to neurocognitive impairment.

### Enzyme Family Analysis (Table 3)

Gene family regression models explained 30.1–63.5% of variance in clinical outcomes. Notably:
- **54.2% of OSOD variance** was explained by four genes involving purine, amino-sugar, and one-carbon metabolism (EC 6.3.5.2, EC 5.4.99.18, EC 1.5.1.5, EC 3.5.99.6)
- **59.2% of ROI variance** was explained by EC 1.17.7.4 and EC 4.3.2.2 (positively) and EC 3.1.26.5 and EC 4.1.2.4 (inversely)
- **56.8% of Stroop variance** was explained by EC 2.1.2.1, EC 3.2.1.89, EC 4.2.1.2, and EC 6.3.1.1

### NIMETOX Framework Integration

The authors position their findings within the NIMETOX (neuro-immune, metabolic, and oxidative stress) framework for MDD pathophysiology. The enriched MDD pathways aggravate NIMETOX through:
1. **Folate transformation disruption** — potentially compromising one-carbon metabolism and methylation
2. **Peptidoglycan biosynthesis** — bacterial cell wall components activating innate immune responses
3. **Formaldehyde assimilation** — toxic aldehyde intermediates
4. **Serotonin degradation** — reducing serotonin availability
5. **LPS biosynthesis** (*E. coli*) — endotoxin-driven inflammation via leaky gut

The protective HC pathways support barrier integrity, SCFA production, and oxidative stress resistance (mycolate biosynthesis, propanoate fermentation, catechol degradation).

## Relevance to WikiBiome

This study informs multiple entity and concept pages:

- **[[ruminococcus-gnavus]]** — Adds functional metagenomic evidence for enrichment in MDD, with mucin degradation and TNF-alpha stimulation as mechanisms. Extends the organism's disease association profile beyond IBD.
- **[[faecalibacterium-prausnitzii]]** — Reinforces its role as a protective taxon depleted in inflammatory/psychiatric conditions, connecting gut barrier integrity to neurocognitive outcomes.
- **[[escherichia-coli]]** — LPS biosynthesis and O-antigen pathways enriched in MDD provide evidence for gram-negative endotoxin-driven [[leaky-gut]] → neuroinflammation axis.
- **[[major-depressive-disorder]]** — Disease entity page gains shotgun metagenomic evidence for gut-brain axis disruption with specific pathway-level resolution.
- **[[cobalamin]]** / **[[vitamin-b12]]** — The COBALSYN pathway as the strongest cognitive predictor (R² contribution to Stroop) connects microbial cobalamin synthesis disruption to neurocognitive deficits.
- **[[nutritional-immunity]]** — The NIMETOX framework overlaps significantly with nutritional immunity concepts: host iron sequestration, barrier defence proteins, and oxidative stress responses.
- **[[short-chain-fatty-acids]]** — Depletion of SCFA-producing taxa (*Coprococcus*, *F. prausnitzii*, *F. intestinalis*) in MDD connects to barrier dysfunction and lost anti-inflammatory signalling.

## Relevance to Cureva

- **Signature development**: Supports building or expanding a **[[major-depressive-disorder-signature]]** with taxonomic layer (enriched: *R. gnavus*, *V. rogosae*, *A. hallii*; depleted: *V. coprocola*, *Coprococcus*, *F. prausnitzii*, *F. intestinalis*) and ecological layer (leaky gut, LPS translocation, oxidative stress, serotonin degradation).
- **Intervention hypotheses**:
  - **Butyrate-producing probiotic restoration** — *F. prausnitzii*, *Coprococcus* supplementation to restore barrier function and SCFA production
  - **Cobalamin pathway support** — given COBALSYN PWY's strong inverse association with cognitive impairment
  - **Folate/one-carbon metabolism support** — given folate transformation pathway enrichment in MDD
- **STOP signals**:
  - **STOP: Iron supplementation in MDD** if elevated LPS biosynthesis and siderophore pathways indicate functional iron redistribution rather than true deficiency (requires further investigation with iron panel data, which this study did not collect)
- **Triangle evidence**: Provides I→f evidence for SCFA-targeted interventions (butyrate supplementation, dietary fibre) affecting barrier function; f→D evidence linking SCFA depletion and barrier dysfunction to depression severity, SI, and cognitive impairment.

## Contradictions / Tensions

- **Alpha/beta diversity non-significant**: This study found no significant differences in overall diversity metrics (Shannon p=0.27, PERMANOVA p=0.2), which contrasts with some earlier amplicon sequencing studies reporting significant beta-diversity differences in MDD ([[maes-2026-shotgun-metagenomics-mdd-nimetox]], case-control). The authors attribute this to shotgun vs. amplicon methodology differences and note that taxon-level and pathway-level differences are more informative than diversity indices.
- **Low discriminatory power of Random Forest**: The ROC AUC of 0.62 for taxa-based classification and 0.67 for gene families indicates limited discriminatory power, suggesting that gut microbiome composition alone is not a strong diagnostic biomarker for MDD.
- **Small sample size**: n=46 total (23 per group) limits statistical power and generalisability. The authors acknowledge this. Cross-validation with larger cohorts is needed.
- **No direct metal measurements**: Despite the NIMETOX framing and iron/cobalamin pathway findings, the study did not measure serum or faecal metal levels, limiting the ability to directly connect metagenomic pathway data to metallomic signatures.
- **Medication confound**: 15 MDD patients were on antidepressants, 3 on atypical antipsychotics, 9 on benzodiazepines. No lithium or mood stabilisers. The authors state no significant effect of medication was found, but the sample is too small to rule out confounding.

## Open Questions

1. **Would direct metallomic measurements** (serum iron, zinc, cobalamin, calprotectin, lactoferrin) in this cohort reveal the expected NIMETOX metal pattern? The pathway data strongly implies metal-dependent disruption but lacks direct confirmation.
2. **Does the *Ruminococcus gnavus* enrichment in MDD share the same metal-dependency profile** as its enrichment in IBD and other inflammatory conditions? If so, this would strengthen cross-condition signature overlap between MDD, IBD, and potentially [[endometriosis]].
3. **Can the COBALSYN pathway deficit be rescued** by targeted B12 supplementation, and would this improve cognitive outcomes in MDD? The regression data (R² = 0.594 for Stroop with COBALSYN as strongest predictor) makes this a high-priority intervention hypothesis.
4. **What is the causal direction** of the folate transformation enrichment in MDD — is it a compensatory response to methylation deficits, or does microbial folate metabolism compete with host folate availability?
5. **Would a larger cohort with shotgun metagenomics** and paired metabolomics confirm the pathway-level findings and improve the weak Random Forest classification performance?
