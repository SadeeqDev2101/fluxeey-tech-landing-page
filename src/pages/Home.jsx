import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────────────────────
   Fluxeey Technologies — Homepage
   Design language:
     · enterprise, editorial, engineered
     · deep slate + cyan accent + warm amber highlight (sparingly)
     · bento-grid layouts, inline SVG illustration, real atmosphere
     · no stock photos, no gradient text, no glow, no glassmorphism
   ───────────────────────────────────────────────────────────── */

const contactInfo = {
  email: "hello@fluxeey.com",
  phone: "+000 000 0000",
  location: "Head Office — To Be Updated",
};

const technologyStrip = [
  "Software",
  "Cloud",
  "Cybersecurity",
  "AI",
  "Automation",
  "Infrastructure",
  "Digital Transformation",
];

const services = [
  {
    name: "Software Development",
    description:
      "Custom software engineering aligned with business goals, scalability, and long-term maintainability.",
    icon: "code",
  },
  {
    name: "Web & Mobile Development",
    description:
      "Responsive web platforms and mobile apps designed for performance, usability, and growth.",
    icon: "devices",
  },
  {
    name: "IT Consulting",
    description:
      "Technology advisory for architecture, delivery strategy, modernization, and digital roadmaps.",
    icon: "compass",
  },
  {
    name: "Cybersecurity",
    description:
      "Security-first implementation with risk reduction, secure design, and resilient operations.",
    icon: "shield",
  },
  {
    name: "Artificial Intelligence & Automation",
    description:
      "Intelligent workflows and data-driven automation that improve speed, quality, and decision-making.",
    icon: "spark",
  },
  {
    name: "Cloud Computing",
    description:
      "Cloud-native architecture, migration, and optimization for reliability and elastic scaling.",
    icon: "cloud",
  },
  {
    name: "Systems Integration",
    description:
      "Interconnect platforms, APIs, and business tools for unified operations and cleaner data flow.",
    icon: "link",
  },
  {
    name: "Digital Transformation",
    description:
      "Transform internal processes and customer experiences with pragmatic technology programs.",
    icon: "transform",
  },
  {
    name: "Technology Infrastructure",
    description:
      "Design and strengthen enterprise infrastructure foundations for secure, stable performance.",
    icon: "server",
  },
];

const capabilities = [
  "Build Digital Products",
  "Modernize Legacy Systems",
  "Secure Digital Infrastructure",
  "Automate Business Operations",
  "Move to the Cloud",
  "Integrate Business Systems",
  "Develop AI-Powered Solutions",
  "Transform Digital Experiences",
];

const differentiators = [
  {
    title: "Business-Focused Technology",
    text: "Every implementation is tied to measurable business outcomes, not just technical delivery.",
  },
  {
    title: "Scalable Solutions",
    text: "Architecture decisions are made for performance now and adaptability as your operations grow.",
  },
  {
    title: "Security-Conscious Development",
    text: "Security is integrated across design, development, testing, and operations from day one.",
  },
  {
    title: "Modern Technology Stack",
    text: "Proven frameworks, cloud services, and automation practices support resilient enterprise systems.",
  },
  {
    title: "Reliable Delivery",
    text: "Structured delivery methods keep projects transparent, predictable, and aligned with priorities.",
  },
  {
    title: "Long-Term Technology Partnership",
    text: "Beyond launch, we help teams evolve products and technology operations with confidence.",
  },
];

const industries = [
  "Financial Services",
  "Government & Public Sector",
  "Healthcare",
  "Education",
  "Retail & E-commerce",
  "Professional Services",
  "SMEs & Startups",
  "Technology Companies",
];

const technologyCategories = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "Python", "Java", "REST APIs"],
  Mobile: ["React Native", "Flutter", "iOS", "Android"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  "Cloud & DevOps": ["AWS", "Azure", "Docker", "CI/CD"],
  Cybersecurity: [
    "Identity Access",
    "Threat Monitoring",
    "Secure SDLC",
    "Compliance",
  ],
  "AI & Automation": [
    "ML Models",
    "Intelligent Agents",
    "Workflow Automation",
    "NLP",
  ],
  Infrastructure: [
    "Hybrid Networks",
    "Observability",
    "Backup",
    "Disaster Recovery",
  ],
};

const processSteps = [
  {
    step: "01",
    name: "Discover",
    text: "Understand goals, challenges, constraints, and outcomes.",
  },
  {
    step: "02",
    name: "Plan",
    text: "Define roadmap, architecture direction, scope, and delivery model.",
  },
  {
    step: "03",
    name: "Design",
    text: "Shape product and system design with user and business priorities.",
  },
  {
    step: "04",
    name: "Build",
    text: "Develop secure, maintainable solutions using modern engineering practices.",
  },
  {
    step: "05",
    name: "Secure & Test",
    text: "Validate reliability, security posture, and release readiness.",
  },
  {
    step: "06",
    name: "Deploy",
    text: "Release with controlled rollout strategies and operational safeguards.",
  },
  {
    step: "07",
    name: "Support & Improve",
    text: "Continuously optimize based on usage, feedback, and new priorities.",
  },
];

const featuredProjects = [
  {
    name: "Atlas Operations Platform",
    category: "Enterprise Operations",
    description:
      "Unified workflows and reporting for multi-department operational control and executive visibility.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    accent: "cyan",
  },
  {
    name: "SecureCare Digital Portal",
    category: "Healthcare Technology",
    description:
      "Patient and provider portal modernization with integrated security controls and performance upgrades.",
    technologies: ["Next.js", "Python", "Azure", "OAuth"],
    accent: "amber",
  },
  {
    name: "RetailFlow Integration Hub",
    category: "Retail & E-commerce",
    description:
      "Connected ERP, e-commerce, and analytics systems to improve inventory intelligence and fulfillment speed.",
    technologies: ["TypeScript", "APIs", "Docker", "Kafka"],
    accent: "indigo",
  },
];

const stats = [
  { label: "Projects Delivered", value: "TBD" },
  { label: "Technologies Used", value: "TBD" },
  { label: "Clients Served", value: "TBD" },
  { label: "Years of Experience", value: "TBD" },
];

const testimonials = [
  {
    name: "Client Name Placeholder",
    role: "Role / Company Placeholder",
    quote:
      "Placeholder testimonial: Fluxeey supported our transformation journey with structured execution and practical guidance.",
  },
  {
    name: "Client Name Placeholder",
    role: "Role / Company Placeholder",
    quote:
      "Placeholder testimonial: The team delivered modern, secure solutions while keeping communication clear at every stage.",
  },
  {
    name: "Client Name Placeholder",
    role: "Role / Company Placeholder",
    quote:
      "Placeholder testimonial: Fluxeey became a trusted technology partner for both product innovation and infrastructure needs.",
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

/* ─────────────────────────────────────────────────────────────
   Primitives
   ───────────────────────────────────────────────────────────── */

const ArrowIcon = ({ className = "h-3 w-3" }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 12 12"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2.5 6h7M6.5 3l3 3-3 3" />
  </svg>
);

const Reveal = ({ children, className = "", delay = 0 }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
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

const SectionHeading = ({
  eyebrow,
  title,
  description,
  centered = false,
  tone = "light",
}) => {
  const isDark = tone === "dark";
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p
          className={`flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] ${isDark ? "text-cyan-300/90" : "text-cyan-700"}`}
        >
          {centered ? (
            <span
              aria-hidden="true"
              className="mx-auto h-px w-8 bg-current opacity-60"
            />
          ) : (
            <span
              aria-hidden="true"
              className="h-px w-8 bg-current opacity-60"
            />
          )}
          <span>{eyebrow}</span>
        </p>
      ) : null}
      <h2
        className={`mt-4 text-[28px] font-semibold leading-[1.15] tracking-[-0.015em] sm:text-[34px] lg:text-[40px] ${isDark ? "text-white" : "text-slate-950"}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-2xl text-[15.5px] leading-7 ${isDark ? "text-slate-300" : "text-slate-600"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
};

const ServiceIcon = ({ kind }) => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
  >
    <path d={iconPaths[kind]} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─────────────────────────────────────────────────────────────
   Hero
   ───────────────────────────────────────────────────────────── */

const HeroSection = () => (
  <section
    aria-label="Fluxeey Technologies introduction"
    className="relative isolate overflow-hidden border-b border-slate-200 bg-white"
  >
    {/* base grid */}
    <div className="ft-grid-overlay" aria-hidden="true" />
    {/* soft cyan glow top-right, soft amber bottom-left — restrained */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-32 -top-40 h-[420px] w-[420px] rounded-full bg-cyan-200/40 blur-3xl"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -left-40 bottom-0 h-[360px] w-[360px] rounded-full bg-amber-100/50 blur-3xl"
    />
    {/* hairline rules for engineered depth */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent"
    />

    <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-6 pb-20 pt-16 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-16 lg:pb-28 lg:pt-24 xl:gap-20">
      <div className="max-w-2xl">
        <p className="ft-animate-in flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-slate-500">
          <span aria-hidden="true" className="h-px w-8 bg-cyan-600" />
          Fluxeey · Technology · Engineering
        </p>

        <h1 className="ft-animate-in ft-delay-1 mt-6 text-[42px] font-semibold leading-[1.05] tracking-[-0.02em] text-slate-950 sm:text-[52px] lg:text-[66px] xl:text-[74px]">
          Technology that moves
          <br className="hidden sm:block" /> business{" "}
          <span className="relative inline-block">
            <span className="relative z-10">forward.</span>
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-1 -z-0 h-[10px] bg-cyan-200/70"
            />
          </span>
        </h1>

        <p className="ft-animate-in ft-delay-2 mt-7 max-w-xl text-[17px] leading-8 text-slate-600 sm:text-[18px]">
          Fluxeey Technologies engineers software, secures infrastructure, and
          modernizes enterprise systems — connecting cloud, AI, and data into
          one dependable technology stack.
        </p>

        <div className="ft-animate-in ft-delay-3 mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-sm bg-slate-900 px-5 py-3 text-[14px] font-medium text-white transition-colors duration-200 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
          >
            Start a Project
            <ArrowIcon className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/services"
            className="group inline-flex items-center gap-1.5 text-[14px] font-medium text-slate-700 transition-colors duration-200 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
          >
            <span className="relative">
              Explore Our Services
              <span
                aria-hidden="true"
                className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-slate-900 transition-transform duration-200 group-hover:scale-x-100"
              />
            </span>
            <ArrowIcon className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <ul className="ft-animate-in ft-delay-3 mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] text-slate-500">
          {[
            "Software",
            "Cybersecurity",
            "Cloud",
            "AI & Automation",
            "Consulting",
            "Digital Transformation",
          ].map((cap, i) => (
            <li key={cap} className="flex items-center gap-3">
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className="h-1 w-1 rounded-full bg-slate-300"
                />
              )}
              <span className="tracking-[0.02em]">{cap}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="ft-animate-in ft-delay-2 relative">
        <HeroVisual />
      </div>
    </div>

    <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8">
      <div className="flex items-center gap-4 pb-8 text-[11px] uppercase tracking-[0.24em] text-slate-400">
        <span aria-hidden="true" className="h-px flex-1 bg-slate-200" />
        <span>Systems · Security · Cloud · AI</span>
        <span aria-hidden="true" className="h-px flex-1 bg-slate-200" />
      </div>
    </div>
  </section>
);

const HeroVisual = () => {
  const nodes = {
    cloud: { x: 300, y: 60, label: "CLOUD", sub: "Infrastructure" },
    system: { x: 140, y: 180, label: "SYSTEMS", sub: "Software" },
    security: { x: 460, y: 180, label: "SECURITY", sub: "Compliance" },
    web: { x: 60, y: 320, label: "WEB", sub: "" },
    mobile: { x: 220, y: 320, label: "MOBILE", sub: "" },
    api: { x: 380, y: 320, label: "API", sub: "" },
    data: { x: 540, y: 320, label: "DATA", sub: "" },
    ai: { x: 300, y: 440, label: "AI & AUTOMATION", sub: "" },
  };

  const edges = [
    ["cloud", "system"],
    ["cloud", "security"],
    ["system", "web"],
    ["system", "mobile"],
    ["security", "api"],
    ["security", "data"],
    ["web", "ai"],
    ["mobile", "ai"],
    ["api", "ai"],
    ["data", "ai"],
  ];

  return (
    <div className="relative mx-auto w-full max-w-[600px]">
      <div className="relative overflow-hidden rounded-md border border-slate-200 bg-slate-950 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.6)]">
        {/* interior grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* soft cyan corner glow inside frame */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl"
        />

        <div className="relative flex items-center justify-between border-b border-white/10 px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-slate-300">
              Fluxeey System Map
            </span>
          </div>
          <span className="font-mono text-[10px] tracking-wider text-slate-500">
            v1.0 · live
          </span>
        </div>

        <svg
          viewBox="0 0 600 500"
          role="img"
          aria-label="Diagram showing Fluxeey Technologies connecting cloud, systems, security, web, mobile, API, data and AI layers."
          className="ft-hero-svg relative block h-auto w-full"
        >
          <defs>
            <linearGradient id="flxEdge" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#334155" stopOpacity="0.5" />
            </linearGradient>
          </defs>

          <g stroke="url(#flxEdge)" strokeWidth="1" fill="none">
            {edges.map(([a, b], i) => {
              const from = nodes[a],
                to = nodes[b];
              return (
                <path
                  key={i}
                  d={`M ${from.x} ${from.y} L ${to.x} ${to.y}`}
                  className="ft-hero-edge"
                  style={{ animationDelay: `${i * 120}ms` }}
                />
              );
            })}
          </g>

          <g fill="#22d3ee">
            {edges.slice(0, 6).map(([a, b], i) => {
              const from = nodes[a],
                to = nodes[b];
              return (
                <circle key={`p-${i}`} r="2" className="ft-hero-pulse">
                  <animateMotion
                    dur={`${3 + i * 0.4}s`}
                    repeatCount="indefinite"
                    path={`M ${from.x} ${from.y} L ${to.x} ${to.y}`}
                  />
                </circle>
              );
            })}
          </g>

          {Object.entries(nodes).map(([key, n], i) => {
            const isTop = key === "cloud",
              isBottom = key === "ai";
            const r = isTop || isBottom ? 7 : 5;
            return (
              <g
                key={key}
                className="ft-hero-node"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={r + 6}
                  fill={
                    isTop || isBottom
                      ? "rgba(34,211,238,0.14)"
                      : "rgba(148,163,184,0.10)"
                  }
                />
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={r}
                  fill="#0f172a"
                  stroke={isTop || isBottom ? "#22d3ee" : "#64748b"}
                  strokeWidth="1.25"
                />
                <text
                  x={n.x}
                  y={n.y - r - 10}
                  textAnchor="middle"
                  className="fill-slate-200"
                  style={{
                    fontSize: "10px",
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                  }}
                >
                  {n.label}
                </text>
                {n.sub && (
                  <text
                    x={n.x}
                    y={n.y - r - 22}
                    textAnchor="middle"
                    className="fill-slate-500"
                    style={{ fontSize: "8px", letterSpacing: "0.1em" }}
                  >
                    {n.sub}
                  </text>
                )}
              </g>
            );
          })}
        </svg>

        <div className="relative flex items-center justify-between border-t border-white/10 px-5 py-3">
          <span className="font-mono text-[10px] tracking-wider text-slate-500">
            NODES 08 · EDGES 10
          </span>
          <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-slate-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
            Operational
          </span>
        </div>
      </div>

      {/* Floating metric card — subtle */}
      <div className="absolute -bottom-6 -left-6 hidden w-56 rounded-md border border-slate-200 bg-white p-4 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.45)] sm:block">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
          Uptime · 90d
        </p>
        <p className="mt-2 text-[22px] font-semibold tracking-tight text-slate-950">
          99.98%
        </p>
        <div className="mt-3 flex h-8 items-end gap-0.5">
          {[40, 55, 48, 62, 70, 58, 72, 66, 80, 74, 88, 82].map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-sm bg-cyan-500/70"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      {/* Corner registration marks */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-2 -top-2 h-3 w-3 border-l border-t border-slate-400/50"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-2 -top-2 h-3 w-3 border-r border-t border-slate-400/50"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-2 -right-2 h-3 w-3 border-b border-r border-slate-400/50"
      />
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
   Trust strip
   ───────────────────────────────────────────────────────────── */

const TrustStrip = () => (
  <section className="border-b border-slate-200 bg-slate-50">
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-6 py-7 sm:px-8 md:flex-row md:items-center md:justify-between">
      <p className="flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.24em] text-slate-600">
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-cyan-600"
        />
        Technology-driven · Business-focused
      </p>
      <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] text-slate-600">
        {technologyStrip.map((item, i) => (
          <li key={item} className="flex items-center gap-4">
            {i > 0 && (
              <span
                aria-hidden="true"
                className="h-1 w-1 rounded-full bg-slate-300"
              />
            )}
            <span className="tracking-[0.02em]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────────
   Company introduction — bento with illustration
   ───────────────────────────────────────────────────────────── */

const CompanyIntroduction = () => (
  <section className="relative border-b border-slate-200 bg-white">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(8,145,178,0.05),transparent_55%)]"
    />
    <div className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:py-28">
      <Reveal className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Who We Are"
            title="A modern technology partner for software and enterprise transformation."
            description="Fluxeey Technologies delivers end-to-end technology solutions that connect strategy, engineering, security, and operations. We support organizations building new digital products and those modernizing critical systems at scale."
          />
          <p className="mt-5 max-w-xl text-[15.5px] leading-7 text-slate-600">
            Our focus is practical value: faster delivery, stronger resilience,
            and technology investments aligned with business performance.
          </p>
          <Link
            to="/about-us"
            className="group mt-9 inline-flex items-center gap-2 rounded-sm border border-slate-300 bg-white px-5 py-3 text-[14px] font-medium text-slate-900 transition-colors duration-200 hover:border-slate-900 hover:bg-slate-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
          >
            Learn More About Us
            <ArrowIcon className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Bento: architecture illustration + layer list */}
        <div className="grid grid-cols-6 gap-3">
          <div className="col-span-6 overflow-hidden rounded-md border border-slate-200 bg-slate-950 sm:col-span-4">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-300">
                Enterprise Architecture
              </span>
              <span className="font-mono text-[10px] text-slate-500">
                FLX-ARCH
              </span>
            </div>
            <svg
              viewBox="0 0 400 260"
              className="block h-auto w-full"
              role="img"
              aria-label="Layered enterprise architecture diagram"
            >
              <defs>
                <linearGradient id="layerGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                </linearGradient>
              </defs>
              <rect width="400" height="260" fill="#020617" />
              <g stroke="#1e293b" strokeWidth="1">
                {Array.from({ length: 9 }).map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={30 * i} x2="400" y2={30 * i} />
                ))}
              </g>
              <rect
                x="40"
                y="30"
                width="320"
                height="40"
                rx="4"
                fill="url(#layerGlow)"
                stroke="#22d3ee"
                strokeOpacity="0.6"
              />
              <text
                x="56"
                y="55"
                fill="#67e8f9"
                fontSize="10"
                letterSpacing="2"
              >
                PRODUCT LAYER
              </text>
              <rect
                x="40"
                y="86"
                width="320"
                height="40"
                rx="4"
                fill="#0f172a"
                stroke="#334155"
              />
              <text
                x="56"
                y="111"
                fill="#cbd5e1"
                fontSize="10"
                letterSpacing="2"
              >
                INTEGRATION · APIs · EVENTS
              </text>
              <rect
                x="40"
                y="142"
                width="320"
                height="40"
                rx="4"
                fill="#0f172a"
                stroke="#334155"
              />
              <text
                x="56"
                y="167"
                fill="#cbd5e1"
                fontSize="10"
                letterSpacing="2"
              >
                SECURITY · IDENTITY · MONITORING
              </text>
              <rect
                x="40"
                y="198"
                width="320"
                height="40"
                rx="4"
                fill="#0f172a"
                stroke="#334155"
              />
              <text
                x="56"
                y="223"
                fill="#cbd5e1"
                fontSize="10"
                letterSpacing="2"
              >
                CLOUD · NETWORK · INFRASTRUCTURE
              </text>
            </svg>
          </div>

          <div className="col-span-6 grid grid-cols-2 gap-3 sm:col-span-2 sm:grid-cols-1">
            <div className="rounded-md border border-slate-200 bg-white p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                Delivery Model
              </p>
              <p className="mt-2 text-[14px] font-medium text-slate-900">
                Structured & transparent
              </p>
            </div>
            <div className="rounded-md border border-slate-200 bg-cyan-50 p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-700">
                Security First
              </p>
              <p className="mt-2 text-[14px] font-medium text-slate-900">
                Built-in, not bolted on
              </p>
            </div>
            <div className="col-span-2 rounded-md border border-slate-200 bg-slate-900 p-4 sm:col-span-1">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-amber-300/90">
                Focus
              </p>
              <p className="mt-2 text-[14px] font-medium text-white">
                Business outcomes
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────────
   Core services — bento grid
   ───────────────────────────────────────────────────────────── */

const CoreServices = () => (
  <section className="border-b border-slate-200 bg-slate-50/80">
    <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Core Services"
          title="Comprehensive technology services for growth, resilience, and transformation."
          description="From software engineering to infrastructure modernization, Fluxeey delivers integrated capabilities that support both immediate execution and long-term technology strategy."
        />
      </Reveal>

      <div className="mt-14 grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
        {services.map((service, index) => {
          // Assign bento sizing pattern
          const isFeature = index === 0;
          const isDark = index === 4;
          const isAccent = index === 7;
          const span = isFeature
            ? "sm:col-span-2 lg:col-span-3 lg:row-span-2"
            : isDark
              ? "lg:col-span-3"
              : isAccent
                ? "sm:col-span-2 lg:col-span-2"
                : "lg:col-span-2";

          const cardBase =
            "group relative flex h-full flex-col overflow-hidden rounded-md border p-6 transition-all duration-300";
          const cardTone = isDark
            ? "border-slate-800 bg-slate-950 text-slate-100 hover:border-cyan-500/40"
            : isAccent
              ? "border-amber-200 bg-amber-50 hover:border-amber-300"
              : isFeature
                ? "border-slate-200 bg-white hover:border-cyan-500/40"
                : "border-slate-200 bg-white hover:border-cyan-500/40";

          return (
            <Reveal
              key={service.name}
              delay={index * 30}
              className={`${span} h-full`}
            >
              <article
                className={`${cardBase} ${cardTone} hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-30px_rgba(15,23,42,0.4)]`}
              >
                {isFeature && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-100/60 blur-3xl"
                  />
                )}
                <div className="relative flex items-start justify-between">
                  <div
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-sm border ${isDark ? "border-white/15 text-cyan-300" : isAccent ? "border-amber-300 bg-white text-amber-700" : "border-slate-200 bg-slate-50 text-slate-700 group-hover:border-cyan-500/40 group-hover:text-cyan-700"}`}
                  >
                    <ServiceIcon kind={service.icon} />
                  </div>
                  <span
                    className={`font-mono text-[10px] tracking-wider ${isDark ? "text-slate-500" : "text-slate-400"}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3
                  className={`relative mt-6 font-semibold leading-snug ${isFeature ? "text-[22px]" : "text-[17px]"} ${isDark ? "text-white" : "text-slate-950"}`}
                >
                  {service.name}
                </h3>
                <p
                  className={`relative mt-3 flex-1 leading-6 ${isFeature ? "text-[15px]" : "text-[14px]"} ${isDark ? "text-slate-300" : "text-slate-600"}`}
                >
                  {service.description}
                </p>

                {isFeature && (
                  <div className="relative mt-6 grid grid-cols-3 gap-2">
                    {["Architecture", "Delivery", "Operations"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-sm border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[11px] font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <Link
                  to="/services"
                  className={`relative mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium transition-colors duration-200 ${isDark ? "text-cyan-400 hover:text-cyan-300" : isAccent ? "text-amber-800 hover:text-amber-900" : "text-slate-900 hover:text-cyan-700"}`}
                >
                  Explore service
                  <ArrowIcon className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────────
   Solutions & capabilities — bento w/ dark accent cell
   ───────────────────────────────────────────────────────────── */

const SolutionsCapabilities = () => (
  <section className="border-b border-slate-200 bg-white">
    <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Solutions & Capabilities"
          title="What organizations can accomplish with Fluxeey."
          description="Our capabilities are designed around outcomes: better operations, stronger security, and faster digital progress across teams and systems."
          centered
        />
      </Reveal>

      <div className="mt-14 grid auto-rows-[minmax(120px,auto)] grid-cols-2 gap-3 lg:grid-cols-4">
        {capabilities.map((capability, index) => {
          const isDark = index === 3;
          const isAccent = index === 6;
          const wide = index === 0 || index === 7;
          return (
            <Reveal
              key={capability}
              delay={index * 25}
              className={`${wide ? "col-span-2" : ""} h-full`}
            >
              <div
                className={`group flex h-full items-end justify-between gap-4 rounded-md border p-5 transition-all duration-300 hover:-translate-y-0.5 ${
                  isDark
                    ? "border-slate-800 bg-slate-950 text-white hover:border-cyan-500/40"
                    : isAccent
                      ? "border-cyan-200 bg-cyan-50 hover:border-cyan-400"
                      : "border-slate-200 bg-white hover:border-cyan-500/40 hover:shadow-[0_20px_40px_-30px_rgba(15,23,42,0.4)]"
                }`}
              >
                <p
                  className={`text-[14.5px] font-medium leading-6 ${isDark ? "text-white" : "text-slate-900"}`}
                >
                  {capability}
                </p>
                <span
                  className={`font-mono text-[10px] tracking-wider ${isDark ? "text-slate-500" : "text-slate-400"}`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────────
   Why choose — bento, one illustration cell
   ───────────────────────────────────────────────────────────── */

const WhyChoose = () => (
  <section className="border-b border-slate-200 bg-slate-50/80">
    <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Why Choose Fluxeey"
          title="Built for organizations that need dependable technology execution."
          description="We combine engineering depth with business understanding to deliver practical, scalable solutions that teams can trust."
        />
      </Reveal>

      <div className="mt-14 grid auto-rows-[minmax(160px,auto)] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
        {differentiators.map((item, index) => {
          const isIllustration = index === 2;
          const isDark = index === 5;
          const span = isIllustration
            ? "sm:col-span-2 lg:col-span-2 lg:row-span-2"
            : isDark
              ? "lg:col-span-2"
              : "lg:col-span-2";

          if (isIllustration) {
            return (
              <Reveal
                key={item.title}
                delay={index * 30}
                className={`${span} h-full`}
              >
                <div className="relative h-full overflow-hidden rounded-md border border-slate-200 bg-slate-950 p-6">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl"
                  />
                  <p className="relative font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-300/90">
                    Security posture
                  </p>
                  <p className="relative mt-3 text-[18px] font-semibold text-white">
                    Continuous, layered defense
                  </p>
                  <p className="relative mt-2 text-[13.5px] leading-6 text-slate-300">
                    Identity, monitoring, and secure SDLC integrated into every
                    delivery.
                  </p>
                  <svg
                    viewBox="0 0 320 200"
                    className="relative mt-4 block h-auto w-full"
                    role="img"
                    aria-label="Layered security diagram"
                  >
                    <defs>
                      <radialGradient id="shieldGlow" cx="50%" cy="50%" r="50%">
                        <stop
                          offset="0%"
                          stopColor="#22d3ee"
                          stopOpacity="0.4"
                        />
                        <stop
                          offset="100%"
                          stopColor="#22d3ee"
                          stopOpacity="0"
                        />
                      </radialGradient>
                    </defs>
                    <circle cx="160" cy="100" r="80" fill="url(#shieldGlow)" />
                    {[70, 55, 40, 25].map((r, i) => (
                      <circle
                        key={r}
                        cx="160"
                        cy="100"
                        r={r}
                        fill="none"
                        stroke="#22d3ee"
                        strokeOpacity={0.15 + i * 0.12}
                        strokeDasharray="2 4"
                      />
                    ))}
                    <path
                      d="M160 60 L195 75 V105 C195 125 178 138 160 143 C142 138 125 125 125 105 V75 Z"
                      fill="#0f172a"
                      stroke="#22d3ee"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M148 100 L156 108 L174 88"
                      fill="none"
                      stroke="#22d3ee"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Reveal>
            );
          }

          return (
            <Reveal
              key={item.title}
              delay={index * 30}
              className={`${span} h-full`}
            >
              <div
                className={`group flex h-full flex-col rounded-md border p-6 transition-all duration-300 hover:-translate-y-0.5 ${
                  isDark
                    ? "border-slate-800 bg-slate-950 text-white hover:border-cyan-500/40"
                    : "border-slate-200 bg-white hover:border-cyan-500/40 hover:shadow-[0_20px_40px_-30px_rgba(15,23,42,0.4)]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-[10px] tracking-wider ${isDark ? "text-slate-500" : "text-slate-400"}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`h-px w-8 ${isDark ? "bg-white/15" : "bg-slate-200"}`}
                  />
                </div>
                <h3
                  className={`mt-4 text-[16px] font-semibold leading-snug ${isDark ? "text-white" : "text-slate-950"}`}
                >
                  {item.title}
                </h3>
                <p
                  className={`mt-3 flex-1 text-[14px] leading-6 ${isDark ? "text-slate-300" : "text-slate-600"}`}
                >
                  {item.text}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────────
   Industries — bento with mixed tones
   ───────────────────────────────────────────────────────────── */

const IndustriesSection = () => (
  <section className="border-b border-slate-200 bg-white">
    <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Technology services adaptable to different sectors and operating models."
          description="These are sectors where Fluxeey can support digital initiatives based on strategic priorities and technical requirements."
        />
      </Reveal>

      <div className="mt-14 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {industries.map((industry, index) => {
          const isAccent = index === 1;
          const isDark = index === 5;
          return (
            <Reveal key={industry} delay={index * 25} className="h-full">
              <div
                className={`group flex h-full min-h-[110px] flex-col justify-between gap-3 rounded-md border p-5 transition-all duration-300 hover:-translate-y-0.5 ${
                  isDark
                    ? "border-slate-800 bg-slate-950 text-white hover:border-cyan-500/40"
                    : isAccent
                      ? "border-cyan-200 bg-cyan-50 hover:border-cyan-400"
                      : "border-slate-200 bg-white hover:border-cyan-500/40 hover:shadow-[0_20px_40px_-30px_rgba(15,23,42,0.4)]"
                }`}
              >
                <span
                  className={`font-mono text-[10px] tracking-wider ${isDark ? "text-slate-500" : "text-slate-400"}`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p
                  className={`text-[14px] font-medium leading-6 ${isDark ? "text-white" : "text-slate-900"}`}
                >
                  {industry}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────────
   Technology & expertise — bento, one dark tech-map cell
   ───────────────────────────────────────────────────────────── */

const TechnologyExpertise = () => (
  <section className="border-b border-slate-200 bg-slate-50/80">
    <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Technology & Expertise"
          title="Balanced technology capability across product, cloud, AI, and infrastructure."
          description="We use a curated stack based on context, security needs, and long-term maintainability rather than one-size-fits-all choices."
        />
      </Reveal>

      <div className="mt-14 grid auto-rows-[minmax(150px,auto)] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {Object.entries(technologyCategories).map(
          ([category, tools], index) => {
            const isDark = index === 4;
            const isWide = index === 0 || index === 5;
            const span = isWide ? "sm:col-span-2" : "";
            return (
              <Reveal
                key={category}
                delay={index * 25}
                className={`${span} h-full`}
              >
                <div
                  className={`group flex h-full flex-col rounded-md border p-5 transition-all duration-300 hover:-translate-y-0.5 ${
                    isDark
                      ? "border-slate-800 bg-slate-950 text-white hover:border-cyan-500/40"
                      : "border-slate-200 bg-white hover:border-cyan-500/40 hover:shadow-[0_20px_40px_-30px_rgba(15,23,42,0.4)]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3
                      className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${isDark ? "text-cyan-300/90" : "text-slate-900"}`}
                    >
                      {category}
                    </h3>
                    <span
                      className={`font-mono text-[10px] tracking-wider ${isDark ? "text-slate-500" : "text-slate-400"}`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {tools.map((tool) => (
                      <li
                        key={tool}
                        className={`rounded-sm border px-2.5 py-1 text-[11.5px] font-medium ${
                          isDark
                            ? "border-white/15 text-slate-200"
                            : "border-slate-200 bg-slate-50 text-slate-700"
                        }`}
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          },
        )}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────────
   Process — horizontal stepper w/ subtle color
   ───────────────────────────────────────────────────────────── */

const ProcessSection = () => (
  <section className="relative border-b border-slate-200 bg-white">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(8,145,178,0.05),transparent_60%)]"
    />
    <div className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Our Process"
          title="A practical delivery model from discovery to continuous improvement."
        />
      </Reveal>

      <ol className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((item, index) => (
          <Reveal key={item.step} delay={index * 25} className="h-full">
            <li className="group flex h-full flex-col rounded-md border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/40 hover:shadow-[0_20px_40px_-30px_rgba(15,23,42,0.4)]">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-[0.2em] text-cyan-700">
                  {item.step}
                </span>
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-slate-200 group-hover:bg-cyan-500"
                />
              </div>
              <h3 className="mt-4 text-[16px] font-semibold leading-snug text-slate-950">
                {item.name}
              </h3>
              <p className="mt-3 text-[14px] leading-6 text-slate-600">
                {item.text}
              </p>
            </li>
          </Reveal>
        ))}
        <Reveal
          delay={processSteps.length * 25}
          className="h-full sm:col-span-2 lg:col-span-4"
        >
          <li className="flex flex-col items-start justify-between gap-4 rounded-md border border-cyan-200 bg-cyan-50 p-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-cyan-800">
                Delivery model
              </p>
              <p className="mt-2 max-w-2xl text-[14px] leading-6 text-slate-700">
                Structured, transparent, and aligned with your priorities — from
                first workshop to long-term operations.
              </p>
            </div>
            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-sm bg-slate-900 px-4 py-2.5 text-[13px] font-medium text-white transition-colors duration-200 hover:bg-slate-800"
            >
              Talk to us
              <ArrowIcon className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </li>
        </Reveal>
      </ol>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────────
   Featured projects — bento, dark w/ accent per project
   ───────────────────────────────────────────────────────────── */

const accentMap = {
  cyan: {
    text: "text-cyan-400",
    chipBorder: "border-cyan-400/30",
    glow: "bg-cyan-500/20",
  },
  amber: {
    text: "text-amber-300",
    chipBorder: "border-amber-300/30",
    glow: "bg-amber-500/20",
  },
  indigo: {
    text: "text-indigo-300",
    chipBorder: "border-indigo-400/30",
    glow: "bg-indigo-500/20",
  },
};

const FeaturedProjects = () => (
  <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 text-slate-100">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
      }}
    />
    <div className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:py-28">
      <Reveal>
        <SectionHeading
          tone="dark"
          eyebrow="Featured Projects"
          title="Preview of selected case-study style project work."
          description="Portfolio examples shown here are placeholder previews until full project case studies are published."
        />
      </Reveal>

      <div className="mt-14 grid auto-rows-[minmax(240px,auto)] grid-cols-1 gap-3 lg:grid-cols-3">
        {featuredProjects.map((project, index) => {
          const accent = accentMap[project.accent] || accentMap.cyan;
          const isFeature = index === 0;
          return (
            <Reveal
              key={project.name}
              delay={index * 35}
              className={`${isFeature ? "lg:col-span-2" : ""} h-full`}
            >
              <article className="group relative flex h-full flex-col overflow-hidden rounded-md border border-white/10 bg-slate-900/60 p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20">
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full ${accent.glow} blur-3xl`}
                />

                {isFeature && (
                  <svg
                    viewBox="0 0 600 200"
                    className="relative mb-6 block h-auto w-full"
                    role="img"
                    aria-label="Operations platform preview"
                  >
                    <rect width="600" height="200" rx="6" fill="#020617" />
                    <g stroke="#1e293b" strokeWidth="1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <line
                          key={`v${i}`}
                          x1={i * 120 + 60}
                          y1="20"
                          x2={i * 120 + 60}
                          y2="180"
                        />
                      ))}
                    </g>
                    {/* chart line */}
                    <polyline
                      points="40,150 110,130 180,140 250,100 320,115 390,80 460,95 530,60"
                      fill="none"
                      stroke="#22d3ee"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points="40,150 110,130 180,140 250,100 320,115 390,80 460,95 530,60 530,180 40,180"
                      fill="#22d3ee"
                      fillOpacity="0.08"
                      stroke="none"
                    />
                    {[
                      [110, 130],
                      [250, 100],
                      [390, 80],
                      [530, 60],
                    ].map(([x, y], i) => (
                      <circle
                        key={i}
                        cx={x}
                        cy={y}
                        r="3.5"
                        fill="#0f172a"
                        stroke="#22d3ee"
                        strokeWidth="1.5"
                      />
                    ))}
                    <text
                      x="40"
                      y="35"
                      fill="#64748b"
                      fontSize="10"
                      letterSpacing="2"
                    >
                      OPERATIONS · LAST 30D
                    </text>
                  </svg>
                )}

                <div className="relative flex items-center justify-between">
                  <p
                    className={`text-[11px] uppercase tracking-[0.2em] ${accent.text}`}
                  >
                    {project.category}
                  </p>
                  <span className="font-mono text-[10px] tracking-wider text-slate-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3
                  className={`relative mt-5 font-semibold leading-snug text-white ${isFeature ? "text-[24px]" : "text-[20px]"}`}
                >
                  {project.name}
                </h3>
                <p className="relative mt-3 flex-1 text-[14px] leading-6 text-slate-400">
                  {project.description}
                </p>
                <ul className="relative mt-6 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className={`rounded-sm border ${accent.chipBorder} px-2.5 py-1 text-[11.5px] text-slate-200`}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/portfolio"
                  className={`relative mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium ${accent.text} transition-colors duration-200 hover:text-white`}
                >
                  View Case Study
                  <ArrowIcon className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────────
   Stats — colored bento
   ───────────────────────────────────────────────────────────── */

const StatsSection = () => (
  <section className="border-b border-slate-200 bg-white">
    <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Statistics"
          title="Performance indicators ready for live business metrics."
          description="Replace these placeholders with validated company numbers as official statistics become available."
        />
      </Reveal>

      <div className="mt-14 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map((item, index) => {
          const tones = [
            "border-slate-200 bg-white",
            "border-cyan-200 bg-cyan-50",
            "border-slate-200 bg-slate-50",
            "border-slate-800 bg-slate-950 text-white",
          ];
          const tone = tones[index % tones.length];
          const isDark = index === 3;
          return (
            <Reveal key={item.label} delay={index * 30} className="h-full">
              <div
                className={`flex h-full flex-col rounded-md border p-7 ${tone} transition-all duration-300 hover:-translate-y-0.5`}
              >
                <span
                  className={`font-mono text-[10px] tracking-wider ${isDark ? "text-slate-500" : "text-slate-400"}`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p
                  className={`mt-5 text-[40px] font-semibold leading-none tracking-tight ${isDark ? "text-white" : "text-slate-950"}`}
                >
                  {item.value}
                </p>
                <p
                  className={`mt-3 text-[13px] uppercase tracking-[0.16em] ${isDark ? "text-slate-400" : "text-slate-500"}`}
                >
                  {item.label}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────────
   Testimonials
   ───────────────────────────────────────────────────────────── */

const TestimonialsSection = () => (
  <section className="border-b border-slate-200 bg-slate-50/80">
    <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Testimonials"
          title="What future client references can look like here."
          description="The entries below are clearly marked placeholder testimonials and should be replaced with approved client statements."
        />
      </Reveal>

      <div className="mt-14 grid gap-3 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => {
          const isDark = index === 1;
          return (
            <Reveal
              key={`${testimonial.name}-${index}`}
              delay={index * 35}
              className="h-full"
            >
              <figure
                className={`flex h-full flex-col rounded-md border p-7 transition-all duration-300 hover:-translate-y-0.5 ${
                  isDark
                    ? "border-slate-800 bg-slate-950 text-white"
                    : "border-slate-200 bg-white"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`font-serif text-[48px] leading-none ${isDark ? "text-cyan-400/40" : "text-cyan-600/40"}`}
                >
                  &ldquo;
                </span>
                <blockquote
                  className={`mt-2 flex-1 text-[14.5px] leading-7 ${isDark ? "text-slate-200" : "text-slate-700"}`}
                >
                  {testimonial.quote}
                </blockquote>
                <figcaption
                  className={`mt-6 flex items-center gap-3 border-t pt-5 ${isDark ? "border-white/10" : "border-slate-200"}`}
                >
                  <span
                    aria-hidden="true"
                    className={`flex h-9 w-9 items-center justify-center rounded-sm font-mono text-[11px] ${
                      isDark
                        ? "border border-white/15 text-slate-300"
                        : "border border-slate-200 bg-slate-50 text-slate-500"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <p
                      className={`text-[13.5px] font-semibold ${isDark ? "text-white" : "text-slate-900"}`}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      className={`text-[12px] ${isDark ? "text-slate-400" : "text-slate-500"}`}
                    >
                      {testimonial.role}
                    </p>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────────
   Final CTA
   ───────────────────────────────────────────────────────────── */

const FinalCTA = () => (
  <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 text-white">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.08]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-3xl"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -left-40 -bottom-40 h-[380px] w-[380px] rounded-full bg-indigo-500/15 blur-3xl"
    />

    <div className="relative mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:py-32">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="mx-auto flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-cyan-300/90">
          <span aria-hidden="true" className="h-px w-8 bg-cyan-400/60" />
          Start the Conversation
          <span aria-hidden="true" className="h-px w-8 bg-cyan-400/60" />
        </p>
        <h2 className="mt-6 text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] sm:text-[42px] lg:text-[52px]">
          Let&apos;s build what comes next.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-7 text-slate-300">
          Share your technology goals and challenges with Fluxeey. We will help
          you shape, deliver, and scale the right solution.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-sm bg-white px-5 py-3 text-[14px] font-medium text-slate-900 transition-colors duration-200 hover:bg-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Start a Project
            <ArrowIcon className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-sm border border-white/30 px-5 py-3 text-[14px] font-medium text-white transition-colors duration-200 hover:border-cyan-400/60 hover:bg-white/5"
          >
            Contact Us
            <ArrowIcon className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────────
   Contact teaser
   ───────────────────────────────────────────────────────────── */

const ContactTeaser = () => (
  <section className="bg-white">
    <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-14 sm:px-8 md:grid-cols-3 md:items-start md:gap-12 lg:py-16">
      <div className="md:col-span-1">
        <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-slate-500">
          <span aria-hidden="true" className="h-px w-8 bg-cyan-600" />
          Contact
        </p>
        <p className="mt-4 max-w-xs text-[14px] leading-6 text-slate-600">
          Reach out to discuss a project, partnership, or technical requirement.
        </p>
      </div>

      <dl className="grid gap-5 sm:grid-cols-3 md:col-span-1">
        {[
          { k: "Email", v: contactInfo.email },
          { k: "Phone", v: contactInfo.phone },
          { k: "Location", v: contactInfo.location },
        ].map((row) => (
          <div key={row.k}>
            <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
              {row.k}
            </dt>
            <dd className="mt-2 text-[14px] text-slate-800">{row.v}</dd>
          </div>
        ))}
      </dl>

      <div className="md:col-span-1 md:justify-self-end">
        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 rounded-sm bg-slate-900 px-5 py-3 text-[14px] font-medium text-white transition-colors duration-200 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
        >
          Go to Contact
          <ArrowIcon className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────────────────────
   Page
   ───────────────────────────────────────────────────────────── */

const Home = () => {
  return (
    <main className="ft-home bg-white text-slate-900">
      <HeroSection />
      <TrustStrip />
      <CompanyIntroduction />
      <CoreServices />
      <SolutionsCapabilities />
      <WhyChoose />
      <IndustriesSection />
      <TechnologyExpertise />
      <ProcessSection />
      <FeaturedProjects />
      <StatsSection />
      <TestimonialsSection />
      <FinalCTA />
      <ContactTeaser />
    </main>
  );
};

export default Home;
