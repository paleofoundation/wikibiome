---
title: "Alterations and Mechanism of Gut Microbiota in Graves' Disease and Hashimoto's Thyroiditis"
type: source
created: 2026-04-09
updated: 2026-04-20
authors: [Zhao H, Yuan L, Zhu D, Sun B, Du J, Wang J]
journal: Polish Journal of Microbiology
year: 2022
doi: "10.33073/pjm-2022-016"
evidence_level: cross-sectional
sample_size: "n=70 (27 GD, 27 HT, 16 healthy controls)"
tags: [hashimotos-thyroiditis, thyroid, gut-microbiome, Graves-disease, 16S-rRNA, ABC-transporter, Bacteroidetes, Proteobacteria, Actinomycetes, KEGG, biomarkers, cross-sectional, dysbiosis]
platform: wikibiome
condition: "autoimmune thyroid disease"
library_category: signatures
karen_brain_primitives: [1, 5]
metals_discussed: []
taxa_discussed: [blautia, christensenellaceae, lachnospiraceae, prevotella, ruminococcus, bacillus, enterococcaceae, erysipelotrichaceae]
key_findings:
  - "Gut microbiota overall structure significantly different in GD and HT vs. controls despite similar alpha diversity (Shannon/Simpson not significantly different)"
  - "686 total OTUs detected; GD and HT each had ~60 unique OTUs vs. 21 unique in controls"
  - "ABC transporter metabolic pathway highly correlated with GD and HT occurrence; carbohydrate transport/metabolism enriched"
  - "Bacillus, Blautia, and Ornithinimicrobium identified as potential biomarkers distinguishing GD/HT from healthy controls"
  - "Proteobacteria and Actinomycetes highest in HT group; HT group also contained Verrucomicrobiaceae"
keystone: false
---

# Alterations and Mechanism of Gut Microbiota in Graves' Disease and Hashimoto's Thyroiditis

**Note:** This source page is the primary record for this study. A duplicate page exists at [[zhao-2022-gut-microbiota-graves-hashimotos]]; both describe the same paper (DOI: 10.33073/pjm-2022-016). **No matching PDF was located in `raw/`** — the paper was likely ingested from an online source. Frontmatter and body are maintained here as the canonical version.

## Key Findings

- **Gut microbiota structure significantly altered in GD and HT** compared to healthy controls, though bacterial abundance and overall diversity (Shannon, Simpson indices) were not significantly different between groups ([[zhao-2022-gut-microbiota-graves-disease-hashimotos]], cross-sectional, n=70).
- **686 total OTUs detected** across all samples; 389 shared among all three groups; 63 unique to GD, 61 unique to HT, and only 21 unique to controls — indicating disease-associated microbial expansion ([[zhao-2022-gut-microbiota-graves-disease-hashimotos]], cross-sectional).
- **Proteobacteria and Actinomycetes contents were highest in HT group**; HT also contained a small number of Verrucomicrobiaceae. GD and HT groups had higher Erysipelotrichia and Cyanobacteria and lower Bacillaceae and Megamonas vs. controls ([[zhao-2022-gut-microbiota-graves-disease-hashimotos]], cross-sectional).
- **ABC transporter metabolic pathway** was highly correlated with GD and HT occurrence by KEGG/COG functional analysis, with enrichment in carbohydrate transport and metabolism ([[zhao-2022-gut-microbiota-graves-disease-hashimotos]], cross-sectional).
- **Bacillus, Blautia, and Ornithinimicrobium** identified as potential biomarkers distinguishing GD and HT from healthy populations by LEfSe analysis ([[zhao-2022-gut-microbiota-graves-disease-hashimotos]], cross-sectional).

## Methods

- **Study design:** Cross-sectional case-control study conducted in northeastern China (Xiamen).
- **Population:** 70 fecal samples from 27 GD patients, 27 HT patients, and 16 healthy volunteers.
- **Inclusion criteria:** GD patients aged 18-70 with clinical hyperthyroidism; HT patients with FT4 < 22.1 IU/l, TSH > 0.27 mIU/l, and ultrasound consistent with Hashimoto's; controls with normal thyroid function.
- **Exclusion criteria:** Pregnancy, lactation, smoking, alcohol, use of probiotics/prebiotics/synbiotics/hormones/drugs/laxatives in recent 3 months; other autoimmune diseases (MS, RA); Chinese herbal medicine.
- **Sequencing:** 16S rRNA gene sequencing (V3-V4 region) on Illumina MiSeq platform.
- **Bioinformatics:** UPARSE pipeline at 97% similarity for OTU clustering; RDP classifier with Silva database (SSU123); PLS-DA, LEfSe (LDA > 3), KEGG/COG functional prediction.
- **Statistics:** ANOSIM for beta diversity (R = 0.2519 between groups); binary Jaccard similarity; Shannon and Simpson indices for alpha diversity.

## Detailed Summary

This study from northeastern China compared gut microbiota composition across Graves' disease, Hashimoto's thyroiditis, and healthy controls using 16S rRNA sequencing. The key distinction from other studies in this area is the simultaneous comparison of both major autoimmune thyroid diseases against the same control group.

**Alpha diversity** was not significantly different between groups (Shannon and Simpson indices), which contrasts with several other studies finding reduced diversity in thyroid autoimmunity. However, **beta diversity** analysis via PLS-DA and ANOSIM confirmed significantly different overall community composition (R = 0.2519), indicating structural rather than richness-level differences.

**At the family level**, Lachnospiraceae, Alcaligenaceae, Christensenellaceae, and Erysipelotrichaceae were prevalent in GD. Enterococcaceae, Erysipelotrichaceae, and Bacillobacteriaceae were abundant in HT. Controls were enriched in Peptostreptococcaceae, Bacillaceae, and Matophyaceae.

**LEfSe analysis** identified 24 discriminant features for GD vs. controls (LDA > 3) and 13 for HT vs. controls. At the genus level, **Prevotella_9, Ruminococcus_2, and Lachnospiraceae_NK4A136_group** were higher in GD patient samples, while **Coprococcus_3, Ruminococcus_gnavus_group, Acetanaerobacterium, and Ruminiclostridium_5** were enriched in HT.

**KEGG functional analysis** revealed that the ABC transporter pathway was enriched in both disease groups relative to controls. ABC transporters are involved in the active transport of diverse substrates including nutrients, minerals, and metabolites across membranes, suggesting altered nutrient handling in the dysbiotic thyroid autoimmune gut. Carbohydrate transport and metabolism were also enriched in disease groups.

The study's main limitation is the modest sample size (n=70) and cross-sectional design, which cannot establish causality. The geographic restriction to northeastern China also limits generalizability.

## Relevance to WikiBiome

- **[[graves-disease]] entity page:** Provides genus-level discriminant taxa specific to GD (Prevotella_9, Ruminococcus_2, Lachnospiraceae_NK4A136_group).
- **[[hashimotos-thyroiditis]] entity page:** Documents HT-specific enrichment of Proteobacteria, Actinomycetes, and Verrucomicrobiaceae; genus-level biomarkers including Coprococcus_3 and Ruminococcus_gnavus_group.
- **[[blautia]] entity page:** Identified as potential diagnostic biomarker for thyroid autoimmunity.
- **[[gut-thyroid-axis]] concept page:** ABC transporter pathway enrichment adds functional dimension to gut-thyroid dysbiosis.
- **[[prevotella]] entity page:** Prevotella_9 enrichment in GD adds to conditions_enriched_in.

## Relevance to Cureva

- **Graves' disease signature:** Adds taxonomic layer data — Prevotella_9 and Ruminococcus_2 enrichment, Bacillaceae depletion.
- **Hashimoto's signature:** Proteobacteria/Actinomycetes enrichment pattern; Coprococcus_3 and R. gnavus enrichment.
- **ABC transporter pathway** as potential functional biomarker for AITD — could inform metabolomic intervention targets.
- Supports Karen's Brain Primitive 1 (microbial community structure differs in disease) and Primitive 5 (two-sided ecological engineering — suppress enriched pathobionts AND restore depleted taxa like Bacillaceae).

## Contradictions / Tensions

- **Alpha diversity not significantly different** between groups — this contrasts with [[chen-2021-gut-microbiota-thyroid-graves]] and [[su-2020-gut-microbiota-immune-imbalance-graves]] which found significantly reduced diversity in GD. The discrepancy may reflect different patient populations, disease severity, or treatment status.
- **Blautia as biomarker:** Enriched in HT here, but the directionality varies across studies — [[chen-2021-gut-microbiota-thyroid-graves]] found Blautia enriched in GD then decreased after treatment. The genus-level classification may mask species-level differences.

## Open Questions

1. What specific substrates are transported by the enriched ABC transporters — are they related to iodine, selenium, or other thyroid-relevant minerals?
2. Do the GD and HT microbiota signatures converge or diverge further with treatment?
3. Would species-level resolution (via shotgun metagenomics) clarify the Blautia discrepancy between studies?
4. Is the Verrucomicrobiaceae presence in HT (potentially Akkermansia) functionally significant for barrier integrity?
