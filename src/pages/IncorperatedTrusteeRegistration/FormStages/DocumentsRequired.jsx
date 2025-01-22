const DocumentsRequired = ({ formData, trusteeIndex, onChange }) => {
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
      <form>
        {/* File Uploads */}
        <div>
          <label htmlFor="validID" className="block text-sm font-medium mb-1">
            Upload Valid ID
          </label>
          <input
            type="file"
            id="validID"
            accept="image/*,.pdf"
            onChange={(e) => handleFileChange("validID", e)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="signature" className="block text-sm font-medium mb-1">
            Upload Signature
          </label>
          <input
            type="file"
            id="signature"
            accept="image/*"
            onChange={(e) => handleFileChange("signature", e)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label
            htmlFor="passportPhoto"
            className="block text-sm font-medium mb-1"
          >
            Upload Passport Photograph
          </label>
          <input
            type="file"
            id="passportPhoto"
            accept="image/*"
            onChange={(e) => handleFileChange("passportPhoto", e)}
            className="w-full p-2 border rounded"
          />
        </div>
      </form>
    </div>
  );
};
export default DocumentsRequired;
