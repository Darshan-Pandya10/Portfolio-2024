import React from "react";
import { FaCode } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <section className="footer bg-[#222831] flex flex-col sm:flex-row items-center justify-between px-6 py-4 gap-4">
      <main className="logo flex items-center gap-3">
        <FaCode size={30} className="cursor-pointer" />
        <span className="text-gray-400 text-sm tracking-wide">
          © {new Date().getFullYear()} Darshan Pandya
        </span>
      </main>
      <main className="socials inline-block">
        <a
          href="mailto:pandyadarshan811@gmail.com"
          className="bg-[#151515] hover:scale-110 duration-50 hover:bg-[#000000] p-3 rounded-full inline-block m-2 text-white"
          aria-label="Email"
        >
          <HiOutlineMail size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/darshanpandya811/"
          target="_blank"
          rel="noreferrer"
          className="bg-[#151515] hover:scale-110 duration-50 hover:bg-[#000000] p-3 rounded-full inline-block m-2 text-white"
          aria-label="LinkedIn"
        >
          <GrLinkedinOption size={28} />
        </a>
        <a
          href="https://github.com/Darshan-Pandya10"
          target="_blank"
          rel="noreferrer"
          className="bg-[#151515] hover:scale-110 duration-50 hover:bg-[#000000] p-3 rounded-full inline-block m-2 text-white"
          aria-label="GitHub"
        >
          <FaGithub size={28} />
        </a>
      </main>
    </section>
  );
};

export default Footer;
