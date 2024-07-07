import React from 'react'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'

const TransactionSuccessful = () => {
  return (
    <div className='absolute top-0 left-0 w-full h-screen bg-black/20 flex justify-center items-center'>
        <div className='bg-white flex flex-col justify-center items-center gap-2'>
            <IoIosCheckmarkCircleOutline className='text-gree-400 text-[2.25rem]' />
            <p className='text-base text-[#151515] font-medium leading-6'>Transaction Successful!</p>
        </div>
    </div>
  )
}

export default TransactionSuccessful