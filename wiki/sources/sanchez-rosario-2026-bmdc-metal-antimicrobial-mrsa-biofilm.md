---
title: "Sanchez-Rosario 2026 — N-benzyl-N-methyldithiocarbamate (BMDC) Combines with Metals to Produce Antimicrobial and Anti-Biofilm Activity Against MRSA and S. epidermidis"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Yamil Sanchez-Rosario, Natasha R Cornejo, Isaiah S Gonzalez, Vanessa Brizuela, Klariza Ochoa, Chloe Scott, Michael D L Johnson, Paul D Fey]
year: 2026
journal: "mSphere"
doi: "not yet verified"
pmcid: "PMC12838442"
tags: [mismetallation, metal-homeostasis, copper, copper-toxicity, zinc, zinc-toxicity, MRSA, staphylococcus-aureus, staphylococcus-epidermidis, biofilm, antimicrobial-metals, Irving-Williams-series, nutritional-immunity]
library_category: metal_homeostasis_bacteria
platform: wikibiome
condition: "copper and zinc intoxication as antimicrobial strategy against staphylococci"
metals_discussed: [copper, iron, manganese, zinc]
taxa_discussed: [staphylococcus-aureus]
karen_brain_primitives: [3, 4]
key_findings: ["BMDC enhances intracellular copper accumulation 70-fold", "Copper-BMDC is bacteriostatic"]
---

# Why This Paper Matters

This study demonstrates that a dithiocarbamate compound (BMDC) can be combined with either [[copper]] or [[zinc]] to kill methicillin-resistant [[staphylococcus-aureus]] (MRSA) and S. epidermidis, including within established biofilms. For the [[mis-metallation]] framework, the paper explicitly identifies mis-metalation as a key mechanism of copper intoxication -- "where copper displaces native metal cofactors in proteins, disrupting the function of critical enzymes, including redox sensors and iron-sulfur containing proteins." The copper-BMDC combination increases intracellular copper 70-fold within 30 minutes, overwhelming bacterial metal export capacity. The paper also connects to [[nutritional-immunity]], noting that macrophages mobilize copper and zinc to sites of infection at concentrations up to 500 uM. The Irving-Williams series is invoked to explain why copper and zinc are particularly effective at displacing other essential metals from protein binding sites.

# Key Claims

- **BMDC enhances intracellular copper accumulation 70-fold** compared to copper alone within 30 minutes, likely by functioning as a copper ionophore
- **Copper-BMDC is bacteriostatic** within 4 hours; zinc-BMDC is bactericidal within 24 hours -- different mechanisms for each metal
- **Mis-metalation is explicitly identified** as a key mechanism: copper displaces native metal cofactors from redox sensors and iron-sulfur proteins
- **Both metal-BMDC combinations eradicate established biofilms**, performing as effectively as vancomycin in reducing biofilm biomass
- **Copper alone paradoxically increases biofilm formation** by being incorporated into the protein component of the biofilm matrix (Cu2+ oxidation state confirmed)
- **Small colony variants (SCVs)** form under sublethal metal-BMDC exposure, indicating metabolic perturbation but reversibility upon stress removal
- **Peroxide levels increase 30% with copper-BMDC** and approximately 100-fold with zinc-BMDC, consistent with Fenton chemistry and oxidative stress
- **Manganese levels decrease significantly** after metal-BMDC treatment, potentially compromising SOD function and oxidative stress defense

# Methods & Findings

## Intracellular Metal Accumulation (ICP-OES)

| Treatment | Cu change | Zn change | Mn change | Mg change |
|-----------|----------|----------|----------|----------|
| Copper alone | Baseline increase | -- | -- | -- |
| Copper-BMDC | 70-fold increase | No significant change | Decreased | Decreased |
| Zinc alone | -- | No significant change | -- | -- |
| Zinc-BMDC | -- | No significant increase | Decreased | Decreased |

The critical finding that zinc levels do not increase with zinc-BMDC treatment suggests that zinc-BMDC toxicity operates through a different mechanism than copper-BMDC -- possibly through extracellular zinc-mediated disruption of manganese transport rather than intracellular zinc flooding.

## Differential Killing Mechanisms

**Copper-BMDC**: Acts as ionophore, dramatically increasing intracellular copper. Copper then:
1. Displaces iron from Fe-S clusters (mis-metalation)
2. Catalyzes Fenton chemistry (Cu+ + H2O2 -> Cu2+ + OH- + OH radical)
3. Disrupts redox sensor function
4. Reduces metabolic activity by 84%

**Zinc-BMDC**: Does not increase intracellular zinc. Instead likely:
1. Disrupts manganese transport at the cell surface
2. Prevents adaptation since zinc-BMDC targets a critical pathway
3. Produces gradual bactericidal effect (below detection by 24h)
4. Increases peroxide ~100-fold

## Biofilm Dynamics

Copper alone increases biofilm production -- an unexpected finding. ICP-OES confirmed copper accumulation in the biofilm, and proteinase K treatment (but not DNase or NaIO4) disrupted copper-enriched biofilms, indicating copper binds to the protein component. BMDC reverses this effect, sensitizing biofilm bacteria to copper toxicity. The biofilm results extend to S. epidermidis on ultra-high molecular weight polyethylene (prosthetic implant material).

## Combinatorial Potential with Vancomycin

30 uM copper + 16 uM BMDC + 2 uM vancomycin (subinhibitory dose) produced bacteriostatic effects for nearly 24 hours, suggesting metal-BMDC could reduce required vancomycin doses.

# Connections

- [[mis-metallation]] -- copper displacing native metal cofactors explicitly identified as toxicity mechanism
- [[copper]] -- 70-fold intracellular copper increase via BMDC ionophore activity
- [[zinc]] -- zinc-BMDC toxicity through manganese transport disruption rather than zinc accumulation
- [[iron-sulfur-clusters]] -- copper displaces iron from Fe-S clusters, a primary target of metal intoxication
- [[nutritional-immunity]] -- macrophage copper/zinc mobilization mimicked by metal-BMDC treatment
- [[staphylococcus-aureus]] -- MRSA as target pathogen; SCV formation under metal stress
- [[biofilm]] -- copper incorporation into biofilm matrix; metal-BMDC disrupts established biofilms
- [[oxidative-stress]] -- Fenton chemistry from copper, peroxide generation from both metals
- [[manganese]] -- depletion compromises SOD-dependent antioxidant defense
- [[irving-williams-series]] -- thermodynamic basis for copper and zinc displacing other metals
- [[antimicrobial-metals]] -- BMDC as metal-potentiating antimicrobial strategy
