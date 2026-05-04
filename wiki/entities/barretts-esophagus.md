---

title: Barrett's Esophagus
type: entity
subtype: disease
created: 2026-04-17
updated: 2026-04-17
last_substantive_update: 2026-04-17
sources: [liu-2024-bidirectional-mr-gut-microbiota-gerd-barretts, alageel-2025-microbiome-composition-gerd-systematic-review, gail-2015-upper-gi-microbiome-barretts-genomic-instability, liu-2013-bacterial-biota-distal-esophagus-reflux-esophagitis-barretts, deshpande-2018-esophageal-microbiome-signatures-host-genetics, luu-2022-upper-gi-microbiota-children-reflux-metaplasia, yang-2024-metabolites-esophageal-diseases-mendelian-randomization]
source_count: 7
tags: [barrett-esophagus, esophageal-adenocarcinoma, GERD, metaplasia, esophageal-microbiome, Prevotella, Leptotrichia, esotype]
platform: wikibiome
seo_target: "Barrett's esophagus microbiome esophageal cancer"
wikipedia_differentiation: "Microbiome-driven progression model from Streptococcus-dominant (healthy) through Prevotella-enriched (Barrett's) to Leptotrichia/Fusobacterium (EAC); three esotypes (A/B/C) defined by host genetics; Akkermansia muciniphila causally protective (MR OR=0.76); Prevotella melaninogenica progressive enrichment (22% → 83%) across disease stages"
icd_10: "K22.7"
global_prevalence: "5.6% of US adults; 6-12% of GERD patients"
associated_conditions: [gerd, esophageal-adenocarcinoma]
signature_page: "[[barretts-esophagus-signature]]"
---

# Barrett's Esophagus

## Overview

Barrett's esophagus (BE) is a premalignant condition in which the normal squamous epithelium of the distal esophagus is replaced by intestinal-type columnar epithelium (intestinal metaplasia). It is the primary risk factor for esophageal adenocarcinoma (EAC), a cancer with a 5-year survival of ~20%. Barrett's develops in 6-12% of patients with chronic [[gerd]], and its progression through dysplasia to EAC follows a well-defined metaplasia → low-grade dysplasia → high-grade dysplasia → carcinoma sequence.

The esophageal microbiome undergoes a parallel transformation that may drive or accelerate this progression -- shifting from a Streptococcus-dominated healthy community to one enriched in Gram-negative anaerobes that produce LPS, activate [[tlr4]], and sustain chronic inflammation.

## Microbiome Associations

### The Microbiome Shift

| Stage | Dominant Microbiome | Key Changes |
|-------|-------------------|-------------|
| Healthy esophagus | Streptococcus-dominated (Type I) | Aerobic, low diversity |
| Reflux esophagitis | [[proteobacteria]] emergence | Increased Gram-negatives |
| Barrett's esophagus | [[firmicutes]] most prevalent (55%); Gram-negative anaerobes enriched | [[prevotella]], [[veillonella]], [[fusobacterium-nucleatum]] |
| EAC | Leptotrichia emergence; further Streptococcus loss | Streptococcus -45%, Prevotella +60%, Leptotrichia +48% |

### Progressive Prevotella Enrichment
*Prevotella melaninogenica* prevalence rises progressively through disease stages: 22% (normal) → 50% (esophagitis) → 58% (Barrett's) → 83% (metaplasia) [[luu-2022-upper-gi-microbiota-children-reflux-metaplasia]]. This gradient suggests Prevotella is not merely a bystander but may contribute to the inflammatory environment driving metaplasia.

### Three Esotypes
Host genetics shape esophageal microbiome structure, defining three community types [[deshpande-2018-esophageal-microbiome-signatures-host-genetics]]:
- Type A: Streptococcus-dominated (healthy pattern)
- Type B: Prevotella-dominated (Barrett's-associated)
- Type C: Haemophilus-intermediate

### Leptotrichia as EAC Biomarker
Leptotrichia has been identified as a key biomarker for the Barrett's-to-EAC transition, emerging in the later stages of the progression sequence [[alageel-2025-microbiome-composition-gerd-systematic-review]].

## Causal Evidence (Mendelian Randomization)

| Taxa | Direction | Effect | Source |
|------|-----------|--------|--------|
| [[enterobacteriaceae]] / *Escherichia-Shigella* | Risk | OR=1.10 for Barrett's | [[liu-2024-bidirectional-mr-gut-microbiota-gerd-barretts]] |
| [[akkermansia-muciniphila]] | Protective | OR=0.76 -- strongest protective signal | [[liu-2024-bidirectional-mr-gut-microbiota-gerd-barretts]] |
| [[faecalibacterium-prausnitzii]] | Risk (paradoxical) | Increases both GERD and Barrett's risk | [[liu-2024-bidirectional-mr-gut-microbiota-gerd-barretts]] |

The paradoxical F. prausnitzii finding (risk rather than protective) warrants investigation -- it may reflect site-specific effects where gut-beneficial organisms are harmful in the esophageal context.

## H. pylori Paradox

H. pylori-positive individuals had 22% lower aneuploidy incidence in Barrett's tissue [[gail-2015-upper-gi-microbiome-barretts-genomic-instability]]. This aligns with the broader epidemiological observation that *H. pylori* eradication (which reduces gastric cancer risk) paradoxically increases GERD and Barrett's risk -- likely by removing the acid-suppressive effect of *H. pylori*-associated gastritis.

## Open Questions

- Does the Prevotella enrichment gradient causally drive Barrett's progression, or is it a consequence of the pH/inflammatory environment?
- Can microbiome-based screening (Leptotrichia detection) improve EAC surveillance beyond current endoscopic protocols?
- Does the F. prausnitzii paradox (gut-protective, esophagus-harmful) reflect site-specific microbe-host interactions?
- What role do metal exposures play in esophageal microbiome shifts?

## Cross-References

- [[gerd]] -- Primary risk factor for Barrett's development
- [[proteobacteria]] -- Expanding during esophagitis phase
- [[prevotella]] -- Progressive enrichment across Barrett's stages
- [[fusobacterium-nucleatum]] -- Enriched in Barrett's; oral origin
- [[akkermansia-muciniphila]] -- Causally protective (MR)
- [[helicobacter-pylori]] -- Paradoxical protective effect
- [[mendelian-randomization]] -- Causal evidence for taxa-Barrett's relationships
- [[oral-microbiome]] -- Source of esophageal colonizers
- [[tlr4]] -- LPS-TLR4 inflammation in Barrett's tissue
