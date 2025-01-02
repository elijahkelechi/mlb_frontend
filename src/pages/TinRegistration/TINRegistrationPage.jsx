import React from "react";
import {
  FaCheckCircle,
  FaUser,
  FaBuilding,
  FaHandsHelping,
  FaPaperclip,
  FaClock,
  FaFileAlt,
  FaThumbsUp,
} from "react-icons/fa";
import { FaBolt, FaMoneyBillAlt, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router";

const TINRegistrationPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <motion.h1
            className="text-2xl md:text-4xl font-extrabold text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Tax Identification Number (TIN) Registration Service
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Get Your TIN, Stay Tax-Compliant, and Unlock Business Opportunities
          </motion.p>
          {/* <motion.img
            src="/placeholder-header-image.jpg"
            alt="TIN Registration"
            className="mt-8 mx-auto max-w-full rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          /> */}
        </header>

        {/* What is TIN */}
        <section className="mb-16">
          <motion.h2
            className="text-2xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            What is a Tax Identification Number (TIN)?
          </motion.h2>
          <p className="text-gray-700 leading-relaxed">
            A TIN is a unique number issued to taxpayers for tracking and
            administering tax obligations. It is required for various financial
            and business transactions, such as:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
            {[
              "Opening a corporate bank account",
              "Filing tax returns",
              "Accessing government contracts and grants",
              "Registering vehicles and properties",
              "Import/export clearance",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FaCheckCircle className="text-cyan-600" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </section>

        {/* Who Needs a TIN */}
        <section className="mb-16">
          <motion.h2
            className="text-2xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Who Needs a TIN?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaUser,
                title: "Individuals",
                desc: "Employed professionals, self-employed individuals, or freelancers.",
                link: "",
              },
              {
                icon: FaBuilding,
                title: "Business Owners",
                desc: "Sole proprietors, partnerships, and limited liability companies.",
                link: "",
              },
              {
                icon: FaHandsHelping,
                title: "Non-Profits",
                desc: "NGOs, religious bodies, and community-based associations.",
                link: "",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <item.icon className="text-cyan-600 text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-700">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
                <Link className="btn mt-2 bg-cyan-600 hover:bg-gray-800 text-white">
                  Register Now
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Registration Services */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Our TIN Registration Services
          </h2>
          <h3 className="pb-4 font-bold text-gray-700">
            We provide comprehensive TIN Registration Services to make the
            process quick and Hassle-free
          </h3>
          <ul className="space-y-4">
            {[
              {
                icon: FaFileAlt,
                title: "Eligibility Check",
                desc: "Confirming your requirement for a TIN.",
              },
              {
                icon: FaPaperclip,
                title: "Document Preparation",
                desc: "Assisting with all necessary documentation.",
              },
              {
                icon: FaClock,
                title: "TIN Application Filing",
                desc: "Submitting your application to the relevant tax authority.",
              },
              {
                icon: FaThumbsUp,
                title: "Follow-Up and Updates",
                desc: "Keeping you informed about the progress of your application.",
              },
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <item.icon className="text-cyan-600 text-2xl" />
                <div>
                  <h4 className="text-lg font-bold text-gray-700">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </section>

        {/* How It Works */}
        <section className="text-center mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            How It Works
          </h2>
          <motion.ol
            className="list-decimal list-inside space-y-4 text-gray-700 text-left max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {[
              "Provide Your Details: Share your information and required documents with us.",
              "Make Payment: Securely pay the registration fee to begin the process.",
              "Application Submission: We file your application with the relevant tax authority.",
              "Receive Your TIN: Once approved, we’ll deliver your TIN to you promptly.",
            ].map((step, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {step}
              </motion.li>
            ))}
          </motion.ol>
        </section>

        {/* Call to Action */}
        <div className="text-center">
          <motion.button
            className="px-8 py-4 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Now
          </motion.button>
        </div>
        <section className="mb-16 mt-16">
          <motion.h2
            className="text-2xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Requirements for TIN Registration
          </motion.h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The documents required for TIN registration depend on whether you
            are registering as an individual, business, or organization:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaUser,
                title: "For Individuals",
                requirements: [
                  "Valid Identification: National ID, International Passport, or Driver’s License",
                  "Utility Bill: Recent proof of address",
                ],
                link: "",
              },
              {
                icon: FaBuilding,
                title: "For Businesses",
                requirements: [
                  "Certificate of Incorporation (from CAC)",
                  "Status Report",
                  "MEMART (Memorandum And Articles of Association) for Ltd registrations",
                  "Valid Identification of Proprietor/Director",
                ],
                link: "",
              },
              {
                icon: FaHandsHelping,
                title: "For Non-Profits",
                requirements: [
                  "Certificate of Incorporation (from CAC)",
                  "Status Report",
                  "Constitution",
                  "Valid Identification of any of the Trustees",
                ],
                link: "",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <item.icon className="text-cyan-600 text-4xl mb-4" />
                <h3 className="text-lg font-bold text-gray-700">
                  {item.title}
                </h3>
                <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                  {item.requirements.map((req, reqIndex) => (
                    <li key={reqIndex}>{req}</li>
                  ))}
                </ul>
                <Link className="mt-4 btn text-white bg-cyan-600 hover:bg-gray-800">
                  Register Now
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-gray-100 py-10 px-4 md:px-8 mb-8">
          <div className="container mx-auto">
            <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
              TIN Registration Fees
            </h2>
            <div className="bg-white shadow-md rounded-lg p-6">
              <ul className="space-y-4">
                <li className="flex justify-between items-center text-lg text-gray-700">
                  <span>Joint Tax Board (JTB) TIN</span>
                  <span className="font-semibold">₦10,000</span>
                </li>
                <li>
                  <h3 className="text-gray-800 text-xl font-semibold mb-2">
                    Federal Inland Revenue Service (FIRS) TIN
                  </h3>
                  <ul className="ml-6 space-y-2">
                    <li className="flex justify-between items-center text-lg text-gray-700">
                      <span>Business Name</span>
                      <span className="font-semibold">₦12,000</span>
                    </li>
                    <li className="flex justify-between items-center text-lg text-gray-700">
                      <span>Limited Liability Company</span>
                      <span className="font-semibold">₦15,000</span>
                    </li>
                    <li className="flex justify-between items-center text-lg text-gray-700">
                      <span>Incorporated Trustee</span>
                      <span className="font-semibold">₦15,000</span>
                    </li>
                  </ul>
                </li>
              </ul>
              <div>
                <h1 className="font-bold text-gray-800 my-8">
                  Fast Delivery:{" "}
                  <span className="font-normal">2-5 working days ⚡️ ⚡️</span>
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose MULTI-LEVEL BOOST */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Why Choose MULTI-LEVEL BOOST?
          </h2>
          <ul className="space-y-4">
            {[
              {
                icon: FaFileAlt,
                title: "Expert Assistance",
                desc: "We have extensive experience in tax-related services, ensuring your TIN application is accurate and compliant.",
              },
              {
                icon: FaBolt,
                title: "Fast Processing",
                desc: "Our streamlined process guarantees quick turnaround times.",
              },
              {
                icon: FaMoneyBillAlt,
                title: "Affordable Pricing",
                desc: "Enjoy professional services at competitive rates.",
              },
              {
                icon: FaGlobe,
                title: "Convenient Online Service",
                desc: "No need to visit our office—we handle everything online!",
              },
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <item.icon className="text-cyan-600 text-2xl" />
                <div>
                  <h4 className="text-lg font-bold text-gray-700">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TINRegistrationPage;
