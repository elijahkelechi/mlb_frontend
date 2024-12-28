// Preloader.jsx
import React from "react";
import { BsCart3, BsBoxSeam, BsTag } from "react-icons/bs"; // Importing some shopping-related icons
import { FaRegClipboard, FaRocket, FaBullhorn } from "react-icons/fa";
const Preloader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-cyan-200 via-cyan-300 to-cyan-400 z-50">
      <div className="relative mb-8 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-cyan-500 absolute"></div>
        <div className="flex space-x-4">
          {/* Animated Shopping Icons */}
          <FaRegClipboard size={28} className="text-cyan-600 animate-bounce" />
          <FaRocket
            size={28}
            className="text-cyan-700 animate-bounce delay-100"
          />
          <FaBullhorn
            size={28}
            className="text-cyan-700 animate-bounce delay-200"
          />
        </div>
      </div>
      <p className="text-4xl font-extrabold text-white tracking-wider flashlight-animation">
        MLB
        <span className="flashlight-animation text-cyan-700 ">
          <span className="text-cyan-700">Company</span>
        </span>
      </p>
      <p>Lets grow with you</p>
      <p className="mt-2 text-white text-lg font-medium animate-pulse capitalize">
        Your growth is our priority...
      </p>
    </div>
  );
};

export default Preloader;
