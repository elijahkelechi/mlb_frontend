import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import servicesImageDesktop from "../assets/servicesPage/heroDesktop.jpeg";
import servicesImageMobile from "../assets/servicesPage/heroMobile.jpeg";
import {
  FaRegFileAlt,
  FaRegHandshake,
  FaBullhorn,
  FaUniversity,
  FaPaintBrush,
  FaLaptopCode,
  FaFileSignature,
} from "react-icons/fa";

const handleScrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Services Array
const services = [
  {
    title: "CAC Registration",
    description:
      "Register your Business Name, Limited Liability Company (LLC), NGO, or Association with ease. No stress, no lengthy paperwork, and fast document delivery.",
    benefits: ["Seamless process", "No paperwork", "Fast document delivery"],
    icon: <FaRegFileAlt className="text-cyan-500 text-4xl" />,
    link: "/CAC_pre-incoperation",
  },
  {
    title: "CAC Post Incorporation",
    description:
      "Easily update your registered business or NGO details, including directors, trustees, address, or business activities. Filing annual returns is simplified.",
    benefits: ["Change directors/trustees", "Update details", "File returns"],
    icon: <FaRegHandshake className="text-cyan-500 text-4xl" />,
    link: "/CAC_post_incoperation",
  },
  {
    title: "Social Media Ads",
    description:
      "Reach your target audience, grow leads, and enhance brand awareness with expert-managed ad campaigns tailored for success.",
    benefits: ["Targeted campaigns", "Increased leads", "Brand growth"],
    icon: <FaBullhorn className="text-cyan-500 text-4xl" />,
    link: "/social_media_ads",
  },
  {
    title: "SCUML Registration",
    description:
      "Ensure compliance and avoid restrictions in SCUML-required sectors like NGOs, Churches, and Mechanized Farming with expert guidance.",
    benefits: ["Compliance assurance", "Bank-ready certificates", "Expert-led"],
    icon: <FaUniversity className="text-cyan-500 text-4xl" />,
    link: "/SCUML_Registeration",
  },
  {
    title: "TIN Registration",
    description:
      "Simplify your tax compliance process with our TIN registration services. We handle registrations for businesses, NGOs, and individuals.",
    benefits: ["Fast registration", "Business & NGO support", "Tax compliance"],
    icon: <FaFileSignature className="text-cyan-500 text-4xl" />,
    link: "/TIN_registration",
  },

  {
    title: "Website Design & Development",
    description:
      "From simple websites to advanced eCommerce platforms, we deliver responsive, customized solutions that meet your business goals.",
    benefits: ["Responsive designs", "Custom development", "SEO-optimized"],
    icon: <FaLaptopCode className="text-cyan-500 text-4xl" />,
    link: "/website_app_design_development",
  },
  {
    title: "Graphic Design",
    description:
      "Our creative team delivers visually stunning and engaging designs that elevate your brand's identity.",
    benefits: ["Custom logos", "Brand-focused visuals", "Marketing materials"],
    icon: <FaPaintBrush className="text-cyan-500 text-4xl" />,
    link: "/graphic_design",
  },
];

const Services = () => {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 ">
      {/* Hero Section */}
      <div className="h-screen relative flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0 h-full w-full">
          <img
            className="hidden md:flex h-full w-full object-cover"
            src={servicesImageDesktop}
            alt="Our Services Desktop"
          />
          <img
            className="flex md:hidden h-full w-full object-cover"
            src={servicesImageMobile}
            alt="Our Services Mobile"
          />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-left">
          <div className="max-w-5xl mx-auto text-left px-6">
            {/* Header */}
            <h1 className="text-3xl text-cyan-500 sm:text-4xl font-extrabold mb-4">
              Our Services
            </h1>
            <p className="text-gray-300 text-lg mb-12">
              we are dedicated to providing businesses with the tools and
              support they need to grow and thrive. From corporate compliance to
              digital marketing, we offer a wide range of professional services
              tailored to meet your unique business needs
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto py-16 px-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="p-6">
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                {service.description}
              </p>
              <ul className="list-disc list-inside text-gray-500 text-sm mb-4">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
              <Link
                to={service.link}
                onClick={handleScrollToTop}
                className="block text-center bg-cyan-500 text-white py-2 px-4 rounded shadow-md hover:bg-cyan-600 transition duration-200"
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
