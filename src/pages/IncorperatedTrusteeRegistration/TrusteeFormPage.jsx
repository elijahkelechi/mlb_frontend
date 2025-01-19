import React, { useState } from "react";
import { motion } from "framer-motion";
import bgImage from "../../assets/formImage.webp";
import TrusteeDetails from "./FormStages/TrusteeDetails";
import TrusteeAddress from "./FormStages/TrusteeAdress";
import TrusteeDocuments from "./FormStages/TrusteeDocuments";
import TrusteeReview from "./TrusteeReview";
import { toast } from "react-toastify";
import { customFetch } from "../../utils";
import { PaystackButton } from "react-paystack";

const MultiStageForm = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [currentTrusteeIndex, setCurrentTrusteeIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
          idType: "",
          idNumber: "",
          isChairman: null,
          isSecretary: null,
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
          validID: null,
          signature: null,
          passportPhoto: null,
          minutesOfMeetings: null,
          organizationConstitution: null,
          trusteeDeclarationForm: null,
          newspaperPublication: null,
        },
        completed: false,
      },
    ],
  });

  const checkFirstStage = () => {
    const trustee = formData.trustees[currentTrusteeIndex];
    const details = trustee.details;
    const address = trustee.address;
    return (
      details.lastName &&
      details.firstName &&
      details.DOB &&
      details.gender &&
      details.nationality &&
      details.phoneNumber &&
      details.email &&
      details.idNumber &&
      details.idType &&
      details.isChairman !== null &&
      details.isSecretary !== null &&
      address.country &&
      address.state &&
      address.city &&
      address.postCode &&
      address.streetName &&
      address.houseNumber
    );
  };

  const checkSecondStage = () => {
    const documents = formData.trustees[currentTrusteeIndex].documents;

    return documents.validID && documents.signature && documents.passportPhoto;
  };

  const handleInputChange = (section, field, value) => {
    setFormData((prev) => {
      const updatedTrustees = [...prev.trustees];
      updatedTrustees[currentTrusteeIndex] = {
        ...updatedTrustees[currentTrusteeIndex],
        [section]: {
          ...updatedTrustees[currentTrusteeIndex][section],
          [field]: value,
        },
      };
      return { ...prev, trustees: updatedTrustees };
    });
  };

  const addTrustee = () => {
    const handleScrollToTop = () => {
      window.scrollTo(0, 0);
    };

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
            idType: "",
            idNumber: "",
            isChairman: null,
            isSecretary: null,
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
            validID: null,
            signature: null,
            passportPhoto: null,
            minutesOfMeetings: null,
            organizationConstitution: null,
            trusteeDeclarationForm: null,
            newspaperPublication: null,
          },
          completed: false,
        },
      ],
    }));
    setCurrentTrusteeIndex(formData.trustees.length);
    setCurrentStage(1);
    handleScrollToTop();
  };

  const handleSubmit = async () => {
    if (isSubmitting) return; // Prevent multiple submissions
    setIsSubmitting(true);

    try {
      const formDataObject = new FormData();

      // Add non-file trustee data (including details such as idType, idNumber, etc.)
      const trusteesWithoutFiles = formData.trustees.map(
        ({ documents, ...rest }) => {
          // Ensure idType, idNumber, isChairman, and isSecretary are included in the details
          return {
            ...rest,
            details: {
              ...rest.details,
              idType: rest.details.idType,
              idNumber: rest.details.idNumber,
              isChairman: rest.details.isChairman,
              isSecretary: rest.details.isSecretary,
            },
          };
        }
      );
      formDataObject.append("trustees", JSON.stringify(trusteesWithoutFiles));

      // Append files for each trustee
      formData.trustees.forEach((trustee, index) => {
        const docs = trustee.documents;

        // Helper function to append files
        const appendFile = (key, file) => {
          if (file instanceof File) {
            formDataObject.append(`trustees[${index}].${key}`, file);
            console.log(`Appended file: trustees[${index}].${key}`, file);
          } else {
            console.warn(
              `Skipping non-file value for key: trustees[${index}].${key}`
            );
          }
        };

        // Append each file (documents)
        appendFile("validID", docs.validID);
        appendFile("signature", docs.signature);
        appendFile("passportPhoto", docs.passportPhoto);
        appendFile("minutesOfMeetings", docs.minutesOfMeetings);
        appendFile("organizationConstitution", docs.organizationConstitution);
        appendFile("trusteeDeclarationForm", docs.trusteeDeclarationForm);
        appendFile("newspaperPublication", docs.newspaperPublication);
      });

      // Log FormData for debugging
      for (let [key, value] of formDataObject.entries()) {
        console.log(`${key}:`, value);
      }

      // Send FormData to backend
      const response = await customFetch.post("/Trusteeform/", formDataObject, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });

      toast.success("Form submitted successfully!");
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Submission error:", error.response?.data || error.message);
      toast.error(error?.response?.data?.message || "Submission failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStage = () => {
    if (currentStage === 3) {
      markCurrentTrusteeAsCompleted(); // Mark trustee as completed if they finish stage 3
    }
    setCurrentStage((prev) => Math.min(prev + 1, 3));
  };

  const previousStage = () => setCurrentStage((prev) => Math.max(prev - 1, 1));
  const paystackConfig = {
    email: formData.email, // Default to user email if proprietor email is unavailable
    amount: 47500 * 100, // Paystack requires amount in kobo
    publicKey: "pk_live_1e16875ee44434a99e327eb8e7835abffd03ecfb", // Replace with your actual Paystack public key
  };

  const handlePaymentSuccess = (response) => {
    console.log("Payment Success:", response);
    toast.success("Payment Successful. Submission in progress...");
    setIsSubmitting(true);
    handleDownloadPDF();
    handleSubmit();
  };

  const handlePaymentError = (response) => {
    console.error("Payment Error:", response);
    toast.error("Payment failed. Please try again.");
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
        <div className="bg-white p-4 md:p-8 w-full">
          {currentStage === 1 && (
            <div>
              <TrusteeDetails
                trusteeIndex={currentTrusteeIndex}
                formData={formData.trustees[currentTrusteeIndex].details}
                onChange={(field, value) =>
                  handleInputChange("details", field, value)
                }
              />
              <TrusteeAddress
                trusteeIndex={currentTrusteeIndex}
                formData={formData.trustees[currentTrusteeIndex].address}
                onChange={(field, value) =>
                  handleInputChange("address", field, value)
                }
              />
            </div>
          )}

          {currentStage === 2 && (
            <TrusteeDocuments
              trusteeIndex={currentTrusteeIndex}
              formData={formData.trustees[currentTrusteeIndex].documents}
              onChange={(field, value) =>
                handleInputChange("documents", field, value)
              }
            />
          )}

          {currentStage === 3 && (
            <TrusteeReview
              trustee={formData.trustees[currentTrusteeIndex]}
              onEdit={() => setCurrentStage(1)} // Allow editing details
            />
          )}

          <div className="flex justify-between mt-4 m-4 md:mt-16">
            {/* Previous Section Button */}
            {currentStage > 1 && (
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded"
                onClick={previousStage}
              >
                Previous Section
              </button>
            )}

            {/* Next Section Button for Stages 1 and 2 */}
            {currentStage < 3 && (
              <button
                disabled={
                  (currentStage === 1 && !checkFirstStage()) ||
                  (currentStage === 2 && !checkSecondStage())
                }
                className={`px-4 py-2 rounded ml-auto ${
                  (currentStage === 1 && checkFirstStage()) ||
                  (currentStage === 2 && checkSecondStage())
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                onClick={nextStage}
              >
                {currentStage === 1 ? "Next Section" : "Review Trustee"}
              </button>
            )}

            {/* Add Trustee or Confirm Trustee Button in Review Stage */}
            {currentStage === 3 && (
              <div className="block">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded ml-auto"
                  onClick={() => {
                    addTrustee();
                  }}
                >
                  Add New Trusteee
                </button>

                <p className="text-xs text-red-500 block">
                  {formData.trustees.length >= 2
                    ? "Click to add more trustees or submit below!"
                    : " Minimum of two trustees is required ⚠️"}
                </p>
              </div>
            )}
          </div>
          {/* Submit Button (only visible when conditions are met) */}
          {currentStage === 3 &&
            formData.trustees.length >= 2 &&
            checkSecondStage() && (
              <div>
                <p>
                  <span className="font-bold text-gray-800"> Note: </span>
                  <span className="text-blue-500">
                    Form would be submitted automatically on successful payment
                    <span className="text-red-500 block">
                      Do not interupt form submission after payment.
                    </span>
                  </span>
                </p>
                <PaystackButton
                  text="Proceed to Payment"
                  className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 w-full`}
                  {...paystackConfig}
                  onSuccess={handlePaymentSuccess}
                  onClose={handlePaymentError}
                />
              </div>
            )}
        </div>
      </motion.div>
    </div>
  );
};

export default MultiStageForm;
