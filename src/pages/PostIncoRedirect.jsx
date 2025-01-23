import React from "react";
import { Link } from "react-router";

const PostIncoRedirect = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="max-w-2xl w-full p-6 bg-white shadow-lg rounded-lg">
        {/* Title Section */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Post Incorporation Service
        </h1>

        {/* Content Section */}
        <p className="text-lg text-gray-700 text-center mb-6">
          Sorry, this service cannot be completed online due to its complexity.
          Please contact support for assistance with filling.
        </p>

        {/* WhatsApp Chat Button */}
        <a
          href="https://wa.me/+234 803 221 0489" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex justify-center items-center mb-4 py-3 bg-green-500 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-green-600"
        >
          <i className="fab fa-whatsapp text-2xl mr-3"></i> Chat on WhatsApp
        </a>

        {/* Contact Form Redirect Button */}
        <Link
          to="/contactUs"
          onClick={() => window.scrollTo(0, 0)}
          className="w-full flex justify-center items-center py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-blue-700"
        >
          Contact Us for Assistance
        </Link>
      </div>
    </div>
  );
};

export default PostIncoRedirect;
