import type { ReactNode } from "react";
import Link from "next/link";
import {
  categories,
  categoryLabel,
  formatDate,
  generateArticleEvidence,
  getBacklinkPages,
  getCategoryCount,
  getMentionedPages,
  getWikiPage,
  normalizeDoi,
  normalizeWikiId,
  resolveRelated,
  wikiStats,
  type ArticleEvidence,
  type WikiPage,
} from "@/lib/wikibiome";

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function inlineMarkup(text: string, citationNumbers: Record<string, number>): ReactNode[] {
  const parts: ReactNode[] = [];
  const format = /\*\*(.+?)\*\*|\*(.+?)\*|`([^`]+)`|\[?\[\[([^\]|]+?)(?:\|([^\]]+))?\]\]\]?/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = format.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    if (match[1]) {
      parts.push(<strong key={`bold-${match.index}`}>{inlineMarkup(match[1], citationNumbers)}</strong>);
    } else if (match[2]) {
      parts.push(<em key={`italic-${match.index}`}>{inlineMarkup(match[2], citationNumbers)}</em>);
    } else if (match[3]) {
      parts.push(<code key={`code-${match.index}`}>{match[3]}</code>);
    } else if (match[4]) {
      const id = normalizeWikiId(match[4]);
      const page = getWikiPage(id);
      const citationNumber = citationNumbers[id];
      const label = match[5]?.trim() || page?.title || match[4].replace(/-/g, " ");
      if (page) {
        parts.push(<Link href={`/article/${id}`} key={`link-${match.index}`}>{label}</Link>);
      } else if (citationNumber) {
        parts.push(
          <sup className="article-citation" key={`citation-${match.index}`}>
            <a href={`#reference-${citationNumber}`} aria-label={`Reference ${citationNumber}`}>[{citationNumber}]</a>
          </sup>,
        );
      } else {
        parts.push(<span className="missing-link" key={`missing-${match.index}`}>{label}</span>);
      }
    }
    lastIndex = format.lastIndex;
  }

  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

export function RichText({ text, citationNumbers }: { text: string; citationNumbers: Record<string, number> }) {
  const blocks = text.split(/\n\s*\n/).map((block) => block.trim()).filter(Boolean);

  return blocks.map((block, blockIndex) => {
    const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);

    if (lines.length >= 2 && lines.every((line) => line.startsWith("|"))) {
      const rows = lines
        .filter((line) => !/^\|?\s*[-:]+/.test(line))
        .map((line) => line.replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim()));
      const [headers, ...body] = rows;
      return (
        <div className="table-wrap" key={blockIndex}>
          <table>
            <thead><tr>{headers.map((header) => <th key={header}>{inlineMarkup(header, citationNumbers)}</th>)}</tr></thead>
            <tbody>{body.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}>{inlineMarkup(cell, citationNumbers)}</td>)}</tr>)}</tbody>
          </table>
        </div>
      );
    }

    if (lines.every((line) => line.startsWith("- "))) {
      return <ul key={blockIndex}>{lines.map((line) => <li key={line}>{inlineMarkup(line.slice(2), citationNumbers)}</li>)}</ul>;
    }

    if (lines.every((line) => /^\d+[.)]\s/.test(line))) {
      return <ol key={blockIndex}>{lines.map((line) => <li key={line}>{inlineMarkup(line.replace(/^\d+[.)]\s/, ""), citationNumbers)}</li>)}</ol>;
    }

    return (
      <p key={blockIndex}>
        {lines.map((line, lineIndex) => (
          <span key={lineIndex}>{inlineMarkup(line, citationNumbers)}{lineIndex < lines.length - 1 && <><br /><br /></>}</span>
        ))}
      </p>
    );
  });
}

function asStrings(value: unknown) {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
}

function formatAuthors(authors: string[] = []) {
  if (!authors.length) return "Author information pending";
  return authors.length <= 3 ? authors.join(", ") : `${authors.slice(0, 3).join(", ")} et al.`;
}

export function EvidenceIntegrity({ evidence }: { evidence: ArticleEvidence }) {
  const recovered = evidence.recoveredCitationIds.length;
  return (
    <aside className="evidence-integrity" aria-label="Evidence integrity summary">
      <div>
        <span>Evidence generated from article text</span>
        <strong>{evidence.references.length}</strong>
        <small>unique references</small>
      </div>
      <div>
        <span>Inline citation coverage</span>
        <strong>{evidence.inlineCitationIds.length}</strong>
        <small>studies cited in claims</small>
      </div>
      <div className={recovered ? "reconciled" : "aligned"}>
        <span>Vault reconciliation</span>
        <strong>{recovered ? `+${recovered}` : "✓"}</strong>
        <small>{recovered ? "inline sources recovered beyond frontmatter" : "body and frontmatter aligned"}</small>
      </div>
    </aside>
  );
}

export function ReferencesSection({ evidence }: { evidence: ArticleEvidence }) {
  if (!evidence.references.length) return null;
  return (
    <section className="references-section" id="references" aria-labelledby="references-title">
      <header>
        <div>
          <span>Generated evidence record</span>
          <h2 id="references-title">References <b>{evidence.references.length}</b></h2>
        </div>
        <p>Numbered by first appearance in the article, then reconciled with its declared source list.</p>
      </header>
      <ol className="reference-list">
        {evidence.references.map((reference) => {
          const doi = normalizeDoi(reference.doi);
          return (
            <li id={`reference-${reference.number}`} key={reference.id}>
              <span className="reference-number">{reference.number}</span>
              <div>
                <p>
                  {reference.keystone && <span className="keystone-mark" title="Keystone study">★</span>}
                  <strong>{formatAuthors(reference.authors)}</strong>
                  {reference.year && <> ({reference.year})</>}. <em>{reference.title}</em>
                  {reference.journal && <>. <span>{reference.journal}</span></>}.
                </p>
                <footer>
                  <Link href={`/source/${reference.id}`}>WikiBiome source record <span aria-hidden="true">→</span></Link>
                  {doi.status === "valid" && <a href={doi.href} target="_blank" rel="noreferrer">doi:{doi.bare} <span aria-hidden="true">↗</span></a>}
                  {doi.status === "malformed" && <span className="doi-warning">DOI flagged for audit: {doi.raw}</span>}
                  {reference.missingMetadata && <span className="doi-warning">Source metadata missing</span>}
                </footer>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export function ArticleNetwork({ page }: { page: WikiPage }) {
  const mentioned = getMentionedPages(page, 18);
  const backlinks = getBacklinkPages(page, 18);
  if (!mentioned.length && !backlinks.length) return null;
  return (
    <section className="article-network" id="connections" aria-labelledby="article-network-title">
      <header>
        <span>Knowledge graph</span>
        <h2 id="article-network-title">Article network</h2>
      </header>
      <div>
        {!!mentioned.length && (
          <section>
            <h3>Mentioned here <b>{mentioned.length}</b></h3>
            <div>{mentioned.map((item) => <Link href={`/article/${item.id}`} key={item.id}>{item.title}</Link>)}</div>
          </section>
        )}
        {!!backlinks.length && (
          <section>
            <h3>Pages linking here <b>{page.backlinks?.length ?? backlinks.length}</b></h3>
            <div>{backlinks.map((item) => <Link href={`/article/${item.id}`} key={item.id}>{item.title}</Link>)}</div>
          </section>
        )}
      </div>
    </section>
  );
}

export function WikiHeader({ query = "" }: { query?: string }) {
  return (
    <header className="wiki-header">
      <Link className="wiki-brand" href="/">
        <img className="wiki-brand-mark" src="/wikibiome-logo.png" alt="" />
        <span><strong>Wiki</strong>Biome<small>The human microbiome encyclopedia</small></span>
      </Link>
      <form className="global-search" action="/search" role="search">
        <label className="sr-only" htmlFor="global-search">Search WikiBiome</label>
        <span aria-hidden="true">⌕</span>
        <input id="global-search" name="q" defaultValue={query} placeholder={`Search ${wikiStats.totalPages} articles`} />
        <button type="submit">Search</button>
      </form>
      <nav className="utility-nav" aria-label="Utility navigation">
        <Link href="/article/gut-microbiome">Read</Link>
        <Link href="/category/signature">Signatures</Link>
        <a href="https://wikibiome.com/explore">Graph ↗</a>
      </nav>
    </header>
  );
}

function WikiRail({ page }: { page: WikiPage }) {
  const contents = (page.sections ?? []).filter((section) => section.level === 2);
  return (
    <aside className="wiki-rail">
      <nav aria-label="Encyclopedia navigation">
        <p className="rail-label">Navigate</p>
        <Link className="rail-home" href="/"><span>⌂</span> Main article</Link>
        <Link href="/search"><span>⌕</span> Search all articles</Link>
        <div className="rail-rule" />
        <p className="rail-label">Knowledge domains</p>
        {categories.map((category) => (
          <Link href={`/category/${category.id}`} key={category.id}>
            <span className={`rail-dot ${category.id}`} />
            {category.label}
            <b>{getCategoryCount(category.id)}</b>
          </Link>
        ))}
      </nav>
      {!!contents.length && (
        <nav className="contents-nav" aria-label="Table of contents">
          <p className="rail-label">On this page</p>
          {contents.slice(0, 9).map((section, index) => (
            <a href={`#${slugify(section.heading)}`} key={section.heading}>
              <i>{String(index + 1).padStart(2, "0")}</i>{section.heading}
            </a>
          ))}
          <a href="#references"><i>R</i>References</a>
        </nav>
      )}
      <div className="rail-license">Open scientific education<br />from the Paleo Foundation</div>
    </aside>
  );
}

function ArticleInfobox({ page, referenceCount }: { page: WikiPage; referenceCount: number }) {
  const related = resolveRelated(page);
  const metalDependencies = asStrings(page.frontmatter?.metal_dependencies);
  const enzymes = asStrings(page.frontmatter?.key_enzymes);
  const subtype = typeof page.frontmatter?.subtype === "string" ? page.frontmatter.subtype : page.type;

  return (
    <aside className="article-aside" aria-label={`${page.title} facts`}>
      <div className="infobox">
        <div className={`infobox-visual infobox-${page.category}`}>
          <img src="/wikibiome-human-system-v2.png" alt="" />
          <span>{page.title.slice(0, 2)}</span><i /><i /><i />
          <small>{categoryLabel(page.category)} system map</small>
        </div>
        <div className="infobox-title"><span>WikiBiome record</span><strong>{page.title}</strong></div>
        <dl>
          <div><dt>Domain</dt><dd><Link href={`/category/${page.category}`}>{categoryLabel(page.category)}</Link></dd></div>
          <div><dt>Record type</dt><dd>{subtype}</dd></div>
          <div><dt>References</dt><dd>{referenceCount} generated records</dd></div>
          <div><dt>Last reviewed</dt><dd>{formatDate(page.updated)}</dd></div>
        </dl>
        {!!metalDependencies.length && <div className="fact-list"><span>Metal dependencies</span>{metalDependencies.slice(0, 6).map((item) => <Link href={`/article/${slugify(item)}`} key={item}>{item}</Link>)}</div>}
        {!!enzymes.length && <div className="fact-list"><span>Key enzymes</span>{enzymes.slice(0, 4).map((item) => <b key={item}>{item}</b>)}</div>}
        {!!page.tags?.length && <div className="tag-list">{page.tags.slice(0, 8).map((tag) => <Link href={`/search?q=${encodeURIComponent(tag)}`} key={tag}>{tag}</Link>)}</div>}
      </div>
      {!!related.length && (
        <div className="related-card">
          <span>Connected records</span>
          {related.map((item) => <Link href={`/article/${item.id}`} key={item.id}><i>{item.title.slice(0, 1)}</i><b>{item.title}</b><em>↗</em></Link>)}
        </div>
      )}
      <div className="corpus-note"><strong>{wikiStats.sources.toLocaleString()}</strong><span>peer-reviewed sources indexed across WikiBiome</span></div>
    </aside>
  );
}

export function WikiArticle({ page, home = false }: { page: WikiPage; home?: boolean }) {
  const contents = (page.sections ?? []).filter((section) => section.level === 2);
  const evidence = generateArticleEvidence(page);
  const referenceCount = evidence.references.length;

  return (
    <>
      <WikiHeader />
      <div className="wiki-shell">
        <WikiRail page={page} />
        <main className="article-page">
          <div className="article-breadcrumbs"><Link href="/">WikiBiome</Link><span>/</span><Link href={`/category/${page.category}`}>{categoryLabel(page.category)}</Link><span>/</span><b>{page.title}</b></div>
          {home && <div className="main-page-note"><span>Featured foundation article</span><b>Start here, then follow any blue connection through the encyclopedia.</b></div>}
          <header className="article-header">
            <div className="article-system-art" aria-hidden="true"><img src="/wikibiome-human-system-v2.png" alt="" /><i /><i /><i /></div>
            <div className="article-heading-copy">
              <p>{categoryLabel(page.category)} · {referenceCount} generated references</p>
              <h1>{page.title}</h1>
              <span>From WikiBiome, the human microbiome encyclopedia</span>
            </div>
            <div className="article-tabs">
              <a className="active" href="#article">Article</a>
              <a href="#connections">Connections <b>{page.related?.length ?? 0}</b></a>
              <a href="#references">Evidence <b>{referenceCount}</b></a>
              <span>Updated {formatDate(page.updated)}</span>
            </div>
          </header>

          <div className="article-grid" id="article">
            <article className="article-body">
              <div className="lead-copy"><RichText text={page.overview ?? "This WikiBiome record is being expanded from the evidence base."} citationNumbers={evidence.citationNumbers} /></div>
              <EvidenceIntegrity evidence={evidence} />
              {!!contents.length && (
                <details className="mobile-contents">
                  <summary>Contents</summary>
                  {contents.map((section, index) => <a href={`#${slugify(section.heading)}`} key={section.heading}>{index + 1}. {section.heading}</a>)}
                </details>
              )}
              {(page.sections ?? []).map((section) => {
                const id = slugify(section.heading);
                const Heading = section.level === 2 ? "h2" : "h3";
                return (
                  <section className={`wiki-section level-${section.level}`} id={id} key={`${section.heading}-${section.level}`}>
                    <Heading>{section.heading}<a href={`#${id}`} aria-label={`Link to ${section.heading}`}>#</a></Heading>
                    {section.body && <RichText text={section.body} citationNumbers={evidence.citationNumbers} />}
                  </section>
                );
              })}
              <ReferencesSection evidence={evidence} />
              <ArticleNetwork page={page} />
              <div className="article-end">
                <span>Continue exploring</span>
                <h2>Every article is a doorway.</h2>
                <div>{resolveRelated(page, 6).map((item) => <Link href={`/article/${item.id}`} key={item.id}><small>{categoryLabel(item.category)}</small><b>{item.title}</b><span>Read article →</span></Link>)}</div>
              </div>
              <footer className="article-provenance" id="provenance">
                <p>Generated from the WikiBiome Markdown vault and reconciled against its source registry.</p>
                <span>{referenceCount} references · {page.backlinks?.length ?? 0} backlinks · {page.tags?.length ?? 0} indexed topics</span>
              </footer>
            </article>
            <ArticleInfobox page={page} referenceCount={referenceCount} />
          </div>
        </main>
      </div>
    </>
  );
}
