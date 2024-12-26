import React from "react";
import bgImage from "../assets/formImage.webp"; // Background image
import { FaRegCheckCircle, FaRegFileAlt, FaRegClipboard } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Importing Framer Motion

const AnnualReturnMain = () => {
  return (
    <motion.div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.6)", // Overlay for contrast
        color: "white",
        padding: "60px 20px",
      }}
      className="text-center"
      initial={{ opacity: 0 }} // Initial state: opacity set to 0
      animate={{ opacity: 1 }} // Animate to fully visible state
      transition={{ duration: 1 }} // Transition duration
    >
      <div className="max-w-4xl mx-auto bg-gray-50 bg-opacity-50 p-4 md:p-16 rounded-md">
        <motion.h1
          className="text-2xl md:text-4xl bg-gradient-to-r from-cyan-400 to-cyan-500 p-2 md:p-4 rounded-md text-gray-50 font-bold leading-tight mb-8"
          initial={{ x: -100 }} // Initial horizontal position
          animate={{ x: 0 }} // Animate to starting position
          transition={{ duration: 0.5 }}
        >
          Comprehensive Guide to CAC Annual Return Filing
        </motion.h1>
        <motion.p
          className="text-lg mb-6"
          initial={{ y: 50 }} // Initial vertical position
          animate={{ y: 0 }} // Animate to starting position
          transition={{ duration: 0.5 }}
        >
          Filing your Annual Returns with the Corporate Affairs Commission (CAC)
          is a vital legal requirement for all registered businesses in Nigeria.
          Compliance ensures your business remains active and in good standing
          with regulatory authorities. Non-compliance can lead to penalties,
          legal complications, or even deregistration.
        </motion.p>
        {/* Other sections here */}
        <div className="block md:flex justify-center space-y-4 space-x-2 md:space-x-4">
          <motion.div
            className="bg-cyan-400 hover:bg-cyan-500 text-white py-2 px-2 md:px-6 rounded-lg transition-transform transform hover:scale-105"
            initial={{ scale: 0.9 }} // Initial scale
            animate={{ scale: 1 }} // Animate to starting scale
            transition={{ duration: 0.3 }}
          >
            Fill Annual Return for Business Name
            <br />
            <Link className="btn btn-sm m-4">Get Started</Link>
          </motion.div>

          <motion.div
            className="bg-cyan-400 hover:bg-cyan-500 text-white py-2 px-2 md:px-6 rounded-lg transition-transform transform hover:scale-105"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            Fill Annual Return for Limited Liability Company
            <br />
            <Link className="btn btn-sm m-4">Get Started</Link>
          </motion.div>

          <motion.div
            className="bg-cyan-400 hover:bg-cyan-500 text-white py-2 px-2 md:px-6 rounded-lg transition-transform transform hover:scale-105"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            Fill Annual Return for Incorporated Trustee
            <br />
            <Link className="btn btn-sm m-4">Get Started</Link>
          </motion.div>
        </div>

        {/* Annual Return Filing Fees section */}
        <motion.h2
          className="text-4xl font-semibold mt-12 mb-6 flex items-center justify-center space-x-3"
          initial={{ opacity: 0, y: 100 }} // Initial position and opacity
          animate={{ opacity: 1, y: 0 }} // Animate to starting position and full opacity
          transition={{ duration: 0.5 }}
        >
          <FaRegClipboard className="text-cyan-400" />
          <span className="text-gray-800">Annual Return Filing Fees</span>
        </motion.h2>
        <div className="max-w-3xl mx-auto text-left">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <strong>Business Name</strong>
            <ul className="list-disc list-inside">
              <li>CAC Filing Fee: 3,250 NGN per year</li>
              <li>Default Penalty: 5,000 NGN</li>
              <li>Service Charge: 5,000 NGN</li>
            </ul>
          </motion.div>
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <strong>Limited Liability Company</strong>
            <ul className="list-disc list-inside">
              <li>CAC Filing Fee: 10,000 NGN per year</li>
              <li>Default Penalty: 15,000 NGN</li>
              <li>Service Charge: 10,000 NGN</li>
            </ul>
          </motion.div>
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <strong>Incorporated Trustee</strong>
            <ul className="list-disc list-inside">
              <li>CAC Filing Fee: 5,000 NGN per year</li>
              <li>Default Penalty: 8,000 NGN</li>
              <li>Service Charge: 7,000 NGN</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnnualReturnMain;
