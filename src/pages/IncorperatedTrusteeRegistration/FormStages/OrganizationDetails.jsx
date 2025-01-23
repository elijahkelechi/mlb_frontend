import { useState } from "react";

const OrganizationDetails = ({ formData, onChange }) => {
  const [errors, setErrors] = useState({
    organizationPhoneNumber: "",
    organizationEmail: "",
  });

  const validateField = (field, value) => {
    if (field === "organizationEmail") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setErrors((prev) => ({
          ...prev,
          organizationEmail: "Invalid email address.",
        }));
      } else {
        setErrors((prev) => ({ ...prev, organizationEmail: "" }));
      }
    }

    if (field === "organizationPhoneNumber") {
      const phoneRegex = /^[0-9]{10,15}$/; // Allows numbers between 10 to 15 digits
      if (!phoneRegex.test(value)) {
        setErrors((prev) => ({
          ...prev,
          organizationPhoneNumber: "Invalid phone number. Use 10-15 digits.",
        }));
      } else {
        setErrors((prev) => ({ ...prev, organizationPhoneNumber: "" }));
      }
    }
  };

  const handleValidationChange = (field, value) => {
    validateField(field, value); // Validate the field
    handleInputChange(field, value); // Call the original handleInputChange
  };

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
            handleValidationChange("organizationPhoneNumber", e.target.value)
          }
          className="input input-bordered w-full"
        />
        {errors.organizationPhoneNumber && (
          <p className="text-red-600 text-sm">
            {errors.organizationPhoneNumber}
          </p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={formData.details.organizationEmail}
          onChange={(e) =>
            handleValidationChange("organizationEmail", e.target.value)
          }
          className="input input-bordered w-full"
        />
        {errors.organizationEmail && (
          <p className="text-red-600 text-sm">{errors.organizationEmail}</p>
        )}
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
