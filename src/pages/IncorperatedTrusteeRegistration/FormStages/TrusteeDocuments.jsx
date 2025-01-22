import React from "react";

const TrusteeDocuments = ({ formData, trusteeIndex, onChange }) => {
  // Handles changes for text and radio fields
  const handleChange = (field, value) => {
    onChange(field, value);
  };

  // Handles file selection and validates the input
  const handleFileChange = (field, event) => {
    const file = event.target.files[0];
    if (file) {
      console.log(`${field} file selected:`, file);
      onChange(field, file);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow-md mb-4">
      <h2 className="text-xl font-semibold mb-4">Optional - Documents</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* New File Upload Fields */}
        <div>
          <label
            htmlFor="minutesOfMeetings"
            className="block text-sm font-medium mb-1"
          >
            Upload Minutes of Meetings and Special Clause (Optional)
          </label>
          <input
            type="file"
            id="minutesOfMeetings"
            accept="image/*,.pdf"
            onChange={(e) => handleFileChange("minutesOfMeetings", e)}
            className="w-full p-2 border rounded"
          />
          <p className="text-sm text-gray-500">
            We will draft if not available.
          </p>
        </div>
        <div>
          <label
            htmlFor="organizationConstitution"
            className="block text-sm font-medium mb-1"
          >
            Upload Organization Constitution (Optional)
          </label>
          <input
            type="file"
            id="organizationConstitution"
            accept="image/*,.pdf"
            onChange={(e) => handleFileChange("organizationConstitution", e)}
            className="w-full p-2 border rounded"
          />
          <p className="text-sm text-gray-500">
            We will draft if not available.
          </p>
        </div>
        <div>
          <label
            htmlFor="trusteeDeclarationForm"
            className="block text-sm font-medium mb-1"
          >
            Upload Trustee Declaration Form (Optional)
          </label>
          <input
            type="file"
            id="trusteeDeclarationForm"
            accept="image/*,.pdf"
            onChange={(e) => handleFileChange("trusteeDeclarationForm", e)}
            className="w-full p-2 border rounded"
          />
          <p className="text-sm text-gray-500">
            We will provide if not available.
          </p>
        </div>
        <div>
          <label
            htmlFor="newspaperPublication"
            className="block text-sm font-medium mb-1"
          >
            Upload Newspaper Publication (Optional)
          </label>
          <input
            type="file"
            id="newspaperPublication"
            accept="image/*,.pdf"
            onChange={(e) => handleFileChange("newspaperPublication", e)}
            className="w-full p-2 border rounded"
          />
          <p className="text-sm text-gray-500">
            We will provide if not available.
          </p>
        </div>
      </form>
    </div>
  );
};

export default TrusteeDocuments;
