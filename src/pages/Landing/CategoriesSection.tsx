import { CATEGORIES } from "@/constants";
import { Link } from "react-router-dom";

export default function CategoriesSection() {
  return (
    <section
      className="container-vendora py-16"
      id="categories"
      aria-labelledby="categories-heading"
    >
      <div className="flex items-center justify-between mb-7">
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold text-forest uppercase tracking-wider mb-3">
            <span
              className="w-5 h-[1.2px] bg-forest-light"
              aria-hidden="true"
            />
            Browse by category
          </p>
          <h2
            id="categories-heading"
            className="font-head text-3xl lg:text-4xl font-bold text-ink leading-tight tracking-[0.02em] mb-3"
          >
            Find exactly
            <br />
            what you need.
          </h2>
        </div>
        <Link to="/products" className="btn btn-ghost hidden sm:inline-flex">
          View all →
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
        {CATEGORIES.map((category) => (
          <button
            key={category.name}
            className="
              flex flex-col items-center gap-2
              bg-white border border-line rounded-2xl
              px-3.5 py-5
              transition-all duration-200
              hover:border-forest-light hover:bg-bg
            "
          >
            <span className="text-3xl" aria-hidden="true">
              {category.icon}
            </span>
            <span className="font-head text-sm font-semibold text-ink text-center">
              {category.name}
            </span>
            <span className="text-ink-3 text-xs">{category.count}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
