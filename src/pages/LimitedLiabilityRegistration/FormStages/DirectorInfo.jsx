const DirectorInfo = ({ formData, onChange }) => {
  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Stage 3 - Director Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Surname */}
          <div>
            <label className="block mb-1">Surname *</label>
            <input
              className="border p-2 rounded w-full"
              type="text"
              value={formData.director.surname}
              onChange={(e) => onChange("director", "surname", e.target.value)}
            />
          </div>

          {/* First Name */}
          <div>
            <label className="block mb-1">First Name *</label>
            <input
              className="border p-2 rounded w-full"
              type="text"
              value={formData.director.firstName}
              onChange={(e) =>
                onChange("director", "firstName", e.target.value)
              }
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block mb-1">Date of Birth *</label>
            <input
              className="border p-2 rounded w-full"
              type="date"
              value={formData.director.dateOfBirth}
              onChange={(e) =>
                onChange("director", "dateOfBirth", e.target.value)
              }
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-1">Gender *</label>
            <select
              className="border p-2 rounded w-full"
              value={formData.director.gender}
              onChange={(e) => onChange("director", "gender", e.target.value)}
            >
              <option value="">Select...</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Nationality */}
          <div>
            <label className="block mb-1">Nationality *</label>
            <input
              className="border p-2 rounded w-full"
              type="text"
              value={formData.director.nationality}
              onChange={(e) =>
                onChange("director", "nationality", e.target.value)
              }
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block mb-1">Phone Number *</label>
            <input
              className="border p-2 rounded w-full"
              type="number"
              value={formData.director.phoneNumber}
              onChange={(e) =>
                onChange("director", "phoneNumber", e.target.value)
              }
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1">Email *</label>
            <input
              className="border p-2 rounded w-full"
              type="email"
              value={formData.director.email}
              onChange={(e) => onChange("director", "email", e.target.value)}
            />
          </div>

          {/* ID Type */}
          <div>
            <label className="block mb-1">ID Type *</label>
            <input
              className="border p-2 rounded w-full"
              type="text"
              value={formData.director.idType}
              onChange={(e) => onChange("director", "idType", e.target.value)}
            />
          </div>

          {/* ID Number */}
          <div>
            <label className="block mb-1">ID Number *</label>
            <input
              className="border p-2 rounded w-full"
              type="text"
              value={formData.director.idNumber}
              onChange={(e) => onChange("director", "idNumber", e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorInfo;
