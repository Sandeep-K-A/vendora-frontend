import { COMPARISON_ROWS } from "@/constants";

function renderCell(value: string | boolean, isVendora: boolean) {
  if (typeof value === "boolean") {
    return value ? (
      <span
        className={
          isVendora ? "text-forest font-bold" : "text-vendora-green font-bold"
        }
      >
        ✓
      </span>
    ) : (
      <span className="text-ink-3">✗</span>
    );
  }

  if (value === "Never") {
    return <span className="text-forest font-semibold">{value}</span>;
  }
  if (value === "Yes") {
    return <span className="text-ink-2">{value}</span>;
  }
  if (isVendora) {
    return <span className="text-forest font-bold">{value}</span>;
  }
  return <span className="text-ink-2">{value}</span>;
}

export default function ComparisonSection() {
  const lastIndex = COMPARISON_ROWS.length - 1;

  return (
    <section
      className="container-vendora py-20"
      aria-labelledby="comparison-heading"
    >
      <div className="text-center mb-10">
        <p className="flex items-center justify-center gap-2 text-xs font-semibold text-forest uppercase tracking-wider mb-3">
          <span className="w-5 h-px bg-forest-light" aria-hidden="true" />
          Why Vendora
          <span className="w-5 h-px bg-forest-light" aria-hidden="true" />
        </p>
        <h2
          id="comparison-heading"
          className="font-head text-3xl lg:text-4xl font-bold text-ink leading-tight tracking-[-0.02em]"
        >
          Not all marketplaces
          <br />
          are built equal.
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-line border-separate border-spacing-0 bg-white rounded-2xl overflow-hidden">
          <thead>
            <tr>
              <th className="text-left text-xs font-semibold text-ink-2 px-5 py-3.5 bg-bg-2">
                Feature
              </th>
              <th className="text-center text-xs font-semibold text-white px-5 py-3.5 bg-forest font-head border-l-2 border-r-2 border-forest">
                ✦ Vendora
              </th>
              <th className="text-center text-xs font-semibold text-ink-2 px-5 py-3.5 bg-bg-2">
                Flipkart
              </th>
              <th className="text-center text-xs font-semibold text-ink-2 px-5 py-3.5 bg-bg-2">
                Amazon
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_ROWS.map((row, i) => {
              const isLast = i === lastIndex;
              return (
                <tr key={row.feature}>
                  <td
                    className={`
                      text-sm font-medium text-ink px-5 py-3.5 border-t
                      
                    `}
                  >
                    {row.feature}
                  </td>
                  <td
                    className={`
                      text-center text-sm px-5 py-3.5 bg-forest-xl/10
                      border-l-2 border-r-2 border-l-forest border-r-forest border-t border-t-line
                      ${isLast ? "border-b-2 border-b-forest" : ""}
                    `}
                  >
                    {renderCell(row.vendora, true)}
                  </td>
                  <td className={`text-center text-sm px-5 py-3.5 border-t`}>
                    {renderCell(row.flipkart, false)}
                  </td>
                  <td
                    className={`
                      text-center text-sm px-5 py-3.5 border-t
                    
                    `}
                  >
                    {renderCell(row.amazon, false)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
