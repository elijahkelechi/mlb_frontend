import React, { useState, useEffect } from "react";
import { customFetch } from "../../../utils";
import { Link } from "react-router";

const SCUML = () => {
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user data from the API
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await customFetch.get("/SCUMLform", {
          withCredentials: true,
        });
        setFormData(response.data.forms);
        console.log(formData);
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
        All User's SCUML Registration Orders(admin only!)
        <p className="text-lg">
          Below are successful SCUML registration orders 📖
        </p>
      </h2>

      {formData && formData.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {formData.map((order, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="font-semibold text-gray-700">
                OrderId: {order._id}
              </h3>

              <p className="text-gray-600">FirstName: {order.firstName}</p>
              <p className="text-gray-600">MiddleName: {order.middleName}</p>
              <p className="text-gray-600">SurName: {order.surname}</p>
              <p className="text-gray-600">Phone: {order.phoneNumber}</p>
              <p className="text-gray-600">WhatsApp: {order.whatsappNumber}</p>
              <p className="text-gray-600">Email: {order.email}</p>
              <p className="text-gray-600">NIN: {order.nin}</p>
              <p className="text-gray-600">BVN: {order.bvn}</p>
              <p className="text-gray-600">Account Name: {order.accountName}</p>
              <p className="text-gray-600">Bank Name: {order.bankName}</p>
              <p className="text-gray-600">
                Account Number: {order.accountNumber}
              </p>
              <p className="text-gray-600">Status: {order.status}</p>
              <p className="text-gray-600">
                Created At: {new Date(order.createdAt).toLocaleString()}
              </p>

              <div className="mt-4">
                <p className="text-gray-700">Documents:</p>
                <ul className="list-disc pl-5">
                  <li>
                    <a
                      href={order.idDocument}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      ID Document
                    </a>
                  </li>
                  <li>
                    <a
                      href={order.certificateOfIncorporation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      Certificate of Incorporation
                    </a>
                  </li>
                  <li>
                    <a
                      href={order.statusReport}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      Status Report
                    </a>
                  </li>
                  <li>
                    <a
                      href={order.memorandum}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      Memorandum
                    </a>
                  </li>
                  <li>
                    <a
                      href={order.constitution}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      Constitution
                    </a>
                  </li>
                  <li>
                    <a
                      href={order.tinCertificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      TIN Certificate
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <p className="text-gray-600">
                  Terms Accepted: {order.termsAccepted ? "Yes" : "No"}
                </p>
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

export default SCUML;
