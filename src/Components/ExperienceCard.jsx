import React from 'react'
import { FiGithub } from "react-icons/fi";

const ExperienceCard = ({experience}) => {

  const {ProjectName , Duration , Description , Github } = experience;

  return (
    <div className="my-8 experience-card text-gray-300 hover:text-white hover:scale-105 transition-all duration-200 cursor-pointer bg-[#101010] relative m-4  md:m-12 p-8 md:w-[35rem] rounded-lg">
        <h1 className="text-2xl font-bold mb-2 tracking-wider">{ProjectName}</h1>
        <h2 className="text-base font-semibold mb-4">{Duration}</h2>
        <p className=" leading-7">{Description}</p>
        <a target='_blank' href={Github} className='absolute top-4 right-4 hover:text-[#6849f3]'><FiGithub size={30}/></a>
    </div>
  )
}

export default ExperienceCard


