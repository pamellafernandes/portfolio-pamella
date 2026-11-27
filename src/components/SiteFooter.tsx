interface SiteFooterProps {
  name: string;
  year: number;
}

export function SiteFooter({ name, year }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="container">
        <span>
          © <time dateTime={String(year)}>{year}</time> {name}
        </span>
        <span>Designed with clarity and purpose.</span>
      </div>
    </footer>
  );
}
