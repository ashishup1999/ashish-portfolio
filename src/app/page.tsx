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
import Resume from "./resume/Resume";
import Achievements from "./achievements/Achievements";
import { MENU } from "@/constants/CommonTexts";

const App = () => {
  const OPTIONS: any = {
    About: <About />,
    Experience: <Experience />,
    Projects: <Projects />,
    Resume: <Resume />,
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
          <Image className="doodle" src={IMAGES.coderDoodle} alt="" />
          <Menu clickedBtn={clickedMenuBtn} setClickedMenu={setClickedMenu} />
          <ContentSection>
            <div className="mobile-header">
              <p className="mobile-option">{clickedMenuBtn}</p>
              <Image className="mobile-logo" src={IMAGES.logo} alt="" />
            </div>
            {OPTIONS[clickedMenuBtn]}
            <Image className="doodle-mobile" src={IMAGES.coderDoodle} alt="" />
          </ContentSection>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default App;
