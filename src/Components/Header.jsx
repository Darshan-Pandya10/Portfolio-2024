import React from 'react'
import Navbar from './Navbar'
import { FaCode } from "react-icons/fa6";

const Header = () => {


  return (
    <section id='header' className='header pt-4 relative px-4 md:px-6 z-50 w-screen flex flex-col justify-around items-start sm:flex sm:flex-row sm:justify-between sm:items-center p-2'>
      <main className="logo mb-1">
        <a href=""><FaCode size={30} className='cursor-pointer -mt-1' /></a>
      </main>
      <Navbar/>
    </section>
  )
}

export default Header
