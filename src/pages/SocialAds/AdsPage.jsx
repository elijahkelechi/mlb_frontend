import React from "react";
import adsBg from "../../assets/adsBg.webp";
import { motion } from "framer-motion"; // Import framer-motion
import { Link } from "react-router";

const AdsPage = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-cover bg-center text-gray-800"
      style={{
        backgroundImage: `url(${adsBg})`,
      }}
    >
      <div className="bg-gray-900 mx-4 md:mx-8 bg-opacity-70 min-h-screen">
        <div className="container mx-auto py-12 md:px-8 px-2">
          {/* Header Section */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-2xl md:text-4xl font-bold font-heading text-white mb-4">
              Digital Marketing – Social Media Advertising (Facebook & Instagram
              Ads)
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Unlock the Power of Social Media to Drive Business Growth
            </p>
          </motion.div>

          {/* Introduction Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-8 mb-12"
          >
            <h2 className="text-2xl font-heading font-bold mb-4 text-gray-800">
              Struggling to Get Results?
            </h2>
            <p className="text-gray-700 mb-4">
              Stop wasting money 💸 on ads that don’t convert! Let us help you
              run highly converting Facebook Ads. Whether you’re a startup or an
              established business, we create customized campaigns that reach
              your ideal audience and drive real results.
            </p>
            <p className="text-gray-700">
              At <span className="font-bold">MULTI-LEVEL BOOST</span>, we
              specialize in crafting high-converting Facebook advertising
              campaigns that generate leads and boost sales effortlessly.
            </p>
          </motion.div>

          {/* Conversion Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="hidden md:grid place-items-center gap-4 md:gap-8 absolute top-[71rem] md:top-[44rem] lg:top-[39rem] z-40 w-full md:w-[20rem] lg:w-[25rem] md:right-0"
          >
            <div className="bg-gray-50 md:w-full text-gray-800 font-bold p-2 md:p-8 text-xl rounded-l-md flex items-center justify-center">
              <span className="relative text-lg md:text-5xl text-cyan-600 font-extrabold">
                <span className="absolute -top-4 -left-8 w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full blur-xl"></span>
                <span className="z-10 relative">📈</span>
              </span>
              <span className="ml-4 text-gray-700 text-sm md:text-xl font-medium">
                High Converting Ads
              </span>
            </div>
            <div className="bg-gray-50 md:w-full text-gray-800 font-bold p-2 md:p-8 text-xl rounded-l-md flex items-center justify-center">
              <span className="relative text-5xl text-cyan-600 font-extrabold">
                <span className="absolute -top-4 -left-8 w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full blur-xl"></span>
                <span className="z-10 relative">🎯</span>
              </span>
              <span className="ml-4 text-gray-700 text-sm md:text-xl font-medium">
                Targeted Campaigns
              </span>
            </div>
            <div className="bg-gray-50 md:w-full text-gray-800 font-bold p-2 md:p-8 text-xl rounded-l-md flex items-center justify-center">
              <span className="relative text-5xl text-cyan-600 font-extrabold">
                <span className="absolute -top-4 -left-8 w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full blur-xl"></span>
                <span className="z-10 relative">📊</span>
              </span>
              <span className="ml-4 text-gray-700 text-sm md:text-xl font-medium">
                Detailed Analytics
              </span>
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="md:mr-40 md:py-16 text-gray-50 bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-lg shadow-lg p-8 mb-12"
          >
            <h2 className="text-2xl font-heading font-bold mb-6 text-gray-800">
              Our Scope of Services
            </h2>
            <ul className="list-disc list-inside md:pr-24 space-y-6 md:space-y-8">
              <li>
                <span className="font-bold">
                  Consultation and Strategy Development:
                </span>{" "}
                Tailored strategies to achieve your business goals.
              </li>
              <li>
                <span className="font-bold">Ad Creation:</span> Engaging ad copy
                and visuals for A/B testing.
              </li>
              <li>
                <span className="font-bold">Targeting and Setup:</span> Advanced
                targeting to reach your ideal audience.
              </li>
              <li>
                <span className="font-bold">Campaign Management:</span> Budget
                optimization for maximum ROI.
              </li>
              <li>
                <span className="font-bold">Monitoring and Optimization:</span>{" "}
                Real-time performance tracking and adjustments.
              </li>
              <li>
                <span className="font-bold">Reporting and Insights:</span>{" "}
                Detailed reports to analyze campaign success.
              </li>
            </ul>
          </motion.div>

          {/* Why Facebook Ads Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-8 mb-12"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Why Choose Facebook Ads?
            </h2>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <span className="font-bold">Massive Audience:</span> Over 2.9
                billion active users worldwide.
              </li>
              <li>
                <span className="font-bold">Cost-Effective:</span> Affordable
                advertising for any budget.
              </li>
              <li>
                <span className="font-bold">Advanced Targeting:</span> Pinpoint
                accuracy to reach your ideal customers.
              </li>
              <li>
                <span className="font-bold">Measurable Results:</span> Real-time
                analytics to track performance.
              </li>
            </ul>
          </motion.div>

          {/* Call to Action Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Let’s Get Started!
            </h2>
            <p className="text-gray-200 mb-8">
              Boost your business with results-driven Facebook Ads. Partner with
              us today!
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                onClick={handleScrollToTop}
                to="/ads_subscription"
                className="btn btn-md bg-green-500 hover:bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg transition-all"
              >
                Get Started
              </Link>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            id="contact-form"
            className="bg-white rounded-lg shadow-lg p-8 mt-12"
          >
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <form>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-cyan-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-cyan-500"
                  placeholder="john.doe@example.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-cyan-500"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg shadow-lg transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AdsPage;
