interface SectionHeadingProps {
  number: string;
  title: string;
  description: string;
}

export function SectionHeading({
  number,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="section-header">
      <h2 className="section-title">
        {number} / {title}
      </h2>
      <p className="section-lead">{description}</p>
    </div>
  );
}
