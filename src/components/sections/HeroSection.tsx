import { ActionLinks } from "../ActionLinks";
import type { ActionLink } from "../../types/portfolio";

interface HeroSectionProps {
  name: string;
  role: string;
  headline: string;
  actions: ActionLink[];
}

export function HeroSection({
  actions,
  headline,
  name,
  role,
}: HeroSectionProps) {
  return (
    <section className="container hero" aria-labelledby="hero-title">
      <div className="eyebrow">Hi, I'm</div>
      <h1 id="hero-title">{name}</h1>
      <p className="hero-role">{role}</p>
      <p className="intro">{headline}</p>
      <ActionLinks actions={actions} />
      <a className="scroll-cue" href="#about" aria-label="Scroll to About">
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
