# WikiBiome / Cureva Knowledge Base Schema

This is the knowledge base powering **WikiBiome** (public encyclopedia) and **Cureva.ai** (practitioner reasoning platform). The human curates sources and directs exploration. The LLM handles all writing, cross-referencing, and maintenance.

## Strategic Context

- **WikiBiome** (wikibiome.com) = Public educational encyclopedia. Explains metals, microbes, mechanisms, diseases. Drives awareness → HMTc certification demand.
- **Cureva.ai** = Practitioner reasoning platform. Executes the Karen's Brain pipeline on disease signatures. Outputs validated interventions, STOPs, and evidence maps.
- **HMTc** = Heavy Metal Tested & Certified. Revenue engine. Practitioners using Cureva recommend HMTc-certified products.

The Obsidian vault is the **single source of truth** for both platforms. WikiBiome renders the public-facing subset. Cureva renders the full dataset including signatures, interventions, and validation evidence.

## Directory Structure

```
raw/                    # Immutable source documents (PDFs, papers, notes, images)
raw/assets/             # Downloaded images and attachments
raw/karens-brain/       # Karen's Brain methodology files (specs, transcripts, frameworks)

wiki/                   # LLM-generated markdown pages (the knowledge base)
wiki/sources/           # One summary page per ingested source
wiki/entities/          # Pages for metals, microbes, people, organizations
wiki/concepts/          # Pages for mechanisms, frameworks, themes
wiki/signatures/        # Disease signature pages (metallomic + taxonomic + functional)
wiki/interventions/     # Validated intervention pages with triangle evidence
wiki/stops/             # Counterproductive interventions with evidence
wiki/analyses/          # Comparison tables, syntheses, query results
wiki/index.md           # Content catalog — updated on every ingest
wiki/log.md             # Chronological record of all operations
```

## Page Types and Frontmatter

### Source (`wiki/sources/`)

```yaml
---
title: "Author Year — Short Description"
type: source
created: YYYY-MM-DD
updated: YYYY-MM-DD
authors: [Author1, Author2]
year: YYYY
journal: "Journal Name"
doi: "DOI or URL"
tags: [relevant tags]
library_category: causal | associated-conditions | drug-repurposing | heavy-metals | interventions | metabolites | diet | signatures | mechanistic-insights
platform: wikibiome | cureva | both
condition: "condition name"
---
```

### Entity (`wiki/entities/`)

For metals, microbes, organisms, people, organizations.

```yaml
---
title: Entity Name
type: entity
subtype: metal | microbe | fungus | person | organization
created: YYYY-MM-DD
updated: YYYY-MM-DD
sources: [source-filenames]
tags: [relevant tags]
# Metal-specific fields (optional):
symbol: "Ni"
atomic_number: 28
iarc_classification: "Group 1"
primary_exposure: "Diet, occupational"
# Microbe-specific fields (optional):
gram_stain: "negative"
oxygen_requirement: "microaerophilic"
metal_dependencies: [nickel, iron]
key_enzymes: [urease, hydrogenase]
---
```

### Concept (`wiki/concepts/`)

For mechanisms, frameworks, biological processes.

```yaml
---
title: Concept Name
type: concept
created: YYYY-MM-DD
updated: YYYY-MM-DD
sources: [source-filenames]
tags: [relevant tags]
karen_brain_primitive: "Primitive 4: Microbial Metal Dependencies"  # if maps to a KB primitive
---
```

### Disease Signature (`wiki/signatures/`) — NEW

The core page type for Cureva. Each disease gets a full multi-layer signature.

```yaml
---
title: "Disease Name — Microbiome Signature"
type: signature
created: YYYY-MM-DD
updated: YYYY-MM-DD
sources: [source-filenames]
tags: [disease-category tags]

# Layer 1: Metallomic signature
metallomic_signature:
  elevated: [zinc, iron, cadmium, lead, nickel]
  depleted: [glutathione]

# Layer 2: Taxonomic signature
taxonomic_signature:
  enriched:
    - taxon: "[[escherichia-coli]]"
      role: "Primary pathogen — all Zn/Fe/Ni enzymes, estrogen deconjugation"
    - taxon: "[[bacteroides-fragilis]]"
      role: "Zn-dependent BFT toxin, iron piracy, beta-glucuronidase"
  depleted:
    - taxon: "[[lachnospiraceae]]"
      role: "SCFA producers — lost competitive advantage in iron-rich environment"

# Layer 3: Nutritional immunity profile
nutritional_immunity:
  elevated: [calprotectin, lactoferrin, transferrin, hepcidin, lipocalin-2]
  depleted: [glutathione]

# Layer 4: Ecological features
ecological_features: [hypoxia, biofilm, estrogen-recirculation, functional-shielding]

# Layer 5: Key virulence enzymes expressed
virulence_enzymes: [zinc-metalloprotease, NiFe-hydrogenase, nickel-urease, nickel-glyoxalase, beta-glucuronidase, siderophores]

# Cureva pipeline status
cureva_status: complete | partial | in-progress
validated_interventions: [intervention-page-ids]
stops: [stop-page-ids]
---
```

Body content should follow this structure:
1. **Overview** — What the condition is and why the signature matters
2. **Metallomic Signature** — Which metals are elevated/depleted and why
3. **Environmental Exposures** — Sources of the metal burden
4. **Nutritional Immunity Response** — What the host is doing about it
5. **Mis-metallation Events** — If applicable
6. **Taxonomic Analysis** — Enriched taxa with their roles, depleted taxa with their lost functions
7. **Virulence Enzymes and Features** — Key enzymes enabling pathogenic persistence
8. **Interkingdom Relationships** — Fungal-bacterial cooperation, functional shielding
9. **Ecological State** — Hypoxia, pH shifts, biofilm architecture
10. **Validated Interventions** — Links to `wiki/interventions/` pages
11. **STOPs** — Links to `wiki/stops/` pages
12. **Open Questions** — What's still unknown

### Intervention (`wiki/interventions/`) — NEW

```yaml
---
title: "Intervention Name"
type: intervention
created: YYYY-MM-DD
updated: YYYY-MM-DD
sources: [source-filenames]
tags: [dietary, supplemental, pharmaceutical, biophysical, microbial-competition]
intervention_class: dietary | supplement | pharmaceutical | biophysical | probiotic | chelation

# Triangle validation for each condition
triangles:
  - condition: "[[endometriosis]]"
    I_to_f: "Description of how intervention affects signature feature"
    I_to_f_evidence: "strong | moderate | preliminary"
    I_to_D: "Description of clinical evidence for this condition"
    I_to_D_evidence: "RCT | quasi-experimental | cohort | case-series | animal-model"
    f_to_D: "Description of mechanistic link"
    status: validated | promising | in-progress

targets:
  taxa: [list of taxa affected]
  enzymes: [list of enzymes disabled]
  metals: [list of metals restricted/chelated]
  ecological: [list of ecological effects]
---
```

### STOP (`wiki/stops/`) — NEW

Interventions that are counterproductive despite conventional wisdom.

```yaml
---
title: "STOP: Intervention Name for Condition"
type: stop
created: YYYY-MM-DD
updated: YYYY-MM-DD
sources: [source-filenames]
tags: [condition tags]

condition: "[[condition-name]]"
intervention: "Iron supplementation"
conventional_rationale: "Patient presents with anemia/low serum iron"
why_counterproductive: "Hepcidin elevation indicates functional anemia (host defense), not true deficiency. Iron supplementation feeds siderophore-producing pathogens."
evidence: [source-filenames supporting the STOP]
alternative: "Support nutritional immunity with [[lactoferrin]] instead"
---
```

### Analysis (`wiki/analyses/`)

```yaml
---
title: Analysis Title
type: analysis
created: YYYY-MM-DD
updated: YYYY-MM-DD
sources: [source-filenames]
tags: [relevant tags]
---
```

## Page Conventions

- Use `[[wikilinks]]` for cross-references between pages.
- Keep pages focused — one entity/concept/signature per page.
- When a page grows too large, split it and link the parts.
- Prefer updating existing pages over creating new ones when content overlaps.
- **Bold** key claims and important names on first mention.
- Always attribute claims to their source using `[[source-filename]]`.
- When uncertain, say so explicitly.
- Use tables for comparisons (metal properties, taxa roles, intervention evidence).

## Paper Library Structure

Karen's research library organizes papers into 9 categories per condition. Each category maps to a specific platform:

### WikiBiome categories (public educational content):

| Category | Purpose | What it feeds |
|----------|---------|---------------|
| **Causal Studies** | Microbiome-related papers giving overview of the condition | Source pages, entity pages, concept pages |
| **Associated Conditions** | Conditions with overlapping signatures / shared pathogens | Cross-references between signature pages, entity pages |
| **Heavy Metals** | Metal involvement in the condition | Entity pages (metals), concept pages |
| **Metabolites** | Metabolites of enriched/depleted taxa; also inform intervention discovery | Entity pages, concept pages |
| **Signatures** | Microbiome signature data for the condition | Signature pages (note: full 5-layer signatures are Cureva; WikiBiome gets metallomic + taxonomic associations only) |
| **Mechanistic Insights** | Broader mechanisms, ecological understanding | Concept pages, entity pages |

### Cureva categories (practitioner-only clinical intelligence):

| Category | Purpose | What it feeds |
|----------|---------|---------------|
| **Drug Repurposing** | Repurposed drugs, mechanism insights (e.g., anti-cancer drugs inhibiting Candida morphogenesis) | Intervention pages with triangle evidence |
| **Interventions** | Clinically evaluated interventions for the condition | Intervention pages, STOP pages |
| **Diet** | Dietary patterns associated with the condition via metals or primary pathogens | Intervention pages (dietary class) |

### Cross-platform note:
Drug repurposing and diet papers often contain mechanism insights that can inform WikiBiome entity and concept pages. The factual mechanism (e.g., "metformin disrupts biofilm") can appear on WikiBiome as a concept; the clinical recommendation ("use metformin for biofilm disruption in endometriosis") stays on Cureva. Similarly, the factual science of metal content in foods belongs on WikiBiome, but dietary recommendations tied to specific conditions are Cureva content.

### Source tagging:
When ingesting a paper, tag it with its library category in the frontmatter:
```yaml
library_category: causal | associated-conditions | drug-repurposing | heavy-metals | interventions | metabolites | diet | signatures | mechanistic-insights
platform: wikibiome | cureva | both
condition: "condition name"
```

## Workflows

### Ingest Source

When the user adds a new source to `raw/` and asks to ingest it:

1. **Read** the source fully.
2. **Discuss** key takeaways with the user — what's interesting, what to emphasize.
3. **Create** a summary page in `wiki/sources/`.
4. **Update or create** entity pages in `wiki/entities/` for metals, microbes, people mentioned.
5. **Update or create** concept pages in `wiki/concepts/` for mechanisms and frameworks.
6. **Check disease relevance** — if the source discusses a disease with microbiome/metallomic data:
   - Create or update the signature page in `wiki/signatures/`.
   - Create or update intervention pages in `wiki/interventions/` if interventions are discussed.
   - Create or update STOP pages in `wiki/stops/` if counterproductive interventions are identified.
7. **Flag contradictions** — if the new source disagrees with existing content, note it on both pages.
8. **Map to Karen's Brain primitives** — note which knowledge primitives (1-9) the source relates to.
9. **Update** `wiki/index.md`.
10. **Append** to `wiki/log.md`.

### Build Disease Signature

When building or expanding a disease signature page:

1. **Collect** all sources related to the condition (search `wiki/sources/`).
2. **Layer 1**: Identify the metallomic signature from tissue/biomarker data.
3. **Layer 2**: Map the taxonomic signature — enriched and depleted taxa with functional roles.
4. **Layer 3**: Assess nutritional immunity markers.
5. **Layer 4**: Identify ecological features (hypoxia, biofilm, pH).
6. **Layer 5**: Map virulence enzymes and metal cofactors.
7. **Reconstruct the ecosystem story** — what environmental pressure created this state?
8. **Identify Achilles' heels** — metal dependencies, oxygen sensitivity, biofilm vulnerabilities.
9. **Generate intervention hypotheses** from the vulnerabilities.
10. **Triangulate** each intervention against independent clinical evidence.
11. **Classify**: validated / promising / in-progress / STOP.
12. **Create** linked intervention and STOP pages.

### Query

When the user asks a question:

1. Read `wiki/index.md` to find relevant pages.
2. Read those pages and synthesize an answer.
3. Cite sources using `[[wikilinks]]`.
4. If the answer involves a disease, check for an existing signature page.
5. If the answer is substantial and reusable, offer to file it as an analysis.

### Lint

When asked to health-check the wiki:

- Find contradictions between pages.
- Find stale claims superseded by newer sources.
- Find orphan pages (no inbound links).
- Find concepts mentioned but lacking their own page.
- Find diseases mentioned in sources but lacking signature pages.
- Find interventions validated in sources but lacking intervention pages.
- Find missing cross-references.
- Verify triangle evidence completeness on intervention pages.
- Suggest new questions to investigate or sources to find.

## Karen's Brain Knowledge Primitives

These are the 9 reusable reasoning primitives from the Karen's Brain specification. Every disease signature analysis should reference which primitives apply.

1. **Metals as Selective Pressures** — Metal patterns select for tolerant/dependent organisms
2. **Nutritional Immunity as Interpretive Constraint** — Low serum metals may be host defense, not deficiency
3. **Mis-metallation and Toxic Metal Entry** — Cd/Pb displace correct cofactors via Ca channels
4. **Microbial Metal Dependencies as Achilles' Heels** — Restrict the metal, disable the virulence
5. **Two-Sided Ecological Engineering** — Suppress pathogens AND restore missing beneficial functions
6. **Interkingdom Relationships and Functional Shielding** — Fungal-bacterial biofilms protect pathogens
7. **Estrobolome and Hormone Recirculation** — Beta-glucuronidase activity drives estrogen-dependent conditions
8. **Siderophore Competition and Iron Ecology** — Competitive exclusion via superior iron acquisition
9. **Oxygen State as Ecological Determinant** — Anaerobe dominance → oxygenation as intervention

## WikiBiome ↔ Cureva Visibility Rules

- **WikiBiome (public)**: Entity pages (metals, microbes, organisms), concept pages (mechanisms, frameworks), source summaries, and analyses. WikiBiome explains WHAT is happening — metals, microbes, mechanisms, disease associations — but NEVER crosses into clinical recommendations. No interventions, no STOPs, no "what to do about it." Disease pages on WikiBiome may describe the metallomic and taxonomic associations but do NOT include the full signature layers, clinical reasoning, or practitioner guidance.
- **Cureva (practitioners only)**: Full disease signature pages with all 5 layers (`wiki/signatures/`). All intervention pages with triangle evidence (`wiki/interventions/`). All STOP pages with clinical reasoning (`wiki/stops/`). Karen's Brain pipeline outputs. Intervention confidence classifications. This is the paid layer — the clinical intelligence that practitioners subscribe to access.
- **Dietary interventions (Cureva only)**: Dietary patterns paired with disease signatures — low-nickel diet for endometriosis, low-red-meat for E. coli-dominant signatures, etc. — are clinical guidance and belong on Cureva. WikiBiome may discuss the factual science of metal content in foods, hyperaccumulation in plants, and dietary exposure epidemiology (these are entity/concept topics), but dietary recommendations tied to specific conditions are Cureva content.
- **Boundary rule**: If content answers "what should a practitioner do?", "what should a patient eat or avoid?", or "what should a patient avoid?" — it belongs on Cureva, not WikiBiome. WikiBiome drives awareness and education; Cureva delivers actionable clinical intelligence.

## Style

- Write clearly and concisely. No filler.
- Use headers, bullet points, and tables for structure.
- Bold key claims and important names on first mention.
- Always attribute claims to their source.
- When uncertain, say so explicitly.
