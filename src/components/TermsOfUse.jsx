import React from "react";

const TermsOfUse = () => {
  return (
    <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          Terms of Use (Terms and Conditions)
        </h1>
        <p className="text-gray-600 text-sm mb-6">Last updated: 2022-11-20</p>

        <div className="space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-700 mb-4">
              Welcome to Multi Level Boost (“Company”, “we”, “our”, “us”)!
            </p>
            <p className="text-gray-700 mb-4">
              These Terms of Service (“Terms”, “Terms of Service”) govern your
              use of our website located at mlb.com.ng (together or individually
              “Service”) operated by Multi Level Boost.
            </p>
            <p className="text-gray-700">
              Our Privacy Policy also governs your use of our Service and
              explains how we collect, safeguard and disclose information that
              results from your use of our web pages.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. Communications
            </h2>
            <p className="text-gray-700 mb-4">
              By using our Service, you agree to subscribe to newsletters,
              marketing or promotional materials and other information we may
              send. However, you may opt out of receiving any, or all, of these
              communications from us by following the unsubscribe link or by
              emailing at support@mlb.com.ng.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. Purchases
            </h2>
            <p className="text-gray-700 mb-4">
              If you wish to purchase any product or service made available
              through Service (“Purchase”), you may be asked to supply certain
              information relevant to your Purchase including but not limited
              to, your credit or debit card number, the expiration date of your
              card, your billing address, and your shipping information.
            </p>
            <p className="text-gray-700">
              We may employ the use of third-party services for the purpose of
              facilitating payment and the completion of Purchases. By
              submitting your information, you grant us the right to provide the
              information to these third parties subject to our Privacy Policy.
            </p>
          </section>

          {/* Additional sections */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. Contests, Sweepstakes and Promotions
            </h2>
            <p className="text-gray-700">
              Any contests, sweepstakes or other promotions (collectively,
              “Promotions”) made available through Service may be governed by
              rules that are separate from these Terms of Service. If you
              participate in any Promotions, please review the applicable rules
              as well as our Privacy Policy.
            </p>
          </section>

          {/* Add other sections here */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              27. Contact Us
            </h2>
            <p className="text-gray-700">
              Please send your feedback, comments, requests for technical
              support by email: support@mlb.com.ng.
            </p>
          </section>
        </div>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Multi Level Boost. All rights
          reserved.
        </footer>
      </div>
    </div>
  );
};

export default TermsOfUse;
