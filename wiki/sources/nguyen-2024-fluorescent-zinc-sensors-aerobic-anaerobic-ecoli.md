---
title: "Nguyen 2024 — Fluorescent Protein-Based Zn2+ Sensors Reveal Distinct Responses of Aerobic and Anaerobic E. coli Cultures to Excess Zn2+"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Hazel N Nguyen, Uyen Huynh, Melissa L Zastrow]
year: 2024
journal: "Journal of Biological Chemistry"
doi: "10.1016/j.jbc.2024.107890"
tags: [mismetallation, metal-homeostasis, zinc, zinc-toxicity, biosensor, fluorescent-protein, CreiLOV, anaerobic, aerobic, oxygen, Escherichia-coli, labile-zinc, zinc-uptake, gut-microbiota]
library_category: metal_homeostasis_bacteria
platform: wikibiome
condition: "oxygen-dependent zinc homeostasis"
metals_discussed: [iron, zinc]
taxa_discussed: [escherichia-coli]
karen_brain_primitives: [1, 3, 4, 9]
key_findings: ["CreiLOVN41C"]
---

# Why This Paper Matters

This paper introduces an oxygen-independent fluorescent zinc sensor (CreiLOVN41C) and uses it alongside oxygen-dependent FRET-based sensors to reveal that **oxygen levels dramatically impact zinc uptake and homeostasis in E. coli**. Aerobically grown cells acquire significantly more zinc from the medium than anaerobically grown cells, and anaerobic cells require higher external zinc concentrations to achieve comparable intracellular labile zinc levels. For the wiki's [[mis-metallation]] framework, this is crucial because it demonstrates that the same bacterium in the same medium has fundamentally different zinc handling depending on oxygen -- directly relevant to gut bacteria that transition between aerobic and anaerobic zones, and to pathogens that encounter different oxygen tensions during infection.

# Key Claims

- **CreiLOVN41C** is the first oxygen-independent fluorescent protein-based zinc sensor, based on a flavin-binding LOV domain with Kd = 1 nM for Zn2+ and 0.066 fM for Cu2+
- **Aerobically grown E. coli** accumulates significantly more total zinc (measured by ICP-MS) when zinc is added to the medium; anaerobically grown cells do NOT accumulate additional zinc
- **Labile intracellular zinc** was detected in E. coli under all conditions tested, but anaerobic cells required higher external Zn2+ to achieve comparable sensor responses
- Neither oxygen-independent (CreiLOVN41C) nor oxygen-dependent (ZapCY1-2) sensors detected **endogenous** labile zinc in aerobically grown E. coli in 2 mM added ZnCl2
- In **real-time Zn2+ influx experiments**, anaerobic cells required more Zn2+ to elicit a sensor response comparable to aerobic cells, confirming reduced zinc uptake under anaerobic conditions
- Zn2+ gluconate was **less toxic** to aerobically grown E. coli than ZnCl2 at high concentrations, but both were similarly detrimental anaerobically
- Total cellular zinc content is ~10^5 atoms/bacterial cell (~0.1-0.5 mM total), divided into a large inaccessible pool (protein-bound) and a smaller labile pool
- The findings have implications for **gut bacteria** that frequently encounter anaerobic conditions and varied zinc bioavailability

# Methods & Findings

## Sensor Development
- CreiLOVN41C: flavin-binding, oxygen-independent, Kd = 1 nM for Zn2+
- ZapCY2: GFP-based FRET sensor, oxygen-dependent, Kd = 0.8-1.0 nM for Zn2+
- Both sensors have similar zinc affinity but different oxygen requirements for chromophore maturation
- CreiLOVN41C enables zinc sensing in obligate anaerobes for the first time

## Aerobic vs. Anaerobic Zinc Handling
- ICP-MS: aerobic E. coli increased total Zn content with medium supplementation; anaerobic did not
- Growth kinetics: both aerobic and anaerobic growth impaired by >1 mM Zn2+; anaerobic more sensitive (reduced max OD)
- Aerobic cells: Zn2+ increased lag time and decreased growth rate without affecting max OD
- Anaerobic cells: Zn2+ decreased max OD, suggesting different toxicity mechanism

## Real-Time Zinc Sensing
- CreiLOVN41C fluorescence quenched by endogenous zinc in aerobic cells at ~0.5-1.0 mM medium ZnCl2
- Anaerobic cells required ~2.0 mM ZnCl2 for comparable quenching
- Real-time Zn2+ pulse: aerobic cells responded to lower Zn2+ additions than anaerobic cells
- Suggests oxygen-dependent zinc transporters or oxygen-modulated zinc speciation affects uptake

# Connections

- [[mis-metallation]] -- oxygen-dependent zinc handling means aerobic/anaerobic transitions alter mis-metallation risk
- [[zinc]] -- labile zinc pool dynamics differ between aerobic and anaerobic growth
- [[metal-homeostasis]] -- oxygen as previously unappreciated modulator of zinc homeostasis
- [[gut-microbiome]] -- gut bacteria encounter variable oxygen and zinc; this tool enables study in native conditions
- [[nutritional-immunity]] -- host zinc restriction occurs in both aerobic and anaerobic tissue compartments
- [[iron]] -- iron homeostasis is known to change with oxygen; zinc now shown to behave similarly
- [[metal-sensing]] -- CreiLOVN41C as tool for studying metal dynamics in anaerobes
