"use client";

import { motion } from "framer-motion";
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
    title: "Proven Track Record",
    description:
      "13+ years transforming enterprises with measurable results. Over $21M in value delivered, with ROI up to 340%.",
    points: ["40+ Workflows Transformed", "3 Continents Served"],
  },
  {
    icon: <Building className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
    title: "Executive Partnership",
    description:
      "Trusted advisor to leadership teams and boards, guiding enterprise-scale change with strategic influence.",
    points: ["Board-Level Advisory", "Strategic Governance"],
  },
  {
    icon: <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
    title: "Credentials You Can Trust",
    description:
      "Engineered for excellence. Strategically trained. Continuously learning to stay ahead of the curve.",
    points: [
      "Masters Process Engineering (Top 20 worldwide)",
      "MBA in Emerging Tech (Europe)",
      "Harvard Certified in Advanced Business Strategy & Management Consulting",
    ],
  },
  {
    icon: <Zap className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
    title: "AI-First Approach",
    description:
      "Expertise in GenAI, multi-agent systems, and machine learning — delivering scalable, future-ready solutions.",
    points: ["50+ AI Projects", "95% Success Rate"],
  },
  {
    icon: <Cog className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
    title: "End-to-End Solutions",
    description:
      "I own the full lifecycle of transformation — from strategic vision to operational excellence. No handoffs.",
    points: ["Zero Handoffs", "Full Ownership"],
  },
  {
    icon: <Shield className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
    title: "Ethical AI Focus",
    description:
      "Transparent, compliant, and human-centric AI design aligned with global governance frameworks.",
    points: ["100% Compliance", "Ethical Frameworks"],
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

export const WhyMeSection = () => {
  const handleDiscussVision = () => {
    openCalendlyPopup();
  };

  // Group differentiators into columns for desktop
  const column1 = differentiators.slice(0, 2);
  const column2 = differentiators.slice(2, 4);
  const column3 = differentiators.slice(4, 6);

  return (
    <section
      id="why-me"
      className="relative min-h-screen responsive-py-lg mobile-safe-area overflow-hidden bg-background"
    >
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
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group h-full"
              >
                <div className="relative h-full bg-gradient-to-br from-card/60 via-card/40 to-secondary/60 backdrop-blur-xl border border-border/50 rounded-2xl responsive-card hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden">
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Animated Border Gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm rounded-2xl" />

                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon Section */}
                    <motion.div
                      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-4 lg:mb-6 rounded-xl bg-gradient-to-br from-muted/50 to-secondary/50 group-hover:from-primary/20 group-hover:to-accent/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-500"
                      whileHover={{
                        rotate: 5,
                        transition: { duration: 0.3, ease: "easeOut" },
                      }}
                    >
                      {item.icon}
                    </motion.div>

                    {/* Content */}
                    <div className="space-y-3 lg:space-y-4 flex-grow flex flex-col">
                      <h3 className="responsive-text-2xl font-semibold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text transition-all duration-300">
                        {item.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed font-light flex-grow responsive-text-base">
                        {item.description}
                      </p>

                      {/* Bullet Points */}
                      <div className="space-y-2 mt-auto">
                        {item.points.map((point, pointIndex) => (
                          <div
                            key={pointIndex}
                            className="flex items-start responsive-text-sm"
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
              className="responsive-button group inline-flex items-center bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:from-primary hover:to-accent touch-target"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-transparent bg-gradient-to-r from-primary-foreground to-primary-foreground bg-clip-text responsive-text-lg">
                Let's discuss your vision
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-0 w-px h-32 bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden lg:block" />
        <div className="absolute top-1/2 right-0 w-px h-32 bg-gradient-to-b from-transparent via-accent/50 to-transparent hidden lg:block" />
      </div>
    </section>
  );
};
