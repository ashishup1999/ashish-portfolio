import React, { ReactNode } from "react";
import "./ContentSection.scss";

const ContentSection = ({ children }: { children: ReactNode }) => {
  return <div className="content-wrapper">{children}</div>;
};

export default ContentSection;
