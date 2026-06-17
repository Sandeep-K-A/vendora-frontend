import { Link } from "react-router-dom";

/**
 * CTASection
 *
 * Final call-to-action banner before the footer.
 * Fully static — no state, no data dependency.
 */
export default function CtaSection() {
  return (
    <section className="container-vendora py-16">
      <div className=" bg-ink rounded-[28px] px-8 py-16 text-center overflow-hidden">
        <div>
          <p className="text-forest-light text-xs font-semibold uppercase tracking-wider mb-4">
            Get started today
          </p>
          <h2 className="font-head text-3xl lg:text-5xl font-bold text-white leading-tight tracking-[-0.025em] mb-4">
            Ready to shop smarter
            <br />
            or <span className="text-forest-light">sell better?</span>
          </h2>
          <p className="text-white/55 max-w-md mx-auto mb-9">
            Join thousands of Indian buyers and sellers on the marketplace that
            actually works for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5">
            <Link
              to="/products"
              className="btn bg-white text-ink hover:bg-bg-3 btn-lg w-full sm:w-auto"
            >
              Browse products free →
            </Link>
            <Link
              to="/seller/register"
              className="btn btn-lg w-full sm:w-auto border border-white/30 text-white hover:bg-white/[0.06] hover:border-white/75"
            >
              Start selling free →
            </Link>
          </div>

          <p className="text-white/35 text-xs">
            No credit card · No commission · No catch.
          </p>
        </div>
      </div>
    </section>
  );
}
