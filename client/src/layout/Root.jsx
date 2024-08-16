import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const Root = () => {
  return (
    <div className="font-inter">
      <Navbar />
      <div className="max-w-[1440px] mx-auto px-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
