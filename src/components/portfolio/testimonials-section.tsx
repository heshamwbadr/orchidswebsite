"use client";

import React, { useState, useEffect, useRef } from "react";
import { Star, Building2, User, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    quote: "Their strategic insights transformed our digital infrastructure completely. We saw a 340% increase in operational efficiency within the first quarter.",
    name: "Sarah Chen",
    title: "Chief Technology Officer",
    company: "TechVision Corp",
    industry: "Enterprise Software",
    rating: 5,
    metric: "340% efficiency gain"
  },
  {
    id: 2,
    quote: "The consulting team delivered exceptional results. Our cloud migration project finished 2 months ahead of schedule and under budget.",
    name: "Michael Rodriguez",
    title: "VP of Engineering",
    company: "DataFlow Systems",
    industry: "Financial Services",
    rating: 5,
    metric: "2 months early delivery"
  },
  {
    id: 3,
    quote: "Outstanding expertise in AI implementation. We reduced processing time by 85% and improved customer satisfaction scores significantly.",
    name: "Dr. Emily Watson",
    title: "Chief Executive Officer",
    company: "InnovateLab",
    industry: "Healthcare Technology",
    rating: 5,
    metric: "85% time reduction"
  },
  {
    id: 4,
    quote: "Their cybersecurity framework protected us from multiple threats. A truly comprehensive solution that exceeded our expectations.",
    name: "James Thompson",
    title: "Chief Information Officer",
    company: "SecureBank",
    industry: "Banking & Finance",
    rating: 5,
    metric: "Zero security incidents"
  },
  {
    id: 5,
    quote: "Phenomenal business transformation results. Our digital adoption increased by 250% and revenue grew by 180% year-over-year.",
    name: "Lisa Park",
    title: "Chief Operating Officer",
    company: "GlobalTech Solutions",
    industry: "Manufacturing",
    rating: 5,
    metric: "180% revenue growth"
  },
  {
    id: 6,
    quote: "The most professional consulting experience we've had. Their team delivered a scalable architecture that supports our rapid growth.",
    name: "Robert Kim",
    title: "Chief Technology Officer",
    company: "ScaleUp Dynamics",
    industry: "E-commerce",
    rating: 5,
    metric: "5x scalability improvement"
  }
];

export const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardWidth = 384; // w-96 = 384px
  const gap = 24; // gap-6 = 24px

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
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-background"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
            What Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
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
              className={`flex gap-6 w-fit transition-transform duration-300 ease-in-out ${
                isPaused ? '[animation-play-state:paused]' : ''
              }`}
              style={{
                animation: 'scroll 30s linear infinite',
                transform: `translateX(-${currentOffset}px)`,
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div key={`${testimonial.id}-${index}`} className="flex-shrink-0 w-96">
                  <Card className="relative border border-border/50 bg-card/50 backdrop-blur-sm p-6 text-left group hover:border-primary/30 transition-all duration-500 h-full">
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 h-full flex flex-col">
                      {/* Stars */}
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-4 h-4 text-primary fill-primary mr-0.5" 
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-base text-foreground mb-6 leading-relaxed font-medium flex-grow">
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Metric */}
                      <div className="mb-4">
                        <div className="inline-block px-3 py-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full border border-primary/30">
                          <span className="text-primary font-semibold text-sm">
                            {testimonial.metric}
                          </span>
                        </div>
                      </div>

                      {/* Client info */}
                      <div className="flex items-center">
                        {/* Avatar placeholder */}
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-muted to-muted-foreground/20 border-2 border-primary/30 flex items-center justify-center mr-3 group-hover:border-primary/50 transition-colors duration-300">
                          <User className="w-6 h-6 text-muted-foreground" />
                        </div>
                        
                        <div>
                          <h4 className="text-base font-semibold text-foreground mb-0.5">
                            {testimonial.name}
                          </h4>
                          <p className="text-primary font-medium text-sm mb-1">
                            {testimonial.title}
                          </p>
                          <div className="flex items-center text-muted-foreground">
                            <Building2 className="w-3 h-3 mr-1" />
                            <span className="text-xs">
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
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>
          </div>

          {/* Manual scroll controls */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className="flex items-center gap-2 disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            <div className={`text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center space-x-2 ${isPaused ? 'opacity-60' : ''}`}>
              <div className={`w-2 h-2 rounded-full ${isPaused ? 'bg-muted-foreground/50' : 'bg-primary animate-pulse'}`}></div>
              <span>{isPaused ? 'Paused - Hover to pause' : 'Auto-scrolling'}</span>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={scrollRight}
              disabled={!canScrollRight}
              className="flex items-center gap-2 disabled:opacity-50"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Mobile/Tablet Responsive Horizontal Scroll */}
        <div className="md:hidden">
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-6"
            style={{
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth'
            }}
            onScroll={handleScroll}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex-shrink-0 w-80 scroll-snap-align-start">
                <Card className="relative border border-border/50 bg-card/50 backdrop-blur-sm p-6 text-left group hover:border-primary/30 transition-all duration-500 h-full">
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Stars */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-4 h-4 text-primary fill-primary mr-0.5" 
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-base text-foreground mb-6 leading-relaxed font-medium flex-grow">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Metric */}
                    <div className="mb-4">
                      <div className="inline-block px-3 py-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full border border-primary/30">
                        <span className="text-primary font-semibold text-sm">
                          {testimonial.metric}
                        </span>
                      </div>
                    </div>

                    {/* Client info */}
                    <div className="flex items-center">
                      {/* Avatar placeholder */}
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-muted to-muted-foreground/20 border-2 border-primary/30 flex items-center justify-center mr-3 group-hover:border-primary/50 transition-colors duration-300">
                        <User className="w-6 h-6 text-muted-foreground" />
                      </div>
                      
                      <div>
                        <h4 className="text-base font-semibold text-foreground mb-0.5">
                          {testimonial.name}
                        </h4>
                        <p className="text-primary font-medium text-sm mb-1">
                          {testimonial.title}
                        </p>
                        <div className="flex items-center text-muted-foreground">
                          <Building2 className="w-3 h-3 mr-1" />
                          <span className="text-xs">
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
          <div className="flex justify-center mt-6">
            <div className="text-sm text-muted-foreground flex items-center space-x-2">
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