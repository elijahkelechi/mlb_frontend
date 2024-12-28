import React, { useEffect } from "react";

const ProprietorAddress = ({ formData, onChange, setDisableNext }) => {
  const { country, state, lga, city, streetName, houseNumber } =
    formData.proprietorAddress;

  // Validate fields to enable/disable "Next" button
  useEffect(() => {
    const isValid =
      country && state && lga && city && streetName && houseNumber;
    setDisableNext(!isValid);
  }, [country, state, lga, city, streetName, houseNumber, setDisableNext]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Proprietor Address</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Country*"
          value={country}
          onChange={(e) =>
            onChange("proprietorAddress", "country", e.target.value)
          }
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="State*"
          value={state}
          onChange={(e) =>
            onChange("proprietorAddress", "state", e.target.value)
          }
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="LGA*"
          value={lga}
          onChange={(e) => onChange("proprietorAddress", "lga", e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="City*"
          value={city}
          onChange={(e) =>
            onChange("proprietorAddress", "city", e.target.value)
          }
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Post Code (optional)"
          value={formData.proprietorAddress.postCode}
          onChange={(e) =>
            onChange("proprietorAddress", "postCode", e.target.value)
          }
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Street Name*"
          value={streetName}
          onChange={(e) =>
            onChange("proprietorAddress", "streetName", e.target.value)
          }
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="House Number*"
          value={houseNumber}
          onChange={(e) =>
            onChange("proprietorAddress", "houseNumber", e.target.value)
          }
          className="w-full p-2 border rounded"
        />
      </div>
    </div>
  );
};

export default ProprietorAddress;
