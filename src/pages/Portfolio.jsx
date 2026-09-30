import { Link } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";

const categories = [
  "All",
  "Websites",
  "Web Applications",
  "Mobile Applications",
  "Enterprise Systems",
  "AI & Automation",
  "Cybersecurity",
  "Cloud & Infrastructure",
];

const portfolioProjects = [
  {
    id: "orbit-finance-portal",
    name: "Orbit Finance Portal",
    category: "Web Applications",
    categories: [
      "Web Applications",
      "Enterprise Systems",
      "Cloud & Infrastructure",
    ],
    shortDescription:
      "A secure financial operations portal for internal approvals, reporting, and multi-role access control.",
    challenge:
      "The client needed to replace disconnected spreadsheets and manual approval chains without disrupting ongoing operations.",
    solution:
      "Fluxeey designed a phased portal implementation with centralized workflows, role-based permissions, and audit-friendly activity tracking.",
    outcome:
      "Production release completed with a structured foundation for future optimization phases. Quantitative impact data is client-controlled.",
    approach:
      "Workshops with finance and operations teams defined workflows, then iterative releases validated functionality in stages.",
    implementation:
      "Delivered using modular frontend components, service-oriented APIs, and staged deployment across controlled environments.",
    technologies: ["React", "Tailwind CSS", "React Router", "JavaScript"],
    technologyGroups: {
      Frontend: ["React", "Tailwind CSS", "JavaScript"],
      DevOps: ["Vite"],
      Cloud: ["Project-specific cloud stack"],
    },
    featured: true,
    mockupTheme: "from-cyan-500/30 via-slate-600/30 to-indigo-500/30",
    gallery: ["Dashboard View", "Approval Workflow", "Reporting Module"],
    impacts: [],
  },
  {
    id: "civic-services-gateway",
    name: "Civic Services Gateway",
    category: "Websites",
    categories: ["Websites", "Systems Integration", "Cloud & Infrastructure"],
    shortDescription:
      "A public-facing digital gateway for service information, forms, and integrated status lookups.",
    challenge:
      "Public service information was spread across multiple legacy pages with inconsistent user journeys.",
    solution:
      "Fluxeey created a modern information architecture and integrated backend endpoints for consistent, searchable service access.",
    outcome:
      "The platform launched as a unified digital touchpoint with capability for ongoing content and service integration updates.",
    approach:
      "Research-driven UX mapping prioritized high-demand services and accessibility-first interface behavior.",
    implementation:
      "Built with componentized page sections and integration-ready service modules to support future expansion.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    technologyGroups: {
      Frontend: ["React", "Tailwind CSS"],
      Backend: ["Project-specific integration services"],
      Cloud: ["Project-specific hosting"],
    },
    featured: true,
    mockupTheme: "from-teal-500/30 via-slate-600/30 to-sky-500/30",
    gallery: ["Landing Experience", "Service Navigator", "Status Tracking"],
    impacts: [],
  },
  {
    id: "fieldops-mobile-suite",
    name: "FieldOps Mobile Suite",
    category: "Mobile Applications",
    categories: [
      "Mobile Applications",
      "AI & Automation",
      "Enterprise Systems",
    ],
    shortDescription:
      "A field operations mobile workflow suite for task capture, digital forms, and real-time team coordination.",
    challenge:
      "Distributed field teams relied on delayed manual reporting, creating visibility and response-time gaps.",
    solution:
      "Fluxeey designed a mobile-first workflow model with synchronized records and automation-ready task routing.",
    outcome:
      "Operational reporting became more structured and timely, with analytics and automation layers prepared for future rollout.",
    approach:
      "Co-design sessions with field supervisors shaped offline-friendly user journeys and role-specific interfaces.",
    implementation:
      "Implemented with reusable UI patterns and API-first connectivity for internal system alignment.",
    technologies: ["React", "JavaScript", "React Router"],
    technologyGroups: {
      Mobile: ["Cross-platform implementation model"],
      Frontend: ["React", "JavaScript"],
      AI: ["Automation-ready process layer"],
    },
    featured: true,
    mockupTheme: "from-indigo-500/30 via-slate-600/30 to-cyan-500/30",
    gallery: ["Task Board", "Digital Forms", "Team Sync"],
    impacts: [],
  },
  {
    id: "sentinel-security-console",
    name: "Sentinel Security Console",
    category: "Cybersecurity",
    categories: [
      "Cybersecurity",
      "Enterprise Systems",
      "Cloud & Infrastructure",
    ],
    shortDescription:
      "A consolidated security console for visibility into risk signals, incidents, and response workflows.",
    challenge:
      "Security data sources were fragmented, making coordinated monitoring and response difficult.",
    solution:
      "Fluxeey designed a centralized console to bring events, alerts, and response activities into a unified interface.",
    outcome:
      "Security teams gained a structured operational view and a maintainable base for ongoing security process improvement.",
    approach:
      "Threat scenario workshops informed dashboard priorities, alert categories, and escalation mapping.",
    implementation:
      "Delivered as a modular interface with integration hooks for additional monitoring sources over time.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    technologyGroups: {
      Cybersecurity: [
        "Security monitoring workflows",
        "Risk signal aggregation",
      ],
      Frontend: ["React", "Tailwind CSS"],
      Infrastructure: ["Project-specific deployment stack"],
    },
    featured: false,
    mockupTheme: "from-emerald-500/30 via-slate-600/30 to-cyan-500/30",
    gallery: ["Incident Feed", "Risk Summary", "Response Tracker"],
    impacts: [],
  },
  {
    id: "nexus-automation-engine",
    name: "Nexus Automation Engine",
    category: "AI & Automation",
    categories: ["AI & Automation", "Web Applications", "Enterprise Systems"],
    shortDescription:
      "An automation engine for structured document handling, routing, and process status visibility.",
    challenge:
      "Business teams needed to reduce repetitive document processing and improve processing consistency.",
    solution:
      "Fluxeey introduced an automation pipeline with configurable workflow rules and review checkpoints.",
    outcome:
      "Manual processing dependencies were reduced in pilot workflows, with additional process expansion planned.",
    approach:
      "Current-state mapping identified repetitive bottlenecks and high-value automation opportunities.",
    implementation:
      "Built as a service-connected platform with clear workflow stages and extensible integration points.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    technologyGroups: {
      AI: ["Workflow automation layer", "Process intelligence hooks"],
      Frontend: ["React", "Tailwind CSS"],
      Backend: ["Project-specific orchestration services"],
    },
    featured: false,
    mockupTheme: "from-violet-500/30 via-slate-600/30 to-cyan-500/30",
    gallery: ["Workflow Builder", "Document Queue", "Automation Insights"],
    impacts: [],
  },
  {
    id: "atlas-infra-control",
    name: "Atlas Infrastructure Control",
    category: "Cloud & Infrastructure",
    categories: [
      "Cloud & Infrastructure",
      "Enterprise Systems",
      "Web Applications",
    ],
    shortDescription:
      "An infrastructure control interface for deployment visibility, environment checks, and operational status tracking.",
    challenge:
      "Infrastructure operations lacked a unified dashboard for deployment and health context across environments.",
    solution:
      "Fluxeey built a centralized control interface with environment views, release checkpoints, and monitoring references.",
    outcome:
      "Teams now use a consistent operational reference point, simplifying environment awareness and release readiness reviews.",
    approach:
      "Infrastructure and delivery stakeholders collaborated on key states, alerts, and deployment decision checkpoints.",
    implementation:
      "Implemented with a dashboard-first architecture and integration-ready modules for evolving infrastructure tooling.",
    technologies: ["React", "JavaScript", "Vite"],
    technologyGroups: {
      Cloud: ["Project-specific cloud environments"],
      DevOps: ["Vite", "Deployment workflow integration"],
      Frontend: ["React", "JavaScript"],
    },
    featured: false,
    mockupTheme: "from-sky-500/30 via-slate-600/30 to-emerald-500/30",
    gallery: ["Environment Matrix", "Release Status", "Ops Console"],
    impacts: [],
  },
];

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

const ProjectMockup = ({ project, compact = false }) => (
  <div
    className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${project.mockupTheme} ${compact ? "h-44" : "h-64"}`}
  >
    <div className="absolute inset-4 rounded-xl border border-white/30 bg-slate-950/50 p-3">
      <div className="mb-3 flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-rose-300/80" />
        <span className="h-2 w-2 rounded-full bg-amber-300/80" />
        <span className="h-2 w-2 rounded-full bg-emerald-300/80" />
      </div>
      <div className="grid h-[calc(100%-16px)] grid-cols-3 gap-2">
        <div className="col-span-2 rounded-md border border-white/20 bg-white/10" />
        <div className="rounded-md border border-white/20 bg-white/10" />
        <div className="rounded-md border border-white/20 bg-white/5" />
        <div className="col-span-2 rounded-md border border-white/20 bg-white/5" />
      </div>
    </div>
  </div>
);

const CaseStudyModal = ({ project, onClose }) => {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/85 px-4 py-6">
      <div className="relative max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-3xl border border-white/15 bg-slate-900 text-slate-100 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="sticky right-4 top-4 float-right z-10 mt-4 mr-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white hover:bg-white/20"
        >
          Close
        </button>

        <div className="clear-both grid gap-8 p-6 lg:grid-cols-[1.05fr_1fr] lg:p-10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
              Case Study
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              {project.name}
            </h3>
            <p className="mt-2 text-sm text-slate-300">{project.category}</p>
            <p className="mt-6 text-base leading-7 text-slate-300">
              {project.shortDescription}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <ProjectMockup project={project} />
        </div>

        <div className="grid gap-5 p-6 pt-0 lg:grid-cols-2 lg:p-10 lg:pt-0">
          <article className="rounded-2xl border border-white/15 bg-white/5 p-5">
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
              Overview
            </h4>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {project.shortDescription}
            </p>
          </article>
          <article className="rounded-2xl border border-white/15 bg-white/5 p-5">
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
              Challenge
            </h4>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {project.challenge}
            </p>
          </article>
          <article className="rounded-2xl border border-white/15 bg-white/5 p-5">
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
              Approach
            </h4>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {project.approach}
            </p>
          </article>
          <article className="rounded-2xl border border-white/15 bg-white/5 p-5">
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
              Solution
            </h4>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {project.solution}
            </p>
          </article>
          <article className="rounded-2xl border border-white/15 bg-white/5 p-5">
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
              Technology
            </h4>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {project.technologies.join(", ")}
            </p>
          </article>
          <article className="rounded-2xl border border-white/15 bg-white/5 p-5">
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
              Implementation
            </h4>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {project.implementation}
            </p>
          </article>
          <article className="rounded-2xl border border-white/15 bg-white/5 p-5 lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
              Outcome
            </h4>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {project.outcome}
            </p>
          </article>
          <article className="rounded-2xl border border-white/15 bg-white/5 p-5 lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
              Gallery
            </h4>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {project.gallery.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 p-4 text-center text-xs text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>

      <button
        type="button"
        aria-label="Close case study"
        onClick={onClose}
        className="absolute inset-0 -z-10 h-full w-full"
      />
    </div>
  );
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return portfolioProjects;
    }

    return portfolioProjects.filter((project) =>
      project.categories.includes(activeCategory),
    );
  }, [activeCategory]);

  const featuredProjects = portfolioProjects
    .filter((project) => project.featured)
    .slice(0, 4);

  const technologyGroups = useMemo(() => {
    const grouped = {};

    portfolioProjects.forEach((project) => {
      Object.entries(project.technologyGroups).forEach(([group, tools]) => {
        if (!grouped[group]) {
          grouped[group] = new Set();
        }

        tools.forEach((tool) => grouped[group].add(tool));
      });
    });

    return Object.fromEntries(
      Object.entries(grouped).map(([group, set]) => [group, Array.from(set)]),
    );
  }, []);

  const impactMetrics = useMemo(
    () => portfolioProjects.flatMap((project) => project.impacts),
    [],
  );

  return (
    <main className="ft-home bg-white text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="ft-grid-overlay" />
        <div className="pointer-events-none absolute -left-24 top-8 h-64 w-64 rounded-full bg-cyan-100/80 blur-3xl" />
        <div className="pointer-events-none absolute -right-28 bottom-4 h-72 w-72 rounded-full bg-teal-100/70 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-6 pb-16 pt-14 lg:grid-cols-2 lg:items-center lg:pb-20">
          <div>
            <p className="ft-animate-in ft-eyebrow">OUR WORK</p>
            <h1 className="ft-animate-in ft-delay-1 mt-5 text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Technology We&apos;ve Built.
            </h1>
            <p className="ft-animate-in ft-delay-2 mt-6 max-w-xl text-lg leading-8 text-slate-600">
              This portfolio highlights selected digital products, platforms,
              applications, and technology solutions delivered by Fluxeey across
              web, mobile, enterprise, security, AI, and infrastructure
              contexts.
            </p>
          </div>

          <div className="ft-animate-in ft-delay-2 rounded-3xl border border-slate-200 bg-slate-950 p-6 text-slate-100 shadow-[0_30px_90px_-42px_rgba(8,145,178,0.6)]">
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">
              Portfolio Lens
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-3">
                Digital Products
              </div>
              <div className="rounded-lg border border-teal-300/20 bg-teal-300/10 p-3">
                Enterprise Platforms
              </div>
              <div className="rounded-lg border border-indigo-300/20 bg-indigo-300/10 p-3">
                Security Solutions
              </div>
              <div className="rounded-lg border border-sky-300/20 bg-sky-300/10 p-3">
                Infrastructure Systems
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50/80">
        <div className="mx-auto w-full max-w-6xl px-6 py-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={[
                  "rounded-full border px-4 py-2 text-sm font-semibold transition",
                  activeCategory === category
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-300 bg-white text-slate-700 hover:border-slate-900 hover:text-slate-900",
                ].join(" ")}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <Reveal>
          <SectionHeading
            eyebrow="FEATURED PROJECTS"
            title="Selected case studies from Fluxeey delivery work."
            description="High-priority portfolio highlights with context on challenge, approach, and implemented solution direction."
          />
        </Reveal>

        <div className="mt-10 space-y-6">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 45}>
              <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
                <div className="grid gap-0 lg:grid-cols-[1.1fr_1fr]">
                  <div className="bg-slate-950 p-6 text-slate-100">
                    <ProjectMockup project={project} />
                  </div>

                  <div className="p-6 lg:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
                      {project.category}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                      {project.name}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {project.shortDescription}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 grid gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                          Key Challenge
                        </p>
                        <p className="mt-1 text-sm text-slate-700">
                          {project.challenge}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                          Solution
                        </p>
                        <p className="mt-1 text-sm text-slate-700">
                          {project.solution}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                          Outcome
                        </p>
                        <p className="mt-1 text-sm text-slate-700">
                          {project.outcome}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="mt-6 rounded-full border border-slate-900 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
                    >
                      View Case Study
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <Reveal>
            <SectionHeading
              eyebrow="PROJECT GRID"
              title="Explore the full portfolio by category."
              description="Filtered results update instantly, making it easy to focus on relevant project types."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <Reveal
                key={`${project.id}-${activeCategory}`}
                delay={index * 25}
              >
                <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg">
                  <div className="bg-slate-950 p-4">
                    <ProjectMockup project={project} compact />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">
                      {project.category}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-900">
                      {project.name}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {project.shortDescription}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="mt-5 text-sm font-semibold text-slate-900 underline-offset-4 transition group-hover:underline"
                    >
                      View project
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <Reveal>
          <SectionHeading
            eyebrow="TECHNOLOGY USED"
            title="Portfolio technologies grouped by capability areas."
            description="Stack visibility is organized for clarity instead of presenting an unstructured wall of tools."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {Object.entries(technologyGroups).map(([group, tools], index) => (
            <Reveal key={group} delay={index * 35}>
              <article className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-900">
                  {group}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
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

      <section className="border-y border-slate-200 bg-slate-50/80">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <Reveal>
            <SectionHeading
              eyebrow="RESULTS & IMPACT"
              title="Verified metrics appear here when available."
              description="This section is intentionally data-driven and only displays impact metrics when published project data exists."
            />
          </Reveal>

          {impactMetrics.length > 0 ? (
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {impactMetrics.map((metric, index) => (
                <Reveal key={`${metric}-${index}`} delay={index * 30}>
                  <div className="rounded-2xl border border-cyan-100 bg-white p-5">
                    <p className="text-sm font-semibold text-slate-900">
                      {metric}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-sm leading-7 text-slate-600">
                Public quantitative impact metrics have not been published yet.
                Verified performance and business impact data will be added here
                as it becomes available.
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.2),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(45,212,191,0.18),transparent_36%)]" />
        <div className="relative mx-auto w-full max-w-6xl px-6 py-20 text-center">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Have a Project in Mind?
            </h2>
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
                Talk to Our Team
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {activeProject ? (
        <CaseStudyModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      ) : null}
    </main>
  );
};

export default Portfolio;
