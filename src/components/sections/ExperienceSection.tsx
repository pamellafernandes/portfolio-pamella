import { ExperienceCard } from "../ExperienceCard";
import { SectionHeading } from "../SectionHeading";
import type { Experience } from "../../types/portfolio";

interface ExperienceSectionProps {
  experiences: Experience[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section className="section main-section" id="experience" data-reveal>
      <div className="container">
        <SectionHeading
          title="Experience"
          description="A selection of the environments and products I've contributed to throughout my career."
        />
        <div className="experience-list">
          {experiences.map((experience) => (
            <ExperienceCard experience={experience} key={experience.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
