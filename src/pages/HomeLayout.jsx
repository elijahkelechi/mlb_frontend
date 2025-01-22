import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Homelayout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [showPreloader, setShowPreloader] = useState(true);

  // Simulate a loading delay before rendering the content
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 200); // Show preloader for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (showPreloader) {
    return <Preloader />;
  }

  return (
    <div>
      <Navbar />
      <section
        className={`bg-gray-100${isHome ? "" : " pt-16 md:pt-20 lg:pt-24"}`}
      >
        <Outlet />
        <div>
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/+234 907 460 2590"
            target="_blank"
            rel="noopener noreferrer"
            className="z-50 fixed bottom-5 right-5 bg-green-500 p-4 rounded-full text-white shadow-lg hover:bg-green-600"
          >
            <FaWhatsapp size={28} />
          </a>
        </div>
      </section>
      {!isHome && <Footer />} {/* Render Footer if not on the homepage */}
    </div>
  );
};

export default Homelayout;
