const OrganizationDetails = ({ formData, onChange }) => {
  const handleInputChange = (field, value) => {
    onChange("details", { ...formData.details, [field]: value });
  };

  const handleAddressChange = (field, value) => {
    onChange("address", { ...formData.address, [field]: value });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800">Organization Details</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Proposed Name - Option 1
        </label>
        <input
          type="text"
          value={formData.details.proposedNameOption1}
          onChange={(e) =>
            handleInputChange("proposedNameOption1", e.target.value)
          }
          className="input input-bordered w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Proposed Name - Option 2
        </label>
        <input
          type="text"
          value={formData.details.proposedNameOption2}
          onChange={(e) =>
            handleInputChange("proposedNameOption2", e.target.value)
          }
          className="input input-bordered w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Principal Activity
        </label>
        <input
          type="text"
          value={formData.details.organizationPrincipalActivity}
          onChange={(e) =>
            handleInputChange("organizationPrincipalActivity", e.target.value)
          }
          className="input input-bordered w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Aims and Objectives
        </label>
        <textarea
          value={formData.details.organizationAimsAndObjectives}
          onChange={(e) =>
            handleInputChange("organizationAimsAndObjectives", e.target.value)
          }
          className="textarea textarea-bordered w-full"
        ></textarea>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="text"
          value={formData.details.organizationPhoneNumber}
          onChange={(e) =>
            handleInputChange("organizationPhoneNumber", e.target.value)
          }
          className="input input-bordered w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={formData.details.organizationEmail}
          onChange={(e) =>
            handleInputChange("organizationEmail", e.target.value)
          }
          className="input input-bordered w-full"
        />
      </div>
      <h3 className="text-lg font-bold mt-4">Organization Address</h3>
      <div>
        <label className="block text-sm font-medium text-gray-700">State</label>
        <input
          type="text"
          value={formData.address.state}
          onChange={(e) => handleAddressChange("state", e.target.value)}
          className="input input-bordered w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">LGA</label>
        <input
          type="text"
          value={formData.address.lga}
          onChange={(e) => handleAddressChange("lga", e.target.value)}
          className="input input-bordered w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">City</label>
        <input
          type="text"
          value={formData.address.city}
          onChange={(e) => handleAddressChange("city", e.target.value)}
          className="input input-bordered w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Post Code
        </label>
        <input
          type="text"
          value={formData.address.postCode}
          onChange={(e) => handleAddressChange("postCode", e.target.value)}
          className="input input-bordered w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Street Name
        </label>
        <input
          type="text"
          value={formData.address.streetName}
          onChange={(e) => handleAddressChange("streetName", e.target.value)}
          className="input input-bordered w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          House Number
        </label>
        <input
          type="text"
          value={formData.address.houseNumber}
          onChange={(e) => handleAddressChange("houseNumber", e.target.value)}
          className="input input-bordered w-full"
        />
      </div>
    </div>
  );
};
export default OrganizationDetails;
