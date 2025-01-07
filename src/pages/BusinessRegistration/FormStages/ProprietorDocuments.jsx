import React, { useEffect, useState } from "react";

const ProprietorDocuments = ({ formData, onFileUpload, setDisableNext }) => {
  const { validId, passportPhoto, signature } = formData.documents;

  const [fileNames, setFileNames] = useState({
    validId: validId ? validId.name : "",
    passportPhoto: passportPhoto ? passportPhoto.name : "",
    signature: signature ? signature.name : "",
  });

  // Validate fields to enable/disable "Next" button
  useEffect(() => {
    const isValid = validId && passportPhoto && signature;
    setDisableNext(!isValid);
  }, [validId, passportPhoto, signature, setDisableNext]);

  // Update file name in state when file is uploaded
  const handleFileChange = (field, file) => {
    setFileNames((prev) => ({
      ...prev,
      [field]: file.name,
    }));
    onFileUpload("documents", field, file); // Call the parent handler to update formData
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Proprietor Document Upload</h2>
      <div className="space-y-4">
        <label>
          Valid ID*:
          <input
            type="file"
            onChange={(e) => handleFileChange("validId", e.target.files[0])}
            className="w-full p-2 border rounded"
          />
          {fileNames.validId && (
            <p className="mt-2 text-sm text-gray-600">{fileNames.validId}</p>
          )}
        </label>
        <label>
          Passport Photo*:
          <input
            type="file"
            onChange={(e) =>
              handleFileChange("passportPhoto", e.target.files[0])
            }
            className="w-full p-2 border rounded"
          />
          {fileNames.passportPhoto && (
            <p className="mt-2 text-sm text-gray-600">
              {fileNames.passportPhoto}
            </p>
          )}
        </label>
        <label>
          Signature*:
          <input
            type="file"
            onChange={(e) => handleFileChange("signature", e.target.files[0])}
            className="w-full p-2 border rounded"
          />
          {fileNames.signature && (
            <p className="mt-2 text-sm text-gray-600">{fileNames.signature}</p>
          )}
        </label>
      </div>
    </div>
  );
};

export default ProprietorDocuments;
