import React, { useState, useEffect } from "react";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "Resume.pdf", label: "Resume", download: true },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Desktop navigation */}
      <nav className="hidden sm:flex sm:flex-row sm:items-center sm:gap-6 font-semibold text-[1rem]">
        {links.map(({ href, label, download }) => (
          <a
            key={label}
            href={href}
            download={download ? "Resume.pdf" : undefined}
            className="nav-link text-sm tracking-wide"
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Mobile menu trigger */}
      <button
        onClick={toggle}
        className={`mobile-menu-btn sm:hidden ${isOpen ? "is-active" : ""}`}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <span className="hamburger" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      {/* Mobile drawer */}
      <div
        className={`mobile-nav sm:hidden ${isOpen ? "mobile-nav--open" : ""}`}
        aria-hidden={!isOpen}
      >
        <div className="mobile-nav__backdrop" onClick={close} aria-hidden="true" />

        <aside className="mobile-nav__panel" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div className="mobile-nav__accent" aria-hidden="true" />

          <div className="mobile-nav__header">
            <span className="mobile-nav__label">Navigate</span>
            <span className="mobile-nav__dot" aria-hidden="true" />
          </div>

          <nav className="mobile-nav__links">
            {links.map(({ href, label, download }, index) => (
              <a
                key={label}
                href={href}
                download={download ? "Resume.pdf" : undefined}
                onClick={close}
                className="mobile-nav__link"
                style={{ animationDelay: `${index * 60 + 80}ms` }}
              >
                <span className="mobile-nav__link-num">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mobile-nav__link-text">{label}</span>
                <span className="mobile-nav__link-arrow" aria-hidden="true">
                  →
                </span>
              </a>
            ))}
          </nav>

          <div className="mobile-nav__footer">
            <span className="mobile-nav__footer-text">Darshan Pandya</span>
            <span className="mobile-nav__footer-role">Frontend Developer</span>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Navbar;
