---
title: "Guo 2019 — A simple fecal bacterial marker panel for the diagnosis of Crohn's disease"
type: source
created: 2026-04-14
updated: 2026-04-14
authors: [Songhe Guo, Yongfan Lu, Banglao Xu, Wan Wang, Jianhua Xu, Ge Zhang]
corresponding_author: "Jianhua Xu; Ge Zhang"
corresponding_email: "jhxu1976@126.com; zhangge@mail.sysu.edu.cn"
institution: "Sun Yat-sen University; Guangzhou Medical University"
year: 2019
journal: "Frontiers in Microbiology"
doi: "10.3389/fmicb.2019.01306"
evidence_level: case-control
sample_size: "n=346 (95 CD, 81 UC, 65 IBS, 105 healthy controls)"
tags: [crohns, ulcerative-colitis, ibs, fusobacterium-nucleatum, faecalibacterium-prausnitzii, escherichia-coli, biomarkers, diagnostic, microbiome-signature]
library_category: signatures
platform: both
condition: "crohns-disease"
karen_brain_primitives: [4, 8]
metals_discussed: []
taxa_discussed: [fusobacterium-nucleatum, faecalibacterium-prausnitzii, escherichia-coli]
key_findings:
  - "In 346 Asian subjects, fecal Fusobacterium nucleatum (Fn) was significantly elevated and F. prausnitzii (Fp) significantly depleted in CD vs healthy; combined Fn+Fp ratio discriminates CD from healthy subjects with AUC=0.867 (sensitivity 79.62%, specificity 63.89%, NPV 73.5%, PPV 80.7%)"
  - "Fn alone: AUC=0.841 (95%CI 0.782–0.890), sensitivity 73.63%, specificity 91.35%, NPV 88.2%, PPV 79.8% for CD vs healthy; Fn/Fp ratio distinguished CD from UC with AUC=0.771"
  - "E. coli was elevated in all IBD groups but did not add diagnostic value on top of Fn+Fp; anti-Fn IgG/IgA serology did not distinguish CD from UC"
---

# Guo 2019 — Fecal Fn/Fp marker panel for Crohn's diagnosis

## Key Findings

- **Fusobacterium nucleatum elevated, Faecalibacterium prausnitzii depleted in CD.** qPCR of fecal DNA in 346 Asian subjects (95 CD, 81 UC, 65 IBS, 105 healthy) showed significantly higher abundance of `Fusobacterium nucleatum` (Fn) and lower `Faecalibacterium prausnitzii` (Fp) in CD vs healthy subjects (p<0.01). `Escherichia coli` was higher in all IBD groups.
- **Fn alone achieves strong CD discrimination.** ROC analysis: Fn vs healthy AUC=0.841 (95%CI 0.782–0.890), sensitivity 73.63%, specificity 91.35%, NPV 88.2%, PPV 79.8%. Fp vs healthy AUC=0.811 (95%CI 0.748–0.864).
- **Fn/Fp ratio improves and distinguishes CD from UC.** Combined Fn+Fp (Fn–Fp) panel increased CD vs healthy AUC to 0.867 (sensitivity 79.62%, specificity 63.89%). The ratio Fn/Fp distinguished CD from UC with AUC=0.771. Anti-Fn and anti-E. coli IgG/IgA serology did NOT add diagnostic value.

## Methods

Prospective cross-sectional study of 346 Chinese subjects: 95 CD (69 active, 26 remission), 81 UC, 65 IBS, 105 healthy. Fecal DNA extracted, qPCR quantitation of Fn, Fp, E. coli vs universal 16S rDNA. Serum anti-Fn/anti-E. coli IgG/IgA by indirect ELISA. ROC curve analysis to identify optimal cutoffs.

## Relevance to WikiBiome

- Core evidence for [[fusobacterium-nucleatum]] entity page's role in IBD (not just colorectal cancer).
- Supports [[faecalibacterium-prausnitzii]] entity page's depletion signal across IBD — a canonical commensal loss.
- Feeds [[crohns-disease]] and [[ulcerative-colitis]] entity "Microbiome Associations" sections with quantitative diagnostic evidence.
- Informs [[biomarkers]] concept page — fecal microbial qPCR as non-invasive diagnostic.

## Relevance to Cureva

- **Supports [[crohns-disease-signature]] layer 2 (taxonomic).** Fn enriched, Fp depleted is a reproducible signature that can be measured non-invasively and monitored over time.
- **Diagnostic triangulation.** Fn/Fp ratio is a candidate biomarker for Cureva's clinical outputs — can differentiate CD from UC (AUC 0.771) and from IBS.
- Primitive 4 (Fn has iron/zinc dependencies — FadA adhesin, heme utilization) and primitive 8 (Fn expresses HmuY-like heme uptake) are active.

## Open Questions

- Does Fn/Fp ratio predict flare or response to treatment in longitudinal follow-up?
- Does the signature hold in non-Asian cohorts with different baseline microbiomes?
