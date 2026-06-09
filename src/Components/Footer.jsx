import React from "react";
import { FaCode } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const socialLinks = [
  {
    href: "mailto:pandyadarshan811@gmail.com",
    label: "Email",
    icon: HiOutlineMail,
  },
  {
    href: "https://www.linkedin.com/in/darshanpandya811/",
    label: "LinkedIn",
    icon: GrLinkedinOption,
  },
  {
    href: "https://github.com/Darshan-Pandya10",
    label: "GitHub",
    icon: FaGithub,
  },
];

const Footer = () => {
  return (
    <footer className="footer relative bg-[#0a0a0a] border-t border-[#6849f3]/20 flex flex-col sm:flex-row items-center justify-between px-6 py-5 gap-4">
      <div className="flex items-center gap-3">
        <FaCode size={24} className="text-[#6849f3]" />
        <span className="text-gray-500 text-sm tracking-wide">
          © {new Date().getFullYear()} Darshan Pandya
        </span>
      </div>
      <div className="flex items-center gap-2">
        {socialLinks.map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noreferrer"
            aria-label={label}
            className="p-2.5 rounded-full bg-[#151515] border border-[#2a2a2a] text-gray-400 hover:text-white hover:border-[#6849f3]/50 hover:scale-110 transition-all duration-200"
          >
            <Icon size={22} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
