import React, { useState } from "react";
import { customFetch } from "../../utils";
import { toast } from "react-toastify";
import { PaystackButton } from "react-paystack";
import { Link } from "react-router";
const FIRS = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    whatsapp: "",
    entityName: "",
    registrationNumber: "",
    natureOfBusiness: "",
    businessPhone: "",
    registrationType: "",
    registrationCategory: "",
    validID: null,
    certificate: null,
    statusReport: null,
    memorandum: null,
    constitution: null,
  });

  const [cost, setCost] = useState(0); // State to store the calculated cost

  // Define costMapping here
  const costMapping = {
    "Tax Promax Registration for Entities without TIN": {
      "Business Name": 15000,
      "Limited Liability Company": 20000,
      "Incorporated Trustee": 20000,
    },
    "TIN Validation/Tax Promax for Entities with TIN": {
      "Business Name": 20000,
      "Limited Liability Company": 25000,
      "Incorporated Trustee": 25000,
    },
  };

  // Updated calculateCost function
  const calculateCost = (data) => {
    const { registrationCategory, registrationType } = data;
    const categoryCosts = costMapping[registrationCategory] || {};
    setCost(categoryCosts[registrationType] || 0);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    // Update formData and calculate cost using the updated formData
    const updatedData = { ...formData, [id]: value };
    setFormData(updatedData);

    if (id === "registrationCategory" || id === "registrationType") {
      calculateCost(updatedData); // Pass updated data to calculateCost
    }
  };

  const handleFileChange = (e) => {
    const { id, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: files[0],
    }));
  };
  const paystackConfig = {
    email: formData.email, // Default to user email if proprietor email is unavailable
    amount: cost * 100, // Paystack requires amount in kobo
    publicKey: "pk_test_fa21cc6e09d2b11d0309361ba8996f55d18742f6", // Replace with your actual Paystack public key
  };
  const handlePaymentSuccess = (response) => {
    console.log("Payment Success:", response);
    toast.success("Payment Successful. Submission in progress...");
    setIsSubmitting(true);
    // handleDownloadPDF();
    handleSubmit();
  };

  const handlePaymentError = (response) => {
    console.error("Payment Error:", response);
    toast.error("Payment failed. Please try again.");
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);
  const handleSubmit = async () => {
    setIsSubmitting(true); // Ensure this is always set regardless of the terms
    setIsSubmissionSuccessful(false); // Reset successful submission state

    try {
      const response = await customFetch.post("/FIRSform/submit", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      setIsSubmissionSuccessful(true);
      // handleDownloadPDF();
      console.log("submitted");
      toast.success("Form submitted successfully");
      console.log(response);
    } catch (error) {
      if (error?.response?.data?.msg === "invalid authentication") {
        toast.error("Please login");
      } else {
        toast.error(error?.response?.data?.msg || "Failed to submit form");
      }
      console.log(error);
    } finally {
      setIsSubmitting(false); // Ensure `isSubmitting` is reset after the process
    }
  };
  const isFormValid = () => {
    const requiredFields = [
      "fullName",
      "email",
      "phone",
      "whatsapp",
      "entityName",
      "registrationNumber",
      "natureOfBusiness",
      "businessPhone",
      "registrationType",
      "registrationCategory",
      "validID",
      "certificate",
      "statusReport",
    ];

    for (let field of requiredFields) {
      if (!formData[field]) {
        return false; // Form is not valid
      }
    }
    return true; // Form is valid
  };

  return (
    <div className="my-6 mt-8 max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        FIRS TIN Registration
      </h1>

      {/* Contact Person Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Contact Person</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter phone number"
            />
          </div>
          <div>
            <label
              htmlFor="whatsapp"
              className="block text-sm font-medium mb-2"
            >
              WhatsApp Number
            </label>
            <input
              type="tel"
              id="whatsapp"
              value={formData.whatsapp}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter WhatsApp number"
            />
          </div>
        </div>
      </section>

      {/* Business Details Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Business Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="entityName"
              className="block text-sm font-medium mb-2"
            >
              Entity Name
            </label>
            <input
              type="text"
              id="entityName"
              value={formData.entityName}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter entity name"
            />
          </div>
          <div>
            <label
              htmlFor="registrationNumber"
              className="block text-sm font-medium mb-2"
            >
              Registration Number
            </label>
            <input
              type="text"
              id="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter registration number"
            />
          </div>
          <div>
            <label
              htmlFor="natureOfBusiness"
              className="block text-sm font-medium mb-2"
            >
              General Nature of Business
            </label>
            <input
              type="text"
              id="natureOfBusiness"
              value={formData.natureOfBusiness}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter nature of business"
            />
          </div>
          <div>
            <label
              htmlFor="businessPhone"
              className="block text-sm font-medium mb-2"
            >
              Business Phone Number
            </label>
            <input
              type="tel"
              id="businessPhone"
              value={formData.businessPhone}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter business phone number"
            />
          </div>
          <div>
            <label
              htmlFor="registrationCategory"
              className="block text-sm font-medium mb-2"
            >
              Registration Category
            </label>
            <select
              id="registrationCategory"
              value={formData.registrationCategory}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select registration category</option>
              <option value="Tax Promax Registration for Entities without TIN">
                Tax Promax Registration for Entities without TIN
              </option>
              <option value="TIN Validation/Tax Promax for Entities with TIN">
                TIN Validation/Tax Promax for Entities with TIN
              </option>
            </select>
          </div>
          <div>
            <label
              htmlFor="registrationType"
              className="block text-sm font-medium mb-2"
            >
              Registration Type
            </label>
            <select
              id="registrationType"
              value={formData.registrationType}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select registration type</option>
              <option value="Business Name">Business Name</option>
              <option value="Limited Liability Company">
                Limited Liability Company
              </option>
              <option value="Incorporated Trustee">Incorporated Trustee</option>
            </select>
          </div>
        </div>
      </section>
      {/* Cost Display */}
      <div className="mb-8 justify-center text-center">
        <h2 className="text-lg font-semibold mb-2">Registration Cost</h2>
        <p className="text-lg md:text-2xl text-blue-600 font-bold ">
          ₦{cost.toLocaleString()}
        </p>
      </div>
      {/* Document Upload Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Document Upload</h2>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="validID" className="block text-sm font-medium mb-2">
              Valid ID (PDF/PNG)
            </label>
            <input
              type="file"
              id="validID"
              onChange={handleFileChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              accept=".pdf, .png"
            />
          </div>
          <div>
            <label
              htmlFor="certificate"
              className="block text-sm font-medium mb-2"
            >
              Certificate of Incorporation
            </label>
            <input
              type="file"
              id="certificate"
              onChange={handleFileChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              accept=".pdf, .png"
            />
          </div>
          <div>
            <label
              htmlFor="statusReport"
              className="block text-sm font-medium mb-2"
            >
              Status Report
            </label>
            <input
              type="file"
              id="statusReport"
              onChange={handleFileChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              accept=".pdf, .png"
            />
          </div>
          <div>
            <label
              htmlFor="memorandum"
              className="block text-sm font-medium mb-2"
            >
              Memorandum and Articles of Association (Optional for LTD)
            </label>
            <input
              type="file"
              id="memorandum"
              onChange={handleFileChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              accept=".pdf, .png"
            />
          </div>
          <div>
            <label
              htmlFor="constitution"
              className="block text-sm font-medium mb-2"
            >
              Constitution (Optional for Incorporated Trustee)
            </label>
            <input
              type="file"
              id="constitution"
              onChange={handleFileChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              accept=".pdf, .png"
            />
          </div>
        </div>
      </section>
      <p class="text-gray-800 font-medium">
        Note:
        <span class="block text-sm text-gray-600 mt-1">
          Form is auto-submitted on successful payment. Please do not distract
          the process after payment.
        </span>
      </p>

      <PaystackButton
        text="Proceed to Payment"
        className={`bg-blue-500 w-full text-white px-4 py-2 rounded hover:bg-blue-700 ${
          !isFormValid() ? "cursor-not-allowed opacity-50" : ""
        }`}
        {...paystackConfig}
        onSuccess={handlePaymentSuccess}
        onClose={handlePaymentError}
        disabled={!isFormValid()}
      />
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
            {/* <button
              className="mx-4 md:mx-8 text-center mt-8 bg-green-500 text-gray-50 px-4 py-2 rounded hover:bg-green-700"
              onClick={handleDownloadPDF}
            >
              Download as PDF
            </button> */}
            <Link
              className="mr-4 md:mr-8 btn bg-gray-800 text-white my-8"
              to="/ongoing_orders"
            >
              Check Orders
            </Link>
            <button
              className="btn bg-green-600 text-white my-8"
              onClick={() => setIsSubmissionSuccessful(false)}
            >
              Close
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
                <span className="font-bold text-green-600">10,000 Naira</span>{" "}
                has been received successfully. Your JBT TIN registration form
                has been submitted. Thank you for trusting us!
              </p>
              <h2 className="font-bold text-blue-600">
                Check your ongoing orders for status
              </h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FIRS;
