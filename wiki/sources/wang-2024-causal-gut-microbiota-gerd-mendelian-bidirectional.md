---

title: "Causal relationship between gut microbiota and risk of gastroesophageal reflux disease: a genetic correlation and bidirectional Mendelian randomization study"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Wang K, Wang S, Chen Y, Lu X, Wang D, Zhang Y, Pan W, Zhou C, Zou D]
journal: Frontiers in Immunology
year: 2024
doi: "10.3389/fimmu.2024.1327503"
tags: [gerd, gastroesophageal-reflux, mendelian-randomization, gut-microbiota, causal-association, clostridiales, lachnospiraceae, methanobrevibacter, actinobacteria, mollicutes, anaerostipes, tenericutes, gwas, MiBioGen, dysbiosis]
platform: wikibiome
karen_brain_primitives: []
metals_discussed: []
taxa_discussed: ["Anaerostipes", "Methanobrevibacter"]
---

# Causal relationship between gut microbiota and risk of gastroesophageal reflux disease: a genetic correlation and bidirectional Mendelian randomization study

## Key Claims

- [[Mendelian randomization]] analysis established a genetic causal link between [[gut microbiota]] abundance changes and [[GERD]] risk using 78,707 GERD cases and 288,734 controls
- Four taxa showed protective associations with GERD: Family *Clostridiales Vadin BB60 group* (OR 0.95, P=0.027), Genus *[[Lachnospiraceae]] UCG004* (OR 0.91, P=0.026), Genus *[[Methanobrevibacter]]* (OR 0.95, P=0.026), Phylum *[[Actinobacteria]]* (OR 0.93, P=0.019)
- Three taxa showed increased GERD risk: Class *[[Mollicutes]]* (OR 1.09, P=0.037), Genus *[[Anaerostipes]]* (OR 1.09, P=0.017), Phylum *[[Tenericutes]]* (OR 1.11, P=0.024)
- Reverse MR analysis showed GERD leads to [[dysbiosis]] in 13 distinct gut microbiota classes, including down-regulation of Family *Christensenellaceae* (OR 0.85, P=0.045) and Family *Rikenellaceae* (OR 0.88, P=0.012)
- This is the first MR study to examine the pathogenic impact of gut microbiome on GERD, establishing bidirectional causation

## Methods/Findings

- **Study type**: Bidirectional two-sample Mendelian randomization
- **Data sources**: MiBioGen consortium (N=18,340, 24 whole-genome genotype cohorts, 16S fecal microbiome); GWAS for GERD (78,707 cases, 288,734 controls of European descent)
- **Methods**: Inverse variance-weighted (IVW) primary analysis; sensitivity via MR-Egger, weighted median, simple mode, weighted mode
- **SNP selection**: Locus-wide significance (P<1x10^-5); LD clumping (r^2<0.001, distance >10,000 kb); F-statistic >10
- **Quality checks**: Cochran's Q test for heterogeneity; MR-Egger intercept for pleiotropy; MR-PRESSO for outliers; all P>0.05 confirming robustness
- **Reverse causation**: GERD significantly impacted 13 gut microbiota classes including *Christensenellaceae*, *Rikenellaceae*, *Anaerotruncus*, *Coprobacillus*, *Eubacterium ruminantium group*, and others

## Connections

- Genetic causal evidence supports observational findings in [[sugihartono-2022-gastric-microbiota-hpylori-gerd]] and [[chen-2024-esophageal-dysbiosis-tlr2-barrier-integrity-gerd]]
- *Lachnospiraceae* protective role connects to decreased *Lachnospiraceae* in PPI users noted in [[liu-2022-probiotics-gut-microbiome-gerd-rabeprazole-rct]]
- Bidirectional causation supports gut-esophageal axis described in [[alageel-2025-microbiome-composition-gerd-systematic-review]]
- *Methanobrevibacter* protective association links to in esophageal microbiome in [[deshpande-2018-esophageal-microbiome-signatures-host-genetics]]
- Complements second MR study [[liu-2024-causal-gut-microbiota-gerd-be-bidirectional-mr]] with overlapping but distinct taxa
