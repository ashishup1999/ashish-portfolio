"use client";
import React, { useState } from "react";
import "@/app/skills/skills.css";
import Image from "next/image";
import { SKILLS_ICONS, SKILLS_NAMES } from "@/constants/Common";

const Skills = () => {
  const [selectedSkill, onSkillSelect] = useState("");

  const onHoverSkill = (e: any) => {
    onSkillSelect(SKILLS_NAMES[e?.currentTarget?.id]);
    const list = document.querySelectorAll("#platform-wrap>img");
    list.forEach((ele: Element) => {
      ele.classList.remove("checked");
    });
    const ele = document.getElementById(e?.currentTarget?.id);
    ele?.classList.add("checked");
  };

  return (
    <div id="skills-sec">
      {<p id="skill-name">{selectedSkill || "SKILLS"}</p>}
      <div id="platform-wrap">
        <div id="platform"></div>
        <Image
          id="js"
          src={SKILLS_ICONS.js}
          alt="js"
          onMouseEnter={onHoverSkill}
        />
        <Image
          id="ts"
          src={SKILLS_ICONS.ts}
          alt="ts"
          onMouseEnter={onHoverSkill}
        />
        <Image
          id="html"
          src={SKILLS_ICONS.html}
          alt="html"
          onMouseEnter={onHoverSkill}
        />
        <Image
          id="css"
          src={SKILLS_ICONS.css}
          alt="css"
          onMouseEnter={onHoverSkill}
        />
        <Image
          id="react"
          src={SKILLS_ICONS.react}
          alt="react"
          onMouseEnter={onHoverSkill}
        />
        <Image
          id="next"
          src={SKILLS_ICONS.next}
          alt="next"
          onMouseEnter={onHoverSkill}
        />
        <Image
          id="sass"
          src={SKILLS_ICONS.sass}
          alt="sass"
          onMouseEnter={onHoverSkill}
        />
        <Image
          id="pg"
          src={SKILLS_ICONS.pg}
          alt="pg"
          onMouseEnter={onHoverSkill}
        />
        <Image
          id="mongo"
          src={SKILLS_ICONS.mongo}
          alt="mongo"
          onMouseEnter={onHoverSkill}
        />
        <Image
          id="node"
          src={SKILLS_ICONS.node}
          alt="node"
          onMouseEnter={onHoverSkill}
        />
        <Image
          id="go"
          src={SKILLS_ICONS.go}
          alt="go"
          onMouseEnter={onHoverSkill}
        />
        <Image
          id="py"
          src={SKILLS_ICONS.py}
          alt="py"
          onMouseEnter={onHoverSkill}
        />
        <Image
          id="docker"
          src={SKILLS_ICONS.docker}
          alt="docker"
          onMouseEnter={onHoverSkill}
        />
        <Image
          id="kube"
          src={SKILLS_ICONS.kube}
          alt="kube"
          onMouseEnter={onHoverSkill}
        />
        <Image
          id="redux"
          src={SKILLS_ICONS.redux}
          alt="redux"
          onMouseEnter={onHoverSkill}
        />
        <Image
          id="cpp"
          src={SKILLS_ICONS.cpp}
          alt="cpp"
          onMouseEnter={onHoverSkill}
        />
        <Image
          id="aws"
          src={SKILLS_ICONS.aws}
          alt="aws"
          onMouseEnter={onHoverSkill}
        />
        <Image
          id="dj"
          src={SKILLS_ICONS.dj}
          alt="dj"
          onMouseEnter={onHoverSkill}
        />
      </div>
    </div>
  );
};

export default Skills;
