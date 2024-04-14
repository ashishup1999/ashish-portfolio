"use client";
import Loader from "@/components/Loader";
import "./globals.scss";
import { IMAGES } from "@/constants/StaticImages";
import Image from "next/image";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import ContentSection from "./ContentSection";
import About from "./about/About";
import Projects from "./projects/Projects";
import Experience from "./experience/Experience";
import Achievements from "./achievements/Achievements";
import { MENU } from "@/constants/CommonTexts";

const App = () => {
  const OPTIONS: any = {
    About: <About />,
    Experience: <Experience />,
    Projects: <Projects />,
    Achievements: <Achievements />,
  };

  const [load, setLoad] = useState(false);
  const [clickedMenuBtn, setClickedMenu] = useState(MENU.ABOUT);

  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <>
      {load ? (
        <div className="app">
          <Menu clickedBtn={clickedMenuBtn} setClickedMenu={setClickedMenu} />
          <div className="mobile-header">
            <p>{clickedMenuBtn}</p>
            <Image className="mobile-logo" src={IMAGES.logo} alt="" />
          </div>
          <ContentSection
            setClickedMenu={(val: any) => {
              if (val !== clickedMenuBtn) setClickedMenu(val);
            }}
          >
            {Object.keys(OPTIONS).map((key: string) => {
              return OPTIONS[key];
            })}
          </ContentSection>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default App;
