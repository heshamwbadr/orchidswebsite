"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Calendar,
  ArrowUp,
  ExternalLink,
  MapPin,
} from "lucide-react";
import { openCalendlyPopup } from "@/lib/calendly";

export const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScheduleConsultation = () => {
    openCalendlyPopup();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const navigationSections = [
    {
      title: "Services",
      links: [
        { name: "Strategic Intelligence & AI", href: "#how-i-help-you-win" },
        { name: "Digital & Operational Transformation", href: "#how-i-help-you-win" },
        { name: "Leadership & Change Acceleration", href: "#how-i-help-you-win" },
        { name: "AI Agent Enablement", href: "#how-i-help-you-win" },
      ],
    },
    {
      title: "Portfolio",
      links: [
        { name: "Why Leaders Trust Me", href: "#trust" },
        { name: "Case Studies", href: "#case-studies" },
        { name: "Testimonials", href: "#testimonials" },
      ],
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-background via-background to-muted/20 overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02] hidden lg:block">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
              linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-primary/5 via-primary/2 to-transparent rounded-full blur-3xl hidden lg:block" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-secondary/5 via-secondary/2 to-transparent rounded-full blur-3xl hidden lg:block" />
      </div>

      <div className="relative z-10">
        <div className="container-responsive responsive-py-lg">
          {/* Premium CTA Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
              <div className="relative responsive-card bg-gradient-to-br from-card/50 via-card/80 to-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl lg:rounded-3xl shadow-2xl">
                {/* Decorative border accent */}
                <div className="absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 p-[1px]">
                  <div className="h-full w-full rounded-2xl lg:rounded-3xl bg-gradient-to-br from-background/95 to-background/90" />
                </div>

                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0.95 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="responsive-text-4xl lg:responsive-text-5xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
                      Ready to Transform Your Business?
                    </h2>
                    <p className="responsive-text-lg sm:responsive-text-xl text-muted-foreground mb-6 lg:mb-8 leading-relaxed">
                      Schedule a complimentary 30-minute strategic consultation
                      to explore how AI and digital transformation can
                      accelerate your growth.
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      onClick={handleScheduleConsultation}
                      className="responsive-button group inline-flex items-center bg-gradient-to-r from-primary via-primary to-secondary text-primary-foreground rounded-xl lg:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:from-primary/90 hover:to-secondary/90 touch-target"
                    >
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform duration-300" />
                      <span className="responsive-text-base sm:responsive-text-lg font-semibold">
                        Schedule Consultation
                      </span>
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Main Footer Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-12 responsive-gap-lg mb-12 lg:mb-16"
          >
            {/* Brand & Contact Section */}
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <div className="mb-6 lg:mb-8">
                <h3 className="responsive-text-2xl sm:responsive-text-3xl font-bold text-foreground mb-2 lg:mb-3">
                  Hesham Badr
                </h3>
                <p className="responsive-text-base sm:responsive-text-lg text-muted-foreground font-medium mb-2">
                  AI & Digital Transformation Strategist
                </p>
                <p className="responsive-text-sm text-muted-foreground leading-relaxed max-w-md">
                  Empowering executives and organizations to harness AI for
                  strategic advantage and sustainable growth.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-3 lg:space-y-4">
                <motion.a
                  href="mailto:Hesham.badr@neuronovate.consulting"
                  className="group flex items-center responsive-gap-base text-muted-foreground hover:text-primary transition-all duration-300 responsive-py-sm touch-target"
                  whileHover={{ x: 8 }}
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-foreground group-hover:text-primary transition-colors responsive-text-base">
                      Hesham.badr@neuronovate.consulting
                    </div>
                    <div className="responsive-text-sm text-muted-foreground">
                      Drop me a line anytime
                    </div>
                  </div>
                </motion.a>

                <motion.button
                  onClick={openCalendlyPopup}
                  className="group flex items-center responsive-gap-base text-muted-foreground hover:text-secondary transition-all duration-300 responsive-py-sm touch-target w-full text-left"
                  whileHover={{ x: 8 }}
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300 flex-shrink-0">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-foreground group-hover:text-secondary transition-colors responsive-text-base">
                      Book a Call
                    </div>
                    <div className="responsive-text-sm text-muted-foreground">
                      Let's discuss your project
                    </div>
                  </div>
                </motion.button>

                <div className="flex items-center responsive-gap-base text-muted-foreground responsive-py-sm">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-muted/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-foreground responsive-text-base">
                      Available Globally
                    </div>
                    <div className="responsive-text-sm text-muted-foreground">
                      (Remote & Hybrid)
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Sections */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 responsive-gap-lg">
              {navigationSections.map((section) => (
                <motion.div
                  key={section.title}
                  variants={itemVariants}
                  className="space-y-3 lg:space-y-4"
                >
                  <h4 className="responsive-text-base sm:responsive-text-lg font-semibold text-foreground">
                    {section.title}
                  </h4>
                  <ul className="space-y-2 lg:space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <motion.a
                          href={link.href}
                          className="group flex items-center justify-between text-muted-foreground hover:text-primary transition-all duration-300 py-1 responsive-text-sm sm:responsive-text-base touch-target"
                          whileHover={{ x: 6 }}
                        >
                          <span className="group-hover:text-primary transition-colors">
                            {link.name}
                          </span>
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0" />
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social & Legal Section */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="pt-6 lg:pt-8 border-t border-border/50"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between responsive-gap-lg">
              {/* Social Links */}
              <div className="flex flex-col sm:flex-row items-center responsive-gap-base">
                <p className="responsive-text-sm text-muted-foreground font-medium">
                  Connect:
                </p>

                <motion.a
                  href="https://linkedin.com/in/heshambadr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center responsive-gap-sm text-primary hover:text-primary/80 transition-all duration-300 responsive-py-sm responsive-px-sm rounded-lg hover:bg-primary/5 touch-target"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="responsive-text-sm font-medium">
                    LinkedIn
                  </span>
                </motion.a>
              </div>

              {/* Copyright & Legal */}
              <div className="flex flex-col sm:flex-row items-center responsive-gap-base text-center lg:text-right">
                <div className="flex flex-col sm:flex-row items-center responsive-gap-sm responsive-text-sm text-muted-foreground">
                  <a
                    href="/privacy"
                    className="hover:text-foreground transition-colors responsive-px-sm responsive-py-sm rounded hover:bg-muted/20 touch-target"
                  >
                    Privacy Policy
                  </a>
                  <span className="hidden sm:inline">•</span>
                  <a
                    href="/termsofuse"
                    className="hover:text-foreground transition-colors responsive-px-sm responsive-py-sm rounded hover:bg-muted/20 touch-target"
                  >
                    Terms of Service
                  </a>
                </div>

                <motion.button
                  onClick={scrollToTop}
                  className="group flex items-center responsive-gap-sm responsive-text-sm text-muted-foreground hover:text-primary transition-all duration-300 bg-card/50 hover:bg-primary/5 responsive-px-sm responsive-py-sm rounded-full border border-border/30 hover:border-primary/30 touch-target"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Back to top</span>
                  <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4 group-hover:-translate-y-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-border/30">
              <p className="responsive-text-sm text-muted-foreground">
                © {new Date().getFullYear()} Hesham Badr. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
