const TrusteeDetails = ({ formData, trusteeIndex, onChange }) => {
  const handleChange = (field, value) => {
    onChange(field, value);
    console.log(field, value);
  };

  return (
    <div className="bg-white p-4 rounded shadow-md mb-4">
      <h2 className="text-xl font-semibold mb-4">
        Trustee {trusteeIndex + 1} - Details
      </h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium mb-1">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            className="w-full p-2 border mb-4 rounded"
          />

          <label htmlFor="firstName" className="block text-sm font-medium mb-1">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            className="w-full p-2 border mb-4 rounded"
          />

          <label
            htmlFor="middleName"
            className="block text-sm font-medium mb-1"
          >
            Middle Name
          </label>
          <input
            type="text"
            id="middleName"
            placeholder="Middle Name"
            value={formData.middleName}
            onChange={(e) => handleChange("middleName", e.target.value)}
            className="w-full p-2 border mb-4 rounded"
          />
        </div>

        <div>
          <label htmlFor="DOB" className="block text-sm font-medium mb-1">
            Date of Birth
          </label>
          <input
            type="date"
            id="DOB"
            placeholder="Date of Birth"
            value={formData.DOB}
            onChange={(e) => handleChange("DOB", e.target.value)}
            className="w-full p-2 border mb-4 rounded"
          />

          <label htmlFor="gender" className="block text-sm font-medium mb-1">
            Gender
          </label>
          <select
            id="gender"
            value={formData.gender}
            onChange={(e) => handleChange("gender", e.target.value)}
            className="w-full p-2 border mb-4 rounded"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <label
            htmlFor="nationality"
            className="block text-sm font-medium mb-1"
          >
            Nationality
          </label>
          <input
            type="text"
            id="nationality"
            placeholder="Nationality"
            value={formData.nationality}
            onChange={(e) => handleChange("nationality", e.target.value)}
            className="w-full p-2 border mb-4 rounded"
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium mb-1"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={(e) => handleChange("phoneNumber", e.target.value)}
            className="w-full p-2 border mb-4 rounded"
          />
        </div>

        <div className="w-full">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full p-2 border mb-4 rounded"
          />
        </div>
        {/* ID Type and ID Number */}
        <div>
          <label htmlFor="idType" className="block text-sm font-medium mb-1">
            ID Type
          </label>
          <input
            type="text"
            id="idType"
            placeholder="ID Type"
            value={formData.idType || ""}
            onChange={(e) => handleChange("idType", e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="idNumber" className="block text-sm font-medium mb-1">
            ID Number
          </label>
          <input
            type="text"
            id="idNumber"
            placeholder="ID Number"
            value={formData.idNumber || ""}
            onChange={(e) => handleChange("idNumber", e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Chairman and Secretary Radio Buttons */}
        {/* Chairman Radio Buttons */}
        <div className="col-span-2 flex gap-4 items-center">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name={`chairman-${trusteeIndex}`}
              checked={formData.isChairman === true}
              onChange={() => handleChange("isChairman", true)}
            />
            This Trustee is Chairman
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name={`chairman-${trusteeIndex}`}
              checked={formData.isChairman === false}
              onChange={() => handleChange("isChairman", false)}
            />
            No
          </label>
        </div>

        {/* Secretary Radio Buttons */}
        <div className="col-span-2 flex gap-4 items-center">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name={`secretary-${trusteeIndex}`}
              checked={formData.isSecretary === true}
              onChange={() => handleChange("isSecretary", true)}
            />
            This Trustee is Secretary
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name={`secretary-${trusteeIndex}`}
              checked={formData.isSecretary === false}
              onChange={() => handleChange("isSecretary", false)}
            />
            No
          </label>
        </div>
      </form>
    </div>
  );
};

export default TrusteeDetails;
