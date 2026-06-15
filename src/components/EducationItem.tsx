import type { Education } from "@/data/education";
import SkillPills from "./SkillPills";

type EducationItemProps = Education;

export default function EducationItem({
  school,
  degree,
  fieldOfStudy,
  period,
  location,
  description,
  courses,
  skills,
  highlight,
}: EducationItemProps) {
  return (
    <article
      className={`rounded-2xl border p-6 transition md:p-7 ${
        highlight
          ? "border-[var(--accent)]/30 bg-[var(--surface-strong)] shadow-[var(--shadow)]"
          : "border-[var(--line)] bg-[var(--surface)]"
      }`}
    >
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--ink)]">
            {degree}
          </h3>
          <p className="mt-1 text-base font-medium text-[var(--accent-deep)]">
            {school}
          </p>
          <p className="mt-1 text-sm text-[var(--muted)]">{fieldOfStudy}</p>
        </div>
        <div className="text-sm text-[var(--muted)] md:text-right">
          <p>{period}</p>
          <p>{location}</p>
        </div>
      </div>

      <p className="mt-4 leading-relaxed text-[var(--muted)]">{description}</p>

      <div className="mt-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
          Key Courses
        </p>
        <SkillPills skills={courses} />
      </div>

      <div className="mt-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
          Skills
        </p>
        <SkillPills skills={skills} />
      </div>
    </article>
  );
}
