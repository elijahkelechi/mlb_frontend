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
    <div className="bg-gray-50 py-16 px-6 md:px-12">
      {/* Hero Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          About Us
        </h1>
        <p className="text-base text-gray-800 md:text-lg">
          At{" "}
          <span className="text-cyan-500 font-semibold">MULTI-LEVEL BOOST</span>
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
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Our Journey
        </h2>
        <p className="text-gray-800 leading-7">
          Based in Uyo, Akwa Ibom State, Nigeria, we started our journey in late
          2021 with just two team members. Our mission is to help businesses
          grow through premium digital marketing and seamless company
          registration services.
        </p>
      </motion.div>

      {/* Mission and Vision */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-xl md:text-2xl font-bold text-cyan-500 mb-4">
          Mission and Vision
        </h2>
        <div className="space-y-6">
          <p className="text-gray-800">
            <span className="font-semibold text-gray-900">Mission:</span> ​To
            empower businesses and entrepreneurs by providing exceptional
            digital marketing strategies and seamless company registration
            services, enabling them to achieve their goals and thrive in a
            competitive marketplace.
          </p>
          <p className="text-gray-800">
            <span className="font-semibold text-gray-900">Vision:</span> To be
            the leading provider of innovative digital solutions and corporate
            services, fostering growth, trust, and success for businesses across
            Nigeria and beyond.
          </p>
        </div>
      </motion.div>

      {/* Core Values */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-xl md:text-2xl font-bold text-cyan-500 mb-6">
          Core Values
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {missionVisionValues.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 rounded-lg p-4 md:p-6 flex items-start space-x-4 hover:shadow-xl transition-shadow duration-300"
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
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Let’s Grow Together!
        </h2>
        <p className="text-gray-900 leading-7">
          Whether you’re looking to scale your business, enhance your online
          presence, or handle corporate services with ease, we have the
          expertise and drive to make it happen. If we’ve achieved success for
          our own business, we can undoubtedly do the same for yours.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutUs;
