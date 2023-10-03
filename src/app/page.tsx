"use client";
import Loader from "@/components/Loader";
import "./globals.css";
import { IMAGES } from "@/constants/StaticImages";
import Image from "next/image";
import { useEffect, useState } from "react";

const App = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <>
      {load ? (
        <Image src={IMAGES.coderDoodle} alt="" style={AppDoodleStyle} />
      ) : (
        <Loader />
      )}
    </>
  );
};

export const AppDoodleStyle = {
  position: "absolute",
  bottom: 0,
  right: 0,
  height: "150px",
  width: "auto",
} as React.CSSProperties;

export default App;
