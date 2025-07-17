"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Send,
  CheckCircle,
  User,
  MessageSquare,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { openCalendlyPopup } from "@/lib/calendly";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", company: "", message: "" });

      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 2000);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleScheduleConsultation = () => {
    openCalendlyPopup();
  };

  return (
    <section id="contact" className="hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl hidden lg:block"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full blur-3xl hidden lg:block"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Ready to Start Section - Moved to Top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="max-w-4xl mx-auto mb-8 lg:mb-12 p-6 lg:p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl lg:rounded-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 lg:mb-4 bg-gradient-to-r from-primary via-white to-secondary bg-clip-text text-transparent">
              Ready to Start?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 lg:mb-6 leading-relaxed">
              Schedule a free 30-minute consultation to discuss your project and
              explore how we can work together to transform your business with
              AI.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground font-semibold px-6 sm:px-8 py-3 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto touch-target"
              onClick={handleScheduleConsultation}
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Schedule Consultation
            </Button>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-primary via-white to-secondary bg-clip-text text-transparent">
            Let's Connect
          </h3>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Or send me a message using the form below and I'll get back to you
            within 24 hours.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-4 sm:p-6 lg:p-8 bg-card/50 backdrop-blur-sm border-border/50 shadow-2xl">
              <CardContent className="p-0">
                <div className="mb-6 lg:mb-8">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 lg:mb-3">
                    Send a Message
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Fill out the form below and I'll get back to you within 24
                    hours.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="text-center py-8 lg:py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.2,
                          type: "spring",
                          stiffness: 200,
                        }}
                      >
                        <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-400 mx-auto mb-4" />
                      </motion.div>
                      <h4 className="text-lg sm:text-xl font-semibold mb-2">
                        Thank You!
                      </h4>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        Your message has been sent successfully. I'll get back
                        to you soon.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 1 }}
                      onSubmit={handleSubmit}
                      className="space-y-4 lg:space-y-6"
                    >
                      {/* Name Field */}
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">
                          Name *
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={(e) =>
                              handleInputChange("name", e.target.value)
                            }
                            className={`pl-10 h-11 sm:h-12 bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 focus:ring-2 transition-all duration-300 text-sm sm:text-base touch-target ${
                              errors.name
                                ? "border-red-400 focus:border-red-400"
                                : ""
                            }`}
                            placeholder="Your full name"
                          />
                        </div>
                        {errors.name && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-400 text-sm"
                          >
                            {errors.name}
                          </motion.p>
                        )}
                      </div>

                      {/* Email Field */}
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email *
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              handleInputChange("email", e.target.value)
                            }
                            className={`pl-10 h-11 sm:h-12 bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 focus:ring-2 transition-all duration-300 text-sm sm:text-base touch-target ${
                              errors.email
                                ? "border-red-400 focus:border-red-400"
                                : ""
                            }`}
                            placeholder="your@email.com"
                          />
                        </div>
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-400 text-sm"
                          >
                            {errors.email}
                          </motion.p>
                        )}
                      </div>

                      {/* Company Field */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="company"
                          className="text-sm font-medium"
                        >
                          Company
                        </Label>
                        <div className="relative">
                          <Input
                            id="company"
                            type="text"
                            value={formData.company}
                            onChange={(e) =>
                              handleInputChange("company", e.target.value)
                            }
                            className="pl-4 h-11 sm:h-12 bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 focus:ring-2 transition-all duration-300 text-sm sm:text-base touch-target"
                            placeholder="Your company name"
                          />
                        </div>
                      </div>

                      {/* Message Field */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="message"
                          className="text-sm font-medium"
                        >
                          Message *
                        </Label>
                        <div className="relative">
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) =>
                              handleInputChange("message", e.target.value)
                            }
                            className={`pl-4 pt-3 min-h-[100px] sm:min-h-[120px] bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 focus:ring-2 transition-all duration-300 resize-none text-sm sm:text-base touch-target ${
                              errors.message
                                ? "border-red-400 focus:border-red-400"
                                : ""
                            }`}
                            placeholder="Tell me about your project, goals, or how I can help..."
                          />
                        </div>
                        {errors.message && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-400 text-sm"
                          >
                            {errors.message}
                          </motion.p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          disabled={isLoading}
                          className="w-full h-11 sm:h-12 bg-gradient-to-r from-secondary to-primary hover:from-secondary/80 hover:to-primary/80 text-primary-foreground font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base touch-target"
                        >
                          {isLoading ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full"
                            />
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
