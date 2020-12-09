import React, { useEffect } from "react";
import image from "../img/bg.png";

const Home = () => {
  useEffect(() => {
    document.title = "Thamizh's Portfolio";
  });

  return (
    <div className="w-4/5 mx-auto">
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
            <img className="max-w-md mt-6" src={image} alt="web Development" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
