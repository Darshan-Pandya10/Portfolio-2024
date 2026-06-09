import React from "react";
import { MdLocationOn } from "react-icons/md";

const WorkExperienceCard = ({ job }) => {
  const { company, role, location, duration, highlights, tech } = job;

  return (
    <article className="work-experience-card relative w-full max-w-4xl mx-4 md:mx-auto my-6 p-8 md:p-10 rounded-xl bg-[#101010] border border-[#2a2a2a] hover:border-[#6849f3]/40 transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-wider text-white">
            {company}
          </h2>
          <p className="text-[#6849f3] font-semibold mt-1 tracking-wide">
            {role}
          </p>
          <p className="flex items-center gap-1 text-gray-400 text-sm mt-2">
            <MdLocationOn className="text-[#6849f3]" />
            {location}
          </p>
        </div>
        <span className="inline-block text-sm font-semibold text-gray-300 bg-[#1a1a1a] px-4 py-2 rounded-full border border-[#333] whitespace-nowrap">
          {duration}
        </span>
      </div>

      {highlights.map((section, index) => (
        <div key={index} className="mb-6 last:mb-4">
          <h3 className="text-lg font-semibold text-white mb-3 tracking-wide">
            {section.title}
          </h3>
          <ul className="space-y-2">
            {section.points.map((point, i) => (
              <li
                key={i}
                className="text-gray-300 leading-7 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.65rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#6849f3]"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-[#2a2a2a]">
        {tech.map((item) => (
          <span
            key={item}
            className="text-xs font-medium tracking-wider uppercase px-3 py-1 rounded-full bg-[#6849f3]/15 text-[#a78bfa] border border-[#6849f3]/30"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
};

export default WorkExperienceCard;
