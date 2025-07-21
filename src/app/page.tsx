import { Navigation } from "@/components/portfolio/navigation";
import { HeroSection } from "@/components/portfolio/hero-section";
import { AboutSection } from "@/components/portfolio/about-section";
import { WhyMeSection } from "@/components/portfolio/why-me-section";
import { ServicesSection } from "@/components/portfolio/services-section";
import dynamic from "next/dynamic";
import { LazySectionsClient } from "@/components/portfolio/LazySectionsClient";
import { CTASection } from "@/components/portfolio/cta-section";
import { Footer } from "@/components/portfolio/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />

      <section id="services" className="hidden">
        <ServicesSection />
      </section>

      <section id="about" className="-mt-12 lg:-mt-16">
        <AboutSection />
      </section>

      <section id="trust">
        <WhyMeSection />
      </section>

      <section id="case-studies">
        <LazySectionsClient />
      </section>

      <section id="testimonials">
        <LazySectionsClient />
      </section>

      <CTASection />

      <Footer />
    </main>
  );
}
