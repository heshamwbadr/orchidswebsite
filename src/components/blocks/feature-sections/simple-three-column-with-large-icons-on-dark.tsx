import { Brain, Settings, Rocket } from "lucide-react";

const features = [
  {
    name: "Strategic Intelligence & AI",
    description:
      "Unlock the power of artificial intelligence to drive strategic decision-making and competitive advantage.",
    services: [
      "AI Strategy Development",
      "Machine Learning Implementation",
      "Data Analytics & Insights",
      "Intelligent Automation",
      "Predictive Business Models",
    ],
    href: "#",
    icon: Brain,
    color: "#FFD700",
  },
  {
    name: "Digital & Operational Transformation",
    description:
      "Transform your operations through strategic digital initiatives that optimize performance and enable scalable growth.",
    services: [
      "Digital Roadmap Creation",
      "Process Optimization",
      "Technology Integration",
      "Cloud Migration Strategy",
      "Enterprise Architecture",
    ],
    href: "#",
    icon: Settings,
    color: "#007AFF",
  },
  {
    name: "Leadership & Change Acceleration",
    description:
      "Develop transformational leadership capabilities and accelerate organizational change to achieve breakthrough results.",
    services: [
      "Executive Coaching",
      "Change Management",
      "Team Transformation",
      "Innovation Culture Building",
      "Strategic Communication",
    ],
    href: "#",
    icon: Rocket,
    color: "#FFD700",
  },
];

export default function SimpleThreeColumnWithLargeIconsOnDark() {
  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl font-[var(--font-display)]">
            Strategic Services
          </h2>
          <p className="mt-6 text-lg/8 text-muted-foreground font-[var(--font-body)]">
            Comprehensive AI & Digital Transformation Solutions
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base/7 font-semibold text-foreground font-[var(--font-display)]">
                  <div
                    className="mb-6 flex size-10 items-center justify-center rounded-lg"
                    style={{ backgroundColor: feature.color }}
                  >
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-background"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-muted-foreground font-[var(--font-body)]">
                  <p className="flex-auto mb-4">{feature.description}</p>
                  <ul className="space-y-2 mb-6">
                    {feature.services.map((service, index) => (
                      <li key={index} className="text-sm flex items-start">
                        <span
                          className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                          style={{ backgroundColor: feature.color }}
                        ></span>
                        {service}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-auto">
                    <a
                      href={feature.href}
                      className="text-sm/6 font-semibold hover:opacity-80 transition-opacity font-[var(--font-body)]"
                      style={{ color: feature.color }}
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
