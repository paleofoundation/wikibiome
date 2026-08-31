import Link from "next/link";
import { ArticleTools } from "@/app/_components/ArticleTools";
import { WikiHeader } from "@/app/_components/WikiArticle";
import { DirectoryRail } from "@/app/_components/WikiDirectory";
import { findPagesUsingSource, normalizeDoi, type SourceRecord } from "@/lib/wikibiome";

export function WikiSource({ id, source }: { id: string; source: SourceRecord }) {
  const usedBy = findPagesUsingSource(id);
  const doi = normalizeDoi(source.doi);

  return (
    <>
      <WikiHeader />
      <main className="directory-shell source-shell">
        <DirectoryRail />
        <article className="source-main">
          <div className="directory-breadcrumbs"><Link href="/">WikiBiome</Link><span>/</span><b>Evidence source</b></div>
          <header className="source-header">
            <span>{source.keystone ? "Keystone evidence record" : "Evidence record"}</span>
            <h1>{source.title}</h1>
            <p>{source.authors?.join(", ") || "Authorship metadata pending"}</p>
            <ArticleTools title={source.title} canonicalPath={`/source/${id}`} updated={source.year ? `${source.year}-01-01` : undefined} kind="source" />
          </header>
          <div className="source-grid">
            <section className="source-citation">
              <p className="source-label">Citation record</p>
              <dl>
                <div><dt>Year</dt><dd>{source.year ?? "Not recorded"}</dd></div>
                <div><dt>Journal</dt><dd>{source.journal ?? "Not recorded"}</dd></div>
                <div><dt>DOI</dt><dd>{doi.status === "valid" ? <a href={doi.href}>{doi.bare} ↗</a> : doi.status === "malformed" ? <span className="doi-warning">Flagged for editorial review</span> : "Not yet verified"}</dd></div>
                <div><dt>WikiBiome key</dt><dd><code>{id}</code></dd></div>
              </dl>
              {source.keystone && (
                <div className="keystone-note"><span>Why this source matters</span><p>{source.why_keystone}</p><small>Criteria met: {source.keystone_criteria_met?.join(" · ")}</small></div>
              )}
            </section>
            <section className="used-by">
              <p className="source-label">Used in {usedBy.length} visible records</p>
              {usedBy.map((page) => <Link href={`/article/${page.id}`} key={page.id}><span>{page.category}</span><b>{page.title}</b><i>→</i></Link>)}
              {!usedBy.length && <p>This source is indexed but has no public backlinks in the current article set.</p>}
            </section>
          </div>
          <footer className="source-footer"><b>WikiBiome evidence integrity</b><span>Citation metadata is displayed directly from the public WikiBiome source index.</span><Link href="/article/gut-microbiome">Return to the encyclopedia →</Link></footer>
        </article>
      </main>
    </>
  );
}
