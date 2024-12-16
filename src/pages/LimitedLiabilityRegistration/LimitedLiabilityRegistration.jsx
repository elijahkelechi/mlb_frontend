import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import bgImage from "../../assets/formImage.webp";

const handleScrollToTop = () => {
  window.scrollTo(0, 0);
};

const LimitedLiabilityRegistration = () => {
  return (
    <div
      className="relative font-sans w-full place-content-center justify-center px-6 md:px-8 pt-10 bg-gradient-to-r from-cyan-600 to-cyan-400 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Background Image with fixed scroll */}
      <div
        className="absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Hero Section */}
      <header className="py-8 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white shadow-md relative z-10">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-heading md:leading-tight font-bold">
            Secure Your Business’s Future with Hassle-Free Limited Liability
            Company Registration
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-100">
            A Limited Liability Company (LLC) offers legal protection,
            operational flexibility, and business credibility.
          </p>
          <div className="mt-6">
            <Link
              onClick={handleScrollToTop}
              to="/LLC_registration_form"
              className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-gray-800 transition duration-200"
            >
              Start Your Registration
            </Link>
          </div>
        </div>
      </header>

      {/* Why Register an LLC Section */}
      <div className="container py-12 space-y-6 z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.1 }}
          className="bg-white p-6 md:p-8 rounded-lg shadow-md text-gray-700"
        >
          <h2 className="text-2xl font-bold mb-4 font-heading">
            Why Register a Limited Liability Company?
          </h2>
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              Separate Legal Entity: Protect your personal assets from business
              liabilities.
            </li>
            <li>
              Professional Credibility: Enhance business reputation and attract
              partners or investors.
            </li>
            <li>
              Access Opportunities: Eligible to bid for government contracts and
              grants.
            </li>
            <li>
              Tax Advantages: Benefit from tax incentives available to
              registered businesses.
            </li>
            <li>
              Financial Services: Open corporate bank accounts and access loans
              easily.
            </li>
          </ol>
        </motion.div>
      </div>

      {/* Services Section */}
      <div className="container py-12 space-y-6 z-10">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.1 }}
          className="bg-white p-6 md:p-8 rounded-lg shadow-md text-gray-700"
        >
          <h2 className="text-2xl font-bold mb-4 font-heading">
            Our Registration Services
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Company Name Search: Verifying the name's availability with the
              CAC.
            </li>
            <li>Preparation of Incorporation Documents.</li>
            <li>
              Submission to the CAC: Monitoring the registration process until
              completion.
            </li>
            <li>
              Issuance of Certificate of Incorporation upon successful
              registration.
            </li>
            <li>Tax Identification Number (TIN) registration assistance.</li>
          </ul>
        </motion.div>
      </div>

      {/* Call to Action Section */}
      <div className="container py-12 z-10 text-center bg-blue-50 p-6 rounded-lg shadow-md">
        <h2 className="text-lg md:text-2xl font-bold mb-4 leading-tight font-heading">
          Ready to Take the Next Step?
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Registration has never been easier. Start your LLC journey today with
          Multi-Level Boost’s expert support.
        </p>
        <Link
          onClick={handleScrollToTop}
          to="/LLC_registration_form"
          className="inline-flex items-center justify-center bg-cyan-500 text-white py-2 px-6 rounded hover:bg-green-700 transition duration-200"
        >
          Start Registration Now
        </Link>
      </div>
    </div>
  );
};

export default LimitedLiabilityRegistration;
