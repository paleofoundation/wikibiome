---
title: The association between low-concentration heavy metal exposure and chronic kidney disease risk through alpha-klotho
type: source
created: 2026-04-09T00:00:00.000Z
updated: 2026-04-09T00:00:00.000Z
authors:
  - Liu S
  - Wang H
  - Cao Y
  - Lu L
  - Wu Y
  - Lian F
  - Yang J
  - Song Q
journal: Scientific Reports
year: 2025
tags:
  - chronic-kidney-disease
  - cadmium
  - mercury
  - lead
  - thallium
  - alpha-klotho
  - NHANES
  - machine-learning
  - BKMR
  - mediation
doi: 10.1038/s44439-024-00009-w
platform: wikibiome
keystone: false
keystone_criteria_met: [2, 4]
why_keystone: Identifies alpha-klotho as the mediator converting low-dose Cd/Hg/Pb/Tl exposure into chronic kidney disease risk and uses Mendelian randomization to confirm causal directionality. Provides the mechanistic linchpin for WikiBiome's CKD signature and connects heavy metals to renal pathology at exposures below established regulatory thresholds.
evidence_level: computational-prediction
metals_discussed: [cadmium, lead, mercury, thallium]
karen_brain_primitives: [3]
---


> **Note:** Keystone designation removed 2026-04-18 — criteria not met on re-audit (only 2 of 5 criteria verified: [2, 4]).

# Key Claims

- Among 51 pollutants screened, heavy metals (Cd, Tl, Pb, Hg) were the most impactful on CKD risk via SHAP analysis
- [[thallium|Thallium]] had highest posterior inclusion probability (PIP = 1.0) in BKMR model; [[lead]] PIP = 0.608
- Mixed metal exposure showed a negative joint effect (i.e., higher levels associated with reduced CKD risk), likely reflecting reverse causality from impaired renal excretion
- [[alpha-klotho|Alpha-klotho]] mediates the Hg-CKD association with 34.55% mediation proportion
- Mendelian randomization confirmed higher alpha-klotho levels causally associated with reduced CKD risk (OR 0.9842)
- Tl and Pb concentrations significantly negatively correlated with CKD risk after adjustment
- Cd and Hg associations became non-significant after full adjustment

# Methods/Findings

- **Data**: NHANES 2007-2016, n = 2,415 adults aged 40-79; CKD defined as eGFR < 60 or UACR >= 30
- **Phase 1**: ML screening of 51 pollutants (7 metals, 18 pesticides, 6 PAHs, 6 phthalates, 6 VOCs, 7 PFASs, 1 phenol) using RF, XGB, GB, NN
- **Phase 2**: Logistic regression, BKMR, GAM for 4 metals (Cd, Hg, Pb, Tl)
- **Phase 3**: Mediation analysis with alpha-klotho; Mendelian randomization
- Alpha-klotho significantly higher in CKD patients (727.65 vs 798.80 pg/mL, p < 0.0001)
- Alpha-klotho functions: antioxidant enzyme regulation (SOD, CAT, GPX-4), TLR4 signaling suppression, NF-kappaB inhibition, autophagy promotion, Ca/vitamin D homeostasis
- Two-sample MR: 6 SNPs for alpha-klotho from IEU OpenGWAS; 2,197,556 SNPs for CKD

# Connections

- Novel mechanism: [[alpha-klotho]] as mediator between metal exposure and [[chronic-kidney-disease]]
- Klotho's renoprotective functions via [[nf-kappa-b]] suppression and [[oxidative-stress|oxidative stress]] reduction
- Reverse causality concern: impaired kidneys reduce metal excretion, creating apparent positive association
- [[thallium|Thallium]] nephrotoxicity via ATPase inhibition, catecholamine release, renal vasoconstriction
- Connects to [[sabath-2012-renal-health-heavy-metal-nephrotoxicity]] on proximal tubule mechanisms
- Supports [[danziger-2022-susceptibility-heavy-metal-toxicity-ckd]] on CKD increasing metal susceptibility
