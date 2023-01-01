import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"; // Updated to 'react-router-dom' instead of 'react-router'
import logo from "../assets/logo.jpeg";
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
  const admin = user?.role === "admin";
  const navigate = useNavigate();
  const handleOrderCheckMobile = () => {
    if (!user) {
      toast.warning("Please log in to check your orders");
      navigate("/login");
    } else if (user && !admin) {
      navigate("/ongoing_orders");
      toggleMenu();
      handleScrollToTop();
    } else {
      navigate("/All_Users_Orders");
      toggleMenu();
      handleScrollToTop();
    }
  };
  const handleOrderCheckLaptop = () => {
    if (!user) {
      toast.warning("Please log in to check your orders");
      navigate("/login");
    } else if (user && !admin) {
      navigate("/ongoing_orders");
      handleScrollToTop();
    } else {
      navigate("/All_Users_Orders");
      handleScrollToTop();
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
            <h1 className="font-bold font-heading text-gray-800 text-xs md:text-lg">
              247 CORPORATE
              <p> CONSULTING</p>
            </h1>
            <p className="hidden md:block font-sans text-center text-xs">
              Professional. Reliable. Timely
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
                ? "text-blue-950 border-b-2 border-blue-950"
                : "hover:text-blue-950 hover:border-b-2 hover:border-blue-950 transition-all"
            }
          >
            HOME
          </NavLink>
          <NavLink
            onClick={handleScrollToTop}
            to="aboutUs"
            className={({ isActive }) =>
              isActive
                ? "text-blue-900 border-b-2 border-blue-900"
                : "hover:text-blue-900 hover:border-b-2 hover:border-blue-900 transition-all"
            }
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={handleScrollToTop}
            to="services"
            className={({ isActive }) =>
              isActive
                ? "text-blue-900 border-b-2 border-blue-900"
                : "hover:text-blue-900 hover:border-b-2 hover:border-blue-900 transition-all"
            }
          >
            SERVICES
          </NavLink>

          <NavLink
            onClick={handleScrollToTop}
            to="contactUs"
            className={({ isActive }) =>
              isActive
                ? "text-blue-900 border-b-2 border-blue-900"
                : "hover:text-blue-900 hover:border-b-2 hover:border-blue-900 transition-all"
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
            <UserIcon className="h-12 shadow-md cursor-pointer text-gray-50 border-2 border-blue-900 bg-blue-900 rounded-full hidden lg:flex hover:bg-blue-700  hover:h-14 transform transition-all duration-300 ease-in-out" />

            {/* Show NavPersonLinks when hovered */}
            {isHovered && (
              <div className="absolute top-12 left-0 bg-white shadow-lg rounded-md p-8">
                <NavPersonLinks />
              </div>
            )}
          </span>

          <button
            onClick={handleOrderCheckLaptop}
            className={`btn ml-4 w-48 bg-blue-900 text-gray-50 hover:bg-gray-800 hidden lg:flex`}
          >
            {admin ? "All User's Orders..." : " ongoing Orders..."}
          </button>
          {/* List Icon */}
          <ListBulletIcon
            className="flex h-12 w-12 lg:hidden font-bold text-blue-900 cursor-pointer"
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
            <UserIcon className="size-36 p-2 border-2 border-blue-900 rounded-full  lg:hidden" />
            <NavPersonLinks />
          </div>

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-900 border-b-2 border-blue-900"
                : "hover:text-blue-900 hover:border-b-2 hover:border-blue-900 transition-all"
            }
            onClick={toggleMenu} // Close menu after clicking
          >
            HOME
          </NavLink>

          <NavLink
            to="aboutUs"
            className={({ isActive }) =>
              isActive
                ? "text-blue-900 border-b-2 border-blue-900"
                : "hover:text-blue-900 hover:border-b-2 hover:border-blue-900 transition-all"
            }
            onClick={toggleMenu}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="services"
            className={({ isActive }) =>
              isActive
                ? "text-blue-900 border-b-2 border-blue-900"
                : "hover:text-blue-900 hover:border-b-2 hover:border-blue-900 transition-all"
            }
            onClick={toggleMenu}
          >
            SERVICES
          </NavLink>
          <NavLink
            to="contactUs"
            className={({ isActive }) =>
              isActive
                ? "text-blue-900 border-b-2 border-blue-900"
                : "hover:text-blue-900 hover:border-b-2 hover:border-blue-900 transition-all"
            }
            onClick={toggleMenu}
          >
            CONTACT
          </NavLink>
          <button
            className="btn text-blue-900 border-b-2 border-blue-900"
            onClick={handleOrderCheckMobile}
          >
            Ongoing orders...
          </button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
