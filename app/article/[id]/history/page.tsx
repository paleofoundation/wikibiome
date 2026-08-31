import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { WikiHeader } from "@/app/_components/WikiArticle";
import { canonicalArticleId, categoryLabel, getWikiPage } from "@/lib/wikibiome";
import { getRevisionHistory } from "@/lib/revisions";

type RouteProps = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { id } = await params;
  const page = getWikiPage(id);
  if (!page) return { title: "Revision history not found — WikiBiome" };
  const title = `Revision history: ${page.title} — WikiBiome`;
  const description = `Source provenance and revision history for the WikiBiome article ${page.title}.`;
  return { title, description, openGraph: { title, description, images: [] }, twitter: { card: "summary", title, description, images: [] } };
}

export default async function ArticleHistoryPage({ params }: RouteProps) {
  const { id } = await params;
  const page = getWikiPage(id);
  if (!page) notFound();
  const canonicalId = canonicalArticleId(id);
  if (canonicalId !== id) redirect(`/article/${canonicalId}/history`);
  const history = getRevisionHistory(page);

  return (
    <>
      <WikiHeader />
      <main className="history-page">
        <div className="history-breadcrumbs"><Link href="/">WikiBiome</Link><span>/</span><Link href={`/article/${page.id}`}>{page.title}</Link><span>/</span><b>History</b></div>
        <header className="history-hero">
          <span>Article provenance · official upstream repository</span>
          <h1>Revision history:<br />{page.title}</h1>
          <p>Every entry below comes from the public WikiBiome Git history. Line totals describe the committed change set; the commit link opens the exact source revision.</p>
          <nav><Link href={`/article/${page.id}`}>Article</Link><Link className="active" href={`/article/${page.id}/history`}>History <b>{history.revisions.length}</b></Link><Link href={`/article/${page.id}/suggest`}>Suggest edit</Link><a href={`${history.repository}/tree/${history.sourceCommit}/${history.paths[0] ?? ""}`}>Current source ↗</a></nav>
        </header>

        <section className="history-provenance">
          <div><span>Canonical record</span><strong>{page.id}</strong><small>{categoryLabel(page.category)}</small></div>
          <div><span>Tracked source files</span><strong>{history.paths.length}</strong><small>{history.paths[0] ?? "Generated record"}</small></div>
          <div><span>Visible revisions</span><strong>{history.revisions.length}</strong><small>Most recent first</small></div>
          <div><span>Source snapshot</span><strong>{history.sourceCommit.slice(0, 10)}</strong><small>Bound to this build</small></div>
        </section>

        <section className="revision-timeline" aria-labelledby="revision-title">
          <header><span>Readable change sets</span><h2 id="revision-title">Recorded revisions</h2></header>
          {history.revisions.map((revision, index) => (
            <article key={`${revision.hash}-${revision.path}`}>
              <div className="revision-index"><span>{String(index + 1).padStart(2, "0")}</span><i /></div>
              <div className="revision-copy">
                <header><time dateTime={revision.date}>{new Intl.DateTimeFormat("en", { dateStyle: "medium", timeZone: "UTC" }).format(new Date(revision.date))}</time><span>{revision.author}</span></header>
                <h3>{revision.subject || "WikiBiome source update"}</h3>
                <code>{revision.path}</code>
                <footer><span className="diff-add">+{revision.additions} lines</span><span className="diff-remove">−{revision.deletions} lines</span><a href={`${history.repository}/commit/${revision.hash}`}>Inspect exact diff ↗</a></footer>
              </div>
            </article>
          ))}
          {!history.revisions.length && <div className="history-empty"><strong>No file-level history was found for this generated record.</strong><p>Its provenance still resolves to the synchronized source snapshot and generating article.</p></div>}
        </section>
      </main>
    </>
  );
}
