---
title: "Epilepsy — Microbiome Signature"
type: signature
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources: [huang-2019-gut-microbiota-cerebral-palsy-epilepsy, peng-2023-gut-microbiome-brain-metabolic-remodeling-cp-epilepsy, zeng-2023-gut-microbiome-epilepsy-mendelian-randomization, gudan-2022-ketogenic-diet-gut-microbiota-neurological-disorders, huang-2022-oral-gut-microbiota-cpe-correlations]
source_count: 5
tags: [epilepsy, seizure, gut-brain-axis, kynurenine, ketogenic-diet, drug-resistant-epilepsy]

metallomic_signature:
  elevated: [copper, arsenic]
  depleted: [iron, zinc, magnesium]

taxonomic_signature:
  enriched:
    - taxon: "[[akkermansia-muciniphila]]"
      role: "MR-validated risk factor (OR=1.184 general, OR=1.739 focal epilepsy); mucin degradation increases mucosal permeability and immune exposure"
    - taxon: "[[streptococcus]]"
      role: "Enriched in CPE; drives IL-6/TNF-alpha neuroinflammation via KEGG neurodegenerative disease pathways"
    - taxon: "[[enterococcus]]"
      role: "Enriched in CPE; opportunistic colonizer of anticonvulsant-exposed gut"
    - taxon: "[[prevotella]]"
      role: "Enriched in CPE cohorts; may reflect oral-gut translocation"
    - taxon: "[[veillonella]]"
      role: "Lactate fermenter enriched in CPE; produces propionate"
  depleted:
    - taxon: "[[bacteroides]]"
      role: "Primary polysaccharide fermenter and immune educator; loss reduces colonization resistance (P<0.001)"
    - taxon: "[[faecalibacterium-prausnitzii]]"
      role: "Major butyrate producer; depletion impairs anti-inflammatory signaling via gut-brain axis (0.78% in CPE vs normal)"
    - taxon: "[[blautia]]"
      role: "Acetate/propionate producer; loss reduces colonocyte nutrition and anti-inflammatory metabolites"
    - taxon: "[[roseburia]]"
      role: "Butyrate producer; near-complete depletion in CPE (0.00%)"
    - taxon: "[[bacteroides-fragilis]]"
      role: "Immunomodulatory commensal; depleted specifically in CP+epilepsy; linked to kynurenine pathway modulation"

nutritional_immunity:
  elevated: [calprotectin, IL-1beta, IL-6, TNF-alpha]
  depleted: [butyrate, GABA]

ecological_features: [SCFA-depletion, oral-gut-translocation, mucin-degradation, kynurenine-pathway-shunting, neuroinflammation]

virulence_enzymes: [beta-glucosidase, tryptophanase, indoleamine-2-3-dioxygenase-upregulation]

confidence:
  metallomic: preliminary
  taxonomic: moderate
  nutritional_immunity: preliminary
  ecological: moderate
  virulence_enzymes: preliminary

associated_conditions:
  - condition: "[[cerebral-palsy]]"
    shared_metals: [iron-depleted, zinc-depleted]
    shared_taxa: [faecalibacterium-depleted, bacteroides-depleted, blautia-depleted, streptococcus-enriched, akkermansia-enriched]
    shared_ecological: [SCFA-depletion, oral-gut-translocation, neuroinflammation]
    overlap_score: 0.82
  - condition: "[[autism-spectrum-disorder]]"
    shared_metals: []
    shared_taxa: [bacteroides-fragilis-altered, akkermansia-altered]
    shared_ecological: [kynurenine-pathway-shunting, neuroinflammation]
    overlap_score: 0.35
  - condition: "[[depression]]"
    shared_metals: [magnesium-depleted]
    shared_taxa: [faecalibacterium-depleted, blautia-depleted]
    shared_ecological: [SCFA-depletion, kynurenine-pathway-shunting]
    overlap_score: 0.40

cureva_status: partial
validated_interventions: []
stops: []
karen_brain_primitives: [1, 2, 5, 9]
---

# Epilepsy — Microbiome Signature

## Overview

Epilepsy affects ~50 million people worldwide, with ~30% experiencing drug-resistant seizures. The gut-brain axis provides a mechanistic framework for understanding how intestinal dysbiosis modulates seizure thresholds through neuroactive metabolites, immune signaling, and SCFA-mediated neural communication. The strongest clinical evidence for microbiome involvement comes from the ketogenic diet, whose anti-seizure efficacy is abolished by microbiome ablation in animal models [[gudan-2022-ketogenic-diet-gut-microbiota-neurological-disorders]].

This signature draws substantially from cerebral palsy-epilepsy (CPE) comorbidity data, as most microbiome profiling in epilepsy has been conducted in this population. Mendelian randomization provides additional causal evidence for taxa-epilepsy relationships independent of CP [[zeng-2023-gut-microbiome-epilepsy-mendelian-randomization]].

## Metallomic Signature

Confidence: preliminary

Direct metallomic profiling specific to epilepsy is limited. The metal associations derive primarily from the CPE population and infant metal-microbiome studies:

- Iron (depleted): Iron deficiency is common in epilepsy patients, particularly those with CP comorbidity (13-48% prevalence) [[allen-2021-multi-organ-dysfunction-cerebral-palsy]]. Whether this represents true deficiency or hepcidin-mediated sequestration (nutritional immunity) remains unresolved. Anticonvulsant medications may compound iron malabsorption.
- Zinc (depleted): Zinc is critical for GABA-A receptor function and synaptic plasticity. Deficiency amplifies excitatory neurotransmission and may lower seizure thresholds.
- Magnesium (depleted): NMDA receptor antagonist; deficiency permits excessive glutamatergic signaling. Magnesium is a cofactor for >300 enzymes including those in serotonin synthesis.
- Copper (elevated): Copper excess promotes oxidative stress in neural tissue. Elevated Cu/Zn ratios may impair GABAergic signaling.
- Arsenic (elevated): Most influential metal on infant gut microbial alpha diversity [[yan-2025-infant-serum-metals-gut-microbiota]]; environmental arsenic exposure during neurodevelopment may contribute to seizure susceptibility.

## Environmental Exposures

Anticonvulsant medications represent the dominant environmental factor shaping the epilepsy gut microbiome. GABA-ergic antiepileptic drugs are associated with increased constipation and elevated cytokine levels [[ferreira-2021-oral-gut-inflammation-cerebral-palsy]], creating an iatrogenic loop: medications prescribed for seizures alter gut ecology in ways that may perpetuate neuroinflammation. Environmental metal exposures (arsenic, copper, lead) during neurodevelopment are relevant particularly for childhood-onset epilepsy.

## Nutritional Immunity Response

Confidence: preliminary

- Elevated IL-1beta, IL-6, TNF-alpha: Systemic inflammatory markers are elevated in epilepsy, particularly in the CPE population. Salivary IL-1beta correlates strongly with systemic levels (R=0.720) [[ferreira-2021-oral-gut-inflammation-cerebral-palsy]].
- Elevated calprotectin: Intestinal inflammation marker consistent with gut barrier dysfunction.
- Depleted butyrate: The comprehensive loss of butyrate-producing taxa (Faecalibacterium, Roseburia, Blautia, Anaerostipes) creates a profound SCFA deficit. Butyrate normally crosses the BBB and promotes myelination via HDAC inhibition [[wang-2023-microbial-gut-brain-white-matter-preterm]].
- Depleted GABA: Microbial GABA production (from Lactobacillus, Bifidobacterium) is reduced; combined with host GABAergic dysfunction, this lowers seizure threshold.

## Taxonomic Analysis

Confidence: moderate

### Enriched Taxa

[[akkermansia-muciniphila]] is an MR-validated risk factor for epilepsy, with particularly strong association for focal epilepsy (OR=1.739) [[zeng-2023-gut-microbiome-epilepsy-mendelian-randomization]]. Akkermansia degrades mucin, increasing mucosal permeability and exposing the immune system to bacterial antigens. The KEGG functional analysis attributes elevated immune system disease risk to Akkermansia overgrowth [[huang-2019-gut-microbiota-cerebral-palsy-epilepsy]].

[[streptococcus]] (4.70% in CPE) drives neurodegenerative disease risk via KEGG pathway analysis, primarily through IL-6 and TNF-alpha elevation [[huang-2019-gut-microbiota-cerebral-palsy-epilepsy]]. Strong co-occurrence with Actinomyces (r=0.833) suggests an oral-origin consortium.

Betaproteobacteria (class) and Burkholderiales (order) are MR risk factors (OR=1.357 and 1.336 respectively) [[zeng-2023-gut-microbiome-epilepsy-mendelian-randomization]]. Burkholderiales includes metal-tolerant species that thrive in heavy-metal contaminated environments.

### Depleted Taxa

The SCFA-producing community is comprehensively depleted in epilepsy: [[bacteroides]] (from dominant to 10.94%), [[faecalibacterium-prausnitzii]] (0.78%), [[blautia]] (1.44%), Ruminococcus (0.01%), [[roseburia]] (0.00%), and Anaerostipes (0.04%) — all P<0.001 [[huang-2019-gut-microbiota-cerebral-palsy-epilepsy]].

[[bacteroides-fragilis]] and Dialister invisus are depleted specifically in CP+epilepsy (not CP alone), and both are linked to [[kynurenine]] pathway modulation [[peng-2023-gut-microbiome-brain-metabolic-remodeling-cp-epilepsy]]. Their loss may shift tryptophan metabolism toward excitotoxic quinolinic acid.

Eubacterium xylanophilum group is MR-validated as protective (OR=0.816) [[zeng-2023-gut-microbiome-epilepsy-mendelian-randomization]].

## Virulence Enzymes and Features

Confidence: preliminary

- Indoleamine 2,3-dioxygenase (IDO): Upregulated by pro-inflammatory cytokines from Streptococcus/Akkermansia-driven inflammation; shunts tryptophan from serotonin toward kynurenine, producing neurotoxic quinolinic acid.
- Tryptophanase: Microbial enzyme that diverts tryptophan from host serotonin synthesis; its activity is enhanced in the enriched taxa profile.
- Acetate accumulation: With Anaerostipes and Faecalibacterium depleted, their normal co-production of butyrate from acetate is lost, causing acetate to accumulate. Excess acetate activates the parasympathetic nervous system and may directly trigger seizures [[huang-2019-gut-microbiota-cerebral-palsy-epilepsy]].

## Ecological State

Confidence: moderate

The epilepsy gut ecosystem is characterized by:

1. SCFA depletion — Near-total loss of butyrate producers removes a critical anti-inflammatory and neuroprotective metabolite. Butyrate normally crosses the BBB and inhibits HDACs, promoting BDNF expression and myelination.
2. Kynurenine pathway shunting — The balance between neuroprotective kynurenic acid (KA, NMDA antagonist) and neurotoxic quinolinic acid (QUIN, NMDA agonist) shifts toward QUIN under inflammatory conditions. B. fragilis depletion exacerbates this shift [[peng-2023-gut-microbiome-brain-metabolic-remodeling-cp-epilepsy]].
3. Oral-gut translocation — Streptococcus and Prevotella enrichment in the gut reflects oral pathobiont colonization of intestinal niches, particularly relevant in CPE where 96.3% have periodontitis [[huang-2022-oral-gut-microbiota-cpe-correlations]].
4. Mucin degradation — Akkermansia overgrowth degrades the mucus barrier, increasing antigen exposure and perpetuating immune activation.
5. Paradoxical diversity increase — CPE gut has higher Shannon diversity (2.33 vs 1.49) than healthy controls, but this reflects pathobiont expansion into vacated commensal niches, not ecological health [[huang-2019-gut-microbiota-cerebral-palsy-epilepsy]].

## Associated Conditions

### [[cerebral-palsy]] — Overlap Score: 0.82

The highest overlap in the knowledge base. CP and epilepsy share iron/zinc depletion, comprehensive SCFA-producer loss, Streptococcus/Akkermansia enrichment, oral-gut translocation, and neuroinflammatory mechanisms. CP+epilepsy (CPE) has a distinct microbiome from CP without epilepsy, suggesting epilepsy adds a specific ecological perturbation [[huang-2019-gut-microbiota-cerebral-palsy-epilepsy]].

### [[depression]] — Overlap Score: 0.40

Shared magnesium depletion, Faecalibacterium/Blautia depletion, SCFA deficit, and kynurenine pathway shunting. Epilepsy-depression comorbidity is bidirectional and affects 30-50% of epilepsy patients.

### [[autism-spectrum-disorder]] — Overlap Score: 0.35

Shared B. fragilis alterations, Akkermansia changes, kynurenine pathway involvement, and neuroinflammatory mechanisms. Epilepsy occurs in ~30% of ASD patients.

## Open Questions

1. What is the epilepsy-specific metallomic signature independent of CP comorbidity? Dedicated metallomic profiling in epilepsy cohorts without CP is needed.
2. Does the ketogenic diet's anti-seizure mechanism operate primarily through Akkermansia modulation, SCFA profile changes, or ketone body effects on TLR4?
3. Can B. fragilis supplementation restore the KA/QUIN balance and raise seizure thresholds?
4. Is the oral-gut translocation pathway (Streptococcus, Prevotella) a modifiable target through periodontal treatment?
5. How do anticonvulsant medications interact with the gut microbiome — are some drug classes more ecologically disruptive than others?

## Karen's Brain Primitives Active

- Primitive 1 (Metals as Selective Pressures): Iron and zinc depletion shape the microbial community, favoring taxa that are less dependent on these metals. Copper and arsenic exposure may select for tolerant organisms like Burkholderiales.
- Primitive 2 (Nutritional Immunity as Interpretive Constraint): Iron deficiency in epilepsy patients (13-48%) may represent host defense rather than true deficiency — supplementation could fuel siderophore-producing pathobionts.
- Primitive 5 (Two-Sided Ecological Engineering): The ketogenic diet exemplifies this — it simultaneously enriches Akkermansia and suppresses Enterobacteriaceae, reshaping the ecosystem rather than targeting single organisms.
- Primitive 9 (Oxygen State as Ecological Determinant): Constipation (26-74% in CPE) alters colonic oxygen gradients, favoring facultative anaerobes over obligate anaerobic SCFA producers.
