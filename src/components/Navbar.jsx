import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about-us", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const panelRef = useRef(null);

  /* Scroll state — subtle sticky refinement */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  /* ESC + body scroll lock while mobile menu is open */
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full transition-[background-color,border-color,box-shadow] duration-200",
        scrolled
          ? "border-b border-slate-200/80 bg-white/85 backdrop-blur-md supports-[backdrop-filter]:bg-white/70"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-6 lg:h-[72px] lg:px-8"
      >
        {/* LEFT — Brand */}
        <NavLink
          to="/"
          end
          className="group flex items-center gap-2.5 shrink-0"
          aria-label="Fluxeey Technologies — Home"
        >
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-sm border border-slate-900/90 bg-slate-900 text-[13px] font-semibold leading-none text-white transition-colors duration-200 group-hover:bg-slate-800"
          >
            F
          </span>
          <span className="flex items-baseline gap-1.5 leading-none">
            <span className="text-[15px] font-semibold tracking-[0.02em] text-slate-900">
              Fluxeey
            </span>
            <span className="hidden text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500 sm:inline">
              Technologies
            </span>
          </span>
        </NavLink>

        {/* CENTER — Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  [
                    "relative inline-flex items-center px-3.5 py-2 text-[13.5px] font-medium transition-colors duration-200",
                    isActive
                      ? "text-slate-900"
                      : "text-slate-600 hover:text-slate-900",
                  ].join(" ")
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={[
                        "pointer-events-none absolute inset-x-3.5 -bottom-px h-px origin-center bg-slate-900 transition-transform duration-200",
                        isActive ? "scale-x-100" : "scale-x-0",
                      ].join(" ")}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* RIGHT — CTA + mobile trigger */}
        <div className="flex items-center gap-2 shrink-0">
          <NavLink
            to="/contact"
            className="group hidden items-center gap-2 rounded-sm bg-slate-900 px-4 py-2 text-[13px] font-medium tracking-[0.01em] text-white transition-colors duration-200 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 sm:inline-flex"
          >
            Start a Project
            <svg
              aria-hidden="true"
              viewBox="0 0 12 12"
              className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2.5 6h7M6.5 3l3 3-3 3" />
            </svg>
          </NavLink>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-slate-200 text-slate-800 transition-colors duration-200 hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3 w-4">
              <span
                className={[
                  "absolute left-0 top-0 h-px w-full bg-current transition-transform duration-200",
                  open ? "translate-y-1.5 rotate-45" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-1.5 h-px w-full bg-current transition-opacity duration-200",
                  open ? "opacity-0" : "opacity-100",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-3 h-px w-full bg-current transition-transform duration-200",
                  open ? "-translate-y-1.5 -rotate-45" : "",
                ].join(" ")}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* MOBILE PANEL */}
      <div
        id="mobile-nav"
        ref={panelRef}
        className={[
          "lg:hidden overflow-hidden border-t border-slate-200 bg-white transition-[max-height,opacity] duration-250 ease-out",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <ul className="mx-auto flex w-full max-w-7xl flex-col px-5 py-3 sm:px-6">
          {links.map((link) => (
            <li
              key={link.to}
              className="border-b border-slate-100 last:border-b-0"
            >
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  [
                    "flex items-center justify-between py-3.5 text-[15px] font-medium transition-colors duration-200",
                    isActive
                      ? "text-slate-900"
                      : "text-slate-600 hover:text-slate-900",
                  ].join(" ")
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>
                    <span
                      aria-hidden="true"
                      className={[
                        "h-1 w-1 rounded-full bg-slate-900 transition-opacity duration-200",
                        isActive ? "opacity-100" : "opacity-0",
                      ].join(" ")}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}

          <li className="pt-4 pb-5">
            <NavLink
              to="/contact"
              className="flex w-full items-center justify-center rounded-sm bg-slate-900 px-4 py-3 text-[14px] font-medium text-white transition-colors duration-200 hover:bg-slate-800"
            >
              Start a Project
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
