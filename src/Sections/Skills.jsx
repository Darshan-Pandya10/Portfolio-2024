import React from "react";
import skills from "../Data/SkillData";
import SkillCard from "../Components/SkillCard";
import SectionTitle from "../Components/SectionTitle";
import { v4 as uuidv4 } from "uuid";

const Skills = () => {
  return (
    <>
      <SectionTitle className="mt-8">#Skills</SectionTitle>
      <section className="mx-4 sm:mx-6 md:w-[80vw] md:mx-auto mb-24 md:mb-36 glass-card rounded-2xl p-4 sm:p-8 md:p-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 w-full">
          {skills.map((skill) => (
            <SkillCard skill={skill} key={uuidv4()} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
