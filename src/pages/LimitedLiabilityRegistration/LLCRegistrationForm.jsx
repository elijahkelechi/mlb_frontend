import React, { useState } from "react";
import { motion } from "framer-motion";
import CompanyInformation from "./FormStages/CompanyInformation";
import CompanyAddress from "./FormStages/CompanyAddress";
import DirectorInfo from "./FormStages/DirectorInfo";
import DirectorResidentialAddress from "./FormStages/DirectorResidentialAddress";
import ShareholderInfo from "./FormStages/ShareholderInfo";
import ShareholderAddress from "./FormStages/ShareholderAddress";
import SecretaryInfo from "./FormStages/SecretaryInfo";
import SecretaryAddress from "./FormStages/SecretaryAddress";
import bgImage from "../../assets/formImage.webp";

// Main MultiStageForm Component
const MultiStageForm = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [formData, setFormData] = useState({
    company: {
      businessNameOption1: "",
      businessNameOption2: "",
      nominalShare: "",
      businessPhone: "",
      businessEmail: "",
      businessActivity: "",
      otherBusinessActivities: "",
    },
    companyAddress: {
      state: "",
      lga: "",
      city: "",
      postCode: "",
      streetName: "",
      houseNumber: "",
    },
    director: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      nationality: "",
      phoneNumber: "",
      email: "",
      idType: "",
      idNumber: "",
    },
    directorAddress: {
      country: "",
      state: "",
      lga: "",
      city: "",
      postalCode: "",
      streetName: "",
      houseNumber: "",
    },
    directorDocuments: {
      directorId: null,
      directorSignature: null,
      directorPassport: null,
    },
    shareholder: {
      firstName: "",
      lastName: "",
      middleName: "",
      dateOfBirth: "",
      gender: "",
      nationality: "",
      phoneNumber: "",
      email: "",
      occupation: "",
      idType: "",
      idNumber: "",
      shareType: "",
      sharePercentage: "",
      shareDivision: "",
    },
    shareholderAddress: {
      country: "",
      state: "",
      lga: "",
      city: "",
      postalCode: "",
      streetName: "",
      houseNumber: "",
    },
    shareholderDocuments: {
      shareholderId: null,
      shareholderSignature: null,
      shareholderport: null,
    },
    secretary: {
      firstName: "",
      lastName: "",
      gender: "",
      dateOfBirth: "",
      nationality: "",
      phoneNumber: "",
      email: "",
      idType: "",
      idNumber: "",
    },
    secretaryAddress: {
      country: "",
      state: "",
      lga: "",
      city: "",
      postalCode: "",
      streetName: "",
      houseNumber: "",
    },
    secretaryDocuments: {
      validId: null,
      signature: null,
      passport: null,
    },
  });

  const handleInputChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleFileUpload = (section, field, file) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: file,
      },
    }));
  };

  const nextStage = () => setCurrentStage((prev) => prev + 1);
  const previousStage = () => setCurrentStage((prev) => prev - 1);

  const handleSubmit = async () => {
    console.log("Submitted Data:", formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Animated container with motion applied */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="p-8 bg-transparent min-h-screen"
      >
        <h1 className="text-3xl font-bold text-cyan-500 text-center mb-8">
          Limited Liability Company Registration Form
        </h1>

        {/* Render the dynamic stages based on currentStage */}
        {currentStage === 1 && (
          <CompanyInformation
            formData={formData}
            onChange={handleInputChange}
          />
        )}
        {currentStage === 2 && (
          <CompanyAddress formData={formData} onChange={handleInputChange} />
        )}
        {currentStage === 3 && (
          <DirectorInfo formData={formData} onChange={handleInputChange} />
        )}
        {currentStage === 4 && (
          <DirectorResidentialAddress
            formData={formData}
            onChange={handleFileUpload}
          />
        )}
        {currentStage === 5 && (
          <ShareholderInfo formData={formData} onChange={handleInputChange} />
        )}
        {currentStage === 6 && (
          <ShareholderAddress
            formData={formData}
            onChange={handleInputChange}
          />
        )}
        {currentStage === 7 && (
          <SecretaryInfo formData={formData} onChange={handleFileUpload} />
        )}
        {currentStage === 8 && (
          <SecretaryAddress formData={formData} onChange={handleFileUpload} />
        )}
        {currentStage === 9 && (
          <div className="bg-gray-50 p-4 justify-center place-items-center">
            <h2 className="text-xl font-semibold mb-4 mt-8 text-center text-gray-800">
              Review & Submit
            </h2>
            <button
              className="text-center mt-8 bg-blue-500 text-gray-50 px-4 py-2 rounded hover:bg-gray-800"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        )}

        {/* Navigation buttons */}
        <div className="flex justify-between mt-4">
          {currentStage > 1 && (
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded"
              onClick={previousStage}
            >
              Previous
            </button>
          )}
          {currentStage < 9 && (
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              onClick={nextStage}
            >
              Next
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default MultiStageForm;
