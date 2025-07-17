"use client";

import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { openCalendlyPopup } from "@/lib/calendly";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export const FloatingCallButton = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const handleClick = () => { openCalendlyPopup(); };
  const button = (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        onClick={handleClick}
        className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full shadow-2xl focus:outline-none focus:ring-4 focus:ring-primary/30 focus:ring-offset-2 focus:ring-offset-background bg-gradient-to-r from-secondary to-primary touch-target mobile-safe-area pointer-events-auto"
        style={{ right: 0, left: 'auto', bottom: 0 }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          y: [0, -8, 0],
          boxShadow: [
            "0 10px 25px rgba(0, 122, 255, 0.3)",
            "0 10px 25px rgba(255, 215, 0, 0.3)",
            "0 10px 25px rgba(0, 122, 255, 0.3)",
          ],
        }}
        whileHover={{
          scale: 1.1,
          y: -4,
          boxShadow: "0 15px 35px rgba(0, 122, 255, 0.4)",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        aria-label="Book a Call - Opens Calendly popup"
        role="button"
      >
        <motion.div
          className="w-full h-full flex items-center justify-center"
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Phone
            className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white drop-shadow-md"
            strokeWidth={2}
          />
        </motion.div>

        {/* Pulse rings - optimized for mobile */}
        <motion.div
          className="absolute inset-0 rounded-full border-2"
          style={{ borderColor: "#007AFF" }}
          animate={{
            scale: [1, 1.5, 2],
            opacity: [1, 0.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />

        <motion.div
          className="absolute inset-0 rounded-full border-2"
          style={{ borderColor: "#FFD700" }}
          animate={{
            scale: [1, 1.8, 2.5],
            opacity: [0.8, 0.3, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.5,
          }}
        />
      </motion.button>
    </div>
  );
  if (!mounted) return null;
  return createPortal(button, document.body);
};
