import React from 'react'
import { FaCode } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <section className='footer bg-[#222831] flex items-center justify-between p-6'>
       <main className="logo">
        <FaCode size={30} className='cursor-pointer' />
      </main>

      <main className="socials inline-block">
          <a href='www.linkedin.com/in/darshanpandya811' className='inline-block m-2 text- hover:text-[#6849f3]'><GrLinkedin size={26}/></a>
          <a href="https://github.com/Darshan-Pandya10" className='inline-block m-2 text-white hover:text-[#6849f3]'><FaGithub size={26}/></a>

      </main>
    </section>
  )
}

export default Footer
