import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBuilding,
  FaBriefcase,
  FaUsers,
  FaShieldAlt,
  FaFileAlt,
  FaDesktop,
  FaFacebook,
  FaPaintBrush,
} from "react-icons/fa";

const Orders = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const orders = [
    {
      name: "Business Name (Enterprise) Orders",
      path: "/businessName_orders",
      icon: <FaBuilding />,
    },
    {
      name: "Limited Liability Company Orders",
      path: "/LLC_orders",
      icon: <FaBriefcase />,
    },
    {
      name: "Incorporated Trustee (NGO | Association) Orders",
      path: "/Trustee_orders",
      icon: <FaUsers />,
    },
    { name: "SCUML Orders", path: "/SCUML_orders", icon: <FaShieldAlt /> },
    {
      name: "Facebook Ads Subscription Orders",
      path: "/Ads_Orders",
      icon: <FaFacebook />,
    },
    {
      name: "Website Design Orders",
      path: "/web-design-orders",
      icon: <FaDesktop />,
    },
    { name: "TIN Orders", icon: <FaFileAlt /> },
    {
      name: "Graphic Design Orders",
      path: "/graphic-design-orders",
      icon: <FaPaintBrush />,
    },
  ];

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-cyan-50 py-10">
      <div className="px-6 md:px-16">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8 border-b-4 border-cyan-500 p-2">
          Check Your Ongoing Orders Here! 🚀
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {orders.map((order, index) => (
            <div
              key={index}
              onClick={() => {
                if (order.name === "TIN Orders") {
                  setIsModalOpen(true);
                } else {
                  handleScrollToTop();
                  window.location.href = order.path;
                }
              }}
              className="block bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105 group cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <div className="text-blue-500 text-3xl group-hover:animate-bounce">
                  {order.icon}
                </div>
                <h2 className="text-lg font-semibold text-gray-700 group-hover:text-blue-600">
                  {order.name}
                </h2>
              </div>
              <span className="text-sm text-blue-500 mt-2 inline-block group-hover:underline">
                View Details
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-semibold mb-4">TIN Orders</h2>
            <p className="text-gray-700 mb-6">What would you like check</p>
            <div className="flex justify-end space-x-4">
              <Link
                to="/JTB_orders"
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => {
                  setIsModalOpen(false); // Close modal without interfering with navigation
                  handleScrollToTop();
                }}
              >
                JTB TIN orders
              </Link>
              <Link
                to="/FIRS_orders"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => {
                  setIsModalOpen(false);
                  handleScrollToTop();
                }}
              >
                FIRS TIN orders
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
