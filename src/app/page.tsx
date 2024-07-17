import { CallToActionSection } from "./components/CallToActionSection";
import { FeatureRightCard } from "./components/FeatureRightCard";
import { FeatureRightListSection } from "./components/FeatureRightListSection";
import { HeroSection } from "./components/HeroSection";
import { HowDoesItWork } from "./components/HowDoesItWork";
import { Space } from "./components/Space";
import { TestimonialsSection } from "./components/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Space h={4} />
      <HowDoesItWork />
      <Space h={28} />
      <FeatureRightListSection />
      <Space h={28} />

      <TestimonialsSection />
      <Space h={28} />

      <FeatureRightCard />
      <Space h={28} />

      <CallToActionSection
        text="Entfesseln Sie das Potenzial Ihrer Daten für Ihren maximalen Erfolg mit KI-Unterstützung"
        ct2Text="Gespräch vereinbaren"
      />
      <Space h={28} />
    </div>
  );
}
