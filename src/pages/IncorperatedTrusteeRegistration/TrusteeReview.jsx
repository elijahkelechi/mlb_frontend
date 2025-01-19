import React from "react";

const TrusteeReview = ({ trustee, onEdit }) => {
  const renderFilePreview = (file) => {
    if (file instanceof File) {
      const fileType = file.type;

      if (fileType.includes("image")) {
        // Show image preview for image files
        return (
          <img
            src={URL.createObjectURL(file)}
            alt="Document Preview"
            className="w-32 h-32 object-cover rounded-md border mt-2"
          />
        );
      } else if (fileType === "application/pdf") {
        // Show PDF file link
        return (
          <a
            href={URL.createObjectURL(file)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline mt-2"
          >
            View PDF
          </a>
        );
      } else {
        return <p className="text-gray-500 mt-2">Unsupported file type</p>;
      }
    }

    return <p className="text-gray-500 mt-2">Not Uploaded</p>;
  };

  return (
    <div className="bg-white p-4 rounded shadow-md mb-4">
      <h2 className="text-xl font-semibold mb-4">Review Trustee Details</h2>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Personal Details:</h3>
        <p>
          <strong>Last Name:</strong> {trustee.details.lastName}
        </p>
        <p>
          <strong>First Name:</strong> {trustee.details.firstName}
        </p>
        <p>
          <strong>Middle Name:</strong> {trustee.details.middleName || "N/A"}
        </p>
        <p>
          <strong>DOB:</strong> {trustee.details.DOB}
        </p>
        <p>
          <strong>Gender:</strong> {trustee.details.gender}
        </p>
        <p>
          <strong>Nationality:</strong> {trustee.details.nationality}
        </p>
        <p>
          <strong>Phone Number:</strong> {trustee.details.phoneNumber}
        </p>
        <p>
          <strong>Email:</strong> {trustee.details.email}
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Address:</h3>
        <p>
          <strong>Country:</strong> {trustee.address.country}
        </p>
        <p>
          <strong>State:</strong> {trustee.address.state}
        </p>
        <p>
          <strong>City:</strong> {trustee.address.city}
        </p>
        <p>
          <strong>Street Name:</strong> {trustee.address.streetName}
        </p>
        <p>
          <strong>House Number:</strong> {trustee.address.houseNumber}
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Documents:</h3>
        <div className="mb-4">
          <strong>Valid ID:</strong>
          {renderFilePreview(trustee.documents.validID)}
        </div>
        <div className="mb-4">
          <strong>Signature:</strong>
          {renderFilePreview(trustee.documents.signature)}
        </div>
        <div className="mb-4">
          <strong>Passport Photo:</strong>
          {renderFilePreview(trustee.documents.passportPhoto)}
        </div>
        {trustee.documents.minutesOfMeetings ? (
          <div className="mb-4">
            <strong>minutesOfMeetings:</strong>
            {renderFilePreview(trustee.documents.minutesOfMeetings)}
          </div>
        ) : (
          ""
        )}
        {trustee.documents.organizationConstitution ? (
          <div className="mb-4">
            <strong> organizationConstitution:</strong>
            {renderFilePreview(trustee.documents.organizationConstitution)}
          </div>
        ) : (
          ""
        )}
        {trustee.documents.trusteeDeclarationForm ? (
          <div className="mb-4">
            <strong> trusteeDeclarationForm:</strong>
            {renderFilePreview(trustee.documents.trusteeDeclarationForm)}
          </div>
        ) : (
          ""
        )}
        {trustee.documents.newspaperPublication ? (
          <div className="mb-4">
            <strong> newspaperPublication:</strong>
            {renderFilePreview(trustee.documents.newspaperPublication)}
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="flex justify-between mt-4">
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded"
          onClick={onEdit}
        >
          Edit Details
        </button>
      </div>
    </div>
  );
};

export default TrusteeReview;
