import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
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
    publicKey: "pk_test_fa21cc6e09d2b11d0309361ba8996f55d18742f6", // Your Paystack public key
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
  ];

  return (
    <div>
      <h1 className="pt-6 md:pt-8 text-gl md:text-3xl w-full font-bold text-center bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-200 text-gray-100">
        YOUR WEBSITE IS BUILT BY OUR TEAM OF EXPERTS!
      </h1>
      <div className="py-12 px-4 sm:px-8 lg:px-16 bg-gray-50">
        {/* Web Design Packages */}
        <h1 className="text-3xl font-bold text-center mb-12">
          Web Design and Development Packages
        </h1>
        {/* Landing Page Centered */}
        <div className="flex justify-center mb-12">
          <div className="border rounded-lg p-6 shadow-lg w-full max-w-md transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold mb-4 text-center">
              {webPackages[0].title}
            </h3>
            <p className="text-2xl font-extrabold text-center text-cyan-600 mb-2">
              {webPackages[0].price}
            </p>
            <p className="text-sm text-center text-gray-500 mb-4">
              {webPackages[0].discount}
            </p>

            <button
              onClick={() => showModal(webPackages[0])}
              className="mt-6 mb-6 w-full bg-cyan-500 text-white py-2 px-4 rounded-lg hover:bg-cyan-600 transition-colors"
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

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {webPackages.slice(1).map((pkg, index) => (
            <div
              key={index}
              className={`border rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 ${
                pkg.popular ? "border-cyan-500" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -mt-8 bg-cyan-500 text-white py-1 px-4 text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-4 text-center">
                {pkg.title}
              </h3>
              <p className="text-2xl font-extrabold text-center text-cyan-600 mb-2">
                {pkg.price}
              </p>
              <p className="text-sm text-center text-gray-500 mb-4">
                {pkg.discount}
              </p>
              <button
                onClick={() => showModal(pkg)}
                className="mt-6 mb-6 w-full bg-cyan-500 text-white py-2 px-4 rounded-lg hover:bg-cyan-600 transition-colors"
              >
                Choose Plan
              </button>
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
              <span className="font-bold text-cyan-600">
                {selectedPackage?.title}
              </span>{" "}
              package.
            </p>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-cyan-500 outline-none mb-4"
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
                    ? "bg-cyan-500 text-white hover:bg-cyan-600"
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
