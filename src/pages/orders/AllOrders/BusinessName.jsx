import React, { useState, useEffect } from "react";
import { customFetch } from "../../../utils";
import { Link } from "react-router";
import { jsPDF } from "jspdf";
const BusinessName = () => {
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user data from the API
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await customFetch.get("/BusinessNameform", {
          withCredentials: true,
        });
        setFormData(response.data.forms);
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
  const handleDownloadPDF = (order) => {
    const doc = new jsPDF();
    doc.setFontSize(16);

    // Title
    doc.text("Business Name Registration Form", 20, 20);
    let yOffset = 30;

    // Business Details Section
    doc.setFontSize(14);
    doc.text("Business Details:", 20, yOffset);
    yOffset += 10;
    doc.setFontSize(12);
    doc.text(
      `Option 1: ${order.businessDetails.businessNameOption1 || "N/A"}`,
      20,
      yOffset
    );
    yOffset += 10;
    doc.text(
      `Option 2: ${order.businessDetails.businessNameOption2 || "N/A"}`,
      20,
      yOffset
    );
    yOffset += 10;
    doc.text(
      `Activity: ${order.businessDetails.businessActivity || "N/A"}`,
      20,
      yOffset
    );
    yOffset += 10;
    doc.text(
      `Email: ${order.businessDetails.businessEmail || "N/A"}`,
      20,
      yOffset
    );
    yOffset += 10;
    doc.text(
      `Phone: ${order.businessDetails.businessPhone || "N/A"}`,
      20,
      yOffset
    );

    yOffset += 20;

    // Proprietor Info Section
    doc.setFontSize(14);
    doc.text("Proprietor Info:", 20, yOffset);
    yOffset += 10;
    doc.setFontSize(12);
    doc.text(
      `Name: ${order.proprietorInfo.firstName} ${order.proprietorInfo.middleName} ${order.proprietorInfo.surname}`,
      20,
      yOffset
    );
    yOffset += 10;
    doc.text(`Gender: ${order.proprietorInfo.gender || "N/A"}`, 20, yOffset);
    yOffset += 10;
    doc.text(
      `Occupation: ${order.proprietorInfo.occupation || "N/A"}`,
      20,
      yOffset
    );
    yOffset += 10;
    doc.text(
      `Date of Birth: ${
        new Date(order.proprietorInfo.dateOfBirth).toLocaleDateString() || "N/A"
      }`,
      20,
      yOffset
    );
    yOffset += 10;
    doc.text(`Email: ${order.proprietorInfo.email || "N/A"}`, 20, yOffset);
    yOffset += 10;
    doc.text(
      `Phone: ${order.proprietorInfo.phoneNumber || "N/A"}`,
      20,
      yOffset
    );

    yOffset += 20;

    // Proprietor Address Section
    doc.setFontSize(14);
    doc.text("Proprietor Address:", 20, yOffset);
    yOffset += 10;
    doc.setFontSize(12);
    doc.text(
      `Country: ${order.proprietorAddress.country || "N/A"}`,
      20,
      yOffset
    );
    yOffset += 10;
    doc.text(`State: ${order.proprietorAddress.state || "N/A"}`, 20, yOffset);
    yOffset += 10;
    doc.text(`LGA: ${order.proprietorAddress.lga || "N/A"}`, 20, yOffset);
    yOffset += 10;
    doc.text(`City: ${order.proprietorAddress.city || "N/A"}`, 20, yOffset);
    yOffset += 10;
    doc.text(
      `Street: ${order.proprietorAddress.streetName || "N/A"}`,
      20,
      yOffset
    );
    yOffset += 10;
    doc.text(
      `House Number: ${order.proprietorAddress.houseNumber || "N/A"}`,
      20,
      yOffset
    );

    yOffset += 20;

    // Documents Section
    doc.setFontSize(14);
    doc.text("Documents:", 20, yOffset);
    yOffset += 10;
    doc.setFontSize(12);
    doc.text(`Valid ID: ${order.documents.validId || "N/A"}`, 20, yOffset);
    yOffset += 10;
    doc.text(
      `Passport Photo: ${order.documents.passportPhoto || "N/A"}`,
      20,
      yOffset
    );
    yOffset += 10;
    doc.text(`Signature: ${order.documents.signature || "N/A"}`, 20, yOffset);

    yOffset += 20;

    // Status Section
    doc.setFontSize(14);
    doc.text("Status:", 20, yOffset);
    yOffset += 10;
    doc.setFontSize(12);
    doc.text(`Current Status: ${order.status || "N/A"}`, 20, yOffset);

    doc.save(`Business_Registration_Form_${order._id}.pdf`);
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
      <h2 className="text-3xl font-semibold  text-gray-600 text-center mb-12 mt-8">
        All Users Business Name Registration Orders(admin only)
        <p className="text-lg">
          Below are sucessful business registration orders 📖
        </p>
      </h2>

      {formData && formData.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {formData.map((order, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 ">
              {/* Business Details */}
              <section className="mb-4">
                <h3 className="font-bold">
                  OrderID:<span>{order._id}</span>
                </h3>
                <h3 className="text-2xl font-semibold text-blue-600">
                  Business Details
                </h3>
                <p className="mt-2">
                  <strong>Option 1:</strong>{" "}
                  {order.businessDetails.businessNameOption1}
                </p>
                <p>
                  <strong>Option 2:</strong>{" "}
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
              </section>

              {/* Proprietor Info */}
              <section className="mb-4">
                <h3 className="text-2xl font-semibold text-blue-600">
                  Proprietor Info
                </h3>
                <p>
                  <strong>Name:</strong>{" "}
                  {`${order.proprietorInfo.firstName} ${order.proprietorInfo.middleName} ${order.proprietorInfo.surname}`}
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
              </section>

              {/* Proprietor Address */}
              <section className="mb-4">
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
                  <strong>Street:</strong> {order.proprietorAddress.streetName}
                </p>
                <p>
                  <strong>House Number:</strong>{" "}
                  {order.proprietorAddress.houseNumber}
                </p>
              </section>

              {/* Documents */}
              <section className="mb-4">
                <h3 className="text-2xl font-semibold text-blue-600">
                  Documents
                </h3>
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
              </section>

              {/* Status */}
              <section>
                <h3 className="text-2xl font-semibold text-blue-600">Status</h3>
                <p className="font-medium text-gray-700">{order.status}</p>
              </section>
              <button
                className="btn bg-cyan-500 text-white"
                onClick={() => handleDownloadPDF(order)}
              >
                Download pdf
              </button>
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
