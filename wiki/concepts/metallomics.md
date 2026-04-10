---
title: Metallomics
type: concept
created: 2026-04-09
updated: 2026-04-09
sources: [zhang-2022-metallomics-cancer-review, callejon-leblic-2023-metallomic-signatures-lung-cancer-copd, scholefield-2024-brain-metallomics-dementia, schilling-2020-urine-metallomics-pancreatic-cancer, lim-2023-plasma-metallomics-ami, patil-2021-infection-metallomics-critical-care, pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis, brylinski-2025-trace-elements-thyroid-diseases, saleh-2020-serum-trace-elements-prostate-cancer, blazewicz-2023-metal-profiles-asd]
tags: [metallomics, biomarkers, ICP-MS, cancer-diagnostics, metal-profiling, copper-zinc-ratio, selenoproteins, infection-metallomics, brain-metallomics, precision-medicine]
---

# Metallomics

## Definition

Metallomics is the systematic study of the entirety of metal and metalloid species within a biological system -- their concentrations, speciation (chemical forms), spatial distributions, and functional roles. As a discipline, metallomics integrates analytical chemistry (primarily ICP-MS), bioinformatics, genomics (metalloprotein genes), and clinical medicine to generate comprehensive metal profiles that can serve as disease biomarkers, mechanistic insights, and therapeutic targets.

The term parallels genomics, proteomics, and metabolomics, and reflects the recognition that metals are not passive passengers in biology but active participants whose homeostatic status profoundly influences health and disease.

## Analytical Methods

### ICP-MS (Inductively Coupled Plasma Mass Spectrometry)
The workhorse of metallomics. Enables simultaneous quantification of 20-30+ elements in a single sample with detection limits in the parts-per-trillion range. Variants include:
- **ICP-MS/MS (triple quadrupole)**: Enhanced interference removal for complex biological matrices
- **MC-ICP-MS (multi-collector)**: Enables measurement of natural stable isotope ratios (e.g., Zn isotope fractionation)
- **HPLC-ICP-MS**: Coupling liquid chromatography with ICP-MS for metal speciation (e.g., inorganic vs. organic arsenic)
- **LA-ICP-MS (laser ablation)**: Spatial mapping of metals in tissue sections

### Complementary Methods
- **MALDI-MS and FTICR-MS**: For identification of metal-containing biomolecules (metallophores, metallopeptides)
- **LC-ESI-MS**: For detecting metallophores with isotope data filtering to selectively identify metal-containing species
- **Synchrotron X-ray fluorescence**: Subcellular metal mapping

## Cancer Metallomics

### Universal Patterns Across Cancer Types

A comprehensive review of metallomic studies across lung, prostate, colorectal, gastric, esophageal, breast, thyroid, pancreatic, laryngeal, gallbladder, renal cell, and hepatocellular cancers reveals recurring patterns:

- **Copper elevation** is the most consistent finding across nearly all cancer types in blood/serum/plasma, suggesting Cu accumulation as a general cancer biomarker
- **Zinc dysregulation** shows mixed patterns but the **Cu/Zn ratio** is consistently increased in cancer patients
- **Selenium tends to decrease** across cancers, reflecting impaired selenoprotein-mediated antioxidant defense
- **Cadmium accumulation** is elevated in multiple cancer types, consistent with its IARC Group 1 carcinogen status

### Cancer-Specific Metallomic Fingerprints

| Cancer Type | Elevated Elements | Decreased Elements | Notable Ratios |
|------------|-------------------|-------------------|----------------|
| Lung | Cr, Cd, Cu, Zn, Ni, Se (urine); Al, Pb | Mn, Fe, Zn (biofluids) | Ni 1.60-fold in LC |
| Prostate | Fe, Cu, Ni, Cd | Zn, Se | Cu/Zn elevated |
| Colorectal | Cu, Fe, Ni | Se, Zn, Mn | Cu/Zn as new marker |
| Breast | Cu, Cd | Se, Zn | Cu/Zn increased |
| Thyroid | As, Cd, Cr, Cu, Pb, Se | Zn, Fe, Ni | Metal pair correlations |
| Pancreatic | Cu, Cd | Zn, Se | Ca+Mg+Zn+Cu AUC=0.99 |

### Lung Cancer and COPD Metallomic Signatures

A study of 191 serum samples from the CHAIN cohort demonstrated that lung cancer (LC) and COPD have significantly different metallomic signatures, and that COPD patients who later developed LC (COPD-LC) show the most altered profiles. Nickel was significantly elevated 1.60-fold in LC and 1.37-fold in COPD-LC. PCA/PLS-DA analysis achieved clear separation between disease groups. Disrupted metal-metal correlation patterns (e.g., loss of Zn-Se and Cu-Fe correlations present in healthy controls) illustrate how metallomics reveals systemic dyshomeostasis beyond individual element changes.

### Pancreatic Cancer Urine Metallomics

Urine metallomics achieved 99.5% sensitivity for discriminating pancreatic ductal adenocarcinoma (PDAC) from healthy controls using a combined analysis of Ca, Mg, Cu, and Zn concentrations. A breakthrough finding was that natural stable Zn isotope composition differs significantly in PDAC, with preferential excretion of isotopically light zinc reflecting disrupted metalloprotein biology. The loss of the Zn concentration/Cu ratio correlation that exists in healthy individuals (r2=0.66 vs. 0.0002 in PDAC) indicates fundamental disruption of zinc regulation.

### Metalloprotein Genetics

Metallomic studies are increasingly integrated with genetics:
- **MMP gene variants** (Zn-dependent matrix metalloproteinases): linked to carcinogenesis across multiple cancers
- **Selenoprotein gene variants** (GPX1, GPX4, TXNRD1/2): associated with cancer risk
- **Cu-transporting ATPase variants** (ATP7B): linked to chemotherapy response
- **Cu/Zn-SOD and ceruloplasmin variants**: associated with cancer susceptibility

## Brain Metallomics and Dementia

Post-mortem brain metallomic profiling using ICP-MS across 10 brain regions can distinguish between dementia with Lewy bodies (DLB), Alzheimer's disease (AD), and Parkinson's disease dementia (PDD):

- **Widespread copper decreases** are common across all three dementias, suggesting shared pathogenic mechanisms
- Despite shared Cu deficiencies, other metal alterations (Na, Mn, Ca, Fe, Se) differ between disease types, creating distinct metallomic signatures
- PCA and PLS-DA analysis of as few as three brain regions achieves clear disease separation
- Cu changes contribute most to variable importance in projection (VIP) scores
- Oxidative stress implications: Cu, Mn, Fe, and Se are all cofactors for antioxidant enzymes (SOD1, SOD2, GPX, TrxR), and their coordinated dysregulation indicates widespread loss of antioxidant defense

## Cardiovascular Metallomics

Plasma metallomic profiling identifies biomarkers for acute myocardial infarction (AMI):

- **Copper significantly elevated** and **selenium decreased** in AMI patients
- **Element-pair ratios** (Cu/Se, Fe/Cu) are more sensitive than individual element concentrations
- Random forest models incorporating metallomic features (Cu/Se, Fe/Cu) alongside traditional risk factors achieved AUC of 0.942
- Longitudinal tracking shows Cu and Se remain significantly altered at 6 months post-infarction while Fe normalizes
- Essential elements exhibit **ambivalent (U- or J-shaped)** relationships with AMI risk, meaning both deficiency and excess are harmful

## Infection Metallomics

A distinct branch of metallomics focuses on detecting microbial metallophores -- metal-chelating small molecules produced by pathogens as virulence factors:

### Metallophore Types
- **Bacterial siderophores**: Enterobactin, yersiniabactin (binds Fe and Cu), aerobactin, pyoverdine
- **Mycobacterial siderophores**: Mycobactins and carboxymycobactins from M. tuberculosis
- **Fungal siderophores**: TAFC (triacetylfusarinine C), ferricrocin from [[aspergillus|*Aspergillus fumigatus*]]

### Clinical Applications
- TAFC detected in human serum and urine of aspergillosis patients, enabling real-time fungal infection tracking
- Yersiniabactin copper complex detected in patient urine during UTI
- Isotope data filtering can discriminate invasive disease from benign colonization -- critical in ICU settings
- Post-COVID applications include monitoring secondary bacterial/fungal superinfections (aspergillosis incidence in critically ill COVID patients had 19.4% mortality)

## Microbial Metallomics

The emerging field of microbial metallomics extends the metallomic approach to the gut microbiome and host-microbe metal interactions. The Pendergrass framework applies microbial metallomics to Parkinson's disease, examining how dietary/environmental metals reshape gut microbial communities through competitive metal stress, connecting peripheral metal-microbiome disruption to central neurodegeneration.

## Metallomic Signatures as a Diagnostic Pillar

A key insight emerging from the convergence of these studies: **diseases have metallomic signatures** — characteristic, reproducible patterns of metal elevation and depletion that are disease-specific and diagnostically useful. This parallels the established concept of microbiome signatures (taxonomic profiles that distinguish disease states) and metabolomic signatures (metabolite panels that identify pathology).

The evidence across this wiki demonstrates three tiers of metallomic diagnostic power:

### Tier 1: Disease Detection (Is disease present?)
- **Pancreatic cancer**: Ca+Mg+Zn+Cu urine panel achieves AUC 0.99 [[[schilling-2020-urine-metallomics-pancreatic-cancer]]]
- **AMI**: Cu/Se ratio with random forest achieves AUC 0.942 [[[lim-2023-plasma-metallomics-ami]]]
- **Lung cancer**: Al and Mn achieve near-perfect AUC [[[callejon-leblic-2023-metallomic-signatures-lung-cancer-copd]]]

### Tier 2: Disease Differentiation (Which disease is it?)
- **DLB vs AD vs PDD**: PCA/PLS-DA on brain metals from 3 regions separates all three dementias with 94% sensitivity/specificity [[[scholefield-2024-brain-metallomics-dementia]]]
- **Lung cancer vs COPD**: Distinct serum metallomic profiles despite overlapping symptoms [[[callejon-leblic-2023-metallomic-signatures-lung-cancer-copd]]]
- **ASD severity grading**: Hair metal patterns correlate with autism severity [[[zhou-2025-hair-heavy-metals-asd-severity]]]

### Tier 3: Mechanistic Insight (Why does this pattern exist?)
- Metal-metal correlation disruption reveals systemic dyshomeostasis (loss of Zn-Se correlation in cancer, Cu-Fe decoupling in DLB)
- Zn isotope fractionation in pancreatic cancer reflects metalloprotein biology disruption — a dimension beyond concentration
- Fe accumulation in substantia nigra + Se depletion in PVC = coordinated antioxidant system failure in DLB

### The Convergence with Microbial Metallomics
The diagnostic power of metallomic signatures extends to the host-microbiome interface. Infection metallomics (detecting pathogen metallophores in clinical samples) and gut metallomic profiling (fecal metal patterns) represent the microbiome-facing side of the same coin. In the future, an integrated metallomic-taxonomic-metabolomic signature may provide the most complete disease fingerprint — capturing what metals are dysregulated, which organisms are exploiting that dysregulation, and what metabolic consequences follow.

## Emerging Directions

### Metal Isotope Ratios as Biomarkers
Zinc isotope fractionation in urine distinguishes pancreatic cancer from healthy controls, representing a novel dimension beyond concentration-based analysis. This approach could extend to Cu, Fe, and other isotope systems.

### Multi-Metal Diagnostic Panels
Single-element measurements are giving way to integrated multi-element panels and element ratios that capture the systemic nature of metal dyshomeostasis. Combined biomarker approaches consistently outperform individual elements (e.g., four-element urine panel achieving AUC=0.99 for pancreatic cancer).

### Integration with Other -Omics
Metallomics combined with genomics (metalloprotein gene variants), metabolomics (metal-dependent metabolic pathways), and microbiomics (gut metal ecology) promises a systems-level understanding of metal biology in health and disease.

## Connections to Other Concepts

- [[ferroptosis]] -- metallomic profiling can detect the iron dysregulation and selenium deficiency that predispose to ferroptotic cell death
- [[mis-metallation]] -- metallomics reveals the essential-metal-depletion/toxic-metal-elevation patterns that indicate active mis-metallation
- [[gut-metal-microbiome]] -- microbial metallomics and fecal metallomic profiling extend the approach to the gut ecosystem
- [[metalloestrogens]] -- metallomic signatures in breast tissue and peritoneal fluid can detect cadmium and nickel levels relevant to estrogenic disruption
- [[environmental-metal-exposure]] -- metallomics provides the analytical framework for exposure assessment and biomonitoring
