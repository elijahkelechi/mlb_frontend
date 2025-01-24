import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import heroImageDesktop from "../assets/graphicsDesign/heroDesktop.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const GraphicDesignPage = () => {
  const [email, setEmail] = useState(""); // State to store email
  const [modalVisible, setModalVisible] = useState(false); // State to toggle modal visibility
  const [selectedPackage, setSelectedPackage] = useState(null); // State to track selected package
  const [isEmailValid, setIsEmailValid] = useState(false); // State to track email validity
  const [paymentInitiated, setPaymentInitiated] = useState(false); // State to trigger payment button render

  // Handle modal visibility
  const showModal = (packageDetails) => {
    setSelectedPackage(packageDetails); // Set the selected package
    setModalVisible(true); // Show the modal
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)); // Validate email format
  };

  const handlePaymentSuccess = (reference) => {
    alert("Payment Successful. Transaction Reference: " + reference);
    // Handle success logic, e.g., save transaction, redirect to a success page
  };

  const handlePaymentClose = () => {
    alert("Transaction was not completed.");
  };

  const createPaystackConfig = (amount) => ({
    reference: new Date().getTime(), // Unique transaction reference
    email: email, // Customer's email
    amount: amount * 100, // Amount in kobo
    currency: "NGN", // Currency
    publicKey: "your-paystack-public-key", // Your Paystack public key
  });

  const handleScrollToTop = () => {
    scrollTo(0, 0);
  };

  return (
    <div className="bg-gray-50">
      <div className="bg-gray-50 rounded-lg">
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
              src={heroImageDesktop}
              alt="Graphic Design and Branding Desktop"
            />
            <img
              className="flex md:hidden h-full w-full object-cover"
              src={heroImageDesktop}
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
                  to="/graphic_design_services"
                  className="bg-blue-600 text-gray-50 py-3 px-8 rounded shadow hover:bg-gray-800 transition-all duration-300"
                >
                  See Packages
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
              team is here to help you build a memorable and impactful brand.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 pt-8">
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
            <h2 className="text-2xl font-semibold text-gray-800 pt-6">
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
                  Basic Price - ₦50,000
                </h3>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>Custom Logo Design (3 Concepts)</li>
                  <li>Business Card Design</li>
                  <li>Social Media Profile Graphics</li>
                  <li>Brand Guidelines (Basic)</li>
                </ul>

                <button
                  className="btn btn-sm md:btn-md w-full my-4 md:my-6 bg-blue-600 text-white"
                  onClick={() =>
                    showModal({ amount: 50000, name: "Basic Package" })
                  }
                >
                  Checkout
                </button>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-xl text-gray-700 mb-4">
                  Standard Price - ₦100,000
                </h3>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>Custom Logo Design (5 Concepts)</li>
                  <li>Business Card and Letterhead Design</li>
                  <li>Social Media Graphics (10 Templates)</li>
                  <li>Brochure or Flyer Design (1)</li>
                  <li>Brand Guidelines Document</li>
                </ul>

                <button
                  className="btn btn-sm md:btn-md w-full my-4 md:my-6 bg-blue-600 text-white"
                  onClick={() =>
                    showModal({ amount: 100000, name: "Standard Package" })
                  }
                >
                  Checkout
                </button>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-xl text-gray-700 mb-4">
                  Premium Price - ₦200,000
                </h3>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>Custom Logo Design (Unlimited Concepts)</li>
                  <li>Complete Stationery Design</li>
                  <li>Social Media Graphics (20 Templates)</li>
                  <li>Marketing Materials (2 Brochures/Flyers)</li>
                  <li>Brand Guidelines Document (Comprehensive)</li>
                  <li>Packaging Design (Basic)</li>
                </ul>
                <button
                  className="btn btn-sm md:btn-md w-full my-4 md:my-6 bg-blue-600 text-white"
                  onClick={() =>
                    showModal({ amount: 200000, name: "Premium Package" })
                  }
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalVisible && !paymentInitiated && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Enter Your Email
            </h2>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded mb-4"
              placeholder="Your email"
              value={email}
              onChange={handleEmailChange}
            />
            <div className="space-x-4">
              <button
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
                onClick={() => setModalVisible(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded"
                disabled={!isEmailValid}
                onClick={() => {
                  if (isEmailValid) {
                    setPaymentInitiated(true);
                    setModalVisible(false);
                  }
                }}
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Paystack Payment Button */}
      {paymentInitiated && (
        <PaystackButton
          {...createPaystackConfig(selectedPackage.amount)}
          text={`Pay ₦${selectedPackage.amount}`}
          onSuccess={handlePaymentSuccess}
          onClose={handlePaymentClose}
        />
      )}
    </div>
  );
};

export default GraphicDesignPage;
