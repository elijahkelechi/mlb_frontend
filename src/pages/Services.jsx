import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  FaRegFileAlt,
  FaRegHandshake,
  FaBullhorn,
  FaUniversity,
  FaPaintBrush,
  FaLaptopCode,
} from "react-icons/fa";

// Services Array with dynamic links
const services = [
  {
    title: "CAC Registration",
    description:
      "Register your Business Name, Limited Liability Company (LLC), NGO, or Association with ease. No stress, no lengthy paperwork, and fast document delivery in both soft and hard copy.",
    benefits: ["Seamless process", "No paperwork", "Fast document delivery"],
    icon: <FaRegFileAlt className="text-cyan-500 text-3xl" />,
    link: "/CAC_pre-incoperation",
  },
  {
    title: "CAC Post Incorporation",
    description:
      "Easily update your registered business or NGO details, including changing directors, trustees, name, address, or business activities. We also assist with filing annual returns or increasing share capital.",
    benefits: [
      "Change directors or trustees",
      "Update business details",
      "File annual returns",
    ],
    icon: <FaRegHandshake className="text-cyan-500 text-3xl" />,
    link: "/cac-post-incorporation",
  },
  {
    title: "Social Media Ads",
    description:
      "Reach your target audience, get more sales and leads, grow brand awareness, and drive relevant website traffic with our expert Social Media Ad services.",
    benefits: [
      "Targeted audience reach",
      "Increased sales and leads",
      "Enhanced brand awareness",
    ],
    icon: <FaBullhorn className="text-cyan-500 text-3xl" />,
    link: "/social-media-ads",
  },
  {
    title: "SCUML Registration",
    description:
      "Operate seamlessly in SCUML-required sectors like NGOs, Churches, Mechanized Farming, and more. Avoid bank restrictions and ensure compliance with our expert SCUML registration services.",
    benefits: [
      "Avoid bank restrictions",
      "Get SCUML compliance",
      "Expert-led registration",
    ],
    icon: <FaUniversity className="text-cyan-500 text-3xl" />,
    link: "/scuml-registration",
  },
  {
    title: "Graphic Design",
    description:
      "Our creative team delivers beautiful and engaging designs that tell the story of your brand. From logos to marketing materials, we've got you covered.",
    benefits: [
      "Creative, eye-catching designs",
      "Brand-focused storytelling",
      "Skilled designers",
    ],
    icon: <FaPaintBrush className="text-cyan-500 text-3xl" />,
    link: "/graphic-design",
  },
  {
    title: "Website Design and Development",
    description:
      "From simple WordPress websites to complex eCommerce platforms, our development team will bring your vision to life with custom, responsive designs.",
    benefits: [
      "Custom website solutions",
      "Responsive design",
      "End-to-end development",
    ],
    icon: <FaLaptopCode className="text-cyan-500 text-3xl" />,
    link: "/website-design-development",
  },
];

// Main Services Component
const Services = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-cyan-400 py-16 px-4 md:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-50 mb-6">
          Our Services
        </h1>
        <p className="text-gray-50 mb-12">
          We provide a range of professional services to help your business
          thrive. Explore our offerings below.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Service Card Content */}
            <div className="p-6">
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {service.title}
              </h2>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <ul className="list-disc pl-5 mb-4 text-gray-600">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
              {/* Link to proceed */}
              <Link
                to={service.link}
                className="mt-4 bg-cyan-500 text-gray-50 py-2 px-4 rounded hover:bg-gray-800 transition duration-200"
              >
                GET STARTED
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
