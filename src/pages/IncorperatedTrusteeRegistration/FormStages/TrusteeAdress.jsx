const TrusteeAddress = ({ formData, trusteeIndex, onChange }) => {
  const handleChange = (field, value) => {
    onChange(field, value);
  };

  return (
    <div className="bg-white p-4 rounded shadow-md mb-4">
      <h2 className="text-xl font-semibold mb-4">
        Trustee {trusteeIndex + 1} - Address
      </h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="Country"
            value={formData.country}
            onChange={(e) => handleChange("country", e.target.value)}
            className="w-full p-2 border mb-4 rounded"
          />
          <input
            type="text"
            placeholder="State"
            value={formData.state}
            onChange={(e) => handleChange("state", e.target.value)}
            className="w-full p-2 border mb-4 rounded"
          />
          <input
            type="text"
            placeholder="LGA"
            value={formData.lga}
            onChange={(e) => handleChange("lga", e.target.value)}
            className="w-full p-2 border mb-4 rounded"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="City"
            value={formData.city}
            onChange={(e) => handleChange("city", e.target.value)}
            className="w-full p-2 border mb-4 rounded"
          />
          <input
            type="text"
            placeholder="Post Code"
            value={formData.postCode}
            onChange={(e) => handleChange("postCode", e.target.value)}
            className="w-full p-2 border mb-4 rounded"
          />
          <input
            type="text"
            placeholder="Street Name"
            value={formData.streetName}
            onChange={(e) => handleChange("streetName", e.target.value)}
            className="w-full p-2 border mb-4 rounded"
          />
          <input
            type="text"
            placeholder="House Number"
            value={formData.houseNumber}
            onChange={(e) => handleChange("houseNumber", e.target.value)}
            className="w-full p-2 border mb-4 rounded"
          />
        </div>
      </form>
    </div>
  );
};

export default TrusteeAddress;
