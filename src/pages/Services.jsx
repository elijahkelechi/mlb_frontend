import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImageDesktop from "../assets/servicesPage/heroDesktop.jpeg";
import heroImageMobile from "../assets/servicesPage/heroMobile.jpeg";
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
    benefits: [
      "Business Name",
      "Limited Liability Company",
      "Incorporated Trustee",
    ],
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
    benefits: ["Sales", "Leads", "Awareness", "Website Traffic", "Engagement"],
    icon: <FaBullhorn className="text-cyan-500 text-4xl" />,
    link: "/social_media_ads",
  },
  {
    title: "SCUML Registration",
    description:
      "Ensure compliance and avoid restrictions in SCUML-required sectors like NGOs, Churches, and Mechanized Farming with expert guidance.",
    benefits: [
      "SCUML Certificate",
      "Timeframe - 7-7 working days",
      "Flexible Payment Options",
    ],
    icon: <FaUniversity className="text-cyan-500 text-4xl" />,
    link: "/SCUML_Registeration",
  },
  {
    title: "TIN Registration",
    description:
      "Simplify your tax compliance process with our TIN registration services. We handle registrations for businesses, NGOs, and individuals.",
    benefits: ["JTB TIN", "FIRS TIN/ Tax promax", "Tax Clearance"],
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
    benefits: ["Logo", "Branding", "Flyer/Brochure"],
    icon: <FaPaintBrush className="text-cyan-500 text-4xl" />,
    link: "/graphic_design",
  },
];

const Services = () => {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 ">
      <section class="relative pt-20 px-6 bg-gray-100">
        <div class="container mx-auto text-center">
          <h1 class="text-xl md:text-3xl font-semibold text-cyan-500 mb-4">
            Our Services
          </h1>

          <p class="text-base sm:text-lg md:text-xl text-gray-600 mb-6">
            We are dedicated to providing businesses with the tools and support
            they need to grow and thrive. From corporate compliance to digital
            marketing, we offer a wide range of professional services tailored
            to meet your unique business needs.
          </p>
        </div>
      </section>

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
