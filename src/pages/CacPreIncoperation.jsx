import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import bgImage from "../assets/formImage.webp";
import { FaWhatsapp } from "react-icons/fa";
import heroImageDesktop from "../assets/preIncoperation/heroDesktop.jpeg";
import heroImageMobile from "../assets/preIncoperation/heroMobile.jpeg";

const CacPreIncorporation = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const ScrollToBusinessName = () => {
    businessNameRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const businessNameRef = useRef(null);

  return (
    <div
      className="relative font-sans w-full place-content-center justify-centerpt-10 bg-gray-100 min-h-screen bg-cover bg-center bg-no-repeat"
      // style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Background Image with fixed scroll */}
      <div
        className="absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Hero Section */}
      <motion.div
        className="h-screen w-full relative flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {/* Background Image */}
        <div className="h-full w-full flex-shrink-0">
          <img
            className="hidden md:flex h-full w-full object-cover"
            src={heroImageDesktop} // Add your desktop image path
            alt="CAC Pre-Incorporation Services Desktop"
          />
          <img
            className="flex md:hidden h-full w-full object-cover"
            src={heroImageMobile} // Add your mobile image path
            alt="CAC Pre-Incorporation Services Mobile"
          />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-r bg-black bg-opacity-50">
          <motion.div
            className="h-screen flex items-center justify-start font-bold text-white px-6 md:px-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div>
              <h1 className="text-left text-2xl md:text-4xl font-bold">
                CAC Pre-Incorporation Services
              </h1>
              <p className="mt-4 text-left text-lg mb-8">
                Simplify Your Business Setup with Expert Assistance
              </p>

              <button
                onClick={ScrollToBusinessName}
                className="bg-blue-600 text-gray-50 py-3 px-8 rounded shadow hover:bg-gray-800 transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container relative w-full py-8 space-y-8 z-10  px-6 md:px-8 ">
        {/* Business Name Section */}
        <motion.div
          ref={businessNameRef} // Attach the ref here
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.1 }}
          className="bg-gray-100 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-bold mb-2 font-heading">
            Business Name (Enterprise)
          </h2>
          <p className="text-gray-700 mb-4">
            A Business Name is the name and style under which a business is
            carried on. It does not enjoy legal personality or limited
            liability.
          </p>
          <Link
            onClick={handleScrollToTop}
            to="/businessNameRegistration"
            className="bg-cyan-500 text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-200"
          >
            Learn More
          </Link>
        </motion.div>

        {/* LLC Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.1 }}
          className="bg-gray-100 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-bold mb-2 font-heading">
            Limited Liability Company
          </h2>
          <p className="text-gray-700 mb-4">
            A Limited Liability Company provides legal personality to a business
            while protecting owners' personal assets.
          </p>
          <Link
            onClick={handleScrollToTop}
            to="/limited_liabiltiy_registration"
            className="bg-cyan-500 text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-200"
          >
            Learn More
          </Link>
        </motion.div>

        {/* Incorporated Trustee Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.1 }}
          className="bg-gray-100 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-bold mb-2 font-heading">
            Incorporated Trustee (NGO | Association)
          </h2>
          <p className="text-gray-700 mb-4">
            Incorporated Trustees represent a Not-for-Profit Association. They
            can acquire property, sue and be sued in the name of the
            Association.
          </p>
          <Link
            onClick={handleScrollToTop}
            to="/incorperated_trustee_registration"
            className="bg-cyan-500 text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-200"
          >
            Learn More
          </Link>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.1 }}
          className="bg-blue-50 p-6 rounded-lg shadow-md text-center space-y-4"
        >
          <h1 className="font-bold text-2xl font-heading">
            Not Sure What to Register For?
          </h1>
          <a
            href="https://wa.me/+234 907 460 2590"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-200"
          >
            <FaWhatsapp className="mx-2 size-6 md:size-12" /> Contact Support
          </a>
          <h2 className="text-lg md:text-2xl font-bold mb-2 leading-tight font-heading pt-8">
            Join the ranks of successful businesses that entrusted their company
            registration to Multi Level Boost.
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Don't let finance and paperwork hold you back – let's get your
            Business, NGO, or Association registered.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CacPreIncorporation;
