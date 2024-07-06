import React, { useState } from 'react'
import { HiOutlineXMark } from 'react-icons/hi2';
import { IoIosArrowDown } from 'react-icons/io';
import ShowPreferredTime from '../ShowPreferredTime';

const FinishSchedule = ({finishSchedule, setFinishSchedule}) => {
    const [showPT, setShowPT] = useState(false);
    const [showPTTwo, setShowPTTwo] = useState(false);
  return (
    <div className='w-full h-full modalBg fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-[999]'>
      <div className={`overflow-y-auto absolute bg-white w-[450px] h-full flex flex-col justify-start items-start top-0 ${finishSchedule ? `right-0 trans` : `right-[-200%] trans`}`}>
        <div className='flex justify-end items-center gap-[152px] py-[18px] px-[24px] w-full'>
          <HiOutlineXMark onClick={() => setFinishSchedule(false)} className='cursor-pointer text-[1.75rem] text-[#1F2937]' />
        </div>
        <div className='w-full flex flex-col items-start gap-1 py-4 px-6'>
          <h1 className='text-[#151515] text-[1.75rem] font-bold leading-9 tracking-[-.56px]'>Finish Schedule</h1>
        </div>
        <form className='w-full flex flex-col items-start justify-between h-full' action="">
          <div className='flex flex-col items-start gap-6 py-4 px-6 w-full'>
            <div className='relative flex flex-col items-start gap-2 w-full'>
                <label className='relative text-[#151515] text-[.875rem] font-semibold leading-4' htmlFor="Preferred Time">Preferred Time</label>
                <div className='outline-none border-none bg-[#F7F7F7] h-[56px] px-4 gap-2 w-full self-stretch flex items-center text-base placeholder:text-[#838385] font-normal leading-6 text-[#000000] rounded-lg'>
                <input disabled className='outline-none border-none bg-transparent w-full' type="text" placeholder='Select Asset' />
                <IoIosArrowDown onClick={() => setShowPT(prev => !prev)} className={`text-[1.125rem] text-[#151515] font-bold cursor-pointer ${showPT ? `rotate-[180deg] duration-200` : `rotate-0 duration-200`}`} />
                </div>
                {showPT && (<ShowPreferredTime />)}
            </div>
            <div className='relative flex flex-col items-start gap-2 w-full'>
                <label className='relative text-[#151515] text-[.875rem] font-semibold leading-4' htmlFor="Preferred Time">Preferred Time</label>
                <div className='outline-none border-none bg-[#F7F7F7] h-[56px] px-4 gap-2 w-full self-stretch flex items-center text-base placeholder:text-[#838385] font-normal leading-6 text-[#000000] rounded-lg'>
                <input disabled className='outline-none border-none bg-transparent w-full' type="text" placeholder='Select Asset' />
                <IoIosArrowDown onClick={() => setShowPTTwo(prev => !prev)} className={`text-[1.125rem] text-[#151515] font-bold cursor-pointer ${showPTTwo ? `rotate-[180deg] duration-200` : `rotate-0 duration-200`}`} />
                </div>
                {showPTTwo && (<ShowPreferredTime />)}
            </div>
          </div>
          
          <div className='pt-4 pb-10 px-6 flex w-full flex-col items-start gap-[10px]'>
            <button className='h-[56px] self-stretch flex justify-center items-center px-2 bg-[#2F4EED] rounded-lg text-base text-white font-semibold leading-[18px]'>Schedule</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FinishSchedule