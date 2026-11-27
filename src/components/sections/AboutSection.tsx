import { SectionHeading } from "../SectionHeading";
import type { AboutHighlight } from "../../types/portfolio";

interface AboutSectionProps {
  highlights: AboutHighlight[];
  introduction: string;
  about: string;
}

export function AboutSection({
  about,
  highlights,
  introduction,
}: AboutSectionProps) {
  return (
    <section className="section main-section" id="about">
      <div className="container">
        <SectionHeading title="About Me" reveal />
        <div className="about-card" data-reveal>
          <div className="about-highlights">
            {highlights.map(({ description, id, symbol, title }) => (
              <article className="about-highlight" key={id}>
                <span className="about-highlight-symbol" aria-hidden="true">
                  {symbol}
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <div className="about-copy">
            <p>{introduction}</p>
            <p>{about}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
