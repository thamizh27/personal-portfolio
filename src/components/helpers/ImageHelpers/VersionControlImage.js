import React from "react";

const VersionControlImage = ({ image }) => {
  return (
    <img
      src={image}
      alt={`${image} logo`}
      className="w-20 h-20 md:w-32 md:h-32"
    />
  );
};

export default VersionControlImage;
