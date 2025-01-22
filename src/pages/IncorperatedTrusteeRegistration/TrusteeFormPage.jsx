import React, { useState } from "react";
import { motion } from "framer-motion";
import bgImage from "../../assets/formImage.webp";
import TrusteeDetails from "./FormStages/TrusteeDetails";
import TrusteeAddress from "./FormStages/TrusteeAdress";
import TrusteeDocuments from "./FormStages/TrusteeDocuments";
import DocumentsRequired from "./FormStages/DocumentsRequired";
import TrusteeReview from "./TrusteeReview";
import { toast } from "react-toastify";
import OrganizationDetails from "./FormStages/OrganizationDetails";
import { customFetch } from "../../utils";
import { PaystackButton } from "react-paystack";
import { Link } from "react-router";
import jsPDF from "jspdf";

const MultiStageForm = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [currentTrusteeIndex, setCurrentTrusteeIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);
  const [formData, setFormData] = useState({
    organization: {
      details: {
        proposedNameOption1: "",
        proposedNameOption2: "",
        organizationPrincipalActivity: "",
        organizationAimsAndObjectives: "",
        organizationPhoneNumber: "",
        organizationEmail: "",
      },
      address: {
        state: "",
        lga: "",
        city: "",
        postCode: "",
        streetName: "",
        houseNumber: "",
      },
    },
    trustees: [
      {
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
          isChairman: false,
          isSecretary: false,
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
      },
    ],
    user: null, // Assuming this will be assigned when the user logs in or is selected
  });

  const checkSecondStage = () => {
    const trustee = formData.trustees[currentTrusteeIndex];
    const documents = formData.trustees[currentTrusteeIndex].documents;
    const details = trustee.details;
    const address = trustee.address;
    return (
      documents.validID &&
      documents.signature &&
      documents.passportPhoto &&
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
      address.lga &&
      address.city &&
      address.postCode &&
      address.streetName &&
      address.houseNumber
    );
  };

  const checkFirstStage = () => {
    const organizationDetails = formData.organization.details;
    const organizationAddress = formData.organization.address;
    return (
      organizationDetails.proposedNameOption1 &&
      organizationDetails.proposedNameOption2 &&
      organizationDetails.organizationPrincipalActivity &&
      organizationDetails.organizationAimsAndObjectives &&
      organizationDetails.organizationPhoneNumber &&
      organizationDetails.organizationEmail &&
      organizationAddress.state &&
      organizationAddress.lga &&
      organizationAddress.city &&
      organizationAddress.postCode &&
      organizationAddress.streetName &&
      organizationAddress.houseNumber
    );
  };

  const handleInputChange = (section, field, value) => {
    console.log("Section:", section, "Field:", field, "Value:", value);
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
    setCurrentStage(2);
    handleScrollToTop();
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const formDataObject = new FormData();

      // Add organization details to formData
      formDataObject.append(
        "organization",
        JSON.stringify(formData.organization)
      );

      // Add non-file trustee data (including details such as idType, idNumber, etc.)
      const trusteesWithoutFiles = formData.trustees.map(
        ({ documents, ...rest }) => {
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
      setIsSubmissionSuccessful(true);
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Submission error:", error.response?.data || error.message);
      toast.error(error?.response?.data?.msg || "Submission failed.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const nextStage = () => {
    setCurrentStage((prev) => Math.min(prev + 1, 3));
  };

  const previousStage = () => setCurrentStage((prev) => Math.max(prev - 1, 1));
  const paystackConfig = {
    email: formData.trustees?.[0]?.details?.email,
    amount: 125000 * 100, // Paystack requires amount in kobo
    publicKey: "pk_test_fa21cc6e09d2b11d0309361ba8996f55d18742f6", // Replace with your actual Paystack public key
  };

  const handlePaymentSuccess = (response) => {
    console.log("Payment Success:", response);
    toast.success("Payment Successful. Submission in progress...");
    setIsSubmitting(true);
    // handleDownloadPDF();
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
        className="p-2 md:p-8 bg-transparent min-h-screen"
      >
        <h1 className="text-3xl mt-8 mx-4 font-bold text-cyan-500 text-center mb-8">
          Trustee Registration Form
        </h1>
        <div className="bg-white p-4 md:p-8 w-full">
          {currentStage === 1 && (
            <div>
              <OrganizationDetails
                formData={formData.organization}
                onChange={(field, value) =>
                  setFormData((prev) => ({
                    ...prev,
                    organization: {
                      ...prev.organization,
                      [field]: value,
                    },
                  }))
                }
              />

              <TrusteeDocuments
                trusteeIndex={currentTrusteeIndex}
                formData={formData.trustees[currentTrusteeIndex].documents}
                onChange={(field, value) =>
                  handleInputChange("documents", field, value)
                }
              />
            </div>
          )}

          {currentStage === 2 && (
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
              <DocumentsRequired
                trusteeIndex={currentTrusteeIndex}
                formData={formData.trustees[currentTrusteeIndex].documents}
                onChange={(field, value) =>
                  handleInputChange("documents", field, value)
                }
              />
            </div>
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
                className="bg-gray-500 mx-4 hover:bg-gray-700 text-white btn-sm md:btn-md px-4 py-2 rounded"
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
                className={`px-4 py-2 rounded ml-auto btn-sm md:btn-md ${
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
                  className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 btn-sm md:btn-md rounded ml-auto"
                  onClick={addTrustee}
                >
                  Add New Trustee
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
                <div className="bg-green-100 my-4 border border-green-500 rounded-lg p-4 text-center shadow-md">
                  <p className="text-green-700 font-semibold text-lg md:text-xl">
                    Registration Amount:
                    <span className="text-green-900 font-bold">
                      {" "}
                      125,000 naira only
                    </span>
                  </p>
                </div>

                <PaystackButton
                  text="Proceed to Payment"
                  className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 w-full`}
                  {...paystackConfig}
                  onSuccess={handlePaymentSuccess}
                  onClose={handlePaymentError}
                />
              </div>
            )}
          {isSubmitting && (
            <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
              <div className="text-center">
                <span className="loading loading-spinner loading-lg text-white"></span>
                <p className="text-white mt-4 font-bold">
                  Submitting your form, please wait...
                </p>
              </div>
            </div>
          )}
          {isSubmissionSuccessful && (
            <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="flex items-center justify-center mb-4">
                  <svg
                    className="w-16 h-16 text-white animate-bounce"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Submission Successful!</h2>
                <p className="mt-2">
                  Your form has been submitted successfully. Thank you!
                </p>
                {/* <button
                  className="text-center mt-8 bg-green-500 text-gray-50 px-4 py-2 rounded hover:bg-green-700"
                  onClick={handleDownloadPDF}
                >
                  Download as PDF
                </button> */}
                <button
                  onClick={() => setIsSubmissionSuccessful(false)}
                  className="mx-4 text-center mt-8 bg-green-500 text-gray-50 px-4 py-2 rounded hover:bg-green-700"
                >
                  Close
                </button>
                <Link
                  className="btn bg-gray-800 text-white my-8"
                  to="/ongoing_orders"
                >
                  Check Orders
                </Link>
                <div className="flex flex-col items-center justify-center bg-green-50 border border-green-300 rounded-lg p-8 my-6 shadow-lg w-full max-w-md mx-auto animate-fadeIn">
                  <div className="flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
                    <svg
                      className="w-16 h-16 text-green-600 animate-bounce"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-semibold text-green-800 mb-4">
                    Payment Successful!
                  </h2>
                  <p className="text-gray-700 text-center">
                    Your payment of{" "}
                    <span className="font-bold text-green-600">
                      125,000 Naira
                    </span>{" "}
                    has been received successfully. Your Trustee registration
                    form has been submitted. Thank you for trusting us!
                  </p>
                  <h2 className="font-bold text-blue-600">
                    Check your ongoing orders for status
                  </h2>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default MultiStageForm;
