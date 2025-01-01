import React from "react";

const GraphicDesignPage = () => {
  return (
    <div className="bg-gray-50 p-6 md:p-8">
      <div className=" bg-gray-50 rounded-lg p-8 ">
        <div className="bg-cyan-600 text-center p-4 md:p-8 mb-8 rounded-t-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
            Graphic Design and Branding Services
          </h1>
          <p className="text-white text-lg text-center ">
            Transform Your Brand with Stunning Designs and Strategic Branding
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Why Your Business Needs Professional Graphic Design and Branding
          </h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li>
              Create a Lasting Impression: Strong branding makes your business
              instantly recognizable and memorable.
            </li>
            <li>
              Build Customer Trust: Consistent and professional visuals convey
              reliability and quality.
            </li>
            <li>
              Stand Out in the Market: Unique designs give your brand a
              competitive edge.
            </li>
            <li>
              Increase Business Value: A well-branded business attracts more
              customers and opportunities for growth.
            </li>
          </ul>
        </div>

        <div className="mt-10 space-y-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Our Graphic Design and Branding Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-xl text-gray-700 mb-2">
                Graphic Design
              </h3>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Custom Logo Design</li>
                <li>Business Cards, Letterheads, and Envelopes</li>
                <li>Social Media Graphics and Ads</li>
                <li>Brochures, Flyers, and Posters</li>
                <li>Product Packaging and Label Design</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-gray-700 mb-2">
                Branding Services
              </h3>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Brand Identity Development</li>
                <li>Brand Guidelines Creation</li>
                <li>Tagline and Messaging Development</li>
                <li>Visual Brand Strategy</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-gray-700 mb-2">
                Digital Graphics
              </h3>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Website Banners and Ads</li>
                <li>Email Templates and Newsletters</li>
                <li>Presentation Decks</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Our Branding Packages
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-xl text-gray-700 mb-4">
                Basic Branding Package
              </h3>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Custom Logo Design (3 Concepts)</li>
                <li>Business Card Design</li>
                <li>Social Media Profile Graphics</li>
                <li>Brand Guidelines (Basic)</li>
              </ul>
              <p className="text-lg font-bold mt-4">Price: ₦50,000</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-xl text-gray-700 mb-4">
                Standard Branding Package
              </h3>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Custom Logo Design (5 Concepts)</li>
                <li>Business Card and Letterhead Design</li>
                <li>Social Media Graphics (10 Templates)</li>
                <li>Brochure or Flyer Design (1)</li>
                <li>Brand Guidelines Document</li>
              </ul>
              <p className="text-lg font-bold mt-4">Price: ₦100,000</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-xl text-gray-700 mb-4">
                Premium Branding Package
              </h3>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Custom Logo Design (Unlimited Concepts)</li>
                <li>Complete Stationery Design</li>
                <li>Social Media Graphics (20 Templates)</li>
                <li>Marketing Materials (2 Brochures/Flyers)</li>
                <li>Brand Guidelines Document (Comprehensive)</li>
                <li>Packaging Design (Basic)</li>
              </ul>
              <p className="text-lg font-bold mt-4">Price: ₦200,000</p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Contact Us
          </h2>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border rounded-md"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border rounded-md"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-3 border rounded-md"
              />
              <input
                type="text"
                placeholder="WhatsApp Number"
                className="w-full p-3 border rounded-md"
              />
            </div>
            <input
              type="text"
              placeholder="Entity Name"
              className="w-full p-3 border rounded-md"
            />
            <input
              type="text"
              placeholder="Tagline"
              className="w-full p-3 border rounded-md"
            />
            <select className="w-full p-3 border rounded-md">
              <option>Brand Colours</option>
              <option>Red</option>
              <option>Blue</option>
              <option>Green</option>
              <option>Yellow</option>
              <option>Black</option>
              <option>White</option>
            </select>
            <select className="w-full p-3 border rounded-md">
              <option>Select Package</option>
              <option>Basic Branding Package</option>
              <option>Standard Branding Package</option>
              <option>Premium Branding Package</option>
            </select>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesignPage;
