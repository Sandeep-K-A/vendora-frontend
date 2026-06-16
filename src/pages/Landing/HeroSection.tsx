import HeroContent from "./HeroContent";
import HeroProductCard from "./HeroProductCard";

export default function HeroSection() {
  return (
    <section
      className="pt-24 pb-20 px-10 max-w-[1080px] mx-auto"
      aria-labelledby="hero-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <HeroContent />
        <div className="hidden lg:block overflow-visible pt-16">
          <HeroProductCard />
        </div>
      </div>
    </section>
  );
}
