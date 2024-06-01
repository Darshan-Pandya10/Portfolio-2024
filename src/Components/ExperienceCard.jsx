import React from 'react'
import { FiGithub } from "react-icons/fi";

const ExperienceCard = ({experience}) => {

    const {ProjectName , Duration , Description , Github } = experience;

  return (
    <div className="card my-8 experience-card cursor-pointer hover:border-[#6849f3] relative m-4  md:m-12 p-8 bg-black border-2 border-white border-solid md:w-[35rem] rounded-lg shadow-lg">
        <h1 className="text-white text-2xl font-bold mb-2 tracking-wider">{ProjectName}</h1>
        <h2 className="text-gray-300 text-lg font-semibold mb-4">{Duration}</h2>
        <p className="text-gray-400 leading-7">{Description}</p>
        <a href={Github} className='absolute top-4 right-4 hover:text-[#6849f3]'><FiGithub size={30}/></a>
    </div>


    
  )
}

export default ExperienceCard


