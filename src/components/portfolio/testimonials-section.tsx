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
  const [isMobile, setIsMobile] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Create infinite loop by duplicating testimonials
  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

  // Ensure component is mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Detect mobile device
  useEffect(() => {
    if (!isMounted) return;

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [isMounted]);

  // Handle touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return;

    setIsInteracting(true);
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isMobile || !touchStartX.current || !touchStartY.current) return;

    const touchX = e.touches[0].clientX;
    const touchY = e.touches[0].clientY;
    const deltaX = Math.abs(touchX - touchStartX.current);
    const deltaY = Math.abs(touchY - touchStartY.current);

    if (deltaX > deltaY && deltaX > 10) {
      // Horizontal scroll detected
      setIsInteracting(true);
    }
  };

  const handleTouchEnd = () => {
    if (!isMobile) return;

    setIsInteracting(false);
    touchStartX.current = null;
    touchStartY.current = null;

    // Resume animation after a delay
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 1500);
  };

  // Handle scroll for desktop
  const handleScroll = () => {
    if (isMobile) return;

    setIsInteracting(true);
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 1500);
  };

  // Cleanup timeout
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  // Fallback avatar
  const fallbackAvatar =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiMzNzM3MzciLz4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyMCIgcj0iOCIgZmlsbD0iIzY2NjY2NiIvPgo8cGF0aCBkPSJNOCAzNmMwLTggNy4xNi0xMiAxNi0xMnMxNiA0IDE2IDEySDh6IiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=";

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
        className={`carousel-container ${isMobile ? "mobile" : "desktop"}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onScroll={handleScroll}
      >
        <div ref={trackRef} className="carousel-track">
          {infiniteTestimonials.map((t, index) => (
            <div key={`${t.id}-${index}`} className="testimonial-card">
              <div className="metric-badge">{t.metric}</div>
              <blockquote className="quote">"{t.quote}"</blockquote>
              <div className="author-info">
                <div className="avatar-container">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    sizes="(max-width: 768px) 48px, 64px"
                    className="avatar"
                    priority={index < 4} // Prioritize first 4 images (2 sets)
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = fallbackAvatar;
                      target.classList.add("loaded");
                    }}
                    onLoad={(e) => {
                      e.currentTarget.classList.add("loaded");
                    }}
                  />
                </div>
                <div className="author-details">
                  <h3 className="text-base font-semibold mb-1">{t.name}</h3>
                  <p className="author-title">{t.title}</p>
                  <p className="company-info">
                    {t.company} • {t.industry}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .carousel-container {
          position: relative;
          padding: 0 1rem;
          max-width: 1200px;
          margin: 0 auto;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .carousel-container::-webkit-scrollbar {
          display: none;
        }

        .carousel-track {
          display: flex;
          gap: 1rem;
          will-change: transform;
          min-width: max-content;
        }

        .testimonial-card {
          flex: 0 0 clamp(280px, 90vw, 320px);
          background: #000;
          border: 1px solid #27272a;
          border-radius: 12px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          height: auto;
          min-height: 340px;
          user-select: none;
          -webkit-user-select: none;
        }

        .metric-badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          border: 1px solid #0e7490;
          background: linear-gradient(to bottom right, #164e63, #0e7490);
          color: #67e8f9;
          font-size: 0.75rem;
          font-weight: 600;
          margin-bottom: 1rem;
          align-self: flex-start;
        }

        .quote {
          font-size: 0.875rem;
          line-height: 1.5;
          font-weight: 500;
          color: white;
          margin-bottom: 1.5rem;
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
          margin-right: 0.75rem;
          flex-shrink: 0;
          background: #374151;
          overflow: hidden;
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
          margin-bottom: 0.125rem;
        }

        .author-title {
          color: #22d3ee;
          font-size: 0.75rem;
          font-weight: 500;
          margin-bottom: 0.25rem;
        }

        .company-info {
          color: #a1a1aa;
          font-size: 0.75rem;
        }

        /* Mobile behavior */
        .carousel-container.mobile {
          scroll-snap-type: x mandatory;
          touch-action: pan-x;
          -webkit-overflow-scrolling: touch;
        }

        .carousel-container.mobile .carousel-track {
          animation: ${isInteracting ? "none" : "scroll 30s linear infinite"};
        }

        .carousel-container.mobile .testimonial-card {
          scroll-snap-align: start;
        }

        /* Desktop behavior */
        .carousel-container.desktop {
          cursor: grab;
          scroll-behavior: smooth;
          scroll-snap-type: x proximity;
        }

        .carousel-container.desktop:active {
          cursor: grabbing;
        }

        .carousel-container.desktop .carousel-track {
          animation: ${isInteracting ? "none" : "scroll 30s linear infinite"};
        }

        /* Responsive styles */
        @media (min-width: 768px) {
          .testimonial-card {
            flex: 0 0 360px;
            padding: 2rem;
            min-height: 380px;
          }

          .quote {
            font-size: 1rem;
          }

          .metric-badge {
            font-size: 0.875rem;
            padding: 0.625rem 1.25rem;
          }

          .author-details h4 {
            font-size: 1rem;
          }

          .author-title,
          .company-info {
            font-size: 0.875rem;
          }
        }

        @media (min-width: 1024px) {
          .testimonial-card {
            flex: 0 0 380px;
            min-height: 400px;
          }
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-${testimonials.length * (320 + 16)}px));
          }
        }

        /* Safari fixes */
        @supports (-webkit-touch-callout: none) {
          .carousel-track {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
          }
        }

        /* Scroll indicators */
        .carousel-container.desktop::before,
        .carousel-container.desktop::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 2rem;
          pointer-events: none;
          transition: opacity 0.3s ease;
          opacity: 0;
        }

        .carousel-container.desktop::before {
          left: 0;
          background: linear-gradient(to right, rgba(0, 0, 0, 0.1), transparent);
        }

        .carousel-container.desktop::after {
          right: 0;
          background: linear-gradient(to left, rgba(0, 0, 0, 0.1), transparent);
        }

        .carousel-container.desktop:hover::before,
        .carousel-container.desktop:hover::after {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};