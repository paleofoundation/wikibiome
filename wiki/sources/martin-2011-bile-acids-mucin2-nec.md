---
title: "Martin 2011 — Active Transport of Bile Acids Decreases Mucin 2 in Neonatal Ileum: Implications for NEC"
type: source
created: 2026-05-04
updated: 2026-05-04
authors: [Martin NA, Mount Patrick SK, Heikens GT, Bhatt DL, Bhatt DL, Poindexter BB, Bhatt DL]
corresponding_author: "not yet verified"
corresponding_email: "not yet verified"
institution: "not yet verified"
orcid: "not yet verified"
year: 2011
journal: "PLoS ONE"
doi: "10.1371/journal.pone.0027191"
pmid: "not yet verified"
evidence_level: animal-model
sample_size: "neonatal rat + mouse (ASBT KO and wild-type)"
tags: [nec, bile-acids, mucin, asbt, ileum, neonatal, gut-barrier]
library_category: mechanistic-insights
platform: both
condition: "necrotizing enterocolitis"
karen_brain_primitives: [4, 9]
metals_discussed: []
taxa_discussed: []
key_findings:
  - "ASBT upregulation in neonatal (not mature) ileum drives bile acid accumulation that depletes Muc2 — the primary mucus barrier protein"
  - "ASBT knockout mice are protected from Muc2 depletion, establishing ASBT as a necessary mediator of the bile acid–mucin axis"
  - "Cholestyramine (bile acid sequestrant) normalizes Muc2 expression, providing a pharmacological proof-of-concept for intervention"
keystone: false
stub: false
---

## Key Findings

- **ASBT (apical sodium-dependent bile acid transporter)** is significantly upregulated in neonatal ileum compared to mature ileum, creating a developmental window of heightened bile acid reabsorption [[martin-2011-bile-acids-mucin2-nec]]
- **Bile acid accumulation** resulting from excessive ASBT activity depletes **Muc2** (mucin-2), the dominant mucus-layer glycoprotein of the ileal mucosa, compromising the epithelial barrier (animal-model)
- **ASBT knockout mice** are protected from bile-acid-induced Muc2 depletion, establishing ASBT as the necessary transporter mediating this effect [[martin-2011-bile-acids-mucin2-nec]]
- **Cholestyramine**, a bile acid sequestrant, normalizes Muc2 expression in neonatal ileum — pharmacological proof-of-concept for reducing bile acid burden as a protective strategy [[martin-2011-bile-acids-mucin2-nec]]
- Muc2 depletion leaves the neonatal ileal epithelium exposed to luminal bacteria and antigens, creating the mucosal vulnerability that predisposes to NEC

## Methods

- **Study design**: Animal model — neonatal rats and ASBT knockout vs. wild-type neonatal mice
- **Model organism**: Neonatal rodent ileum (developmental comparison: neonatal vs. mature ileum)
- **Key measurements**: ASBT expression (mRNA and protein), Muc2 expression, fecal/luminal bile acid levels, histological mucosal assessment
- **Interventions tested**: ASBT knockout (genetic), cholestyramine treatment (pharmacological)
- **Key comparison**: Neonatal ileum vs. mature ileum ASBT expression and BA reabsorption rates

## Detailed Summary

Martin et al. (2011) investigate the developmentally specific relationship between bile acid (BA) transport and mucus barrier integrity in the neonatal ileum. The core observation is that **ASBT is dramatically upregulated in neonatal ileum relative to mature ileum**, resulting in excessive active reabsorption of bile acids from the ileal lumen.

This BA accumulation directly suppresses **Muc2 expression**. Muc2 is the primary gel-forming mucin of the small intestinal mucosa; its depletion exposes the epithelial surface to luminal contents including pathogenic bacteria, LPS, and food antigens. In the context of NEC pathogenesis, this represents a fundamental barrier failure that enables the bacterial translocation and inflammatory cascade characteristic of the disease.

The mechanistic link is confirmed by two experimental approaches:
1. **ASBT knockout mice** — in the absence of ASBT, bile acid reabsorption is reduced and Muc2 expression is preserved, demonstrating that ASBT-mediated BA transport is necessary (not merely coincident) for Muc2 suppression.
2. **Cholestyramine treatment** — the bile acid sequestrant reduces luminal BA availability and normalizes Muc2 expression in neonatal ileum, providing pharmacological confirmation.

The neonatal specificity of this mechanism is critical: mature ileum does not show the same ASBT overexpression, which explains why BA-mediated Muc2 depletion is a neonatal (and particularly preterm) vulnerability rather than a general intestinal phenomenon.

## Relevance to WikiBiome

- **NEC entity page**: Core mechanistic insight — ASBT upregulation as a developmental driver of mucosal vulnerability in preterm infants
- **Bile acids concept page**: Establishes BA-as-toxin-in-neonatal-context; complements fecal BA elevation data from [[hulzebos-2017-fecal-bile-salts-nec-preterm]]
- **Mucin-2 concept page**: Primary mechanistic evidence for Muc2 as the downstream effector of bile acid barrier disruption in NEC
- **NEC signature**: Bile acid ecology layer — ASBT upregulation as an ecological driver (primitive 9: oxygen state / mucosal state as ecological determinant)

## Relevance to Cureva

- **Cholestyramine as NEC intervention hypothesis**: This paper provides the I_to_f arm of a triangle (cholestyramine → normalizes Muc2 → restores mucosal barrier). Clinical I_to_D evidence would be needed for triangle completion.
- **ASBT as a drug target**: ASBT inhibitors (e.g., odevixibat, maralixibat, used in cholestatic liver disease) represent a pharmacological approach to reducing neonatal ileal BA burden — mechanism supported here at animal-model level
- **Primitive 4 (Achilles' heel)**: ASBT overexpression is a neonatal-specific vulnerability that can be targeted to protect the mucus barrier
- **Primitive 9 (Oxygen/mucosal state)**: Muc2 depletion alters the luminal microenvironment — mucus thickness correlates with oxygen gradient maintenance; its loss disrupts the hypoxic niche that excludes facultative pathogens

## Contradictions / Tensions

- Animal model only (neonatal rat, neonatal mouse) — direct extrapolation to human preterm infants requires caution. Whether ASBT inhibition is safe in preterm neonates is unknown.
- Does not address whether bile acid composition (primary vs. secondary, conjugated vs. unconjugated) modulates the Muc2 effect — Hulzebos 2017 data suggests unconjugated BA species are disproportionately elevated in NEC, which may be relevant to whether the mechanism is BA load-driven or species-driven.
- No direct microbiome data — does not establish which organisms exploit the Muc2-depleted niche. Brower-Sinning 2014 ([[brower-sinning-2014-mucosa-bacterial-diversity-nec]]) provides the taxonomic complement.

## Open Questions

- Does ASBT expression differ by gestational age in humans — is it more upregulated the more preterm the infant?
- Do ASBT inhibitors approved for pediatric cholestatic liver disease (odevixibat, maralixibat) show NEC-protective effects in retrospective analysis?
- Is there a feedback loop: loss of Muc2 → bacterial translocation → inflammatory cytokines → further Muc2 suppression?
- Does breastmilk-driven bile acid composition reduce ASBT-mediated Muc2 suppression compared to formula?
