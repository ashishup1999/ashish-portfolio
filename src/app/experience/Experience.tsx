import React from "react";
import "./Experience.scss";
import { EXP_TEXTS, MENU } from "@/constants/CommonTexts";
import SingleExperience from "@/components/SingleExperience";

const Experience = () => {
  return (
    <div className="exp-wrapper">
      <p className="mobile-option">{MENU.EXPERIENCE}</p>
      <span className="exp-sec-1">
        <p className="summary">{EXP_TEXTS.summary}</p>
      </span>
      {EXP_TEXTS.exps.map((exp) => {
        return <SingleExperience key={exp.duration} {...exp} />;
      })}
    </div>
  );
};

export default Experience;
