import React, { useState } from "react";
import "./Menu.scss";
import Image from "next/image";
import { ICONS, IMAGES } from "@/constants/StaticImages";
import { MENU } from "@/constants/CommonTexts";
import MenuButton from "./MenuButton";

const Menu = ({
  clickedBtn,
  setClickedMenu,
}: {
  clickedBtn: string;
  setClickedMenu: Function;
}) => {
  return (
    <div className="menu-container">
      <Image className="logo" src={IMAGES.logo} alt="" />
      <div className="menu">
        <MenuButton
          label={MENU.ABOUT}
          icon={ICONS.aboutIcon}
          clickedBtn={clickedBtn}
          setClickedMenu={setClickedMenu}
          selector=".about-wrapper"
        />
        <MenuButton
          label={MENU.EXPERIENCE}
          icon={ICONS.expIcon}
          clickedBtn={clickedBtn}
          setClickedMenu={setClickedMenu}
          selector=".exp-wrapper"
        />
        <MenuButton
          label={MENU.PROJECTS}
          icon={ICONS.projectsIcon}
          clickedBtn={clickedBtn}
          setClickedMenu={setClickedMenu}
          selector=".projects"
        />
        <MenuButton
          label={MENU.ACHIEVEMENT}
          icon={ICONS.achieveIcon}
          clickedBtn={clickedBtn}
          setClickedMenu={setClickedMenu}
          selector=".achvs-wrapper"
        />
      </div>
    </div>
  );
};

export default Menu;
