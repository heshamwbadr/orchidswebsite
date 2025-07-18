import { SectionsLayout } from "../sections-layout";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Strategy Session with Hesham Badr | Contact",
  description:
    "Looking to drive real AI transformation? Reach out to Hesham Badr for a consultation on AI strategy, automation, or agentic enablement.",
  keywords: [
    "Contact Hesham Badr",
    "Book AI consultation",
    "AI transformation expert",
    "Certified AI consultant contact",
    "AI strategy session",
    "Connect with Neuronovate"
  ]
};

export default function ContactPage() {
  return <SectionsLayout sectionId="contact" />;
} 