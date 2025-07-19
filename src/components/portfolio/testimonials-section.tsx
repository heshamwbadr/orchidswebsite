// TestimonialsCarousel.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Star, Building2, User, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
      "Hesham consistently demonstrated a natural ability to break down complex problems and articulate clear, data-backed recommendations for executive decision-making. What stood out most was his ability to influence collaboratively, guiding stakeholders through ambiguity and aligning diverse views without friction.",
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const animationRef = useRef<number | null>(null);
  const dragStartX = useRef<number | null>(null);
  const dragStartY = useRef<number | null>(null);
  const dragStartOffset = useRef(0);
  const lastUpdateTime = useRef(0);
  const cardWidth = 320;
  const gap = 16;
  const seamlessTestimonials = [...testimonials, ...testimonials, ...testimonials];
  const singleLoopWidth = (seamlessTestimonials.length / 3) * (cardWidth + gap);

  // Ensure component is mounted before accessing window
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Detect mobile device only after mounting
  useEffect(() => {
    if (!isMounted) return;
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted) return; // Don't run during SSR
    
    const container = scrollRef.current;
    if (container) container.scrollLeft = cardWidth + gap;
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted) return; // Don't run animation during SSR
    
    const container = scrollRef.current;
    // On mobile, only pause if actively dragging, not on touch
    const shouldPause = isPaused || (isDragging && !isMobile);
    if (!container || shouldPause) return;

    const animate = () => {
      if (!container) return;
      const maxScroll = container.scrollWidth / 3;
      let nextScroll = container.scrollLeft + 0.5;

      if (nextScroll >= maxScroll * 2) {
        container.scrollLeft = maxScroll;
      } else {
        container.scrollLeft = nextScroll;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPaused, isDragging, isMobile, isMounted]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  const handleTouchStart = () => {
    // Don't pause auto-scrolling on mobile touch start
    // This allows the carousel to continue auto-scrolling on mobile
  };
  const handleTouchEnd = () => {
    // Only reset dragging if we were actually dragging
    if (isDragging) {
      setIsDragging(false);
      setIsPaused(false);
    }
    // Don't add delay for mobile - let auto-scrolling continue immediately
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    // For touch events, only start dragging if it's a clear horizontal gesture
    if ('touches' in e) {
      const touch = e.touches[0];
      const touchStartY = touch.clientY;
      const touchStartX = touch.clientX;
      
      // Store initial touch position for gesture detection
      dragStartX.current = touchStartX;
      dragStartY.current = touchStartY;
      
      // Don't immediately start dragging on touch
      return;
    }
    
    // For mouse events, start dragging immediately
    setIsDragging(true);
    setIsPaused(true);
    const clientX = (e as React.MouseEvent).clientX;
    dragStartX.current = clientX;
    if (scrollRef.current) {
      dragStartOffset.current = scrollRef.current.scrollLeft;
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setIsPaused(false);
    dragStartX.current = null;
    const container = scrollRef.current;
    if (container) {
      const snap = Math.round(container.scrollLeft / (cardWidth + gap)) * (cardWidth + gap);
      container.scrollTo({ left: snap, behavior: "smooth" });
    }
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || dragStartX.current === null) return;
    const container = scrollRef.current;
    if (!container) return;
    const clientX = 'clientX' in e ? e.clientX : e.touches[0].clientX;
    const dx = dragStartX.current - clientX;
    let newOffset = dragStartOffset.current + dx;
    const maxScroll = container.scrollWidth / 3;

    if (newOffset < 0) {
      newOffset += maxScroll;
      container.scrollLeft = maxScroll;
    } else if (newOffset >= maxScroll * 2) {
      newOffset -= maxScroll;
    }

    container.scrollLeft = newOffset;
  };

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap);
    let newScroll = container.scrollLeft + scrollAmount;
    const maxScroll = container.scrollWidth / 3;
    if (newScroll < 0) newScroll += maxScroll;
    if (newScroll >= maxScroll * 2) newScroll -= maxScroll;
    container.scrollTo({ left: newScroll, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="scroll-mt-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">What Clients Say</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Trusted by leaders across industries.
        </p>
      </div>

      <div className="relative px-4">
        <div className="flex justify-between mb-4">
          <Button onClick={() => scroll("left")}><ChevronLeft /></Button>
          <Button onClick={() => scroll("right")}><ChevronRight /></Button>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide touch-pan-x cursor-grab"
          style={{ 
            WebkitOverflowScrolling: 'touch',
            touchAction: isMounted ? 'pan-x pan-y' : 'auto' // Only set on client-side
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={(e) => {
            handleTouchStart();
            // Don't prevent default to allow screen scrolling
          }}
          onTouchEnd={(e) => {
            handleTouchEnd();
            // Don't prevent default to allow screen scrolling
          }}
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onMouseMove={handleDragMove}
          onTouchMove={(e) => {
            // Only handle drag if we're actually dragging, otherwise let screen scroll
            if (isDragging) {
              e.preventDefault();
              handleDragMove(e);
            }
          }}
        >
          {seamlessTestimonials.map((t, idx) => (
            <div
              key={`${t.id}-${idx}`}
              className="flex-shrink-0 snap-start w-[380px]"
              style={{ minWidth: 380 }}
            >
              <Card className="p-6 h-full bg-black border border-zinc-800 rounded-xl text-white shadow-md flex flex-col">
                {/* Stars */}
                <div className="mb-4 flex text-cyan-400" aria-label={`${t.rating} out of 5 stars`}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-cyan-400 mr-1" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-base leading-relaxed font-medium text-white mb-6 flex-grow">
                  "{t.quote}"
                </blockquote>

                {/* Metric Badge */}
                <div className="mb-4">
                  <span className="inline-block px-4 py-1 rounded-full border border-cyan-700 bg-gradient-to-br from-cyan-900 to-cyan-700 text-cyan-300 text-sm font-semibold">
                    {t.metric}
                  </span>
                </div>

                {/* Avatar and Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-800 mr-3">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-base leading-tight">{t.name}</p>
                    <p className="text-cyan-400 text-sm font-medium leading-snug">{t.title}</p>
                    <p className="text-zinc-400 text-sm mt-1">{t.company} • {t.industry}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .cursor-grab:active {
          cursor: grabbing;
        }
        
        /* Mobile touch behavior */
        @media (max-width: 768px) {
          .touch-pan-x {
            touch-action: pan-x pan-y;
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </section>
  );
};