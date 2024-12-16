const CompanyInformation = ({ formData, onChange }) => {
  return (
    <div className=" flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Stage 1 - Company Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">Company Name Option 1 *</label>
            <input
              className="border p-2 rounded w-full"
              type="text"
              value={formData.company.businessNameOption1}
              onChange={(e) =>
                onChange("company", "businessNameOption1", e.target.value)
              }
            />
          </div>

          <div>
            <label className="block mb-1">Company Name Option 2 *</label>
            <input
              className="border p-2 rounded w-full"
              type="text"
              value={formData.company.businessNameOption2}
              onChange={(e) =>
                onChange("company", "businessNameOption2", e.target.value)
              }
            />
          </div>

          <div>
            <label className="block mb-1">Company Nominal Share *</label>
            <input
              className="border p-2 rounded w-full"
              type="text"
              value={formData.company.nominalShare}
              onChange={(e) =>
                onChange("company", "nominalShare", e.target.value)
              }
            />
          </div>

          <div>
            <label className="block mb-1">Company Phone Number *</label>
            <input
              className="border p-2 rounded w-full"
              type="text"
              value={formData.company.businessPhone}
              onChange={(e) =>
                onChange("company", "businessPhone", e.target.value)
              }
            />
          </div>

          <div>
            <label className="block mb-1">Company Email *</label>
            <input
              className="border p-2 rounded w-full"
              type="email"
              value={formData.company.businessEmail}
              onChange={(e) =>
                onChange("company", "businessEmail", e.target.value)
              }
            />
          </div>

          <div>
            <label className="block mb-1">Principal Business Activity *</label>
            <input
              className="border p-2 rounded w-full"
              type="text"
              value={formData.company.businessActivity}
              onChange={(e) =>
                onChange("company", "businessActivity", e.target.value)
              }
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-1">Other Business Activities *</label>
            <textarea
              className="border p-2 rounded w-full"
              value={formData.company.otherBusinessActivities}
              onChange={(e) =>
                onChange("company", "otherBusinessActivities", e.target.value)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInformation;
