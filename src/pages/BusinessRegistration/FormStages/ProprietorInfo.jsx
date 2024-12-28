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

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Proprietor Information</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Surname*"
          value={surname}
          onChange={(e) =>
            onChange("proprietorInfo", "surname", e.target.value)
          }
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="First Name*"
          value={firstName}
          onChange={(e) =>
            onChange("proprietorInfo", "firstName", e.target.value)
          }
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Middle Name (optional)"
          value={formData.proprietorInfo.middleName}
          onChange={(e) =>
            onChange("proprietorInfo", "middleName", e.target.value)
          }
          className="w-full p-2 border rounded"
        />
        <select
          value={gender}
          onChange={(e) => onChange("proprietorInfo", "gender", e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="" disabled>
            Select Gender*
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="text"
          placeholder="Occupation*"
          value={occupation}
          onChange={(e) =>
            onChange("proprietorInfo", "occupation", e.target.value)
          }
          className="w-full p-2 border rounded"
        />
        <input
          type="date"
          placeholder="Date of Birth*"
          value={dateOfBirth}
          onChange={(e) =>
            onChange("proprietorInfo", "dateOfBirth", e.target.value)
          }
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Nationality*"
          value={nationality}
          onChange={(e) =>
            onChange("proprietorInfo", "nationality", e.target.value)
          }
          className="w-full p-2 border rounded"
        />
        <input
          type="tel"
          placeholder="Phone Number*"
          value={phoneNumber}
          onChange={(e) =>
            onChange("proprietorInfo", "phoneNumber", e.target.value)
          }
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email*"
          value={email}
          onChange={(e) => onChange("proprietorInfo", "email", e.target.value)}
          className="w-full p-2 border rounded"
        />
        <select
          value={idType}
          onChange={(e) => onChange("proprietorInfo", "idType", e.target.value)}
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
        <input
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
  );
};

export default ProprietorInfo;
