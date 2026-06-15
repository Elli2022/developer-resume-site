import Header from "@/components/Header";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import PortfolioBanner from "@/components/PortfolioBanner";
import Sidebar from "@/components/Sidebar";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <div className="min-h-screen lg:flex">
      <Sidebar />
      <main className="flex-1 px-5 py-8 md:px-10 md:py-12 lg:px-12 lg:py-14">
        <PortfolioBanner />
        <Header />
        <ExperienceSection />
        <EducationSection />
        <footer className="mt-16 border-t border-[var(--line)] pt-8 text-sm text-[var(--muted)]">
          <p>
            Online CV — for project case studies and collaboration process, see{" "}
            <a
              href={profile.portfolio}
              className="font-medium text-[var(--accent-deep)] underline-offset-2 hover:underline"
            >
              eleonora-portfolio.netlify.app
            </a>
            .
          </p>
        </footer>
      </main>
    </div>
  );
}
