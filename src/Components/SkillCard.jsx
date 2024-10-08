import React from "react";

const SkillCard = ({ skill }) => {
  const { skillName, icon } = skill;

  return (
    <div className="rounded-lg cursor-pointer hover:scale-105 bg-black shadow-lg px-2 py-4 w-[10rem] md:w-[10rem] mx-2 my-2 hover:shadow-base hover:shadow-[#6849f3] transition-shadow">
      <div className={`p-4 rounded-full bg-black mb-4 w-20 h-20 mx-auto`}>
        <img
          src={icon}
          alt="skill icon"
          className="bg-[#222831] w-28 p-[2px] rounded-md"
        />
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold tracking-wider">{skillName}</h3>
      </div>
    </div>
  );
};

export default SkillCard;
