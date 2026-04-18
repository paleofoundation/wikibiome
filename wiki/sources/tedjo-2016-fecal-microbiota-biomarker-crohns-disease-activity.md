---
title: "Tedjo 2016 — The fecal microbiota as a biomarker for disease activity in Crohn's disease"
type: source
created: 2026-04-14
updated: 2026-04-14
authors: [Danyta I. Tedjo, Agnieszka Smolinska, Paul H. Savelkoul, Ad A. Masclee, Frederik J. van Schooten, Marieke J. Pierik, John Penders, Daisy M.A.E. Jonkers]
corresponding_author: "John Penders; Daisy M.A.E. Jonkers"
corresponding_email: "j.penders@maastrichtuniversity.nl; d.jonkers@maastrichtuniversity.nl"
institution: "Maastricht University Medical Center+, The Netherlands"
year: 2016
journal: "Scientific Reports"
doi: "10.1038/srep35216"
evidence_level: prospective-cohort
sample_size: "n=71 CD patients, 194 fecal samples (97 remission, 97 active)"
tags: [crohns, biomarkers, disease-activity, microbiome-signature, 16s-rrna, fecal-calprotectin, faecalibacterium-prausnitzii]
library_category: signatures
platform: both
condition: "crohns-disease"
karen_brain_primitives: [4, 5]
metals_discussed: [iron]
taxa_discussed: [faecalibacterium-prausnitzii, operational-taxonomic-units]
key_findings:
  - "A 50-OTU panel derived from V1-V3 16S rRNA sequencing discriminated CD remission from active disease with AUC=0.82 (73% sensitivity for remission, 79% for active, specificity 0.79, 0.73)"
  - "Internal validation on independent set confirmed panel utility for monitoring CD disease activity non-invasively — distinct from fecal calprotectin which lacks mechanistic specificity"
  - "Panel included key Faecalibacterium prausnitzii-associated OTUs — consistent with documented depletion of this butyrate producer during active CD"
---

# Tedjo 2016 — Fecal microbiota biomarker for CD activity

## Key Findings

- **50-OTU panel discriminates CD activity states.** From 71 CD patients, 194 fecal samples (97 active, 97 remission, defined by Harvey-Bradshaw Index + fecal calprotectin + CRP). V1-V3 16S rRNA pyrosequencing identified 50 OTUs via Random Forest that discriminated active from remission with AUC=0.82 (sensitivity 0.79, specificity 0.73 for active; sensitivity 0.73 for remission).
- **Independent validation set confirmed.** Panel performance held in held-out validation, supporting utility as non-invasive monitoring tool complementary to calprotectin.
- **Faecalibacterium prausnitzii OTUs are key discriminators.** Consistent with prior literature documenting depletion of this butyrate producer in active CD. The microbiota panel captures taxonomy-level information that calprotectin (protein abundance) cannot.

## Methods

Prospective follow-up of ECCO-II cohort. 71 CD patients provided repeated fecal samples during visits for routine analysis, classified as active (FC >250 µg/g AND CRP ≥5 mg/l AND HBI ≥5) or remission (HBI ≤4 AND FC <100 µg/g AND CRP <5 mg/l). 454 pyrosequencing V1-V3 16S rRNA with 8F/534R primers. Random Forest analysis for OTU panel identification. Independent internal validation set used.

## Relevance to WikiBiome

- Supports [[faecalibacterium-prausnitzii]] entity page depletion signal in active CD.
- Informs [[crohns-disease]] entity "Microbiome Associations" with longitudinal activity-stratified evidence.
- Feeds [[biomarkers]] concept page — microbiota as non-invasive monitoring vs fecal calprotectin.

## Relevance to Cureva

- **[[crohns-disease-signature]] layer 2 (taxonomic) evidence with activity-state resolution.** A 50-OTU panel is actionable: Cureva can recommend pre/post-intervention fecal panel to confirm signature shift.
- **Monitoring intervention response.** The panel provides a way to track whether an intervention restores F. prausnitzii and shifts the community toward remission configuration.
- Primitive 5 (restore butyrate producers like F. prausnitzii) and primitive 4 (the remitting community excludes iron-dependent pathobionts) are active.

## Open Questions

- Does the 50-OTU panel generalize to external cohorts beyond the Maastricht ECCO-II cohort?
- Can the panel predict imminent flare before clinical/biochemical signs?
