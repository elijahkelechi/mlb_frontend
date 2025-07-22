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
import heroImageDesktop from "../../assets/SCUMLdesktop.jpeg";
import heroImageMobile from "../../assets/SCUMLmobile.jpeg";
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
    <div className="bg-gray-50  ">
      <div className=" bg-gray-50 overflow-hidden">
        <div className="h-screen relative flex flex-col bg-gray-50">
          {/* Background Image */}
          {/* <div className="absolute inset-0 h-full w-full">
            <img
              className="hidden md:flex h-full w-full object-cover"
              src={heroImageDesktop}
              alt="SCUML Registration"
            />
            <img
              className="flex md:hidden h-full w-full object-cover"
              src={heroImageMobile}
              alt="SCUML Registration Mobile"
            />
          </div> */}

          {/* Overlay Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container text-left px-6 md:px-20">
              {/* Header Text */}
              <div className="text-2xl md:col-span-6 font-bold justify-center items-left text-left sm:text-3xl md:text-4xl">
                <span className="text-green-500">
                  SCUML Registration Service
                </span>
                <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-800">
                  Comply with Anti-Money Laundering Laws and Secure Your
                  Business
                </p>
                <Link
                  onClick={handleScrollToTop}
                  to="/SCUML_Form"
                  className="btn bg-blue-900 my-4 hover:bg-gray-800 text-white"
                >
                  Start Registration
                </Link>
              </div>

              {/* Icon */}
              <div className="flex justify-left items-left mt-4 md:mt-0">
                <FaUserShield className="text-green-500 text-6xl md:text-8xl" />
              </div>
            </div>
          </div>
        </div>

        <section className="bg-gray-50 py-10 px-6 md:px-16 lg:px-20">
          <div className="">
            {/* Header */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Secure Your SCUML Certificate
            </h2>
            <p className="text-gray-700  text-lg mb-8">
              Are you operating an NGO, Church, or Business in sectors like
              Mechanized Farming, Consulting, Construction, Real Estate,
              Automobile, Jewelry, Clearing and Settlement, Hotel and
              Hospitality, Supermarkets, or other SCUML-required industries?
            </p>

            {/* Benefits Section */}
            <div className="grid items-center justify-left lg:justify-left gap-6 lg:gap-8">
              <div className="bg-white shadow-md p-6 rounded-lg flex items-center text-left space-x-4 max-w-lg">
                <FaCheckCircle className="text-blue-900 text-3xl" />
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
                <FaCheckCircle className="text-blue-900 text-3xl" />
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

        <main className="px-6 md:px-20">
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-xl font-bold text-blue-900 mb-2">
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
            className="my-8"
          >
            <h3 className="text-lg font-bold text-blue-900 flex items-center justify-between cursor-pointer">
              Businesses Required to Register with SCUML
            </h3>
            {
              <div>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                  {visibleItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <FaCheckCircle className="text-blue-900 mr-2" /> {item}
                    </li>
                  ))}
                </ul>
                {!showAllItems && (
                  <button
                    onClick={toggleShowAll}
                    className="mt-3 text-green-600 font-bold underline"
                  >
                    More
                  </button>
                )}
                {showAllItems && (
                  <button
                    onClick={toggleShowAll}
                    className="mt-3 text-blue-900 font-bold underline"
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
            className="my-8"
          >
            <h2 className="text-xl font-bold text-blue-900 mb-2">
              Benefits of SCUML Registration
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="text-2xl mr-2">⚖️</span>
                <span>
                  <strong>Legal Compliance:</strong> Avoid penalties and ensure
                  your business complies with Nigerian anti-money laundering
                  laws.
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-2xl mr-2">🏦</span>
                <span>
                  <strong>Unrestricted Banking Services:</strong> Access full
                  banking privileges, including account opening and
                  uninterrupted transactions.
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-2xl mr-2">🌟</span>
                <span>
                  <strong>Enhanced Credibility:</strong> Build trust with
                  clients, partners, and financial institutions.
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-2xl mr-2">📑</span>
                <span>
                  <strong>Eligibility for Contracts and Grants:</strong>{" "}
                  Registered businesses can bid for government and private
                  sector contracts and access international grants.
                </span>
              </li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <h2 className="text-xl font-bold text-blue-900 my-2">
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
            className="my-8"
          >
            <h2 className="text-xl font-bold text-blue-900 mb-2">
              Registration Requirements
            </h2>
            <div className="p-6 md:p-8 shadow-lg">
              {" "}
              <h3 className="font-semibold text-gray-800 mt-2">
                1. Business Name
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1 ">
                <li>CAC Registration Documents</li>
                <li>Tax Identification Number (TIN)</li>
                <li>Business Profile</li>
                <li>Valid Identification</li>
                <li>Proprietor BVN</li>
                <li>
                  Proprietor or business bank account details ( Account Number
                  and bank name)
                </li>
              </ul>
            </div>
            <div className="p-6 md:p-8 shadow-lg">
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
            </div>
            <div className="p-6 md:p-8 shadow-lg">
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
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="my-12 px-6 py-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-md"
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 text-center mb-6">
              Why Choose 247 CORPORATE CONSULTING?
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-lg">
                  ✓
                </span>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Expert Guidance
                  </h3>
                  <p className="text-gray-600">
                    Our team has extensive experience in SCUML registration and
                    compliance requirements.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-lg">
                  ✓
                </span>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Affordable Pricing
                  </h3>
                  <p className="text-gray-600">Starting at ₦40,000.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-lg">
                  ✓
                </span>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Efficient Service
                  </h3>
                  <p className="text-gray-600">
                    We handle the process quickly to avoid delays.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-lg">
                  ✓
                </span>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Convenient Process
                  </h3>
                  <p className="text-gray-600">
                    Fully online services for your comfort.
                  </p>
                </div>
              </li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="my-12 px-6 py-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg shadow-md"
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 text-eft mb-6">
              How It Works
            </h2>
            <ol className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-lg">
                  1
                </span>
                <div>
                  <h3 className="font-semibold text-blue-900">
                    Submit Your Details
                  </h3>
                  <p className="text-gray-600">
                    Share your information and required documents.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-lg">
                  2
                </span>
                <div>
                  <h3 className="font-semibold text-blue-900">Make Payment</h3>
                  <p className="text-gray-600">
                    Securely pay the registration fee to initiate the process.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-lg">
                  3
                </span>
                <div>
                  <h3 className="font-semibold text-blue-900">
                    Processing and Follow-Up
                  </h3>
                  <p className="text-gray-600">
                    We handle all submissions and communicate with SCUML on your
                    behalf.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-lg">
                  4
                </span>
                <div>
                  <h3 className="font-semibold text-blue-900">
                    Receive Your SCUML Certificate
                  </h3>
                  <p className="text-gray-600">
                    Once registration is complete, we’ll deliver your SCUML
                    certificate to you.
                  </p>
                </div>
              </li>
            </ol>
          </motion.section>

          <div className="text-left mt-6 pb-8">
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
