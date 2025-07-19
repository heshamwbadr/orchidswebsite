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
  const [hasInteracted, setHasInteracted] = useState(false);
  const animationRef = useRef<number | null>(null);
  const dragStartX = useRef<number | null>(null);
  const dragStartY = useRef<number | null>(null);
  const dragStartOffset = useRef(0);
  const lastUpdateTime = useRef(0);
  const longPressTimer = useRef<NodeJS.Timeout | null>(null);
  const isLongPress = useRef(false);
  const cardWidth = isMobile ? 320 : 380;
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

  // Simplified mobile auto-scroll initialization
  useEffect(() => {
    if (!isMounted || !isMobile) return;

    const handleFirstInteraction = () => {
      // Start auto-scroll immediately after first interaction
      setHasInteracted(true);
      setIsPaused(false);
      
      // Remove listener after first interaction
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("click", handleFirstInteraction);
    };

    // Start auto-scroll only after first interaction
    window.addEventListener("touchstart", handleFirstInteraction, { once: true });
    window.addEventListener("click", handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("click", handleFirstInteraction);
    };
  }, [isMobile, isMounted]);

  // Auto-scroll effect - now considers hasInteracted for mobile
  useEffect(() => {
    if (!isMounted) return; // Don't run animation during SSR
    
    const container = scrollRef.current;
    if (!container) return;
    
    // On mobile, only start auto-scroll after first interaction
    if (isMobile && !hasInteracted) {
      return;
    }
    
    // On mobile, only pause if actively dragging, not on touch
    const shouldPause = isPaused || (isDragging && !isMobile);
    if (shouldPause) {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      return;
    }

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
  }, [isPaused, isDragging, isMobile, isMounted, hasInteracted]);

  // Start auto-scroll immediately on desktop
  useEffect(() => {
    if (!isMounted || isMobile) return;
    
    // On desktop, start auto-scroll immediately
    setIsPaused(false);
  }, [isMounted, isMobile]);

  // Cleanup long press timer on unmount
  useEffect(() => {
    return () => {
      if (longPressTimer.current) {
        clearTimeout(longPressTimer.current);
      }
    };
  }, []);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  const handleTouchStart = () => {
    dragStartOffset.current = 0; // Reset drag offset
    isLongPress.current = false;
    
    // Clear any existing long press timer
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
    }
    
    // For mobile, start long press timer
    if (isMobile) {
      longPressTimer.current = setTimeout(() => {
        isLongPress.current = true;
        setIsPaused(true); // Only pause on long press
      }, 500); // 500ms for long press detection
    } else {
      // Desktop behavior unchanged
      setIsPaused(true);
    }
  };
  
  const handleTouchEnd = () => {
    // Clear long press timer
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
    
    if (isDragging) {
      setIsDragging(false);
      setIsPaused(false);
    } else if (isLongPress.current) {
      // If it was a long press, resume scrolling after a short delay
      isLongPress.current = false;
      setTimeout(() => {
        setIsPaused(false);
      }, 1000); // Resume after 1 second
    } else {
      // For regular touch, resume immediately
      setIsPaused(false);
    }
  };

  // Graceful scroll resumption after touch interactions
  const resumeScrollLater = () => {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => setIsPaused(false), { timeout: 2000 });
    } else {
      setTimeout(() => setIsPaused(false), 2000);
    }
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
    
    // Set dragStartOffset if not already set (for mobile gestures)
    if (dragStartOffset.current === 0) {
      dragStartOffset.current = container.scrollLeft;
    }
    
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
            // Clear long press timer on any movement
            if (longPressTimer.current) {
              clearTimeout(longPressTimer.current);
              longPressTimer.current = null;
              isLongPress.current = false;
            }
            
            const dx = dragStartX.current && e.touches[0].clientX - dragStartX.current;
            const dy = dragStartY.current && e.touches[0].clientY - dragStartY.current;

            // Determine if gesture is mostly horizontal
            if (dx && dy && Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 5) {
              setIsDragging(true);
              setIsPaused(true);
              
              // Initialize dragStartOffset if not already set
              if (dragStartOffset.current === 0 && scrollRef.current) {
                dragStartOffset.current = scrollRef.current.scrollLeft;
              }
              
              handleDragMove(e);
              e.preventDefault(); // prevent vertical scroll
            }
          }}
        >
          {seamlessTestimonials.map((t, idx) => (
            <div
              key={`${t.id}-${idx}`}
              className="flex-shrink-0 snap-start w-[320px] sm:w-[380px]"
              style={{ minWidth: 320 }}
            >
              <Card className="p-4 sm:p-6 h-full bg-black border border-zinc-800 rounded-xl text-white shadow-md flex flex-col mobile-compact-card">
                {/* Stars */}
                <div className="mb-3 sm:mb-4 flex text-cyan-400" aria-label={`${t.rating} out of 5 stars`}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-cyan-400 mr-1" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-sm sm:text-base leading-relaxed font-medium text-white mb-4 sm:mb-6 flex-grow mobile-compact-text">
                  "{t.quote}"
                </blockquote>

                {/* Metric Badge */}
                <div className="mb-3 sm:mb-4">
                  <span className="inline-block px-3 py-1 sm:px-4 rounded-full border border-cyan-700 bg-gradient-to-br from-cyan-900 to-cyan-700 text-cyan-300 text-xs sm:text-sm font-semibold">
                    {t.metric}
                  </span>
                </div>

                {/* Avatar and Info */}
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-cyan-800 mr-3 mobile-compact-avatar">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm sm:text-base leading-tight">{t.name}</p>
                    <p className="text-cyan-400 text-xs sm:text-sm font-medium leading-snug">{t.title}</p>
                    <p className="text-zinc-400 text-xs sm:text-sm mt-1">{t.company} • {t.industry}</p>
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
            scroll-behavior: smooth;
          }
          
          /* Ensure auto-scroll works smoothly on mobile */
          .flex.gap-4.overflow-x-auto {
            scroll-behavior: auto !important;
            -webkit-overflow-scrolling: touch;
            touch-action: pan-x pan-y;
          }
          
          /* Mobile-specific card optimizations */
          .mobile-compact-card {
            min-height: 280px;
            max-height: 320px;
          }
          
          .mobile-compact-text {
            line-height: 1.4;
            -webkit-line-clamp: 4;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          
          .mobile-compact-avatar {
            min-width: 40px;
            min-height: 40px;
          }
          
          /* Ensure smooth scrolling during auto-scroll */
          .flex.gap-4.overflow-x-auto.scrollbar-hide {
            scroll-behavior: auto !important;
            -webkit-overflow-scrolling: touch;
          }
        }
        
        /* Desktop auto-scroll behavior */
        @media (min-width: 769px) {
          .flex.gap-4.overflow-x-auto {
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
};