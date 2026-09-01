import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResearchModerationDashboard } from "@/app/_components/ResearchModerationDashboard";
import { WikiHeader } from "@/app/_components/WikiArticle";
import { getResearcherSession, isModeratorRole, listModerationQueue } from "@/lib/research-network";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Research moderation — WikiBiome", robots: { index: false, follow: false } };

export default async function ResearchModerationPage() {
  const account = await getResearcherSession();
  if (!account || !isModeratorRole(account.role)) notFound();
  const queue = await listModerationQueue(account);
  return <><WikiHeader /><main className="project-page research-moderation"><header className="project-page-hero"><span>Private editorial workspace</span><h1>Research network moderation</h1><p>Review claims, author context, submissions, new-researcher posts, reports, and institution requests. Every decision is added to the audit ledger.</p></header><ResearchModerationDashboard initialQueue={queue} /></main></>;
}
