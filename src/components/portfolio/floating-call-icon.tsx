"use client";

import { Phone } from 'lucide-react';
import { motion } from 'motion/react';

export const FloatingCallButton = () => {
  const handleClick = () => {
    window.open('https://calendly.com/hesham-badr-neuronovate/30min', '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl focus:outline-none focus:ring-4 focus:ring-primary/30 focus:ring-offset-2 focus:ring-offset-background bg-gradient-to-r from-secondary to-primary"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        boxShadow: [
          '0 10px 25px rgba(0, 122, 255, 0.3)',
          '0 10px 25px rgba(255, 215, 0, 0.3)',
          '0 10px 25px rgba(0, 122, 255, 0.3)',
        ]
      }}
      whileHover={{ 
        scale: 1.1,
        boxShadow: '0 15px 35px rgba(0, 122, 255, 0.4)',
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        boxShadow: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }
      }}
      aria-label="Book a Call"
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
          className="w-6 h-6 text-white drop-shadow-md" 
          strokeWidth={2}
        />
      </motion.div>
      
      {/* Pulse rings */}
      <motion.div
        className="absolute inset-0 rounded-full border-2"
        style={{ borderColor: '#007AFF' }}
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
        style={{ borderColor: '#FFD700' }}
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
  );
};