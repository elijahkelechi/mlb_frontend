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
        {/* Text Inputs */}
        <div>
          <label htmlFor="country" className="block text-sm font-medium mb-1">
            Country
          </label>
          <input
            type="text"
            id="country"
            placeholder="Country"
            value={formData.country}
            onChange={(e) => handleChange("country", e.target.value)}
            className="w-full p-2 border mb-4 rounded"
          />

          <label htmlFor="state" className="block text-sm font-medium mb-1">
            State
          </label>
          <input
            type="text"
            id="state"
            placeholder="State"
            value={formData.state}
            onChange={(e) => handleChange("state", e.target.value)}
            className="w-full p-2 border mb-4 rounded"
          />

          <label htmlFor="lga" className="block text-sm font-medium mb-1">
            LGA
          </label>
          <input
            type="text"
            id="lga"
            placeholder="LGA"
            value={formData.lga}
            onChange={(e) => handleChange("lga", e.target.value)}
            className="w-full p-2 border mb-4 rounded"
          />
        </div>

        {/* Additional Address Fields */}
        <div>
          <label htmlFor="city" className="block text-sm font-medium mb-1">
            City
          </label>
          <input
            type="text"
            id="city"
            placeholder="City"
            value={formData.city}
            onChange={(e) => handleChange("city", e.target.value)}
            className="w-full p-2 border mb-4 rounded"
          />

          <label htmlFor="postCode" className="block text-sm font-medium mb-1">
            Post Code
          </label>
          <input
            type="text"
            id="postCode"
            placeholder="Post Code"
            value={formData.postCode}
            onChange={(e) => handleChange("postCode", e.target.value)}
            className="w-full p-2 border mb-4 rounded"
          />

          <label
            htmlFor="streetName"
            className="block text-sm font-medium mb-1"
          >
            Street Name
          </label>
          <input
            type="text"
            id="streetName"
            placeholder="Street Name"
            value={formData.streetName}
            onChange={(e) => handleChange("streetName", e.target.value)}
            className="w-full p-2 border mb-4 rounded"
          />

          <label
            htmlFor="houseNumber"
            className="block text-sm font-medium mb-1"
          >
            House Number
          </label>
          <input
            type="text"
            id="houseNumber"
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
