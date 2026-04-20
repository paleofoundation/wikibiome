---
title: "Luan 2025 — Fatty Acid Synthase Inhibition Improves Hypertension-Induced Erectile Dysfunction by Suppressing Oxidative Stress and NLRP3 Inflammasome-Dependent Pyroptosis"
type: source
created: 2026-04-19
updated: 2026-04-19
authors: [Jiaochen Luan, Mengchi Yu, Qi Gu, Xuan Zhou, Yunqiang Shao, Tong Chen, Jiayi Zhang, Zheng Zhu, Ninghong Song, Jie Yang]
corresponding_author: "Jie Yang"
corresponding_email: "yj3971912@163.com"
institution: "Department of Urology, Jiangsu Provincial People's Hospital, The First Affiliated Hospital of Nanjing Medical University"
year: 2025
journal: "Frontiers in Immunology"
doi: "10.3389/fimmu.2024.1532021"
pmid: ""
evidence_level: animal-model
sample_size: "n=20 WKY + n=20 SHR (in vivo); RAOECs (in vitro)"
tags: [erectile-dysfunction, hypertension, NLRP3, pyroptosis, oxidative-stress, Nrf2, HO-1, fatty-acid-synthase, lipid-metabolism, inflammasome]
library_category: mechanistic-insights
platform: both
condition: "erectile dysfunction"
karen_brain_primitives: [1, 2, 4, 5]
metals_discussed: [iron]
taxa_discussed: []
key_findings:
  - "Fasn identified as central hub gene in lipid metabolism dysregulation driving hypertension-induced ED via transcriptomic and metabolomic analysis of penile corpus cavernosum"
  - "Fasn knockdown (siFasn) and pharmacological inhibition (C75) activate the Nrf2/HO-1 antioxidant pathway, reducing ROS and suppressing NLRP3 inflammasome-dependent pyroptosis in endothelial cells"
  - "C75 treatment in SHR rats restored erectile function (increased ICP/MAP ratio), improved endothelial markers (VWF, CD31, eNOS), and reduced apoptosis in penile tissue"
keystone: false
---

## Key Findings

- **Fatty acid synthase (Fasn) is upregulated in the penile corpus cavernosum of spontaneously hypertensive rats (SHR)** and was identified as the most significant hub gene in lipid metabolism pathways via protein-protein interaction network analysis ([[luan-2025-fatty-acid-synthase-hypertension-erectile-dysfunction-pyroptosis]], animal-model, n=20 per group).
- **Fasn inhibition activates the Nrf2/HO-1 antioxidant pathway**, reducing reactive oxygen species (ROS) accumulation and suppressing NLRP3 inflammasome activation, Caspase-1 cleavage, GSDMD-N release, and downstream IL-1beta and IL-18 production in AngII-induced rat aortic endothelial cells (RAOECs).
- **The Fasn inhibitor C75 (2 mg/kg, intraperitoneal, 5 weeks) restored erectile function in SHR**, significantly increasing maximum ICP/MAP ratio compared to vehicle-treated SHR (P < 0.01).
- **C75 treatment improved endothelial markers** (VWF, CD31, eNOS) and NO/cGMP levels in penile tissue, while reducing NLRP3, Caspase-1, IL-1beta, and IL-18 expression.
- **NAC (ROS inhibitor) rescue experiments confirmed the ROS-dependent mechanism**: ROS inhibition reversed the NLRP3 inflammasome suppression achieved by Fasn knockdown, demonstrating that Fasn inhibition suppresses pyroptosis specifically through reducing oxidative stress.

## Methods

**Study design:** Combined in vivo animal model and in vitro cell culture study.

**In vivo:** 10-week-old WKY rats (n=20, normotensive controls) and age-matched SHR (n=20, spontaneously hypertensive). SHR were randomly divided into SHR+Vehicle and SHR+C75 groups. C75 (Fasn inhibitor, Sigma-Aldrich) was administered intraperitoneally at 2 mg/kg once weekly for 5 weeks. Erectile function assessed by maximum ICP/MAP ratio under cavernosal nerve electrical stimulation (5V, 15 Hz, 0.2 ms pulse width, 1 min). Penile corpus cavernosum tissue harvested for analysis.

**In vitro:** Rat aortic endothelial cells (RAOECs) treated with 10^-6 M AngII to model hypertensive environment. Fasn knockdown achieved via siRNA (three siRNAs tested; siRNA-1 selected for highest efficiency). C75 used as pharmacological Fasn inhibitor. NAC (N-acetylcysteine) used as ROS scavenger for rescue experiments.

**Multi-omics:** Non-targeted metabolomics (LC-ESI-MS/MS) and transcriptome analysis (RNA-seq, Illumina) performed on corpus cavernosum tissue from SHR vs. WKY. 587 DEGs identified (426 up, 161 down). 167 DAMs in positive ionization mode, 187 DAMs in negative ionization mode.

**Molecular assessments:** Western blotting, qRT-PCR, immunofluorescence, immunohistochemistry, Masson trichrome staining, TUNEL assay, flow cytometry, EdU proliferation assay, clonogenic assay, ELISA (IL-18, IL-1beta), NO/cGMP measurement, MDA/SOD/GSH levels.

**Ethics:** Approved by Institutional Animal Care and Use Committee of Nanjing Medical University (IACUC-2207013).

## Detailed Summary

### Hypertension-Induced ED Phenotype in SHR

SHR exhibited significantly reduced maximum ICP/MAP ratio compared to normotensive WKY rats (P < 0.001), confirming erectile dysfunction. Histological analysis revealed increased fibrosis and decreased smooth muscle-to-collagen ratio in the penile corpus cavernosum. Endothelial damage was evidenced by reduced expression of VWF, CD31, and eNOS, with decreased NO and cGMP levels. Oxidative stress was elevated: higher MDA levels with reduced SOD and GSH antioxidant capacity.

### NLRP3 Inflammasome and Pyroptosis in SHR Penis

The NLRP3 inflammasome pathway was significantly upregulated in SHR penile tissue. Immunohistochemistry showed increased NLRP3, Caspase-1, IL-1beta, and IL-18 expression. Apoptosis was also increased, with elevated Caspase 3 and Caspase 9 expression and increased TUNEL-positive cells.

### Multi-Omics Identification of Lipid Metabolism Dysregulation

Non-targeted metabolomics separated SHR from WKY groups via OPLS-DA modeling. KEGG enrichment analysis highlighted sphingolipid metabolism, fatty acid biosynthesis, and lipid metabolism pathways. Transcriptome analysis identified 587 DEGs enriched in lipid metabolic processes, lipid biosynthetic processes, PPAR signaling pathway, fat digestion and absorption, and fatty acid degradation. PPI network analysis via STRING2 and cytoHubba identified 5 hub genes: **Fasn** (highest degree), Acaca, Scd1, Acsl1, and Dgat2. All were upregulated in SHR. PPAR-gamma was also significantly upregulated.

### Fasn Knockdown Rescues Endothelial Function In Vitro

In AngII-treated RAOECs, Fasn protein expression was markedly increased. siFasn treatment:
- Restored cell proliferation (EdU assay) and clonogenic capacity
- Reduced apoptosis (flow cytometry)
- Restored endothelial markers VWF and eNOS expression
- Reduced ROS accumulation (DHE staining)
- Upregulated Nrf2 and HO-1 expression (immunofluorescence and WB)
- Reduced NLRP3 expression, IL-18, and IL-1beta levels
- Reduced NLRP3, GSDMD-N, and pro-Caspase-1 protein levels (WB)

### NAC Rescue Confirms ROS-Dependent Mechanism

When NAC was added to AngII+siFasn-treated cells, the suppressive effect of siFasn on NLRP3 inflammasome components was reversed. This confirmed that Fasn inhibition suppresses pyroptosis via reducing ROS production through Nrf2/HO-1 activation, not through a ROS-independent mechanism.

### C75 In Vitro Validation

Pharmacological Fasn inhibition with C75 recapitulated siFasn effects: reduced Fasn expression, enhanced proliferation, reduced apoptosis, increased VWF/eNOS, reduced ROS, upregulated Nrf2/HO-1, and suppressed NLRP3/Caspase-1/GSDMD-N/IL-1beta/IL-18. NAC rescue experiments with C75 confirmed the same ROS-dependent mechanism.

### C75 In Vivo Therapeutic Efficacy

SHR+C75 rats showed:
- Significantly higher ICP_max/MAP ratio vs. SHR+Vehicle (P < 0.01)
- Increased VWF, CD31, eNOS expression
- Elevated NO and cGMP levels
- No significant changes in smooth muscle content (alpha-SMA) or collagen I (suggesting vascular endothelial repair rather than fibrotic remodeling)
- Reduced MDA, increased SOD and GSH
- Upregulated Nrf2, HO-1, and NQO1 (antioxidant proteins)
- Reduced NLRP3, Caspase-1, IL-1beta, IL-18
- Reduced Caspase 3, Caspase 9, and TUNEL-positive cells (decreased apoptosis)
- Reduced expression of lipid metabolism genes: Fasn, Scd1, Dgat2, Acaca, PPAR-gamma (except Acsl1)

### Proposed Mechanism

Hypertension upregulates Fasn and lipid metabolism in penile tissue. Elevated Fasn suppresses the Nrf2/HO-1 antioxidant pathway, leading to ROS accumulation. Excess ROS activates the NLRP3 inflammasome, triggering Caspase-1-dependent pyroptosis (via GSDMD-N pore formation) and release of IL-1beta and IL-18. This inflammatory cell death damages vascular endothelial cells in the corpus cavernosum, disrupting eNOS/NO/cGMP signaling and causing ED.

## Relevance to WikiBiome

This study provides mechanistic insight into the intersection of **lipid metabolism**, **oxidative stress**, and **inflammasome-mediated pyroptosis** in erectile dysfunction. Key concepts relevant to WikiBiome entity and concept pages:

- **[[oxidative-stress]]** — ROS as a central mediator linking metabolic dysregulation to endothelial damage and immune activation in the penile vasculature
- **[[nlrp3-inflammasome]]** — Detailed demonstration of the NLRP3/Caspase-1/GSDMD-N/IL-1beta/IL-18 pyroptotic cascade in ED pathogenesis
- **[[nrf2]]** — Nrf2/HO-1/NQO1 antioxidant pathway as a protective mechanism against endothelial pyroptosis
- **[[erectile-dysfunction]]** — Adds lipid metabolism dysregulation and pyroptosis as mechanistic layers beyond the conventional NO/cGMP model
- **[[hypertension]]** — Mechanistic link between hypertension and end-organ (penile) endothelial damage via AngII-driven Fasn upregulation

The iron connection is indirect but present: heme oxygenase-1 (HO-1) is the primary enzyme for heme degradation, releasing free [[iron]], carbon monoxide, and biliverdin. HO-1 upregulation by Fasn inhibition connects this pathway to iron metabolism and the broader metallomics framework. Additionally, the oxidative stress axis intersects with iron-dependent Fenton chemistry in ROS generation.

## Relevance to Cureva

- **Intervention hypothesis:** Fasn inhibition (C75 or analogues) as a potential therapeutic strategy for hypertension-induced ED. Triangle evidence: I_to_f (C75 suppresses Fasn/ROS/NLRP3 pyroptosis, strong, animal-model), I_to_D (C75 restores ICP/MAP ratio in SHR, animal-model), f_to_D (NLRP3 pyroptosis damages endothelium causing ED, demonstrated).
- **Nrf2/HO-1 activation** as a therapeutic target — connects to existing interventions that activate Nrf2 (e.g., sulforaphane, curcumin, NAC).
- **Potential STOP signal:** Iron supplementation in ED patients with hypertension could theoretically exacerbate oxidative stress and NLRP3 activation if Fenton chemistry is contributory — requires further investigation.
- **Karen's Brain Primitives active:**
  - **Primitive 1 (Metals as Selective Pressures):** HO-1 releases free iron during heme catabolism; iron-dependent ROS generation via Fenton chemistry may amplify the oxidative stress loop.
  - **Primitive 2 (Nutritional Immunity as Interpretive Constraint):** The antioxidant defense (Nrf2/HO-1) represents a host protective response to oxidative damage — its suppression by Fasn is the pathogenic mechanism.
  - **Primitive 4 (Microbial Metal Dependencies as Achilles' Heels):** While this study is not microbiome-focused, the metabolic "Achilles' heel" concept applies: Fasn is the critical metabolic dependency enabling the pathogenic cascade.
  - **Primitive 5 (Two-Sided Ecological Engineering):** The therapeutic strategy is two-sided: suppress the pathogenic pathway (Fasn/ROS/NLRP3) AND restore the protective pathway (Nrf2/HO-1/antioxidant defense).

## Contradictions / Tensions

- **C75 mechanism complexity:** The authors note that C75 can inhibit mitochondrial fatty acid synthesis, potentially impairing mitochondrial function (ref 72 in paper). Some studies link C75 to enhanced beta-oxidation and weight loss effects (ref 73, 74). The net metabolic effect of C75 beyond Fasn inhibition warrants caution when interpreting the specificity of the results.
- **No microbiome component:** This study does not examine the gut microbiome or local penile microbiome, which limits its direct integration into WikiBiome's microbial ecology framework. The inflammasome/pyroptosis pathway described here operates independently of microbial triggers in this model, though LPS and other microbial products are known NLRP3 activators in other contexts.
- **Classical pyroptosis pathway only:** The study focuses on the canonical NLRP3/Caspase-1 pyroptotic pathway. Non-classical pathways and their potential contribution to hypertension-induced ED remain unexplored.

## Open Questions

1. **Does the gut microbiome modulate Fasn expression or NLRP3 activation in the penile vasculature?** Gut-derived endotoxemia (LPS) in hypertensive patients could independently activate NLRP3 — the interaction between metabolic (Fasn) and microbial (LPS) NLRP3 triggers in ED is unknown.
2. **Is iron released by HO-1 upregulation contributory to local oxidative stress via Fenton chemistry?** The study shows HO-1 is protective overall, but HO-1-derived free iron could paradoxically generate hydroxyl radicals if ferritin buffering is insufficient.
3. **Do other Fasn inhibitors (TVB-2640, orlistat) show similar ED-protective effects?** C75 is not clinically approved; translation requires testing with clinical-stage Fasn inhibitors.
4. **What is the role of the penile microbiome (if any) in local NLRP3 inflammasome activation in hypertensive ED?**
5. **Does the neural component of hypertension-induced ED also involve Fasn/NLRP3 pyroptosis?** The study focused on vascular endothelium but acknowledged neural damage as a limitation.
6. **Human validation:** All data are from rat models (SHR) and rat cells (RAOECs). Human corpus cavernosum tissue validation is essential before clinical translation.
