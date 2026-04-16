---
title: "Ling 2025 — Gut Mycobiota Dysbiosis and Systemic Immune Dysfunction in Chinese Schizophrenia Patients with Metabolic Syndrome"
type: source
created: 2026-04-14
updated: 2026-04-14
authors: [Zongxin Ling, Yiwen Cheng, Zhiyong Lan, Xia Liu, Zhangcheng Zhu, Wenwen Ding, Xiaocui Xu, Pian Yu, Xiaoxun Xu, Li Shao, Qinghai Song, Rongxian Liao]
corresponding_author: "Zongxin Ling; Qinghai Song; Rongxian Liao"
corresponding_email: "lingzongxin@zju.edu.cn; qinghai_song@126.com; rongxian_liao@163.com"
institution: "Zhejiang University School of Medicine, China"
year: 2025
journal: "Frontiers in Immunology"
doi: "10.3389/fimmu.2025.1652633"
evidence_level: case-control
sample_size: "n=210 (109 SZ-MetS + 101 age/gender-matched HCs)"
tags: [schizophrenia, metabolic-syndrome, comorbidity, gut-mycobiome, fungal-dysbiosis, trichosporon-asahii, candida-albicans, lodderomyces, saccharomyces, pleurotus, aspergillus, cytokines, il-6, mip-1alpha, random-forest, biomarker]
library_category: signatures
platform: both
condition: "schizophrenia"
karen_brain_primitives: [2, 4, 6]
metals_discussed: []
taxa_discussed: [trichosporon-asahii, candida-albicans, lodderomyces-elongisporus, saccharomyces-cerevisiae, pleurotus-ostreatus, aspergillus, ustilago-esculenta, cladosporium, saccharomycetales, phaeosphaeriaceae, ascomycota, basidiomycota]
key_findings:
  - "SZ-MetS patients show distinct taxonomic shifts: pathobionts (Trichosporon asahii, Candida albicans, Lodderomyces elongisporus) enriched; beneficial fungi (Saccharomyces cerevisiae, Pleurotus ostreatus) reduced"
  - "Six-species random forest fungal classifier distinguished SZ-MetS from HCs with AUC=0.86"
  - "IL-6 and MIP-1alpha positively correlated with Ustilago esculenta and Trichosporon asahii; negatively correlated with Saccharomyces cerevisiae; Lodderomyces linked to elevated triglycerides; S. cerevisiae inversely related to symptom severity"
---

# Key Findings

- **Pathobiont enrichment in SZ-MetS comorbidity**: Trichosporon asahii, Candida albicans, and Lodderomyces elongisporus were significantly enriched in schizophrenia patients with metabolic syndrome (SZ-MetS), while beneficial fungi Saccharomyces cerevisiae and Pleurotus ostreatus were reduced. At the family level, Saccharomycetales_Incertae_sedis and Phaeosphaeriaceae were enriched; Aspergillaceae and Pleosporaceae depleted.
- **Mycobiome classifier distinguishes SZ-MetS with AUC=0.86**: Six-species random forest classifier provides a robust non-invasive diagnostic signature specific to the SCZ-metabolic comorbidity. Alpha and beta diversity were comparable to HCs (no global structural difference), but specific compositional shifts were significant.
- **Fungi-cytokine-clinical coupling**: Inflammatory cytokines IL-6 and MIP-1alpha were positively correlated with Ustilago esculenta and Trichosporon asahii, but negatively correlated with Saccharomyces cerevisiae. Lodderomyces abundance correlated with elevated triglycerides. S. cerevisiae inversely correlated with symptom severity — suggesting specific fungi mediate the SZ-MetS vicious cycle through taxon-specific mechanisms.

# Methods

Case-control study, n=210 (109 hospitalized SZ-MetS patients aged 28-64 + 101 age/gender-matched HCs recruited from Quzhou Third People's Hospital, June-November 2020). Subjects with recent antimicrobials/antifungals/antiparasitics/antivirals (within 1 month) excluded. 2g fecal samples, -80C, <15 min. ITS1 amplicon (fungal-specific primers ITS1F/ITS2R), Illumina NovaSeq 6000 PE250. QIIME2 v2020.11, DADA2, UNITE Release 9.0. Community analyses: alpha (Chao1, ACE, Shannon, Simpson), beta (Bray-Curtis, Jaccard, UniFrac, PERMANOVA). Random Forest + Mean Decrease Gini. ROC-AUC validation via OECloud. 27-plex Bio-Plex cytokine panel.

# Relevance to WikiBiome

- Informs **[[schizophrenia]]** entity page: documents a **comorbidity-specific mycobiome signature** (SZ-MetS) distinct from SCZ alone — one-third of SCZ patients develop MetS.
- Informs **[[metabolic-syndrome]]** entity page: links fungal dysbiosis (Trichosporon, Lodderomyces) to the metabolic comorbidity, not just bacterial taxa.
- Informs **[[trichosporon-asahii]]**, **[[lodderomyces-elongisporus]]** entity pages (potentially new entities): emerging pathobionts in the psychiatric-metabolic axis.
- Informs **[[saccharomyces-cerevisiae]]** and **[[pleurotus-ostreatus]]** entity pages: protective fungi inversely related to symptom severity.

# Relevance to Cureva

- **Schizophrenia signature page** with MetS comorbidity sub-signature: Layer 2 (taxonomic) + Layer 3 (cytokines). Confidence: moderate (single large study, awaiting replication).
- **Intervention triangle** for Saccharomyces cerevisiae-restoring probiotics in SZ-MetS: I -> f (restore beneficial fungi); f -> D (S. cerevisiae inverse to symptom severity); I -> D (needs RCT).
- **Intervention triangle** for Trichosporon/Candida-targeting antifungals in SZ-MetS: I -> f (reduce pathobionts); f -> D (pathobionts correlate with IL-6, MIP-1alpha, triglycerides); I -> D (needs RCT).
- **Diagnostic utility**: six-species fungal classifier (AUC=0.86) as a biomarker for identifying SCZ patients at highest MetS risk.
- **STOP candidate**: broad-spectrum antifungals that also eliminate Saccharomyces and Pleurotus may worsen the SZ-MetS cycle; targeted antifungals needed.

# Cross-Condition Pattern Detection

- **Candida albicans** is enriched across: this SZ-MetS signature, Severance 2016 SCZ cohort, Liu 2024 oral SCZ mycobiome, Cai 2024 T2DM diabetic foot, Wang 2026 GDM — suggesting Candida is a **shared pathobiont across metabolic-psychiatric disorders**.
- **Saccharomyces cerevisiae** is protective across: this SZ-MetS signature, Wang 2026 GDM pregnancy outcomes — suggesting cross-condition protective role.
- **Malassezia** expansion across: this Ling cohort, Al Bataineh 2020 T2DM, Al Bataineh 2023 T2DM fiber — suggesting metabolic dysbiosis signature component.
