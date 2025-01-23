import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import bgImage from "../../assets/formImage.webp";
import heroImageDesktop from "../../assets/SCUMLdesktop.jpeg";
import heroImageMobile from "../../assets/SCUMLmobile.jpeg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const BusinessNameRegistration = () => {
  const user = useSelector((state) => state.userState.user);
  const navigate = useNavigate();
  const handleScrollToTop = (event) => {
    event.preventDefault(); // Prevent Link's default navigation
    if (!user) {
      navigate("/login");
      toast.warning("Pls login to continue");
    } else {
      navigate("/business_name_registration_form");
      window.scrollTo(0, 0);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen bg-no-repeat bg-cover bg-center w-full"
      // style={{
      //   backgroundImage: `url(${bgImage})`,
      // }}
    >
      {/* Main Content */}
      <div className="relative z-10 min-h-screen  bg-transparent">
        {/* Hero Section */}
        <motion.div
          className="h-screen w-full relative flex flex-col md:flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Left Side: Text Content (Mobile View Overlay Only) */}
          <div className="absolute inset-0 md:hidden bg-black bg-opacity-50 flex items-center justify-center z-10">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-center text-white px-6 "
            >
              <h1 className="text-2xl sm:text-3xl font-bold">
                Register Your Business Name
              </h1>
              <p className="mt-4 text-lg">
                Hassle-Free Registration with MULTI-LEVEL BOOST.
              </p>
              <Link
                onClick={handleScrollToTop}
                to="/business_name_registration_form"
                className="bg-blue-600 text-gray-50 py-3 px-8 mt-6 inline-block rounded shadow hover:bg-gray-800 transition-all duration-300"
              >
                Register Now
              </Link>
            </motion.div>
          </div>

          {/* Left Side: Text Content (Desktop View, Positioned on the Left of Image) */}
          <div className="w-full md:w-1/2 h-full flex items-center justify-start px-6 md:px-12 z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-center md:text-left hidden md:block"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                Register Your Business Name
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Hassle-Free Registration with MULTI-LEVEL BOOST.
              </p>
              <Link
                onClick={handleScrollToTop}
                to="/business_name_registration_form"
                className="bg-blue-600 text-gray-50 py-3 px-8 mt-6 inline-block rounded shadow hover:bg-gray-800 transition-all duration-300"
              >
                Register Now
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Image */}
          <div className="w-full md:w-1/2 h-full relative">
            <motion.img
              className="h-full w-full object-cover"
              src={heroImageDesktop}
              alt="Business Registration"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        <section className=" text-gray-800 py-16 px-4 md:px-8 rounded-lg">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <p className="text-lg">
              Starting a business is an exciting journey, but registering your
              business name with the Corporate Affairs Commission (CAC) is a
              crucial first step to establish your venture legally in Nigeria.
              At MULTI-LEVEL BOOST, we make this process seamless, fast, and
              stress-free, so you can focus on growing your business.
            </p>
          </motion.div>

          {/* Benefits Section */}
          <section className="py-10 px-6 md:px-12 text-gray-800">
            <h2 className="text-2xl font-bold text-center mb-6">
              Benefits Of this Services
            </h2>
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
              <li>
                <span className="block text-blue-600 font-bold text-3xl">
                  ✓
                </span>
                Flexible Payment Option
              </li>
              <li>
                <span className="block text-blue-600 font-bold text-3xl">
                  ✓
                </span>
                Registration Timeframe: Max of 7 Days
              </li>
              <li>
                <span className="block text-blue-600 font-bold text-3xl">
                  ✓
                </span>
                Document Delivery in Soft and Hard Copy
              </li>
              <li>
                <span className="block text-blue-600 font-bold text-3xl">
                  ✓
                </span>
                Guaranteed Delivery. No Stories
              </li>
              <li>
                <span className="block text-blue-600 font-bold text-3xl">
                  ✓
                </span>
                Free TIN Registration
              </li>
            </ul>
          </section>

          {/* Call-to-Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              onClick={handleScrollToTop}
              to="/business_name_registration_form"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg font-bold text-lg hover:bg-gray-800 transition-colors"
            >
              Get Started Today
            </Link>
          </motion.div>
        </section>
        <section className=" text-gray-800 py-16 px-6 md:px-16 rounded-lg">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-cyan-600">
              What is a Business Name?
            </h2>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-lg leading-relaxed"
          >
            <p>
              A <span className="font-bold">Business Name</span> means the name
              and style under which a business is carried on. It is registered
              pursuant to provisions of the Companies and Allied Matters Act (
              <span className="font-bold">CAMA</span>) 2020.
            </p>

            <p>
              A business name can be registered as a{" "}
              <span className="font-bold">Sole Proprietorship</span> or as a{" "}
              <span className="font-bold">Partnership</span>. It is a{" "}
              <span className="font-bold">Sole Proprietorship</span> if it is
              carried on by an Individual or a Corporate Body solely. It is a{" "}
              <span className="font-bold">Partnership</span> if it is carried on
              by two or more Individuals or Corporate Bodies or a combination of
              Individuals and Corporate Bodies.
            </p>

            <p>
              A Business Name does not enjoy{" "}
              <span className="font-bold">legal personality</span>. It is not
              separate from the proprietor or partners for the purpose of
              liability.
            </p>
          </motion.div>
        </section>
        {/* "Why Register Your Business Name" Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-8 px-8 md:px-16"
        >
          <h2 className="text-2xl text-left font-bold text-gray-800">
            Why Register Your Business Name?
          </h2>
          <div className="grid md:gap-6 mt-0 md:grid-cols-2">
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
                className="flex items-start space-x-4 bg-gray-100 p-4 md:rounded-lg"
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

        {/* "Our Services" Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-8 bg-gray-100 p-6 md:p-16 bg-opacity-90"
        >
          <h2 className="text-2xl font-bold text-cyan-600">
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

        <section className="bg-gray-100 py-16 px-8 md:px-16 rounded-lg">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-600">
              Requirements for Business Name Registration
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              To get started, provide the following details:
            </p>
          </motion.div>

          {/* Requirements List */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white  p-4 md:p-8  rounded-lg">
              <ol className="list-decimal pl-6 space-y-4 text-gray-700 text-lg">
                <li>
                  <span className="font-bold text-cyan-600">
                    Two proposed business names.
                  </span>
                </li>
                <li>
                  <span className="font-bold text-cyan-600">
                    The nature of your business.
                  </span>
                </li>
                <li>
                  <span className="font-bold text-cyan-600">
                    Business address.
                  </span>
                </li>
                <li>
                  <span className="font-bold text-cyan-600">
                    Full names, phone numbers, and email addresses of
                    proprietors.
                  </span>
                </li>
                <li>
                  <span className="font-bold text-cyan-600">
                    Means of identification:
                  </span>{" "}
                  (e.g., National ID, Voter’s Card, International Passport, or
                  Driver’s License).
                </li>
              </ol>
            </div>
          </motion.div>
        </section>
        <section className="bg- text-white py-16 px-4 md:px-8 rounded-lg">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Why Choose{" "}
              <span className="text-cyan-500">MULTI-LEVEL BOOST?</span>
            </h2>
            <p className=" mt-4 text-lg text-gray-600">
              Here’s why we’re the best choice for your business registration
              needs:
            </p>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Individual Feature */}
            <div className="bg-white text-gray-800 p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-cyan-600 mb-4">
                Experience
              </h3>
              <p>
                We've helped hundreds of entrepreneurs successfully register
                their businesses.
              </p>
            </div>

            <div className="bg-white text-gray-800 p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-cyan-600 mb-4">
                Affordability
              </h3>
              <p>
                Our competitive pricing ensures you get the best value for your
                investment.
              </p>
            </div>

            <div className="bg-white text-gray-800 p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-cyan-600 mb-4">
                Convenience
              </h3>
              <p>We handle everything online—no need to visit our office.</p>
            </div>

            <div className="bg-white text-gray-800 p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-cyan-600 mb-4">
                Dedicated Support
              </h3>
              <p>
                We provide cutting-edge customer support, keeping you informed
                at every stage of your registration.
              </p>
            </div>

            <div className="bg-white text-gray-800 p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-cyan-600 mb-4">
                Fast Delivery
              </h3>
              <p>
                We complete your registration and provide all documents within 5
                to 7 business days.
              </p>
            </div>
          </motion.div>
        </section>

        {/* "How It Works" Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-8 bg-gray-100 p-8 bg-opacity-90"
        >
          <h2 className="text-2xl font-bold text-cyan-500">How It Works</h2>
          <ol className="list-decimal font-bold list-inside mt-4 text-gray-900 space-y-2">
            <li>Submit your details and required documents.</li>
            <li>Make a secure payment. Flexible options available.</li>
            <li>We handle the entire process with the CAC.</li>
            <li>Receive your certificate and other documents.</li>
          </ol>
        </motion.div>

        <section className=" text-gray-800 py-16 px-8 md:px-16 rounded-lg">
          {/* Animated Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Business Deserves a Strong Foundation
            </h2>
            <p className="text-lg md:text-xl font-light mb-8 text-gray-600">
              Let’s build it together! Partner with{" "}
              <span className="text-cyan-600 font-semibold">
                MULTI-LEVEL BOOST
              </span>{" "}
              to register your business name quickly and professionally.
            </p>
            <p className="text-lg font-medium text-gray-600">
              Start your journey to success today!
            </p>
          </motion.div>

          {/* Call-to-Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mt-8"
          >
            <Link
              onClick={handleScrollToTop}
              to="/business_name_registration_form"
              className="bg-blue-600 hover:bg-gray-800 text-white font-semibold text-lg py-3 px-8 rounded-full shadow-md transition-all"
            >
              Get Started Now
            </Link>
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
};

export default BusinessNameRegistration;
