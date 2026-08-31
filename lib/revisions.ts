import revisions from "@/data/revisions.generated.json";
import { normalizeWikiId, type WikiPage } from "@/lib/wikibiome";

export type RevisionEntry = {
  hash: string;
  date: string;
  author: string;
  subject: string;
  path: string;
  additions: number;
  deletions: number;
};

type RevisionRecord = { paths: string[]; revisions: RevisionEntry[] };
type RevisionData = {
  generatedAt: string;
  repository: string;
  sourceCommit: string;
  records: number;
  revisions: number;
  histories: Record<string, RevisionRecord>;
};

const data = revisions as RevisionData;

export function getRevisionHistory(page: WikiPage) {
  const generatedFrom = typeof page.frontmatter?.generated_from === "string" ? page.frontmatter.generated_from : undefined;
  const sourceId = normalizeWikiId(generatedFrom ?? page.id);
  return {
    sourceId,
    repository: data.repository,
    sourceCommit: data.sourceCommit,
    generatedAt: data.generatedAt,
    paths: data.histories[sourceId]?.paths ?? [],
    revisions: data.histories[sourceId]?.revisions ?? [],
  };
}

export const revisionStats = { records: data.records, revisions: data.revisions, sourceCommit: data.sourceCommit };
