---

title: Desulfovibrionales
type: entity
subtype: microbe
created: 2026-04-17
updated: 2026-04-17
last_substantive_update: 2026-04-17
sources: [luo-2023-causal-effects-gut-microbiota-ckd-mr, liu-2026-oral-microbiome-ckd-mendelian-randomization]
source_count: 2
metal_dependencies: [iron, molybdenum, nickel]
key_enzymes: [dissimilatory sulfite reductase (DsrAB), hydrogenase, sulfate adenylyltransferase]
tags: [sulfate-reducing-bacteria, hydrogen-sulfide, CKD-risk, causal-MR, deltaproteobacteria, anaerobe, cytotoxin]
platform: wikibiome
stub: true
stub_reason: "below §2f source density threshold — 2 sources, minimum 3 required"
seo_target: "Desulfovibrionales sulfate reducing bacteria hydrogen sulfide chronic kidney disease"
wikipedia_differentiation: "Mendelian randomization evidence establishing Desulfovibrionales as the only Bonferroni-significant causal risk taxon for CKD (OR 1.15, power 0.93); H2S-mediated renal injury mechanism linking sulfate-reducing metabolism to endothelial damage and cholesterol absorption; metal cofactor dependencies creating potential intervention targets"
conditions_enriched_in: [chronic-kidney-disease]
conditions_depleted_in: []
pathogenic_potential: commensal-turned-pathogen
gram_stain: "negative"
oxygen_requirement: "strict anaerobe"

---

# Desulfovibrionales

An order of Gram-negative, strictly anaerobic **sulfate-reducing bacteria** (SRB) within the class Deltaproteobacteria. The defining metabolic feature of Desulfovibrionales is **dissimilatory sulfate reduction** -- using sulfate as a terminal electron acceptor and producing **hydrogen sulfide (H2S)** as a metabolic end product. This seemingly obscure biochemistry has major clinical implications: H2S is a potent cytotoxin, and Mendelian randomization has established Desulfovibrionales as the **only Bonferroni-significant causal risk taxon for chronic kidney disease**.

## Taxonomy

- Order Desulfovibrionales, class Deltaproteobacteria, phylum Proteobacteria.
- Key families: Desulfovibrionaceae, Desulfomicrobiaceae, Desulfohalobiaceae.
- The gut-relevant genus [[desulfovibrio]] belongs to family Desulfovibrionaceae within this order.
- Reclassification note: recent phylogenomic analyses have proposed moving Deltaproteobacteria to a separate phylum (Desulfobacterota), though classical taxonomy still places them within Proteobacteria.

## Metal Dependencies

**Iron**:
- Dissimilatory sulfite reductase (DsrAB), the terminal enzyme in sulfate reduction, contains a siroheme-[4Fe-4S] coupled cofactor -- one of the most iron-intensive catalytic centers in biology.
- Multiple ferredoxins and cytochromes in the sulfate reduction pathway require iron-sulfur clusters.
- Iron availability in the gut directly influences the metabolic capacity of SRB and thus H2S production rates.

**Molybdenum**:
- Sulfate adenylyltransferase (Sat) and adenylylsulfate reductase (AprAB) contain molybdopterin cofactors essential for the initial activation of sulfate.
- Molybdenum bioavailability may be a rate-limiting factor for sulfate-reducing metabolism in low-Mo environments.

**Nickel**:
- [NiFe] hydrogenases are widespread in Desulfovibrionales, enabling H2 oxidation as an energy source -- a critical function in interspecies hydrogen transfer within the gut.
- Nickel-dependent hydrogenase activity links Desulfovibrionales to the broader H2 economy of the gut microbiome.

## Key Enzymes and Virulence Factors

- **Dissimilatory sulfite reductase (DsrAB)**: The signature enzyme of sulfate reduction. Converts sulfite to sulfide (H2S) in the terminal step of dissimilatory sulfate reduction. The iron-intensive cofactor structure makes this enzyme a direct link between iron ecology and H2S toxicity.
- **[NiFe] Hydrogenase**: Oxidizes H2 produced by fermentative gut bacteria, coupling hydrogen consumption to sulfate reduction. This interspecies hydrogen transfer is a key ecological interaction in the anaerobic gut.
- **Sulfate adenylyltransferase**: Activates sulfate for reduction; molybdenum-dependent.

## Ecological Role

### In the Healthy Gut
Desulfovibrionales are normal members of the colonic microbiota at low abundance (~1-2% of total community). At homeostatic levels, they participate in the **sulfur cycle** and contribute to interspecies hydrogen transfer, consuming H2 that would otherwise accumulate and inhibit fermentative metabolism.

### In Dysbiosis
When Desulfovibrionales expand beyond homeostatic levels, H2S production overwhelms the capacity of colonocytes to detoxify sulfide (via sulfide:quinone oxidoreductase). Excess H2S:
- **Inhibits butyrate oxidation** in colonocytes, compromising the primary energy source of the colonic epithelium
- **Increases intestinal permeability** by disrupting tight junction proteins
- **Induces systemic inflammation** via endothelial damage and NF-kB activation
- **Increases cholesterol absorption** through mechanisms not yet fully characterized

## Conditions Associated

### Chronic Kidney Disease
The landmark Mendelian randomization finding: Desulfovibrionales is the **only taxon reaching Bonferroni-corrected significance** for causal CKD risk (IVW OR = 1.15, 95% CI 1.05-1.26, p = 0.0026, statistical power = 0.93). Confirmed by MR-PRESSO (OR = 1.15, p = 0.001) [[luo-2023-causal-effects-gut-microbiota-ckd-mr]].

The proposed mechanism: Desulfovibrionales-mediated H2S production induces systemic inflammation, increases cholesterol absorption, and causes endothelial damage contributing to renal decline. This positions H2S as a direct nephrotoxin operating through the gut-kidney axis.

## Interkingdom Relationships

- Desulfovibrionales compete with methanogens (e.g., [[methanobrevibacter]]) for H2 in the gut. The balance between sulfate reduction and methanogenesis determines whether the dominant gaseous end product is H2S or CH4, with direct implications for colonic health.
- In biofilm communities, SRB can create localized microenvironments with elevated H2S that inhibit competing butyrate producers, further destabilizing the colonic ecosystem.

## Key Studies

- [[luo-2023-causal-effects-gut-microbiota-ckd-mr]] (Mendelian randomization, n=480,698) -- Established Desulfovibrionales as the only Bonferroni-significant causal risk taxon for CKD; the strongest genetic evidence linking a gut taxon to kidney disease.

## Open Questions

1. **Does reducing Desulfovibrionales slow CKD progression?** The causal MR evidence is strong (power = 0.93), but no dietary or probiotic RCT targeting this taxon in CKD patients has been conducted.
2. **Which dietary factors modulate Desulfovibrionales abundance?** Sulfur amino acids (methionine, cysteine) and dietary sulfate are substrates; protein-heavy Western diets may expand SRB populations.
3. **What is the relationship between iron supplementation and SRB expansion?** Given the iron-intensive enzymology of sulfate reduction, oral iron supplements could feed Desulfovibrionales growth in CKD patients already receiving iron therapy.

## Cross-References

- [[desulfovibrio]] -- the key gut-relevant genus within this order
- [[chronic-kidney-disease]] -- the disease with the strongest causal evidence for Desulfovibrionales involvement
- [[iron]] -- essential cofactor for DsrAB and multiple electron carriers in the sulfate reduction pathway
- [[nickel]] -- cofactor for NiFe hydrogenases in interspecies hydrogen transfer
- [[butyrate]] -- H2S inhibits butyrate oxidation in colonocytes, compromising epithelial energy metabolism
- [[fermentative-metabolism|hydrogen-sulfide]] -- the cytotoxic end product of Desulfovibrionales metabolism
