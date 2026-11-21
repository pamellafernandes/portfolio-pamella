import type { ActionLink as ActionLinkData } from "../types/portfolio";

interface ActionLinksProps {
  actions: ActionLinkData[];
}

export function ActionLinks({ actions }: ActionLinksProps) {
  return (
    <div className="actions">
      {actions.map(({ href, label, variant }) => (
        <a
          className={`button button-${variant}`}
          href={href}
          key={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {label}
        </a>
      ))}
    </div>
  );
}
