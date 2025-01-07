import React, { useEffect, useState } from "react";

const CompanyInformation = ({ formData, onChange, setDisableNext }) => {
  const { state, lga, city, postCode, streetName, houseNumber } =
    formData.companyAddress;
  const {
    businessNameOption1,
    businessNameOption2,
    nominalShare,
    businessPhone,
    businessEmail,
    businessActivity,
    otherBusinessActivities,
  } = formData.company;

  // Validate fields to enable/disable "Next" button
  useEffect(() => {
    const isValid =
      businessNameOption1?.trim() &&
      businessNameOption2?.trim() &&
      nominalShare?.trim() &&
      businessPhone?.trim() &&
      businessEmail?.trim() &&
      businessActivity?.trim() &&
      otherBusinessActivities?.trim() &&
      state?.trim() &&
      lga?.trim() &&
      city?.trim() &&
      // postCode?.trim() &&
      streetName?.trim() &&
      houseNumber?.trim();

    console.log("Validation Result:", isValid); // Debugging
    setDisableNext(!isValid);
  }, [
    businessNameOption1,
    businessNameOption2,
    nominalShare,
    businessPhone,
    businessEmail,
    businessActivity,
    otherBusinessActivities,
    state,
    lga,
    city,
    // postCode,
    streetName,
    houseNumber,
    setDisableNext,
  ]);
  const states = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
    "Federal Capital Territory",
  ];

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
    <div>
      {/* Company Information Section */}
      <div className="flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Stage 1 - Company Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Company Name Option 1 *</label>
              <input
                className="border p-2 rounded w-full"
                type="text"
                value={businessNameOption1}
                onChange={(e) =>
                  onChange("company", "businessNameOption1", e.target.value)
                }
              />
            </div>

            <div>
              <label className="block mb-1">Company Name Option 2 *</label>
              <input
                className="border p-2 rounded w-full"
                type="text"
                value={businessNameOption2}
                onChange={(e) =>
                  onChange("company", "businessNameOption2", e.target.value)
                }
              />
            </div>

            <div>
              <label className="block mb-1">Company Nominal Share *</label>
              <input
                className="border p-2 rounded w-full"
                type="text"
                value={nominalShare}
                onChange={(e) =>
                  onChange("company", "nominalShare", e.target.value)
                }
              />
            </div>

            <div>
              <label className="block mb-1">Company Phone Number *</label>
              <input
                type="text"
                value={businessPhone}
                onChange={(e) => {
                  onChange("company", "businessPhone", e.target.value);
                  validatePhone(e.target.value);
                }}
                className={`w-full p-2 border rounded ${
                  phoneError ? "border-red-500" : "border-gray-300"
                }`}
              />
              {phoneError && (
                <p className="text-red-500 text-sm mt-1">{phoneError}</p>
              )}
            </div>

            <div>
              <label className="block mb-1">Company Email *</label>
              <input
                type="email"
                value={businessEmail}
                onChange={(e) => {
                  onChange("company", "businessEmail", e.target.value);
                  validateEmail(e.target.value);
                }}
                className={`w-full p-2 border rounded ${
                  emailError ? "border-red-500" : "border-gray-300"
                }`}
              />
              {emailError && (
                <p className="text-red-500 text-sm mt-1">{emailError}</p>
              )}
            </div>

            <div>
              <label className="block mb-1">
                Principal Business Activity *
              </label>
              <input
                className="border p-2 rounded w-full"
                type="text"
                value={businessActivity}
                onChange={(e) =>
                  onChange("company", "businessActivity", e.target.value)
                }
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-1">Other Business Activities *</label>
              <textarea
                className="border p-2 rounded w-full"
                value={otherBusinessActivities}
                onChange={(e) =>
                  onChange("company", "otherBusinessActivities", e.target.value)
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Company Address Section */}
      <div className="flex items-center justify-center bg-gray-50 mt-6">
        <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Company Address
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">State *</label>
              {states ? (
                <select
                  id="state"
                  value={state}
                  onChange={(e) =>
                    onChange("companyAddress", "state", e.target.value)
                  }
                  className="w-full p-2 border rounded"
                >
                  {states.map((stateName) => (
                    <option key={stateName} value={stateName}>
                      {stateName}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  className="border p-2 rounded w-full"
                  type="text"
                  value={state}
                  onChange={(e) =>
                    onChange("companyAddress", "state", e.target.value)
                  }
                />
              )}
            </div>

            <div>
              <label className="block mb-1">L.G.A *</label>
              <input
                className="border p-2 rounded w-full"
                type="text"
                value={lga}
                onChange={(e) =>
                  onChange("companyAddress", "lga", e.target.value)
                }
              />
            </div>

            <div>
              <label className="block mb-1">City/Town *</label>
              <input
                className="border p-2 rounded w-full"
                type="text"
                value={city}
                onChange={(e) =>
                  onChange("companyAddress", "city", e.target.value)
                }
              />
            </div>

            <div>
              <label className="block mb-1">Post Code(optional)</label>
              <input
                className="border p-2 rounded w-full"
                type="text"
                value={postCode}
                onChange={(e) =>
                  onChange("companyAddress", "postCode", e.target.value)
                }
              />
            </div>

            <div>
              <label className="block mb-1">Street Name *</label>
              <input
                className="border p-2 rounded w-full"
                type="text"
                value={streetName}
                onChange={(e) =>
                  onChange("companyAddress", "streetName", e.target.value)
                }
              />
            </div>

            <div>
              <label className="block mb-1">House Number *</label>
              <input
                className="border p-2 rounded w-full"
                type="text"
                value={houseNumber}
                onChange={(e) =>
                  onChange("companyAddress", "houseNumber", e.target.value)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInformation;
