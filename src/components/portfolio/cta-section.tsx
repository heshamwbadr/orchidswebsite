"use client";

import React, { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Check, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  recaptcha?: string;
}

const processSteps = [
  {
    title: "Understand Your Challenge",
    description:
      "We dive deep into your specific situation, goals, and constraints to get a complete picture.",
  },
  {
    title: "Assess Your Readiness",
    description:
      "We evaluate your current capabilities, resources, and organizational readiness for change.",
  },
  {
    title: "Shape a Targeted Plan",
    description:
      "We develop a customized roadmap that aligns with your timeline and business objectives.",
  },
  {
    title: "Align our Next Moves",
    description:
      "We establish clear next steps and mutual expectations for moving forward together.",
  },
];

const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), { ssr: false });

export const CTASection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    // Only validate reCAPTCHA if it's enabled
    if (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && !recaptchaValue) {
      newErrors.recaptcha = "Please verify you are not a robot.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", company: "", message: "" });
      setRecaptchaValue(null);
    }, 3000);
  };

  return (
    <section
      style={{ backgroundColor: "#0A0A0B" }}
      className="relative responsive-py-lg mobile-safe-area overflow-hidden mb-24 lg:mb-32"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-yellow-500/5" />

      <div className="container-responsive max-w-7xl relative z-10">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="responsive-text-4xl lg:responsive-text-5xl font-light text-white mb-4 lg:mb-6">
            Just fill in the form, and we'll take it from there.
          </h2>
        </motion.div>

        {/* Two-column layout - becomes single column on mobile */}
        <div className="grid lg:grid-cols-2 responsive-gap-lg items-start">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <div
              className="responsive-card rounded-2xl border backdrop-blur-sm"
              style={{
                backgroundColor: "rgba(26, 26, 26, 0.8)",
                borderColor: "#262626",
              }}
            >
              {!isSubmitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 lg:space-y-6"
                >
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-white font-light responsive-text-base"
                    >
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className="responsive-button bg-black/50 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-500 transition-colors"
                      style={{ backgroundColor: "#1A1A1A" }}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 responsive-text-sm"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-white font-light responsive-text-base"
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="responsive-button bg-black/50 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-500 transition-colors"
                      style={{ backgroundColor: "#1A1A1A" }}
                      placeholder="your.email@company.com"
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 responsive-text-sm"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </div>

                  {/* Company Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="company"
                      className="text-white font-light responsive-text-base"
                    >
                      Company *
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        handleInputChange("company", e.target.value)
                      }
                      className="responsive-button bg-black/50 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-500 transition-colors"
                      style={{ backgroundColor: "#1A1A1A" }}
                      placeholder="Your company name"
                    />
                    {errors.company && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 responsive-text-sm"
                      >
                        {errors.company}
                      </motion.p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-white font-light responsive-text-base"
                    >
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      className="min-h-[100px] sm:min-h-[120px] bg-black/50 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-500 transition-colors resize-none responsive-text-base"
                      style={{ backgroundColor: "#1A1A1A" }}
                      placeholder="Tell us about your challenge, timeline, and what you're hoping to achieve..."
                    />
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 responsive-text-sm"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </div>

                  {/* reCAPTCHA */}
                  {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
                    <div className="my-4 flex justify-center">
                      <ReCAPTCHA
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                        onChange={setRecaptchaValue}
                        theme="dark"
                      />
                    </div>
                  )}
                  {errors.recaptcha && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 responsive-text-sm text-center"
                    >
                      {errors.recaptcha}
                    </motion.p>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="responsive-button w-full responsive-text-lg font-light bg-gradient-to-r from-secondary to-primary hover:from-secondary/80 hover:to-primary/80 text-primary-foreground transition-all duration-300 hover:shadow-lg relative group overflow-hidden border-none touch-target"
                  >
                    {isSubmitting ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center responsive-gap-sm relative z-10"
                      >
                        <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                        <span>Sending...</span>
                      </motion.div>
                    ) : (
                      <div className="flex items-center responsive-gap-sm relative z-10">
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center responsive-py-lg"
                >
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{ backgroundColor: "#10B981" }}
                  >
                    <Check className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="responsive-text-2xl font-light text-white mb-2">
                    Message Sent!
                  </h3>
                  <p
                    className="responsive-text-base"
                    style={{ color: "#A1A1AA" }}
                  >
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Right Column - Content + Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2 flex flex-col lg:flex-row responsive-gap-lg h-full"
          >
            {/* Left side of RHS - Process Steps */}
            <div className="flex-1">
              <h3 className="responsive-text-xl font-light text-white mb-4 lg:mb-6">
                Here's what happens next:
              </h3>
              <div className="space-y-3 lg:space-y-4">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start responsive-gap-sm group cursor-default"
                  >
                    <div
                      className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: "#10B981" }}
                    >
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                    </div>
                    <div>
                      <h4 className="responsive-text-base font-medium text-white mb-1 group-hover:text-yellow-500 transition-colors">
                        {step.title}
                      </h4>
                      <p
                        className="responsive-text-sm font-light"
                        style={{ color: "#A1A1AA" }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right side of RHS - Photo + Quote */}
            <div className="flex-shrink-0 w-full lg:w-80 flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center justify-center"
              >
                <img
                  src="/pics/mypictransparent-576.webp"
                  srcSet="/pics/mypictransparent-576.webp 576w, /pics/mypictransparent.webp 1200w"
                  sizes="(max-width: 768px) 576px, 1200px"
                  alt="Professional headshot"
                  className="responsive-image-contain w-full h-auto max-w-full"
                  style={{ transform: "scale(0.7) sm:scale(0.8)" }}
                />
              </motion.div>

              {/* Quote section under the photo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-4 lg:mt-6 text-center w-full"
              >
                <blockquote
                  className="responsive-text-sm italic font-light mx-auto max-w-lg"
                  style={{ color: "#A1A1AA" }}
                >
                  "In a sea of flashy decks and half-built pilots, I’ve built trust by turning strategy into results across boardrooms and front lines."
                </blockquote>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
