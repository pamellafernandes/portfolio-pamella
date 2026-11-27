import type { NavigationLink } from "../types/portfolio";

interface SiteHeaderProps {
  name: string;
  navigationLinks: NavigationLink[];
}

export function SiteHeader({ name, navigationLinks }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="container navigation">
        <a className="brand" href="#top" aria-label={`${name} — Home`}>
          PF
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
  );
}
