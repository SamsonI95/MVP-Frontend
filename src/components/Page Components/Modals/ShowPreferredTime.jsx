import React from "react";

const generateTimes = (startTime, endTime, interval) => {
  const times = [];
  let currentTime = new Date(startTime);

  while (currentTime <= endTime) {
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "pm" : "am";
    const formattedTime = `${
      hours % 12 === 0 ? 12 : hours % 12
    }:${minutes}${ampm}`;
    times.push(formattedTime);
    currentTime.setMinutes(currentTime.getMinutes() + interval);
  }

  return times;
};
const ShowPreferredTime = ({setTimeState}) => {
  const startTime = new Date();
  startTime.setHours(1, 0, 0, 0); // 04:30am
  const endTime = new Date();
  endTime.setHours(24, 0, 0, 0); // 03:30pm
  const interval = 30; // 30 minutes

  const times = generateTimes(startTime, endTime, interval)

  return (
    <div className="absolute top-[83px] min-h-[150px] z-50 bg-white w-full shadow-md rounded-lg  overflow-hidden transition-all duration-300">
      {/* {isLoading ? (
        <div className="flex items-center justify-between w-full">
          {" "}
          <ScaleLoader
            color="#2F4EED"
            height={25}
            className="mx-auto"
            type="submit"
          />
        </div>
      ) : ( */}
      {/* assets.map((asset, index) => ( */}
      <div className="flex justify-between items-center w-full duration-200 ">
        <div className="flex flex-col items-start gap-3 w-full overflow-y-auto max-h-[12rem]">
          {times.map((time, index) => (
            <p
              key={index}
              onClick={() => setTimeState(time)}
              className="text-[#9C9C9C] text-[.875rem] leading-4 font-semibold cursor-pointer hover:bg-[#F7F7F7] py-3 px-4 w-full"
            >
              {time}
            </p>
          ))}
        </div>
      </div>
      {/* )) */}
      {/* )} */}
    </div>
  );
};

export default ShowPreferredTime;
