import { useEffect } from "react";

const CompanyInformation = ({ formData, onChange, setDisableNext }) => {
  const { state, lga, city, postCode, streetName, houseNumber } =
    formData.companyAddress;
  const {
    businessNameOption1,
    businessNameOption2,
    nominalShare,
    businessPhone,
    businessEmail,
    businessActivity,
    otherBusinessActivities,
  } = formData.company;

  // Validate fields to enable/disable "Next" button
  useEffect(() => {
    const isValid =
      businessNameOption1?.trim() &&
      businessNameOption2?.trim() &&
      nominalShare?.trim() &&
      businessPhone?.trim() &&
      businessEmail?.trim() &&
      businessActivity?.trim() &&
      otherBusinessActivities?.trim() &&
      state?.trim() &&
      lga?.trim() &&
      city?.trim() &&
      postCode?.trim() &&
      streetName?.trim() &&
      houseNumber?.trim();

    console.log("Validation Result:", isValid); // Debugging
    setDisableNext(!isValid);
  }, [
    businessNameOption1,
    businessNameOption2,
    nominalShare,
    businessPhone,
    businessEmail,
    businessActivity,
    otherBusinessActivities,
    state,
    lga,
    city,
    postCode,
    streetName,
    houseNumber,
    setDisableNext,
  ]);

  return (
    <div>
      {/* Company Information Section */}
      <div className="flex items-center justify-center bg-gray-50">
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
                value={businessNameOption1}
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
                value={businessNameOption2}
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
                value={nominalShare}
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
                value={businessPhone}
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
                value={businessEmail}
                onChange={(e) =>
                  onChange("company", "businessEmail", e.target.value)
                }
              />
            </div>

            <div>
              <label className="block mb-1">
                Principal Business Activity *
              </label>
              <input
                className="border p-2 rounded w-full"
                type="text"
                value={businessActivity}
                onChange={(e) =>
                  onChange("company", "businessActivity", e.target.value)
                }
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-1">Other Business Activities *</label>
              <textarea
                className="border p-2 rounded w-full"
                value={otherBusinessActivities}
                onChange={(e) =>
                  onChange("company", "otherBusinessActivities", e.target.value)
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Company Address Section */}
      <div className="flex items-center justify-center bg-gray-50 mt-6">
        <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Company Address
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">State *</label>
              <input
                className="border p-2 rounded w-full"
                type="text"
                value={state}
                onChange={(e) =>
                  onChange("companyAddress", "state", e.target.value)
                }
              />
            </div>

            <div>
              <label className="block mb-1">L.G.A *</label>
              <input
                className="border p-2 rounded w-full"
                type="text"
                value={lga}
                onChange={(e) =>
                  onChange("companyAddress", "lga", e.target.value)
                }
              />
            </div>

            <div>
              <label className="block mb-1">City/Town *</label>
              <input
                className="border p-2 rounded w-full"
                type="text"
                value={city}
                onChange={(e) =>
                  onChange("companyAddress", "city", e.target.value)
                }
              />
            </div>

            <div>
              <label className="block mb-1">Post Code *</label>
              <input
                className="border p-2 rounded w-full"
                type="text"
                value={postCode}
                onChange={(e) =>
                  onChange("companyAddress", "postCode", e.target.value)
                }
              />
            </div>

            <div>
              <label className="block mb-1">Street Name *</label>
              <input
                className="border p-2 rounded w-full"
                type="text"
                value={streetName}
                onChange={(e) =>
                  onChange("companyAddress", "streetName", e.target.value)
                }
              />
            </div>

            <div>
              <label className="block mb-1">House Number *</label>
              <input
                className="border p-2 rounded w-full"
                type="text"
                value={houseNumber}
                onChange={(e) =>
                  onChange("companyAddress", "houseNumber", e.target.value)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInformation;
