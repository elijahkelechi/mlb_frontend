import React from "react";
import bgImage from "../assets/formImage.webp"; // Background image
import { FaRegCheckCircle, FaRegFileAlt, FaRegClipboard } from "react-icons/fa";
import { Link } from "react-router";

const AnnualReturnMain = () => {
  return (
    <div
      // style={{
      //   backgroundImage: `url(${bgImage})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundBlendMode: "overlay",
      //   backgroundColor: "rgba(0, 0, 0, 0.6)", // Overlay for contrast
      //   color: "white",
      //   padding: "60px 20px",
      // }}
      className="text-left"
    >
      <div className="w-full pt-16 mx-auto bg-gray-50 bg-opacity-70 md:px-8 px-6 md:p-16">
        <h1 className="text-xl md:text-4xl text-gray-50 rounded-md  bg-cyan-500 p-4 md:p-8 font-bold leading-tight mb-8">
          Comprehensive Guide to CAC Annual Return Filing
        </h1>
        <p className="text-lg mb-6 md:mb-6 text-left">
          Filing your Annual Returns with the Corporate Affairs Commission (CAC)
          is a vital legal requirement for all registered businesses in Nigeria.
          Compliance ensures your business remains active and in good standing
          with regulatory authorities. Non-compliance can lead to penalties,
          legal complications, or even deregistration.
        </p>
        <p className="text-lg  mb-6 md:mb-8 text-left">
          At Multi-Level Boost, we simplify the process of filing annual
          returns—ensuring efficiency, compliance, and peace of mind. Here’s
          everything you need to know.
        </p>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to="/CAC_PostInco_Redirect"
          className="btn btn-md md:btn-lg bg-cyan-500 text-white hover:bg-gray-800 text-left justify-left mb-6 md:mb-8"
        >
          Get Started
        </Link>
        {/* Icons with Section Headings */}
        <h2 className="text-xl md:text-4xl font-semibold mb-6 flex items-left justify-left space-x-3">
          <FaRegFileAlt className="text-cyan-400" />
          <span className="text-gray-800 ">Who Must File Annual Returns?</span>
        </h2>
        <ul className="list-disc list-inside text-left mb-8 space-y-4">
          <li>
            <FaRegClipboard className="inline-block mr-2 text-cyan-400" />
            Sole proprietorships and partnerships registered as business names
            must file annual returns to confirm ongoing operation.
          </li>
          <li>
            <FaRegClipboard className="inline-block mr-2 text-cyan-400" />
            Limited Liability Companies, whether private or public, must file
            annual returns to maintain compliance.
          </li>
          <li>
            <FaRegClipboard className="inline-block mr-2 text-cyan-400" />
            Incorporated Trustees (NGOs, Churches, Associations) must also file
            annual returns to preserve their legal status.
          </li>
        </ul>

        <h2 className="font-semibold mb-6 flex items-left justify-left space-x-3">
          <FaRegCheckCircle className="text-cyan-400" />
          <span className="text-gray-800 text-xl md:text-4xl">
            Why Filing Annual Returns is Important?
          </span>
        </h2>
        <ul className="list-disc list-inside text-left mb-8 space-y-4">
          <li>
            <FaRegClipboard className="inline-block mr-2 text-cyan-400" />
            Filing annual returns is mandatory under the Companies and Allied
            Matters Act (CAMA). Non-compliance attracts penalties and
            deregistration.
          </li>
          <li>
            <FaRegClipboard className="inline-block mr-2 text-cyan-400" />
            Regular filings maintain your business’s status as active and
            compliant.
          </li>
          <li>
            <FaRegClipboard className="inline-block mr-2 text-cyan-400" />
            Late filings incur fines that accumulate over time, becoming a
            financial burden.
          </li>
          <li>
            <FaRegClipboard className="inline-block mr-2 text-cyan-400" />
            Promotes transparency and accountability within your organization.
          </li>
        </ul>

        <h2 className=" font-semibold mb-6 flex items-left justify-left space-x-3">
          <FaRegClipboard className="text-cyan-400" />
          <span className="text-gray-800 text-xl md:text-4xl">
            Penalties for Non-Compliance
          </span>
        </h2>
        <p className="text-lg mb-6 text-left">
          Failing to file annual returns results in penalties, including:
        </p>
        <ul className="list-disc list-inside text-left mb-8 space-y-4">
          <li>Monetary fines that increase annually.</li>
          <li>Legal complications affecting business operations.</li>
          <li>
            Deregistration of your business, making it illegal to operate.
          </li>
        </ul>

        <h2 className="font-semibold mb-6 flex items-left justify-left space-x-3">
          <FaRegClipboard className="text-cyan-400" />
          <span className="text-gray-800 text-xl md:text-4xl">
            How We Can Assist You
          </span>
        </h2>
        <p className="text-lg mb-6">
          At Multi-Level Boost, we streamline the annual return filing process,
          ensuring compliance and saving you time. Our services include:
        </p>
        <ul className="list-disc list-inside text-left mb-8 space-y-4">
          <li>
            <FaRegClipboard className="inline-block mr-2 text-cyan-400" />
            Document preparation—gathering all necessary documents and ensuring
            accuracy.
          </li>
          <li>
            <FaRegClipboard className="inline-block mr-2 text-cyan-400" />
            Submission to CAC—filing your returns accurately and on time.
          </li>
          <li>
            <FaRegClipboard className="inline-block mr-2 text-cyan-400" />
            Confirmation & receipt—providing proof of filing for compliance.
          </li>
          <li>
            <FaRegClipboard className="inline-block mr-2 text-cyan-400" />
            Advisory support—guidance on additional compliance requirements.
          </li>
        </ul>

        <h2 className="font-semibold mb-6 flex items-left justify-left space-x-3">
          <FaRegClipboard className="text-cyan-400" />
          <span className="text-gray-800 text-xl md:text-4xl">
            Why Choose Us?
          </span>
        </h2>
        <ul className="list-disc list-inside text-left mb-8 space-y-4">
          <li>
            <FaRegClipboard className="inline-block mr-2 text-cyan-400" />
            Extensive experience—helping businesses stay compliant with CAC
            regulations.
          </li>
          <li>
            <FaRegClipboard className="inline-block mr-2 text-cyan-400" />
            Efficiency—timely filing, avoiding unnecessary delays.
          </li>
          <li>
            <FaRegClipboard className="inline-block mr-2 text-cyan-400" />
            Transparency—clear pricing and no hidden fees.
          </li>
          <li>
            <FaRegClipboard className="inline-block mr-2 text-cyan-400" />
            Dedicated support—available to answer any queries or concerns.
          </li>
        </ul>
        <div className="text-left justify-left">
          {" "}
          <h2 className="font-semibold mb-6 flex items-left justify-left space-x-3">
            <FaRegClipboard className="text-cyan-400" />
            <span className="text-gray-800 text-xl md:text-4xl">
              How to Get Started
            </span>
          </h2>
          <p className="text-lg mb-6">
            1. Select your registration type below to proceed to the filling
            page, or
            <a href="/contact-us" className="text-cyan-400 hover:underline">
              {" "}
              contact us
            </a>{" "}
            for personalized assistance.
          </p>
          <p className="text-lg mb-6">
            2. Provide necessary information and documents.
          </p>
          <p className="text-lg mb-8">
            3. Relax as we handle the filing process for you.
          </p>
        </div>

        {/* <div className="flex justify-center space-x-2">
          <div className=" bg-cyan-400 hover:bg-cyan-500 text-white py-2 px-6 rounded-lg transition-transform transform hover:scale-105">
            File Annual Return for Business Name
            <br></br>
            <Link className="btn btn-sm">Get Started</Link>
          </div>
          <div className="bg-cyan-400 hover:bg-cyan-500 text-white py-2 px-6 rounded-lg transition-transform transform hover:scale-105">
            File Annual Return for Limited Liability Company
            <br></br>
            <Link className="btn btn-sm">Get Started</Link>
          </div>
          <div className="bg-cyan-400 hover:bg-cyan-500 text-white py-2 px-6 rounded-lg transition-transform transform hover:scale-105">
            File Annual Return for Incorporated Trustee
            <br></br>
            <Link className="btn btn-sm">Get Started</Link>
          </div>
        </div> */}

        <h2 className="md:text-4xl font-semibold mt-12 mb-6 flex items-left justify-left space-x-3">
          <FaRegClipboard className="text-cyan-400" />
          <span className="text-gray-800 text-xl md:text-4xl">
            Annual Return Filing Fees
          </span>
        </h2>
        <div className="text-left">
          <div className="mb-6">
            <strong>Business Name</strong>
            <ul className="list-disc list-inside">
              <li>CAC Filing Fee: 3,250 NGN per year</li>
              <li>Default Penalty: 5,000 NGN</li>
              <li>Service Charge: 5,000 NGN</li>
            </ul>
            <Link
              onClick={() => window.scrollTo(0, 0)}
              to="/CAC_PostInco_Redirect"
              className="btn btn-sm bg-cyan-500  text-gray-50"
            >
              File Now
            </Link>
          </div>
          <div className="mb-6">
            <strong>Limited Liability Company</strong>
            <ul className="list-disc list-inside">
              <li>CAC Filing Fee: 10,000 NGN per year</li>
              <li>Default Penalty: 15,000 NGN</li>
              <li>Service Charge: 10,000 NGN</li>
            </ul>
            <Link
              onClick={() => window.scrollTo(0, 0)}
              to="/CAC_PostInco_Redirect"
              className="btn btn-sm bg-cyan-500  text-gray-50"
            >
              File Now
            </Link>
          </div>
          <div className="mb-6">
            <strong>Incorporated Trustee</strong>
            <ul className="list-disc list-inside">
              <li>CAC Filing Fee: 5,000 NGN per year</li>
              <li>Default Penalty: 8,000 NGN</li>
              <li>Service Charge: 7,000 NGN</li>
            </ul>
            <Link
              onClick={() => window.scrollTo(0, 0)}
              to="/CAC_PostInco_Redirect"
              className="btn btn-sm bg-cyan-500  text-gray-50"
            >
              File Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnualReturnMain;
