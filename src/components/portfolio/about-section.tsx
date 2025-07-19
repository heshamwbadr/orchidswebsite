"use client";

import React, { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [activePopup, setActivePopup] = useState<number | null>(null);
  const [tapped, setTapped] = useState<number | null>(null);
  const [popupPosition, setPopupPosition] = useState<'left' | 'right'>('right');
  const [popupVerticalPosition, setPopupVerticalPosition] = useState<'above' | 'below'>('below');

  // Ensure component is mounted before accessing window
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Detect mobile device only after mounting
  useEffect(() => {
    if (!isMounted) return;
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [isMounted]);

  const handleCardClick = (index: number, isExpanded: boolean, event: React.MouseEvent) => {
    // Prevent scrolling on mobile when expanding/collapsing cards
    if (isMobile) { // lg breakpoint
      event.preventDefault();
      event.stopPropagation();
      
      // Store the card element reference
      const cardElement = event.currentTarget?.closest('.group');
      
      // If clicking on a different card while one is expanded, collapse the current one first
      if (expandedCard !== null && expandedCard !== index) {
        setExpandedCard(null);
        // Small delay to allow smooth collapse before expanding new card
        setTimeout(() => {
          setExpandedCard(index);
          // Scroll to the newly expanded card
          setTimeout(() => {
            if (cardElement) {
              cardElement.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start',
                inline: 'nearest'
              });
            }
          }, 100);
        }, 300);
      } else {
        setExpandedCard(isExpanded ? null : index);
        // If expanding, scroll to the card
        if (!isExpanded) {
          setTimeout(() => {
            if (cardElement) {
              cardElement.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start',
                inline: 'nearest'
              });
            }
          }, 100);
        }
      }
      
      // Prevent any potential scroll behavior only on expand/collapse
      const currentScrollY = window.scrollY;
      setTimeout(() => {
        window.scrollTo(0, currentScrollY);
      }, 0);
    } else {
      setExpandedCard(isExpanded ? null : index);
    }
  };

  const handleMetricClick = (index: number) => {
    setActivePopup(activePopup === index ? null : index);
  };

  const getPopupPosition = (event: React.MouseEvent): { horizontal: 'left' | 'right'; vertical: 'above' | 'below' } => {
    const rect = event.currentTarget.getBoundingClientRect();
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const tileCenter = rect.left + rect.width / 2;
    const screenCenter = screenWidth / 2;
    
    // Calculate popup dimensions (approximate)
    const popupWidth = Math.min(280, screenWidth * 0.85); // Slightly smaller to ensure fit
    const popupHeight = 220; // approximate height
    
    // More comprehensive boundary checking
    const margin = 20; // Minimum margin from screen edges
    const wouldGoOffRight = rect.left + popupWidth > screenWidth - margin;
    const wouldGoOffLeft = rect.right - popupWidth < margin;
    const wouldGoOffBottom = rect.bottom + popupHeight > screenHeight - margin;
    const wouldGoOffTop = rect.top - popupHeight < margin;
    
    // Check if popup would be cut off by following section
    const sectionBottom = rect.bottom + popupHeight;
    const viewportBottom = screenHeight - margin;
    const wouldBeCutBySection = sectionBottom > viewportBottom;
    
    // Determine horizontal position with priority for screen boundaries
    let horizontalPosition: 'left' | 'right';
    
    // If popup would go off right edge, position left
    if (wouldGoOffRight) {
      horizontalPosition = 'left';
    }
    // If popup would go off left edge, position right
    else if (wouldGoOffLeft) {
      horizontalPosition = 'right';
    }
    // If tile is very close to right edge, always position left
    else if (rect.right > screenWidth * 0.8) {
      horizontalPosition = 'left';
    }
    // If tile is very close to left edge, always position right
    else if (rect.left < screenWidth * 0.2) {
      horizontalPosition = 'right';
    }
    // Default to center-based positioning
    else {
      horizontalPosition = tileCenter < screenCenter ? 'right' : 'left';
    }
    
    // Determine vertical position with priority for screen boundaries and section overlap
    let verticalPosition: 'above' | 'below';
    
    // If popup would be cut off by following section, position above
    if (wouldBeCutBySection) {
      verticalPosition = 'above';
    }
    // If popup would go off bottom, position above
    else if (wouldGoOffBottom) {
      verticalPosition = 'above';
    }
    // If popup would go off top, position below
    else if (wouldGoOffTop) {
      verticalPosition = 'below';
    }
    // If tile is very close to bottom, always position above
    else if (rect.bottom > screenHeight * 0.8) {
      verticalPosition = 'above';
    }
    // If tile is very close to top, always position below
    else if (rect.top < screenHeight * 0.2) {
      verticalPosition = 'below';
    }
    // Default to below positioning
    else {
      verticalPosition = 'below';
    }
    
    return {
      horizontal: horizontalPosition,
      vertical: verticalPosition
    };
  };

  const handleMetricClickWithPosition = (index: number, event: React.MouseEvent) => {
    const position = getPopupPosition(event);
    
    // Additional fallback check for extreme edge cases
    const rect = event.currentTarget.getBoundingClientRect();
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    // Check if there's enough space below the tile for the popup
    const popupHeight = 220; // approximate height
    const spaceBelow = screenHeight - rect.bottom;
    const spaceAbove = rect.top;
    const hasEnoughSpaceBelow = spaceBelow >= popupHeight + 40; // 40px margin
    const hasEnoughSpaceAbove = spaceAbove >= popupHeight + 40; // 40px margin
    
    // If tile is in an extreme position, force center positioning
    if (rect.left < 50 || rect.right > screenWidth - 50) {
      position.horizontal = rect.left < screenWidth / 2 ? 'right' : 'left';
    }
    
    if (rect.top < 50 || rect.bottom > screenHeight - 50) {
      position.vertical = rect.top < screenHeight / 2 ? 'below' : 'above';
    }
    
    // Prioritize space availability over aesthetic positioning
    if (position.vertical === 'below' && !hasEnoughSpaceBelow && hasEnoughSpaceAbove) {
      position.vertical = 'above';
    } else if (position.vertical === 'above' && !hasEnoughSpaceAbove && hasEnoughSpaceBelow) {
      position.vertical = 'below';
    }
    
    // If neither above nor below has enough space, choose the one with more space
    if (!hasEnoughSpaceBelow && !hasEnoughSpaceAbove) {
      position.vertical = spaceAbove > spaceBelow ? 'above' : 'below';
    }
    
    setPopupPosition(position.horizontal);
    setPopupVerticalPosition(position.vertical);
    setActivePopup(activePopup === index ? null : index);
  };

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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[600px] bg-gradient-radial from-muted/20 to-transparent rounded-full hidden lg:block" />
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
              id="about-signature"
              src="https://clever-pika-899e4f.netlify.app/signaturetransparent1.png"
              alt="Hesham Badr Signature"
              className="h-16 sm:h-20 lg:h-20 xl:h-24 w-auto object-contain"
            />
          </div>
          <p id="about-subheader" className="responsive-text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
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
                    className={`group relative ${isExpanded ? 'expanded' : ''}`}
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
                        onClick={(event) => handleCardClick(index, isExpanded, event)}
                        whileHover={{
                          backgroundColor: "rgba(71, 85, 105, 0.1)",
                        }}
                        whileTap={{ scale: 0.99 }}
                        className={`relative z-10 responsive-card cursor-pointer touch-target ${isExpanded ? 'expanded' : ''}`}
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
                              p-2 sm:p-2.5 rounded-lg transition-colors duration-300 flex-shrink-0 ml-2 min-w-[44px] min-h-[44px] flex items-center justify-center
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
                            className="overflow-hidden mobile-expandable relative"
                            style={{ transformOrigin: 'top' }}
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
                                        <div className="flex items-start gap-3 bg-card/40 backdrop-blur-sm border border-border/40 rounded-lg lg:rounded-xl transition-all duration-300 cursor-default touch-target hover:bg-blue-700/20 p-3 sm:p-4 shadow-sm min-h-[80px] sm:min-h-[90px]">
                                          <span className="flex-shrink-0 w-8 h-8 sm:w-7 sm:h-7 flex items-center justify-center rounded-full bg-blue-600/20 text-blue-300 shadow-lg animate-service-glow group-hover:scale-110 transition-transform duration-300">
                                            {ServiceIcon}
                                          </span>
                                          <div className="min-w-0 flex-1">
                                            <div className="font-semibold text-foreground text-sm sm:text-base leading-tight mb-1 sm:mb-0.5">
                                              {serviceTitle}
                                            </div>
                                            {serviceDesc && (
                                              <div className="text-xs sm:text-sm text-muted-foreground leading-snug">
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
              <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6 max-w-[600px] mx-auto lg:mx-0">
                {impactMetrics.map((metric, idx) => {
                  const popupId = `popup-${idx}`;
                  const isPopupActive = activePopup === idx;
                  const isTapped = tapped === idx;
                  return (
                    <div key={metric.label} className="relative">
                      <div
                        tabIndex={0}
                        aria-describedby={popupId}
                        onClick={(event) => handleMetricClickWithPosition(idx, event)}
                        onTouchStart={() => setTapped(idx)}
                        onTouchEnd={() => setTapped(null)}
                        className={`bg-[rgba(20,20,20,0.8)] border border-white/10 rounded-2xl p-3 sm:p-4 w-full max-w-[120px] md:max-w-[150px] h-[80px] sm:h-[90px] md:h-[110px] flex flex-col justify-between items-center transition-all duration-300 backdrop-blur-lg hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-xl group focus:outline-none focus:ring-2 focus:ring-cyan-300 stat-tile min-h-[80px] cursor-pointer transition-transform ${isTapped ? 'scale-95' : 'scale-100'}`}
                      >
                        <div className="text-xl sm:text-2xl md:text-3xl font-light leading-none text-cyan-400 mb-1 sm:mb-2 text-center stat-number">
                          {metric.value}{metric.unit}
                        </div>
                        <div className="text-[10px] sm:text-xs md:text-sm text-white/70 font-normal leading-tight mt-1 sm:mt-2 text-center stat-label px-1">
                          {metric.label}
                        </div>
                      </div>
                      
                      {/* Mobile Popup - Absolute positioned below tile */}
                      {isPopupActive && (
                        <>
                          {/* Mobile Backdrop */}
                          <div
                            className="fixed inset-0 z-40 lg:hidden"
                            onClick={() => setActivePopup(null)}
                          />
                          <div className={`absolute z-50 lg:hidden ${
                            popupVerticalPosition === 'below' ? 'top-full mt-2' : 'bottom-full mb-2'
                          } ${
                            popupPosition === 'right' ? 'left-0' : 'right-0'
                          }`}>
                            <div
                              className={`p-4 rounded-xl bg-black/80 text-white text-sm leading-relaxed max-w-[85vw] min-w-[250px] whitespace-normal break-words shadow-xl border border-cyan-300/30 backdrop-blur-lg ${
                                popupPosition === 'right' ? 'w-full' : 'w-full'
                              }`}
                              style={{
                                maxWidth: '280px',
                                minWidth: '250px',
                                width: 'auto'
                              }}
                            >
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActivePopup(null);
                                }}
                                className="absolute top-2 right-2 text-white/70 hover:text-white text-lg transition-colors"
                                aria-label="Close"
                              >
                                ×
                              </button>
                              <div className="pr-6">
                                <h3 className="text-base font-semibold mb-2 text-cyan-300">{metric.label}</h3>
                                <div className="text-sm leading-relaxed text-white/90">
                                  {metric.description}
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      
                      {/* Desktop Modal */}
                      {isPopupActive && (
                        <div
                          id={popupId}
                          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 hidden lg:flex"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActivePopup(null);
                          }}
                        >
                          <div
                            className="max-w-[90vw] max-h-[80vh] overflow-y-auto whitespace-pre-wrap break-words hyphens-auto p-5 text-[15px] leading-relaxed rounded-xl shadow-lg bg-black/95 text-white border border-cyan-300/30 backdrop-blur-lg text-left font-normal"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div className="popup-content">
                              {metric.description.split('. ').map((sentence, index, array) => (
                                <p key={index} className="mb-2 last:mb-0">
                                  {sentence}{index < array.length - 1 ? '.' : ''}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
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
        
        /* Mobile touch behavior - allow normal scrolling */
        @media (max-width: 1023px) {
          .touch-target {
            touch-action: manipulation;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          
          /* Better touch targets for mobile */
          .stat-tile {
            min-height: 80px;
            touch-action: manipulation;
          }
          
          /* Improve focus states for accessibility */
          .stat-tile:focus {
            outline: 2px solid #22d3ee;
            outline-offset: 2px;
          }
          
          /* Better visual feedback for touch interactions */
          .touch-target:active {
            transform: scale(0.98);
          }
        }
        
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
          
          /* Popup modal styling */
          .fixed.inset-0 {
            animation: fadeIn 0.2s ease-out !important;
          }
          
          .fixed.inset-0 > div {
            animation: slideIn 0.3s ease-out !important;
          }
          
          /* Mobile-specific popup improvements */
          @media (max-width: 768px) {
            .fixed.inset-0 > div {
              width: 90vw !important;
              max-width: 90vw !important;
              margin: 0 !important;
              text-align: left !important;
            }
            
            .popup-content {
              text-align: left !important;
              line-height: 1.5 !important;
              font-size: 0.9rem !important;
            }
            
            /* Ensure popups stay within viewport bounds */
            .absolute.top-full.left-0,
            .absolute.top-full.right-0,
            .absolute.bottom-full.left-0,
            .absolute.bottom-full.right-0 {
              max-width: calc(100vw - 40px) !important;
              max-height: calc(100vh - 40px) !important;
              overflow: hidden !important;
              z-index: 9999 !important;
              position: absolute !important;
            }
            
            /* Constrain popup content width */
            .absolute.top-full.left-0 > div,
            .absolute.top-full.right-0 > div,
            .absolute.bottom-full.left-0 > div,
            .absolute.bottom-full.right-0 > div {
              max-width: calc(100vw - 40px) !important;
              width: auto !important;
              min-width: 250px !important;
              max-height: calc(100vh - 40px) !important;
              overflow-y: auto !important;
              z-index: 10000 !important;
              position: relative !important;
            }
            
            /* Ensure left positioning doesn't overflow */
            .absolute.top-full.left-0 > div,
            .absolute.bottom-full.left-0 > div {
              left: 0 !important;
              right: auto !important;
              transform: none !important;
            }
            
            /* Ensure right positioning doesn't overflow */
            .absolute.top-full.right-0 > div,
            .absolute.bottom-full.right-0 > div {
              right: 0 !important;
              left: auto !important;
              transform: none !important;
            }
            
            /* Fallback positioning for edge cases */
            .absolute.top-full.left-0 {
              left: 10px !important;
              right: auto !important;
            }
            
            .absolute.top-full.right-0 {
              right: 10px !important;
              left: auto !important;
            }
            
            .absolute.bottom-full.left-0 {
              left: 10px !important;
              right: auto !important;
            }
            
            .absolute.bottom-full.right-0 {
              right: 10px !important;
              left: auto !important;
            }
            
            /* Ensure popups appear above all other content */
            .stat-tile .relative {
              z-index: 1 !important;
            }
            
            .stat-tile .relative .absolute {
              z-index: 9999 !important;
            }
            
            /* Add extra margin for bottom popups to avoid section overlap */
            .absolute.top-full.left-0,
            .absolute.top-full.right-0 {
              margin-bottom: 20px !important;
            }
            
            /* Add extra margin for top popups to avoid section overlap */
            .absolute.bottom-full.left-0,
            .absolute.bottom-full.right-0 {
              margin-top: 20px !important;
            }
          }
          
          /* Slide up animation for mobile bottom sheet */
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30%);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-slideUp {
            animation: slideUp 0.35s ease-out both;
          }
          
          /* Ensure popup is always visible and properly positioned */
          .mobile-popup {
            pointer-events: auto !important;
            opacity: 1 !important;
            visibility: visible !important;
            display: block !important;
          }
          
          /* Better touch interaction for mobile popups */
          .stat-tile:hover .mobile-popup,
          .stat-tile:focus .mobile-popup {
            opacity: 1 !important;
            visibility: visible !important;
            transform: translate(-50%, -50%) !important;
          }
          
          /* Ensure popup content is properly styled */
          .popup-content {
            word-break: break-word !important;
            hyphens: auto !important;
            line-height: 1.5 !important;
          }
          
          /* Hide popup arrow on mobile */
          .popup-arrow {
            display: none !important;
          }
          
          /* Ensure service dropdown tiles expand downward on mobile */
          .group .overflow-hidden {
            overflow: visible !important;
          }
          
          /* Force downward expansion for mobile */
          .group .motion-div {
            transform-origin: top !important;
          }
          
          /* Ensure expanded content flows downward */
          .group .space-y-4 {
            margin-top: 0 !important;
            padding-top: 1rem !important;
          }
          
          /* Mobile expandable content - ensure downward expansion */
          .mobile-expandable {
            transform-origin: top !important;
            overflow: visible !important;
            position: relative !important;
            top: auto !important;
            bottom: auto !important;
          }
          
          /* Ensure the expanded content container flows downward */
          .mobile-expandable > div {
            margin-top: 0 !important;
            padding-top: 1rem !important;
            position: relative !important;
          }
          
          /* Remove any absolute positioning that might cause upward expansion */
          .group .motion-div {
            position: relative !important;
            transform: none !important;
          }
          
          /* Ensure proper flow for expanded content */
          .group.expanded {
            overflow: visible !important;
            height: auto !important;
          }
          
          /* Mobile card container - ensure proper flow */
          .space-y-4, .space-y-6 {
            display: flex !important;
            flex-direction: column !important;
          }
          
          /* Ensure cards don't shift upward when expanding */
          .group {
            position: relative !important;
            z-index: 1 !important;
            overflow: hidden !important;
            transition: max-height 0.5s ease-in-out !important;
          }
          
          /* Expanded card should have higher z-index */
          .group .expanded {
            z-index: 2 !important;
            max-height: 2000px !important; /* Large enough for content */
          }
          
          /* Collapsed state */
          .group:not(.expanded) {
            max-height: 200px !important; /* Adjust based on your header height */
          }
          
          /* Smooth transitions for mobile */
          .group .motion-div {
            transition: all 0.3s ease-in-out !important;
          }
          
          /* Ensure content below expands smoothly */
          .group + .group {
            transition: transform 0.3s ease-in-out !important;
          }
        }
        
        /* Ensure popup visibility across all screen sizes */
        .hover-popup {
          z-index: 9999 !important;
        }
      `}</style>
    </section>
  );
};
