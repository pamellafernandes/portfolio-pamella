interface SectionHeadingProps {
  title: string;
  description?: string;
  reveal?: boolean;
}

export function SectionHeading({
  description,
  reveal = false,
  title,
}: SectionHeadingProps) {
  return (
    <div className="section-header" data-reveal={reveal ? "" : undefined}>
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-lead">{description}</p>}
    </div>
  );
}
