import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import bgImage from "../../assets/formImage.webp";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const BusinessNameRegistration = () => {
  const user = useSelector((state) => state.userState.user);
  const navigate = useNavigate();
  const handleScrollToTop = (event) => {
    event.preventDefault(); // Prevent Link's default navigation
    if (!user) {
      navigate("/login");
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Main Content */}
      <div className="relative z-10 min-h-screen p-6 md:p-12 bg-transparent">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-cyan-500 to-cyan-700   text-white p-6 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold">
            Register Your Business Name
          </h1>
          <p className="mt-2 text-lg mb-8">
            Hassle-Free Registration with MULTI-LEVEL BOOST.
          </p>
          <Link
            onClick={handleScrollToTop}
            to="/business_name_registration_form"
            className="bg-blue-500 text-gray-50 py-2 px-6 rounded shadow hover:bg-gray-800"
          >
            Fill Registration Form
          </Link>
        </div>

        {/* "Why Register Your Business Name" Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-8"
        >
          <h2 className="text-2xl font-bold text-gray-50">
            Why Register Your Business Name?
          </h2>
          <div className="grid gap-6 mt-4 md:grid-cols-2">
            {[
              {
                title: "Legal Recognition",
                description:
                  "Gives your business a legal identity for official operations and access to opportunities.",
                icon: "\uD83D\uDDFD\uFE0F",
              },
              {
                title: "Build Customer Trust",
                description:
                  "Enhances your credibility, giving customers confidence in your professionalism.",
                icon: "\uD83E\uDD1D",
              },
              {
                title: "Access Financial Services",
                description:
                  "Allows you to open corporate bank accounts and apply for loans or grants.",
                icon: "\uD83D\uDCB3",
              },
              {
                title: "Expand Your Reach",
                description:
                  "Lets you tender for contracts, partner with larger organizations, and scale your business.",
                icon: "\uD83C\uDF0D",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-gray-100 p-4 rounded-lg"
              >
                <div className="text-4xl">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-700">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* "How It Works" Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-8 bg-cyan-100 p-8 bg-opacity-30"
        >
          <h2 className="text-2xl font-bold text-gray-50">How It Works</h2>
          <ol className="list-decimal font-bold list-inside mt-4 text-gray-900 space-y-2">
            <li>Submit your details and required documents.</li>
            <li>Make a secure payment. Flexible options available.</li>
            <li>We handle the entire process with the CAC.</li>
            <li>Receive your certificate and other documents.</li>
          </ol>
        </motion.div>

        {/* "Our Services" Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-8 bg-cyan-100 p-8 bg-opacity-30"
        >
          <h2 className="text-2xl font-bold text-gray-50">
            Our Services Include
          </h2>
          <ul className="list-disc font-bold list-inside mt-4 text-gray-900 space-y-2">
            <li>
              Business Name Search: Ensuring name uniqueness and eligibility.
            </li>
            <li>
              Filing and Submission: Handling all documentation with the CAC.
            </li>
            <li>
              Fast Turnaround: Get your certificate within 5–7 working days.
            </li>
            <li>Expert Guidance: Assistance throughout the process.</li>
          </ul>
        </motion.div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <Link
            onClick={handleScrollToTop}
            to="/business_name_registration_form"
            className="bg-blue-600 text-white py-2 px-8 rounded shadow hover:bg-gray-800"
          >
            Register Now!
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BusinessNameRegistration;
