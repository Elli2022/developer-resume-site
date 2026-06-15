import { profile } from "@/data/profile";
import SkillPills from "./SkillPills";

export default function Header() {
  return (
    <header id="about" className="animate-fade-up">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent-deep)]">
        Professional Profile
      </p>
      <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight text-[var(--ink)] md:text-5xl">
        {profile.name}
      </h2>
      <p className="mt-3 text-lg text-[var(--muted)]">{profile.title}</p>
      <p className="mt-2 text-sm text-[var(--muted)]">{profile.tagline}</p>

      <div className="mt-6">
        <SkillPills skills={profile.stackHighlights} />
      </div>

      <div className="mt-10 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[var(--shadow)] backdrop-blur-sm md:p-8">
        <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--accent-deep)]">
          My Story
        </h3>
        <p className="mt-4 max-w-3xl leading-relaxed text-[var(--muted)]">
          {profile.story}
        </p>
      </div>
    </header>
  );
}
