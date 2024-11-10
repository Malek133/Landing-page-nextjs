 import { HeroSection } from "./components/hero-section";
import { FeaturesSection } from "./components/features-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { CTASection } from "./components/cta-section";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
       <HeroSection /> 
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}