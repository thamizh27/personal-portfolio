import React, { useEffect } from "react";
import thamizh from "../img/Thamizh.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/helpers/Footer";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 150,
      delay: 700,
      once: true,
      easing: "ease",
    });
    document.title = "About - Thamizh's Portfolio";
  }, []);

  return (
    <div className="mt-20">
      <div>
        <img
          src={thamizh}
          alt="memoji"
          className="w-44 sm:w-52 md:w-60 mx-auto relative top-12 rounded-full"
          data-aos="fade-down"
        />
      </div>
      <div className="text-base sm:text-xl w-10/12 sm:w-7/12 lg:w-5/12 m-auto text-center mt-24 leading-8">
        <p>
          I'm a self-taught Front-end Developer based in
          <span className="font-semibold text-blue-800">
            {" "}
            Tamilnadu, India.
          </span>
        </p>
        <p>
          Passionate about client-side development. And focusing on fullstack
          development. I easily bored often. but, development is one of the
          things I don't bored. I'm a developer who focuses on writing clean,
          elegent and efficient code.{" "}
          <q className="text-sm sm:text-base block text-gray-600 mt-8">
            Anyone can write code. but, not everyone can write clean code.
          </q>
        </p>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default About;
