import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const NavBar = ({ toggle }) => {
  useEffect(() => {
    AOS.init({
      duration: 200,
      delay: 1000,
      once: true,
      easing: "ease",
    });
  }, []);

  return (
    <div>
      <div className="font-sans text-lg md:text-2xl bg-white z-10 border-b-2 border-gray-300 shadow-sm fixed top-0 left-0 right-0">
        <nav className="m-auto h-20 w-full md:w-11/12  flex justify-between items-center">
          <div className="font-semibold tracking-wider" data-aos="zoom-in">
            <NavLink className="p-4" to="/" exact>
              <span className="text-blue-800">&lt;</span>
              Thamizh
              <span className="text-blue-800 text-xl">/</span>
              <span className="text-blue-800">&gt;</span>
            </NavLink>
          </div>
          <div className="lg:hidden mr-4 cursor-pointer" onClick={toggle}>
            <i className="fas fa-bars text-3xl"></i>
          </div>
          <div className="hidden lg:flex right-8">
            <NavLink
              activeClassName="text-white bg-blue-800 rounded-full"
              className="mr-4 px-4 py-2 block"
              to="/projects"
            >
              Projects
            </NavLink>
            <NavLink
              activeClassName="text-white bg-blue-800 rounded-full"
              className="mr-4 px-4 py-2 block"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              activeClassName="text-white bg-blue-800 rounded-full"
              className="mr-4 px-4 py-2 block"
              to="contact"
            >
              Contact
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
