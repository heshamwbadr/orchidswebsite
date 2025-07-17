"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  MessageSquare,
  FileText,
  HelpCircle,
  Banknote,
  Building2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const caseStudies = [
  {
    id: 1,
    title: "AI Capability Mapping",
    subtitle:
      "Mapped hidden team capabilities to transformation goals. Empowered strategic workforce decisions.",
    icon: Brain,
    tags: ["AI Strategy", "Skill Inference", "Workforce Intelligence"],
    bullets: [
      "Extracted latent skills from job and project data",
      "Visualised skill alignment with transformation goals",
      "Proposed upskilling and role redefinition plans",
    ],
    challenge:
      "Organization lacked visibility into existing team capabilities and struggled to align workforce skills with digital transformation objectives.",
    solution:
      "Implemented AI-powered skill mapping platform that analyzed job descriptions, project histories, and performance data to uncover hidden team capabilities and map them against transformation requirements.",
    impact:
      "Enabled data-driven workforce planning and strategic capability development, resulting in more effective talent allocation and targeted upskilling programs.",
    metrics: [
      { label: "Data-Backed Strategy", value: "✓" },
      { label: "Skill Visibility", value: "3x" },
      { label: "Actionable Role Blueprints", value: "✓" },
    ],
  },
  {
    id: 2,
    title: "AI-Powered Complaint Categorisation",
    subtitle:
      "Transformed customer resolution for a major bank by classifying complaints with AI. Reduced triage effort and improved regulatory response times.",
    icon: MessageSquare,
    tags: ["Multi-Agent AI", "Customer Resolution", "RegTech"],
    bullets: [
      "Deployed multi-agent AI trained on tone, policy, and categories",
      "Achieved real-time complaint triage with auto-routing",
      "Scaled to support multiple departments",
    ],
    challenge:
      "Major bank struggled with manual complaint processing, inconsistent categorization, and regulatory compliance deadlines across multiple departments.",
    solution:
      "Developed a multi-agent AI system that automatically categorizes customer complaints based on tone, policy requirements, and regulatory categories while providing real-time routing to appropriate teams.",
    impact:
      "Dramatically reduced manual processing time, improved regulatory compliance, and enhanced customer satisfaction through faster resolution times.",
    metrics: [
      { label: "Less Manual Triage", value: "85%" },
      { label: "Classification Time", value: "30s" },
      { label: "Audit-Ready Outputs", value: "✓" },
    ],
  },
  {
    id: 3,
    title: "GenAI for Process Reengineering",
    subtitle:
      "Applied GenAI to automate documentation and insights. Enabled smarter daily workflows for ops teams.",
    icon: FileText,
    tags: ["GenAI", "Process Automation", "Compliance"],
    bullets: [
      "Built enterprise-wide prompt library",
      "Integrated AI into BAU documentation",
      "Set up compliance + review guardrails",
    ],
    challenge:
      "Operations teams spent excessive time on documentation and lacked standardized approaches to process improvement and compliance reporting.",
    solution:
      "Implemented comprehensive GenAI solution with enterprise prompt libraries, automated documentation workflows, and built-in compliance review mechanisms for daily operations.",
    impact:
      "Significant time savings in operational tasks while maintaining compliance standards and enabling teams to focus on higher-value strategic work.",
    metrics: [
      { label: "Time Saved", value: "60%" },
      { label: "Prompt Reuse Library", value: "✓" },
      { label: "Risk Review Built-In", value: "✓" },
    ],
  },
  {
    id: 4,
    title: "AI Knowledge Assistant",
    subtitle:
      "Reduced internal support load through autonomous assistants. Enhanced consistency and availability of answers.",
    icon: HelpCircle,
    tags: ["AI Chatbot", "Knowledge Management", "Automation"],
    bullets: [
      "Designed chatbot with context-aware memory",
      "Queried Supabase for dynamic knowledge injection",
      "Implemented fallback + escalation logic",
    ],
    challenge:
      "Internal support teams were overwhelmed with repetitive queries, leading to inconsistent responses and reduced productivity across the organization.",
    solution:
      "Built an intelligent AI assistant with context-aware memory, dynamic knowledge base integration through Supabase, and sophisticated escalation pathways for complex queries.",
    impact:
      "Dramatically reduced internal support burden while providing 24/7 availability and consistent, accurate responses across multiple knowledge domains.",
    metrics: [
      { label: "Less Internal Queries", value: "70%" },
      { label: "Support", value: "24/7" },
      { label: "Knowledge Domains", value: "5" },
    ],
  },
  {
    id: 5,
    title: "Mortgage Credit Transformation",
    subtitle:
      "Accelerated credit assessment through Lean Six Sigma. Delivered faster outcomes and trained internal teams.",
    icon: Banknote,
    tags: ["Financial Services", "Lean Six Sigma", "Decision Optimization"],
    bullets: [
      "Eliminated rework and improved handoffs in processing",
      "Piloted decision flow redesign across branches",
      "Upskilled employees via Six Sigma coaching",
    ],
    challenge:
      "Mortgage processing suffered from inefficient workflows, excessive rework, and inconsistent decision-making across multiple branch locations.",
    solution:
      "Applied Lean Six Sigma methodology to redesign entire credit assessment process, eliminate waste, optimize decision flows, and train internal teams on continuous improvement practices.",
    impact:
      "Achieved significant operational savings while accelerating time-to-decision and building internal capability for ongoing process optimization.",
    metrics: [
      { label: "Savings", value: "$1M+" },
      { label: "Faster Time-to-Decision", value: "✓" },
      { label: "Coached Practitioners", value: "2" },
    ],
  },
  {
    id: 6,
    title: "Enterprise Front Door Redesign",
    subtitle:
      "Redesigned fragmented intake processes across business units. Unified decision-making and accelerated time-to-action.",
    icon: Building2,
    tags: ["Change Management", "Process Mining", "Experience Design"],
    bullets: [
      "Mapped 7+ intake pathways and unified taxonomy",
      "Created future-state intake workflow using process mining",
      "Enabled change impact visibility upfront",
    ],
    challenge:
      "Enterprise had multiple fragmented intake processes across business units, creating confusion, duplication, and delayed decision-making for internal and external stakeholders.",
    solution:
      "Comprehensive process mining analysis to map existing pathways, design unified taxonomy and future-state workflows, with full change impact assessment and stakeholder alignment.",
    impact:
      "Eliminated process duplication, accelerated time-to-action, and created single unified experience for all enterprise interactions.",
    metrics: [
      { label: "Time Reduction", value: "40%" },
      { label: "Unified Experience", value: "1" },
      { label: "Duplicates", value: "Zero" },
    ],
  },
];

export function CaseStudiesSection() {
  const [selectedStudy, setSelectedStudy] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="case-studies" className="relative min-h-screen responsive-py-lg mobile-safe-area overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse hidden lg:block" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-accent/15 to-secondary/15 rounded-full blur-3xl animate-pulse delay-1000 hidden lg:block" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-2xl animate-pulse delay-500 hidden lg:block" />
      </div>

      <div className="container-responsive max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.h2
            className="responsive-text-5xl font-light mb-4 lg:mb-6 text-foreground"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Case{" "}
            <span className="text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-clip-text">
              Studies
            </span>
          </motion.h2>
          <motion.p
            className="responsive-text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Real-world AI transformations that drive measurable business
            outcomes across industries
          </motion.p>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid responsive-grid-2 lg:responsive-grid-3 responsive-gap-lg"
        >
          {/* Desktop & Tablet: 3-column grid, Mobile: 2-column or 1-column */}
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <motion.div
                key={study.id}
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group h-full"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative h-full bg-gradient-to-br from-card/60 via-card/40 to-secondary/60 backdrop-blur-xl border border-border/50 rounded-xl lg:rounded-2xl responsive-card hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden cursor-pointer touch-target min-h-[350px] sm:min-h-[400px] flex flex-col">
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Animated Border Gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm rounded-xl lg:rounded-2xl" />

                      <div className="relative z-10 h-full flex flex-col">
                        {/* Header with Icon */}
                        <div className="flex items-center gap-3 mb-3 lg:mb-4">
                          <motion.div
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-muted/50 to-secondary/50 group-hover:from-primary/20 group-hover:to-accent/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-500 flex-shrink-0"
                            whileHover={{
                              rotate: 5,
                              transition: { duration: 0.3, ease: 'easeOut' },
                            }}
                          >
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                          </motion.div>
                          <h3 className="responsive-text-lg sm:responsive-text-xl font-semibold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text transition-all duration-300 leading-tight m-0">
                            {study.title}
                          </h3>
                        </div>

                        {/* Subtitle */}
                        <p className="text-muted-foreground responsive-text-sm mb-3 lg:mb-4 leading-relaxed font-light line-clamp-3 flex-shrink-0">
                          {study.subtitle}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap responsive-gap-sm mb-3 lg:mb-4 flex-shrink-0">
                          {study.tags.map((tag) => (
                            <Badge
                              key={tag}
                              className="responsive-text-sm bg-card/60 text-muted-foreground border-border/50 hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all duration-300"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Bullet Points */}
                        <div className="space-y-1.5 sm:space-y-2 mb-4 lg:mb-6 flex-grow">
                          {study.bullets.map((bullet, bulletIndex) => (
                            <div
                              key={bulletIndex}
                              className="flex items-start responsive-text-sm"
                            >
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mr-2 sm:mr-3 mt-1.5 flex-shrink-0 group-hover:shadow-sm group-hover:shadow-primary/50 transition-all duration-300" />
                              <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                                {bullet}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* CTA */}
                        <div className="text-primary responsive-text-sm font-medium group-hover:text-accent transition-colors duration-300 flex items-center flex-shrink-0 mt-auto">
                          <span>View full case study</span>
                          <motion.span
                            className="ml-2"
                            animate={{ x: [0, 4, 0] }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            →
                          </motion.span>
                        </div>

                        {/* Floating Particles */}
                        <div className="absolute top-4 right-4 w-2 h-2 bg-primary/60 rounded-full opacity-60 group-hover:animate-pulse" />
                        <div className="absolute bottom-4 left-4 w-1 h-1 bg-accent/60 rounded-full opacity-40 group-hover:animate-pulse delay-300" />
                      </div>
                    </div>
                  </DialogTrigger>

                  <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-card/95 border-border/50 text-foreground mx-4 sm:mx-auto">
                    <DialogTitle className="sr-only">
                      {study.title} - Case Study Details
                    </DialogTitle>
                    <div className="responsive-card space-y-6 lg:space-y-8">
                      {/* Dialog Header */}
                      <div className="flex items-start responsive-gap-base text-left">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-muted/50 to-secondary/50 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h2 className="responsive-text-2xl font-bold text-foreground mb-2 text-left">
                            {study.title}
                          </h2>
                          <p className="text-accent italic mb-3 lg:mb-4 leading-relaxed responsive-text-base text-left">
                            {study.subtitle}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-2 text-left">
                            {study.tags.map((tag) => (
                              <Badge
                                key={tag}
                                className="bg-card/60 text-muted-foreground border-border/50 responsive-text-sm px-3 py-1 rounded-full font-medium"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Dialog Content */}
                      <div className="grid gap-6 lg:gap-8">
                        <div>
                          <h3 className="responsive-text-lg font-semibold text-primary mb-2 lg:mb-3 flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            The Challenge
                          </h3>
                          <p className="text-muted-foreground leading-relaxed pl-5 responsive-text-base">
                            {study.challenge}
                          </p>
                        </div>

                        <div>
                          <h3 className="responsive-text-lg font-semibold text-accent mb-2 lg:mb-3 flex items-center">
                            <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                            Our Solution
                          </h3>
                          <p className="text-muted-foreground leading-relaxed pl-5 responsive-text-base">
                            {study.solution}
                          </p>
                        </div>

                        <div>
                          <h3 className="responsive-text-lg font-semibold text-primary mb-2 lg:mb-3 flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            The Impact
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mb-4 lg:mb-6 pl-5 responsive-text-base">
                            {study.impact}
                          </p>

                          {/* Metrics Grid */}
                          <div className="responsive-grid-3 responsive-gap-base pl-5">
                            {study.metrics.map((metric, index) => (
                              <div
                                key={index}
                                className="text-center responsive-card bg-card/40 border border-border/50 rounded-xl backdrop-blur-sm"
                              >
                                <div className="responsive-text-xl sm:responsive-text-2xl font-bold text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text mb-1">
                                  {metric.value}
                                </div>
                                <div className="responsive-text-sm text-muted-foreground">
                                  {metric.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-px h-32 bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden lg:block" />
      <div className="absolute top-1/2 right-0 w-px h-32 bg-gradient-to-b from-transparent via-accent/50 to-transparent hidden lg:block" />
    </section>
  );
}
