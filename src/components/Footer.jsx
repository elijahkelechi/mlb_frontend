import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";
const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="bg-gray-200 py-10 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <div className="text-gray-700 mb-4">
              &copy; {new Date().getFullYear()} MLB. All rights reserved.
            </div>
            <div className="flex justify-center md:justify-start space-x-6">
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
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="text-gray-700 space-y-2">
              <li>
                <a href="#" className="hover:text-cyan-700">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-700">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-700">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-semibold text-gray-800 mb-4">Contact Us</h4>
            <p className="text-gray-700">Email: support@mlb.ng</p>
            <p className="text-gray-700">Phone: +234-907-460-2590</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div>
            <h4 className="font-semibold text-gray-800">
              CAC Pre Incorporation Services
            </h4>
            <ul className="text-gray-700 space-y-2">
              <li>
                <Link
                  onClick={handleScrollToTop}
                  to="/businessNameRegistration"
                  className="hover:text-cyan-700"
                >
                  Business Name
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleScrollToTop}
                  to="/limited_liabiltiy_registration"
                  className="hover:text-cyan-700"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleScrollToTop}
                  to="/incorperated_trustee_registration"
                  className="hover:text-cyan-700"
                >
                  Incorporated Trustee
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">
              Digital Marketing Services
            </h4>
            <ul className="text-gray-700 space-y-2">
              <li>
                <Link
                  onClick={handleScrollToTop}
                  to="/social_media_ads"
                  className="hover:text-cyan-700"
                >
                  Facebook Ads
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleScrollToTop}
                  to="/graphic_design"
                  className="hover:text-cyan-700"
                >
                  Graphic Design & Branding
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleScrollToTop}
                  to="/website_app_design_development"
                  className="hover:text-cyan-700"
                >
                  Website Design & Development
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">Other Services</h4>
            <ul className="text-gray-700 space-y-2">
              <li>
                <Link
                  onClick={handleScrollToTop}
                  to="/TIN_Registration"
                  className="hover:text-cyan-700"
                >
                  TIN & TCC
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleScrollToTop}
                  to="/SCUML_Registeration"
                  className="hover:text-cyan-700"
                >
                  SCUML
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleScrollToTop}
                  to="/CAC_post_incoperation"
                  className="hover:text-cyan-700"
                >
                  CAC Post Incorporations
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
