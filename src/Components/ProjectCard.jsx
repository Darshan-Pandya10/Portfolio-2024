import React from "react";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  const { title, img, tag, url } = project;

  return (
    <article className="project-card group">
      <div className="project-card__media">
        <img src={img} alt={title} loading="lazy" />
        <span className="project-card__shine" aria-hidden="true" />
      </div>

      <div className="project-card__peek" aria-hidden="true">
        <h3 className="project-card__peek-title">{title}</h3>
      </div>

      <div className="project-card__overlay">
        <div className="project-card__content">
          <h3 className="project-card__title">{title}</h3>
          <div className="project-card__content__Btns">
          <span className="project-card__tag">{tag}</span>
          <a
            target="_blank"
            rel="noreferrer"
            href={url}
            className="project-card__cta"
            aria-label={`View ${title} on GitHub`}
            onClick={(e) => e.stopPropagation()}
          >
            <FiGithub size={16} />
            <FiArrowUpRight size={14} />
          </a>
        </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
