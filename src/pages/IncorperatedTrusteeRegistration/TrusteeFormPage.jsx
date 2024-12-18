import React, { useState } from "react";
import { motion } from "framer-motion";
import bgImage from "../../assets/formImage.webp";
import TrusteeDetails from "./FormStages/TrusteeDetails";
import TrusteeAddress from "./FormStages/TrusteeAdress";
import TrusteeDocuments from "./FormStages/TrusteeDocuments";

const MultiStageForm = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [formData, setFormData] = useState({
    trustees: [
      {
        id: 1,
        details: {
          lastName: "",
          firstName: "",
          middleName: "",
          DOB: "",
          gender: "",
          nationality: "",
          phoneNumber: "",
          email: "",
        },
        address: {
          country: "",
          state: "",
          lga: "",
          city: "",
          postCode: "",
          streetName: "",
          houseNumber: "",
        },
        documents: {
          idType: "",
          idNumber: "",
          isChairman: false,
          isSecretary: false,
          validID: null,
          signature: null,
          passportPhoto: null,
          minutesOfMeetings: null, // Optional
          organizationConstitution: null, // Optional
          trusteeDeclarationForm: null, // Optional
          newspaperPublication: null, // Optional
        },
      },
      {
        id: 2,
        details: {
          lastName: "",
          firstName: "",
          middleName: "",
          DOB: "",
          gender: "",
          nationality: "",
          phoneNumber: "",
          email: "",
        },
        address: {
          country: "",
          state: "",
          lga: "",
          city: "",
          postCode: "",
          streetName: "",
          houseNumber: "",
        },
        documents: {
          idType: "",
          idNumber: "",
          isChairman: false,
          isSecretary: false,
          validID: null,
          signature: null,
          passportPhoto: null,
          minutesOfMeetings: null, // Optional
          organizationConstitution: null, // Optional
          trusteeDeclarationForm: null, // Optional
          newspaperPublication: null, // Optional
        },
      },
    ],
  });

  const addTrustee = () => {
    if (formData.trustees.length < 10) {
      setFormData((prev) => ({
        ...prev,
        trustees: [
          ...prev.trustees,
          {
            id: prev.trustees.length + 1,
            details: {
              lastName: "",
              firstName: "",
              middleName: "",
              DOB: "",
              gender: "",
              nationality: "",
              phoneNumber: "",
              email: "",
            },
            address: {
              country: "",
              state: "",
              lga: "",
              city: "",
              postCode: "",
              streetName: "",
              houseNumber: "",
            },
            documents: {
              idType: "",
              idNumber: "",
              isChairman: false,
              isSecretary: false,
              validID: null,
              signature: null,
              passportPhoto: null,
              minutesOfMeetings: null, // Optional
              organizationConstitution: null, // Optional
              trusteeDeclarationForm: null, // Optional
              newspaperPublication: null, // Optional
            },
          },
        ],
      }));
    }
  };

  const removeTrustee = () => {
    if (formData.trustees.length > 2) {
      setFormData((prev) => ({
        ...prev,
        trustees: prev.trustees.slice(0, -1),
      }));
    }
  };

  const handleInputChange = (trusteeIndex, section, field, value) => {
    setFormData((prev) => {
      const updatedTrustees = [...prev.trustees];
      updatedTrustees[trusteeIndex] = {
        ...updatedTrustees[trusteeIndex],
        [section]: {
          ...updatedTrustees[trusteeIndex][section],
          [field]: value,
        },
      };
      return { ...prev, trustees: updatedTrustees };
    });
  };

  const nextStage = () => setCurrentStage((prev) => Math.min(prev + 1, 3));
  const previousStage = () => setCurrentStage((prev) => Math.max(prev - 1, 1));

  const handleSubmit = () => {
    console.log("Submitted Data:", formData);
    alert("Form Submitted Successfully!");
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
          Trustee Registration Form
        </h1>

        {currentStage === 1 &&
          formData.trustees.map((trustee, index) => (
            <TrusteeDetails
              key={trustee.id}
              trusteeIndex={index}
              formData={trustee.details}
              onChange={(field, value) =>
                handleInputChange(index, "details", field, value)
              }
            />
          ))}

        {currentStage === 2 &&
          formData.trustees.map((trustee, index) => (
            <TrusteeAddress
              key={trustee.id}
              trusteeIndex={index}
              formData={trustee.address}
              onChange={(field, value) =>
                handleInputChange(index, "address", field, value)
              }
            />
          ))}

        {currentStage === 3 &&
          formData.trustees.map((trustee, index) => (
            <TrusteeDocuments
              key={trustee.id}
              trusteeIndex={index}
              formData={trustee.documents}
              onChange={(field, value) =>
                handleInputChange(index, "documents", field, value)
              }
            />
          ))}

        <div className="flex justify-between mt-4">
          {currentStage > 1 && (
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded"
              onClick={previousStage}
            >
              Previous
            </button>
          )}
          {currentStage < 3 && (
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              onClick={nextStage}
            >
              Next
            </button>
          )}
          {currentStage === 3 && (
            <button
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              onClick={handleSubmit}
            >
              Submit
            </button>
          )}
        </div>

        <div className="flex justify-between mt-4">
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded"
            onClick={addTrustee}
            disabled={formData.trustees.length >= 10}
          >
            Add Trustee
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded"
            onClick={removeTrustee}
            disabled={formData.trustees.length <= 2}
          >
            Remove Trustee
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default MultiStageForm;
