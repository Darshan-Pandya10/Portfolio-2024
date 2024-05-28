import React from 'react';
import { FiGithub } from "react-icons/fi";
// border-2 border-solid border-[#6849f3]

const ProjectCard = ({ project }) => {
  const { title, img, tag, url } = project;

  return (
    <div className="p-2 min-w-[22rem] h-[17rem] cursor-pointer bg-[#1E2022]  text-white m-4 overflow-hidden shadow-lg">
        <img className="w-[22rem] object-fill object-center" src={img} alt={title} />
        <div className="details p-4">
            <h1 className='font-semibold text-xl tracking-wider '>{title}</h1>
            <p className='text-gray-400'>{tag}</p>
        </div>
    </div>
  );
};

export default ProjectCard;
