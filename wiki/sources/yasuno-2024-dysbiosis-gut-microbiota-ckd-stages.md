---
title: "Yasuno 2024 — Dysbiosis of Gut Microbiota in Patients with Chronic Kidney Disease"
type: source
created: 2026-04-09
updated: 2026-04-16
authors: [Tetsuhiko Yasuno, Koji Takahashi, Kazuhiro Tada, Hiroto Hiyamuta, Maho Watanabe, Kenji Ito, Hisatomi Arima, Kosuke Masutani]
corresponding_author: "Kosuke Masutani"
corresponding_email: "kmasutani@fukuoka-u.ac.jp"
institution: "Department of Internal Medicine, Division of Nephrology and Rheumatology, Fukuoka University, Japan"
year: 2024
journal: "Internal Medicine"
doi: "10.2169/internalmedicine.1602-23"
pmid: "not yet verified"
evidence_level: cross-sectional
sample_size: "n=93 (73 CKD stage 3–5D; 20 controls at CKD stage 1–2)"
tags: [chronic-kidney-disease, CKD, 16S-rRNA, gut-microbiota, dysbiosis, butyrate, Lachnospiraceae, Lachnospira, Blautia, Coprococcus, Roseburia, Anaerostipes, CKD-stages, renal-replacement-therapy, gut-kidney-axis]
library_category: causal
platform: wikibiome
condition: "chronic-kidney-disease"
karen_brain_primitives: [1, 5, 9]
metals_discussed: []
taxa_discussed: [lachnospira, blautia, coprococcus, roseburia, anaerostipes, parabacteroides, lactobacillus, ruminococcus, clostridium, lachnospiraceae]
key_findings:
  - "Five butyrate-producing Lachnospiraceae genera (Lachnospira, Blautia, Coprococcus, Anaerostipes, Roseburia) depleted in CKD stages 3–5D vs. controls (LDA score >3)"
  - "Dysbiosis begins from CKD stage 3b (eGFR 30–44 mL/min/1.73m²) with simultaneous depletion of Anaerostipes, Lachnospira, and Roseburia"
  - "Microbiome composition does not recover after renal replacement therapy (hemodialysis), confirming irreversibility"
keystone: false
---

# Yasuno 2024 — Dysbiosis of Gut Microbiota in Patients with CKD

## Key Findings

- **Five butyrate-producing Lachnospiraceae genera** (Lachnospira, Blautia, Coprococcus, Anaerostipes, Roseburia) are **consistently depleted** across CKD stages 3–5D compared to controls (CKD stage 1–2), with LDA score >3 (p < 0.05) [[yasuno-2024-dysbiosis-gut-microbiota-ckd-stages]]
- **Stage-specific depletion pattern**:
  - Stage 3a: only *Lachnospira* reduced vs. controls (earliest signal)
  - Stage 3b: *Anaerostipes*, *Lachnospira*, *Roseburia* all reduced — **the critical transition point**
  - Stage 4: *Anaerostipes*, *Blautia*, *Lachnospira* reduced
  - Stage 5: *Blautia*, *Coprococcus*, *Lachnospira* reduced
  - Stage 5D (dialysis): *Coprococcus*, *Lachnospira*, *Roseburia* reduced
- **Renal replacement therapy does not restore microbiome**: even after hemodialysis, the five Lachnospiraceae genera remain depleted — dysbiosis is persistent, not reversible by renal replacement
- Conversely, **Parabacteroides, Clostridium, Ruminococcus, and Lactobacillus** are enriched in CKD stages 3–5D vs. controls
- Beta diversity (unweighted UniFrac) significantly different from stage 3b onward (R = 0.216, p = 0.003)

## Methods

- **Design**: Cross-sectional, 16S rRNA gene sequencing; Fukuoka University Hospital
- **Population**: 73 CKD stage 3–5D (including hemodialysis, stage 5D); 20 age/sex-matched controls from hospital staff at CKD stage 1–2
- **CKD staging**: KDIGO 2012 criteria
- **Exclusion criteria**: secondary-cause CKD, recent corticosteroids, hormones, antibiotics, probiotics, prebiotics, symbiotics
- **Sequencing**: QIAamp Fast DNA Stool Mini Kit; QIIME2 v2021.11; DADA2 chimera removal; Greengenes v13_8 for taxonomy; 97% OTU clustering
- **Group comparison**: LEfSe v1.0.8; LDA score >3.0 and p < 0.05 threshold for differential taxa
- **Beta diversity**: PCoA with unweighted and weighted UniFrac distances

## Detailed Summary

This study is notable for **staging the microbiome across all CKD severity levels**, including dialysis patients, which prior studies had not done. The result clarifies the timeline of dysbiosis and the irreversibility of the gut microbiome shift.

**Why Lachnospiraceae matter in CKD:**
Lachnospiraceae are anaerobes that ferment plant-derived polysaccharides to produce butyrate and acetate. Butyrate is the primary fuel for colonocytes and a critical inducer of regulatory T cells (Tregs), which suppress intestinal inflammation. Loss of Lachnospiraceae means:
1. Reduced butyrate → reduced Treg induction → increased intestinal inflammation
2. Reduced colonocyte fuel → increased intestinal permeability (leaky gut)
3. Leaky gut → bacterial translocation → systemic endotoxemia → accelerated renal inflammation

The **stage 3b threshold** (eGFR 30–44 mL/min/1.73m²) is when multiple Lachnospiraceae genera simultaneously decline — this is the inflection point below which the gut ecosystem has failed. At this stage, decreased dietary fiber (common in CKD management), phosphate and potassium binders, intestinal ischemia, acidosis, and intestinal edema all compound to drive dysbiosis.

**The dialysis paradox**: Renal replacement therapy (hemodialysis) eliminates uremic toxins from the bloodstream but does NOT restore gut microbiome composition. Coprococcus, Lachnospira, and Roseburia remain depleted in stage 5D patients on dialysis. This implies the structural factors driving dysbiosis (altered gut motility, diet, medications, mucosal changes) persist even when uremia is controlled, and that microbiome restoration would require active ecological intervention beyond renal replacement.

**Enriched taxa in CKD (potential pathobiont markers):**
- *Clostridium* spp. (pathogenic members in this genus)
- *Lactobacillus* (less prevalent in peritoneal dialysis, interestingly)
- *Parabacteroides* spp.
- *Ruminococcus* spp. (at genus level — includes some pathogenic members)

## Relevance to WikiBiome

- Provides precise **stage thresholds** for when gut dysbiosis begins in CKD — stage 3b is the critical transition, not stage 4 or 5 as previously assumed
- Demonstrates that dialysis does not restore the microbiome — a counterintuitive finding with implications for patient counselling and intervention timing
- Specific genus-level data (Lachnospira, Blautia, Coprococcus, Anaerostipes, Roseburia) for CKD that Wikipedia lacks

## Relevance to Cureva

- **Stage 3b is the intervention window**: butyrate-supporting interventions (dietary fibre, prebiotic supplementation) should be initiated before stage 3b to prevent the multi-taxon Lachnospiraceae depletion
- The irreversibility finding argues for early and sustained microbiome intervention rather than waiting for renal replacement therapy to address CKD complications
- Lachnospiraceae-supporting probiotics/synbiotics need to be triangulated against eGFR outcomes in RCTs

## Contradictions / Tensions

- Lachnospiraceae are reportedly *increased* in type 1 and type 2 diabetes and NAFLD (they can cause diabetes when transplanted into sterile mice) — their role is context-dependent and genus-level analysis is insufficient to resolve this controversy; species-level data needed
- Single institution (Fukuoka University Hospital, Japan) — may not generalize across dietary patterns and genetic backgrounds

## Open Questions

- At what eGFR does Lachnospiraceae depletion become irreversible with dietary/prebiotic intervention alone?
- Can targeted Lachnospiraceae supplementation (precision probiotics) slow eGFR decline when initiated at stage 3a?
- Is the dysbiosis in CKD causally upstream of progression, or is it entirely downstream of uremia and dietary restriction?
