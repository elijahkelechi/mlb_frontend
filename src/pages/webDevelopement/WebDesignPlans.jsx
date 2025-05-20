import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import { Link } from "react-router";
import { toast } from "react-toastify";

const WebDesignPlans = () => {
  const [email, setEmail] = useState(""); // State to store email
  const [modalVisible, setModalVisible] = useState(false); // State to toggle modal visibility
  const [selectedPackage, setSelectedPackage] = useState(null); // State to track selected package
  const [isEmailValid, setIsEmailValid] = useState(false); // State to track email validity

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
    publicKey: "pk_live_1e16875ee44434a99e327eb8e7835abffd03ecfb", // Your Paystack public key
    onSuccess: handlePaymentSuccess,
    onClose: handlePaymentClose,
  });

  const webPackages = [
    {
      title: "Landing Page",
      price: "₦110,000",
      description: "Best for: Promoting a single product, service, or event.",
      features: [
        "Single-page design",
        "Mobile-responsive design",
        "Custom UI/UX design",
        "Basic SEO optimization",
        "Social media integration",
        "Contact form setup",
        "1-month free maintenance",
      ],
      maintenance: "₦10,000 per month",
      discount: "20% OFF",
      popular: false,
    },
    {
      title: "Starter",
      price: "₦230,000",
      description:
        "Best for: Small businesses or startups establishing an online presence.",
      features: [
        "1-4 pages (Home, About Us, Services, Contact)",
        "Mobile-responsive design",
        "Custom UI/UX design tailored for branding",
        "Basic SEO optimization",
        "Social media integration",
        "Contact form setup",
        "1-month free maintenance",
      ],
      maintenance: "₦20,000 per month",
      discount: "15% OFF",
      popular: false,
    },
    {
      title: "Growth (Standard)",
      price: "₦400,000",
      description:
        "Best for: Businesses looking to scale and enhance functionality.",
      features: [
        "5-10 pages",
        "Mobile-responsive design",
        "Advanced UI/UX design with interactive elements",
        "Advanced SEO optimization",
        "Blog setup",
        "Social media integration",
        "Custom contact forms",
        "Payment gateway integration (Optional)",
        "Customer account and login functionality",
        "2-months free maintenance",
      ],
      maintenance: "₦30,000 per month",
      discount: "10% OFF",
      popular: true,
    },
    {
      title: "Premium",
      price: "₦800,000",
      description:
        "Best for: Enterprises requiring advanced features and scalability.",
      features: [
        "10-20 pages",
        "Mobile-responsive design",
        "High-end UI/UX design with animations, custom branding, and user flows",
        "Full SEO optimization and analytics integration",
        "Chatbot integration",
        "Multi-language support",
        "Custom animations and interactive elements",
        "Blog and portfolio setup",
        "Customer accounts and login functionality",
        "Chat integration (e.g., WhatsApp or live chat)",
        "Payment gateway integration",
        "3-months free maintenance",
      ],
      maintenance: "₦50,000 per month",
      discount: "5% OFF",
      popular: false,
    },
    {
      title: "Custom",
      price: "Custom Pricing",
      description: "Do you have a unique web design project in mind?",
      subDescription:
        "Let’s bring your vision to life. Our Custom Package is tailored to your specific business needs and goals.",
      features: [
        "Schedule a free consultation with our support team.",
        "Discuss your requirements, features, and budget.",
        "Receive a personalized proposal and cost breakdown",
      ],
      maintenance: "Let’s create a website that sets your business apart.",
      discount: "",
      popular: false,
    },
  ];

  return (
    <div>
      <h1 className="pt-6 md:pt-16 text-gl md:text-3xl w-full font-bold text-center bg-white text-blue-900">
        Website Design and Development Pricing Plans
      </h1>
      <div className="pb-12 pt-4 px-4 sm:px-8 lg:px-16 bg-white">
        {/* Web Design Packages */}
        <div class="rounded-lg mb-4 md:mb-8 text-center">
          <p class="text-lg text-gray-800 font-normal mb-4 text-center">
            we offer flexible and affordable website development packages to
            suit businesses of all sizes and needs. Whether you're a startup, an
            established business, or seeking a tailored solution, we have you
            covered.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {/* Landing Page Centered */}
          <div className="flex justify-center mb-12">
            <div className="border rounded-lg p-6 shadow-lg w-full max-w-md transition-transform transform hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-center">
                {webPackages[0].title}
              </h3>
              <p className="text-2xl font-extrabold text-center text-blue-600 mb-2">
                {webPackages[0].price}
              </p>
              {/* <p className="text-sm text-center text-gray-500 mb-4">
                {webPackages[0].discount}
              </p> */}

              <button
                onClick={() => showModal(webPackages[0])}
                className="mt-6 mb-6 w-full bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Choose Plan
              </button>

              <p className="text-sm text-gray-600 mb-6 text-center">
                {webPackages[0].description}
              </p>
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                {webPackages[0].features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full inline-block mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 text-center">
                Maintenance Fee:{" "}
                <span className="font-semibold">
                  {webPackages[0].maintenance}
                </span>
              </p>
            </div>
          </div>
          {webPackages.slice(1, -1).map((pkg, index) => (
            <div
              key={index}
              className={`border rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 ${
                pkg.popular ? "border-blue-900" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -mt-8 bg-blue-900 text-white py-1 px-4 text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-4 text-center">
                {pkg.title}
              </h3>
              <p className="text-2xl font-extrabold text-center text-blue-600 mb-2">
                {pkg.price}
              </p>
              {/* <p className="text-sm text-center text-gray-500 mb-4">
                {pkg.discount}
              </p> */}
              {pkg.title === "Custom" ? (
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  to="/contactUs"
                  className="btn mt-6 mb-6 w-full bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Contact Us
                </Link>
              ) : (
                <button
                  onClick={() => showModal(pkg)}
                  className="mt-6 mb-6 w-full bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Choose Plan
                </button>
              )}

              <p className="text-sm text-gray-600 mb-6 text-center">
                {pkg.description}
              </p>
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full inline-block mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 text-center">
                Maintenance Fee:{" "}
                <span className="font-semibold">{pkg.maintenance}</span>
              </p>
            </div>
          ))}
          {/* Custoom Plan Centered on sm */}

          <div className="flex lg:hidden justify-center mb-12">
            <div className="border rounded-lg p-6 shadow-lg w-full max-w-md transition-transform transform hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-center">
                {webPackages[4].title}
              </h3>
              <p className="text-2xl font-extrabold text-center text-blue-600 mb-2">
                {webPackages[4].price}
              </p>
              <p className="text-sm text-center text-gray-500 mb-4">
                {webPackages[4].discount}
              </p>

              {/* <Link
                to="/contactUs"
                onClick={() => window.scrollTo(0, 0)}
                className="btn mt-6 mb-6 w-full bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Contact us
              </Link> */}

              <p className="text-sm text-gray-600 mb-6 text-center">
                {webPackages[4].description}
              </p>
              <p className="text-sm text-gray-600 mb-6 text-left">
                {webPackages[4].subDescription}
              </p>
              <p className="text-sm text-gray-500 text-left mb-1">
                <span className="font-semibold">Get Started:</span>
              </p>
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                {webPackages[4].features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full inline-block mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 text-center">
                <span className="font-semibold">
                  {webPackages[4].maintenance}
                </span>
              </p>
              <Link
                to="/contactUs"
                onClick={() => window.scrollTo(0, 0)}
                className="btn mt-6 mb-6 w-full bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Contact us
              </Link>
            </div>
          </div>
          {/* Custom Plan Centered on lg */}
          <div className="hidden lg:flex justify-center mb-12">
            <div className="border rounded-lg p-6 shadow-lg w-full max-w-md transition-transform transform hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-center">
                {webPackages[4].title}
              </h3>
              <p className="text-2xl font-extrabold text-center text-blue-600 mb-2">
                {webPackages[4].price}
              </p>
              <p className="text-sm text-center text-gray-500 mb-4">
                {webPackages[4].discount}
              </p>

              {/* <Link
                to="/contactUs"
                onClick={() => window.scrollTo(0, 0)}
                className="btn mt-6 mb-6 w-full bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Contact us
              </Link> */}

              <p className="text-sm text-gray-600 mb-6 text-center">
                {webPackages[4].description}
              </p>
              <p className="text-sm text-gray-600 mb-6 text-left">
                {webPackages[4].subDescription}
              </p>
              <p className="text-sm text-gray-500 text-left mb-1">
                <span className="font-semibold">Get Started:</span>
              </p>
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                {webPackages[4].features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full inline-block mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 text-center">
                <span className="font-semibold">
                  {webPackages[4].maintenance}
                </span>
              </p>
              <Link
                to="/contactUs"
                onClick={() => window.scrollTo(0, 0)}
                className="btn mt-6 mb-6 w-full bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Email Entry */}
      {modalVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg p-6 w-11/12 sm:w-96 shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
              Enter Your Email
            </h2>
            <p className="text-gray-600 text-sm mb-4 text-center">
              Please provide your email to proceed with the payment for the{" "}
              <span className="font-bold text-blue-600">
                {selectedPackage?.title}
              </span>{" "}
              package.
            </p>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-900 outline-none mb-4"
              placeholder="Enter your email address"
              value={email}
              onChange={handleEmailChange}
            />
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded-lg text-gray-800 hover:bg-gray-400 transition-colors"
                onClick={() => setModalVisible(false)}
              >
                Cancel
              </button>
              <PaystackButton
                {...createPaystackConfig(
                  parseInt(selectedPackage?.price.replace(/[^0-9]/g, ""), 10)
                )}
                disabled={!isEmailValid}
                className={`px-4 py-2 rounded-lg ${
                  isEmailValid
                    ? "bg-blue-900 text-white hover:bg-blue-600"
                    : "bg-gray-300 text-gray-800 cursor-not-allowed"
                } transition-colors`}
              >
                Proceed to Pay
              </PaystackButton>
            </div>
            {!isEmailValid && (
              <p className="text-sm text-red-500 mt-2 text-center">
                Please enter a valid email address to continue.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default WebDesignPlans;
