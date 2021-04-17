import React from "react";

const Image = ({ image }) => {
  return (
    <img
      src={image}
      alt={`${image} logo`}
      className="w-20 h-20 md:w-32 md:h-32 md:mr-14 md:mt-10"
    />
  );
};

export default Image;
