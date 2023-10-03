"use client";
import Image from "next/image";
import React from "react";
import { IMAGES } from "@/constants/StaticImages";
import "@/components/Loader.scss";

const Loader = () => {
  return (
    <>
      <div className="loader-bg" style={LoaderBgStyle}>
        <Image className="loader-img" src={IMAGES.loaderImg} alt="" />
      </div>
    </>
  );
};

const LoaderBgStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  height: "100%",
  width: "100%",
  background: "#141414",
} as React.CSSProperties;

export default Loader;
