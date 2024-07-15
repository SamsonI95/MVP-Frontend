import React from "react";

const ShowFrequency = ({ setFreq, setFrequencyState }) => {
  return (
    <div className="absolute bottom-[-130px] bg-white w-full shadow-md rounded-lg h-[120px] z-50">
      <div
        onClick={() => {
          setFreq(false);
          setFrequencyState("daily");
        }}
        className="flex justify-between items-center py-3 px-4 duration-200 cursor-pointer hover:bg-[#F7F7F7] rounded-t-lg"
      >
        <div className="flex items-center gap-3">
          <p className="text-[#151515] text-[.875rem] leading-4 font-semibold">
            Daily
          </p>
        </div>
      </div>
      <div
        onClick={() => {
          setFreq(false);
          setFrequencyState("weekly");
        }}
        className="flex justify-between items-center py-3 px-4 duration-200 cursor-pointer hover:bg-[#F7F7F7]"
      >
        <div className="flex items-center gap-3">
          <p className="text-[#151515] text-[.875rem] leading-4 font-semibold">
            Weekly
          </p>
        </div>
      </div>
      <div
        onClick={() => {
          setFreq(false);
          setFrequencyState("monthly");
        }}
        className="flex justify-between items-center py-3 px-4 duration-200 cursor-pointer hover:bg-[#F7F7F7] rounded-b-lg"
      >
        <div className="flex items-center gap-3">
          <p className="text-[#151515] text-[.875rem] leading-4 font-semibold">
            Monthly
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowFrequency;
