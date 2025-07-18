import { SectionsLayout } from "../sections-layout";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Transformation Services | Hesham Badr",
  description:
    "Services include strategic intelligence, AI agent enablement, leadership acceleration, and enterprise AI automation — all designed for execution.",
  keywords: [
    "AI transformation services",
    "Agentic AI enablement",
    "AI leadership development",
    "AI automation for enterprises",
    "Certified AI services",
    "Hesham Badr services"
  ]
};

export default function ServicesPage() {
  return <SectionsLayout sectionId="services" />;
} 