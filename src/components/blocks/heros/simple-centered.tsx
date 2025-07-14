"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Menu, X, Brain, Zap, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

// Animated background pattern component
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Neural network style connections */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 1000 1000"
      >
        <defs>
          <pattern
            id="neural-grid"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="50" cy="50" r="1" fill="#FFD700" opacity="0.3">
              <animate
                attributeName="opacity"
                values="0.3;0.8;0.3"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#neural-grid)" />

        {/* Animated connection lines */}
        {[...Array(5)].map((_, i) => (
          <motion.line
            key={i}
            x1={Math.random() * 1000}
            y1={Math.random() * 1000}
            x2={Math.random() * 1000}
            y2={Math.random() * 1000}
            stroke="#007AFF"
            strokeWidth="0.5"
            opacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.5,
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default function SimpleCentered() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#0A0A0B] min-h-screen relative">
      <AnimatedBackground />

      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Hesham Badr</span>
              <div className="flex items-center gap-2">
                <Brain className="h-8 w-8 text-[#FFD700]" />
                <span className="text-white font-[var(--font-display)] font-semibold text-xl">
                  Hesham Badr
                </span>
              </div>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Menu aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm/6 font-medium text-white hover:text-[#FFD700] transition-colors font-[var(--font-body)]"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#contact"
              className="text-sm/6 font-medium text-[#007AFF] hover:text-white transition-colors font-[var(--font-body)]"
            >
              Get in touch <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#0A0A0B] p-6 sm:max-w-sm sm:ring-1 sm:ring-[#262626]">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Hesham Badr</span>
                <div className="flex items-center gap-2">
                  <Brain className="h-8 w-8 text-[#FFD700]" />
                  <span className="text-white font-[var(--font-display)] font-semibold text-xl">
                    Hesham Badr
                  </span>
                </div>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-white"
              >
                <span className="sr-only">Close menu</span>
                <X aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-[#262626]">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium text-white hover:bg-[#1A1A1B] font-[var(--font-body)]"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#contact"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-medium text-[#007AFF] hover:bg-[#1A1A1B] font-[var(--font-body)]"
                  >
                    Get in touch
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Left side - Content */}
            <div className="text-center lg:text-left">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center lg:justify-start">
                <motion.div
                  className="relative rounded-full px-4 py-2 text-sm/6 text-[#A1A1AA] ring-1 ring-[#262626] hover:ring-[#FFD700] transition-colors bg-[#1A1A1B]/50 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-[#007AFF]" />
                    <span className="font-[var(--font-body)]">
                      Strategic AI Implementation Expert
                    </span>
                  </div>
                </motion.div>
              </div>

              <motion.h1
                className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl font-[var(--font-display)]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Turning strategy into{" "}
                <span className="text-[#FFD700] relative">
                  real-world impact
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#FFD700] to-[#007AFF]"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </span>{" "}
                with AI
              </motion.h1>

              <motion.p
                className="mt-8 text-lg font-medium text-[#A1A1AA] sm:text-xl/8 font-[var(--font-body)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                AI & Digital Transformation Strategist helping Fortune 500
                companies navigate the future of business. Transforming complex
                challenges into scalable solutions that drive measurable growth
                and competitive advantage.
              </motion.p>

              <motion.div
                className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <a
                  href="#portfolio"
                  className="rounded-lg bg-[#FFD700] px-6 py-3 text-sm font-semibold text-[#0A0A0B] shadow-xl hover:bg-[#FFD700]/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFD700] transition-all duration-300 hover:scale-105 flex items-center gap-2 font-[var(--font-body)]"
                >
                  <TrendingUp className="h-4 w-4" />
                  View Portfolio
                </a>
                <a
                  href="#contact"
                  className="text-sm/6 font-semibold text-[#007AFF] hover:text-white transition-colors border border-[#007AFF] rounded-lg px-6 py-3 hover:bg-[#007AFF] flex items-center gap-2 font-[var(--font-body)]"
                >
                  <Brain className="h-4 w-4" />
                  Book a Call
                  <span aria-hidden="true">→</span>
                </a>
              </motion.div>

              {/* Key stats */}
              <motion.div
                className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-[#FFD700] font-[var(--font-display)]">
                    500+
                  </div>
                  <div className="text-sm text-[#A1A1AA] font-[var(--font-body)]">
                    Fortune 500 Projects
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-[#FFD700] font-[var(--font-display)]">
                    15+
                  </div>
                  <div className="text-sm text-[#A1A1AA] font-[var(--font-body)]">
                    Years Experience
                  </div>
                </div>
                <div className="text-center lg:text-left col-span-2 sm:col-span-1">
                  <div className="text-3xl font-bold text-[#FFD700] font-[var(--font-display)]">
                    $2B+
                  </div>
                  <div className="text-sm text-[#A1A1AA] font-[var(--font-body)]">
                    Value Generated
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right side - Professional headshot */}
            <motion.div
              className="mt-16 lg:mt-0"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/20 to-[#007AFF]/20 rounded-2xl blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-[#1A1A1B] to-[#262626] p-8 rounded-2xl border border-[#262626]">
                  <img
                    src="/api/placeholder/500/600"
                    alt="Hesham Badr - AI & Digital Transformation Strategist"
                    className="w-full h-auto rounded-xl shadow-2xl"
                  />
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#00ff00] rounded-full border-4 border-[#0A0A0B]"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#FFD700]/20 to-[#007AFF]/30 opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-gradient-to-tr from-[#007AFF]/20 to-[#FFD700]/30 opacity-20 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  );
}
