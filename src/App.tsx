import { ActionLinks } from "./components/ActionLinks";
import { ExperienceCard } from "./components/ExperienceCard";
import { SectionHeading } from "./components/SectionHeading";
import {
  contactActions,
  experiences,
  heroActions,
  navigationLinks,
  profile,
  skillAreas,
} from "./data/portfolio";

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <header className="site-header">
        <div className="container navigation">
          <a className="brand" href="#top">
            {profile.name.toUpperCase()}
          </a>
          <nav className="navigation-links" aria-label="Main navigation">
            {navigationLinks.map(({ href, label }) => (
              <a href={href} key={href}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="container hero" aria-labelledby="hero-title">
          <div className="eyebrow">{profile.role}</div>
          <h1 id="hero-title">{profile.headline}</h1>
          <p className="intro">{profile.introduction}</p>
          <ActionLinks actions={heroActions} />
        </section>

        <section className="section" id="about">
          <div className="container">
            <SectionHeading
              number="01"
              title="About"
              description={profile.about}
            />
          </div>
        </section>

        <section className="section" id="experience">
          <div className="container">
            <SectionHeading
              number="02"
              title="Experience"
              description="A selection of the environments and products I've contributed to throughout my career."
            />
            <div className="experience-list">
              {experiences.map((experience) => (
                <ExperienceCard
                  experience={experience}
                  key={experience.id}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="expertise">
          <div className="container">
            <SectionHeading
              number="03"
              title="Expertise"
              description="The tools and working principles I bring to product teams."
            />
            <div className="skills-grid">
              {skillAreas.map(({ description, id, title }) => (
                <article className="skill" key={id}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="container">
            <div className="contact-inner">
              <h2 className="section-title">04 / Contact</h2>
              <h3>Let's build something meaningful.</h3>
              <p>
                Open to connecting with engineering teams and discussing
                frontend opportunities.
              </p>
              <ActionLinks actions={contactActions} />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <span>
            © <time dateTime={String(currentYear)}>{currentYear}</time>{" "}
            {profile.name}
          </span>
          <span>Designed with clarity and purpose.</span>
        </div>
      </footer>
    </>
  );
}

export default App;
