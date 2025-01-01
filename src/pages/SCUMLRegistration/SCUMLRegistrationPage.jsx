import React, { useState } from "react";
import { FaCheckCircle, FaUserShield } from "react-icons/fa";
import {
  AiOutlineArrowRight,
  AiOutlineDown,
  AiOutlineUp,
} from "react-icons/ai";
import { MdHowToReg } from "react-icons/md";
import { motion } from "framer-motion";

const SCUMLRegistrationPage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-gray-50 py-10 px-5">
      <div className="max-w-6xl mx-auto bg-gray-50 overflow-hidden">
        <header className="bg-cyan-600 text-white text-center py-6">
          <h1 className="text-2xl font-bold flex justify-center items-center text-center sm:text-3xl md:text-4xl">
            <FaUserShield className="hidden md:flex mr-2 text-lg sm:text-xl md:text-2xl" />{" "}
            SCUML Registration Service
          </h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg">
            Comply with Anti-Money Laundering Laws and Secure Your Business
          </p>
        </header>

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
            <h3
              className="text-lg font-bold text-gray-800 flex items-center justify-between cursor-pointer"
              onClick={toggleDropdown}
            >
              Businesses Required to Register with SCUML
              {isDropdownOpen ? (
                <AiOutlineUp className="ml-2 text-cyan-600 font-bold size-10" />
              ) : (
                <AiOutlineDown className="ml-2 text-blue-600 font-bold size-10" />
              )}
            </h3>
            {isDropdownOpen && (
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                {[
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
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheckCircle className="text-green-500 mr-2" /> {item}
                  </li>
                ))}
              </ul>
            )}
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
              <li>BVN</li>
              <li>Bank Account Details</li>
            </ul>
            <h3 className="font-semibold text-gray-800 mt-4">
              2. Limited Liability Company
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>CAC Registration Documents</li>
              <li>Tax Identification Number (TIN)</li>
              <li>Company Profile</li>
              <li>Valid Identification</li>
              <li>BVN</li>
              <li>Bank Account Details</li>
            </ul>
            <h3 className="font-semibold text-gray-800 mt-4">
              3. Incorporated Trustee
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>CAC Registration Documents</li>
              <li>Tax Identification Number (TIN)</li>
              <li>Organization Profile</li>
              <li>Valid Identification</li>
              <li>BVN</li>
              <li>Bank Account Details</li>
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

          <div className="text-center mt-6">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
              Get Started Today <AiOutlineArrowRight className="ml-2" />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SCUMLRegistrationPage;
