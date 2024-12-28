import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import { useEffect, useState } from "react";

const Homelayout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [showPreloader, setShowPreloader] = useState(true);

  // Simulate a loading delay before rendering the content
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 2000); // Show preloader for 2 seconds

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
      </section>
      {!isHome && <Footer />} {/* Render Footer if not on the homepage */}
    </div>
  );
};

export default Homelayout;
