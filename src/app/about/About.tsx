import React from "react";
import "./About.scss";
import { ABOUT_TEXTS, MENU } from "@/constants/CommonTexts";
import Skill from "@/components/Skill";
import { SKILLS } from "@/constants/CommonConstant";

const About = () => {
  return (
    <div className="about-wrapper">
      <p className="mobile-option">{MENU.ABOUT}</p>
      <span className="about-sec-1">
        <p className="greet">{ABOUT_TEXTS.greet}</p>
        <p className="name">{ABOUT_TEXTS.name}</p>
      </span>
      <span className="about-sec-2">
        <p className="title">{ABOUT_TEXTS.title}</p>
      </span>
      <span className="about-sec-3">
        <p className="summary">{ABOUT_TEXTS.summary}</p>
      </span>
      <span className="about-sec-4">
        <p className="skill-title">{ABOUT_TEXTS.skillTitle}</p>
      </span>
      <div className="about-sec-5">
        {SKILLS.map((obj) => {
          return <Skill key={obj?.label} label={obj?.label} icon={obj?.icon} />;
        })}
      </div>
    </div>
  );
};

export default About;
