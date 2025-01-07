import React, { useEffect } from "react";

const BusinessAddress = ({ formData, onChange, setDisableNext }) => {
  const { state, lga, city, postCode, streetName, buildingNumber } =
    formData.businessAddress;

  // Validate fields to enable/disable "Next" button
  useEffect(() => {
    const isValid = state && lga && city && streetName && buildingNumber; // postCode is optional
    setDisableNext(!isValid);
  }, [state, lga, city, streetName, buildingNumber, setDisableNext]);
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

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Business Address</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="state" className="block font-medium">
            State*
          </label>
          {states ? (
            <select
              id="state"
              value={state}
              onChange={(e) =>
                onChange("businessAddress", "state", e.target.value)
              }
              className="w-full p-2 border rounded"
            >
              <option value="">Select State*</option>
              {states.map((stateName) => (
                <option key={stateName} value={stateName}>
                  {stateName}
                </option>
              ))}
            </select>
          ) : (
            <input
              id="state"
              type="text"
              placeholder="State*"
              value={state}
              onChange={(e) =>
                onChange("businessAddress", "state", e.target.value)
              }
              className="w-full p-2 border rounded"
            />
          )}
        </div>
        <div>
          <label htmlFor="lga" className="block font-medium">
            L.G.A*
          </label>
          <input
            id="lga"
            type="text"
            placeholder="L.G.A*"
            value={lga}
            onChange={(e) => onChange("businessAddress", "lga", e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="city" className="block font-medium">
            City/Town*
          </label>
          <input
            id="city"
            type="text"
            placeholder="City/Town*"
            value={city}
            onChange={(e) =>
              onChange("businessAddress", "city", e.target.value)
            }
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="postCode" className="block font-medium">
            Post Code (optional)
          </label>
          <input
            id="postCode"
            type="text"
            placeholder="Post Code (optional)"
            value={postCode}
            onChange={(e) =>
              onChange("businessAddress", "postCode", e.target.value)
            }
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="streetName" className="block font-medium">
            Street Name*
          </label>
          <input
            id="streetName"
            type="text"
            placeholder="Street Name*"
            value={streetName}
            onChange={(e) =>
              onChange("businessAddress", "streetName", e.target.value)
            }
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="buildingNumber" className="block font-medium">
            Building Number*
          </label>
          <input
            id="buildingNumber"
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
    </div>
  );
};

export default BusinessAddress;
