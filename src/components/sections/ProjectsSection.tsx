import { SectionHeading } from "../SectionHeading";
import type { ProjectHighlight } from "../../types/portfolio";

interface ProjectsSectionProps {
  projects: ProjectHighlight[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="section main-section" id="projects" data-reveal>
      <div className="container">
        <SectionHeading
          title="Projects"
          description="Selected product work across enterprise platforms, financial experiences, and internal systems."
        />
        <div className="project-grid">
          {projects.map(({ context, description, id, skills, title }, index) => (
            <article className="project-card" key={id}>
              <div className="project-banner" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="project-context">{context}</div>
              <h3>{title}</h3>
              <p>{description}</p>
              <ul className="tag-list" aria-label={`${title} technologies`}>
                {skills.map((skill) => (
                  <li className="tag" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
