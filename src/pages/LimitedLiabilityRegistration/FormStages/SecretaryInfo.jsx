const SecretaryInfo = ({ formData, onChange }) => {
  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Stage 7 - Secretary Info(optional)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Last Name */}
          <div>
            <label className="block mb-1">Last Name</label>
            <input
              className="border p-2 rounded w-full"
              value={formData.secretary.lastName}
              onChange={(e) =>
                onChange("secretary", "lastName", e.target.value)
              }
            />
          </div>

          {/* First Name */}
          <div>
            <label className="block mb-1">First Name</label>
            <input
              className="border p-2 rounded w-full"
              value={formData.secretary.firstName}
              onChange={(e) =>
                onChange("secretary", "firstName", e.target.value)
              }
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block mb-1">Phone Number</label>
            <input
              type="number"
              className="border p-2 rounded w-full"
              value={formData.secretary.phoneNumber}
              onChange={(e) =>
                onChange("secretary", "phoneNumber", e.target.value)
              }
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1">Email</label>
            <input
              className="border p-2 rounded w-full"
              value={formData.secretary.email}
              onChange={(e) => onChange("secretary", "email", e.target.value)}
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-1">Gender *</label>
            <select
              className="border p-2 rounded w-full"
              value={formData.secretary.gender}
              onChange={(e) => onChange("secretary", "gender", e.target.value)}
            >
              <option value="">Select...</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block mb-1">Date of Birth *</label>
            <input
              className="border p-2 rounded w-full"
              type="date"
              value={formData.secretary.dateOfBirth}
              onChange={(e) =>
                onChange("secretary", "dateOfBirth", e.target.value)
              }
            />
          </div>

          {/* Nationality */}
          <div>
            <label className="block mb-1">Nationality *</label>
            <input
              className="border p-2 rounded w-full"
              value={formData.secretary.nationality}
              onChange={(e) =>
                onChange("secretary", "nationality", e.target.value)
              }
            />
          </div>

          {/* ID Type */}
          <div>
            <label className="block mb-1">ID Type *</label>
            <input
              className="border p-2 rounded w-full"
              value={formData.secretary.idType}
              onChange={(e) => onChange("secretary", "idType", e.target.value)}
            />
          </div>

          {/* ID Number */}
          <div>
            <label className="block mb-1">ID Number *</label>
            <input
              className="border p-2 rounded w-full"
              value={formData.secretary.idNumber}
              onChange={(e) =>
                onChange("secretary", "idNumber", e.target.value)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecretaryInfo;
