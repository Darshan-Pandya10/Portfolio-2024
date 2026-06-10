import React from "react";
import { FiGithub } from "react-icons/fi";

const ExperienceCard = ({ experience }) => {
  const { ProjectName, Duration, Description, Github } = experience;

  return (
    <div className="glass-card my-4 text-gray-300 hover:text-white relative w-full max-w-[35rem] mx-auto p-6 sm:p-8 rounded-xl hover:-translate-y-1 transition-all duration-300">
      <h3 className="text-2xl font-bold mb-2 tracking-wider text-white">
        {ProjectName}
      </h3>
      <p className="text-sm font-semibold mb-4 text-[#666cff]">{Duration}</p>
      <p className="leading-7">{Description}</p>
      <a
        target="_blank"
        rel="noreferrer"
        href={Github}
        className="absolute top-5 right-5 p-2 rounded-lg bg-[#666cff]/10 text-gray-400 hover:text-[#666cff] hover:bg-[#666cff]/20 transition-all"
        aria-label={`View ${ProjectName} on GitHub`}
      >
        <FiGithub size={22} />
      </a>
    </div>
  );
};

export default ExperienceCard;
