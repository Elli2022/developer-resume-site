import Header from "@/components/Header";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="min-h-screen lg:flex">
      <Sidebar />
      <main className="flex-1 px-5 py-8 md:px-10 md:py-12 lg:px-12 lg:py-14">
        <Header />
        <ExperienceSection />
        <EducationSection />
        <footer className="mt-16 border-t border-[var(--line)] pt-8 text-sm text-[var(--muted)]">
          <p>
            Built with Next.js, React, TypeScript, and Tailwind CSS. Deployed on
            Netlify.
          </p>
        </footer>
      </main>
    </div>
  );
}
