---
title: "Wang 2026 — Intestinal Fungal Dysbiosis in Gestational Diabetes Mellitus Associated with Adverse Pregnancy Outcomes"
type: source
created: 2026-04-14
updated: 2026-04-14
authors: [Wenxin Wang, Sha Lu, Yuanqing Fu, Yuyun Yao, Wensheng Hu]
corresponding_author: "Wensheng Hu"
corresponding_email: "huws@zju.edu.cn"
institution: "Zhejiang Chinese Medical University / Hangzhou Women's Hospital, China"
year: 2026
journal: "BMC Pregnancy and Childbirth"
doi: "10.1186/s12884-026-08677-2"
evidence_level: case-control
sample_size: "n=188 (96 GDM, 92 healthy pregnant)"
tags: [gestational-diabetes, mycobiome, fungal-dysbiosis, pregnancy, candida, saccharomyces, aspergillus, penicillium, pichia, adverse-pregnancy-outcomes, itsrna]
library_category: signatures
platform: cureva
condition: "gestational-diabetes"
karen_brain_primitives: [4, 5, 6]
metals_discussed: []
taxa_discussed: [candida, saccharomycopsis, aspergillus, penicillium, pichia, saccharomyces]
key_findings:
  - "Alpha-diversity of gut fungi significantly decreased in GDM vs healthy pregnant women at 24-28 weeks gestation (Shannon, Simpson; P<0.01)"
  - "Candida positively correlated with glucose metabolism indicators and drove GDM clustering; 8 genera (Saccharomycopsis, Aspergillus, Penicillium, Pichia, etc.) enriched in healthy controls"
  - "Intestinal Saccharomyces independently protective against adverse pregnancy outcomes in GDM (OR=0.206, 95% CI: 0.046-0.916, P=0.038)"
---

# Key Findings

- **Gut fungal alpha-diversity is significantly decreased in GDM** compared to healthy pregnant women at 24-28 weeks gestation (Shannon, Simpson indices, P<0.01). Sample size was determined by power calculation (alpha=0.05, 95% power, 10% attrition); minimum 94 per group, actual 96 GDM and 92 controls.
- **Candida drives the GDM clustering signature** and is positively correlated with glucose metabolism indicators. Eight genera including **Saccharomycopsis, Aspergillus, Penicillium, and Pichia** were enriched in healthy pregnant women. Random forest algorithm ranked the top discriminating fungi.
- **Saccharomyces was an independent protective factor** against adverse pregnancy outcomes in GDM via logistic multivariate regression (OR=0.206, 95% CI: 0.046-0.916, P=0.038). Adverse outcomes included preterm birth, premature rupture of membranes, macrosomia, low birth weight, fetal growth restriction, neonatal asphyxia, jaundice, and infection.

# Methods

Case-control study of 188 pregnant women (96 GDM diagnosed by 75g OGTT, 92 healthy) at 24-28 weeks gestation at Hangzhou Women's Hospital. Stool samples sequenced via ITS2 rRNA (Illumina NovaSeq, 2x250bp, mean depth 334,052 reads). QIIME2, DADA2 denoising, UNITE v8.2 reference (99%). LEfSe LDA>3.5, random forest, Spearman correlation, logistic multivariate regression for adverse outcome prediction.

# Relevance to WikiBiome

- Informs **[[type-2-diabetes|gestational-diabetes]]** entity page: documents fungal dysbiosis signature with clinical relevance to pregnancy outcomes.
- Informs **[[candida-albicans|candida]]** entity page: positive correlation with glucose metabolism in pregnancy, clinical relevance.
- Informs **[[saccharomyces]]** entity page: protective role against adverse pregnancy outcomes.
- Informs **[[mycobiome]]** concept page: pregnancy-specific mycobiome dynamics.

# Relevance to Cureva

- **GDM signature page** Layer 2 (taxonomic): Candida enrichment + Saccharomycopsis/Aspergillus/Penicillium/Pichia depletion. Confidence: moderate (single study, good sample size n=188).
- **Intervention triangle** for Saccharomyces boulardii (or other Saccharomyces probiotics) in GDM: I -> f (restore Saccharomyces); f -> D (Saccharomyces associated with lower adverse outcome risk, OR=0.206); I -> D needs RCT confirmation.
- **STOP candidate**: broad-spectrum antifungals in pregnancy may paradoxically worsen outcomes by eliminating protective Saccharomycopsis and Saccharomyces alongside Candida.
- **Biomarker hypothesis**: intestinal Candida/Saccharomyces ratio at 24-28 weeks as adverse pregnancy outcome predictor.
