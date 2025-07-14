"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  MessageSquare,
  FileText,
  HelpCircle,
  Banknote,
  Building2,
} from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Healthcare Platform",
    subtitle: "Transforming patient care through intelligent automation",
    icon: Brain,
    tags: ["Healthcare", "AI/ML", "Process Automation"],
    bullets: [
      "Reduced patient wait times by 40%",
      "Automated 70% of routine administrative tasks",
      "Improved diagnostic accuracy by 25%",
    ],
    challenge:
      "A major healthcare provider was struggling with inefficient patient flow, manual administrative processes, and inconsistent diagnostic protocols across multiple facilities.",
    solution:
      "Implemented an AI-driven platform that automated patient scheduling, streamlined administrative workflows, and provided decision support tools for medical professionals.",
    impact:
      "The solution resulted in significantly improved patient satisfaction scores, reduced operational costs by $2M annually, and enhanced the overall quality of care delivery.",
    metrics: [
      { label: "Wait Time Reduction", value: "40%" },
      { label: "Task Automation", value: "70%" },
      { label: "Cost Savings", value: "$2M" },
    ],
  },
  {
    id: 2,
    title: "Financial Services Digital Transformation",
    subtitle: "Modernizing legacy banking systems for the digital age",
    icon: MessageSquare,
    tags: ["FinTech", "Digital Transformation", "Security"],
    bullets: [
      "Migrated 500K+ customers to new platform",
      "Achieved 99.9% system uptime",
      "Enhanced security protocols by 300%",
    ],
    challenge:
      "A traditional bank needed to modernize their legacy systems while maintaining regulatory compliance and ensuring zero downtime during the transition.",
    solution:
      "Designed and executed a phased digital transformation strategy that included cloud migration, API modernization, and enhanced security frameworks.",
    impact:
      "Successfully transformed the bank's infrastructure, resulting in improved customer experience, enhanced security posture, and increased operational efficiency.",
    metrics: [
      { label: "Customer Migration", value: "500K+" },
      { label: "System Uptime", value: "99.9%" },
      { label: "Security Enhancement", value: "300%" },
    ],
  },
  {
    id: 3,
    title: "Supply Chain Optimization",
    subtitle: "Leveraging data analytics to optimize global operations",
    icon: FileText,
    tags: ["Supply Chain", "Data Analytics", "Operations"],
    bullets: [
      "Reduced inventory costs by 30%",
      "Improved delivery accuracy to 98%",
      "Streamlined vendor management processes",
    ],
    challenge:
      "A global manufacturing company faced challenges with inventory management, supplier coordination, and demand forecasting across multiple regions.",
    solution:
      "Developed a comprehensive supply chain analytics platform that provided real-time visibility, predictive insights, and automated optimization recommendations.",
    impact:
      "The implementation led to substantial cost savings, improved customer satisfaction, and enhanced operational resilience across the global supply network.",
    metrics: [
      { label: "Inventory Cost Reduction", value: "30%" },
      { label: "Delivery Accuracy", value: "98%" },
      { label: "Vendor Efficiency", value: "45%" },
    ],
  },
  {
    id: 4,
    title: "Customer Experience Platform",
    subtitle: "Creating seamless omnichannel customer journeys",
    icon: HelpCircle,
    tags: ["CX", "Omnichannel", "Customer Success"],
    bullets: [
      "Unified customer data across 8 channels",
      "Increased customer satisfaction by 50%",
      "Reduced response times to under 2 minutes",
    ],
    challenge:
      "An e-commerce company struggled with fragmented customer data across multiple touchpoints, leading to inconsistent service experiences and decreased satisfaction.",
    solution:
      "Built an integrated customer experience platform that unified data sources, enabled real-time personalization, and provided comprehensive analytics dashboards.",
    impact:
      "The solution created a seamless customer journey that significantly improved satisfaction scores and increased customer lifetime value by 35%.",
    metrics: [
      { label: "Channel Integration", value: "8" },
      { label: "Satisfaction Increase", value: "50%" },
      { label: "Response Time", value: "<2min" },
    ],
  },
  {
    id: 5,
    title: "Enterprise Cloud Migration",
    subtitle: "Scaling infrastructure for explosive growth",
    icon: Banknote,
    tags: ["Cloud", "Infrastructure", "Scalability"],
    bullets: [
      "Migrated 200+ applications to cloud",
      "Reduced infrastructure costs by 45%",
      "Achieved 10x scalability improvement",
    ],
    challenge:
      "A rapidly growing startup needed to migrate their on-premises infrastructure to the cloud while maintaining performance and reducing costs.",
    solution:
      "Executed a comprehensive cloud migration strategy using containerization, microservices architecture, and automated CI/CD pipelines.",
    impact:
      "The migration enabled the company to scale efficiently, reduce operational overhead, and focus resources on core business innovation rather than infrastructure management.",
    metrics: [
      { label: "Applications Migrated", value: "200+" },
      { label: "Cost Reduction", value: "45%" },
      { label: "Scalability", value: "10x" },
    ],
  },
  {
    id: 6,
    title: "Cybersecurity Framework Implementation",
    subtitle: "Building robust defense against evolving threats",
    icon: Building2,
    tags: ["Cybersecurity", "Risk Management", "Compliance"],
    bullets: [
      "Implemented zero-trust architecture",
      "Reduced security incidents by 80%",
      "Achieved SOC 2 Type II compliance",
    ],
    challenge:
      "A technology company needed to strengthen their cybersecurity posture to protect sensitive customer data and meet stringent compliance requirements.",
    solution:
      "Designed and implemented a comprehensive cybersecurity framework including zero-trust architecture, advanced threat detection, and automated incident response.",
    impact:
      "The new security framework significantly reduced the risk of data breaches, improved compliance standing, and enhanced customer trust in the platform.",
    metrics: [
      { label: "Incident Reduction", value: "80%" },
      { label: "Compliance Achievement", value: "SOC 2" },
      { label: "Threat Detection", value: "Real-time" },
    ],
  },
];

export default function CaseStudiesGrid() {
  const [selectedStudy, setSelectedStudy] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world transformations that drive measurable business outcomes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => {
            const Icon = study.icon;
            return (
              <Dialog key={study.id}>
                <DialogTrigger asChild>
                  <div className="group cursor-pointer bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {study.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {study.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <ul className="space-y-2 mb-4">
                      {study.bullets.map((bullet, index) => (
                        <li
                          key={index}
                          className="text-sm text-gray-600 flex items-start"
                        >
                          <span className="text-green-500 mr-2 mt-1">•</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <div className="text-blue-600 text-sm font-medium group-hover:text-blue-700">
                      View full case study →
                    </div>
                  </div>
                </DialogTrigger>

                <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                          {study.title}
                        </h2>
                        <p className="text-gray-600 mb-4">{study.subtitle}</p>
                        <div className="flex flex-wrap gap-2">
                          {study.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          The Challenge
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          Our Solution
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {study.solution}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          The Impact
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {study.impact}
                        </p>

                        <div className="grid grid-cols-3 gap-4">
                          {study.metrics.map((metric, index) => (
                            <div
                              key={index}
                              className="text-center p-4 bg-gray-50 rounded-lg"
                            >
                              <div className="text-2xl font-bold text-blue-600 mb-1">
                                {metric.value}
                              </div>
                              <div className="text-sm text-gray-600">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
}
