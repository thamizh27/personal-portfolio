import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact - Thamizh's Portfolio";
  }, []);

  return (
    <div className="mt-20">
      <div className="text-center w-11/12 sm:w-1/2 h-full m-auto flex justify-center items-center flex-col">
        <h1 className="text-2xl sm:text-3xl mt-20">
          OK, LET’S CREATE SOMETHING GREAT.
        </h1>
        <p className="text-lg sm:text-xl mt-8">
          If you like my work and have some cool project to work on, contact me
          through social sites listed below.
        </p>
        <a
          href="mailto:cdkthamizh27@gmail.com"
          rel="noreferrer"
          className="text-md sm:text-lg border-2 border-blue-800 p-2 sm:p-4 text-center my-10 rounded-md hover:bg-blue-800 hover:text-white"
        >
          <button className="font-semibold focus:outline-none">
            <i className="far fa-paper-plane mr-3"></i> Get In Touch
          </button>
        </a>
        <div className="mt-14 w-10/12 flex justify-evenly">
          <a href="https://www.instagram.com/thamizh_27__/" rel="noreferrer">
            <i className="fab fa-instagram text-3xl sm:text-5xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/thamizharasandevaraj/"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin text-3xl sm:text-5xl"></i>
          </a>
          <a href="https://twitter.com/thamizh_27_" rel="noreferrer">
            <i className="fab fa-twitter text-3xl sm:text-5xl"></i>
          </a>
          <a href="https://github.com/thamizh27" rel="noreferrer">
            <i className="fab fa-github text-3xl sm:text-5xl"></i>
          </a>
        </div>
      </div>
      <div className="mt-20 border-t-2 border-gray-50 text-center text-base md:text-2xl">
        <p className="p-5">&copy; Copyright Thamizh 2020</p>
      </div>
    </div>
  );
};

export default Contact;
