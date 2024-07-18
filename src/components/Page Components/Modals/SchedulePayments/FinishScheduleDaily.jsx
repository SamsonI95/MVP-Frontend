import React, { useEffect, useRef, useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import ShowPreferredTime from "../ShowPreferredTime";
import { capitalizeFirstLetterOfEachWord } from "@/Data/formikUtils";
import { toast } from "react-toastify";
import FormButton from "@/components/Buttons/FormButton";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";
import ShowPreferredDay from "../ShowPreferredDay";
import ShowPreferredDayOfTheMonth from "../ShowPreferredDayOfTheMonth";

const FinishScheduleDaily = ({
  finishSchedule,
  setFinishSchedule,
  frequencyState,
  asset,
  employeeId,
  amount,
  setExistData,
  setSchedulePayments,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const dayMonthMenu = useRef(null);
  const [showPTThree, setShowPTThree] = useState(false);
  const [dayMonthState, setDayMonthState] = useState("");

  const handleClickOutsideDayMonth = (event) => {
    if (dayMonthMenu.current && !dayMonthMenu.current.contains(event.target)) {
      setShowPTThree(false);
    }
  };

  useEffect(() => {
    if (showPTThree) {
      document.addEventListener("mousedown", handleClickOutsideDayMonth);
    } else {
      document.removeEventListener("mousedown", handleClickOutsideDayMonth);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideDayMonth);
    };
  }, [showPTThree]);

  const dayMenu = useRef(null);
  const [showPTTwo, setShowPTTwo] = useState(false);
  const [dayState, setDayState] = useState({});

  const handleClickOutsideDay = (event) => {
    if (dayMenu.current && !dayMenu.current.contains(event.target)) {
      setShowPTTwo(false);
    }
  };

  useEffect(() => {
    if (showPTTwo) {
      document.addEventListener("mousedown", handleClickOutsideDay);
    } else {
      document.removeEventListener("mousedown", handleClickOutsideDay);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideDay);
    };
  }, [showPTTwo]);

  const timeMenu = useRef(null);
  const [showPT, setShowPT] = useState(false);
  const [timeState, setTimeState] = useState("Select Time");

  const handleClickOutsideAsset = (event) => {
    if (timeMenu.current && !timeMenu.current.contains(event.target)) {
      setShowPT(false);
    }
  };

  useEffect(() => {
    if (showPT) {
      document.addEventListener("mousedown", handleClickOutsideAsset);
    } else {
      document.removeEventListener("mousedown", handleClickOutsideAsset);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideAsset);
    };
  }, [showPT]);

  const user = secureLocalStorage.getItem("user");
  const config = {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  };

  const SechedulePayment = (e) => {
    e.preventDefault();
    const timeParts = timeState.match(/(\d{1,2}):(\d{2})([ap]m)/i);
    setIsLoading(true);
   
    axios
      .post(
        asset == "BTC"
          ? "/api/wallet/schedule-transaction/bitcoin/"
          : "/api/wallet/schedule-transaction/polygon/",
        {
          amount: Number(amount),
          frequency: frequencyState, //daily, weekly, monthly
          employeeId,
          hour:
            timeParts[3] == "am"
              ? Number(timeParts[1])
              : Number(timeParts[1]) + 12, //daily, weekly and monthly
          minute: Number(timeParts[2]), //daily, weekly and monthly
          day: dayState.value ?? 0, //weekly start from zero Sunday
          date: Number(dayMonthState), // monthly  startfrom 1
        },
        config
      )
      .then((res) => {
        console.log(res.data);
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.error(err.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
        setExistData((prev) => !prev);
        setFinishSchedule(false);
        setSchedulePayments(false);
      });
  };
  return (
    <div
      className={`overflow-y-auto absolute bg-white w-[450px] h-full flex flex-col justify-start items-start top-0 ${
        finishSchedule ? `right-0 trans` : `right-[-200%] trans`
      }`}
    >
      <div className="flex justify-end items-center gap-[152px] py-[18px] px-[24px] w-full">
        <HiOutlineXMark
          onClick={() => setFinishSchedule(false)}
          className="cursor-pointer text-[1.75rem] text-[#1F2937]"
        />
      </div>
      <div className="w-full flex flex-col items-start gap-1 py-4 px-6">
        <h1 className="text-[#151515] text-[1.75rem] font-bold leading-9 tracking-[-.56px]">
          Finish Schedule
        </h1>
      </div>
      <form
        className="w-full flex flex-col items-start justify-between h-full"
        onSubmit={SechedulePayment}
      >
        <div className="flex flex-col items-start gap-6 py-4 px-6 w-full">
          <div
            ref={timeMenu}
            className="relative flex flex-col items-start gap-2 w-full cursor-pointer"
          >
            <label
              className="relative text-[#151515] text-[.875rem] font-semibold leading-4"
              htmlFor="Preferred Time"
            >
              Preferred Time
            </label>

            <div
              onClick={() => setShowPT((prev) => !prev)}
              className="outline-none border-none justify-between bg-[#F7F7F7] h-[56px] px-4 gap-2 w-full self-stretch flex items-center text-base placeholder:text-[#838385] font-normal leading-6 text-[#000000] rounded-lg"
            >
              {timeState == "Select Time" ? (
                <p className="text-[#838385]">Select Time</p>
              ) : (
                <p className="s">{timeState}</p>
              )}
              <IoIosArrowDown
                className={`text-[1.125rem] text-[#151515] font-bold cursor-pointer ${
                  showPT
                    ? `rotate-[180deg] duration-200`
                    : `rotate-0 duration-200`
                }`}
              />
            </div>
            {showPT && (
              <div onClick={() => setShowPT((prev) => !prev)}>
                <ShowPreferredTime setTimeState={setTimeState} />
              </div>
            )}
          </div>
          {frequencyState == "weekly" && (
            <div
              ref={dayMenu}
              className="relative flex flex-col items-start gap-2 w-full"
            >
              <label
                className="relative text-[#151515] text-[.875rem] font-semibold leading-4"
                htmlFor="Preferred Time"
              >
                Preferred Day
              </label>
              <div
                onClick={() => setShowPTTwo((prev) => !prev)}
                className="outline-none  justify-between cursor-pointer border-none bg-[#F7F7F7] h-[56px] px-4 gap-2 w-full self-stretch flex items-center text-base placeholder:text-[#838385] font-normal leading-6 text-[#000000] rounded-lg"
              >
                {dayState?.day ?? <p className="text-[#838385]">Select Day</p>}

                <IoIosArrowDown
                  className={`text-[1.125rem] text-[#151515] font-bold cursor-pointer ${
                    showPTTwo
                      ? `rotate-[180deg] duration-200`
                      : `rotate-0 duration-200`
                  }`}
                />
              </div>
              {showPTTwo && (
                <div onClick={() => setShowPTTwo((prev) => !prev)}>
                  <ShowPreferredDay setDayState={setDayState} />
                </div>
              )}
            </div>
          )}{" "}
          {frequencyState == "monthly" && (
            <div
              ref={dayMonthMenu}
              className="relative flex flex-col items-start gap-2 w-full"
            >
              <label
                className="relative text-[#151515] text-[.875rem] font-semibold leading-4"
                htmlFor="Preferred Time"
              >
                Preferred Day of the month
              </label>
              <div
                onClick={() => setShowPTThree((prev) => !prev)}
                className="outline-none  justify-between cursor-pointer border-none bg-[#F7F7F7] h-[56px] px-4 gap-2 w-full self-stretch flex items-center text-base placeholder:text-[#838385] font-normal leading-6 text-[#000000] rounded-lg"
              >
                {!dayMonthState && <p className="text-[#838385]">Select Day</p>}
                {dayMonthState}
                <IoIosArrowDown
                  className={`text-[1.125rem] text-[#151515] font-bold cursor-pointer ${
                    showPTThree
                      ? `rotate-[180deg] duration-200`
                      : `rotate-0 duration-200`
                  }`}
                />
              </div>
              {showPTThree && (
                <div onClick={() => setShowPTThree((prev) => !prev)}>
                  <ShowPreferredDayOfTheMonth setDayState={setDayMonthState} />
                </div>
              )}
            </div>
          )}
        </div>

        <div className="pt-4 pb-10 px-6 flex w-full flex-col items-start gap-[10px]">
          <FormButton
            btnName="Schedule"
            disabled={isLoading}
            loading={isLoading}
            width={`w-[402px]`}
          />
        </div>
      </form>
    </div>
  );
};

export default FinishScheduleDaily;
