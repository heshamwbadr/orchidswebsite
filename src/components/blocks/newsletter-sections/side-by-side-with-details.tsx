"use client"

import { TrendingUp, Brain, Users, BookOpen } from 'lucide-react'
import { motion } from 'motion/react'

export default function SideBySideWithDetails() {
  return (
    <div className="relative isolate overflow-hidden bg-background py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-semibold tracking-tight text-foreground font-[var(--font-display)]"
            >
              Strategic Insights Weekly
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg text-muted-foreground font-[var(--font-body)]"
            >
              Get exclusive AI and digital transformation insights delivered to your inbox. Join 2,500+ executives staying ahead of the curve.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 flex max-w-md gap-x-4"
            >
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-foreground outline-1 -outline-offset-1 outline-border placeholder:text-muted-foreground focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 font-[var(--font-body)] transition-all duration-200"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary font-[var(--font-body)] transition-all duration-200 hover:scale-105"
              >
                Subscribe
              </button>
            </motion.div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-start"
            >
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-border">
                <TrendingUp aria-hidden="true" className="size-6 text-primary" />
              </div>
              <dt className="mt-4 text-base font-semibold text-foreground font-[var(--font-display)]">Weekly strategic frameworks</dt>
              <dd className="mt-2 text-base/7 text-muted-foreground font-[var(--font-body)]">
                Actionable frameworks and methodologies for driving digital transformation in your organization.
              </dd>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-start"
            >
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-border">
                <Brain aria-hidden="true" className="size-6 text-primary" />
              </div>
              <dt className="mt-4 text-base font-semibold text-foreground font-[var(--font-display)]">AI implementation case studies</dt>
              <dd className="mt-2 text-base/7 text-muted-foreground font-[var(--font-body)]">
                Real-world AI success stories and implementation strategies from leading enterprises.
              </dd>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col items-start"
            >
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-border">
                <BookOpen aria-hidden="true" className="size-6 text-primary" />
              </div>
              <dt className="mt-4 text-base font-semibold text-foreground font-[var(--font-display)]">Industry transformation trends</dt>
              <dd className="mt-2 text-base/7 text-muted-foreground font-[var(--font-body)]">
                Stay ahead with emerging trends and disruptive technologies shaping industries.
              </dd>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col items-start"
            >
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-border">
                <Users aria-hidden="true" className="size-6 text-primary" />
              </div>
              <dt className="mt-4 text-base font-semibold text-foreground font-[var(--font-display)]">Executive interviews and insights</dt>
              <dd className="mt-2 text-base/7 text-muted-foreground font-[var(--font-body)]">
                Exclusive conversations with industry leaders and transformation experts.
              </dd>
            </motion.div>
          </dl>
        </div>
      </div>
      <div aria-hidden="true" className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary/30 to-accent/20 opacity-20"
        />
      </div>
    </div>
  )
}