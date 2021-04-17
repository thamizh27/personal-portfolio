import React from "react";

const ProjectImage = ({ image }) => {
  return (
    <img
      src={image}
      alt={`${image} screenshot`}
      className="max-h-48 lg:max-h-80 border border-gray-100 rounded-xl shadow-lg md:m-10 mx-auto my-10"
    />
  );
};

export default ProjectImage;
