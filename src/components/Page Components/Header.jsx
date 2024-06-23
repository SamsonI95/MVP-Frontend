//App
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

//Image(s)
import HeaderLogo from "../../assets/HeaderLogo.svg";

//Icon(s)
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const renderButtons =
    location.pathname !== "/home" &&
    location.pathname !== "/sign-in" &&
    location.pathname !== "/sign-up/join" &&
    location.pathname !== "/sign-up/step-1" &&
    location.pathname !== "/sign-up/verify-email" &&
    location.pathname !== "/sign-up/create-password" &&
    location.pathname !== "/sign-up/identification" &&
    location.pathname !== "/sign-up/organization" &&
    location.pathname !== "/forgot-password" &&
    location.pathname !== "/new-password" &&
    location.pathname !== "/password-verification-check" &&
    location.pathname !== "/success-verification";

  return (
    <>
      <div className="flex items-center justify-between sm:py-4 sm:px-5 md:py-6 md:px-8 lg:px-[100px]">
        <div className="mx-auto">
          <Link to="/" className="sm:py-[16px] py-[24px]">
            <img src={HeaderLogo} alt="logo-icon" />
          </Link>
        </div>
        {/* <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {/* <div className="hidden md:flex w-fit items-center justify-evenly space-x-6">
          {renderButtons && (
            <>
              <Link to="/sign-in">
                <button className="text-sm font-semibold p-2">Sign In</button>
              </Link>
              <Link to="/sign-up/step-1">
                <button className="w-[100px] h-[48px] text-sm font-semibold text-white bg-buttonPrimary rounded-[8px] p-2 shadow-customInset hover:bg-buttonPrimaryHover">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div> */}
      </div>
      {/* {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4">
          <Link to="/sign-in" onClick={toggleMenu}>
            <button className="text-sm font-semibold p-2">Sign In</button>
          </Link>
          <Link to="/sign-up/step-1" onClick={toggleMenu}>
            <button className="text-sm font-semibold text-white bg-buttonPrimary rounded-[8px] p-2 shadow-customInset hover:bg-buttonPrimaryHover">
              Sign Up
            </button>
          </Link>
        </div>
      )} */}
    </>
  );
};

export default Header;
