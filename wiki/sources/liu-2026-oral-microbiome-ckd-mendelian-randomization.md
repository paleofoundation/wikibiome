---
title: "Liu 2026 — Causal Association between Oral Microbiome and Chronic Kidney Disease: Two-Sample Mendelian Randomization"
type: source
created: 2026-04-09
updated: 2026-04-16
authors: [Zhiwei Liu, Zhiyao Liu, Weixia Sun, Lixin Zhu, Tianyang Lyu]
corresponding_author: "Tianyang Lyu"
corresponding_email: "ltyfiona@jlu.edu.cn"
institution: "Department of Nephrology, The First Hospital of Jilin University"
year: 2026
journal: "Archives of Medical Science"
doi: "10.5114/aoms/211613"
pmid: "not yet verified"
evidence_level: quasi-experimental
sample_size: "64,164 CKD cases / 561,055 controls (CKD GWAS); 786 participants (oral microbiome GWAS)"
tags: [chronic-kidney-disease, CKD, mendelian-randomization, oral-microbiome, GWAS, Veillonella, Fusobacteriales, Rothia, Bacteroidales, Streptococcus, causal-inference, gut-kidney-axis]
library_category: causal
platform: wikibiome
condition: "chronic-kidney-disease"
karen_brain_primitives: [1, 5]
metals_discussed: []
taxa_discussed: [veillonella, fusobacteriales, rothia, bacteroidales, streptococcus]
key_findings:
  - "Veillonella species causally protective against CKD (OR = 0.96, 95% CI 0.93–0.99, p=0.01)"
  - "Order Fusobacteriales causally increases urinary albumin-to-creatinine ratio (OR = 1.01, p=0.04)"
  - "Streptococcus species causally protective against dialysis (OR = 0.82, 95% CI 0.69–0.97, p=0.02)"
keystone: false
---

# Liu 2026 — Causal Association between Oral Microbiome and CKD: Two-Sample Mendelian Randomization

## Key Findings

- **Veillonella species** causally protective against CKD diagnosis (IVW OR = 0.96, 95% CI 0.93–0.99, p = 0.01) — first genetically-informed evidence for oral Veillonella as a kidney-protective taxon [[liu-2026-oral-microbiome-ckd-mendelian-randomization]]
- **Order Fusobacteriales** causally increases urinary albumin-to-creatinine ratio (UACR), a key marker of glomerular injury (IVW OR = 1.01, 95% CI 1.00–1.01, p = 0.04)
- **Rothia species** causally protective against elevated UACR (IVW OR = 0.99, 95% CI 0.99–1, p = 0.03)
- **Order Bacteroidales** causally protective against CKDi25 (≥25% eGFR decline, IVW OR = 0.97, 95% CI 0.94–1, p = 0.03)
- **Species micronuciformis** causally protective against CKDi25 (IVW OR = 0.95, 95% CI 0.91–0.99, p = 0.01)
- **Streptococcus species** causally protective against dialysis requirement (IVW OR = 0.82, 95% CI 0.69–0.97, p = 0.02)
- No significant horizontal pleiotropy detected in any positive result (MR-Egger intercepts not significant; MR-PRESSO found no outliers)

## Methods

- **Design**: Two-sample Mendelian randomization
- **CKD GWAS**: GCST008065 — 64,164 cases / 561,055 controls, European ancestry (CKDGen Consortium)
- **CKD outcome variants**: eGFR (GCST90103634), UACR (GCST008794), CKDi25 and Rapid3 from CKDGen Consortium, dialysis status
- **Oral microbiome exposure GWAS**: Stankevic et al. 2024 — 786 participants, saliva 16S rRNA amplicon sequencing at Steno Diabetes Centre, Denmark; 43 bacterial clusters analysed (GCSTIDs: GCST90429799–GCST90429831)
- **IV selection**: p < 5×10⁻⁶ genome-wide; MAF > 0.01; LD r² < 0.001, clumping distance 10,000 kb; F-statistic > 10; proxy SNPs with r² > 0.8 used when needed
- **Primary analysis**: Inverse variance weighted (IVW); sensitivity: MR-Egger, weighted median, weighted mode, MR-PRESSO, Cochran's Q
- **Total IVs screened**: 267 for 43 Firmicutes phylum taxa

## Detailed Summary

The study addresses a gap between observational reports (CKD patients have altered oral microbiome diversity) and causal inference. Using GWAS from European ancestry cohorts, 43 oral microbial features were tested against six CKD endpoints.

**Protective associations (higher taxon abundance → lower CKD risk):**
- *Veillonella* spp. reduce CKD risk via proposed SCFA/butyrate production → anti-inflammatory cytokine suppression and Treg differentiation. CKD patients are independently known to have lower oral Veillonella counts.
- *Rothia* spp. (usually commensal) reduce UACR, possibly by inhibiting inflammatory pathways that damage the glomerular filtration barrier.
- *Bacteroidales* and *Species micronuciformis* are protective against CKDi25. Bacteroidia is most variable and protective in stage 4–5 CKD. SCFAs from Bacteroidales fermentation may modulate glycaemic control and inflammatory signalling (gut–kidney axis).
- *Streptococcus* spp. reduce dialysis risk — mechanism unclear; possibly protective effects on residual renal function.

**Risk-increasing association:**
- *Fusobacteriales* increase UACR. Proposed mechanism: Fusobacteriales-derived LPS induces systemic inflammation → glomerular injury; bacterial metabolites promote renal oxidative stress and apoptosis.

**Sensitivity analysis confirmed no horizontal pleiotropy** for any positive result (Cochran's Q p > 0.05; MR-Egger intercepts not significant; no outliers by MR-PRESSO; funnel plots symmetrical; leave-one-out plots stable).

**Limitation note**: GWAS predominantly European — results may not generalise to other ancestries. Summary-level data prevents stage-specific analysis.

## Relevance to WikiBiome

- Extends the gut–kidney axis concept to the **oral–kidney axis**: periodontal microorganisms influence gut microbiota composition and thereby CKD risk
- Provides genetically-informed evidence levels for specific taxa, superior to observational cross-sectional studies subject to reverse causality
- Veillonella and Rothia roles in CKD are WikiBiome-exclusive insights; not found on Wikipedia's CKD page
- Links to entity pages: [[veillonella]], [[fusobacteriales]], [[rothia]]

## Relevance to Cureva

- Oral microbiome management (dental hygiene) is an upstream CKD prevention target identified here
- Fusobacteriales UACR elevation signal could be a STOP trigger: oral dysbiosis interventions that reduce Fusobacteriales (periodontal treatment) may slow CKD progression

## Contradictions / Tensions

- Observational studies report enrichment of *Neisseria* in CKD oral microbiomes; this MR found no causal relationship with Neisseria — likely reflects reverse causality in observational data (CKD-altered oral environment facilitates Neisseria colonisation)

## Open Questions

- What mediates the Veillonella-CKD protective association at the systemic level? Is it SCFA-mediated, or immune modulation?
- Do periodontal interventions that reduce Fusobacteriales colonisation slow UACR progression in CKD patients?
- Can oral microbiome profiling serve as an early-warning biomarker for CKD risk in high-exposure populations?
