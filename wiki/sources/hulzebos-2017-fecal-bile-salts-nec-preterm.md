---
title: "Hulzebos 2017 — Fecal Bile Salts and the Development of Necrotizing Enterocolitis in Preterm Infants"
type: source
created: 2026-05-04
updated: 2026-05-04
authors: [Hulzebos CV, van Zoonen AGJF, Schat TE, Meiners LC, Kooi EMW, Groen H, Verkade HJ, Bos AF]
corresponding_author: "C.V. Hulzebos"
corresponding_email: "not yet verified"
institution: "University Medical Center Groningen (UMCG)"
orcid: "not yet verified"
year: 2017
journal: "PLoS ONE"
doi: "10.1371/journal.pone.0168633"
pmid: "not yet verified"
evidence_level: case-control
sample_size: "n=10 NEC + n=20 matched controls (nested in 100-infant prospective cohort)"
tags: [nec, bile-acids, preterm, fecal-biomarker, case-control, prediction, bile-salt-sequestrant]
library_category: mechanistic-insights
platform: both
condition: "necrotizing enterocolitis"
karen_brain_primitives: [4, 9]
metals_discussed: []
taxa_discussed: []
key_findings:
  - "Total unconjugated fecal bile salts are 3-fold higher in NEC infants vs. controls (0.41 vs. 0.14 μmol/g, p<0.05)"
  - "5-6 days before NEC diagnosis, bile salt elevation is 4-fold (0.65 vs. 0.16 μmol/g, p=0.02) — potential pre-diagnostic biomarker window"
  - "ROC analysis: bile salts >13 μmol/g yields 93% sensitivity, 47% specificity for NEC (AUC 0.74)"
keystone: false
stub: false
---

## Key Findings

- **Total unconjugated fecal bile salts** are 3-fold elevated in NEC infants vs. controls (0.41 vs. 0.14 μmol/g, p<0.05) across all time points [[hulzebos-2017-fecal-bile-salts-nec-preterm]]
- **Pre-diagnostic window**: At T2 (5–6 days before NEC diagnosis), unconjugated bile salt elevation reaches 4-fold (0.65 vs. 0.16 μmol/g, p=0.02), suggesting fecal bile salts as an early predictive biomarker [[hulzebos-2017-fecal-bile-salts-nec-preterm]]
- **ROC analysis**: Bile salt threshold >13 μmol/g yields 93% sensitivity and 47% specificity for NEC (AUC 0.74) — high sensitivity supports screening utility despite moderate specificity [[hulzebos-2017-fecal-bile-salts-nec-preterm]]
- **Conjugated bile salt composition** was not significantly different between NEC and controls — the pathological signal is specific to unconjugated species, implicating microbial deconjugation in the NEC bile acid ecology
- **CDC (chenodeoxycholic acid) trends** higher in NEC, though not reaching statistical significance at n=10 case sample size

## Methods

- **Study design**: Case-control nested within a prospective cohort of 100 preterm infants
- **Population**: Preterm infants at UMCG Groningen NICU; 10 NEC cases matched to 20 controls
- **Matching criteria**: Gestational age, birth weight, antibiotic exposure (to control for confounders)
- **Sample collection**: Serial stool samples collected longitudinally; analyzed at T1 (baseline), T2 (5–6 days pre-NEC), T3 (diagnosis)
- **Bile salt measurement**: High-performance liquid chromatography (HPLC) — quantifies individual bile acid species, both conjugated and unconjugated fractions
- **Statistical approach**: Mann-Whitney U test for group comparisons; ROC curve analysis for biomarker threshold determination
- **Limitation**: Small case sample (n=10 NEC) limits power for secondary analyses; specificity of 47% limits standalone clinical utility

## Detailed Summary

Hulzebos et al. (2017) provide the first direct clinical evidence that **elevated fecal bile salts precede NEC diagnosis** in preterm infants, supporting a mechanistic model in which bile acid accumulation in the neonatal ileum damages the mucus barrier and contributes to NEC pathogenesis.

The study design is a case-control nested within a larger prospective cohort, enabling longitudinal tracking of bile salt levels in infants who subsequently develop NEC compared to matched controls who do not. The key quantitative findings:

**At all time points combined**: Unconjugated fecal bile salts average 0.41 μmol/g in NEC vs. 0.14 μmol/g in controls — a 3-fold difference (p<0.05).

**At T2 (5–6 days before NEC diagnosis)**: The elevation intensifies to 0.65 vs. 0.16 μmol/g — a 4-fold difference (p=0.02). This temporal relationship suggests bile salt elevation is not merely a consequence of NEC-related intestinal injury but may be a **pre-diagnostic signal**.

**Conjugated vs. unconjugated specificity**: The significant elevation is confined to unconjugated bile salt species. Conjugated bile salts (taurine- and glycine-conjugated, the primary form secreted by the liver) show no significant difference between groups. This selectivity implicates microbial deconjugation — bacteria producing bile salt hydrolase (BSH) activity cleave conjugated bile acids to their unconjugated forms — as a contributor to the elevated fecal bile salt burden. Unconjugated bile acids are more hydrophobic and more cytotoxic to intestinal epithelium than their conjugated counterparts.

The ROC analysis (AUC 0.74) demonstrates moderate discriminatory power. The sensitivity of 93% at a threshold of >13 μmol/g is clinically attractive for screening, but the specificity of 47% would generate substantial false-positives in a NICU setting. A two-stage biomarker approach (fecal bile salts as a screen, followed by confirmatory assay) may be more practical.

This study pairs mechanistically with Martin 2011 ([[martin-2011-bile-acids-mucin2-nec]]) which established the ASBT-mediated bile acid accumulation → Muc2 depletion pathway in animal models. Hulzebos 2017 provides the clinical data confirming that bile acid elevation occurs in human preterm infants who develop NEC.

## Relevance to WikiBiome

- **NEC entity page**: Direct clinical quantification of bile acid elevation in NEC — pairs with Martin 2011 to establish the bile acid ecology layer with both mechanistic and clinical evidence
- **Bile acids concept page**: Human case-control data confirming elevated unconjugated fecal bile salts as NEC biomarker; specificity of unconjugated species implicates BSH-expressing bacteria
- **NEC diagnosis / biomarker discussion**: 5-6 day pre-diagnostic window for fecal bile salt elevation is notable for early NEC detection potential

## Relevance to Cureva

- **NEC signature — bile acid ecology layer**: Elevates confidence to moderate (two independent lines of evidence: animal mechanism from Martin 2011 + clinical case-control from Hulzebos 2017)
- **Primitive 4 (Achilles' heel)**: Unconjugated bile acid accumulation is a mechanistic vulnerability — targeting BSH-expressing bacteria or sequestering fecal bile acids could interrupt the NEC cascade
- **Primitive 9 (mucosal ecology)**: Unconjugated bile acids disrupting Muc2 → altering mucosal oxygen gradient → selecting for obligate anaerobes / Enterobacteriaceae
- **Intervention hypothesis**: Bile acid sequestrants (cholestyramine, colesevelam) or selective BSH inhibition as NEC prevention strategy
- **Biomarker for monitoring**: Fecal bile salt elevation 5–6 days before NEC could guide prophylactic intervention timing

## Contradictions / Tensions

- Small case sample (n=10 NEC) — specificity and positive predictive value estimates are unstable at this n. The 47% specificity implies the test alone cannot guide clinical action.
- Conjugated bile salt composition not significantly different — some literature suggests that specific conjugated bile acids (CDCA, DCA) are directly cytotoxic. This study cannot exclude a role for individual conjugated species masked in aggregate analysis.
- No microbiome data — cannot identify which BSH-expressing bacteria are responsible for deconjugation in the NEC infants. Cross-reference with [[brower-sinning-2014-mucosa-bacterial-diversity-nec]] for potential candidates.

## Open Questions

- Which bacteria are the dominant BSH producers in the preterm ileum? Are Clostridium spp. (known high-BSH producers) the deconjugation source here?
- Does bile acid sequestrant administration to high-risk preterm infants reduce unconjugated fecal bile salt burden and NEC incidence? No RCT data available.
- Is there a gestational-age gradient in fecal bile salt levels — are more premature infants at higher baseline bile salt burden?
- Can fecal bile salt testing be implemented in clinical NICU workflows as a daily monitoring tool during the highest-risk period (weeks 2–4 of life)?
