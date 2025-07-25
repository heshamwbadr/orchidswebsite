"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { safeScrollToElement, createThrottledScrollHandler } from "@/lib/dom-utils";

const navigationItems = [
  { name: "Here's How I Help You Win", sectionId: "about" },
  { name: "Why Leaders Trust me?", sectionId: "trust" },
  { name: "Portfolio", sectionId: "case-studies" },
  { name: "Testimonials", sectionId: "testimonials" },
  { name: "Contact", sectionId: "contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  const throttledScrollHandler = createThrottledScrollHandler(handleScroll, 16);

  useEffect(() => {
    window.addEventListener("scroll", throttledScrollHandler, { passive: true });
    return () => window.removeEventListener("scroll", throttledScrollHandler);
  }, [throttledScrollHandler]);

  const handleNavigationClick = (sectionId: string) => {
    // Add a small delay to ensure the DOM is ready, especially for initial loads.
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        safeScrollToElement(element, 80); // 80px navbar offset
      }
    }, 100);
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50" : "bg-transparent"}`}
    >
      <style jsx>{`
        /* Mobile navigation improvements */
        @media (max-width: 1023px) {
          .touch-target {
            min-height: 44px;
            min-width: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          /* Ensure mobile menu items have proper touch targets */
          .mobile-nav-item {
            min-height: 48px;
            padding: 12px 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            text-align: left;
            border-radius: 8px;
            transition: all 0.2s ease;
            -webkit-tap-highlight-color: transparent;
          }
          
          /* Active state for mobile navigation */
          .mobile-nav-item:active {
            transform: scale(0.98);
            background-color: rgba(34, 211, 238, 0.1);
          }
          
          /* Smooth scrolling for mobile */
          html {
            scroll-behavior: smooth;
          }
          
          /* Ensure navbar doesn't interfere with scrolling */
          body {
            padding-top: 0;
          }
          
          /* Mobile menu backdrop */
          .mobile-menu-backdrop {
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
          }
        }
      `}</style>
      <div className="container-responsive max-w-7xl relative">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Logo - Left Side */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-300 touch-target p-2 -ml-2"
          >
            <Image
              src="/pics/signaturetransparent1.webp"
              alt="Hesham Badr Signature"
              width={1366}
              height={768}
              priority
              className="h-10 sm:h-12 lg:h-14 xl:h-16 w-auto object-contain"
            />
          </button>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8 xl:space-x-10">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigationClick(item.sectionId)}
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted/10 transition-colors duration-300 touch-target"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
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
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                onClick={() => setIsOpen(false)}
              />
              
              {/* Mobile Menu */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden absolute top-full left-0 right-0 border-t border-border/50 bg-background/95 backdrop-blur-md shadow-lg mobile-menu-backdrop z-50"
              >
                <div className="responsive-py-sm responsive-px-sm space-y-1">
                  {navigationItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavigationClick(item.sectionId)}
                      className={`mobile-nav-item responsive-text-base font-medium transition-all duration-300 group no-underline hover:no-underline ${
                        item.name === "Contact"
                          ? "text-primary hover:text-primary/80 hover:bg-primary/5 active:bg-primary/10"
                          : "text-muted-foreground hover:text-primary hover:bg-muted/10 active:bg-muted/20"
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span>{item.name}</span>
                        <span
                          className={`h-0.5 w-0 transition-all duration-300 group-hover:w-8 ${
                            item.name === "Contact" ? "bg-primary" : "bg-primary"
                          }`}
                        ></span>
                      </div>
                    </button>
                  ))}
                  <div className="pt-4 border-t border-border/50 mt-4">
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};