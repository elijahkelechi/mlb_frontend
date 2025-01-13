import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router";
import bgImage from "../../assets/formImage.webp";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import heroImageDesktop from "../../assets/SCUMLdesktop.jpeg";
import heroImageMobile from "../../assets/SCUMLmobile.jpeg";
const LimitedLiabilityRegistration = () => {
  const user = useSelector((state) => state.userState.user);
  const navigate = useNavigate();
  const handleScrollToTop = (event) => {
    event.preventDefault(); // Prevent Link's default navigation
    if (!user) {
      navigate("/login");
      toast.warning("Pls login to continue");
    } else {
      navigate("/LLC_registration_form");
      window.scrollTo(0, 0);
    }
  };
  return (
    <div
      className="relative font-sans w-full place-content-center justify-center bg-gray-50 min-h-screen bg-cover bg-center bg-no-repeat"
      // style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Background Image with fixed scroll */}
      <div
        className="absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
        // style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Hero Section */}
      <header className="h-screen relative flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0 h-full w-full">
          <img
            className="hidden md:flex h-full w-full object-cover"
            src={heroImageDesktop}
            alt="Limited Liability Company Registration"
          />
          <img
            className="flex md:hidden h-full w-full object-cover"
            src={heroImageMobile}
            alt="LLC Registration Mobile"
          />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <motion.div
            className="container  px-6 md:px-12 text-left"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <h1 className="text-2xl md:text-4xl font-heading md:leading-tight font-bold text-white">
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
          </motion.div>
        </div>
      </header>

      <section className=" text-gray-800 py-16 px-4 md:px-8 rounded-lg">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <p className="text-lg">
            A Limited Liability Company (LLC) is one of the most popular
            business structures in Nigeria, offering both legal protection and
            operational flexibility. At MULTI-LEVEL BOOST, we specialize in
            helping entrepreneurs and businesses establish their LLCs
            efficiently and stress-free..
          </p>
        </motion.div>

        {/* Benefits Section */}
        <section className="py-10 px-6 md:px-12 text-gray-800">
          <h2 className="text-2xl font-bold text-center mb-6">
            Benefits of This Services
          </h2>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <li>
              <span className="block text-blue-600 font-bold text-3xl">✓</span>
              Flexible Payment Option
            </li>
            <li>
              <span className="block text-blue-600 font-bold text-3xl">✓</span>
              Registration Timeframe: Max of 7 Days
            </li>
            <li>
              <span className="block text-blue-600 font-bold text-3xl">✓</span>
              Document Delivery in Soft and Hard Copy
            </li>
            <li>
              <span className="block text-blue-600 font-bold text-3xl">✓</span>
              Guaranteed Delivery. No Stories
            </li>
            <li>
              <span className="block text-blue-600 font-bold text-3xl">✓</span>
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
      <section className=" text-gray-800 py-16 px-4 md:px-16 rounded-lg">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-cyan-600">
            What is a Limited Liability Company?
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
            A <span className="font-bold"> Company </span> is a business
            arrangement which enjoys legal personality. It is a corporate body
            and separate from its members (owners). The liabilities of members
            (owners) of a Company is limited by shares. An LLC is ideal for
            businesses seeking flexibility in management, protection from
            personal liability, and the ability to attract investors through the
            issuance of shares. This structure is commonly used by small to
            medium-sized enterprises (SMEs) aiming for growth while maintaining
            limited exposure to financial risks.. 
          </p>
        </motion.div>
      </section>
      {/* Why Register an LLC Section */}
      <section className=" py-16 px-4 md:px-8 rounded-lg ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
            Why Register a Limited Liability Company?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-10">
            Discover the key benefits of establishing a Limited Liability
            Company (LLC) for your business.
          </p>

          {/* Benefits List */}
          <ul className="space-y-8">
            <li className="flex items-start space-x-4">
              <span className="text-blue-600 font-bold text-2xl">1.</span>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Separate Legal Entity
                </h3>
                <p className="text-gray-600">
                  An LLC is legally distinct from its owners, protecting your
                  personal assets from business liabilities.
                </p>
              </div>
            </li>

            <li className="flex items-start space-x-4">
              <span className="text-blue-600 font-bold text-2xl">2.</span>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Professional Credibility
                </h3>
                <p className="text-gray-600">
                  A registered LLC enhances your business’s reputation, making
                  it more attractive to investors, clients, and partners.
                </p>
              </div>
            </li>

            <li className="flex items-start space-x-4">
              <span className="text-blue-600 font-bold text-2xl">3.</span>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Access to Opportunities
                </h3>
                <p className="text-gray-600">
                  Registered LLCs can bid for contracts, secure investments, and
                  qualify for government and private sector grants.
                </p>
              </div>
            </li>

            <li className="flex items-start space-x-4">
              <span className="text-blue-600 font-bold text-2xl">4.</span>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Tax Advantages
                </h3>
                <p className="text-gray-600">
                  Enjoy various tax benefits and incentives available to
                  registered companies in Nigeria.
                </p>
              </div>
            </li>

            <li className="flex items-start space-x-4">
              <span className="text-blue-600 font-bold text-2xl">5.</span>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Build Trust
                </h3>
                <p className="text-gray-600">
                  Having a registered company enhances your credibility, giving
                  customers confidence in your professionalism.
                </p>
              </div>
            </li>

            <li className="flex items-start space-x-4">
              <span className="text-blue-600 font-bold text-2xl">6.</span>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Access to Financial Services
                </h3>
                <p className="text-gray-600">
                  With a registered company, you can open corporate bank
                  accounts in your company name and apply for loans or grants.
                </p>
              </div>
            </li>

            <li className="flex items-start space-x-4">
              <span className="text-blue-600 font-bold text-2xl">7.</span>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Expand Your Reach
                </h3>
                <p className="text-gray-600">
                  Company registration allows you to tender for contracts,
                  partner with larger organizations, and scale your business.
                </p>
              </div>
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className=" py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Our Company Registration Services
          </h2>
          <p className="text-center text-gray-600 text-lg mb-10">
            We provide a comprehensive suite of services to ensure a smooth and
            efficient registration process.
          </p>
          {/* Service List */}
          <ul className="space-y-8 text-gray-700">
            <li className="flex items-start">
              <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg mr-4">
                ✓
              </div>
              <div>
                <h3 className="font-semibold text-xl">Company Name Search</h3>
                <p>
                  We verify the availability of your desired business name with
                  the Corporate Affairs Commission (CAC).
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg mr-4">
                ✓
              </div>
              <div>
                <h3 className="font-semibold text-xl">
                  Preparation of Incorporation Documents
                </h3>
                <p>
                  We draft all necessary documentation, including the Memorandum
                  and Articles of Association (MEMART), ensuring compliance with
                  legal standards.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg mr-4">
                ✓
              </div>
              <div>
                <h3 className="font-semibold text-xl">Submission to CAC</h3>
                <p>
                  We handle the filing of your application and monitor its
                  progress with the CAC to ensure timely updates.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg mr-4">
                ✓
              </div>
              <div>
                <h3 className="font-semibold text-xl">
                  Issuance of Certificate
                </h3>
                <p>
                  Upon completion, we deliver your Certificate of Incorporation
                  and other relevant documents, giving you a strong foundation
                  to build your business.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className=" py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Requirements for Limited Liability Company Registration
          </h2>
          <p className="text-center text-gray-600 text-lg mb-10">
            To register your Limited Liability Company, please provide the
            following details:
          </p>
          {/* Requirements List */}
          <ul className="space-y-6 text-gray-700">
            <li className="flex items-start">
              <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg mr-4">
                1
              </div>
              <div>
                <h3 className="font-semibold text-xl">
                  Two Proposed Company Names
                </h3>
                <p>
                  Provide two names for a name availability search with the
                  Corporate Affairs Commission (CAC).
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg mr-4">
                2
              </div>
              <div>
                <h3 className="font-semibold text-xl">Nature of Business</h3>
                <p>
                  Include a brief description of the activities your company
                  will be engaged in.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg mr-4">
                3
              </div>
              <div>
                <h3 className="font-semibold text-xl">
                  Registered Office Address
                </h3>
                <p>
                  Provide the physical address where your business will be
                  located.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg mr-4">
                4
              </div>
              <div>
                <h3 className="font-semibold text-xl">
                  Director/Shareholder Information
                </h3>
                <p>
                  Submit the full names, phone numbers, email addresses, and
                  residential addresses of all directors and shareholders.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg mr-4">
                5
              </div>
              <div>
                <h3 className="font-semibold text-xl">
                  Means of Identification
                </h3>
                <p>
                  Provide a valid form of identification, such as a National ID,
                  Voter’s Card, International Passport, or Driver’s License for
                  all directors and shareholders.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg mr-4">
                6
              </div>
              <div>
                <h3 className="font-semibold text-xl">Share Capital Details</h3>
                <p>
                  Specify the shareholding structure of your company, detailing
                  the allocation of shares among shareholders.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-12 bg-gray-50" id="why-choose-us">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Why Choose MULTI-LEVEL BOOST?
          </h2>
          <ul className="space-y-8">
            <li className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <h3 className="text-xl font-semibold text-gray-700 md:w-1/3">
                Expertise
              </h3>
              <p className="text-gray-600 md:w-2/3">
                Our experienced team understands the CAC process inside out,
                ensuring smooth and accurate submissions.
              </p>
            </li>
            <li className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <h3 className="text-xl font-semibold text-gray-700 md:w-1/3">
                Affordability
              </h3>
              <p className="text-gray-600 md:w-2/3">
                Our competitive pricing without compromising on quality ensures
                you get the best value for your investment.
              </p>
            </li>
            <li className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <h3 className="text-xl font-semibold text-gray-700 md:w-1/3">
                Convenience
              </h3>
              <p className="text-gray-600 md:w-2/3">
                We handle everything online—no need to visit our office.
              </p>
            </li>
            <li className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <h3 className="text-xl font-semibold text-gray-700 md:w-1/3">
                Dedicated Support
              </h3>
              <p className="text-gray-600 md:w-2/3">
                We provide cutting-edge customer support. You are always
                informed of any stage and progress of your registration.
              </p>
            </li>
            <li className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <h3 className="text-xl font-semibold text-gray-700 md:w-1/3">
                Speed
              </h3>
              <p className="text-gray-600 md:w-2/3">
                We deliver results within 5–7 working days, depending on the
                complexity of your application.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-16 bg-white" id="registration-process">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Registration Our Process
          </h2>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0 text-2xl font-semibold text-gray-700">
                1.
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Submit Your Details
                </h3>
                <p className="text-gray-600">
                  Provide us with the necessary information to start your LLC
                  registration. Fill out the form on the{" "}
                  <Link
                    to="/registration"
                    className="text-blue-600 hover:underline"
                  >
                    Next Page
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0 text-2xl font-semibold text-gray-700">
                2.
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Pay the Registration Fee
                </h3>
                <p className="text-gray-600">
                  Securely make your payment to kick off the process.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0 text-2xl font-semibold text-gray-700">
                3.
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Relax While We Handle the Rest
                </h3>
                <p className="text-gray-600">
                  From name search to document preparation and filing, we’ve got
                  it covered.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0 text-2xl font-semibold text-gray-700">
                4.
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Receive Your Incorporation Documents
                </h3>
                <p className="text-gray-600">
                  Once completed, we’ll deliver your Certificate of
                  Incorporation, Status Report, Memorandum and Articles of
                  Association, and Tax Identification Number (TIN).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action Section */}
      <div className=" py-12 z-10 text-center  p-6 rounded-lg shadow-md w-full mb-4">
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
          className="inline-flex items-center justify-center bg-blue-600 text-white py-2 px-6 rounded hover:bg-gray-800 transition duration-200"
        >
          Start Registration Now
        </Link>
      </div>
    </div>
  );
};

export default LimitedLiabilityRegistration;
