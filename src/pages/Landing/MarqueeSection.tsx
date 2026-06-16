import { MARQUEE_ITEMS } from "@/constants";
export default function MarqueeSection() {
  return (
    <div
      className="py-5 border-t border-b border-line bg-white overflow-hidden"
      aria-hidden="true"
    >
      <div className="flex animate-marquee w-max">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
          <div
            key={`${item.label}-${index}`}
            className="flex items-center gap-1 px-4 text-sm font-medium text-ink-2 whitespace-nowrap"
          >
            <span className="text-sm">{item.icon}</span>
            {item.label}
            <span className="text-line-2 ml-7" aria-hidden="true">
              ·
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
