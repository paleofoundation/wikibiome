---
title: Schizophrenia
type: entity
subtype: disease
created: 2026-04-09
updated: 2026-04-16
last_substantive_update: 2026-04-16
sources: [saha-2005-prevalence-schizophrenia-systematic-review.md, schultz-2007-schizophrenia-review-afp.md, comer-2020-inflamed-brain-schizophrenia-neuroinflammation.md, li-2024-alterations-gut-microbiota-schizophrenia-vote-counting.md, yuan-2021-gut-microbial-biomarkers-treatment-response-schizophrenia.md, safadi-2022-gut-dysbiosis-severe-mental-illness-chronic-fatigue-meta-analysis.md, ling-2025-gut-mycobiota-dysbiosis-immune-dysfunction-schizophrenia-metabolic-syndrome.md, ren-2025-gut-virome-schizophrenia-metagenomics.md, olde-loohuis-2018-blood-microbial-diversity-schizophrenia-transcriptome.md, ng-2019-probiotics-schizophrenia-symptoms-systematic-review.md, chrobak-2016-gut-microbiome-cns-schizophrenia-bipolar-depression.md, dinan-2014-genomics-schizophrenia-gut-microbiome.md, zhu-2020-metagenome-wide-gut-microbiome-schizophrenia.md, ermakov-2022-immune-system-abnormalities-schizophrenia.md, zhou-2024-gut-microbiome-schizophrenia-mendelian-randomization.md, theleritis-2024-gut-dysbiosis-first-episode-psychosis-review.md, kamath-2025-gut-microbiome-mental-health-causation-correlation-review.md, krajewski-2025-heavy-metals-microbiome-metabolites-adhd-behavior.md]
source_count: 18
tags: [schizophrenia, neuropsychiatric-disease, copper, zinc, iron, gut-brain-axis, neuroinflammation, dysbiosis, tryptophan-metabolism, immune-balance, metabolic-syndrome, microbiome, mendelian-randomization, first-episode-psychosis, SCFAs, clostridia, betaproteobacteria, desulfovibrio, veillonellaceae]
platform: wikibiome
associated_conditions: [depression, alzheimers-disease, parkinsons-disease, multiple-sclerosis, bipolar-disorder]
shared_signature_metals: {depression: [copper, zinc], alzheimers-disease: [copper, zinc-dysregulated], parkinsons-disease: [iron, manganese, lead], multiple-sclerosis: [lead, cadmium], bipolar-disorder: [copper, zinc, iron]}
shared_signature_taxa: {depression: [clostridium, escherichia-coli, lachnospiraceae], alzheimers-disease: [escherichia-coli, lachnospiraceae-depleted], parkinsons-disease: [enterobacteriaceae, lachnospiraceae], multiple-sclerosis: [lachnospiraceae, candida-albicans, streptococcus], bipolar-disorder: [faecalibacterium-depleted, lachnospiraceae-depleted]}
seo_target: "schizophrenia heavy metals microbiome copper zinc gut-brain"
wikipedia_differentiation: "Cu/Zn mis-metallation mechanism at NMDA receptor zinc-finger sites connecting metallomic dysregulation to glutamatergic hypofunction hypothesis; Mendelian randomization causal taxon map distinguishing drivers from consequences; multi-kingdom gut dysbiosis analysis including mycobiome and virome"
icd_10: "F20"
global_prevalence: "~7.2 per 1000 adults (lifetime prevalence)"
signature_page: "[[schizophrenia-signature]]"
stub: false
---

# Schizophrenia

A severe neuropsychiatric disorder affecting approximately 1% of the global population, characterized by positive symptoms (hallucinations, delusions), negative symptoms (anhedonia, social withdrawal, flat affect), and cognitive deficits. Life expectancy is reduced by 15-20 years, largely due to metabolic comorbidities and suicide (10% lifetime risk). The disorder emerges from a convergence of genetic vulnerability (MHC locus, complement C4A, cytokine genes) and environmental risk factors (prenatal infection, childhood trauma, pollution, gut [[dysbiosis]]) that converge on [[neuroinflammation]] and immune dysregulation.

What makes schizophrenia distinctive in the microbiome landscape is the convergence of three lines of evidence that go well beyond what Wikipedia covers: a metallomic mis-metallation story at the NMDA receptor level, causal genetic-instrument data placing specific taxa as upstream drivers versus downstream consequences of the disease, and multi-kingdom (bacterial + fungal + viral) dysbiosis whose depth has no parallel in other psychiatric conditions.

## Cu/Zn Ratio Dysregulation

The metallomic signature of schizophrenia centers on [[copper]]/[[zinc]] imbalance. Elevated serum Cu and depressed Zn have been reported across multiple cohorts, yielding an increased Cu/Zn ratio that correlates with symptom severity. This finding parallels other neuropsychiatric conditions but is particularly pronounced in schizophrenia, where oxidative stress markers (ceruloplasmin-bound Cu) are consistently elevated.

### Mis-metallation at the NMDA Receptor

The concept of [[mis-metallation]] offers a mechanistic bridge: when Cu displaces [[zinc]] from zinc-finger transcription factors, NMDA receptor subunits (NR2A/NR2B), and GABAergic interneuron proteins, the result is functional zinc deficiency at the synapse even when total body zinc appears adequate. The NMDA hypofunction hypothesis of schizophrenia — supported by the fact that NMDA antagonists (PCP, ketamine) reproduce the full symptom spectrum — may thus have a metallomic substrate. Zinc is an endogenous positive allosteric modulator of NMDA receptors, and its displacement by Cu could contribute to the glutamatergic/GABAergic imbalance central to the disorder [[comer-2020-inflamed-brain-schizophrenia-neuroinflammation]].

[[iron]] dysregulation compounds the picture: iron-catalyzed Fenton chemistry amplifies oxidative damage in dopaminergic circuits, and heavy metal burden in the gut environment selects for opportunistic taxa with metal-dependent virulence enzymes. The Krajewski (2025) path-analysis study in typically developing children found arsenic and cadmium negatively correlated with social behaviour (r = -0.43 and -0.38 respectively), and heavy metal load positively correlated with microbiome-associated catecholamine precursor metabolites (r = 0.33), establishing a measurable chain from heavy metal accumulation through gut microbiome disruption to neurobehavioural impairment [[krajewski-2025-heavy-metals-microbiome-metabolites-adhd-behavior]].

## Gut-Brain Axis

The [[gut-brain-axis]] is now recognized as a major pathway through which environmental factors shape schizophrenia risk and course. Bidirectional communication occurs via the vagus nerve, enteroendocrine signaling, short-chain fatty acid (SCFA) production, and immune mediator release. A critical insight from Kamath et al. (2025) is that the relationship is a trichotomy — the microbiome can be a causal driver, a pathophysiological consequence, or a bidirectional partner in schizophrenia — and most existing studies fail to distinguish these roles [[kamath-2025-gut-microbiome-mental-health-causation-correlation-review]].

### Causal Taxon Map from Mendelian Randomization

The most important methodological advance in this field is the two-sample bidirectional Mendelian randomization (MR) study by Zhou et al. (2024), using MiBioGen GWAS data (n=18,340) and PGC schizophrenia GWAS (n=130,644). Because MR uses inherited genetic variants as instrumental variables, it is largely free of the confounding by diet, medication, and stress that undermines observational studies [[zhou-2024-gut-microbiome-schizophrenia-mendelian-randomization]].

Taxa causally increasing schizophrenia risk (OR 1.08–1.16):
- Class Betaproteobacteria (OR=1.13, 95% CI 1.01–1.27, p=0.027) — previously linked to cognitive impairment in SCZ patients
- Class Clostridia (OR=1.16, 95% CI 1.05–1.28, p=4.2×10⁻³) — produces SCFAs that activate microglia and increase choline (membrane dysfunction marker)
- Order Clostridiales (OR=1.12, 95% CI 1.01–1.24, p=0.027) — elevated in ultra-high-risk psychosis subjects alongside elevated choline
- Family Prevotellaceae (OR=1.11, 95% CI 1.03–1.20, p=1.4×10⁻³) — enriched in schizophrenia patients with violent behaviours
- Genus Alloprevotella (OR=1.09, p=7.9×10⁻³), genus Hungatella (OR=1.08, p=0.043), genus Subdoligranulum (OR=1.14, p=0.015)
- Phylum Firmicutes (OR=1.11, 95% CI 1.02–1.21, p=0.015)

Taxa causally protective against schizophrenia (OR 0.88–0.94):
- Genus Desulfovibrio (OR=0.88, 95% CI 0.82–0.96, p=1.9×10⁻³) — lower abundance is a risk factor; notably, antipsychotic amisulpride cannot restore it, consistent with this causal direction
- Family Veillonellaceae (OR=0.93, p=0.033) — depleted in schizophrenia patients with violent behaviours
- Family Rhodospirillaceae (OR=0.93, p=0.049)
- Genus Coprobacter (OR=0.92, p=7.3×10⁻³), genus Gordonibacter (OR=0.94, p=0.012)

Taxa causally altered by schizophrenia (reverse MR direction — the disease drives these changes, not vice versa):
- Genus Akkermansia increased (OR=1.04, p=0.040), along with Bacteroides, Lachnospira, Ruminiclostridium5
- Family Defluviitaleaceae reduced (OR=0.94, p=7.1×10⁻³)

The Akkermansia finding is clinically significant: observational studies have reported Akkermansia depletion in schizophrenia, but the MR data indicate the opposite — schizophrenia elevates Akkermansia abundance. This suggests that Akkermansia enrichment is a *consequence* of schizophrenia pathophysiology, not a cause, and naive supplementation in active SCZ may be contraindicated [[zhou-2024-gut-microbiome-schizophrenia-mendelian-randomization]].

### Altered Microbiome Composition in Established Schizophrenia

Observational 16S rRNA and shotgun metagenomic studies consistently find depletion of anti-inflammatory butyrate-producing genera — Faecalibacterium prausnitzii, Roseburia, Coprococcus, Anaerostipes — and enrichment of opportunistic taxa including Proteobacteria, Lactobacillus, Enterobacteriaceae, Succinivibrio, and Prevotella in schizophrenia patients relative to controls [[li-2024-alterations-gut-microbiota-schizophrenia-vote-counting]]. First-episode drug-naive patients show lower alpha-diversity (Shannon index p=1.21×10⁻⁹) and significant beta-diversity separation [[yuan-2021-gut-microbial-biomarkers-treatment-response-schizophrenia]].

The Theleritis (2024) review of 12 FEP studies adds granularity: in first-episode psychosis, Lactobacillus numbers are increased and positively associated with symptom severity; Lachnospiraceae and Ruminococcaceae depletion correlates with negative symptoms and poorer functioning [[theleritis-2024-gut-dysbiosis-first-episode-psychosis-review]]. Subjects with the highest microbiome alterations at baseline had worse treatment response at 12 months. FMT of schizophrenia microbiota into germ-free mice produced psychomotor hyperactivity, diminished learning and memory, tryptophan→kynurenine diversion, elevated prefrontal dopamine, and elevated hippocampal 5-hydroxytryptamine. Transfer of the single schizophrenia-enriched species Streptococcus vestibularis to mice was sufficient to induce social behavior deficits and alter neurotransmitter levels — one of the strongest causation experiments in the literature [[theleritis-2024-gut-dysbiosis-first-episode-psychosis-review]].

### Increased Gut Permeability

Proxy biomarkers of gut barrier dysfunction are markedly elevated in schizophrenia. A meta-analysis found antibodies against bacterial endotoxin highest in schizophrenia (SMD=2.72) of any psychiatric disorder studied, alongside elevated zonulin, LPS, sCD14, and alpha-1-antitrypsin [[safadi-2022-gut-dysbiosis-severe-mental-illness-chronic-fatigue-meta-analysis]]. Blood transcriptome analysis revealed increased microbial diversity in schizophrenia blood samples, inversely correlated with CD8+ memory T cells, consistent with bacterial translocation [[olde-loohuis-2018-blood-microbial-diversity-schizophrenia-transcriptome]]. Zonulin levels — a direct marker of tight-junction opening — correlate with attentional performance in patients [[zhou-2024-gut-microbiome-schizophrenia-mendelian-randomization]].

### Tryptophan/Kynurenine Shunting

[[tryptophan-metabolism]] is disrupted in schizophrenia via microbiome-mediated diversion from serotonin synthesis toward the kynurenine pathway. Over 90% of the body's serotonin is synthesized in intestinal enterochromaffin cells, making the gut microbiome a primary determinant of serotonin availability [[kamath-2025-gut-microbiome-mental-health-causation-correlation-review]]. Elevated kynurenine/tryptophan ratios and altered GABA, serotonin, and dopamine precursor availability have been documented in both gut and peripheral blood of schizophrenia patients.

The shunting is driven both by direct microbial tryptophan catabolism and by inflammatory cytokine induction of indoleamine 2,3-dioxygenase (IDO) in the host [[chrobak-2016-gut-microbiome-cns-schizophrenia-bipolar-depression]]. In the brain, this pathway bifurcates: astrocytes produce neuroprotective kynurenic acid, while microglia produce neurotoxic quinolinic acid — the imbalance toward quinolinic acid contributes to excitotoxicity and the cognitive deficits of schizophrenia. Lactobacillus and Bifidobacterium in the gut can produce GABA directly; their depletion in schizophrenia therefore contributes to reduced GABAergic tone [[theleritis-2024-gut-dysbiosis-first-episode-psychosis-review]].

The multiomics study by Wang et al. (2024) in 127 first-episode drug-naive patients found that altered metabolome and microbiome converged on aberrant GABA and tryptophan metabolism, with gray matter volume and functional connectivity disturbances mediating the relationships between Ruminococcus torgues and Collinsella aerofaciens and symptom severity [[theleritis-2024-gut-dysbiosis-first-episode-psychosis-review]].

### SCFA Depletion and Microglial Activation

The butyrate-producing taxa depleted in schizophrenia (Faecalibacterium, Roseburia, Lachnospiraceae) supply butyrate that normally acts as an HDAC inhibitor, upregulating BDNF and Tet1 in the prefrontal cortex and stabilising the blood-brain barrier via JAM-A/ZO-1 complex [[kamath-2025-gut-microbiome-mental-health-causation-correlation-review]]. Their loss removes a tonic anti-neuroinflammatory signal. Li et al. (2021) found that baseline serum butyric acid levels positively associated with PANSS total score reduction after 24 weeks of risperidone treatment (n=56 FEP patients, n=35 controls) — higher baseline butyrate predicted better treatment response [[theleritis-2024-gut-dysbiosis-first-episode-psychosis-review]].

## Neuroinflammation

[[neuroinflammation]] is a central feature of schizophrenia pathophysiology, driven by converging genetic and environmental risk factors.

### Microglial Activation and Synaptic Pruning

Microglia, the CNS immune sentinels, show chronic pro-inflammatory (M1) polarization in schizophrenia with impaired transition to anti-inflammatory (M2) states. The MHC locus (chromosome 6) carries the highest GWAS association with schizophrenia; complement component C4A overexpression drives excessive synaptic pruning during adolescence [[comer-2020-inflamed-brain-schizophrenia-neuroinflammation]]. This pruning removes cortical synapses that should be preserved, producing the characteristic dendritic spine density loss in schizophrenia. Environmental pollutants (PM2.5, NO2, diesel exhaust) cause up to 70% decrease in hippocampal neurogenesis and 35% increase in microglial activation markers. The Clostridiales enrichment identified as causal by MR data is consistent with this: elevated Clostridiales SCFA production activates microglia and increases choline (a membrane dysfunction marker in the anterior cingulate cortex) in ultra-high-risk psychosis subjects [[zhou-2024-gut-microbiome-schizophrenia-mendelian-randomization]].

### Th17/Treg Imbalance

The [[immune-balance]] in schizophrenia is characterized by Th17/Treg skewing, with elevated [[interleukin-6|IL-6]], IL-8, [[tnf-alpha|TNF-alpha]], and IL-1beta alongside reduced IL-10 and [[tgf-beta|TGF-beta]] [[ermakov-2022-immune-system-abnormalities-schizophrenia]]. This Th17-dominant profile promotes blood-brain barrier permeability and facilitates central neuroinflammation. Elevated [[interleukin-6|IL-6]], [[tnf-alpha|TNF-α]], soluble IL-2 receptor, and prostaglandin E2 have been documented in first-episode psychosis before medication exposure, establishing that inflammation precedes antipsychotic treatment rather than resulting from it [[theleritis-2024-gut-dysbiosis-first-episode-psychosis-review]]. The maternal immune activation (MIA) model (Poly I:C prenatal challenge) produces a schizophrenia-like phenotype in offspring with persistent microglial abnormalities, and in this model elevated Firmicutes activate the immune system contributing to neuroplasticity reduction in cortical areas [[zhou-2024-gut-microbiome-schizophrenia-mendelian-randomization]].

### Early-Life Stress and HPA Axis

Early-life stress (maternal separation, social isolation) dysregulates the hypothalamic-pituitary-adrenal (HPA) axis and intensifies the plasma corticosterone response to acute stress, elevating pro-inflammatory cytokines (IL-1β, IL-6, TNF-α). Animal models of social isolation — a confirmed schizophrenia analogue — produce increases in Actinobacteria, decreases in Clostridia class, decreased hippocampal IL-6 and IL-10, and impaired neurogenesis in the dentate gyrus [[theleritis-2024-gut-dysbiosis-first-episode-psychosis-review]]. Prolonged glucocorticoid exposure reduces hippocampal volume and BDNF, both observed in schizophrenia, completing the stress → gut dysbiosis → neuroinflammation → symptom emergence circuit.

## Multi-Kingdom Microbiome Dysbiosis

Beyond bacterial [[dysbiosis]], schizophrenia involves disruption across the full microbial ecosystem — a depth not captured in most psychiatric research:

### Mycobiome

Enrichment of fungal pathobionts (Trichosporon asahii, [[candida-albicans]], Malassezia) with depletion of beneficial species (Saccharomyces cerevisiae); oral fungal dysbiosis correlates with elevated IL-6 and TNF-alpha [[ling-2025-gut-mycobiota-dysbiosis-immune-dysfunction-schizophrenia-metabolic-syndrome]]. In drug-naive first-episode schizophrenia, elevated Purpureocillium abundance associated with more severe PANSS symptoms and poorer cognitive function, while elevated Aspergillus associated with improved cognitive ability (n=205 FEP, n=125 controls) [[theleritis-2024-gut-dysbiosis-first-episode-psychosis-review]]. FEP patients exhibited lower fungal alpha diversity and a lower fungi-to-bacteria ratio than controls, with denser bacteria-fungi correlation networks in healthy controls.

### Virome

124 virus-like particle operational taxonomic units (vOTUs) enriched in schizophrenia (mainly Siphoviridae and Flandersviridae); virome-based random forest classifier achieves 93.2% AUC for diagnosis, outperforming both bacterial and mycobiome models [[ren-2025-gut-virome-schizophrenia-metagenomics]]. This suggests the gut virome — largely unstudied in psychiatric research — encodes information about schizophrenia pathophysiology not captured by bacterial 16S studies alone.

### Salivary/Oral Microbiome

Drug-naive first-episode patients show higher alpha-diversity and H2S-producing bacteria enrichment with disease-stage-specific correlations; oral-gut-brain microbiome crosstalk may represent an underappreciated route of CNS influence.

## Metal Associations

| Metal | Direction | Mechanism | Linked taxa |
|-------|-----------|-----------|-------------|
| [[copper]] | Elevated | Ceruloplasmin-bound oxidative stress; Cu displaces Zn at NMDA NR2A/NR2B | — |
| [[zinc]] | Depleted | Endogenous NMDA modulator; displaced by Cu at synaptic zinc-finger sites | — |
| [[iron]] | Dysregulated | Fenton chemistry → dopaminergic oxidative damage; siderophore-dependent pathogens | Enterobacteriaceae enriched |
| [[lead]] | Elevated (burden) | HPA axis disruption; catecholamine pathway interference; microbiome shifts | Proteobacteria enriched |
| [[cadmium]] | Elevated (burden) | Catecholamine precursor metabolism disruption; social behaviour impairment | Bacteroides/Bifidobacterium depleted |
| [[arsenic]] | Elevated (burden) | Microbiome composition changes; Bifidobacterium depletion | Proteobacteria enriched |

Heavy metal burden interacts with the microbiome in schizophrenia through two routes: (1) direct neurotoxicity via catecholamine pathway disruption, and (2) indirect microbiome remodelling that selects for metal-tolerant opportunistic taxa while depleting metal-sensitive beneficial producers [[krajewski-2025-heavy-metals-microbiome-metabolites-adhd-behavior]].

## Associated Conditions

Schizophrenia shares overlapping metallomic and taxonomic signatures with several conditions, pointing to shared pathophysiological mechanisms rather than coincidental comorbidity:

- [[depression]]: Shared Cu/Zn dysregulation; shared Lachnospiraceae and Faecalibacterium depletion; shared tryptophan/kynurenine shunting via IDO activation; Roseburia colonisation reverses depressive phenotypes in animal models by restoring 5-HT [[kamath-2025-gut-microbiome-mental-health-causation-correlation-review]]. FMT from depressed donors induces depression-like behaviour and increased inflammation in rodents — parallel to the schizophrenia FMT experiments [[theleritis-2024-gut-dysbiosis-first-episode-psychosis-review]].
- [[alzheimers-disease]]: Shared Enterobacteriaceae enrichment and Lachnospiraceae depletion; shared copper dysregulation; shared neuroinflammatory microglial activation. MR studies show causal links between gut microbiome taxa and Alzheimer's risk that parallel the schizophrenia MR findings [[zhou-2024-gut-microbiome-schizophrenia-mendelian-randomization]].
- [[parkinsons-disease]]: Shared iron dysregulation and Enterobacteriaceae enrichment; overlapping butyrate-producer depletion; shared gut-first neuroinflammation hypothesis.
- [[multiple-sclerosis]]: Shared Lachnospiraceae depletion; shared Th17/Treg imbalance; shared Candida albicans enrichment in gut mycobiome.
- [[schizophrenia|Bipolar-disorder]]: Closest metabolic overlap — shared Faecalibacterium depletion, Lachnospiraceae depletion, Cu/Zn dysregulation, and Th17 skewing. Distinguishing schizophrenia from bipolar disorder on microbiome grounds alone remains difficult.

## Comorbidities

Schizophrenia carries a heavy comorbidity burden that intersects with microbiome dysfunction:

- [[metabolic-syndrome]]: Develops in approximately one-third of patients, often within the first few years of antipsychotic treatment; fivefold increase in incidence; body weight increases up to 15 kg; antipsychotics (especially olanzapine, clozapine) drive gut microbiome shifts favoring Firmicutes enrichment. Risperidone treatment over 24 weeks increases body weight, BMI, fasting blood glucose, triglycerides, and LDL alongside major elevation of Bifidobacterium and Escherichia coli [[theleritis-2024-gut-dysbiosis-first-episode-psychosis-review]].
- [[depression]]: Depressive episodes occur in the majority of patients; paradoxically, greater insight correlates with more depression; comorbid depression is the strongest risk factor for suicide (OR=3.03).
- Type 2 diabetes: Atypical antipsychotics directly increase diabetes risk independent of weight gain; gut microbiome shifts via SCFA depletion and bile acid alterations may mediate this effect.
- Cardiovascular disease: Leading cause of excess mortality; driven by metabolic syndrome, smoking, and chronic inflammation.

<!-- Intervention/treatment content moved to Cureva per public/clinical boundary policy -->

## Key Studies

| Study | Design | n | Key Finding | Evidence level |
|-------|--------|---|-------------|----------------|
| Zhou 2024 | Two-sample MR | 148,984 | 9 taxa causally increase SCZ risk; Desulfovibrio protective; Akkermansia elevated by SCZ not causal | quasi-experimental |
| Zhu 2020 | Metagenomics + FMT | 90 FEP + 81 HC | Streptococcus vestibularis transfer induces social deficits in mice; beta-diversity separated | cross-sectional |
| Safadi 2022 | Meta-analysis | Multiple cohorts | Endotoxin antibodies SMD=2.72 in SCZ — highest of all psychiatric disorders | systematic-review-meta-analysis |
| Li 2024 | Vote-counting meta-analysis | Multiple studies | Consistent Faecalibacterium, Roseburia, Coprococcus depletion; Lactobacillus, Prevotella enrichment | systematic-review-meta-analysis |
| Wang 2024 | Multi-omics | 127 FEP | GABA/tryptophan metabolic disruption mediates microbiome-brain connectivity disturbances | cross-sectional |
| Yuan 2021 | Longitudinal (24 wk) | 107 FEP | Baseline Lachnoclostridium/Romboutsia predict treatment response to risperidone | prospective-cohort |
| Ren 2025 | Metagenomics (virome) | SCZ cohort | 124 vOTUs enriched; virome classifier AUC 93.2% | cross-sectional |

## Open Questions

- Can the causal taxon map from MR (Zhou 2024) be replicated in non-European ancestry populations?
- Does restoration of Desulfovibrio or Veillonellaceae abundance through microbiome-targeted interventions reduce schizophrenia risk or symptom severity?
- Is the Akkermansia elevation in schizophrenia a homeostatic response, a disease-driven consequence, or an antipsychotic effect?
- Do the virome signatures (Siphoviridae, Flandersviridae) represent bacteriophage predation of depleted beneficial bacteria or direct neuroimmune modulation?
- What is the causal relationship between heavy metal burden (Cu, Cd, Pb), microbiome dysbiosis, and symptom onset — does the metallomic signature precede microbiome changes?

## Connections

- [[copper]] — elevated serum Cu; ceruloplasmin-bound Cu as oxidative stress marker; Cu/Zn ratio correlates with symptom severity
- [[zinc]] — depressed serum Zn; endogenous NMDA receptor modulator displaced by Cu at the synapse
- [[iron]] — Fenton chemistry amplifies oxidative damage in dopaminergic circuits; siderophore-dependent taxa enriched
- [[lead]] — HPA axis disruption; catecholamine pathway interference via microbiome metabolites [[krajewski-2025-heavy-metals-microbiome-metabolites-adhd-behavior]]
- [[cadmium]] — catecholamine precursor metabolism disruption; Bacteroides and Bifidobacterium depletion
- [[mis-metallation]] — Cu displacing Zn from zinc-finger transcription factors and NMDA subunits; mechanistic bridge to NMDA hypofunction
- [[gut-brain-axis]] — bidirectional vagal, SCFA, and immune mediator communication linking gut dysbiosis to psychosis; trichotomy of causal/correlative/bidirectional roles [[kamath-2025-gut-microbiome-mental-health-causation-correlation-review]]
- [[neuroinflammation]] — microglial M1 polarization, C4A-driven synaptic pruning, and Th17/Treg imbalance [[comer-2020-inflamed-brain-schizophrenia-neuroinflammation]]
- [[tryptophan-metabolism]] — IDO-mediated kynurenine shunting depletes serotonin precursors; quinolinic acid neurotoxicity; astrocyte vs microglial bifurcation [[kamath-2025-gut-microbiome-mental-health-causation-correlation-review]]
- [[dysbiosis]] — depletion of butyrate producers (Faecalibacterium, Roseburia, Coprococcus) and multi-kingdom microbial disruption; Streptococcus vestibularis as causal bacterium in FMT experiments [[theleritis-2024-gut-dysbiosis-first-episode-psychosis-review]]
- [[interleukin-6]] — elevated in FEP before medication; mediator of neuroinflammation and hepcidin-driven iron sequestration
- [[tnf-alpha]] — elevated in FEP before medication; drives microglial activation and endothelial dysfunction; gingipain substrate
- [[immune-balance]] — Th17-dominant profile with elevated [[interleukin-6|IL-6]], IL-8, [[tnf-alpha|TNF-alpha]]; reduced IL-10 and [[tgf-beta|TGF-beta]]; present before medication in FEP [[ermakov-2022-immune-system-abnormalities-schizophrenia]]
- [[depression]] — comorbid in most patients; strongest suicide risk factor (OR=3.03); shared Cu/Zn dysregulation; shared FMT-transferable phenotype
- [[metabolic-syndrome]] — develops in approximately one-third of patients; antipsychotic-driven microbiome shifts [[theleritis-2024-gut-dysbiosis-first-episode-psychosis-review]]
- [[intestinal-permeability]] — markedly elevated endotoxin antibodies (SMD=2.72), zonulin, and sCD14 [[safadi-2022-gut-dysbiosis-severe-mental-illness-chronic-fatigue-meta-analysis]]
- [[candida-albicans]] — enriched in gut mycobiome; oral fungal dysbiosis correlates with elevated IL-6 [[ling-2025-gut-mycobiota-dysbiosis-immune-dysfunction-schizophrenia-metabolic-syndrome]]
- [[probiotics]] — early-stage RCT evidence; BDNF increase but no significant PANSS improvement in 3 trials; Bifidobacterium breve A-1 reduced TNF-α and improved anxiety/depression subscores [[ng-2019-probiotics-schizophrenia-symptoms-systematic-review]]
- [[desulfovibrio]] — causally protective per MR (OR=0.88); lower abundance increases SCZ risk; resistant to restoration by antipsychotics [[zhou-2024-gut-microbiome-schizophrenia-mendelian-randomization]]
- [[akkermansia-muciniphila]] — elevated in SCZ by reverse MR (disease consequence, not cause); cautions against naive supplementation in active SCZ [[zhou-2024-gut-microbiome-schizophrenia-mendelian-randomization]]
