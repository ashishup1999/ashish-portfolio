import React, { Fragment } from "react";
import "./Projects.scss";
import { MENU, PROJECTS_TEXT } from "@/constants/CommonTexts";
import Image from "next/image";
import { ICONS } from "@/constants/StaticImages";

const Projects = () => {
  return (
    <div className="projects">
      <p className="mobile-option">{MENU.PROJECTS}</p>
      {PROJECTS_TEXT.map((project) => {
        return (
          <Fragment key={project?.name}>
            <div className="pr-1">
              {project?.link ? (
                <a className="pr-link" href={project?.link} target="_blank">
                  <p className="pr-name">{project?.name}</p>
                </a>
              ) : (
                <p className="pr-name">{project?.name}</p>
              )}
            </div>

            <div className="pr-2">
              <Image className="pr-img" src={project?.image} alt="" />
              <a href={project?.github} target="_blank">
                <Image className="pr-git" src={ICONS.github} alt="" />
              </a>
            </div>

            <div className="pr-3">
              <p>{project?.desc}</p>
            </div>
            <div className="pr-4">
              {project?.tools.map((tool) => (
                <p key={tool}>{tool}</p>
              ))}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Projects;
