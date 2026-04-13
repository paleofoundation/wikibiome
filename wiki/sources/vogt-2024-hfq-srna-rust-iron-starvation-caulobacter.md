---
title: "Vogt 2024 — Genome-Wide Profiling of Hfq-Bound RNAs Reveals the Iron-Responsive Small RNA RusT in Caulobacter crescentus"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Laura N Vogt, Gael Panis, Anna Schapers, Nikolai Peschek, Michaela Huber, Kai Papenfort, Patrick H Viollier, Kathrin S Frohlich, Paul Babitzke]
year: 2024
journal: "mBio"
doi: "10.1128/mbio.01234-24"
tags: [mismetallation, metal-homeostasis, iron, zinc, sRNA, Hfq, RusT, Caulobacter-crescentus, iron-starvation, NtrYX, TonB-dependent-receptor, outer-membrane, post-transcriptional-regulation, oligotroph, Fur]
library_category: metal_homeostasis_bacteria
platform: wikibiome
condition: "sRNA regulation of iron homeostasis"
---

# Why This Paper Matters

This paper identifies RusT as a novel iron-responsive small RNA (sRNA) in the oligotroph C. crescentus that, together with the RNA chaperone Hfq, post-transcriptionally remodels the outer membrane proteome during iron starvation. For the wiki's [[mis-metallation]] framework, RusT represents a new class of iron homeostasis regulator: rather than controlling iron import directly (like the canonical RyhB sRNA in enterobacteria), RusT controls at least **16 target transcripts encoding 7 outer membrane transporters**, reshaping the cell surface to optimize nutrient scavenging under iron limitation. The paper also shows that both iron starvation AND zinc excess induce RusT, connecting iron and zinc homeostasis perturbation through a shared sRNA regulatory node -- consistent with the idea that zinc excess causes iron-dependent enzyme dysfunction (mis-metallation).

# Key Claims

- **Hfq RNA co-immunoprecipitation** identified 311 transcripts bound by Hfq in C. crescentus, including 290 mRNAs, 19 sRNAs, and 2 rRNAs
- **RusT** (RNA upregulated in iron starvation) is a conserved 118-nt sRNA that is >70-fold enriched in the Hfq co-IP, making it the most strongly Hfq-associated sRNA
- RusT is transcribed from the intergenic region between CCNA_03820 (lipoprotein) and CCNA_03821 (exonuclease III)
- RusT transcription is controlled by the **NtrYX two-component system**, not directly by Fur -- this is unusual since most iron-responsive sRNAs in other bacteria are Fur-regulated
- **Iron starvation** (2,2'-dipyridyl treatment) induces RusT ~5-fold; **zinc excess** (ZnSO4) also induces RusT ~9-fold
- RusT post-transcriptionally controls at least **16 candidate target transcripts**, many encoding outer membrane transporters (TBDRs)
- Hfq binding to RusT is mediated by stem-loop 3 (SL3); a RusT-SL3mut shows reduced Hfq binding affinity
- Hfq stabilizes RusT: in the hfq mutant, RusT half-life decreases more than threefold
- RusT homologs are conserved across Caulobacteraceae with little sequence variation
- C. crescentus encodes >60 TBDRs for nutrient uptake from dilute environments; RusT may coordinate their expression under metal stress

# Methods & Findings

## Hfq Interactome
- Co-immunoprecipitation with 3xFLAG-Hfq followed by RNA-seq
- 19 sRNAs identified as Hfq-bound (>3-fold enrichment cutoff)
- CrfA, RusT, R0157, R0014 confirmed by Northern blot and EMSA
- ChvR (known Hfq-independent sRNA) was NOT recovered, validating specificity

## RusT Characterization
- 118-nt transcript with 4 stem-loops and a Rho-independent terminator (polyU stretch)
- Chemical probing revealed secondary structure; Hfq binding alters cleavage pattern at SL3
- Hfq binds RusT with nanomolar affinity in EMSA
- Hfq stabilization is essential: RusT accumulates via increased transcription but also requires Hfq for stability

## Iron/Zinc Induction
- Iron starvation induced by 2,2'-dipyridyl: ~5-fold RusT increase
- Zinc excess (75 uM ZnSO4): ~9-fold RusT increase
- Both conditions perturb iron homeostasis, leading to potential mis-metallation of iron-dependent enzymes
- NtrYX TCS (not Fur) controls RusT transcription -- no Fur-binding sites identified in the RusT promoter
- NtrYX is implicated in cell envelope regulation in alphaproteobacteria

## Target Identification
- RusT pulse expression + whole-genome transcriptome analysis identified 16 candidate targets
- 7 of 16 encode outer membrane transporters, suggesting RusT coordinates OM remodeling under metal stress
- Target regulation likely occurs through Hfq-facilitated base-pairing with target mRNAs

# Connections

- [[mis-metallation]] -- zinc excess and iron starvation converge on RusT induction, linking metal perturbation to cell surface remodeling
- [[iron]] -- iron starvation as primary inducer of RusT expression
- [[zinc]] -- zinc excess also induces RusT, suggesting shared downstream effects
- [[metal-homeostasis]] -- NtrYX TCS as novel regulator of iron homeostasis in alphaproteobacteria
- [[sRNA]] -- RusT as new member of the metal-responsive sRNA family
- [[outer-membrane]] -- RusT coordinates TonB-dependent receptor expression
- [[Caulobacter]] -- oligotrophic lifestyle requires sophisticated metal-responsive gene regulation
- [[Fur]] -- unusual Fur-independent regulation of iron-responsive sRNA
