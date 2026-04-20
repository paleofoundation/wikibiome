---
title: "Liu 2019 — Altered Gut Microbiota and Short Chain Fatty Acids in Chinese Children with Autism Spectrum Disorder"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Simeng Liu, Enyao Li, Zhenyu Sun, Dongjun Fu, Guiqin Duan, Miaomiao Jiang, Yong Yu, Lu Mei, Pingchang Yang, Youcai Tang, Pengyuan Zheng]
year: 2019
journal: "Scientific Reports"
doi: "10.1038/s41598-018-36430-z"
evidence_level: expert-opinion
tags: [autism-spectrum-disorder, SCFAs, gut-microbiota, butyrate, valeric-acid, acetic-acid, constipation, Clostridium, Fusobacterium, Acidobacteria, Ruminococcaceae, Erysipelotrichaceae, 16S-rRNA]
library_category: metabolomics
platform: 16S-rRNA-GC
condition: "autism spectrum disorder"
metals_discussed: [iron, zinc]
taxa_discussed: [clostridium, eubacterium, fusobacterium-nucleatum, lachnospiraceae, propionibacterium]
karen_brain_primitives: [4, 5, 8]
key_findings: ["Acetic acid", "Valeric acid"]
---

# Overview

Integrated 16S rRNA gene sequencing and fecal SCFA analysis of **30 autistic and 20 neurotypical Chinese children** (mean age ~4.3 years). Found **lower fecal acetic acid and butyrate but higher valeric acid** in ASD, decreased abundances of key butyrate-producing taxa ([[ruminococcaceae|Ruminococcaceae]], [[eubacterium]], [[lachnospiraceae]], [[dysbiosis|Erysipelotrichaceae]]), and increased abundance of valeric acid-associated bacteria ([[dysbiosis|Acidobacteria]], [[enterobacteriaceae]]).

# Key Findings

## Fecal SCFA Levels

- **Acetic acid**: significantly decreased in ASD (899.9 vs ~control, p = 0.011)
- **Butyrate**: significantly decreased in ASD (413.2 vs 563.3, p = 0.005)
- **Valeric acid**: markedly higher in ASD (1,646.9 vs 615.8, p < 0.001)
- **Propionic acid**: no significant difference (p = 0.243)

## Microbiota Composition

### Phylum Level
- **Firmicutes** significantly increased in ASD (51.91% vs 58.82% in NT)
- **Bacteroidetes**: no significant difference at family level
- Higher **Firmicutes/Bacteroidetes ratio** in ASD

### Enriched in ASD (LEfSe)
- **[[veillonellaceae|Veillonellaceae]]** and **[[enterobacteriaceae]]**: significantly enriched
- [[dysbiosis|Acidobacteria]], [[enterobacteriaceae]], [[pseudomonas-aeruginosa|Pseudomonadaceae]]: increased
- [[megasphaera|Megamonas]]: overrepresented in ASD

### Depleted in ASD
- **[[ruminococcaceae|Ruminococcaceae]]**, **[[streptococcus|Streptococcaceae]]**, **[[eubacterium]]**: reduced within Firmicutes
- **[[lachnospiraceae]]-NC2004 group**: reduced
- **[[dysbiosis|Erysipelotrichaceae]]**: highly decreased — key butyrate producer
- **Propionibacterium**: reduced

## SCFA-Microbiota Correlations (Spearman)

- **[[dysbiosis|Acidobacteria]]** positively correlated with valeric acid (rs = 0.349, p = 0.013)
- **[[streptococcus|Streptococcaceae]]** positively correlated with valeric acid (rs = 0.368, p = 0.009)
- **[[lactobacillus|Lactobacillaceae]]** positively correlated with butyrate (rs = 0.467, p = 0.001)
- **[[clostridium|Clostridiaceae_1]]** positively correlated with butyrate (rs = 0.441, p = 0.001)
- **[[desulfovibrio|Desulfovibrionaceae]]** positively correlated with acetic acid (rs = 0.295, p = 0.038)
- **[[desulfovibrio|Desulfovibrionaceae]]** and [[streptococcus|Streptococcaceae]] positively correlated with butyrate

## Constipation Effects

- Constipation significantly higher in ASD (26.7% moderate + 3.3% severe vs 5% in controls, p = 0.035)
- Constipated ASD microbiota diverged from non-constipated ASD on weighted UniFrac (beta diversity)
- **[[fusobacterium]]**, [[parabacteroides|Barnesiella]], [[parabacteroides|Coprobacter]], [[olsenella|Olsenella]], [[allisonella]], [[actinomyces|Actinomycetaceae]]: associated with constipated ASD
- [[holdemanella|Holdemanella]] overrepresented in non-constipated ASD

# Relevance to Metallomic Framework

**High relevance** — SCFA-microbiota shifts directly impact metal metabolism:

- Depleted **[[butyrate]]** producers → reduced HDAC inhibition → impaired [[zinc]]-dependent histone deacetylase regulation
- Butyrate deficiency → reduced [[iron]] transporter expression in colonocytes
- Elevated **valeric acid** — less studied SCFA; associations with [[dysbiosis|Acidobacteria]] suggest environmental metal-tolerant taxa
- **[[desulfovibrio|Desulfovibrionaceae]]** correlation with acetic acid — sulfate-reducing bacteria that sequester [[iron]]
- **[[enterobacteriaceae]]** enrichment — siderophore-producing [[iron]] scavengers
- Constipation alters intestinal transit time → affects mineral absorption efficiency

# Methodological Notes

- Chinese children from Zhengzhou (central China)
- Small sample (30 ASD, 20 NT) — limited statistical power
- V3-V4 16S rRNA sequencing (Illumina NextSeq500)
- GC for SCFA quantification
- Young cohort (mean age 4.3 years) — captures early developmental period
- Constipation as significant GI comorbidity — not excluded, analyzed separately
- Registered in Chinese Clinical Trial Registry (ChiCTR2100052106)
