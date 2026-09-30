import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const serviceCards = [
  { id: "software-development", title: "Software Development", icon: "code" },
  {
    id: "web-mobile-development",
    title: "Web & Mobile Application Development",
    icon: "devices",
  },
  { id: "it-consulting", title: "IT Consulting", icon: "compass" },
  { id: "cybersecurity", title: "Cybersecurity", icon: "shield" },
  {
    id: "ai-automation",
    title: "Artificial Intelligence & Automation",
    icon: "spark",
  },
  { id: "cloud-computing", title: "Cloud Computing", icon: "cloud" },
  { id: "systems-integration", title: "Systems Integration", icon: "link" },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    icon: "transform",
  },
  {
    id: "technology-infrastructure",
    title: "Technology Infrastructure",
    icon: "server",
  },
];

const serviceDetails = [
  {
    id: "software-development",
    title: "Software Development",
    summary:
      "Custom software engineered to support business operations, customer experiences, and growth initiatives.",
    provide: [
      "Custom business software",
      "Enterprise applications",
      "APIs",
      "Backend systems",
      "Database-driven applications",
      "Business management systems",
      "Custom platforms",
    ],
    benefits: [
      "Solutions designed around your workflow and goals",
      "Greater operational efficiency and process control",
      "Scalable architecture for future growth",
    ],
    visual: ["Requirements", "Architecture", "Build", "Scale"],
  },
  {
    id: "web-mobile-development",
    title: "Web & Mobile Development",
    summary:
      "Digital experiences across web and mobile channels that balance performance, usability, and business value.",
    provide: [
      "Corporate websites",
      "Web applications",
      "E-commerce platforms",
      "Customer portals",
      "Android applications",
      "iOS applications",
      "Cross-platform applications",
      "Progressive web applications",
    ],
    benefits: [
      "Consistent user experience across devices",
      "Faster launch cycles with maintainable codebases",
      "Improved customer engagement and self-service",
    ],
    visual: ["Web", "Mobile", "Commerce", "Portals"],
  },
  {
    id: "it-consulting",
    title: "IT Consulting",
    summary:
      "Strategic technology guidance to help organizations make informed architecture and transformation decisions.",
    provide: [
      "Technology strategy",
      "Architecture planning",
      "Digital transformation consulting",
      "Technology assessment",
      "Software architecture",
      "IT project planning",
      "Technical advisory",
    ],
    benefits: [
      "Clear technology direction tied to business priorities",
      "Reduced risk in platform and architecture choices",
      "Better planning for delivery, change, and scale",
    ],
    visual: ["Assess", "Plan", "Align", "Execute"],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    summary:
      "Security-focused practices that help organizations reduce risk and strengthen digital resilience.",
    provide: [
      "Security assessments",
      "Vulnerability assessment",
      "Security hardening",
      "Application security",
      "Infrastructure security",
      "Security monitoring",
      "Security awareness",
      "Security strategy",
    ],
    benefits: [
      "Early identification of technical and operational weaknesses",
      "Improved security posture across applications and infrastructure",
      "More confident digital operations and governance",
    ],
    visual: ["Assess", "Harden", "Monitor", "Improve"],
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    summary:
      "Practical AI and automation services that enhance workflows, insights, and decision support.",
    provide: [
      "AI-powered applications",
      "Business process automation",
      "AI assistants",
      "Intelligent workflows",
      "Document processing",
      "Data-driven automation",
      "API/AI integrations",
    ],
    benefits: [
      "Reduced manual effort and repetitive operations",
      "Faster response times and decision cycles",
      "Improved process consistency and visibility",
    ],
    visual: ["Input", "Model", "Workflow", "Outcome"],
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    summary:
      "Cloud services that support modernization, resilience, and operational flexibility.",
    provide: [
      "Cloud deployment",
      "Cloud migration",
      "Cloud architecture",
      "Application hosting",
      "Infrastructure management",
      "Monitoring",
      "Backup and recovery",
    ],
    benefits: [
      "Improved reliability and scalability",
      "Operational transparency through monitoring",
      "Business continuity with backup and recovery planning",
    ],
    visual: ["Migrate", "Deploy", "Observe", "Recover"],
  },
  {
    id: "systems-integration",
    title: "Systems Integration",
    summary:
      "Integration services to connect systems, data, and workflows across business functions.",
    provide: [
      "Business applications",
      "APIs",
      "Payment platforms",
      "Government systems",
      "Databases",
      "Third-party services",
      "Internal enterprise systems",
    ],
    benefits: [
      "Reduced data silos and manual handoffs",
      "More efficient cross-system operations",
      "Better reporting through connected information flows",
    ],
    visual: ["Apps", "APIs", "Data", "Unified Flow"],
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    summary:
      "Transformation programs that modernize operations, customer experiences, and core digital capabilities.",
    provide: [
      "Manual process modernization",
      "Legacy system modernization",
      "Customer experience improvements",
      "Internal workflow optimization",
      "Data management improvements",
      "Digital operations enablement",
    ],
    benefits: [
      "Higher operational speed and adaptability",
      "Better customer and employee digital experiences",
      "Stronger alignment between technology and strategy",
    ],
    visual: ["Current", "Target", "Transition", "Operate"],
  },
  {
    id: "technology-infrastructure",
    title: "Technology Infrastructure",
    summary:
      "Infrastructure services that establish stable, secure, and scalable technology foundations.",
    provide: [
      "Servers",
      "Networking",
      "Cloud infrastructure",
      "Deployment environments",
      "DevOps",
      "Monitoring",
      "Backup",
      "Infrastructure security",
    ],
    benefits: [
      "Improved service stability and system performance",
      "Greater reliability through structured operations",
      "Secure infrastructure foundations for growth",
    ],
    visual: ["Network", "Compute", "Ops", "Resilience"],
  },
];

const deliverySteps = [
  "Discover",
  "Strategize",
  "Design",
  "Develop",
  "Secure",
  "Deploy",
  "Support",
];

const techStack = {
  Frontend: ["React", "JavaScript", "Tailwind CSS", "React Router"],
  Backend: ["Defined per project requirements"],
  Mobile: ["Defined per project requirements"],
  Database: ["Defined per project requirements"],
  Cloud: ["Defined per project requirements"],
  DevOps: ["Vite", "Defined per project requirements"],
  Cybersecurity: ["Defined per project requirements"],
  AI: ["Defined per project requirements"],
};

const faqs = [
  {
    q: "What types of software does Fluxeey develop?",
    a: "Fluxeey develops custom business software, enterprise platforms, APIs, backend systems, and workflow-focused applications based on organizational needs.",
  },
  {
    q: "Do you work with startups and established businesses?",
    a: "Yes. Engagements are structured around each organization stage, from early product definition to enterprise modernization and optimization.",
  },
  {
    q: "Can you integrate existing systems?",
    a: "Yes. Fluxeey supports integration across internal systems, third-party tools, APIs, payment platforms, and data sources.",
  },
  {
    q: "Do you provide ongoing support after deployment?",
    a: "Yes. Support can include monitoring, performance optimization, security reviews, issue resolution, and iterative improvements.",
  },
  {
    q: "Can you build AI-powered solutions?",
    a: "Yes. Fluxeey can design and implement AI-assisted workflows, intelligent automation, and AI-enabled features tied to business use cases.",
  },
  {
    q: "Do you provide cybersecurity services?",
    a: "Yes. Services include assessments, hardening, application and infrastructure security, monitoring strategy, and security awareness support.",
  },
  {
    q: "Can you migrate applications to the cloud?",
    a: "Yes. Fluxeey helps assess, plan, and execute cloud migration and deployment while addressing reliability, monitoring, and recovery needs.",
  },
  {
    q: "How does a project begin?",
    a: "Projects begin with discovery discussions to clarify business objectives, constraints, priorities, and expected outcomes before defining solution direction.",
  },
];

const iconPaths = {
  code: "M4 7h16M4 12h16M4 17h10",
  devices: "M3 5h12v9H3V5zm14 3h4v9h-9v-2",
  compass:
    "M12 3a9 9 0 100 18 9 9 0 000-18zm2.8 6.2l-1.6 4.2-4.2 1.6 1.6-4.2 4.2-1.6z",
  shield: "M12 3l7 3v5c0 4.9-3.1 9.2-7 10-3.9-.8-7-5.1-7-10V6l7-3z",
  spark: "M12 3l2.3 4.8L19 10l-4.7 2.2L12 17l-2.3-4.8L5 10l4.7-2.2L12 3z",
  cloud: "M7 18h10a4 4 0 100-8 5 5 0 00-9.7-1.5A4 4 0 007 18z",
  link: "M10 14l4-4m-7 8l-2 2a3 3 0 104 4l2-2m8-8l2-2a3 3 0 10-4-4l-2 2",
  transform: "M5 12h14M12 5l7 7-7 7",
  server: "M4 6h16v4H4V6zm0 8h16v4H4v-4z",
};

const Reveal = ({ children, className = "", delay = 0 }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`ft-reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

const ServiceIcon = ({ kind }) => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d={iconPaths[kind]} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SectionHeading = ({ eyebrow, title, description, centered = false }) => (
  <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
    {eyebrow ? <p className="ft-eyebrow">{eyebrow}</p> : null}
    <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
      {title}
    </h2>
    {description ? (
      <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
    ) : null}
  </div>
);

const ServicesHero = () => (
  <section className="relative overflow-hidden border-b border-slate-200 bg-white">
    <div className="ft-grid-overlay" />
    <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-cyan-100/80 blur-3xl" />
    <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-teal-100/70 blur-3xl" />

    <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-6 pb-16 pt-14 lg:grid-cols-2 lg:items-center lg:pb-20">
      <div>
        <p className="ft-animate-in ft-eyebrow">SERVICES</p>
        <h1 className="ft-animate-in ft-delay-1 mt-5 text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
          Technology Solutions Built Around Your Business.
        </h1>
        <p className="ft-animate-in ft-delay-2 mt-6 max-w-xl text-lg leading-8 text-slate-600">
          Fluxeey provides software development, cybersecurity, AI and
          automation, cloud, consulting, systems integration, and infrastructure
          services to help organizations build and scale with confidence.
        </p>
        <Link
          to="/contact"
          className="ft-animate-in ft-delay-3 mt-8 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Discuss Your Project
        </Link>
      </div>

      <div className="ft-animate-in ft-delay-2 rounded-3xl border border-slate-200 bg-slate-950 p-6 text-slate-100 shadow-[0_32px_90px_-40px_rgba(14,116,144,0.55)]">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
          Service System View
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-3">
            Build
          </div>
          <div className="rounded-lg border border-teal-300/20 bg-teal-300/10 p-3">
            Secure
          </div>
          <div className="rounded-lg border border-indigo-300/20 bg-indigo-300/10 p-3">
            Integrate
          </div>
          <div className="rounded-lg border border-sky-300/20 bg-sky-300/10 p-3">
            Automate
          </div>
          <div className="rounded-lg border border-emerald-300/20 bg-emerald-300/10 p-3">
            Manage
          </div>
          <div className="rounded-lg border border-cyan-200/20 bg-cyan-200/10 p-3">
            Transform
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ServicesOverview = () => (
  <section className="border-b border-slate-200 bg-slate-50">
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <Reveal>
        <SectionHeading
          eyebrow="SERVICES OVERVIEW"
          title="Navigate service capabilities and detailed delivery areas."
          description="Select any service area to jump directly to the detailed section below."
        />
      </Reveal>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {serviceCards.map((service, index) => (
          <Reveal key={service.id} delay={index * 35}>
            <a
              href={`#${service.id}`}
              className="group flex h-full items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-md"
            >
              <span className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-2 text-slate-700 group-hover:text-cyan-700">
                <ServiceIcon kind={service.icon} />
              </span>
              <span className="text-sm font-semibold text-slate-900">
                {service.title}
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const ServiceDetailSection = ({ service }) => (
  <section
    id={service.id}
    className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 lg:p-8"
  >
    <div className="flex flex-wrap items-center justify-between gap-4">
      <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
        {service.title}
      </h3>
      <Link
        to="/contact"
        className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-900 hover:text-slate-900"
      >
        Request this service
      </Link>
    </div>

    <p className="mt-4 text-base leading-7 text-slate-600">{service.summary}</p>

    <div className="mt-7 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
      <div>
        <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
          What We Provide
        </h4>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {service.provide.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
          Business Benefits
        </h4>
        <ul className="mt-4 space-y-2">
          {service.benefits.map((benefit) => (
            <li
              key={benefit}
              className="rounded-lg border border-cyan-100 bg-cyan-50/70 px-3 py-2 text-sm text-slate-700"
            >
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-950 p-4 text-slate-100">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
        Delivery Snapshot
      </p>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {service.visual.map((item) => (
          <div
            key={item}
            className="rounded-md border border-white/15 bg-white/5 p-2 text-center text-xs font-medium"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ServicesDeepDive = () => (
  <section className="mx-auto w-full max-w-6xl px-6 py-20">
    <div className="grid gap-8 lg:grid-cols-[260px_1fr] lg:gap-10">
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Quick Navigation
          </p>
          <nav className="mt-3 flex flex-col gap-1">
            {serviceCards.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="rounded-md px-3 py-2 text-sm text-slate-700 transition hover:bg-white hover:text-slate-900"
              >
                {service.title}
              </a>
            ))}
          </nav>
        </div>
      </aside>

      <div className="space-y-6">
        {serviceDetails.map((service, index) => (
          <Reveal key={service.id} delay={index * 35}>
            <ServiceDetailSection service={service} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const HowWeDeliver = () => (
  <section className="border-y border-slate-200 bg-slate-50/80">
    <div className="mx-auto w-full max-w-6xl px-6 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="HOW WE DELIVER"
          title="A clear path from problem definition to long-term support."
        />
      </Reveal>

      <div className="mt-10 flex flex-wrap gap-3">
        {deliverySteps.map((step, index) => (
          <Reveal key={step} delay={index * 45}>
            <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs text-white">
                {index + 1}
              </span>
              <span>{step}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const TechnologyStack = () => (
  <section className="mx-auto w-full max-w-6xl px-6 py-20">
    <Reveal>
      <SectionHeading
        eyebrow="TECHNOLOGY STACK"
        title="Current stack visibility based on this project configuration."
        description="Confirmed technologies are listed directly. Other categories are intentionally marked as project-defined until specific implementation stacks are confirmed."
      />
    </Reveal>

    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {Object.entries(techStack).map(([category, tools], index) => (
        <Reveal key={category} delay={index * 35}>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-900">
              {category}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {tool}
                </span>
              ))}
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  </section>
);

const FAQSection = () => (
  <section className="border-y border-slate-200 bg-slate-50/70">
    <div className="mx-auto w-full max-w-6xl px-6 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions about working with Fluxeey."
        />
      </Reveal>

      <div className="mt-10 space-y-3">
        {faqs.map((item, index) => (
          <Reveal key={item.q} delay={index * 25}>
            <details className="group rounded-2xl border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-slate-900">
                {item.q}
                <span className="float-right text-slate-400 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="relative overflow-hidden bg-slate-900 text-white">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.2),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(45,212,191,0.18),transparent_36%)]" />
    <div className="relative mx-auto w-full max-w-6xl px-6 py-20 text-center">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Have a Technology Challenge?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
          Let&apos;s discuss the problem, explore the possibilities and build
          the right solution.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            Start a Project
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
          >
            Contact Us
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

const Services = () => {
  return (
    <main className="ft-home bg-white text-slate-900">
      <ServicesHero />
      <ServicesOverview />
      <ServicesDeepDive />
      <HowWeDeliver />
      <TechnologyStack />
      <FAQSection />
      <FinalCTA />
    </main>
  );
};

export default Services;
