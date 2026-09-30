import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const contactConfig = {
  email: null,
  phone: null,
  officeLocation: null,
  businessHours: null,
  directionsUrl: null,
};

const formConfig = {
  budgetOptions: [
    "Not sure yet",
    "Early-stage budget",
    "Mid-range budget",
    "Large-scale budget",
    "Prefer to discuss",
  ],
  timelineOptions: [
    "As soon as possible",
    "Within 1 month",
    "1-3 months",
    "3-6 months",
    "More than 6 months",
    "Flexible / To be discussed",
  ],
  maxLengths: {
    fullName: 80,
    company: 120,
    email: 120,
    phone: 30,
    message: 1200,
  },
  submitEnquiry: null,
};

const projectTypeOptions = [
  "Software Development",
  "Website",
  "Web Application",
  "Mobile Application",
  "Cybersecurity",
  "AI & Automation",
  "Cloud Computing",
  "IT Consulting",
  "Systems Integration",
  "Digital Transformation",
  "Infrastructure",
  "Other",
];

const nextSteps = [
  "You Contact Us",
  "We Understand Your Needs",
  "We Define the Solution",
  "We Begin the Project",
];

const whyContact = [
  "Clear communication",
  "Practical technology solutions",
  "Security-conscious approach",
  "Solutions designed around business needs",
];

const faqs = [
  {
    question: "How do I start a project?",
    answer:
      "Send an enquiry with your business challenge, goals, and timelines. Fluxeey will follow up to begin the discovery conversation.",
  },
  {
    question: "What information should I provide in the first message?",
    answer:
      "Share your project type, current challenge, desired outcomes, timeline expectations, and any existing systems involved.",
  },
  {
    question: "Do you work with businesses outside your location?",
    answer:
      "Yes. Fluxeey can collaborate remotely with organizations in different regions using structured communication and delivery workflows.",
  },
  {
    question: "Do you provide ongoing support after delivery?",
    answer:
      "Yes. Support options can include maintenance, optimization, monitoring guidance, and iterative enhancements.",
  },
  {
    question: "Can you work with an existing development team?",
    answer:
      "Yes. Fluxeey can integrate with internal teams to provide focused delivery, advisory support, or specialized engineering services.",
  },
  {
    question: "Can you sign an NDA before discussing a project?",
    answer:
      "Yes. NDA requirements can be addressed before sharing sensitive technical or business information.",
  },
];

const defaultFormData = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  budgetRange: "",
  preferredTimeline: "",
  message: "",
};

const getContactValue = (value, fallback) => value || fallback;

const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const validateForm = (formData) => {
  const errors = {};

  if (!formData.fullName.trim()) {
    errors.fullName = "Full Name is required.";
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required.";
  } else if (!validateEmail(formData.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!formData.projectType) {
    errors.projectType = "Project Type is required.";
  }

  if (!formData.message.trim()) {
    errors.message = "Message is required.";
  } else if (formData.message.trim().length < 20) {
    errors.message = "Please provide at least 20 characters in your message.";
  }

  return errors;
};

const submitProjectEnquiry = async (payload) => {
  if (typeof formConfig.submitEnquiry !== "function") {
    throw new Error(
      "Enquiry submission service is not connected yet. Please contact Fluxeey through the listed contact channels while integration is being configured.",
    );
  }

  return formConfig.submitEnquiry(payload);
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

const ContactHero = () => (
  <section className="relative overflow-hidden border-b border-slate-200 bg-white">
    <div className="ft-grid-overlay" />
    <div className="pointer-events-none absolute -left-28 top-10 h-60 w-60 rounded-full bg-cyan-100/80 blur-3xl" />
    <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-teal-100/70 blur-3xl" />

    <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-6 pb-16 pt-14 lg:grid-cols-2 lg:items-center lg:pb-20">
      <div>
        <p className="ft-animate-in ft-eyebrow">GET IN TOUCH</p>
        <h1 className="ft-animate-in ft-delay-1 mt-5 text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
          Let&apos;s Talk About Your Technology Needs.
        </h1>
        <p className="ft-animate-in ft-delay-2 mt-6 max-w-xl text-lg leading-8 text-slate-600">
          Tell us about your business challenge, project idea, or technology
          requirement. Fluxeey can help you plan, build, secure, automate, and
          scale the right solution.
        </p>
      </div>

      <div className="ft-animate-in ft-delay-2 rounded-3xl border border-slate-200 bg-slate-950 p-6 text-slate-100 shadow-[0_32px_90px_-42px_rgba(6,182,212,0.58)]">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
          Contact Focus
        </p>
        <div className="mt-5 grid gap-3">
          <div className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-3 text-sm">
            Software & Product Development
          </div>
          <div className="rounded-lg border border-teal-300/20 bg-teal-300/10 p-3 text-sm">
            Security, AI, Cloud & Infrastructure
          </div>
          <div className="rounded-lg border border-indigo-300/20 bg-indigo-300/10 p-3 text-sm">
            Consulting, Integration & Transformation
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ContactCard = ({ title, value, helper }) => (
  <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
      {title}
    </p>
    <p className="mt-2 text-sm font-semibold text-slate-900">{value}</p>
    {helper ? (
      <p className="mt-2 text-xs leading-6 text-slate-500">{helper}</p>
    ) : null}
  </article>
);

const FormField = ({ id, label, required, error, children, hint }) => (
  <div>
    <label htmlFor={id} className="text-sm font-semibold text-slate-800">
      {label}
      {required ? <span className="ml-1 text-rose-600">*</span> : null}
    </label>
    {hint ? <p className="mt-1 text-xs text-slate-500">{hint}</p> : null}
    <div className="mt-2">{children}</div>
    {error ? (
      <p className="mt-1 text-xs font-medium text-rose-600">{error}</p>
    ) : null}
  </div>
);

const inputClassName =
  "w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100";

const ProjectEnquiryForm = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
    if (status.type !== "idle") {
      setStatus({ type: "idle", message: "" });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus({
        type: "error",
        message: "Please correct the highlighted fields and try again.",
      });
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setStatus({ type: "loading", message: "Sending your enquiry..." });

    try {
      await submitProjectEnquiry({
        ...formData,
        fullName: formData.fullName.trim(),
        company: formData.company.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        message: formData.message.trim(),
      });

      setStatus({
        type: "success",
        message: "Your enquiry has been sent successfully.",
      });
      setFormData(defaultFormData);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to submit your enquiry at the moment. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      id="project-enquiry"
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8"
    >
      <div className="mb-6">
        <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
          Project Enquiry Form
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Provide your project details and Fluxeey will review your requirements
          before the next conversation.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <FormField
          id="fullName"
          label="Full Name"
          required
          error={errors.fullName}
        >
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={(e) => updateField("fullName", e.target.value)}
            className={inputClassName}
            maxLength={formConfig.maxLengths.fullName}
            autoComplete="name"
            required
          />
        </FormField>

        <FormField
          id="company"
          label="Company/Organization"
          error={errors.company}
        >
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={(e) => updateField("company", e.target.value)}
            className={inputClassName}
            maxLength={formConfig.maxLengths.company}
            autoComplete="organization"
          />
        </FormField>

        <FormField id="email" label="Email" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={inputClassName}
            maxLength={formConfig.maxLengths.email}
            autoComplete="email"
            required
          />
        </FormField>

        <FormField id="phone" label="Phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className={inputClassName}
            maxLength={formConfig.maxLengths.phone}
            autoComplete="tel"
          />
        </FormField>

        <FormField
          id="projectType"
          label="Project Type"
          required
          error={errors.projectType}
        >
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={(e) => updateField("projectType", e.target.value)}
            className={inputClassName}
            required
          >
            <option value="">Select project type</option>
            {projectTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </FormField>

        <FormField
          id="budgetRange"
          label="Budget Range"
          error={errors.budgetRange}
        >
          <select
            id="budgetRange"
            name="budgetRange"
            value={formData.budgetRange}
            onChange={(e) => updateField("budgetRange", e.target.value)}
            className={inputClassName}
          >
            <option value="">Select budget range</option>
            {formConfig.budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </FormField>

        <FormField
          id="preferredTimeline"
          label="Preferred Timeline"
          error={errors.preferredTimeline}
        >
          <select
            id="preferredTimeline"
            name="preferredTimeline"
            value={formData.preferredTimeline}
            onChange={(e) => updateField("preferredTimeline", e.target.value)}
            className={inputClassName}
          >
            <option value="">Select timeline</option>
            {formConfig.timelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </FormField>

        <div className="sm:col-span-2">
          <FormField
            id="message"
            label="Message"
            required
            error={errors.message}
            hint="Describe your challenge, expected outcome, and any relevant technical context."
          >
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => updateField("message", e.target.value)}
              className={inputClassName}
              rows={6}
              maxLength={formConfig.maxLengths.message}
              required
            />
            <p className="mt-1 text-right text-xs text-slate-500">
              {formData.message.length}/{formConfig.maxLengths.message}
            </p>
          </FormField>
        </div>
      </div>

      {status.type !== "idle" ? (
        <div
          className={[
            "mt-5 rounded-xl border px-4 py-3 text-sm",
            status.type === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-800"
              : status.type === "loading"
                ? "border-cyan-200 bg-cyan-50 text-cyan-800"
                : "border-rose-200 bg-rose-50 text-rose-800",
          ].join(" ")}
          role={status.type === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          {status.message}
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Send Enquiry"}
        </button>
        <p className="text-xs text-slate-500">
          Fields marked with * are required.
        </p>
      </div>
    </form>
  );
};

const Contact = () => {
  return (
    <main className="ft-home bg-white text-slate-900">
      <ContactHero />

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.25fr]">
          <div className="space-y-8">
            <Reveal>
              <SectionHeading
                eyebrow="CONTACT INFORMATION"
                title="Reach Fluxeey through your preferred channel."
                description="Contact details are centrally configured and can be updated without changing the page layout."
              />
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <Reveal delay={40}>
                <ContactCard
                  title="Email"
                  value={getContactValue(
                    contactConfig.email,
                    "Not available yet",
                  )}
                  helper="Use the project enquiry form while direct email details are being published."
                />
              </Reveal>
              <Reveal delay={80}>
                <ContactCard
                  title="Phone"
                  value={getContactValue(
                    contactConfig.phone,
                    "Not available yet",
                  )}
                  helper="Phone support details will be listed once finalized."
                />
              </Reveal>
              <Reveal delay={120}>
                <ContactCard
                  title="Office / Location"
                  value={getContactValue(
                    contactConfig.officeLocation,
                    "Office address to be announced",
                  )}
                />
              </Reveal>
              <Reveal delay={160}>
                <ContactCard
                  title="Business Hours"
                  value={getContactValue(
                    contactConfig.businessHours,
                    "Business hours to be announced",
                  )}
                />
              </Reveal>
            </div>

            <Reveal delay={190}>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  What Happens Next
                </p>
                <ol className="mt-4 space-y-3">
                  {nextSteps.map((step, index) => (
                    <li key={step} className="flex items-center gap-3">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-medium text-slate-800">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Why Contact Fluxeey
                </p>
                <ul className="mt-4 space-y-2">
                  {whyContact.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal className="lg:pt-10">
            <ProjectEnquiryForm />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/80">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <Reveal>
            <SectionHeading
              eyebrow="LOCATION"
              title="Office and directions"
              description="Official address details will be displayed here once available."
            />
          </Reveal>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
            <Reveal delay={40}>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold text-slate-900">
                  Office Address
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {getContactValue(
                    contactConfig.officeLocation,
                    "Office address is not published yet. Please send an enquiry for location-specific coordination.",
                  )}
                </p>
                {contactConfig.directionsUrl ? (
                  <a
                    href={contactConfig.directionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-sm font-semibold text-cyan-700 hover:text-cyan-800"
                  >
                    Get Directions
                  </a>
                ) : null}
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-5">
                <div className="flex h-56 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-500">
                  Map placeholder - add embedded map component when official
                  location is available.
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Contact and project enquiry questions"
          />
        </Reveal>

        <div className="mt-10 space-y-3">
          {faqs.map((item, index) => (
            <Reveal key={item.question} delay={index * 30}>
              <details className="group rounded-2xl border border-slate-200 bg-white p-5">
                <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-slate-900">
                  {item.question}
                  <span className="float-right text-slate-400 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.2),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(45,212,191,0.18),transparent_36%)]" />
        <div className="relative mx-auto w-full max-w-6xl px-6 py-20 text-center">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to Build Something Better?
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#project-enquiry"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
              >
                Send an Enquiry
              </a>
              <Link
                to="/services"
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
              >
                Explore Our Services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Contact;
