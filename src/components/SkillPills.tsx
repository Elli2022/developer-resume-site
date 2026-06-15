type SkillPillsProps = {
  skills: string[];
  variant?: "default" | "sidebar";
};

export default function SkillPills({
  skills,
  variant = "default",
}: SkillPillsProps) {
  const pillClass =
    variant === "sidebar"
      ? "rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-[var(--sidebar-muted)]"
      : "rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-2.5 py-1 text-xs text-[var(--muted)]";

  return (
    <ul className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <li key={skill} className={pillClass}>
          {skill}
        </li>
      ))}
    </ul>
  );
}
