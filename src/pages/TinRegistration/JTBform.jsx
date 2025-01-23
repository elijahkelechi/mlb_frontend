import React, { useState } from "react";
import { toast } from "react-toastify";
import { customFetch } from "../../utils";
import { PaystackButton } from "react-paystack";
import { Link } from "react-router";
import { jsPDF } from "jspdf";
const JTBform = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    whatsapp: "",
    businessName: "",
    registrationNumber: "",
    natureOfBusiness: "",
    businessPhone: "",
    validID: null,
    certificate: null,
    statusReport: null,
  });

  const isFormComplete = () => {
    return (
      formData.fullName &&
      formData.email &&
      formData.phone &&
      formData.whatsapp &&
      formData.businessName &&
      formData.registrationNumber &&
      formData.natureOfBusiness &&
      formData.businessPhone &&
      formData.validID &&
      formData.certificate &&
      formData.statusReport
    );
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
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
    amount: 10000 * 100, // Paystack requires amount in kobo
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
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    const titleFontSize = 16;
    const sectionFontSize = 14;
    const contentFontSize = 12;
    const lineHeight = 10;
    const margin = 20;

    let yOffset = margin;

    // Add Title
    doc.setFontSize(titleFontSize);
    doc.text("JBT_TIN Registration Form (powered by MLB)", margin, yOffset);
    yOffset += lineHeight * 2;

    // Prepare readable labels for each form field
    const formLabels = {
      fullName: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      whatsapp: "WhatsApp Number",
      businessName: "Business Name",
      registrationNumber: "Registration Number",
      natureOfBusiness: "Nature of Business",
      businessPhone: "Business Phone Number",
      validID: "Valid ID File",
      certificate: "Certificate of Incorporation",
      statusReport: "Status Report File",
    };

    // Iterate through formData fields and format the output
    Object.keys(formData).forEach((key) => {
      const label = formLabels[key] || key; // Get human-readable label or fallback to key
      let value = formData[key];

      // Format values based on their type
      if (value instanceof File) {
        value = `Uploaded File: ${value.name}`; // Show the uploaded file name
      } else if (!value) {
        value = "N/A"; // Indicate missing data
      }

      // Add Section Header
      doc.setFontSize(sectionFontSize);
      doc.text(`${label}:`, margin, yOffset);
      yOffset += lineHeight;

      // Add Field Value
      doc.setFontSize(contentFontSize);
      doc.text(`${value}`, margin + 10, yOffset);
      yOffset += lineHeight;

      // Add a page break if content overflows
      if (yOffset > 280) {
        doc.addPage();
        yOffset = margin;
      }
    });

    // Save the PDF
    doc.save("JBT_TIN_Form.pdf");
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);
  const handleSubmit = async () => {
    setIsSubmitting(true); // Ensure this is always set regardless of the terms
    setIsSubmissionSuccessful(false); // Reset successful submission state

    try {
      const response = await customFetch.post("/JTBTINform/submit", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      setIsSubmissionSuccessful(true);
      handleDownloadPDF();
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
  return (
    <div className="my-8 p-4 sm:p-6 md:p-8 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">
        JTB TIN Registration{" "}
        <div className="text-lg font-medium">
          Cost: <span>₦10,000</span>
        </div>
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
              htmlFor="businessName"
              className="block text-sm font-medium mb-2"
            >
              Business Name
            </label>
            <input
              type="text"
              id="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter business name"
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
        </div>
      </section>

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
        </div>
      </section>

      <div className="text-center">
        <PaystackButton
          text="Proceed to Payment"
          className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 ${
            !isFormComplete() ? "cursor-not-allowed opacity-50" : ""
          }`}
          {...paystackConfig}
          onSuccess={handlePaymentSuccess}
          onClose={handlePaymentError}
          disabled={!isFormComplete()}
        />
      </div>
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
              className="mx-4 md:mx-8 text-center mt-8 bg-green-500 text-gray-50 px-4 py-2 rounded hover:bg-green-700"
              onClick={handleDownloadPDF}
            >
              Download as PDF
            </button>
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
              <p className="text-gray-700 text-center my-2">
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

export default JTBform;
