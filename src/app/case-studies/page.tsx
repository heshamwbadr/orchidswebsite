import { SectionsLayout } from "../sections-layout";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Strategy & Execution Portfolio | Hesham Badr",
  description:
    "Explore real-world AI transformation projects led by Hesham Badr. From agentic AI to operational AI enablement, see strategy turned into impact.",
  keywords: [
    "AI transformation portfolio",
    "AI execution case studies",
    "Agentic AI projects",
    "AI automation examples",
    "Hesham Badr portfolio",
    "Neuronovate client work"
  ]
};

export default function CaseStudiesPage() {
  return <SectionsLayout sectionId="case-studies" />;
} 