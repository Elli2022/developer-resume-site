import { profile } from "@/data/profile";

export default function PortfolioBanner() {
  return (
    <section
      aria-label="Project portfolio link"
      className="mb-8 rounded-2xl border border-[var(--accent)]/25 bg-[var(--accent-deep)] p-5 text-white shadow-[var(--shadow)] md:p-6"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--highlight)]">
        Looking for project examples?
      </p>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/85">
        This site is my CV — experience, education, and background. For case
        studies, live demos, and how I work with clients, visit my project
        portfolio. Freelance capacity: up to 7 hours per week, scoped projects
        only.
      </p>
      <a
        href={profile.portfolio}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[var(--accent-deep)] transition hover:bg-[var(--highlight)]"
      >
        View project portfolio →
      </a>
    </section>
  );
}
