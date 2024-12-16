const BusinessAddress = ({ formData, onChange }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-xl font-semibold mb-4">Business Address</h2>
    <div className="space-y-4">
      <input
        type="text"
        placeholder="State*"
        value={formData.businessAddress.state}
        onChange={(e) => onChange("businessAddress", "state", e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="L.G.A*"
        value={formData.businessAddress.lga}
        onChange={(e) => onChange("businessAddress", "lga", e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="City/Town*"
        value={formData.businessAddress.city}
        onChange={(e) => onChange("businessAddress", "city", e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Post Code (optional)"
        value={formData.businessAddress.postCode}
        onChange={(e) =>
          onChange("businessAddress", "postCode", e.target.value)
        }
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Street Name*"
        value={formData.businessAddress.streetName}
        onChange={(e) =>
          onChange("businessAddress", "streetName", e.target.value)
        }
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Building Number*"
        value={formData.businessAddress.buildingNumber}
        onChange={(e) =>
          onChange("businessAddress", "buildingNumber", e.target.value)
        }
        className="w-full p-2 border rounded"
      />
    </div>
  </div>
);
export default BusinessAddress;
