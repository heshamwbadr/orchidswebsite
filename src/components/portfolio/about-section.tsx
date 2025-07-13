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
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-slate-800/20 to-transparent rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            <span className="text-blue-400 border-b-2 border-blue-400">Hesham Badr</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Driving transformation through strategic insight, innovative solutions, and exceptional leadership across global markets.
          </p>
        </motion.div>

        {/* Main Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* Left Column - Interactive Stacked Cards */}
          <div className="lg:col-span-2 space-y-8">
            {/* Enhanced Section Title */}
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-3 mb-6"
            >
              <Briefcase className="w-8 h-8 text-blue-400" />
              <h3 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
                Core Service Pillars
              </h3>
            </motion.div>

            {/* Stacked Cards Layout */}
            <div className="space-y-6">
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
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                    className="group relative"
                  >
                    <motion.div
                      variants={cardVariants}
                      animate={isExpanded ? "expanded" : "collapsed"}
                      className={`
                        relative bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 
                        backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden
                        shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500
                        ${isExpanded ? 'border-cyan-400/60 shadow-cyan-400/20 ring-1 ring-cyan-400/20' : 'hover:border-cyan-400/50'}
                      `}
                    >
                      {/* Gradient Glow Background */}
                      <div className={`
                        absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500
                        ${index === 0 ? 'from-blue-500/5 via-purple-500/5 to-teal-500/5' : ''}
                        ${index === 1 ? 'from-purple-500/5 via-teal-500/5 to-blue-500/5' : ''}
                        ${index === 2 ? 'from-teal-500/5 via-blue-500/5 to-purple-500/5' : ''}
                        ${isExpanded ? 'opacity-100' : 'group-hover:opacity-100'}
                      `} />

                      {/* Clickable Header */}
                      <motion.div
                        onClick={() => setExpandedCard(isExpanded ? null : index)}
                        whileHover={{ backgroundColor: "rgba(71, 85, 105, 0.1)" }}
                        whileTap={{ scale: 0.99 }}
                        className="relative z-10 p-8 cursor-pointer"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-6">
                            <motion.div 
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                              className={`
                                p-4 rounded-xl transition-all duration-500
                                ${isExpanded 
                                  ? 'bg-gradient-to-br from-cyan-500/30 to-blue-500/30 shadow-lg shadow-cyan-400/30' 
                                  : 'bg-gradient-to-br from-slate-700/50 to-slate-600/50 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 group-hover:shadow-lg group-hover:shadow-cyan-500/20'
                                }
                              `}
                            >
                              <Icon className={`
                                w-8 h-8 transition-all duration-500
                                ${isExpanded ? 'text-cyan-300' : 'text-slate-400 group-hover:text-cyan-400'}
                              `} />
                            </motion.div>

                            <div>
                              <h4 className={`
                                text-xl font-semibold mb-2 transition-colors duration-300
                                ${isExpanded ? 'text-cyan-400' : 'text-white group-hover:text-cyan-400'}
                              `}>
                                {pillar.title}
                              </h4>
                              <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                                {pillar.subtitle}
                              </p>
                            </div>
                          </div>

                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className={`
                              p-2 rounded-lg transition-colors duration-300
                              ${isExpanded ? 'bg-cyan-500/20' : 'group-hover:bg-slate-700/50'}
                            `}
                          >
                            <ChevronDown className={`
                              w-5 h-5 transition-colors duration-300
                              ${isExpanded ? 'text-cyan-400' : 'text-slate-400 group-hover:text-cyan-400'}
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
                            <div className="px-8 pb-8">
                              <div className="border-t border-slate-700/50 pt-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                  {pillar.competencies.map((competency, compIndex) => (
                                    <motion.div
                                      key={competency}
                                      custom={compIndex}
                                      variants={competencyVariants}
                                      initial="hidden"
                                      animate="visible"
                                      exit="exit"
                                      whileHover={{ 
                                        scale: 1.05,
                                        x: 4
                                      }}
                                      className="group/pill"
                                    >
                                      <div className="flex items-center p-3 bg-slate-800/40 backdrop-blur-sm border border-slate-700/40 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400/50 transition-all duration-300 cursor-default">
                                        <div className="w-2 h-2 bg-cyan-500/60 rounded-full mr-3 group-hover/pill:bg-cyan-400 group-hover/pill:shadow-sm group-hover/pill:shadow-cyan-400/50 transition-all duration-300" />
                                        <span className="text-sm text-slate-300 group-hover/pill:text-white transition-colors duration-300">
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
          <div className="lg:col-span-1 space-y-6">
            {/* Enhanced Section Title */}
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-3 mb-6"
            >
              <BarChart3 className="w-8 h-8 text-purple-400" />
              <h3 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
                Impact Metrics
              </h3>
            </motion.div>

            {/* Three-Column Metrics Grid */}
            <motion.div 
              variants={containerVariants} 
              className="grid grid-cols-3 gap-3"
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
                  className="group relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-lg p-3 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-500 cursor-pointer"
                >
                  <div className="text-center space-y-2">
                    <div className="space-y-1">
                      <div className="flex items-baseline justify-center space-x-0.5">
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-cyan-300 group-hover:to-purple-300 transition-all duration-500">
                          {metric.value}
                        </span>
                        {metric.unit && (
                          <span className="text-blue-400 font-bold text-lg group-hover:text-blue-300 transition-colors duration-500">
                            {metric.unit}
                          </span>
                        )}
                      </div>
                      <p className="text-xs font-medium text-slate-300 leading-tight px-1">
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
                        <div className="border-t border-slate-700/50 pt-2">
                          <p className="text-xs text-slate-400 text-center leading-relaxed">
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