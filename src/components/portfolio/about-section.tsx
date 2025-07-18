"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Building2,
  Target,
  Globe,
  GraduationCap,
  Award,
  Wrench,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  BarChart3,
  Users,
  DollarSign,
  Timer,
  Trophy,
  UserCheck,
  Briefcase as BriefcaseIcon,
  Calendar,
  Check,
  Sparkles,
  Flame,
  Cpu,
  ClipboardList,
  ListChecks,
  LineChart,
  BarChart,
  AlertTriangle,
  Activity,
  Server,
  Boxes,
  ShieldCheck,
  Scale,
  RotateCw,
  FlaskConical,
  BookOpen,
} from "lucide-react";

// Utility function to get icon by service name
const getIconByServiceName = (title: string) => {
  // Strategic Intelligence & AI
  if (title.includes("AI Strategy & Implementation Blueprints")) return <ClipboardList className="w-5 h-5 text-blue-400" />;
  if (title.includes("AI-Augmented Scenario Planning")) return <LineChart className="w-5 h-5 text-blue-400" />;
  if (title.includes("AI Risk Intelligence")) return <AlertTriangle className="w-5 h-5 text-blue-400" />;
  if (title.includes("AI-First Enterprise Architecture")) return <Server className="w-5 h-5 text-blue-400" />;
  if (title.includes("Governance, Risk & Compliance for AI")) return <ShieldCheck className="w-5 h-5 text-blue-400" />;
  if (title.includes("Innovation Loops with GenAI")) return <Sparkles className="w-5 h-5 text-blue-400" />;

  // Digital & Operational Transformation
  if (title.includes("AI-Powered Process Mining")) return <Activity className="w-5 h-5 text-blue-400" />;
  if (title.includes("Smart Automation & Agent Integration")) return <Cpu className="w-5 h-5 text-blue-400" />;
  if (title.includes("Performance & Predictive Analytics")) return <BarChart className="w-5 h-5 text-blue-400" />;
  if (title.includes("AI-Augmented Change & Adoption")) return <RotateCw className="w-5 h-5 text-blue-400" />;
  if (title.includes("AI-Based Quality Assurance")) return <FlaskConical className="w-5 h-5 text-blue-400" />;
  if (title.includes("Hyperautomation & Digital Twin Models")) return <Boxes className="w-5 h-5 text-blue-400" />;

  // Leadership & Change Acceleration
  if (title.includes("AI Leadership Coaching")) return <UserCheck className="w-5 h-5 text-blue-400" />;
  if (title.includes("AI Culture-by-Design")) return <Users className="w-5 h-5 text-blue-400" />;
  if (title.includes("Org Design for AI Fluency")) return <Globe className="w-5 h-5 text-blue-400" />;
  if (title.includes("Executive Influence & Alignment Tools")) return <Target className="w-5 h-5 text-blue-400" />;
  if (title.includes("AI Literacy & GenAI Labs")) return <GraduationCap className="w-5 h-5 text-blue-400" />;
  if (title.includes("AI-Driven Change Comms")) return <TrendingUp className="w-5 h-5 text-blue-400" />;

  // AI Agent Enablement
  if (title.includes("Internal Copilots")) return <Briefcase className="w-5 h-5 text-blue-400" />;
  if (title.includes("Customer Experience Chat Agents")) return <Users className="w-5 h-5 text-blue-400" />;
  if (title.includes("End-to-End Workflow Orchestration")) return <Server className="w-5 h-5 text-blue-400" />;
  if (title.includes("Knowledge Assistants")) return <BookOpen className="w-5 h-5 text-blue-400" />;
  if (title.includes("AgentOps")) return <BarChart3 className="w-5 h-5 text-blue-400" />;
  if (title.includes("Custom GPTs")) return <Flame className="w-5 h-5 text-blue-400" />;

  return <Check className="w-5 h-5 text-blue-400" />;
};

const competencyPillars = [
  {
    icon: Briefcase,
    title: "Strategic Intelligence & AI",
    subtitle: "Turning AI vision into value with governance, insight, and foresight.",
    competencies: [
      "AI Strategy & Implementation Blueprints\nTailored, end-to-end plans to identify, prioritize, and activate AI opportunities across your business.",
      "AI-Augmented Scenario Planning & Investment Prioritization\nUse GenAI and simulation tools to model future scenarios and guide strategic investment decisions.",
      "AI Risk Intelligence & Predictive Analytics\nProactively identify operational, regulatory, and strategic risks while leveraging predictive models for early insight.",
      "AI-First Enterprise Architecture\nDesign scalable, interoperable tech stacks for long-term AI integration.",
      "Governance, Risk & Compliance for AI\nEstablish responsible, explainable, and auditable AI practices.",
      "Innovation Loops with GenAI\nAccelerate idea-to-impact cycles with rapid prototyping and AI experimentation.",
    ],
  },
  {
    icon: Building2,
    title: "Digital & Operational Transformation",
    subtitle: "Drive measurable outcomes through automation, analytics, and optimization.",
    competencies: [
      "AI-Powered Process Mining & Reengineering\nUncover hidden inefficiencies and transform workflows.",
      "Smart Automation & Agent Integration\nDeploy bots, LLM agents, and intelligent flows across ops.",
      "Performance & Predictive Analytics\nGet real-time visibility, forecasting, and ROI tracking.",
      "AI-Augmented Change & Adoption\nBoost rollout success with insight-led change interventions.",
      "AI-Based Quality Assurance\nImprove output quality with continuous AI-based checks.",
      "Hyperautomation & Digital Twin Models\nScale automation across functions, model real-world performance.",
    ],
  },
  {
    icon: Target,
    title: "Leadership & Change Acceleration",
    subtitle: "Empowering people and culture to lead in an AI-driven world.",
    competencies: [
      "AI Leadership Coaching & Enablement\nEquip leaders to navigate AI’s complexity with clarity.",
      "AI Culture-by-Design\nBuild adaptable, innovation-driven cultures.",
      "Org Design for AI Fluency\nRedesign roles, teams, and structures for AI integration.",
      "Executive Influence & Alignment Tools\nMap stakeholder alignment; deliver CxO-ready insights.",
      "AI Literacy & GenAI Labs\nBuild hands-on skills, fast — prompt engineering & more.",
      "AI-Driven Change Comms\nDeliver change narratives powered by data & AI.",
    ],
  },
  {
    icon: Cpu,
    title: "AI Agent Enablement",
    subtitle: "Deploy AI agents that actually get things done.",
    competencies: [
      "Internal Copilots (Sales, Ops, HR, Finance)",
      "Customer Experience Chat Agents",
      "End-to-End Workflow Orchestration (e.g. n8n, LangChain)",
      "Knowledge Assistants (Policies, Training, SOPs)",
      "AgentOps: Monitoring & Optimizing Agent Performance",
      "Custom GPTs & Embedded Interfaces",
    ],
  },
];

const impactMetrics = [
  {
    icon: Users,
    label: "Customers Impacted",
    description:
      "9M+ customers impacted through strategic transformation initiatives improving experience and compliance.",
    value: "9M",
    unit: "+",
  },
  {
    icon: UserCheck,
    label: "Staff Enabled",
    description:
      "40K+ staff enabled through enterprise-wide change programs and scalable digital solutions.",
    value: "40K",
    unit: "+",
  },
  {
    icon: DollarSign,
    label: "ROI Delivered",
    description:
      "340% ROI delivered across process transformation through automation, AI, and efficiency programs.",
    value: "340",
    unit: "%",
  },
  {
    icon: Trophy,
    label: "AI Tool Adoption",
    description:
      "85% AI tool adoption rate, achieved via targeted training and change management strategies.",
    value: "85",
    unit: "%",
  },
  {
    icon: Timer,
    label: "Process Time Reduction",
    description:
      "45% average process time reduction through Lean Six Sigma, RPA, and end-to-end digital optimisation.",
    value: "45",
    unit: "%",
  },
  {
    icon: Award,
    label: "Industry Recognitions",
    description:
      "8 industry recognitions, reflecting leadership in transformation, innovation, and operational excellence.",
    value: "8",
    unit: "",
  },
  {
    icon: GraduationCap,
    label: "Professionals Developed",
    description:
      "120+ professionals developed through hands-on training, mentoring, and capability uplift programs.",
    value: "120",
    unit: "+",
  },
  {
    icon: BriefcaseIcon,
    label: "Enterprise Programs",
    description:
      "8+ enterprise programs delivered, aligned to customer experience, regulatory uplift, and intelligent automation.",
    value: "8",
    unit: "+",
  },
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
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const metricVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    collapsed: {
      height: "auto",
    },
    expanded: {
      height: "auto",
      transition: {
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  };

  const competencyVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
    exit: {
      opacity: 0,
      y: -5,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section id="about" className="scroll-mt-20 min-h-screen bg-background relative overflow-hidden">
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
            Behind every bold transformation is someone who connects the dots. I bring AI, strategy, and people together to turn vision into measurable change.
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
              className="flex items-center gap-2 mb-6"
            >
              <Briefcase className="w-6 h-6 text-primary align-middle relative top-[1px]" />
              <span className="text-lg md:text-2xl font-semibold">Here's How I Help You Win</span>
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
                      ease: "easeOut",
                    }}
                    whileHover={{
                      scale: 1.01,
                      transition: { duration: 0.3 },
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
                        ${isExpanded ? "border-primary/60 shadow-primary/20 ring-1 ring-primary/20" : "hover:border-primary/50"}
                      `}
                    >
                      {/* Gradient Glow Background */}
                      <div
                        className={`
                        absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500
                        ${index === 0 ? "from-primary/5 via-accent/5 to-secondary/5" : ""}
                        ${index === 1 ? "from-accent/5 via-secondary/5 to-primary/5" : ""}
                        ${index === 2 ? "from-secondary/5 via-primary/5 to-accent/5" : ""}
                        ${isExpanded ? "opacity-100" : "group-hover:opacity-100"}
                      `}
                      />

                      {/* Clickable Header */}
                      <motion.div
                        onClick={() =>
                          setExpandedCard(isExpanded ? null : index)
                        }
                        whileHover={{
                          backgroundColor: "rgba(71, 85, 105, 0.1)",
                        }}
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
                                ${
                                  isExpanded
                                    ? "bg-gradient-to-br from-primary/30 to-accent/30 shadow-lg shadow-primary/30"
                                    : "bg-gradient-to-br from-muted/50 to-secondary/50 group-hover:from-primary/20 group-hover:to-accent/20 group-hover:shadow-lg group-hover:shadow-primary/20"
                                }
                              `}
                            >
                              <Icon
                                className={`
                                w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 transition-all duration-500
                                ${isExpanded ? "text-primary" : "text-muted-foreground group-hover:text-primary"}
                              `}
                              />
                            </motion.div>

                            <div className="min-w-0 flex-1">
                              <h4
                                className={`
                                responsive-text-lg lg:responsive-text-xl font-semibold mb-1 sm:mb-2 transition-colors duration-300 leading-tight
                                ${isExpanded ? "text-primary" : "text-foreground group-hover:text-primary"}
                              `}
                              >
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
                              ${isExpanded ? "bg-primary/20" : "group-hover:bg-muted/50"}
                            `}
                          >
                            <ChevronDown
                              className={`
                              w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300
                              ${isExpanded ? "text-primary" : "text-muted-foreground group-hover:text-primary"}
                            `}
                            />
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
                              ease: [0.4, 0.0, 0.2, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <div className="responsive-card pb-4 sm:pb-6 lg:pb-8">
                              <div className="border-t border-border/50 pt-4 lg:pt-6">
                                <div className="responsive-grid-2 responsive-gap-sm">
                                  {pillar.competencies.map((competency, compIndex) => {
                                    const [serviceTitle, ...descArr] = competency.split("\n");
                                    const serviceDesc = descArr.join(" ").trim();
                                    const ServiceIcon = getIconByServiceName(serviceTitle);
                                    return (
                                      <motion.div
                                        key={competency}
                                        custom={compIndex}
                                        variants={competencyVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        whileHover={{
                                          scale: 1.03,
                                          x: 4,
                                          boxShadow: "0 2px 16px 0 rgba(56,189,248,0.10)",
                                        }}
                                        className="group"
                                      >
                                        <div className="flex items-start gap-3 bg-card/40 backdrop-blur-sm border border-border/40 rounded-lg lg:rounded-xl transition-all duration-300 cursor-default touch-target hover:bg-blue-700/20 p-3 sm:p-4 shadow-sm">
                                          <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-blue-600/20 text-blue-300 shadow-lg animate-service-glow group-hover:scale-110 transition-transform duration-300">
                                            {ServiceIcon}
                                          </span>
                                          <div className="min-w-0 flex-1">
                                            <div className="font-semibold text-foreground text-base leading-tight mb-0.5">
                                              {serviceTitle}
                                            </div>
                                            {serviceDesc && (
                                              <div className="text-sm text-muted-foreground leading-snug">
                                                {serviceDesc}
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                      </motion.div>
                                    );
                                  })}
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
          <div className="lg:col-span-1">
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 mb-6"
            >
              <BarChart3 className="w-6 h-6 text-accent align-middle relative top-[1px]" />
              <span className="text-lg md:text-2xl font-semibold">Impact Metrics</span>
            </motion.div>
            <div className="w-full">
              <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 max-w-[600px] mx-auto">
                {impactMetrics.map((metric, idx) => {
                  const popupId = `popup-${idx}`;
                  return (
                    <div
                      key={metric.label}
                      tabIndex={0}
                      aria-describedby={popupId}
                      className="relative bg-[rgba(20,20,20,0.8)] border border-white/10 rounded-2xl p-4 w-[120px] md:w-[150px] h-[90px] md:h-[110px] flex flex-col justify-between items-center transition-all duration-300 backdrop-blur-lg hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-xl group focus:outline-none focus:ring-2 focus:ring-cyan-300 stat-tile"
                    >
                      <div className="text-2xl md:text-3xl font-light leading-none text-cyan-400 mb-2 text-center stat-number">
                        {metric.value}{metric.unit}
                      </div>
                      <div className="text-xs md:text-sm text-white/70 font-normal leading-tight mt-2 text-center stat-label">
                        {metric.label}
                      </div>
                      <div
                        id={popupId}
                        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[-20px] z-20 opacity-0 group-hover:opacity-100 group-hover:visible group-hover:-translate-y-2 transition-all duration-300 bg-[rgba(10,10,10,0.95)] border border-cyan-300/30 rounded-xl px-5 py-4 text-[0.85rem] leading-snug text-white/90 max-w-[280px] w-max shadow-2xl text-center backdrop-blur-lg break-words hover-popup max-[480px]:hidden"
                        style={{ overflowWrap: 'break-word' }}
                        aria-hidden="true"
                      >
                        {metric.description}
                        <span className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-cyan-300/30"></span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <style jsx>{`
        @keyframes service-glow {
          0%, 100% { filter: drop-shadow(0 0 2px #38bdf8) drop-shadow(0 0 6px #38bdf8aa); }
          50% { filter: drop-shadow(0 0 8px #38bdf8cc) drop-shadow(0 0 16px #38bdf8cc); }
        }
        .animate-service-glow {
          animation: service-glow 2.2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
