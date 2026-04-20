---
title: "Batch Preview — Operational Analyses → Cureva"
type: internal
platform: cureva
created: 2026-04-19
tags: [batch-preview, boundary-discipline, rule-5]
---

# Batch Preview — Tagging Dated Operational Analyses `platform: cureva`

**Purpose:** Per Rule 5 (batch preview before bulk transform), preview the diff on 3 representative dated operational analysis files before applying `platform: cureva` to all 27.

**Why this change:** Dated operational analyses (audits, lint reports, overnight logs, DOI correction logs, stub demotions, boundary violations, etc.) are internal maintenance records. They document what the system did to itself — they are not public educational content. Per §9 and Rule 8, they must not render on wikibiome.com. The fix is a single-field frontmatter addition (`platform: cureva`) that routes them to Cureva's full-dataset view only.

**Scope:** 27 files in `wiki/analyses/` matching the dated-operational pattern. Undated content analyses (`dietary-metal-exposure-by-life-stage.md`, `dietary-metal-paradoxes.md`, `metal-disease-matrix.md`, `shared-pathobionts-across-signatures.md`) are legitimate public content and are EXCLUDED.

---

## Sample 1 — `adversarial-audit-2026-04-19.md`

### Before

```yaml
---
title: "Adversarial Audit — 2026-04-19"
type: analysis
created: 2026-04-19
---
```

### After

```yaml
---
title: "Adversarial Audit — 2026-04-19"
type: analysis
platform: cureva
created: 2026-04-19
---
```

### Rationale

Hostile-reviewer audit of 5 pages. Internal QA output. Not educational for public readers.

---

## Sample 2 — `lint-report-2026-04-14.md`

### Before

```yaml
---
title: "WikiBiome Lint Report — 2026-04-14"
type: analysis
created: 2026-04-14
updated: 2026-04-14
tags: [lint, health-check, maintenance]
---
```

### After

```yaml
---
title: "WikiBiome Lint Report — 2026-04-14"
type: analysis
platform: cureva
created: 2026-04-14
updated: 2026-04-14
tags: [lint, health-check, maintenance]
---
```

### Rationale

Automated health check output. Existing `tags: [lint, health-check, maintenance]` already declare this as internal maintenance. The `platform: cureva` field makes the visibility explicit to the build.

---

## Sample 3 — `overnight-resume-2026-04-18.md`

### Before

```yaml
---
title: "Overnight Resume — 2026-04-18"
type: analysis
created: 2026-04-18
updated: 2026-04-18
---
```

### After

```yaml
---
title: "Overnight Resume — 2026-04-18"
type: analysis
platform: cureva
created: 2026-04-18
updated: 2026-04-18
---
```

### Rationale

Per Rule 6, resume files document where an autonomous session stopped. They are Claude's working memory across sessions, not reader-facing content.

---

## Transform

Add `platform: cureva` as the second line of frontmatter (immediately after `type:`) on each of the 27 files. No body edits, no other frontmatter edits.

## Full file list (27)

```
adversarial-audit-2026-04-19.md
auto-discovered-stubs-2026-04-19.md
batch-preview-2026-04-19-auto-discovered-stubs.md
batch-preview-2026-04-19-stub-demotions.md
boundary-violations-2026-04-18.md
broken-links-2026-04-16.md
build-refusals-2026-04-19.md
doi-corrections-2026-04-19.md
gaps-and-improvements-2026-04-12.md
gaps-and-improvements-2026-04-13.md
gaps-and-improvements-2026-04-14.md
health-check-2026-04-14.md
ingest-audit-2026-04-18.md
link-health-2026-04-19.md
lint-2026-04-13.md
lint-report-2026-04-12.md
lint-report-2026-04-13.md
lint-report-2026-04-14.md
manual-review-2026-04-18.md
orphans-2026-04-16.md
overnight-2026-04-18-log.md
overnight-resume-2026-04-18.md
semantic-pass-2026-04-18-log.md
semantic-pass-resume-2026-04-18.md
stub-demotions-2026-04-19.md
supersessions-2026-04-18.md
zero-reference-pages-2026-04-19.md
```

## Verdict

Preview is clean. The diff is additive, minimal, and doesn't touch body content. Proceeding to full batch.
