import type { Metadata } from "next";
import Link from "@/app/_components/NativeLink";
import { getChatGPTUser, chatGPTSignInPath } from "@/app/chatgpt-auth";
import { WikiHeader } from "@/app/_components/WikiArticle";
import { publicPageMetadata } from "@/lib/search-discovery";

export const dynamic = "force-dynamic";
export const metadata: Metadata = publicPageMetadata({
  title: "Contribute — WikiBiome",
  description: "Suggest sourced improvements to WikiBiome articles through a moderated revision workflow.",
  path: "/contribute",
});

export default async function ContributePage() {
  const user = await getChatGPTUser();
  return (
    <>
      <WikiHeader />
      <main className="contribute-page">
        <header className="contribute-hero"><span>Community knowledge · moderated evidence</span><h1>Help build WikiBiome.</h1><p>WikiBiome accepts sourced corrections, new evidence, clarifications, accessibility improvements, and link repairs. Proposed changes are attributed and reviewed before they can affect a public article.</p><div>{user ? <><Link href="/search">Find an article to improve</Link><Link href="/contributions">View your submissions</Link></> : <><a href={chatGPTSignInPath("/contribute")}>Sign in with ChatGPT to contribute</a><Link href="/search">Browse articles first</Link></>}</div></header>
        <section className="contribution-steps" aria-labelledby="contribution-steps-title"><header><span>How it works</span><h2 id="contribution-steps-title">Wikipedia-like participation, with an evidence gate.</h2></header><div><article><b>01</b><h3>Choose a passage</h3><p>Open any article and select “Suggest an edit.” Identify the exact section and existing language.</p></article><article><b>02</b><h3>Propose sourced text</h3><p>Scientific corrections and new claims require a DOI, PMID, or source URL.</p></article><article><b>03</b><h3>Automated checks</h3><p>The submission is validated against the canonical article, contribution schema, and evidence requirements.</p></article><article><b>04</b><h3>Editorial review</h3><p>A moderator accepts, declines, or requests revision. Public content never changes silently.</p></article></div></section>
        <section className="contribution-principles"><div><span>Permanent attribution</span><p>Every accepted change can become part of the page’s visible revision history.</p></div><div><span>Recoverable revisions</span><p>Changes remain traceable to the source record and exact public diff.</p></div><div><span>No anonymous medical rewriting</span><p>Identity is required for submissions and scientific claims require evidence.</p></div></section>
      </main>
    </>
  );
}
