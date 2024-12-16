const SecretaryAddress = ({ formData, onChange }) => {
  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
        <h2 className="text-xl font-semibold mb-6 text-center">
          Stage 8 - Secretary Residential Address(optional)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Country */}
          <div>
            <label className="block mb-1">Country *</label>
            <input
              className="border p-2 rounded w-full"
              value={formData.secretaryAddress.country}
              onChange={(e) =>
                onChange("secretaryAddress", "country", e.target.value)
              }
            />
          </div>

          {/* State */}
          <div>
            <label className="block mb-1">State *</label>
            <input
              className="border p-2 rounded w-full"
              value={formData.secretaryAddress.state}
              onChange={(e) =>
                onChange("secretaryAddress", "state", e.target.value)
              }
            />
          </div>

          {/* L.G.A */}
          <div>
            <label className="block mb-1">L.G.A *</label>
            <input
              className="border p-2 rounded w-full"
              value={formData.secretaryAddress.lga}
              onChange={(e) =>
                onChange("secretaryAddress", "lga", e.target.value)
              }
            />
          </div>

          {/* City */}
          <div>
            <label className="block mb-1">City *</label>
            <input
              className="border p-2 rounded w-full"
              value={formData.secretaryAddress.city}
              onChange={(e) =>
                onChange("secretaryAddress", "city", e.target.value)
              }
            />
          </div>

          {/* Postal Code */}
          <div>
            <label className="block mb-1">Postal Code *</label>
            <input
              type="number"
              className="border p-2 rounded w-full"
              value={formData.secretaryAddress.postalCode}
              onChange={(e) =>
                onChange("secretaryAddress", "postalCode", e.target.value)
              }
            />
          </div>

          {/* Street Name */}
          <div>
            <label className="block mb-1">Street Name *</label>
            <input
              className="border p-2 rounded w-full"
              value={formData.secretaryAddress.streetName}
              onChange={(e) =>
                onChange("secretaryAddress", "streetName", e.target.value)
              }
            />
          </div>

          {/* House Number */}
          <div>
            <label className="block mb-1">House Number *</label>
            <input
              className="border p-2 rounded w-full"
              value={formData.secretaryAddress.houseNumber}
              onChange={(e) =>
                onChange("secretaryAddress", "houseNumber", e.target.value)
              }
            />
          </div>

          {/* Secretary ID */}
          <div>
            <label className="block mb-1">Secretary ID *</label>
            <input
              type="file"
              className="border p-2 rounded w-full"
              value={formData.documents.secretaryId}
              onChange={(e) =>
                onChange("documents", "secretaryId", e.target.value)
              }
            />
          </div>

          {/* Secretary Signature */}
          <div>
            <label className="block mb-1">
              Secretary Signature
              <span className="font-bold text-red-400">
                (Snap your signature and send)
              </span>{" "}
              *
            </label>
            <input
              type="file"
              className="border p-2 rounded w-full"
              value={formData.documents.secretarySignature}
              onChange={(e) =>
                onChange("documents", "secretarySignature", e.target.value)
              }
            />
          </div>

          {/* Secretary Passport */}
          <div>
            <label className="block mb-1">Secretary Passport *</label>
            <input
              type="file"
              className="border p-2 rounded w-full"
              value={formData.documents.secretaryPassport}
              onChange={(e) =>
                onChange("documents", "secretaryPassport", e.target.value)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecretaryAddress;
