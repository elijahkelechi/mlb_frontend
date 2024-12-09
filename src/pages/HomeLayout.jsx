import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Navbar";

const Homelayout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <div>
      <Navbar />
      <section
        className={`bg-gray-100${isHome ? "" : " pt-16 md:pt-20 lg:pt-24"}`}
      >
        <Outlet />
      </section>
    </div>
  );
};

export default Homelayout;
