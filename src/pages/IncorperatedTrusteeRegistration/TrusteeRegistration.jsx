import React from "react";
import { motion } from "framer-motion";
import bgImage from "../../assets/formImage.webp";
import { Link } from "react-router";

const TrusteeRegistrationPage = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Hero Section with animation */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-black bg-opacity-60 py-10"
      >
        <div className="container mx-auto text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            Incorporated Trustee Registration (NGO | Association)
          </h1>
          <p className="text-lg md:text-xl font-medium">
            Establish Your Organization with Confidence
          </p>
        </div>
      </motion.header>

      {/* Introduction Section with animation */}
      <motion.main
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-16 bg-white bg-opacity-90"
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
          <p className="text-gray-700 mb-6 leading-relaxed md:text-lg">
            Whether you’re starting a Non-Governmental Organization (NGO), a
            community-based association, or a religious or charitable
            foundation, registering as an Incorporated Trustee with the
            Corporate Affairs Commission (CAC) is a critical step. At
            MULTI-LEVEL BOOST, we simplify the registration process, ensuring
            your organization is legally recognized and ready to make an impact.
          </p>
        </div>
      </motion.main>

      {/* Services Section with animation */}
      <motion.section
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="py-16 bg-gray-100"
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Why Register as an Incorporated Trustee?
          </h2>
          <ul className="list-disc space-y-3 ml-6 text-gray-700 leading-relaxed md:text-lg">
            <li>
              Legal Recognition - Giving your organization the legitimacy to
              operate and grow.
            </li>
            <li>
              Tax Benefits - Qualify for tax exemptions and other financial
              incentives.
            </li>
            <li>
              Access to Funding - Easier access to grants, donations, and
              sponsorships.
            </li>
            <li>
              Accountability and Credibility - Establish trust with donors and
              stakeholders.
            </li>
          </ul>
        </div>
      </motion.section>

      {/* Services Offered Section with animation */}
      <motion.section
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Our Services Include:
          </h2>
          <ul className="list-disc space-y-3 ml-6 text-gray-700 leading-relaxed md:text-lg">
            <li>
              Name Availability Search: Ensuring your proposed organization name
              is unique and meets CAC requirements.
            </li>
            <li>
              Drafting of Governing Documents: Preparation of a robust
              constitution or MEMART tailored to your organization’s goals.
            </li>
            <li>
              CAC Filing: Submission of all required documents, including
              trustee details and objectives, to the CAC.
            </li>
            <li>
              Certificate of Incorporation: Issuance of the official certificate
              and documents once registration is complete.
            </li>
          </ul>
        </div>
      </motion.section>

      {/* Call to Action Section with animation */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="py-16 shadow-2xl"
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center text-white">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">
            Start Your Journey Today!
          </h2>
          <p className="mb-4 md:text-lg leading-relaxed">
            Turn your vision into a legally recognized organization with
            MULTI-LEVEL BOOST. Let us guide you every step of the way.
          </p>
          <Link
            to="/trustee_form"
            onClick={handleScrollToTop}
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-200"
          >
            Start Registration
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default TrusteeRegistrationPage;
