export default function ReviewSection({
  title,
  onEdit,
  children,
}: {
  title: string;
  onEdit: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-line rounded-xl p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-ink">{title}</h3>
        <button
          type="button"
          onClick={onEdit}
          className="text-xs font-medium text-forest hover:underline"
        >
          Edit
        </button>
      </div>
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  );
}
