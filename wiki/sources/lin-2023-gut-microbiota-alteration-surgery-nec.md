---
title: "Lin 2023 — Gut microbiota alteration after surgery in preterm NEC infants"
type: source
created: 2026-05-04
updated: 2026-05-04
authors: [Huijia Lin, Cuifang Xu, Junjin Chen, Xiaolu Ma, Liping Shi, Wei Shi, Lizhong Du, Yan Ni]
corresponding_author: "Lizhong Du; Yan Ni"
corresponding_email: "dulizhong@zju.edu.cn; yanni617@zju.edu.cn"
institution: "Department of NICU, Children's Hospital, Zhejiang University School of Medicine; National Clinical Research Center for Child Health, Hangzhou, China"
year: 2023
journal: "Frontiers in Pediatrics"
doi: "10.3389/fped.2023.993759"
pmid: "not yet verified"
evidence_level: prospective-cohort
sample_size: "n=28 (13 NEC, 15 controls)"
tags: [necrotizing-enterocolitis, NEC, preterm, gut-microbiota, surgery, methylobacterium, clostridium-butyricum, ketone-body-metabolism, alpha-diversity, longitudinal]
library_category: signatures
platform: both
condition: "necrotizing-enterocolitis"
karen_brain_primitives: [1, 4, 9]
metals_discussed: []
taxa_discussed: [methylobacterium, clostridium-butyricum, acidobacteria, klebsiella, enterobacter, staphylococcus, lactobacillus]
key_findings:
  - "Methylobacterium and Clostridium_butyricum enriched in NEC at onset, both positively correlated with CRP and negatively with platelet count"
  - "Alpha diversity (Shannon/Simpson) significantly lower in NEC at full enteral nutrition recovery vs controls (p<0.05)"
  - "Ketone body synthesis/degradation pathway more active in NEC at onset and recovery; sphingolipid metabolism more active in healthy controls"
keystone: false
---

# Lin 2023 — Gut Microbiota Alteration After Surgery in Preterm NEC Infants

## Key Findings

- **Methylobacterium** (a methylotrophic alpha-Proteobacterium) and **Clostridium butyricum** were significantly enriched in NEC infants at diagnosis (LDA score significant); both positively correlated with CRP and negatively with platelet count, suggesting a role in systemic inflammation ([[lin-2023-gut-microbiota-alteration-surgery-nec]], prospective case-control, n=28)
- **Alpha diversity** (Shannon and Simpson indices) was significantly lower in NEC infants at the full enteral nutrition recovery stage (NEC_FullEn) compared to controls at the same stage (p<0.05), indicating persistent dysbiosis even after surgical recovery ([[lin-2023-gut-microbiota-alteration-surgery-nec]])
- **Ketone body synthesis and degradation** pathway was significantly more active at NEC onset (NEC_Onset) and during recovery (NEC_FullEn); **sphingolipid metabolism** was more active in healthy controls at full enteral nutrition, suggesting metabolic rewiring in NEC ([[lin-2023-gut-microbiota-alteration-surgery-nec]])
- CRP elevated and platelet count reduced at NEC_Onset; growth delay rate 25.0% in NEC vs 7.1% in controls (not statistically significant) ([[lin-2023-gut-microbiota-alteration-surgery-nec]])
- **Acidobacteria** (a phylum typically associated with soil environments) was enriched in NEC_FullEn — an unexpected finding suggesting environmental or nosocomial colonization via NICU exposure ([[lin-2023-gut-microbiota-alteration-surgery-nec]])

## Methods

**Design:** Prospective case-control with longitudinal follow-up at three timepoints: NEC_Onset (diagnosis), NEC_Refeed (24 hours post-surgery, return of bowel function), and NEC_FullEn (full enteral nutrition re-established). Control infants sampled at matched gestational-age timepoints.

**Population:** Preterm infants ≤34 weeks gestational age with birth weight ≤2000g, admitted to NICU at Children's Hospital, Zhejiang University, June 2018–June 2020.

**Sample:** n=13 NEC (surgical cases), n=15 gestational age-matched controls. All NEC cases required surgery (Bell's stage II or III).

**Methods:** 16S rRNA amplicon sequencing (V3–V4 region); PICRUSt2 for functional pathway prediction; LEfSe for differential abundance; Spearman correlation for microbiota–CRP/platelet relationships.

**Key limitation:** Small sample size (n=28 total); all surgical NEC — medical NEC not represented; functional predictions (PICRUSt2) are computational proxies, not direct metabolomic measurements.

## Detailed Summary

The study tracks the gut microbiome of preterm infants who underwent surgery for NEC across three timepoints, comparing recovery trajectory to matched controls. This longitudinal design within NEC patients is relatively rare — most NEC microbiome studies capture only pre-NEC or single post-NEC snapshots.

At **NEC_Onset**, the most enriched taxa were Methylobacterium and Clostridium_butyricum. Methylobacterium is a methylotrophic alpha-Proteobacterium normally associated with plant surfaces and water systems — its enrichment in neonatal gut is environmentally significant and consistent with NICU-acquired colonization. Clostridium_butyricum enrichment at NEC onset is paradoxical, as C. butyricum is also used as a probiotic; the strain identity here is unknown and toxigenic strains cannot be excluded.

At **NEC_FullEn** (recovery), Acidobacteria enrichment was the dominant finding vs controls. Acidobacteria are soil-associated acidophilic bacteria — their presence in the recovering NICU infant gut likely reflects environmental contamination rather than a host-adapted microbiome, suggesting the gut ecosystem is reconstituting with opportunistic environmental colonizers rather than restoring a protective commensal community.

The **persistent alpha-diversity deficit** at full enteral nutrition recovery (despite resuming feeds and apparent clinical recovery) is clinically important: it indicates that microbiome rehabilitation does not track clinical recovery milestones and may require targeted microbiome interventions beyond standard NICU re-feeding protocols.

**Functional pathway analysis** (PICRUSt2) found elevated ketone body metabolism in NEC, consistent with fat malabsorption and altered energy substrate utilization in the inflamed intestine. Sphingolipid metabolism elevation in controls reflects healthy mucosal lipid biology that NEC disrupts.

## Relevance to WikiBiome

- **NEC entity page** ([[necrotizing-enterocolitis]]): Add Methylobacterium and Clostridium_butyricum as NEC-onset enriched taxa; note persistent alpha-diversity deficit post-surgical recovery
- **Methylobacterium entity** (create): Environmental alpha-Proteobacterium found enriched in NEC onset and other dysbiotic conditions; highlights NICU environmental colonization as a microbiome shaping force
- **Clostridium butyricum entity** ([[clostridium-butyricum]]): Update to note paradoxical enrichment at NEC onset; strain-level distinction between probiotic and pathogenic strains is critical
- **Ketone body metabolism concept**: NEC disrupts normal mucosal lipid/energy metabolism; ketone bodies as proxy for fat malabsorption in early NEC

## Relevance to Cureva

- The persistent diversity deficit at NEC_FullEn indicates a window for **microbiome rehabilitation intervention** (probiotics, prebiotics) after surgical NEC recovery — clinical milestone ≠ microbiome recovery
- Methylobacterium as a **novel NEC biomarker candidate**: environmental colonizer, CRP-correlated, may have NICU surveillance applications
- C. butyricum enrichment at NEC onset strengthens caution about probiotic use without strain-level verification in surgical NEC cases

## Contradictions / Tensions

- C. butyricum is both used as a probiotic (in some formulations) and found enriched at NEC onset in this study. Strain identity is not resolved. This creates a potential STOP signal for untested C. butyricum preparations in preterm NEC-risk infants.
- Methylobacterium enrichment at NEC onset is unexpected for a plant/environment-associated organism; suggests NICU environmental contamination as a microbiome variable largely uncontrolled in most NEC studies.

## Open Questions

- What strains of Clostridium butyricum are enriched at NEC onset — toxigenic or probiotic strains?
- Does microbiome rehabilitation with targeted probiotics after surgical NEC reduce the persistent diversity deficit seen at NEC_FullEn?
- Does Acidobacteria enrichment in NEC recovery reflect a specific NICU environmental source and could NICU surface decontamination reduce this pattern?
