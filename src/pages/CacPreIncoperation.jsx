import React from "react";
import { motion } from "framer-motion";

const CacPreIncorporation = () => {
  return (
    <div className="font-sans w-full place-content-center justify-center px-6 md:px-8 pt-10 bg-gradient-to-r from-cyan-600 to-cyan-400 ">
      {/* Header */}
      <header className="py-8 text-white shadow-md">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-heading md:text-4xl font-bold leading-tight">
            Multi Level Boost - CAC Pre-Incorporation Services
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="container w-full py-8 space-y-8">
        {/* Business Name Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white p-6 rounded-lg shadow-md "
        >
          <h2 className="text-xl font-bold mb-2 font-heading">
            Business Name (Enterprise)
          </h2>
          <p className="text-gray-700 mb-4">
            A Business Name is the name and style under which a business is
            carried on. It does not enjoy legal personality or limited
            liability.
          </p>
          <button className="bg-cyan-500 text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-200">
            Proceed to Registration
          </button>
        </motion.div>

        {/* LLC Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-bold mb-2 font-heading">
            Limited Liability Company
          </h2>
          <p className="text-gray-700 mb-4">
            A Limited Liability Company provides legal personality to a business
            while protecting owners' personal assets.
          </p>
          <button className="bg-cyan-500 text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-200">
            Proceed to Registration
          </button>
        </motion.div>

        {/* Incorporated Trustee Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
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
          <button className="bg-cyan-500 text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-200">
            Proceed to Registration
          </button>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
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

        {/* Importance of CAC Registration Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-md text-gray-700"
        >
          <h2 className="text-2xl font-bold mb-4 font-heading">
            Importance of CAC Registration
          </h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              Recently, the Central Bank of Nigeria (CBN) released a directive
              that all businesses that opened bank accounts without their CAC
              registration certificate should ensure they regularize their
              accounts or would risk suspension.
            </li>
            <li>
              In Nigeria, businesses must register with the Corporate Affairs
              Commission (CAC) to open valid corporate bank accounts.
            </li>
            <li>
              Business registration adds authenticity, legal protection, and
              credibility to your operations.
            </li>
            <li>
              Registered businesses have easier access to loans compared to
              personal applications.
            </li>
          </ol>
        </motion.div>
      </div>
    </div>
  );
};

export default CacPreIncorporation;
