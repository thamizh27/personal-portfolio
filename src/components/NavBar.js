import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="font-sans text-2xl border-b-2 border-gray-300 shadow-sm">
      <div className="flex justify-center items-center">
        <nav className="h-20 w-11/12 flex justify-between items-center">
          <div className="p-3 font-semibold tracking-wider">
            <NavLink className="p-4" to="/" exact>
              <span className="text-blue-800">&lt;</span>
              Thamizh
              <span className="text-blue-800 text-xl">/</span>
              <span className="text-blue-800">&gt;</span>
            </NavLink>
          </div>
          <div className="w-2/6 flex justify-between">
            <NavLink
              activeClassName="text-white bg-blue-800 rounded-full"
              className="mr-4 px-4 py-2"
              to="/projects"
            >
              Projects
            </NavLink>
            <NavLink
              activeClassName="text-white bg-blue-800 rounded-full"
              className="mr-4 px-4 py-2"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              activeClassName="text-white bg-blue-800 rounded-full"
              className="mr-4 px-4 py-2"
              to="contact"
            >
              Contact
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
