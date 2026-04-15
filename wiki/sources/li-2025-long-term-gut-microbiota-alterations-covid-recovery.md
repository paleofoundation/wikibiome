---
title: "Li et al. 2025 — Long-term Alterations in Gut Microbiota Following Mild COVID-19 Recovery"
type: source
created: 2026-04-14
updated: 2026-04-14
authors: [Da Li, Da-Ya Zhang, Shi-Ju Chen, Yan-Ting Lv, Shi-Mei Huang, Chen Chen, Fan Zeng, Run-Xiang Chen, Xiao-Dong Zhang, Jian-Xin Xiong, Fa-Di Chen, Yue-Hong Jiang, Zhai Chen, Cui-Yi Mo, Jia-Jia Chen, Xu-Li Zhu, Li-Jun Zhang, Fei-Hu Bai]
corresponding_author: "Fei-Hu Bai"
corresponding_email: "baifeihu_hy@163.com"
institution: "Hainan Medical University, The Second Affiliated Hospital"
year: 2025
journal: "Frontiers in Cellular and Infection Microbiology"
doi: "10.3389/fcimb.2025.1565887"
pmid: "not yet verified"
evidence_level: prospective-cohort
sample_size: "n=53 healthy controls (baseline), n=27 at 3-month post-recovery, n=41 at 6-month post-recovery"
tags: [long-covid, post-covid-syndrome, gut-microbiota, bacterial-fungal-dynamics, dysbiosis, recovery, probiotics]
library_category: signatures | mechanistic-insights
platform: both
condition: "long COVID / post-COVID-19 syndrome"
karen_brain_primitives: [1, 5]
metals_discussed: []
taxa_discussed: [blautia-massiliensis, kluyveromyces, acidaminococcus-massiliensis, asterotremella, streptococcus-equinus, gibberella, rothia, coprinopsis]
key_findings: [
  "Dynamic non-linear recovery trajectories in gut microbiota from 3 to 6 months post-COVID recovery",
  "Probiotics enriched at 3 months (Blautia, Kluyveromyces) with partial restoration at 6 months, but persistent pathogens remain",
  "Bacterial-fungal co-occurrence networks suggest synergistic restoration; random forest model achieved 99% AUC for recovery status prediction"
]
---

## Key Findings

- **Non-linear recovery trajectory** — Gut microbiota composition differs significantly between COVID-19 recovered individuals and healthy controls at both 3-month and 6-month timepoints (prospective cohort, n=53 baseline, n=27 at 3mo, n=41 at 6mo). Recovery is not linear: probiotics enriched at 3 months (Blautia massiliensis, Kluyveromyces spp.) suggesting improved metabolism, but at 6 months show only partial recovery alongside persistent pathogens (Streptococcus equinus, Gibberella spp.)
- **Bacterial-fungal synergies in restoration** — Co-occurrence network analysis identified synergistic relationships between bacterial (Rothia spp.) and fungal (Coprinopsis spp.) taxa, suggesting cooperative roles in gut restoration and immune regulation
- **Predictive accuracy of microbial taxa** — Bacterial random forest model (10 key taxa) outperformed fungal model (8 taxa) in predicting recovery status (AUC 0.99 vs 0.80), with Acidaminococcus massiliensis, Blautia massiliensis, and Kluyveromyces spp. as key predictive features

## Methods

**Study design:** Prospective cohort with longitudinal follow-up  
**Participants:** 53 healthy controls (baseline, pre-COVID-19 outbreak in Hainan Province, December 2022), 27 individuals at 3 months post-recovery, 41 individuals at 6 months post-recovery. All recovered individuals had confirmed SARS-CoV-2 nucleic acid positivity and mild/ordinary clinical classification per Chinese guidelines.  
**Sample type:** Fecal samples (metagenomic sequencing via Illumina NovaSeq 6000) and blood samples  
**Measurement:** 16S rRNA gene sequencing (bacterial), ITS (Internal Transcribed Spacer) sequencing for fungi, metagenomic analysis, bacterial-fungal co-occurrence network construction, random forest machine learning model for recovery status prediction  
**Validation:** Dual-cohort framework with independent validation cohort from Inner Mongolia

## Detailed Summary

This prospective longitudinal study addresses a critical gap: the long-term dynamics of gut microbiota in individuals recovering from *mild* COVID-19, with explicit attention to fungal communities alongside bacteria. Most prior research focused on severe COVID-19 or long COVID syndrome; this study characterizes microbiota recovery in patients who experienced mild infection without long COVID symptoms.

**Key observations:**

*At 3 months post-recovery:*
- Probiotic enrichment (Blautia massiliensis, Kluyveromyces spp.) suggesting active restoration and improved metabolic function
- Reduced dysbiosis compared to acute phase

*At 6 months post-recovery:*
- Partial recovery of probiotics (Acidaminococcus massiliensis, Asterotremella spp.)
- Persistent pathogenic taxa (Streptococcus equinus, Gibberella spp.) indicating incomplete recovery
- Dynamic cycling: Acidaminococcus massiliensis enriched at baseline and 6 months but absent at 3 months, suggesting fluctuating dominance

*Bacterial-fungal interactions:*
- Co-occurrence networks revealed synergistic relationships between Rothia (bacterial) and Coprinopsis (fungal) spp., suggesting cooperative roles in restoration
- Fungal community composition changes parallel bacterial shifts, implying coordinated recovery mechanisms

**Machine learning insights:**
- Random forest model with 10 bacterial taxa achieved 99% AUC for predicting recovery status in training and validation cohorts
- Outperformed fungal-only model (AUC 0.80), suggesting bacteria are stronger biomarkers for recovery trajectory
- Top predictive taxa aligned with known probiotic/restoration functions

**Clinical correlations:**
- Metabolic associations: enriched probiotic taxa correlate with improved carbohydrate and lipid metabolism (inferred from functional profiling)
- Immune associations: taxa shifts reflect normalization of immune activation markers

## Relevance to WikiBiome

- Demonstrates that mild COVID-19 triggers measurable but partially reversible dysbiosis, supporting inclusion of post-COVID-19 syndrome as a distinct condition in the microbiome knowledge base
- Highlights fungal community dynamics as underrecognized component of COVID-19 dysbiosis
- Identifies specific probiotic taxa enriched during recovery (Blautia, Kluyveromyces) as candidates for intervention support
- Characterizes bacterial-fungal co-occurrence patterns as ecological feature of recovery

## Relevance to Cureva

- **Signature evidence:** Supports long-COVID signature layer with time-dependent recovery trajectories. Identifies persistent pathogens (Streptococcus equinus, Gibberella spp.) as STOP signals and enriched probiotics as intervention targets.
- **Intervention signal:** Probiotic restoration strategy supported; Blautia, Kluyveromyces, and Acidaminococcus as candidates for probiotic supplementation or prebiotic support
- **Karen's Brain Primitive 5 (Two-Sided Ecological Engineering):** Simultaneously suppress persistent pathogens (Streptococcus equinus, Gibberella) while restoring beneficial functions (SCFA producers, immune modulators)
- **Recovery trajectory tracking:** Suggests that microbiota-targeted interventions should be timed to support 3–6 month recovery window, as natural restoration is incomplete

## Open Questions

- What ecological or immunological factors prevent complete recovery of probiotics at 6 months despite 3-month enrichment?
- Does probiotic/prebiotic supplementation accelerate recovery trajectory vs. natural recovery alone?
- Are persistent pathogens (Streptococcus equinus, Gibberella) reversible with targeted interventions?
- How do bacterial-fungal co-occurrence networks change with intervention vs. natural recovery?
- Does microbiota recovery status at 6 months predict long-term health outcomes or risk of long COVID progression?
