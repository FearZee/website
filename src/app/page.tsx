import { CallToActionSection } from "./components/CallToActionSection";
import { ContactPage } from "./components/ContactPage";
import { FAQ } from "./components/FAQ";
import { FeatureRightCard } from "./components/FeatureRightCard";
import { FeatureRightListSection } from "./components/FeatureRightListSection";
import { HeroSection } from "./components/HeroSection";
import { HowDoesItWork } from "./components/HowDoesItWork";
import { ProblemSection } from "./components/ProblemSection";
import { Space } from "./components/Space";
import { TestimonialsSection } from "./components/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Space h={4} />
      <ProblemSection />
      <Space h={28} />

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
      <FAQ />
      <Space h={28} />
    </div>
  );
}
