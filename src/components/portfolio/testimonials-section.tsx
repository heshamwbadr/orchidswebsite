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
  const touchStartTime = useRef(0);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const cardWidth = isMobile ? 300 : 320; // Smaller cards on mobile
  const gap = isMobile ? 12 : 16; // Smaller gap on mobile
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
  }, [isMounted, cardWidth, gap]);

  useEffect(() => {
    if (!isMounted) return; // Don't run animation during SSR
    
    const container = scrollRef.current;
    if (!container || isPaused || isDragging) return;

    const animate = () => {
      if (!container || isPaused || isDragging) return;
      
      const maxScroll = container.scrollWidth / 3;
      const scrollSpeed = isMobile ? 0.3 : 0.5; // Slower on mobile for better UX
      let nextScroll = container.scrollLeft + scrollSpeed;

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

  const handleMouseEnter = () => {
    if (!isMobile) setIsPaused(true);
  };
  
  const handleMouseLeave = () => {
    if (!isMobile) setIsPaused(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMounted) return;
    
    const touch = e.touches[0];
    touchStartTime.current = Date.now();
    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
    
    // Pause auto-scroll on touch start
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isMounted) return;
    
    const touchEndTime = Date.now();
    const touchDuration = touchEndTime - touchStartTime.current;
    
    // If it was a quick tap (less than 200ms), treat as tap, not drag
    if (touchDuration < 200) {
      setIsPaused(false);
      return;
    }
    
    // Resume auto-scroll after a short delay
    setTimeout(() => {
      setIsPaused(false);
    }, 1000);
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isMounted) return;
    
    // For touch events, check if it's a horizontal gesture
    if ('touches' in e) {
      const touch = e.touches[0];
      const deltaX = Math.abs(touch.clientX - touchStartX.current);
      const deltaY = Math.abs(touch.clientY - touchStartY.current);
      
      // Only start dragging if it's clearly a horizontal gesture
      if (deltaX > deltaY && deltaX > 10) {
        setIsDragging(true);
        setIsPaused(true);
        dragStartX.current = touch.clientX;
        if (scrollRef.current) {
          dragStartOffset.current = scrollRef.current.scrollLeft;
        }
      }
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
    dragStartX.current = null;
    
    const container = scrollRef.current;
    if (container) {
      const snap = Math.round(container.scrollLeft / (cardWidth + gap)) * (cardWidth + gap);
      container.scrollTo({ left: snap, behavior: "smooth" });
    }
    
    // Resume auto-scroll after drag ends
    setTimeout(() => {
      setIsPaused(false);
    }, 500);
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
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="responsive-text-4xl sm:responsive-text-5xl font-bold text-foreground mb-2 sm:mb-4">
          What Clients{" "}
          <span className="text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-clip-text">
            Say
          </span>
        </h2>
        <p className="responsive-text-lg sm:responsive-text-xl text-muted-foreground max-w-2xl mx-auto font-light">
          Trusted by leaders across industries.
        </p>
      </div>

      <div className="relative px-4 sm:px-6">
        {/* Navigation Buttons - Hidden on mobile for cleaner UX */}
        <div className="hidden sm:flex justify-between mb-4">
          <Button 
            onClick={() => scroll("left")}
            className="bg-card/60 border-border/50 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
            size="sm"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button 
            onClick={() => scroll("right")}
            className="bg-card/60 border-border/50 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
            size="sm"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide touch-pan-x cursor-grab"
          style={{ 
            WebkitOverflowScrolling: 'touch',
            touchAction: isMounted ? 'pan-x pan-y' : 'auto',
            scrollSnapType: 'x mandatory'
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={(e) => {
            handleTouchStart(e);
            // Don't prevent default to allow screen scrolling
          }}
          onTouchEnd={(e) => {
            handleTouchEnd(e);
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
              className="flex-shrink-0 snap-start"
              style={{ 
                minWidth: isMobile ? 280 : 320,
                width: isMobile ? 280 : 320
              }}
            >
              <Card className="p-4 sm:p-6 h-full bg-gradient-to-br from-card/60 via-card/40 to-secondary/60 backdrop-blur-xl border border-border/50 rounded-xl text-foreground shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 flex flex-col touch-target">
                {/* Stars */}
                <div className="mb-3 sm:mb-4 flex text-primary" aria-label={`${t.rating} out of 5 stars`}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-primary mr-1" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="responsive-text-sm sm:responsive-text-base leading-relaxed font-medium text-foreground mb-4 sm:mb-6 flex-grow line-clamp-4 sm:line-clamp-5">
                  "{t.quote}"
                </blockquote>

                {/* Metric Badge */}
                <div className="mb-3 sm:mb-4">
                  <span className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs sm:text-sm font-semibold">
                    {t.metric}
                  </span>
                </div>

                {/* Avatar and Info */}
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-primary/20 mr-3 flex-shrink-0">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-foreground responsive-text-sm sm:responsive-text-base leading-tight truncate">{t.name}</p>
                    <p className="text-primary responsive-text-xs sm:responsive-text-sm font-medium leading-snug truncate">{t.title}</p>
                    <p className="text-muted-foreground responsive-text-xs sm:responsive-text-sm mt-1 truncate">{t.company} • {t.industry}</p>
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
            scroll-snap-type: x mandatory;
          }
          
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
            transform: scale(0.98);
          }
          
          /* Improve focus states for accessibility */
          .touch-target:focus {
            outline: 2px solid #22d3ee;
            outline-offset: 2px;
          }
        }
        
        /* Line clamp utilities */
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-5 {
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Smooth scrolling for better UX */
        * {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
};