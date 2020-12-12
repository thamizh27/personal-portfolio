import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="text-center  w-1/2 h-screen m-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl">OK, LET’S CREATE SOMETHING GREAT.</h1>
        <p className="text-xl mt-8">
          If you like my work and have some cool project to work on, contact me
          through social sites listed below.
        </p>
        <a
          href="mailto:cdkthamizh27@gmail.com"
          rel="noreferrer"
          className="text-lg border-2 border-blue-800 p-4 text-center mt-10 mb-10  rounded-md hover:bg-blue-800 hover:text-white"
        >
          <button className="font-semibold focus:outline-none">
            <i className="far fa-paper-plane mr-3"></i> Get In Touch
          </button>
        </a>
        <div className="">
          <p>
            <a
              href="https://www.instagram.com/thamizh_27__/"
              rel="noreferrer"
              className="mx-4"
            >
              <i class="fab fa-instagram fa-3x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/thamizharasandevaraj/"
              className="mx-4"
              rel="noreferrer"
            >
              <i class="fab fa-linkedin fa-3x"></i>
            </a>
            <a
              href="https://twitter.com/thamizh_27_"
              className="mx-4"
              rel="noreferrer"
            >
              <i class="fab fa-twitter fa-3x"></i>
            </a>
            <a
              href="https://github.com/thamizh27"
              className="mx-4"
              rel="noreferrer"
            >
              <i class="fab fa-github fa-3x"></i>
            </a>
          </p>
        </div>
      </div>
      <div className="border-t-2 border-gray-50 text-center text-2xl">
        <p className="p-5">&copy; Copyright Thamizh 2020</p>
      </div>
    </div>
  );
};

export default Contact;
