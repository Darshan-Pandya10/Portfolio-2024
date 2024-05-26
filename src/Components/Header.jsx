import React from 'react'
import Navbar from './Navbar'
import { FaCode } from "react-icons/fa6";
// border-2 border-solid border-white

const Header = () => {


  return (
    <section className='header relative h-fit z-50 w-screen flex flex-col justify-around items-start sm:flex sm:flex-row sm:justify-between sm:items-center p-2'>
      <main className="logo">
        <FaCode size={30} className='cursor-pointer' />
      </main>
      <Navbar/>
    </section>
  )
}

export default Header
