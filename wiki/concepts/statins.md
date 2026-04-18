---
title: Statins
type: concept
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources: [mertsalmi-2023-statins-parkinsons-microbiome, liu-2018-rosuvastatin-gut-microbiome-lipid-lowering, zhou-2024-statins-gut-microbiota-abundance-mr, hisamatsu-2025-salivary-streptococcus-statin-therapy-older-adults]
source_count: 4
tags: [statins, cholesterol, HMG-CoA-reductase, microbiome, bile-acids, anti-inflammatory, Parkinsons, rosuvastatin, atorvastatin, pharmacomicrobiomics]
karen_brain_primitives: [4, 5]
seo_target: "statins microbiome bile acids anti-inflammatory gut bacteria"
platform: wikibiome
---

# Statins

## Overview

**Statins** (HMG-CoA reductase inhibitors) are the most widely prescribed drug class globally, used primarily for cholesterol lowering and cardiovascular risk reduction. Over 200 million people take statins worldwide. Beyond their canonical mechanism of inhibiting cholesterol synthesis, statins have pleiotropic effects on inflammation, immune function, and -- as increasingly recognized -- the gut microbiome. In the WikiBiome framework, statins are a prime example of [[pharmacomicrobiomics]]: a drug whose off-target microbiome effects may contribute to both therapeutic benefits and adverse effects.

## Canonical Mechanism

Statins inhibit **3-hydroxy-3-methylglutaryl-CoA (HMG-CoA) reductase**, the rate-limiting enzyme in hepatic cholesterol biosynthesis. By reducing intracellular cholesterol, they upregulate LDL receptor expression, increasing clearance of circulating LDL cholesterol. This mechanism alone does not explain statins' cardiovascular benefit -- their anti-inflammatory, endothelial-protective, and microbiome-modulating effects likely contribute.

## Microbiome Effects

### Direct Antimicrobial Activity

Several statins have direct antimicrobial properties:

- **Simvastatin** inhibits bacterial cell membrane synthesis (the mevalonate pathway is conserved in some bacteria)
- **Atorvastatin** reduces [[biofilm]] formation by [[staphylococcus-aureus]] in vitro
- Statins reduce salivary Streptococcus levels in older adults, suggesting direct oral microbiome effects [[hisamatsu-2025-salivary-streptococcus-statin-therapy-older-adults]]

### Microbiome Composition Changes

Rosuvastatin treatment alters gut microbial composition in ways that may contribute to its therapeutic effects [[liu-2018-rosuvastatin-gut-microbiome-lipid-lowering]]:

- **Increased**: [[bifidobacterium]], [[lactobacillus]] -- SCFA producers and anti-inflammatory commensals
- **Decreased**: [[desulfovibrio]] -- hydrogen sulfide producer associated with gut inflammation
- **Functional shift**: Increased bile salt hydrolase (BSH) activity, altered bile acid metabolism

### Mendelian Randomization Evidence

A Mendelian randomization study using genetic instruments identified causal relationships between statin use and specific gut taxa abundance changes [[zhou-2024-statins-gut-microbiota-abundance-mr]], providing genetic-level evidence that the microbiome effects are real and not confounded by lifestyle factors.

## Bile Acid Connection

Statins' most significant microbiome interaction may operate through bile acid metabolism:

1. Statins reduce hepatic cholesterol, altering bile acid composition
2. Bile acids are potent antimicrobials in the gut -- their composition shapes microbial community structure
3. Gut bacteria with bile salt hydrolase (BSH) activity deconjugate bile acids, affecting their antimicrobial spectrum
4. Secondary bile acid production by gut bacteria (7-alpha-dehydroxylation) generates deoxycholic acid and lithocholic acid
5. These secondary bile acids activate FXR and TGR5 receptors, feeding back to hepatic cholesterol metabolism

This creates a **statin-bile acid-microbiome feedback loop** where the drug alters bile composition, bile composition selects for different microbes, and those microbes further modify bile acids.

### Metal Connection

Bile acids affect metal solubility and absorption in the gut:
- Bile acid-metal complexes influence cadmium, lead, and zinc bioavailability
- Statin-induced bile acid changes could theoretically alter metal absorption patterns
- This remains largely unexplored but represents a hidden metallomics dimension of statin therapy

## Statins and Neurodegeneration

### Parkinson's Disease

The statin-microbiome-Parkinson's connection is complex [[mertsalmi-2023-statins-parkinsons-microbiome]]:

- Epidemiological studies show mixed associations between statin use and PD risk
- Statins' anti-inflammatory effects could protect dopaminergic neurons
- Statins' microbiome effects could improve the gut-brain axis dysfunction seen in [[parkinsons-disease]]
- However, cholesterol is essential for [[alpha-synuclein]] membrane interactions, and excessive lowering could alter protein aggregation dynamics
- Statin-induced changes in bile acid profiles may affect gut-brain signaling via the vagus nerve

### The [[pharmacomicrobiomics]] Implication

Individual microbiome composition may predict statin response. Patients with higher baseline Bacteroides abundance respond differently to statins than those with Firmicutes-dominant microbiomes. This could explain the well-known variability in statin efficacy.

## Anti-Inflammatory Properties

Statins suppress inflammation through multiple pathways relevant to microbiome-disease interactions:

- **NF-kB inhibition**: Reduces LPS-driven inflammatory signaling
- **Isoprenylation block**: Inhibits Rho and Ras GTPase prenylation, reducing immune cell activation
- **eNOS upregulation**: Increases endothelial nitric oxide production -- directly relevant to [[gut-penis-axis]] and cardiovascular protection
- **Reduced CRP**: Consistent anti-inflammatory effect across trials

## Statins and Cancer

Emerging evidence connects statin use to altered cancer risk through microbiome pathways:

- Simvastatin inhibits colorectal cancer cell growth and promotes [[lactobacillus]] expansion in the gut
- Statin-mediated bile acid changes may influence [[fusobacterium-nucleatum]] colonization of tumors
- Anti-inflammatory effects could reduce the chronic inflammation driving colorectal carcinogenesis

## Adverse Effects: A Microbiome Perspective

Common statin side effects may have microbiome components:

- **GI disturbances** (nausea, diarrhea, constipation): Direct microbiome disruption
- **Myopathy**: Gut microbial metabolism of statins affects their systemic bioavailability; high metabolizer microbiomes may reduce active drug reaching target tissues
- **Diabetes risk**: Statins increase T2D risk by ~9%; could this partly reflect microbiome-mediated metabolic changes?

## Open Questions

- Can pre-treatment microbiome profiling predict statin responders vs. non-responders?
- Do statin-induced microbiome changes persist after discontinuation?
- Is the cardiovascular benefit of statins partly microbiome-mediated?
- Can the diabetes-promoting effect of statins be mitigated by concurrent probiotic supplementation?

## Cross-References

- [[pharmacomicrobiomics]] -- drug-microbiome interaction framework
- [[bile-acid-metabolism]] -- statin-bile acid-microbiome loop
- [[drug-repurposing]] -- statins as anti-inflammatory/anticancer agents
- [[cardiovascular-disease]] -- primary indication
- [[parkinsons-disease]] -- neuroprotective debate
- [[atherosclerosis]] -- anti-inflammatory mechanism
