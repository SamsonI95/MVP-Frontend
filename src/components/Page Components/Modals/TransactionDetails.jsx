import React from 'react'
import { HiMiniUser, HiOutlineXMark } from 'react-icons/hi2'
import { IoCopyOutline } from 'react-icons/io5'
import eth from '/public/svg/Eth (1).svg'
import { FaRegCircleCheck } from 'react-icons/fa6'

const TransactionDetails = ({setShowModal}) => {
  return (
    <div className='w-full h-screen modalBg fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-[999]'>
        <div className='md:w-[603px] md:h-[430px] flex flex-col justify-center items-start rounded-lg bg-white'>
            <div className='flex justify-between items-center w-full px-[24px]'>
                <h1 className='text-[#151515] text-[1.5rem] font-bold leading-[32px] tracking-[-0.48px]'>Receive</h1>
                <HiOutlineXMark
                    onClick={() => setShowModal(false)}
                    className="h-[70px] md:h-[90px] ml-[24px] text-[1.35rem] md:text-[1.75rem] cursor-pointer"
                />
            </div>
            <div className='flex flex-col md:flex-row gap-6 items-start px-[24px] py-[16px] w-full'>
                <div className='flex flex-col items-start gap-2 w-full'>
                    <p className='text-[#9C9C9C] text-[.875rem] font-semibold leading-4'>From</p>
                    <div className='flex items-center gap-3'>
                        <div className='bg-[#2F4EED] w-6 h-6 text-white p-1 flex justify-center items-center rounded-full'>
                            <HiMiniUser className='text-[1.125rem]' />
                        </div>
                        <p className='text-[#151515] text-[.875rem] font-semibold leading-4'>0x8bfb...70b1ae</p>
                        <IoCopyOutline className='text-[#1F2937] text-[1.125ren]' />
                    </div>
                </div> 

                <div className='flex flex-col items-star gap-2 w-full'>
                    <p className='text-[#9C9C9C] text-[.875rem] font-semibold leading-4'>To(you)</p>
                    <div className='flex items-center gap-3'>
                        <div className='bg-[#2F4EED] w-6 h-6 text-white p-1 flex justify-center items-center rounded-full'>
                            <HiMiniUser className='text-[1.125rem]' />
                        </div>
                        <p className='text-[#151515] text-[.875rem] font-semibold leading-4'>0x8bfb...70b1ae</p>
                        <IoCopyOutline className='text-[#1F2937] text-[1.125ren]' />
                    </div>
                </div>
            </div>
            <div className='w-full py-[16px] px-[24px] flex flex-col items-start gap-6'>
                <h1 className='text-[#151515] text-[1rem] font-semibold leading-6'>Transaction Details</h1>
                <div className='flex flex-col items-start gap-4 self-stretch'>
                    <div className='flex flex-col md:flex-row justify-start md:justify-between items-start gap-y-2 md:gap-y-0 md:items-center self-stretch'>
                        <p className='text-[#9C9C9C] font-semibold text-[.875rem] leading-4'>Amount</p>
                        <div className='flex items-center gap-2'>
                            <img className='flex justify-center items-center object-cover w-4 h-4' src={eth} alt="Ethereum" />
                            <p className='text-[.875rem] text-[#151515] leading-4 font-semibold'>0.003ETH</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-start md:justify-between items-start gap-y-2 md:gap-y-0 md:items-center self-stretch'>
                        <p className='text-[#9C9C9C] font-semibold text-[.875rem] leading-4'>Blockchain</p>
                        <div className='flex items-center gap-2'>
                            <img className='flex justify-center items-center object-cover w-4 h-4' src={eth} alt="Ethereum" />
                            <p className='text-[.875rem] text-[#151515] leading-4 font-semibold'>Ethereum</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-start md:justify-between items-start gap-y-2 md:gap-y-0 md:items-center self-stretch'>
                        <p className='text-[#9C9C9C] font-semibold text-[.875rem] leading-4'>Transaction ID</p>
                        <div className='flex items-center gap-2'>
                            <IoCopyOutline className='text-[#1F2937] text-[1.125ren]' />
                            <p className='text-[#151515] text-[.875rem] font-semibold leading-4'>0x8bfb...70b1ae</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-start md:justify-between items-start gap-y-2 md:gap-y-0 md:items-center self-stretch'>
                        <p className='text-[#9C9C9C] font-semibold text-[.875rem] leading-4'>Status</p>
                        <div className='flex items-center gap-2'>
                            <FaRegCircleCheck className='text-[#23AE5E] text-[1.125ren]' />
                            <p className='text-[.875rem] leading-4 font-semibold text-[#23AE5E]'>Success</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-start md:justify-between items-start gap-y-2 md:gap-y-0 md:items-center self-stretch'>
                        <p className='text-[#9C9C9C] font-semibold text-[.875rem] leading-4'>Timestamp</p>
                        <div>
                            <p className='text-[.875rem] leading-4 font-semibold text-[#151515]'>4 months ago (Feb 24, 2024 at 01:45 am)Success</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-start md:justify-between items-start gap-y-2 md:gap-y-0 md:items-center self-stretch'>
                        <p className='text-[#9C9C9C] font-semibold text-[.875rem] leading-4'>Hash</p>
                        <div className='flex items-center gap-2'>
                            <IoCopyOutline className='text-[#1F2937] text-[1.125ren]' />
                            <p className='text-[#151515] text-[.875rem] font-semibold leading-4'>0x8bfb...70b1ae</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TransactionDetails