import { Navigation } from "@/components/portfolio/navigation";
import { HeroSection } from "@/components/portfolio/hero-section";
import { AboutSection } from "@/components/portfolio/about-section";
import { WhyMeSection } from "@/components/portfolio/why-me-section";
import { CaseStudiesSection } from "@/components/portfolio/case-studies-section";
import { Testimonials } from "@/components/portfolio/testimonials-section";
import { CTASection } from "@/components/portfolio/cta-section";
import { FloatingCallButton } from "@/components/portfolio/floating-call-icon";
import { Footer } from "@/components/portfolio/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      
      <section id="about">
        <AboutSection />
      </section>
      
      <section id="why-me">
        <WhyMeSection />
      </section>
      
      <section id="case-studies">
        <CaseStudiesSection />
      </section>
      
      <section id="testimonials">
        <Testimonials />
      </section>
      
      <section id="cta">
        <CTASection />
      </section>
      
      <Footer />
      <FloatingCallButton />
    </main>
  );
}