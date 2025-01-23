import React, { useState, useEffect } from "react";
import { customFetch } from "../../utils";

const JTBorder = () => {
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user data from the API
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await customFetch.get("/JTBTINform/currentUser", {
          withCredentials: true,
        });
        setFormData(response.data.forms);
        console.log(response.data.forms);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

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
        JTB TIN Registration Orders
        <p className="text-lg">
          Below are your successful JTB TI registration orders 📖
        </p>
      </h2>

      {formData && formData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {formData.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-lg font-bold text-gray-700 mb-2">
                <span className="font-semibold">Business Name:</span>{" "}
                {item.businessName}
              </h3>
              <p>
                <span className="font-semibold">Full Name:</span>{" "}
                {item.fullName}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {item.email}
              </p>
              <p>
                <span className="font-semibold">Phone:</span> {item.phone}
              </p>
              <p>
                <span className="font-semibold">WhatsApp:</span> {item.whatsapp}
              </p>
              <p>
                <span className="font-semibold">Nature of Business:</span>{" "}
                {item.natureOfBusiness}
              </p>
              <p>
                <span className="font-semibold">Status:</span>{" "}
                <span
                  className={`${
                    item.status === "processing"
                      ? "text-yellow-500"
                      : "text-green-500"
                  } font-semibold`}
                >
                  {item.status}
                </span>
              </p>
              <div className="mt-4 space-y-4 space-x-8">
                <a
                  href={item.validID}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  View Valid ID
                </a>
                <a
                  href={item.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  View Certificate
                </a>
                <a
                  href={item.statusReport}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  View Status Report
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-700">No ongoing orders found.</p>
      )}
    </div>
  );
};

export default JTBorder;
