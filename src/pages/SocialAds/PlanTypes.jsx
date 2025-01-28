import React from "react";
import { Link } from "react-router";

const PlanTypes = () => {
  const plans = [
    {
      title: "Monthly Plan",
      description:
        "Boost your social media presence with a tailored monthly strategy. Includes content creation, posting, and performance tracking to engage your audience consistently.",
      link: "/ads_monthly_subscription",
    },
    {
      title: "Weekly Plan",
      description:
        "Get rapid engagement with our weekly social media campaigns. Perfect for time-sensitive promotions, special events, or increasing visibility with frequent posts.",
      link: "/ads_weekly_subscription",
    },
  ];

  return (
    <div className="px-4 py-8 bg-gray-50">
      <h1 className="text-2xl font-bold font-heading text-center text-gray-800 mb-6">
        Choose
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-1 gap-4 md:gap-8 max-w-5xl mx-auto text-center ">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border  bg-white shadow-lg rounded-2xl p-6 border-cyan-500 hover:shadow-xl ransition-transform transform hover:scale-105 duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {plan.title}
            </h2>
            <p className="text-gray-600 mb-4">{plan.description}</p>
            <Link
              to={plan.link}
              className="text-white bg-cyan-500 hover:bg-gray-800 font-medium px-4 py-2 rounded-lg text-sm inline-block"
            >
              View Plans
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanTypes;
