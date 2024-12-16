const ShareholderAddress = ({ formData, onChange }) => {
  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Stage 6 - Shareholder Address
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Country */}
          <div>
            <label className="block mb-1">Country *</label>
            <input
              className="border p-2 rounded w-full"
              value={formData.shareholderAddress.country}
              onChange={(e) =>
                onChange("shareholderAddress", "country", e.target.value)
              }
            />
          </div>

          {/* State */}
          <div>
            <label className="block mb-1">State *</label>
            <input
              className="border p-2 rounded w-full"
              value={formData.shareholderAddress.state}
              onChange={(e) =>
                onChange("shareholderAddress", "state", e.target.value)
              }
            />
          </div>

          {/* L.G.A */}
          <div>
            <label className="block mb-1">L.G.A *</label>
            <input
              className="border p-2 rounded w-full"
              value={formData.shareholderAddress.lga}
              onChange={(e) =>
                onChange("shareholderAddress", "lga", e.target.value)
              }
            />
          </div>

          {/* City */}
          <div>
            <label className="block mb-1">City *</label>
            <input
              className="border p-2 rounded w-full"
              value={formData.shareholderAddress.city}
              onChange={(e) =>
                onChange("shareholderAddress", "city", e.target.value)
              }
            />
          </div>

          {/* Postal Code */}
          <div>
            <label className="block mb-1">Postal Code *</label>
            <input
              className="border p-2 rounded w-full"
              value={formData.shareholderAddress.postalCode}
              onChange={(e) =>
                onChange("shareholderAddress", "postalCode", e.target.value)
              }
            />
          </div>

          {/* Street Name */}
          <div>
            <label className="block mb-1">Street Name *</label>
            <input
              className="border p-2 rounded w-full"
              value={formData.shareholderAddress.streetName}
              onChange={(e) =>
                onChange("shareholderAddress", "streetName", e.target.value)
              }
            />
          </div>

          {/* House Number */}
          <div>
            <label className="block mb-1">House Number *</label>
            <input
              className="border p-2 rounded w-full"
              value={formData.shareholderAddress.houseNumber}
              onChange={(e) =>
                onChange("shareholderAddress", "houseNumber", e.target.value)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareholderAddress;
