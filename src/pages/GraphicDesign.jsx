import React from "react";
import heroImageMobile from "../assets/SCUMLdesktop.jpeg";
import heroImageDesktop from "../assets/graphicsDesign/heroDesktop.jpeg";
import { Link } from "react-router";
import { motion } from "framer-motion";
const GraphicDesignPage = () => {
  const handleScrollToTop = () => {
    scrollTo(0, 0);
  };
  return (
    <div className="bg-gray-50">
      <div className=" bg-gray-50 rounded-lg ">
        {/* Hero Section */}
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
              src={heroImageDesktop} // Add your desktop image path
              alt="Graphic Design and Branding Desktop"
            />
            <img
              className="flex md:hidden h-full w-full object-cover"
              src={heroImageDesktop} // Add your mobile image path
              alt="Graphic Design and Branding Mobile"
            />
          </div>

          {/* Overlay Content */}
          <div className="absolute inset-0 bg-gradient-to-r bg-black bg-opacity-50">
            <motion.div
              className="h-screen flex items-center justify-start font-bold text-white px-6 md:px-12"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <div>
                <h1 className="text-left text-2xl md:text-4xl font-bold">
                  Graphic Design and Branding Services
                </h1>
                <p className="mt-4 text-left text-lg mb-8">
                  Transform Your Brand with Stunning Designs and Strategic
                  Branding
                </p>

                <Link
                  onClick={handleScrollToTop}
                  to="/graphic_design_services" // Adjust the link as necessary
                  className="bg-blue-600 text-gray-50 py-3 px-8 rounded shadow hover:bg-gray-800 transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <div className="p-6 md:p-12">
          <div className="space-y-4">
            <h1 className="text-2xl font-semibold text-gray-800">
              Transform Your Brand with Stunning Designs and Strategic Branding
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Your brand is more than just a logo; it’s the essence of your
              business, the story you tell, and the impression you leave. At
              MULTI-LEVEL BOOST, we specialize in creating visually striking
              designs and cohesive branding strategies that set you apart from
              the competition. Whether you’re starting fresh or rebranding, our
              team is here to help you build a memorable and impactful brand
            </p>
            <h2 className="text-2xl font-semibold text-gray-800">
              Why Your Business Needs Professional Graphic Design and Branding
            </h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>
                Create a Lasting Impression: Strong branding makes your business
                instantly recognizable and memorable.
              </li>
              <li>
                Build Customer Trust: Consistent and professional visuals convey
                reliability and quality.
              </li>
              <li>
                Stand Out in the Market: Unique designs give your brand a
                competitive edge.
              </li>
              <li>
                Increase Business Value: A well-branded business attracts more
                customers and opportunities for growth.
              </li>
            </ul>
          </div>

          <div className="mt-10 space-y-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Our Graphic Design and Branding Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-xl text-gray-700 mb-2">
                  Graphic Design
                </h3>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>Custom Logo Design</li>
                  <li>Business Cards, Letterheads, and Envelopes</li>
                  <li>Social Media Graphics and Ads</li>
                  <li>Brochures, Flyers, and Posters</li>
                  <li>Product Packaging and Label Design</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-gray-700 mb-2">
                  Branding Services
                </h3>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>Brand Identity Development</li>
                  <li>Brand Guidelines Creation</li>
                  <li>Tagline and Messaging Development</li>
                  <li>Visual Brand Strategy</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-gray-700 mb-2">
                  Digital Graphics
                </h3>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>Website Banners and Ads</li>
                  <li>Email Templates and Newsletters</li>
                  <li>Presentation Decks</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 space-y-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Our Branding Packages
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-xl text-gray-700 mb-4">
                  Basic Branding Package
                </h3>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>Custom Logo Design (3 Concepts)</li>
                  <li>Business Card Design</li>
                  <li>Social Media Profile Graphics</li>
                  <li>Brand Guidelines (Basic)</li>
                </ul>
                <p className="text-lg font-bold mt-4">Price: ₦50,000</p>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-xl text-gray-700 mb-4">
                  Standard Branding Package
                </h3>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>Custom Logo Design (5 Concepts)</li>
                  <li>Business Card and Letterhead Design</li>
                  <li>Social Media Graphics (10 Templates)</li>
                  <li>Brochure or Flyer Design (1)</li>
                  <li>Brand Guidelines Document</li>
                </ul>
                <p className="text-lg font-bold mt-4">Price: ₦100,000</p>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-xl text-gray-700 mb-4">
                  Premium Branding Package
                </h3>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>Custom Logo Design (Unlimited Concepts)</li>
                  <li>Complete Stationery Design</li>
                  <li>Social Media Graphics (20 Templates)</li>
                  <li>Marketing Materials (2 Brochures/Flyers)</li>
                  <li>Brand Guidelines Document (Comprehensive)</li>
                  <li>Packaging Design (Basic)</li>
                </ul>
                <p className="text-lg font-bold mt-4">Price: ₦200,000</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Us
            </h2>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 border rounded-md"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border rounded-md"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full p-3 border rounded-md"
                />
                <input
                  type="text"
                  placeholder="WhatsApp Number"
                  className="w-full p-3 border rounded-md"
                />
              </div>
              <input
                type="text"
                placeholder="Entity Name"
                className="w-full p-3 border rounded-md"
              />
              <input
                type="text"
                placeholder="Tagline"
                className="w-full p-3 border rounded-md"
              />
              <select className="w-full p-3 border rounded-md">
                <option>Brand Colours</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Green</option>
                <option>Yellow</option>
                <option>Black</option>
                <option>White</option>
              </select>
              <select className="w-full p-3 border rounded-md">
                <option>Select Package</option>
                <option>Basic Branding Package</option>
                <option>Standard Branding Package</option>
                <option>Premium Branding Package</option>
              </select>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesignPage;
