"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, GraduationCap, Wrench, Globe, ShieldCheck, Lightbulb, Building2, Trophy, Cpu, Map } from "lucide-react";
import { motion } from "framer-motion";
import { openCalendlyPopup } from "@/lib/calendly";

const trustCredentials = [
  {
    icon: GraduationCap,
    label: "MBA",
    detail: "Emerging Tech (AI)",
  },
  {
    icon: Wrench,
    label: "MEng",
    detail: "Process Engineering",
  },
  {
    icon: Globe,
    label: "Educated at a",
    detail: "Global Top 20 Institution",
  },
  {
    icon: ShieldCheck,
    label: "Harvard Certified",
    detail: "Management Consultant",
  },
  {
    icon: ShieldCheck,
    label: "Harvard Certified",
    detail: "Advanced Business Strategist",
  },
  {
    icon: Lightbulb,
    label: "12+ Years",
    detail: "in Strategy, AI & Transformation",
  },
  {
    icon: Building2,
    label: "Trusted by",
    detail: "Tier-1 Banks",
  },
  {
    icon: Trophy,
    label: "8x Industry Recognitions",
  },
  {
    icon: Cpu,
    label: "AI-First",
    detail: "Execution-Led Leader",
  },
  {
    icon: Map,
    label: "AU, EU, MENA",
    detail: "Global Experience",
  },
];

const tileClasses =
  "flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-background/80 border border-primary/10 text-primary-foreground text-sm md:text-base font-medium shadow-sm transition-transform duration-200 hover:scale-105 cursor-pointer whitespace-nowrap";
const iconClasses =
  "w-4 h-4 md:w-5 md:h-5 text-white/80 drop-shadow-sm flex-shrink-0";
const gradientTextClasses =
  "bg-gradient-to-r from-white via-gray-300 to-gray-100 bg-clip-text text-transparent font-semibold";

const TrustCarousel: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Header classes for visual emphasis
  const headerClasses =
    "flex items-center gap-3 pl-4 md:pl-12 py-3 text-lg md:text-xl font-bold text-white uppercase tracking-wide relative select-none";
  const headerIconClasses =
    "w-5 h-5 md:w-6 md:h-6 text-white/80 flex-shrink-0 mr-1";
  const headerTextClasses =
    "drop-shadow-[0_2px_8px_rgba(255,255,255,0.18)] text-shadow-glow";

  // Inline style for text-shadow (soft glow)
  const textShadowStyle = {
    textShadow: "0 2px 12px rgba(255,255,255,0.25), 0 1px 2px rgba(0,0,0,0.12)"
  };

  // Gradient underline (animated)
  const GradientUnderline = () => (
    <span
      className="absolute left-0 -bottom-1 w-full h-[3px] pointer-events-none"
      aria-hidden="true"
      style={{ minWidth: '80px' }}
    >
      {/* Solid base underline */}
      <span className="block h-full w-2/3 mx-auto rounded-full bg-gradient-to-r from-white/20 via-white/60 to-white/20" style={{ position: 'absolute', top: 0, left: 0, right: 0, opacity: 0.7 }}></span>
      {/* Animated glow overlay */}
      <span className="block h-full w-2/3 mx-auto rounded-full bg-gradient-to-r from-white/0 via-white/80 to-white/0 animate-underline-glow" style={{ position: 'absolute', top: 0, left: 0, right: 0 }}></span>
    </span>
  );

  // Render a full carousel sequence (spacer + all headers/tiles)
  const CarouselSequence = () => (
    <div className="flex gap-6 md:gap-10 items-center flex-shrink-0">
      {/* Invisible left spacer for offset */}
      <span className="w-[64px] opacity-0 select-none pointer-events-none flex-shrink-0" aria-hidden="true"></span>
      
      {/* Section Header 1 */}
      <span className={headerClasses} style={textShadowStyle}>
        <span className={headerTextClasses}>Credentials You Can Trust</span>
        <GradientUnderline />
      </span>
      
      {/* Credentials Tiles (1-5) */}
      {trustCredentials.slice(0, 5).map(({ icon: Icon, label, detail }, i) => (
        <span
          key={`cred-${i}`}
          className={tileClasses}
          aria-label={`${label} ${detail || ""}`}
        >
          <Icon className={iconClasses + ' animate-carousel-icon'} />
          <span className="inline-flex items-center text-white">
            <span className="font-semibold">{label}</span>
            {detail && <span className="ml-1">{detail}</span>}
          </span>
        </span>
      ))}
      
      {/* Section Header 2 */}
      <span className={headerClasses} style={textShadowStyle}>
        <span className={headerTextClasses}>Experience You Can Rely On</span>
        <GradientUnderline />
      </span>
      
      {/* Experience Tiles (6-10) */}
      {trustCredentials.slice(5).map(({ icon: Icon, label, detail }, i) => (
        <span
          key={`exp-${i}`}
          className={tileClasses}
          aria-label={`${label} ${detail || ""}`}
        >
          <Icon className={iconClasses + ' animate-carousel-icon'} />
          <span className="inline-flex items-center text-white">
            <span className="font-semibold">{label}</span>
            {detail && <span className="ml-1">{detail}</span>}
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="absolute left-0 right-0 bottom-0 w-full z-20 overflow-hidden py-4">
      {/* Left fade for visual polish */}
      <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-background to-transparent z-30 pointer-events-none" />
      
      {/* Right fade for visual polish */}
      <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-background to-transparent z-30 pointer-events-none" />
      
      <div className="relative w-full overflow-hidden">
        <div
          className={`flex gap-6 md:gap-10 items-center whitespace-nowrap cursor-grab active:cursor-grabbing will-change-transform transition-opacity duration-1000 ${
            isLoaded ? 'animate-hero-marquee opacity-100' : 'opacity-0'
          }`}
          style={{
            width: 'max-content',
            maxWidth: 'none',
            animation: isLoaded ? 'hero-marquee 51.1s linear infinite' : 'none',
          }}
          onMouseEnter={(e) => {
            if (isLoaded) {
              e.currentTarget.style.animationPlayState = "paused";
            }
          }}
          onMouseLeave={(e) => {
            if (isLoaded) {
              e.currentTarget.style.animationPlayState = "running";
            }
          }}
        >
          {/* First sequence */}
          <CarouselSequence />
          
          {/* Second sequence (duplicate for seamless loop) */}
          <CarouselSequence />
          
          {/* Third sequence (extra for smoother transition) */}
          <CarouselSequence />
        </div>
      </div>

      {/* Styles for seamless looping */}
      <style jsx>{`
        @keyframes hero-marquee {
          0% { 
            transform: translateX(0); 
          }
          100% { 
            transform: translateX(-33.333333%); 
          }
        }
        
        .animate-hero-marquee {
          animation: hero-marquee 51.1s linear infinite;
        }
        
        @keyframes underline-glow {
          0%, 100% { 
            opacity: 0.7; 
            filter: blur(1px); 
          }
          50% { 
            opacity: 1; 
            filter: blur(2px); 
          }
        }
        
        .animate-underline-glow {
          animation: underline-glow 2.5s ease-in-out infinite;
        }
        
        .text-shadow-glow {
          text-shadow: 0 2px 12px rgba(255,255,255,0.25), 0 1px 2px rgba(0,0,0,0.12);
        }
        
        .will-change-transform {
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [neuralElements, setNeuralElements] = useState<Array<{cx: number, cy: number, x1: number, y1: number, x2: number, y2: number}>>([]);

  useEffect(() => {
    setMounted(true);
    
    // Generate neural elements once, not on every render
    const elements = Array.from({ length: 20 }).map(() => ({
      cx: Math.random() * 1000,
      cy: Math.random() * 1000,
      x1: Math.random() * 1000,
      y1: Math.random() * 1000,
      x2: Math.random() * 1000,
      y2: Math.random() * 1000,
    }));
    setNeuralElements(elements);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBookCall = () => {
    openCalendlyPopup();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background mobile-safe-area">
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
          poster="/pics/mypictransparent-576.webp"
          className="h-full w-full object-cover opacity-20 sm:opacity-30 [mask-image:radial-gradient(ellipse_at_center,white_40%,transparent_70%)]"
        >
          <source
            src="/hero-background-video.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      {/* Neural Mesh Background Overlay */}
      <div className="absolute inset-0 z-5">
        <div className="absolute inset-0 opacity-10 sm:opacity-15">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient
                id="neural-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#007AFF" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#FFD700" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#007AFF" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Neural Network Pattern */}
            {mounted && neuralElements.map((element, i) => (
              <g key={i}>
                <circle
                  cx={element.cx}
                  cy={element.cy}
                  r="2"
                  fill="url(#neural-gradient)"
                  opacity={0.8}
                >
                  <animate
                    attributeName="opacity"
                    values="0.4;1;0.4"
                    dur={`${3 + (i % 4)}s`}
                    repeatCount="indefinite"
                  />
                </circle>

                <line
                  x1={element.x1}
                  y1={element.y1}
                  x2={element.x2}
                  y2={element.y2}
                  stroke="url(#neural-gradient)"
                  strokeWidth="1"
                  opacity={0.3}
                >
                  <animate
                    attributeName="opacity"
                    values="0.2;0.6;0.2"
                    dur={`${4 + (i % 3)}s`}
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
        {mounted &&
          Array.from({ length: 6 }).map((_, i) => (
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

      {/* Main Content */}
      <div className="relative z-10 container-responsive max-w-8xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[80vh] responsive-py-lg">
          {/* Left Column - Text Content */}
          <div
            className={`transform transition-all duration-1000 order-2 lg:order-1 text-center lg:text-left ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {/* Main Headline */}
            <motion.h1
              className="responsive-text-6xl font-light mb-8 lg:mb-6 leading-tight tracking-tight mt-16 lg:mt-0 text-left"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span className="block text-foreground font-light">
                Real{" "}
                <span className="text-primary font-medium">
                  AI transformation
                </span>{" "}
                doesn't live in{" "}
                <span className="text-accent font-medium">strategy</span> decks,
                <br className="hidden lg:inline" />
                it lives in{" "}
                <span className="text-primary font-medium">execution</span>.
              </span>
            </motion.h1>

            {/* Subheader */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-8 lg:mb-6 text-left lg:text-left"
            >
              <p className="responsive-text-xl text-muted-foreground font-light leading-relaxed">
                I lead where most stop: at the intersection of{" "}
                <br className="hidden lg:inline" />
                <span className="text-accent font-medium">vision</span> &{' '}
                <span className="text-primary font-medium">delivery</span>.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <div className="flex flex-col sm:flex-row responsive-gap-base justify-center lg:justify-start items-center lg:items-start">
                <Button
                  size="lg"
                  className="responsive-button relative group bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-primary-foreground font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/25 w-full sm:w-auto"
                  onClick={handleBookCall}
                >
                  <span className="relative z-10 flex items-center justify-center responsive-gap-sm">
                    Book Strategy Call
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="responsive-button relative group border-2 border-secondary text-secondary hover:text-secondary-foreground font-medium rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent hover:bg-secondary shadow-lg hover:shadow-secondary/25 w-full sm:w-auto"
                  onClick={() => scrollToSection("case-studies")}
                >
                  <span className="relative z-10 flex items-center justify-center responsive-gap-sm">
                    See My Work
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                </Button>
              </div>
            </motion.div>

            {/* Mobile-only carousel below CTA buttons */}
            <div className="block lg:hidden mt-32 sm:mt-36">
              <TrustCarousel />
            </div>
          </div>

          {/* Right Column - Professional Portrait (Desktop/Tablet only) */}
          <motion.div
            initial={{ y: 30, opacity: 0, x: 30 }}
            animate={{ y: 0, opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="hidden lg:flex flex-col items-center justify-end order-1 lg:order-2 mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex flex-col items-center justify-center lg:justify-center">
              <Image
                src="/pics/mypictransparent.webp"
                alt="Hesham Badr - AI & Digital Transformation Strategist"
                width={2141}
                height={2644}
                sizes="(max-width: 1024px) 50vw, 40vw"
                priority
                className="w-full h-auto max-h-[60vh] sm:max-h-[70vh] lg:max-h-none object-contain"
                style={{
                  transform: "scale(0.65) translateY(15px)",
                  transformOrigin: "center bottom",
                }}
              />
              {/* Subtle glow effect for desktop */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 blur-2xl -z-10 scale-105 opacity-60"></div>
            </div>
          </motion.div>
        </div>
        {/* Mobile-only portrait at the bottom of HeroSection */}
        <div className="block lg:hidden mt-8 sm:mt-12 w-full flex flex-col items-center justify-center">
          <div className="relative">
          <Image
            src="/pics/mypictransparent.webp"
            alt="Hesham Badr - AI & Digital Transformation Strategist"
            width={2141}
            height={2644}
            sizes="(max-width: 640px) 9rem, (max-width: 768px) 10rem, 11rem"
            className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full shadow-xl border-2 border-primary/20 object-cover"
            style={{
              transform: "scale(0.85)",
              transformOrigin: "center center",
              objectPosition: "center 20%",
            }}
          />
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl -z-10 scale-150 sm:scale-110"></div>
          </div>
        </div>
      </div>
      {/* Trust credentials carousel - absolutely positioned at bottom of hero section (Desktop only) */}
      <div className="hidden lg:block">
        <TrustCarousel />
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 lg:h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
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
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
      `}</style>
      <style jsx>{`
        @keyframes hero-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-hero-marquee {
          animation: hero-marquee 51.1s linear infinite;
        }
        .drop-shadow-glow {
          filter: drop-shadow(0 0 6px #22d3ee88) drop-shadow(0 0 2px #0ea5e988);
        }
      `}</style>
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <style jsx>{`
        @keyframes underline-glow {
          0%, 100% { opacity: 0.7; filter: blur(1px); }
          50% { opacity: 1; filter: blur(2px); }
        }
        .animate-underline-glow {
          animation: underline-glow 2.5s ease-in-out infinite;
        }
        .text-shadow-glow {
          text-shadow: 0 2px 12px rgba(255,255,255,0.25), 0 1px 2px rgba(0,0,0,0.12);
        }
        @keyframes carousel-icon-shimmer {
          0%, 100% {
            opacity: 0.8;
            filter: brightness(1);
          }
          50% {
            opacity: 1;
            filter: brightness(1.25);
          }
        }
        .animate-carousel-icon {
          animation: carousel-icon-shimmer 2.2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
