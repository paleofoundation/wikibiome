---
title: "Yao 2024 — Gut Microbiota and Menstrual Disorders: Two-Sample MR Study"
type: source
created: 2026-04-14
updated: 2026-04-20
authors: [Yufan Yao, Haoran Hu, Longhao Chen, Hong Zheng]
corresponding_author: "Hong Zheng"
corresponding_email: "ygzh@163.com"
institution: "Zhejiang Chinese Medical University"
year: 2024
journal: "Frontiers in Microbiology"
doi: "10.3389/fmicb.2024.1321268"
evidence_level: mendelian-randomization
sample_size: "n=18,340 (microbiome GWAS) + 463,010 (EFMR outcome)"
tags: [pmdd, pms, menstrual-disorders, mendelian-randomization, escherichia, blautia, gut-microbiota]
library_category: causal
platform: both
condition: pmdd
karen_brain_primitives: [1, 5, 7]
metals_discussed: []
taxa_discussed: [escherichia-shigella, blautia, lachnospiraceae, dialister, eubacterium-eligens, haemophilus, lachnospira, anaerotruncus, ruminiclostridium-5, prevotella-9, erysipelatoclostridium, marvinbryantia, catenibacterium, phascolarctobacterium]
key_findings:
  - "Only Escherichia/Shigella causally associated with EFMR after FDR correction (OR=1.004, p=0.00032)"
  - "Blautia protective against excessive/frequent/irregular menstruation (EFIM) (OR=0.994, p<0.001)"
  - "23 gut microbiota loosely connected to menstrual disorders pre-FDR; most did not survive correction"
keystone: false
---

# Yao 2024 — Gut Microbiota and Menstrual Disorders: Two-Sample MR Study

## Key Findings

- **Escherichia/Shigella** is the only genus with a causal relationship to excessive/frequent menstruation with regular cycle (EFMR) surviving FDR correction (OR=1.004, 95%CI 1.002–1.006, p=0.00032, p_FDR=0.0382) ([[yao-2024-gut-microbiota-menstrual-disorders-mr]], MR, n=463,010).
- **Blautia** showed a protective causal effect on EFIM (OR=0.994, 95%CI 0.990–0.997, p<0.001) ([[yao-2024-gut-microbiota-menstrual-disorders-mr]]).
- Pre-FDR, 11 genera associated with EFMR (main): **Eubacterium eligens** (protective, OR=0.996), **Haemophilus** (protective, OR=0.996), **Phascolarctobacterium** (protective, OR=0.998), **Catenibacterium** (protective, OR=0.998), **Lachnospira** (risk, OR=1.004), **Anaerotruncus** (risk, OR=1.004), **Marvinbryantia** (risk, OR=1.003), **Defluviitaleaceae UCG011** (risk, OR=1.002), **Ruminococcaceae UCG011** (risk, OR=1.002) ([[yao-2024-gut-microbiota-menstrual-disorders-mr]]).
- **Ruminiclostridium 5** (OR=1.004), **Prevotella 9** (OR=1.002), and **Erysipelatoclostridium** (OR=1.001) associated with EFMR (secondary) pre-FDR ([[yao-2024-gut-microbiota-menstrual-disorders-mr]]).
- For EFIM: **Blautia** (protective), plus **Eubacterium brachy** (risk), **Veillonella** (risk), **Enterorhabdus** (risk), **Lactococcus** (risk) pre-FDR.
- **Lachnospiraceae UCG004** and **Dialister** associated with irregular menstruation (unspecified) ([[yao-2024-gut-microbiota-menstrual-disorders-mr]]).

## Methods

Two-sample Mendelian randomization using MiBioGen consortium GWAS (n=18,340, 211 taxa at genus level) as exposure and IEU Open GWAS menstrual disorder phenotypes as outcomes. Four outcome phenotypes based on ICD-10: EFMR main (N=463,010, 6,641 cases), EFMR secondary (N=463,010, 2,698 cases), EFIM (N=361,194, 8,475 cases), IM unspecified (N=463,010, 1,279 cases). All European ancestry. IV selection: p<1×10⁻⁵, R²<0.001, 10,000kb clumping. Methods: IVW, MR-Egger, weighted median, simple mode, weighted mode. Sensitivity: Cochran's Q, MR-PRESSO, leave-one-out, Egger intercept. FDR applied to significant IVW results.

## Detailed Summary

This study provides **causal genetic evidence** linking gut microbiota composition to menstrual disorders. The Escherichia/Shigella finding is particularly notable given this genus's known role in estrogen metabolism via **beta-glucuronidase** activity — directly relevant to the estrobolome hypothesis (Primitive 7). Escherichia/Shigella is a well-characterized beta-glucuronidase producer that can deconjugate estrogen glucuronides, reactivating estrogens for enterohepatic recirculation. The causal signal suggests this is not merely a consequence of menstrual dysfunction but a driver.

The Blautia protective finding aligns with its known SCFA-producing, anti-inflammatory role across multiple conditions. Of the 119 genera tested, only Escherichia/Shigella passed the FDR threshold, suggesting a highly specific causal pathway rather than broad dysbiosis.

## Relevance to WikiBiome

- **Entity pages:** [[escherichia-coli]], [[blautia]], [[lachnospira]], [[anaerotruncus]], [[haemophilus]] — add MR-level causal evidence for menstrual disorder associations.
- **Concept pages:** [[estrobolome]], [[beta-glucuronidase]] — Escherichia/Shigella causal link supports beta-glucuronidase-mediated estrogen recirculation mechanism.
- **Signature page:** [[pmdd-signature]] — Escherichia/Shigella enrichment as causal taxonomic feature.

## Relevance to Cureva

- **Intervention target:** competitive exclusion of Escherichia/Shigella via Blautia-supporting interventions (dietary fiber, SCFA-promoting substrates).
- **Intervention target:** reduce β-glucuronidase activity (calcium-D-glucarate, dietary glucuronidation support).
- Primitive 5: two-sided ecological engineering — suppress Escherichia/Shigella AND restore Blautia.
- Primitive 7 (estrobolome): Escherichia/Shigella beta-glucuronidase activity → estrogen deconjugation → menstrual dysfunction.

## Contradictions / Tensions

- Study addresses "menstrual disorders" broadly (ICD-10 codes for heavy/irregular periods), not PMDD mood symptoms specifically. However, the estrobolome mechanism applies to both physical and mood symptom domains.
- The GWAS used (IEU Open GWAS) is European-only — generalizability to other populations unknown.

## Open Questions

- Would a PMDD-specific GWAS outcome show the same Escherichia/Shigella causal signal?
- Does the Blautia protective effect operate through SCFA production, competitive exclusion of pathobionts, or direct neuroactive metabolite production?
- Is the small per-unit OR (1.004) clinically actionable when aggregated across the full Escherichia/Shigella population in the gut?
