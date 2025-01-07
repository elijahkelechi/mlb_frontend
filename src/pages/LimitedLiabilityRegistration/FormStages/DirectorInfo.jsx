import { useEffect } from "react";

const DirectorInfo = ({ formData, onChange, setDisableNext }) => {
  const { country, state, lga, city, postalCode, streetName, houseNumber } =
    formData.directorAddress;
  // Document fields
  const { directorId, directorSignature, directorPassport } =
    formData.directorDocuments;
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
  } = formData.director;

  // Debugging: Ensure the files are set properly in state
  useEffect(() => {
    console.log("Director ID:", directorId); // Debugging log
    console.log("Director Signature:", directorSignature); // Debugging log
    console.log("Director Passport:", directorPassport); // Debugging log

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
      country &&
      state &&
      lga &&
      city &&
      postalCode &&
      streetName &&
      houseNumber &&
      directorId && // Must be a valid file object
      directorSignature && // Must be a valid file object
      directorPassport; // Must be a valid file object

    console.log("Form is valid:", isValid); // Debugging log to check validation status
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
    country,
    state,
    lga,
    city,
    postalCode,
    streetName,
    houseNumber,
    directorId,
    directorSignature,
    directorPassport,
    setDisableNext,
  ]);

  const handleFileChange = (category, field, file) => {
    console.log(`${field} file uploaded:`, file); // Debugging log
    onChange(category, field, file); // Ensure the files are correctly handled
  };

  return (
    <div>
      <div className="flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Stage 3 - Director Information
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
                  onChange("director", "lastName", e.target.value)
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
                  onChange("director", "firstName", e.target.value)
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
                  onChange("director", "dateOfBirth", e.target.value)
                }
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block mb-1">Gender *</label>
              <select
                className="border p-2 rounded w-full"
                value={gender}
                onChange={(e) => onChange("director", "gender", e.target.value)}
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
                  onChange("director", "nationality", e.target.value)
                }
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block mb-1">Phone Number *</label>
              <input
                className="border p-2 rounded w-full"
                type="number"
                value={phoneNumber}
                onChange={(e) =>
                  onChange("director", "phoneNumber", e.target.value)
                }
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1">Email *</label>
              <input
                className="border p-2 rounded w-full"
                type="email"
                value={email}
                onChange={(e) => onChange("director", "email", e.target.value)}
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
                onChange={(e) => onChange("director", "idType", e.target.value)}
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
                  onChange("director", "idNumber", e.target.value)
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Director Residential Address
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Country */}
            <div>
              <label className="block mb-1">Country *</label>
              <input
                className="border p-2 rounded w-full"
                value={country}
                onChange={(e) =>
                  onChange("directorAddress", "country", e.target.value)
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
                  onChange("directorAddress", "state", e.target.value)
                }
              />
            </div>

            {/* L.G.A */}
            <div>
              <label className="block mb-1">L.G.A *</label>
              <input
                className="border p-2 rounded w-full"
                value={lga}
                onChange={(e) =>
                  onChange("directorAddress", "lga", e.target.value)
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
                  onChange("directorAddress", "city", e.target.value)
                }
              />
            </div>

            {/* Postal Code */}
            <div>
              <label className="block mb-1">Postal Code *</label>
              <input
                type="number"
                className="border p-2 rounded w-full"
                value={postalCode}
                onChange={(e) =>
                  onChange("directorAddress", "postalCode", e.target.value)
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
                  onChange("directorAddress", "streetName", e.target.value)
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
                  onChange("directorAddress", "houseNumber", e.target.value)
                }
              />
            </div>

            {/* Director ID - Spanning across columns */}
            <div className="md:col-span-2">
              <label className="block mb-1">Director ID *</label>
              <input
                type="file"
                className="border p-2 rounded w-full"
                onChange={(e) =>
                  handleFileChange(
                    "directorDocuments",
                    "directorId",
                    e.target.files[0]
                  )
                }
              />
            </div>

            {/* Director Signature - Spanning across columns */}
            <div className="md:col-span-2">
              <label className="block mb-1">Director Signature *</label>
              <input
                type="file"
                className="border p-2 rounded w-full"
                onChange={(e) =>
                  handleFileChange(
                    "directorDocuments",
                    "directorSignature",
                    e.target.files[0]
                  )
                }
              />
            </div>

            {/* Director Passport - Spanning across columns */}
            <div className="md:col-span-2">
              <label className="block mb-1">Director Passport *</label>
              <input
                type="file"
                className="border p-2 rounded w-full"
                onChange={(e) =>
                  handleFileChange(
                    "directorDocuments",
                    "directorPassport",
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

export default DirectorInfo;
