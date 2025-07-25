import React from "react";
import { Link } from "react-router";

const Division = () => {
  const plans = [
    {
      title: "Website Design and Development Pricing Plans",
      description:
        "Get a stunning and fully responsive website tailored to your needs. Perfect for businesses, portfolios, and more.",
      link: "/web_design_plans",
    },
    {
      title: "E-commerce Website Packages",
      description:
        "Launch your online store with our feature-rich eCommerce solutions. Includes payment integration and inventory management.",
      link: "/e-commerce_plans",
    },
  ];

  return (
    <div className="px-6 md:px-8 py-8 md:py-16 bg-gray-50">
      <h1 className="text-xl md:text-2xl font-bold font-heading text-center text-blue-900 mb-6">
        Web development and eCommerce packages tailored to suit businesses of
        all sizes and needs.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 md:gap-8 max-w-5xl mx-auto text-center">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border bg-white shadow-lg rounded-2xl p-6 border-blue-900 hover:shadow-xl transition-transform transform hover:scale-105 duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {plan.title}
            </h2>
            <p className="text-gray-600 mb-4">{plan.description}</p>
            <Link
              to={plan.link}
              className="text-white bg-blue-900 hover:bg-gray-800 font-medium px-4 py-2 rounded-lg text-sm inline-block"
            >
              View Plans
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Division;
