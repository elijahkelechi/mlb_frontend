const TrusteeDocuments = ({ formData, trusteeIndex, onChange }) => {
  const handleChange = (field, value) => {
    onChange(field, value);
  };

  const handleFileChange = (field, file) => {
    onChange(field, file); // Handle file uploads
  };

  return (
    <div className="bg-white p-4 rounded shadow-md mb-4">
      <h2 className="text-xl font-semibold mb-4">
        Trustee {trusteeIndex + 1} - Documents
      </h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* ID Type and ID Number */}
        <div>
          <input
            type="text"
            placeholder="ID Type"
            value={formData.idType}
            onChange={(e) => handleChange("idType", e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="ID Number"
            value={formData.idNumber}
            onChange={(e) => handleChange("idNumber", e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Chairman and Secretary Radio Buttons */}
        <div className="col-span-2 flex gap-4 items-center">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name={`chairman-${trusteeIndex}`}
              checked={formData.isChairman}
              onChange={() => handleChange("isChairman", true)}
            />
            This Trustee is Chairman
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name={`chairman-${trusteeIndex}`}
              checked={!formData.isChairman}
              onChange={() => handleChange("isChairman", false)}
            />
            No
          </label>
        </div>

        <div className="col-span-2 flex gap-4 items-center">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name={`secretary-${trusteeIndex}`}
              checked={formData.isSecretary}
              onChange={() => handleChange("isSecretary", true)}
            />
            This Trustee is Secretary
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name={`secretary-${trusteeIndex}`}
              checked={!formData.isSecretary}
              onChange={() => handleChange("isSecretary", false)}
            />
            No
          </label>
        </div>

        {/* File Uploads */}
        <div>
          <label className="block text-gray-700">Upload Valid ID</label>
          <input
            type="file"
            accept="image/*,.pdf"
            onChange={(e) => handleFileChange("validID", e.target.files[0])}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Upload Signature</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange("signature", e.target.files[0])}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">
            Upload Passport Photograph
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              handleFileChange("passportPhoto", e.target.files[0])
            }
            className="w-full p-2 border rounded"
          />
        </div>

        {/* New File Upload Fields */}
        <div>
          <label className="block text-gray-700">
            Upload Minutes of Meetings and Special Clause (Optional)
          </label>
          <input
            type="file"
            accept="image/*,.pdf"
            onChange={(e) =>
              handleFileChange("minutesOfMeetings", e.target.files[0])
            }
            className="w-full p-2 border rounded"
          />
          <p className="text-sm text-gray-500">
            We will draft if not available.
          </p>
        </div>
        <div>
          <label className="block text-gray-700">
            Upload Organization Constitution (Optional)
          </label>
          <input
            type="file"
            accept="image/*,.pdf"
            onChange={(e) =>
              handleFileChange("organizationConstitution", e.target.files[0])
            }
            className="w-full p-2 border rounded"
          />
          <p className="text-sm text-gray-500">
            We will draft if not available.
          </p>
        </div>
        <div>
          <label className="block text-gray-700">
            Upload Trustee Declaration Form (Optional)
          </label>
          <input
            type="file"
            accept="image/*,.pdf"
            onChange={(e) =>
              handleFileChange("trusteeDeclarationForm", e.target.files[0])
            }
            className="w-full p-2 border rounded"
          />
          <p className="text-sm text-gray-500">
            We will provide if not available.
          </p>
        </div>
        <div>
          <label className="block text-gray-700">
            Upload Newspaper Publication (Optional)
          </label>
          <input
            type="file"
            accept="image/*,.pdf"
            onChange={(e) =>
              handleFileChange("newspaperPublication", e.target.files[0])
            }
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
