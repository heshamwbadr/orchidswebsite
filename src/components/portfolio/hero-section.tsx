"use client";

import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Video Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-30 [mask-image:radial-gradient(ellipse_at_center,white_40%,transparent_70%)]"
        >
          <source
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/94fd3199-4d32-48fc-865e-b29a5a13ccb2/generated_videos/professional-abstract-ai-and-technology--f174aa81-20250711224003.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      {/* Neural Mesh Background Overlay */}
      <div className="absolute inset-0 z-5">
        <div className="absolute inset-0 opacity-15">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#007AFF" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#FFD700" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#007AFF" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            
            {/* Neural Network Pattern */}
            {mounted && Array.from({ length: 30 }).map((_, i) => (
              <g key={i}>
                <circle
                  cx={Math.random() * 1000}
                  cy={Math.random() * 1000}
                  r="2"
                  fill="url(#neural-gradient)"
                  opacity={0.8}
                >
                  <animate
                    attributeName="opacity"
                    values="0.4;1;0.4"
                    dur={`${3 + Math.random() * 4}s`}
                    repeatCount="indefinite"
                  />
                </circle>
                
                <line
                  x1={Math.random() * 1000}
                  y1={Math.random() * 1000}
                  x2={Math.random() * 1000}
                  y2={Math.random() * 1000}
                  stroke="url(#neural-gradient)"
                  strokeWidth="1"
                  opacity={0.3}
                >
                  <animate
                    attributeName="opacity"
                    values="0.2;0.6;0.2"
                    dur={`${4 + Math.random() * 3}s`}
                    repeatCount="indefinite"
                  />
                </line>
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {mounted && Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-end min-h-[80vh]">
          
          {/* Left Column - Text Content */}
          <div 
            className={`transform transition-all duration-1000 ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            {/* Main Headline */}
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight tracking-tight text-left"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient bg-300% font-extralight">
                Turning strategy
              </span>
              <span className="block text-foreground font-light mt-2">
                into impact
              </span>
              <span className="block bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent animate-gradient bg-300% font-light">
                with AI
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-8 text-left">
                Elevating businesses through AI strategy, intelligent automation, and measurable transformation.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-start items-start">
                <Button
                  size="lg"
                  className="relative group bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-primary-foreground px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/25"
                  onClick={() => scrollToSection('portfolio')}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Portfolio
                    <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="relative group border-2 border-secondary text-secondary hover:text-secondary-foreground px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent hover:bg-secondary shadow-lg hover:shadow-secondary/25"
                  onClick={() => window.open('https://calendly.com/hesham-badr-neuronovate/30min', '_blank')}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Book a Call
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Professional Portrait */}
          <motion.div 
            initial={{ y: 30, opacity: 0, x: 30 }}
            animate={{ y: 0, opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex justify-center lg:justify-end items-end"
          >
            <div className="relative max-w-md w-full flex items-end justify-end">
              <img 
                src="https://clever-pika-899e4f.netlify.app/mypictransparent.png" 
                alt="Hesham Badr - AI & Digital Transformation Strategist"
                className="w-full h-full object-cover"
                style={{ transform: "scale(0.48)", transformOrigin: "bottom right" }}
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
        
        .bg-300% {
          background-size: 300%;
        }
      `}</style>
    </section>
  );
};