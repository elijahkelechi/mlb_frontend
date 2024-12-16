import React from "react";
import {
  FaBullseye,
  FaLightbulb,
  FaUsers,
  FaHandshake,
  FaRocket,
  FaLeaf,
} from "react-icons/fa";
import { motion } from "framer-motion";
import bgImage from "../assets/aboutPageImage.webp";

const AboutUs = () => {
  const missionVisionValues = [
    {
      title: "Integrity",
      description:
        "We uphold transparency and honesty in all our dealings, ensuring trust and reliability for our clients.",
      icon: <FaHandshake className="text-blue-500 text-4xl" />,
    },
    {
      title: "Innovation",
      description:
        "We embrace creativity and cutting-edge technology to deliver superior services that meet the evolving needs of our clients.",
      icon: <FaLightbulb className="text-yellow-500 text-4xl" />,
    },
    {
      title: "Customer-Centricity",
      description:
        "We prioritize our clients' success, tailoring our solutions to align with their unique goals and challenges.",
      icon: <FaUsers className="text-green-500 text-4xl" />,
    },
    {
      title: "Excellence",
      description:
        "We strive for excellence in every project, ensuring high-quality results that exceed expectations.",
      icon: <FaBullseye className="text-red-500 text-4xl" />,
    },
    {
      title: "Empowerment",
      description:
        "We simplify processes and provide tools to empower individuals and businesses to succeed.",
      icon: <FaRocket className="text-purple-500 text-4xl" />,
    },
    {
      title: "Sustainability",
      description:
        "We promote ethical practices and long-term growth for businesses, building a sustainable future.",
      icon: <FaLeaf className="text-green-700 text-4xl" />,
    },
  ];

  return (
    <div
      className="bg-cover bg-center py-16 px-6 md:px-12"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-7xl mx-auto bg-opacity-75 bg-gray-900 p-6 rounded-lg">
        {/* Intro Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-white text-base md:text-lg">
            At{" "}
            <span className="text-cyan-500 font-semibold">
              MULTI-LEVEL BOOST
            </span>
            , we are a passionate team of SEOs, advertising specialists,
            designers, developers, strategists, and corporate service experts
            committed to transforming businesses through innovative solutions.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            Our Journey
          </h2>
          <p className="text-gray-300 leading-7">
            Based in Uyo, Akwa Ibom State, Nigeria, we started our journey in
            late 2021 with just two team members. Our mission is to help
            businesses grow through premium digital marketing and seamless
            company registration services.
          </p>
        </motion.div>

        {/* Mission, Vision, and Values */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
            Mission, Vision & Core Values
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {missionVisionValues.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg rounded-lg p-4 md:p-6 flex items-start space-x-4 hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div>{item.icon}</div>
                <div>
                  <h3 className="text-md md:text-lg font-bold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            When You Succeed, We Succeed
          </h2>
          <p className="text-gray-300">
            In an ever-changing industry, we stay ahead of trends to deliver
            tangible results. Let’s grow together!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
