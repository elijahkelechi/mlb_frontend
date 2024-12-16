const BusinessDetails = ({ formData, onChange }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-xl font-semibold mb-4">Business Details</h2>
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Business Name Option 1*"
        value={formData.businessDetails.businessNameOption1}
        onChange={(e) =>
          onChange("businessDetails", "businessNameOption1", e.target.value)
        }
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Business Name Option 2*"
        value={formData.businessDetails.businessNameOption2}
        onChange={(e) =>
          onChange("businessDetails", "businessNameOption2", e.target.value)
        }
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="General Nature of Business*"
        value={formData.businessDetails.businessActivity}
        onChange={(e) =>
          onChange("businessDetails", "businessActivity", e.target.value)
        }
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Business Phone Number*"
        value={formData.businessDetails.businessPhone}
        onChange={(e) =>
          onChange("businessDetails", "businessPhone", e.target.value)
        }
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        placeholder="Business Email*"
        value={formData.businessDetails.businessEmail}
        onChange={(e) =>
          onChange("businessDetails", "businessEmail", e.target.value)
        }
        className="w-full p-2 border rounded"
      />
    </div>
  </div>
);
export default BusinessDetails;
