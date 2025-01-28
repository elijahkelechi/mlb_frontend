import React from "react";
import heroImageDesktop from "../../assets/adsPage/laptopHero.jpeg";
import heroImageMobile from "../../assets/adsPage/mobileHero.jpeg";
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
        {/* Header Section */}
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
              src={heroImageDesktop}
              alt="Digital Marketing Desktop"
            />
            <img
              className="flex md:hidden h-full w-full object-cover"
              src={heroImageMobile}
              alt="Digital Marketing Mobile"
            />
          </div>

          {/* Overlay Content */}
          <div className="absolute inset-0 bg-gradient-to-r bg-black bg-opacity-50">
            <motion.div
              className="h-screen flex items-center justify-center font-bold text-white px-6 md:px-12"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <div className="text-center">
                <h1 className="text-2xl md:text-4xl font-bold font-heading text-gray-50 mb-4 space-y-4">
                  Digital Marketing{" "}
                  <span className="block my-4">Social Media Advertising</span>{" "}
                  <span className="block">(Facebook & Instagram Ads)</span>
                </h1>
                <p className="text-lg md:text-xl text-cyan-300">
                  Unlock the Power of Social Media to Drive Business Growth
                </p>
                <Link
                  onClick={handleScrollToTop}
                  to="/plan_types"
                  className=" btn bg-blue-600 hover:bg-blue-500 mt-8 text-white "
                >
                  See Packages
                </Link>
              </div>
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
            Struggling to get the results you want from your Facebook ads?
             Tired of wasting money 💸 on ads that don't convert? Tired of Low
            Sales and Poor Leads? Lets help you run a highly converting Facebook
            Ads. Our expert Facebook ad  deliver exceptional results! Whether
            you're a startup or an established business, we create customized
            campaigns that reach your ideal audience and drive real result.
          </p>
          <p className="text-gray-700">
            In today’s digital age, social media is more than just a platform
            for connection—it’s a powerful tool for business growth. At{" "}
            <span className="font-bold">MULTI-LEVEL BOOST</span>, we specialize
            in crafting high-converting Facebook advertising campaigns that
            generate leads and boost sales effortlessly.
          </p>
          <Link
            onClick={handleScrollToTop}
            to="/plan_types"
            className="text-center btn bg-cyan-500 text-white mt-4 hover:bg-gray-800"
          >
            Book Ads Campaign
          </Link>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="md:py-16 lg:w-full bg-cyan-600 md:bg-gradient-to-r lg:grid lg:grid-cols-12 from-cyan-700 via-cyan-500 to-cyan-400 text-gray-50 rounded-xl shadow-lg p-10 mb-12"
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
                <ul className="space-y-4 pl-8 border-l-4 border-cyan-300">
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
                <ul className="space-y-4 pl-8 border-l-4 border-cyan-300">
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
                <ul className="space-y-4 pl-8 border-l-4 border-cyan-300">
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
                <ul className="space-y-4 pl-8 border-l-4 border-cyan-300">
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
                <ul className="space-y-4 pl-8 border-l-4 border-cyan-300">
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
                <ul className="space-y-4 pl-8 border-l-4 border-cyan-300">
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
                <ul className="space-y-4 pl-8 border-l-4 border-cyan-300">
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
                className=" btn bg-blue-600 hover:bg-blue-500 mt-8 text-white "
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
                <span className="relative text-lg md:text-5xl text-cyan-600 font-extrabold">
                  <span className="absolute -top-4 -left-8 w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full blur-xl"></span>
                  <span className="z-10 relative">🔍</span>
                </span>
                <span className="ml-4 text-gray-700 text-sm md:text-xl font-medium">
                  Audience Research.
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
                  <span className="z-10 relative">📊 </span>
                </span>
                <span className="ml-4 text-gray-700 text-sm md:text-xl font-medium">
                  Detailed Analytics
                </span>
              </div>
              <div className="bg-gray-50 md:w-full text-gray-800 font-bold p-2 md:p-8 text-xl rounded-l-md flex items-center justify-center">
                <span className="relative text-5xl text-cyan-600 font-extrabold">
                  <span className="absolute -top-4 -left-8 w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full blur-xl"></span>
                  <span className="z-10 relative">💡 </span>
                </span>
                <span className="ml-4 text-gray-700 text-sm md:text-xl font-medium">
                  Creative Excellence
                </span>
              </div>
              <div className="bg-gray-50 md:w-full text-gray-800 font-bold p-2 md:p-8 text-xl rounded-l-md flex items-center justify-center">
                <span className="relative text-5xl text-cyan-600 font-extrabold">
                  <span className="absolute -top-4 -left-8 w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full blur-xl"></span>
                  <span className="z-10 relative">🧲 </span>
                </span>
                <span className="ml-4 text-gray-700 text-sm md:text-xl font-medium">
                  Magnetic Copy
                </span>
              </div>
              <div className="bg-gray-50 md:w-full text-gray-800 font-bold p-2 md:p-8 text-xl rounded-l-md flex items-center justify-center">
                <span className="relative text-5xl text-cyan-600 font-extrabold">
                  <span className="absolute -top-4 -left-8 w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full blur-xl"></span>
                  <span className="z-10 relative"> 📈 ​</span>
                </span>
                <span className="ml-4 text-gray-700 text-sm md:text-xl font-medium">
                  Proven Results
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Why Facebook Ads Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-cyan-500">
            Why Choose Facebook Ads?
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700">
            <li>
              <span className="font-bold">Massive Audience:</span> Facebook
              boasts over 2.9 billion active users worldwide, offering
              unparalleled reach to diverse demographics.
            </li>
            <li>
              <span className="font-bold">Advanced Targeting:</span> Target your
              ideal customers based on their location, age, interests, behavior,
              and more, ensuring every ad dollar is spent wisely.
            </li>
            <li>
              <span className="font-bold">Cost-Effective:</span> Facebook Ads
              are one of the most affordable ways to reach thousands of
              potential customers, regardless of your budget.
            </li>
            <li>
              <span className="font-bold">Measurable Results:</span> Track
              performance in real-time with detailed analytics, so you know
              exactly how your campaigns are performing.
            </li>
          </ul>
        </motion.div>

        <section className="bg-gray-100 text-white py-16 px-6 md:px-16 rounded-xl shadow-lg space-y-2 md:space-y-4 ">
          {/* Header Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
            className="text-left"
          >
            <h1 className="text-4xl font-bold text-cyan-500 mb-2 md:mb-4">
              Our Facebook Ads Services
            </h1>
            <p className="text-lg text-gray-600">
              At <strong>MULTI-LEVEL BOOST</strong>, we provide comprehensive
              Facebook advertising services tailored to your business needs.
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
            <h2 className="text-3xl font-bold text-cyan-500 pt-8">
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
            <h2 className="text-3xl font-bold text-cyan-500 pt-8">
              Why Choose MULTI-LEVEL BOOST?
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
            <h2 className="text-3xl font-bold text-left text-cyan-500 pt-8">
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
                className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition"
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
