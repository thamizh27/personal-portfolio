import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

// Animation library
import AOS from "aos";
import "aos/dist/aos.css";

// helper components
import Footer from "../components/helpers/Footer";
import Image from "./helpers/ImageHelpers/Image";
import VersionControlImage from "./helpers/ImageHelpers/VersionControlImage";
import SocialImage from "./helpers/ImageHelpers/SocialImage";

// importing Images
import image from "../img/developer.svg";
import node from "../Icon/Node.webp";
import express from "../Icon/express.svg";
import mongo from "../Icon/mongodb (1).png";
import webpack from "../Icon/webpack.svg";
import sass from "../Icon/sass.webp";
import bootstrap from "../Icon/Bootstrap.webp";
import tailwind from "../Icon/tailwind.webp";
import react from "../Icon/React.webp";
import git from "../Icon/git.webp";
import github from "../Icon/github.webp";
import figma from "../Icon/Figma.webp";
import LinkedIn from "../Icon/LinkedIn.webp";
import Twitter from "../Icon/Twitter.webp";
import firebase from "../Icon/firebase.webp";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 150,
      delay: 700,
      once: true,
      easing: "ease",
    });
    document.title = "Thamizh's Portfolio";
  });

  return (
    <div className="w-4/5 h-screen mx-auto mt-36">
      <main>
        {/* Title section */}
        <section>
          <h1 className="text-3xl md:text-5xl mt-14">
            Hi, I am{" "}
            <span className="text-blue-800 font-semibold">
              Thamizharasan Devaraj.
            </span>
          </h1>
          <div className="flex justify-between">
            <div>
              <h1 className="mt-20 font-semibold text-3xl">
                Self-taught{" "}
                <span className="text-blue-800 font-bold">
                  Front-end Developer
                </span>{" "}
                focused on modern minimalistic and user-friendly experiences.
              </h1>
              <q className="mt-8 block text-lg md:text-xl">
                I want to make things that make people's lives better
              </q>
              <NavLink to="/projects">
                <button
                  className="text-sm md:text-lg uppercase font-semibold focus:outline-none ml-10 mt-14 text-center border-2 bg-blue-800 p-3 md:p-5  rounded-full outline-none  
                text-white hover:bg-white hover:border-blue-800 hover:text-blue-800 transition-all ease-in duration-150"
                >
                  Check my work
                </button>
              </NavLink>
            </div>
            <div data-aos="fade-left" className="ml-8">
              <img
                className="max-w-sm lg:max-w-md mt-32 pl-10 hidden md:block"
                src={image}
                alt="web Development"
              />
            </div>
          </div>
        </section>

        {/* Tool section */}
        <section className="mt-12">
          <h1 className="text-xl md:text-4xl capitalize">
            Technologies and tools i know:
          </h1>
          {/* front-end technologies */}
          <h1 className="mt-12 font-semibold text-lg md:text-3xl">
            Front-end:
          </h1>
          <div className="mt-8 inline-flex md:flex items-center justify-between flex-wrap">
            <Image image={sass} />
            <Image image={bootstrap} />
            <img
              src={tailwind}
              alt="tailwind logo"
              className="w-20 h-14 md:w-32 md:h-20 md:mr-14 md:mt-10"
            />
            <Image image={react} />
            <Image image={webpack} />
          </div>
          {/* back-end technologies */}
          <h1 className="mt-20 font-semibold text-lg md:text-3xl">Back-end:</h1>
          <div className="mt-8 flex items-center justify-evenly">
            <Image image={node} />
            <Image image={express} />
            <Image image={mongo} />
            <img
              src={firebase}
              alt="firebase logo"
              className="w-20 h-20 md:w-40 md:h-30 md:mr-14 md:mt-10"
            />
          </div>
          {/* version control tools */}
          <h1 className="mt-20 font-semibold text-lg md:text-3xl">
            Version control:
          </h1>
          <div className="mt-16 flex justify-evenly items-center">
            <VersionControlImage image={git} />
            <VersionControlImage image={github} />
          </div>
          <h1 className="mt-20 capitalize font-semibold text-lg md:text-3xl">
            Web design tool:
          </h1>
          <div className="mt-8">
            <img
              src={figma}
              alt="figma logo"
              className="w-24 h-24 md:w-40 md:h-40 ml-9"
            />
          </div>
        </section>
      </main>
      {/* footer section */}
      <footer className="mt-32">
        <div className="w-full h-60 border-2 border-gray-100">
          <p className="text-xl md:text-4xl text-center mt-8 font-semibold">
            connect with me
          </p>
          <div className="mt-14 flex justify-evenly md:justify-center items-center">
            <a
              href="https://github.com/thamizh27"
              rel="noreferrer"
              target="_blank"
            >
              <SocialImage image={github} />
            </a>
            <a
              href="https://www.linkedin.com/in/thamizharasandevaraj/"
              rel="noreferrer"
              target="_blank"
            >
              <SocialImage image={LinkedIn} />
            </a>
            <a
              href="https://twitter.com/thamizh_27_"
              rel="noreferrer"
              target="_blank"
            >
              <SocialImage image={Twitter} />
            </a>
          </div>
        </div>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
