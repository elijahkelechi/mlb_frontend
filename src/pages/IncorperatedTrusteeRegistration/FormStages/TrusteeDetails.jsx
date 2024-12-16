const TrusteeDetails = ({ formData, trusteeIndex, onChange }) => {
  const handleChange = (field, value) => {
    onChange(field, value);
  };

  return (
    <div className="bg-white p-4 rounded shadow-md mb-4">
      <h2 className="text-xl font-semibold mb-4">
        Trustee {trusteeIndex + 1} - Details
      </h2>
      <form>
        <input
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) => handleChange("lastName", e.target.value)}
          className="w-full p-2 border mb-4 rounded"
        />
        <input
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) => handleChange("firstName", e.target.value)}
          className="w-full p-2 border mb-4 rounded"
        />
        <input
          type="text"
          placeholder="Middle Name"
          value={formData.middleName}
          onChange={(e) => handleChange("middleName", e.target.value)}
          className="w-full p-2 border mb-4 rounded"
        />
        <input
          type="date"
          placeholder="Date of Birth"
          value={formData.DOB}
          onChange={(e) => handleChange("DOB", e.target.value)}
          className="w-full p-2 border mb-4 rounded"
        />
        <select
          value={formData.gender}
          onChange={(e) => handleChange("gender", e.target.value)}
          className="w-full p-2 border mb-4 rounded"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="text"
          placeholder="Nationality"
          value={formData.nationality}
          onChange={(e) => handleChange("nationality", e.target.value)}
          className="w-full p-2 border mb-4 rounded"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={(e) => handleChange("phoneNumber", e.target.value)}
          className="w-full p-2 border mb-4 rounded"
        />
        <input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className="w-full p-2 border mb-4 rounded"
        />
      </form>
    </div>
  );
};

export default TrusteeDetails;
