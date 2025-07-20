"use client";

import React from "react";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { triggerGTM } from "@/components/GTMLoader";
import { openCalendlyPopupSafe } from "@/lib/calendly";

export const FloatingCallToAction = () => {
  const handleCallClick = async () => {
    // Trigger GTM loading for conversion tracking
    triggerGTM();
    
    try {
      // Try to open Calendly popup in same tab
      await openCalendlyPopupSafe();
    } catch (error) {
      console.warn("Calendly popup failed, trying alternative method:", error);
      
      // Alternative: Try to load and open in same tab
      if (typeof window !== "undefined") {
        // Force load Calendly script
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        
        script.onload = () => {
          // Wait for Calendly to initialize
          const checkAndOpen = () => {
            if (window.Calendly) {
              window.Calendly.initPopupWidget({
                url: "https://calendly.com/hesham-badr-neuronovate/30min",
              });
            } else {
              setTimeout(checkAndOpen, 100);
            }
          };
          checkAndOpen();
        };
        
        document.head.appendChild(script);
      }
    }
  };

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-[5000]">
      {/* Pulse rings */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border-2 opacity-20"
            style={{ borderColor: i % 2 === 0 ? "#007AFF" : "#FFD700" }}
            animate={{
              scale: [1, 2, 3],
              opacity: [0.6, 0.3, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Main button */}
      <motion.button
        onClick={handleCallClick}
        className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full shadow-lg backdrop-blur-sm border border-white/20 bg-gradient-to-r from-secondary to-primary touch-target pointer-events-auto"
        whileHover={{
          scale: 1.1,
          boxShadow:
            "0 8px 25px rgba(0, 122, 255, 0.4), 0 4px 15px rgba(255, 215, 0, 0.2)",
        }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
          hover: {
            duration: 0.2,
            ease: "easeOut",
          },
        }}
        aria-label="Schedule a call - Opens Calendly popup"
        title="Schedule a 30-minute consultation"
      >
        <motion.div
          whileHover={{ rotate: 15 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center h-full"
        >
          <Phone
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white"
            strokeWidth={2}
          />
        </motion.div>
      </motion.button>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-50 blur-xl bg-gradient-to-r from-secondary to-primary pointer-events-none"
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};
