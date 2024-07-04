import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import qrcode from "/public/Coinnomad QR Code.png";
import ShowAssets from "./ShowAssets";
import { IoIosArrowDown } from "react-icons/io";
import secureLocalStorage from "react-secure-storage";

const Receive = ({ receiveAssets, setReceiveAssets }) => {
  const [walletType, setwalletType] = useState("");
  const user = secureLocalStorage.getItem("user");
  console.log("user", user);
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
          onClick={() => setReceiveAssets((prev) => !prev)}
          className="outline-none border-none  justify-end cursor-pointer  bg-[#F7F7F7] h-[56px] px-4 gap-2 w-full self-stretch flex items-center text-base placeholder:text-[#838385] font-normal leading-6 text-[#000000] rounded-lg"
        >
          {/* <input
            disabled
            className="outline-none border-none bg-transparent w-full cursor-pointer"
            value={user?.walletAddress}
            onChange={(e) => setwalletType(e.target.value)}
            type="text"
            placeholder="Select Asset"
          /> */}
          <IoIosArrowDown
            className={`text-[1.125rem] text-[#151515]  items-end font-bold cursor-pointer ${
              receiveAssets
                ? `rotate-[180deg] duration-200`
                : `rotate-0 duration-200`
            }`}
          />
        </div>
        {receiveAssets && <ShowAssets />}
      </div>

      <img
        className="w-[350px] h-[350px] object-contain"
        src={qrcode}
        alt="QR Code"
      />
      <button className="h-[56px] self-stretch flex justify-center items-center px-2 bg-[#F7F7F7] rounded-lg text-base text-[#151515] font-semibold leading-[18px] gap-[10px]">
        Copy Address{" "}
        <IoCopyOutline className="text-[#1F2937] font-bold text-[1.125ren]" />
      </button>
    </div>
  );
};

export default Receive;
