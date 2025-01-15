import React, { useState, useEffect } from "react";
import { customFetch } from "../../../utils";
import { Link } from "react-router";

const LLC = () => {
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user data from the API
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await customFetch.get("/LLCform", {
          withCredentials: true,
        });
        setFormData(response.data.forms);
        console.log(formData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  // Render loading state
  if (loading) {
    return (
      <div className="flex bg-cyan-500 justify-center items-center min-h-screen">
        <div className="text-2xl text-gray-50">
          <span className="loading loading-spinner"></span> Loading...
        </div>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-2xl text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-12 bg-cyan-50">
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8 mt-12">
        All User's Limited Liability Company(LLC) Registration Orders(admin
        only)
      </h2>
      <p className="text-lg text-gray-600 text-center mb-8">
        Below are successful LLC registration orders 📖
      </p>

      {formData && formData.length > 0 ? (
        <div className="space-y-8">
          {formData.map((order, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-lg p-6 md:p-8"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-gray-700 mb-4">
                    Order ID: {order._id}
                    <span>
                      <p>Status: {order.status}</p>
                    </span>
                  </h3>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Company Details
                  </h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>
                      Business Name Option 1:{" "}
                      {order.company.businessNameOption1}
                    </li>
                    <li>
                      Business Name Option 2:{" "}
                      {order.company?.businessNameOption2}
                    </li>
                    <li>Nominal Share: {order.company?.nominalShare}</li>
                    <li>Business Phone: {order.company?.businessPhone}</li>
                    <li>Business Email: {order.company?.businessEmail}</li>
                    <li>
                      Business Activity: {order.company?.businessActivity}
                    </li>
                    <li>
                      Other Business Activities:{" "}
                      {order.company?.otherBusinessActivities}
                    </li>
                  </ul>

                  <h4 className="font-semibold text-gray-800 mt-6 mb-2">
                    Company Address
                  </h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>State: {order.companyAddress?.state}</li>
                    <li>LGA: {order.companyAddress?.lga}</li>
                    <li>City: {order.companyAddress?.city}</li>
                    <li>Post Code: {order.companyAddress?.postCode}</li>
                    <li>Street Name: {order.companyAddress?.streetName}</li>
                    <li>House Number: {order.companyAddress?.houseNumber}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Director Details
                  </h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>First Name: {order.director?.firstName}</li>
                    <li>Last Name: {order.director?.lastName}</li>
                    <li>
                      Date of Birth:{" "}
                      {new Date(
                        order.director?.dateOfBirth
                      ).toLocaleDateString()}
                    </li>
                    <li>Gender: {order.director?.gender}</li>
                    <li>Nationality: {order.director?.nationality}</li>
                    <li>Phone Number: {order.director?.phoneNumber}</li>
                    <li>Email: {order.director?.email}</li>
                    <li>ID Type: {order.director?.idType}</li>
                    <li>ID Number: {order.director?.idNumber}</li>
                  </ul>

                  <h4 className="font-semibold text-gray-800 mt-6 mb-2">
                    Director Address
                  </h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>Country: {order.directorAddress?.country}</li>
                    <li>State: {order.directorAddress?.state}</li>
                    <li>LGA: {order.directorAddress?.lga}</li>
                    <li>City: {order.directorAddress?.city}</li>
                    <li>Postal Code: {order.directorAddress?.postalCode}</li>
                    <li>Street Name: {order.directorAddress?.streetName}</li>
                    <li>House Number: {order.directorAddress?.houseNumber}</li>
                  </ul>

                  <div className="mt-4 space-y-8">
                    <a
                      href={order.directorDocuments?.directorId}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn bg-cyan-500 mx-2 text-blue-600 hover:underline"
                    >
                      View Director ID
                    </a>
                    <a
                      href={order.directorDocuments?.directorSignature}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn bg-cyan-500 mx-2 text-blue-600 hover:underline"
                    >
                      View Director Signature
                    </a>
                    <a
                      href={order.directorDocuments?.directorPassport}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn bg-cyan-500 mx-2 text-blue-600 hover:underline"
                    >
                      View Director Passport
                    </a>
                  </div>
                </div>
              </div>

              <hr className="my-6 border-gray-300" />

              {/* Shareholder Section */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Shareholder Details
                </h4>
                <ul className="text-gray-600 space-y-2">
                  <li>First Name: {order.shareholder?.firstName}</li>
                  <li>Last Name: {order.shareholder?.lastName}</li>
                  <li>
                    Date of Birth:{" "}
                    {new Date(
                      order.shareholder.dateOfBirth
                    ).toLocaleDateString()}
                  </li>
                  <li>Gender: {order.shareholder?.gender}</li>
                  <li>Nationality: {order.shareholder?.nationality}</li>
                  <li>Phone Number: {order.shareholder?.phoneNumber}</li>
                  <li>Email: {order.shareholder?.email}</li>
                  <li>Occupation: {order.shareholder?.occupation}</li>
                  <li>ID Type: {order.shareholder?.idType}</li>
                  <li>ID Number: {order.shareholder?.idNumber}</li>
                  <li>Share Type: {order.shareholder?.shareType}</li>
                  <li>
                    Share Percentage: {order.shareholder?.sharePercentage}
                  </li>
                </ul>

                <h4 className="font-semibold text-gray-800 mt-6 mb-2">
                  Shareholder Address
                </h4>
                <ul className="text-gray-600 space-y-2">
                  <li>Country: {order.shareholderAddress?.country}</li>
                  <li>State: {order.shareholderAddress?.state}</li>
                  <li>LGA: {order.shareholderAddress?.lga}</li>
                  <li>City: {order.shareholderAddress?.city}</li>
                  <li>Postal Code: {order.shareholderAddress?.postalCode}</li>
                  <li>Street Name: {order.shareholderAddress?.streetName}</li>
                  <li>House Number: {order.shareholderAddress?.houseNumber}</li>
                </ul>

                <div className="mt-4 space-y-2">
                  <a
                    href={order.shareholderDocuments?.shareholderValidId}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-cyan-500 mx-2 text-blue-600 hover:underline"
                  >
                    View Shareholder ID
                  </a>
                  <a
                    href={order.shareholderDocuments?.shareholderSignature}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-cyan-500 mx-2 text-blue-600 hover:underline"
                  >
                    View Shareholder Signature
                  </a>
                  <a
                    href={order.shareholderDocuments?.shareholderPassport}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-cyan-500 mx-2 text-blue-600 hover:underline"
                  >
                    View Shareholder Passport
                  </a>
                </div>
              </div>

              <hr className="my-6 border-gray-300" />

              {/* Secretary Section */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Secretary Details
                </h4>
                <ul className="text-gray-600 space-y-2">
                  <li>First Name: {order.secretary?.firstName}</li>
                  <li>Last Name: {order.secretary?.lastName}</li>
                  <li>
                    Date of Birth:{" "}
                    {new Date(
                      order.secretary?.dateOfBirth
                    ).toLocaleDateString()}
                  </li>
                  <li>Gender: {order.secretary?.gender}</li>
                  <li>Nationality: {order.secretary?.nationality}</li>
                  <li>Phone Number: {order.secretary?.phoneNumber}</li>
                  <li>Email: {order.secretary?.email}</li>
                  <li>ID Type: {order.secretary?.idType}</li>
                  <li>ID Number: {order.secretary?.idNumber}</li>
                </ul>

                <h4 className="font-semibold text-gray-800 mt-6 mb-2">
                  Secretary Address
                </h4>
                <ul className="text-gray-600 space-y-2">
                  <li>Country: {order.secretaryAddress?.country}</li>
                  <li>State: {order.secretaryAddress?.state}</li>
                  <li>LGA: {order.secretaryAddress?.lga}</li>
                  <li>City: {order.secretaryAddress?.city}</li>
                  <li>Postal Code: {order.secretaryAddress?.postalCode}</li>
                  <li>Street Name: {order.secretaryAddress?.streetName}</li>
                  <li>House Number: {order.secretaryAddress?.houseNumber}</li>
                </ul>

                <div className="mt-4 space-y-2">
                  <a
                    href={order.secretaryDocuments?.secretaryValidId}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-cyan-500 mx-2 text-blue-600 hover:underline"
                  >
                    View Secretary ID
                  </a>
                  <a
                    href={order.secretaryDocuments?.secretarySignature}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-cyan-500 mx-2 text-blue-600 hover:underline"
                  >
                    View Secretary Signature
                  </a>
                  <a
                    href={order.secretaryDocuments?.secretaryPassport}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-cyan-500 mx-2 text-blue-600 hover:underline"
                  >
                    View Secretary Passport
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-700">No ongoing orders found.</p>
      )}
    </div>
  );
};

export default LLC;
