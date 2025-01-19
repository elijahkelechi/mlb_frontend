import React, { useState } from "react";
import { motion } from "framer-motion";
import CompanyInformation from "./FormStages/CompanyInformation";
import DirectorInfo from "./FormStages/DirectorInfo";
import ShareholderInfo from "./FormStages/ShareholderInfo";
import SecretaryInfo from "./FormStages/SecretaryInfo";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { PaystackButton } from "react-paystack";
import bgImage from "../../assets/formImage.webp";
import { toast } from "react-toastify";
import { customFetch } from "../../utils";
import { Link } from "react-router";

// Main MultiStageForm Component
const MultiStageForm = () => {
  const [disableNext, setDisableNext] = useState(true); // State to disable/enable Next button
  const [currentStage, setCurrentStage] = useState(1);
  const [formData, setFormData] = useState({
    company: {
      businessNameOption1: "",
      businessNameOption2: "",
      nominalShare: "",
      businessPhone: "",
      businessEmail: "",
      businessActivity: "",
      otherBusinessActivities: "",
    },
    companyAddress: {
      state: "",
      lga: "",
      city: "",
      postCode: "",
      streetName: "",
      houseNumber: "",
    },
    director: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      nationality: "",
      phoneNumber: "",
      email: "",
      idType: "",
      idNumber: "",
    },
    directorAddress: {
      country: "",
      state: "",
      lga: "",
      city: "",
      postalCode: "",
      streetName: "",
      houseNumber: "",
    },
    directorDocuments: {
      directorId: null,
      directorSignature: null,
      directorPassport: null,
    },
    shareholder: {
      firstName: "",
      lastName: "",
      middleName: "",
      dateOfBirth: "",
      gender: "",
      nationality: "",
      phoneNumber: "",
      email: "",
      occupation: "",
      idType: "",
      idNumber: "",
      shareType: "",
      sharePercentage: "",
      shareDivision: "",
    },
    shareholderAddress: {
      country: "",
      state: "",
      lga: "",
      city: "",
      postalCode: "",
      streetName: "",
      houseNumber: "",
    },
    shareholderDocuments: {
      shareholderValidId: null, // Adding the document for valid ID
      shareholderSignature: null, // Adding the document for signature
      shareholderPassport: null, // Adding the document for passport
    },
    secretary: {
      firstName: "",
      lastName: "",
      gender: "",
      dateOfBirth: "",
      nationality: "",
      phoneNumber: "",
      email: "",
      idType: "",
      idNumber: "",
    },
    secretaryAddress: {
      country: "",
      state: "",
      lga: "",
      city: "",
      postalCode: "",
      streetName: "",
      houseNumber: "",
    },
    secretaryDocuments: {
      secretaryValidId: null, // Adding the document for valid ID
      secretarySignature: null, // Adding the document for signature
      secretaryPassport: null, // Adding the document for passport
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Limited Liability Company Registration Form", 20, 20);

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
        } else if (!value) {
          value = "N/A"; // Set default value for empty fields
        }

        doc.setFontSize(12);
        doc.text(`${field.replace(/([A-Z])/g, " $1")}: ${value}`, 20, yOffset);
        yOffset += 10;

        // Add page break if necessary
        if (yOffset > 280) {
          doc.addPage();
          yOffset = 20;
        }
      });
    });

    // Save the PDF
    doc.save("LLC-Registration-Form.pdf");
  };

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

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const formattedData = new FormData();

    // Iterate over each section and field
    Object.keys(formData).forEach((section) => {
      Object.keys(formData[section]).forEach((field) => {
        const value = formData[section][field];

        if (value instanceof File) {
          // Append file inputs only if they exist
          if (value) {
            console.log(`Appending file for: ${section}.${field}`, value);
            formattedData.append(field, value);
          }
        } else if (value !== "" && value !== null) {
          // Append non-file fields only if they are not empty or null
          console.log(
            `Appending field for: ${section}.${field} with value: ${value}`
          );
          formattedData.append(`${section}.${field}`, value);
        }
      });
    });

    try {
      const response = await customFetch.post(
        "/LLCform/submitLLC", // Adjust this URL to your backend API
        formattedData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      handleDownloadPDF();
      console.log("Form Submission Response:", response);
      toast.success("Form submitted successfully");
      setIsSubmissionSuccessful(true);
    } catch (error) {
      console.error("Error during form submission:", error);

      if (error?.response?.data?.msg === "invalid authentication") {
        toast.error("Please log in");
      } else {
        toast.error(error?.response?.data?.msg || "Failed to submit form");
      }
    }

    setIsSubmitting(false);
  };
  const paystackConfig = {
    email: formData.company.businessEmail, // Default to user email if proprietor email is unavailable
    amount: 65000 * 100, // Paystack requires amount in kobo
    publicKey: "pk_live_1e16875ee44434a99e327eb8e7835abffd03ecfb", // Replace with your actual Paystack public key
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
      className={`bg-white relative min-h-screen ${
        window.innerWidth >= 768 ? "bg-cover bg-center" : ""
      }`}
      style={{
        backgroundImage:
          window.innerWidth >= 768 ? `url(${bgImage})` : undefined,
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="p-8 bg-transparent min-h-screen"
      >
        <h1 className="text-3xl font-bold text-cyan-500 text-center mb-8">
          Limited Liability Company Registration Form
        </h1>

        {/* Render the dynamic stages based on currentStage */}
        {currentStage === 1 && (
          <div>
            <CompanyInformation
              formData={formData}
              onChange={handleInputChange}
              setDisableNext={setDisableNext}
            />
          </div>
        )}

        {currentStage === 2 && (
          <div>
            <DirectorInfo
              formData={formData}
              onChange={handleInputChange}
              setDisableNext={setDisableNext}
            />
          </div>
        )}

        {currentStage === 3 && (
          <div>
            <ShareholderInfo
              formData={formData}
              onChange={handleInputChange}
              setDisableNext={setDisableNext}
            />
          </div>
        )}

        {currentStage === 4 && (
          <div>
            <SecretaryInfo
              formData={formData}
              onChange={handleFileUpload}
              setDisableNext={setDisableNext}
            />
          </div>
        )}

        {currentStage === 5 && (
          <div className="bg-gray-50 p-4 justify-center place-items-center">
            <h2 className="text-xl font-semibold mb-4 mt-8 text-center text-gray-800">
              Review & Submit
            </h2>

            {/* Display entered data */}
            <div className="mt-6 p-4 bg-white rounded shadow-md max-w-4xl mx-auto">
              <h3 className="text-lg font-semibold text-gray-700">
                Company Information
              </h3>
              <ul className="list-disc pl-5 mt-2">
                {Object.entries(formData.company).map(([key, value]) => (
                  <li key={key}>
                    <span className="font-medium capitalize">
                      {key.replace(/([A-Z])/g, " $1")}:
                    </span>{" "}
                    {value || "N/A"}
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold text-gray-700 mt-4">
                Company Address
              </h3>
              <ul className="list-disc pl-5 mt-2">
                {Object.entries(formData.companyAddress).map(([key, value]) => (
                  <li key={key}>
                    <span className="font-medium capitalize">
                      {key.replace(/([A-Z])/g, " $1")}:
                    </span>{" "}
                    {value || "N/A"}
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold text-gray-700 mt-4">
                Director Information
              </h3>
              <ul className="list-disc pl-5 mt-2">
                {Object.entries(formData.director).map(([key, value]) => (
                  <li key={key}>
                    <span className="font-medium capitalize">
                      {key.replace(/([A-Z])/g, " $1")}:
                    </span>{" "}
                    {value || "N/A"}
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold text-gray-700 mt-4">
                Director Address
              </h3>
              <ul className="list-disc pl-5 mt-2">
                {Object.entries(formData.directorAddress).map(
                  ([key, value]) => (
                    <li key={key}>
                      <span className="font-medium capitalize">
                        {key.replace(/([A-Z])/g, " $1")}:
                      </span>{" "}
                      {value || "N/A"}
                    </li>
                  )
                )}
              </ul>

              <h3 className="text-lg font-semibold text-gray-700 mt-4">
                Shareholder Information
              </h3>
              <ul className="list-disc pl-5 mt-2">
                {Object.entries(formData.shareholder).map(([key, value]) => (
                  <li key={key}>
                    <span className="font-medium capitalize">
                      {key.replace(/([A-Z])/g, " $1")}:
                    </span>{" "}
                    {value || "N/A"}
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold text-gray-700 mt-4">
                Shareholder Address
              </h3>
              <ul className="list-disc pl-5 mt-2">
                {Object.entries(formData.shareholderAddress).map(
                  ([key, value]) => (
                    <li key={key}>
                      <span className="font-medium capitalize">
                        {key.replace(/([A-Z])/g, " $1")}:
                      </span>{" "}
                      {value || "N/A"}
                    </li>
                  )
                )}
              </ul>

              <h3 className="text-lg font-semibold text-gray-700 mt-4">
                Secretary Information
              </h3>
              <ul className="list-disc pl-5 mt-2">
                {Object.entries(formData.secretary).map(([key, value]) => (
                  <li key={key}>
                    <span className="font-medium capitalize">
                      {key.replace(/([A-Z])/g, " $1")}:
                    </span>{" "}
                    {value || "N/A"}
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold text-gray-700 mt-4">
                Secretary Address
              </h3>
              <ul className="list-disc pl-5 mt-2">
                {Object.entries(formData.secretaryAddress).map(
                  ([key, value]) => (
                    <li key={key}>
                      <span className="font-medium capitalize">
                        {key.replace(/([A-Z])/g, " $1")}:
                      </span>{" "}
                      {value || "N/A"}
                    </li>
                  )
                )}
              </ul>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mt-4">
              Director Documents
            </h3>
            <ul className="list-disc pl-5 mt-2">
              {Object.entries(formData.directorDocuments).map(([key, file]) => (
                <li key={key}>
                  <span className="font-medium capitalize">
                    {key.replace(/([A-Z])/g, " $1")}:
                  </span>{" "}
                  {file ? (
                    file.type.startsWith("image/") ? (
                      <img
                        src={URL.createObjectURL(file)}
                        alt={key}
                        className="mt-2 h-24 w-24 object-cover border rounded"
                      />
                    ) : (
                      <a
                        href={URL.createObjectURL(file)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        {file.name}
                      </a>
                    )
                  ) : (
                    "No file uploaded"
                  )}
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold text-gray-700 mt-4">
              Shareholder Documents
            </h3>
            <ul className="list-disc pl-5 mt-2">
              {Object.entries(formData.shareholderDocuments).map(
                ([key, file]) => (
                  <li key={key}>
                    <span className="font-medium capitalize">
                      {key.replace(/([A-Z])/g, " $1")}:
                    </span>{" "}
                    {file ? (
                      file.type.startsWith("image/") ? (
                        <img
                          src={URL.createObjectURL(file)}
                          alt={key}
                          className="mt-2 h-24 w-24 object-cover border rounded"
                        />
                      ) : (
                        <a
                          href={URL.createObjectURL(file)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          {file.name}
                        </a>
                      )
                    ) : (
                      "No file uploaded"
                    )}
                  </li>
                )
              )}
            </ul>

            <h3 className="text-lg font-semibold text-gray-700 mt-4">
              Secretary Documents
            </h3>
            <ul className="list-disc pl-5 mt-2">
              {Object.entries(formData.secretaryDocuments).map(
                ([key, file]) => (
                  <li key={key}>
                    <span className="font-medium capitalize">
                      {key.replace(/([A-Z])/g, " $1")}:
                    </span>{" "}
                    {file ? (
                      file.type.startsWith("image/") ? (
                        <img
                          src={URL.createObjectURL(file)}
                          alt={key}
                          className="mt-2 h-24 w-24 object-cover border rounded"
                        />
                      ) : (
                        <a
                          href={URL.createObjectURL(file)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          {file.name}
                        </a>
                      )
                    ) : (
                      "No file uploaded"
                    )}
                  </li>
                )
              )}
            </ul>
            <div className="bg-blue-50 border border-blue-300 rounded-lg p-4 my-6 shadow-md">
              <h2 className="text-lg font-semibold text-blue-800 mb-2">
                Payment
              </h2>
              <p className="text-gray-700">
                You are about to pay the sum of{" "}
                <span className="font-bold text-blue-600">
                  65,000 Naira only
                </span>{" "}
                for your Company registration with the details you provided
                above.
              </p>
              <p className="text-gray-700 mt-2">
                Please review your details carefully before proceeding to
                payment.
              </p>
              <p className="my-6">
                <span className="font-semibold">Note:</span> Form would be
                submitted automatically on Successful payment
              </p>
            </div>

            {/* Submit Button */}
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
                  text="Procced to payment"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                  {...paystackConfig}
                  onSuccess={handlePaymentSuccess}
                  onClose={handlePaymentError}
                />
              )}
            </button>
          </div>
        )}
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
              <Link
                className="btn bg-gray-800 text-white my-8 mx-4"
                to="/ongoing_orders"
              >
                Check Orders
              </Link>
              <button
                className="text-center mt-8 bg-green-500 text-gray-50 px-4 py-2 rounded hover:bg-green-700"
                onClick={handleDownloadPDF}
              >
                Download as PDF
              </button>
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
                  <span className="font-bold text-green-600">65,000 Naira</span>{" "}
                  has been received successfully. Your Business Name
                  registration form has been submitted. Thank you for trusting
                  us!
                </p>
                <h2 className="font-bold text-blue-600">
                  Check your ongoing orders for status
                </h2>
              </div>
            </div>
          </div>
        )}

        {/* Navigation buttons */}
        <div className="mt-4 w-full">
          <div className="flex justify-start">
            {" "}
            {currentStage > 1 && (
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded"
                onClick={previousStage}
              >
                Previous
              </button>
            )}
          </div>

          <div className="flex justify-end">
            {currentStage < 5 && (
              <button
                className={`bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded ${
                  disableNext
                    ? "opacity-80 md:opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onClick={nextStage}
                disabled={disableNext}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MultiStageForm;
