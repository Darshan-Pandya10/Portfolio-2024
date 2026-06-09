import React from "react";
import Navbar from "./Navbar";
import { FaCode } from "react-icons/fa6";

const Header = () => {
  return (
    <header
      id="header"
      className="header header-glass fixed top-0 z-50 w-full px-4 md:px-8 py-3 flex flex-row justify-between items-center"
    >
      <a href="#" aria-label="Back to top" className="logo group flex items-center gap-2">
        <FaCode
          size={28}
          className="text-[#6849f3] group-hover:rotate-12 transition-transform duration-300"
        />
        <span className="hidden sm:inline text-sm font-semibold tracking-widest text-gray-400 group-hover:text-white transition-colors">
          DP
        </span>
      </a>
      <Navbar />
    </header>
  );
};

export default Header;
