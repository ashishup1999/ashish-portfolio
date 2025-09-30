import React from "react";
import "@/app/about/about.css";
import { ABOUT } from "@/constants/Common";
import Image from "next/image";
import codingChad from "@/assets/coddingChad.svg";

const About = () => {
  return (
    <div id="about-sec">
      <p id="full-name">{ABOUT.name}</p>
      <p id="alias">{ABOUT.alias}</p>
      <p id="my-summary">{ABOUT.summary}</p>
      <div id="coding-chad">
        <Image src={codingChad} alt="codingChad" />
      </div>
    </div>
  );
};

export default About;
