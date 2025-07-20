// TestimonialsCarousel.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote:
      "Hesham's charisma, communication style, and inclusive leadership made everyone feel empowered. His strategic thinking and workshop facilitation were both engaging and results-driven.",
    name: "Preeti Rawat",
    title: "Senior Product Manager",
    company: "Westpac",
    industry: "Banking & Finance",
    rating: 5,
    metric: "Inclusive Leadership",
    image: "/testimonials/preeti.jpeg",
  },
  {
    id: 2,
    quote:
      "Blends strategic thinking with operational excellence. Sees the big picture while delivering outcomes with detail and discipline. An invaluable asset to any transformation effort.",
    name: "Janine Modaro",
    title: "Leadership Consultant | GM",
    company: "Westpac",
    industry: "Banking & Finance",
    rating: 5,
    metric: "Strategic Excellence",
    image: "/testimonials/janine.jpeg"
  },
  {
    id: 3,
    quote:
      "Hesham's natural curiosity and innovative mindset helped our entire team step into a completely new learning journey. He brought insight, leadership, and an infectious energy to every session.",
    name: "Angela Bradley",
    title: "Non-Executive Director",
    company: "GAICD",
    industry: "Corporate Governance",
    rating: 5,
    metric: "Innovation Catalyst",
    image: "/testimonials/angela.jpeg",
  },
  {
    id: 4,
    quote:
      "Planted seeds of positive transformation and challenged assumptions. Created space, inspired new thinking, and brought strategic clarity that made a lasting impact.",
    name: "Michael Amsoms",
    title: "Senior Change Manager",
    company: "Westpac",
    industry: "Banking & Finance",
    rating: 5,
    metric: "Transformation Impact",
    image: "/testimonials/michael.jpeg",
  },
  {
    id: 5,
    quote:
      "Hesham brings clarity to complexity like few can. His insights shaped strategic decisions and delivered real impact while managing a multimillion-dollar portfolio at Westpac. Driven, bright, and collaborative. Highly recommended.",
    name: "LD Posada",
    title: "Senior Finance Partner",
    company: "Chartered Accountant",
    industry: "Finance",
    rating: 5,
    metric: "Strategic Decision Impact",
    image: "/testimonials/LD.jpeg",
  },
  {
    id: 6,
    quote:
      "Hesham consistently demonstrated a natural ability to break down complex problems and articulate clear, data-backed recommendations for executive decision-making. What stood out most was his ability to influence collaboratively.",
    name: "Waleed Zafar",
    title: "Strategy & Design Lead",
    company: "Westpac",
    industry: "Banking & Finance",
    rating: 5,
    metric: "Executive Advisory",
    image: "/testimonials/Waleed.jpeg",
  },
];

export const Testimonials = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Ensure component is mounted before accessing window
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle touch events for mobile
  const handleTouchStart = () => {
    setIsTouching(true);
    if (carouselRef.current) {
      carouselRef.current.classList.add('touching');
    }
  };

  const handleTouchEnd = () => {
    setIsTouching(false);
    if (carouselRef.current) {
      carouselRef.current.classList.remove('touching');
    }
  };

  // Handle scroll events for desktop
  const handleScroll = () => {
    setIsScrolling(true);
    if (carouselRef.current) {
      carouselRef.current.classList.add('manual-scroll');
    }
    
    // Clear existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    // Reset after scrolling stops
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
      if (carouselRef.current) {
        carouselRef.current.classList.remove('manual-scroll');
      }
    }, 1500); // Resume auto-scroll 1.5s after user stops scrolling
  };

  // Handle mouse enter/leave for desktop
  const handleMouseEnter = () => {
    if (carouselRef.current) {
      carouselRef.current.classList.add('hovered');
    }
  };

  const handleMouseLeave = () => {
    if (carouselRef.current) {
      carouselRef.current.classList.remove('hovered');
    }
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Fallback avatar for image loading errors
  const fallbackAvatar = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiMzNzM3MzciLz4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyMCIgcj0iOCIgZmlsbD0iIzY2NjY2NiIvPgo8cGF0aCBkPSJNOCAzNmMwLTggNy4xNi0xMiAxNi0xMnMxNiA0IDE2IDEySDh6IiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=";

  return (
    <section id="testimonials" className="scroll-mt-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">What Clients Say</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Trusted by leaders across industries.
        </p>
      </div>

      <div 
        ref={carouselRef}
        className="carousel-container"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onScroll={handleScroll}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div ref={trackRef} className="carousel-track">
          {/* First set */}
          {testimonials.map((t) => (
            <div key={`first-${t.id}`} className="testimonial-card">
              <div className="metric-badge">{t.metric}</div>
              <blockquote className="quote">"{t.quote}"</blockquote>
              <div className="author-info">
                <div className="avatar-container">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="avatar"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = fallbackAvatar;
                    }}
                  />
                </div>
                <div className="author-details">
                  <h4>{t.name}</h4>
                  <p className="author-title">{t.title}</p>
                  <p className="company-info">{t.company} • {t.industry}</p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Second set */}
          {testimonials.map((t) => (
            <div key={`second-${t.id}`} className="testimonial-card">
              <div className="metric-badge">{t.metric}</div>
              <blockquote className="quote">"{t.quote}"</blockquote>
              <div className="author-info">
                <div className="avatar-container">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="avatar"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = fallbackAvatar;
                    }}
                  />
                </div>
                <div className="author-details">
                  <h4>{t.name}</h4>
                  <p className="author-title">{t.title}</p>
                  <p className="company-info">{t.company} • {t.industry}</p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Third set */}
          {testimonials.map((t) => (
            <div key={`third-${t.id}`} className="testimonial-card">
              <div className="metric-badge">{t.metric}</div>
              <blockquote className="quote">"{t.quote}"</blockquote>
              <div className="author-info">
                <div className="avatar-container">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="avatar"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = fallbackAvatar;
                    }}
                  />
                </div>
                <div className="author-details">
                  <h4>{t.name}</h4>
                  <p className="author-title">{t.title}</p>
                  <p className="company-info">{t.company} • {t.industry}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .carousel-container {
          position: relative;
          overflow-x: auto;
          overflow-y: hidden;
          padding: 0 16px;
          cursor: grab;
          max-width: 1200px;
          margin: 0 auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-behavior: smooth;
        }
        
        .carousel-container::-webkit-scrollbar {
          display: none;
        }
        
        .carousel-container:active {
          cursor: grabbing;
        }
        
        .carousel-track {
          display: flex;
          gap: 16px;
          animation: scroll 45s linear infinite;
          width: calc(300% + 32px);
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          min-width: max-content;
        }
        
        .testimonial-card {
          flex: 0 0 320px;
          background: #000;
          border: 1px solid #27272a;
          border-radius: 12px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          height: 380px;
          position: relative;
          user-select: none;
          -webkit-user-select: none;
        }
        
        .metric-badge {
          display: inline-block;
          padding: 8px 16px;
          border-radius: 9999px;
          border: 1px solid #0e7490;
          background: linear-gradient(to bottom right, #164e63, #0e7490);
          color: #67e8f9;
          font-size: 0.75rem;
          font-weight: 600;
          margin-bottom: 16px;
          align-self: flex-start;
        }
        
        .quote {
          font-size: 0.875rem;
          line-height: 1.5;
          font-weight: 500;
          color: white;
          margin-bottom: 24px;
          flex-grow: 1;
        }
        
        .author-info {
          display: flex;
          align-items: center;
          margin-top: auto;
        }
        
        .avatar-container {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 2px solid #155e75;
          margin-right: 12px;
          flex-shrink: 0;
          background: #374151;
          overflow: hidden;
          position: relative;
        }
        
        .avatar {
          object-fit: cover;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }
        
        .avatar.loaded {
          opacity: 1;
        }
        
        .author-details h4 {
          font-weight: 600;
          color: white;
          font-size: 0.875rem;
          line-height: 1.2;
          margin-bottom: 2px;
        }
        
        .author-title {
          color: #22d3ee;
          font-size: 0.75rem;
          font-weight: 500;
          line-height: 1.2;
          margin-bottom: 4px;
        }
        
        .company-info {
          color: #a1a1aa;
          font-size: 0.75rem;
        }
        
        /* Desktop scrollable behavior */
        @media (min-width: 769px) {
          .carousel-container {
            scroll-snap-type: x proximity;
            cursor: grab;
          }
          
          .carousel-container:active {
            cursor: grabbing;
          }
          
          .testimonial-card {
            flex: 0 0 380px;
            padding: 32px;
            height: 420px;
            scroll-snap-align: start;
          }
          
          .quote {
            font-size: 1rem;
          }
          
          .metric-badge {
            font-size: 0.875rem;
            padding: 10px 20px;
            margin-bottom: 20px;
          }
          
          .author-details h4 {
            font-size: 1rem;
          }
          
          .author-title {
            font-size: 0.875rem;
          }
          
          .company-info {
            font-size: 0.875rem;
          }
          
          /* Pause animation on hover and manual scroll */
          .carousel-container:hover .carousel-track,
          .carousel-container.manual-scroll .carousel-track {
            animation-play-state: paused;
          }
          
          /* Resume animation when not hovering and not manually scrolling */
          .carousel-container:not(:hover):not(.manual-scroll) .carousel-track {
            animation-play-state: running;
          }
        }
        
        /* Mobile touch handling */
        @media (max-width: 768px) {
          .carousel-track {
            animation-duration: 60s;
            touch-action: pan-x;
            -webkit-overflow-scrolling: touch;
          }
          
          .carousel-container {
            scroll-snap-type: x mandatory;
          }
          
          .testimonial-card {
            scroll-snap-align: start;
          }
          
          /* Pause animation when actively touching */
          .carousel-container.touching .carousel-track {
            animation-play-state: paused;
          }
          
          /* Don't pause on hover for touch devices */
          .carousel-container:hover .carousel-track {
            animation-play-state: running;
          }
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        
        /* Smooth scrolling fallback */
        .carousel-container.manual-scroll .carousel-track {
          transition: transform 0.3s ease-out;
        }
        
        /* Safari-specific fixes */
        @supports (-webkit-touch-callout: none) {
          .carousel-track {
            -webkit-overflow-scrolling: touch !important;
            -webkit-transform: translateZ(0) !important;
            transform: translateZ(0) !important;
          }
        }
        
        /* Scroll indicator for desktop */
        .carousel-container::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 20px;
          background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.1));
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .carousel-container:hover::after {
          opacity: 1;
        }
        
        /* Left scroll indicator */
        .carousel-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 20px;
          background: linear-gradient(to left, transparent, rgba(0, 0, 0, 0.1));
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }
        
        .carousel-container:hover::before {
          opacity: 1;
        }
      `}</style>

      <script dangerouslySetInnerHTML={{
        __html: `
          // Add fade-in effect for images
          document.addEventListener('DOMContentLoaded', function() {
            const images = document.querySelectorAll('.avatar');
            images.forEach(img => {
              img.addEventListener('load', function() {
                this.classList.add('loaded');
              });
              img.addEventListener('error', function() {
                this.classList.add('loaded');
              });
            });
          });
        `
      }} />
    </section>
  );
};