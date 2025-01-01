import { useState } from "react";
import {
  FaRegStar,
  FaMobileAlt,
  FaLaptopCode,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router";

const Development = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    whatsappNumber: "",
    businessIndustry: "",
    additionalInfo: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="bg-gray-50 py-12 px-5">
      <div className="max-w-6xl mx-auto bg-gray-50 rounded-lg  overflow-hidden">
        {/* Header */}
        <header className="bg-cyan-600 text-white text-center py-8">
          <motion.h1
            className="text-3xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Website Design and Development Services
          </motion.h1>
          <motion.p
            className="mt-4 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Your Vision, Our Expertise—Building Websites That Drive Success
          </motion.p>
        </header>

        {/* Main Content */}
        <main className="p-8 space-y-8">
          {/* Why Your Business Needs a Website */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Why Your Business Needs a Professional Website
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700">
                <FaRegStar className="mr-4 text-cyan-500" />
                <span className="text-lg font-medium">
                  Boost Credibility: A well-designed website establishes trust
                  and showcases your professionalism.
                </span>
              </li>
              <li className="flex items-center text-gray-700">
                <FaMobileAlt className="mr-4 text-cyan-500" />
                <span className="text-lg font-medium">
                  Reach a Global Audience: Expand your reach beyond geographical
                  boundaries with a strong online presence.
                </span>
              </li>
              <li className="flex items-center text-gray-700">
                <FaLaptopCode className="mr-4 text-cyan-500" />
                <span className="text-lg font-medium">
                  24/7 Availability: Your website works round the clock,
                  providing information, generating leads, and driving sales.
                </span>
              </li>
              <li className="flex items-center text-gray-700">
                <FaRegStar className="mr-4 text-cyan-500" />
                <span className="text-lg font-medium">
                  Custom Branding: Communicate your brand identity and values
                  effectively to your target audience.
                </span>
              </li>
            </ul>
          </motion.section>

          {/* Our Services */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Our Website Design and Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
                <FaLaptopCode className="text-4xl text-cyan-600 mb-4" />
                <h3 className="text-lg font-semibold">Website Design</h3>
                <ul className="text-gray-600 mt-4 space-y-2">
                  <li>Custom, visually appealing layouts</li>
                  <li>Mobile-responsive and user-friendly designs</li>
                  <li>Branding and theme alignment</li>
                </ul>
              </div>
              <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
                <FaMobileAlt className="text-4xl text-cyan-600 mb-4" />
                <h3 className="text-lg font-semibold">Website Development</h3>
                <ul className="text-gray-600 mt-4 space-y-2">
                  <li>Dynamic, functional websites with seamless navigation</li>
                  <li>E-commerce platforms for online sales</li>
                  <li>CMS integration for easy content management</li>
                </ul>
              </div>
              <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
                <FaRegStar className="text-4xl text-cyan-600 mb-4" />
                <h3 className="text-lg font-semibold">Optimization</h3>
                <ul className="text-gray-600 mt-4 space-y-2">
                  <li>Fast-loading pages for enhanced user experience</li>
                  <li>SEO-ready designs to boost search engine rankings</li>
                  <li>
                    Secure websites with SSL certificates and data protection
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
                <FaLaptopCode className="text-4xl text-cyan-600 mb-4" />
                <h3 className="text-lg font-semibold">
                  Maintenance and Support
                </h3>
                <ul className="text-gray-600 mt-4 space-y-2">
                  <li>Regular updates and backups</li>
                  <li>Bug fixes and performance enhancements</li>
                  <li>Ongoing support for your evolving needs</li>
                </ul>
              </div>
            </div>
          </motion.section>

          <div>
            {" "}
            <p className="font-bold">
              Chat Our Senior Developer via WhatsApp Now!
            </p>
            <a
              href="https://wa.me/09163381375"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition duration-200"
            >
              <FaWhatsapp className="mr-2" size={20} />{" "}
              {/* Adds some margin between icon and text */}
              Chat via WhatsApp
            </a>
          </div>
          {/* Industries Served */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Industries We Serve
            </h2>
            <ul className="list-inside text-gray-600 space-y-2">
              {[
                "E-commerce and Retail",
                "Real Estate and Property Management",
                "Education and Training",
                "Hospitality and Tourism",
                "NGOs and Associations",
                "Startups and Entrepreneurs",
              ].map((item, index) => (
                <li key={index} className="text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Why Choose Us */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Why Choose MULTI-LEVEL BOOST?
            </h2>
            <ul className="list-inside text-gray-600 space-y-2">
              <li>
                <strong>Experienced Team:</strong> Our designers and developers
                bring years of expertise to every project.
              </li>
              <li>
                <strong>Tailored Solutions:</strong> We customize every website
                to match your goals and target audience.
              </li>
              <li>
                <strong>Affordable Packages:</strong> Get premium services
                without breaking your budget.
              </li>
              <li>
                <strong>Cutting-Edge Technology:</strong> We use the latest
                tools and trends to keep your website ahead of the competition.
              </li>
              <li>
                <strong>Client-Centric Approach:</strong> Your satisfaction is
                our top priority, and we work closely with you throughout the
                process.
              </li>
            </ul>
          </motion.section>

          {/* Development Process */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.7 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Our Website Development Process
            </h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              <li>
                Consultation: Share your vision, goals, and requirements with
                our team.
              </li>
              <li>
                Design Concept: We create a custom design aligned with your
                brand.
              </li>
              <li>
                Development: Our developers bring the design to life with
                functionality and features.
              </li>
              <li>
                Testing: Every website undergoes rigorous testing for quality
                assurance.
              </li>
              <li>
                Launch and Support: We launch your website and provide ongoing
                maintenance.
              </li>
            </ol>
          </motion.section>

          {/* Contact Form */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.9 }}
          >
            <div>
              <p className="font-bold">
                Chat Our Senior Developer via WhatsApp Now!
              </p>

              <a
                href="https://wa.me/09163381375"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition duration-200"
              >
                <FaWhatsapp className="mr-2" size={20} />{" "}
                {/* Adds some margin between icon and text */}
                Chat via WhatsApp
              </a>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-700">WhatsApp Number</label>
                <input
                  type="tel"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  value={formData.whatsappNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, whatsappNumber: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-700">Business/Industry</label>
                <select
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  value={formData.businessIndustry}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      businessIndustry: e.target.value,
                    })
                  }
                >
                  <option value="E-commerce and Retail">
                    E-commerce and Retail
                  </option>
                  <option value="Real Estate and Property Management">
                    Real Estate and Property Management
                  </option>
                  <option value="Education and Training">
                    Education and Training
                  </option>
                  <option value="Hospitality and Tourism">
                    Hospitality and Tourism
                  </option>
                  <option value="NGOs and Associations">
                    NGOs and Associations
                  </option>
                  <option value="Startups and Entrepreneurs">
                    Startups and Entrepreneurs
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">
                  Any other information
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  value={formData.additionalInfo}
                  onChange={(e) =>
                    setFormData({ ...formData, additionalInfo: e.target.value })
                  }
                />
              </div>
              <div className="text-center block space-y-4">
                <button
                  type="submit"
                  className="bg-cyan-600 text-white py-3 px-6 rounded-lg hover:bg-cyan-700 transition duration-200"
                >
                  Get Started Today
                </button>

                <p className="font-bold">
                  Chat Our Senior Developer via WhatsApp Now!
                </p>

                <a
                  href="https://wa.me/09163381375"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition duration-200"
                >
                  <FaWhatsapp className="mr-2" size={20} />{" "}
                  {/* Adds some margin between icon and text */}
                  Chat via WhatsApp
                </a>
              </div>
            </form>
          </motion.section>
        </main>
      </div>
    </div>
  );
};

export default Development;
