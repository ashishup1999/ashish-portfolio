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
    const areaByDiv = [0, 0, 0, 0];
    const ab = document.querySelector(".about-wrapper");
    if (ab) {
      const { top, bottom } = ab?.getBoundingClientRect();
      if (top > window.innerHeight || bottom < 0) {
        areaByDiv[0] = 0;
      } else {
        areaByDiv[0] = Math.min(window.innerHeight, bottom) - Math.max(0, top);
      }
    }
    const exp = document.querySelector(".exp-wrapper");
    if (exp) {
      const { top, bottom } = exp?.getBoundingClientRect();
      if (top > window.innerHeight || bottom < 0) {
        areaByDiv[1] = 0;
      } else {
        areaByDiv[1] = Math.min(window.innerHeight, bottom) - Math.max(0, top);
      }
    }
    const proj = document.querySelector(".projects");
    if (proj) {
      const { top, bottom } = proj?.getBoundingClientRect();
      if (top > window.innerHeight || bottom < 0) {
        areaByDiv[2] = 0;
      } else {
        areaByDiv[2] = Math.min(window.innerHeight, bottom) - Math.max(0, top);
      }
    }
    const achv = document.querySelector(".achvs-wrapper");
    if (achv) {
      const { top, bottom } = achv?.getBoundingClientRect();
      if (top > window.innerHeight || bottom < 0) {
        areaByDiv[3] = 0;
      } else {
        areaByDiv[3] = Math.min(window.innerHeight, bottom) - Math.max(0, top);
      }
    }
    const mxVal = Math.max(...areaByDiv);
    if (mxVal === areaByDiv[0]) setClickedMenu(MENU.ABOUT);
    if (mxVal === areaByDiv[1]) setClickedMenu(MENU.EXPERIENCE);
    if (mxVal === areaByDiv[2]) setClickedMenu(MENU.PROJECTS);
    if (mxVal === areaByDiv[3]) setClickedMenu(MENU.ACHIEVEMENT);
  };

  return (
    <div className="content-wrapper" onScroll={onScroll}>
      {children}
    </div>
  );
};

export default ContentSection;
