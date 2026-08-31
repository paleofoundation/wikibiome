import type { ReactNode } from "react";
import Link from "next/link";
import {
  categories,
  categoryLabel,
  formatDate,
  generateArticleEvidence,
  getBacklinkPages,
  getCanonicalParadox,
  getCategoryCount,
  getMentionedPages,
  getParadoxLinksForPage,
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

const metalNames: Record<string, string> = {
  Ag: "silver",
  Al: "aluminum",
  As: "arsenic",
  Ba: "barium",
  Be: "beryllium",
  Ca: "calcium",
  Cd: "cadmium",
  Co: "cobalt",
  Cr: "chromium",
  Cu: "copper",
  Fe: "iron",
  Hg: "mercury",
  Li: "lithium",
  Mg: "magnesium",
  Mn: "manganese",
  Mo: "molybdenum",
  Ni: "nickel",
  Pb: "lead",
  Sb: "antimony",
  Se: "selenium",
  Sn: "tin",
  Sr: "strontium",
  Ti: "titanium",
  Tl: "thallium",
  V: "vanadium",
  W: "tungsten",
  Zn: "zinc",
};

type MetalNameState = Set<string>;

function namedMetal(symbol: string, charge: string | undefined, seen: MetalNameState) {
  const name = metalNames[symbol];
  const romanCharge = charge === "2" ? "II" : charge === "3" ? "III" : charge;
  const chemical = charge ? `${symbol}${charge}+` : symbol;
  const publicName = charge ? `${name}(${romanCharge})` : name;
  if (seen.has(symbol)) return publicName;
  seen.add(symbol);
  return `${publicName} (${chemical})`;
}

/**
 * Public article copy follows an encyclopedia rule: introduce a metal by its
 * full name and symbol on first use in a section, then prefer its full name.
 * Formula-like names keep their recognized scientific abbreviation.
 */
export function expandMetalNames(text: string, seen: MetalNameState = new Set()) {
  const cuZnSodToken = "\u0000CU_ZN_SOD\u0000";
  const methylmercuryToken = "\u0000METHYLMERCURY\u0000";
  let expanded = text.replace(/\bCu\/Zn-SOD\b/g, () => {
    seen.add("Cu");
    seen.add("Zn");
    return cuZnSodToken;
  });
  expanded = expanded.replace(/\bMeHg\b/g, () => {
    const firstUse = !seen.has("Hg");
    seen.add("Hg");
    return firstUse ? methylmercuryToken : "methylmercury";
  });

  expanded = expanded.replace(/\b(Ag|Al|Ba|Be|Ca|Cd|Co|Cr|Cu|Fe|Hg|Li|Mg|Mn|Mo|Ni|Pb|Sb|Se|Sn|Sr|Ti|Tl|V|W|Zn)([1-4])\+(?=$|[\s,.;:)/\]])/g, (_match, symbol: string, charge: string) => namedMetal(symbol, charge, seen));
  expanded = expanded.replace(/\b(Ag|Al|Ba|Be|Ca|Cd|Co|Cr|Cu|Fe|Hg|Li|Mg|Mn|Mo|Ni|Pb|Sb|Se|Sn|Sr|Ti|Tl|V|W|Zn)\b/g, (_match, symbol: string) => namedMetal(symbol, undefined, seen));

  // Arsenic's symbol is also the English word "As", so expand it only in
  // chemical lists or where the following language clearly describes a metal.
  expanded = expanded.replace(/\bAs\b(?=(?:\s+(?:exposure|levels?|toxicity|contamination|accumulat\w*|deplet\w*|increase\w*|decrease\w*|induc\w*|caus\w*|disrupt\w*|impair\w*|bind\w*|promot\w*|is\b|was\b|has\b|can\b|may\b))|\s+in\s+(?:water|soil|blood|serum|plasma|urine|hair|tissue|food|rice)\b|[,;)/])/g, () => namedMetal("As", undefined, seen));
  return expanded
    .replaceAll(cuZnSodToken, "copper/zinc superoxide dismutase (Cu/Zn-SOD)")
    .replaceAll(methylmercuryToken, "methylmercury (MeHg)");
}

function inlineMarkup(text: string, citationNumbers: Record<string, number>, metalState: MetalNameState): ReactNode[] {
  const parts: ReactNode[] = [];
  const format = /\*\*(.+?)\*\*|\*(.+?)\*|`([^`]+)`|\[?\[\[([^\]|]+?)(?:\|([^\]]+))?\]\]\]?/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = format.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(expandMetalNames(text.slice(lastIndex, match.index), metalState));
    if (match[1]) {
      parts.push(<strong key={`bold-${match.index}`}>{inlineMarkup(match[1], citationNumbers, metalState)}</strong>);
    } else if (match[2]) {
      parts.push(<em key={`italic-${match.index}`}>{inlineMarkup(match[2], citationNumbers, metalState)}</em>);
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

  if (lastIndex < text.length) parts.push(expandMetalNames(text.slice(lastIndex), metalState));
  return parts;
}

type RichBlock =
  | { type: "table"; source: string; key: number }
  | { type: "paragraph"; source: string; key: number; continuous: boolean };

function isListBlock(source: string) {
  const lines = source.split("\n").map((line) => line.trim()).filter(Boolean);
  return lines.length > 0 && lines.every((line) => line.startsWith("- ") || /^\d+[.)]\s/.test(line));
}

function proseBlocks(text: string): RichBlock[] {
  const sourceBlocks = text.split(/\n\s*\n/).map((block) => block.trim()).filter(Boolean);
  const blocks: RichBlock[] = [];

  sourceBlocks.forEach((source, key) => {
    if (source.split("\n").filter(Boolean).every((line) => line.trim().startsWith("|"))) {
      blocks.push({ type: "table", source, key });
      return;
    }

    if (isListBlock(source)) {
      const paragraph = source
        .split("\n")
        .map((line) => line.trim().replace(/^(?:-\s+|\d+[.)]\s*)/, ""))
        .filter(Boolean)
        .join(" ");
      const previous = blocks.at(-1);
      if (previous?.type === "paragraph" && /[:;]\s*$/.test(previous.source)) {
        previous.source = `${previous.source.replace(/[:;]\s*$/, ".")} ${paragraph}`;
        previous.continuous = true;
      } else {
        blocks.push({ type: "paragraph", source: paragraph, key, continuous: true });
      }
      return;
    }

    blocks.push({ type: "paragraph", source: source.split("\n").map((line) => line.trim()).filter(Boolean).join(" "), key, continuous: true });
  });

  return blocks;
}

export function RichText({ text, citationNumbers, prose = false }: { text: string; citationNumbers: Record<string, number>; prose?: boolean }) {
  const metalState: MetalNameState = new Set();
  const blocks: RichBlock[] = prose
    ? proseBlocks(text)
    : text.split(/\n\s*\n/).map((source, key) => ({ type: "paragraph" as const, source: source.trim(), key, continuous: false })).filter((block) => block.source);

  return blocks.map((block) => {
    const lines = block.source.split("\n").map((line) => line.trim()).filter(Boolean);

    if (block.type === "table" || (lines.length >= 2 && lines.every((line) => line.startsWith("|")))) {
      const rows = lines
        .filter((line) => !/^\|?\s*[-:]+/.test(line))
        .map((line) => line.replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim()));
      const [headers, ...body] = rows;
      return (
        <div className="table-wrap" key={block.key}>
          <table>
            <thead><tr>{headers.map((header) => <th key={header}>{inlineMarkup(header, citationNumbers, metalState)}</th>)}</tr></thead>
            <tbody>{body.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}>{inlineMarkup(cell, citationNumbers, metalState)}</td>)}</tr>)}</tbody>
          </table>
        </div>
      );
    }

    if (prose) {
      return <p className={block.continuous ? "continuous-prose" : undefined} key={block.key}>{inlineMarkup(block.source, citationNumbers, metalState)}</p>;
    }

    if (lines.every((line) => line.startsWith("- "))) {
      return <ul key={block.key}>{lines.map((line) => <li key={line}>{inlineMarkup(line.slice(2), citationNumbers, metalState)}</li>)}</ul>;
    }

    if (lines.every((line) => /^\d+[.)]\s/.test(line))) {
      return <ol key={block.key}>{lines.map((line) => <li key={line}>{inlineMarkup(line.replace(/^\d+[.)]\s/, ""), citationNumbers, metalState)}</li>)}</ol>;
    }

    return <p key={block.key}>{inlineMarkup(lines.join(" "), citationNumbers, metalState)}</p>;
  });
}

export function isDietaryParadoxHeading(heading: string) {
  return /(?:dietary.*paradox|paradox.*dietary)/i.test(heading);
}

function isNumberedParadoxHeading(heading: string) {
  return /^paradox\s+\d+\s*:/i.test(heading);
}

export function ParadoxLinkIndex({ pageId }: { pageId: string }) {
  const links = getParadoxLinksForPage(pageId);
  if (!links.length) return null;
  return (
    <div className="paradox-link-panel">
      <p>Full evidence is maintained on the canonical paradox {links.length === 1 ? "article" : "articles"}.</p>
      <div>
        {links.map((link, index) => (
          <Link href={`/article/${link.id}`} key={link.id}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div><strong>{link.title}</strong><small>{link.summary}</small></div>
            <em>Read paradox →</em>
          </Link>
        ))}
      </div>
    </div>
  );
}

function NumberedParadoxSection({ heading: sectionHeading }: { heading: string }) {
  const heading = sectionHeading.match(/^paradox\s+(\d+)\s*:\s*(.*)$/i);
  const number = Number(heading?.[1] ?? 0);
  const paradox = getCanonicalParadox(number);
  if (!paradox) return null;
  const id = slugify(sectionHeading);
  return (
    <section className="paradox-directory-entry" id={id}>
      <Link href={`/article/${paradox.id}`}>
        <span>Paradox {String(number).padStart(2, "0")}</span>
        <h2>{paradox.title}</h2>
        <p>{paradox.summary}</p>
        <em>Open full article →</em>
      </Link>
    </section>
  );
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
  const sections = page.sections ?? [];
  const contents = sections.filter((section) => section.level === 2);
  const evidence = generateArticleEvidence(page);
  const referenceCount = evidence.references.length;
  const consumedSections = new Set<number>();

  sections.forEach((section, index) => {
    if (!isDietaryParadoxHeading(section.heading) && !isNumberedParadoxHeading(section.heading)) return;
    const end = sections.findIndex((candidate, candidateIndex) => candidateIndex > index && candidate.level <= section.level);
    const boundary = end >= 0 ? end : sections.length;
    const subsections = sections.slice(index + 1, boundary);
    subsections.forEach((_subsection, childIndex) => consumedSections.add(index + childIndex + 1));
  });

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
              {sections.map((section, index) => {
                if (consumedSections.has(index)) return null;
                const id = slugify(section.heading);
                const Heading = section.level === 2 ? "h2" : "h3";
                if (isNumberedParadoxHeading(section.heading)) {
                  return <NumberedParadoxSection heading={section.heading} key={`${section.heading}-${section.level}`} />;
                }
                if (isDietaryParadoxHeading(section.heading)) {
                  return (
                    <section className={`wiki-section level-${section.level} paradox-section`} id={id} key={`${section.heading}-${section.level}`}>
                      <Heading>{section.heading}<a href={`#${id}`} aria-label={`Link to ${section.heading}`}>#</a></Heading>
                      <ParadoxLinkIndex pageId={page.id} />
                    </section>
                  );
                }
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
