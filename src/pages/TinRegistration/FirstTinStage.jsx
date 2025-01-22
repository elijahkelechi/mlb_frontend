import React from "react";
import { Link } from "react-router";

const FirstTinStage = () => {
  return (
    <div>
      <section className="bg-gray-100 mt-8 md:mt-12 px-4 md:px-16 mb-8">
        <div className="container mx-auto">
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-6">
            JTB TIN Registration
          </h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <ul className="space-y-4">
              <li className="flex justify-between items-center text-lg text-gray-700">
                <span className="font-bold text-gray-900">
                  Joint Tax Board (JTB) TIN
                </span>
                <span className="font-semibold">
                  <span>Cost: </span>₦10,000
                </span>
              </li>
            </ul>
            <div>
              <h1 className="font-bold text-gray-800 my-8">
                Fast Delivery:{" "}
                <span className="font-normal">2-5 working days ⚡️ ⚡️</span>
              </h1>
            </div>
            <Link
              to="/JTB_form"
              onClick={() => window.scrollTo(0, 0)}
              className="btn bg-cyan-600 text-white hover:bg-gray-800 w-full"
            >
              Start Registeration
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-10 px-4 md:px-16 ">
        <div className="container mx-auto">
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-6">
            FIRS TIN Registration Fees
          </h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <ul className="space-y-4">
              <li>
                <h3 className="text-gray-800 text-xl font-semibold mb-2">
                  Federal Inland Revenue Service (FIRS) TIN
                </h3>
                <ul className="ml-6 space-y-2">
                  <li className="flex justify-between items-center text-lg text-gray-700">
                    <span>Business Name</span>
                    <span className="font-semibold">
                      <span>Cost: </span>₦12,000
                    </span>
                  </li>
                  <li className="flex justify-between items-center text-lg text-gray-700">
                    <span>Limited Liability Company</span>
                    <span className="font-semibold">
                      <span>Cost: </span>₦15,000
                    </span>
                  </li>
                  <li className="flex justify-between items-center text-lg text-gray-700">
                    <span>Incorporated Trustee</span>
                    <span className="font-semibold">
                      <span>Cost: </span>₦15,000
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
            <div>
              <h1 className="font-bold text-gray-800 my-8">
                Fast Delivery:{" "}
                <span className="font-normal">2-5 working days ⚡️ ⚡️</span>
              </h1>
            </div>
            <Link
              to="/FIRS_form"
              className="btn bg-cyan-600 text-white hover:bg-gray-800 w-full"
            >
              Start Registeration
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FirstTinStage;
