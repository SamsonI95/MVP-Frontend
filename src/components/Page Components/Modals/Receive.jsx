import React, { useState, useEffect, useRef } from "react";
import { IoCopyOutline } from "react-icons/io5";
import qrcode from "/public/Coinnomad QR Code.png";
import ShowAssets from "./ShowAssets";
import { IoIosArrowDown } from "react-icons/io";
import secureLocalStorage from "react-secure-storage";
import bitcoin from "/svg/Bitcoin Badge.svg";
import polygon from "/svg/Coinnomad logo.svg";

const Receive = ({ receiveAssets, setReceiveAssets }) => {
  const [walletType, setwalletType] = useState("Select Asset");
  const [copySuccess, setCopySuccess] = useState(false);
  const user = secureLocalStorage.getItem("user");
  const dropdownRef = useRef(null);

  console.log("user", user);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setReceiveAssets(false);
    }
  };

  useEffect(() => {
    if (receiveAssets) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [receiveAssets]);

  const handleCopyAddress = (walletAddress) => {
    navigator.clipboard
      .writeText(walletAddress)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 1500); // Reset copy success message after 1.5 seconds
      })
      .catch((err) => console.error("Failed to copy:", err));
  };

  return (
    <div className="p-6 gap-4 flex justify-center items-center flex-col w-full">
      <div className="relative flex flex-col items-start gap-2 w-full">
        <label
          className="text-[#151515] text-[.875rem] font-semibold leading-4"
          htmlFor="Receive to"
        >
          Receive to
        </label>
        <div
          ref={dropdownRef}
          onClick={() => setReceiveAssets(!receiveAssets)}
          className="outline-none border-none justify-between cursor-pointer bg-[#F7F7F7] h-[56px]  px-4 gap-2 w-full self-stretch flex items-center text-base placeholder:text-[#838385] font-normal leading-6 text-[#000000] rounded-lg"
        >
          {walletType == "Select Asset" && (
            <p className="text-[#838385]">Select Asset</p>
          )}
          {walletType == "Matic" && (
            <div className="flex gap-x-2">
              <img src={polygon} alt="" />
              <div className="flex flex-col">
                <h1 className="text-[#151515] text-lg font-bold uppercase">
                  Matic
                </h1>
                <p className="text-[#9C9C9C] text-[.875rem] leading-4 font-semibold">
                  Polygon
                </p>
              </div>
            </div>
          )}
          {walletType == "BTC" && (
            <div className="flex gap-x-2">
              <img src={bitcoin} alt="" />
              <div className="flex flex-col">
                <h1 className="text-[#151515] text-lg font-bold uppercase">
                  Bitcoin
                </h1>
                <p className="text-[#9C9C9C] text-[.875rem] leading-4 font-semibold">
                  BTC
                </p>
              </div>
            </div>
          )}

          <IoIosArrowDown
            className={`text-[1.125rem] text-[#151515] items-end font-bold cursor-pointer ${
              receiveAssets
                ? "rotate-[180deg] duration-200"
                : "rotate-0 duration-200"
            }`}
          />
          {receiveAssets && (
            <div className="absolute top-0 left-0 mt-2 w-full bg-white shadow-lg rounded-lg z-10">
              <ShowAssets onAssetClick={setwalletType} />
            </div>
          )}
        </div>
      </div>

      {walletType == "Select Asset" ? (
        <div className="w-[350px] h-[350px] text-center object-contain text-2xl font-semibold">
          Select asset
        </div>
      ) : (
        <img
          className="w-[350px] h-[350px] object-contain"
          src={
            walletType == "Matic"
              ? user.polygonWalletQrCode
              : walletType == "BTC"
              ? user.bitcoinWalletQrCode
              : ""
          }
          loading="lazy"
          alt="QR Code"
        />
      )}
      <button
        onClick={() => {
          if (walletType == "Matic") {
            handleCopyAddress(user.polygonWalletAddress);
          } else if (walletType == "BTC") {
            handleCopyAddress(user.bitcoinWalletAddress);
          }
        }}
        className="h-[56px] self-stretch flex justify-center items-center px-2 bg-[#F7F7F7] rounded-lg text-base text-[#151515] font-semibold leading-[18px] gap-[10px]"
      >
        {copySuccess ? "Copied!" : "Copy Address"}
        <IoCopyOutline className="text-[#1F2937] font-bold text-[1.125rem]" />
      </button>
    </div>
  );
};

export default Receive;
