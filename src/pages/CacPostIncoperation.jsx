import React from "react";
import bgImage from "../assets/formImage.webp";
import { Link } from "react-router";
import { motion } from "framer-motion";

const CacPostIncorporation = () => {
  return (
    <div
      className="pt-8 px-4 md:px-8 bg-cover bg-center min-h-screen text-gray-800"
      // style={{
      //   backgroundImage: `url(${bgImage})`,
      // }}
    >
      <div className="bg-gray-100 p-4 md:p-8 rounded-md">
        <h1 className="text-2xl md:text-4xl font-heading font-extrabold mb-6 text-center text-cyan-500">
          CAC Post-Incorporation Services
        </h1>
        <p className="text-lg mb-6 text-center text-gray-700">
          Welcome to our CAC Post-Incorporation Services page. At{" "}
          <strong>Multi-Level Boost</strong>, we make managing your business's
          compliance and corporate updates seamless and stress-free. Whether you
          need to file annual returns, update company details, or make
          structural changes, we’ve got you covered.
        </p>
        <p className="text-lg  text-center text-blue-600 font-medium">
          Explore our range of post-incorporation services below. Simply click
          on the button for the service you need, and you'll be directed to the
          respective form page to get started.
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
            link: "/CAC_PostInco_Redirect",
            buttonText: "Get Started with Annual Return Filing",
          },
          {
            title: "Change of Company Name",
            description:
              "Rebranding or correcting your company name? We’ll guide you through the process of changing your registered name seamlessly.",
            link: "/CAC_PostInco_Redirect",
            buttonText: "Change Company Name",
          },
          {
            title: "Appointment and Removal of Directors or Trustees",
            description:
              "Update your company or organization’s leadership by appointing or removing directors or trustees. We ensure the process complies with CAC requirements.",
            link: "/CAC_PostInco_Redirect",
            buttonText: "Manage Directors and Trustees",
          },
          {
            title:
              "Edit/Correction of Proprietor, Director, or Trustee Details",
            description:
              "Need to correct an error in your registered details? We help you update or edit names, dates of birth, or other personal details on your records.",
            link: "/CAC_PostInco_Redirect",
            buttonText: "Correct Proprietor, Director, or Trustee Details",
          },
          {
            title: "Change of Company Address",
            description:
              "Relocated your business or organization? Update your registered entity address with the CAC effortlessly.",
            link: "/CAC_PostInco_Redirect",
            buttonText: "Change Company Address",
          },
          {
            title: "Change of Business Activity",
            description:
              "Expanding or pivoting your business? Update your registered business activities to reflect your new focus.",
            link: "/CAC_PostInco_Redirect",
            buttonText: "Change Business Activity",
          },
          {
            title:
              "Alteration of Memorandum and Articles of Association (MEMART)",
            description:
              "Modify your company’s memorandum and articles of association to align with updated business goals and objectives.",
            link: "/CAC_PostInco_Redirect",
            buttonText: "Alter MEMART",
          },
          {
            title: "Addition of New Business Objects to Memorandum",
            description:
              "Add new objectives to your company's registered memorandum to support diversification or expansion.",
            link: "/CAC_PostInco_Redirect",
            buttonText: "Add New Business Objects",
          },
          {
            title: "Transfer and Transmission of Shares",
            description:
              "Facilitating share transfers? We handle the legal requirements for transferring or transmitting shares between parties.",
            link: "/CAC_PostInco_Redirect",
            buttonText: "Transfer or Transmit Shares",
          },
          {
            title:
              "Filing for Certified True Copy (CTC) or Retrieval of Registration Documents",
            description:
              "Need a certified true copy of your registration documents or need to retrieve lost registration details? Let us handle it for you.",
            link: "/CAC_PostInco_Redirect",
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
              onClick={() => window.scrollTo(0, 0)}
              to={service.link}
              className="inline-block bg-cyan-500 text-white py-2 px-4 rounded hover:bg-gray-800"
            >
              {service.buttonText}
            </Link>
          </div>
        ))}
      </motion.div>

      <div className="mt-12 bg-gradient-to-r from-gray-50 to-gray-200 p-6 md:p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl md:text-3xl font-extrabold text-left text-cyan-600 mb-6 md:mb-8">
          Why Choose Us?
        </h2>
        <ul className="space-y-6">
          <li className="flex flex-col sm:flex-row items-start gap-4">
            <span className="flex-shrink-0 h-10 w-10 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-lg">
              1
            </span>
            <div>
              <h3 className="font-bold text-gray-800 text-base md:text-lg">
                Efficiency
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                We ensure your post-incorporation requests are processed swiftly
                and accurately.
              </p>
            </div>
          </li>
          <li className="flex flex-col sm:flex-row items-start gap-4">
            <span className="flex-shrink-0 h-10 w-10 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-lg">
              2
            </span>
            <div>
              <h3 className="font-bold text-gray-800 text-base md:text-lg">
                Expertise
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                Our team has extensive experience with CAC processes and
                requirements.
              </p>
            </div>
          </li>
          <li className="flex flex-col sm:flex-row items-start gap-4">
            <span className="flex-shrink-0 h-10 w-10 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-lg">
              3
            </span>
            <div>
              <h3 className="font-bold text-gray-800 text-base md:text-lg">
                Transparency
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                No hidden fees; we provide upfront pricing for all services.
              </p>
            </div>
          </li>
          <li className="flex flex-col sm:flex-row items-start gap-4">
            <span className="flex-shrink-0 h-10 w-10 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-lg">
              4
            </span>
            <div>
              <h3 className="font-bold text-gray-800 text-base md:text-lg">
                Support
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                We’re here to assist you every step of the way.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className="my-8 bg-gradient-to-r from-cyan-50 to-cyan-100 p-6 md:p-8 rounded-lg shadow-lg text-center">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Get Started Today
        </h3>
        <p className="text-gray-700 text-sm md:text-base mb-6">
          Take the hassle out of post-incorporation tasks. Select the service
          you need and let us handle the rest.
        </p>
        <a
          href="https://wa.me/+234 803 221 0489"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out"
        >
          Contact Us (WhatsApp Chat)
        </a>
      </div>
    </div>
  );
};

export default CacPostIncorporation;
