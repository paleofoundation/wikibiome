import type { Metadata } from "next";
import Link from "@/app/_components/NativeLink";
import { notFound, redirect } from "next/navigation";
import { requireChatGPTUser } from "@/app/chatgpt-auth";
import { ContributionForm } from "@/app/_components/ContributionForm";
import { WikiHeader } from "@/app/_components/WikiArticle";
import { canonicalArticleId, getWikiPage } from "@/lib/wikibiome";
import { prepareArticleSections } from "@/lib/content-model";

export const dynamic = "force-dynamic";
type RouteProps = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { id } = await params;
  const page = getWikiPage(id);
  return { title: page ? `Suggest an edit: ${page.title} — WikiBiome` : "Article not found — WikiBiome", robots: { index: false, follow: false } };
}

export default async function SuggestEditPage({ params }: RouteProps) {
  const { id } = await params;
  const page = getWikiPage(id);
  if (!page) notFound();
  const canonicalId = canonicalArticleId(id);
  if (canonicalId !== id) redirect(`/article/${canonicalId}/suggest`);
  return <AuthenticatedSuggestion pageId={page.id} pageTitle={page.title} sections={prepareArticleSections(page).map((section) => section.heading)} />;
}

async function AuthenticatedSuggestion({ pageId, pageTitle, sections }: { pageId: string; pageTitle: string; sections: string[] }) {
  const user = await requireChatGPTUser(`/article/${pageId}/suggest`);
  return <><WikiHeader /><main className="suggest-page"><div className="suggest-breadcrumbs"><Link href={`/article/${pageId}`}>{pageTitle}</Link><span>/</span><b>Suggest an edit</b></div><header><span>Attributed contribution</span><h1>Improve “{pageTitle}”</h1><p>Signed in as <strong>{user.displayName}</strong>. Your proposal will be stored as a reviewable change request; it will not modify the public article automatically.</p></header><ContributionForm pageId={pageId} sections={sections} /></main></>;
}
