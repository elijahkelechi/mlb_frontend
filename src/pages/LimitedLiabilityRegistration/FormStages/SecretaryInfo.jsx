import { useEffect } from "react";

const SecretaryInfo = ({ formData, onChange, setDisableNext }) => {
  const {
    lastName,
    firstName,
    phoneNumber,
    email,
    gender,
    dateOfBirth,
    nationality,
    idType,
    idNumber,
  } = formData.secretary;

  const { country, state, lga, city, postalCode, streetName, houseNumber } =
    formData.secretaryAddress;

  const { secretaryValidId, secretarySignature, secretaryPassport } =
    formData.secretaryDocuments;

  // Validate fields to enable/disable "Next" button
  useEffect(() => {
    const areFieldsFilled = [
      // lastName,
      // firstName,
      // phoneNumber,
      // email,
      // gender,
      // dateOfBirth,
      // nationality,
      // idType,
      // idNumber,
      // country,
      // state,
      // lga,
      // city,
      // postalCode,
      // streetName,
      // houseNumber,
    ].every((field) => field && field.trim() !== "");

    const areFilesUploaded = [
      // secretaryValidId,
      // secretarySignature,
      // secretaryPassport,
    ].every((file) => file instanceof File);

    setDisableNext(!(areFieldsFilled && areFilesUploaded)); // Disable if not valid
  }, [
    // lastName,
    // firstName,
    // phoneNumber,
    // email,
    // gender,
    // dateOfBirth,
    // nationality,
    // idType,
    // idNumber,
    // country,
    // state,
    // lga,
    // city,
    // postalCode,
    // streetName,
    // houseNumber,
    // secretaryValidId,
    // secretarySignature,
    // secretaryPassport,
    setDisableNext,
  ]);

  const handleFileChange = (category, field, file) => {
    if (file) {
      onChange(category, field, file); // Ensure files are correctly handled
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Stage 4 - Secretary Info (optional)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Last Name */}
            <div>
              <label className="block mb-1">Last Name *</label>
              <input
                className="border p-2 rounded w-full"
                value={lastName}
                onChange={(e) =>
                  onChange("secretary", "lastName", e.target.value)
                }
              />
            </div>

            {/* First Name */}
            <div>
              <label className="block mb-1">First Name *</label>
              <input
                className="border p-2 rounded w-full"
                value={firstName}
                onChange={(e) =>
                  onChange("secretary", "firstName", e.target.value)
                }
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block mb-1">Phone Number *</label>
              <input
                type="number"
                className="border p-2 rounded w-full"
                value={phoneNumber}
                onChange={(e) =>
                  onChange("secretary", "phoneNumber", e.target.value)
                }
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1">Email *</label>
              <input
                className="border p-2 rounded w-full"
                value={email}
                onChange={(e) => onChange("secretary", "email", e.target.value)}
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block mb-1">Gender *</label>
              <select
                className="border p-2 rounded w-full"
                value={gender}
                onChange={(e) =>
                  onChange("secretary", "gender", e.target.value)
                }
              >
                <option value="">Select...</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block mb-1">Date of Birth *</label>
              <input
                className="border p-2 rounded w-full"
                type="date"
                value={dateOfBirth}
                onChange={(e) =>
                  onChange("secretary", "dateOfBirth", e.target.value)
                }
              />
            </div>

            {/* Nationality */}
            <div>
              <label className="block mb-1">Nationality *</label>
              <input
                className="border p-2 rounded w-full"
                value={nationality}
                onChange={(e) =>
                  onChange("secretary", "nationality", e.target.value)
                }
              />
            </div>

            {/* ID Type */}
            <div>
              <label htmlFor="idType" className="block font-medium">
                ID Type*
              </label>
              <select
                id="idType"
                value={idType}
                onChange={(e) =>
                  onChange("secretary", "idType", e.target.value)
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
                value={idNumber}
                onChange={(e) =>
                  onChange("secretary", "idNumber", e.target.value)
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Secretary Residential Address */}
      <div className="flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
          <h2 className="text-xl font-semibold mb-6 text-center">
            Secretary Residential Address
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Country */}
            <div>
              <label className="block mb-1">Country *</label>
              <input
                className="border p-2 rounded w-full"
                value={country}
                onChange={(e) =>
                  onChange("secretaryAddress", "country", e.target.value)
                }
              />
            </div>

            {/* State */}
            <div>
              <label className="block mb-1">State *</label>

              <input
                className="border p-2 rounded w-full"
                value={state}
                onChange={(e) =>
                  onChange("secretaryAddress", "state", e.target.value)
                }
              />
            </div>

            {/* LGA */}
            <div>
              <label className="block mb-1">LGA *</label>
              <input
                className="border p-2 rounded w-full"
                value={lga}
                onChange={(e) =>
                  onChange("secretaryAddress", "lga", e.target.value)
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
                  onChange("secretaryAddress", "city", e.target.value)
                }
              />
            </div>

            {/* Postal Code */}
            <div>
              <label className="block mb-1">Postal Code(Optional)</label>
              <input
                className="border p-2 rounded w-full"
                value={postalCode}
                onChange={(e) =>
                  onChange("secretaryAddress", "postalCode", e.target.value)
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
                  onChange("secretaryAddress", "streetName", e.target.value)
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
                  onChange("secretaryAddress", "houseNumber", e.target.value)
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Secretary Documents */}
      <div className="flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
          <h2 className="text-xl font-semibold mb-6 text-center">
            Secretary Documents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Secretary Valid ID */}
            <div>
              <label className="block mb-1">Secretary Valid ID *</label>
              <input
                type="file"
                className="border p-2 rounded w-full"
                onChange={(e) =>
                  handleFileChange(
                    "secretaryDocuments",
                    "secretaryValidId",
                    e.target.files[0]
                  )
                }
              />
            </div>

            {/* Secretary Signature */}
            <div>
              <label className="block mb-1">Secretary Signature *</label>
              <input
                type="file"
                className="border p-2 rounded w-full"
                onChange={(e) =>
                  handleFileChange(
                    "secretaryDocuments",
                    "secretarySignature",
                    e.target.files[0]
                  )
                }
              />
            </div>

            {/* Secretary Passport */}
            <div>
              <label className="block mb-1">Secretary Passport *</label>
              <input
                type="file"
                className="border p-2 rounded w-full"
                onChange={(e) =>
                  handleFileChange(
                    "secretaryDocuments",
                    "secretaryPassport",
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

export default SecretaryInfo;
