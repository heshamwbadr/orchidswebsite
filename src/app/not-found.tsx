import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <html lang="en" className="dark">
      <head>
        <title>Page Not Found - Hesham Badr</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body className="bg-background text-foreground antialiased">
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
          <div className="text-center max-w-2xl mx-auto">
            {/* 404 Number */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                404
              </h1>
            </motion.div>

            {/* Error Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Page Not Found
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The page you're looking for doesn't exist or has been moved. 
                Let me help you get back on track.
              </p>
            </motion.div>

            {/* Navigation Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground"
              >
                <Link href="/">
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/20 hover:bg-primary/10"
              >
                <Link href="/#contact">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Me
                </Link>
              </Button>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 pt-8 border-t border-border/50"
            >
              <h3 className="text-lg font-medium text-foreground mb-4">
                Popular Pages
              </h3>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link 
                  href="/#about" 
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  About
                </Link>
                <Link 
                  href="/#trust" 
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  Why Me
                </Link>
                <Link 
                  href="/#case-studies" 
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  Case Studies
                </Link>
                <Link 
                  href="/#testimonials" 
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  Testimonials
                </Link>
              </div>
            </motion.div>

            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8"
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.history.back()}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
            </motion.div>
          </div>
        </div>
      </body>
    </html>
  );
} 