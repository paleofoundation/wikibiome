import Link from "@/app/_components/NativeLink";

export function ResearcherWorkspaceNav({ active, unread = 0 }: { active: "dashboard" | "works" | "proposals" | "notifications" | "messages" | "roundtable"; unread?: number }) {
  const items = [
    ["dashboard", "/researcher/dashboard", "Dashboard"],
    ["works", "/researcher/works", "Find my work"],
    ["proposals", "/researcher/proposals", "Proposals"],
    ["notifications", "/researcher/notifications", `Notifications${unread ? ` (${unread})` : ""}`],
    ["messages", "/researcher/messages", "Messages"],
    ["roundtable", "/roundtable", "Roundtable"],
  ] as const;
  return <nav className="researcher-workspace-nav" aria-label="Researcher workspace">{items.map(([id, href, label]) => <Link key={id} className={active === id ? "active" : ""} aria-current={active === id ? "page" : undefined} href={href}>{label}</Link>)}</nav>;
}
