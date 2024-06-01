import React from 'react';
import { FiGithub } from "react-icons/fi";
// border-2 border-solid border-[#6849f3]

const ProjectCard = ({ project }) => {
  const { title, img, tag, url } = project;

  return (
    <div className="group p-2 min-w-[22rem] h-[15rem] cursor-pointer bg-[#1E2022] text-white m-6 overflow-hidden shadow-lg relative">
    <img className="w-[22rem] h-full object-fill object-center" src={img} alt={title} />
    <div className="details p-4 absolute inset-0 flex flex-col items-center justify-center text-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-[rgba(0,0,0,0.8)] backdrop-blur-[8px]">
        <h1 className='font-semibold text-2xl tracking-wider mb-2'>{title}</h1>
        <p className='text-gray-400 text-xl mb-4'>{tag}</p>
        <a target='_blank' href={url} className=''><FiGithub size={36} className="text-white" /></a>
    </div>
</div>


  );
};

export default ProjectCard;
