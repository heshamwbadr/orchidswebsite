"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Calendar, ArrowUp, ExternalLink } from "lucide-react";

export const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@yourname.com",
      href: "mailto:hello@yourname.com",
      description: "Drop me a line anytime"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      description: "Let's talk directly"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/yourprofile",
      description: "Professional networking"
    },
    {
      icon: Calendar,
      label: "Schedule Call",
      value: "Book a consultation",
      href: "https://calendly.com/hesham-badr-neuronovate/30min",
      description: "Free 30-minute consultation"
    }
  ];

  const navigationLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/in/yourprofile" },
    { name: "GitHub", href: "https://github.com/yourusername" },
    { name: "Twitter", href: "https://twitter.com/yourusername" }
  ];

  return (
    <footer className="relative bg-background border-t border-border overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="neural-mesh-bg h-full w-full" />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/90" />

      <div className="relative z-10">
        <div className="container mx-auto px-6 py-16">
          {/* Ready to Start Section in Footer */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                Ready to Start?
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Schedule a free 30-minute consultation to discuss your project and explore how we can work together to transform your business with AI.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => window.open('https://calendly.com/hesham-badr-neuronovate/30min', '_blank')}
                  className="inline-flex items-center px-8 py-3 text-lg font-semibold text-primary-foreground bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12"
          >
            {/* Quick Navigation */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-foreground mb-6">Navigation</h4>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="group-hover:text-primary transition-colors">
                        {link.name}
                      </span>
                      <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-foreground mb-6">Connect</h4>
              <ul className="space-y-3">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-secondary transition-colors duration-200 flex items-center group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="group-hover:text-secondary transition-colors">
                        {link.name}
                      </span>
                      <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {contactMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <motion.div
                  key={method.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.a
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div className="ml-3">
                        <h5 className="text-sm font-medium text-foreground">{method.label}</h5>
                      </div>
                    </div>
                    <p className="text-sm text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                      {method.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {method.description}
                    </p>
                  </motion.a>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="pt-8 border-t border-border"
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-6 mb-4 md:mb-0">
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} Your Name. All rights reserved.
                </p>
                <div className="hidden md:flex items-center space-x-4 text-xs text-muted-foreground">
                  <a href="/privacy" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                  <a href="/terms" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </a>
                </div>
              </div>
              
              <motion.button
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Back to top</span>
                <ArrowUp className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};