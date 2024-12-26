const DirectorResidentialAddress = ({ formData, onChange }) => {
  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Stage 4 - Director Residential Address
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Country */}
          <div>
            <label className="block mb-1">Country *</label>
            <input
              className="border p-2 rounded w-full"
              value={formData.directorAddress.country}
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
              value={formData.directorAddress.state}
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
              value={formData.directorAddress.lga}
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
              value={formData.directorAddress.city}
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
              value={formData.directorAddress.postalCode}
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
              value={formData.directorAddress.streetName}
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
              value={formData.directorAddress.houseNumber}
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
              value={formData.directorDocuments.directorId}
              onChange={(e) =>
                onChange("documents", "directorId", e.target.value)
              }
            />
          </div>

          {/* Director Signature - Spanning across columns */}
          <div className="md:col-span-2">
            <label className="block mb-1">
              Director Signature
              <span className="font-bold text-red-400">
                (Snap your signature and send)
              </span>{" "}
              *
            </label>
            <input
              type="file"
              className="border p-2 rounded w-full"
              value={formData.directorDocuments.directorSignature}
              onChange={(e) =>
                onChange("documents", "directorSignature", e.target.value)
              }
            />
          </div>

          {/* Director Passport - Spanning across columns */}
          <div className="md:col-span-2">
            <label className="block mb-1">Director Passport *</label>
            <input
              type="file"
              className="border p-2 rounded w-full"
              value={formData.directorDocuments.directorPassport}
              onChange={(e) =>
                onChange("documents", "directorPassport", e.target.value)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorResidentialAddress;
