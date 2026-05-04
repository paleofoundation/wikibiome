---
title: "Barrett's Esophagus — Microbiome Signature"
type: signature
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources: [liu-2024-bidirectional-mr-gut-microbiota-gerd-barretts, alageel-2025-microbiome-composition-gerd-systematic-review, gail-2015-upper-gi-microbiome-barretts-genomic-instability, liu-2013-bacterial-biota-distal-esophagus-reflux-esophagitis-barretts, deshpande-2018-esophageal-microbiome-signatures-host-genetics, luu-2022-upper-gi-microbiota-children-reflux-metaplasia, yang-2024-metabolites-esophageal-diseases-mendelian-randomization]
source_count: 7
tags: [barrett-esophagus, esophageal-adenocarcinoma, premalignant, esophageal-microbiome, metaplasia, Prevotella, Leptotrichia, esotype, iron]

metallomic_signature:
  elevated: [iron]
  depleted: [selenium, zinc]

taxonomic_signature:
  enriched:
    - taxon: "[[prevotella]]"
      role: "P. melaninogenica prevalence rises 22%→50%→58%→83% from normal to metaplasia; metaplasia strains carry TonB_C iron transport and MlaD membrane domains; defines Type B esotype"
    - taxon: "[[veillonella]]"
      role: "Gram-negative anaerobe enriched in Barrett's (19% of BE community); ↑52% in BE-to-EAC progression"
    - taxon: "[[leptotrichia]]"
      role: "Key biomarker for Barrett's-to-EAC transition; ↑48% in progression; emergence in late-stage disease may reflect increasingly anaerobic ecology"
    - taxon: "[[fusobacterium-nucleatum]]"
      role: "Gram-negative oral anaerobe enriched in Barrett's; LPS producer driving TLR4 activation"
    - taxon: "[[enterobacteriaceae]]"
      role: "Causally increase Barrett's risk (MR OR=1.10); Escherichia-Shigella specifically implicated"
    - taxon: "[[faecalibacterium-prausnitzii]]"
      role: "Paradoxically increases both GERD and Barrett's risk by MR — gut-protective organism may be esophagus-harmful"
    - taxon: "[[klebsiella-pneumoniae]]"
      role: "Enriched in reflux esophagitis (9% of community); gram-negative LPS producer"
  depleted:
    - taxon: "[[streptococcus]]"
      role: "Dominant in healthy esophagus (39%); ↓45% from BE to EAC; loss marks the fundamental ecological shift; defines Type A esotype"
    - taxon: "[[akkermansia-muciniphila]]"
      role: "Causally protective against Barrett's (MR OR=0.76) — strongest protective signal; mucin-reinforcing"
    - taxon: "[[bifidobacterium]]"
      role: "Generally protective; protective trend in MR analysis"
    - taxon: "[[lactobacillus]]"
      role: "Acid-tolerant commensal depleted by PPI therapy; loss removes competitive exclusion of gram-negatives and Candida"

nutritional_immunity:
  elevated: [tlr4-ligands, il-6, nf-kb, lps]
  depleted: [claudin-1]

ecological_features: [gram-negative-anaerobe-dominance, Type-II-microbiome, intestinal-metaplasia, aneuploidy, oral-esophageal-translocation, H-pylori-paradoxical-protection, progressive-Prevotella-gradient]

virulence_enzymes: [LPS-biosynthesis, TonB-iron-transport, MlaD-membrane-lipid-asymmetry, bacterial-proteases]

confidence:
  metallomic: preliminary
  taxonomic: high
  nutritional_immunity: moderate
  ecological: high
  virulence_enzymes: moderate

associated_conditions:
  - condition: "[[gerd]]"
    shared_metals: [nickel]
    shared_taxa: [prevotella, veillonella, leptotrichia, streptococcus-depleted, enterobacteriaceae]
    shared_ecological: [gram-negative-anaerobe-dominance, TLR4-activation, oral-esophageal-translocation]
    overlap_score: 0.85
  - condition: "[[barretts-esophagus|esophageal-adenocarcinoma]]"
    shared_metals: [iron]
    shared_taxa: [leptotrichia, prevotella, fusobacterium-nucleatum, streptococcus-depleted]
    shared_ecological: [gram-negative-anaerobe-dominance, aneuploidy, progressive-microbiome-shift]
    overlap_score: 0.82

cureva_status: partial
validated_interventions: []
stops: []
karen_brain_primitives: [1, 4, 5, 6, 9]
---

# Barrett's Esophagus — Microbiome Signature

## Overview

Barrett's esophagus (BE) is a premalignant condition in which the normal squamous epithelium of the distal esophagus is replaced by intestinal-type columnar epithelium (intestinal metaplasia), affecting 5.6% of US adults and 6-12% of patients with chronic [[gerd]]. It is the primary risk factor for esophageal adenocarcinoma (EAC), a cancer with ~20% 5-year survival. The microbiome signature reveals a well-defined ecological progression paralleling the metaplasia-dysplasia-carcinoma sequence: the esophageal community shifts from Streptococcus-dominated (healthy) through Prevotella-enriched (Barrett's) to Leptotrichia/Fusobacterium-dominant (EAC). This progression is quantifiable — P. melaninogenica prevalence rises from 22% to 83% across disease stages — making microbiome profiling a potential Barrett's surveillance tool. Mendelian randomization identifies Akkermansia muciniphila as the strongest causally protective organism (OR=0.76), while Enterobacteriaceae/Escherichia-Shigella causally increase risk (OR=1.10).

## Metallomic Signature

Confidence: preliminary

Elevated:
- Iron (Fe) — Metaplasia-associated P. melaninogenica strains carry TonB_C iron transport domains, suggesting iron acquisition is a key virulence adaptation in the Barrett's esophageal environment [[luu-2022-upper-gi-microbiota-children-reflux-metaplasia]]. Host STEAP2 metalloreductase (iron/copper reduction) SNPs are associated with esophageal microbiome composition, indicating that iron availability shapes which organisms colonize [[deshpande-2018-esophageal-microbiome-signatures-host-genetics]]. Enterobacteriaceae, which causally increase Barrett's risk, are avid siderophore-mediated iron scavengers.

Depleted:
- Selenium, zinc — Potential depletions from chronic PPI use (standard GERD therapy preceding Barrett's diagnosis), though direct Barrett's-specific metallomic data are limited.

The metallomic layer for Barrett's remains preliminary. The TonB_C finding in Prevotella and the STEAP2 host genetic association provide mechanistic pointers but dedicated metallomic profiling of Barrett's tissue is needed.

## Environmental Exposures

- Chronic acid reflux — The primary environmental exposure; chronic GERD is the prerequisite for Barrett's development.
- PPI therapy — While PPIs control acid, they raise intragastric pH, facilitating gram-negative bacterial colonization and Candida expansion; increase oral bacterial contribution to gastric fluid from 26.7% to 49.2% [[luu-2022-upper-gi-microbiota-children-reflux-metaplasia]].
- Dietary nickel — Relevant in the subset of patients with nickel-sensitive GERD preceding Barrett's development.
- Oral microbial burden — Periodontal pathogens detected in Barrett's tissue suggest chronic oral-esophageal microbial seeding as an environmental exposure source [[alageel-2025-microbiome-composition-gerd-systematic-review]].

## Nutritional Immunity Response

Confidence: moderate

Elevated:
- TLR4 ligands (LPS) — Gram-negative anaerobe enrichment increases LPS load in Barrett's tissue.
- IL-6, NF-kB — TLR2 expression elevated 2.1-fold in GERD/Barrett's with gram-negative dysbiosis; IL-6 production drives inflammatory signaling [[alageel-2025-microbiome-composition-gerd-systematic-review]].
- LPS — Direct mucosal exposure from gram-negative dominance.

Depleted:
- Claudin-1 — Tight junction protein decreased 47% in GERD/Barrett's with gram-negative dysbiosis; provides the molecular mechanism for barrier failure and persistent mucosal injury [[alageel-2025-microbiome-composition-gerd-systematic-review]].

## Taxonomic Analysis

Confidence: high

### The Progression Signature

The microbiome undergoes a well-characterized transformation across the GERD-Barrett's-EAC continuum:

| Stage | Community Type | Dominant Taxa | Key Changes |
|-------|---------------|---------------|-------------|
| Healthy | Type I (Streptococcus) | Streptococcus 39%, Prevotella 17%, Veillonella 14% | Aerobic, gram-positive |
| Reflux esophagitis | Transitional | Proteobacteria 43%, Streptococcus 20%, Klebsiella 9% | Gram-negatives emerging |
| Barrett's | Type II (Prevotella) | Firmicutes 55%; Veillonella 19%, Prevotella 12%, Streptococcus 11% | Gram-negative anaerobe dominance |
| EAC | Type II advanced | Leptotrichia ↑48%, Prevotella ↑60%, Streptococcus ↓45% | Leptotrichia as biomarker |

Sources: [[liu-2013-bacterial-biota-distal-esophagus-reflux-esophagitis-barretts]], [[gail-2015-upper-gi-microbiome-barretts-genomic-instability]], [[alageel-2025-microbiome-composition-gerd-systematic-review]]

### Progressive Prevotella Enrichment

P. melaninogenica prevalence rises progressively: 22% (normal) → 50% (esophagitis) → 58% (Barrett's) → 83% (metaplasia) [[luu-2022-upper-gi-microbiota-children-reflux-metaplasia]]. Metaplasia-associated strains carry distinct genomic features:
- TonB_C domain — Iron/metal transport system distinguishing pathogenic from commensal strains; identifies iron acquisition as a specific virulence adaptation
- MlaD domain — Membrane lipid asymmetry maintenance; suggests membrane-targeting interventions could selectively affect metaplasia-associated strains

### Enriched Taxa

| Taxon | Role | Evidence |
|-------|------|----------|
| [[prevotella]] | Progressive enrichment (22%→83%); TonB_C iron transport; defines Type B esotype | [[luu-2022-upper-gi-microbiota-children-reflux-metaplasia]], [[deshpande-2018-esophageal-microbiome-signatures-host-genetics]] |
| [[veillonella]] | 19% of BE community; ↑52% in BE-to-EAC progression | [[liu-2013-bacterial-biota-distal-esophagus-reflux-esophagitis-barretts]], [[alageel-2025-microbiome-composition-gerd-systematic-review]] |
| [[leptotrichia]] | Key EAC biomarker; ↑48% in late-stage progression | [[alageel-2025-microbiome-composition-gerd-systematic-review]] |
| [[fusobacterium-nucleatum]] | Gram-negative oral anaerobe; LPS producer | [[alageel-2025-microbiome-composition-gerd-systematic-review]] |
| [[enterobacteriaceae]] | Causally increase Barrett's risk (MR OR=1.10) | [[liu-2024-bidirectional-mr-gut-microbiota-gerd-barretts]] |
| [[faecalibacterium-prausnitzii]] | Paradoxical: increases both GERD and BE risk by MR; gut-protective but esophagus-harmful | [[liu-2024-bidirectional-mr-gut-microbiota-gerd-barretts]] |

### Depleted Taxa

| Taxon | Role | Evidence |
|-------|------|----------|
| [[streptococcus]] | Healthy esophageal dominant (39%); ↓45% from BE to EAC; defines Type A esotype | [[gail-2015-upper-gi-microbiome-barretts-genomic-instability]], [[deshpande-2018-esophageal-microbiome-signatures-host-genetics]] |
| [[akkermansia-muciniphila]] | Strongest protective signal (MR OR=0.76); mucin-reinforcing | [[liu-2024-bidirectional-mr-gut-microbiota-gerd-barretts]] |
| [[bifidobacterium]] | Generally protective; depleted by PPI therapy | [[liu-2024-bidirectional-mr-gut-microbiota-gerd-barretts]] |

### H. pylori Paradox

H. pylori-positive individuals had 22% lower aneuploidy incidence in Barrett's tissue (n=433) [[gail-2015-upper-gi-microbiome-barretts-genomic-instability]]. This aligns with epidemiological data showing that H. pylori eradication paradoxically increases GERD and Barrett's risk — likely by removing acid suppression from H. pylori-associated gastritis. The clinical dilemma: H. pylori is a clear risk factor for gastric cancer but may be protective against esophageal adenocarcinoma.

### F. prausnitzii Paradox

F. prausnitzii — widely considered anti-inflammatory and gut-protective — paradoxically increases both GERD and Barrett's risk in MR analysis [[liu-2024-bidirectional-mr-gut-microbiota-gerd-barretts]]. This may reflect site-specific effects where organisms beneficial in the colon are harmful in the esophageal context, challenging oversimplified "good bacteria" narratives and warranting investigation on the [[faecalibacterium-prausnitzii]] entity page.

### Three Esotypes

Host genetics define three esophageal community types [[deshpande-2018-esophageal-microbiome-signatures-host-genetics]]:
- Type A: Streptococcus-dominated (healthy pattern)
- Type B: Prevotella-dominated (Barrett's-associated)
- Type C: Haemophilus-intermediate
- Streptococcus-Prevotella co-exclusion is maintained across disease stages, suggesting competitive exclusion as the fundamental ecological dynamic
- STEAP2 metalloreductase SNPs correlate with community type — host iron/copper handling capacity shapes microbial colonization

## Virulence Enzymes and Features

Confidence: moderate

- TonB-dependent iron transport — Metaplasia-associated P. melaninogenica strains carry TonB_C domains; iron acquisition as a specific virulence adaptation and potential intervention target [[luu-2022-upper-gi-microbiota-children-reflux-metaplasia]].
- MlaD (membrane lipid asymmetry) — Genomic feature of metaplasia-associated Prevotella; membrane-targeting interventions could selectively disadvantage these strains [[luu-2022-upper-gi-microbiota-children-reflux-metaplasia]].
- LPS biosynthesis — Enriched gram-negative community produces LPS that activates TLR2/TLR4 signaling, elevating TLR2 2.1-fold and degrading claudin-1 by 47% [[alageel-2025-microbiome-composition-gerd-systematic-review]].
- Bacterial proteases — Gram-negative anaerobes produce proteases contributing to mucosal degradation in the Barrett's environment.

## Ecological State

Confidence: high

- Gram-negative anaerobe dominance (Type II microbiome) — The defining ecological feature: progressive replacement of aerobic Streptococcus-dominant communities by anaerobic Prevotella/Veillonella/Fusobacterium/Leptotrichia communities. This shift activates innate immune TLR pathways and sustains chronic inflammation.
- Intestinal metaplasia — The pathological hallmark: squamous-to-columnar epithelial transformation driven by chronic acid/inflammatory injury. The metaplastic epithelium itself may create a different ecological niche favoring different microbial colonizers.
- Aneuploidy — Genomic instability in Barrett's tissue is associated with microbiome composition; H. pylori-positive individuals show 22% lower aneuploidy incidence [[gail-2015-upper-gi-microbiome-barretts-genomic-instability]].
- Progressive Prevotella gradient — The 22%→83% prevalence gradient across disease stages represents one of the strongest dose-response relationships between a single taxon and disease progression in the WikiBiome knowledge base.
- Oral-esophageal translocation — Periodontal pathogens detected in Barrett's tissue; oral microbiome serves as a reservoir for esophageal colonizers.
- H. pylori paradoxical protection — H. pylori may protect against Barrett's progression through acid suppression, but eradication removes this protection. This creates a clinical tension where treating gastric cancer risk may increase esophageal cancer risk.

### Metabolic Disruptions

MR evidence identifies causal metabolite associations [[yang-2024-metabolites-esophageal-diseases-mendelian-randomization]]:
- Paraxanthine to 5-acetylamino-6-formylamino-3-methyluracil ratio — Protective for Barrett's (OR=0.879)
- N-acetylputrescine — Risk factor for Barrett's (OR=1.263)
- Involved metabolites include methylated nucleotides, glycine derivatives, phospholipids, bile acids, and fatty acid dicarboxylic acids

## Associated Conditions

| Condition | Shared Metals | Shared Taxa | Shared Ecology | Overlap Score |
|-----------|--------------|-------------|----------------|---------------|
| [[gerd]] | Ni | Prevotella, Veillonella, Leptotrichia, Streptococcus depleted, Enterobacteriaceae | Gram-negative dominance, TLR4 activation, oral-esophageal translocation | 0.85 |
| [[barretts-esophagus|esophageal-adenocarcinoma]] | Fe | Leptotrichia, Prevotella, Fusobacterium nucleatum, Streptococcus depleted | Gram-negative dominance, aneuploidy, progressive microbiome shift | 0.82 |

Barrett's esophagus occupies the central position in the GERD-Barrett's-EAC progression continuum, sharing 85% ecological overlap with GERD upstream and 82% with EAC downstream. The Leptotrichia emergence and Streptococcus decline are the key transition markers.

## Open Questions

1. Does the Prevotella enrichment gradient (22%→83%) causally drive Barrett's progression, or is it a consequence of the pH/inflammatory environment?
2. Can microbiome-based screening (Leptotrichia detection, Prevotella quantification) improve EAC surveillance beyond current endoscopic protocols?
3. Does the F. prausnitzii paradox (gut-protective, esophagus-harmful) reflect site-specific microbe-host interactions?
4. Can iron restriction (targeting TonB_C-dependent Prevotella strains) selectively disadvantage metaplasia-associated organisms?
5. Would Akkermansia muciniphila supplementation protect against Barrett's progression, given the strong causal protective signal (OR=0.76)?
6. How do STEAP2 metalloreductase host genetic variants interact with dietary iron to shape Barrett's risk?

## Karen's Brain Primitives Active

- Primitive 1 (Metals as Selective Pressures): Iron availability shapes the esophageal microbiome via STEAP2 host genetics and TonB_C bacterial transport systems; metaplasia-associated Prevotella strains are adapted for iron acquisition.
- Primitive 4 (Microbial Metal Dependencies as Achilles' Heels): TonB_C iron transport domains in metaplasia-associated P. melaninogenica identify iron restriction as a specific intervention target — restrict iron access to selectively disadvantage pathogenic strains while sparing Streptococcus.
- Primitive 5 (Two-Sided Ecological Engineering): Suppress Prevotella/gram-negative anaerobes AND restore Streptococcus-dominant Type A community plus Akkermansia muciniphila (strongest causal protective signal).
- Primitive 6 (Interkingdom Relationships and Functional Shielding): Candida albicans detected in esophageal communities alongside bacteria; PPI-driven Candida expansion in the preceding GERD stage may create conditions for fungal-bacterial cooperation in Barrett's tissue.
- Primitive 9 (Oxygen State as Ecological Determinant): The Type I (aerobic Streptococcus) to Type II (anaerobic gram-negatives) shift is fundamentally an oxygen ecology transition; the increasingly anaerobic environment of metaplastic tissue selects for Prevotella, Veillonella, Fusobacterium, and Leptotrichia.
