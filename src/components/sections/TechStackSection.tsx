import type { CSSProperties } from "react";
import { SectionHeading } from "../SectionHeading";
import type { SkillArea } from "../../types/portfolio";

type SkillBarStyle = CSSProperties & { "--level": string };

interface TechStackSectionProps {
  areas: SkillArea[];
}

export function TechStackSection({ areas }: TechStackSectionProps) {
  return (
    <section className="section main-section" id="tech" data-reveal>
      <div className="container">
        <SectionHeading
          title="Tech Stack"
          description="Tools and technologies I work with."
        />
        <div className="skills-grid tech-grid">
          {areas.map(({ id, skills, title }) => (
            <article className="skill skill-card" key={id}>
              <h3>{title}</h3>
              <ul className="skill-list">
                {skills.map(({ level, name }) => (
                  <li className="skill-row" key={name}>
                    <div className="skill-meta">
                      <span>{name}</span>
                      <span>{level}%</span>
                    </div>
                    <div
                      className="skill-bar"
                      role="meter"
                      aria-label={name}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={level}
                    >
                      <span
                        className="skill-bar-fill"
                        style={{ "--level": `${level}%` } as SkillBarStyle}
                      />
                    </div>
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
