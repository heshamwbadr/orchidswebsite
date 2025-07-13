"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Brain, 
  Workflow, 
  Users, 
  ArrowRight, 
  Lightbulb, 
  Target, 
  Bot, 
  Search, 
  BarChart3, 
  Cog, 
  TrendingUp, 
  UserCheck, 
  Zap, 
  Building,
  MessageSquare,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    id: 'strategic-intelligence',
    icon: Brain,
    title: 'Strategic Intelligence & AI',
    description: 'Transform your business with AI-powered insights and intelligent automation solutions.',
    gradient: 'from-cyan-500 to-blue-600',
    services: [
      { icon: Search, text: 'AI Use Case Discovery & Prioritization' },
      { icon: Target, text: 'Strategic AI Roadmap Development' },
      { icon: Bot, text: 'Multi-Agent Assistant Implementation' },
      { icon: Lightbulb, text: 'Innovation Strategy & Ideation' },
      { icon: BarChart3, text: 'Predictive Analytics Solutions' }
    ]
  },
  {
    id: 'digital-transformation',
    icon: Workflow,
    title: 'Digital & Operational Transformation',
    description: 'Optimize processes and accelerate digital transformation through intelligent automation.',
    gradient: 'from-blue-500 to-purple-600',
    services: [
      { icon: Search, text: 'Process Mining & Optimization' },
      { icon: Cog, text: 'Automation Pipeline Design' },
      { icon: BarChart3, text: 'Real-time Analytics Dashboards' },
      { icon: TrendingUp, text: 'Performance Measurement Systems' },
      { icon: Zap, text: 'Workflow Digitization' }
    ]
  },
  {
    id: 'leadership-change',
    icon: Users,
    title: 'Leadership & Change Acceleration',
    description: 'Empowering leadership and enabling sustainable AI-powered change.',
    gradient: 'from-purple-500 to-pink-600',
    services: [
      { icon: UserCheck, text: 'Executive Coaching' },
      { icon: Building, text: 'Culture Redesign' },
      { icon: Cog, text: 'Organizational Design for AI' },
      { icon: MessageSquare, text: 'Stakeholder Alignment & Influence' },
      { icon: Lightbulb, text: 'Capability Building & Innovation' },
      { icon: MessageSquare, text: 'Change Comms Strategy' }
    ]
  }
];

export const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
      <motion.div 
        className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
        style={{ y }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 30]) }}
      ></motion.div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive consulting services designed to accelerate your digital transformation 
            and drive sustainable growth through strategic intelligence and operational excellence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredCard(service.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="h-full"
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border border-border/50 transition-all duration-500 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 group">
                  <CardHeader className="pb-6">
                    <motion.div
                      animate={hoveredCard === service.id ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 mb-4 shadow-lg group-hover:shadow-xl group-hover:shadow-cyan-500/20`}
                    >
                      <IconComponent className="w-full h-full text-white" />
                    </motion.div>
                    
                    <CardTitle className="text-2xl font-bold text-foreground group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </CardTitle>
                    
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Service List */}
                    <div className="space-y-3">
                      {service.services.map((item, itemIndex) => {
                        const ItemIcon = item.icon;
                        return (
                          <motion.div
                            key={itemIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: (index * 0.2) + (itemIndex * 0.1) }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-3 group/item"
                          >
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover/item:bg-gradient-to-br group-hover/item:from-cyan-500/30 group-hover/item:to-blue-500/30 transition-all">
                              <ItemIcon className="w-4 h-4 text-cyan-400" />
                            </div>
                            <span className="text-sm text-foreground/80 group-hover/item:text-foreground transition-colors">
                              {item.text}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="pt-6"
                    >
                      <Button 
                        variant="outline" 
                        className="w-full group border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
                      >
                        Learn More
                        <motion.div
                          animate={hoveredCard === service.id ? { x: 5 } : { x: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </motion.div>
                      </Button>
                    </motion.div>
                  </CardContent>

                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCard === service.id ? 1 : 0 }}
                  />
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Organization?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Partner with us to unlock your organization's full potential through strategic intelligence, 
              digital transformation, and leadership excellence.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open('https://calendly.com/hesham-badr-neuronovate/30min', '_blank')}
              >
                Start Your Transformation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};