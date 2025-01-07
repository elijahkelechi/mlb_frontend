import React, { useEffect } from "react";

const ProprietorInfo = ({ formData, onChange, setDisableNext }) => {
  const {
    surname,
    firstName,
    gender,
    occupation,
    dateOfBirth,
    nationality,
    phoneNumber,
    email,
    idType,
    idNumber,
  } = formData.proprietorInfo;

  // Validate fields to enable/disable "Next" button
  useEffect(() => {
    const isValid =
      surname &&
      firstName &&
      gender &&
      occupation &&
      dateOfBirth &&
      nationality &&
      phoneNumber &&
      email &&
      idType &&
      idNumber;
    setDisableNext(!isValid);
  }, [
    surname,
    firstName,
    gender,
    occupation,
    dateOfBirth,
    nationality,
    phoneNumber,
    email,
    idType,
    idNumber,
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
      <h2 className="text-xl font-semibold mb-4">Proprietor Information</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="surname" className="block font-medium">
            Surname*
          </label>
          <input
            id="surname"
            type="text"
            placeholder="Surname*"
            value={surname}
            onChange={(e) =>
              onChange("proprietorInfo", "surname", e.target.value)
            }
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="firstName" className="block font-medium">
            First Name*
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="First Name*"
            value={firstName}
            onChange={(e) =>
              onChange("proprietorInfo", "firstName", e.target.value)
            }
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="middleName" className="block font-medium">
            Middle Name (optional)
          </label>
          <input
            id="middleName"
            type="text"
            placeholder="Middle Name (optional)"
            value={formData.proprietorInfo.middleName}
            onChange={(e) =>
              onChange("proprietorInfo", "middleName", e.target.value)
            }
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="gender" className="block font-medium">
            Gender*
          </label>
          <select
            id="gender"
            value={gender}
            onChange={(e) =>
              onChange("proprietorInfo", "gender", e.target.value)
            }
            className="w-full p-2 border rounded"
          >
            <option value="" disabled>
              Select Gender*
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="occupation" className="block font-medium">
            Occupation*
          </label>
          <input
            id="occupation"
            type="text"
            placeholder="Occupation*"
            value={occupation}
            onChange={(e) =>
              onChange("proprietorInfo", "occupation", e.target.value)
            }
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="dateOfBirth" className="block font-medium">
            Date of Birth*
          </label>
          <input
            id="dateOfBirth"
            type="date"
            value={dateOfBirth}
            onChange={(e) =>
              onChange("proprietorInfo", "dateOfBirth", e.target.value)
            }
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="nationality" className="block font-medium">
            Nationality*
          </label>
          <input
            id="nationality"
            type="text"
            placeholder="Nationality*"
            value={nationality}
            onChange={(e) =>
              onChange("proprietorInfo", "nationality", e.target.value)
            }
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block font-medium">
            Phone Number*
          </label>
          <input
            id="phoneNumber"
            type="tel"
            placeholder="Phone Number*"
            value={phoneNumber}
            onChange={(e) => {
              onChange("proprietorInfo", "phoneNumber", e.target.value);
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
        <div>
          <label htmlFor="email" className="block font-medium">
            Email*
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email*"
            value={email}
            onChange={(e) => {
              onChange("proprietorInfo", "email", e.target.value);
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
            id="idType"
            value={idType}
            onChange={(e) =>
              onChange("proprietorInfo", "idType", e.target.value)
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
        <div>
          <label htmlFor="idNumber" className="block font-medium">
            ID Number*
          </label>
          <input
            id="idNumber"
            type="text"
            placeholder="ID Number*"
            value={idNumber}
            onChange={(e) =>
              onChange("proprietorInfo", "idNumber", e.target.value)
            }
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default ProprietorInfo;
