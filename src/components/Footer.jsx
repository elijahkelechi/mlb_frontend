import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-10">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-gray-700">
            &copy; {new Date().getFullYear()} MLB. All rights reserved.
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 hover:text-cyan-700"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 hover:text-cyan-700"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 hover:text-cyan-700"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 hover:text-cyan-700"
            >
              <FaLinkedin size={20} />
            </a>
          </div>

          <ul className="flex justify-center space-x-8 text-gray-700">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>

          <div className="text-gray-700 mt-4">
            <p>Email: support@mlb.com</p>
            <p>Phone: +234-907-460-2590</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
