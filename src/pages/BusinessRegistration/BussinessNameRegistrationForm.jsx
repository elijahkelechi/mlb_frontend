import React, { useState } from "react";
import { motion } from "framer-motion";
import BusinessDetails from "./FormStages/BusinessDetails";
import BusinessAddress from "./FormStages/BusinessAddress";
import ProprietorInfo from "./FormStages/ProprietorInfo";
import ProprietorAddress from "./FormStages/ProprietoAddress";
import ProprietorDocuments from "./FormStages/ProprietorDocuments";
import bgImage from "../../assets/formImage.webp";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { jsPDF } from "jspdf";
import { PaystackButton } from "react-paystack";
import { Link } from "react-router";

const MultiStageForm = () => {
  const user = useSelector((state) => state.userState.user);
  const [currentStage, setCurrentStage] = useState(1);
  const [disableNext, setDisableNext] = useState(true); // State to disable/enable Next button
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    businessDetails: {
      businessNameOption1: "",
      businessNameOption2: "",
      businessActivity: "",
      businessPhone: "",
      businessEmail: "",
    },
    businessAddress: {
      state: "",
      lga: "",
      city: "",
      postCode: "",
      streetName: "",
      buildingNumber: "",
    },
    proprietorInfo: {
      surname: "",
      firstName: "",
      middleName: "",
      gender: "",
      occupation: "",
      dateOfBirth: "",
      nationality: "",
      phoneNumber: "",
      email: "",
      idType: "",
      idNumber: "",
    },
    proprietorAddress: {
      country: "",
      state: "",
      lga: "",
      city: "",
      postCode: "",
      streetName: "",
      houseNumber: "",
    },
    documents: {
      validId: null,
      passportPhoto: null,
      signature: null,
    },
  });

  const handleInputChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleFileUpload = (section, field, file) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: file,
      },
    }));
  };

  const nextStage = () => setCurrentStage((prev) => prev + 1);
  const previousStage = () => setCurrentStage((prev) => prev - 1);
  const [isSubmissionSuccessful, setIsSubmissionSucessful] = useState(false);
  const handleSubmit = async () => {
    setIsSubmitting(true);
    const formattedData = new FormData();

    // Append each form field and their values
    Object.keys(formData).forEach((section) => {
      Object.keys(formData[section]).forEach((field) => {
        const value = formData[section][field];
        if (value instanceof File) {
          // Handle file inputs
          formattedData.append(field, value); // Append directly, not under a nested structure
        } else {
          formattedData.append(`${section}.${field}`, value);
        }
      });
    });

    try {
      const response = await axios.post(
        "https://mlb-backend-4asz.onrender.com/api/v1/BusinessNameform/submit",
        formattedData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      setIsSubmissionSucessful(true);
      toast.success("Form submitted successfully");
      console.log(response);
    } catch (error) {
      if (error?.response?.data?.msg == "invalid authentication") {
        toast.error("please login");
      } else {
        toast.error(error?.response?.data?.msg || "Failed to submit form");
      }
      console.log(error);
    }
    setIsSubmitting(false);
  };
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);

    doc.text("Business Name Registration Form", 20, 20);

    let yOffset = 30; // Starting y-axis position for text

    // Iterate through all sections in formData
    Object.keys(formData).forEach((section) => {
      doc.setFontSize(14);
      doc.text(`${section.replace(/([A-Z])/g, " $1")}:`, 20, yOffset);
      yOffset += 10;

      Object.keys(formData[section]).forEach((field) => {
        let value = formData[section][field];
        if (value instanceof File) {
          value = value.name; // Include file names instead of raw file objects
        }
        doc.setFontSize(12);
        doc.text(
          `${field.replace(/([A-Z])/g, " $1")}: ${value || "N/A"}`,
          20,
          yOffset
        );
        yOffset += 10;

        // Add page break if necessary
        if (yOffset > 280) {
          doc.addPage();
          yOffset = 20;
        }
      });
    });

    doc.save("Business_Registration_Form.pdf"); // Save the generated PDF
  };
  const paystackConfig = {
    email: formData.proprietorInfo.email || user?.email, // Default to user email if proprietor email is unavailable
    amount: 28000 * 100, // Paystack requires amount in kobo
    publicKey: "pk_test_fa21cc6e09d2b11d0309361ba8996f55d18742f6", // Replace with your actual Paystack public key
  };

  const handlePaymentSuccess = (response) => {
    console.log("Payment Success:", response);
    toast.success("payment Successfull..Submition in progress");
    handleDownloadPDF();
    handleSubmit(); // Submit the form data after successful payment
  };

  const handlePaymentError = (response) => {
    console.error("Payment Error:", response);
    toast.error("Payment failed. Please try again.");
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="p-8 bg-transparent min-h-screen"
      >
        <h1 className="text-3xl font-bold text-cyan-500 text-center mb-8">
          Business Name Registration Form
        </h1>

        {currentStage === 1 && (
          <div className="grid gap-4 md:gap-8">
            {" "}
            <BusinessDetails
              formData={formData}
              onChange={handleInputChange}
              setDisableNext={setDisableNext}
            />
            <BusinessAddress
              formData={formData}
              onChange={handleInputChange}
              setDisableNext={setDisableNext}
            />
          </div>
        )}
        {currentStage === 2 && (
          <div className="grid gap-4 md:gap-8">
            <ProprietorInfo
              formData={formData}
              onChange={handleInputChange}
              setDisableNext={setDisableNext}
            />
            <ProprietorAddress
              formData={formData}
              onChange={handleInputChange}
              setDisableNext={setDisableNext}
            />
          </div>
        )}

        {currentStage === 3 && (
          <ProprietorDocuments
            formData={formData}
            onFileUpload={handleFileUpload}
            setDisableNext={setDisableNext}
          />
        )}
        {currentStage === 4 && (
          <div className="bg-gray-50 p-4 justify-center place-items-center">
            <h2 className="text-xl font-semibold mb-4 mt-8 text-center text-gray-800">
              Review & Submit
            </h2>

            {/* Displaying the form data dynamically */}
            <div className="space-y-4">
              {/* Business Details */}
              <div>
                <h3 className="font-semibold">Business Details</h3>
                <p>
                  <strong>Business Name Option 1:</strong>{" "}
                  {formData.businessDetails.businessNameOption1}
                </p>
                <p>
                  <strong>Business Name Option 2:</strong>{" "}
                  {formData.businessDetails.businessNameOption2}
                </p>
                <p>
                  <strong>Business Activity:</strong>{" "}
                  {formData.businessDetails.businessActivity}
                </p>
                <p>
                  <strong>Business Phone:</strong>{" "}
                  {formData.businessDetails.businessPhone}
                </p>
                <p>
                  <strong>Business Email:</strong>{" "}
                  {formData.businessDetails.businessEmail}
                </p>
              </div>

              {/* Business Address */}
              <div>
                <h3 className="font-semibold">Business Address</h3>
                <p>
                  <strong>State:</strong> {formData.businessAddress.state}
                </p>
                <p>
                  <strong>LGA:</strong> {formData.businessAddress.lga}
                </p>
                <p>
                  <strong>City:</strong> {formData.businessAddress.city}
                </p>
                <p>
                  <strong>Post Code:</strong>{" "}
                  {formData.businessAddress.postCode}
                </p>
                <p>
                  <strong>Street Name:</strong>{" "}
                  {formData.businessAddress.streetName}
                </p>
                <p>
                  <strong>Building Number:</strong>{" "}
                  {formData.businessAddress.buildingNumber}
                </p>
              </div>

              {/* Proprietor Info */}
              <div>
                <h3 className="font-semibold">Proprietor Info</h3>
                <p>
                  <strong>Surname:</strong> {formData.proprietorInfo.surname}
                </p>
                <p>
                  <strong>First Name:</strong>{" "}
                  {formData.proprietorInfo.firstName}
                </p>
                <p>
                  <strong>Middle Name:</strong>{" "}
                  {formData.proprietorInfo.middleName}
                </p>
                <p>
                  <strong>Gender:</strong> {formData.proprietorInfo.gender}
                </p>
                <p>
                  <strong>Occupation:</strong>{" "}
                  {formData.proprietorInfo.occupation}
                </p>
                <p>
                  <strong>Date of Birth:</strong>{" "}
                  {formData.proprietorInfo.dateOfBirth}
                </p>
                <p>
                  <strong>Nationality:</strong>{" "}
                  {formData.proprietorInfo.nationality}
                </p>
                <p>
                  <strong>Phone Number:</strong>{" "}
                  {formData.proprietorInfo.phoneNumber}
                </p>
                <p>
                  <strong>Email:</strong> {formData.proprietorInfo.email}
                </p>
                <p>
                  <strong>ID Type:</strong> {formData.proprietorInfo.idType}
                </p>
                <p>
                  <strong>ID Number:</strong> {formData.proprietorInfo.idNumber}
                </p>
              </div>

              {/* Proprietor Address */}
              <div>
                <h3 className="font-semibold">Proprietor Address</h3>
                <p>
                  <strong>Country:</strong> {formData.proprietorAddress.country}
                </p>
                <p>
                  <strong>State:</strong> {formData.proprietorAddress.state}
                </p>
                <p>
                  <strong>LGA:</strong> {formData.proprietorAddress.lga}
                </p>
                <p>
                  <strong>City:</strong> {formData.proprietorAddress.city}
                </p>
                <p>
                  <strong>Post Code:</strong>{" "}
                  {formData.proprietorAddress.postCode}
                </p>
                <p>
                  <strong>Street Name:</strong>{" "}
                  {formData.proprietorAddress.streetName}
                </p>
                <p>
                  <strong>House Number:</strong>{" "}
                  {formData.proprietorAddress.houseNumber}
                </p>
              </div>

              {/* Documents */}
              <div>
                <h3 className="font-semibold">Documents</h3>
                <p>
                  <strong>Valid ID:</strong>{" "}
                  {formData.documents.validId ? "Uploaded" : "Not Uploaded"}
                </p>
                <p>
                  <strong>Passport Photo:</strong>{" "}
                  {formData.documents.passportPhoto
                    ? "Uploaded"
                    : "Not Uploaded"}
                </p>
                <p>
                  <strong>Signature:</strong>{" "}
                  {formData.documents.signature ? "Uploaded" : "Not Uploaded"}
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-300 rounded-lg p-4 my-6 shadow-md">
                <h2 className="text-lg font-semibold text-blue-800 mb-2">
                  Payment Confirmation
                </h2>
                <p className="text-gray-700">
                  You are about to pay the sum of{" "}
                  <span className="font-bold text-blue-600">
                    28,000 Naira only
                  </span>{" "}
                  for your Business Name registration with the details you
                  provided above.
                </p>
                <p className="text-gray-700 mt-2">
                  Please review your details carefully before proceeding to
                  payment.
                </p>
                <p>
                  <span>Note:</span> This form pdf Would be auto downloaded to
                  your device after a successful payment.
                </p>
              </div>
            </div>

            <button
              className="text-center mt-8 bg-blue-500 text-gray-50 px-4 py-2 rounded hover:bg-gray-800"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span>
                  {" "}
                  <span className="loading loading-bars"></span> Submitting...
                </span>
              ) : (
                <PaystackButton
                  text="Make Payment and Submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                  {...paystackConfig}
                  onSuccess={handlePaymentSuccess}
                  onClose={handlePaymentError}
                />
              )}
            </button>
            {isSubmitting && (
              <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
                <div className="text-center">
                  <span className="loading loading-spinner loading-lg text-white"></span>
                  <p className="text-white mt-4 font-bold">
                    Submitting your form, please wait...
                  </p>
                </div>
              </div>
            )}
            {isSubmissionSuccessful && (
              <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="flex items-center justify-center mb-4">
                    <svg
                      className="w-16 h-16 text-white animate-bounce"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold">Submission Successful!</h2>
                  <p className="mt-2">
                    Your form has been submitted successfully. Thank you!
                  </p>
                  <button
                    className="text-center mt-8 bg-green-500 text-gray-50 px-4 py-2 rounded hover:bg-green-700"
                    onClick={handleDownloadPDF}
                  >
                    Download as PDF
                  </button>
                  <Link
                    className="btn bg-gray-800 text-white my-8"
                    to="/ongoing_orders"
                  >
                    Check Orders
                  </Link>
                  <div className="flex flex-col items-center justify-center bg-green-50 border border-green-300 rounded-lg p-8 my-6 shadow-lg w-full max-w-md mx-auto animate-fadeIn">
                    <div className="flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
                      <svg
                        className="w-16 h-16 text-green-600 animate-bounce"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-semibold text-green-800 mb-4">
                      Payment Successful!
                    </h2>
                    <p className="text-gray-700 text-center">
                      Your payment of{" "}
                      <span className="font-bold text-green-600">
                        28,000 Naira
                      </span>{" "}
                      has been received successfully. Your Business Name
                      registration form has been submitted. Thank you for
                      trusting us!
                    </p>
                    <h2 className="font-bold text-blue-600">
                      Check your ongoing orders for status
                    </h2>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="flex justify-between mt-4">
          {currentStage > 1 && (
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded"
              onClick={previousStage}
            >
              Previous
            </button>
          )}
          {currentStage < 4 && (
            <button
              className={`bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded ${
                disableNext ? "opacity-80 md:opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={nextStage}
              disabled={disableNext}
            >
              Next
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default MultiStageForm;
