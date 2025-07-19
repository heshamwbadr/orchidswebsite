"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Trophy,
  Zap,
  GraduationCap,
  Cog,
  Building,
  Shield,
  Calendar,
} from "lucide-react";
import { openCalendlyPopup } from "@/lib/calendly";

interface Differentiator {
  icon: React.ReactNode;
  title: string;
  description: string;
  points: string[];
}

const differentiators: Differentiator[] = [
  {
    icon: <Trophy className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
    title: "Proven Transformation, Real Impact",
    description:
      "Over a decade of leading transformations that stick. $21M+ in quantified outcomes. Not theory, results.",
    points: [
      "40+ business-critical workflows overhauled",
      "Delivered across Australia, Europe & MENA",
    ],
  },
  {
    icon: <Building className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
    title: "Strategic Partner to the C-Suite",
    description:
      "From boardrooms to strategy offsites, I’ve helped executives navigate change, align teams, and execute with precision.",
    points: [
      "Advisory roles with Tier-1 bank execs",
      "Built governance models still in use",
    ],
  },
  {
    icon: <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
    title: "Credibility Backed by World-Class Training",
    description:
      "Global education meets practical wisdom. I blend engineering logic with business strategy, and keep evolving.",
    points: [
      "MSc in Process Engineering (Top 20 Global)",
      "MBA in Emerging Tech (Europe)",
      "Harvard-certified in Business Strategy & Consulting",
    ],
  },
  {
    icon: <Zap className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
    title: "AI-Driven. Business-Led.",
    description:
      "I don’t just apply AI, I architect meaningful use cases that scale and serve the business, not the buzz.",
    points: [
      "Led 50+ AI use cases",
      "95% solution adoption rate",
    ],
  },
  {
    icon: <Cog className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
    title: "End-to-End Ownership, No Silos",
    description:
      "I take accountability from idea to delivery. No relay races - just consistent momentum and clear outcomes.",
    points: [
      "Strategic to operational execution",
      "Zero handoffs, single point of trust",
    ],
  },
  {
    icon: <Shield className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
    title: "Human-Centered, Ethically Aligned AI",
    description:
      "Built with care. I design AI systems that are ethical, compliant, and built around real people - not just data.",
    points: [
      "100% compliance with global standards",
      "Embedded ethics in every design",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
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

// Mobile-specific slide-in animations
const mobileContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
      duration: 0.6,
    },
  },
};

const mobileItemVariants = {
  hidden: {
    opacity: 0,
    x: -100,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Staggered slide-in for mobile tiles
const getMobileItemVariants = (index: number) => ({
  hidden: {
    opacity: 0,
    x: index % 2 === 0 ? -100 : 100, // Alternate left/right slide
    scale: 0.9,
    rotateY: index % 2 === 0 ? -15 : 15, // Slight 3D rotation
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.8,
      delay: index * 0.12, // Slightly longer stagger for mobile
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
});

// Mobile-specific icon animation variants
const mobileIconVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.5, 
    rotate: -180 
  },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 200,
    }
  },
};

// Mobile-specific content animation variants
const mobileContentVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: "easeOut",
    }
  },
};

const mobileTitleVariants = {
  hidden: { 
    opacity: 0, 
    y: 15,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.3,
      ease: "easeOut",
    }
  },
};

// Mobile-specific scroll-triggered animations
const mobileScrollVariants = {
  hidden: {
    opacity: 0,
    x: -100,
    y: 50,
    scale: 0.9,
    rotateY: -15,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

// Staggered scroll animations for mobile tiles
const getMobileScrollVariants = (index: number) => ({
  hidden: {
    opacity: 0,
    x: index % 2 === 0 ? -100 : 100, // Alternate left/right slide
    y: 50,
    scale: 0.9,
    rotateY: index % 2 === 0 ? -15 : 15,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.8,
      delay: index * 0.15, // Staggered delay for scroll effect
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
});

export const WhyMeSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component is mounted before accessing window
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Detect mobile device only after mounting
  useEffect(() => {
    if (!isMounted) return;
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [isMounted]);

  const handleDiscussVision = () => {
    openCalendlyPopup();
  };

  // Group differentiators into columns for desktop
  const column1 = differentiators.slice(0, 2);
  const column2 = differentiators.slice(2, 4);
  const column3 = differentiators.slice(4, 6);

  return (
    <section id="why-me" className="scroll-mt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-primary/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      <div className="container-responsive max-w-7xl relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div id="why-leaders-trust-me" className="scroll-mt-40"></div>
          <motion.h2
            className="responsive-text-5xl font-light mb-4 lg:mb-6 text-foreground"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Why Leaders{" "}
            <span className="text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-clip-text">
              Trust
            </span>{" "}
            <span className="text-white">Me</span>?
          </motion.h2>
          <motion.p
            className="responsive-text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            With a background in process engineering and management consulting,
            I translate seamlessly between boardrooms and dev rooms - aligning
            tech delivery with strategic outcomes.
          </motion.p>
        </motion.div>

        {/* Differentiators Grid - Mobile/Tablet: 2 columns, Desktop: 3 columns with stacked tiles */}
        <div className="mb-12 lg:mb-16">
          {/* Mobile and Tablet View - 2 column grid */}
          <motion.div
            className="responsive-grid-2 lg:hidden responsive-gap-lg"
            variants={mobileContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={getMobileScrollVariants(index)}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                whileTap={{ scale: 0.98 }}
                className="group h-full touch-target"
                style={{ touchAction: 'manipulation' }}
              >
                <div className="relative h-full bg-gradient-to-br from-card/60 via-card/40 to-secondary/60 backdrop-blur-xl border border-border/50 rounded-2xl responsive-card hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden min-h-[280px] sm:min-h-[320px]">
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500" />

                  {/* Animated Border Gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 blur-sm rounded-2xl" />

                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon Section */}
                    <motion.div
                      className="w-14 h-14 sm:w-16 sm:h-16 lg:w-16 lg:h-16 mb-4 lg:mb-6 rounded-xl bg-gradient-to-br from-muted/50 to-secondary/50 group-hover:from-primary/20 group-hover:to-accent/20 group-active:from-primary/30 group-active:to-accent/30 flex items-center justify-center text-primary group-hover:scale-110 group-active:scale-105 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-500"
                      variants={mobileIconVariants}
                      whileHover={{
                        rotate: 5,
                        transition: { duration: 0.3, ease: "easeOut" },
                      }}
                      whileTap={{
                        rotate: 2,
                        scale: 1.05,
                        transition: { duration: 0.2, ease: "easeOut" },
                      }}
                    >
                      {item.icon}
                    </motion.div>

                    {/* Content */}
                    <motion.div 
                      className="space-y-3 lg:space-y-4 flex-grow flex flex-col"
                      variants={mobileContentVariants}
                    >
                      <motion.h3 
                        className="responsive-text-xl sm:responsive-text-2xl font-semibold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-active:text-transparent group-active:bg-gradient-to-r group-active:from-primary group-active:to-accent group-active:bg-clip-text transition-all duration-300"
                        variants={mobileTitleVariants}
                      >
                        {item.title}
                      </motion.h3>

                      <motion.p 
                        className="text-muted-foreground leading-relaxed font-light flex-grow responsive-text-sm sm:responsive-text-base"
                        variants={mobileContentVariants}
                      >
                        {item.description}
                      </motion.p>

                      {/* Bullet Points */}
                      <div className="space-y-2 mt-auto">
                        {item.points.map((point, pointIndex) => (
                          <div
                            key={pointIndex}
                            className="flex items-start responsive-text-sm"
                          >
                            <div className="w-2 h-2 sm:w-1.5 sm:h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mr-3 mt-1.5 flex-shrink-0 group-hover:shadow-sm group-hover:shadow-primary/50 group-active:shadow-sm group-active:shadow-primary/50 transition-all duration-300" />
                            <span className="text-muted-foreground group-hover:text-foreground group-active:text-foreground transition-colors duration-300 leading-relaxed">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Floating Particles */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-primary/60 rounded-full opacity-60 group-hover:animate-pulse group-active:animate-pulse" />
                    <div className="absolute bottom-4 left-4 w-1 h-1 bg-accent/60 rounded-full opacity-40 group-hover:animate-pulse group-active:animate-pulse delay-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Desktop View - 3 columns with stacked tiles */}
          <motion.div
            className="hidden lg:grid lg:grid-cols-3 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Column 1 */}
            <div className="space-y-8">
              {column1.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  className="group"
                >
                  <div className="relative bg-gradient-to-br from-card/60 via-card/40 to-secondary/60 backdrop-blur-xl border border-border/50 rounded-2xl p-6 lg:p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden">
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Animated Border Gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm rounded-2xl" />

                    <div className="relative z-10">
                      {/* Icon Section */}
                      <motion.div
                        className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-muted/50 to-secondary/50 group-hover:from-primary/20 group-hover:to-accent/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-500"
                        whileHover={{
                          rotate: 5,
                          transition: { duration: 0.3, ease: "easeOut" },
                        }}
                      >
                        {item.icon}
                      </motion.div>

                      {/* Content */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text transition-all duration-300">
                          {item.title}
                        </h3>

                        <p className="text-muted-foreground leading-relaxed font-light text-base">
                          {item.description}
                        </p>

                        {/* Bullet Points */}
                        <div className="space-y-2">
                          {item.points.map((point, pointIndex) => (
                            <div
                              key={pointIndex}
                              className="flex items-start text-sm"
                            >
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mr-3 mt-1.5 flex-shrink-0 group-hover:shadow-sm group-hover:shadow-primary/50 transition-all duration-300" />
                              <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                                {point}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Floating Particles */}
                      <div className="absolute top-4 right-4 w-2 h-2 bg-primary/60 rounded-full opacity-60 group-hover:animate-pulse" />
                      <div className="absolute bottom-4 left-4 w-1 h-1 bg-accent/60 rounded-full opacity-40 group-hover:animate-pulse delay-300" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="space-y-8">
              {column2.map((item, index) => (
                <motion.div
                  key={index + 2}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  className="group"
                >
                  <div className="relative bg-gradient-to-br from-card/60 via-card/40 to-secondary/60 backdrop-blur-xl border border-border/50 rounded-2xl p-6 lg:p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden">
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Animated Border Gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm rounded-2xl" />

                    <div className="relative z-10">
                      {/* Icon Section */}
                      <motion.div
                        className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-muted/50 to-secondary/50 group-hover:from-primary/20 group-hover:to-accent/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-500"
                        whileHover={{
                          rotate: 5,
                          transition: { duration: 0.3, ease: "easeOut" },
                        }}
                      >
                        {item.icon}
                      </motion.div>

                      {/* Content */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text transition-all duration-300">
                          {item.title}
                        </h3>

                        <p className="text-muted-foreground leading-relaxed font-light text-base">
                          {item.description}
                        </p>

                        {/* Bullet Points */}
                        <div className="space-y-2">
                          {item.points.map((point, pointIndex) => (
                            <div
                              key={pointIndex}
                              className="flex items-start text-sm"
                            >
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mr-3 mt-1.5 flex-shrink-0 group-hover:shadow-sm group-hover:shadow-primary/50 transition-all duration-300" />
                              <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                                {point}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Floating Particles */}
                      <div className="absolute top-4 right-4 w-2 h-2 bg-primary/60 rounded-full opacity-60 group-hover:animate-pulse" />
                      <div className="absolute bottom-4 left-4 w-1 h-1 bg-accent/60 rounded-full opacity-40 group-hover:animate-pulse delay-300" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Column 3 */}
            <div className="space-y-8">
              {column3.map((item, index) => (
                <motion.div
                  key={index + 4}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  className="group"
                >
                  <div className="relative bg-gradient-to-br from-card/60 via-card/40 to-secondary/60 backdrop-blur-xl border border-border/50 rounded-2xl p-6 lg:p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden">
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Animated Border Gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm rounded-2xl" />

                    <div className="relative z-10">
                      {/* Icon Section */}
                      <motion.div
                        className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-muted/50 to-secondary/50 group-hover:from-primary/20 group-hover:to-accent/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-500"
                        whileHover={{
                          rotate: 5,
                          transition: { duration: 0.3, ease: "easeOut" },
                        }}
                      >
                        {item.icon}
                      </motion.div>

                      {/* Content */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text transition-all duration-300">
                          {item.title}
                        </h3>

                        <p className="text-muted-foreground leading-relaxed font-light text-base">
                          {item.description}
                        </p>

                        {/* Bullet Points */}
                        <div className="space-y-2">
                          {item.points.map((point, pointIndex) => (
                            <div
                              key={pointIndex}
                              className="flex items-start text-sm"
                            >
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mr-3 mt-1.5 flex-shrink-0 group-hover:shadow-sm group-hover:shadow-primary/50 transition-all duration-300" />
                              <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                                {point}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Floating Particles */}
                      <div className="absolute top-4 right-4 w-2 h-2 bg-primary/60 rounded-full opacity-60 group-hover:animate-pulse" />
                      <div className="absolute bottom-4 left-4 w-1 h-1 bg-accent/60 rounded-full opacity-40 group-hover:animate-pulse delay-300" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="responsive-text-xl text-muted-foreground font-light mb-6 lg:mb-8 max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Ready to transform your business with proven AI expertise?
          </motion.p>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={handleDiscussVision}
              className="responsive-button group inline-flex items-center bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:from-primary hover:to-accent touch-target min-h-[48px] sm:min-h-[56px] px-6 sm:px-8 py-3 sm:py-4"
              style={{ touchAction: 'manipulation' }}
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:rotate-12 group-active:rotate-6 transition-transform duration-300" />
              <span className="text-transparent bg-gradient-to-r from-primary-foreground to-primary-foreground bg-clip-text responsive-text-base sm:responsive-text-lg font-medium">
                Let's discuss your vision
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-0 w-px h-32 bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden lg:block" />
        <div className="absolute top-1/2 right-0 w-px h-32 bg-gradient-to-b from-transparent via-accent/50 to-transparent hidden lg:block" />
      </div>

      <style jsx>{`
        /* Mobile-specific improvements */
        @media (max-width: 768px) {
          .responsive-card {
            padding: 1rem;
          }
          
          .responsive-gap-sm {
            gap: 0.75rem;
          }
          
          /* Center metric tiles on mobile */
          .grid {
            justify-content: center;
            margin: 0 auto;
          }
          
          /* Ensure popup is always on top */
          .hover-popup {
            z-index: 9999 !important;
            position: relative;
          }
          
          /* Click-based popup styling */
          .stat-tile {
            cursor: pointer !important;
            -webkit-tap-highlight-color: rgba(34, 211, 238, 0.2) !important;
            transition: all 0.2s ease-in-out !important;
          }
          
          .stat-tile:active {
            transform: scale(0.95) !important;
          }
          
          /* Enhanced scroll animation performance */
          .motion-div {
            will-change: transform, opacity !important;
            backface-visibility: hidden !important;
            transform-style: preserve-3d !important;
          }
          
          /* Smooth scroll animations */
          .group {
            transform: translateZ(0) !important;
            -webkit-transform: translateZ(0) !important;
          }
          
          /* Optimize animation performance */
          .responsive-grid-2 {
            contain: layout style paint !important;
          }
          
          /* Enhanced scroll trigger animations */
          .scroll-animate-tile {
            opacity: 0;
            transform: translateX(-100px) translateY(50px) scale(0.9) rotateY(-15deg);
            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          
          .scroll-animate-tile.visible {
            opacity: 1;
            transform: translateX(0) translateY(0) scale(1) rotateY(0deg);
          }
          
          /* Staggered animation delays */
          .scroll-animate-tile:nth-child(1) { transition-delay: 0s; }
          .scroll-animate-tile:nth-child(2) { transition-delay: 0.15s; }
          .scroll-animate-tile:nth-child(3) { transition-delay: 0.3s; }
          .scroll-animate-tile:nth-child(4) { transition-delay: 0.45s; }
          .scroll-animate-tile:nth-child(5) { transition-delay: 0.6s; }
          .scroll-animate-tile:nth-child(6) { transition-delay: 0.75s; }
          
          /* Spring animation effect */
          .scroll-animate-tile.visible {
            animation: springBounce 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }
          
          @keyframes springBounce {
            0% {
              opacity: 0;
              transform: translateX(-100px) translateY(50px) scale(0.9) rotateY(-15deg);
            }
            50% {
              opacity: 0.8;
              transform: translateX(10px) translateY(-5px) scale(1.02) rotateY(2deg);
            }
            100% {
              opacity: 1;
              transform: translateX(0) translateY(0) scale(1) rotateY(0deg);
            }
          }
          
          /* Right slide animation for even tiles */
          .scroll-animate-tile:nth-child(even) {
            transform: translateX(100px) translateY(50px) scale(0.9) rotateY(15deg);
          }
          
          .scroll-animate-tile:nth-child(even).visible {
            animation: springBounceRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }
          
          @keyframes springBounceRight {
            0% {
              opacity: 0;
              transform: translateX(100px) translateY(50px) scale(0.9) rotateY(15deg);
            }
            50% {
              opacity: 0.8;
              transform: translateX(-10px) translateY(-5px) scale(1.02) rotateY(-2deg);
            }
            100% {
              opacity: 1;
              transform: translateX(0) translateY(0) scale(1) rotateY(0deg);
            }
          }
        }
      `}</style>
    </section>
  );
};
