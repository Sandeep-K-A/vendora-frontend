export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div>
      <h2 className="text-lg font-bold text-ink">{title}</h2>
      <p className="text-sm text-ink-2 mt-0.5">{subtitle}</p>
    </div>
  );
}
