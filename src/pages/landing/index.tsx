import HeroSection from "./HeroSection";
import MarqueeSection from "./MarqueeSection";
import StatsSection from "./StatsSection";
import HowItWorksSection from "./HowItWorksSection";
import FeaturesSection from "./FeaturesSection";
import CategoriesSection from "./CategoriesSection";
import AiSection from "./AiSection";
import SellerSection from "./SellerSection";
import ComparisonSection from "./ComparisonSection";
import TestimonialSection from "./TestimonialSection";
import CtaSection from "./CtaSection";

export default function Landing() {
  return (
    <>
      {/* main section */}
      <main>
        <HeroSection />
        <MarqueeSection />
        <StatsSection />
        <HowItWorksSection />
        <FeaturesSection />
        <CategoriesSection />
        <AiSection />
        <SellerSection />
        <ComparisonSection />
        <TestimonialSection />
        <CtaSection />
      </main>
    </>
  );
}
