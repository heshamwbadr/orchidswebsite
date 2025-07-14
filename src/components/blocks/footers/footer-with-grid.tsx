import { cn } from "@/lib/utils";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, BookOpen } from "lucide-react";
import React from "react";

export function FooterWithGrid() {
  return (
    <div style={{ backgroundColor: "#0A0A0B" }} className="bg-[#0A0A0B]">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-12 border-b border-border pb-12 md:grid-cols-3 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-foreground font-[var(--font-display)]">
                Hesham Badr
              </h2>
              <p className="text-muted-foreground font-medium">
                AI & Digital Transformation Strategist
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:hesham@strategicai.expert"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  hesham@strategicai.expert
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-secondary" />
                <a
                  href="tel:+15551234567"
                  className="text-foreground hover:text-secondary transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-foreground font-[var(--font-display)]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-foreground font-[var(--font-display)]">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/heshambadr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/heshambadr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-secondary/80 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://medium.com/@heshambadr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="Medium"
              >
                <BookOpen className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Hesham Badr. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

const QUICK_LINKS = [
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Case Studies", href: "/case-studies" },
  { title: "Contact", href: "/contact" },
];
