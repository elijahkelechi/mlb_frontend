import React, { useState, useEffect } from "react";
import { customFetch } from "../../utils";

const FIRSorder = () => {
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user data from the API
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await customFetch.get("/FIRSform/currentUser", {
          withCredentials: true,
        });
        setFormData(response.data.forms); // Save fetched forms to state
        console.log(response.data.forms); // Log the forms for debugging
      } catch (err) {
        setError(err.message); // Save error message to state
      } finally {
        setLoading(false); // Stop loading spinner
      }
    };

    fetchUserData();
  }, []);

  // Scroll to top
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  // Render loading state
  if (loading) {
    return (
      <div className="flex bg-cyan-500 justify-center items-center min-h-screen">
        <div className="text-2xl text-gray-50">
          <span className="loading loading-spinner"></span>Loading...
        </div>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-2xl text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-12 bg-cyan-50">
      <h2 className="text-3xl font-semibold text-gray-600 text-center mb-12 mt-8">
        FIRS TIN Registration Orders
        <p className="text-lg">
          Below are your successful FIRS TIN registration orders 📖
        </p>
      </h2>

      {/* Render the orders */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {formData.map((order) => (
          <div
            key={order._id}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <p className="text-sm  text-gray-800 mb-2">
              <strong>Entity Name:</strong> {order.entityName}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Order ID:</strong> {order._id}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Registration Type:</strong> {order.registrationType}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Category:</strong> {order.registrationCategory}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Nature of Business:</strong> {order.natureOfBusiness}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Registration Number:</strong> {order.registrationNumber}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Status:</strong>{" "}
              <span
                className={`font-semibold ${
                  order.status === "processing"
                    ? "text-yellow-500"
                    : "text-green-500"
                }`}
              >
                {order.status}
              </span>
            </p>
            <p className="text-sm text-gray-600">
              <strong>Created At:</strong>{" "}
              {new Date(order.createdAt).toLocaleString()}
            </p>
            <div className="mt-4 space-y-2">
              <a
                href={order.validID}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-500 underline hover:text-blue-700"
              >
                View Valid ID
              </a>
              <a
                href={order.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-500 underline hover:text-blue-700"
              >
                View Certificate
              </a>
              <a
                href={order.statusReport}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-500 underline hover:text-blue-700"
              >
                View Status Report
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FIRSorder;
