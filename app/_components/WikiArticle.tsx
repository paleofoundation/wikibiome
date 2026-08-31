import type { ReactNode } from "react";
import Link from "next/link";
import {
  categories,
  categoryLabel,
  cleanId,
  formatDate,
  getCategoryCount,
  getSource,
  getWikiPage,
  resolveRelated,
  wikiStats,
  type WikiPage,
} from "@/lib/wikibiome";

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function inlineMarkup(text: string): ReactNode[] {
  const tokens = text.split(/(\[\[[^\]]+\]\]|\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g);

  return tokens.filter(Boolean).map((token, index) => {
    if (token.startsWith("[[") && token.endsWith("]]")) {
      const [rawId, explicitLabel] = token.slice(2, -2).split("|");
      const id = cleanId(rawId.trim());
      const page = getWikiPage(id);
      const source = getSource(id);
      const label = explicitLabel?.trim() || page?.title || source?.title || id.replace(/-/g, " ");
      const href = page ? `/article/${id}` : source ? `/source/${id}` : undefined;
      return href ? <Link href={href} key={`${token}-${index}`}>{label}</Link> : <span className="missing-link" key={`${token}-${index}`}>{label}</span>;
    }
    if (token.startsWith("**") && token.endsWith("**")) {
      return <strong key={`${token}-${index}`}>{token.slice(2, -2)}</strong>;
    }
    if (token.startsWith("*") && token.endsWith("*")) {
      return <em key={`${token}-${index}`}>{token.slice(1, -1)}</em>;
    }
    if (token.startsWith("`") && token.endsWith("`")) {
      return <code key={`${token}-${index}`}>{token.slice(1, -1)}</code>;
    }
    return token;
  });
}

function RichText({ text }: { text: string }) {
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
            <thead><tr>{headers.map((header) => <th key={header}>{inlineMarkup(header)}</th>)}</tr></thead>
            <tbody>{body.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}>{inlineMarkup(cell)}</td>)}</tr>)}</tbody>
          </table>
        </div>
      );
    }

    if (lines.every((line) => line.startsWith("- "))) {
      return <ul key={blockIndex}>{lines.map((line) => <li key={line}>{inlineMarkup(line.slice(2))}</li>)}</ul>;
    }

    if (lines.every((line) => /^\d+[.)]\s/.test(line))) {
      return <ol key={blockIndex}>{lines.map((line) => <li key={line}>{inlineMarkup(line.replace(/^\d+[.)]\s/, ""))}</li>)}</ol>;
    }

    return (
      <p key={blockIndex}>
        {lines.map((line, lineIndex) => (
          <span key={lineIndex}>{inlineMarkup(line)}{lineIndex < lines.length - 1 && <><br /><br /></>}</span>
        ))}
      </p>
    );
  });
}

function asStrings(value: unknown) {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
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
        </nav>
      )}
      <div className="rail-license">Open scientific education<br />from the Paleo Foundation</div>
    </aside>
  );
}

function ArticleInfobox({ page }: { page: WikiPage }) {
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
          <div><dt>Sources</dt><dd>{page.sourceCount ?? 0} linked studies</dd></div>
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
  const sourceCount = page.sourceCount ?? 0;

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
              <p>{categoryLabel(page.category)} · {sourceCount} linked sources</p>
              <h1>{page.title}</h1>
              <span>From WikiBiome, the human microbiome encyclopedia</span>
            </div>
            <div className="article-tabs">
              <a className="active" href="#article">Article</a>
              <a href="#connections">Connections <b>{page.related?.length ?? 0}</b></a>
              <a href="#sources">Evidence <b>{sourceCount}</b></a>
              <span>Updated {formatDate(page.updated)}</span>
            </div>
          </header>

          <div className="article-grid" id="article">
            <article className="article-body">
              <div className="lead-copy"><RichText text={page.overview ?? "This WikiBiome record is being expanded from the evidence base."} /></div>
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
                    {section.body && <RichText text={section.body} />}
                  </section>
                );
              })}
              <div className="article-end" id="connections">
                <span>Continue exploring</span>
                <h2>Every article is a doorway.</h2>
                <div>{resolveRelated(page, 6).map((item) => <Link href={`/article/${item.id}`} key={item.id}><small>{categoryLabel(item.category)}</small><b>{item.title}</b><span>Read article →</span></Link>)}</div>
              </div>
              <footer className="article-provenance" id="sources">
                <p>This page is rendered from WikiBiome’s live public knowledge-base structure.</p>
                <span>{sourceCount} sources · {page.backlinks?.length ?? 0} backlinks · {page.tags?.length ?? 0} indexed topics</span>
              </footer>
            </article>
            <ArticleInfobox page={page} />
          </div>
        </main>
      </div>
    </>
  );
}
