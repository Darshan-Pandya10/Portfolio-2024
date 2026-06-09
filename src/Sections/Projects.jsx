import React from "react";
import { useFetchData } from "../Data/FetchData";
import { v4 as uuidv4 } from "uuid";
import ProjectCard from "../Components/ProjectCard";
import SectionTitle from "../Components/SectionTitle";

const Projects = () => {
  const { loading, projects } = useFetchData();

  if (loading) {
    return (
      <section className="projects">
        <div className="loader" />
      </section>
    );
  }

  return (
    <>
      <SectionTitle className="mt-24">#Projects</SectionTitle>
      <section
        id="projects"
        className="projects grid grid-cols-1 md:grid-cols-2 place-items-center gap-6 p-4 md:p-12 pb-24 max-w-[70rem] mx-auto"
      >
        {projects.map((project) => (
          <ProjectCard project={project} key={uuidv4()} />
        ))}
      </section>
    </>
  );
};

export default Projects;
