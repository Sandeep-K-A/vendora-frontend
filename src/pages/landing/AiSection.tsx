import AiHighlights from "./AiHighlights";
import AiSearchDemo from "./AiSearchDemo";

export default function AiSection() {
  return (
    <section className="bg-forest py-20">
      <div className="px-10 max-w-[1160px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <AiHighlights />
        <AiSearchDemo />
      </div>
    </section>
  );
}
