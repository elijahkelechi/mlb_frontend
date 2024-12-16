const ProprietorDocuments = ({ formData, onFileUpload }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-xl font-semibold mb-4">Proprietor Document Upload</h2>
    <div className="space-y-4">
      <label>
        Valid ID*:
        <input
          type="file"
          onChange={(e) =>
            onFileUpload("documents", "validId", e.target.files[0])
          }
          className="w-full p-2 border rounded"
        />
      </label>
      <label>
        Passport Photo*:
        <input
          type="file"
          onChange={(e) =>
            onFileUpload("documents", "passportPhoto", e.target.files[0])
          }
          className="w-full p-2 border rounded"
        />
      </label>
      <label>
        Signature*:
        <input
          type="file"
          onChange={(e) =>
            onFileUpload("documents", "signature", e.target.files[0])
          }
          className="w-full p-2 border rounded"
        />
      </label>
    </div>
  </div>
);
export default ProprietorDocuments;
