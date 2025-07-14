"use client";

import React, { useState, useEffect, useRef } from "react";
import { Star, Building2, User, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    quote: "Hesham's charisma, communication style, and inclusive leadership made everyone feel empowered. His strategic thinking and workshop facilitation were both engaging and results-driven.",
    name: "Preeti Rawat",
    title: "Senior Product Manager",
    company: "Westpac",
    industry: "Banking & Finance",
    rating: 5,
    metric: "Inclusive Leadership"
  },
  {
    id: 2,
    quote: "Blends strategic thinking with operational excellence. Sees the big picture while delivering outcomes with detail and discipline — an invaluable asset to any transformation effort.",
    name: "Janine Modaro",
    title: "Leadership Consultant | GM",
    company: "Westpac",
    industry: "Banking & Finance",
    rating: 5,
    metric: "Strategic Excellence"
  },
  {
    id: 3,
    quote: "Hesham's natural curiosity and innovative mindset helped our entire team step into a completely new learning journey. He brought insight, leadership, and an infectious energy to every session.",
    name: "Angela Bradley",
    title: "Non-Executive Director",
    company: "GAICD",
    industry: "Corporate Governance",
    rating: 5,
    metric: "Innovation Catalyst"
  },
  {
    id: 4,
    quote: "Planted seeds of positive transformation and challenged assumptions. Created space, inspired new thinking, and brought strategic clarity that made a lasting impact.",
    name: "Michael Amsoms",
    title: "Senior Change Manager",
    company: "Westpac",
    industry: "Banking & Finance",
    rating: 5,
    metric: "Transformation Impact"
  },
  {
    id: 5,
    quote: "Hesham brings clarity to complexity like few can. His insights shaped strategic decisions and delivered real impact while managing a multimillion-dollar portfolio at Westpac. Driven, bright, and collaborative — highly recommended.",
    name: "LD Posada",
    title: "Senior Finance Partner",
    company: "Chartered Accountant",
    industry: "Financial Services",
    rating: 5,
    metric: "Strategic Decision Impact"
  },
  {
    id: 6,
    quote: "Hesham consistently demonstrated a natural ability to break down complex problems and articulate clear, data-backed recommendations for executive decision-making. What stood out most was his ability to influence collaboratively, guiding stakeholders through ambiguity and aligning diverse views without friction.",
    name: "Waleed Zafar",
    title: "Strategy & Design Lead",
    company: "Westpac",
    industry: "Banking & Finance",
    rating: 5,
    metric: "Executive Advisory"
  }
];

export const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardWidth = 320; // Reduced for better mobile fit
  const gap = 16; // Reduced gap for mobile

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const scrollLeft = () => {
    setCurrentOffset(prev => {
      const newOffset = Math.max(prev - (cardWidth + gap), 0);
      return newOffset;
    });
  };

  const scrollRight = () => {
    setCurrentOffset(prev => {
      const maxOffset = (testimonials.length - 1) * (cardWidth + gap);
      const newOffset = Math.min(prev + (cardWidth + gap), maxOffset);
      return newOffset;
    });
  };

  // Update scroll button states
  useEffect(() => {
    const maxOffset = (testimonials.length - 1) * (cardWidth + gap);
    setCanScrollLeft(currentOffset > 0);
    setCanScrollRight(currentOffset < maxOffset);
  }, [currentOffset]);

  // Handle responsive scroll on mobile/tablet
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < maxScroll);
  };

  return (
    <section className="responsive-py-lg mobile-safe-area relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-background"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container-responsive max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="responsive-text-5xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
            What Clients Say
          </h2>
          <p className="responsive-text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Trusted by industry leaders across sectors. See how we've transformed businesses worldwide.
          </p>
        </div>

        {/* Desktop Auto-scrolling + Manual Controls */}
        <div className="hidden md:block relative">
          <div 
            className="relative overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              className={`flex responsive-gap-base w-fit transition-transform duration-300 ease-in-out ${
                isPaused ? '[animation-play-state:paused]' : ''
              }`}
              style={{
                animation: 'scroll 30s linear infinite',
                transform: `translateX(-${currentOffset}px)`,
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div key={`${testimonial.id}-${index}`} className="flex-shrink-0 w-80 lg:w-96">
                  <Card className="relative border border-border/50 bg-card/50 backdrop-blur-sm responsive-card text-left group hover:border-primary/30 transition-all duration-500 h-full">
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 h-full flex flex-col">
                      {/* Stars */}
                      <div className="flex mb-3 lg:mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-3 h-3 sm:w-4 sm:h-4 text-primary fill-primary mr-0.5" 
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="responsive-text-base text-foreground mb-4 lg:mb-6 leading-relaxed font-medium flex-grow">
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Metric */}
                      <div className="mb-3 lg:mb-4">
                        <div className="inline-block responsive-px-sm responsive-py-sm bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full border border-primary/30">
                          <span className="text-primary font-semibold responsive-text-sm">
                            {testimonial.metric}
                          </span>
                        </div>
                      </div>

                      {/* Client info */}
                      <div className="flex items-center">
                        {/* Avatar placeholder */}
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-muted to-muted-foreground/20 border-2 border-primary/30 flex items-center justify-center mr-3 group-hover:border-primary/50 transition-colors duration-300">
                          <User className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
                        </div>
                        
                        <div>
                          <h4 className="responsive-text-base font-semibold text-foreground mb-0.5">
                            {testimonial.name}
                          </h4>
                          <p className="text-primary font-medium responsive-text-sm mb-1">
                            {testimonial.title}
                          </p>
                          <div className="flex items-center text-muted-foreground">
                            <Building2 className="w-3 h-3 mr-1" />
                            <span className="responsive-text-sm">
                              {testimonial.company} • {testimonial.industry}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>

            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-20 bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-20 bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>
          </div>

          {/* Manual scroll controls */}
          <div className="flex flex-col sm:flex-row justify-center items-center mt-6 lg:mt-8 responsive-gap-base">
            <Button
              variant="outline"
              size="sm"
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className="responsive-button flex items-center responsive-gap-sm disabled:opacity-50 order-2 sm:order-1"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Previous</span>
            </Button>

            <div className={`responsive-text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center responsive-gap-sm order-1 sm:order-2 ${isPaused ? 'opacity-60' : ''}`}>
              <div className={`w-2 h-2 rounded-full ${isPaused ? 'bg-muted-foreground/50' : 'bg-primary animate-pulse'}`}></div>
              <span>{isPaused ? 'Paused - Hover to pause' : 'Auto-scrolling'}</span>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={scrollRight}
              disabled={!canScrollRight}
              className="responsive-button flex items-center responsive-gap-sm disabled:opacity-50 order-3"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Mobile/Tablet Responsive Horizontal Scroll */}
        <div className="md:hidden">
          <div 
            ref={scrollContainerRef}
            className="flex responsive-gap-base overflow-x-auto scrollbar-hide pb-4 lg:pb-6"
            style={{
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth'
            }}
            onScroll={handleScroll}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex-shrink-0 w-72 sm:w-80 scroll-snap-align-start">
                <Card className="relative border border-border/50 bg-card/50 backdrop-blur-sm responsive-card text-left group hover:border-primary/30 transition-all duration-500 h-full">
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Stars */}
                    <div className="flex mb-3 lg:mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-3 h-3 sm:w-4 sm:h-4 text-primary fill-primary mr-0.5" 
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="responsive-text-base text-foreground mb-4 lg:mb-6 leading-relaxed font-medium flex-grow">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Metric */}
                    <div className="mb-3 lg:mb-4">
                      <div className="inline-block responsive-px-sm responsive-py-sm bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full border border-primary/30">
                        <span className="text-primary font-semibold responsive-text-sm">
                          {testimonial.metric}
                        </span>
                      </div>
                    </div>

                    {/* Client info */}
                    <div className="flex items-center">
                      {/* Avatar placeholder */}
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-muted to-muted-foreground/20 border-2 border-primary/30 flex items-center justify-center mr-3 group-hover:border-primary/50 transition-colors duration-300">
                        <User className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
                      </div>
                      
                      <div>
                        <h4 className="responsive-text-base font-semibold text-foreground mb-0.5">
                          {testimonial.name}
                        </h4>
                        <p className="text-primary font-medium responsive-text-sm mb-1">
                          {testimonial.title}
                        </p>
                        <div className="flex items-center text-muted-foreground">
                          <Building2 className="w-3 h-3 mr-1" />
                          <span className="responsive-text-sm">
                            {testimonial.company} • {testimonial.industry}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Mobile scroll indicator */}
          <div className="flex justify-center mt-4 lg:mt-6">
            <div className="responsive-text-sm text-muted-foreground flex items-center responsive-gap-sm">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span>Swipe to scroll</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scroll-snap-align-start {
          scroll-snap-align: start;
        }
      `}</style>
    </section>
  );
};