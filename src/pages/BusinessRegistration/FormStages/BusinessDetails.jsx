import React, { useEffect } from "react";

const BusinessDetails = ({ formData, onChange, setDisableNext }) => {
  const {
    businessNameOption1,
    businessNameOption2,
    businessActivity,
    businessPhone,
    businessEmail,
  } = formData.businessDetails;

  // Validate fields to enable/disable "Next" button
  useEffect(() => {
    const isValid =
      businessNameOption1 &&
      businessNameOption2 &&
      businessActivity &&
      businessPhone &&
      businessEmail;
    setDisableNext(!isValid);
  }, [
    businessNameOption1,
    businessNameOption2,
    businessActivity,
    businessPhone,
    businessEmail,
    setDisableNext,
  ]);
  // State for error messages
  const [phoneError, setPhoneError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");

  // Phone number validation
  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10,15}$/; // Adjust for your requirements
    if (!phone) {
      setPhoneError("Phone number is required.");
    } else if (!phoneRegex.test(phone)) {
      setPhoneError("Enter a valid phone number (10-15 digits).");
    } else {
      setPhoneError("");
    }
  };

  // Email validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("Email is required.");
    } else if (!emailRegex.test(email)) {
      setEmailError("Enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Business Details</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="businessNameOption1" className="block font-medium">
            Business Name Option 1*
          </label>
          <input
            id="businessNameOption1"
            type="text"
            placeholder="Business Name Option 1*"
            value={businessNameOption1}
            onChange={(e) =>
              onChange("businessDetails", "businessNameOption1", e.target.value)
            }
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="businessNameOption2" className="block font-medium">
            Business Name Option 2*
          </label>
          <input
            id="businessNameOption2"
            type="text"
            placeholder="Business Name Option 2*"
            value={businessNameOption2}
            onChange={(e) =>
              onChange("businessDetails", "businessNameOption2", e.target.value)
            }
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="businessActivity" className="block font-medium">
            General Nature of Business*
          </label>
          <textarea
            id="businessActivity"
            type="text"
            placeholder="General Nature of Business*"
            value={businessActivity}
            onChange={(e) =>
              onChange("businessDetails", "businessActivity", e.target.value)
            }
            className="w-full p-2 size-32 border rounded"
          />
        </div>
        <div>
          <label htmlFor="businessPhone" className="block font-medium">
            Business Phone Number*
          </label>
          <input
            id="businessPhone"
            type="text"
            placeholder="Business Phone Number*"
            value={businessPhone}
            onChange={(e) => {
              onChange("businessDetails", "businessPhone", e.target.value);
              validatePhone(e.target.value); // Trigger validation
            }}
            className={`w-full p-2 border rounded ${
              phoneError ? "border-red-500" : "border-gray-300"
            }`}
          />
          {phoneError && (
            <p className="text-red-500 text-sm mt-1">{phoneError}</p>
          )}
        </div>
        <div className="mt-4">
          <label htmlFor="businessEmail" className="block font-medium">
            Business Email*
          </label>
          <input
            id="businessEmail"
            type="email"
            placeholder="Business Email*"
            value={businessEmail}
            onChange={(e) => {
              onChange("businessDetails", "businessEmail", e.target.value);
              validateEmail(e.target.value); // Trigger validation
            }}
            className={`w-full p-2 border rounded ${
              emailError ? "border-red-500" : "border-gray-300"
            }`}
          />
          {emailError && (
            <p className="text-red-500 text-sm mt-1">{emailError}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
