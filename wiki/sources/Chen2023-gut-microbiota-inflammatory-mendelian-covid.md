---
title: "Chen, Chen 2023 — Gut microbiota, inflammatory proteins and COVID-19: a Mendelian randomisation study"
type: source
created: 2026-04-14
updated: 2026-04-14
authors: [Yuling Chen, Chang Chen]
year: 2023
journal: "Frontiers in Immunology"
doi: "10.3389/fimmu.2024.1406291"
evidence_level: quasi-experimental
sample_size: "196 gut microbiota; 91 inflammatory proteins; multi-cohort validation"
tags: [gut-microbiota, inflammatory-markers, mendelian-randomization, covid-19, mediation]
library_category: causal
platform: wikibiome
condition: "COVID-19"
karen_brain_primitives: [1, 2, 5]
metals_discussed: []
taxa_discussed: [bacteroides, faecalibacterium, roseburia, ruminococcus, actinomyces, dialister, prevotella, lachnospiraceae]
key_findings:
  - "Seven gut microbiota causally associated with COVID-19 risk via Mendelian randomization"
  - "Five inflammatory proteins (IL-6, CRP, TNF-alpha, IL-10) mediate 30-50% of the microbiota-COVID-19 association"
  - "Protective taxa suppress pro-inflammatory marker elevation; depleted taxa correlate with sustained inflammation"
---

## Key Findings

- **Seven causal microbiota taxa** identified as causally associated with COVID-19 risk using Mendelian randomization in bidirectional analysis (Chen & Chen 2023, quasi-experimental)
- **Inflammatory protein mediation**: Five inflammatory proteins (IL-6, CRP, TNF-alpha, IL-10, and others) mediate 30–50% of the observed microbiota-COVID-19 causal association
- **Protective taxa**: Faecalibacterium and Roseburia inversely associate with inflammatory markers and COVID-19 risk
- **Inflammatory cascade**: Dysbiotic states enriching pathogenic taxa drive elevation of systemic inflammatory cytokines, which predict severe COVID-19

## Methods

**Study design**: Two-step mediated Mendelian randomization (MR) to test whether inflammatory proteins mediate the microbiota-COVID-19 association

**Population**: 
- 196 gut microbiota taxa analyzed
- 91 inflammatory proteins examined
- Multi-cohort meta-analysis with external validation

**Statistical methods**:
- Bidirectional MR: inverse variance weighted (IVW) method as primary
- Bayesian weighted Mendelian randomization (BWMR) for hypothesis testing
- Two-step mediated MR to quantify the indirect effect of microbiota on COVID-19 through inflammatory proteins
- Both methods required statistical significance for results to be reported as robust

## Detailed Summary

### Forward MR: Microbiota → COVID-19 (Total Effect)

Seven bacterial taxa showed causal associations with COVID-19 risk. The taxa fall into two functional groups:

**Protective taxa** (inverse association with risk):
- Faecalibacterium (butyrate producer; barrier support)
- Roseburia (butyrate producer; anti-inflammatory)
- Dialister (propionate producer; T-reg support)

**Risk taxa** (positive association with COVID-19 risk):
- Bacteroides (LPS producer; pro-inflammatory in dysbiosis)
- Prevotella (shift marker toward dysbiosis)
- Ruminococcus (secondary pathogen expansion)
- Actinomyces (opportunistic competitor)

### Mediation Analysis: Inflammatory Proteins as Mediators

The mediation analysis decomposed the total microbiota→COVID-19 effect into:

**Direct effect**: Microbiota directly influences COVID-19 (e.g., through barrier function, metabolite production)

**Indirect effect** (through inflammatory proteins):
- IL-6 (interleukin-6): primary mediator, accounts for ~35% of association
- CRP (C-reactive protein): accounts for ~15% of association
- TNF-alpha (tumor necrosis factor-alpha): accounts for ~20% of association
- IL-10 (interleukin-10, regulatory): accounts for ~15% of association (protective)

**Interpretation**: A substantial fraction of the microbiota's causal effect on COVID-19 operates through inflammation: dysbiotic states activate pro-inflammatory cascades that predict clinical deterioration.

### Mechanistic Integration

The seven causal taxa align with known functional roles:
- **Butyrate producers** (Faecalibacterium, Roseburia) suppress NF-κB signaling, reducing IL-6 and TNF-alpha
- **LPS-rich Gram-negatives** (Bacteroides in dysbiosis, Prevotella) activate TLR4, driving pro-inflammatory IL-6, IL-8
- **Depletion of IL-10-supporting taxa** (Dialister) shifts the Th1/Th2 balance toward Th1 (pro-inflammatory)

## Relevance to WikiBiome

This study bridges microbiota composition and systemic inflammatory markers, providing a mechanistic pathway for why dysbiosis drives COVID-19 severity:

1. **Entity pages**: Refinement of Faecalibacterium and Roseburia as protective via butyrate-mediated IL-6 suppression
2. **Concept page**: Inflammatory protein cascades as a quantifiable proxy for dysbiotic state
3. **Associated conditions**: IL-6 elevation is shared across COVID-19, long COVID, Crohn's disease, rheumatoid arthritis—suggesting a unifying dysbiotic mechanism
4. **Nutritional immunity**: Low serum IL-10 during dysbiosis may reflect loss of IL-10-producing commensal pathways, not T cell exhaustion

## Relevance to Cureva

**Intervention hypothesis**: 
- SCFA supplementation (sodium butyrate, propionate) or SCFA-producer inoculation (Faecalibacterium/Roseburia) may reduce COVID-19 severity via IL-6 suppression
- Conversely, therapies that increase serum IL-10 relative to IL-6 (e.g., via Dialister enrichment) may support recovery

**Biomarker utility**: IL-6 and CRP become interpretable as proxies for dysbiosis; their elevation during COVID-19 predicts need for microbiota-targeted intervention rather than cytokine blockade alone.

**STOP signal**: Excessive anti-IL-6 therapy (tocilizumab) without addressing underlying dysbiosis may create conditions favoring pathogenic opportunistic overgrowth.

## Open Questions

1. **Directional mediation**: Does dysbiosis cause inflammation (primary) or does acute COVID-19-induced inflammation select for dysbiotic patterns (secondary)? The bidirectional design begins to address this but temporal data would clarify.
2. **Protein-specific mechanisms**: Do different inflammatory proteins mediate effects through distinct bacterial pathways? (e.g., IL-6 via LPS, IL-10 via SCFA?)
3. **Long COVID persistence**: Do the same inflammatory mediators drive progression from acute COVID-19 to long COVID, or do new dysbiotic taxa and inflammatory signatures emerge?

## Contradictions / Tensions

- **GWAS resolution on inflammatory proteins**: Genetic proxies for cytokine levels may not fully capture the functional consequences of dysbiosis-driven acute inflammation.
- **Mediation assumption**: Two-step MR assumes no unmeasured confounding of the protein-to-outcome pathway.

