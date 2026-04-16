---
title: "Ling 2025 — Schizophrenia-Associated Alterations in Fecal Mycobiota and Systemic Immune Dysfunction in Elderly Chinese Patients"
type: source
created: 2026-04-14
updated: 2026-04-14
authors: [Zongxin Ling, Yiwen Cheng, Xia Liu, Xiaocui Xu, Lingbin Wu, Li Shao, Zhangcheng Zhu, Wenwen Ding, Qinghai Song, Longyou Zhao, Guolin Jin]
corresponding_author: "Zongxin Ling; Guolin Jin"
corresponding_email: "lingzongxin@zju.edu.cn; guol_jin@163.com"
institution: "Zhejiang University School of Medicine, China"
year: 2025
journal: "Frontiers in Immunology"
doi: "10.3389/fimmu.2025.1607739"
evidence_level: case-control
sample_size: "n=151 (87 elderly SCZ + 64 age/gender-matched HCs)"
tags: [schizophrenia, elderly, fecal-mycobiome, fungal-dysbiosis, candida, aspergillus, saccharomyces, purpureocillium, malassezia, enterotype, systemic-immune-dysfunction, cytokines, biomarker, roc]
library_category: signatures
platform: both
condition: "schizophrenia"
karen_brain_primitives: [2, 4, 6]
metals_discussed: []
taxa_discussed: [candida, aspergillus, saccharomyces, saccharomyces-cerevisiae, candida-albicans, candida-tropicalis, malassezia, malassezia-restrica, monascus-purpureus, trametes-hirsute, apiotrichum-domesticum, purpureocillium, purpureocillium-lilacinum, basidiomycota, ascomycota, penicillium, ophiocordycipitaceae, sclerotiniaceae]
key_findings:
  - "Elevated Basidiomycota/Ascomycota ratio in SCZ; enrichment of Candida, Aspergillus, Saccharomyces; Purpureocillium nearly eliminated in SCZ patients"
  - "Enterotype shift: 84.4% of controls were Purpureocillium-dominant (E1); 65.5% of SCZ patients shifted to Candida-dominant (E2)"
  - "S. cerevisiae and Purpureocillium lilacinum positively correlated with systemic immune dysfunction cytokines; ROC-based fungal classifier distinguished SCZ from HCs"
---

# Key Findings

- **Enterotype shift from Purpureocillium-dominant to Candida-dominant**: In healthy elderly Chinese controls, 84.4% (54/64) were **Purpureocillium-dominant enterotype (E1)**. In SCZ patients, 65.5% (57/87) shifted to the **Candida-dominant enterotype (E2)**. This is a novel mycobiome enterotype reframing of schizophrenia that inverts the typical Purpureocillium/Candida ratio.
- **Basidiomycota/Ascomycota ratio inverted**: SCZ patients showed significantly elevated Basidiomycota and decreased Ascomycota. At the family level, 13 families (Malasseziaceae, Saccharomycetaceae, Polyporaceae, Cladosporiaceae, Schizophyllaceae) were **elevated** in SCZ, while 4 families (Ophiocordycipitaceae, Sclerotiniaceae, Coniothyriaceae, Chaetothyriales_Incertae_sedis) were **reduced**. Genus-level: Candida, Aspergillus, Saccharomyces, Apiotrichum, Malassezia enriched; **Purpureocillium almost eliminated**.
- **Key fungi correlated with systemic immune dysfunction and served as diagnostic biomarkers**: S. cerevisiae and P. lilacinum (direction: P. lilacinum negatively correlated with inflammatory cytokines) linked to cytokine shifts. ROC analysis showed the fungal signature effectively discriminates SCZ from HCs, suggesting non-invasive biomarker potential.

# Methods

151 elderly Chinese participants (87 SCZ aged >=62, 64 HCs) from Lishui Second People's Hospital, 2020. Fresh fecal DNA extracted from 2g samples stored at -80C within 15 min. ITS1 region amplified via Illumina NovaSeq 6000 PE250. QIIME2 v2020.11 processing, DADA2 denoising, UNITE Release 9.0 (99%). Fungal enterotype clustering, LEfSe (LDA>3.5), PICRUSt2 + FUNGuild + MetaCyc, Random Forest feature importance, ROC-AUC. Multiplex Bio-Plex 27-plex cytokine panel on serum.

# Relevance to WikiBiome

- Informs **[[schizophrenia]]** entity page: documents a **mycobiome enterotype signature** in the elderly SCZ population, distinct from bacterial enterotype concepts.
- Informs **[[purpureocillium]]** entity page (new entity): identifies a **protective fungal genus** nearly eliminated in SCZ — a novel finding.
- Informs **[[candida]]**, **[[aspergillus]]**, **[[saccharomyces]]**, **[[malassezia]]** entity pages: adds SCZ-specific enrichment evidence.
- Informs **[[mycobiome-enterotype]]** concept page (new concept): first documentation of mycobiome enterotypes stratifying disease.

# Relevance to Cureva

- **Schizophrenia signature page** Layer 2 (taxonomic): replaces bacterial-only enterotype thinking with a Candida (E2) vs Purpureocillium (E1) mycobiome enterotype dichotomy. Confidence: moderate (first report in elderly SCZ, independent validation needed).
- **Intervention triangle** for Purpureocillium-restoring strategies or Candida-reducing antifungals: I -> f (modulate fungal enterotype); f -> D (enterotype shift correlates with disease status); I -> D (needs trial).
- **Biomarker utility**: non-invasive ITS-based mycobiome test could stratify SCZ risk in elderly populations; ROC-validated classifier.
- **STOP candidate**: indiscriminate antifungals may eliminate protective Purpureocillium along with pathogenic Candida — targeted antifungal strategies needed.

# Open Questions

- Is Purpureocillium depletion a cause or consequence of SCZ? Cross-sectional design limits causal inference.
- Does this enterotype signature extend to first-episode SCZ or only to elderly chronic patients?
- What is the mechanistic link between P. lilacinum and cytokine suppression?
