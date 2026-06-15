import Image from "next/image";
import { profile } from "@/data/profile";
import SkillPills from "./SkillPills";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Sidebar() {
  return (
    <aside className="lg:sticky lg:top-0 lg:h-screen lg:w-[320px] lg:shrink-0">
      <div className="flex h-full flex-col bg-[var(--sidebar)] px-6 py-8 text-white lg:px-8 lg:py-10">
        <div className="mb-6 flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="relative mb-5 h-36 w-36 overflow-hidden rounded-full ring-4 ring-[var(--accent)]/30">
            <Image
              src="/images/portfolioFoto.jpg"
              alt={profile.name}
              fill
              className="object-cover"
              sizes="144px"
              priority
            />
          </div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            Online CV
          </p>
          <h1 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight">
            {profile.name}
          </h1>
          <p className="mt-2 text-sm text-[var(--sidebar-muted)]">
            {profile.title}
          </p>
        </div>

        <nav className="mb-8 hidden border-t border-white/10 pt-6 lg:block">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm text-[var(--sidebar-muted)] transition hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mb-8">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            Technical Skills
          </h2>
          <SkillPills skills={profile.skills} variant="sidebar" />
        </div>

        <div id="contact" className="mt-auto space-y-3 border-t border-white/10 pt-6 text-sm">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            Contact
          </h2>
          <a
            href={`mailto:${profile.email}`}
            className="block text-[var(--sidebar-muted)] transition hover:text-white"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="block text-[var(--sidebar-muted)] transition hover:text-white"
          >
            {profile.phone}
          </a>
          <p className="text-[var(--sidebar-muted)]">{profile.location}</p>
          <a
            href={profile.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-4 py-2.5 text-xs font-semibold text-[var(--sidebar)] transition hover:bg-[var(--highlight)]"
          >
            Project portfolio →
          </a>
          <div className="flex flex-wrap gap-3 pt-3">
            <a
              href={profile.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-[var(--accent)] transition hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-[var(--accent)] transition hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
