import { Link } from "react-router-dom";

export default function LandingFooter() {
  return (
    <footer className="container-vendora py-12 border-t border-line">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        {/* Brand column */}
        <div>
          <div className="flex items-center gap-2.5 font-head text-lg font-bold text-ink mb-3">
            <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-forest text-white text-xs font-bold flex-shrink-0">
              V
            </div>
            <span>
              Vend<span className="text-forest-light">ora</span>
            </span>
          </div>
          <p className="text-ink-2 text-[13px] leading-relaxed max-w-[220px]">
            India's AI-powered marketplace for buyers and sellers. Find what you
            mean. Sell without commission.
          </p>
        </div>

        {/* Platform links */}
        <div>
          <p className="text-xs font-semibold text-ink mb-3">Platform</p>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                to="/products"
                className="text-ink-2 text-sm hover:text-ink transition-colors"
              >
                Browse products
              </Link>
            </li>
            <li>
              <Link
                to="/seller/register"
                className="text-ink-2 text-sm hover:text-ink transition-colors"
              >
                Sell on Vendora
              </Link>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="text-ink-2 text-sm hover:text-ink transition-colors"
              >
                How it works
              </a>
            </li>
            <li>
              <a
                href="#categories"
                className="text-ink-2 text-sm hover:text-ink transition-colors"
              >
                Categories
              </a>
            </li>
          </ul>
        </div>

        {/* Features links */}
        <div>
          <p className="text-xs font-semibold text-ink mb-3">Features</p>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="#features"
                className="text-ink-2 text-sm hover:text-ink transition-colors"
              >
                AI search
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="text-ink-2 text-sm hover:text-ink transition-colors"
              >
                Compare products
              </a>
            </li>
            <li>
              <a
                href="#sellers"
                className="text-ink-2 text-sm hover:text-ink transition-colors"
              >
                Seller dashboard
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="text-ink-2 text-sm hover:text-ink transition-colors"
              >
                AI description
              </a>
            </li>
          </ul>
        </div>

        {/* Project links */}
        <div>
          <p className="text-xs font-semibold text-ink mb-3">Project</p>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="https://github.com/Sandeep-K-A/vendora-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-2 text-sm hover:text-ink transition-colors"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://sandeep-k-a.github.io/sandeep_portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-2 text-sm hover:text-ink transition-colors"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="https://app.notion.com/p/Vendora-AI-MarketPlace-382a80183399808aa196e349c9b53a12?source=copy_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-2 text-sm hover:text-ink transition-colors"
              >
                SRS Document
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sandeep-ka-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-2 text-sm hover:text-ink transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-line">
        <p className="text-ink-3 text-xs">
          © 2026 Vendora. Built as a portfolio project.
        </p>
        <p className="text-ink-3 text-xs">
          Built by <span className="text-forest font-medium">Sandeep K A·</span>
        </p>
      </div>
    </footer>
  );
}
