---
title: "Hu 2021 — GLP-2 Therapeutic Potential for Bacterial and Fungal Dysbiosis in Type 2 Short Bowel Syndrome Rats"
type: source
created: 2026-04-19
updated: 2026-04-19
authors: [Xiuting Hu, Wei Cheng, Shengxian Fan, Yuhua Huang, Xi Chen, Zhiwei Jiang, Jian Wang]
corresponding_author: "Xi Chen; Jian Wang"
corresponding_email: "xichen@nju.edu.cn; fqy00630@njucm.edu.cn; junwangnj@yeah.net"
institution: "Nanjing University / Nanjing University of Chinese Medicine / Nanjing Drum Tower Hospital"
year: 2021
journal: "BMC Infectious Diseases"
doi: "10.1186/s12879-021-06270-w"
pmid: ""
evidence_level: animal-model
sample_size: "n=15 (5 per group: Sham, SBS, GLP2.SBS)"
tags: [short-bowel-syndrome, glp-2, dysbiosis, interkingdom, bacterial-fungal-interaction, gut-microbiota, 16S-rRNA, ITS-sequencing]
library_category: causal
platform: both
condition: "short bowel syndrome"
karen_brain_primitives: [1, 5, 6, 9]
metals_discussed: []
taxa_discussed: [proteus, clostridium, akkermansia, bacteroides, prevotella, lachnospiraceae, ruminococcaceae, aspergillus, penicillium, debaryomyces, meyerozyma, candida, xerochrysium, wickerhamomyces]
key_findings:
  - "Type 2 SBS rats exhibit severe bacterial dysbiosis with Proteobacteria/Proteus expansion and loss of Bacteroidetes, Verrucomicrobia, and Tenericutes"
  - "SBS causes concurrent fungal dysbiosis with increased Saccharomycetes and decreased Eurotiomycetes, disrupting bacteria-fungi interkingdom networks"
  - "GLP-2 treatment partially restores both bacterial and fungal communities and rebuilds the interkingdom interaction network"
keystone: false
---

## Key Findings

- **Type 2 SBS causes severe bacterial dysbiosis** with significant increases in Actinobacteria, Firmicutes, and proinflammatory Proteobacteria, while Bacteroidetes, Verrucomicrobia, and Tenericutes are dramatically decreased. Alpha-diversity (OTU counts, Chao, ACE, Shannon, Simpson) is significantly reduced (all P < 0.01 vs. Sham) ([[hu-2021-glp2-sbs-bacterial-fungal-dysbiosis]], animal-model, n=15).
- **Proteus genus (Proteobacteria) is a key pathobiont** in SBS, showing significant overgrowth (median 1.23–2.37% vs. 0% in Sham, P < 0.01), while commensal genera including [[bacteroides]], Odoribacter, [[prevotella]], [[lachnospiraceae]], Coprococcus, Dorea, [[ruminococcaceae]], Oscillospira, Ruminococcus, and [[akkermansia-muciniphila|Akkermansia]] are virtually eliminated ([[hu-2021-glp2-sbs-bacterial-fungal-dysbiosis]], animal-model).
- **Concurrent fungal dysbiosis accompanies the bacterial shift**: Saccharomycetes increase while Eurotiomycetes decrease. Genera including [[aspergillus|Aspergillus]], [[penicillium|Penicillium]] decline, while Debaryomyces and Meyerozyma expand dramatically ([[hu-2021-glp2-sbs-bacterial-fungal-dysbiosis]], animal-model).
- **Interkingdom bacteria-fungi interaction networks are severely disrupted** in SBS: the bacterial network collapses (nodes n=42, edges n=59 vs. Sham n=270, edges n=135), and the interkingdom correlation network loses most cross-kingdom connections ([[hu-2021-glp2-sbs-bacterial-fungal-dysbiosis]], animal-model).
- **GLP-2 treatment partially ameliorates both bacterial and fungal dysbiosis**, significantly inhibiting Proteus overgrowth, partially restoring Clostridium (anti-inflammatory), increasing Penicillium, and rebuilding the interkingdom interaction network (GLP2.SBS: bacterial nodes n=50, edges n=74 vs. SBS: n=42, edges n=59) ([[hu-2021-glp2-sbs-bacterial-fungal-dysbiosis]], animal-model).

## Methods

- **Study design**: Animal model — type 2 short bowel syndrome in male SD rats (8 weeks old, 250–260 g).
- **Groups**: Sham (transection + re-anastomosis, n=5), SBS (80% small bowel resection + ileocecum resection + partial colon resection + jejunocolostomy, n=5), GLP2.SBS (SBS surgery + subcutaneous GLP-2 100 ug/kg/day, n=5).
- **Sampling**: Colonic contents harvested at 22 days post-operation.
- **Sequencing**: 16S rRNA gene V4 region (bacterial) and ITS1 (fungal) via Illumina HiSeq 2500 platform.
- **Analysis**: QIIME v1.8.0, UPARSE, LEfSe, PCoA, PLS-DA, ANOSIM, Spearman correlation networks for interkingdom analysis. Alpha-diversity by Chao, ACE, Shannon, Simpson indices. Beta-diversity by weighted UniFrac and Bray-Curtis.
- **Statistics**: One-way ANOVA with Tukey's or Kruskal-Wallis with Dunn's multiple comparisons. P < 0.05 considered significant.

## Detailed Summary

### Bacterial Dysbiosis in SBS

The SBS model produced profound bacterial community disruption. At the phylum level, 9 of 11 phyla showed significantly altered relative abundance compared to Sham. The most striking changes included:

- **Proteobacteria** dramatically increased (P < 0.001), driven primarily by Proteus genus expansion.
- **Bacteroidetes** virtually eliminated — Bacteroides dropped from median 0.55% to 0.00% (P < 0.05), Odoribacter from 0.75% to 0.00% (P < 0.01), Prevotella from 6.40% to 0.00% (P < 0.01).
- **Verrucomicrobia** collapsed — [[akkermansia-muciniphila|Akkermansia]] from 33.90% to 0.00% (P < 0.05).
- **Firmicutes** SCFA-producing families devastated — [[lachnospiraceae]] from 3.35% to 0.00% (P < 0.05), Ruminococcaceae from 5.73% to 0.00% (P < 0.05), Ruminococcus from 1.70% to 0.00% (P < 0.05).
- **Clostridium** paradoxically increased in SBS (15.10% vs. 0.09% in Sham, P < 0.01), persisting in GLP2.SBS (33.55%, P < 0.001 vs. Sham).

The bacterial correlation network in SBS rats was markedly degraded — reduced from 270 nodes/135 edges in Sham to 42 nodes/59 edges in SBS, with decreased relative connectedness and average neighbors.

### Fungal Dysbiosis in SBS

ITS sequencing revealed concurrent fungal community disruption:

- **Saccharomycetes** class increased significantly in both SBS and GLP2.SBS (P = 0.037 and P = 0.022 vs. Sham).
- **Eurotiomycetes** class decreased markedly in SBS (P = 0.0067), with GLP-2 partially reversing this.
- At genus level, [[aspergillus|Aspergillus]] decreased from 16.43% to 5.36% (P < 0.01), [[penicillium|Penicillium]] from 2.46% to 0.41% (P < 0.01).
- **Debaryomyces** expanded from 0.00% to 3.90% (P < 0.01), **Meyerozyma** from 0.00% to 13.51% (P < 0.01).
- Fungal alpha-diversity increased in SBS (higher Chao and ACE, P < 0.05), opposite to the bacterial pattern — suggesting fungal overgrowth rather than loss.

### Interkingdom Network Disruption

The fungi-to-bacteria diversity ratio (ITS1/16S) was significantly higher in both SBS and GLP2.SBS rats, indicating a shift toward fungal dominance. The interkingdom correlation network was severely weakened in SBS — few connections between fungal and bacterial genera remained, compared to dense cross-kingdom correlations in Sham rats. This supports the hypothesis that bacterial dysbiosis destabilizes the competitive equilibrium that normally restrains fungal overgrowth.

### GLP-2 Therapeutic Effects

GLP-2 treatment partially ameliorated the dysbiosis:

- Significantly inhibited Proteus overgrowth (P < 0.05 vs. SBS).
- Partially restored anti-inflammatory Clostridium levels.
- Restored Penicillium abundance (P < 0.05 vs. SBS) and inhibited Debaryomyces and Meyerozyma expansion (P < 0.05 and P < 0.001 vs. SBS).
- Partially rebuilt the bacterial correlation network (GLP2.SBS: 50 nodes, 74 edges, relative connectedness 1.5 vs. SBS: 42 nodes, 59 edges, connectedness 1.4).
- Partially rebuilt the interkingdom interaction network with increased edges, average neighbors, and relative connectedness.

However, GLP-2 did not restore bacterial alpha-diversity — OTU counts and diversity indices remained similar to SBS, and Akkermansia remained absent.

## Relevance to WikiBiome

This study provides important data for several WikiBiome topics:

- **[[akkermansia-muciniphila]]** — documents complete elimination in SBS, with no recovery under GLP-2 treatment, relevant to understanding conditions where Akkermansia is depleted.
- **Interkingdom relationships** — provides one of the clearest demonstrations that bacterial dysbiosis leads to fungal dysbiosis through disruption of cross-kingdom interaction networks. Directly relevant to [[interkingdom-relationships]] concept page.
- **[[proteus]]** — identifies Proteus as a key proinflammatory pathobiont expanding in the dysbiotic SBS gut, responsive to GLP-2 suppression.
- **[[aspergillus]]** and fungal ecology — documents Aspergillus and Penicillium depletion as part of the fungal dysbiosis pattern, while opportunistic Saccharomycetes expand.
- **[[lachnospiraceae]]** and **Ruminococcaceae** — documents near-complete loss of SCFA-producing families in SBS, relevant to understanding their ecological fragility.

## Relevance to Cureva

- **Intervention hypothesis**: GLP-2 as an intestinotrophic hormone that partially corrects both bacterial and fungal dysbiosis — relevant to short bowel syndrome signature development. The mechanism (mucosal proliferation, enhanced absorption) creates a more hospitable environment for commensal recolonization.
- **Ecological engineering (Primitive 5)**: GLP-2 demonstrates two-sided ecological engineering — suppressing pathobiont Proteus while partially restoring commensal networks. However, incomplete restoration (no Akkermansia recovery, persistent Clostridium dominance) suggests GLP-2 alone is insufficient.
- **Interkingdom consideration (Primitive 6)**: Any intervention for SBS-related dysbiosis must account for the fungal component. Bacterial-focused therapies alone may leave the disrupted interkingdom network unaddressed, allowing fungal overgrowth to perpetuate dysbiosis.
- **STOP signal potential**: Probiotic interventions targeting Akkermansia in SBS may be premature — the ecological niche (Verrucomicrobia habitat) appears destroyed by the surgery itself, and GLP-2 mucosal regeneration does not restore it.

## Contradictions / Tensions

- **Clostridium paradox**: Clostridium (often considered beneficial for anti-inflammatory butyrate production) is massively expanded in SBS and further increased by GLP-2. The authors frame this positively, but this expansion in a severely dysbiotic environment could reflect opportunistic overgrowth rather than ecological restoration. This conflicts with the general assumption that Clostridium expansion is always beneficial.
- **GLP-2 limitations**: Despite being an intestinotrophic hormone that promotes mucosal recovery, GLP-2 fails to restore bacterial alpha-diversity or recover key commensals like Akkermansia. This suggests mucosal healing alone is insufficient for microbiome restoration — a tension with the assumption that host tissue recovery drives microbial recovery.

## Open Questions

1. **Does GLP-2 affect metal homeostasis in the SBS gut?** The study does not measure metal levels. Given that massive small bowel resection disrupts mineral absorption (iron, zinc, copper), and these metals shape microbial competition, the metallomic dimension of SBS dysbiosis remains entirely unexplored.
2. **What drives Clostridium expansion in SBS?** Is this genuinely anti-inflammatory Clostridium species, or does 16S-level genus assignment mask pathogenic species (e.g., C. difficile vs. C. butyricum)?
3. **Would longer GLP-2 treatment fully restore the interkingdom network?** The 22-day endpoint may capture a transitional state.
4. **What is the fungal-bacterial causal direction?** Does bacterial dysbiosis cause fungal overgrowth, or does the surgical environment independently select for both?
5. **How does this translate to human SBS patients?** Small sample (n=5 per group) and animal model limit direct clinical applicability.
