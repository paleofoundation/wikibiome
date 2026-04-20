---
title: "Molina Morales 2023 — The Microbiome of the Male Reproductive Tract: Uncovering Its Composition and Origins"
type: source
created: 2026-04-19
updated: 2026-04-19
authors: [Nerea Molina Morales]
corresponding_author: "Signe Altmäe"
corresponding_email: "not yet verified"
institution: "Universidad de Granada, Departamento de Bioquímica y Biología Molecular I"
orcid: "not yet verified"
year: 2023
journal: "Doctoral Thesis, Universidad de Granada"
doi: "https://hdl.handle.net/10481/85100"
pmid: "N/A"
evidence_level: cross-sectional
sample_size: "n=11 (Study I, testicular biopsies); n=82 recruited / n=55 analyzed (Study II, vasectomy cohort); systematic review (Study III); methodological review (Study IV)"
tags: [seminal-microbiome, male-reproductive-tract, testicular-microbiome, vasectomy, semen-dysbiosis, male-infertility, seminovaginal-microbiome, low-biomass-microbiome, contamination-control, gut-testes-axis]
library_category: signatures
platform: both
condition: "erectile dysfunction"
karen_brain_primitives: [1, 5, 6, 9]
metals_discussed: []
taxa_discussed: [prevotella, lactobacillus, corynebacterium, staphylococcus, finegoldia, anaerococcus, campylobacter, escherichia, blautia, clostridium, collinsella, bacteroides, akkermansia, faecalibacterium, alistipes, acinetobacter, veillonella, porphyromonas, streptococcus, gardnerella, ureaplasma, enterococcus, pseudomonas, neisseria, klebsiella, brevundimonas]
key_findings:
  - "Human testicular spermatozoa harbour a low-biomass bacterial signature including Blautia, Clostridium, Prevotella, Collinsella, and Robinsoniella, with 50-70% of detected reads attributable to contamination"
  - "Vasectomy significantly alters seminal microbial composition — post-vasectomy semen shows increased alpha-diversity and distinct beta-diversity (PERMANOVA R²=0.031, p=0.004, n=46)"
  - "Semen shares approximately 50% of bacterial communities with urine but maintains a distinct microbial profile enriched in Anaerococcus, Finegoldia, and Corynebacterium"
keystone: false
---

## Key Findings

- **Testicular sperm cells harbour detectable bacteria** despite being a low-biomass site. After stringent decontamination (Decontam and microDecon), 10 genera showed statistically significant abundance in testicular spermatozoa: *Blautia*, *Cellulosibacter*, *Clostridium* XIVa, *Clostridium* XIVb, *Clostridium* XVIII, *Collinsella*, *Prevotella*, *Prolixibacter*, *Robinsoniella*, and *Wandonia* (all FDR p<0.05) ([[molina-morales-2023-male-reproductive-tract-microbiome]], cross-sectional, n=11 men / 307 testicular spermatozoa in 24 samples).
- **Vasectomy significantly changes seminal microbial composition.** Post-vasectomy semen samples showed significantly higher alpha-diversity (observed richness, Wilcoxon p=0.011) and significantly different beta-diversity (PERMANOVA, R²=0.031, p=0.004). Ten genera showed differential abundance: *Acinetobacter*, *Brevundimonas*, *Altererythrobacter*, and *Escherichia-Shigella* decreased post-vasectomy, while *Arcanobacterium*, *Porphyromonas*, *Actinobaculum*, *Murdochiella*, *Howardella*, and *Fastidiosipila* increased ([[molina-morales-2023-male-reproductive-tract-microbiome]], prospective cohort, n=46 paired).
- **Semen and urine share ~50% of bacterial genera** but maintain distinct profiles. Semen was enriched in *Anaerococcus*, *Finegoldia*, and *Corynebacterium*, while urine harboured more *Prevotella* and *Escherichia-Shigella* (PERMANOVA R²=0.117, p=0.001; n=55 paired samples) ([[molina-morales-2023-male-reproductive-tract-microbiome]], prospective cohort).
- **The dominant seminal phyla** are *Firmicutes* (45%), *Proteobacteria* (19%), *Actinobacteria* (16%), and *Epsilonbacteraeota* (16%). At genus level, *Campylobacter* (15%), *Finegoldia* (9%), and *Ezakiella* (9%) predominate ([[molina-morales-2023-male-reproductive-tract-microbiome]], prospective cohort, n=55).
- **Contamination is a dominant confounder** in low-biomass reproductive microbiome studies. Between 50% and 72% of all detected bacterial reads in testicular samples were attributable to contamination, underscoring the critical need for stringent negative controls and in silico decontamination ([[molina-morales-2023-male-reproductive-tract-microbiome]], cross-sectional).

## Methods

This doctoral thesis comprises four studies:

**Study I** (cross-sectional): 307 testicular spermatozoa at different maturation stages from 11 men with infertility (azoospermia, severe oligoasthenoteratozoospermia, or DNA fragmentation), ages 28-65, collected via open testicular biopsy at MAR&Gen Assisted Reproduction Clinic, Granada, Spain (2014-2016). 16S rRNA V3-V4 gene sequencing on Illumina MiSeq. Two decontamination approaches applied: Decontam v.1.6.0 (prevalence-based) and microDecon v.1.0.2. Eleven negative controls processed in parallel. DADA2 for denoising; RDP database for taxonomic annotation.

**Study II** (prospective cohort): 82 men planning vasectomy recruited at University Hospital Virgen de las Nieves, Granada (2021-2022); 55 provided complete paired data. Semen and midstream urine collected before vasectomy; semen collected 3 months post-vasectomy. 16S rRNA V4 sequencing on Illumina MiSeq. QIIME2 v.2022.11 with DADA2 denoising; SILVA 16S v.132_99 for taxonomy. microDecon for contamination correction. ANCOM-BC for differential abundance; PERMANOVA for beta-diversity; Wilcoxon signed-rank for alpha-diversity.

**Study III** (systematic review): PRISMA 2020 guidelines; protocol registered in PROSPERO (CRD42022323201). Systematic search of PubMed, Web of Science, and Scopus for microbiome studies in reproductive-age couples using 16S rRNA gene sequencing.

**Study IV** (methodological review): PROSPERO-registered (CRD42020161218). Systematic evaluation of endometrial microbiome study methodology as a model for low-biomass sites; proposed good practice guidelines.

## Detailed Summary

### Testicular microbiome (Study I)

The testis harbours a low-biomass microbial signature detectable even with rigorous contamination controls. After Decontam processing, 1,958,794 paired-end reads grouped into 205 phylotypes (mean 81,616 reads and 119 phylotypes per sample). The most contaminated negative controls were culture media (G-GAMETE and G-MOPS), accounting for 48,349 and 47,379 reads respectively. Dominant genera in testicular sperm after decontamination included *Bacteroides*, *Akkermansia*, *Faecalibacterium*, *Alistipes*, and *Prevotella* — genera with notable overlap with gut microbiome profiles, consistent with the gut-testes axis hypothesis.

### Vasectomy effects on seminal microbiome (Study II)

This is the largest paired pre/post-vasectomy seminal microbiome study to date. Of 39 unique genera in semen, 30 (77%) were shared between pre- and post-vasectomy samples. Four genera (*Acinetobacter*, *Brevundimonas*, *Altererythrobacter*, *Escherichia-Shigella*) were exclusively found pre-vasectomy, and 5 genera (*Arcanobacterium*, *Actinobaculum*, *Murdochiella*, *Howardella*, *Fastidiosipila*) were exclusively post-vasectomy. The increased alpha-diversity post-vasectomy may reflect loss of testicular/epididymal paracrine antimicrobial contributions (epididymal defensins), allowing urinary tract and external genital bacteria to become more prominent.

### Semen vs. urine microbiome comparison

Of 39 ASVs at genus level, 21 genera (54%) were found exclusively in urine, 18 genera (46%) were shared, and none were unique to semen. Urine was significantly more diverse (Shannon and richness, p<0.001). Among 31 differentially abundant genera: *Prevotella* and *Escherichia-Shigella* were significantly more abundant in urine, while *Anaerococcus*, *Finegoldia*, and *Corynebacterium* predominated in semen. The shared genera could persist via biofilm formation in the genitourinary tract — *Corynebacterium* in particular has demonstrated biofilm-forming capabilities in semen.

### Seminovaginal microbiome (Study III)

The systematic review found that sexual exchange of microorganisms between partners affects the microbiome of both male and female reproductive tracts. Similarities in semen and vaginal microbial composition suggest active interplay during sexual intercourse, with implications for reproductive health. Successful IVF outcomes correlated with increased *Lactobacillus* proportions. However, direct *Lactobacillus* adhesion to spermatozoa has been shown to reduce sperm motility, making a *Lactobacillus*-based probiotic approach potentially counterproductive.

### Gut-testes axis

The thesis extensively discusses the GELDING theory (Gut Endotoxin Leading to a Decline in Gonadal Function): a high-fat/calorie diet disrupts the intestinal mucosal barrier, causing leakage of bacterial endotoxins and chronic low-grade inflammation that impacts testicular function. Men with higher testosterone had more diverse gut microbiomes; those with low testosterone had increased abundance of opportunistic pathogens.

## Relevance to WikiBiome

- Informs entity pages for [[prevotella]], [[lactobacillus]], [[corynebacterium]], [[finegoldia]], [[anaerococcus]], [[campylobacter]], [[escherichia-coli]], [[bacteroides]], [[akkermansia-muciniphila]], [[blautia]], and [[clostridium]] with male reproductive tract colonisation data.
- Supports concept pages on the gut-testes axis, seminal dysbiosis, and biofilm formation in the genitourinary tract ([[bacterial-contamination-hypothesis]]).
- Directly relevant to [[erectile-dysfunction]] entity page — the thesis documents that 9.1% of study participants reported occasional sexual dysfunction, and the gut-testes axis discussion explicitly links gut dysbiosis to impaired testosterone production and reproductive function.
- Informs male infertility entity page with semen dysbiosis data: *Neisseria*, *Klebsiella*, *Pseudomonas* associated with poor semen parameters; *Lactobacillus* enriched in normal semen.
- Methodological insights (Study IV) relevant to a concept page on low-biomass microbiome contamination control.

## Relevance to Cureva

- Provides taxonomic baseline for a potential male infertility signature: enrichment of *Prevotella*, *Neisseria*, *Klebsiella*, *Pseudomonas* with depletion of *Lactobacillus* in infertile men.
- The *Lactobacillus* paradox (protective in semen quality surveys but reduces sperm motility via direct adhesion) is a potential STOP signal for naive Lactobacillus probiotic interventions targeting male fertility.
- Vasectomy-induced dysbiosis data relevant to understanding post-vasectomy inflammatory changes and potential long-term urogenital health implications.
- The gut-testes axis (GELDING theory) supports intervention hypotheses targeting gut barrier integrity to improve testicular function — linking dietary interventions to male reproductive outcomes.
- Epididymal defensins as antimicrobial agents suggest primitive 2 (nutritional immunity) and primitive 4 (microbial metal dependencies as Achilles' heels) reasoning in the male reproductive tract.

## Contradictions / Tensions

- **Alpha-diversity direction after vasectomy**: This thesis found increased alpha-diversity post-vasectomy (n=46), while Suarez Arbelaez et al. (2023, n=16) found decreased alpha-diversity. The larger sample size and paired design here likely provide more robust results, but the contradiction remains unexplained. <!-- NEEDS VERIFICATION: confirm with direct comparison of methods -->
- **Semen vs. urine diversity**: This thesis found urine had significantly higher alpha-diversity than semen (p<0.001), while Lundy et al. (2021) found higher diversity in semen and Cao et al. (2023) found no difference. Sample collection order may explain discrepancies.
- **Lactobacillus dual role**: Multiple studies cite *Lactobacillus* enrichment as protective for semen quality, but Wang et al. (2020) showed *Lactobacillus* spp. adhesion to sperm cells significantly reduced sperm functions. The thesis acknowledges this creates ambiguity for probiotic intervention strategies.

## Open Questions

- Does a healthy testicular microbiome exist in fertile men, or is all detected microbial DNA contamination and/or cell-free circulating bacterial DNA?
- What is the functional significance of the testicular bacterial genera — are they alive and metabolically active, or remnant DNA?
- How does the gut-testes axis mechanistically operate — through systemic inflammation, direct microbial translocation, or metabolite signaling?
- Can modulating the seminal microbiome (via probiotics, diet, or targeted antimicrobials) improve sperm quality and fertility outcomes?
- What is the long-term impact of vasectomy-induced seminal dysbiosis on male urogenital health?
- Does the seminovaginal microbiome exchange contribute to couple-specific fertility outcomes or shared reproductive tract infections?
