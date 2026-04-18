---
title: "Wang 2023 — Causal Role of Immune Cells in Schizophrenia: Mendelian Randomization Study"
type: source
created: 2026-04-14
updated: 2026-04-14
authors: [Chengdong Wang, Dongdong Zhu, Dongjun Zhang, Xiaowei Zuo, Lei Yao, Teng Liu, Xiaodan Ge, Chenlu He, Yuan Zhou, Ziyuan Shen]
corresponding_author: "Ziyuan Shen"
corresponding_email: "shenzyy@126.com"
institution: "Xuzhou Medical University / Xinxiang Medical University, China"
year: 2023
journal: "BMC Psychiatry"
doi: "10.1186/s12888-023-05081-4"
evidence_level: case-control
sample_size: "n=186,882 (36,989 SCZ cases, 113,075 controls)"
tags: [schizophrenia, mendelian-randomization, immune-cells, treg, naive-cd4-t-cell, hla-dr, cd33dim-hla-dr-cd11b, dendritic-cells, monocytes, causal-inference, immunophenotype, gwas]
library_category: causal
platform: both
condition: "schizophrenia"
karen_brain_primitives: [2, 5]
metals_discussed: []
taxa_discussed: [faecalibacterium-prausnitzii]
key_findings:
  - "Four immunophenotypes were causally associated with schizophrenia risk (FDR<0.05): naive CD4+ %T cell (OR=0.986), HLA-DR on CD14-CD16- (OR=0.738), CD33dim HLA-DR+ CD11b- (OR=0.631), activated + resting Treg %CD4 Treg (OR=0.937)"
  - "Two-sample MR of 731 immune cell signatures (MFI, RC, AC, MP) vs schizophrenia GWAS (PGC, n=150,064); seven immunophenotypes nominally significant pre-FDR"
  - "Decreased regulatory T cells (Tregs) and decreased HLA-DR+ monocyte/dendritic cell populations causally elevate schizophrenia risk — supporting an immune dysregulation etiology"
---

# Key Findings

- **Four immunophenotypes showed causal effects on schizophrenia risk** after FDR correction (FDR<0.05): naive CD4+ %T cell (OR=0.986, IVW P=3.97e-6), HLA-DR on CD14-CD16- monocytes (OR=0.738, P=2.00e-5), CD33dim HLA-DR+ CD11b- (OR=0.631, P=3.40e-7), and activated + resting Treg %CD4 Treg (OR=0.937, P=1.96e-4). All four showed protective effects — higher levels reduce SCZ risk, implying **immune suppression/dysregulation is causal for schizophrenia**.
- **Reverse MR of SCZ on immune cells** showed no statistically significant effects after FDR correction, supporting a **one-directional causal flow from immune cells to SCZ**, not from SCZ to immunity.
- **Treg reduction as a candidate mechanism**: The OR of 0.937 for activated + resting Treg %CD4 Treg means each unit decrease in Treg proportion elevates SCZ risk. This is mechanistically consistent with the proinflammatory cytokine elevations (IL-1alpha, IL-1beta, TNF-alpha, IL-6) documented in SCZ cohorts.

# Methods

Two-sample bidirectional Mendelian randomization. Exposure: 731 immune cell signatures (7 groups: MFI, RC, AC, MP) from Sardinian GWAS (n=3,757) imputed to 22 million SNPs. Outcome: Schizophrenia GWAS from Psychiatric Genomics Consortium (n=150,064 European, 36,989 cases). Methods: IVW (primary), weighted median, weighted mode, MR-Egger, MR-PRESSO. Sensitivity: Cochran's Q, MR-Egger intercept (pleiotropy), leave-one-out. IV selection threshold P<1e-5, r2<0.001, 10,000kb clumping.

# Relevance to WikiBiome

- Informs **[[schizophrenia]]** entity page: genetic-instrument evidence that immune dysregulation is **causal** for schizophrenia, not merely correlated.
- Informs **[[inflammation|regulatory-t-cells]]** / **[[inflammation|treg]]** concept page: Tregs as neuropsychiatric protective factor.
- Informs **[[immune-system-microbiome-brain-axis]]** concept page: supports the immune branch of the gut-brain-immune triangle.

# Relevance to Cureva

- **Schizophrenia signature page** Layer 3 (nutritional immunity / immune modulation): reduced Tregs and reduced HLA-DR+ monocytes as causal features, not downstream consequences.
- **Intervention hypothesis**: Treg-expanding interventions (short-chain fatty acids, butyrate producers like Faecalibacterium prausnitzii, vitamin D, low-dose IL-2) could be schizophrenia-modifying if the causal MR holds in clinical trials.
- Supports the **gut-immune-brain axis** framing of schizophrenia and justifies combined microbiome + immune interventions.
- STOP candidate: broad immunosuppression (which further lowers Tregs) may worsen schizophrenia risk.
