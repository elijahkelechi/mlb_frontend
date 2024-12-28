import React from "react";
import { PaystackButton } from "react-paystack";
import adsBg from "../../assets/adsBg.webp";
import { useNavigate } from "react-router";
const Subscription = () => {
  const navigate = useNavigate();
  const paystackConfig = {
    email: "user@example.com", // Replace with the user's email from your authentication system
    amount: 0, // Amount in kobo (initially 0)
    publicKey: "pk_test_fa21cc6e09d2b11d0309361ba8996f55d18742f6", // Replace with your Paystack public key
  };

  const handlePayment = (plan) => {
    paystackConfig.reference = new Date().getTime().toString(); // Generates a unique reference
    paystackConfig.amount =
      parseInt(plan.price.replace("₦", "").replace(/,/g, "")) * 100; // Convert to kobo
    paystackConfig.email = "user@example.com"; // Replace with the user's email

    const componentProps = {
      ...paystackConfig,
      text: (
        <div className="bg-cyan-600 text-white hover:bg-gray-800 p-4 rounded-md">
          Subscribe to {plan.name}
        </div>
      ),
      onSuccess: (response) => {
        console.log("Payment successful!", response);
        navigate("/ongoing_orders");
        // Handle successful payment response, e.g., redirect or notify user
      },
      onClose: () => {
        console.log("Payment modal closed");
      },
    };

    return <PaystackButton {...componentProps} />;
  };

  return (
    <div
      className="bg-cover bg-center text-gray-800 min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${adsBg})`,
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded shadow-lg w-full">
        <h1 className="text-4xl font-extrabold mb-6 text-center bg-cyan-600 text-cyan-50 p-8 rounded-md">
          Social Media Ads Subscription Plans
        </h1>
        <p className="text-lg mb-6 text-center text-gray-700">
          Explore our flexible and evolving plans tailored to meet the dynamic
          needs of social media advertising.
        </p>
        <p className="mb-8 text-center text-red-600 font-medium">
          <strong>Note:</strong> Pricing does not include the ads budget. If you
          encounter any issues, please{" "}
          <a
            href="https://wa.me/yourwhatsappnumber"
            className="underline text-cyan-600 hover:text-cyan-800"
          >
            Contact Support
          </a>{" "}
          via WhatsApp.
        </p>

        {/* Monthly Plans */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-700">
            Monthly Plans
          </h2>
          <div className="space-y-6">
            {[
              {
                name: "Basic Plan",
                details: [
                  "Platforms: Facebook & Instagram",
                  "2 Ad Campaigns",
                  "Monthly Custom Report",
                  "Email Support",
                  "WhatsApp Chat Support",
                  "Phone Support",
                ],
                price: "₦30,000",
                link: "#basic-plan",
              },
              {
                name: "Standard Plan",
                details: [
                  "Platforms: Facebook & Instagram",
                  "4 Ad Campaigns",
                  "Monthly Custom Report",
                  "Email Support",
                  "WhatsApp Chat Support",
                  "Phone Support",
                ],
                price: "₦50,000",
                link: "#standard-plan",
              },
              {
                name: "Premium Plan",
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
                link: "#premium-plan",
              },
            ].map((plan, index) => (
              <div key={index} className="border p-6 rounded-lg bg-gray-50">
                <h3 className="text-xl font-bold mb-4 text-cyan-700">
                  {plan.name}
                </h3>
                <ul className="list-disc ml-6 mb-4 text-gray-700">
                  {plan.details.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p className="font-semibold text-lg mb-4 text-gray-800">
                  Monthly Service Charge: {plan.price}
                </p>
                {handlePayment(plan)}
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-600">
            <strong>Recommendation:</strong> Minimum of ₦3,000 per day Ad Budget
            is suggested.
          </p>
        </div>

        {/* Weekly Plans */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-cyan-700">
            Weekly Plans
          </h2>
          <div className="space-y-6">
            {[
              {
                name: "One Platform (Facebook)",
                details: ["Two ad campaigns"],
                price: "₦10,000",
                link: "#weekly-facebook",
              },
              {
                name: "Two Platforms (Facebook & Instagram)",
                details: ["Two ad campaigns"],
                price: "₦13,000",
                link: "#weekly-both",
              },
            ].map((plan, index) => (
              <div key={index} className="border p-6 rounded-lg bg-gray-50">
                <h3 className="text-xl font-bold mb-4 text-cyan-700">
                  {plan.name}
                </h3>
                <ul className="list-disc ml-6 mb-4 text-gray-700 ">
                  {plan.details.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p className="font-semibold text-lg mb-4 text-gray-800">
                  Service Charge: {plan.price}
                </p>
                {handlePayment(plan)}
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-600">
            <strong>Ad Budget:</strong> Minimum of ₦3,000 per day is
            recommended. This budget is separate from the service charge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
