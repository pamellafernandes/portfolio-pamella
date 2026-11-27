import { SectionHeading } from "../SectionHeading";
import { ToolIcon } from "../ToolIcon";
import type { Tool } from "../../types/portfolio";

interface ToolsSectionProps {
  tools: Tool[];
}

export function ToolsSection({ tools }: ToolsSectionProps) {
  return (
    <section className="section main-section" id="tools" data-reveal>
      <div className="container">
        <SectionHeading
          title="Tools"
          description="A few tools from my development and delivery workflow."
        />
        <div className="tool-grid">
          {tools.map(({ category, icon, id, name }) => (
            <article className="tool-card" key={id}>
              <span className="tool-mark" aria-hidden="true">
                <ToolIcon name={icon} />
              </span>
              <h3>{name}</h3>
              <p>{category}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
