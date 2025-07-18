"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Brain,
  Workflow,
  Users,
  ArrowRight,
  Lightbulb,
  Target,
  Bot,
  Search,
  BarChart3,
  Cog,
  TrendingUp,
  UserCheck,
  Zap,
  Building,
  MessageSquare,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    id: "strategic-intelligence",
    icon: Brain,
    title: "Strategic Intelligence & AI",
    description:
      "Transform your business with AI-powered insights and intelligent automation solutions.",
    gradient: "from-cyan-500 to-blue-600",
    services: [
      { icon: Search, text: "AI Use Case Discovery & Prioritization" },
      { icon: Target, text: "Strategic AI Roadmap Development" },
      { icon: Bot, text: "Multi-Agent Assistant Implementation" },
      { icon: Lightbulb, text: "Innovation Strategy & Ideation" },
      { icon: BarChart3, text: "Predictive Analytics Solutions" },
    ],
  },
  {
    id: "digital-transformation",
    icon: Workflow,
    title: "Digital & Operational Transformation",
    description:
      "Optimize processes and accelerate digital transformation through intelligent automation.",
    gradient: "from-blue-500 to-purple-600",
    services: [
      { icon: Search, text: "Process Mining & Optimization" },
      { icon: Cog, text: "Automation Pipeline Design" },
      { icon: BarChart3, text: "Real-time Analytics Dashboards" },
      { icon: TrendingUp, text: "Performance Measurement Systems" },
      { icon: Zap, text: "Workflow Digitization" },
    ],
  },
  {
    id: "leadership-change",
    icon: Users,
    title: "Leadership & Change Acceleration",
    description:
      "Empowering leadership and enabling sustainable AI-powered change.",
    gradient: "from-purple-500 to-pink-600",
    services: [
      { icon: UserCheck, text: "Executive Coaching" },
      { icon: Building, text: "Culture Redesign" },
      { icon: Cog, text: "Organizational Design for AI" },
      { icon: MessageSquare, text: "Stakeholder Alignment & Influence" },
      { icon: Lightbulb, text: "Capability Building & Innovation" },
      { icon: MessageSquare, text: "Change Comms Strategy" },
    ],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="scroll-mt-20">
      {/* Services section is hidden on all devices */}
    </section>
  );
};
