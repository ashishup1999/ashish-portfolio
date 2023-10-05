import React from "react";
import "./SingleExperience.scss";

const SingleExperience = ({
  job,
  duration,
  location,
  desc,
  techs,
}: {
  job: string;
  duration: string;
  location: string;
  desc: string;
  techs: Array<string>;
}) => {
  return (
    <div className="single-exp">
      <div className="title">
        <div className="job">{job}</div>
        <div className="duration">{duration}</div>
      </div>
      <div className="location">{location}</div>
      <div className="desc">{desc}</div>
      <div className="techs">
        {techs.map((tech) => {
          return <p key={tech}>{tech}</p>;
        })}
      </div>
    </div>
  );
};

export default SingleExperience;
