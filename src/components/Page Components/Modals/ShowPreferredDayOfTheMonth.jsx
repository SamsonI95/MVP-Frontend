import React from "react";

const ShowPreferredDayOfTheMonth = ({ setDayState }) => {
  const daysOfTheMonth = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28,
  ];
  return (
    <div className="absolute top-[83px] min-h-[150px] z-50 bg-white w-full shadow-md rounded-lg  overflow-hidden transition-all duration-300">
      <div className="flex justify-between items-center w-full duration-200 ">
        <div className="flex flex-col items-start gap-3 w-full overflow-y-auto max-h-[12rem]">
          {daysOfTheMonth.map((day, index) => (
            <p
              key={index}
              onClick={() => setDayState(day)}
              className="text-[#9C9C9C] text-[.875rem] leading-4 font-semibold cursor-pointer hover:bg-[#F7F7F7] py-3 px-4 w-full"
            >
              {day}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ShowPreferredDayOfTheMonth;
