const ShareholderInfo = ({ formData, onChange }) => {
  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Stage 5 - Shareholder Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Last Name */}
          <div>
            <label className="block mb-1">Last Name *</label>
            <input
              className="border p-2 rounded w-full"
              value={formData.shareholder.lastName}
              onChange={(e) =>
                onChange("shareholder", "lastName", e.target.value)
              }
            />
          </div>

          {/* First Name */}
          <div>
            <label className="block mb-1">First Name *</label>
            <input
              className="border p-2 rounded w-full"
              value={formData.shareholder.firstName}
              onChange={(e) =>
                onChange("shareholder", "firstName", e.target.value)
              }
            />
          </div>

          {/* Middle Name */}
          <div>
            <label className="block mb-1">Middle Name</label>
            <input
              className="border p-2 rounded w-full"
              value={formData.shareholder.middleName}
              onChange={(e) =>
                onChange("shareholder", "middleName", e.target.value)
              }
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block mb-1">Date of Birth *</label>
            <input
              className="border p-2 rounded w-full"
              type="date"
              value={formData.shareholder.dateOfBirth}
              onChange={(e) =>
                onChange("shareholder", "dateOfBirth", e.target.value)
              }
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-1">Gender *</label>
            <select
              className="border p-2 rounded w-full"
              value={formData.shareholder.gender}
              onChange={(e) =>
                onChange("shareholder", "gender", e.target.value)
              }
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
              value={formData.shareholder.nationality}
              onChange={(e) =>
                onChange("shareholder", "nationality", e.target.value)
              }
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block mb-1">Phone Number *</label>
            <input
              className="border p-2 rounded w-full"
              type="number"
              value={formData.shareholder.phoneNumber}
              onChange={(e) =>
                onChange("shareholder", "phoneNumber", e.target.value)
              }
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1">Email *</label>
            <input
              className="border p-2 rounded w-full"
              type="email"
              value={formData.shareholder.email}
              onChange={(e) => onChange("shareholder", "email", e.target.value)}
            />
          </div>

          {/* Occupation */}
          <div>
            <label className="block mb-1">Occupation</label>
            <input
              className="border p-2 rounded w-full"
              value={formData.shareholder.occupation}
              onChange={(e) =>
                onChange("shareholder", "occupation", e.target.value)
              }
            />
          </div>

          {/* ID Type */}
          <div>
            <label className="block mb-1">ID Type</label>
            <input
              className="border p-2 rounded w-full"
              value={formData.shareholder.idType}
              onChange={(e) =>
                onChange("shareholder", "idType", e.target.value)
              }
            />
          </div>

          {/* ID Number */}
          <div>
            <label className="block mb-1">ID Number</label>
            <input
              className="border p-2 rounded w-full"
              value={formData.shareholder.idNumber}
              onChange={(e) =>
                onChange("shareholder", "idNumber", e.target.value)
              }
            />
          </div>

          {/* Share Type */}
          <div>
            <label className="block mb-1">Share Type</label>
            <input
              className="border p-2 rounded w-full"
              value={formData.shareholder.shareType}
              onChange={(e) =>
                onChange("shareholder", "shareType", e.target.value)
              }
            />
          </div>

          {/* Share Percentage */}
          <div>
            <label className="block mb-1">Share Percentage</label>
            <input
              className="border p-2 rounded w-full"
              value={formData.shareholder.sharePercentage}
              onChange={(e) =>
                onChange("shareholder", "sharePercentage", e.target.value)
              }
            />
          </div>

          {/* Share Division */}
          <div>
            <label className="block mb-1">Share Division</label>
            <input
              className="border p-2 rounded w-full"
              value={formData.shareholder.shareDivision}
              onChange={(e) =>
                onChange("shareholder", "shareDivision", e.target.value)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareholderInfo;
