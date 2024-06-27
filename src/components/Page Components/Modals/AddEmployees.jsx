import React, { useState } from 'react'
import { FaXmark } from 'react-icons/fa6'
import ShowAssets from './ShowAssets'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import calendar from '/src/assets/calendar.svg'

const AddEmployees = ({addEmployees, setAddEmployees}) => {

    const [assets, setAssets] = useState(false);
  return (
    <div className={addEmployees ? `w-full h-full modalBg fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-[999] duration-300` : `w-full h-full modalBg fixed top-0 left-0 right-[-200%] bottom-0 flex justify-center items-center z-[999] duration-300`}>
        <div className={`absolute bg-white w-[450px] h-[1024px] flex flex-col justify-center items-start duration-300 ${addEmployees ? `right-0 top-0` : `right-[-200%] top-0`}`}>
            <div className='flex justify-end items-center gap-[152px] py-[18px] px-[24px] w-full'>
            <FaXmark onClick={() => setAddEmployees(false)} className='cursor-pointer text-[1.125rem] text-[#151515] font-bold' />
            </div>
            <div className='w-full flex flex-col items-start gap-1 py-4 px-6'>
                <h1 className='text-[#151515] text-[1.75rem] font-bold leading-9 tracking-[-.56px]'>Add employee</h1>
                <p className='text-[1rem] text-[#9C9C9C] font-semibold leading-6'>Enter employee details</p>
            </div>
            <form className='w-full h-[748px] flex flex-col items-start gap-8 p-6' action="">
                {/* <div className='w-full h-[748px] flex flex-col items-start gap-8 p-6'> */}
                    <div className='flex flex-col items-start gap-2 w-full'>
                        <label className='text-[#151515] text-[.875rem] font-semibold leading-4' htmlFor="First Name">First Name</label>
                        <input className='outline-none border-none bg-[#F7F7F7] h-[56px] px-4 w-full self-stretch flex items-center text-base placeholder:text-[#838385] font-normal leading-6 text-[#000000] rounded-lg' type="text" placeholder='Enter first name' />
                    </div>
                    <div className='flex flex-col items-start gap-2 w-full'>
                        <label className='text-[#151515] text-[.875rem] font-semibold leading-4' htmlFor="Last Name">Last Name</label>
                        <input className='outline-none border-none bg-[#F7F7F7] h-[56px] px-4 w-full self-stretch flex items-center text-base placeholder:text-[#838385] font-normal leading-6 text-[#000000] rounded-lg' type="text" placeholder='Enter last name' />
                    </div>
                    <div className='flex flex-col items-start gap-2 w-full'>
                        <label className='text-[#151515] text-[.875rem] font-semibold leading-4' htmlFor="Email">Email</label>
                        <input className='outline-none border-none bg-[#F7F7F7] h-[56px] px-4 w-full self-stretch flex items-center text-base placeholder:text-[#838385] font-normal leading-6 text-[#000000] rounded-lg' type="text" placeholder='Email Address' />
                    </div>
                    <div className='flex flex-col items-start gap-2 w-full'>
                        <label className='text-[#151515] text-[.875rem] font-semibold leading-4' htmlFor="Wallet address">Wallet address</label>
                        <input className='outline-none border-none bg-[#F7F7F7] h-[56px] px-4 w-full self-stretch flex items-center text-base placeholder:text-[#838385] font-normal leading-6 text-[#000000] rounded-lg' type="text" placeholder='Enter Wallet address' />
                    </div>
                    <div className='flex flex-col items-start gap-2 w-full'>
                        <label className='text-[#151515] text-[.875rem] font-semibold leading-4' htmlFor="Send to">Send to</label>
                        <input className='outline-none border-none bg-[#F7F7F7] h-[56px] px-4 w-full self-stretch flex items-center text-base placeholder:text-[#838385] font-normal leading-6 text-[#000000] rounded-lg' type="text" placeholder='Enter address' />
                    </div>
                    <div className='relative flex flex-col items-start gap-2 w-full'>
                        <label className='relative text-[#151515] text-[.875rem] font-semibold leading-4' htmlFor="Send from">Send from</label>
                        <div className='outline-none border-none bg-[#F7F7F7] h-[56px] px-4 gap-2 w-full self-stretch flex items-center text-base placeholder:text-[#838385] font-normal leading-6 text-[#000000] rounded-lg'>
                            <input disabled className='outline-none border-none bg-transparent w-full' type="text" placeholder='Select Asset' />
                            <IoIosArrowDown onClick={() => setAssets(prev => !prev)} className={`text-[1.125rem] text-[#151515] font-bold cursor-pointer ${assets ? `rotate-[180deg] duration-200` : `rotate-0 duration-200`}`} />
                        </div>
                        {
                            assets && (<ShowAssets/>)
                        }
                    </div>
                    <div className='bg-[#EAEDFD] rounded-lg flex items-center self-stretch gap-6 py-6 px-4'>
                        <div className='flex justify-center items-center gap-4'>
                            <div className='flex items-start gap-4'>
                                <img className='object-contain w-6 h-6' src={calendar} alt="Calendar" />
                                <div className='flex flex-col items-start gap-1'>
                                    <h1 className='text-[#000000] text-[1rem] leading-[18px] font-semibold'>Schedule</h1>
                                    <p className='text-[#9C9C9C] text-[.875rem] font-semibold leading-5'>Automate payment and Control how you want to Pay this employee</p>
                                </div>
                            </div>
                            <IoIosArrowForward className='text-[#1F2937] text-[1.8rem] cursor-pointer font-bold' />
                        </div>
                    </div>
                {/* </div> */}
                <div className='pt-4 pb-10 px-6 flex w-full flex-col items-start gap-[10px]'>
                    <button className='h-[56px] self-stretch flex justify-center items-center px-2 bg-[#2F4EED] rounded-lg text-base text-white font-semibold leading-[18px]'>Add</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddEmployees