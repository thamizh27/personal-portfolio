import React from "react";

const ProjectLink = ({ link, heading }) => {
  return (
    <a
      rel="noreferrer"
      target="_blank"
      href={link}
      className="border-b-2 border-white text-lg lg:text-2xl hover:border-blue-800"
    >
      {heading}
    </a>
  );
};

export default ProjectLink;
