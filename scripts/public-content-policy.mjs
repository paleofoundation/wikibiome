export const PUBLIC_CONTENT_POLICY_VERSION = 2;
export const MIN_PUBLIC_ANALYSIS_REFERENCES = 2;

const OPERATIONAL_PAGE_PREFIXES = [
  "landmark-outreach-email",
  "outreach-email-",
];

const OPERATIONAL_ANALYSIS_PREFIXES = [
  "adversarial-audit-",
  "author-outreach-campaign-",
  "auto-discovered-stubs-",
  "batch-preview-",
  "boundary-violations-",
  "broken-links-",
  "build-refusals-",
  "categorize-",
  "dedup-",
  "doi-corrections-",
  "gaps-and-improvements-",
  "health-check-",
  "ingest-audit-",
  "ingest-priority-queue-",
  "keystone-outreach-",
  "link-health-",
  "lint-",
  "lint-report-",
  "manual-review-",
  "mention-density-gaps-",
  "orphans-",
  "overnight-",
  "semantic-pass-",
  "stub-demotions-",
  "supersessions-",
  "zero-reference-pages-",
];

const OPERATIONAL_LANGUAGE = /\b(?:automated (?:run|scheduled)|batch preview|boundary violations?|build refusals?|continuous improvement log|health check|ingest (?:audit|priority queue|resume)|lint report|manual review items?|operational plan|orphan pages?|resume file|rule \d+|scheduled task|semantic (?:integrity )?pass|stub demotions?|supersession compliance|vault at)\b/i;
const STRONG_OPERATIONAL_LANGUAGE = /\b(?:automated (?:run|scheduled)|batch preview|continuous improvement log|operational plan|resume file|scheduled task|vault at)\b/i;
const OPERATIONAL_TAGS = new Set(["batch-preview", "boundary-discipline", "maintenance", "operations", "quality-control"]);

function normalizeId(value) {
  return String(value ?? "")
    .replace(/\.md$/i, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

function analysisReferenceCount(page) {
  const declared = Array.isArray(page.sources) ? page.sources.length : 0;
  const frontmatter = Array.isArray(page.frontmatter?.sources) ? page.frontmatter.sources.length : 0;
  return Math.max(Number(page.sourceCount) || 0, declared, frontmatter);
}

export function publicContentExclusionReason(page) {
  if (!page) return null;

  const id = normalizeId(page.id);
  if (OPERATIONAL_PAGE_PREFIXES.some((prefix) => id.startsWith(prefix))) {
    return "internal-operational-template";
  }
  if (page.category !== "analysis") return null;

  const referenceCount = analysisReferenceCount(page);
  if (OPERATIONAL_ANALYSIS_PREFIXES.some((prefix) => id.startsWith(prefix))) {
    return "internal-operational-analysis";
  }

  const operationalText = [page.title, page.overview, ...(page.tags ?? [])].filter(Boolean).join(" ");
  const hasOperationalTag = (page.tags ?? []).some((tag) => OPERATIONAL_TAGS.has(String(tag).toLowerCase()));
  if (STRONG_OPERATIONAL_LANGUAGE.test(operationalText)) return "internal-operational-analysis";
  if (OPERATIONAL_LANGUAGE.test(operationalText) && (referenceCount < MIN_PUBLIC_ANALYSIS_REFERENCES || hasOperationalTag)) {
    return "internal-operational-analysis";
  }
  if (referenceCount < MIN_PUBLIC_ANALYSIS_REFERENCES) return "analysis-without-published-evidence";
  return null;
}

export function getPublicContentExclusions(pages) {
  return (pages ?? []).flatMap((page) => {
    const reason = publicContentExclusionReason(page);
    return reason ? [{ id: normalizeId(page.id), title: page.title, reason }] : [];
  });
}

export function applyPublicContentPolicy(input) {
  const exclusions = getPublicContentExclusions(input.pages);
  const excludedIds = new Set(exclusions.map((entry) => entry.id));
  const isPublicId = (value) => !excludedIds.has(normalizeId(value));

  const pages = input.pages
    .filter((page) => isPublicId(page.id))
    .map((page) => ({
      ...page,
      ...(typeof page.overview === "string" ? { overview: page.overview.replace(/^\s*---[\s\S]*?---\s*/, "").trim() } : {}),
      ...(Array.isArray(page.related) ? { related: page.related.filter((item) => isPublicId(item?.id)) } : {}),
      ...(Array.isArray(page.wikilinks) ? { wikilinks: page.wikilinks.filter(isPublicId) } : {}),
      ...(Array.isArray(page.backlinks) ? { backlinks: page.backlinks.filter(isPublicId) } : {}),
    }));

  const graphNodes = (input.graph?.nodes ?? []).filter((node) => isPublicId(node.id));
  const graphNodeIds = new Set(graphNodes.map((node) => normalizeId(node.id)));
  const graphLinks = (input.graph?.links ?? []).filter((link) => (
    graphNodeIds.has(normalizeId(link.source)) && graphNodeIds.has(normalizeId(link.target))
  ));

  return {
    content: {
      ...input,
      _stats: {
        ...input._stats,
        analyses: pages.filter((page) => page.category === "analysis").length,
        totalPages: pages.length,
      },
      pages,
      graph: input.graph ? { ...input.graph, nodes: graphNodes, links: graphLinks } : input.graph,
    },
    exclusions,
  };
}
