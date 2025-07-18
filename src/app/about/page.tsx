import { SectionsLayout } from "../sections-layout";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Hesham Badr | AI Transformation Consultant & Services",
  description:
    "Learn about Hesham Badr's journey from strategy to execution. AI transformation consultant offering strategic intelligence, AI agent enablement, and enterprise automation services.",
  keywords: [
    "About Hesham Badr",
    "AI transformation consultant",
    "AI strategy execution",
    "Agentic AI enablement",
    "AI leadership development",
    "Enterprise AI automation",
    "Certified AI consultant",
    "Neuronovate founder",
    "AI transformation services"
  ]
};

export default function AboutPage() {
  return <SectionsLayout sectionId="about" />;
} 