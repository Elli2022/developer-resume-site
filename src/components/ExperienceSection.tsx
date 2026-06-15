import { experiences } from "@/data/experience";
import ExperienceItem from "./ExperienceItem";

export default function ExperienceSection() {
  return (
    <section id="experience" className="mt-16 animate-fade-up">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent-deep)]">
            Career
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--ink)]">
            Professional Experience
          </h2>
        </div>
        <span className="hidden rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-1 text-xs text-[var(--muted)] md:inline">
          {experiences.length} roles
        </span>
      </div>

      <div className="space-y-5">
        {experiences.map((exp) => (
          <ExperienceItem key={exp.id} {...exp} />
        ))}
      </div>
    </section>
  );
}
