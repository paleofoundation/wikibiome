# ORCID logo links and specific page history

Sites source: `7a95e122e81c6d442311db07331bc2dc0b45aa38`.
Base: `0cd4e85a350e4068dc6600ff8d2c1255c99df1a6` (live version 85).
Patch: `ops/patches/orcid-and-specific-history-sites.patch`.
Patch SHA-256: `5074be88dcff3aa26cdf7095fc469a44e4ba99990f282b5380893057173ef5d2`.

ORCID identity displays use the ORCID-created SVG linked to the author's registry record, with author-name accessibility labels and no visible identifier strings. This covers profiles, directory cards, source claims, discussions, activity, accepted proposals, organizations, dashboards, account identity, private message headers and administrator shortlists. Names that formerly fell back to an identifier now fall back to Researcher. Identifier values remain in route targets, structured data, authentication and input payloads.

All 2,046 material history entries now describe actual section additions/removals, changed wording, citations, public metadata and reference corrections. The generator uses before/after snapshots, preserves uncertainty in excerpts, and the build audit rejects generic titles. One previously unavailable diff remains omitted; article content and source snapshot are unchanged.

Validation: 30 tests, typecheck and production build passed; corpus, editorial and scientific-media audits passed. Binary patch reverse-apply check passed. This is one combined release PR and one Sites publish, preserving audience and hosting. The legacy Vite app is not deployed.

ORCID asset provenance: https://commons.wikimedia.org/wiki/File:ORCID_iD.svg (created by ORCID, CC0; ORCID trademarks apply). Display guidance: https://info.orcid.org/documentation/integration-guide/orcid-id-display-guidelines/.
