import React, { useEffect } from "react";

const BusinessAddress = ({ formData, onChange, setDisableNext }) => {
  const { state, lga, city, postCode, streetName, buildingNumber } =
    formData.businessAddress;

  // Validate fields to enable/disable "Next" button
  useEffect(() => {
    const isValid = state && lga && city && streetName && buildingNumber; // postCode is optional
    setDisableNext(!isValid);
  }, [state, lga, city, streetName, buildingNumber, setDisableNext]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Business Address</h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="State*"
          value={state}
          onChange={(e) => onChange("businessAddress", "state", e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="L.G.A*"
          value={lga}
          onChange={(e) => onChange("businessAddress", "lga", e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="City/Town*"
          value={city}
          onChange={(e) => onChange("businessAddress", "city", e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Post Code (optional)"
          value={postCode}
          onChange={(e) =>
            onChange("businessAddress", "postCode", e.target.value)
          }
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Street Name*"
          value={streetName}
          onChange={(e) =>
            onChange("businessAddress", "streetName", e.target.value)
          }
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Building Number*"
          value={buildingNumber}
          onChange={(e) =>
            onChange("businessAddress", "buildingNumber", e.target.value)
          }
          className="w-full p-2 border rounded"
        />
      </div>
    </div>
  );
};

export default BusinessAddress;
