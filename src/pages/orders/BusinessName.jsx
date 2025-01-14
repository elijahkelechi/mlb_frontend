import React, { useState, useEffect } from "react";
import axios from "axios";
import { customFetch } from "../../utils";

const BusinessName = () => {
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the API
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await customFetch.get(
          "/BusinessNameform/currentUser",
          { withCredentials: true }
        );
        2;
        setFormData(response.data.forms); // Save the fetched data
      } catch (err) {
        setError(err.message); // Save the error message if the fetch fails
      } finally {
        setLoading(false); // Stop loading after fetching data
      }
    };
    fetchUserData();
  }, []);

  // If data is still loading
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-2xl text-gray-700">Loading...</div>
      </div>
    );
  }

  // If there was an error
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-2xl text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-6">Ongoing Orders</h2>
      {formData && formData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formData.map((order, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-blue-600">
                  Business Details
                </h3>
                <p className="mt-2">
                  <strong>Business Name Option 1:</strong>{" "}
                  {order.businessDetails.businessNameOption1}
                </p>
                <p>
                  <strong>Business Name Option 2:</strong>{" "}
                  {order.businessDetails.businessNameOption2}
                </p>
                <p>
                  <strong>Activity:</strong>{" "}
                  {order.businessDetails.businessActivity}
                </p>
                <p>
                  <strong>Email:</strong> {order.businessDetails.businessEmail}
                </p>
                <p>
                  <strong>Phone:</strong> {order.businessDetails.businessPhone}
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-blue-600">
                  Proprietor Info
                </h3>
                <p>
                  <strong>Name:</strong> {order.proprietorInfo.firstName}{" "}
                  {order.proprietorInfo.middleName}{" "}
                  {order.proprietorInfo.surname}
                </p>
                <p>
                  <strong>Gender:</strong> {order.proprietorInfo.gender}
                </p>
                <p>
                  <strong>Occupation:</strong> {order.proprietorInfo.occupation}
                </p>
                <p>
                  <strong>Date of Birth:</strong>{" "}
                  {new Date(
                    order.proprietorInfo.dateOfBirth
                  ).toLocaleDateString()}
                </p>
                <p>
                  <strong>Email:</strong> {order.proprietorInfo.email}
                </p>
                <p>
                  <strong>Phone:</strong> {order.proprietorInfo.phoneNumber}
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-blue-600">
                  Proprietor Address
                </h3>
                <p>
                  <strong>Country:</strong> {order.proprietorAddress.country}
                </p>
                <p>
                  <strong>State:</strong> {order.proprietorAddress.state}
                </p>
                <p>
                  <strong>LGA:</strong> {order.proprietorAddress.lga}
                </p>
                <p>
                  <strong>City:</strong> {order.proprietorAddress.city}
                </p>
                <p>
                  <strong>Street Name:</strong>{" "}
                  {order.proprietorAddress.streetName}
                </p>
                <p>
                  <strong>House Number:</strong>{" "}
                  {order.proprietorAddress.houseNumber}
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-blue-600">
                  Documents
                </h3>
                <div>
                  <p>
                    <strong>Valid ID:</strong>{" "}
                    <a
                      href={order.documents.validId}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      View
                    </a>
                  </p>
                  <p>
                    <strong>Passport Photo:</strong>{" "}
                    <a
                      href={order.documents.passportPhoto}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      View
                    </a>
                  </p>
                  <p>
                    <strong>Signature:</strong>{" "}
                    <a
                      href={order.documents.signature}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      View
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-blue-600">Status</h3>
                <p className="font-medium">{order.status}</p>
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

export default BusinessName;
