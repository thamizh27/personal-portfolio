import React, { useEffect } from "react";
import image from "../img/bg.jpg";
import html from "../Icon/html.png";
import css from "../Icon/css.png";
import sass from "../Icon/sass.png";
import bootstrap from "../Icon/Bootstrap.png";
import tailwind from "../Icon/tailwind.png";
import react from "../Icon/React.png";
import git from "../Icon/git.png";
import github from "../Icon/github.png";
import figma from "../Icon/Figma.png";
import LinkedIn from "../Icon/LinkedIn.png";
import Twitter from "../Icon/Twitter.png";

const Home = () => {
  useEffect(() => {
    document.title = "Thamizh's Portfolio";
  });

  return (
    <div className="w-4/5 h-screen mx-auto mt-36">
      <main>
        {/* Title section */}
        <section>
          <h1 className="text-5xl mt-14">
            Hi, I am{" "}
            <span className="text-blue-800 font-semibold">
              Thamizharasan Devaraj.
            </span>
          </h1>
          <div className="flex">
            <div>
              <h1 className="mt-14 font-semibold text-3xl break-words">
                <span className="text-blue-800 font-bold">
                  Front-end Web Developer
                </span>{" "}
                focused on modern minimalistic and user-friendly experiences.
              </h1>
              <q className="mt-8 block text-xl">
                I want to make things that make people's lives better
              </q>
              <a
                href="/projects"
                className="inline-block ml-10 mt-14 text-center border-2 border-blue-800 p-5 rounded-full focus:outline-none hover:bg-blue-800 hover:text-white transition-all ease-in delay-75"
              >
                <button className="text-lg uppercase font-semibold focus:outline-none">
                  Check my work
                </button>
              </a>
            </div>
            <div>
              <img
                className="max-w-md mt-6"
                src={image}
                alt="web Development"
              />
            </div>
          </div>
        </section>

        {/* Tool section */}
        <section className="mt-12">
          <h1 className="text-4xl capitalize underline">
            Technologies and tools i know:
          </h1>
          <h1 className="mt-12 font-semibold underline text-3xl">
            Development:
          </h1>
          <div className="mt-8 flex items-center justify-between flex-wrap">
            <img src={html} alt="html logo" className="w-32 h-32 mr-14 mt-10" />
            <img src={css} alt="css logo" className="w-32 h-32 mr-14 mt-10" />
            <img src={sass} alt="sass logo" className="w-32 h-32 mr-14 mt-10" />
            <img
              src={bootstrap}
              alt="bootstrap logo"
              className="w-32 mr-14 h-32 mt-10"
            />
            <img
              src={tailwind}
              alt="tailwind logo"
              className="mr-14 h-20 mt-10"
            />
            <img
              src={react}
              alt="react logo"
              className="w-32 h-32 mr-14 mt-10"
            />
          </div>
          <h1 className="mt-12 font-semibold underline text-3xl">
            Version control:
          </h1>
          <div className="mt-16 flex">
            <img src={git} alt="git logo" className="w-32 h-32 mr-20 ml-9" />
            <img src={github} alt="github logo" className="w-32 h-32 mr-20" />
          </div>
          <h1 className="mt-16 capitalize font-semibold underline text-3xl">
            Web design tool:
          </h1>
          <div className="mt-8">
            <img src={figma} alt="figma logo" className="w-32 h-32 ml-9" />
          </div>
        </section>
      </main>
      <footer className="mt-32">
        <div className="w-full h-60 border-2 border-gray-100">
          <p className="text-4xl underline text-center mt-8 font-semibold">
            connect with me
          </p>
          <div className="mt-14 flex justify-center items-center">
            <a
              href="https://github.com/thamizh27"
              rel="noreferrer"
              target="_blank"
            >
              <img src={github} alt="github" className="w-16 h-16 mr-20" />
            </a>
            <a
              href="https://www.linkedin.com/in/thamizharasandevaraj/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={LinkedIn} alt="linkedin" className="w-16 h-16 mr-20" />
            </a>
            <a
              href="https://twitter.com/thamizh_27_"
              rel="noreferrer"
              target="_blank"
            >
              <img src={Twitter} alt="Twitter" className="w-16 h-16" />
            </a>
          </div>
        </div>
      </footer>
      <div className="mt-20 border-t-2 border-gray-50 text-center text-2xl">
        <p className="p-5">&copy; Copyright Thamizh 2020</p>
      </div>
    </div>
  );
};

export default Home;
