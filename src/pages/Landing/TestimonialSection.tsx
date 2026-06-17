import { TESTIMONIALS } from "@/constants";

export default function TestimonialSection() {
  return (
    <section
      className="container-vendora py-16"
      aria-labelledby="testimonials-heading"
    >
      <div className="text-center mb-10">
        <p className="flex items-center justify-center gap-2 text-xs font-semibold text-forest uppercase tracking-wider mb-3">
          <span className="w-5 h-[1.2px] bg-forest-light" aria-hidden="true" />
          What people say
        </p>
        <h2
          id="testimonials-heading"
          className="font-head text-3xl lg:text-4xl font-bold text-ink leading-tight tracking-[-0.02em]"
        >
          Early users love it.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.name}
            className="bg-white border border-line rounded-2xl p-5"
          >
            <div
              className="text-gold text-sm mb-3"
              aria-label={`${t.rating} out of 5 stars`}
            >
              {"★".repeat(t.rating)}
            </div>
            <p className="text-ink-2 text-[13.5px] leading-relaxed italic mb-5">
              "{t.text}"
            </p>
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-forest-xl/40 text-forest text-[11px] font-bold flex-shrink-0">
                {t.initials}
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">{t.name}</p>
                <p className="text-ink-3 text-xs">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
