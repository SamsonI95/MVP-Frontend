import React, { useEffect, useRef, useState } from "react";
import { BsChat } from "react-icons/bs";
import { HiMiniUser } from "react-icons/hi2";
import {
  IoCheckmarkOutline,
  IoCopyOutline,
  IoLogOutOutline,
  IoMoonOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";

const AccountHeaderModal = ({ isClicked, setIsClicked }) => {
  const [copied, setCopied] = useState("");
  const navigate = useNavigate();

  const truncateWalletAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-6)}`;
  };
  const dropDownMenu = useRef(null);

  const handleLogout = () => {
    secureLocalStorage.removeItem("user");
    navigate("/sign-in", { replace: true });
  };

  useEffect(() => {
    // Function to handle clicks outside the modal
    const handleClickOutside = (event) => {
      if (
        dropDownMenu.current &&
        !dropDownMenu.current.contains(event.target)
      ) {
        setIsClicked(false);
      }
    };

    // Add event listener when modal is open
    if (isClicked) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isClicked, setIsClicked]);
  const user = secureLocalStorage.getItem("user");
  console.log("user", user);

  const handleCopy = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        setCopied(textToCopy);
        setTimeout(() => setCopied(""), 2000); // Reset after 2 seconds
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <div
      ref={dropDownMenu}
      className={`bg-white duration-200 min-w-[263px] absolute right-8 top-20 rounded-lg shadow-lg flex flex-col items-start justify-start gap-2 ${
        isClicked
          ? `opacity-100  duration-300 ease-in-out`
          : `opacity-0  duration-300 ease-in-out -z-10`
      }`}
    >
      <div className="flex items-center w-full px-4 py-3 gap-3 border-b border-[#E9E9E9] duration-200 hover:bg-[#F7F7F7] cursor-pointer">
        <div className="bg-[#2F4EED] w-[40px] h-[40px] p-[10px] rounded-full flex justify-center items-center">
          <HiMiniUser className="text-[1.45rem] text-white" />
        </div>
        <div className="flex flex-col gap-y-2">
          {" "}
          <div className="flex items-center gap-x-1">
            <p className="font-semibold">Matic:</p>
            <p className="text-[#151515] text-[.875rem] font-semibold leading-4">
              {truncateWalletAddress(user.polygonWalletAddress)}
            </p>
            {copied === user.polygonWalletAddress ? (
             <IoCheckmarkOutline className="text-green-400 font-bold text-[1.125rem]" />
            ) : (
              <IoCopyOutline
                onClick={() => handleCopy(user.polygonWalletAddress)}
                className="text-[#1F2937] font-bold text-[1.3rem]"
              />
            )}
          </div>
          <div className="flex items-center gap-x-1">
            <p className="font-semibold">Bitcoin:</p>
            <p className="text-[#151515] text-[.875rem] font-semibold leading-4">
              {truncateWalletAddress(user.bitcoinWalletAddress)}
            </p>
            {copied === user.bitcoinWalletAddress ? (
              
              <IoCheckmarkOutline className="text-green-400 font-bold text-[1.125rem]" />
            ) : (
              <IoCopyOutline
                onClick={() => handleCopy(user.bitcoinWalletAddress)}
                className="text-[#1F2937] font-bold text-[1.3rem]"
              />
            )}
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          navigate("/settings");
          setIsClicked(false);
        }}
        className="flex items-center w-full px-4 py-3 gap-3 duration-200 hover:bg-[#F7F7F7] cursor-pointer"
      >
        <IoSettingsOutline className="text-[1.35rem] text-[#2F4EED]" />
        <p className="text-[#151515] text-[.875rem] font-semibold leading-4">
          Settings
        </p>
      </div>
      {/* <div className="flex justify-between items-center self-stretch w-full px-4 py-3 gap-3 duration-200 hover:bg-[#F7F7F7] cursor-pointer">
        <div className="flex items-center gap-2">
          <IoMoonOutline className="text-[1.35rem] text-[#2F4EED]" />
          <p className="text-[#151515] text-[.875rem] font-semibold leading-4">
            Dark Mode
          </p>
        </div>
      </div>
      <div className="flex items-center w-full px-4 py-3 gap-3 duration-200 hover:bg-[#F7F7F7] cursor-pointer">
        <BsChat className="text-[1.35rem] text-[#2F4EED]" />
        <p className="text-[#151515] text-[.875rem] font-semibold leading-4">
          Support
        </p>
      </div> */}
      <div
        onClick={handleLogout}
        className="flex items-center w-full px-4 py-3 gap-3 duration-200 hover:bg-[#F7F7F7] cursor-pointer"
      >
        <IoLogOutOutline className="text-[1.35rem] text-[#ED2F2F]" />
        <p className="text-[#151515] text-[.875rem] font-semibold leading-4">
          Logout
        </p>
      </div>
    </div>
  );
};

export default AccountHeaderModal;
