import React, { useState } from "react";
import bitcoin from "/svg/Bitcoin Badge.svg";
import polygon from "/svg/Coinnomad logo.svg";
import ethereum from "/svg/Eth (1).svg";
import { IoCopyOutline, IoSwapVerticalOutline } from "react-icons/io5";

const EmployeeTable = () => {
  const [existData, setExistData] = useState(true);
  return (
    <>
      {existData ? (
        <div className="whitespace-nowrap overflow-auto w-full">
          <table className="w-full">
            <thead className="w-full">
              <tr className="border-b border-[#E9E9E9] flex justify-between items-start self-stretch w-full">
                <th
                  className="px-8 py-4 flex items-center w-full  self-stretch gap-[10px] text-[#9C9C9C] text-[.875rem] font-semibold leading-[1rem] h-[54px]"
                  scope="col"
                >
                  First Name
                </th>
                <th
                  className="px-8 py-4 flex items-center w-full self-stretch gap-[10px] text-[#9C9C9C] text-[.875rem] font-semibold leading-[1rem] h-[54px]"
                  scope="col"
                >
                  Last Name
                </th>
                <th
                  className="px-8 py-4 flex items-center w-full self-stretch gap-[10px] text-[#9C9C9C] text-[.875rem] font-semibold leading-[1rem] h-[54px]"
                  scope="col"
                >
                  Email
                </th>
                <th
                  className="px-8 py-4 flex items-center w-full self-stretch gap-[10px] text-[#9C9C9C] text-[.875rem] font-semibold leading-[1rem] h-[54px]"
                  scope="col"
                >
                  Wallet address
                </th>
                <th
                  className="px-8 py-4 flex items-center w-full self-stretch gap-[10px] text-[#9C9C9C] text-[.875rem] font-semibold leading-[1rem] h-[54px]"
                  scope="col"
                >
                  Asset
                </th>
                <th
                  className="px-8 py-4 flex items-center w-full self-stretch gap-[10px] text-[#9C9C9C] text-[.875rem] font-semibold leading-[1rem] h-[54px]"
                  scope="col"
                >
                  Payment status
                </th>
              </tr>
            </thead>
            <tbody className="w-full">
              <tr className="border-b border-[#E9E9E9] flex items-center self-stretch">
                <td className="flex items-center w-full self-stretch py-[12px] px-[32px] text-[.875rem] text-[#151515] leading-5 font-semibold h-[64px] gap-[12px]">
                  Daniel
                </td>
                <td className="text-[.875rem] text-[#151515] w-full font-semibold leading-5 py-[12px] px-[32px] flex items-center self-stretch h-[64px] gap-[12px]">
                  Adegoke
                </td>
                <td className="text-[.875rem] text-[#151515] w-full font-semibold leading-5 py-[12px] px-[32px] flex items-center self-stretch h-[64px] gap-[12px]">
                  example@email.com
                </td>
                <td className="flex py-[12px] px-[32px] w-full items-center self-stretch gap-2 h-[64px]">
                  <IoCopyOutline className="text-[#1F2937] font-bold text-[1.125ren]" />
                  <p className="text-[#151515] text-[.875rem] font-semibold leading-4">
                    0x8bfb...70b1ae
                  </p>
                </td>
                <td className="flex px-[32px] py-[10px] w-full items-center self-stretch gap-2 h-[64px]">
                  <img className="w-6 h-6" src={ethereum} alt="Ethereum" />
                  <p className="text-[#9C9C9C] text-[.875rem] font-semibold leading-4">
                    Ethereum
                  </p>
                </td>
                <td className="flex flex-col justify-center py-[12px] px-[32px] w-full items-start self-stretch font-semibold leading-[16px] h-[64px] gap-[12px]">
                  <p className="bg-[#E9F7EF] py-1 px-3 rounded-[5px] text-[#23AE5E] text-[.875rem]">
                    Scheduled
                  </p>
                </td>
              </tr>
              <tr className="border-b border-[#E9E9E9] flex items-center self-stretch">
                <td className="flex items-center w-full self-stretch py-[12px] px-[32px] md:px-[32px] text-[.875rem] text-[#151515] leading-5 font-semibold h-[64px] gap-[12px]">
                  Daniel
                </td>
                <td className="text-[.875rem] text-[#151515] w-full font-semibold leading-5 py-[12px] px-[32px] flex items-center self-stretch h-[64px] gap-[12px]">
                  Adegoke
                </td>
                <td className="text-[.875rem] text-[#151515] w-full font-semibold leading-5 py-[12px] px-[32px] flex items-center self-stretch h-[64px] gap-[12px]">
                  example@email.com
                </td>
                <td className="flex py-[12px] px-[32px] w-full items-center self-stretch gap-2 h-[64px]">
                  <IoCopyOutline className="text-[#1F2937] font-bold text-[1.125ren]" />
                  <p className="text-[#151515] text-[.875rem] font-semibold leading-4">
                    0x8bfb...70b1ae
                  </p>
                </td>
                <td className="flex py-[12px] px-[32px] w-full items-center self-stretch gap-2 h-[64px]">
                  <img className="w-6 h-6" src={bitcoin} alt="Bitcoin" />
                  <p className="text-[#9C9C9C] text-[.875rem] font-semibold leading-4">
                    Bitcoin
                  </p>
                </td>
                <td className="flex flex-col justify-center py-[12px] px-[32px] w-full items-start self-stretch font-semibold leading-[16px] h-[64px] gap-[12px]">
                  <p className="bg-[#FFF2F0] py-1 px-3 rounded-[5px] text-[#ED2F2F] text-[.875rem]">
                    Unscheduled
                  </p>
                </td>
              </tr>
              <tr className="border-b border-[#E9E9E9] flex items-center self-stretch">
                <td className="flex items-center w-full self-stretch py-[12px] px-[32px] md:px-[32px] text-[.875rem] text-[#151515] leading-5 font-semibold h-[64px] gap-[12px]">
                  Daniel
                </td>
                <td className="text-[.875rem] text-[#151515] w-full font-semibold leading-5 py-[12px] px-[32px] flex items-center self-stretch h-[64px] gap-[12px]">
                  Adegoke
                </td>
                <td className="text-[.875rem] text-[#151515] w-full font-semibold leading-5 py-[12px] px-[32px] flex items-center self-stretch h-[64px] gap-[12px]">
                  example@email.com
                </td>
                <td className="flex py-[12px] px-[32px] w-full items-center self-stretch gap-2 h-[64px]">
                  <IoCopyOutline className="text-[#1F2937] font-bold text-[1.125ren]" />
                  <p className="text-[#151515] text-[.875rem] font-semibold leading-4">
                    0x8bfb...70b1ae
                  </p>
                </td>
                <td className="flex py-[12px] px-[32px] w-full items-center self-stretch gap-2 h-[64px]">
                  <img className="w-6 h-6" src={bitcoin} alt="Bitcoin" />
                  <p className="text-[#9C9C9C] text-[.875rem] font-semibold leading-4">
                    Bitcoin
                  </p>
                </td>
                <td className="flex flex-col justify-center py-[12px] px-[32px] w-full items-start self-stretch font-semibold leading-[16px] h-[64px] gap-[12px]">
                  <p className="bg-[#FFF2F0] py-1 px-3 rounded-[5px] text-[#ED2F2F] text-[.875rem]">
                    Unscheduled
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex flex-col justify-start items-center px-[10px] py-[80px] md:h-[612px] w-full gap-[10px]">
          <div className=" rounded-full p-[10px] bg-[#F7F7F7] gap-[10px] flex justify-center items-center">
            <IoSwapVerticalOutline className="text-[1.25rem] rotate-[45deg]" />
          </div>
          <p className="text-[#000000] text-[1.125rem] font-semibold leading-7">
            No Activity
          </p>
        </div>
      )}
    </>
  );
};

export default EmployeeTable;
