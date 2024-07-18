import React from "react";

const ShowPreferredDay = ({ setDayState }) => {
  const daysOfTheWeek = [
    { day: "Monday", value: 0 },
    { day: "Tuesday", value: 1 },
    { day: "Wednesday", value: 2 },
    { day: "Thursday", value: 3 },
    { day: "Friday", value: 4 },
    { day: "Saturday", value: 5 },
    { day: "Sunday", value: 6 },
  ];
  return (
    <div className="absolute top-[83px] min-h-[150px] z-50 bg-white w-full shadow-md rounded-lg  overflow-hidden transition-all duration-300">
      <div className="flex justify-between items-center w-full duration-200 ">
        <div className="flex flex-col items-start gap-3 w-full overflow-y-auto max-h-[12rem]">
          {daysOfTheWeek.map((day, index) => (
            <p
              key={index}
              onClick={() => setDayState(day)}
              className="text-[#9C9C9C] text-[.875rem] leading-4 font-semibold cursor-pointer hover:bg-[#F7F7F7] py-3 px-4 w-full"
            >
              {day.day}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowPreferredDay;
