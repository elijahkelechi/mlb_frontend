import React, { useEffect } from "react";

const ShareholderInfo = ({ formData, onChange, setDisableNext }) => {
  const { country, state, lga, city, postalCode, streetName, houseNumber } =
    formData.shareholderAddress;
  const { shareholderId, shareholderSignature, shareholderPassport } =
    formData.shareholderDocuments;
  const {
    lastName,
    firstName,
    dateOfBirth,
    gender,
    nationality,
    phoneNumber,
    email,
    idType,
    idNumber,
    sharePercentage,
    occupation,
    shareType,
  } = formData.shareholder;

  useEffect(() => {
    // Check if all required fields are filled and if files are uploaded
    const filesValid =
      (shareholderId && shareholderId.name) ||
      (shareholderSignature && shareholderSignature.name) ||
      (shareholderPassport && shareholderPassport.name);

    const isValid =
      lastName &&
      firstName &&
      dateOfBirth &&
      gender &&
      nationality &&
      phoneNumber &&
      email &&
      idType &&
      idNumber &&
      sharePercentage &&
      country &&
      state &&
      lga &&
      city &&
      // postalCode &&
      streetName &&
      houseNumber &&
      occupation &&
      shareType &&
      filesValid;

    setDisableNext(!isValid); // Disable Next button if the form is invalid
  }, [
    lastName,
    firstName,
    dateOfBirth,
    gender,
    nationality,
    phoneNumber,
    email,
    idType,
    idNumber,
    sharePercentage,
    country,
    state,
    lga,
    city,
    // postalCode,
    streetName,
    houseNumber,
    shareholderId,
    shareholderSignature,
    shareholderPassport,
    occupation,
    shareType,
    setDisableNext,
  ]);

  const handleFileChange = (category, field, file) => {
    onChange(category, field, file); // Ensure the files are correctly handled
  };
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
      <div className="flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Stage 5 - Shareholder Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Surname */}
            <div>
              <label className="block mb-1">Surname *</label>
              <input
                className="border p-2 rounded w-full"
                type="text"
                value={lastName}
                onChange={(e) =>
                  onChange("shareholder", "lastName", e.target.value)
                }
              />
            </div>

            {/* First Name */}
            <div>
              <label className="block mb-1">First Name *</label>
              <input
                className="border p-2 rounded w-full"
                type="text"
                value={firstName}
                onChange={(e) =>
                  onChange("shareholder", "firstName", e.target.value)
                }
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block mb-1">Date of Birth *</label>
              <input
                className="border p-2 rounded w-full"
                type="date"
                value={dateOfBirth}
                onChange={(e) =>
                  onChange("shareholder", "dateOfBirth", e.target.value)
                }
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block mb-1">Gender *</label>
              <select
                className="border p-2 rounded w-full"
                value={gender}
                onChange={(e) =>
                  onChange("shareholder", "gender", e.target.value)
                }
              >
                <option value="">Select...</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            {/* Nationality */}
            <div>
              <label className="block mb-1">Nationality *</label>
              <input
                className="border p-2 rounded w-full"
                type="text"
                value={nationality}
                onChange={(e) =>
                  onChange("shareholder", "nationality", e.target.value)
                }
              />
            </div>
            <div>
              <label className="block mb-1">Occupation *</label>
              <input
                className="border p-2 rounded w-full"
                type="text"
                value={occupation}
                onChange={(e) =>
                  onChange("shareholder", "occupation", e.target.value)
                }
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block mb-1">Phone Number *</label>
              <input
                type="number"
                value={phoneNumber}
                onChange={(e) => {
                  onChange("shareholder", "phoneNumber", e.target.value);
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

            {/* Email */}
            <div>
              <label className="block mb-1">Email *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  onChange("shareholder", "email", e.target.value);
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
              <label htmlFor="idType" className="block font-medium">
                ID Type*
              </label>
              <select
                type="text"
                value={idType}
                onChange={(e) =>
                  onChange("shareholder", "idType", e.target.value)
                }
                className="w-full p-2 border rounded"
              >
                <option value="" disabled>
                  Select ID Type*
                </option>
                <option value="Passport">Passport</option>
                <option value="Driver's License">Driver's License</option>
                <option value="National ID">National ID</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {/* ID Number */}
            <div>
              <label className="block mb-1">ID Number *</label>
              <input
                className="border p-2 rounded w-full"
                type="text"
                value={idNumber}
                onChange={(e) =>
                  onChange("shareholder", "idNumber", e.target.value)
                }
              />
            </div>
            <div>
              <label className="block mb-1">Share Type *</label>
              <select
                className="border p-2 rounded w-full"
                type="text"
                value={shareType}
                onChange={(e) =>
                  onChange("shareholder", "shareType", e.target.value)
                }
              >
                <option value="" disabled>
                  Select ShareType
                </option>
                <option value="Ordinary(Equity)">Ordinary(Equity)</option>
                <option value="Preference">Preference</option>
              </select>
              <input />
            </div>
            {/* Share Percentage */}
            <div>
              <label className="block mb-1">Share Percentage *</label>
              <input
                className="border p-2 rounded w-full"
                type="number"
                value={sharePercentage}
                onChange={(e) =>
                  onChange("shareholder", "sharePercentage", e.target.value)
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Shareholder Residential Address
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Country */}
            <div>
              <label className="block mb-1">Country *</label>
              <input
                className="border p-2 rounded w-full"
                value={country}
                onChange={(e) =>
                  onChange("shareholderAddress", "country", e.target.value)
                }
              />
            </div>
            {/* State */}
            <div>
              <label className="block mb-1">State *</label>
              {states ? (
                <select
                  className="border p-2 rounded w-full"
                  value={state}
                  onChange={(e) =>
                    onChange("shareholderAddress", "state", e.target.value)
                  }
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
                  value={state}
                  onChange={(e) =>
                    onChange("shareholderAddress", "state", e.target.value)
                  }
                />
              )}
            </div>
            {/* L.G.A */}
            <div>
              <label className="block mb-1">L.G.A *</label>
              <input
                className="border p-2 rounded w-full"
                value={lga}
                onChange={(e) =>
                  onChange("shareholderAddress", "lga", e.target.value)
                }
              />
            </div>
            {/* City */}
            <div>
              <label className="block mb-1">City *</label>
              <input
                className="border p-2 rounded w-full"
                value={city}
                onChange={(e) =>
                  onChange("shareholderAddress", "city", e.target.value)
                }
              />
            </div>
            {/* Postal Code */}
            <div>
              <label className="block mb-1">Postal Code(Optional)</label>
              <input
                type="number"
                className="border p-2 rounded w-full"
                value={postalCode}
                onChange={(e) =>
                  onChange("shareholderAddress", "postalCode", e.target.value)
                }
              />
            </div>
            {/* Street Name */}
            <div>
              <label className="block mb-1">Street Name *</label>
              <input
                className="border p-2 rounded w-full"
                value={streetName}
                onChange={(e) =>
                  onChange("shareholderAddress", "streetName", e.target.value)
                }
              />
            </div>
            {/* House Number */}
            <div>
              <label className="block mb-1">House Number *</label>
              <input
                className="border p-2 rounded w-full"
                value={houseNumber}
                onChange={(e) =>
                  onChange("shareholderAddress", "houseNumber", e.target.value)
                }
              />
            </div>
            {/* Shareholder ID - Spanning across columns */}
            <div className="md:col-span-2">
              <label className="block mb-1">Shareholder ID *</label>
              <input
                type="file"
                className="border p-2 rounded w-full"
                onChange={(e) =>
                  handleFileChange(
                    "shareholderDocuments",
                    "shareholderValidId",
                    e.target.files[0]
                  )
                }
              />
            </div>

            {/* Shareholder Signature - Spanning across columns */}
            <div className="md:col-span-2">
              <label className="block mb-1">Shareholder Signature *</label>
              <input
                type="file"
                className="border p-2 rounded w-full"
                onChange={(e) =>
                  handleFileChange(
                    "shareholderDocuments",
                    "shareholderSignature",
                    e.target.files[0]
                  )
                }
              />
            </div>
            {/* Shareholder Passport - Spanning across columns */}
            <div className="md:col-span-2">
              <label className="block mb-1">Shareholder Passport *</label>
              <input
                type="file"
                className="border p-2 rounded w-full"
                onChange={(e) =>
                  handleFileChange(
                    "shareholderDocuments",
                    "shareholderPassport",
                    e.target.files[0]
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareholderInfo;
