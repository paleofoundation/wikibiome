---
title: "Scholefield et al. 2024 — Brain Metallomic Signatures Distinguish DLB from AD and PDD"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Melissa Scholefield, Stephanie J. Church, Jingshu Xu, Garth J. S. Cooper]
journal: Frontiers in Neuroscience
year: 2024
volume: "18:1412356"
doi: "10.3389/fnins.2024.1412356"
tags: [metallomics, neurodegeneration, dementia, copper, iron, selenium, brain-metals, ICP-MS, DLB, Alzheimers, Parkinsons, Lewy-bodies, diagnostic-signature, PCA, PLS-DA]
---

# Metallomic Analysis of Brain Tissues Distinguishes Between Cases of Dementia with Lewy Bodies, Alzheimer's Disease, and Parkinson's Disease Dementia

## Why This Paper Matters

This is a proof-of-concept that **metallomic signatures can differentially diagnose neurodegenerative diseases** — diseases that are notoriously difficult to distinguish clinically. Just as microbiome signatures can identify disease states via taxonomic profiling, this paper demonstrates that **multi-element metal profiling across brain regions produces disease-specific fingerprints** that separate DLB from AD from PDD using standard multivariate statistics (PCA/PLS-DA). This is the brain tissue equivalent of what [[[callejon-leblic-2023-metallomic-signatures-lung-cancer-copd]]] did for lung cancer in serum and [[[schilling-2020-urine-metallomics-pancreatic-cancer]]] did for pancreatic cancer in urine.

The implications extend beyond post-mortem diagnosis: if these metallomic patterns can be detected in vivo (via MRI metal imaging, CSF, or peripheral biomarkers), metallomic profiling could become a clinical diagnostic tool for differentiating dementias — a problem that currently lacks reliable biomarkers and leads to misdiagnosis rates of 20-30% for DLB.

## Study Design

- **Cohort**: 23 DLB cases, 20 age/sex-matched controls. All DLB cases had clinical DLB diagnosis confirmed by neuropathological examination. Controls had no dementia diagnosis, tau Braak stage ≤2, and no α-synuclein pathology.
- **Brain regions**: 10 regions spanning the full neuropathological geography of DLB — hippocampus (HP), medulla oblongata (MED), motor cortex (MCX), cingulate gyrus (CG), cerebellum (CB), middle temporal gyrus (MTG), primary visual cortex (PVC), substantia nigra (SN), pons, and putamen (PUT).
- **Metals measured**: 8 essential metals (Na, Mg, K, Ca, Mn, Fe, Cu, Zn) + Se, quantified by ICP-MS after nitric acid digestion. Ceramic scalpels used to prevent trace metal contamination.
- **Comparison datasets**: Previously published AD and PDD metallomic data from the same lab using identical methodologies — enabling direct cross-disease comparison.
- **Statistics**: Mann-Whitney U tests for case-control differences, risk ratios, effect sizes, E-values. PCA and PLS-DA for multivariate disease separation. MANCOVA controlling for age, sex, PMD, tau Braak stage.

## Key Findings

### The DLB Metallomic Profile

| Metal | Regions Altered | Direction | Most Significant Region |
|-------|----------------|-----------|----------------------|
| Cu | 5 of 10 | ↓ Decreased | CG, MTG, SN, PVC, PUT |
| Na | 4 of 10 | ↑ Increased | MED, CG, CB, MTG |
| Mn | 2 of 10 | Mixed | ↑ MED, ↓ MCX |
| Ca | 1 of 10 | ↓ Decreased | HP |
| Fe | 1 of 10 | ↑ Increased | MCX |
| Se | 1 of 10 | ↓ Decreased | PVC |
| K, Mg, Zn | 0 of 10 | No change | — |

**Copper depletion is the dominant feature** — decreased in 5 brain regions, the most widespread metallic alteration in DLB. This mirrors Cu decreases previously observed in AD (7 regions) and PDD (4-5 regions).

### Disease-Distinguishing Power

This is the paradigm-shifting result — **PCA/PLS-DA achieves clear separation between all three dementias**:

| Comparison | Minimum Regions Needed | Key Discriminating Regions | Top VIP Contributors |
|------------|----------------------|--------------------------|---------------------|
| DLB vs AD | 3 | MTG, PVC, CG | Cu changes |
| DLB vs PDD | 1 | PVC alone | Se, Na, Fe |
| DLB vs AD vs PDD | 4 | CG, HP, MTG, MCX | Cu, Se, Zn, Na |

- **DLB vs PDD can be separated using data from the primary visual cortex alone** — a remarkable finding given the clinical difficulty of distinguishing these two diseases.
- **Cu changes contributed most** to VIP scores in the PLS-DA models, confirming copper as the primary discriminating element.
- The sensitivity/specificity for distinguishing DLB from controls reached **94% and 94%** respectively.

### Cross-Disease Comparison: What's Shared vs. What's Different

**Shared across all three dementias:**
- Widespread Cu decreases (the only metallic change common to DLB, AD, and PDD)
- Suggests a **shared upstream pathogenic mechanism** involving Cu-dependent processes: mitochondrial electron transport (cytochrome c oxidase), superoxide dismutase (Cu/Zn-SOD1), ceruloplasmin, neuronal signaling, myelin formation

**Unique to DLB (not seen in AD or PDD):**
- Na increases in 4 regions — may reflect Na⁺/K⁺ ATPase dysfunction and glucose hypometabolism
- Ca decrease in HP — disrupted intracellular calcium signaling
- Only 15 total metallic alterations (vs 25 in AD, 17 in PDD) — fewer but more distinctive

**Unique to AD:**
- Changes in Zn, K, Mg observed in AD but NOT in DLB
- More widespread involvement overall

**Unique to PDD:**
- Mn alterations not shared with DLB pattern

### Mechanistic Implications

**The Fe-α-synuclein vicious cycle in DLB:**
- Fe levels increased in MCX
- Fe binds α-synuclein directly and promotes its aggregation
- α-synuclein overexpression induces Fe accumulation and redistribution
- Each drives the other → progressive protein aggregation + oxidative damage
- This connects to [[ferroptosis]] — Fe-catalyzed lipid peroxidation when GPX4 fails
- Link to [[iron]] entity and the ferroptosis-PD-gut axis

**The Cu-mitochondrial collapse:**
- Cu is cofactor for cytochrome c oxidase (Complex IV) and Cu/Zn-SOD1
- Widespread Cu depletion → impaired mitochondrial respiration + impaired superoxide defense
- Reduced glutathione (GSH) levels reported in DLB SN without concurrent changes in Fe, Cu, Mn, or Zn — suggesting antioxidant systems are overwhelmed
- Non-selenium GPX levels increased in DLB cortical astrocytes — compensatory but insufficient
- This connects to the [[copper]] paradox: peripheral Cu elevated in disease, but brain Cu depleted

**The Se-GPX connection:**
- Se decreased in DLB PVC
- Se is essential for GPX1-4 and thioredoxin reductase
- Se deficiency + Cu deficiency together = double hit on antioxidant capacity
- Compounds the Fe-driven oxidative damage
- Connects to [[selenium]] as a protective element

**Na and glucose hypometabolism:**
- Na increases in 4 DLB regions may reflect disrupted Na⁺/K⁺ ATPase (requires substantial ATP)
- Glucose hypometabolism is a known DLB feature (detected by FDG-PET)
- If Na⁺/K⁺ ATPase cannot maintain ion gradients → neuronal excitability disrupted → cognitive decline

## The Metallomic Signature Concept

This paper, together with the cancer metallomics papers in the wiki ([[[callejon-leblic-2023-metallomic-signatures-lung-cancer-copd]]], [[[schilling-2020-urine-metallomics-pancreatic-cancer]]], [[[lim-2023-plasma-metallomics-ami]]]), establishes that:

1. **Diseases have metallomic signatures** — characteristic patterns of metal elevation/depletion that are disease-specific
2. **These signatures are diagnostically useful** — multivariate analysis (PCA/PLS-DA) achieves high sensitivity/specificity for disease discrimination
3. **The signatures reflect biology** — the metal changes correspond to known mechanistic roles (Cu in mitochondria, Fe in oxidative damage, Se in antioxidant defense)
4. **Regional specificity matters** — not just which metals change, but WHERE they change in the body provides the discriminating power
5. **As few as 1-3 measurement sites** can achieve disease separation — making clinical translation feasible

This is the same principle that drives microbiome signatures (taxonomic profiling distinguishes disease states) and metabolomic signatures (metabolite panels distinguish disease states). **Metallomic signatures are the third diagnostic pillar** — and they're particularly powerful because metals are the cofactors that drive both host enzyme function AND pathogen virulence.

## Limitations

- Post-mortem study — cannot determine when metallic changes occurred in disease progression
- Small cohort (23 DLB, 20 controls)
- Predominantly White cohort — racial/ethnic diversity lacking
- Cannot distinguish cause from consequence
- In vivo validation needed (MRI metal imaging, CSF metallomics, peripheral biomarkers)

## Connections

- [[metallomics]] — this paper is a paradigm example of diagnostic metallomics applied to neurodegeneration
- [[copper]] — the dominant finding; Cu depletion is shared across all three dementias but the PATTERN differs
- [[iron]] — Fe-α-synuclein vicious cycle, ferroptosis link
- [[selenium]] — Se depletion compounds Cu loss via GPX impairment
- [[manganese]] — Mn-SOD2 cofactor; localized changes in DLB
- [[ferroptosis]] — Fe accumulation + GPX4 failure = the cell death pathway in neurodegeneration
- [[oxidative-stress]] — Cu/Mn/Fe/Se dysregulation together indicate widespread oxidative/mitochondrial failure
- [[alzheimers-disease]] — compared directly; shares Cu depletion but otherwise distinct metallomic profile
- [[parkinsons-disease]] — PDD as comparator; DLB separable from PDD by PVC metallomics alone
- [[neurodegeneration]] — overarching concept; this paper shows metallomic profiling can distinguish subtypes
- [[mis-metallation]] — Cu loss may lead to inappropriate metal substitution in Cu-dependent enzymes
- [[metal-disease-matrix]] — this paper provides the neurodegenerative disease columns with region-specific data
- [[[lim-2023-plasma-metallomics-ami]]], [[[callejon-leblic-2023-metallomic-signatures-lung-cancer-copd]]], [[[schilling-2020-urine-metallomics-pancreatic-cancer]]] — parallel metallomic signature studies in other disease domains
