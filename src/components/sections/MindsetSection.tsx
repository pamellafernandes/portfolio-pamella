import { SectionHeading } from "../SectionHeading";
import type { MindsetPrinciple } from "../../types/portfolio";

interface MindsetSectionProps {
  principles: MindsetPrinciple[];
}

export function MindsetSection({ principles }: MindsetSectionProps) {
  return (
    <section className="section main-section" id="mindset" data-reveal>
      <div className="container">
        <SectionHeading
          title="Mindset"
          description="How I approach building and improving digital products."
        />
        <div className="principles-grid">
          {principles.map(({ description, id, title }, index) => (
            <article className="principle-card" key={id}>
              <span className="principle-mark" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
