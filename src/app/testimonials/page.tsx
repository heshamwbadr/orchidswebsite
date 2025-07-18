import { SectionsLayout } from "../sections-layout";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Leaders Trust Hesham Badr | Testimonials",
  description:
    "Hear from executives and changemakers who've worked with Hesham Badr to deliver real AI outcomes at scale.",
  keywords: [
    "AI consultant reviews",
    "AI leadership testimonials",
    "Hesham Badr feedback",
    "Certified AI consultant reputation",
    "Neuronovate client reviews"
  ]
};

export default function TestimonialsPage() {
  return <SectionsLayout sectionId="testimonials" />;
} 