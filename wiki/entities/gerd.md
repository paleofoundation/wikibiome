---

title: Gastroesophageal Reflux Disease (GERD)
type: entity
subtype: disease
created: 2026-04-09
updated: 2026-04-16
sources: [yousaf-2021-low-nickel-diet-gerd, alageel-2025-microbiome-composition-gerd-systematic-review, alnaim-2025-dietary-interventions-pediatric-gerd-systematic-review, liang-2021-hpylori-oral-microbiota-reflux-esophagitis, kucharczyk-2024-innovative-therapeutic-strategies-gerd-review, wang-2024-causal-gut-microbiota-gerd-bidirectional-mr, shi-2023-ppi-fungal-dysbiosis-gerd]
source_count: 7
tags: [gastrointestinal, nickel, microbiome, PPIs, esophageal-microbiome, dysbiosis, mycobiome, candida, mendelian-randomization, actinobacteria, lachnospiraceae, fungal-dysbiosis]
platform: wikibiome
last_substantive_update: 2026-04-16
associated_conditions: [ibs, gastric-cancer, celiac-disease, barretts-esophagus, sibo]
shared_signature_metals: {ibs: [nickel], gastric-cancer: [nickel], celiac-disease: [iron, zinc]}
shared_signature_taxa: {ibs: [helicobacter-pylori, prevotella], gastric-cancer: [helicobacter-pylori, leptotrichia], celiac-disease: [bifidobacterium-depleted], barretts-esophagus: [prevotella, veillonella, leptotrichia]}
seo_target: "GERD nickel allergy microbiome esophageal low nickel diet"
wikipedia_differentiation: "Nickel hypersensitivity as driver of refractory GERD with 95% improvement on low-nickel diet, plus PPI-microbiome disruption axis showing iatrogenic dysbiosis from acid suppression"
---

# Gastroesophageal Reflux Disease (GERD)

## Overview

Gastroesophageal reflux disease (GERD) is a chronic condition in which stomach acid or bile flows back into the esophagus, causing mucosal damage and symptoms such as heartburn and regurgitation. Affecting approximately 20% of Western populations, GERD is conventionally treated with proton pump inhibitors (PPIs), H2 blockers, and lifestyle modifications. An emerging and underappreciated dimension of GERD involves nickel hypersensitivity, esophageal microbiome disruption, and the complex relationship between *Helicobacter pylori* colonization and reflux pathology. The PPI-microbiome axis further complicates the disease by introducing iatrogenic metal and microbial perturbations.

## Metal Angle: Nickel Sensitivity

The most striking metal connection in GERD is the role of dietary nickel in refractory disease. Yousaf et al. (2021) demonstrated that a low-nickel diet improved symptoms in **95% of refractory GERD patients** who had confirmed nickel allergy via patch testing. This finding reframes a substantial subset of treatment-resistant GERD as a manifestation of systemic [[nickel-allergy]] rather than purely a motility or acid-secretion disorder.

### Mechanisms of Nickel-Mediated GERD
- Dietary nickel is abundant in legumes, nuts, whole grains, chocolate, and canned foods -- staples of many "healthy" diets
- Systemic nickel allergy can trigger mucosal inflammation in the esophagus and stomach upon ingestion of high-Ni foods
- Nickel-induced mast cell degranulation in esophageal tissue releases histamine, which stimulates acid secretion
- The overlap between nickel sensitivity and eosinophilic esophagitis (EoE) may explain some refractory cases misdiagnosed as GERD
- Patch testing for nickel allergy is not part of standard GERD workup, leading to chronic underdiagnosis

### Dietary Nickel Exposure
- Average dietary nickel intake ranges from 100-600 ug/day depending on food choices
- Plant-based and whole-food diets tend to be higher in nickel, creating a paradox where "healthier" diets may worsen GERD in nickel-sensitive individuals
- See [[dietary-nickel-exposure]] for detailed food-level nickel content data

## Helicobacter pylori Relationship

The relationship between *H. pylori* and GERD is controversial and paradoxical:

- **H. pylori may be protective against GERD**: Multiple epidemiological studies show an inverse relationship between *H. pylori* prevalence and GERD/esophageal adenocarcinoma rates
- *H. pylori* eradication has been associated with **increased** GERD symptoms in some patients, particularly those with corpus-predominant gastritis where the bacterium was suppressing acid secretion
- However, *H. pylori* is a clear risk factor for peptic ulcer disease and gastric cancer, creating a clinical dilemma
- The "African enigma" -- high *H. pylori* prevalence in Africa with low GERD rates -- supports the protective hypothesis
- See [[helicobacter-pylori]] for the broader metal-microbiome interactions of this organism, including its nickel-dependent urease and hydrogenase enzymes

## Causal Microbiome-GERD Relationships

Mendelian randomization now provides causal-level evidence linking specific gut microbial taxa to GERD risk in both directions [[wang-2024-causal-gut-microbiota-gerd-bidirectional-mr]] (n=78,707 GERD cases, 288,734 controls):

### Protective Taxa (Causally Reduce GERD Risk)
| Taxon | Level | OR (95% CI) | P-value | Mechanism |
|-------|-------|-------------|---------|-----------|
| Clostridiales Vadin BB60 group | Family | 0.95 (0.91–0.99) | 0.027 | SCFA producer |
| Lachnospiraceae UCG004 | Genus | 0.91 (0.84–0.99) | 0.026 | Butyrate/SCFA producer |
| Methanobrevibacter | Genus | 0.95 (0.91–0.99) | 0.026 | Methane/SCFA ecology |
| Actinobacteria | Phylum | 0.93 (0.88–0.99) | 0.019 | Antibiotic production, immune modulation |

All four protective taxa are contributors to **short-chain fatty acid (SCFA) biosynthesis**. SCFAs (acetate, propionate, butyrate) are critical for colonocyte energy, intestinal barrier integrity, and motility regulation — directly relevant to lower esophageal sphincter (LES) function and mucosal protection.

### Risk-Increasing Taxa (Causally Increase GERD Risk)
| Taxon | Level | OR (95% CI) | P-value |
|-------|-------|-------------|---------|
| Class Mollicutes | Class | 1.09 (1.01–1.19) | 0.037 |
| Genus Anaerostipes | Genus | 1.09 (1.01–1.16) | 0.017 |
| Phylum Tenericutes | Phylum | 1.11 (1.01–1.22) | 0.024 |

### GERD Causes Dysbiosis: The Bidirectional Vicious Cycle

In reverse MR (GERD → microbiome), GERD itself had causal influence on 13 taxa [[wang-2024-causal-gut-microbiota-gerd-bidirectional-mr]]:
- **Depleted by GERD**: Phylum Euryarchaeota (OR=0.82), Family Christensenellaceae (OR=0.85), Family Rikenellaceae (OR=0.88), Genus Rikenellaceae RC9 gut group (OR=0.78), Genus Ruminococcaceae NK4A214 (OR=0.89), Genus Anaerotruncus (OR=0.90), Genus Christensenellaceae R7 (OR=0.90)
- **Enriched by GERD**: Collinsella (OR=1.15), Eggerthella (OR=1.24), Eubacterium rectale group (OR=1.12), Eubacterium ventriosum group (OR=1.12)

This bidirectional causality establishes GERD as both a consequence and a driver of dysbiosis — a self-reinforcing loop where acid reflux depletes protective SCFA-producing communities, further impairing mucosal defense and perpetuating reflux.

## Esophageal and Gut Microbiome Signature

Across 11 studies (2015–2025) [[alageel-2025-microbiome-composition-gerd-systematic-review]]:

### Healthy vs GERD Microbiome
- Healthy esophagus: dominated by *Streptococcus* and gram-positive aerobes (Type I microbiome)
- GERD and Barrett's esophagus: shift toward gram-negative anaerobes — **Veillonella, Prevotella, Fusobacterium, Neisseria** (Type II microbiome)
- This dysbiotic shift activates TLR2/TLR4 signaling: **TLR2 expression elevated 2.1-fold** and **claudin-1 (tight junction protein) decreased 47%** in GERD patients with gram-negative dysbiosis, providing a direct molecular mechanism for barrier failure [[alageel-2025-microbiome-composition-gerd-systematic-review]]

### Progression Signature: GERD → Barrett's → Esophageal Adenocarcinoma
Lopetuso et al. (2020, n=26) documented the microbiome transition across disease stages:
- **Streptococcus** ↓45% from BE to EAC
- **Prevotella** ↑60%, **Veillonella** ↑52%, **Leptotrichia** ↑48% in Barrett's and EAC
- **Leptotrichia** identified as key EAC biomarker — its enrichment may reflect the increasingly anaerobic, gram-negative ecology of pre-malignant esophageal tissue

### GERD and SIBO
- SIBO prevalence significantly higher in GERD patients (P=0.007) [[alageel-2025-microbiome-composition-gerd-systematic-review]]
- *Bacteroides uniformis* (28%) and *Bacteroides stercoris* (22%) dominant in GERD+SIBO
- **ABC transporter metabolism altered** in SIBO-GERD overlap, with 288 differential metabolites including arachidonic acid pathway disruption — suggesting systemic metabolic consequences beyond the upper GI tract

### Oral-Esophageal Translocation
- Reflux events promote retrograde movement of gastric microbiota into the esophagus
- Oral microbiome in GERD patients is dominated by *Prevotella* and *Haemophilus* (n=266) — consistent with oral-esophageal translocation driving dysbiosis [[alageel-2025-microbiome-composition-gerd-systematic-review]]
- Periodontal pathogens detected in Barrett's esophagus tissue suggest chronic oral-esophageal microbial seeding

## PPI Effects on Gut and Fungal Microbiome

PPIs are the most widely prescribed GERD therapy, but their effects extend far beyond acid suppression — including a profound and underappreciated fungal dimension.

### Bacterial Effects of PPI
- **Increased Enterobacteriaceae**: PPIs reduce gastric acid barrier, allowing expansion of pathogenic gram-negative enteric bacteria
- **Increased *Streptococcus***: Oral streptococci colonize the gut when gastric pH is elevated
- **Decreased *Bifidobacterium***: PPI-treated infants show *Firmicutes* increase to 65% relative abundance vs. *Bifidobacterium* dominance (72%) in controls; PPI duration correlated with alpha-diversity (r=0.42, P=0.01) [[alageel-2025-microbiome-composition-gerd-systematic-review]]
- **Increased CDI risk**: PPI use associated with 1.5-2.7x increased risk of *Clostridioides difficile* infection
- **Metal absorption interference**: PPIs reduce absorption of magnesium, calcium, iron, and zinc by raising gastric pH — potentially compounding metal deficiencies
- **SIBO risk**: Small intestinal bacterial overgrowth more common in chronic PPI users

### Fungal (Mycobiome) Effects of PPI

A critical and largely overlooked dimension of PPI therapy is its promotion of **fungal dysbiosis** [[shi-2023-ppi-fungal-dysbiosis-gerd]] (cross-sectional, n=65; gastric mucosal and fecal ITS sequencing):

- ***Candida* detected in 96.9%** of gastric mucosal samples from PPI-treated GERD patients (mean 43.59%, median 38.84%), significantly higher than untreated GERD and healthy controls
- PPI increases gastric mucosal *Candida* relative abundance significantly (P<0.05 vs. both nt-GERD and HC)
- **Plateau effect**: No significant difference between short-term (average 6 months) and long-term (average 2 years) PPI users — *Candida* colonization reaches maximum within approximately 2 months
- Gastric mucosal fungal alpha diversity significantly reduced in PPI-treated patients (Shannon, Chao1; P<0.05 vs. HC)
- **Fecal mycobiome**: Distinct from HC in GERD patients regardless of PPI status (ANOSIM R=0.12, P=0.004); Shannon diversity lower in untreated GERD vs. HC (P=0.021) — confirming a baseline fungal dysbiosis intrinsic to GERD itself
- **Additional fungi enriched in PPI groups**: *Nothojafnea*, *Rhizodermea*, *Ambispora*, *Saccharicola* (long-term PPI); *Alternaria*, *Aspergillus*, *Mycenella*, *Exserohilum*, *Clitopilus* (short-term PPI)

**Mechanism**: PPI-driven pH elevation removes the acid barrier that normally prevents *Candida* colonization, while simultaneously depleting acid-tolerant *Lactobacillus* species that competitively suppress *Candida* via displacement from epithelial surfaces.

**Clinical implication**: *Candida* dysbiosis may contribute to **persistent symptoms** in PPI-treated GERD through visceral hypersensitivity — consistent with evidence that intestinal fungal dysbiosis drives visceral hypersensitivity in IBS. This may explain why many long-term PPI users continue to report reflux symptoms despite adequate acid suppression.

## Research Patterns and Observed Associations

| Observation | Evidence Summary |
|-------------|-----------------|
| **Nickel sensitivity and GERD** | A low-nickel diet improved symptoms in 95% of refractory GERD patients with confirmed nickel allergy [[yousaf-2021-low-nickel-diet-gerd]] |
| **PPI and microbiome disruption** | Chronic PPI use is associated with Enterobacteriaceae expansion, CDI risk (1.5–2.7x), Bifidobacterium depletion, Candida colonization (96.9% in treated patients), and SIBO — effects extend to bacterial, fungal, and mineral absorption dimensions [[shi-2023-ppi-fungal-dysbiosis-gerd]] [[alageel-2025-microbiome-composition-gerd-systematic-review]] |
| **H. pylori and reflux** | H. pylori eradication has been associated with increased GERD symptoms in some patients, particularly those with corpus-predominant gastritis where H. pylori was suppressing acid output |
| **SCFA producers and GERD risk** | Genetically higher abundance of Lachnospiraceae UCG004 and Clostridiales Vadin BB60 are associated with reduced GERD risk by MR [[wang-2024-causal-gut-microbiota-gerd-bidirectional-mr]] |

## Associated Conditions

GERD shares microbiome and ecological features with several related conditions:

| Condition | Shared Taxa | Shared Ecological Features |
|-----------|-------------|---------------------------|
| **Barrett's esophagus** | Prevotella ↑, Veillonella ↑, Leptotrichia ↑, Streptococcus ↓ | Gram-negative anaerobe dominance; LPS-driven inflammation |
| **Esophageal adenocarcinoma** | Leptotrichia ↑↑ (key EAC biomarker) | Progressive gram-negative enrichment; Streptococcus ↓45% |
| **IBS** | H. pylori overlap; altered Firmicutes/Bacteroidetes | Visceral hypersensitivity; SIBO; altered motility |
| **SIBO** | Bacteroides uniformis ↑, B. stercoris ↑ | Small intestinal bacterial overgrowth; ABC transporter metabolite disruption |
| **Gastric cancer** | H. pylori (driver); microbiome dysbiosis shared | Chronic mucosal inflammation; acid perturbation |

The GERD→Barrett's→EAC progression represents a well-documented example of how microbiome-driven inflammation can fuel oncogenic transformation — the *Leptotrichia* biomarker story being a potentially clinically actionable example.

## Open Questions

1. What proportion of refractory GERD is attributable to undiagnosed nickel allergy?
2. Does nickel content in PPIs themselves (trace contamination) contribute to treatment failure in nickel-sensitive patients?
3. Can esophageal microbiome profiling predict progression from GERD to Barrett's esophagus — specifically, does *Leptotrichia* enrichment precede endoscopic changes?
4. Is *H. pylori* eradication net beneficial or harmful in GERD patients specifically?
5. Does treating SIBO in GERD patients improve reflux symptoms independent of acid suppression?
6. Does antifungal therapy in PPI-treated GERD patients improve persistent symptoms by reducing *Candida*-driven visceral hypersensitivity?
7. Can restoring SCFA-producing taxa (Lachnospiraceae UCG004, Clostridiales Vadin BB60) interrupt the GERD-dysbiosis self-reinforcing cycle identified by bidirectional MR?

## Key Sources

- [[yousaf-2021-low-nickel-diet-gerd]]
- [[alageel-2025-microbiome-composition-gerd-systematic-review]]
- [[wang-2024-causal-gut-microbiota-gerd-bidirectional-mr]]
- [[shi-2023-ppi-fungal-dysbiosis-gerd]]
- [[alnaim-2025-dietary-interventions-pediatric-gerd-systematic-review]]
- [[liang-2021-hpylori-oral-microbiota-reflux-esophagitis]]
- [[kucharczyk-2024-innovative-therapeutic-strategies-gerd-review]]

## Connections

- [[nickel-allergy]] -- Low-Ni diet improved 95% of refractory GERD; systemic nickel allergy as overlooked GERD etiology
- [[helicobacter-pylori]] -- Controversial protective relationship; nickel-dependent urease enzyme; protective against GERD through acid suppression in corpus-predominant gastritis
- [[dietary-nickel-exposure]] -- High-Ni foods as triggers; plant-based diet paradox in nickel-sensitive patients
- [[probiotics]] -- Potential to mitigate PPI-induced dysbiosis; restore SCFA-producing taxa
- [[dysbiosis]] -- Esophageal microbiome shift from Type I to Type II; PPI-driven gut and fungal dysbiosis
- [[actinobacteria]] -- Causally protective against GERD (OR=0.93); also protective against PPD and MDD — shared cross-condition pattern
- [[lachnospiraceae]] -- Causally protective (OR=0.91); SCFA production as mechanism; depleted across multiple GI diseases
- [[candida-albicans]] -- PPI-promoted expansion in gastric mucosa (96.9% detection); potential driver of persistent symptoms through visceral hypersensitivity
- [[barretts-esophagus]] -- Microbiome progression: Leptotrichia ↑48%, Streptococcus ↓45% from GERD to EAC
- [[sibo]] -- Significantly associated with GERD (P=0.007); ABC transporter metabolite disruption in overlap
