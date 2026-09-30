import { Link } from "react-router-dom";

const companyLinks = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

const serviceHighlights = [
  "Software Development",
  "Web & Mobile Development",
  "Cybersecurity",
  "AI & Automation",
  "Cloud Computing",
  "Systems Integration",
];

const contactDetails = {
  email: "Not available yet",
  phone: "Not available yet",
  location: "Office details to be announced",
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Fluxeey Technologies
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Technology solutions and services for software, cybersecurity, AI,
              cloud, integration, and digital transformation.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex rounded-full border border-cyan-300/40 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cyan-200 transition hover:border-cyan-200 hover:text-cyan-100"
            >
              Start a Project
            </Link>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Quick Links</p>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-300 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Core Services</p>
            <ul className="mt-4 space-y-2">
              {serviceHighlights.map((service) => (
                <li key={service} className="text-sm text-slate-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>Email: {contactDetails.email}</li>
              <li>Phone: {contactDetails.phone}</li>
              <li>Location: {contactDetails.location}</li>
            </ul>
            <Link
              to="/contact"
              className="mt-5 inline-block text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {year} Fluxeey Technologies. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="transition hover:text-slate-200">
              Privacy Policy
            </Link>
            <Link to="/contact" className="transition hover:text-slate-200">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
