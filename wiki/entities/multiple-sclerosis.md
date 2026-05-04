---

title: Multiple Sclerosis
type: entity
subtype: disease
created: 2026-04-09
updated: 2026-04-09
sources:
 - kouchaki-2017-clinical-metabolic-probiotic-ms
 - tamtaji-2017-probiotic-gene-expression-ms
 - tankou-2018-probiotic-microbiome-ms
 - dargahi-2020-streptococcus-thermophilus-ms
 - libbey-2018-diet-microbiota-eae
source_count: 5
tags: [autoimmune, neurological, probiotics, gut-brain-axis, microbiome, cytokines, Th1-Th2-balance]
platform: wikibiome
last_substantive_update: 2026-04-13
associated_conditions: [depression, parkinsons-disease, inflammatory-bowel-disease, schizophrenia]
signature_page: "[[multiple-sclerosis-signature]]"
shared_signature_metals: {depression: [cadmium, lead], parkinsons-disease: [iron, lead, nickel], inflammatory-bowel-disease: [iron, nickel], schizophrenia: [lead, cadmium]}
shared_signature_taxa: {depression: [faecalibacterium-prausnitzii, lachnospiraceae, candida-albicans], parkinsons-disease: [faecalibacterium-prausnitzii, lachnospiraceae, roseburia, akkermansia-muciniphila], inflammatory-bowel-disease: [faecalibacterium-prausnitzii, lachnospiraceae, ruminococcus, roseburia, escherichia-coli], schizophrenia: [lachnospiraceae, candida-albicans, streptococcus]}
seo_target: "multiple sclerosis microbiome gut-brain axis probiotics"
wikipedia_differentiation: "Probiotic trial meta-analysis with specific strain-level outcomes, MAIT cell-fungal dysbiosis connection, and metallomic gap analysis identifying MS as an under-studied condition for metal-microbiome interactions"
---

# Multiple Sclerosis

## Overview

Multiple sclerosis (MS) is a chronic autoimmune demyelinating disease of the central nervous system, with a global prevalence of approximately 2.8 million [[attfield-2022-immunology-ms-nature-review]]. The conventional framing centers on genetic susceptibility (HLA-DRB1*15:01), autoreactive T cells attacking myelin, and environmental triggers (EBV infection, vitamin D deficiency, smoking) [[attfield-2022-immunology-ms-nature-review]]. The metallomic angle for MS is notably thinner than for the other diseases in this wiki -- there is no well-characterized metal signature in MS biofluids comparable to the Cu/Zn disruption in cancer or the Zn depletion in diabetes. However, the gut-brain axis connection is exceptionally strong, with probiotic trials demonstrating clinically meaningful improvements in disability scores, inflammatory markers, and cytokine profiles. Because gut microbiome composition is shaped by dietary metal exposure, the metal-microbiome-brain pathway provides the most relevant lens for MS in this wiki.

## Metallomic Signature

Metal-specific evidence in MS is sparse. No comprehensive metallomics study of MS biofluids was identified in the source literature. The relevant metal connections are indirect:

- Iron: Iron accumulation in deep gray matter structures (thalamus, caudate, putamen) is documented by MRI and pathology in progressive MS, likely reflecting both neurodegeneration and impaired iron homeostasis [[ignatova-2023-biomarkers-ms-review]]. Peripherally, urine iron is significantly lower in MS patients [[gunal-2018-heavy-metals-sialic-acid-ms]]. Ferroptosis mechanisms relevant to other neurodegenerative diseases (Parkinson's, Alzheimer's) may apply.
- Zinc: Zinc is essential for oligodendrocyte function and myelin production. Zinc deficiency impairs remyelination in animal models.
- Copper: Ceruloplasmin (the major Cu-carrying protein) has ferroxidase activity critical for iron homeostasis in the CNS. Disrupted Cu trafficking could contribute to iron accumulation.
- Manganese: Mn is a cofactor for MnSOD and TCA cycle enzymes. The metabolic shift from oxidative phosphorylation to glycolysis observed in MS-associated T cells [[libbey-2018-diet-microbiota-eae]] involves Mn-dependent enzyme pathways.

The absence of a clear metallomic signature does not mean metals are irrelevant to MS -- it means the research has not been done. A Turkish case-control study (52 MS vs 41 controls) found significantly elevated urinary Ni, Cd, Pb, As, Al, Mn, Cu, and Ba in MS patients, with Ni (OR 1.47), Cd (OR 1.45), and Pb (OR 1.32) emerging as independent risk factors [[gunal-2018-heavy-metals-sialic-acid-ms]]. The gut microbiome evidence below suggests that metals exert their influence on MS indirectly, through reshaping the microbial communities that regulate immune function via the gut-brain axis.

## Gut Microbiome Connection

The microbiome-MS literature in this wiki is concentrated in five sources that together build a coherent picture of probiotic-mediated immune modulation. Foundational case-control work has repeatedly documented an MS dysbiosis pattern: *Prevotella* depletion, *Akkermansia* enrichment, methanogen (*Methanobrevibacter*) expansion [[jangi-2016-gut-microbiome-alterations-ms]], and striking depletion of Clostridia clusters XIVa and IV (14 of 21 differentially abundant species belong to the Clostridia clade, all reduced in MS) [[miyake-2015-dysbiosis-ms-clostridia-depletion]]. A meta-analysis of MS microbiome studies has since confirmed this signature across populations [[lin-2024-meta-analysis-gut-microbiota-ms]].

### Probiotic Clinical Trials in MS

[[kouchaki-2017-clinical-metabolic-probiotic-ms|Kouchaki et al. (2017)]] -- The landmark trial. 60 RRMS patients randomized to a four-strain probiotic (*L. acidophilus*, *L. casei*, *B. bifidum*, *L. fermentum*, each 2x10^9 CFU/g) or placebo for 12 weeks. Results:

| Outcome | Probiotic Change | Placebo Change | p-value |
|---------|-----------------|----------------|---------|
| EDSS (disability) | -0.3 | +0.1 | 0.001 |
| BDI (depression) | -5.6 | -1.1 | <0.001 |
| hs-CRP | -1.3 | -0.4 | 0.01 |
| HOMA-IR (insulin resistance) | -0.6 | +0.2 | 0.001 |
| MDA (lipid peroxidation) | +0.009 | +0.3 | 0.04 |
| Total-/HDL-cholesterol | -0.1 | +0.1 | 0.02 |

The EDSS improvement is particularly notable -- a 0.4-point difference in EDSS between groups over 12 weeks is clinically meaningful for a disease typically measured in years of progression.

[[tamtaji-2017-probiotic-gene-expression-ms|Tamtaji et al. (2017)]] -- Companion study using the same probiotic formulation in 40 RRMS patients. Demonstrated significant downregulation of IL-8 (p<0.001) and TNF-alpha (p<0.001) gene expression in PBMCs. No effect on IL-1, PPAR-gamma, or LDLR. Note: This paper has an Expression of Concern (2022) regarding data integrity; the authors could not provide original data. Results should be interpreted with caution.

[[tankou-2018-probiotic-microbiome-ms|Tankou et al. (2018)]] -- VSL#3 (multi-strain probiotic) modulated both gut microbiome composition and peripheral immune responses in MS patients, with effects on regulatory T cell populations. One of the first studies combining microbiome sequencing, metabolomics, and immune profiling in MS.

### Animal Model Evidence

[[libbey-2018-diet-microbiota-eae|Libbey et al. (2018)]] -- Diet composition alone (irradiated vs. autoclaved rodent chow) was sufficient to alter gut microbial communities and significantly change EAE severity. Key findings:

- *Lactobacillus* abundance inversely correlated with EAE severity (Spearman r = -0.67)
- Therapeutic *L. paracasei* treatment: only 9/13 treated mice developed EAE vs. 15/15 controls (p<0.05), with significantly lower clinical scores
- Disease-associated mice showed a metabolic shift toward glycolysis and away from oxidative phosphorylation -- the same metabolic shift seen in inflammatory T cells in human MS
- TCA cycle metabolites (citric acid, isocitric acid, malic acid, fumaric acid) were higher in protected mice

The metal connection: TCA cycle enzymes require Fe, Mn, and other metals as cofactors. Diet-driven changes in microbial metal availability could affect the metabolic output of gut bacteria, altering the balance of anti-inflammatory SCFA production versus pro-inflammatory metabolite generation.

[[dargahi-2020-streptococcus-thermophilus-ms|Dargahi et al. (2020)]] -- *Streptococcus thermophilus* ST285 shifted the immune response from pro-inflammatory Th1 to anti-inflammatory Th2 in MBP83-99-immunized mice:

- IFN-gamma (Th1): significantly reduced
- IL-4 (Th2): approximately 3-fold increase (p<0.001)
- IL-10 (regulatory): approximately 4-fold increase (p<0.001)
- IL-5: significantly increased (p<0.01)

The IL-10 increase is particularly important: IL-10 drives naive CD4+ T cell differentiation into Tregs, supporting an anti-inflammatory phenotype. This Th1-to-Th2 shift is precisely what would be therapeutic in MS, where autoreactive Th1/Th17 responses drive demyelination.

### Metal-Microbiome-Brain Pathway

While direct metal-MS studies are lacking, the evidence supports a plausible pathway:

1. Dietary metals shape gut microbiome composition (extensively documented in this wiki for Cd, Pb, Ni, As)
2. Gut microbiome composition determines EAE/MS severity (Libbey 2018: Lactobacillus r = -0.67)
3. Specific probiotics shift cytokine profiles toward anti-inflammatory (Dargahi 2020: Th1 to Th2)
4. Cytokine shifts produce clinical improvement (Kouchaki 2017: EDSS -0.3, hs-CRP -1.3)

The missing link is step 1 applied specifically to MS. Do MS patients have altered metal exposures or handling that reshape their gut microbiome toward a pro-inflammatory, pro-demyelinating community?

## Environmental Metal Exposure Links

Direct case-control evidence links environmental metal exposure to MS risk: in a Turkish cohort, urinary Ni, Cd, Pb, Al, As, Cu, Mn, Ag, Ba, Cs, Rb, and Sr were all significantly elevated in MS patients, and heavy metals collectively carried ~1.5-fold increased MS risk [[gunal-2018-heavy-metals-sialic-acid-ms]]. Beyond this:

- Smoking (Cd, Pb, Ni) is an established MS risk factor, increasing risk approximately 1.5-fold
- Mercury from dental amalgams was historically hypothesized as an MS trigger, but epidemiological evidence does not support a causal link
- Lead exposure in childhood has been associated with increased MS risk in some studies [[gunal-2018-heavy-metals-sialic-acid-ms]]
- Iron supplementation effects on MS gut microbiome have not been studied

The gap in environmental metal-MS research is striking given the strong microbiome evidence. This represents a clear research opportunity.

## Current Interventions with Metal Relevance

| Intervention | Mechanism | Evidence Level |
|-------------|-----------|----------------|
| Multi-strain probiotics (Lactobacillus + Bifidobacterium) | Reduce hs-CRP, improve EDSS, shift cytokines, reduce insulin resistance | RCT (Kouchaki 2017) |
| S. thermophilus | Th1-to-Th2 cytokine shift; IL-10/Treg induction | Animal model (Dargahi 2020) |
| L. paracasei | Reduced EAE incidence and severity; metabolic shift toward OXPHOS | Animal model (Libbey 2018) |
| VSL#3 | Microbiome + immune modulation | Human trial (Tankou 2018) |
| Dietary optimization | Low-glycemic, Mediterranean-style diets reduce inflammation; diet composition alters microbiome and metabolites | Animal model + epidemiological |

## Open Questions

1. MS metallomic profiling: What does a comprehensive multi-element analysis of MS patient biofluids reveal? Do MS patients show the Cu/Zn disruption common in other autoimmune diseases?
2. Iron in progressive MS: Is deep gray matter iron accumulation a cause of progression (via ferroptosis) or a consequence of neurodegeneration? Would iron chelation slow progression?
3. Dietary metals and MS gut microbiome: Do dietary Ni, Cd, or Pb exposures affect the abundance of protective Lactobacillus species in MS patients?
4. Probiotic strain optimization: Which specific strains produce the strongest Th1-to-Th2 shift? Can metal-binding probiotic strains (e.g., L. plantarum CCFM8610 for Cd) simultaneously detoxify metals and modulate immunity?
5. Metabolic-metallomic intersection: The glycolysis-to-OXPHOS shift in disease-associated T cells involves metal-dependent enzymes. Can metal cofactor supplementation (Mn, Fe) shift T cell metabolism back toward OXPHOS?
6. Data integrity: The Expression of Concern on Tamtaji 2017 (companion to Kouchaki 2017) raises questions about the gene expression data. Does the clinical data from Kouchaki 2017 stand independently?

## Comorbidities

- [[depression]] -- depression affects 30-50% of MS patients; probiotic trials showed significant BDI improvement alongside EDSS improvement (BDI -5.6 vs -1.1, p<0.001); shared gut-brain axis disruption, SCFA depletion, and tryptophan pathway shifts toward pro-inflammatory kynurenine; depression independently worsens MS disability trajectory
- [[anxiety]] -- anxiety disorders in 20-40% of MS patients; disease unpredictability and progressive disability compound neurobiological mechanisms; shared HPA axis dysregulation and vagal tone disruption
- [[inflammatory-bowel-disease]] -- bidirectional association: IBD patients have increased MS risk and vice versa; shared HLA-DRB1 genetic architecture; Mendelian randomization shows Crohn's increases Graves' disease risk by 30%, indicating shared autoimmune gut-immune pathways; both feature Th1/Th17 dysregulation and SCFA producer depletion

## Connections

- [[metal-disease-matrix]] -- Cross-disease metallomic comparison; MS metal signature is thin but included
- [[gut-metal-microbiome]] -- The primary pathway connecting metals to MS is through microbiome modulation
- [[probiotics]] -- Strongest intervention evidence in this disease; multi-strain formulations improve EDSS
- [[iron]] -- CNS iron accumulation in progressive MS; ferroptosis mechanisms
- [[zinc]] -- Essential for oligodendrocyte function and remyelination
- [[manganese]] -- TCA cycle enzyme cofactor; metabolic shift in MS T cells involves Mn pathways
- [[nickel]] -- S. thermophilus is a Streptococcus species; metal homeostasis in Streptococci is relevant to understanding probiotic mechanisms
- [[neurodegeneration]] -- progressive MS involves iron-driven neurodegeneration with ferroptosis in oligodendrocytes
- [[gut-microbiome]] -- MS microbiome shows reduced SCFA producers and enriched pro-inflammatory taxa
- [[biomarkers]] -- EDSS, CSF neurofilaments, and brain iron on MRI as MS progression markers
- [[indoles]] -- microbial indole derivatives activate astrocytic AhR, suppressing neuroinflammation; depleted in MS gut

## Additional Supporting Evidence

- Bile acid metabolism -- Both primary and secondary bile acid metabolites are significantly reduced in adult and pediatric MS, with TUDCA supplementation ameliorating neuroinflammation through GPBAR1 receptor signaling in EAE [[bhargava-2020-bile-acid-metabolism-ms-neuroinflammation]]
- SCFA reduction -- Fecal SCFAs and serum propionate/butyrate are lower in MS and correlate with altered T/B cell subsets and elevated intestinal inflammation markers (calprotectin) [[becker-2021-scfas-intestinal-inflammation-ms-female-susceptibility]] [[trend-2021-serum-scfas-immune-cells-biomarkers-ms]]
- MAIT cells and gut yeasts -- MS patients show elevated fecal fungal abundance (*S. cerevisiae*, *C. albicans*), and their MAIT cells are hyper-activated by fungal extracts via IL-23, producing IL-17, GM-CSF, and CCL20; MAIT cells infiltrate 53% of progressive MS brain lesions [[gargano-2022-mait-cells-gut-yeasts-ms-brain]]. [[torulaspora|*Torulaspora*]] and [[debaryomyces|*Debaryomyces*]] are also enriched in MS mycobiota, with *Torulaspora* associated with lower disability and *Debaryomyces* characteristic of HLA-DRB1*1501 carriers [[otaegui-chivite-2025-mycobiota-ms-progression]]
- Ketogenic diet -- A 6-month ketogenic diet restored colonic microbiome mass and essential bacteria (*Roseburia*, *Bacteroides*, *F. prausnitzii*) in MS patients to healthy-control levels [[swidsinski-2017-ketogenic-diet-colonic-microbiome-ms]]
- Disease-progression signatures -- Commensal microbiota signatures predict clinical severity and progression in MS [[montgomery-2024-microbiota-signatures-ms-progression]], and gut microbiota composition varies with disease activity (*F. prausnitzii* and *Gordonibacter* reduced during active inflammation) [[thirion-2023-gut-microbiota-ms-disease-activity]]
- B-cell depletion therapy -- Ocrelizumab (anti-CD20) partially reverses MS-associated oral and gut dysbiosis over 12 months, shifting Bacteroidetes/Firmicutes balance toward healthy-control patterns [[troci-2022-b-cell-depletion-reverses-dysbiosis-ms]]
- Oral microbiome -- Oral dysbiosis with a distinct metabolite signature is detectable in MS and may be more pronounced than gut dysbiosis as a disease trait [[boussamet-2024-oral-microbiota-metabolite-signature-ms]]
- MS metabolomics -- Comprehensive metabolomic profiling of MS cohorts [[zahoor-2021-metabolomics-ms-comprehensive-overview]]
- Diet-MS mechanism -- Dietary intake shapes MS-relevant gut-brain signaling via microbiota [[katzsand-2018-diet-ms-mechanistic-review]]
- Mycobiota progression -- Altered gut mycobiota tracks MS progression [[otaegui-chivite-2025-mycobiota-ms-progression]]
