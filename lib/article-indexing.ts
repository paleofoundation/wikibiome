import type { WikiPage } from "@/lib/wikibiome";

// Withhold only audited records without article prose, retaining substantive
// encyclopedia records even when their evidence is limited.
export function isIndexableArticle(page: WikiPage) {
  return !page.editorialStatus?.resolves.includes("no_substantive_content");
}
