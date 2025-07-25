import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com"; // Import emailjs
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    whatsappNumber: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data Sent:", formData);
      toast.success("Message sent successfully!");

      // Send form data via EmailJS
      emailjs
        .sendForm(
          "your_service_id", // Replace with your service ID
          "template_xqjb1qa", // Replace with your template ID
          e.target,
          "your_user_id" // Replace with your user ID
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Message sent successfully!");
          },
          (error) => {
            console.log(error.text);
            toast.error("Failed to send message.");
          }
        );
    } else {
      toast.error("Please fill out all required fields.");
    }
  };

  const validateForm = () => {
    const { fullName, phoneNumber, whatsappNumber, email, subject, message } =
      formData;
    return (
      fullName && phoneNumber && whatsappNumber && email && subject && message
    );
  };

  return (
    <div className="w-full min-h-screen bg-cover bg-center bg-no-repeat py-16 px-6">
      <motion.div
        className="text-left mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
          Contact Us
        </h1>
        <p className="text-lg text-blue-600 mt-4">
          Reach out to us with any questions or concerns. We're here to help!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Details */}
        <motion.div
          className="space-y-8 text-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center space-x-4">
            <FaWhatsapp className="text-green-500 text-3xl" />
            <p className="text-lg text-gray-800">
              WhatsApp: +234 (0) 907 460 2590
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-blue-900 text-3xl" />
            <p className="text-lg text-gray-800">Call: +234 (0) 803 221 0489</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-yellow-500 text-3xl" />
            <p className="text-lg text-gray-800">
              Email: services@247corperateconsulting.ng
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-red-500 text-3xl" />
            <p className="text-lg text-gray-800">
              Address: No 25 Unity Road, Off Ikot Akpan Abia Junction, Uyo, Akwa
              Ibom State, Nigeria
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-4 md:p-8 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-bold text-gray-900">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
            <input
              type="text"
              name="whatsappNumber"
              placeholder="WhatsApp Number"
              value={formData.whatsappNumber}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-900"
              rows="5"
            ></textarea>
            <motion.button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-600"
              whileHover={{ scale: 1.05 }}
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
