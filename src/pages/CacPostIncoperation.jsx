import React from "react";
import bgImage from "../assets/formImage.webp";
import { Link } from "react-router";
import { motion } from "framer-motion";

const CacPostIncorporation = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen text-gray-800"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="bg-white bg-opacity-50 p-4 md:p-8 rounded shadow-lg max-w-7xl mt-4 mx-4 md:mx-8 ">
        <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 p-4 md:p-8 rounded-md">
          <h1 className="text-4xl font-heading font-extrabold mb-6 text-center text-cyan-50">
            CAC Post-Incorporation Services
          </h1>
          <p className="text-lg mb-6 text-center text-gray-700">
            Welcome to our CAC Post-Incorporation Services page. At{" "}
            <strong>Multi-Level Boost</strong>, we make managing your business's
            compliance and corporate updates seamless and stress-free. Whether
            you need to file annual returns, update company details, or make
            structural changes, we’ve got you covered.
          </p>
          <p className="text-lg  text-center text-blue-600 font-medium">
            Explore our range of post-incorporation services below. Simply click
            on the button for the service you need, and you'll be directed to
            the respective form page to get started.
          </p>
        </div>

        {/* Services Section */}
        <motion.div
          className="space-y-12 mt-24"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {[
            {
              title: "Annual Return Filing",
              description:
                "Stay compliant with the Corporate Affairs Commission (CAC) by filing your annual returns promptly. Avoid penalties and maintain good standing for your business.",
              link: "/Annual_return",
              buttonText: "Get Started with Annual Return Filing",
            },
            {
              title: "Change of Company Name",
              description:
                "Rebranding or correcting your company name? We’ll guide you through the process of changing your registered name seamlessly.",
              link: "#change-name",
              buttonText: "Change Company Name",
            },
            {
              title: "Appointment and Removal of Directors or Trustees",
              description:
                "Update your company or organization’s leadership by appointing or removing directors or trustees. We ensure the process complies with CAC requirements.",
              link: "#manage-directors",
              buttonText: "Manage Directors and Trustees",
            },
            {
              title:
                "Edit/Correction of Proprietor, Director, or Trustee Details",
              description:
                "Need to correct an error in your registered details? We help you update or edit names, dates of birth, or other personal details on your records.",
              link: "#correct-details",
              buttonText: "Correct Proprietor, Director, or Trustee Details",
            },
            {
              title: "Change of Company Address",
              description:
                "Relocated your business or organization? Update your registered entity address with the CAC effortlessly.",
              link: "#change-address",
              buttonText: "Change Company Address",
            },
            {
              title: "Change of Business Activity",
              description:
                "Expanding or pivoting your business? Update your registered business activities to reflect your new focus.",
              link: "#change-activity",
              buttonText: "Change Business Activity",
            },
            {
              title:
                "Alteration of Memorandum and Articles of Association (MEMART)",
              description:
                "Modify your company’s memorandum and articles of association to align with updated business goals and objectives.",
              link: "#alter-memart",
              buttonText: "Alter MEMART",
            },
            {
              title: "Addition of New Business Objects to Memorandum",
              description:
                "Add new objectives to your company's registered memorandum to support diversification or expansion.",
              link: "#add-objects",
              buttonText: "Add New Business Objects",
            },
            {
              title: "Transfer and Transmission of Shares",
              description:
                "Facilitating share transfers? We handle the legal requirements for transferring or transmitting shares between parties.",
              link: "#transfer-shares",
              buttonText: "Transfer or Transmit Shares",
            },
            {
              title:
                "Filing for Certified True Copy (CTC) or Retrieval of Registration Documents",
              description:
                "Need a certified true copy of your registration documents or need to retrieve lost registration details? Let us handle it for you.",
              link: "#ctc-retrieval",
              buttonText: "Request CTC or Retrieve Documents",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="border p-6 rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <Link
                to={service.link}
                className="inline-block bg-cyan-500 text-white py-2 px-4 rounded hover:bg-gray-800"
              >
                {service.buttonText}
              </Link>
            </div>
          ))}
        </motion.div>

        {/* Why Choose Us Section */}
        <div className="mt-12 bg-gray-100 p-8 rounded-lg shadow-inner">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            Why Choose Us?
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-4">
            <li>
              <strong>Efficiency:</strong> We ensure your post-incorporation
              requests are processed swiftly and accurately.
            </li>
            <li>
              <strong>Expertise:</strong> Our team has extensive experience with
              CAC processes and requirements.
            </li>
            <li>
              <strong>Transparency:</strong> No hidden fees; we provide upfront
              pricing for all services.
            </li>
            <li>
              <strong>Support:</strong> We’re here to assist you every step of
              the way.
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Get Started Today
          </h3>
          <p className="text-gray-700 mb-6">
            Take the hassle out of post-incorporation tasks. Select the service
            you need and let us handle the rest.
          </p>
          <a
            href="https://wa.me/yourwhatsappnumber"
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
          >
            Contact Us (WhatsApp Chat)
          </a>
        </div>
      </div>
    </div>
  );
};

export default CacPostIncorporation;
