import { FaShoppingBag } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { useState } from "react";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="hidden md:flex justify-between  max-w-[1440px] mx-auto text-sm font-normal p-2">
        <div className="flex items-center gap-1">
          <MdCall />
          <span>We are available 24/7, Need help? +0123456789</span>
        </div>
        <div className="flex items-center gap-3 underline">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
        </div>
      </div>

      <div className="bg-primaryGreen px-4">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between pt-5 pb-6">
          {/* logo */}
          <h1 className="flex items-center gap-1">
            <FaShoppingBag className="text-4xl text-white" />
            <span className="text-3xl font-semibold text-white">FreshMart</span>
          </h1>
          {/* desktop navLins  */}
          <ul className="hidden md:flex items-center gap-7">
            <NavLinks />
          </ul>

          {/* cart and user login  */}
          <div className="hidden md:flex text-white text-3xl items-center gap-6 cursor-pointer">
            <LuShoppingCart />
            <Link to="/login"><FiUser /></Link>
          </div>

          {/* mobile toggler  */}
          <div className="block md:hidden text-white text-3xl items-center gap-6 cursor-pointer">
            <span onClick={handleToggleMenu}>
              {isOpen ? <IoClose /> : <IoMenu />}
            </span>
          </div>

          {/* mobile navLinks  */}
          <div
            className={`md:hidden w-full h-fit absolute ${
              isOpen ? "left-0" : "-left-[800px]"
            } top-20 bg-primaryGreen pt-6 pb-7 z-30 transition-all duration-500 ease-in-out`}
          >
            <ul onClick={handleToggleMenu} className="flex flex-col space-y-4">
              <NavLinks />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
