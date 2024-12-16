import React, { useState } from "react";
import { motion } from "framer-motion";
import BusinessDetails from "./FormStages/BusinessDetails";
import BusinessAddress from "./FormStages/BusinessAddress";
import ProprietorInfo from "./FormStages/ProprietorInfo";
import ProprietorAddress from "./FormStages/ProprietoAddress";
import ProprietorDocuments from "./FormStages/ProprietorDocuments";

import bgImage from "../../assets/formImage.webp";

// Main MultiStageForm Component
const MultiStageForm = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [formData, setFormData] = useState({
    businessDetails: {
      businessNameOption1: "",
      businessNameOption2: "",
      businessActivity: "",
      businessPhone: "",
      businessEmail: "",
    },
    businessAddress: {
      state: "",
      lga: "",
      city: "",
      postCode: "",
      streetName: "",
      buildingNumber: "",
    },
    proprietorInfo: {
      surname: "",
      firstName: "",
      middleName: "",
      gender: "",
      occupation: "",
      dateOfBirth: "",
      nationality: "",
      phoneNumber: "",
      email: "",
      idType: "",
      idNumber: "",
    },
    proprietorAddress: {
      country: "",
      state: "",
      lga: "",
      city: "",
      postCode: "",
      streetName: "",
      houseNumber: "",
    },
    documents: {
      validId: null,
      passportPhoto: null,
      signature: null,
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
          Business Name Registration Form
        </h1>

        {/* Render the dynamic stages based on currentStage */}
        {currentStage === 1 && (
          <BusinessDetails formData={formData} onChange={handleInputChange} />
        )}
        {currentStage === 2 && (
          <BusinessAddress formData={formData} onChange={handleInputChange} />
        )}
        {currentStage === 3 && (
          <ProprietorInfo formData={formData} onChange={handleInputChange} />
        )}
        {currentStage === 4 && (
          <ProprietorAddress formData={formData} onChange={handleInputChange} />
        )}
        {currentStage === 5 && (
          <ProprietorDocuments
            formData={formData}
            onFileUpload={handleFileUpload}
          />
        )}
        {currentStage === 6 && (
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
          {currentStage < 6 && (
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
