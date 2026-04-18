---
title: "Lenner 2025 — Compatibility of Intracellular Binding: Evolutionary Design Principles for Metal Sensors"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Nicolas Lenner, Logan Chariker, Stanislas Leibler]
year: 2025
journal: "Proceedings of the National Academy of Sciences"
doi: "not yet verified"  # <!-- DOI lookup needed: Proceedings of the National Academy of Sciences 2025 -->
pmcid: "PMC12067259"
tags: [mismetallation, metal-homeostasis, Irving-Williams-series, metalloregulator, metal-sensing, sensor-compatibility, thermodynamic-additivity, zinc, copper, manganese, iron, cobalt, nickel, evolutionary-design]
library_category: metal_homeostasis_bacteria
platform: wikibiome
condition: "theoretical principles for how metal sensors avoid mismetallation"
metals_discussed: [cobalt, copper, iron, manganese, nickel, zinc]
karen_brain_primitives: [3, 4]
key_findings: ["Metal sensors must be both sensitive and specific", "The compatibility condition", "Only a few amino acid compositions"]
---

# Why This Paper Matters

This paper from PNAS provides the first rigorous theoretical framework for understanding how bacterial metal sensors can be simultaneously sensitive to their cognate metal AND specific against all other metals -- the "compatibility problem" at the heart of [[mis-metallation]] prevention. The central challenge is that transition metals have nearly identical ionic radii (~0.75 A) and follow the [[irving-williams-series]] in binding affinity, meaning Cu(I) and Zn(II) form the most stable complexes. How can a Mn(II) sensor detect Mn at micromolar concentrations when Zn(II) binds the same ligands 10^4 times more strongly? The answer lies in the concept of "mutual compatibility" -- the entire set of metal sensors must be co-evolved so that each sensor's binding site composition ensures that noncognate metals bind preferentially to their own sensor rather than causing cross-talk. Using a thermodynamic additivity model, the authors predict which amino acid compositions (O, N, S residue combinations) are compatible for each metal sensor, finding that the compatibility constraints are so severe that only a few possible sensor designs exist for each metal. Their predictions match experimental data on known bacterial metalloregulators remarkably well.

# Key Claims

- **Metal sensors must be both sensitive and specific**: sensitivity requires binding the cognate metal at its cytosolic set-point concentration; specificity requires that noncognate metals preferentially bind their own sensors
- **The compatibility condition** constrains the entire sensor set jointly -- changing one sensor's binding site can make the whole set incompatible
- **Only a few amino acid compositions** (combinations of O, N, S coordinating residues) satisfy compatibility for each metal sensor
- **The "Williams Heuristic"**: metals prefer S-groups (yellow) over N-groups (blue) over O-groups (red), with the preference strength following the Irving-Williams series
- **Cytosolic metal concentrations follow the inverse Irving-Williams series**: the stronger a metal binds, the lower its free cytosolic concentration must be
- **ZnII binds cysteine ~10^4 times more strongly than MnII**, yet both sensors operate with ~50% occupancy at their set-point concentrations because cytosolic [Zn] is maintained ~10^4 times lower than [Mn]
- **A six-fold concentration change** marks the sensitivity range for all sensors, independent of binding constants
- **Sensor compositions form a "convex hull"** in the sensor space (O,N,S coordinate system), with compatibility requiring all sensors to lie at or near the vertices

# Methods & Findings

## Theoretical Framework

The model treats metal-sensor interactions through equilibrium binding kinetics:
- Each sensor i has binding constants Kij for metal j
- Sensitivity: sensor must respond to ~6-fold changes in cognate metal concentration
- Specificity: baseline occupation by noncognate metals must be <50% (theta_i0 < 1/2)
- Compatibility: all sensors must simultaneously satisfy both conditions

## Key Predictions vs. Experimental Data

| Metal | Predicted Sensor Composition | Known Sensor Examples | Match |
|-------|---------------------------|---------------------|-------|
| Mn(II) | High O content | MntR: O-rich binding site | Yes |
| Fe(II) | O and N balanced | Fur: O,N coordination | Yes |
| Co(II) | N-rich | RcnR: N,S coordination | Partial |
| Ni(II) | N and S mixed | NikR: N-rich | Yes |
| Cu(I) | High S content | CueR: S-rich (Cys) | Yes |
| Zn(II) | S with some N | Zur/ZntR: S,N coordination | Yes |

## The Compatibility Constraint

For a set of m sensors and m metals, compatibility requires m(m-1) linear inequalities to be simultaneously satisfied. For the biologically relevant set of 6 transition metals (Mn through Zn), this creates 30 constraints that severely limit the space of possible sensor designs. The geometric interpretation shows that compatible sensor sets must lie near the vertices of a convex hull in sensor space.

## Implications for Mis-Metallation

The theory explains why mis-metallation is such a fundamental threat: if any single sensor is modified (by mutation or by perturbation of metal concentrations), the entire compatibility network can collapse, leading to widespread misregulation of metal import/export and downstream mis-metallation of the metalloproteome.

# Connections

- [[mis-metallation]] -- theoretical foundation for why mis-metallation is prevented by co-evolved sensor networks
- [[irving-williams-series]] -- central to the compatibility framework; explains binding affinity hierarchy
- [[metalloregulator]] -- predictions match known sensor compositions for MntR, Fur, NikR, CueR, Zur/ZntR
- [[zinc]] -- Zn sensors predicted to use S,N coordination; cytosolic Zn kept at sub-picomolar free concentration
- [[copper]] -- Cu sensors predicted to use S-rich sites; Cu kept at sub-attomolar free concentration
- [[manganese]] -- Mn sensors predicted to use O-rich sites; highest free cytosolic concentration
- [[iron]] -- Fe sensors use O,N balanced coordination
- [[metal-homeostasis]] -- sensors as apex of the metallostasis network controlling import/export
- [[labile-metal-pool]] -- effective cytosolic concentrations as key parameter for sensor function
- [[nickel]] -- Ni sensors use N,S mixed coordination
- [[cobalt]] -- Co sensors face unique compatibility challenges
