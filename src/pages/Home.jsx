import React, { useState } from "react";
import landingImage1 from "../assets/landingImage1.webp";
import landingImage from "../assets/landingImage.webp";
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
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";

const Home = () => {
  const [expandedCard, setExpandedCard] = useState(0);
  const user = useSelector((state) => state.userState.user);
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
      title: " Corporate Affairs Commission (CAC) Registration Services",
      shortDescription: (
        <div>
          We simplify the process of registering and managing your business with
          CAC
          <h1 className="font-bold pt-2 text-cyan-500">
            Pre-Incorporation Services
          </h1>
          <ul>
            <li> - Business Name Registration</li>
            <li> - Limited Liability Company (LLC) Registration</li>
            <li> - Incorporated Trustee (NGO/Association) Registration</li>
          </ul>
          <Link
            onClick={handleScrollToTop}
            to="/CAC_Pre-incoperation"
            className="btn btn-sm w-full rounded-full mb-4 bg-cyan-500 hover:bg-gray-800 text-gray-50"
          >
            Learn more
          </Link>
          <div>
            <h1 className="font-bold text-cyan-500">
              Post-Incorporation Services
            </h1>
            <ul>
              <li> - Annual Return Filing</li>
              <li> - Change of Company Name, Director, Trustee, or Address</li>
              <li>
                - Edit/Correction of Proprietor, Director, and Trustee Details
              </li>
              <li> - Retrieval of Certified True Copies of CAC Documents</li>
              <li> - Transfer and Transmission of Shares </li>
              <li> - Alteration of Memorandum and Articles of Association</li>
              <li> - Addition or Change of Business Objects</li>
            </ul>
          </div>
        </div>
      ),
      icon: <FaFileSignature className="text-cyan-500 text-5xl" />,
      link: "/CAC_post_incoperation",
    },
    {
      id: 2,
      title: "Taxation Services",
      shortDescription: (
        <div>
          Ensure your business complies with AML regulations by registering with
          SCUML.
          <ul>
            <li>- Tax Identification Number (TIN) Registration</li>
            <li>- Tax Clearance Certificate Processing</li>
          </ul>
        </div>
      ),
      icon: <ShieldCheckIcon className="text-cyan-500 size-14" />,
      link: "/",
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
      icon: <IdentificationIcon className="text-cyan-500 size-14" />,
      link: "/",
    },
    {
      id: 4,
      title: "Digital Marketing Services",
      shortDescription: (
        <div>
          <div>
            <span className="font-bold text-cyan-500">
              - Social Media Ads:{" "}
            </span>
            High-performing Facebook and Instagram ads to drive leads, sales,
            and brand visibility.
            <br />
            <Link
              onClick={handleScrollToTop}
              to="/social_media_ads"
              className="btn btn-sm bg-cyan-500 hover:bg-gray-800 text-gray-50 mt-2 mb-12 w-full rounded-full"
            >
              Learn more
            </Link>
          </div>
          <div>
            <span className="font-bold text-cyan-500">
              - Website Development:{" "}
            </span>
            Beautiful, functional, and user-friendly websites tailored to your
            business needs.
            <br />
            <Link
              onClick={handleScrollToTop}
              to="/website_app_design_development"
              className="btn btn-sm bg-cyan-500 hover:bg-gray-800 text-gray-50 mt-2 mb-12 w-full rounded-full"
            >
              Learn more
            </Link>
          </div>
          <div>
            <span className="font-bold text-cyan-500">
              - Graphic Design & Branding:{" "}
            </span>
            From logos to complete branding packages, we help you make a lasting
            impression.
            <br />
          </div>
        </div>
      ),
      icon: <MdCampaign className="text-cyan-500 text-5xl" />,
      link: "/graphic-design",
    },
  ];

  return (
    <div className="w-full overflow-x-hidden ">
      <div className="relative w-full h-screen overflow-x-hidden">
        {/* Background Image */}
        <div
          className="hidden md:flex absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${landingImage})`,
          }}
        />
        <div
          className="md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${landingImage1})`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50" />

        {/* Main Content */}
        <div className="relative  z-10 h-full flex flex-col justify-center items-center text-center text-gray-50 px-4 md:px-8">
          <h1 className=" mt-24 text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            Welcome to <span className="text-cyan-500">Multi-Level Boost</span>
          </h1>
          <p className="text-sm md:text-lg leading-relaxed mb-8">
            Your trusted partner in Digital Marketing, Company Registration, and
            Corporate Solutions. Whether you're starting a new venture or
            enhancing your online presence, we’ve got you covered!
          </p>
          <p className="text-sm md:text-lg leading-relaxed bg-cyan-600 bg-opacity-90 px-4 py-6 rounded-md shadow-md font-semibold mb-8">
            At Multi-Level Boost, as a leading{" "}
            <span className="font-extrabold text-lg text-blue-300">
              digital marketing
            </span>{" "}
            and{" "}
            <span className="font-extrabold text-lg text-blue-300">
              company registration agency
            </span>
            , we are committed to helping businesses of all sizes establish,
            grow, and thrive in today’s competitive landscape. Whether you're
            starting a new venture, managing an existing company, or looking to
            enhance your online presence, we offer comprehensive solutions
            tailored to meet your unique needs.
          </p>
          <div className="flex space-x-4">
            {user ? (
              <div className="mt-4">Season's greeting 👋 {user.name}</div>
            ) : (
              <Link
                to="/login"
                className="btn bg-cyan-500 text-white px-6 py-2 rounded-full hover:bg-cyan-600 transition-all"
              >
                Login
              </Link>
            )}

            <Link
              to="/services"
              className="btn bg-gray-800 text-gray-50 px-6 py-2 rounded-full hover:bg-gray-700 transition-all"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      <div className="relative py-6 mt-1  bg-gradient-to-r from-cyan-400 to-cyan-600">
        <h1 className="text-xl lg:text-4xl md:2xl px-8 pt-2 lg:px-36 md:px-20 text-center font-heading font-bold text-gray-50">
          Our Services
        </h1>
        <p className="text-center leading-relaxed text-sm md:text-lg px-6 md:px-24 lg:px-40 text-gray-50 mt-4 md:mt-6 font-sans">
          Multi-Level Boost has all it takes for you to grow a legit and
          successful business ranging from registering your business, running
          effective ads, creative designs, to building a website or mobile app
          for your business with our team of designers/developers.
        </p>
        <h1 className="text-xl mt-8 lg:text-4xl md:2xl px-8 pt-2 lg:px-36 md:px-20 text-center font-heading font-bold text-gray-50">
          We have all it takes! to Build your business 💪
        </h1>
      </div>
      <div className="relative h-[155rem] md:h-[115rem] lg:h-[118rem]  overflow-hidden">
        <img
          className="absolute hidden  top-0 left-0 h-full w-full object-cover"
          src={serviceSectionImage}
          alt="Landing"
        />

        <div className="relative mt-16 cards-div mx-8 grid gap-8 lg:gap-16 grid-cols-1 lg:grid-cols-1 text-center justify-center">
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
                  className="flex md:flex btn btn-sm px-2 mt-2 bg-cyan-500 text-white rounded-full hover:bg-gray-800 transition duration-300"
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
                      className="btn w-full mt-4 px-6 py-3 bg-cyan-500 text-white rounded-full hover:bg-gray-800 transition duration-300"
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

      <div className="reative leading-relaxed  p-8  md:mr-36 text-gray-50 md:p-8 md:pr-36 rounded-r-md top-[0rem] md:top-[0rem] lg:top-[120rem] z-10 bg-gradient-to-r from-cyan-400 to-cyan-600 overflow-x-hidden">
        <div className="py-4 md:py-16 pb-8">
          <h1 className=" font-heading font-bold text-3xl md:text-4xl text-cyan-50 mt-2 ">
            Not Just Another Advertising Agency{" "}
            <div className="ml-2 col-span-2 flex flex-col  ">
              <MdCampaign className="size-14 md:size-36" />
            </div>
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
            to="/services"
            className=" p-2 bg-cyan-500 bg-opacity-10 btn-xs md:btn-lg border-2 rounded-sm md:rounded-md hover:bg-gray-800"
          >
            SKY ROCKET 🚀 YOUR BUSINESS NOW!
          </Link>
        </div>
      </div>
      <div className="hidden md:grid place-items-center gap-4 md:gap-8  absolute top-[268rem] md:top-[192rem] lg:top-[186rem] z-40 w-full  md:w-[25rem] md:right-0  ">
        <div className="bg-gray-50 text-gray-800 font-bold p-2 md:p-8 text-xl rounded-l-md flex items-center justify-center">
          <span className="relative text-lg md:text-5xl text-cyan-600 font-extrabold">
            <span className="absolute -top-4 -left-8 w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full blur-xl"></span>
            <span className="z-10 relative">89%</span>
          </span>
          <span className="ml-4 text-gray-700 text-sm md:text-xl font-medium">
            Clients & employees retention rates
          </span>
        </div>

        <div className="bg-gray-50 text-gray-800 font-bold p-2 md:p-8 text-xl rounded-l-md flex items-center justify-center">
          <span className="relative text-5xl text-cyan-600 font-extrabold">
            <span className="absolute -top-4 -left-8 w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full blur-xl"></span>
            <span className="z-10 relative">8+</span>
          </span>
          <span className="ml-4 text-gray-700 text-sm md:text-xl font-medium">
            Countries where we manage campaigns
          </span>
        </div>
        <div className="bg-gray-50 text-gray-800 font-bold p-2 md:p-8 text-xl rounded-l-md flex items-center justify-center">
          <span className="relative text-5xl text-cyan-600 font-extrabold">
            <span className="absolute -top-4 -left-8 w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full blur-xl"></span>
            <span className="z-10 relative">2k+</span>
          </span>
          <span className="ml-4 text-gray-700 text-sm md:text-xl font-medium">
            Businesses | SCUML | TIN Registered
          </span>
        </div>
      </div>

      {/* Mobie view */}

      <div className="md:hidden grid place-items-center gap-4 md:gap-8 relative top-[0rem] md:top-[0rem] lg:top-[0rem] z-40 w-full  md:w-[25rem] md:right-0  ">
        <div className="bg-gray-50 text-gray-800 font-bold p-2 md:p-8 text-xl rounded-l-md flex items-center justify-center">
          <span className="relative text-lg md:text-5xl text-cyan-600 font-extrabold">
            <span className="absolute -top-4 -left-8 w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full blur-xl"></span>
            <span className="z-10 relative">89%</span>
          </span>
          <span className="ml-4 text-gray-700 text-sm md:text-xl font-medium">
            Clients & employees retention rates
          </span>
        </div>

        <div className="bg-gray-50 text-gray-800 font-bold p-2 md:p-8 text-xl rounded-l-md flex items-center justify-center">
          <span className="relative text-5xl text-cyan-600 font-extrabold">
            <span className="absolute -top-4 -left-8 w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full blur-xl"></span>
            <span className="z-10 relative">8+</span>
          </span>
          <span className="ml-4 text-gray-700 text-sm md:text-xl font-medium">
            Countries where we manage campaigns
          </span>
        </div>
        <div className="bg-gray-50 text-gray-800 font-bold p-2 md:p-8 text-xl rounded-l-md flex items-center justify-center">
          <span className="relative text-5xl text-cyan-600 font-extrabold">
            <span className="absolute -top-4 -left-8 w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full blur-xl"></span>
            <span className="z-10 relative">2k+</span>
          </span>
          <span className="ml-4 text-gray-700 text-sm md:text-xl font-medium">
            Businesses | SCUML | TIN Registered
          </span>
        </div>
      </div>
      {/* <motion.div className="absolute md:ml-36 text-gray-50 p-8 md:p-8 md:pr-36 rounded-l-md top-[300rem] md:top-[240rem] lg:top-[168rem] z-10 bg-gradient-to-r from-cyan-600 to-cyan-400">
        <div className="py-4 md:py-16 pb-8">
          <h1 className=" font-heading font-bold text-2xl md:text-4xl text-cyan-50 mt-2 ">
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
          <div className="mt-6 bg-cyan-500 bg-opacity-10 border-2 rounded-md relative overflow-hidden p-4 text-center text-black font-medium">
            <span className="flowing-text">
              * Small Business Solutions * Medium Business Solutions *
              Enterprise Solutions * Partner & Affiliate Solutions
            </span>
          </div>
        </div>
      </motion.div> */}
      <div className="relative text-center grid bg-gray-200 w-full mr-8  top-[0rem]  md:top-[0rem] lg:top-[0rem]">
        {/* Image and Overlay Section */}
        <div className="relative w-full text-center flex items-center justify-center">
          {/* Title Styled as a Message */}
          <div className="absolute mt-16 px-4 py-2 bg-white rounded-full shadow-lg border border-gray-300">
            <h1 className="text-sm md:text-4xl text-cyan-600 font-bold font-heading">
              Why Choose Multi-Level Boost?
            </h1>
            <Link
              onClick={handleScrollToTop}
              to="/services"
              className="text-blue-600 border-b-2 hover:border-b-4"
            >
              Our services
            </Link>
          </div>

          {/* Background Image */}
          <img
            className="  md:h-[30rem] md:w-[32rem] object-cover"
            style={{
              "@media (min-width: 900px)": {
                width: "25rem",
              },
            }}
            src={femaleImage}
            alt="Why Brands Chose Us"
          />
        </div>

        {/* Text Content Section */}
        <div className="text-left px-4 rounded-r-md pt-8 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 animate-gradient shadow-2xl">
          {/* Section Title */}
          <h1 className="font-heading font-extrabold text-2xl lg:text-5xl text-white text-center drop-shadow-md tracking-wide">
            We have all it takes!
          </h1>

          {/* Key Points */}
          <div className="grid p-4 md:p-8 lg:grid-cols-12 gap-8 mt-6 text-lg space-y-4 pb-16 text-gray-100">
            <div
              div
              className="hidden p-8 md:flex md:col-span-4 w-full  flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg  shadow-lg"
            >
              <h1 className="text-2xl  md:text-4xl font-extrabold font-heading mb-4 text-center">
                🎉 Celebrate 3 Years of Success with Us! 🎉
              </h1>
              <p className="text-lg font-medium text-gray-200 text-center">
                Get each service now at{" "}
                <span className="text-yellow-300 font-bold">20% Discount</span>{" "}
                as we mark our 3rd of excellence in business!
              </p>
            </div>

            <div className="md:col-span-8 space-y-6">
              <p>
                <span className="text-2xl">✨</span> We drive consistent results
                and have increased
                <span className="font-bold text-white">
                  {" "}
                  93% of our clients' ROAS
                </span>{" "}
                and revenue within the first 2 months of working together.
              </p>

              <p>
                <span className="text-2xl">💡</span> We deeply understand
                creative, and
                <span className="font-bold text-white">
                  {" "}
                  what ad creatives will drive performance
                </span>
                at every stage of the funnel for your brand.
              </p>
              <p>
                <span className="text-2xl">⚡</span> Fast and seamless
                <span className="font-bold text-white">
                  {" "}
                  CAC | SCUML | TIN Registration Services
                </span>
                .
              </p>
              <p>
                <span className="text-2xl">💻</span> Seamless
                <span className="font-bold text-white">
                  {" "}
                  Website Development/Designs for your Business
                </span>
                .
              </p>
              <p>
                <span className="text-2xl">🏆</span> We've been recognized by
                <span className="font-bold text-white">
                  {" "}
                  Meta as one of their Business Partners
                </span>
                , which is given to us due to spending more than
                <span className="font-bold text-white"> NGN50m a year</span> on
                Facebook Ads alone.
              </p>
            </div>
            <div className="md:hidden  p-4 w-full flex    flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg  shadow-lg">
              <h1 className="text-2xl  md:text-4xl font-extrabold font-heading mb-4 text-center">
                🎉 Celebrate 3 Years of Success with Us! 🎉
              </h1>
              <p className="text-lg font-medium text-gray-200 text-center">
                Get each service now at{" "}
                <span className="text-yellow-300 font-bold">20% Discount</span>{" "}
                as we mark our 3rd of excellence in business!
              </p>
              <Link className="btn w-full mt-4 bg-cyan-500 text-gray-50">
                Services
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-[0rem] md:mt-[0rem] lg:mt-[0rem]">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
