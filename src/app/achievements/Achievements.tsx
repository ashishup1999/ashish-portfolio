import { ACHIEVEMENT_TEXTS, MENU } from "@/constants/CommonTexts";
import React from "react";
import "./Achievements.scss";

const Achievements = () => {
  return (
    <div className="achvs-wrapper">
      <p className="mobile-option">{MENU.ACHIEVEMENT}</p>
      <div className="certifications">
        <h1>{ACHIEVEMENT_TEXTS.LnC}</h1>
        {ACHIEVEMENT_TEXTS.certifications.map((cert, idx) => (
          <div key={cert}>
            <p>{`${idx + 1}. `}</p>
            <p key={cert}>{cert}</p>
          </div>
        ))}
      </div>
      <div className="achvs">
        <h1>{ACHIEVEMENT_TEXTS.ACHVS}</h1>
        {ACHIEVEMENT_TEXTS.achievements.map((ach, idx) => (
          <div key={ach}>
            <p>{`${idx + 1}. `}</p>
            <p>{ach}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
