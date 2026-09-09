export default function Pagination({
  page,
  totalPages,
  onChange,
}: {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}) {
  if (totalPages <= 1) return null;

  return (
    <div
      className="flex items-center justify-center gap-1.5 mt-2"
      role="navigation"
      aria-label="Pagination"
    >
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        className="px-3 py-1.5 text-sm rounded-lg border border-line disabled:opacity-40 disabled:cursor-not-allowed hover:bg-bg transition-colors"
      >
        Previous
      </button>
      <span className="text-sm text-ink-2 px-2">
        Page {page} of {totalPages}
      </span>
      <button
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        className="px-3 py-1.5 text-sm rounded-lg border border-line disabled:opacity-40 disabled:cursor-not-allowed hover:bg-bg transition-colors"
      >
        Next
      </button>
    </div>
  );
}
