import React, { useEffect, useState } from "react";
import { HiMiniUser, HiOutlineBell } from "react-icons/hi2";
import { useLocation } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import AccountHeaderModal from "./Modals/AccountHeaderModal";

const DashboardHeader = ({ menuClicked, setMenuClicked, header }) => {
  const location = useLocation();

  const [isClicked, setIsClicked] = useState(false);

  // const storedUser = secureLocalStorage.getItem('user');
  // const user = storedUser ? JSON.parse(storedUser) : null;

  return (
    <header className="p-[32px] hidden lg:flex justify-between items-center w-full">
      <h1 className="text-[#151515] text-[1.75rem] font-bold leading-9 tracking-[-0.56px]">
        {header}
      </h1>

      <div className="flex items-center gap-[24px]">
        <div className="w-[40px] h-[40px] bg-[#F7F7F7] rounded-[50px] px-[8px] py-[0px] flex justify-center items-center relative">
          <HiOutlineBell className="text-[1.45rem] cursor-pointer" />
          <div className="absolute top-[-6.5px] right-[-8.5px] bg-[#E12929] rounded-full p-[2px] text-[12px] font-medium w-[20px] h-[20px] flex justify-center items-center leading-[18px] tracking-[-0.1px] text-white">
            12
          </div>
        </div>
        <div
          // onMouseEnter={() => setIsClicked((prev) => !prev)}
          onClick={() => setIsClicked((prev) => !prev)}
          className="bg-[#2F4EED] cursor-pointer w-[40px] h-[40px] p-[10px] rounded-full flex justify-center items-center"
        >
          <HiMiniUser className="text-[1.45rem] text-white" />
        </div>
        <AccountHeaderModal isClicked={isClicked} setIsClicked={setIsClicked} />
      </div>
    </header>
  );
};

export default DashboardHeader;
