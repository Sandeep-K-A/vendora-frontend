interface StatTileProps {
  value: string;
  label: string;
  valueColor?: string;
}

export default function StatTile({
  value,
  label,
  valueColor = "text-ink",
}: StatTileProps) {
  return (
    <div className="bg-bg-2 rounded-lg p-3">
      <p
        className={`font-head text-lg font-bold ${valueColor} leading-none mb-1`}
      >
        {value}
      </p>
      <p className="text-ink-3 text-[11px]">{label}</p>
    </div>
  );
}
