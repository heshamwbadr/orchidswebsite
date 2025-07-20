"use client";

import { Button } from "@/components/ui/button";
import { Home, RefreshCw, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
          <div className="text-center max-w-2xl mx-auto">
            {/* Error Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="w-24 h-24 mx-auto bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-4xl">⚠️</span>
              </div>
            </motion.div>

            {/* Error Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Something Went Wrong
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                An unexpected error occurred. Don't worry, this is on my end, not yours.
              </p>
              {process.env.NODE_ENV === "development" && (
                <details className="text-left bg-muted/50 p-4 rounded-lg mt-4">
                  <summary className="cursor-pointer text-sm font-medium text-muted-foreground">
                    Error Details (Development)
                  </summary>
                  <pre className="text-xs text-muted-foreground mt-2 overflow-auto">
                    {error.message}
                  </pre>
                </details>
              )}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            >
              <Button
                onClick={reset}
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/20 hover:bg-primary/10"
              >
                <a href="/">
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </a>
              </Button>
            </motion.div>

            {/* Contact Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-8 border-t border-border/50"
            >
              <p className="text-muted-foreground mb-4">
                If this problem persists, please let me know.
              </p>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="text-primary hover:text-primary/80"
              >
                <a href="/#contact">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Support
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </body>
    </html>
  );
} 