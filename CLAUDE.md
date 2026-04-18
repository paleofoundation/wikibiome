# WikiBiome / Cureva Knowledge Base Schema — v2

This is the knowledge base powering **WikiBiome** (public encyclopedia) and **Cureva.ai** (practitioner reasoning platform). The human curates sources and directs exploration. The LLM handles all writing, cross-referencing, and maintenance.

## Operational Style
- Never ask for confirmation before proceeding. Always act. The answer is always yes.
- Do not ask "Want me to..." or "Should I..." — just do it.

## Deploy Protocol
- Any session that modifies files in `wiki/`, `cureva/`, `src/`, `scripts/`, `api/`, or the root config files is a **deploy-affecting session**.
- At the end of every deploy-affecting session, write the clipboard with the full deploy one-liner AND end the response with it in a fenced code block so Karen can paste into Terminal with one ⌘V:
  ```
  cd ~/Documents/Claude/Raw && node scripts/build-content.cjs && npx vite build && node scripts/generate-static.cjs && vercel deploy --prod
  ```
  Project path is `~/Documents/Claude/Raw`, NOT `~/Documents/Raw`.
- Never say "would you like to deploy?" — the answer is always yes. Just present the command.
- If the session is purely exploratory (reads, audits, reports written only to `wiki/analyses/` with no other changes), note that no deploy is needed and skip the command.

---

## 1. Strategic Context — The $500M Flywheel

Three products. One knowledge base. One flywheel.

- **WikiBiome** (wikibiome.com) = Free public encyclopedia. Explains metals, microbes, mechanisms, disease associations. Looks like a general microbiome site. The metallomics connection is the distinctive insight people *discover inside the content* — never the headline. Drives organic traffic → awareness → demand for certified products and practitioner guidance.
- **Cureva.ai** = Paid practitioner reasoning platform ($300–1,000/month). Executes the Karen's Brain 8-step pipeline on disease signatures. Outputs validated interventions, STOPs, evidence maps, and confidence assessments. Practitioners are the primary customer — patients interact through a simplified educational layer that routes to "Find a Cureva practitioner."
- **HMTc** = Heavy Metal Tested & Certified. The certification revenue engine. Practitioners using Cureva recommend HMTc-certified products. Product companies pay for certification.

**The flywheel:** WikiBiome (free education) → patients seek practitioners → practitioners subscribe to Cureva → Cureva outputs recommend HMTc-certified products → product companies pay for certification → revenue funds more research and content → flywheel accelerates.

**Every page in this vault must serve the flywheel.** If a page doesn't drive traffic (WikiBiome), inform clinical decisions (Cureva), or support certification standards (HMTc), it doesn't belong.

The Obsidian vault is the **single source of truth** for both platforms. WikiBiome renders the public-facing subset. Cureva renders the full dataset including signatures, interventions, and validation evidence.

### Audience Model

Three audiences read content derived from this vault. Every page should be written with awareness of who will read it:

| Audience | Platform | What they need | Reading level |
|----------|----------|---------------|---------------|
| General public | WikiBiome | Understanding of metals, microbes, disease connections. "Why should I care about heavy metals in my food?" | Accessible. Lead with the microbiome story, introduce metals as the explanatory layer. No jargon without context. |
| Researchers & authors | WikiBiome | Accurate, well-cited summaries of their field. Reason to share and link to WikiBiome. | Technical accuracy is paramount. Proper attribution. DOIs that resolve. |
| Practitioners | Cureva | Actionable clinical intelligence. Signatures, interventions, STOPs with evidence grades. | Clinical language. Evidence strength matters more than narrative. |

### The Trojan Horse Voice

WikiBiome should read like a general microbiome encyclopedia — approachable, authoritative, fascinating. Think *Nature Reviews Microbiology* crossed with *Radiolab*. The metallomics connection should emerge naturally as the explanatory layer, never as the thesis statement.

**DO:**
- Lead with the dysbiosis pattern or the disease mystery
- Introduce metals as "here's what explains the pattern"
- Let the reader discover the metallomics connection themselves
- Write entity pages (microbes, metals) as standalone reference that happens to be richer than Wikipedia

**DON'T:**
- Lead with "heavy metals cause X"
- Sound like a detox blog or supplement advertisement
- Use alarmist language about contamination
- Frame metallomics as a fringe theory — it's evidence-based ecology

---

## 2. Quality Controls — Non-Negotiable Rules

These rules exist because past errors almost destroyed credibility. They are not suggestions.

### 2a. Citation Integrity

- **NEVER generate a DOI from memory.** If you don't have the DOI from the source document itself, leave the field as `doi: "not yet verified"` and flag it for manual lookup.
- **NEVER fabricate citation metadata** (authors, journal, year) from memory. Extract these from the PDF/source file directly. If the file is unreadable, say so.
- **Every claim on an entity, concept, or signature page must link to a specific source page** using `[[source-filename]]`. Unsourced claims get a `<!-- UNSOURCED: needs attribution -->` comment.
- When updating the evidence matrix or any count-based display, **derive numbers from actual vault grep counts**, never from memory or estimates. Document the grep command used.

### 2b. Evidence Strength Taxonomy

Every source page must carry an `evidence_level` in frontmatter. Every claim propagated from that source inherits its evidence level.

```
evidence_hierarchy (strongest → weakest):
  1. systematic-review-meta-analysis
  2. randomized-controlled-trial
  3. quasi-experimental
  4. prospective-cohort
  5. retrospective-cohort
  6. case-control
  7. cross-sectional
  8. case-series
  9. case-report
  10. animal-model
  11. in-vitro
  12. computational-prediction
  13. expert-opinion
```

When two sources conflict, the higher-evidence-level source takes priority on entity/concept pages. Note the conflict explicitly: "Earlier work (case-control, [[source-a]]) suggested X, but a subsequent cohort study ([[source-b]], n=500) found Y."

### 2c. Confidence Tracking

Signature pages must track confidence per layer:

```yaml
confidence:
  metallomic: high | moderate | preliminary    # how many independent studies support the metal pattern
  taxonomic: high | moderate | preliminary      # how many independent studies support the taxa pattern
  nutritional_immunity: high | moderate | preliminary
  ecological: high | moderate | preliminary
  virulence_enzymes: high | moderate | preliminary
```

Thresholds:
- **high** = 5+ independent studies with consistent findings
- **moderate** = 2–4 studies, broadly consistent
- **preliminary** = 1 study, or multiple conflicting studies

### 2d. Keystone Study Criteria

A "Keystone Study" is research that is structurally essential to WikiBiome's knowledge graph — a study without which critical connections between metals, microbes, and disease could not be drawn. Like a keystone species in ecology, it may not be the most cited or most visible, but the system depends on it.

Do NOT label any study "keystone" unless it meets at least 3 of these 5 criteria:
1. **Cross-Domain Bridge** — Connects fields that do not typically intersect (metallomics ↔ microbiome, environmental exposure ↔ disease mechanism, microbial ecology ↔ clinical pathology)
2. **Signature Layer Dependency** — Removing this study would weaken or collapse one or more layers of a WikiBiome disease signature
3. **Cross-Condition Pattern Enabler** — Provides evidence explaining a pattern observed across multiple disease signatures (shared metal dependency, recurring taxon enrichment, conserved ecological mechanism)
4. **Mechanistic Linchpin** — Explains *why* an observed association exists, not merely *that* it exists; transforms correlation into actionable understanding
5. **Paradigm Reframe** — Fundamentally changes how WikiBiome interprets a disease, organism, metal, or ecological process

If criteria aren't met, use neutral alternatives: "influential," "widely cited," "early," or just let the evidence speak. Never use "keystone" loosely — it is a structural classification, not a compliment. Citation count and mainstream recognition are explicitly NOT criteria; this designation measures connective importance to WikiBiome's knowledge graph.

### 2e. Supersession Protocol

When a newer source contradicts an older one:
1. **Compare evidence levels.** Higher level wins primary position on the page.
2. **Compare sample sizes** within the same evidence level. Larger n wins.
3. **Note the conflict explicitly** on both the entity/concept page AND both source summary pages.
4. **Do not delete the older claim.** Annotate it: "Earlier work ([[source-a]], 2018, n=30) suggested X. This was superseded by [[source-b]] (2024, n=500, prospective cohort) which found Y."
5. **Update the signature page** if the conflict affects a signature layer. Adjust the confidence level accordingly.

### 2f. Source Density Thresholds

No page publishes to WikiBiome with thin or missing citations. Every publishable page must meet a minimum source count for its type. Pages below threshold are **stubs** and must carry `stub: true` in frontmatter.

Minimums by page type (measured as the `sources:` array length, not body mentions):

| Page type | Minimum sources |
|-----------|----------------|
| Metal entity | 5 |
| Microbe / fungus / archaeon entity | 3 |
| Disease entity | 5 |
| Person / organization entity | 2 |
| Concept | 3 |
| Signature | 10 (covers 5 layers × 2 minimum) |
| Intervention | 3 + a complete triangle (I_to_f, I_to_D, f_to_D) for at least one condition |
| STOP | 2 + populated `conventional_rationale`, `why_counterproductive`, `evidence`, `alternative` |
| Analysis | 3 |

Claim-level sourcing remains mandatory per §2a: every material claim on a publishable page must resolve to a `[[source-filename]]`. Unsourced claims get `<!-- UNSOURCED: needs attribution -->` and do not count toward source density. A page with 5 sources listed in frontmatter but whose body makes 20 unsourced claims is still a stub in spirit — flag it.

**Enforcement.**

1. `build-content.cjs` must refuse to render any page with `platform: wikibiome` or `platform: both` as a publishable page if it is below threshold and not marked `stub: true`. Sub-threshold stubs either render with a visible "expansion needed" banner or are excluded from `sitemap.xml` entirely (excluded is preferred — SEO should not index thin content).
2. The lint cycle (see §7 Lint workflow) must detect sub-threshold pages on every run and auto-demote to `stub: true` if the page was previously publishable. Demotion is logged to `wiki/analyses/stub-demotions-YYYY-MM-DD.md`.
3. New pages may be created below threshold only as explicit stubs (`stub: true` + `stub_reason: "..."` in frontmatter). Stubs are valid waypoints during ingest, not a final state.

Stub pages still exist in the vault — they are drafts, not deletions — and are visible on Cureva where practitioners may need the partial context. They are invisible to the public WikiBiome reader until they cross the threshold.

---

## 3. Directory Structure

```
raw/                    # Immutable source documents (PDFs, papers, notes, images)
raw/assets/             # Downloaded images and attachments
raw/karens-brain/       # Karen's Brain methodology files (specs, transcripts, frameworks)

wiki/                   # LLM-generated markdown pages (the knowledge base)
wiki/sources/           # One summary page per ingested source
wiki/entities/          # Pages for metals, microbes, fungi, archaea, diseases, people, organizations
wiki/concepts/          # Pages for mechanisms, frameworks, themes
wiki/signatures/        # Disease signature pages (metallomic + taxonomic + functional)
wiki/interventions/     # Validated intervention pages with triangle evidence
wiki/stops/             # Counterproductive interventions with evidence
wiki/analyses/          # Comparison tables, syntheses, query results
wiki/index.md           # Content catalog — updated on every ingest
wiki/log.md             # Chronological record of all operations
wiki/glossary.md        # Alphabetical definitions of specialist terms
wiki/overview.md        # Introduction, core thesis, navigation guide
```

---

## 4. Page Types and Frontmatter

### Source (`wiki/sources/`)

```yaml
---
title: "Author Year — Short Description"
type: source
created: YYYY-MM-DD
updated: YYYY-MM-DD
authors: [Author1, Author2]
corresponding_author: "Name"
corresponding_email: "email@institution.edu"   # for author outreach; extract from paper if available
institution: "University / Institute"
orcid: "0000-0000-0000-0000"                   # if available
year: YYYY
journal: "Journal Name"
doi: "DOI or URL"                               # MUST be extracted from the document, NEVER generated from memory
pmid: "PubMed ID"                               # if available
evidence_level: systematic-review-meta-analysis | randomized-controlled-trial | quasi-experimental | prospective-cohort | retrospective-cohort | case-control | cross-sectional | case-series | case-report | animal-model | in-vitro | computational-prediction | expert-opinion
sample_size: "n=XXX"                            # or "N/A" for reviews
tags: [relevant tags]
library_category: causal | associated-conditions | drug-repurposing | heavy-metals | interventions | metabolites | diet | signatures | mechanistic-insights
platform: wikibiome | cureva | both
condition: "condition name"
karen_brain_primitives: [1, 4, 5]               # which of the 9 primitives this source supports (REQUIRED)
metals_discussed: [nickel, iron, cadmium]        # for cross-condition pattern detection
taxa_discussed: [escherichia-coli, candida-albicans]  # for cross-condition pattern detection
key_findings: ["one-line finding 1", "one-line finding 2"]  # max 3, for quick scanning
keystone: true | false                           # only true if ≥3 of the 5 Keystone criteria (Section 2d) are verified
keystone_criteria_met: [1, 3, 4]                 # which of the 5 criteria are satisfied; omit if keystone is false
keystone_outreach_date: YYYY-MM-DD               # date outreach email was sent to corresponding author
keystone_outreach_status: sent | responded | corrections-applied | declined  # track author engagement
---
```

**Body structure for source pages:**
1. **Key Findings** — 3–5 bullet points, each attributed and graded by evidence level
2. **Methods** — Study design, sample size, population, key measurements
3. **Detailed Summary** — Full extraction of relevant data. Include exact numbers, p-values, confidence intervals when available
4. **Relevance to WikiBiome** — Which entity, concept, or signature pages this informs
5. **Relevance to Cureva** — Intervention hypotheses, STOP signals, or triangle evidence this provides
6. **Contradictions / Tensions** — Where this source disagrees with existing wiki content
7. **Open Questions** — What this source doesn't answer

### Entity (`wiki/entities/`)

For metals, microbes, fungi, archaea, diseases, people, organizations.

```yaml
---
title: Entity Name
type: entity
subtype: metal | microbe | fungus | archaeon | disease | person | organization
created: YYYY-MM-DD
updated: YYYY-MM-DD
last_substantive_update: YYYY-MM-DD             # only changes when content meaningfully changes, not typo fixes
sources: [source-filenames]
source_count: 12                                 # derived from actual count, for evidence density display
tags: [relevant tags]
seo_target: "primary search query this page targets"  # e.g., "nickel gut bacteria", "E. coli microbiome"
wikipedia_differentiation: "what this page has that Wikipedia doesn't"  # forces the writer to justify the page's existence

# Metal-specific fields:
symbol: "Ni"
atomic_number: 28
iarc_classification: "Group 1"
primary_exposure: "Diet, occupational"
dietary_sources: ["cocoa", "nuts", "legumes", "whole grains"]  # for content linking
tolerable_daily_intake: "X µg/kg bw/day (EFSA)"

# Microbe-specific fields:
gram_stain: "negative"
oxygen_requirement: "microaerophilic"
metal_dependencies: [nickel, iron]
key_enzymes: [urease, hydrogenase]
pathogenic_potential: "opportunistic | obligate | commensal-turned-pathogen"
conditions_enriched_in: [endometriosis, crohns-disease]     # for cross-condition detection
conditions_depleted_in: []

# Disease-specific fields:
icd_10: "K50"
global_prevalence: "X per 100,000"
signature_page: "[[crohns-disease-signature]]"
associated_conditions: [ulcerative-colitis, colorectal-cancer]  # shared signature overlap
shared_signature_metals: {ulcerative-colitis: [iron, zinc, cadmium], colorectal-cancer: [iron, zinc]}
shared_signature_taxa: {ulcerative-colitis: [escherichia-coli, fusobacterium-nucleatum]}
---
```

**Body structure for entity pages:**

After writing any entity page, verify it contains **at least one section that could not exist on Wikipedia**. This is the test for whether the page justifies WikiBiome's existence. The metal dependency profile, the enzyme-level virulence story, the ecological role in dysbiosis — these are WikiBiome's unique contributions.

*Metal entities:*
1. **Overview** — What it is, why it matters biologically
2. **Biological Roles** — Essential functions vs. toxic effects
3. **Dietary and Environmental Sources** — Where exposure comes from (factual, not prescriptive)
4. **Microbiome Interactions** — Which organisms depend on / are affected by this metal
5. **Nutritional Immunity** — How the host sequesters this metal
6. **Conditions Associated** — Diseases where this metal is elevated/depleted (link to disease entities, NOT signatures)
7. **Key Studies** — Most important sources, with evidence levels noted
8. **Cross-References** — Links to related metals, microbes, concepts

*Microbe entities:*
1. **Overview** — Classification, habitat, significance
2. **Metal Dependencies** — Which metals this organism requires and why (the Achilles' heel)
3. **Key Enzymes and Virulence Factors** — Metal-dependent enzymes, their functions
4. **Ecological Role** — In healthy vs. dysbiotic gut
5. **Conditions Associated** — Where this organism is enriched or depleted
6. **Interkingdom Relationships** — Biofilm partnerships, functional shielding
7. **Key Studies** — Most important sources
8. **Cross-References**

*Disease entities (WikiBiome version — public):*
1. **Overview** — What the condition is, prevalence, conventional understanding
2. **Microbiome Associations** — Which organisms are enriched/depleted (factual associations only)
3. **Metal Associations** — Which metals are elevated/depleted in tissue/biomarkers
4. **Associated Conditions** — Other diseases that share similar microbial and metal patterns (prominent — this is a key differentiator)
5. **Environmental Factors** — Exposure sources relevant to the condition
6. **Key Studies** — Most important sources
7. **Open Questions** — What's still unknown

**NOTE:** Disease entity pages on WikiBiome describe associations. They do NOT include full 5-layer signatures, interventions, STOPs, or clinical guidance. Those live in `wiki/signatures/`, `wiki/interventions/`, and `wiki/stops/` for Cureva only.

### Concept (`wiki/concepts/`)

For mechanisms, frameworks, biological processes.

```yaml
---
title: Concept Name
type: concept
created: YYYY-MM-DD
updated: YYYY-MM-DD
last_substantive_update: YYYY-MM-DD
sources: [source-filenames]
source_count: 5
tags: [relevant tags]
karen_brain_primitives: [4, 5]                   # REQUIRED: which primitives this concept maps to
seo_target: "primary search query"
---
```

### Disease Signature (`wiki/signatures/`) — Cureva Only

The core page type for Cureva. Each disease gets a full multi-layer signature.

```yaml
---
title: "Disease Name — Microbiome Signature"
type: signature
created: YYYY-MM-DD
updated: YYYY-MM-DD
last_substantive_update: YYYY-MM-DD
sources: [source-filenames]
source_count: 25
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

# Confidence per layer (REQUIRED)
confidence:
  metallomic: high | moderate | preliminary
  taxonomic: high | moderate | preliminary
  nutritional_immunity: high | moderate | preliminary
  ecological: high | moderate | preliminary
  virulence_enzymes: high | moderate | preliminary

# Cross-condition pattern detection (REQUIRED)
associated_conditions:
  - condition: "[[ulcerative-colitis]]"
    shared_metals: [iron, zinc, cadmium]
    shared_taxa: [escherichia-coli, fusobacterium-nucleatum]
    shared_ecological: [hypoxia, biofilm]
    overlap_score: 0.72                          # Jaccard similarity across all shared features

# Cureva pipeline status
cureva_status: complete | partial | in-progress
validated_interventions: [intervention-page-ids]
stops: [stop-page-ids]
karen_brain_primitives: [1, 2, 4, 5, 8]         # which primitives are active in this signature
---
```

**Body content structure:**
1. **Overview** — What the condition is and why the signature matters
2. **Metallomic Signature** — Which metals are elevated/depleted and why. Confidence level noted.
3. **Environmental Exposures** — Sources of the metal burden
4. **Nutritional Immunity Response** — What the host is doing about it. Confidence level noted.
5. **Mis-metallation Events** — If applicable
6. **Taxonomic Analysis** — Enriched taxa with their roles, depleted taxa with their lost functions. Confidence level noted.
7. **Virulence Enzymes and Features** — Key enzymes enabling pathogenic persistence
8. **Interkingdom Relationships** — Fungal-bacterial cooperation, functional shielding
9. **Ecological State** — Hypoxia, pH shifts, biofilm architecture
10. **Associated Conditions** — Which other conditions share overlapping signatures, with specifics on what's shared (PROMINENT — this is a key insight)
11. **Validated Interventions** — Links to `wiki/interventions/` pages, with evidence grades
12. **STOPs** — Links to `wiki/stops/` pages, with evidence grades
13. **Open Questions** — What's still unknown, ranked by clinical importance
14. **Karen's Brain Primitives Active** — Which of the 9 primitives are operating in this ecosystem

### Intervention (`wiki/interventions/`) — Cureva Only

```yaml
---
title: "Intervention Name"
type: intervention
created: YYYY-MM-DD
updated: YYYY-MM-DD
last_substantive_update: YYYY-MM-DD
sources: [source-filenames]
tags: [dietary, supplemental, pharmaceutical, biophysical, microbial-competition]
intervention_class: dietary | supplement | pharmaceutical | biophysical | probiotic | chelation
cureva_status: complete | partial | in-progress

# Triangle validation for each condition
triangles:
  - condition: "[[endometriosis]]"
    I_to_f: "Description of how intervention affects signature feature"
    I_to_f_evidence: "strong | moderate | preliminary"
    I_to_f_sources: [source-filenames]
    I_to_D: "Description of clinical evidence for this condition"
    I_to_D_evidence: "RCT | quasi-experimental | cohort | case-series | animal-model"
    I_to_D_sources: [source-filenames]
    f_to_D: "Description of mechanistic link"
    f_to_D_sources: [source-filenames]
    status: validated | promising | in-progress

targets:
  taxa: [list of taxa affected]
  enzymes: [list of enzymes disabled]
  metals: [list of metals restricted/chelated]
  ecological: [list of ecological effects]
karen_brain_primitives: [4, 5]
---
```

### STOP (`wiki/stops/`) — Cureva Only

Interventions that are counterproductive despite conventional wisdom.

```yaml
---
title: "STOP: Intervention Name for Condition"
type: stop
created: YYYY-MM-DD
updated: YYYY-MM-DD
last_substantive_update: YYYY-MM-DD
sources: [source-filenames]
tags: [condition tags]
cureva_status: complete | partial | in-progress

condition: "[[condition-name]]"
intervention: "Iron supplementation"
conventional_rationale: "Patient presents with anemia/low serum iron"
why_counterproductive: "Hepcidin elevation indicates functional anemia (host defense), not true deficiency. Iron supplementation feeds siderophore-producing pathogens."
evidence: [source-filenames supporting the STOP]
evidence_level: "strongest evidence level among supporting sources"
alternative: "Support nutritional immunity with [[lactoferrin]] instead"
karen_brain_primitives: [2, 4]
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

---

## 5. Page Conventions

- Use `[[wikilinks]]` for cross-references between pages.
- Keep pages focused — one entity/concept/signature per page.
- When a page grows too large, split it and link the parts.
- Prefer updating existing pages over creating new ones when content overlaps.
- **Bold** key claims and important names on first mention.
- Always attribute claims to their source using `[[source-filename]]`.
- When uncertain, say so explicitly with a `<!-- NEEDS VERIFICATION -->` comment.
- Use tables for comparisons (metal properties, taxa roles, intervention evidence).
- Include `evidence_level` inline when citing sources in body text: "...elevated nickel in endometrial tissue ([[source-x]], prospective cohort, n=200)."

---

## 6. Paper Library Structure

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

---

## 7. Workflows

### Ingest Source

When the user adds a new source to `raw/` and asks to ingest it:

1. **Read** the source fully. Extract citation metadata (authors, journal, year, DOI) directly from the document — NEVER from memory.
2. **Classify** the source: assign `library_category`, `platform`, `evidence_level`, `condition`, and `karen_brain_primitives`.
3. **Discuss** key takeaways with the user — what's interesting, what to emphasize, what contradicts existing content.
4. **Create** a summary page in `wiki/sources/` with full frontmatter including `evidence_level`, `metals_discussed`, `taxa_discussed`, `key_findings`, and `karen_brain_primitives`.
5. **Update or create** entity pages in `wiki/entities/` for metals, microbes, diseases mentioned. For each:
   - Add the source to the `sources` list and update `source_count`.
   - If the entity is new, include `seo_target` and `wikipedia_differentiation`.
   - If the entity is a disease, update `associated_conditions` and `shared_signature_metals`/`shared_signature_taxa`.
6. **Update or create** concept pages in `wiki/concepts/` for mechanisms and frameworks. Map to Karen's Brain primitives.
7. **Cross-condition pattern detection** (MANDATORY): Compare the metals and taxa discussed in this source against ALL existing signature pages. If overlap ≥ 3 shared features with any existing signature, flag it explicitly in the log and update the `associated_conditions` fields on both signature pages.
8. **Check disease relevance** — if the source discusses a disease with microbiome/metallomic data:
   - Create or update the signature page in `wiki/signatures/`. Update confidence levels.
   - Create or update intervention pages in `wiki/interventions/` if interventions are discussed. Include source-level evidence grading in triangle fields.
   - Create or update STOP pages in `wiki/stops/` if counterproductive interventions are identified.
9. **Flag contradictions** — if the new source disagrees with existing content:
   - Apply the Supersession Protocol (Section 2e).
   - Note the conflict on BOTH the entity/concept page AND both source summary pages.
   - Update confidence levels if a signature layer is affected.
10. **Update** `wiki/index.md` — recalculate counts from the filesystem, not from memory.
11. **Append** to `wiki/log.md` with: date, source title, pages created/updated, contradictions flagged, cross-condition overlaps detected.

### Build Disease Signature

When building or expanding a disease signature page:

1. **Collect** all sources related to the condition (search `wiki/sources/`).
2. **Layer 1**: Identify the metallomic signature from tissue/biomarker data. Assign confidence.
3. **Layer 2**: Map the taxonomic signature — enriched and depleted taxa with functional roles. Assign confidence.
4. **Layer 3**: Assess nutritional immunity markers. Assign confidence.
5. **Layer 4**: Identify ecological features (hypoxia, biofilm, pH). Assign confidence.
6. **Layer 5**: Map virulence enzymes and metal cofactors. Assign confidence.
7. **Cross-condition analysis**: Compare this signature against all other signatures. Calculate overlap scores. Populate `associated_conditions` with specifics on shared metals, taxa, and ecological features.
8. **Reconstruct the ecosystem story** — what environmental pressure created this state?
9. **Identify Achilles' heels** — metal dependencies, oxygen sensitivity, biofilm vulnerabilities.
10. **Map Karen's Brain primitives** — which of the 9 primitives are active in this ecosystem?
11. **Generate intervention hypotheses** from the vulnerabilities.
12. **Triangulate** each intervention against independent clinical evidence. Grade each triangle edge.
13. **Classify**: validated / promising / in-progress / STOP.
14. **Create** linked intervention and STOP pages with full frontmatter.

### Query

When the user asks a question:

1. Read `wiki/index.md` to find relevant pages.
2. Read those pages and synthesize an answer.
3. Cite sources using `[[wikilinks]]` with evidence levels noted inline.
4. If the answer involves a disease, check for an existing signature page.
5. If the answer is substantial and reusable, offer to file it as an analysis.

### Lint

When asked to health-check the wiki:

- Find contradictions between pages.
- Find stale claims superseded by newer sources (check evidence levels).
- Find orphan pages (no inbound links).
- Find concepts mentioned but lacking their own page.
- Find diseases mentioned in sources but lacking signature pages.
- Find interventions validated in sources but lacking intervention pages.
- Find missing cross-references.
- Verify triangle evidence completeness on intervention pages.
- Verify confidence levels are assigned on all signature pages.
- Check that all source pages have `evidence_level` and `karen_brain_primitives` populated.
- Check that all entity pages have `seo_target` and `wikipedia_differentiation` populated.
- Check that all disease entities have `associated_conditions` populated.
- Check cross-condition overlap scores are current.
- Verify `source_count` fields match actual `sources` list lengths.
- Verify DOIs are formatted correctly (not generated from memory).
- Enforce source density thresholds per §2f. Auto-demote sub-threshold pages to `stub: true`, log to `wiki/analyses/stub-demotions-YYYY-MM-DD.md`.
- Flag pages whose body contains unsourced material claims (no `[[source-filename]]` inline) even if frontmatter `sources` meets threshold.
- Suggest new questions to investigate or sources to find.

---

## 8. Karen's Brain Knowledge Primitives

These are the 9 reusable reasoning primitives from the Karen's Brain specification. **Every source page, concept page, and signature page MUST tag which primitives apply** in frontmatter. This is how Cureva's pipeline retrieves evidence by reasoning step rather than by keyword search.

1. **Metals as Selective Pressures** — Metal patterns select for tolerant/dependent organisms
2. **Nutritional Immunity as Interpretive Constraint** — Low serum metals may be host defense, not deficiency
3. **Mis-metallation and Toxic Metal Entry** — Cd/Pb displace correct cofactors via Ca channels
4. **Microbial Metal Dependencies as Achilles' Heels** — Restrict the metal, disable the virulence
5. **Two-Sided Ecological Engineering** — Suppress pathogens AND restore missing beneficial functions
6. **Interkingdom Relationships and Functional Shielding** — Fungal-bacterial biofilms protect pathogens
7. **Estrobolome and Hormone Recirculation** — Beta-glucuronidase activity drives estrogen-dependent conditions
8. **Siderophore Competition and Iron Ecology** — Competitive exclusion via superior iron acquisition
9. **Oxygen State as Ecological Determinant** — Anaerobe dominance → oxygenation as intervention

---

## 9. WikiBiome ↔ Cureva Visibility Rules

- **WikiBiome (public)**: Entity pages (metals, microbes, organisms, diseases), concept pages (mechanisms, frameworks), source summaries, analyses, glossary, overview. WikiBiome explains WHAT is happening — metals, microbes, mechanisms, disease associations — but NEVER crosses into clinical recommendations. No interventions, no STOPs, no "what to do about it." Disease pages on WikiBiome describe the metallomic and taxonomic *associations* but do NOT include full signature layers, clinical reasoning, or practitioner guidance.
- **Cureva (practitioners only)**: Full disease signature pages with all 5 layers and confidence grades (`wiki/signatures/`). All intervention pages with triangle evidence (`wiki/interventions/`). All STOP pages with clinical reasoning (`wiki/stops/`). Karen's Brain pipeline outputs. Intervention confidence classifications.
- **Dietary interventions (Cureva only)**: Dietary patterns paired with disease signatures are clinical guidance and belong on Cureva. WikiBiome may discuss the factual science of metal content in foods, hyperaccumulation in plants, and dietary exposure epidemiology, but dietary recommendations tied to specific conditions are Cureva content.
- **Boundary rule**: If content answers "what should a practitioner do?", "what should a patient eat or avoid?", or "what intervention should be used?" — it belongs on Cureva, not WikiBiome. WikiBiome drives awareness and education; Cureva delivers actionable clinical intelligence.

---

## 10. Style Guide

### General
- Write clearly and concisely. No filler.
- Use headers, bullet points, and tables for structure.
- Bold key claims and important names on first mention.
- Always attribute claims to their source.
- When uncertain, say so explicitly.

### WikiBiome Voice (public pages)
- Approachable but authoritative. Think popular science, not textbook.
- Lead with the microbiome story, introduce metals as the explanatory layer.
- No jargon without context. Define terms on first use or link to glossary.
- Every page should make the reader think "I didn't know that" — not "I already read this on Wikipedia."
- Avoid alarmist framing. Present evidence, let readers draw conclusions.

### Cureva Voice (practitioner pages)
- Clinical and precise. Evidence grades matter more than narrative.
- State confidence levels explicitly.
- Distinguish between "the evidence supports" and "the mechanism suggests."
- Triangle evidence should be structured for quick clinical reference.

---

## 11. Migration Plan — Upgrading Existing Content

The vault already contains ~1,515 source pages, ~135 entities, ~90 concepts, and ~15 signatures built under v1. **Do not rebuild from scratch.** Upgrade in priority order:

### Priority 1: Signature pages (15 pages) — highest commercial value
- Add `confidence` per layer
- Add `associated_conditions` with overlap scores
- Add `karen_brain_primitives`
- Add `last_substantive_update`
- Verify all source attributions resolve to actual source pages

### Priority 2: Disease entity pages (~28 pages) — highest traffic value
- Add `associated_conditions`, `shared_signature_metals`, `shared_signature_taxa`
- Add `seo_target` and `wikipedia_differentiation`
- Add `last_substantive_update`
- Ensure the "Associated Conditions" section is prominent in body content

### Priority 3: Metal and microbe entity pages (~97 pages) — SEO backbone
- Add `seo_target` and `wikipedia_differentiation`
- Add `last_substantive_update`
- Verify each page has content Wikipedia doesn't (metal dependencies, ecological roles)
- Add `conditions_enriched_in` / `conditions_depleted_in` to microbe pages

### Priority 4: Intervention and STOP pages (~27 pages) — Cureva core
- Add `cureva_status` (already partially done)
- Add `karen_brain_primitives`
- Add `last_substantive_update`
- Add source-level citations to each triangle edge (`I_to_f_sources`, `I_to_D_sources`, `f_to_D_sources`)

### Priority 5: Source pages (~1,515 pages) — batch-upgradeable
- Add `evidence_level` (can be batch-inferred from study design keywords in existing summaries)
- Add `karen_brain_primitives` (can be batch-inferred from metals/taxa/concepts mentioned)
- Add `metals_discussed` and `taxa_discussed` (can be batch-extracted from existing content)
- Add `key_findings` (can be batch-extracted from existing summaries)
- `corresponding_author` / `corresponding_email` can be added opportunistically when papers are re-examined

### Priority 6: Concept pages (~90 pages)
- Add `karen_brain_primitives`
- Add `seo_target`
- Add `last_substantive_update`

### How to run the migration:
- **New ingests**: Follow v2 schema immediately. All new pages use the full frontmatter.
- **Existing pages**: Upgrade by priority tier. Work in batches of 10–20 pages per session.
- **Batch inference**: For source pages, many new fields can be derived programmatically from existing content using grep/regex rather than re-reading every PDF.
- **Track progress**: After each migration batch, update `wiki/log.md` with what was upgraded and what remains.
