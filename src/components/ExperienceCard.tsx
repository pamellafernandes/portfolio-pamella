import type { Experience } from "../types/portfolio";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const { company, context, highlights, role } = experience;

  return (
    <article className="experience">
      <header className="experience-header">
        <div>
          <h3>{role}</h3>
          <div className="experience-meta">{company}</div>
        </div>
        <span className="experience-context">{context}</span>
      </header>
      <ul className="experience-highlights">
        {highlights.map((highlight) => (
          <li key={highlight}>
            {highlight}
          </li>
        ))}
      </ul>
    </article>
  );
}
