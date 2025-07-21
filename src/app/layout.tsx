import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";
import { FloatingCallButton } from "@/components/portfolio/floating-call-icon";
import { GTMLoader } from "@/components/GTMLoader";
import { CalendlyLazyLoader } from "@/components/CalendlyLazyLoader";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: ["200","300","400","500","600"] });

export const metadata: Metadata = {
  title: "Hesham Badr | Certified AI Transformation Consultant & Strategy Partner",
  description:
    "AI transformation consultant trusted by leaders to turn strategy into execution. Specialising in agentic AI, AI automation, and AI leadership. Founder of Neuronovate.",
  keywords: [
    "Hesham Badr",
    "AI transformation consultant",
    "Certified AI consultant",
    "Agentic AI",
    "AI strategy execution",
    "AI agent enablement",
    "AI leadership coach",
    "AI partner",
    "Enterprise AI automation",
    "AI transformation",
    "AI automation",
    "AI Lean",
    "AI Six Sigma",
    "AI customer centric",
    "AI service design",
    "AI CX",
    "Neuronovate",
    "Neuronovate Consulting",
    "AI consultant",
    "Strategy consultant"
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0A0A0A",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.className}`}>
      <head>
        {/* GTM loaded conditionally to reduce unused JavaScript */}
        <meta name="google-site-verification" content="B2jZGoMehuT2xfbKUL3J1qTxonbEcN43peLfP3CrN60" />
        <title>Hesham Badr | AI Strategy & Transformation Consultant</title>
        <meta name="description" content="Helping leaders cut through the AI noise and drive real outcomes. Strategy, automation, and transformation from boardroom to frontline." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Hesham Badr | AI Strategy & Transformation Consultant" />
        <meta property="og:description" content="Helping leaders cut through the AI noise and drive real outcomes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hesham.badr.neuronovate.consulting" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hesham Badr | AI Strategy & Transformation Consultant" />
        <meta name="twitter:description" content="Helping leaders cut through the AI noise and drive real outcomes." />
        <meta name="twitter:image" content="/og-image.png" />
        {/* Calendly CSS loaded dynamically to avoid blocking critical requests */}
        <meta name="author" content="Hesham Badr" />
        <meta
          name="keywords"
          content="AI transformation, digital transformation, strategy consulting, artificial intelligence, business transformation"
        />
        {/* Optimize font loading to reduce render blocking */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&display=swap"
          media="print"
          onLoad={(e) => { (e.target as HTMLLinkElement).media = 'all'; }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://hesham.badr.neuronovate.consulting#hesham",
                  "name": "Hesham Badr",
                  "jobTitle": "AI Transformation Consultant & Founder",
                  "description": "Trusted advisor and certified AI consultant helping businesses achieve AI-led transformation, strategy execution, and agentic AI enablement.",
                  "url": "https://hesham.badr.neuronovate.consulting",
                  "image": "/pics/mypictransparent-576.webp",
                  "alumniOf": {
                    "@type": "Organization",
                    "name": "University of Sydney"
                  },
                  "knowsAbout": [
                    "AI",
                    "Automation", 
                    "Strategy",
                    "Digital Transformation",
                    "Business Process Optimization",
                    "AI Strategy Execution",
                    "Agentic AI",
                    "AI Leadership",
                    "Enterprise AI",
                    "AI Consulting"
                  ],
                  "sameAs": [
                    "https://www.linkedin.com/in/hesham-badr",
                    "https://www.neuronovate.consulting"
                  ],
                  "worksFor": {
                    "@id": "https://www.neuronovate.consulting#neuronovate"
                  }
                },
                {
                  "@type": "Organization",
                  "@id": "https://www.neuronovate.consulting#neuronovate",
                  "name": "Neuronovate Consulting",
                  "url": "https://www.neuronovate.consulting",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "/pics/signaturetransparent1-171.webp"
                  },
                  "contactPoint": [
                    {
                      "@type": "ContactPoint",
                      "email": "info@neuronovate.consulting",
                      "contactType": "customer support",
                      "areaServed": ["AU", "ES", "global"]
                    }
                  ],
                  "founder": {
                    "@id": "https://hesham.badr.neuronovate.consulting#hesham"
                  },
                  "description": "Neuronovate Consulting helps companies unlock measurable value through AI automation, strategy, and intelligent transformation across service design and operations.",
                  "sameAs": [
                    "https://www.linkedin.com/company/neuronovate",
                    "https://www.hesham.badr.neuronovate.consulting"
                  ]
                },
                {
                  "@type": "Service",
                  "@id": "https://www.neuronovate.consulting#service-consulting",
                  "name": "Management Consulting",
                  "provider": {
                    "@id": "https://www.neuronovate.consulting#neuronovate"
                  },
                  "description": "Strategic advisory across transformation, operating model design, cost optimization, and organizational alignment.",
                  "areaServed": ["Australia", "Spain", "Remote"],
                  "serviceType": "Business Consulting",
                  "category": "Management",
                  "url": "https://www.neuronovate.consulting/service-Catalogue"
                },
                {
                  "@type": "Service",
                  "@id": "https://www.neuronovate.consulting#service-automation",
                  "name": "AI & Automation Deployment",
                  "provider": {
                    "@id": "https://www.neuronovate.consulting#neuronovate"
                  },
                  "description": "Design and implementation of AI-powered workflows, intelligent automation, and process digitization solutions.",
                  "areaServed": ["Australia", "Spain", "Remote"],
                  "serviceType": "AI & Automation Services",
                  "category": "Technology",
                  "url": "https://www.neuronovate.consulting/service-Catalogue"
                },
                {
                  "@type": "Service",
                  "@id": "https://www.neuronovate.consulting#service-training",
                  "name": "Training & Capability Building",
                  "provider": {
                    "@id": "https://www.neuronovate.consulting#neuronovate"
                  },
                  "description": "Tailored training in Lean Six Sigma, AI fluency, digital transformation, and leadership development.",
                  "areaServed": ["Australia", "Spain", "Remote"],
                  "serviceType": "Professional Training",
                  "category": "Learning & Development",
                  "url": "https://www.neuronovate.consulting/service-Catalogue"
                }
              ]
            })
          }}
        />
      </head>
      <body className="bg-background text-foreground antialiased overflow-x-hidden">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TJZF93FB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <CalendlyLazyLoader />
        <GTMLoader />
        <div className="relative min-h-screen">{children}</div>
        <FloatingCallButton />
      </body>
    </html>
  );
}
