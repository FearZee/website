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
    </>
  );
}
