export default function ReviewRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="text-sm">
      <span className="text-ink-3">{label}: </span>
      <span className="text-ink">{value}</span>
    </div>
  );
}
