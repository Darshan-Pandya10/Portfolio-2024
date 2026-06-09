import React from "react";
import skills from "../Data/SkillData";
import SkillCard from "../Components/SkillCard";
import SectionTitle from "../Components/SectionTitle";
import { v4 as uuidv4 } from "uuid";

const Skills = () => {
  return (
    <>
      <SectionTitle className="mt-8">#Skills</SectionTitle>
      <section className="mx-6 md:w-[80vw] md:mx-auto mb-36 glass-card rounded-2xl p-8 md:p-10 flex items-center justify-center flex-wrap gap-4">
        {skills.map((skill) => (
          <SkillCard skill={skill} key={uuidv4()} />
        ))}
      </section>
    </>
  );
};

export default Skills;
