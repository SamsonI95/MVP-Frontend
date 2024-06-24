import React from 'react'
import { IoCopyOutline } from 'react-icons/io5'
import qrcode from '/public/Coinnomad QR Code.png'

const Receive = () => {
  return (
    <form className='p-6 gap-4 flex justify-center items-center flex-col w-full' action="">
        <div className='flex flex-col items-start gap-2 w-full'>
            <label className='text-[#151515] text-[.875rem] font-semibold leading-4' htmlFor="Receive to">Receive to</label>
            <div className='outline-none border-none bg-[#F7F7F7] h-[56px] px-4 w-full self-stretch flex items-center text-base placeholder:text-[#838385] font-normal leading-6 text-[#000000] rounded-lg'>
             <input className='outline-none border-none bg-transparent' type="text" placeholder='Select Asset' />
            </div>
        </div>
        <img className='w-[350px] h-[350px] object-contain' src={qrcode} alt="QR Code" />
        <button className='h-[56px] self-stretch flex justify-center items-center px-2 bg-[#F7F7F7] rounded-lg text-base text-[#151515] font-semibold leading-[18px] gap-[10px]'>
            Copy Address <IoCopyOutline className='text-[#1F2937] font-bold text-[1.125ren]' />
        </button>
    </form>
  )
}

export default Receive