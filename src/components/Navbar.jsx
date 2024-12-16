import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.jpg";
import { UserIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ListBulletIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    handleScrollToTop();
  };

  return (
    <>
      {/* Navbar */}
      <div className="navbar px-8 bg-gray-50 fixed z-50 py-2 md:py-4 w-full shadow-md">
        {/* Navbar Start */}
        <Link
          onClick={handleScrollToTop}
          to="/"
          className="navbar-start rounded-full flex items-center"
        >
          <img className="rounded-full h-10" src={logo} alt="Logo" />
          <span className="flex flex-col pl-2 justify-center">
            <h1 className="font-bold font-heading text-gray-800 text-xs md:text-2xl">
              Multi-Level Boost
            </h1>
            <p className="hidden md:block font-sans text-center text-xs">
              Your Growth, Our Priority
            </p>
          </span>
        </Link>

        {/* Navbar Center */}
        <div className="hidden lg:flex space-x-6 navbar-center font-heading font-bold text-gray-950 tracking-wide capitalize">
          <NavLink
            onClick={handleScrollToTop}
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-600 border-b-2 border-cyan-600"
                : "hover:text-cyan-600 hover:border-b-2 hover:border-cyan-600 transition-all"
            }
          >
            HOME
          </NavLink>
          <NavLink
            onClick={handleScrollToTop}
            to="services"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-500 border-b-2 border-cyan-500"
                : "hover:text-cyan-500 hover:border-b-2 hover:border-cyan-500 transition-all"
            }
          >
            SERVICES
          </NavLink>
          <NavLink
            onClick={handleScrollToTop}
            to="aboutUs"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-500 border-b-2 border-cyan-500"
                : "hover:text-cyan-500 hover:border-b-2 hover:border-cyan-500 transition-all"
            }
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={handleScrollToTop}
            to="contactUs"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-500 border-b-2 border-cyan-500"
                : "hover:text-cyan-500 hover:border-b-2 hover:border-cyan-500 transition-all"
            }
          >
            CONTACT
          </NavLink>
        </div>

        {/* Navbar End */}
        <div className="navbar-end rounded-full flex items-center">
          {/* User Icon */}
          <span className="cursor-pointer">
            <UserIcon className="h-12 shadow-md cursor-pointer text-gray-50 border-2 border-cyan-500 bg-cyan-500 rounded-full hidden lg:flex  hover:h-14 transform transition-all duration-300 ease-in-out" />
            <p className="block md:mr-2 text-gray-950 font-sans border-b-2 border-cyan-500">
              Hello 👋 UserName
            </p>
          </span>

          <Link
            onClick={handleScrollToTop}
            className="btn ml-4 w-48 bg-cyan-500 text-gray-50 hover:bg-gray-800 hidden lg:flex"
          >
            Get started
          </Link>
          {/* List Icon */}
          <ListBulletIcon
            className="flex h-12 w-12 lg:hidden font-bold text-cyan-500 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Sliding Dropdown Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-2/3 bg-gray-50 shadow-lg z-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <XMarkIcon
            className="h-8 w-8 text-gray-800 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        {/* Dropdown Links */}
        <nav className="flex flex-col items-center space-y-6 font-heading font-bold text-gray-950 tracking-wide capitalize mt-12">
          <UserIcon className="h-24 p-2 border-2 border-cyan-500 rounded-full flex lg:hidden" />
          <p>Hello 👋 UserName</p>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-500 border-b-2 border-cyan-500"
                : "hover:text-cyan-500 hover:border-b-2 hover:border-cyan-500 transition-all"
            }
            onClick={toggleMenu} // Close menu after clicking
          >
            HOME
          </NavLink>
          <NavLink
            to="services"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-500 border-b-2 border-cyan-500"
                : "hover:text-cyan-500 hover:border-b-2 hover:border-cyan-500 transition-all"
            }
            onClick={toggleMenu}
          >
            SERVICES
          </NavLink>
          <NavLink
            to="aboutUs"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-500 border-b-2 border-cyan-500"
                : "hover:text-cyan-500 hover:border-b-2 hover:border-cyan-500 transition-all"
            }
            onClick={toggleMenu}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="contactUs"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-500 border-b-2 border-cyan-500"
                : "hover:text-cyan-500 hover:border-b-2 hover:border-cyan-500 transition-all"
            }
            onClick={toggleMenu}
          >
            CONTACT
          </NavLink>
          <NavLink
            to="contactUs"
            className="btn text-cyan-500 border-b-2 border-cyan-500"
            onClick={toggleMenu}
          >
            GET STARTED
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
