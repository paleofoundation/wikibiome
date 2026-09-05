import Link from "@/app/_components/NativeLink";
import { FollowButton } from "@/app/_components/FollowButton";
import { getResearcherSession } from "@/lib/research-network";
import { getCollaborationSummary, listPageActivity } from "@/lib/research-network-v2";
import type { RevisionEntry } from "@/lib/revisions";

export async function PageCollaborationBar({ targetType, targetId }: { targetType: "article" | "source"; targetId: string }) {
  const account = await getResearcherSession();
  const summary = await getCollaborationSummary(targetType, targetId, account?.accountId);
  return <nav className="collaboration-bar" aria-label="Research collaboration"><a href="#discussion">Discussion <b>{summary.posts}</b></a><a href="#activity">Activity <b>{summary.acceptedChanges + summary.threads}</b></a>{summary.unread > 0 && <span>{summary.unread} unread</span>}<FollowButton targetType={targetType} targetId={targetId} initialFollowing={summary.following} canFollow={Boolean(account?.emailVerified)}/>{targetType === "article" && <Link href={`/propose?target=${encodeURIComponent(targetId)}`}>Propose a change</Link>}</nav>;
}

export async function PageActivityTrail({ targetType, targetId, revisions = [], repository }: { targetType: "article" | "source"; targetId: string; revisions?: RevisionEntry[]; repository?: string }) {
  const activity = await listPageActivity(targetType, targetId);
  const events = [
    ...activity,
    ...revisions.map((revision) => ({ id: `revision:${revision.hash}:${revision.path}`, kind: "published revision", accountId: "", title: revision.subject || "WikiBiome source update", detail: `${revision.author} · +${revision.additions} −${revision.deletions}`, createdAt: revision.date, href: `${repository}/commit/${revision.hash}`, researcher: null, external: true })),
  ].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  return <section className="page-activity" id="activity" aria-labelledby={`activity-${targetType}-${targetId}`}><header><div><span>Transparent record</span><h2 id={`activity-${targetType}-${targetId}`}>Activity and accepted changes</h2><p>Accepted researcher context, editorial status, public discussion, and upstream Git revisions are shown together. Pending, declined, and withdrawn proposals remain private.</p></div><b>{events.length} events</b></header>{events.length ? <ol>{events.map((event) => <li id={event.id.replaceAll(":", "-")} key={event.id}><time dateTime={event.createdAt}>{formatDate(event.createdAt)}</time><div><span>{event.kind}</span><h3>{event.title}</h3><p>{event.detail}</p>{event.researcher && <Link href={`/researchers/${event.researcher.orcid}`}>{event.researcher.name} · ORCID {event.researcher.orcid}</Link>}{event.href.startsWith("http") ? <a href={event.href} target="_blank" rel="noreferrer">Inspect exact Git diff ↗</a> : <a href={event.href}>Open event</a>}</div></li>)}</ol> : <p className="empty-state">No public collaboration activity has been recorded for this page yet.</p>}</section>;
}

function formatDate(value: string) { const date = new Date(value); return Number.isNaN(date.valueOf()) ? "" : new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(date); }
