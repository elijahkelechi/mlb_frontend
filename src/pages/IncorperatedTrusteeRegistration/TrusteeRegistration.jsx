import React from "react";
import { motion } from "framer-motion";
import bgImage from "../../assets/formImage.webp";
import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const TrusteeRegistrationPage = () => {
  const user = useSelector((state) => state.userState.user);
  const navigate = useNavigate();

  const handleScrollToTop = (event) => {
    event.preventDefault(); // Prevent Link's default navigation

    const currentPage = window.location.pathname; // Get the current page URL

    if (!user) {
      // Store the current page URL in localStorage
      localStorage.setItem("redirectAfterLogin", currentPage);
      navigate("/login");
      toast.warning("Please log in to continue");
    } else {
      navigate("/trustee_form");
      window.scrollTo(0, 0);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Hero Section with animation */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-black bg-opacity-60 py-10"
      >
        <div className="container mx-auto text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            Incorporated Trustee Registration (NGO | Association)
          </h1>
          <p className="text-lg md:text-xl font-medium">
            Establish Your Organization with Confidence
          </p>
        </div>
        <div className="text-center mt-6">
          <Link
            to="/trustee_form"
            onClick={handleScrollToTop}
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-200"
          >
            Start Registration
          </Link>
        </div>
      </motion.header>

      {/* Introduction Section with animation */}
      <motion.main
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-16 bg-white bg-opacity-90"
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
          <p className="text-gray-700 mb-6 leading-relaxed md:text-lg">
            Whether you’re starting a Non-Governmental Organization (NGO), a
            community-based association, or a religious or charitable
            foundation, registering as an Incorporated Trustee with the
            Corporate Affairs Commission (CAC) is a critical step. At
            MULTI-LEVEL BOOST, we simplify the registration process, ensuring
            your organization is legally recognized and ready to make an impact.
          </p>
        </div>
      </motion.main>
      <section
        className="px-6 md:px-8 bg-gray-50 bg-opacity-90 pb-2"
        id="incorporated-trustee"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            About Incorporated Trustee Registration
          </h2>
          <div className="rounded-lg ">
            <p className="text-lg text-gray-700 mb-6">
              An Incorporated Trustees is the registered trustees of a
              Not-for-Profit Association. The objects of the Association must be
              religious, educational, literary, scientific, social,
              developmental, cultural, sporting, or charitable. The Trustees are
              the legal representatives of the Association and can acquire
              property, sue, and be sued in the name of the Association.
            </p>
            <p className="text-lg text-gray-700">
              The Trustees are subject to the directions of the Association and
              its Governing Council (if any).
            </p>
          </div>
        </div>
      </section>
      {/* Services Section with animation */}
      <section
        className="py-16 px-6 md:px-8 bg-gray-50 bg-opacity-95"
        id="why-register-trustee"
      >
        <div className="">
          <motion.h2
            className="text-3xl font-semibold text-center text-gray-800 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Why Register as an Incorporated Trustee?
          </motion.h2>

          <div className="space-y-10">
            {[
              {
                number: 1,
                title: "Legal Recognition",
                description:
                  "An Incorporated Trustee is recognized as a separate legal entity, giving your organization the legitimacy to operate and grow.",
              },
              {
                number: 2,
                title: "Tax Benefits",
                description:
                  "Registered NGOs and associations may qualify for tax exemptions and other financial incentives.",
              },
              {
                number: 3,
                title: "Access to Funding",
                description:
                  "Legal registration makes it easier to attract grants, donations, and sponsorships from individuals, corporations, and international organizations.",
              },
              {
                number: 4,
                title: "Accountability and Credibility",
                description:
                  "Registration enhances public trust, assuring donors and stakeholders of your organization’s commitment to transparency and accountability.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.number}
                className="flex items-start gap-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                <div className="text-2xl font-semibold text-gray-700">
                  {item.number}.
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Offered Section with animation */}
      <motion.section
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Our Services Include:
          </h2>
          <ul className="list-disc space-y-3 ml-6 text-gray-700 leading-relaxed md:text-lg">
            <li>
              Name Availability Search: Ensuring your proposed organization name
              is unique and meets CAC requirements.
            </li>
            <li>
              Drafting of Governing Documents: Preparation of a robust
              constitution or MEMART tailored to your organization’s goals.
            </li>
            <li>
              CAC Filing: Submission of all required documents, including
              trustee details and objectives, to the CAC.
            </li>
            <li>
              Certificate of Incorporation: Issuance of the official certificate
              and documents once registration is complete.
            </li>
          </ul>
        </div>
      </motion.section>

      <section
        className="py-16 px-6 md:px-8 bg-gray-50"
        id="trustee-requirements"
      >
        <div className=" ">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Requirements for Incorporated Trustee Registration
          </h2>
          <div className=" p-6 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 mb-6">
              To begin the registration process, the following information is
              required:
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl font-semibold text-gray-700">1.</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Proposed Name of the Organization
                  </h3>
                  <p className="text-lg text-gray-600">
                    Two name options for availability search.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl font-semibold text-gray-700">2.</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Objectives of the Organization
                  </h3>
                  <p className="text-lg text-gray-600">
                    A clear description of the goals and purpose.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl font-semibold text-gray-700">3.</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Details of Trustees
                  </h3>
                  <p className="text-lg text-gray-600">
                    Full names, contact details, and valid means of
                    identification for at least two trustees.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl font-semibold text-gray-700">4.</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Address of the Organization
                  </h3>
                  <p className="text-lg text-gray-600">
                    The registered office address.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl font-semibold text-gray-700">5.</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Minutes of Meeting, Constitution and Special Clause
                  </h3>
                  <p className="text-lg text-gray-600">
                    If available, or we can assist in drafting one.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl font-semibold text-gray-700">6.</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Passport Photographs
                  </h3>
                  <p className="text-lg text-gray-600">
                    Recent photographs of the trustees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" id="why-choose-multi-level-boost">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Why Choose MULTI-LEVEL BOOST?
          </h2>
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="text-2xl font-semibold text-gray-700">1.</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Expert Support
                </h3>
                <p className="text-lg text-gray-600">
                  Our team specializes in NGO and association registration,
                  ensuring accuracy and compliance with CAC guidelines.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="text-2xl font-semibold text-gray-700">2.</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Affordable Pricing
                </h3>
                <p className="text-lg text-gray-600">
                  We provide cost-effective solutions without compromising
                  quality.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="text-2xl font-semibold text-gray-700">3.</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Efficiency
                </h3>
                <p className="text-lg text-gray-600">
                  We handle the process with precision, completing registration
                  within the shortest possible time.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="text-2xl font-semibold text-gray-700">4.</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Online Convenience
                </h3>
                <p className="text-lg text-gray-600">
                  Our services are fully online—no need to visit our office!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50" id="how-it-works">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            How It Works
          </h2>
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="text-2xl font-semibold text-gray-700">1.</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Provide Your Details
                </h3>
                <p className="text-lg text-gray-600">
                  Click on Start Registration. Fill out the form, submit the
                  necessary information and documents.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="text-2xl font-semibold text-gray-700">2.</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Pay the Registration Fee
                </h3>
                <p className="text-lg text-gray-600">
                  Make a secure payment to initiate the process.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="text-2xl font-semibold text-gray-700">3.</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Let Us Handle the Rest
                </h3>
                <p className="text-lg text-gray-600">
                  We’ll manage the name search, document preparation, and
                  submission to the CAC.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="text-2xl font-semibold text-gray-700">4.</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Receive Your Certificate
                </h3>
                <p className="text-lg text-gray-600">
                  Once registration is finalized, we’ll deliver your Certificate
                  of Incorporation and other relevant documents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section with animation */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="py-16 shadow-2xl"
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center text-white">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">
            Start Your Journey Today!
          </h2>
          <p className="mb-4 md:text-lg leading-relaxed">
            Turn your vision into a legally recognized organization with
            MULTI-LEVEL BOOST. Let us guide you every step of the way.
          </p>
          <Link
            onClick={handleScrollToTop}
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-200"
          >
            Start Registration
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default TrusteeRegistrationPage;
