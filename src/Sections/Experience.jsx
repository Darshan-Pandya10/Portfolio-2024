import React from "react";
import WorkExperienceData from "../Data/WorkExperienceData";
import ExperienceData from "../Data/ExperienceData";
import WorkExperienceCard from "../Components/WorkExperienceCard";
import ExperienceCard from "../Components/ExperienceCard";
import SectionTitle from "../Components/SectionTitle";
import { v4 as uuidv4 } from "uuid";

const Experience = () => {
  return (
    <>
      <SectionTitle className="mt-24">#Experience</SectionTitle>

      <section id="experience" className="relative px-4 sm:px-6 md:px-12 pb-12">
        <h2 className="subsection-title">Work Experience</h2>
        {WorkExperienceData.map((job) => (
          <WorkExperienceCard job={job} key={uuidv4()} />
        ))}

        <h2 className="subsection-title mt-16">Collaborative Projects</h2>
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
