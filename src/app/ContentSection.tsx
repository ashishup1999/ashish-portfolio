"use client";
import React, { ReactNode, useEffect, useRef } from "react";
import "./ContentSection.scss";

const ContentSection = ({ children }: { children: ReactNode }) => {
  const contentRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    if (contentRef?.current) {
      contentRef?.current?.scrollTo(0, 0);
    }
  }, [children]);

  return (
    <div ref={contentRef} className="content-wrapper">
      {children}
    </div>
  );
};

export default ContentSection;
