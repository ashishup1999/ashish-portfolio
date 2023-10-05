import Image from "next/image";
import React from "react";
import "./Skill.scss";

const Skill = ({ label, icon }: { label: string; icon: string }) => {
  return (
    <div className={`skill-icon skill-${label}`}>
      <Image className={label} src={icon} alt={label} />
      <p className={label}>{label}</p>
    </div>
  );
};

export default Skill;
