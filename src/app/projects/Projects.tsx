import React from "react";
import "./Projects.scss";
import { PROJECTS_TEXT } from "@/constants/CommonTexts";
import Image from "next/image";
import { ICONS } from "@/constants/StaticImages";

const Projects = () => {
  return (
    <div className="projects">
      {PROJECTS_TEXT.map((project) => {
        return (
          <>
            <div className="pr-1">
              <p className="pr-name">{project?.name}</p>
              {project?.link && (
                <a className="pr-link" href={project?.link} target="_blank">
                  <Image src={ICONS.arrowRight} alt="" />
                </a>
              )}
            </div>

            <a href={project?.github} target="_blank">
              <div className="pr-2">
                <Image className="pr-img" src={project?.image} alt="" />
                <Image className="pr-git" src={ICONS.github} alt="" />
              </div>
            </a>
            <div className="pr-3">
              <p>{project?.desc}</p>
            </div>
            <div className="pr-4">
              {project?.tools.map((tool) => (
                <p key={tool}>{tool}</p>
              ))}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Projects;
