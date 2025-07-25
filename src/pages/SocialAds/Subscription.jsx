import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import adsBg from "../../assets/adsBg.webp";
import { customFetch } from "../../utils";
import { toast } from "react-toastify";
import { Link } from "react-router";

const Subscription = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [subscriptionType, setSubscriptionType] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);
  const [creatingOrder, setCreatingOrder] = useState(false);

  const paystackConfig = {
    email: email,
    amount: 0,
    publicKey: "pk_live_1e16875ee44434a99e327eb8e7835abffd03ecfb",
  };

  const handlePayment = async (response) => {
    const orderData = {
      planName: selectedPlan.name,
      planDetails: selectedPlan.details,
      price: parseInt(selectedPlan.price.replace("₦", "").replace(/,/g, "")),
      paymentReference: response.reference,
      subscriptionPeriod: subscriptionType,
    };
    setIsSubmissionSuccessful(false);
    setCreatingOrder(true);
    try {
      const result = await customFetch.post("/AdsOrders", orderData, {
        withCredentials: true,
      });
      toast.success("Order created successfully");
      setIsSubmissionSuccessful(true);
      console.log(result);
    } catch (error) {
      toast.error(
        error?.response?.data?.msg ||
          "Failed to submit the form, please try again."
      );
      console.log(error);
    } finally {
      setCreatingOrder(false);
    }
  };

  const openModal = (plan, type) => {
    setSelectedPlan(plan);
    setSubscriptionType(type);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEmail("");
  };

  const componentProps = {
    ...paystackConfig,
    reference: new Date().getTime().toString(),
    amount: selectedPlan
      ? parseInt(selectedPlan.price.replace("₦", "").replace(/,/g, "")) * 100
      : 0,
    text: "Pay Now",
    onSuccess: handlePayment,
    onClose: () => toast.info("Payment popup closed"),
  };

  const plans = {
    monthly: [
      {
        name: "Basic",
        details: [
          "Platforms: Facebook & Instagram",
          "2 Ad Campaigns",
          "Monthly Custom Report",
          "Email Support",
          "WhatsApp Chat Support",
          "Phone Support",
        ],
        price: "₦30,000",
      },
      {
        name: "Standard",
        details: [
          "Platforms: Facebook & Instagram",
          "4 Ad Campaigns",
          "Monthly Custom Report",
          "Email Support",
          "WhatsApp Chat Support",
          "Phone Support",
        ],
        price: "₦50,000",
      },
      {
        name: "Premium",
        details: [
          "Platforms: Facebook & Instagram",
          "Unlimited Ad Campaigns",
          "Weekly Tracking and Analysis",
          "Monthly Custom Report",
          "24/7 Priority Support",
          "Dedicated Ads Manager",
          "Email Support",
          "WhatsApp Chat Support",
        ],
        price: "₦100,000",
      },
    ],
    weekly: [
      {
        name: "Weekly Basic",
        details: [
          "Platforms: Facebook & Instagram",
          "1 Ad Campaign",
          "Weekly Custom Report",
          "Email Support",
          "WhatsApp Chat Support",
        ],
        price: "₦10,000",
      },
      {
        name: "Weekly Premium",
        details: [
          "Platforms: Facebook & Instagram",
          "2 Ad Campaigns",
          "Weekly Tracking and Analysis",
          "24/7 Priority Support",
          "Dedicated Ads Manager",
          "Email Support",
          "WhatsApp Chat Support",
        ],
        price: "₦20,000",
      },
    ],
  };

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      className="bg-cover bg-center text-gray-800 min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${adsBg})` }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded shadow-lg w-full">
        <h1 className="text-4xl font-extrabold mb-6 text-center bg-cyan-600 text-cyan-50 p-8 rounded-md">
          Social Media Ads Subscription Plans
        </h1>
        <p className="text-lg mb-6 text-center text-gray-700">
          Explore our flexible and evolving plans tailored to meet the dynamic
          needs of social media advertising.
        </p>

        {/* Monthly Plans */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-700">
            Monthly Plans
          </h2>
          <div className="space-y-6">
            {plans.monthly.map((plan, index) => (
              <div key={index} className="border p-6 rounded-lg bg-gray-50">
                <h3 className="text-xl font-bold mb-4 text-cyan-700">
                  {plan.name} - {plan.price}
                </h3>
                <ul className="list-disc ml-6 mb-4 text-gray-700">
                  {plan.details.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p className="font-semibold text-lg mb-4 text-gray-800"></p>
                <button
                  onClick={() => openModal(plan, "monthly")}
                  className="bg-cyan-600 text-white hover:bg-gray-800 p-4 rounded-md"
                >
                  Subscribe
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Plans */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-700">
            Weekly Plans
          </h2>
          <div className="space-y-6">
            {plans.weekly.map((plan, index) => (
              <div key={index} className="border p-6 rounded-lg bg-gray-50">
                <h3 className="text-xl font-bold mb-4 text-cyan-700">
                  {plan.name} - {plan.price}
                </h3>
                <ul className="list-disc ml-6 mb-4 text-gray-700">
                  {plan.details.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p className="font-semibold text-lg mb-4 text-gray-800"></p>
                <button
                  onClick={() => openModal(plan, "weekly")}
                  className="bg-cyan-600 text-white hover:bg-gray-800 p-4 rounded-md"
                >
                  Subscribe
                </button>
              </div>
            ))}
          </div>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h3 className="text-xl font-bold mb-4 text-cyan-700">
                Enter Your Email
              </h3>
              <p className="font-bold text-xs md:text-sm">
                Note:
                <span className="font-normal mx-1">
                  Your payment receiept would be sent to the email below.
                </span>
              </p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded mb-4"
                placeholder="Enter your email"
              />
              <div className="flex justify-between">
                <PaystackButton
                  {...componentProps}
                  className="bg-green-500 text-white p-2 rounded"
                />
                <button
                  onClick={closeModal}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  Cancel
                </button>
              </div>
              {creatingOrder && (
                <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
                  <div className="text-center">
                    <span className="loading loading-spinner loading-lg text-white"></span>
                    <p className="text-white mt-4 font-bold">
                      Subscription in progress please wait...
                    </p>
                  </div>
                </div>
              )}
              {isSubmissionSuccessful && (
                <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="flex items-center justify-center mb-4">
                      <svg
                        className="w-16 h-16 text-white animate-bounce"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold">
                      Subscription Successful!
                    </h2>
                    <p className="mt-2">
                      you have successfully subscribed to this plan. Thank you!
                    </p>
                    <Link
                      onClick={handleScrollToTop}
                      className="btn bg-gray-800 text-white my-8"
                      to="/Ads_Orders"
                    >
                      Check your subscription update
                    </Link>
                    <div className="flex flex-col items-center justify-center bg-green-50 border border-green-300 rounded-lg p-8 my-6 shadow-lg w-full max-w-md mx-auto animate-fadeIn">
                      <div className="flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
                        <svg
                          className="w-16 h-16 text-green-600 animate-bounce"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-semibold text-green-800 mb-4">
                        Payment Successful!
                      </h2>
                      <p className="text-gray-700 text-center">
                        Your payment has been received successfully Thank you
                        for trusting us!
                      </p>
                      <h2 className="font-bold text-blue-600">
                        Check your ongoing orders for status
                      </h2>
                      <button
                        onClick={() => setIsSubmissionSuccessful(false)}
                        className="btn bg-blue-500 m-4 text-white hover:bg-black"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Subscription;
