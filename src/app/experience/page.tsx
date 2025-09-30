"use client";
import React, { useState } from "react";
import "@/app/experience/experience.css";
import Image from "next/image";
import arrowLeft from "@/assets/arrowLeft.svg";
import arrowRight from "@/assets/arrowRight.svg";
import { EXPS } from "@/constants/Common";

const Experience = () => {
  const [eno, setEno] = useState(0);

  return (
    <>
      {eno > 0 && (
        <Image
          id="left-arrow"
          className="arrows"
          src={arrowLeft}
          alt="arrowLeft"
          onClick={() => setEno(eno - 1)}
        />
      )}
      <div id="experience-sec">
        <div id="experience-view">
          <div id={EXPS[eno]?.id} className="experience-platform-wrap">
            <Image src={EXPS[eno]?.img} alt="" />
            <div className="experience-platform"></div>
            <span className="experience-head">
              <p className="experience-title">{EXPS[eno]?.name}</p>
              <p className="experience-extra">{EXPS[eno]?.extra}</p>
            </span>
            <p
              className="experience-desc"
              dangerouslySetInnerHTML={{ __html: EXPS[eno]?.desc }}
            ></p>
          </div>
        </div>
      </div>
      {eno < Object.keys(EXPS)?.length - 1 && (
        <Image
          id="right-arrow"
          className="arrows"
          src={arrowRight}
          alt="arrowLeft"
          onClick={() => setEno(eno + 1)}
        />
      )}
    </>
  );
};

export default Experience;
