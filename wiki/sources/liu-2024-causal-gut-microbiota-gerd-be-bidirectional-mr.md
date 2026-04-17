---

title: "Investigating the causal relationship of gut microbiota with GERD and BE: a bidirectional mendelian randomization"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Liu Y, Yu J, Yang Y, Han B, Wang Q, Du S]
journal: BMC Genomics
year: 2024
doi: "10.1186/s12864-024-10377-0"
tags: [gerd, gastroesophageal-reflux, barretts-esophagus, mendelian-randomization, gut-microbiota, causal-association, faecalibacterium-prausnitzii, eubacterium-hallii, haemophilus, tenericutes, bacteroidia, metabolic-pathways, BMI, mediation-analysis, gwas]
platform: wikibiome
---

# Investigating the causal relationship of gut microbiota with GERD and BE: a bidirectional mendelian randomization

## Key Claims

- Bidirectional [[Mendelian randomization]] identified 11 bacterial taxa and 13 metabolism pathways associated with [[gerd]], and 18 taxa and 5 pathways causally related to [[Barretts esophagus]]
- Weight and BMI played a crucial mediating role in the GERD-microbiome relationship, acting as key confounders
- *[[faecalibacterium-prausnitzii]]* had a suggestive impact on both GERD (OR=1.087) and BE (OR=1.388), suggesting it may increase risk for both conditions
- Phylum *[[Tenericutes]]* (OR 1.11, P=0.02), class *[[Bacteroidia]]* (OR 1.10, P<0.05), and genus *[[Haemophilus]]* (OR 1.09, P=0.02) increased GERD risk
- LDSC (linkage disequilibrium score regression) identified 1 microbial taxon and 4 metabolism pathways genetically correlated with GERD, and 1 taxon related to BE
- Reverse MR indicated that BE impacts 10 microbial taxa and 4 metabolic pathways, demonstrating bidirectional causation

## Methods/Findings

- **Study type**: Bidirectional two-sample MR with mediation analysis
- **Data sources**: MiBioGen consortium (301 taxa) and Dutch Microbiome Project (205 metabolism pathways, N=7,738); GERD GWAS (129,080 cases, 473,524 controls); BE GWAS (13,358 cases, 43,071 controls)
- **SNP instruments**: 88 SNPs for GERD, 17 SNPs for BE; F-statistics 18.69 to 321.31 (all >10)
- **Methods**: IVW primary; MR-Egger, weighted median, weighted mode as sensitivity; LDSC for genetic correlation; two-step mediation MR
- **Mediation analysis**: BMI, weight, type 2 diabetes, MDD, smoking, alcohol, dietary intake (carbohydrate, sugar, fat, protein) as mediators
- **Key mediators**: BMI associated with 24 microbial taxa and 14 metabolism pathways; weight associated with 2 taxa and 12 pathways; smoking with 20 taxa and 15 pathways
- **Metabolic pathways for GERD**: 13 pathways identified including those involving amino acid metabolism and carbohydrate processing

## Connections

- Overlapping *Tenericutes* risk finding validates [[wang-2024-causal-gut-microbiota-gerd-mendelian-bidirectional]]
- BMI mediation connects to obesity-GERD relationship in systematic reviews
- *Faecalibacterium prausnitzii* risk association is notable given its generally anti-inflammatory reputation in other GI conditions
- Barrett's esophagus causal links extend progression model in [[gail-2015-upper-gi-microbiome-barretts-genomic-instability]]
- Metabolic pathway associations complement functional analysis in [[deshpande-2018-esophageal-microbiome-signatures-host-genetics]]
