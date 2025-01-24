import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-gray-200 py-8 px-4 md:px-8 ">
      <div className="container mx-auto">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* CAC Pre Incorporation Services */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4 text-center md:text-left">
              CAC Pre Incorporation Services
            </h4>
            <ul className="text-gray-700 space-y-2 text-center md:text-left">
              <li>
                <Link
                  onClick={handleScrollToTop}
                  to="/businessNameRegistration"
                  className="text-cyan-500 hover:text-cyan-700 underline"
                >
                  Business Name
                </Link>
              </li>

              <li>
                <Link
                  onClick={handleScrollToTop}
                  to="/incorperated_trustee_registration"
                  className="text-cyan-500 hover:text-cyan-700 underline"
                >
                  Incorporated Trustee
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleScrollToTop}
                  to="/limited_liabiltiy_registration"
                  className="text-cyan-500 hover:text-cyan-700 underline"
                >
                  Limited Liability Company
                </Link>
              </li>
            </ul>
          </div>

          {/* Digital Marketing Services */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4 text-center md:text-left">
              Digital Marketing Services
            </h4>
            <ul className="text-gray-700 space-y-2 text-center md:text-left">
              <li>
                <Link
                  onClick={handleScrollToTop}
                  to="/social_media_ads"
                  className="text-cyan-500 hover:text-cyan-700 underline"
                >
                  Facebook Ads
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleScrollToTop}
                  to="/graphic_design"
                  className="text-cyan-500 hover:text-cyan-700 underline"
                >
                  Graphic Design & Branding
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleScrollToTop}
                  to="/website_app_design_development"
                  className="text-cyan-500 hover:text-cyan-700 underline"
                >
                  Website Design & Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Other Services */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4 text-center md:text-left">
              Other Services
            </h4>
            <ul className="text-gray-700 space-y-2 text-center md:text-left">
              <li>
                <Link
                  onClick={handleScrollToTop}
                  to="/SCUML_Registeration"
                  className="text-cyan-500 hover:text-cyan-700 underline"
                >
                  SCUML
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleScrollToTop}
                  to="/TIN_Registration"
                  className="text-cyan-500 hover:text-cyan-700 underline"
                >
                  TIN & TCC
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleScrollToTop}
                  to="/CAC_post_incoperation"
                  className="text-cyan-500 hover:text-cyan-700 underline"
                >
                  CAC Post Incorporations
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4 text-center md:text-left">
              Quick Links
            </h4>
            <ul className="text-gray-700 space-y-2 text-center md:text-left">
              <li>
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  to="/MLB_privacy_Policy"
                  className="text-cyan-500 hover:text-cyan-700 underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  to="/Terms_Of_Use"
                  className="text-cyan-500 hover:text-cyan-700 underline"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-cyan-500 hover:text-cyan-700 underline"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4 text-center md:text-left">
              Contact Us
            </h4>
            <p className="text-gray-700 text-center md:text-left">
              Email: support@mlb.ng
            </p>
            <p className="text-gray-700 text-center md:text-left">
              Phone: +234-907-460-2590
            </p>
          </div>

          {/* Social Media */}
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

        {/* Footer Bottom */}
        <div className="text-left mt-8 text-gray-700 text-sm">
          &copy; {new Date().getFullYear()} MLB. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
