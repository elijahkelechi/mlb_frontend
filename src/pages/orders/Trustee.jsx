import React, { useState, useEffect } from "react";
import { customFetch } from "../../utils";
import { Link } from "react-router";

const Trustee = () => {
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user data from the API
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await customFetch.get("/Trusteeform/current", {
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
        Incorporated Trustee Registration Orders
        <p className="text-lg">
          Below are your successful Incorporated Trustee registration orders 📖
        </p>
      </h2>

      {formData && formData.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {formData.map((order, orderIndex) => (
            <div
              key={order._id}
              className="p-4 bg-white shadow-md rounded-lg border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Order ID: {order._id}
              </h3>
              <div className="space-y-4">
                {order.trustees.map((trustee, trusteeIndex) => (
                  <div
                    key={trustee._id}
                    className="p-4 bg-gray-50 rounded-md border border-gray-300"
                  >
                    <h4 className="text-md font-semibold text-gray-700">
                      Trustee {trusteeIndex + 1}
                    </h4>
                    <p>
                      <span className="font-medium">Name:</span>{" "}
                      {trustee.details.firstName} {trustee.details.middleName}{" "}
                      {trustee.details.lastName}
                    </p>
                    <p>
                      <span className="font-medium">Date of Birth:</span>{" "}
                      {new Date(trustee.details.DOB).toLocaleDateString()}
                    </p>
                    <p>
                      <span className="font-medium">Gender:</span>{" "}
                      {trustee.details.gender}
                    </p>
                    <p>
                      <span className="font-medium">Nationality:</span>{" "}
                      {trustee.details.nationality}
                    </p>
                    <p>
                      <span className="font-medium">Phone Number:</span>{" "}
                      {trustee.details.phoneNumber}
                    </p>
                    <p>
                      <span className="font-medium">Email:</span>{" "}
                      {trustee.details.email}
                    </p>
                    <p>
                      <span className="font-medium">Chairman:</span>{" "}
                      {trustee.details.isChairman ? "Yes" : "No"}
                    </p>
                    <p>
                      <span className="font-medium">Secretary:</span>{" "}
                      {trustee.details.isSecretary ? "Yes" : "No"}
                    </p>
                    <div className="mt-4">
                      <h5 className="font-medium">Address:</h5>
                      <p>
                        {trustee.address.houseNumber}{" "}
                        {trustee.address.streetName}, {trustee.address.city},{" "}
                        {trustee.address.lga}, {trustee.address.state},{" "}
                        {trustee.address.country} - {trustee.address.postCode}
                      </p>
                    </div>
                    <div className="mt-4">
                      <h5 className="font-medium">Documents:</h5>
                      <ul className="list-disc list-inside">
                        <li>
                          <a
                            href={trustee.documents.validID}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline"
                          >
                            Valid ID
                          </a>
                        </li>
                        <li>
                          <a
                            href={trustee.documents.signature}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline"
                          >
                            Signature
                          </a>
                        </li>
                        <li>
                          <a
                            href={trustee.documents.passportPhoto}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline"
                          >
                            Passport Photo
                          </a>
                        </li>
                        {trustee.documents.minutesOfMeetings && (
                          <li>
                            <a
                              href={trustee.documents.minutesOfMeetings}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 underline"
                            >
                              Minutes of Meetings
                            </a>
                          </li>
                        )}
                        {trustee.documents.organizationConstitution && (
                          <li>
                            <a
                              href={trustee.documents.organizationConstitution}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 underline"
                            >
                              Organization Constitution
                            </a>
                          </li>
                        )}
                        {trustee.documents.trusteeDeclarationForm && (
                          <li>
                            <a
                              href={trustee.documents.trusteeDeclarationForm}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 underline"
                            >
                              Trustee Declaration Form
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                ))}
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

export default Trustee;
