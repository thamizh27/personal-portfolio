import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const SideBar = ({ toggle, open }) => {
  return (
    <div
      open={open}
      className={`w-full h-full bg-white z-50 fixed left-0 transition-all duration-500 ease-in-out ${
        open ? "top-0" : "-top-full"
      } ${open ? "opacity-100" : "opacity-0"}`}
    >
      <div onClick={toggle}>
        <FaTimes className="text-3xl absolute right-8 top-10 cursor-pointer" />
      </div>
      <div className="text-3xl h-full flex flex-col justify-center items-center">
        <NavLink
          to="/"
          exact
          className="p-4 mb-6"
          activeClassName="text-blue-800"
          onClick={toggle}
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className="p-4 mb-6"
          activeClassName="text-blue-800"
          onClick={toggle}
        >
          Projects
        </NavLink>
        <NavLink
          to="/about"
          className="p-4 mb-6"
          activeClassName="text-blue-800"
          onClick={toggle}
        >
          About
        </NavLink>
        <NavLink
          to="contact"
          className="p-4 mb-6"
          activeClassName="text-blue-800"
          onClick={toggle}
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
