import React, { useState } from "react";
import { FaCheckCircle, FaUserShield } from "react-icons/fa";
import {
  AiOutlineArrowRight,
  AiOutlineDown,
  AiOutlineUp,
} from "react-icons/ai";
import { MdHowToReg } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router";

const SCUMLRegistrationPage = () => {
  const [showAllItems, setShowAllItems] = useState(false);

  const toggleShowAll = () => setShowAllItems(!showAllItems);
  const businessList = [
    "Audit Firms",
    "Cars & Vehicles",
    "Chartered Accountants",
    "Clearing and Settlement",
    "Construction Company",
    "Consultants and consulting company",
    "Dealers in jewelries and Luxury",
    "Dealers in Real Estate",
    "Estate Surveyors and Valuers",
    "Hotel & Hospitality",
    "Legal Practitioners",
    "Mechanized Farming",
    "Mortgage Brokers",
    "Non Profit Organisations",
    "Pool, Betting, Lottery, and Casino",
    "Precious Stones & Metals",
    "Supermarket",
    "Tax Consultant",
    "Trust and Company Services",
  ];
  const handleScrollToTop = () => {
    scrollTo(0, 0);
  };
  const visibleItems = showAllItems ? businessList : businessList.slice(0, 5);
  return (
    <div className="bg-gray-50 py-10 px-5">
      <div className=" bg-gray-50 overflow-hidden">
        <div className="grid md:grid-cols-12 text-gray-800 text-center py-6 w-full items-center">
          {/* Header Text */}
          <div className="text-2xl md:col-span-6 font-bold justify-center items-center text-center sm:text-3xl md:text-4xl">
            <span className="text-cyan-500">SCUML Registration Service</span>
            <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-700">
              Comply with Anti-Money Laundering Laws and Secure Your Business
            </p>
            <Link
              onClick={handleScrollToTop}
              to="/SCUML_Form"
              className="btn bg-green-600 my-4 hover:bg-gray-800 text-white"
            >
              Start Registration
            </Link>
          </div>

          {/* Icon */}
          <div className="md:col-span-6 flex justify-center items-center mt-4 md:mt-0">
            <FaUserShield className="text-cyan-500 text-6xl md:text-8xl" />
          </div>
        </div>

        <section className="bg-gray-50 py-10 px-6 md:px-16 lg:px-20">
          <div className="max-w-7xl mx-auto text-center">
            {/* Header */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Secure Your SCUML Certificate
            </h2>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-8">
              Are you operating an NGO, Church, or Business in sectors like
              Mechanized Farming, Consulting, Construction, Real Estate,
              Automobile, Jewelry, Clearing and Settlement, Hotel and
              Hospitality, Supermarkets, or other SCUML-required industries?
            </p>

            {/* Benefits Section */}
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 lg:gap-8">
              <div className="bg-white shadow-md p-6 rounded-lg flex items-center text-left space-x-4 max-w-lg">
                <FaCheckCircle className="text-green-500 text-3xl" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Avoid Bank Restrictions
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Operate seamlessly without disruptions to your financial
                    activities.
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-md p-6 rounded-lg flex items-center text-left space-x-4 max-w-lg">
                <FaCheckCircle className="text-green-500 text-3xl" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Ensure Smooth Account Opening
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Easily open business bank accounts for efficient operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Call-to-Action Button */}
            <div className="mt-10">
              <Link
                onClick={handleScrollToTop}
                to="/SCUML_form"
                className="bg-green-600 text-white py-3 px-8 rounded-lg text-lg font-medium hover:bg-gray-800 transition duration-200"
              >
                Get Started Now
              </Link>
            </div>
          </div>
        </section>

        <main className="p-6 space-y-6">
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              What is SCUML?
            </h2>
            <p className="text-gray-700">
              SCUML is a regulatory body established under the Money Laundering
              (Prohibition) Act to monitor and regulate Designated Non-Financial
              Institutions (DNFIs).
            </p>
          </motion.section>

          {/* Dropdown Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-lg font-bold text-gray-800 flex items-center justify-between cursor-pointer">
              Businesses Required to Register with SCUML
            </h3>
            {
              <div>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                  {visibleItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <FaCheckCircle className="text-green-500 mr-2" /> {item}
                    </li>
                  ))}
                </ul>
                {!showAllItems && (
                  <button
                    onClick={toggleShowAll}
                    className="mt-3 text-cyan-600 font-bold underline"
                  >
                    More
                  </button>
                )}
                {showAllItems && (
                  <button
                    onClick={toggleShowAll}
                    className="mt-3 text-cyan-600 font-bold underline"
                  >
                    Show Less
                  </button>
                )}
              </div>
            }
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Benefits of SCUML Registration
            </h2>
            <ul className="list-decimal list-inside text-gray-600 space-y-2">
              <li>
                <strong>Legal Compliance:</strong> Avoid penalties and ensure
                your business complies with Nigerian anti-money laundering laws.
              </li>
              <li>
                <strong>Unrestricted Banking Services:</strong> Access full
                banking privileges, including account opening and uninterrupted
                transactions.
              </li>
              <li>
                <strong>Enhanced Credibility:</strong> Build trust with clients,
                partners, and financial institutions.
              </li>
              <li>
                <strong>Eligibility for Contracts and Grants:</strong>{" "}
                Registered businesses can bid for government and private sector
                contracts and access international grants.
              </li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Our SCUML Registration Services
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                Eligibility Assessment: Confirming your business qualifies as a
                DNFI.
              </li>
              <li>
                Document Preparation: Assisting with the collation and
                preparation of required documents.
              </li>
              <li>
                Submission to SCUML: Filing your application and liaising with
                SCUML on your behalf, follow up to ensure timely approval.
              </li>
              <li>
                Follow-Up and Updates: Keeping you informed throughout the
                registration process.
              </li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Requirements for SCUML Registration
            </h2>
            <h3 className="font-semibold text-gray-800 mt-2">
              1. Business Name
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>CAC Registration Documents</li>
              <li>Tax Identification Number (TIN)</li>
              <li>Business Profile</li>
              <li>Valid Identification</li>
              <li>Proprietor BVN</li>
              <li>
                Proprietor or business bank account details ( Account Number and
                bank name)
              </li>
            </ul>
            <h3 className="font-semibold text-gray-800 mt-4">
              2. Limited Liability Company
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>CAC Registration Documents</li>
              <li>Tax Identification Number (TIN)</li>
              <li>Company Profile</li>
              <li>Valid Identification</li>
              <li>Director BVN</li>
              <li>
                Director or business bank account details ( Account Number and
                bank name)
              </li>
            </ul>
            <h3 className="font-semibold text-gray-800 mt-4">
              3. Incorporated Trustee
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>CAC Registration Documents</li>
              <li>Tax Identification Number (TIN)</li>
              <li>Organization Profile</li>
              <li>Valid Identification</li>
              <li>Trustee BVN</li>
              <li>
                Trustee or Organization bank account details ( Account Number
                and bank name)
              </li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Why Choose MULTI-LEVEL BOOST?
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                Expert Guidance: Our team has extensive experience in SCUML
                registration and compliance requirements.
              </li>
              <li>Affordable Pricing: Starting at ₦47,000.</li>
              <li>
                Efficient Service: We handle the process quickly to avoid
                delays.
              </li>
              <li>
                Convenient Process: Fully online services for your comfort.
              </li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              How It Works
            </h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              <li>
                Submit Your Details: Share your information and required
                documents.
              </li>
              <li>
                Make Payment: Securely pay the registration fee to initiate the
                process.
              </li>
              <li>
                Processing and Follow-Up: We handle all submissions and
                communicate with SCUML on your behalf.
              </li>
              <li>
                Receive Your SCUML Certificate: Once registration is complete,
                we’ll deliver your SCUML certificate to you.
              </li>
            </ol>
          </motion.section>

          <div className="text-left mt-6">
            <Link
              onClick={handleScrollToTop}
              to="/SCUML_Form"
              className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-200"
            >
              Start Registraion
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SCUMLRegistrationPage;
