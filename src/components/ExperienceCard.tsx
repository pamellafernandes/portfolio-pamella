import type { Experience } from "../types/portfolio";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const { company, context, description, role, skills } = experience;

  return (
    <article className="experience">
      <h3>
        {role} · {company}
      </h3>
      <div className="experience-meta">{context}</div>
      <p>{description}</p>
      <ul className="tag-list" aria-label={`${company} technologies`}>
        {skills.map((skill) => (
          <li className="tag" key={skill}>
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
