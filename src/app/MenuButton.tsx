"use client";
import Image from "next/image";
import React from "react";
import "./MenuButton.scss";
import Link from "next/link";

const MenuButton = ({
  icon,
  label,
  setClickedMenu,
  clickedBtn,
}: {
  icon: string;
  label: string;
  setClickedMenu: Function;
  clickedBtn: string;
}) => {
  const onClick = (e: any) => {
    const { testid } = e.currentTarget.dataset;
    setClickedMenu(testid);
  };

  return (
    <button
      className={`menu-btn ${label} ${
        clickedBtn === label ? "menu-clicked" : ""
      }`}
      data-testid={label}
      onClick={onClick}
    >
      <Image className={`menu-icon ${label}`} src={icon} alt={label} />
      <p className={`menu-name ${label}`}>{label}</p>
    </button>
  );
};

export default MenuButton;
