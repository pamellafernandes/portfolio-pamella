import { AboutSection } from "../components/sections/AboutSection";
import { ContactSection } from "../components/sections/ContactSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { HeroSection } from "../components/sections/HeroSection";
import { MindsetSection } from "../components/sections/MindsetSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { TechStackSection } from "../components/sections/TechStackSection";
import { ToolsSection } from "../components/sections/ToolsSection";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import {
  aboutHighlights,
  experiences,
  heroActions,
  mindsetPrinciples,
  navigationLinks,
  profile,
  projectHighlights,
  techAreas,
  tools,
} from "../data/portfolio";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function PortfolioPage() {
  useScrollReveal();

  return (
    <>
      <SiteHeader name={profile.name} navigationLinks={navigationLinks} />
      <main id="top">
        <HeroSection
          name={profile.name}
          role={profile.role}
          headline={profile.headline}
          actions={heroActions}
        />
        <AboutSection
          highlights={aboutHighlights}
          introduction={profile.introduction}
          about={profile.about}
        />
        <ProjectsSection projects={projectHighlights} />
        <ExperienceSection experiences={experiences} />
        <TechStackSection areas={techAreas} />
        <ToolsSection tools={tools} />
        <MindsetSection principles={mindsetPrinciples} />
        <ContactSection />
      </main>
      <SiteFooter name={profile.name} year={new Date().getFullYear()} />
    </>
  );
}
