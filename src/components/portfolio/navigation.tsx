"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navigationItems = [
  { name: "Here's How I Help You Win", sectionId: "about" },
  { name: "Why Leaders Trust me?", sectionId: "why-me" },
  { name: "Portfolio", sectionId: "case-studies" },
  { name: "Testimonials", sectionId: "testimonials" },
  { name: "Contact", sectionId: "contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50" : "bg-transparent"}`}
    >
      <div className="container-responsive max-w-7xl relative">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Logo - Left Side */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-300 touch-target p-2 -ml-2"
          >
            <img
              src="https://clever-pika-899e4f.netlify.app/signaturetransparent1.png"
              alt="Hesham Badr Signature"
              className="h-10 sm:h-12 lg:h-14 xl:h-16 w-auto object-contain"
            />
          </button>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8 xl:space-x-10">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.sectionId)}
                  className={`relative responsive-text-base font-medium transition-colors duration-300 touch-target px-3 py-2 group no-underline hover:no-underline ${
                    item.name === "Contact"
                      ? "text-primary hover:text-primary/80"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full ${
                      item.name === "Contact" ? "bg-primary" : "bg-primary"
                    }`}
                  ></span>
                </button>
              ))}
            </div>
          </div>

          {/* Desktop CTA Button - Right Side */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted/10 transition-colors duration-300 touch-target"
          >
            {isOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden absolute top-full left-0 right-0 border-t border-border/50 bg-background/95 backdrop-blur-md shadow-lg"
            >
              <div className="responsive-py-sm responsive-px-sm space-y-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.sectionId)}
                    className={`relative block w-full text-left responsive-px-sm responsive-py-sm responsive-text-base font-medium transition-colors duration-300 rounded-lg touch-target group no-underline hover:no-underline ${
                      item.name === "Contact"
                        ? "text-primary hover:text-primary/80 hover:bg-primary/5"
                        : "text-muted-foreground hover:text-primary hover:bg-muted/10"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-1 left-4 h-0.5 w-0 transition-all duration-300 group-hover:w-8 ${
                        item.name === "Contact" ? "bg-primary" : "bg-primary"
                      }`}
                    ></span>
                  </button>
                ))}
                <div className="pt-4 border-t border-border/50 mt-4">
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
