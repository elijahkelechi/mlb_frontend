import React, { useState, useEffect } from "react";
import { customFetch } from "../../../utils";
import { Link } from "react-router";
import { toast } from "react-toastify";

const Ads = () => {
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  // Fetch user data from the API
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await customFetch.get("AdsOrders/", {
          withCredentials: true,
        });
        setFormData(response.data);
        console.log(response.data);
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
  const deleteForm = async (id) => {
    setDeletingId(id);
    try {
      await customFetch.delete(`AdsOrders/${id}`, {
        withCredentials: true,
      });
      // Updating the local state to remove the deleted order
      setFormData((prevData) => prevData.filter((order) => order._id !== id));
      toast.success(`order id:${id} deleted Sucessfully`);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setDeletingId(null);
    }
  };
  // Render loading state
  if (loading) {
    return (
      <div className="flex bg-cyan-500 justify-center items-center min-h-screen">
        <div className="text-2xl text-gray-50">
          <span className="loading loading-spinner"></span>Loading...
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

  // Format the date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="p-6 md:p-12 bg-gradient-to-r from-cyan-50 via-white to-cyan-100">
      <h2 className="text-4xl font-bold text-gray-700 text-center mb-12 mt-8">
        Ads Subscription Orders
        <p className="text-lg text-gray-600 mt-2">
          Below are your successful SCUML registration orders 📖
        </p>
      </h2>

      {formData && formData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formData.map((order) => (
            <div
              key={order._id}
              className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="font-bold text-cyan-700 text-lg mb-3">
                {order.planName}
              </h3>
              <div className="text-gray-600 space-y-2">
                <p>
                  <strong>Order ID:</strong> {order._id}
                </p>
                <p>
                  <strong>Price:</strong>{" "}
                  <span className="text-green-600">
                    ₦{order.price.toLocaleString()}
                  </span>
                </p>
                <p>
                  <strong>Subscription Period:</strong>{" "}
                  {order.subscriptionPeriod}
                </p>
                <p>
                  <strong>Payment Ref:</strong> {order.paymentReference}
                </p>
                <p>
                  <strong>Created At:</strong> {formatDate(order.createdAt)}
                </p>
                <p>
                  <strong>Expires At:</strong> {formatDate(order.expiresAt)}
                </p>
              </div>
              <div className="mt-4 bg-gray-50 border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-700">Plan Details:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {order.planDetails.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
              <p className="m-4 md:m-8">
                Status:{" "}
                <span className={`capitalize text-blue-600 animate-pulse`}>
                  {order?.status}
                </span>
              </p>
              <Link
                onClick={handleScrollToTop}
                to="/contactUs"
                className="btn bg-blue-500 text-gray-50 hover:bg-gray-800 m-4 md:m-8"
              >
                Contact Support
              </Link>
              <button
                onClick={() => deleteForm(order._id)}
                className="btn bg-red-500 text-white hover:bg-gray-800 m-4"
              >
                {deletingId === order._id ? (
                  <span>Deleting...</span>
                ) : (
                  <span> Delete Expired Orders</span>
                )}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-700">No ongoing orders found.</p>
      )}
    </div>
  );
};

export default Ads;
