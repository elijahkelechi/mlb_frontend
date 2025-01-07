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
          <input
            id="businessActivity"
            type="text"
            placeholder="General Nature of Business*"
            value={businessActivity}
            onChange={(e) =>
              onChange("businessDetails", "businessActivity", e.target.value)
            }
            className="w-full p-2 border rounded"
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
            onChange={(e) =>
              onChange("businessDetails", "businessPhone", e.target.value)
            }
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="businessEmail" className="block font-medium">
            Business Email*
          </label>
          <input
            id="businessEmail"
            type="email"
            placeholder="Business Email*"
            value={businessEmail}
            onChange={(e) =>
              onChange("businessDetails", "businessEmail", e.target.value)
            }
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
