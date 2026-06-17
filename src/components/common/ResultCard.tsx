interface ResultCardProps {
  icon: string;
  name: string;
  meta: string;
  primaryValue: string;
  secondaryValue?: string;
  secondaryColor?: string;
  iconBg?: string;
  bg?: string;
  border?: string;
  nameColor?: string;
  metaColor?: string;
  primaryColor?: string;
}

export default function ResultCard({
  icon,
  name,
  meta,
  primaryValue,
  secondaryValue,
  secondaryColor = "text-ink-3",
  iconBg = "bg-bg-3",
  bg = "bg-bg-2",
  border = "border-line",
  nameColor = "text-ink",
  metaColor = "text-ink-3",
  primaryColor = "text-ink",
}: ResultCardProps) {
  return (
    <div
      className={`flex items-center gap-3 ${bg} border ${border} rounded-lg p-2.5`}
    >
      <span
        className={`flex items-center justify-center w-9 h-9 rounded-lg ${iconBg} text-lg flex-shrink-0`}
      >
        {icon}
      </span>
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium ${nameColor} truncate`}>{name}</p>
        <p className={`${metaColor} text-xs truncate`}>{meta}</p>
      </div>
      <div className="text-right flex-shrink-0">
        <p className={`text-sm font-semibold ${primaryColor}`}>
          {primaryValue}
        </p>
        {secondaryValue && (
          <p className={`text-xs font-medium ${secondaryColor}`}>
            {secondaryValue}
          </p>
        )}
      </div>
    </div>
  );
}
