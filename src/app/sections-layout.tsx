"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Navigation } from "@/components/portfolio/navigation";
import { HeroSection } from "@/components/portfolio/hero-section";
import { AboutSection } from "@/components/portfolio/about-section";
import { WhyMeSection } from "@/components/portfolio/why-me-section";
import { ServicesSection } from "@/components/portfolio/services-section";
import { CaseStudiesSection } from "@/components/portfolio/case-studies-section";
import { Testimonials } from "@/components/portfolio/testimonials-section";
import { CTASection } from "@/components/portfolio/cta-section";
import { Footer } from "@/components/portfolio/footer";

interface SectionsLayoutProps {
  sectionId?: string;
}

export const SectionsLayout: React.FC<SectionsLayoutProps> = ({ sectionId }) => {
  const pathname = usePathname();
  // Refs for each section
  const aboutRef = useRef<HTMLDivElement>(null);
  const whyMeRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const caseStudiesRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionId) return;
    const refs: Record<string, React.RefObject<HTMLDivElement>> = {
      about: aboutRef,
      "why-me": whyMeRef,
      services: servicesRef,
      "case-studies": caseStudiesRef,
      testimonials: testimonialsRef,
      contact: contactRef,
    };
    const ref = refs[sectionId.replace("/", "")];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [sectionId]);

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        className="min-h-screen bg-background text-foreground"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -24 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <Navigation />
        <HeroSection />
        <div ref={aboutRef} className="relative">
          <AboutSection />
        </div>
        <div ref={whyMeRef} className="relative">
          <WhyMeSection />
        </div>
        <div ref={servicesRef} className="relative">
          <ServicesSection />
        </div>
        <div ref={caseStudiesRef} className="relative">
          <CaseStudiesSection />
        </div>
        <div ref={testimonialsRef} className="relative">
          <Testimonials />
        </div>
        <div ref={contactRef} className="relative">
          <CTASection />
        </div>
        <Footer />
      </motion.main>
    </AnimatePresence>
  );
}; 