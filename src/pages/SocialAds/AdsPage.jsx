import React from "react";
import heroImageDesktop from "../../assets/adsPage/laptopHero.jpeg";
import heroImageMobile from "../../assets/adsPage/mobileHero.jpeg";
import adsImage from "../../assets/adsPage/adsImage.jpeg";
import { motion } from "framer-motion"; // Import framer-motion
import { Link } from "react-router";

const AdsPage = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const buttonVariant = {
    hover: { scale: 1.1, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // className="min-h-screen bg-cover bg-center text-gray-800"
      // style={{
      //   backgroundImage: `url(${adsBg})`,
      // }}
    >
      <div className=" w-full">
        <motion.div
          className="min-h-screen w-full relative flex flex-col md:flex-row pt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Mobile View Overlay */}
          {/* Gray Overlay for Mobile */}
          <div className="absolute inset-0 bg-gray-800/40 md:hidden z-0" />
          <div className="absolute inset-0 md:hidden flex items-center justify-center z-10">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-center text-white px-6"
            >
              <h1 className="text-2xl sm:text-3xl font-bold text-white">
                <span className="block mt-2">SOCIAL MEDIA ADS SERVICES</span>
              </h1>
              <p className="text-lg text-white mt-2">
                Reach the Right Audience. Drive Sales. Grow Your Business.
              </p>
              <Link
                onClick={handleScrollToTop}
                to="/plan_types"
                className="bg-blue-900 text-white py-3 px-8 mt-6 inline-block rounded shadow hover:bg-blue-600 transition-all duration-300"
              >
                See Packages
              </Link>
            </motion.div>
          </div>

          {/* Left Side: Image */}
          <div className="w-full md:w-1/2 h-full flex items-center justify-center bg-black">
            {/* Mobile Image */}
            <motion.img
              className="md:hidden h-full w-full object-contain"
              src={heroImageMobile}
              alt="Digital Marketing Mobile"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />

            {/* Desktop Image */}
            <motion.img
              className="hidden md:block h-full w-full object-contain"
              src={heroImageDesktop}
              alt="Digital Marketing Desktop"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full md:w-1/2 h-full flex items-center justify-start px-6 md:px-12 z-10">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-center md:text-left hidden md:block"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                <span className="block mt-2">SOCIAL MEDIA ADS SERVICES</span>
              </h1>
              <p className="text-lg text-blue-500 mt-2">
                Reach the Right Audience. Drive Sales. Grow Your Business.
              </p>
              <Link
                onClick={handleScrollToTop}
                to="/plan_types"
                className="bg-blue-900 text-white py-3 px-8 mt-6 inline-block rounded shadow hover:bg-blue-600 transition-all duration-300"
              >
                See Packages
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-100 rounded-lg  p-8 mb-12 text-center"
        >
          <h2 className="text-2xl font-heading font-bold mb-4 text-gray-800">
            Struggling to Get Results?
          </h2>
          <p className="text-gray-700 mb-4">
            Struggling to get the results you want from your Facebook ads? Tired
            of wasting money 💸 on ads that don't convert? Tired of Low Sales
            and Poor Leads? Lets help you run a highly converting Facebook Ads.
          </p>
          <p className="text-gray-700">
            In today’s digital world, social media is more than just a platform
            for connection—it’s a powerful tool for business growth. Your
            customers are online — and we know exactly how to find them. At{" "}
            <span className="font-bold">247 Corporate Consulting Ltd</span>, we
            help businesses like yours run high-converting Social Media Ads that
            attract leads, boost sales, and increase visibility.
          </p>
          <Link
            onClick={handleScrollToTop}
            to="/plan_types"
            className="text-center btn bg-blue-900 text-white mt-4 hover:bg-gray-800"
          >
            Book Ads Campaign
          </Link>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="md:py-16 lg:w-full bg-blue-600 md:bg-gradient-to-r lg:grid lg:grid-cols-12 from-blue-900 to-blue-600 text-gray-50 rounded-xl shadow-lg p-10 mb-12"
        >
          <div className="col-span-8 flex-col w-full pr-8 ">
            {" "}
            <h2 className="text-3xl font-heading font-bold mb-8 text-center text-white">
              Our Scope of Services
            </h2>
            <ul className="space-y-8">
              <li>
                <h3 className="font-bold text-xl mb-2">
                  Consultation and Strategy Development
                </h3>
                <ul className="space-y-4 pl-8 border-l-4 border-blue-300">
                  <li>
                    <strong className="text-blue-200">
                      Initial Consultation:
                    </strong>{" "}
                    We start with a thorough analysis of your business goals,
                    target audience, and current marketing efforts.
                  </li>
                  <li>
                    <strong className="text-blue-200">Custom Strategy:</strong>{" "}
                    Based on our analysis, we develop a tailored advertising
                    strategy designed to meet your specific objectives, whether
                    it's increasing brand awareness, driving engagement,
                    generating leads, or driving sales.
                  </li>
                </ul>
              </li>

              <li>
                <h3 className="font-bold text-xl mb-2">Ad Creation</h3>
                <ul className="space-y-4 pl-8 border-l-4 border-blue-300">
                  <li>
                    <strong className="text-blue-200">
                      Creative Development:
                    </strong>{" "}
                    Our team creates engaging ad copy and visually appealing
                    graphics or videos that resonate with your target audience.
                  </li>
                  <li>
                    <strong className="text-blue-200">Ad Variations:</strong> We
                    design multiple ad variations for A/B testing to determine
                    what works best for your audience.
                  </li>
                </ul>
              </li>

              <li>
                <h3 className="font-bold text-xl mb-2">Targeting and Setup</h3>
                <ul className="space-y-4 pl-8 border-l-4 border-blue-300">
                  <li>
                    <strong className="text-blue-200">
                      Advanced Targeting:
                    </strong>{" "}
                    We use Facebook’s advanced targeting options to reach your
                    ideal customers, including demographic, geographic,
                    interest-based, and behavioral targeting.
                  </li>
                  <li>
                    <strong className="text-blue-200">Custom Audiences:</strong>{" "}
                    We create and manage custom audiences based on your existing
                    customer data and website traffic.
                  </li>
                </ul>
              </li>

              <li>
                <h3 className="font-bold text-xl mb-2">Campaign Management</h3>
                <ul className="space-y-4 pl-8 border-l-4 border-blue-300">
                  <li>
                    <strong className="text-blue-200">Ad Placement:</strong> We
                    handle the setup and placement of your ads across Facebook’s
                    various platforms, including Facebook, Instagram, Audience
                    Network, and Messenger.
                  </li>
                  <li>
                    <strong className="text-blue-200">
                      Budget Management:
                    </strong>{" "}
                    We manage your ad spend to ensure maximum ROI, adjusting
                    bids and budgets as necessary to optimize performance.
                  </li>
                </ul>
              </li>

              <li>
                <h3 className="font-bold text-xl mb-2">
                  Monitoring and Optimization
                </h3>
                <ul className="space-y-4 pl-8 border-l-4 border-blue-300">
                  <li>
                    <strong className="text-blue-200">
                      Performance Tracking:
                    </strong>{" "}
                    We continuously monitor your campaigns, using advanced
                    analytics to track key performance indicators (KPIs) like
                    click-through rates (CTR), conversion rates, and return on
                    ad spend (ROAS).
                  </li>
                  <li>
                    <strong className="text-blue-200">
                      Ongoing Optimization:
                    </strong>{" "}
                    Based on performance data, we make regular adjustments to
                    improve ad effectiveness, including tweaking ad creatives,
                    targeting, and bidding strategies.
                  </li>
                </ul>
              </li>

              <li>
                <h3 className="font-bold text-xl mb-2">
                  Reporting and Insights
                </h3>
                <ul className="space-y-4 pl-8 border-l-4 border-blue-300">
                  <li>
                    <strong className="text-blue-200">Regular Reports:</strong>{" "}
                    We provide detailed reports on campaign performance,
                    highlighting key metrics and insights.
                  </li>
                  <li>
                    <strong className="text-blue-200">
                      Actionable Insights:
                    </strong>{" "}
                    We offer recommendations based on data analysis to further
                    enhance your advertising strategy and achieve better
                    results.
                  </li>
                </ul>
              </li>

              <li>
                <h3 className="font-bold text-xl mb-2">
                  Support and Consultation
                </h3>
                <ul className="space-y-4 pl-8 border-l-4 border-blue-300">
                  <li>
                    <strong className="text-blue-200">Ongoing Support:</strong>{" "}
                    Our team is available to answer any questions and provide
                    support throughout the campaign.
                  </li>
                  <li>
                    <strong className="text-blue-200">
                      Consultation Sessions:
                    </strong>{" "}
                    We offer regular consultation sessions to review progress,
                    discuss results, and plan future campaigns.
                  </li>
                </ul>
              </li>
            </ul>
            <div className="text-left">
              <Link
                onClick={handleScrollToTop}
                to="/plan_types"
                className=" btn bg-blue-900 hover:bg-blue-600 mt-8 text-white "
              >
                Book Ads Campaign
              </Link>
            </div>
          </div>
          <div className="col-span-4 flex-col w-full">
            {" "}
            {/* Conversion Section */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="hidden relative lg:grid place-items-center gap-4 md:gap-8 lg:gap-24  z-40 w-full md:w-[20rem] lg:w-[25rem] lg:mt-24 lg:right-0 md:right-0"
            >
              <div className="bg-gray-50 md:w-full text-gray-800 font-bold p-2 md:p-8 text-xl rounded-l-md flex items-center justify-center">
                <span className="relative text-lg md:text-5xl text-blue-600 font-extrabold">
                  <span className="absolute -top-4 -left-8 w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-xl"></span>
                  <span className="z-10 relative">🔍</span>
                </span>
                <span className="ml-4 text-gray-700 text-sm md:text-xl font-medium">
                  Audience Research.
                </span>
              </div>
              <div className="bg-gray-50 md:w-full text-gray-800 font-bold p-2 md:p-8 text-xl rounded-l-md flex items-center justify-center">
                <span className="relative text-5xl text-blue-600 font-extrabold">
                  <span className="absolute -top-4 -left-8 w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-xl"></span>
                  <span className="z-10 relative">🎯</span>
                </span>
                <span className="ml-4 text-gray-700 text-sm md:text-xl font-medium">
                  Targeted Campaigns
                </span>
              </div>
              <div className="bg-gray-50 md:w-full text-gray-800 font-bold p-2 md:p-8 text-xl rounded-l-md flex items-center justify-center">
                <span className="relative text-5xl text-blue-600 font-extrabold">
                  <span className="absolute -top-4 -left-8 w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-xl"></span>
                  <span className="z-10 relative">📊 </span>
                </span>
                <span className="ml-4 text-gray-700 text-sm md:text-xl font-medium">
                  Detailed Analytics
                </span>
              </div>
              <div className="bg-gray-50 md:w-full text-gray-800 font-bold p-2 md:p-8 text-xl rounded-l-md flex items-center justify-center">
                <span className="relative text-5xl text-blue-600 font-extrabold">
                  <span className="absolute -top-4 -left-8 w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-xl"></span>
                  <span className="z-10 relative">💡 </span>
                </span>
                <span className="ml-4 text-gray-700 text-sm md:text-xl font-medium">
                  Creative Excellence
                </span>
              </div>
              <div className="bg-gray-50 md:w-full text-gray-800 font-bold p-2 md:p-8 text-xl rounded-l-md flex items-center justify-center">
                <span className="relative text-5xl text-blue-600 font-extrabold">
                  <span className="absolute -top-4 -left-8 w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-xl"></span>
                  <span className="z-10 relative">🧲 </span>
                </span>
                <span className="ml-4 text-gray-700 text-sm md:text-xl font-medium">
                  Magnetic Copy
                </span>
              </div>
              <div className="bg-gray-50 md:w-full text-gray-800 font-bold p-2 md:p-8 text-xl rounded-l-md flex items-center justify-center">
                <span className="relative text-5xl text-blue-600 font-extrabold">
                  <span className="absolute -top-4 -left-8 w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-xl"></span>
                  <span className="z-10 relative"> 📈 ​</span>
                </span>
                <span className="ml-4 text-gray-700 text-sm md:text-xl font-medium">
                  Proven Results
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Why Social Media Advertising Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl px-6 py-10 md:px-12 mb-12 flex flex-col md:flex-row gap-8 items-center"
        >
          {/* Image (Replace src later) */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={adsImage} // Replace with your actual image path
              alt="Why Social Media Ads"
              className="w-full h-auto max-w-md rounded-lg shadow-md"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-blue-900">
              Why Social Media Advertising?
            </h2>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">
                With billions of active users on social media every day, your
                ideal customers are just a click away.
              </span>{" "}
              Social media advertising gives your business powerful tools to:
            </p>
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li>Target specific interests, demographics, and locations</li>
              <li>Promote your product or service 24/7</li>
              <li>Track performance and ROI in real-time</li>
              <li>Generate high-quality leads and engagement quickly</li>
            </ul>
          </div>
        </motion.section>

        <section className="bg-gray-100 text-white py-16 px-6 md:px-16 rounded-xl shadow-lg space-y-2 md:space-y-4 ">
          {/* Header Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
            className="text-left"
          >
            <h1 className="text-4xl font-bold text-blue-900 mb-2 md:mb-4">
              Our Facebook Ads Services
            </h1>
            <p className="text-lg text-gray-600">
              At <strong>247 CORPORATE CONSULTING</strong>, we provide
              comprehensive Facebook advertising services tailored to your
              business needs.
            </p>
          </motion.div>

          {/* Services List */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                title: "Ad Strategy Development",
                description:
                  "We create customized strategies aligned with your business goals.",
              },
              {
                title: "Audience Targeting",
                description:
                  "Identify and reach the right audience for maximum ROI.",
              },
              {
                title: "Creative Ad Design",
                description:
                  "Engaging visuals and compelling ad copy to grab attention and convert.",
              },
              {
                title: "Campaign Setup",
                description:
                  "From ad placement to budget allocation, we handle all the technical details.",
              },
              {
                title: "Performance Monitoring",
                description:
                  "Track, analyze, and optimize campaigns for the best results.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white text-blue-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Who Can Benefit */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
            className="text-left space-y-6 mb-4 md:mb-8"
          >
            <h2 className="text-3xl font-bold text-blue-900 pt-8">
              Who Can Benefit from Our Services?
            </h2>
            <ul className="space-y-3 text-lg text-gray-600">
              {[
                "Small and medium-sized business owners",
                "E-commerce stores",
                "Real estate agents and developers",
                "Logistics and clearing/forwarding companies",
                "Entrepreneurs launching new products or services",
                "Local businesses looking to attract more customers",
              ].map((benefit, index) => (
                <li key={index} className="list-disc list-inside">
                  {benefit}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
            className="text-left space-y-6"
          >
            <h2 className="text-3xl font-bold text-blue-900 pt-8">
              Why Choose 247 CORPORATE CONSULTING?
            </h2>
            <ul className="space-y-3 text-lg text-gray-600">
              {[
                "Expertise: Our team is skilled in creating and managing high-performing Facebook Ads campaigns.",
                "Proven Results: We have a track record of delivering increased engagement, leads, and sales for our clients.",
                "Affordable Pricing: Get premium services without breaking the bank.",
                "Customized Approach: We tailor each campaign to meet your unique business needs.",
              ].map((reason, index) => (
                <li key={index} className="list-disc list-inside">
                  {reason}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* How It Works */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-left text-blue-900 pt-8">
              How It Works
            </h2>
            <ol className="list-decimal list-inside text-lg space-y-3 text-gray-600">
              <li>
                <strong>Consultation:</strong> Share your goals, and we’ll
                develop a strategy tailored to your business.
              </li>
              <li>
                <strong>Campaign Setup:</strong> We’ll handle everything, from
                ad creation to audience targeting and budget management.
              </li>
              <li>
                <strong>Launch and Monitor:</strong> Your ads go live, and we
                continuously monitor and optimize for the best results.
              </li>
              <li>
                <strong>Performance Reporting:</strong> Receive detailed reports
                to track the success of your campaigns.
              </li>
            </ol>
          </motion.div>

          {/* Call-to-Action */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
            className="text-center space-y-4 p-4 md:p-8 shadow-lg mt-4 md:mt-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 pt-8">
              Let’s Get Started!
            </h2>
            <p className="text-lg text-gray-700">
              Boost your business with results-driven Facebook Ads—partner with
              us today!
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
              <motion.a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition"
                variants={buttonVariant}
                whileHover="hover"
              >
                Chat with an Ad Specialist
              </motion.a>
              <Link
                onClick={handleScrollToTop}
                to="/plan_types"
                className="px-6 py-3 bg-blue-900 text-white rounded-full shadow-md hover:bg-blue-600 transition"
                variants={buttonVariant}
                whileHover="hover"
              >
                Subscribe to Ads Campaign
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
};

export default AdsPage;
