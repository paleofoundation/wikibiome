---
title: "DOI Corrections — 2026-04-19"
type: analysis
created: 2026-04-19
updated: 2026-04-19
sources: []
tags: [link-health, doi-integrity, citation-integrity, remediation]
platform: cureva
---

## Why this file exists

The Link Health audit on 2026-04-19 flagged 222 sources where the stored DOI resolves, but to a paper different from the stored title. Karen's recurring complaint — most recently the Chin-Chan 2015 citation on the Alzheimer's signature page — is that clicking a reference in the wiki can land on an unrelated paper. The renderer was not at fault. The **stored DOI values are wrong.**

Per §2a (Citation Integrity): "NEVER generate a DOI from memory." The only acceptable fix is verified lookup against an authoritative index (PubMed, Crossref). This file tracks that remediation.

## Triage buckets

Extracting the `### DOI resolves — but to the wrong title` table from `wiki/analyses/link-health-2026-04-19.md`, bucketed by stored-title vs. Crossref-title similarity:

| Bucket | Count | Interpretation |
|---|---:|---|
| Similarity = 0.00 | 67 | DOI is semantically wrong — resolves to an unrelated paper |
| Similarity 0.01–0.29 | 80 | Highly suspect; often wrong but occasionally a valid paper with a very different abbreviated title |
| Similarity ≥ 0.30 | 75 | Usually correct DOI, stored title is a shortened or authored alias |

The sim-0 bucket is the priority: these are the cases where clicking the link does not land on the stored-title paper. That is the specific bug Karen has raised three times.

## Corrections applied this session (verified via PubMed)

| File | Old DOI | New DOI | PMID | Evidence |
|---|---|---|---|---|
| `chin-chan-2015-environmental-pollutants-ad-pd.md` | `10.3389/fncel.2015.00170` | `10.3389/fncel.2015.00124` | 25914621 | PubMed match; title identical |
| `ahlstrom-2019-nickel-allergy-review.md` | `10.1111/cod.13272` | `10.1111/cod.13327` | 31140194 | PubMed match; title + all authors |
| `capdevila-2024-bacterial-metallostasis-sensing-trafficking.md` | `10.1021/acs.chemrev.4c00132` | `10.1021/acs.chemrev.4c00264` | 39658019 | PubMed match; title identical |
| `chernikova-2022-brain-gut-microbiome-asd.md` | `10.3390/nu14071459` | `10.3390/nu13124497` | 34960049 | PubMed match; title identical (pub date Dec 2021) |

Each corrected source file now carries `pmid`, `doi_verified: 2026-04-19`, and `doi_verified_source: pubmed`.

## Cases confirmed unresolvable via PubMed

Papers whose journals are not PubMed-indexed. These require Crossref title-search (currently egress-blocked from this sandbox) or manual lookup by Karen:

- `bergman-2016-low-nickel-diet-review.md` — *Journal of Clinical and Experimental Dermatology Research*
- `brock-2015-selenium-thyroid-autoimmunity.md` — *Journal of Restorative Medicine*

These should be flagged with `<!-- NEEDS VERIFICATION -->` until Crossref access is restored.

## Remaining work

Sixty-three sim-0 entries remain to be resolved, plus ~80 sim-0.01–0.29 entries that should be spot-verified. The resolution procedure is mechanical and can be continued in subsequent sessions:

1. Read `/tmp/doi-zero-queries.json` (or regenerate from the link-health audit — see regeneration snippet below).
2. For each entry, run `search_articles` on the PubMed MCP with `LastAuthor[Author] AND YEAR[pdat] AND KEYWORD[Title]` using 1–2 salient keywords from the stored title.
3. Fetch metadata for any single PMID hit; verify title matches.
4. Write back the new DOI along with `pmid`, `doi_verified: YYYY-MM-DD`, `doi_verified_source: pubmed`.
5. Append the row to this file's corrections table.
6. If a paper is not PubMed-indexed, log it in the "unresolvable via PubMed" section above.

### Regeneration snippet

If the triage JSON is lost, regenerate with:

```bash
node -e "
const fs=require('fs');
const text=fs.readFileSync('wiki/analyses/link-health-2026-04-19.md','utf8');
const lines=text.split(/\r?\n/);
const rows=[]; let inSec=false;
for(const line of lines){
  if(line.startsWith('### DOI resolves — but to the wrong title')) { inSec=true; continue; }
  if(inSec && line.startsWith('##')) break;
  if(!inSec) continue;
  const m=line.match(/^\| \`([^\`]+)\` \| \`([^\`]*)\` \| ([^|]+) \| ([^|]+) \| ([\d.]+) \|/);
  if(!m) continue;
  rows.push({file:m[1], doi:m[2], stored:m[3].trim(), crossref:m[4].trim(), sim:parseFloat(m[5])});
}
const zero=rows.filter(r=>r.sim===0);
fs.writeFileSync('/tmp/doi-triage.json', JSON.stringify({total:rows.length, zero, rows}, null, 2));
console.log('total:', rows.length, 'sim-zero:', zero.length);
"
```

## Tooling follow-up

The link-health audit currently flags the problem but stops there. A next-step improvement would be to extend `scripts/link-health-audit.cjs` with a `--resolve-missing` flag that:

- Accepts a list of files to attempt auto-resolution on
- Queries PubMed (and Crossref when egress is available) by author + year + title
- Writes verified DOIs back to source frontmatter with provenance
- Logs to a dated `wiki/analyses/doi-corrections-YYYY-MM-DD.md`

That is worth building once ≥20 manual corrections have confirmed the pattern reliably. At present the per-paper queries still need human judgment on ambiguous matches (shared author names, series papers with similar titles), so full automation is premature.

## Systemic point

Once this pass is complete, the link-health audit and source ingest should be tightened so new sources cannot land in the vault with unverified DOIs. The ingest workflow already says "NEVER generate a DOI from memory" — the next enforcement step is to require `doi_verified` in frontmatter for any source whose DOI was added without a PMID attached, and to fail the build for any source page lacking both fields. That's a §2a rule that should be teeth, not a norm.
