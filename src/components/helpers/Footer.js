import React from "react";
import Date from "./Date";

const Footer = () => {
  return (
    <div className="mt-20 text-gray-600 border-t-2 border-gray-50 text-center text-base md:text-xl">
      <p className="p-5">
        copyright &copy; <Date /> thamizharasan devaraj
      </p>
    </div>
  );
};

export default Footer;
