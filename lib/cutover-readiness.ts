import { getArticleMediaEntries } from "@/lib/article-media";
import { getMigrationReport } from "@/lib/readiness";
import { conditionOptions, getKeystoneStudies, knowledgeGraphStats } from "@/lib/research-tools";

export type CutoverStatus = "complete" | "active" | "external";

export type CutoverItem = {
  id: string;
  area: string;
  title: string;
  status: CutoverStatus;
  gate: "Required before DNS" | "Safe after launch";
  owner: string;
  evidence: string;
  nextAction?: string;
  href?: string;
};

const LEGACY_ARTICLE_ROUTES = 791;
const LEGACY_PUBLIC_ROUTE_CONTRACTS = 26;

export function getCutoverReport() {
  const migration = getMigrationReport();
  const articleMedia = getArticleMediaEntries();
  const keystoneStudies = getKeystoneStudies();
  const keystoneDoiReview = keystoneStudies.filter((study) => study.metadataStatus !== "verified DOI").length;

  const items: CutoverItem[] = [
    {
      id: "visual-system",
      area: "Design system",
      title: "High-contrast cool visual register",
      status: "complete",
      gate: "Required before DNS",
      owner: "Site system",
      evidence: "White and silver primary surfaces now separate the blue anatomical and scientific imagery from its background. Deep blue is reserved for navigation, data canvases, and emphasis.",
      href: "/",
    },
    {
      id: "legacy-article-routes",
      area: "Route continuity",
      title: "Legacy article URLs preserved",
      status: "complete",
      gate: "Required before DNS",
      owner: "Canonical article generator",
      evidence: `${LEGACY_ARTICLE_ROUTES} of ${LEGACY_ARTICLE_ROUTES} article URLs in the existing public sitemap still resolve from the synchronized corpus. Disease-signature duplicates redirect into their canonical disease record.`,
      href: "/search",
    },
    {
      id: "legacy-public-routes",
      area: "Route continuity",
      title: "Legacy public tools and utility routes mapped",
      status: "complete",
      gate: "Required before DNS",
      owner: "Routing layer",
      evidence: `${LEGACY_PUBLIC_ROUTE_CONTRACTS} public root, category, tool, support, participation, contact, and legal route contracts are retained directly or mapped to their new canonical destination.`,
      href: "/explore",
    },
    {
      id: "corpus-generator",
      area: "Content fidelity",
      title: "Canonical corpus generator",
      status: "complete",
      gate: "Required before DNS",
      owner: "Content pipeline",
      evidence: `${migration.totalRecords} upstream records generate ${migration.canonicalRoutes} canonical article routes and retain ${migration.sourceCommit.slice(0, 12)} as the source snapshot.`,
      href: "#corpus-ledger",
    },
    {
      id: "research-tools",
      area: "Research tools",
      title: "Graph, clusters, comparisons, and Keystone library",
      status: "complete",
      gate: "Required before DNS",
      owner: "Shared evidence generators",
      evidence: `${knowledgeGraphStats.nodes} canonical graph nodes, ${knowledgeGraphStats.connections.toLocaleString()} deduplicated connections, ${conditionOptions.length} condition signatures, and ${keystoneStudies.length} Keystone studies are generated from the same corpus as the articles.`,
      href: "/explore",
    },
    {
      id: "seo-contract",
      area: "Search continuity",
      title: "Canonical metadata, robots, and generated sitemap",
      status: "complete",
      gate: "Required before DNS",
      owner: "Publishing layer",
      evidence: "Canonical URLs use www.wikibiome.com, the new sitemap is generated from canonical articles and public tools, and private contribution surfaces are excluded from indexing.",
      href: "/sitemap.xml",
    },
    {
      id: "support-flow",
      area: "Operations",
      title: "Direct Stripe support flow and editorial firewall",
      status: "complete",
      gate: "Required before DNS",
      owner: "Microbiome Signatures LLC",
      evidence: "The customer-chosen-amount Stripe link, processor disclosure, thank-you route, and non-influence policy are connected without exposing payment credentials.",
      href: "/support",
    },
    {
      id: "moderation-owner",
      area: "Participation",
      title: "Owner moderation access",
      status: "complete",
      gate: "Required before DNS",
      owner: "WikiBiome owner",
      evidence: "Signed-in suggestions are stored in the contribution ledger and the site owner is assigned to the moderation queue through a private deployment setting.",
      href: "/contribute",
    },
    {
      id: "source-registry-review",
      area: "Editorial review",
      title: "Source metadata cleanup",
      status: "active",
      gate: "Safe after launch",
      owner: "Editorial team",
      evidence: `${migration.missingSourceMetadata} cited source identifiers require metadata completion; the pages remain readable and the warnings stay visible in the corpus ledger. ${keystoneDoiReview} Keystone records still need DOI or publication-status review.`,
      nextAction: "Resolve records in the review queue without suppressing their current evidence context.",
      href: "/readiness?status=review",
    },
    {
      id: "media-coverage",
      area: "Article media",
      title: "Reviewed scientific image coverage",
      status: "active",
      gate: "Safe after launch",
      owner: "Editorial media program",
      evidence: `${articleMedia.length} of ${migration.canonicalRoutes} canonical article routes currently have reviewed, provenance-labeled primary images. Unreviewed pages keep the anatomical system visual rather than receiving generic or speculative imagery.`,
      nextAction: "Continue category-by-category production using morphology, specimen, anatomy, and clinical-imaging standards.",
      href: "/article/nickel",
    },
    {
      id: "legal-owner-review",
      area: "Governance",
      title: "Owner review of privacy and terms copy",
      status: "external",
      gate: "Required before DNS",
      owner: "Microbiome Signatures LLC",
      evidence: "Current privacy and terms pages match the implemented sign-in, contribution, support, licensing, and educational-use flows, but final legal approval belongs to the business owner or counsel.",
      nextAction: "Approve the published baseline or return exact revisions before changing DNS.",
      href: "/terms",
    },
    {
      id: "upstream-refresh",
      area: "Content operations",
      title: "Automated upstream refresh cadence",
      status: "active",
      gate: "Safe after launch",
      owner: "Release operations",
      evidence: "The renderer has a reproducible paleofoundation/wikibiome synchronization command and commit-bound audit, but refreshes are currently release-driven rather than scheduled.",
      nextAction: "Choose a weekly or on-merge release trigger once the domain cutover is stable.",
      href: "/readiness",
    },
    {
      id: "custom-domain",
      area: "Domain cutover",
      title: "Attach www.wikibiome.com to the new Site",
      status: "external",
      gate: "Required before DNS",
      owner: "Domain administrator",
      evidence: "Both wikibiome.com hostnames are registered with the new Site and waiting for validation. GoDaddy DNS still directs www to the legacy Vercel application, so no public traffic has moved.",
      nextAction: "Add the supplied validation records, then change the www CNAME only after the legal copy is approved. Keep the existing apex redirect during the verification window.",
      href: "https://www.wikibiome.com",
    },
    {
      id: "rollback-window",
      area: "Domain cutover",
      title: "DNS rollback window",
      status: "external",
      gate: "Required before DNS",
      owner: "Domain administrator",
      evidence: "The legacy Vercel deployment remains available as the rollback target until the new domain has passed production route, authentication, support, and indexing checks.",
      nextAction: "Keep the legacy deployment intact through the post-cutover verification window.",
      href: "https://www.wikibiome.com",
    },
  ];

  return {
    generatedAt: migration.generatedAt,
    items,
    complete: items.filter((item) => item.status === "complete").length,
    active: items.filter((item) => item.status === "active").length,
    external: items.filter((item) => item.status === "external").length,
    requiredOpen: items.filter((item) => item.gate === "Required before DNS" && item.status !== "complete").length,
  };
}
