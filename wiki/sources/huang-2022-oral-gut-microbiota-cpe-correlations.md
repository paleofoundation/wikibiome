---
title: "Huang 2022 — Correlations Between Gastrointestinal and Oral Microbiota in Children With Cerebral Palsy and Epilepsy"
type: source
created: 2026-04-16
updated: 2026-04-16
authors: [Congfu Huang, Chunuo Chu, Yuanping Peng, Nong Zhang, Zhenyu Yang, Jia You, Fengxiang Wei]
corresponding_author: "Fengxiang Wei"
corresponding_email: "haowei727499@163.com"
institution: "Longgang District Maternity & Child Healthcare Hospital, Shenzhen, China"
year: 2022
journal: "Frontiers in Pediatrics"
doi: "10.3389/fped.2022.988601"
pmid: "not yet verified"
evidence_level: cross-sectional
sample_size: "n=27 CPE children"
tags: [cerebral-palsy, epilepsy, oral-microbiota, gut-microbiota, oral-gut-axis, periodontitis, constipation, malnutrition]
library_category: signatures
platform: wikibiome
condition: "cerebral-palsy"
karen_brain_primitives: [5, 6, 9]
metals_discussed: [iron, zinc, calcium]
taxa_discussed: [bifidobacterium, bacteroides, prevotella, fusobacterium, neisseria, streptococcus, porphyromonas, actinomyces, veillonella, akkermansia, faecalibacterium, collinsella, oscillibacter, clostridium]
key_findings:
  - "96.3% of CPE children had periodontitis and 81.48% had dental caries, with Prevotella (15.49%), Fusobacterium (9.34%), and Neisseria (7.68%) dominating the oral microbiome"
  - "Gut microbiome of CPE children was dominated by Bifidobacterium (21.73%), Bacteroides (9.99%), and Prevotella (8.72%) — top three genera linked to chronic inflammation and malnutrition"
  - "Oral-gut co-occurrence network showed strong positive correlations (r=0.837–0.851) between oral pathogens and gut pathobionts, confirming oral-to-gut translocation"
keystone: false
---

## Key Findings

- **96.3% periodontitis prevalence** in CPE children (n=27), 81.48% dental caries, 40.74% intractable constipation. All children had malnutrition.
- **Oral microbiome top 3**: Prevotella (15.49%), Fusobacterium (9.34%), Neisseria (7.68%) — all associated with periodontal disease, caries, and systemic inflammation.
- **Gut microbiome top 3**: Bifidobacterium (21.73%), Bacteroides (9.99%), Prevotella (8.72%) — the first two reflecting immature gut ecology in these institutionalized children.
- **Cross-kingdom concordance**: Oral Capnocytophaga positively correlated with intestinal Christensenella (r=0.847), Alistipes (r=0.850), and Clostridium-IV (r=0.837). Oral Treponema correlated with intestinal Parabacteroides (r=0.849) and Alistipes (r=0.851).
- **Defecation frequency** positively correlated with gut Alloprevotella (r=0.396, P=0.041) and Blautia (r=0.402, P=0.038), but negatively with Alistipes (r=−0.488, P=0.010).
- **Spasm frequency** positively correlated with gut Senegalimassilia (r=0.724, P=0.000) and Staphylococcus (r=0.698, P=0.000).
- Gut phyla: Firmicutes (32.69%), Bacteroidetes (28.87%), Actinobacteria (27.55%), Proteobacteria (4.70%), Fusobacteria (1.90%).
- Oral phyla: Bacteroidetes (27.81%), Proteobacteria (23.66%), Firmicutes (15.68%), Actinobacteria (13.19%), Fusobacteria (10.91%).

## Methods

- **Design**: Cross-sectional observational study.
- **Population**: 27 CPE children aged 4–14 years from Longgang District Social Welfare Center, Shenzhen, China. All received liquid food. Excluded: inherited metabolic disease, GI dysplasia, long-term parenteral nutrition, antibiotic/probiotic exposure within 4 weeks.
- **Samples**: Subgingival oral plaque (first deciduous/permanent molar) and fecal samples collected simultaneously.
- **Sequencing**: 16S rRNA V3–V4 amplicon (MiSeq platform, 250-bp paired-end). OTUs clustered at 97% similarity using USEARCH, annotated against Greengenes v13.5.
- **Statistics**: PCA (ade4), PERMANOVA (vegan), Pearson/Spearman correlations (P<0.05 threshold).
- **No healthy control group** — a key limitation. Comparisons draw on prior published data from same research group.

## Detailed Summary

This study simultaneously profiled oral and gut microbiota in 27 CPE children from a social welfare institution. The oral microbiome was dominated by periodontitis-associated organisms: Prevotella (the most abundant genus at 15.49%), Fusobacterium (9.34%), Neisseria (7.68%), with Actinomyces (5.49%), Streptococcus (3.41%), and Porphyromonas (3.08%) also prominent. This mirrors the high clinical burden: 96.3% periodontitis, 81.48% dental caries.

The gut microbiome was dominated by Bifidobacterium (21.73%) — a marker of microbiome immaturity in this institutionalized liquid-fed cohort — alongside Bacteroides (9.99%), Prevotella (8.72%), Parabacteroides (4.7%), Collinsella (4.63%), and Megasphaera (2.99%). Pathobionts Collinsella, Enterococcus, and Streptococcus were elevated; commensals Bacteroides, Prevotella, Roseburia, and Lactobacillus were depleted relative to healthy children (from authors' prior work).

The co-occurrence network analysis revealed strong positive correlations between oral pathogens and gut taxa, confirming bidirectional oral-gut translocation. Notably, oral Actinomyces correlated with gut Alistipes (r=0.834) and Phascolarctobacterium (r=0.842) — both pro-inflammatory genera. Oral Treponema correlated with gut Clostridium-XlVa (r=0.845).

Correlations between microbiota and clinical phenotypes revealed that gut Blautia and Alloprevotella abundance tracked positively with defecation frequency, suggesting these taxa as potential markers of gut motility in CP. Spasm frequency showed the strongest positive correlation with gut Senegalimassilia (r=0.724) — a finding not previously reported in this context.

## Relevance to WikiBiome

- Provides quantitative oral microbiome data for the [[cerebral-palsy]] entity page's Oral-Gut Inflammatory Axis section.
- The 96.3% periodontitis statistic (with exact genus-level composition) strengthens the oral-gut axis narrative.
- The co-occurrence network data demonstrates the mechanism by which Prevotella and Fusobacterium translocate from oral to gut compartments in CP.
- Directly informative for [[prevotella]], [[fusobacterium]], [[veillonella]], and [[porphyromonas]] entity pages.

## Relevance to Cureva

- Confirms Blautia and Alloprevotella as motility-associated taxa — relevant to constipation intervention targeting.
- Senegalimassilia-spasm correlation is a preliminary finding warranting monitoring in clinical assessments.
- Supports oral health intervention as an ecological engineering target (Primitive 5) — reduce oral pathogen reservoir to reduce gut inflammatory load.
- The Collinsella, Alistipes, and Enterococcus enrichment pattern in institutionalized CP children supports the welfare-care-mode signature.

## Contradictions / Tensions

- Bifidobacterium appears at 21.73% in gut of CPE children here, yet is generally regarded as beneficial. The authors note this reflects microbiome immaturity in institutionalized, liquid-fed children rather than true enrichment of a pathogen — consistent with [[huang-2019-gut-microbiota-cerebral-palsy-epilepsy]] findings.
- No healthy control group in this study; comparisons rely on the authors' prior publications.

## Open Questions

- Does treatment of periodontitis in CPE children reduce gut pathobiont load and improve constipation?
- Are the Senegalimassilia-spasm and Staphylococcus-spasm correlations reproducible in larger cohorts?
- Does liquid feeding per se drive the Bifidobacterium dominance, obscuring more informative ecological signals?
