import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import bgImage from "../assets/formImage.webp";

const handleScrollToTop = () => {
  window.scrollTo(0, 0);
};

const CacPreIncorporation = () => {
  return (
    <div
      className="relative font-sans w-full place-content-center justify-center px-6 md:px-8 pt-10 bg-gradient-to-r from-cyan-600 to-cyan-400 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Background Image with fixed scroll */}
      <div
        className="absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Header */}
      <header className="py-16 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white shadow-md relative z-10">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-heading md:text-4xl font-bold leading-tight">
            CAC Pre-Incorporation Services
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="container relative w-full py-8 space-y-8 z-10">
        {/* Business Name Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.1 }}
          className="bg-white p-6 rounded-lg shadow-md"
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
            Proceed to Registration
          </Link>
        </motion.div>

        {/* LLC Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.1 }}
          className="bg-white p-6 rounded-lg shadow-md"
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
            Proceed to Registration
          </Link>
        </motion.div>

        {/* Incorporated Trustee Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.1 }}
          className="bg-white p-6 rounded-lg shadow-md"
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
            Proceed to Registration
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
          <h2 className="text-lg md:text-2xl font-bold mb-2 leading-tight font-heading">
            Join the ranks of successful businesses that entrusted their company
            registration to Multi Level Boost.
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Don't let finance and paperwork hold you back – let's get your
            Business, NGO, or Association registered.
          </p>
          <h1 className="font-bold text-2xl font-heading">
            Not Sure What to Register For?
          </h1>
          <a
            href="https://wa.me/YOUR_WHATSAPP_NUMBER"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-200"
          >
            Contact Support via WhatsApp
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default CacPreIncorporation;
