"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { openCalendlyPopupSafe } from "@/lib/calendly";

export const FloatingCallButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 4000); // 4 second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-[5000]">
            {/* Pulse rings */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border-2 opacity-20 pointer-events-none"
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

            {/* Main button with subtle bounce */}
            <motion.button
              onClick={openCalendlyPopupSafe}
              className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full shadow-lg backdrop-blur-sm border border-white/20 bg-gradient-to-r from-secondary to-primary touch-target pointer-events-auto"
              aria-label="Schedule a call - Opens Calendly popup"
              title="Schedule a 30-minute consultation"
              animate={{ y: [0, -8, 0] }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
            >
              <div className="flex items-center justify-center h-full">
                <Phone
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white"
                  strokeWidth={2}
                />
              </div>
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
        )}
      </AnimatePresence>

      <style jsx>{`
        /* Mobile-specific improvements */
        @media (max-width: 768px) {
          .touch-target {
            touch-action: manipulation;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          
          /* Better visual feedback for touch interactions */
          .touch-target:active {
            transform: scale(0.95);
          }
          
          /* Improve focus states for accessibility */
          .touch-target:focus {
            outline: 2px solid #22d3ee;
            outline-offset: 2px;
          }
        }
        
        /* Ensure smooth animations */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </>
  );
};
