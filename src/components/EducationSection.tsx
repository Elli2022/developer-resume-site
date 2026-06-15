import { educations } from "@/data/education";
import EducationItem from "./EducationItem";

export default function EducationSection() {
  return (
    <section id="education" className="mt-16 animate-fade-up">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent-deep)]">
            Learning
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--ink)]">
            Education
          </h2>
        </div>
        <span className="hidden rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-1 text-xs text-[var(--muted)] md:inline">
          {educations.length} programs
        </span>
      </div>

      <div className="space-y-5">
        {educations.map((edu) => (
          <EducationItem key={edu.id} {...edu} />
        ))}
      </div>
    </section>
  );
}
