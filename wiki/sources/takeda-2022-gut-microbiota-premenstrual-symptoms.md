---
title: "Takeda 2022 — Gut Microbiota in Women with Premenstrual Symptoms"
type: source
created: 2026-04-14
updated: 2026-04-20
authors: [Takashi Takeda, Kana Yoshimi, Sayaka Kai, Genki Ozawa, Keiko Yamada, Keizo Hiramatsu]
corresponding_author: "Takashi Takeda"
corresponding_email: "take@med.kindai.ac.jp"
institution: "Kindai University, Division of Women's Health"
year: 2022
journal: "PLOS ONE"
doi: "10.1371/journal.pone.0268466"
evidence_level: cross-sectional
sample_size: "n=56 (27 premenstrual + 29 controls; subset: 21 PMDs + 22 controls)"
tags: [pmdd, pms, gut-microbiota, bacteroidetes, parabacteroides, megasphaera, extibacter]
library_category: signatures
platform: both
condition: pmdd
karen_brain_primitives: [1, 5]
metals_discussed: []
taxa_discussed: [bacteroidetes, butyricicoccus, extibacter, megasphaera, anaerotaenia, parabacteroides]
key_findings:
  - "Bacteroidetes phylum lower in PMDs group; Butyricicoccus, Extibacter, Megasphaera decreased"
  - "Anaerotaenia and Parabacteroides increased in PMDs group"
  - "Parabacteroides and Megasphaera negatively predicted PSQ total score in multiple regression (R²=0.29)"
keystone: false
---

# Takeda 2022 — Gut Microbiota in Women with Premenstrual Symptoms

## Key Findings

- **Bacteroidetes phylum** relative abundance lower in the PMDs group vs. controls (P=0.015), though genus-level differences did not survive FDR correction ([[takeda-2022-gut-microbiota-premenstrual-symptoms]], cross-sectional, n=56).
- **Butyricicoccus**, **Extibacter**, and **Megasphaera** prevalence decreased in the PMDs group at genus level (LEfSe analysis) ([[takeda-2022-gut-microbiota-premenstrual-symptoms]]).
- **Anaerotaenia** and **Parabacteroides** increased in the PMDs group ([[takeda-2022-gut-microbiota-premenstrual-symptoms]]).
- PSQ total score correlated with **Anaerotaenia** (positive, r=0.292), **Extibacter**, and **Parabacteroides** abundance ([[takeda-2022-gut-microbiota-premenstrual-symptoms]]).
- **Parabacteroides** and **Megasphaera** negatively predicted PSQ total score in multiple regression (R²=0.29) ([[takeda-2022-gut-microbiota-premenstrual-symptoms]]).
- Inflammatory markers (CRP, soluble CD14, LBP) did **not** differ significantly between PMDs and controls.

## Methods

Single-center cross-sectional pilot study at an obstetrics and gynecology outpatient clinic in Osaka, Japan (September 2019–August 2020). Recruited 27 women with premenstrual symptoms (P group) and 29 healthy volunteers (N group). Subsets: 21 PMDs (social interference) and 22 controls. Exclusions: IBD, IBS, malignancy, GI surgery, diabetes, OC users, antibiotics/probiotics within 4 weeks. 16S rRNA gene sequencing (V3–V4 regions, MiSeq), QIIME 2, Greengenes database. Alpha diversity (Chao 1, Shannon, Simpson), beta diversity (PCoA, weighted UniFrac), LEfSe analysis. Blood markers: CRP, sCD14, LBP via Human Magnetic Luminex Assay.

## Detailed Summary

This is the **first study profiling gut microbiota composition in women with premenstrual disorders**. Beta diversity showed no significant difference between groups. Alpha diversity (Shannon, Simpson, Chao 1) did not differ. At phylum level, Bacteroidetes trended lower in PMDs. At genus level, LEfSe identified **Extibacter** (LDA 2.83) decreased in PMDs, with **Anaerotaenia** increased. Butyricicoccus and Megasphaera were also decreased. The lack of inflammatory marker differences suggests the gut-brain axis in PMDs may operate through non-inflammatory pathways (vagal, metabolite-mediated) rather than systemic inflammation.

## Relevance to WikiBiome

- **Entity pages:** [[parabacteroides]], [[megasphaera]], [[bacteroidetes]] — add PMD association data.
- **Concept pages:** [[gut-brain-axis]] — first evidence of gut microbiota differences in PMDs.
- **Signature page:** [[pmdd-signature]] — provides initial taxonomic layer data (depleted Butyricicoccus, Megasphaera; enriched Anaerotaenia, Parabacteroides).

## Relevance to Cureva

- Megasphaera depletion is notable — Megasphaera is a propionate and valerate producer. SCFA depletion may contribute to PMD symptoms via gut-brain axis.
- Parabacteroides enrichment and its negative predictive relationship with symptom severity is paradoxical — requires further investigation.
- **Intervention hypothesis:** Parabacteroides/Megasphaera enrichment via fiber diversification.

## Contradictions / Tensions

- Inflammatory markers negative despite symptom severity — contrasts with [[cheng-2025-neuroinflammation-pms-pmdd-review]] suggesting neuroinflammation drives PMS/PMDD. May indicate that gut-derived inflammation in PMDs is compartmentalized (CNS-localized) rather than systemic.

## Open Questions

- Would shotgun metagenomics reveal functional pathway differences despite limited taxonomic shifts?
- Does the Megasphaera depletion reflect SCFA-mediated gut-brain signaling disruption?
- Does menstrual-cycle-phase sampling modify signal? (Samples not collected at standardized cycle phase.)
