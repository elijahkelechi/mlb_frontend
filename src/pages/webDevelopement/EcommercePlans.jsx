import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import { toast } from "react-toastify";
const EcommercePlans = () => {
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

  const ecommercePackages = [
    {
      title: "Basic eCommerce",
      price: "₦200,000",
      description: "Best for: Small online stores just starting out.",
      features: [
        "Up to 20 products",
        "Customer accounts and login functionality",
        "Mobile-responsive design",
        "Custom UI/UX design tailored for simple and intuitive shopping experiences",
        "Product catalog and cart functionality",
        "Payment gateway integration",
        "Order management system",
        "Social media integration",
        "Basic SEO optimization",
        "1-month free maintenance",
      ],
      maintenance: "₦10,000 per month",
      discount: "20% OFF",
      popular: false,
    },
    {
      title: "Advanced eCommerce",
      price: "₦400,000",
      description:
        "Best for: Medium-sized businesses needing advanced store features.",
      features: [
        "Up to 50 products",
        "Mobile-responsive design",
        "Enhanced UI/UX design with product filtering, search functionality, and branding consistency",
        "Payment gateway integration",
        // "Shipping and delivery tracking system ",
        "Inventory management system ",
        "Customer accounts and login functionality ",
        "Chat integration (e.g., WhatsApp or live chat) ",
        "Customer reviews and ratings",
        "Social media integration",
        "Advanced SEO optimization",
        "1-months free maintenance",
      ],
      maintenance: "₦20,000 per month",
      discount: "15% OFF",
      popular: true,
    },
    {
      title: "Premium eCommerce",
      price: "₦800,000",
      description:
        "Best for: Large-scale online stores requiring robust features.",
      features: [
        "Unlimited products",
        "Mobile-responsive design",
        "High-end UI/UX design with advanced product search, filtering, and custom animations",
        "Payment gateway integration",
        "Shipping and delivery tracking system",
        "Inventory management system",
        "Customer accounts and login functionality",
        "Chat integration (e.g., WhatsApp or live chat) ",
        "Multi-vendor functionality (optional)",
        "Advanced inventory and order management system",
        "Custom integrations (shipping, CRM, etc.)",
        "Advanced SEO and analytics integration",

        "1-months free maintenance",
      ],
      maintenance: "₦50,000 per month",
      discount: "10% OFF",
      popular: false,
    },
  ];

  return (
    <div>
      <h1 className="pt-6 md:pt-16 pb-6 text-gl md:text-3xl w-full font-bold text-center bg-white text-blue-900">
        e-Commerce Packages
      </h1>
      <div className="px-4 sm:px-8 lg:px-16 bg-white">
        <div class="rounded-lg mb-4 md:mb-8 text-center">
          <p class="text-lg text-gray-800 font-normal mb-4 text-center">
            At <span className="font-semibold"> Multi-Level Boost</span>, we
            offer flexible and affordable ecommerce website development packages
            to suit businesses of all sizes and needs.
          </p>
        </div>
        {/* eCommerce Packages */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ecommercePackages.map((pkg, index) => (
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
              <p className="text-sm text-center text-gray-500 mb-4">
                {pkg.discount}
              </p>
              <button
                onClick={() => showModal(pkg)}
                className="mt-6 mb-6 w-full bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
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
export default EcommercePlans;
