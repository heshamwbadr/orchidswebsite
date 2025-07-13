"use client";

import { motion } from "framer-motion";
import { Trophy, Zap, GraduationCap, Cog, Building, Shield } from "lucide-react";

interface Differentiator {
  icon: React.ReactNode;
  title: string;
  description: string;
  points: string[];
}

const differentiators: Differentiator[] = [
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Proven Track Record",
    description: "13+ years transforming enterprises with measurable results. Over $21M in value delivered, with ROI up to 340%.",
    points: ["40+ Workflows Transformed", "3 Continents Served"]
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: "Executive Partnership",
    description: "Trusted advisor to leadership teams and boards, guiding enterprise-scale change with strategic influence.",
    points: ["Board-Level Advisory", "Strategic Governance"]
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Credentials You Can Trust",
    description: "Engineered for excellence. Strategically trained. Continuously learning to stay ahead of the curve.",
    points: [
      "Masters Process Engineering (Top 20 worldwide)",
      "MBA in Emerging Tech (Europe)", 
      "Harvard Certified in Advanced Business Strategy & Management Consulting"
    ]
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "AI-First Approach",
    description: "Expertise in GenAI, multi-agent systems, and machine learning — delivering scalable, future-ready solutions.",
    points: ["50+ AI Projects", "95% Success Rate"]
  },
  {
    icon: <Cog className="w-8 h-8" />,
    title: "End-to-End Solutions",
    description: "I own the full lifecycle of transformation — from strategic vision to operational excellence. No handoffs.",
    points: ["Zero Handoffs", "Full Ownership"]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Ethical AI Focus",
    description: "Transparent, compliant, and human-centric AI design aligned with global governance frameworks.",
    points: ["100% Compliance", "Ethical Frameworks"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const WhyMeSection = () => {
  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-teal-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-light mb-6 text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Why Choose <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text">Me</span>?
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-400 max-w-4xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            With a background in process engineering and management consulting, I translate seamlessly between boardrooms and dev rooms - aligning tech delivery with strategic outcomes.
          </motion.p>
        </motion.div>

        {/* Differentiators Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
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
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group h-full"
            >
              <div className="relative h-full bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated Border Gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm rounded-2xl" />
                
                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon Section */}
                  <motion.div 
                    className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-slate-700/50 to-slate-600/50 group-hover:from-blue-500/20 group-hover:to-purple-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-500"
                    whileHover={{ 
                      rotate: 5,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  >
                    {item.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-4 flex-grow flex flex-col">
                    <h3 className="text-2xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-slate-400 leading-relaxed font-light flex-grow">
                      {item.description}
                    </p>
                    
                    {/* Bullet Points */}
                    <div className="space-y-2 mt-auto">
                      {item.points.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-start text-sm">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3 mt-1.5 flex-shrink-0 group-hover:shadow-sm group-hover:shadow-blue-400/50 transition-all duration-300" />
                          <span className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Floating Particles */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400/60 rounded-full opacity-60 group-hover:animate-pulse" />
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400/60 rounded-full opacity-40 group-hover:animate-pulse delay-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-xl text-slate-400 font-light mb-8 max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Ready to transform your business with proven AI expertise? 
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text ml-2">Let's discuss your vision.</span>
          </motion.p>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-0 w-px h-32 bg-gradient-to-b from-transparent via-blue-400/50 to-transparent" />
        <div className="absolute top-1/2 right-0 w-px h-32 bg-gradient-to-b from-transparent via-purple-400/50 to-transparent" />
      </div>
    </section>
  );
};