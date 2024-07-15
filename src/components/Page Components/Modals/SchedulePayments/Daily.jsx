import React, { useEffect, useRef, useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import ShowAssets from "../ShowAssets";
import ShowFrequency from "../ShowFrequency";
import FinishSchedule from "./FinishSchedule";
import ShowAssets2 from "../ShowAssets2";
import bitcoin from "/svg/Bitcoin Badge.svg";
import polygon from "/svg/Coinnomad logo.svg";

const Daily = ({ setSchedulePayments, schedulePayments }) => {
  const [finishSchedule, setFinishSchedule] = useState(false);
  const [freq, setFreq] = useState(false);
  const [frequencyState, setFrequencyState] = useState("Select Frequency");
  const freqMenu = useRef(null);

  const assetsMenu = useRef(null);
  const [assets, setAssets] = useState(false);
  const [assetsState, setAssetsState] = useState("Select Asset");

  const handleClickOutsideAsset = (event) => {
    if (assetsMenu.current && !assetsMenu.current.contains(event.target)) {
      setAssets(false);
    }
  };

  useEffect(() => {
    if (assets) {
      document.addEventListener("mousedown", handleClickOutsideAsset);
    } else {
      document.removeEventListener("mousedown", handleClickOutsideAsset);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideAsset);
    };
  }, [assets]);

  const handleClickOutside = (event) => {
    if (freqMenu.current && !freqMenu.current.contains(event.target)) {
      setFreq(false);
    }
  };

  useEffect(() => {
    if (freq) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [freq]);
  function capitalizeFirstLetterOfEachWord(inputString) {
    return inputString
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }
  return (
    <div
      onClick={() => setSchedulePayments(false)}
      className="w-full h-full modalBg fixed cursor-pointer top-0 left-0 right-0 bottom-0 flex justify-center items-center z-[999]"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`overflow-y-auto absolute cursor-auto bg-white w-[450px] h-full flex flex-col justify-start items-start top-0 ${
          schedulePayments ? `right-0 trans` : `right-[-200%] trans`
        }`}
      >
        <div className="flex justify-end items-center gap-[152px] py-[18px] px-[24px] w-full">
          <HiOutlineXMark
            onClick={() => setSchedulePayments(false)}
            className="cursor-pointer text-[1.75rem] text-[#1F2937]"
          />
        </div>
        <div className="w-full flex flex-col items-start gap-1 py-4 px-6">
          <h1 className="text-[#151515] text-[1.75rem] font-bold leading-9 tracking-[-.56px]">
            Schedule Payment
          </h1>
          <p className="text-[1rem] text-[#9C9C9C] font-semibold leading-6">
            Automate payment and Control how you want to Pay this employee
          </p>
        </div>
        <form
          className="w-full flex flex-col items-start justify-between h-full"
          action=""
        >
          <div className="flex flex-col items-start gap-6 py-4 px-6 w-full">
            <div
              ref={freqMenu}
              className="relative flex cursor-pointer flex-col items-start gap-2 w-full"
            >
              <label
                className="relative text-[#151515] text-[.875rem] font-semibold leading-4"
                htmlFor="Frequency"
              >
                Frequency
              </label>
              <div
                onClick={() => setFreq((prev) => !prev)}
                className="outline-none border-none  justify-between bg-[#F7F7F7] h-[56px] px-4 gap-2 w-full self-stretch flex items-center text-base placeholder:text-[#838385] font-normal leading-6 text-[#000000] rounded-lg"
              >
                {frequencyState == "Select Frequency" ? (
                  <p className="text-[#838385]">Select Frequency</p>
                ) : (
                  <p className="s">
                    {capitalizeFirstLetterOfEachWord(frequencyState)}
                  </p>
                )}
                <IoIosArrowDown
                  className={`text-[1.125rem] text-[#151515] font-bold cursor-pointer ${
                    freq
                      ? `rotate-[180deg] duration-200`
                      : `rotate-0 duration-200`
                  }`}
                />
              </div>
              {freq && (
                <ShowFrequency
                  setFrequencyState={setFrequencyState}
                  setFreq={setFreq}
                />
              )}
            </div>
            <div
              ref={assetsMenu}
              className="relative flex flex-col items-start gap-2 w-full"
            >
              <label
                className="relative text-[#151515] text-[.875rem] font-semibold leading-4"
                htmlFor="Assets"
              >
                Assets
              </label>
              <div
                onClick={() => setAssets((prev) => !prev)}
                className="outline-none border-none cursor-pointer justify-between bg-[#F7F7F7] h-[56px] px-4 gap-2 w-full self-stretch flex items-center text-base placeholder:text-[#838385] font-normal leading-6 text-[#000000] rounded-lg"
              >
                {assetsState == "Select Asset" && (
                  <p className="text-[#838385]">Select Asset</p>
                )}
                {assetsState == "Matic" && (
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
                {assetsState == "BTC" && (
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
                  className={`text-[1.125rem] text-[#151515] font-bold cursor-pointer ${
                    assets
                      ? `rotate-[180deg] duration-200`
                      : `rotate-0 duration-200`
                  }`}
                />
              </div>
              {assets && (
                <div onClick={() => setAssets((prev) => !prev)}>
                  <ShowAssets2 onAssetClick={setAssetsState} />
                </div>
              )}
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
              <label
                className="text-[#151515] text-[.875rem] font-semibold leading-4"
                htmlFor="Amount"
              >
                Amount
              </label>
              <input
                className="outline-none border-none bg-[#F7F7F7] h-[56px] px-4 w-full self-stretch flex items-center text-base placeholder:text-[#838385] font-normal leading-6 text-[#000000] rounded-lg"
                type="text"
                placeholder="Enter Amount"
              />
            </div>
          </div>

          <div className="pt-4 pb-10 px-6 flex w-full flex-col items-start gap-[10px]">
            <button
              onClick={(e) => {
                e.preventDefault();
                setFinishSchedule(true);
              }}
              className="h-[56px] self-stretch flex justify-center items-center px-2 bg-[#2F4EED] rounded-lg text-base text-white font-semibold leading-[18px]"
            >
              Continue
            </button>
          </div>
        </form>
        {finishSchedule && (
          <FinishSchedule
            setFinishSchedule={setFinishSchedule}
            finishSchedule={finishSchedule}
          />
        )}
      </div>
    </div>
  );
};

export default Daily;
