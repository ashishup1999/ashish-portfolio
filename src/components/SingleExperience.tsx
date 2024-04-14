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
      <ul className="desc">
        {desc.split("●").map((str) => {
          if (!str) return <></>;
          return (
            <li key={str.slice(0, 10)}>
              <p>{str}</p>
            </li>
          );
        })}
      </ul>
      <div className="techs">
        {techs.map((tech) => {
          return <p key={tech}>{tech}</p>;
        })}
      </div>
    </div>
  );
};

export default SingleExperience;
