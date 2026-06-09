import React from "react";

const SkillCard = ({ skill }) => {
  const { skillName, icon } = skill;

  return (
    <div className="group rounded-xl cursor-pointer bg-[#0d0d0d] border border-[#2a2a2a] hover:border-[#6849f3]/50 shadow-lg px-3 py-5 w-[9.5rem] md:w-[10rem] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(104,73,243,0.15)]">
      <div className="p-3 rounded-xl bg-[#1a1a1a] mb-3 w-[4.5rem] h-[4.5rem] mx-auto flex items-center justify-center group-hover:bg-[#6849f3]/10 transition-colors">
        <img
          src={icon}
          alt={skillName}
          className="w-10 h-10 object-contain"
        />
      </div>
      <h3 className="text-center text-sm font-semibold tracking-wider text-gray-300 group-hover:text-white transition-colors">
        {skillName}
      </h3>
    </div>
  );
};

export default SkillCard;
