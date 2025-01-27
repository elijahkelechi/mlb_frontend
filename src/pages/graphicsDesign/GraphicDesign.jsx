import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import heroImageDesktop from "../../assets/graphicsDesign/heroDesktop.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const GraphicDesignPage = () => {
  const [email, setEmail] = useState(""); // State to store email
  const [modalVisible, setModalVisible] = useState(false); // State to toggle modal visibility
  const [selectedPackage, setSelectedPackage] = useState(null); // State to track selected package
  const [isEmailValid, setIsEmailValid] = useState(false); // State to track email validity

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
    toast.success(
      "Payment Successful. Transaction Reference: " + reference.reference
    );
    // Handle success logic, e.g., save transaction, redirect to a success page
    setModalVisible(false);
  };

  const handlePaymentClose = () => {
    toast.error("Transaction was not completed.");
  };

  const createPaystackConfig = (amount) => ({
    reference: new Date().getTime().toString(), // Unique transaction reference
    email: email, // Customer's email
    amount: amount * 100, // Amount in kobo
    currency: "NGN", // Currency
    publicKey: "pk_test_fa21cc6e09d2b11d0309361ba8996f55d18742f6", // Your Paystack public key
    onSuccess: handlePaymentSuccess,
    onClose: handlePaymentClose,
  });

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

                <a
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    document.getElementById("packages").scrollIntoView({
                      behavior: "smooth", // Smooth scrolling effect
                      block: "start", // Scroll to the start of the section
                    });
                  }}
                  href="#packages"
                  className="bg-cyan-500 text-gray-50 py-3 px-8 rounded shadow hover:bg-gray-800 transition-all duration-300"
                >
                  See Packages
                </a>
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

          <div id="packages" className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Our Branding Packages
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              {[
                {
                  name: "Basic",
                  amount: 50000,
                  features: [
                    "Custom Logo Design (3 Concepts)",
                    "Business Card Design",
                    "Social Media Profile Graphics",
                    "Brand Guidelines (Basic)",
                  ],
                },
                {
                  name: "Standard",
                  amount: 100000,
                  features: [
                    "Custom Logo Design (5 Concepts)",
                    "Business Card and Letterhead Design",
                    "Social Media Graphics (10 Templates)",
                    "Brochure or Flyer Design (1)",
                    "Brand Guidelines Document",
                  ],
                },
                {
                  name: "Premium",
                  amount: 200000,
                  features: [
                    "Custom Logo Design (Unlimited Concepts)",
                    "Complete Stationery Design",
                    "Social Media Graphics (20 Templates)",
                    "Marketing Materials (2 Brochures/Flyers)",
                    "Brand Guidelines Document",
                  ],
                },
              ].map((pkg, idx) => (
                <div key={idx} className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-xl text-cyan-500 mb-4">
                    {pkg.name} - ₦{pkg.amount.toLocaleString()}
                  </h3>
                  <ul className="list-disc pl-6 text-gray-600">
                    {pkg.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <button
                    className="btn btn-md md:btn-md w-full my-4 md:my-6 bg-cyan-500 text-white hover:bg-gray-800"
                    onClick={() => showModal(pkg)}
                  >
                    Checkout
                  </button>
                </div>
              ))}
            </div>

            {modalVisible && selectedPackage && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                  <h3 className="font-semibold text-lg mb-4">
                    Complete Payment for {selectedPackage.name}
                  </h3>
                  <label className="block mb-2 text-gray-600">
                    Enter your email address:
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your email"
                  />

                  {isEmailValid ? (
                    <PaystackButton
                      {...createPaystackConfig(selectedPackage.amount)}
                      className="bg-green-600 text-white py-2 px-4 rounded shadow hover:bg-green-700 mr-4 md:mr-8"
                    >
                      {/* Pay ₦{selectedPackage.amount.toLocaleString()} */}
                      Proceed to payment
                    </PaystackButton>
                  ) : (
                    <button
                      disabled
                      className="bg-gray-400 text-white py-2 px-4 rounded shadow cursor-not-allowed"
                    >
                      Enter a valid email to proceed
                    </button>
                  )}
                  <button
                    onClick={() => setModalVisible(false)}
                    className="mt-4 bg-red-600 text-white py-2 px-4 rounded shadow hover:bg-red-700"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesignPage;
