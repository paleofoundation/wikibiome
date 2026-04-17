---
title: "Wang K 2024 — Causal Gut Microbiota-GERD Associations via Bidirectional Mendelian Randomization"
type: source
created: 2026-04-14
updated: 2026-04-16
authors: [Kui Wang, Suijian Wang, Yuhua Chen, Xinchen Lu, Danshu Wang, Yao Zhang, Wei Pan, Chunhua Zhou, Duowu Zou]
corresponding_author: "Wei Pan; Chunhua Zhou"
corresponding_email: "weipan1977@163.com; zdwjxh66@sjtu.edu.cn"
institution: "Ruijin Hospital, Shanghai Jiao Tong University; First People's Hospital, Yunnan Province; Stantou University Medical College; First Clinical Medical College, Lanzho University; Foshan Women and Children Hospital"
year: 2024
journal: "Frontiers in Immunology"
doi: "10.3389/fimmu.2024.1327503"
pmid: "not yet verified"
evidence_level: computational-prediction
sample_size: "n=78,707 GERD cases, 288,734 controls (GWAS); microbiome GWAS n=18,340 (MiBioGen, 24 cohorts)"
tags: [gerd, mendelian-randomization, causal-inference, gut-microbiome, bidirectional, actinobacteria, lachnospiraceae, methanobrevibacter, mollicutes, tenericutes, christensenellaceae, collinsella, eggerthella, scfa]
library_category: causal
platform: both
condition: "gastroesophageal-reflux-disease"
karen_brain_primitives: [1, 5]
metals_discussed: []
taxa_discussed: [lachnospiraceae, methanobrevibacter, actinobacteria, mollicutes, tenericutes, christensenellaceae, collinsella, eggerthella, anaerostipes, clostridiales-vadin-bb60, ruminococcaceae, euryarchaeota, rikenellaceae]
key_findings:
  - "Actinobacteria (OR=0.93, P=0.019), Lachnospiraceae UCG004 (OR=0.91, P=0.026), Methanobrevibacter (OR=0.95, P=0.026), and Clostridiales Vadin BB60 (OR=0.95, P=0.027) causally protective against GERD"
  - "Mollicutes (OR=1.09, P=0.037) and Tenericutes (OR=1.11, P=0.024) causally increase GERD risk; Anaerostipes (OR=1.09, P=0.017) also a risk factor"
  - "Bidirectional MR: GERD itself causes dysbiosis in 13 taxa (1 phylum, 2 families, 10 genera), including depleting Christensenellaceae, Rikenellaceae, and enriching Collinsella, Eggerthella"
keystone: false
---

## Key Findings

- **Forward MR (microbiome → GERD)**: Seven taxa showed significant associations with GERD susceptibility (IVW primary analysis):
  - **Protective**: Clostridiales Vadin BB60 group (OR=0.95, 95% CI 0.91–0.99, P=0.027); Lachnospiraceae UCG004 (OR=0.91, 95% CI 0.84–0.99, P=0.026); Methanobrevibacter (OR=0.95, 95% CI 0.91–0.99, P=0.026); Phylum Actinobacteria (OR=0.93, 95% CI 0.88–0.99, P=0.019)
  - **Risk-increasing**: Class Mollicutes (OR=1.09, 95% CI 1.01–1.19, P=0.037); Genus Anaerostipes (OR=1.09, 95% CI 1.01–1.16, P=0.017); Phylum Tenericutes (OR=1.11, 95% CI 1.01–1.22, P=0.024)
- **Reverse MR (GERD → microbiome)**: GERD had causal influence on 1 phylum, 2 families, and 10 genera. **Down-regulated** by GERD: Phylum Euryarchaeota (OR=0.82), Family Christensenellaceae (OR=0.85), Family Rikenellaceae (OR=0.88), and multiple associated genera. **Up-regulated** by GERD: Collinsella (OR=1.15), Eggerthella (OR=1.24), Eubacterium rectale group (OR=1.12), Eubacterium ventriosum group (OR=1.12).
- No weak instrument bias, heterogeneity, or horizontal pleiotropy detected in any retained association (all F-statistics >10; Cochran Q P>0.05; MR-PRESSO P>0.05 for retained results).

## Methods

Two-sample bidirectional Mendelian randomization. Gut microbiome data from MiBioGen consortium GWAS (18,340 individuals, 24 population-based cohorts; 196 microbiota units: 9 phyla, 16 classes, 20 orders, 35 families, 131 genera; 16S rRNA fecal sequencing). GERD data from recent publicly available GWAS (78,707 GERD cases, 288,734 controls, European descent). SNP selection: P<1×10⁻³, r²<0.001 clump distance >10,000 kb; MAF≥0.01; palindromic/redundant SNPs removed. Phenoscanner to exclude SNPs associated with GERD confounders (coronary disease, IPF). Primary method: IVW. Supplementary: MR-Egger, weighted median, simple mode, weighted mode. Sensitivity: Cochran Q, MR-Egger intercept, MR-PRESSO, leave-one-out. Bonferroni and FDR correction applied.

## Detailed Summary

**Why protective taxa protect**: The Actinobacteria, Family Clostridiales Vadin, Lachnospiraceae UCG004, and Methanobrevibacter are all contributors to short-chain fatty acid biosynthesis (acetate, propionate, butyrate). SCFAs are critical for colonocyte energy supply, intestinal barrier integrity (claudin-1 and tight junction maintenance), and dual-directional regulation of colonic motility. Their depletion creates a permissive environment for acid-driven mucosal injury and impaired LES function.

**Why Methanobrevibacter is protective**: This archeon, typically associated with methane production and constipation, appears to have SCFA-related protective properties in this GWAS context — possibly because methane-producing microbiomes have different fermentation ecology that influences gut motility and intestinal transit time in ways that reduce reflux probability.

**Bidirectional vicious cycle**: GERD depletes health-associated Christensenellaceae, Rikenellaceae, and Euryarchaeota while enriching potentially pro-inflammatory Collinsella and Eggerthella. This establishes a self-reinforcing dysbiosis cycle: acid reflux changes the microbial ecology → altered microbiome reduces mucosal protection → worsened reflux.

## Relevance to WikiBiome

- Primary causal evidence for [[gerd]] entity page's microbiome associations section.
- Connects to [[lachnospiraceae]] entity (SCFA-production as protective mechanism).
- Connects to [[actinobacteria]] entity (protective against both GERD and PPD — shared pattern).
- Bidirectional causality strengthens the [[dysbiosis]] concept page.
- [[christensenellaceae]] depletion by GERD parallels its depletion in obesity and metabolic syndrome — cross-condition pattern.

## Relevance to Cureva

- Primitive 1 (Metals as Selective Pressures): SCFA-producing protective taxa have different metal cofactor requirements vs. risk taxa; warrants investigation.
- Primitive 5 (Two-Sided Ecological Engineering): Lachnospiraceae/Clostridiales restoration as rational targets for GERD microbiome therapy.
- Bidirectional cycle implies breaking the loop at either end (acid suppression OR microbiome restoration) could have therapeutic value.

## Contradictions / Tensions

- European-ancestry GWAS only; unclear if findings generalize to East Asian or other populations where GERD epidemiology differs.
- Anaerostipes as risk factor is notable — this genus is generally considered beneficial (butyrate producer); the positive GERD association requires mechanistic investigation.

## Open Questions

- What SCFA-specific mechanisms distinguish the protective taxa from the risk-increasing ones?
- Can microbiome-restoration therapies (probiotics, prebiotics) interrupt the GERD-dysbiosis cycle?
- Is the Methanobrevibacter protective effect through direct SCFA production or methane-driven motility effects?

# Key Findings

- **Causal protective effects identified** — Actinobacteria (OR=0.93) and [[lachnospiraceae]] UCG004 (OR=0.91) genetically predicted to reduce GERD risk [[wang-2024-causal-gut-microbiota-gerd-bidirectional-mr|quasi-experimental MR, n=367,441]]
- **Causal risk-increasing taxa** — Mollicutes (OR=1.09) and Tenericutes (OR=1.11) genetically predicted to increase GERD risk
- **Bidirectional causality confirmed** — GERD itself causes dysbiosis in 13 taxa, including depleting [[christensenellaceae]] (a health-associated lineage) and altering [[collinsella]] and [[eggerthella]] abundance
- **[[methanobrevibacter]]** (an archaeon) showed significant causal associations, highlighting the role of non-bacterial domains in GERD ecology

# Relevance to WikiBiome

- Provides **causal evidence** (not merely associative) for gut microbiota involvement in GERD pathogenesis, substantially strengthening the microbiome-GERD narrative
- [[lachnospiraceae]] protective role aligns with its established function as SCFA producers — informs the Lachnospiraceae entity page
- [[christensenellaceae]] depletion by GERD parallels its depletion in obesity and metabolic syndrome — strengthens cross-condition pattern detection
- Bidirectional causality establishes GERD as both a consequence and a driver of dysbiosis — a self-reinforcing loop

# Relevance to Cureva

- **Primitive 1 (Metals as Selective Pressures)**: Causal framework suggests that genetically determined microbiome composition influences GERD susceptibility — metal ecology of protective vs. risk-increasing taxa warrants investigation
- **Primitive 5 (Two-Sided Ecological Engineering)**: Lactobacillales and Lachnospiraceae as causally protective taxa represent rational targets for microbial restoration in GERD interventions
- The bidirectional vicious cycle (GERD → dysbiosis → worsening GERD) implies that breaking the cycle at either the microbial or reflux end could be therapeutic
- Large sample size (n=367,441) provides high confidence for causal claims — useful for grading intervention triangle edges
