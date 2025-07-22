import React, { useState, useEffect } from "react";
// import landingImage2 from "../assets/landingImage2.webp";
import landingImage2 from "../assets/Hero/heroImage.jpeg";
import landingImage from "../assets/Hero/heroImage.jpeg";
import serviceSectionImage from "../assets/ServicesImage.jpeg";
import { Link, Navigate } from "react-router";
import { useNavigate } from "react-router";
import { FaFileSignature } from "react-icons/fa";
import { MdCampaign } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { IdentificationIcon } from "@heroicons/react/20/solid";
import { ShieldCheckIcon } from "@heroicons/react/20/solid";
import { PaintBrushIcon } from "@heroicons/react/20/solid";
import femaleImage from "../assets/femaleImage.webp";
import femaleImage1 from "../assets/femaleImage1.webp";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import CountUp from "react-countup";
import { FaWhatsapp } from "react-icons/fa";
import LaptopCounter from "../components/LaptopCounter";
import MobileCounter from "../components/MobileCounter";

const Home = () => {
  //overay message
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const today = new Date().toDateString();
    const lastShown = localStorage.getItem("modalShownDate");

    if (lastShown !== today) {
      setShowModal(true);
      localStorage.setItem("modalShownDate", today);
    }
  }, []);

  const [key1, setKey1] = useState(0);
  const [key2, setKey2] = useState(0);
  const [key3, setKey3] = useState(0);

  // Reset the keys to trigger re-render
  useEffect(() => {
    const interval1 = setInterval(() => setKey1((prev) => prev + 1), 5000); // 5 seconds
    const interval2 = setInterval(() => setKey2((prev) => prev + 1), 5000);
    const interval3 = setInterval(() => setKey3((prev) => prev + 1), 5000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);
  const [expandedCard, setExpandedCard] = useState(0);
  const user = useSelector((state) => state.userState.user);
  const admin = user?.role === "admin";
  const navigate = useNavigate();
  // Function to toggle card expansion
  // const toggleCard = (cardIndex) => {
  //   setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
  // };
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleGetStarted = () => {
    if (user) {
      navigate("/services");
      handleScrollToTop();
    } else {
      navigate("/services");
      handleScrollToTop();
    }
  };

  const cards = [
    {
      id: 1,
      title: "CAC Registration ",
      shortDescription: (
        <div>
          We simplify the process of registering and managing your business with
          CAC
          <h1 className="font-bold pt-2 text-blue-900">Pre-Incorporation</h1>
          <ul className="list-disc ml-4">
            <li> Business Name Registration</li>
            <li> Limited Liability Company (LLC) Registration</li>
            <li> Incorporated Trustee (NGO/Association) Registration</li>
          </ul>
          <Link
            onClick={handleScrollToTop}
            to="/CAC_Pre-incoperation"
            className="btn btn-sm w-full md:w-96 rounded-full my-4 bg-blue-900 hover:bg-gray-800 text-gray-50"
          >
            Learn more
          </Link>
          <div>
            <h1 className="font-bold text-blue-900">Post-Incorporation</h1>
            <ul className="list-disc ml-4">
              <li> Annual Return Filing</li>
              <li> Change of Company Name, Director, Trustee, or Address</li>
              <li>
                Edit/Correction of Proprietor, Director, and Trustee Details
              </li>
              <li> Retrieval of Certified True Copies of CAC Documents</li>
              <li> Transfer and Transmission of Shares </li>
              <li> Alteration of Memorandum and Articles of Association</li>
              <li> Addition or Change of Business Objects</li>
            </ul>
          </div>
        </div>
      ),
      icon: <FaFileSignature className="text-blue-900 text-5xl" />,
      link: "/CAC_post_incoperation",
    },
    {
      id: 2,
      title: "Taxation ",
      shortDescription: (
        <div>
          Ensure your business is tax-compliant with our efficient services:
          <ul className="list-disc ml-4">
            <li> Tax Identification Number (TIN) Registration</li>
            <li>Tax Clearance Certificate Processing</li>
          </ul>
        </div>
      ),
      icon: <IdentificationIcon className="text-blue-900 size-14" />,
      link: "/TIN_Registration",
    },
    {
      id: 3,
      title: "Special Control Unit Against Money Laundering (SCUML)",
      shortDescription: (
        <div>
          We provide quick and reliable SCUML registration services, helping you
          meet regulatory requirements and secure the necessary certification
          for your business.
        </div>
      ),
      icon: <ShieldCheckIcon className="text-blue-900 size-14" />,
      link: "/SCUML_Registeration",
    },
    {
      id: 4,
      title: "Digital Marketing",
      shortDescription: (
        <div>
          <div>
            <ul className="list-disc font-bold text-blue-900">
              <li> Social Media Ads </li>
            </ul>
            <span>
              {" "}
              High-performing Facebook and Instagram ads to drive leads, sales,
              and brand visibility.
            </span>

            <br />
            {/* <Link
              onClick={handleScrollToTop}
              to="/social_media_ads"
              className="btn btn-sm w-full md:w-96  bg-blue-900 hover:bg-gray-800 text-gray-50 mt-2 mb-12  rounded-full"
            >
              Learn more
            </Link> */}
          </div>
          <div>
            <ul className="font-bold text-blue-900 list-disc ">
              <li> Website Development </li>
            </ul>
            <span>
              {" "}
              Beautiful, functional, and user-friendly websites tailored to your
              business needs.
            </span>

            <br />
            {/* <Link
              onClick={handleScrollToTop}
              to="/website_app_design_development"
              className="btn btn-sm w-full md:w-96  bg-blue-900 hover:bg-gray-800 text-gray-50 mt-2 mb-12 rounded-full"
            >
              Learn more
            </Link> */}
          </div>
          <div>
            <ul className="font-bold text-blue-900 list-disc">
              <li>Graphic Design & Branding </li>
            </ul>
            <span>
              {" "}
              From logos to complete branding packages, we help you make a
              lasting impression.
            </span>

            <br />
          </div>
        </div>
      ),
      icon: <MdCampaign className="text-blue-900 text-5xl" />,
      link: "/services",
    },
  ];

  return (
    <div className="w-full overflow-x-hidden bg-gray-200">
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-md p-6 text-center space-y-4 relative">
            <h2 className="text-xl font-bold text-gray-900">🚀 Big News!</h2>
            <p className="text-gray-700">
              We are excited to officially announce that{" "}
              <strong className="text-cyan-500">Multi-Level Boost</strong> is
              now{" "}
              <strong className="text-blue-900">
                247 Corporate Consulting LTD!
              </strong>
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              onClick={() => setShowModal(false)}
            >
              Got it!
            </button>
          </div>
        </div>
      )}
      {/* Image Section with Motion */}
      <motion.div
        className="h-screen w-full relative flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {/* Background Image */}
        <div className="h-full w-full flex-shrink-0">
          <img
            className="hidden md:flex h-full w-full object-cover"
            src={landingImage}
            alt="Landing"
          />
          <img
            className="flex md:hidden h-full w-full object-cover"
            src={landingImage2}
            alt="Landing"
          />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60">
          <motion.div
            className="h-screen grid grid-cols-1 lg:grid-cols-12 font-bold font-heading text-gray-50"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {/* Main Content */}
            <div className="col-span-8 px-4 sm:px-4 md:px-8 lg:px-8 pt-44 sm:pt-36 md:pt-40 lg:pt-48">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 leading-snug sm:leading-tight">
                Digital Marketing, <br />
                Company Registration, <br />
                and Corporate Solutions.
              </h1>

              <p className="text-base sm:text-lg md:text-xl leading-relaxed font-light mb-8">
                Helping businesses of all sizes establish, grow, and thrive. Let
                us handle the complexities while you focus on success.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <Link
                    onClick={handleGetStarted}
                    className={`btn text-sm sm:text-base font-heading bg-blue-900 hover:bg-gray-800 text-gray-50 px-6 py-3 ${
                      admin ? "hidden md:flex" : "flex"
                    }`}
                  >
                    GET STARTED
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                >
                  {user ? (
                    <div
                      className={`text-sm sm:text-base ${
                        admin ? "hidden" : "flex"
                      }`}
                    >
                      Hello {user.name} 🎉
                    </div>
                  ) : (
                    <div>
                      <Link
                        to="login"
                        className="btn font-heading bg-opacity-20 text-gray-50 border-blue-900 px-6 py-3 text-sm sm:text-base hover:bg-opacity-0 hover:text-blue-700"
                      >
                        Login
                      </Link>
                      <span className="block text-sm mt-2">
                        Don't have an account?{" "}
                        <Link
                          to="/register"
                          className="text-blue-300 hover:border-b-2 border-blue-400"
                        >
                          Register
                        </Link>
                      </span>
                    </div>
                  )}
                  {admin ? (
                    <div className="flex md:hidden ">
                      Welcome! {user.role}
                      <Link to="All_Users_Orders" className="btn btn-sm mx-6">
                        All Users Orders
                      </Link>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </motion.div>
              </div>
            </div>

            <div className="hidden md:flex w-full text-center col-span-4 mt-36 font-heading text-gray-50">
              {user && !admin ? (
                <div className="bg-gray-800 mb-[35rem] p-8">
                  Welcome! {user.name}
                </div>
              ) : (
                <div></div>
              )}
              {admin ? (
                <div className="bg-gray-800 mb-[35rem] p-8">
                  Welcome! {user.role}
                  <Link to="All_Users_Orders" className="btn mx-6">
                    All Users Orders
                  </Link>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="relative text-left pt-8 md:mt-0 bg-gray-200">
        {/* <h3 className="text-sm p-4 rounded-md text-gray-600 leading-relaxed md:text-sm lg:text-lg font-sans font-semibold">
          As a leading{" "}
          <span className="font-extrabold text-lg text-blue-900">
            digital marketing
          </span>{" "}
          and{" "}
          <span className="font-extrabold text-lg text-blue-900">
            company registration agency
          </span>
          , we are committed to helping businesses of all sizes establish, grow,
          and thrive in today’s competitive landscape. Whether you're starting a
          new venture, managing an existing company, or looking to enhance your
          online presence, we offer comprehensive solutions tailored to meet
          your unique needs.
          <Link
            onClick={handleScrollToTop}
            to="/services"
            className="text-xs text-blue-900 border-b-2 border-blue-900 hover:text-sm hover:text-blue-600 hover:border-blue-600 transition-all duration-300 ease-in-out"
          >
            Visit our services 500 for more info
          </Link>
        </h3> */}
        <div className="pt-12 pb-6 md:pb-0">
          {" "}
          <h1 className="text-2xl lg:text-4xl md:3xl px-8 pt-2 lg:px-36 md:px-20 text-center font-heading font-bold text-blue-900">
            Services
          </h1>
          {/* <h1 className="text-xl lg:text-4xl md:2xl px-8 pt-2 lg:px-36 md:px-20 text-center font-heading font-bold text-blue-900">
            We have all it takes to build your business 💪
          </h1> */}
          <p className="text-center leading-relaxed text-sm md:text-lg px-6 md:px-24 lg:px-40 text-gray-800 mt-4 md:mt-6 font-sans">
            247 Corporate Consulting offers everything you need to build a legit
            and successful business -from business registartion & Compliance to
            Digital Marketing (high-converting social media ads), creative
            design, proffessional website or mobile app development and
            corporate solution.
          </p>
        </div>
      </div>
      <div className="relative h-auto overflow-hidden">
        <img
          className="absolute hidden  top-0 left-0 h-full w-full object-cover"
          src={serviceSectionImage}
          alt="Landing"
        />

        <div className="relative mt-0 md:mt-16 cards-div mx-4 md:mx-8 grid gap-8 lg:gap-16 grid-cols-1 lg:grid-cols-1 text-center justify-center">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`z-20 div1 px-4 py-4 lg:py-12 md:py-8 md:px-8 lg:px-2 rounded-md bg-gray-50 grid grid-cols-1 lg:grid-cols-12 gap-2 transition-all duration-500 ease-in-out overflow-hidden
                   "lg:h-auto opacity-90
              `}
            >
              {/* Left Icon */}
              <div className="col-span-2 lg:mt-2 flex flex-col items-center">
                {card.icon}
              </div>

              {/* Right Text Content */}
              <div className="text-left col-span-10 font-sans">
                <h1 className="font-heading mb-2 mt-2 font-bold text-2xl text-gray-800">
                  {card.title}
                </h1>
                <p className="text-gray-700">{card.shortDescription}</p>
                <div className="transition-opacity duration-500 ease-in-out opacity-100 mt-4 z-50">
                  <p className="text-gray-700">{card.fullDescription}</p>
                </div>
                <Link
                  to={card.link}
                  onClick={handleScrollToTop}
                  className=" btn w-full md:w-96  btn-sm px-2 mt-2 bg-blue-900 text-white rounded-full hover:bg-gray-800 transition duration-300"
                >
                  {/* {expandedCard === index ? "Show Less" : "Learn More"} */}
                  Learn more
                </Link>

                {/* Full Description Section */}
                {/* {expandedCard === index && (
                  <div className="transition-opacity duration-500 ease-in-out opacity-100 mt-4 z-50">
                    <p className="text-gray-700">{card.fullDescription}</p>
                    <Link
                      onClick={handleScrollToTop}
                      to={card.link}
                      className="btn w-full mt-4 px-6 py-3 bg-blue-900 text-white rounded-full hover:bg-gray-800 transition duration-300"
                    >
                      Get Started
                    </Link>
                  </div>
                )} */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="reative grid mt-8 md:grid-cols-12  leading-relaxed  px-8   text-gray-50 md:p-8 md:pr-36 rounded-r-md  z-10 bg-gradient-to-r from-blue-600 to-blue-900 overflow-x-hidden">
        <div className="col-span-9 pt-4 md:py-16 pb-8">
          <div className="ml-2 col-span-2 flex flex-col  ">
            <MdCampaign className="size-14 md:size-36" />
          </div>
          <h1 className=" font-heading font-bold text-3xl md:text-4xl text-blue-50 my-2 ">
            Not Just Another Consulting Agency{" "}
          </h1>
          <p className="font-sans md:pr-32 mb-8">
            Your business is unique and has distinct goals. That’s why we carry
            a vast arsenal of digital marketing solutions to help you achieve
            those goals. Is it functional, SEO and mobile optimized website you
            need? You’ve come to the right place. We are named the
            <span className="font-bold font-heading text-lg">
              #1 web development firm in Nigeria.
            </span>{" "}
            Searching tirelessly for an agency capable of generating sales and
            qualified leads?{" "}
            <span className="font-bold font-heading text-lg">
              Social Media Ad Campaign
            </span>{" "}
            and Pay Per Click Advertising may be just what you need! Perhaps you
            want to register your business, NGO or Association with Corporate
            Affairs Commission (CAC), We are here to help you in the most
            seamless way and at a very affordable fee.
          </p>
          <Link
            onClick={handleScrollToTop}
            to="/social_media_ads"
            className=" p-2 bg-blue-900 bg-opacity-10 btn-xs md:btn-lg border-2 rounded-sm md:rounded-md hover:bg-gray-800"
          >
            SKY ROCKET 🚀 YOUR BUSINESS NOW!
          </Link>
        </div>
        {/* Laptop view */}
        <LaptopCounter />
      </div>
      {/* mobile view */}
      <MobileCounter />
      {/* <motion.div className="absolute md:ml-36 text-gray-50 p-8 md:p-8 md:pr-36 rounded-l-md top-[300rem] md:top-[240rem] lg:top-[168rem] z-10 bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="py-4 md:py-16 pb-8">
          <h1 className=" font-heading font-bold text-2xl md:text-4xl text-blue-50 mt-2 ">
            Marketing Solutions That Scale{" "}
          </h1>
          <p className="font-sans md:pr-32 mt-4">
            We have solutions that integrate with your business needs. We cover
            all possible ways to grow your business so you focus on more
            pressing issues. Our strategy for which services revolves around
            your goals, business type, and ad spend budget. To get the right
            customers for your business and increase your ROI for your budget
          </p>
          <br></br>
          <p>
            We take your social marketing to the next level and develop web
            design solutions your team isn't able to tackle in-house. With our
            quality SEO Services, we optimize your website to rank higher in
            search engines. We also work closely with partners and affiliates,
            offering solutions that you can take to your customers to grow their
            marketing while expanding your organization’s capabilities.
          </p>
          <div className="mt-6 bg-blue-900 bg-opacity-10 border-2 rounded-md relative overflow-hidden p-4 text-center text-black font-medium">
            <span className="flowing-text">
              * Small Business Solutions * Medium Business Solutions *
              Enterprise Solutions * Partner & Affiliate Solutions
            </span>
          </div>
        </div>
      </motion.div> */}
      {/* Main Section */}
      <div className="relative text-center grid  w-full mr-8 mt-8">
        {/* Image and Overlay Section */}
        <div className="relative w-full text-center flex flex-col items-center justify-center px-4 md:px-8">
          {/* Image for Mobile View */}
          <img
            className="block md:hidden h-64 w-full object-cover"
            src={femaleImage}
            alt="Why Brands Choose Us"
          />

          {/* Overlay Text for Mobile View */}
          <div className="absolute inset-0 flex md:hidden items-center justify-center">
            <div className="text-center px-4 mt-80">
              <h1 className="font-heading font-extrabold text-xl text-gray-800 drop-shadow-md tracking-wide mt-2">
                We have all it takes!
              </h1>
            </div>
          </div>

          {/* Text for Larger Screens */}
          <div className="hidden md:flex flex-col items-center">
            <div className="relative bg-white rounded-full shadow-lg border border-gray-300 inline-block px-6 py-3">
              <h1 className="text-xl md:text-2xl lg:text-4xl text-blue-900 font-bold font-heading">
                Why Choose 247 Corporate Consulting?
              </h1>
            </div>
            <h1 className="font-heading font-extrabold text-2xl md:text-4xl lg:text-5xl text-gray-800 tracking-wide mt-4 lg:mt-6">
              We have all it takes!
            </h1>
          </div>
        </div>

        {/* Text Content Section */}
        <div className="text-left px-2 md:px-8 pt-16 md:pt-4">
          <div className="grid md:grid-cols-2 gap-6 p-6 ">
            <p className="flex items-start space-x-4 rounded-lg shadow-md p-4 md:p-8">
              <span className="text-3xl">🏆</span>
              <span>
                <strong>Expertise You Can Trust:</strong>
                Our experienced team ensures every process is handled with
                precision and professionalism.
              </span>
            </p>

            <p className="flex items-start space-x-4 rounded-lg shadow-md p-4 md:p-8">
              <span className="text-3xl">🤝</span>
              <span>
                <strong>Customer-Centric Approach:</strong>
                Your satisfaction is our top priority. We offer personalized
                services tailored to your needs.
              </span>
            </p>

            <p className="flex items-start space-x-4 rounded-lg shadow-md p-4 md:p-8">
              <span className="text-3xl">🎯</span>
              <span>
                <strong>One-Stop Solution:</strong>
                From business registration to branding and marketing, we've got
                everything covered.
              </span>
            </p>

            <p className="flex items-start space-x-4 rounded-lg shadow-md p-4 md:p-8">
              <span className="text-3xl">🚀</span>
              <span>
                <strong>Efficiency & Transparency:</strong>
                Enjoy fast delivery, competitive pricing, and clear
                communication throughout your journey.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="relative mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
