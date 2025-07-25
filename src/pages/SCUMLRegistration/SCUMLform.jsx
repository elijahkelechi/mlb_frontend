import React, { useState } from "react";
import bgImage from "../../assets/formImage.webp";
import { customFetch } from "../../utils";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { jsPDF } from "jspdf";
import { PaystackButton } from "react-paystack";
import { Link } from "react-router";
const SCUMLform = () => {
  const [formData, setFormData] = useState({
    surname: "",
    firstName: "",
    middleName: "",
    phoneNumber: "",
    whatsappNumber: "",
    email: "",
    nin: "",
    bvn: "",
    accountNumber: "",
    accountName: "",
    bankName: "",
    idDocument: null,
    certificateOfIncorporation: null,
    statusReport: null,
    memorandum: null,
    constitution: null,
    tinCertificate: null,
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    // If file input, check file type validation
    if (type === "file") {
      // Get file extension for validation
      const file = files[0];
      const fileExtension = file?.name.split(".").pop().toLowerCase();

      // Validate file types based on the document
      if (name === "idDocument" || name === "tinCertificate") {
        // Allow PDF and Image files for Director Valid ID and TIN Certificate
        if (!["pdf", "jpg", "jpeg", "png", "gif"].includes(fileExtension)) {
          toast.error("Invalid file type. Please upload a valid image or PDF.");
          return; // Exit function if invalid file
        }
      } else {
        // Only allow PDF files for other documents
        if (fileExtension !== "pdf") {
          toast.error("Invalid file type. Please upload a PDF file.");
          return; // Exit function if invalid file
        }
      }

      // If validation passes, update the form data
      setFormData({ ...formData, [name]: file });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);
  const [disableBtn, setDisableBtn] = useState(true);
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
    doc.text("SCUML Registration Form(powered by MLB)", margin, yOffset);
    yOffset += lineHeight * 2;

    // Iterate through formData fields
    Object.keys(formData).forEach((key) => {
      const fieldLabel = key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase()); // Format field name
      let fieldValue = formData[key];

      if (fieldValue instanceof File) {
        fieldValue = fieldValue.name; // Display the file name
      } else if (typeof fieldValue === "boolean") {
        fieldValue = fieldValue ? "Yes" : "No"; // Display checkbox values as Yes/No
      } else if (!fieldValue) {
        fieldValue = "N/A"; // Handle empty fields
      }

      // Add Section Header
      doc.setFontSize(sectionFontSize);
      doc.text(`${fieldLabel}:`, margin, yOffset);
      yOffset += lineHeight;

      // Add Field Value
      doc.setFontSize(contentFontSize);
      doc.text(`${fieldValue}`, margin + 10, yOffset);
      yOffset += lineHeight;

      // Add a page break if content overflows
      if (yOffset > 280) {
        doc.addPage();
        yOffset = margin;
      }
    });

    // Save the PDF
    doc.save("SCUML_Form.pdf");
  };

  const handleSubmit = async () => {
    setIsSubmitting(true); // Ensure this is always set regardless of the terms
    setIsSubmissionSuccessful(false); // Reset successful submission state

    try {
      const response = await customFetch.post("/SCUMLform/submit", formData, {
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

  const isFormValid = () => {
    // Check if all required fields are filled and documents are uploaded
    return (
      formData.surname &&
      formData.firstName &&
      formData.middleName &&
      formData.phoneNumber &&
      formData.whatsappNumber &&
      formData.email &&
      formData.nin &&
      formData.bvn &&
      formData.accountNumber &&
      formData.accountName &&
      formData.bankName &&
      formData.idDocument &&
      formData.certificateOfIncorporation &&
      formData.statusReport &&
      formData.tinCertificate &&
      formData.termsAccepted
    );
  };

  const paystackConfig = {
    email: formData.email, // Default to user email if proprietor email is unavailable
    amount: 40000 * 100, // Paystack requires amount in kobo
    publicKey: "pk_live_1e16875ee44434a99e327eb8e7835abffd03ecfb", // Replace with your actual Paystack public key
  };

  const handlePaymentSuccess = (response) => {
    console.log("Payment Success:", response);
    toast.success("Payment Successful. Submission in progress...");
    setIsSubmitting(true);
    handleDownloadPDF();
    handleSubmit();
  };

  const handlePaymentError = (response) => {
    console.error("Payment Error:", response);
    toast.error("Payment failed. Please try again.");
  };
  return (
    <div
      className="pt-8 bg-cover bg-center min-h-screen pb-8"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-white bg-opacity-90 p-8  rounded shadow-md max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          SCUML REGISTRATION
        </h1>
        <p className="text-gray-600 my-4 text-center">
          Registration cost is ₦40,000.only
        </p>
        <p className="text-gray-600 mb-4 text-center">
          All fields marked * are required.
        </p>

        {/* Organization Contact Person */}
        <h2 className="text-xl font-medium">Organization Contact Person</h2>
        <h3 className="text-lg  mb-2 font-bold">
          Proprietor or Director or Trustee details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <label htmlFor="surname" className="block text-gray-500 mb-1">
              Surname *
            </label>
            <input
              type="text"
              name="surname"
              placeholder="Enter your surname"
              value={formData.surname}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
          </div>

          <div className="relative">
            <label htmlFor="firstName" className="block text-gray-500 mb-1">
              First Name *
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
          </div>

          <div className="relative">
            <label htmlFor="middleName" className="block text-gray-500 mb-1">
              Middle Name *
            </label>
            <input
              type="text"
              name="middleName"
              placeholder="Enter your middle name"
              value={formData.middleName}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
          </div>

          <div className="relative">
            <label htmlFor="phoneNumber" className="block text-gray-500 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
          </div>

          <div className="relative">
            <label
              htmlFor="whatsappNumber"
              className="block text-gray-500 mb-1"
            >
              WhatsApp Number *
            </label>
            <input
              type="tel"
              name="whatsappNumber"
              placeholder="Enter your WhatsApp number"
              value={formData.whatsappNumber}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
          </div>

          <div className="relative">
            <label htmlFor="email" className="block text-gray-500 mb-1">
              Email *
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
          </div>

          <div className="relative">
            <label htmlFor="nin" className="block text-gray-500 mb-1">
              NIN *
            </label>
            <input
              type="text"
              name="nin"
              placeholder="Enter your NIN"
              value={formData.nin}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
          </div>

          <div className="relative">
            <label htmlFor="bvn" className="block text-gray-500 mb-1">
              BVN *
            </label>
            <input
              type="text"
              name="bvn"
              placeholder="Enter your BVN"
              value={formData.bvn}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
          </div>
        </div>
        {/* Bank Account Details */}
        <h2 className="text-xl font-medium mb-2 my-6">Bank Account Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <label htmlFor="accountNumber" className="block text-gray-500 mb-1">
              Account Number *
            </label>
            <input
              type="text"
              name="accountNumber"
              placeholder="Enter your account number"
              value={formData.accountNumber}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
          </div>

          <div className="relative">
            <label htmlFor="accountName" className="block text-gray-500 mb-1">
              Account Name *
            </label>
            <input
              type="text"
              name="accountName"
              placeholder="Enter your account name"
              value={formData.accountName}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
          </div>

          <div className="relative">
            <label htmlFor="bankName" className="block text-gray-500 mb-1">
              Bank Name *
            </label>
            <input
              type="text"
              name="bankName"
              placeholder="Enter your bank name"
              value={formData.bankName}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
          </div>
        </div>

        {/* Upload Documents */}
        <h2 className="text-xl font-medium mb-2 my-8">Upload Documents</h2>
        <div className="space-y-2">
          <div>
            <label className="block text-gray-600 mb-1">Valid ID *</label>
            <input
              type="file"
              name="idDocument"
              onChange={handleChange}
              className="p-2 border rounded w-full"
              accept="application/pdf,image/*" // Allow PDF and images
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">
              Certificate of Incorporation *
            </label>
            <input
              type="file"
              name="certificateOfIncorporation"
              onChange={handleChange}
              className="p-2 border rounded w-full"
              accept="application/pdf" // Allow only PDF
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Status Report *</label>
            <input
              type="file"
              name="statusReport"
              onChange={handleChange}
              className="p-2 border rounded w-full"
              accept="application/pdf" // Allow only PDF
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">
              Memorandum and Articles of Association (for LTD Registrations
              only)
            </label>
            <input
              type="file"
              name="memorandum"
              onChange={handleChange}
              className="p-2 border rounded w-full"
              accept="application/pdf" // Allow only PDF
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">
              Constitution (for NGO/Association Registration only)
            </label>
            <input
              type="file"
              name="constitution"
              onChange={handleChange}
              className="p-2 border rounded w-full"
              accept="application/pdf" // Allow only PDF
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">
              TIN Certificate *
            </label>
            <input
              type="file"
              name="tinCertificate"
              onChange={handleChange}
              className="p-2 border rounded w-full"
              accept="application/pdf,image/*" // Allow PDF and images
              required
            />
          </div>
        </div>
        <div class="p-4 mt-4 bg-yellow-100 text-yellow-800 border-l-4 border-yellow-500 rounded-lg shadow-md text-sm">
          <p class="font-medium">
            Note:{" "}
            <span class="font-normal">
              Form would be submitted automatically on successful payment.
            </span>
          </p>
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            required
          />
          <label className="text-gray-600 my-4">
            I agree to the terms and conditions *
          </label>
        </div>
        {/* Warning Message */}
        {!formData.termsAccepted && (
          <p className="text-red-600 mb-4">
            You must agree to the terms and conditions to proceed.
          </p>
        )}

        {/* Submit */}

        {/* Submit */}
        <PaystackButton
          text="Proceed to Payment"
          className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 ${
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
                  <span className="font-bold text-green-600">40,500 Naira</span>{" "}
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
      </div>
    </div>
  );
};

export default SCUMLform;
