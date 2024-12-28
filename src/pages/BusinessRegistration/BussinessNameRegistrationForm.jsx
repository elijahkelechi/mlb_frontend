import React, { useState } from "react";
import { motion } from "framer-motion";
import BusinessDetails from "./FormStages/BusinessDetails";
import BusinessAddress from "./FormStages/BusinessAddress";
import ProprietorInfo from "./FormStages/ProprietorInfo";
import ProprietorAddress from "./FormStages/ProprietoAddress";
import ProprietorDocuments from "./FormStages/ProprietorDocuments";
import bgImage from "../../assets/formImage.webp";
import axios from "axios";
import { toast } from "react-toastify";

const MultiStageForm = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [disableNext, setDisableNext] = useState(true); // State to disable/enable Next button
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    setIsSubmitting(true);
    const formattedData = new FormData();

    // Append each form field and their values
    Object.keys(formData).forEach((section) => {
      Object.keys(formData[section]).forEach((field) => {
        const value = formData[section][field];
        if (value instanceof File) {
          // Handle file inputs
          formattedData.append(field, value); // Append directly, not under a nested structure
        } else {
          formattedData.append(`${section}.${field}`, value);
        }
      });
    });

    try {
      const response = await axios.post(
        "https://mlb-backend-4asz.onrender.com/api/v1/BusinessNameform/submit",
        formattedData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      toast.success("Form submitted successfully");
      console.log(response);
    } catch (error) {
      toast.error(error?.response?.data?.msg || "Failed to submit form");
      console.log(error);
    }
    setIsSubmitting(false);
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="p-8 bg-transparent min-h-screen"
      >
        <h1 className="text-3xl font-bold text-cyan-500 text-center mb-8">
          Business Name Registration Form
        </h1>

        {currentStage === 1 && (
          <BusinessDetails
            formData={formData}
            onChange={handleInputChange}
            setDisableNext={setDisableNext}
          />
        )}
        {currentStage === 2 && (
          <BusinessAddress
            formData={formData}
            onChange={handleInputChange}
            setDisableNext={setDisableNext}
          />
        )}
        {currentStage === 3 && (
          <ProprietorInfo
            formData={formData}
            onChange={handleInputChange}
            setDisableNext={setDisableNext}
          />
        )}
        {currentStage === 4 && (
          <ProprietorAddress
            formData={formData}
            onChange={handleInputChange}
            setDisableNext={setDisableNext}
          />
        )}
        {currentStage === 5 && (
          <ProprietorDocuments
            formData={formData}
            onFileUpload={handleFileUpload}
            setDisableNext={setDisableNext}
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
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span>
                  {" "}
                  <span className="loading loading-bars"></span> Submitting...
                </span>
              ) : (
                <span> Submit</span>
              )}
            </button>
          </div>
        )}

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
              className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded ${
                disableNext ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={nextStage}
              disabled={disableNext}
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
