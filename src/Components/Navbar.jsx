import React, { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

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

  return (
    <div className="navbar relative">
      <button
        onClick={toggle}
        className="sm:hidden p-1 text-white hover:text-[#6849f3] transition-colors"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <RxCross1 size={26} /> : <RxHamburgerMenu size={26} />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 top-[57px] mobile-nav-overlay sm:hidden z-40"
          onClick={close}
          aria-hidden="true"
        />
      )}

      <nav
        className={`${
          isOpen
            ? "flex fixed inset-x-0 top-[57px] bottom-0 z-50 flex-col items-center justify-center gap-8 mobile-nav-overlay"
            : "hidden sm:flex sm:flex-row sm:items-center sm:gap-6"
        } font-semibold text-[1rem]`}
      >
        {links.map(({ href, label, download }) => (
          <a
            key={label}
            href={href}
            download={download ? "Resume.pdf" : undefined}
            onClick={close}
            className="nav-link text-2xl sm:text-sm tracking-widest sm:tracking-wide"
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
