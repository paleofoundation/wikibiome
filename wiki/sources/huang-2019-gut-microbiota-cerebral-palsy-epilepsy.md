---
title: "Huang 2019 — Distinct Gut Microbiota Composition and Functional Category in Children With Cerebral Palsy and Epilepsy"
type: source
created: 2026-04-14
updated: 2026-04-16
authors: [Congfu Huang, Yinhu Li, Xin Feng, Dongfang Li, Xiuyun Li, Qiuxing Ouyang, Wenkui Dai, Genfeng Wu, Qian Zhou, Peiqin Wang, Ke Zhou, Ximing Xu, Shuaicheng Li, Yuanping Peng]
corresponding_author: "Ke Zhou / Yuanping Peng"
corresponding_email: "peng_yuanping@sina.com"
institution: "Longgang District Maternity and Child Healthcare Hospital, Shenzhen; City University of Hong Kong"
year: 2019
journal: "Frontiers in Pediatrics"
doi: "10.3389/fped.2019.00394"
pmid: "not yet verified"
evidence_level: cross-sectional
sample_size: "n=46 (25 CPE, 21 healthy)"
tags: [cerebral-palsy, epilepsy, gut-microbiota, KEGG, neurodegenerative, immune-system, bifidobacterium, streptococcus, akkermansia, bacteroides, faecalibacterium, butyrate]
library_category: signatures
platform: wikibiome
condition: "cerebral-palsy"
karen_brain_primitives: [1, 5, 9]
metals_discussed: []
taxa_discussed: [bifidobacterium, streptococcus, akkermansia, enterococcus, prevotella, veillonella, rothia, clostridium, bacteroides, faecalibacterium, blautia, ruminococcus, roseburia, anaerostipes, parasutterella, lactobacillus]
key_findings:
  - "CPE children had significantly higher microbial diversity than healthy controls (Shannon index 2.33 vs 1.49, P<0.001) with 152 vs 53 genera detected on average"
  - "Bifidobacterium (29.59%), Streptococcus (4.70%), Akkermansia, Enterococcus, Prevotella enriched in CPE; Bacteroides, Faecalibacterium, Blautia, Ruminococcus, Roseburia depleted — all P<0.001"
  - "KEGG functional analysis: neurodegenerative diseases risk elevated (mainly attributed to Streptococcus); immune system disease risk elevated (attributed to Akkermansia-driven mucosal permeability)"
keystone: false
---

## Key Findings

- **Higher diversity in CPE** (Shannon 2.33 ± 0.43) vs healthy (1.49 ± 0.36), P<0.001 — paradoxical; reflects pathobiont expansion into vacated niches, not health.
- **Enriched in CPE** (all P<0.001, FDR<0.001): Bifidobacterium (29.59 ± 15.07%), Streptococcus (4.70 ± 3.61%), Akkermansia, Enterococcus (1.88 ± 2.49%), Prevotella (1.86 ± 2.52%), Veillonella (0.98 ± 1.21%), Rothia (0.62 ± 0.82%), Clostridium IV (0.60 ± 1.35%).
- **Depleted in CPE** (all P<0.001): Bacteroides (10.94%), Faecalibacterium (0.78 ± 0.82%), Blautia (1.44 ± 2.68%, P=0.022), Ruminococcus (0.01 ± 0.02%), Roseburia (0.00%), Anaerostipes (0.04 ± 0.06%), Parasutterella (0.00%).
- **Co-occurrence**: Bacteroides negatively correlated with Lactobacillus (r=−0.768, P<0.001) and Prevotella (r=−0.722); Intestinibacter negatively correlated with Bifidobacterium (r=−0.726) and Enterococcus (r=−0.707). Among CPE-enriched taxa, Streptococcus–Actinomyces (r=0.833), Actinomyces–Veillonella (r=0.811).
- **KEGG functional shifts**: Neurodegenerative diseases (0.14 ± 0.02%) and Immune system diseases (0.06 ± 0.00%) elevated in CPE. Nervous system (0.12 ± 0.00%) and Biosynthesis of secondary metabolites (0.86%) depleted. Neurodegenerative risk attributed to Streptococcus; immune risk to Akkermansia overgrowth.

## Methods

- 25 CPE patients and 21 healthy children, aged 3–18 years, enrolled Aug–Dec 2017. 15/25 CPE patients on anti-seizure drugs. Excluded: antibiotics/probiotics/PPIs within 2 weeks.
- 16S rRNA V3–V4 sequencing (MiSeq, 300-nt paired-end). 2,293,673 tags. OTUs at 97% (USEARCH v7.0.1090), annotated against RDP release 11.5.
- 341 genera from 21 phyla identified across all samples. CPE: 157–1,333 OTUs; healthy: 109–242 OTUs.
- PICRUSt functional prediction: 6,909 KOs, 37 KEGG level-II categories. PERMANOVA confirmed health condition as dominant driver (P<0.001, FDR<0.001); age, gender, BMI, anti-seizure drug use not significant.

## Detailed Summary

The foundational cross-sectional study with healthy controls. The SCFA-producing community (Bacteroides, Faecalibacterium, Blautia, Ruminococcus, Roseburia, Anaerostipes) is comprehensively depleted in CPE. Anaerostipes and Faecalibacterium normally co-produce butyrate from acetate; their combined loss causes acetate accumulation, which activates the parasympathetic nervous system and may trigger seizures — a direct gut-brain mechanism.

Akkermansia overgrowth degrades mucin in the mucous layer, increasing mucosal permeability and exposing the immune system to bacterial antigens, driving elevated immune system disease risk. Streptococcus enrichment drives IL-6 and TNF-α elevation, contributing to neurodegenerative disease risk via neuroinflammation.

The co-occurrence network reveals that Bacteroides normally competitively suppresses Bifidobacterium and Lactobacillus in mature gut microbiota. Loss of Bacteroides releases this brake, allowing immature-pattern taxa to dominate.

## Relevance to WikiBiome

- Primary quantitative source for the [[cerebral-palsy]] entity page's Microbiome Associations section. Provides exact percentages and P-values for all enriched/depleted genera.
- Akkermansia overgrowth as mucosal permeability driver is informative for [[akkermansia-muciniphila]].
- Streptococcus-neuroinflammation link informs [[streptococcus]] entity page.
- Butyrate depletion mechanism informs [[butyrate]] concept page.

## Relevance to Cureva

- Backbone of Layer 2 (taxonomic signature) for [[cureva/signatures/cerebral-palsy]].
- Anaerostipes/Faecalibacterium co-depletion → acetate accumulation → parasympathetic activation → seizure: a mechanistic intervention target (Primitive 5).
- Intervention hypothesis: restore Bacteroides dominance to re-establish competitive suppression of pathobionts (Primitive 5).

## Contradictions / Tensions

- Higher diversity in CPE is counterintuitive relative to most dysbiotic conditions. Reflects the specific ecology of neurological disability (liquid diet, medications, motility dysfunction) rather than classic inflammatory dysbiosis. Consistent with [[huang-2022-oral-gut-microbiota-cpe-correlations]].

## Open Questions

- How much of the taxonomic shift is driven by antiepileptic drugs vs. the neurological condition itself?
- Can restoration of Bacteroides dominance reduce seizure frequency by normalizing the Anaerostipes/Faecalibacterium-butyrate pathway?
