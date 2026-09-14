import Link from "@/app/_components/NativeLink";
import { organizationProfiles } from "@/lib/organization-profiles.mjs";

export function OrganizationDirectory({ profiles = organizationProfiles, title = "Explore organizations & projects" }: { profiles?: typeof organizationProfiles; title?: string }) {
  if (!profiles.length) return null;
  return <section className="organization-directory" aria-label={title}><h2>{title}</h2><div>{profiles.map((profile) => <article key={profile.slug}><span className="organization-eyebrow">{profile.kind}</span><h3><Link href={`/organizations/${profile.slug}`}>{profile.name}</Link></h3><p>{profile.description}</p><Link href={`/organizations/${profile.slug}`}>Explore connections <span aria-hidden="true">→</span><span className="sr-only"> for {profile.name}</span></Link></article>)}</div></section>;
}
