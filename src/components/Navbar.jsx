import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"; // Updated to 'react-router-dom' instead of 'react-router'
import logo from "../assets/logo.jpg";
import { UserIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ListBulletIcon } from "@heroicons/react/24/solid";
import NavPersonLinks from "./NavPersonLiinks";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    handleScrollToTop();
  };

  const user = useSelector((state) => state.userState.user);
  const navigate = useNavigate();
  const handleOrderCheck = () => {
    if (!user) {
      toast.warning("Please log in to check your orders");
      navigate("/login");
    } else {
      navigate("/ongoing_orders");
    }
  };

  return (
    <>
      {/* Navbar */}
      <div className="navbar px-8 bg-gray-50 fixed z-50 py-4 md:py-6 w-full shadow-md">
        {/* Navbar Start */}
        <Link
          onClick={handleScrollToTop}
          to="/"
          className="navbar-start rounded-full flex items-center"
        >
          <img className="rounded-full h-14" src={logo} alt="Logo" />
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
          <span
            className="cursor-pointer relative"
            onMouseEnter={() => setIsHovered(true)} // Show NavPersonLinks on hover
            onMouseLeave={() => setIsHovered(false)} // Hide NavPersonLinks when not hovered
          >
            <UserIcon className="h-12 shadow-md cursor-pointer text-gray-50 border-2 border-cyan-500 bg-cyan-500 rounded-full hidden lg:flex hover:bg-cyan-700  hover:h-14 transform transition-all duration-300 ease-in-out" />

            {/* Show NavPersonLinks when hovered */}
            {isHovered && (
              <div className="absolute top-12 left-0 bg-white shadow-lg rounded-md p-8">
                <NavPersonLinks />
              </div>
            )}
          </span>

          <button
            onClick={handleOrderCheck}
            className="btn ml-4 w-48 bg-cyan-500 text-gray-50 hover:bg-gray-800 hidden lg:flex"
          >
            ongoing Orders...
          </button>
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
          <div className="justify-center text-center">
            <UserIcon className="size-36 p-2 border-2 border-cyan-500 rounded-full  lg:hidden" />
            <NavPersonLinks />
          </div>

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
          <button
            className="btn text-cyan-500 border-b-2 border-cyan-500"
            onClick={handleOrderCheck}
          >
            Ongoing orders...
          </button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
