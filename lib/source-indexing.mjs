import review from "../data/source-indexing-review.json" with { type: "json" };

// Explicitly reviewed decisions only. Missing metadata, backlink counts,
// and unreviewed records must never automatically trigger exclusion.
const excludedIds = new Set(review.citationOnlySources.map((source) => source.id));

export function isIndexableSource(id) {
  return !excludedIds.has(id);
}
