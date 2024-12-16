const CompanyAddress = ({ formData, onChange }) => {
  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Stage 2 - Company Address
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">State *</label>
            <input
              className="border p-2 rounded w-full"
              type="text"
              value={formData.companyAddress.state}
              onChange={(e) =>
                onChange("companyAddress", "state", e.target.value)
              }
            />
          </div>

          <div>
            <label className="block mb-1">L.G.A *</label>
            <input
              className="border p-2 rounded w-full"
              type="text"
              value={formData.companyAddress.lga}
              onChange={(e) =>
                onChange("companyAddress", "lga", e.target.value)
              }
            />
          </div>

          <div>
            <label className="block mb-1">City/Town *</label>
            <input
              className="border p-2 rounded w-full"
              type="text"
              value={formData.companyAddress.city}
              onChange={(e) =>
                onChange("companyAddress", "city", e.target.value)
              }
            />
          </div>

          <div>
            <label className="block mb-1">Street Name *</label>
            <input
              className="border p-2 rounded w-full"
              type="text"
              value={formData.companyAddress.streetName}
              onChange={(e) =>
                onChange("companyAddress", "streetName", e.target.value)
              }
            />
          </div>

          <div>
            <label className="block mb-1">House Number *</label>
            <input
              className="border p-2 rounded w-full"
              type="text"
              value={formData.companyAddress.houseNumber}
              onChange={(e) =>
                onChange("companyAddress", "houseNumber", e.target.value)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyAddress;
