"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, Building2, Target, Globe, GraduationCap, Award, Wrench, ChevronDown, ChevronUp, 
  TrendingUp, BarChart3, Users, DollarSign, Timer, Trophy, UserCheck, Briefcase as BriefcaseIcon, Calendar
} from 'lucide-react';

const competencyPillars = [
  {
    icon: Briefcase,
    title: "Strategic Intelligence & AI",
    subtitle: "AI-driven strategy, governance, and scalable value creation.",
    competencies: [
      "AI Strategy & Roadmaps",
      "Digital Transformation Architecture", 
      "Technology Governance",
      "Innovation Management",
      "Strategic Planning",
      "Risk Assessment"
    ]
  },
  {
    icon: Building2,
    title: "Digital & Operational Transformation",
    subtitle: "Optimizing performance and experience through smart automation.",
    competencies: [
      "Process Optimization",
      "Automation Implementation",
      "Performance Analytics",
      "Change Management",
      "Quality Assurance",
      "Operational Excellence"
    ]
  },
  {
    icon: Target,
    title: "Leadership & Change Acceleration",
    subtitle: "Empowering leadership and enabling sustainable AI-powered change.",
    competencies: [
      "Executive Coaching",
      "Culture Redesign",
      "Organizational Design for AI",
      "Stakeholder Alignment & Influence",
      "Capability Building & Innovation",
      "Change Comms Strategy"
    ]
  }
];

const impactMetrics = [
  {
    icon: Users,
    label: "Customers Impacted",
    description: "9M+ customers impacted through strategic transformation initiatives improving experience and compliance.",
    value: "9M",
    unit: "+"
  },
  {
    icon: UserCheck,
    label: "Staff Enabled",
    description: "40K+ staff enabled through enterprise-wide change programs and scalable digital solutions.",
    value: "40K",
    unit: "+"
  },
  {
    icon: DollarSign,
    label: "ROI Delivered",
    description: "340% ROI delivered across process transformation through automation, AI, and efficiency programs.",
    value: "340",
    unit: "%"
  },
  {
    icon: Trophy,
    label: "AI Tool Adoption",
    description: "85% AI tool adoption rate, achieved via targeted training and change management strategies.",
    value: "85",
    unit: "%"
  },
  {
    icon: Timer,
    label: "Process Time Reduction",
    description: "45% average process time reduction through Lean Six Sigma, RPA, and end-to-end digital optimisation.",
    value: "45",
    unit: "%"
  },
  {
    icon: Award,
    label: "Industry Recognitions",
    description: "8 industry recognitions, reflecting leadership in transformation, innovation, and operational excellence.",
    value: "8",
    unit: ""
  },
  {
    icon: GraduationCap,
    label: "Professionals Developed",
    description: "120+ professionals developed through hands-on training, mentoring, and capability uplift programs.",
    value: "120",
    unit: "+"
  },
  {
    icon: BriefcaseIcon,
    label: "Enterprise Programs",
    description: "8+ enterprise programs delivered, aligned to customer experience, regulatory uplift, and intelligent automation.",
    value: "8",
    unit: "+"
  },
  {
    icon: Calendar,
    label: "Years Experience",
    description: "13+ years of experience in automation, risk and compliance, strategic transformation, and technology leadership.",
    value: "13",
    unit: "+"
  }
];

export const AboutSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [expandedMetric, setExpandedMetric] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const metricVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    collapsed: {
      height: "auto"
    },
    expanded: {
      height: "auto",
      transition: {
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  };

  const competencyVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    }),
    exit: {
      opacity: 0,
      y: -5,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl hidden lg:block" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl hidden lg:block" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-secondary/10 rounded-full blur-3xl hidden lg:block" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-muted/20 to-transparent rounded-full hidden lg:block" />
      </div>

      <div className="relative z-10 container-responsive pt-8 pb-12 lg:pt-12 lg:pb-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="flex justify-center mb-4">
            <img 
              src="https://clever-pika-899e4f.netlify.app/signaturetransparent1.png" 
              alt="Hesham Badr Signature"
              className="h-12 sm:h-16 lg:h-20 xl:h-24 w-auto object-contain"
            />
          </div>
          <p className="responsive-text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Driving transformation through strategic insight, innovative solutions, and exceptional leadership across global markets.
          </p>
        </motion.div>

        {/* Main Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-3 responsive-gap-lg"
        >
          {/* Left Column - Interactive Stacked Cards */}
          <div className="lg:col-span-2 space-y-6 lg:space-y-8">
            {/* Enhanced Section Title */}
            <motion.div
              variants={itemVariants}
              className="flex items-center responsive-gap-sm mb-4 lg:mb-6"
            >
              <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              <h3 className="responsive-text-3xl font-extrabold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-lg">
                Core Service Pillars
              </h3>
            </motion.div>

            {/* Stacked Cards Layout */}
            <div className="space-y-4 lg:space-y-6">
              {competencyPillars.map((pillar, index) => {
                const isExpanded = expandedCard === index;
                const Icon = pillar.icon;
                
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: index * 0.2,
                      duration: 0.6,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      scale: 1.01,
                      transition: { duration: 0.3 }
                    }}
                    className="group relative"
                  >
                    <motion.div
                      variants={cardVariants}
                      animate={isExpanded ? "expanded" : "collapsed"}
                      className={`
                        relative bg-gradient-to-br from-card/60 via-card/40 to-secondary/60 
                        backdrop-blur-xl border border-border/50 rounded-xl lg:rounded-2xl overflow-hidden
                        shadow-2xl hover:shadow-primary/10 transition-all duration-500
                        ${isExpanded ? 'border-primary/60 shadow-primary/20 ring-1 ring-primary/20' : 'hover:border-primary/50'}
                      `}
                    >
                      {/* Gradient Glow Background */}
                      <div className={`
                        absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500
                        ${index === 0 ? 'from-primary/5 via-accent/5 to-secondary/5' : ''}
                        ${index === 1 ? 'from-accent/5 via-secondary/5 to-primary/5' : ''}
                        ${index === 2 ? 'from-secondary/5 via-primary/5 to-accent/5' : ''}
                        ${isExpanded ? 'opacity-100' : 'group-hover:opacity-100'}
                      `} />

                      {/* Clickable Header */}
                      <motion.div
                        onClick={() => setExpandedCard(isExpanded ? null : index)}
                        whileHover={{ backgroundColor: "rgba(71, 85, 105, 0.1)" }}
                        whileTap={{ scale: 0.99 }}
                        className="relative z-10 responsive-card cursor-pointer touch-target"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center responsive-gap-base min-w-0 flex-1">
                            <motion.div 
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                              className={`
                                p-2 sm:p-3 lg:p-4 rounded-lg lg:rounded-xl transition-all duration-500 flex-shrink-0
                                ${isExpanded 
                                  ? 'bg-gradient-to-br from-primary/30 to-accent/30 shadow-lg shadow-primary/30' 
                                  : 'bg-gradient-to-br from-muted/50 to-secondary/50 group-hover:from-primary/20 group-hover:to-accent/20 group-hover:shadow-lg group-hover:shadow-primary/20'
                                }
                              `}
                            >
                              <Icon className={`
                                w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 transition-all duration-500
                                ${isExpanded ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'}
                              `} />
                            </motion.div>

                            <div className="min-w-0 flex-1">
                              <h4 className={`
                                responsive-text-lg lg:responsive-text-xl font-semibold mb-1 sm:mb-2 transition-colors duration-300 leading-tight
                                ${isExpanded ? 'text-primary' : 'text-foreground group-hover:text-primary'}
                              `}>
                                {pillar.title}
                              </h4>
                              <p className="responsive-text-sm text-muted-foreground leading-relaxed font-light line-clamp-2">
                                {pillar.subtitle}
                              </p>
                            </div>
                          </div>

                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className={`
                              p-1.5 sm:p-2 rounded-lg transition-colors duration-300 flex-shrink-0 ml-2
                              ${isExpanded ? 'bg-primary/20' : 'group-hover:bg-muted/50'}
                            `}
                          >
                            <ChevronDown className={`
                              w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300
                              ${isExpanded ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'}
                            `} />
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Expandable Content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ 
                              duration: 0.5,
                              ease: [0.4, 0.0, 0.2, 1]
                            }}
                            className="overflow-hidden"
                          >
                            <div className="responsive-card pb-4 sm:pb-6 lg:pb-8">
                              <div className="border-t border-border/50 pt-4 lg:pt-6">
                                <div className="responsive-grid-2 responsive-gap-sm">
                                  {pillar.competencies.map((competency, compIndex) => (
                                    <motion.div
                                      key={competency}
                                      custom={compIndex}
                                      variants={competencyVariants}
                                      initial="hidden"
                                      animate="visible"
                                      exit="exit"
                                      whileHover={{ 
                                        scale: 1.02,
                                        x: 2
                                      }}
                                      className="group/pill"
                                    >
                                      <div className="responsive-card flex items-center bg-card/40 backdrop-blur-sm border border-border/40 rounded-lg lg:rounded-xl hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 cursor-default touch-target">
                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary/60 rounded-full mr-2 sm:mr-3 group-hover/pill:bg-primary group-hover/pill:shadow-sm group-hover/pill:shadow-primary/50 transition-all duration-300 flex-shrink-0" />
                                        <span className="responsive-text-sm text-muted-foreground group-hover/pill:text-foreground transition-colors duration-300 leading-relaxed">
                                          {competency}
                                        </span>
                                      </div>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Impact Metrics */}
          <div className="lg:col-span-1 space-y-4 lg:space-y-6">
            {/* Enhanced Section Title */}
            <motion.div
              variants={itemVariants}
              className="flex items-center responsive-gap-sm mb-4 lg:mb-6"
            >
              <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
              <h3 className="responsive-text-3xl font-extrabold bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent drop-shadow-lg">
                Impact Metrics
              </h3>
            </motion.div>

            {/* Three-Column Metrics Grid */}
            <motion.div 
              variants={containerVariants} 
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 responsive-gap-sm"
            >
              {impactMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  variants={metricVariants}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  onClick={() => setExpandedMetric(expandedMetric === index ? null : index)}
                  className="group relative bg-card/40 backdrop-blur-xl border border-border/50 rounded-lg responsive-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 cursor-pointer touch-target"
                >
                  <div className="text-center space-y-1 sm:space-y-2">
                    <div className="space-y-0.5 sm:space-y-1">
                      <div className="flex items-baseline justify-center space-x-0.5">
                        <span className="responsive-text-lg lg:responsive-text-xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent group-hover:from-primary group-hover:via-accent group-hover:to-primary transition-all duration-500">
                          {metric.value}
                        </span>
                        {metric.unit && (
                          <span className="text-primary font-bold responsive-text-sm lg:responsive-text-base group-hover:text-accent transition-colors duration-500">
                            {metric.unit}
                          </span>
                        )}
                      </div>
                      <p className="responsive-text-sm leading-tight px-0.5 sm:px-1 font-medium text-muted-foreground">
                        {metric.label}
                      </p>
                    </div>
                  </div>

                  {/* Expandable Description */}
                  <AnimatePresence>
                    {expandedMetric === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 8 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-border/50 pt-1.5 sm:pt-2">
                          <p className="responsive-text-sm text-muted-foreground text-center leading-relaxed">
                            {metric.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};