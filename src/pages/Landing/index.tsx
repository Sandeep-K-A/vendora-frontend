import LandingNavbar from "./LandingNavbar";
import HeroSection from "./HeroSection";
import MarqueeSection from "./MarqueeSection";
import StatsSection from "./StatsSection";
import HowItWorksSection from "./HowItWorksSection";

export default function Landing() {
  return (
    <>
      <LandingNavbar />
      <div className="h-[60px]" aria-hidden="true" />
      <main>
        <HeroSection />
        <MarqueeSection />
        <StatsSection />
        <HowItWorksSection />
      </main>
    </>
  );
}
