---
title: "Hicks et al. 2025 — Oral, Vaginal, and Stool Microbial Signatures in Patients With Endometriosis as Potential Diagnostic Non-Invasive Biomarkers"
type: source
created: 2026-04-19
updated: 2026-04-19
authors: [Chloe Hicks, Mathew Leonardi, Xin-Yi Chua, Lisa Mari-Breedt, Mercedes Espada, Emad M. El-Omar, George Condous, Fatima El-Assaad]
corresponding_author: "George Condous / Fatima El-Assaad"
corresponding_email: "george.condous@sydney.edu.au / f.el-assaad@unsw.edu.au"
institution: "Microbiome Research Centre, UNSW Medicine & Health, St George & Sutherland Clinical Campuses, UNSW Sydney / Endometriosis Ultrasound and Advanced Endosurgery Unit, Nepean Hospital, University of Sydney"
year: 2025
journal: "BJOG: An International Journal of Obstetrics and Gynaecology"
doi: "10.1111/1471-0528.17979"
pmid: "not yet verified"
evidence_level: prospective-cohort
sample_size: "n=64 (19 HC, 24 N-ENDO, 21 ENDO)"
tags: [endometriosis, microbiome, oral-microbiome, vaginal-microbiome, gut-microbiome, diagnostic-biomarker, 16S-rRNA, fusobacterium, escherichia, lactobacillus, multi-site-sampling]
library_category: signatures
platform: both
condition: endometriosis
karen_brain_primitives: [1, 5, 7]
metals_discussed: []
taxa_discussed: [fusobacterium, escherichia, lactobacillus, phascolarctobacterium, enterococcus, tepidimonas, prevotella, neisseria, actinobacillus, lachnospira, butyrivibrio, bifidobacterium, veillonella, megasphaera, lactococcus, haemophilus, sneathia, bacillus, listeria, pseudomonas, salmonella, butyricicoccus, cardiobacterium, actinomyces, blautia, dorea, collinsella, eubacterium]
key_findings:
  - "Oral and stool microbial composition differed significantly between HC, N-ENDO, and ENDO cohorts (adjusted p=0.003 oral, p=0.042 stool); vaginal did not"
  - "Fusobacterium was enriched in oral samples of patients with moderate/severe endometriosis, linking to periodontal disease comorbidity"
  - "Escherichia, Enterococcus, and Tepidimonas were enriched in ENDO vaginal samples, supporting the bacterial contamination hypothesis"
keystone: false
---

## Key Findings

- **Oral microbiota composition differs significantly** between healthy controls (HC), confirmed no-endometriosis (N-ENDO), and confirmed endometriosis (ENDO) cohorts (adjusted p = 0.003), as does stool (adjusted p = 0.042); vaginal microbiota showed no significant compositional differences between the three groups ([[hicks-2025-oral-vaginal-stool-microbial-signatures-endometriosis]], prospective cohort, n = 64).
- **Alpha diversity was higher in HC** compared to N-ENDO and ENDO in oral samples (adjusted p < 0.1) and stool samples (adjusted p < 0.05), with no significant differences in vaginal samples.
- **36 differentially abundant microbial features** were detected across the three cohorts and three body sites by LEfSe analysis, with largely unique profiles per body site and minimal overlap between sites.
- **Fusobacterium was enriched in oral samples** of patients with moderate/severe endometriosis compared to minimal/mild, linking endometriosis severity to a known periodontal pathogen and supporting the endometriosis-periodontal disease comorbidity.
- **Escherichia, Enterococcus, and Tepidimonas** were enriched in ENDO vaginal samples, supporting the "bacterial contamination hypothesis" — that bacterial endotoxin lipopolysaccharide activates TLR4 cascade, causing inflammation that facilitates lesion development.

## Methods

- **Design:** Prospective cross-sectional pilot study with three cohorts.
- **Setting:** Nepean Hospital and UNSW Microbiome Research Centre, Sydney, Australia. Recruitment 2018-2019.
- **Population:** 64 age- and sex-matched subjects: 19 healthy controls (HC), 24 confirmed no-endometriosis (N-ENDO), 21 confirmed endometriosis (ENDO). Mean age 34.6 years (SD = 7.0, range 22-49). N-ENDO and ENDO participants underwent laparoscopy with histological confirmation. HC recruited from MothersBabies Study (Ethics: 2019/ETH00192).
- **ENDO staging:** n = 10 rASRM stage 1, n = 1 stage 2, n = 3 stage 3, n = 7 stage 4. Grouped as minimal/mild (stages 1-2, n = 12) and moderate/severe (stages 3-4, n = 9).
- **Samples:** Oral, stool, and vaginal samples self-collected at a single time point — HC at any time, ENDO/N-ENDO preoperatively. Oral and vaginal collected using FLOQSwab and eNAT tubes (Copan, Italy). Stool collected using sterile ColOff device with DNA Stabiliser (Invitek Molecular GmbH).
- **Sequencing:** 16S rRNA gene V3-V4 hypervariable region, amplified using 341F-805R primers. Illumina MiSeq v3, 2 x 300 bp paired-end. Processed via QIIME2 pipeline with DADA2 for ASV generation. Taxonomy assigned using Naive Bayes classifier trained on Greengenes v13_5. Rarefied to 49,000 reads/sample (stool), 86,000 (oral), 46,000 (vaginal).
- **Statistics:** Alpha diversity via Shannon index, Wilcoxon rank-sum/Kruskal-Wallis tests. Beta diversity via Bray-Curtis dissimilarity, PERMANOVA. Differentially abundant taxa via LEfSe (linear discriminant analysis effect size). All in R v4.2.0. FDR-adjusted p-values reported.

## Detailed Summary

### Study Cohort

The study enrolled 64 participants across three cohorts. The ENDO cohort had confirmed endometriosis via laparoscopy and histology, staged per rASRM classification. The N-ENDO cohort had clinical indications for laparoscopy but histologically confirmed absence of endometriosis. HC were self-reported healthy women with no known gynaecological symptoms, age- and sex-matched to the other cohorts. No significant differences in age (p = 0.078) or weight (p = 0.138) between groups.

### Taxonomy Landscape

A total of 44 million reads were sequenced across 192 samples. After quality control, 28 million reads remained (mean 146,719 reads/sample, SD = 75,277). Detected across three body sites: 204 genera (18 phyla) in stool, 190 genera (20 phyla) in oral, and 296 genera (19 phyla) in vaginal samples.

### Alpha Diversity

HC had higher alpha diversity than N-ENDO and ENDO in oral samples (borderline, adjusted p < 0.1, estimate = 0.11, 95% CI 7.4e-5-0.22) and significantly in stool (adjusted p < 0.05, estimate = 0.27, 95% CI 0.09-0.44). No differences in vaginal samples (Kruskal-Wallis p = 0.49).

### Beta Diversity

PERMANOVA revealed significant compositional differences in stool (p = 0.028, R-squared = 3.9%) and oral (p = 0.043, R-squared = 4.3%) samples between cohorts. No significant differences in vaginal samples (p = 0.751, R-squared = 2.6%). HC had lower beta dispersion in stool compared to N-ENDO and ENDO (p = 0.044), suggesting endometriosis-related states introduce more inter-individual variability.

### Differentially Abundant Taxa (LEfSe)

**Stool samples** — 13 differentially abundant genera: 8 enriched in HC (including [[neisseria]], Actinobacillus, [[butyrivibrio]], and others), 2 in N-ENDO, 3 in ENDO (including [[phascolarctobacterium]], [[lactobacillus]], [[escherichia]]).

**Oral samples** — 14 differentially abundant genera: 8 enriched in HC (including [[neisseria]], Actinobacillus, Lachnospira), 3 in N-ENDO (including [[prevotella]], [[haemophilus]]), 3 in ENDO (including [[sneathia]], [[escherichia]]).

**Vaginal samples** — 12 differentially abundant genera: 4 enriched in HC, 4 in N-ENDO (including [[prevotella]]), 4 in ENDO (including [[escherichia]], [[enterococcus]], Tepidimonas).

### Severity-Based Differences (Minimal/Mild vs. Moderate/Severe)

Eight differentially abundant taxa between severity groups:
- **Oral:** [[cardiobacterium]] enriched in minimal/mild; **[[fusobacterium]]** enriched in moderate/severe
- **Stool:** [[actinomyces]] and Paraprevotellaceae enriched in minimal/mild
- **Vaginal:** [[blautia]], Dorea, [[collinsella]] enriched in minimal/mild; [[eubacterium]] enriched in moderate/severe

### Key Interpretive Points

1. **[[Escherichia]]** enrichment in ENDO vaginal samples aligns with previous findings of *Escherichia/Shigella* in vagina and cervix of ENDO patients. *E. coli* has been found enriched in endometrium and menstrual blood of ENDO patients, supporting the bacterial contamination hypothesis.

2. **[[Lactobacillus]]** enrichment in ENDO stool is notable because multiple *Lactobacillus* species are constituents of the "estrobolome" — they encode beta-glucuronidase and beta-galactosidase enzymes that increase circulating oestrogen levels via deconjugation, potentially implicated in endometriosis disease progression.

3. **[[Phascolarctobacterium]]** enrichment in ENDO stool is consistent with previous studies finding increased abundance in peritoneal fluid of endometriosis baboon models and human peritoneal fluid, raising the possibility of intestinal bacterial translocation to the peritoneum.

4. **[[Fusobacterium]]** enrichment in oral samples of moderate/severe ENDO is notable because *Fusobacterium* is an established periodontal pathogen, and women with endometriosis have higher incidences of periodontal disease. A recent study found *Fusobacterium* in endometrium and endometrial lesions, with antibiotic treatment reducing lesions in a mouse model.

## Relevance to WikiBiome

- **Multi-site microbiome characterisation:** This is the first study to simultaneously characterize oral, stool, and vaginal microbiota in endometriosis with three distinct cohorts (ENDO, N-ENDO, HC). This informs the [[endometriosis]] entity page with evidence that dysbiosis is systemic, not limited to the reproductive tract.
- **[[Fusobacterium]] entity page:** Enrichment in oral samples of moderate/severe ENDO strengthens the fusobacterium-periodontal-endometriosis connection and should be added to the conditions_enriched_in field.
- **[[Escherichia-coli]] entity page:** Further evidence of enrichment across vaginal and stool compartments in endometriosis.
- **Estrobolome concept:** The [[lactobacillus]]-beta-glucuronidase-oestrogen axis finding informs the [[estrobolome]] concept page and connects to Karen's Brain Primitive 7.
- **Bacterial contamination hypothesis concept:** The enrichment of [[escherichia]], [[enterococcus]], and Tepidimonas in vaginal samples supports the TLR4-mediated inflammation model, relevant to [[bacterial-contamination-hypothesis]].

## Relevance to Cureva

- **Signature refinement:** Provides taxonomic signature data across three body sites for the [[endometriosis-signature]] page. Strengthens the taxonomic layer with multi-compartment evidence — particularly the oral compartment, which is underrepresented in existing endometriosis microbiome research.
- **Severity stratification:** The differential taxa between minimal/mild and moderate/severe endometriosis (particularly [[fusobacterium]] in oral, [[eubacterium]] in vaginal) could inform stage-specific signature layers.
- **Diagnostic biomarker potential:** The oral microbiome showed the most consistent compositional differences and could inform non-invasive diagnostic approaches — relevant to Cureva's clinical intelligence pipeline.
- **Estrobolome intervention target:** [[Lactobacillus]] enrichment in ENDO stool, combined with beta-glucuronidase activity, suggests that interventions targeting the estrobolome (Primitive 7) may be relevant. This connects to existing STOP considerations around probiotics containing high-beta-glucuronidase *Lactobacillus* strains in oestrogen-dependent conditions.
- **Triangle evidence:** Fusobacterium enrichment -> periodontal disease comorbidity -> endometriosis severity provides a potential I_to_f_to_D triangle for oral health interventions.

## Contradictions / Tensions

- **Lactobacillus enrichment in ENDO stool** appears to contradict the general expectation that endometriosis involves loss of protective commensals. However, this may reflect the estrobolome mechanism — specific *Lactobacillus* species with high beta-glucuronidase activity could be pathological in this context despite being "beneficial" in other conditions. The body site matters: vaginal *Lactobacillus* dominance is protective, while gut *Lactobacillus* with oestrogen-deconjugating activity may be detrimental in oestrogen-dependent disease.
- **Vaginal microbiota showed no significant compositional differences** between cohorts by PERMANOVA (p = 0.751), which contrasts with several prior studies that found vaginal dysbiosis in endometriosis. The authors note this may be due to the high heterogeneity of vaginal microbiota and the relatively small sample size.
- **The three body sites showed largely unique differentially abundant profiles** with minimal overlap — only [[lactobacillus]], [[haemophilus]], and [[prevotella]] appeared in multiple body sites, and inconsistently across cohorts. This complicates the development of a single diagnostic microbial signature.

## Open Questions

1. **Which specific *Lactobacillus* species** are enriched in ENDO stool, and do they carry high beta-glucuronidase activity? 16S sequencing at genus level cannot resolve this — metagenomic sequencing is needed.
2. **Does the oral *Fusobacterium* enrichment in moderate/severe ENDO** reflect causal bacterial translocation, shared inflammatory pathways, or coincidental periodontal disease comorbidity?
3. **Can the oral microbiome serve as a reliable non-invasive diagnostic biomarker** for endometriosis, given that it showed the most consistent compositional differences? Validation in a larger, independent cohort is needed.
4. **What role does intestinal bacterial translocation** play in endometriosis pathogenesis? The detection of [[phascolarctobacterium]] in both gut and peritoneal fluid across multiple studies suggests this mechanism warrants investigation.
5. **How do menstrual cycle phase, hormonal treatments, antibiotics, and dietary factors** confound these findings? The study did not control for these variables.
6. **Would shotgun metagenomics** reveal functional differences (e.g., beta-glucuronidase gene abundance, siderophore production) that 16S amplicon sequencing misses?
