---
title: "Molecular detection of microbial colonization in cervical mucus of women with and without endometriosis"
type: source
created: 2026-04-09
updated: 2026-04-20
authors: [Akiyama K, Nishioka K, Khan KN, Tanaka Y, Mori T, Nakaya T, Kitawaki J]
corresponding_author: "Jo Kitawaki"
corresponding_email: "kitawaki@koto.kpu-m.ac.jp"
institution: "Department of Obstetrics and Gynecology, Graduate School of Medical Science, Kyoto Prefectural University of Medicine, Kyoto, Japan"
journal: American Journal of Reproductive Immunology
year: 2019
doi: "10.1111/aji.13147"
pmid: ""
evidence_level: case-control
sample_size: "n=69 (30 endometriosis, 39 controls)"
tags: [endometriosis, cervical-mucus, microbiome, Enterobacteriaceae, Streptococcus, Corynebacterium, Pseudomonas, Flavobacterium, dysmenorrhea, NGS, qPCR, 16S-rRNA, Ion-Torrent, bacterial-contamination-hypothesis]
library_category: signatures
platform: wikibiome
condition: endometriosis
karen_brain_primitives: [5, 9]
metals_discussed: []
taxa_discussed: [enterobacteriaceae, streptococcus, lactobacillus, prevotella, gardnerella, corynebacterium, pseudomonas, flavobacterium]
key_findings:
  - "Enterobacteriaceae and Streptococcus were significantly more frequently detected in cervical mucus of endometriosis patients than controls by both NGS and qPCR (P < 0.05 each)"
  - "Shannon diversity index was significantly higher in the endometriosis group (P < 0.05), indicating more diverse cervical microbial communities"
  - "Lactobacillus prevalence was 20-40x higher than other detected bacteria in both groups but did not differ between groups"
  - "Microbial distribution was similar regardless of menstrual cycle phase (proliferative vs. secretory) in both groups"
  - "No significant difference in Prevotella or Gardnerella (BV-associated bacteria) between endometriosis and control groups"
keystone: false
---

# Molecular Detection of Microbial Colonization in Cervical Mucus of Women With and Without Endometriosis

## Key Findings

- ***Enterobacteriaceae* and *Streptococcus* were significantly more frequently detected** in cervical mucus of [[endometriosis]] patients than controls, confirmed by both NGS (next-generation sequencing) and quantitative real-time PCR (P < 0.05 for each) ([[akiyama-2019-cervical-mucus-microbial-colonization-endometriosis]], case-control, n=69).
- **Shannon diversity index was significantly higher** in the endometriosis group compared to controls (P < 0.05), indicating a more diverse microbial community in cervical mucus of endometriosis patients ([[akiyama-2019-cervical-mucus-microbial-colonization-endometriosis]], case-control).
- **Lactobacillus prevalence was 20-40 times higher** than other detected bacteria in both groups but showed no significant difference between endometriosis and controls — the predominance of Lactobacillus was a shared feature ([[akiyama-2019-cervical-mucus-microbial-colonization-endometriosis]], case-control).
- **Distribution of microbiota was similar regardless of menstrual cycle phase** (proliferative vs. secretory) in both groups, assessed by weighted UniFrac beta diversity analysis ([[akiyama-2019-cervical-mucus-microbial-colonization-endometriosis]], case-control).
- **No significant difference in *Prevotella* or *Gardnerella*** (BV-associated bacteria) between endometriosis and control groups, suggesting the cervical mucus microbial differences are specific to endometriosis rather than general reproductive tract dysbiosis ([[akiyama-2019-cervical-mucus-microbial-colonization-endometriosis]], case-control).

## Methods

- **Study design:** Case-control study at Kyoto Prefectural University of Medicine.
- **Participants:** 30 women with endometriosis (r-ASRM stage III-IV, laparoscopically confirmed) and 39 controls (without endometriosis — fibroids or benign ovarian tumors). All samples taken before laparoscopic surgery. Negative for vaginal culturing test. Endometriosis stages were specifically restricted to stage III-IV to highlight differences from controls.
- **Demographics:** No significant difference in age (32.5 +/- 6.0 controls vs. 33.9 +/- 5.7 endometriosis, P = 0.41), BMI (20.58 +/- 2.89 vs. 21.33 +/- 3.27, P = 0.33), parity (0.37 +/- 0.75 vs. 0.40 +/- 0.82, P = 0.88). Dysmenorrhea was significantly higher in endometriosis (73.3% vs. 43.6%, P = 0.01).
- **Exclusion criteria:** No prior endocrine therapy or antibiotics for at least six months. Regular menstrual cycles. All negative for vaginal culture.
- **Sample collection:** Cervical mucus aspirated from cervical canal using a sterile 1-mL syringe after prudently wiping with a sterile swab to prevent vaginal contamination. Treated with 500 micro-L Sputazyme to dissolve mucins, diluted with 2 mL Dulbecco's PBS, stored at -20 degrees C.
- **Methods:**
  - *Gram staining:* 0.2% Victoria Blue, 2% picric acid, 0.04% Fuchsine solution for visual bacterial detection.
  - *NGS:* 16S rRNA gene V5-V6 region amplified by PCR, sequenced on Ion Torrent Personal Genome Machine. OTU clustering at 97% similarity against Greengenes database (13_8) via QIIME 1.8.0.
  - *qRT-PCR:* PowerUp SYBR Green on StepOnePlus Real-Time PCR System using specific primers for Enterobacteriaceae (Eco1457F/Eco1652R), Pseudomonas (PSD7F/PSD7R), Corynebacterium (C-ropB-F/C-ropB-R), Streptococcus (g-Str-F/g-Str-R), and 16S rRNA universal gene. Normalized values calculated against 16S rRNA copy number.
- **Statistics:** Mann-Whitney U test and chi-squared test; P < 0.05 significance threshold.

## Detailed Summary

This study from the Khan/Kitawaki research group at Kyoto Prefectural University of Medicine extends their prior work on the **[[bacterial-contamination-hypothesis]]** in [[endometriosis]] to the cervical mucus compartment. While their previous studies focused on intrauterine and menstrual blood microbial colonization, this study investigates cervical mucus as the potential gateway for ascending bacterial infection.

**Gram staining results:** Visual examination confirmed the presence of bacteria in cervical mucus of both groups — Gram-positive rod-like bacilli (including Lactobacilli), Gram-negative rods, Gram-positive cocci. The distribution was similar in both groups, establishing that cervical mucus is not sterile regardless of endometriosis status.

**NGS results:** At the genus level, the cumulative bar chart showed *Pseudomonas*, *Enterobacteriaceae_g* (unresolved genus), *Streptococcus*, *Lactobacillus*, *Flavobacterium*, *Prevotella*, *Gardnerella*, and *Corynebacterium* as the main detected taxa. *Lactobacillus* was the most frequently seen in both groups. Alpha diversity (Shannon index) was significantly higher in endometriosis (P < 0.05). Beta diversity (weighted UniFrac) showed no significant difference between groups overall or between menstrual cycle phases.

**Candidate bacteria identification:** Using criteria of (a) > 1% of microbiota in endometriosis and (b) significantly higher prevalence vs. controls, five candidate bacteria were identified: *Enterobacteriaceae*, *Corynebacterium*, *Flavobacterium*, *Pseudomonas*, and *Streptococcus*. All were increased in the endometriosis group.

**qRT-PCR confirmation:** Enterobacteriaceae (P < 0.05) and Streptococcus (P < 0.05) were confirmed significantly higher by qPCR. Pseudomonas and Corynebacterium showed non-significant trends. The average 16S rRNA copy numbers were 9.6 x 10^5 (controls) and 6.8 x 10^5 (endometriosis) copies/mL — not significantly different, suggesting proportional shifts rather than absolute bacterial load differences.

**Cervical mucus as gatekeeper:** The authors discuss cervical mucus as a "critical gatekeeper" preventing ascending infection from the lower genital tract to the uterine cavity. Mucins (large glycoproteins) can inhibit viral replication and exclude bacteria by preventing diffusion through cervical mucus. In endometriosis, the higher cervical microbial diversity and enrichment of specific pathogens may reflect impaired innate immune defense or compromised antimicrobial properties of the cervical mucus plug.

**Link to bacterial contamination hypothesis:** If cervical mucus is colonized by bacteria in endometriosis, transmigration of bacteria from cervix into the uterine cavity could activate the LPS/TLR4 cascade, promoting endometriotic lesion growth. The same Enterobacteriaceae family enriched here includes *E. coli*, the bacterium their group has shown contaminates menstrual blood in endometriosis patients.

## Relevance to WikiBiome

- **[[endometriosis]] entity page:** Cervical mucus as a distinct microbial compartment with endometriosis-specific alterations — higher diversity, Enterobacteriaceae/Streptococcus enrichment.
- **[[bacterial-contamination-hypothesis]] concept page:** Extends the hypothesis from uterine cavity to cervical mucus — cervical colonization as the upstream source for ascending infection.
- **[[enterobacteriaceae]] entity page:** Add cervical mucus enrichment in endometriosis to conditions_enriched_in.
- **[[streptococcus]] entity page:** Cervical mucus enrichment in endometriosis is a distinct finding from vaginal microbiome studies.
- **[[lactobacillus]] entity page:** The 20-40x predominance in cervical mucus (both groups) provides data on Lactobacillus dominance in this anatomical niche.

## Relevance to Cureva

- **[[endometriosis-signature]]:** Cervical mucus microbial data strengthens the ascending infection pathway. Family-level concordance between cervical mucus (Enterobacteriaceae enrichment here) and intrauterine microbiome ([[khan-2016-molecular-detection-intrauterine-microbial-endometriosis]]) supports a continuous ascending colonization model.
- **Antimicrobial/probiotic intervention hypothesis:** If Enterobacteriaceae and Streptococcus ascending from cervical mucus drive endometriotic inflammation, targeted antimicrobials or Lactobacillus-based probiotics (to reinforce the cervical "gatekeeper") could be candidate interventions.
- Supports Karen's Brain Primitive 5 (two-sided: suppress Enterobacteriaceae/Streptococcus AND reinforce Lactobacillus barrier function) and Primitive 9 (oxygen/anatomical determinant — the cervical-uterine junction as an ecological transition zone).

## Contradictions / Tensions

- **Higher diversity in endometriosis** (alpha diversity) is unusual — most disease-associated microbiome studies find *reduced* diversity. In this case, increased diversity in cervical mucus may indicate failure of the Lactobacillus-dominant niche to exclude colonizers, rather than a "richer" community.
- **No beta diversity difference** (weighted UniFrac) despite alpha diversity and specific taxa differences — suggests that the overall community architecture is similar, with differences limited to specific low-abundance pathobionts.
- **Proportional vs. absolute differences:** Total bacterial load did not differ significantly, meaning the enrichment of Enterobacteriaceae and Streptococcus is a proportional shift. Whether proportional shifts at relatively low abundance are biologically meaningful for TLR-mediated inflammation remains an open question.
- **Genus vs. family resolution:** Enterobacteriaceae was resolved only to family level — the enrichment could represent E. coli (consistent with Khan's prior work) or other genera within the family.

## Open Questions

1. What species within Enterobacteriaceae are driving the cervical mucus enrichment — is it E. coli as suggested by Khan's prior culture studies?
2. Does cervical mucus microbial composition predict intrauterine colonization or endometriosis progression?
3. Would Lactobacillus-based vaginal probiotics reduce Enterobacteriaceae colonization of cervical mucus and thereby reduce endometriosis risk or recurrence?
4. How do the antimicrobial properties (defensins, SLPI) of cervical mucus differ between endometriosis patients and controls — and do they correlate with the microbial shifts?
5. Is the cervical mucus microbiome altered in early-stage (I-II) endometriosis, or only in advanced disease (III-IV as studied here)?
