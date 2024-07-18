import React, { useState } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const TransactionSuccessful = ({setSendReceiveModal}) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div
      className={
        clicked
          ? `fixed hidden top-0 z-50 left-0 right-0 bottom-0 w-full h-screen bg-black/20 justify-center items-center`
          : `fixed duration-200 top-0 z-50 left-0 right-0 bottom-0 w-full h-screen bg-black/20 flex justify-center items-center`
      }
    >
      <div className="bg-white flex flex-col justify-center items-center gap-2 w-[300px] p-6 h-[300px] rounded-lg">
        <IoIosCheckmarkCircleOutline className="text-gree-400 text-[3.25rem] text-green-500" />
        <p className="text-[1.125rem] text-[#151515] font-bold leading-6">
          Transaction Successful!
        </p>
        <div></div>
        <button onClick={()=>{setSendReceiveModal(null)}} className="bg-[#2F4EED] px-2 py-2 rounded-lg text-white h-[3.5em] gap-[40px] w-full mt-6">
          Close
        </button>
      </div>
    </div>
  );
};

export default TransactionSuccessful;
