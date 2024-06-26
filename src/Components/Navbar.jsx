import React from 'react'
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { HiOutlineHome } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";

const Navbar = () => {

  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  
  const handleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  }

  const closeNavbar = () => {
    setIsNavbarVisible(false);
  };

  return (
    <div className='navbar'>
     <div className='sm:hidden'> 
      <button onClick={handleNavbar} className='absolute top-4 right-4'> 
      {isNavbarVisible ? <RxCross1 className='hover:text-[#6849f3]' size={26} /> : <RxHamburgerMenu className='hover:text-[#6849f3]'  size={26} />}
      </button>
      </div>
          <nav className={`mt-3 sm:mt-0 ${
          isNavbarVisible ? '' : 'hidden'} flex flex-col items-left justify-center justify-self-center place-items-center
          w-[90vw] mx-auto min-h-screen sm:flex sm:flex-row sm:justify-end sm:items-end  sm:min-h-fit sm:ml-4 font-semibold text-[1rem]`}>
          <a href='../src/assets/File/Resume.pdf' download='Resume.pdf' onClick={closeNavbar} className='text-2xl tracking-widest sm:tracking-normal sm:text-base mb-1 sm:mr-3 sm:mb-0' to='/'>Resume</a>
          <a href='#projects' onClick={closeNavbar} className='text-2xl tracking-widest sm:tracking-normal sm:text-base  mb-1 sm:mr-3 sm:mb-0' to='about'>Projects</a>
          <a href='#contact' onClick={closeNavbar} className='text-2xl tracking-widest sm:tracking-normal sm:text-base  mb-1 sm:mr-3 sm:mb-0' to='about'>Contact</a>
        </nav>
    </div>
  )
}

export default Navbar
