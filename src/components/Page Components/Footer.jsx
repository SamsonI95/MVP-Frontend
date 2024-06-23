//App
import React from "react";
import { Link } from "react-router-dom";

//Image(s)
import LinkedInIcon from "../../assets/LinkedInIcon.svg";
import IgIcon from "../../assets/IgIcon.svg";
import TwitterXicon from "../../assets/TwitterXicon.svg";

const Footer = () => {
  return (
    <div className=" sm:px-[20px] px-[32px] lg:px-[100px] sm:my-[40px] md:my-[24px] container">
      <div className="flex sm:flex-col md:flex-row lg:flex-row items-center justify-between border border-t-[#BCBCBC] border-transparent sm:py-[40px] md:py-[24px]">
        <p>© Copyright 2024, All Rights Reserved</p>
        <div className="flex items-center sm:mt-[40px] space-x-[32px] md:mt-0">
          <Link to="#">
            <img src={TwitterXicon} alt="twitter/x-logo" />
          </Link>
          <Link to="https://www.linkedin.com/company/coinomad">
            <img src={LinkedInIcon} alt="linkedin-logo" />
          </Link>
          {/* <Link to="#">
            <img src={IgIcon} alt="instagram-logo" />
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
