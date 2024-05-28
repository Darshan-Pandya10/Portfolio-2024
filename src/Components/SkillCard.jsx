import React from 'react';

const SkillCard = ({skill}) => {

    const {skillName , icon} = skill

  return (
    <div className="rounded-lg cursor-pointer hover:scale-105 bg-black shadow-lg p-4 w-[8rem] md:w-[10rem] mx-2 my-2">
      <div className={`p-4 rounded-full bg-black mb-4 w-20 h-20 mx-auto`}>
        <img src={icon} alt="skill icon" />
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold tracking-wider">{skillName}</h3>
      </div>
    </div>
  );
};

export default SkillCard;