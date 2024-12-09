import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router";

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
    console.log(formData);
    // Handle form submission logic here (e.g., send to backend)
  };

  return (
    <div className="w-full bg-gradient-to-r from-cyan-600 to-cyan-400 py-16">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Heading Section */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Get In Touch
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <motion.div
            className="space-y-8 text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="flex items-center space-x-4">
              <FaWhatsapp className="text-green-500 text-3xl transition-transform transform hover:scale-110" />
              <p className="text-white text-lg">
                WhatsApp: +234 (0) 907 460 2590
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-blue-500 text-3xl transition-transform transform hover:scale-110" />
              <p className="text-white text-lg">Call: +234 (0) 803 221 0489</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-yellow-500 text-3xl transition-transform transform hover:scale-110" />
              <p className="text-white text-lg">Email: services@mlb.ng</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-red-500 text-3xl transition-transform transform hover:scale-110" />
              <p className="text-white text-lg">
                Address: No 25 Unity Road, Off Ikot Akpan Abia Junction, Uyo,
                Akwa Ibom State, Nigeria
              </p>
            </div>
            <div className="hidden mt-96  p-8 md:flex w-full  flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg  shadow-lg">
              <h1 className="text-2xl  md:text-4xl font-extrabold font-heading mb-4 text-center">
                🎉 Celebrate 3 Years of Success with Us! 🎉
              </h1>
              <p className="text-lg font-medium text-gray-200 text-center">
                Get each service now at{" "}
                <span className="text-yellow-300 font-bold">20% Discount</span>{" "}
                as we mark our 3rd of excellence in business!
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold text-gray-900">
              Contact Us Form
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Send us a message, and we’ll get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-left text-gray-700 font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full p-4 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label className="block text-left text-gray-700 font-semibold">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="w-full p-4 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label className="block text-left text-gray-700 font-semibold">
                  WhatsApp Number
                </label>
                <input
                  type="text"
                  name="whatsappNumber"
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                  required
                  className="w-full p-4 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label className="block text-left text-gray-700 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label className="block text-left text-gray-700 font-semibold">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-4 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="">Select a Subject</option>
                  <option value="CAC Pre Incorporation">
                    CAC Pre Incorporation
                  </option>
                  <option value="CAC Post Incorporation">
                    CAC Post Incorporation
                  </option>

                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="TIN">TIN</option>
                  <option value="SCUML">SCUML</option>
                  <option value="CAC Post Incorporation">
                    Website/App development
                  </option>
                  <option value="CAC Post Incorporation">
                    Graphics Design
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-left text-gray-700 font-semibold">
                  Enter Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-4 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  rows="6"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
            <div className="md:hidden  p-4 w-full flex    flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg  shadow-lg">
              <h1 className="text-2xl  md:text-4xl font-extrabold font-heading mb-4 text-center">
                🎉 Celebrate 3 Years of Success with Us! 🎉
              </h1>
              <p className="text-lg font-medium text-gray-200 text-center">
                Get each service now at{" "}
                <span className="text-yellow-300 font-bold">20% Discount</span>{" "}
                as we mark our 3rd year of excellence in business!
              </p>
              <Link className="btn w-full mt-4 bg-cyan-500 text-gray-50">
                Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
