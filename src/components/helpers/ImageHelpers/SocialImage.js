import React from "react";

const SocialImage = ({ image }) => {
  return (
    <img
      src={image}
      alt={`${image} logo`}
      className="w-10 h-10 md:w-16 md:h-16 md:mr-20 md:ml-20"
    />
  );
};

export default SocialImage;
