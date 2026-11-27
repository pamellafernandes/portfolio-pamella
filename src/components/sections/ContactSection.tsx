import { ContactSection as ContactCard } from "../ContactSection";
import { SectionHeading } from "../SectionHeading";

export function ContactSection() {
  return (
    <section className="section main-section contact" id="contact" data-reveal>
      <div className="container">
        <SectionHeading
          title="Let's Talk"
          description="Have an interesting project? I'd love to hear about it."
        />
        <ContactCard />
      </div>
    </section>
  );
}
