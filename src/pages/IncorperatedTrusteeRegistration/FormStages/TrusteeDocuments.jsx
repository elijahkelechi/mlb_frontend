const TrusteeDocuments = ({ formData, trusteeIndex, onChange }) => {
  const handleChange = (field, value) => {
    onChange(field, value);
  };

  return (
    <div className="bg-white p-4 rounded shadow-md mb-4">
      <h2 className="text-xl font-semibold mb-4">
        Trustee {trusteeIndex + 1} - Documents
      </h2>
      <form>
        <input
          type="text"
          placeholder="ID Type"
          value={formData.idType}
          onChange={(e) => handleChange("idType", e.target.value)}
          className="w-full p-2 border mb-4 rounded"
        />
        <input
          type="text"
          placeholder="ID Number"
          value={formData.idNumber}
          onChange={(e) => handleChange("idNumber", e.target.value)}
          className="w-full p-2 border mb-4 rounded"
        />
      </form>
    </div>
  );
};

export default TrusteeDocuments;
