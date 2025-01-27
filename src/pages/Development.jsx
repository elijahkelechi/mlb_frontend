import { useState } from "react";
import {
  FaRegStar,
  FaMobileAlt,
  FaLaptopCode,
  FaCogs,
  FaWhatsapp,
  FaBullseye,
  FaDollarSign,
  FaHandshake,
} from "react-icons/fa";

import { FaUserCog } from "react-icons/fa"; // Human with settings icon
import { FiSettings } from "react-icons/fi"; // Spanner icon
import { motion } from "framer-motion";
import { Link } from "react-router";
import webImage from "../assets/website/webImage.webp";
import mobileHero from "../assets/website/mobileHero.jpeg";
import desktopHero from "../assets/website/desktopHero.jpeg";

const Development = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    whatsappNumber: "",
    businessIndustry: "",
    additionalInfo: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  const handleScrollToTop = () => {
    scrollTo(0, 0);
  };
  return (
    <div className="bg-gray-50">
      <div className=" bg-gray-50 rounded-lg  overflow-hidden">
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
              src={desktopHero} // Add your desktop image path
              alt="Website Design and Development Desktop"
            />
            <img
              className="flex md:hidden h-full w-full object-cover"
              src={mobileHero} // Add your mobile image path
              alt="Website Design and Development Mobile"
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
                  Professional Website Design and Development Services
                </h1>
                <p className="mt-4 text-left text-lg mb-8">
                  Your Vision, Our Expertise—Building Websites That Drive
                  Success
                </p>

                <Link
                  onClick={handleScrollToTop}
                  to="/website_design_services" // Adjust the link as necessary
                  className="bg-cyan-500 text-gray-50 py-3 px-8 rounded shadow hover:bg-gray-800 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-8">
            {/* Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Build a High Functional Website for Your brand
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-6">
                In today’s digital landscape, your website is more than just an
                online presence; it’s the face of your brand, the hub of your
                operations, and often the first impression potential customers
                have of your business.
              </p>
              <p className="text-gray-700 text-base md:text-lg mb-6">
                At{" "}
                <span className="text-cyan-500 font-semibold">
                  MULTI-LEVEL BOOST
                </span>
                , we specialize in creating stunning, user-friendly, and
                mobile-optimized websites tailored to meet your unique needs.
                From design to development, we transform your vision into a
                powerful digital platform that drives results.
              </p>
              <a
                href="#contact"
                className="inline-block bg-cyan-500 text-white text-sm md:text-base py-3 px-6 rounded hover:bg-gray-800 transition duration-200"
              >
                Get Started
              </a>
            </div>

            {/* Visual Content */}
            <div className="flex justify-center">
              <img
                src={webImage}
                alt="Website Design Illustration"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="p-6 md:p-16 space-y-8">
          {/* Why Your Business Needs a Website */}
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto ">
              {/* Section Title */}
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                  Why Choose Multi-Level Boost?
                </h2>
                <p className="text-lg text-gray-600 mt-4">
                  Discover the benefits of working with us, and why we're the
                  best choice for your web design and development needs.
                </p>
              </div>

              {/* Section Content */}
              <div className="bg-white p-8 rounded-lg shadow-lg   justify-between">
                {/* Item 1 */}
                <div className="flex flex-col items-center text-center space-y-4 my-4 md:my-8 mb-8 md:mb-0">
                  <h3 className="text-xl font-semibold text-gray-800">
                    🧑‍💻 Experienced Team
                  </h3>
                  <p className="text-gray-600">
                    Our designers and developers bring years of expertise to
                    every project, ensuring professional and impactful websites.
                  </p>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col items-center text-center space-y-4 my-4 md:my-8 md:mb-0">
                  <h3 className="text-xl font-semibold text-gray-800">
                    🎯 Tailored Solutions
                  </h3>
                  <p className="text-gray-600">
                    We customize every website to match your unique goals and
                    target audience for maximum effectiveness.
                  </p>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col items-center text-center space-y-4 my-4 md:my-8 md:mb-0">
                  <h3 className="text-xl font-semibold text-gray-800">
                    💰 Affordable Packages
                  </h3>
                  <p className="text-gray-600">
                    Get premium services designed to fit your budget without
                    compromising quality.
                  </p>
                </div>

                {/* Item 4 */}
                <div className="flex flex-col items-center text-center space-y-4 my-4 md:my-8 md:mb-0">
                  <h3 className="text-xl font-semibold text-gray-800">
                    ⚙️ Cutting-Edge Technology
                  </h3>
                  <p className="text-gray-600">
                    We leverage the latest tools and trends to keep your website
                    ahead of the competition.
                  </p>
                </div>

                {/* Item 5 */}
                <div className="flex flex-col items-center text-center space-y-4 my-4 md:my-8">
                  <h3 className="text-xl font-semibold text-gray-800">
                    🤝 Client-Centric Approach
                  </h3>
                  <p className="text-gray-600">
                    Your satisfaction is our top priority, and we collaborate
                    closely with you throughout the entire process.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Our Services */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Our Website Design and Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-left bg-gray-100 p-6 rounded-lg shadow-md">
                <div className="text-left">
                  {" "}
                  <FaMobileAlt className="text-4xl text-left text-cyan-500 mb-4" />
                  <h3 className="text-lg font-semibold">Website Design</h3>
                </div>

                <ul className="text-gray-600 mt-4 space-y-2 list-disc">
                  <li>Custom, visually appealing layouts</li>
                  <li>Mobile-responsive and user-friendly designs</li>
                  <li>Branding and theme alignment</li>
                </ul>
              </div>
              <div className="flex flex-col items-left bg-gray-100 p-6 rounded-lg shadow-md">
                <FaLaptopCode className="text-4xl text-cyan-500 mb-4" />
                <h3 className="text-lg font-semibold">Website Development</h3>
                <ul className="text-gray-600 mt-4 space-y-2 list-disc">
                  <li>Dynamic, functional websites with seamless navigation</li>
                  <li>E-commerce platforms for online sales</li>
                  <li>CMS integration for easy content management</li>
                </ul>
              </div>
              <div className="flex flex-col items-left bg-gray-100 p-6 rounded-lg shadow-md">
                <FaRegStar className="text-4xl text-cyan-500 mb-4" />
                <h3 className="text-lg font-semibold">Optimization</h3>
                <ul className="text-gray-600 mt-4 space-y-2 list-disc">
                  <li>Fast-loading pages for enhanced user experience</li>
                  <li>SEO-ready designs to boost search engine rankings</li>
                  <li>
                    Secure websites with SSL certificates and data protection
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-left bg-gray-100 p-6 rounded-lg shadow-md">
                <div className="flex items-left text-cyan-500 mb-4">
                  <FiSettings className="text-xl mr-2" /> {/* Spanner Icon */}
                  <FaUserCog className="text-xl" /> {/* Human Icon */}
                </div>
                <h3 className="text-lg font-semibold">
                  Maintenance and Support
                </h3>
                <ul className="text-gray-600 mt-4 space-y-2 list-disc">
                  <li>Regular updates and backups</li>
                  <li>Bug fixes and performance enhancements</li>
                  <li>Ongoing support for your evolving needs</li>
                </ul>
              </div>
              <div>
                <a
                  href="https://wa.me/+234 803 2210489"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition duration-200"
                >
                  <FaWhatsapp className="mr-2" size={20} />{" "}
                  {/* Adds some margin between icon and text */}
                  Chat a Developer Now
                </a>
              </div>
            </div>
          </motion.section>
          <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-6 md:px-12">
              {/* Section Title */}
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                  Cost of Web Design And Development
                </h2>
                <p className="text-lg text-gray-600 mt-4">
                  Our Web Design and Development varies depending on the type of
                  website, its features, functionalities, addons, maintenance,
                  and more. Cost starting from...
                </p>
              </div>

              {/* Box Section */}
              <div className="bg-cyan-500 text-white p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left Side: Info with Icons */}
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white rounded-full text-blue-500">
                      <FaLaptopCode className="text-3xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">
                        Web Design and Development Plan
                      </h3>
                      <p className="text-gray-200 mt-2">
                        Get a custom website designed to meet your business
                        goals.
                      </p>
                      {/* Button Section */}
                      <div className="text-center mt-8">
                        <Link
                          to="/packages"
                          className="bg-yellow-500 text-white py-3 px-8 rounded-full shadow-lg hover:bg-gray-800 transition duration-300"
                        >
                          See Packages
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white rounded-full text-blue-500">
                      <FaCogs className="text-3xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">
                        e-Commerce Website
                      </h3>
                      <p className="text-gray-200 mt-2">
                        A fully functional e-commerce website that works
                        seamlessly across all devices.
                      </p>
                      {/* Button Section */}
                      <div className="text-center mt-8">
                        <Link
                          to="/packages"
                          className="bg-yellow-500 text-white py-3 px-8 rounded-full shadow-lg hover:bg-gray-800 transition duration-300"
                        >
                          See Packages
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Industries Served */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Industries We Serve
            </h2>
            <ul className="list-inside text-gray-600 space-y-2">
              {[
                "E-commerce and Retail",
                "Real Estate and Property Management",
                "Education and Training",
                "Hospitality and Tourism",
                "NGOs and Associations",
                "Startups and Entrepreneurs",
                "Automobile",
                "Renewable Energy",
                "Technology",
                "Agriculture",
              ].map((item, index) => (
                <li key={index} className="text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Development Process */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.7 }}
            className=" bg-gray-100 shadow-lg rounded-l p-6 md:p-12"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Our Website Development Process
            </h2>
            <ol className="list-none list-inside text-gray-600 space-y-4 md:space-y-8">
              <li>
                <span className="font-bold text-gray-800">Consultation: </span>
                Share your vision, goals, and requirements with our team.
              </li>
              <li>
                <span className="font-bold text-gray-800">Design Concept:</span>{" "}
                We create a custom design aligned with your brand.
              </li>
              <li>
                <span className="font-bold text-gray-800">Development:</span>{" "}
                Our developers bring the design to life with functionality and
                features.
              </li>
              <li>
                <span className="font-bold text-gray-800">Testing:2</span> Every
                website undergoes rigorous testing for quality asurance.
              </li>
              <li>
                <span className="font-bold text-gray-800">
                  Launch and Support:
                </span>{" "}
                We launch your website and provide ongoing maintenance.
              </li>
            </ol>
          </motion.section>
          <p className="font-bold my-2">Chat Developer Now!</p>

          <a
            href="https://wa.me/+234 803 2210489"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition duration-200"
          >
            <FaWhatsapp className="mr-2" size={20} />{" "}
            {/* Adds some margin between icon and text */}
            Chat a Developer Now
          </a>
        </main>
      </div>
    </div>
  );
};

export default Development;
