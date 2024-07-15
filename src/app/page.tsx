import { CallToActionSection } from "./components/CallToActionSection";
import { FeatureRightCard } from "./components/FeatureRightCard";
import { FeatureRightListSection } from "./components/FeatureRightListSection";
import { HeroSection } from "./components/HeroSection";
import { HowDoesItWork } from "./components/HowDoesItWork";
import { TestimonialsSection } from "./components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowDoesItWork />
      <FeatureRightListSection />
      <TestimonialsSection />
      <FeatureRightCard />
      <CallToActionSection
        text="Entfesseln Sie das Potenzial Ihrer Daten für Ihren maximalen Erfolg mit KI-Unterstützung"
        ct2Text="Gespräch vereinbaren"
      />
    </>
  );
}
