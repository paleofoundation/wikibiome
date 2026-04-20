---
title: "Geng 2021 — Gut Microbiota Diversity and Functional Erectile Dysfunction"
type: source
created: 2026-04-19
updated: 2026-04-19
authors: [Qiang Geng, Shaofeng Chen, Yuan Sun, Yu Zhao, Zhong Li, Fu Wang, Guojin Yu, Xiuchuan Yan, Jun Guo]
corresponding_author: "Shaofeng Chen"
corresponding_email: "wisefeng@126.com"
institution: "Tianjin University of Traditional Chinese Medicine / Xiyuan Hospital"
year: 2021
journal: "Research Square (preprint)"
doi: "https://doi.org/10.21203/rs.3.rs-454949/v1"
pmid: ""
evidence_level: cross-sectional
sample_size: "n=60 (30 ED, 30 healthy donors)"
tags: [erectile-dysfunction, gut-microbiota, 16S-rRNA, alpha-diversity, dysbiosis, TMAO, inflammation]
library_category: signatures
platform: both
condition: "erectile dysfunction"
karen_brain_primitives: [1, 5, 9]
metals_discussed: []
taxa_discussed: [streptococcus, prevotella, blautia, roseburia, subdoligranulum, lachnospiraceae, alloprevotella]
key_findings:
  - "ED patients had significantly lower gut bacterial diversity than healthy controls (Shannon index P=0.00074)"
  - "Streptococcus and Subdoligranulum were enriched in ED; Prevotella_9, Blautia, Lachnospiraceae NK4A136, and Roseburia were depleted"
  - "LEfSe analysis identified 24 differentially abundant genera between ED and healthy groups"
keystone: false
---

## Key Findings

- **ED patients showed significantly reduced gut microbial alpha diversity** compared to healthy donors (Shannon diversity: HD = 5.741, ED = 4.982; P = 0.00074), indicating a less rich and less uniform microbial ecosystem ([[geng-2021-gut-microbiota-diversity-erectile-dysfunction]], cross-sectional, n=60).
- **Six genera were significantly different between groups by t-test** (all P < 0.05): *Streptococcus* (P=0.043) and *Subdoligranulum* (P=0.036) were increased in ED, while *Prevotella_9* (P=0.026), *Blautia* (P=0.049), *Lachnospiraceae* NK4A136 group (P=0.007), and *Roseburia* (P=0.018) were decreased ([[geng-2021-gut-microbiota-diversity-erectile-dysfunction]]).
- **PCoA analysis (Unweighted UniFrac) showed clear separation** between ED and healthy donor groups, confirming distinct community structures ([[geng-2021-gut-microbiota-diversity-erectile-dysfunction]]).
- **LEfSe analysis identified 24 bacterial genera** with LDA scores above 2 that differed between groups; *Lachnospiraceae* NK4A136 group and *Prevotella_9* had the greatest influence on group separation ([[geng-2021-gut-microbiota-diversity-erectile-dysfunction]]).
- ***Alloprevotella* was identified only in the healthy donor group**, absent from ED patients entirely ([[geng-2021-gut-microbiota-diversity-erectile-dysfunction]]).

## Methods

- **Design:** Cross-sectional case-control comparison of gut microbiota between functional (psychogenic) ED patients and healthy male volunteers.
- **Participants:** 30 ED patients (mean age 29.33 +/- 2.73 years, IIEF-5 scores 8-21, mild to moderate ED) and 30 healthy donors (mean age 29.17 +/- 2.66 years, IIEF-5 scores 22-25). No significant age difference between groups (P > 0.05). Recruited from the First Affiliated Hospital of Tianjin University of Chinese Medicine, October 2018 to October 2019.
- **Exclusion criteria:** Organic causes excluded (cardiovascular, hepatic, renal, nervous system disease; genital deformities; drug abuse within 2 years; antibiotic/probiotic use within 3 months).
- **Sequencing:** Illumina MiSeq platform, 16S rRNA gene V3-V4 region, paired-end 300 bp sequencing. 49 samples passed quality control (ED: 26, HD: 23).
- **Analysis pipeline:** OTU clustering and annotation, alpha diversity (Shannon index), beta diversity (PCoA with Unweighted UniFrac), t-test at genus level, and LEfSe (LDA Effect Size) for differential abundance. Statistical significance at P < 0.05.

## Detailed Summary

This study examined the gut microbiota composition in men with functional (psychogenic) erectile dysfunction compared to age-matched healthy male controls. The study focused exclusively on non-organic ED -- patients without cardiovascular, metabolic, or anatomical causes -- to isolate the gut-brain-sexual function axis.

**Community-level differences:** At the phylum and genus level, the top 10 abundant bacteria and core flora (>90% of community) did not differ significantly between groups. The divergence appeared at the level of less-abundant genera and in overall diversity metrics. Alpha diversity was significantly lower in the ED group (Shannon index 4.982 vs. 5.741, P = 0.00074). Beta diversity analysis via PCoA showed clear clustering by group, confirming structurally distinct communities.

**Enriched in ED:** *Streptococcus* and *Subdoligranulum* were significantly increased. The authors note that *Streptococcus* (including Group A Streptococcus) is associated with inflammatory responses, systemic diseases including endocarditis and abscess, and increased IL-1 mRNA expression. Both *Streptococcus* and *Roseburia* (which was depleted) are associated with inflammatory pathways, and ED is linked to inflammatory pathogenesis.

**Depleted in ED:** *Prevotella_9*, *Blautia*, *Lachnospiraceae* NK4A136 group, and *Roseburia* were all decreased. The [[lachnospiraceae]] family (including the NK4A136 group) and [[roseburia]] are known SCFA producers, particularly butyrate. *Roseburia* (Roxella) induces TLR2 signaling pathways and is associated with anti-inflammatory effects via butyrate production. Their depletion suggests loss of anti-inflammatory and barrier-protective functions.

**TMAO connection:** The discussion highlights that gut microbiota-derived TMAO promotes vascular endothelial inflammation, enhances smooth muscle cell proliferation, leads to vascular wall fibrosis and vascular function destruction, and causes endothelial dysfunction through ROS-mediated oxidative stress. Normal erectile function depends on functional penile blood vessels and cavernous blood vessels, linking gut microbial metabolites to vascular ED mechanisms.

**Hormone-microbiome axis:** The authors reference prior work showing that intestinal microbiota regulate testosterone levels -- germ-free mice had higher testosterone, and transplantation of male microbiota into female nude mice altered testosterone and autoimmunity. This suggests gut microbiota may influence sexual function via hormonal regulation.

## Relevance to WikiBiome

- Informs the [[erectile-dysfunction]] entity page with direct 16S sequencing evidence of microbial diversity loss in ED patients.
- Strengthens [[roseburia]], [[blautia]], [[lachnospiraceae]], and [[streptococcus]] entity pages with a new condition association.
- Supports the [[gut-penis-axis]] concept page with evidence that psychogenic ED correlates with distinct gut community structure even in the absence of organic disease.
- The TMAO-vascular connection links to [[trimethylamine-n-oxide]] and vascular endothelial dysfunction mechanisms.
- The *Alloprevotella* complete absence from ED patients is a notable finding for [[alloprevotella]] entity pages.

## Relevance to Cureva

- Contributes taxonomic signature data to the [[erectile-dysfunction-signature]]: enrichment of *Streptococcus* and *Subdoligranulum*, depletion of *Prevotella_9*, *Blautia*, *Lachnospiraceae* NK4A136, and *Roseburia*.
- The depletion of SCFA-producing taxa ([[roseburia]], [[blautia]], [[lachnospiraceae]]) suggests a potential intervention hypothesis: restoring butyrate-producing capacity via targeted probiotics or dietary fiber to support barrier function and reduce vascular inflammation.
- The inflammatory pathway connection (Streptococcus enrichment, Roseburia depletion, TMAO production) informs ecological layer analysis and may support anti-inflammatory intervention approaches.
- Loss of alpha diversity supports [[two-sided-ecological-engineering]] -- interventions must both suppress pro-inflammatory taxa and restore missing SCFA producers.

## Contradictions / Tensions

- This is a preprint (Research Square, posted May 2021) and has **not undergone peer review**. Findings should be weighted accordingly against peer-reviewed studies such as [[su-2025-altered-gut-microbiota-erectile-dysfunction-pilot]] and Mendelian randomization studies like [[chen-2023-gut-microbiota-erectile-dysfunction-mendelian-randomization]].
- The study excludes organic ED causes, so findings apply specifically to functional/psychogenic ED. Other ED signature sources that include mixed or organic ED populations may show different taxonomic patterns.
- Sample size is modest (n=60 enrolled, 49 passed QC) and the population is young Chinese men (mean age ~29), limiting generalizability to older populations or other ethnicities.
- No metals were measured in this study, so it does not directly inform the metallomic layer of the ED signature. The TMAO-vascular discussion is drawn from external references, not original data.

## Open Questions

- Would these same taxonomic shifts be observed in organic ED (vascular, neurogenic) or only in psychogenic ED?
- What is the TMAO level difference between ED and healthy groups? This study discusses TMAO mechanistically but did not measure it.
- Does the *Alloprevotella* absence in ED represent a genuine biomarker or a sampling artifact at n=49?
- Would restoration of depleted SCFA producers (e.g., via butyrate-producing probiotic strains) improve erectile function in a clinical trial?
- How do these findings compare across different age groups and ethnicities?
