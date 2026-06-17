import { STATS } from "@/constants";

export default function StatsSection() {
  return (
    <section
      className="container-vendora py-16"
      aria-label="Platform statistics"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line border border-line rounded-2xl overflow-hidden">
        {STATS.map((stat) => (
          <div key={stat.value} className="bg-white px-6 py-7 text-center">
            <p className="font-head text-3xl font-bold text-ink leading-none mb-1.5">
              {stat.value}
            </p>
            <p className="text-ink-2 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
