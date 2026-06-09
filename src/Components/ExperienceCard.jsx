import React from 'react'
import { FiGithub } from "react-icons/fi";

const ExperienceCard = ({experience}) => {

  const {ProjectName , Duration , Description , Github } = experience;

  return (
    <div className="my-4 experience-card text-gray-300 hover:text-white hover:scale-[1.02] transition-all duration-200 cursor-pointer bg-[#101010] border border-[#2a2a2a] hover:border-[#6849f3]/40 relative m-4 p-8 md:w-[35rem] rounded-xl">
        <h1 className="text-2xl font-bold mb-2 tracking-wider text-white">{ProjectName}</h1>
        <h2 className="text-sm font-semibold mb-4 text-[#6849f3]">{Duration}</h2>
        <p className="leading-7">{Description}</p>
        <a target='_blank' rel="noreferrer" href={Github} className='absolute top-4 right-4 hover:text-[#6849f3]' aria-label="View on GitHub"><FiGithub size={30}/></a>
    </div>
  )
}

export default ExperienceCard


