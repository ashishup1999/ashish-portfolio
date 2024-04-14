"use client";
import React, { ReactNode } from "react";
import "./ContentSection.scss";
import { MENU } from "@/constants/CommonTexts";

const ContentSection = ({
  children,
  setClickedMenu,
}: {
  children: ReactNode;
  setClickedMenu: Function;
}) => {

  const onScroll = () => {
    const ab = document.querySelector(".about-wrapper");
    if (ab) {
      const { top } = ab?.getBoundingClientRect();
      if (top > 0 && top < (window.innerHeight * 2) / 3) {
        setClickedMenu(MENU.ABOUT);
        return;
      }
    }
    const exp = document.querySelector(".exp-wrapper");
    if (exp) {
      const { top } = exp?.getBoundingClientRect();
      if (top > 0 && top < (window.innerHeight * 2) / 3) {
        setClickedMenu(MENU.EXPERIENCE);
        return;
      }
    }
    const proj = document.querySelector(".projects");
    if (proj) {
      const { top } = proj?.getBoundingClientRect();
      if (top > 0 && top < (window.innerHeight * 2) / 3) {
        setClickedMenu(MENU.PROJECTS);
        return;
      }
    }
    const achv = document.querySelector(".achvs-wrapper");
    if (achv) {
      const { top } = achv?.getBoundingClientRect();
      if (top > 0 && top < (window.innerHeight * 2) / 3) {
        setClickedMenu(MENU.ACHIEVEMENT);
        return;
      }
    }
  };

  return (
    <div className="content-wrapper" onScroll={onScroll}>
      {children}
    </div>
  );
};

export default ContentSection;
