---
title: "Pruski & Correia 2021 — Direct On-Swab Metabolic Profiling of Vaginal Microbiome Host Interactions During Pregnancy and Preterm Birth"
type: source
created: 2026-04-19
updated: 2026-04-19
authors: [Pamela Pruski, Gonçalo D. S. Correia, Holly V. Lewis, Katia Capuccini, Paolo Inglese, Denise Chan, Richard G. Brown, Lindsay Kindinger, Yun S. Lee, Ann Smith, Julian Sherwood, Julie A. K. McDonald, Simon Cameron, Kate Alexander-Hardiman, Anna L. David, Sarah J. Stock, Jane E. Norman, Vasso Terzidou, T. G. Teoh, Lynne Sykes, Phillip R. Bennett, Zoltan Takats, David A. MacIntyre]
corresponding_author: "Zoltan Takats & David A. MacIntyre"
corresponding_email: "z.takats@imperial.ac.uk; d.macintyre@imperial.ac.uk"
institution: "Imperial College London"
orcid: ""
year: 2021
journal: "Nature Communications"
doi: "10.1038/s41467-021-26215-w"
pmid: ""
evidence_level: prospective-cohort
sample_size: "n=365 women; 1,028 swabs across two cohorts (VMET n=160, 455 swabs; VMET2 n=205, 573 swabs)"
tags: [vaginal-microbiome, metabolomics, preterm-birth, pregnancy, DESI-MS, Lactobacillus, community-state-types, immune-markers, cervicovaginal-fluid, rapid-diagnostics]
library_category: signatures
platform: both
condition: "preterm birth"
karen_brain_primitives: [1, 5, 9]
metals_discussed: []
taxa_discussed: [lactobacillus-crispatus, lactobacillus-iners, lactobacillus-jensenii, lactobacillus-gasseri, gardnerella-vaginalis, atopobium-vaginae, prevotella, megasphaera, sneathia, streptococcus-agalactiae]
key_findings:
  - "DESI-MS on cervicovaginal swabs can simultaneously predict vaginal microbiota composition and host inflammatory status without sample preparation"
  - "88 metabolite features significantly discriminate Lactobacillus-dominated from Lactobacillus-depleted vaginal communities across two independent cohorts"
  - "Vaginal microbiota instability and innate immune activation (IL-1β, MBL) predicted by DESI-MS associate with preterm birth, including in women with cervical cerclage"
keystone: false
---

## Key Findings

- **DESI-MS metabolic profiling of cervicovaginal swabs** enables rapid, preparation-free characterisation of the vaginal metabolome, simultaneously predicting both vaginal microbiome composition and host inflammatory/immune status ([[lactobacillus-crispatus]], [[lactobacillus-iners]], [[gardnerella-vaginalis]], [[atopobium-vaginae]]; prospective cohort, n=365 women, 1,028 swabs).
- **88 metabolite features** (out of 111 modelled) significantly discriminated between *Lactobacillus*-dominated (LDOM) and *Lactobacillus*-depleted (LDEPL) vaginal states in two independent pregnancy cohorts (VMET: AUC 94.1%, sensitivity 62.0, specificity 97.0; VMET2: AUC 96.0, sensitivity 54.5, specificity 95.7).
- **Discriminatory metabolites** include thiomalic acid, docosanoic acid (C22:0), leucyl-serine, and lignoceric acid (C24:0) — all higher in LDEPL communities — and amino acids (leucine, aspartic acid, glutamate) lower in LDEPL states.
- **In vivo bacterial culture analysis** confirmed that 23 of 27 discriminatory metabolites detected by DESI-MS in bacterial isolates matched community state type (CST) associations observed clinically, validating the biological basis of the metabolic signatures.
- **Host immune markers** — IL-1β (cross-validated R² = 0.51), C3a/C3b (R² = 0.33), MBL (R² = 0.26), and IgG subclasses — were predictable from DESI-MS metabolite profiles, demonstrating simultaneous capture of microbiome and immune dimensions.
- **Preterm birth prediction**: vaginal microbiota instability (shifts from LDOM to LDEPL) predicted by DESI-MS associated with preterm birth (OR 1.97, 95% CI 1.03–3.66, p = 0.04). LDEPL composition associated with increased IL-1β and elevated MBL levels.
- **Cervical cerclage context**: in women with cervical cerclage using braided suture, vaginal MBL levels were increased compared to monofilament (10/11, 91% vs 9/21, 43%, p = 0.011), and elevated IL-1β post-cerclage was consistently detected by DESI-MS.

## Methods

**Study design**: Prospective cohort study across two independent pregnancy cohorts recruited at Imperial College London and associated NHS Trusts. VMET cohort: n=160 women (455 swabs, collected 2014–2017). VMET2 cohort: n=205 women (573 swabs, collected 2015–2018). Longitudinal multi-omic sampling at multiple gestational timepoints.

**Metabolic profiling**: Desorption Electrospray Ionization Mass Spectrometry (DESI-MS) performed directly on cervicovaginal swabs without sample preparation, using negative ion mode. Swabs analysed using a 2D DESI-MS imaging source coupled with a DESI-MS source designed for direct swab analysis. Features selected by Benjamini-Hochberg q-value < 0.05 in both cohorts independently.

**Microbiome profiling**: 16S rRNA gene amplicon sequencing of V1-V2 hypervariable regions. Community state types (CSTs I–VII) assigned using hierarchical clustering. CSTs classified as *Lactobacillus*-dominated (LDOM: CSTs I, II, III, V) or *Lactobacillus*-depleted (LDEPL: CSTs IV, VI, VII).

**Immune profiling**: 22 soluble immune markers (cytokines, chemokines, immunoglobulins, complement) measured by Luminex and ELISA in VMET2 cohort. Random forest regression used to predict immune marker levels from DESI-MS features.

**Statistical methods**: Random forest classifiers for VMC prediction, PERMANOVA for metabolite variation, random forest regression for immune marker prediction. Cross-validation and independent cohort replication throughout. Preterm birth defined as delivery < 37 weeks.

## Detailed Summary

The study addresses a key limitation in vaginal microbiome diagnostics: current culture and molecular approaches fail to capture host immune response alongside microbial composition. **DESI-MS** provides a bedside-amenable, rapid metabolic profiling method that requires no sample preparation — the swab is analysed directly.

### Metabolic Signatures of Vaginal Microbiome Composition

Across both cohorts, 88 metabolite features in negative ion mode significantly differentiated LDOM from LDEPL states. Key discriminatory metabolites fell into several classes:

- **Long-chain fatty acids** (docosanoic acid C22:0, lignoceric acid C24:0, oleic acid C18:1, linoleic acid C18:2, linolenic acid C18:3) — elevated in LDEPL states
- **Dipeptides** (leucyl-serine, leucyl-threonine, valyl-alanine, valyl-glutamine, glutamyl-leucine) — depleted in LDEPL states
- **Amino acids** (leucine, aspartic acid, glutamate, phenylalanine, arginine) — variable by CST
- **Thiomalic acid** — elevated in LDEPL, one of the most robust discriminators

These metabolic differences were validated in bacterial isolates cultured in vitro. Of 25 species representing major CST members, DESI-MS detected 27 metabolites, 23 of which matched the expected CST association direction. Notably, amino acid levels were higher in *Lactobacillus* species biomasses and fatty acid levels were higher in LDEPL-associated species (e.g., [[gardnerella-vaginalis]], [[atopobium-vaginae]], [[prevotella]]).

### Immune Marker Prediction

From the 22 immune markers assayed, DESI-MS profiles best predicted **IL-1β** (R² = 0.51), **C3a/C3b** (R² = 0.33), **MBL** (mannose-binding lectin, R² = 0.26), and **IgG2** (R² = 0.21). IL-1β and MBL are innate immune mediators critical to the cervicovaginal mucosal defence. The ability to predict these from metabolite profiles alone demonstrates that the vaginal metabolome encodes both microbial and host immune information.

### Preterm Birth Association

Vaginal microbiota instability — defined as shifts between LDOM and LDEPL states — was associated with increased preterm birth risk (OR 1.97, 95% CI 1.03–3.66, p = 0.04 by 16S rRNA; OR 1.47, 95% CI 0.75–2.78, p = 0.25 by DESI-MS prediction). LDEPL composition was associated with elevated IL-1β, and women subsequently delivering preterm had significantly higher IL-1β levels (0.042 ng/mL vs 0.692 ng/mL, p = 0.007).

In the **cervical cerclage** subgroup, braided suture material was associated with elevated MBL and IL-1β compared to monofilament. DESI-MS detected these inflammatory changes directly from swabs, suggesting clinical utility for monitoring post-surgical inflammatory status.

### Preterm Birth Risk Stratification

DESI-MS metabolic, metataxonomic, and inflammatory markers obtained at three gestational timepoints showed predictive capacity for preterm birth, though overall sensitivity remained limited. The authors propose DESI-MS as a rapid point-of-care tool for vaginal microbiome-host assessment rather than a standalone preterm birth predictor.

## Relevance to WikiBiome

- **Vaginal microbiome composition**: Provides validated metabolic signatures distinguishing *Lactobacillus*-dominated from *Lactobacillus*-depleted vaginal communities — informing entity pages for [[lactobacillus-crispatus]], [[lactobacillus-iners]], [[gardnerella-vaginalis]], [[atopobium-vaginae]], and the [[bacterial-vaginosis]] concept page.
- **Metabolomics as ecological readout**: The fatty acid and amino acid patterns associated with different CSTs offer a metabolic lens on vaginal ecology — LDEPL states characterised by long-chain fatty acids and depletion of amino acids/dipeptides, reflecting distinct metabolic niches.
- **Immune-microbiome interface**: The simultaneous detection of microbial and immune signatures (IL-1β, MBL, complement) from a single swab demonstrates the tight coupling between vaginal microbiome composition and mucosal immunity.
- **Preterm birth as a microbiome-associated condition**: Adds to the evidence base for [[preterm-birth]] as a condition with a microbiome signature involving *Lactobacillus* depletion and innate immune activation.

## Relevance to Cureva

- **Diagnostic innovation**: DESI-MS as a rapid, preparation-free diagnostic could enable point-of-care vaginal microbiome assessment in clinical settings — relevant to practitioner workflows for monitoring pregnancy outcomes.
- **Intervention monitoring**: The ability to detect inflammatory changes post-cerclage (braided vs monofilament suture) suggests DESI-MS could monitor intervention effects in real time, relevant to cerclage decision-making.
- **Biomarker panel**: IL-1β and MBL as predictive markers of preterm birth risk, detectable via metabolic proxy, could inform risk stratification protocols.
- **Microbiota instability as risk marker**: LDOM-to-LDEPL transitions as a trackable risk factor for preterm birth — relevant to longitudinal monitoring interventions (e.g., vaginal probiotics, [[lactobacillus-crispatus]] repletion).
- **Primitive 1 (Metals as Selective Pressures)**: While metals are not the focus, the fatty acid and metabolite signatures reflect ecological selective pressures that shape vaginal community composition — analogous to metal-driven selection in gut ecosystems.
- **Primitive 5 (Two-Sided Ecological Engineering)**: The study supports interventions targeting both pathogen suppression (reducing LDEPL-associated species) and restoration of protective *Lactobacillus*-dominated communities.
- **Primitive 9 (Oxygen State as Ecological Determinant)**: CST IV (LDEPL) communities are dominated by anaerobes ([[gardnerella-vaginalis]], [[prevotella]], [[atopobium-vaginae]]), consistent with the framework that oxygen state determines community composition and pathogenic potential.

## Contradictions / Tensions

- **Limited preterm birth prediction sensitivity**: DESI-MS-predicted VMC showed lower sensitivity for preterm birth prediction than 16S rRNA-based assessment (OR 1.47, p = 0.25 vs OR 1.97, p = 0.04), reflecting the challenge of predicting a complex outcome from metabolic snapshots alone. This contrasts with stronger associations reported by other vaginal microbiome studies using longitudinal 16S profiling.
- **CST classification limitations**: Hard-clustering into CSTs may under-estimate the impact of low-abundance taxa on the host mucosal metabolome. The authors acknowledge this as a limitation, and it applies broadly to CST-based vaginal microbiome research.
- **Misclassification of mixed communities**: Samples harbouring mixed compositional structures, often containing [[gardnerella-vaginalis]], had higher misclassification rates. This is relevant to the broader question of whether binary LDOM/LDEPL classification captures clinically meaningful variation.

## Open Questions

- Can DESI-MS metabolic signatures be extended to other reproductive tract conditions (endometriosis, infertility, cervical cancer) where vaginal microbiome composition plays a role?
- Do the fatty acid signatures associated with LDEPL states reflect microbial membrane composition, host epithelial damage, or both?
- Could DESI-MS be combined with metal profiling to simultaneously assess metallomic and microbiome signatures from a single swab?
- What is the temporal stability of DESI-MS metabolic signatures across the menstrual cycle in non-pregnant women?
- Can the IL-1β and MBL metabolic proxies identified here be validated as standalone point-of-care biomarkers for preterm birth risk?
