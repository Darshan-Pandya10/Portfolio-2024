import React from "react";
import WorkExperienceData from "../Data/WorkExperienceData";
import ExperienceData from "../Data/ExperienceData";
import WorkExperienceCard from "../Components/WorkExperienceCard";
import ExperienceCard from "../Components/ExperienceCard";
import { v4 as uuidv4 } from "uuid";

const Experience = () => {
  return (
    <>
      <h1 className="title mt-24 text-center tracking-widest font-semibold uppercase text-2xl text-white">
        #Experience
      </h1>

      <section id="experience" className="relative mt-8 px-6 md:px-12">
        <h2 className="text-center text-lg md:text-xl font-semibold tracking-widest text-[#6849f3] uppercase mb-6">
          Work Experience
        </h2>
        {WorkExperienceData.map((job) => (
          <WorkExperienceCard job={job} key={uuidv4()} />
        ))}

        <h2 className="text-center text-lg md:text-xl font-semibold tracking-widest text-[#6849f3] uppercase mt-16 mb-6">
          Collaborative Projects
        </h2>
        <div className="flex items-center justify-center flex-wrap">
          {ExperienceData.map((experience) => (
            <ExperienceCard experience={experience} key={uuidv4()} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Experience;
