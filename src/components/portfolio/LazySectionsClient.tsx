"use client";
import dynamic from "next/dynamic";
import { LazySection } from "./LazySection";

const TestimonialsSection = dynamic(() => import("./testimonials-section"), { ssr: false });
const CaseStudiesSection = dynamic(() => import("./case-studies-section"), { ssr: false });

export function LazySectionsClient() {
  return (
    <>
      <section id="case-studies">
        <LazySection placeholder={null}>
          <CaseStudiesSection />
        </LazySection>
      </section>
      <section id="testimonials">
        <LazySection placeholder={null}>
          <TestimonialsSection />
        </LazySection>
      </section>
    </>
  );
} 