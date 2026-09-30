import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const coreValues = [
  {
    key: "innovation",
    title: "Innovation",
    text: "We explore practical new ideas that create measurable business impact.",
  },
  {
    key: "integrity",
    title: "Integrity",
    text: "We communicate honestly, deliver responsibly, and build trust through actions.",
  },
  {
    key: "security",
    title: "Security",
    text: "We treat security as a core design principle across products and platforms.",
  },
  {
    key: "excellence",
    title: "Excellence",
    text: "We value quality engineering, thoughtful details, and dependable outcomes.",
  },
  {
    key: "collaboration",
    title: "Collaboration",
    text: "We work closely with client teams to align technology with real priorities.",
  },
  {
    key: "learning",
    title: "Continuous Learning",
    text: "We evolve our methods and skills to stay effective in a changing landscape.",
  },
];

const capabilities = [
  {
    title: "Software Development",
    detail:
      "Build robust systems that solve core operational and customer challenges.",
  },
  {
    title: "Web & Mobile Applications",
    detail:
      "Deliver connected digital experiences across browser and mobile platforms.",
  },
  {
    title: "IT Consulting",
    detail:
      "Translate business goals into practical architecture and delivery strategies.",
  },
  {
    title: "Cybersecurity",
    detail:
      "Protect systems, data, and operations through security-first implementation.",
  },
  {
    title: "AI & Automation",
    detail:
      "Improve decisions and efficiency using intelligent and automated workflows.",
  },
  {
    title: "Cloud Computing",
    detail:
      "Design and optimize cloud environments for reliability and adaptability.",
  },
  {
    title: "Systems Integration",
    detail:
      "Connect tools and data pipelines for smoother enterprise operations.",
  },
  {
    title: "Digital Transformation",
    detail:
      "Modernize processes and digital touchpoints with focused execution.",
  },
  {
    title: "Technology Infrastructure",
    detail:
      "Strengthen foundational infrastructure for secure and scalable growth.",
  },
];

const approachSteps = [
  "Understand the business",
  "Define the problem",
  "Design the solution",
  "Build with modern technology",
  "Security and quality assurance",
  "Deploy and monitor",
  "Continuously improve",
];

const philosophyPillars = [
  "Useful",
  "Scalable",
  "Secure",
  "Maintainable",
  "User-centered",
  "Business-driven",
];

const whyFluxeey = [
  "Understanding before building",
  "Security by design",
  "Scalable architecture",
  "Practical innovation",
  "Transparent communication",
  "Long-term support",
];

const teamMembers = [
  {
    name: "Team Member Placeholder",
    role: "Role Placeholder",
    bio: "Placeholder profile for future team member information.",
    linkedin: "#",
  },
  {
    name: "Team Member Placeholder",
    role: "Role Placeholder",
    bio: "Placeholder profile for future team member information.",
    linkedin: "#",
  },
  {
    name: "Team Member Placeholder",
    role: "Role Placeholder",
    bio: "Placeholder profile for future team member information.",
    linkedin: "#",
  },
];

const iconPaths = {
  innovation:
    "M12 3l2 4.5L19 9l-3.8 3 1.2 4.8L12 14.8 7.6 16.8 8.8 12 5 9l5-1.5L12 3z",
  integrity: "M12 2l8 4v6c0 5.2-3.3 9.7-8 11-4.7-1.3-8-5.8-8-11V6l8-4z",
  security: "M12 3l7 3v5c0 4.9-3.1 9.2-7 10-3.9-.8-7-5.1-7-10V6l7-3z",
  excellence: "M4 12h16M12 4v16M6.3 6.3l11.4 11.4M17.7 6.3L6.3 17.7",
  collaboration:
    "M8 11a3 3 0 100-6 3 3 0 000 6zm8 0a3 3 0 100-6 3 3 0 000 6zM2 20a6 6 0 0112 0M10 20a6 6 0 0112 0",
  learning: "M4 6h9a3 3 0 013 3v9H7a3 3 0 01-3-3V6zm12 2h4v10a3 3 0 01-3 3h-9",
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

const ValueIcon = ({ kind }) => (
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

const AboutHero = () => (
  <section className="relative overflow-hidden border-b border-slate-200 bg-white">
    <div className="ft-grid-overlay" />
    <div className="pointer-events-none absolute -left-32 top-8 h-64 w-64 rounded-full bg-cyan-100/80 blur-3xl" />
    <div className="pointer-events-none absolute -right-28 bottom-0 h-72 w-72 rounded-full bg-teal-100/70 blur-3xl" />

    <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-6 pb-14 pt-14 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:pb-20 lg:pt-18">
      <div>
        <p className="ft-animate-in ft-eyebrow">ABOUT FLUXEEY TECHNOLOGIES</p>
        <h1 className="ft-animate-in ft-delay-1 mt-5 text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
          Technology built with purpose, delivered with accountability.
        </h1>
        <p className="ft-animate-in ft-delay-2 mt-5 max-w-xl text-lg leading-8 text-slate-600">
          Fluxeey Technologies is a technology solutions and services company
          helping organizations design, build, secure, and scale digital
          capabilities that support real business progress.
        </p>
      </div>

      <div className="ft-animate-in ft-delay-2">
        <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-slate-100 shadow-[0_32px_90px_-46px_rgba(2,132,199,0.6)]">
          <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">
            Systems Perspective
          </p>
          <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs">
            <div className="rounded-md border border-cyan-300/30 bg-cyan-300/10 p-3">
              Business
            </div>
            <div className="rounded-md border border-teal-300/30 bg-teal-300/10 p-3">
              Technology
            </div>
            <div className="rounded-md border border-indigo-300/30 bg-indigo-300/10 p-3">
              Operations
            </div>
          </div>
          <div className="mt-4 space-y-3">
            <div className="h-2 rounded bg-gradient-to-r from-cyan-300/70 via-teal-300/50 to-transparent" />
            <div className="h-2 rounded bg-gradient-to-r from-teal-300/70 via-indigo-300/50 to-transparent" />
            <div className="h-2 rounded bg-gradient-to-r from-indigo-300/70 via-cyan-300/40 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const OurStory = () => (
  <section className="mx-auto w-full max-w-6xl px-6 py-20">
    <Reveal className="grid gap-12 lg:grid-cols-2 lg:items-start">
      <div>
        <SectionHeading
          eyebrow="OUR STORY"
          title="A company built around practical technology outcomes."
        />
        <p className="mt-5 text-base leading-7 text-slate-600">
          Fluxeey Technologies was created to bridge the gap between business
          ambition and technical execution. Our story centers on helping
          organizations make confident technology decisions that produce
          measurable value.
        </p>
        <p className="mt-4 text-base leading-7 text-slate-600">
          We focus on delivering solutions that are realistic to implement,
          sustainable to operate, and aligned with long-term growth goals across
          products, systems, and infrastructure.
        </p>
        <p className="mt-4 text-base leading-7 text-slate-600">
          This section is intentionally structured to be updated with verified
          company milestones and history as those details are published.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Journey Framework
        </p>
        <ol className="mt-5 space-y-4">
          {["Purpose", "Foundation", "Growth", "Future Direction"].map(
            (stage, index) => (
              <li key={stage} className="flex gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                  {index + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {stage}
                  </p>
                  <p className="text-sm text-slate-600">
                    Placeholder content ready for verified timeline details.
                  </p>
                </div>
              </li>
            ),
          )}
        </ol>
      </div>
    </Reveal>
  </section>
);

const MissionVision = () => (
  <section className="border-y border-slate-200 bg-slate-50/80">
    <div className="mx-auto grid w-full max-w-6xl gap-5 px-6 py-20 md:grid-cols-2">
      <Reveal>
        <article className="h-full rounded-3xl border border-cyan-200 bg-white p-7 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
            Mission
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-900">
            Solve real business problems through technology.
          </h3>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Fluxeey exists to deliver technology solutions and services that
            improve how organizations operate, serve customers, and make
            decisions.
          </p>
        </article>
      </Reveal>
      <Reveal delay={80}>
        <article className="h-full rounded-3xl border border-slate-800 bg-slate-900 p-7 text-slate-100 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Vision
          </p>
          <h3 className="mt-3 text-2xl font-semibold">
            A trusted long-term technology partner.
          </h3>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Our long-term ambition is to help organizations continuously evolve
            through secure, scalable, and business-aligned technology
            capabilities.
          </p>
        </article>
      </Reveal>
    </div>
  </section>
);

const CoreValues = () => (
  <section className="mx-auto w-full max-w-6xl px-6 py-20">
    <Reveal>
      <SectionHeading
        eyebrow="OUR CORE VALUES"
        title="Principles that guide how we work and deliver."
      />
    </Reveal>
    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {coreValues.map((value, index) => (
        <Reveal key={value.title} delay={index * 45}>
          <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-md">
            <div className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-2 text-slate-700">
              <ValueIcon kind={value.key} />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              {value.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {value.text}
            </p>
          </article>
        </Reveal>
      ))}
    </div>
  </section>
);

const WhatWeDo = () => (
  <section className="border-y border-slate-200 bg-slate-950 text-slate-100">
    <div className="mx-auto w-full max-w-6xl px-6 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="WHAT WE DO"
          title="Integrated capabilities that work better together."
          description="Fluxeey combines product engineering, enterprise technology, security, and operations expertise to deliver complete solutions rather than isolated services."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {capabilities.map((item, index) => (
          <Reveal key={item.title} delay={index * 35}>
            <article className="h-full rounded-2xl border border-white/15 bg-white/5 p-5">
              <h3 className="text-base font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {item.detail}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const OurApproach = () => (
  <section className="mx-auto w-full max-w-6xl px-6 py-20">
    <Reveal>
      <SectionHeading
        eyebrow="OUR APPROACH"
        title="A visual process for responsible technology execution."
      />
    </Reveal>

    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {approachSteps.map((step, index) => (
        <Reveal key={step} delay={index * 35}>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-xs font-semibold tracking-[0.2em] text-cyan-700">
              {String(index + 1).padStart(2, "0")}
            </p>
            <p className="mt-2 text-base font-semibold text-slate-900">
              {step}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

const TechnologyPhilosophy = () => (
  <section className="border-y border-slate-200 bg-slate-50/80">
    <div className="mx-auto w-full max-w-6xl px-6 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="TECHNOLOGY PHILOSOPHY"
          title="Technology should be meaningful, resilient, and people-aware."
          centered
        />
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {philosophyPillars.map((pillar, index) => (
          <Reveal key={pillar} delay={index * 45}>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
              <p className="text-lg font-semibold text-slate-900">{pillar}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const WhyFluxeey = () => (
  <section className="mx-auto w-full max-w-6xl px-6 py-20">
    <Reveal>
      <SectionHeading
        eyebrow="WHY FLUXEEY"
        title="How we partner with teams and organizations."
      />
    </Reveal>

    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {whyFluxeey.map((item, index) => (
        <Reveal key={item} delay={index * 40}>
          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-base font-semibold text-slate-900">{item}</p>
          </article>
        </Reveal>
      ))}
    </div>
  </section>
);

const TeamSection = () => (
  <section className="border-y border-slate-200 bg-slate-50/70">
    <div className="mx-auto w-full max-w-6xl px-6 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="TEAM"
          title="Team structure ready for real member profiles."
          description="Replace placeholders below with verified team member information and approved profile images."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {teamMembers.map((member, index) => (
          <Reveal key={`${member.name}-${index}`} delay={index * 40}>
            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <div
                className="h-16 w-16 rounded-full bg-slate-200"
                aria-hidden="true"
              />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-cyan-700">
                {member.role}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {member.bio}
              </p>
              <a
                href={member.linkedin}
                className="mt-4 inline-block text-sm font-semibold text-slate-700 hover:text-slate-900"
              >
                LinkedIn Profile
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const ClosingCTA = () => (
  <section className="relative overflow-hidden bg-slate-900 text-white">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.22),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(45,212,191,0.2),transparent_36%)]" />
    <div className="relative mx-auto w-full max-w-6xl px-6 py-20 text-center">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Technology Should Move Your Business Forward.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
          Let&apos;s discuss your goals and design a technology path that
          supports growth, resilience, and long-term value.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            Work With Us
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
          >
            Contact Fluxeey
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

const AboutUs = () => {
  return (
    <main className="ft-home bg-white text-slate-900">
      <AboutHero />
      <OurStory />
      <MissionVision />
      <CoreValues />
      <WhatWeDo />
      <OurApproach />
      <TechnologyPhilosophy />
      <WhyFluxeey />
      <TeamSection />
      <ClosingCTA />
    </main>
  );
};

export default AboutUs;
