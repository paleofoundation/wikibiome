---
title: "Puiggene 2026 — Functional Organization and Regulatory Logic of the ped Gene Cluster in Pseudomonas Species"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Oscar Puiggene, Pablo I Nikel, Edward G Dudley]
year: 2026
journal: "Applied and Environmental Microbiology"
doi: "PMC12997753"
tags: [mismetallation, metal-homeostasis, lanthanides, calcium, iron, copper, PQQ, pseudomonas, alcohol-dehydrogenase, rare-earth-elements, metal-cofactor-switching]
library_category: metal_homeostasis_bacteria
platform: wikibiome
condition: "metal cofactor competition in PQQ-dependent dehydrogenases"
---

# Why This Paper Matters

This review provides a detailed case study of [[mis-metallation]] in the context of lanthanide (rare earth element) vs. calcium cofactor competition in PQQ-dependent alcohol dehydrogenases. The ped gene cluster in [[pseudomonas]] encodes two key enzymes -- PedE (Ca2+-dependent) and PedH (La3+-dependent) -- that catalyze the same reactions but with different metal cofactors. The "REE switch" determines which enzyme is expressed based on lanthanide availability, representing one of the most elegant examples of metalloproteome remodeling in bacteria. Critically, the paper documents that competing metal ions such as Fe2+/Fe3+, Cu2+, and Zn2+ can reduce La3+ availability and impair transporter function, representing direct [[mis-metallation]] events where non-cognate metals displace the correct cofactor. Heavier lanthanides fail to support growth and may be inhibitory "likely due to mismetallation," explicitly naming the phenomenon.

# Key Claims

- **The REE switch** toggles between La3+-dependent PedH and Ca2+-dependent PedE based on lanthanide availability via the PedS2-PedR2 two-component system
- **PedH has higher catalytic activity than PedE** due to favorable reaction thermodynamics with Ln3+ cofactors, demonstrating that the "correct" metal cofactor enhances enzymatic performance
- **Fe2+/Fe3+ can displace La3+ from binding sites**, disrupting PedS2 signaling or PedH activity -- this effect was not reversed by deleting pyoverdine, suggesting mismetallation rather than uptake competition
- **Heavier lanthanides** (beyond Nd3+) do not support growth and may be inhibitory "likely due to mismetallation" at the active site
- **Copper (Cu2+) and zinc (Zn2+) can reduce La3+ availability** and impair PedA1A2BC transporter function
- **PP_2678 encodes a SoxH-like Zn2+-dependent metallo-hydrolase** associated with systems encoding PQQ-dependent ADHs, suggesting zinc-dependent quality control
- **The cluster is conserved across >1,000 Pseudomonas strains** from over 70 species, indicating strong evolutionary selection for metal-switchable metabolism

# Methods & Findings

## Metal Cofactor Competition at the Active Site

PedE and PedH both use PQQ as a redox cofactor, but require different metal ions to coordinate with the PQQ molecule at the catalytic site:
- PedE: Ca2+ ions coordinate PQQ
- PedH: La3+ (or other light lanthanides Ce3+, Nd3+) coordinate PQQ
- PedH shows 52% sequence identity with PedE but enhanced catalytic performance with Ln3+

The REE switch operates through PedS2 (sensor kinase) and PedR2 (response regulator) detecting Ln3+ ions that must reach the cytoplasm via TonB-dependent receptors and the PedA1A2BC ABC transporter.

## Mismetallation Events Documented

1. **Fe2+/Fe3+ displacing La3+**: Excess Fe2+ (as FeSO4) inhibited growth of PedE-deletion strains unless lanthanide levels were increased, suggesting Fe competes for La3+ binding sites
2. **Heavier lanthanides as mismetallators**: Light REEs (La3+, Ce3+, Nd3+) support growth at nanomolar levels; heavier REEs (Sm3+, Eu3+, Gd3+) are less effective or inhibitory, likely because their larger ionic radii cause mismetallation at the PQQ-binding site
3. **Cu2+ and Zn2+ interference**: These metals reduce La3+ availability and impair transporter function, potentially through competitive binding

## Maturation and Quality Control Proteins

- **PedG**: Periplasmic binding protein that may facilitate insertion of PQQ and La3+ or Ca2+ into apo-MeDH, assisting correct metalation
- **PP_2666-PP_2678**: Three proteins (rhodanese-domain, SoxYZ-like, SoxH-like Zn2+-dependent metallo-hydrolase) consistently associated with PQQ-dependent ADH systems, potentially involved in disulfide bridge formation or cofactor stabilization
- **PedF**: Cytochrome c550 that reoxidizes reduced PQQ, linking to copper-containing cbb3-type cytochrome c oxidase for terminal electron transfer

## Biofilm and NO-Sensing Regulation

PP_2663 and PedS1 encode a nitric oxide (NO)-sensing system homologous to the NosP-NahK cascade in P. aeruginosa that regulates biofilm dispersal. This connects the ped cluster to broader [[biofilm]] regulation through metal-dependent signaling.

# Connections

- [[mis-metallation]] -- explicit documentation of Fe2+/Fe3+ and heavier lanthanides mismetallating La3+-dependent enzymes
- [[metal-homeostasis]] -- the REE switch as a paradigmatic example of metalloproteome remodeling
- [[iron]] -- Fe2+/Fe3+ as a mismetallating competitor for lanthanide binding sites
- [[copper]] -- Cu2+ interferes with La3+ availability; cbb3 terminal oxidases are copper-dependent
- [[zinc]] -- Zn2+ competes with La3+ at transporter; PP_2678 is a Zn-dependent metallo-hydrolase
- [[pseudomonas]] -- P. putida KT2440 and P. aeruginosa PAO1 as model systems
- [[biofilm]] -- NO-sensing regulation of biofilm dispersal linked to ped cluster
- [[siderophore]] -- pyoverdine deletion does not reverse Fe-mediated mismetallation
- [[metallochaperone]] -- PedG as potential metallochaperone assisting correct cofactor insertion
- [[rare-earth-elements]] -- lanthanide biology as emerging area in metal-dependent enzymology
- [[metabolic-engineering]] -- ped cluster as modular platform for synthetic biology applications
