import React from "react";
import { Link } from "react-router";

const PlanTypes = () => {
  const plans = [
    {
      title: "Monthly Plan",
      description:
        "Maximize your brand’s reach with a well-structured monthly Social Media Advertising Strategy tailored to boost sales, drive engagement, generate leads, and boost conversions.",
      link: "/ads_monthly_subscription",
    },
    {
      title: "Weekly Plan",
      description:
        "Get rapid visibility and engagement with our weekly ad campaigns . Perfect for short-term promotions, special offers, or increasing brand awareness with targeted Facebook & Instagram ads.",
      link: "/ads_weekly_subscription",
    },
  ];

  return (
    <div className="px-6 py-16 bg-gray-50">
      <h1 className="text-2xl font-bold font-heading text-center text-blue-900 mb-6">
        Whether you're a startup, an established brand, or looking to scale your
        marketing efforts, we have the perfect weekly and monthly ad management
        plans to suit your needs.
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

export default PlanTypes;
