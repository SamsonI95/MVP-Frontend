import React from 'react'

const ShowFrequency = () => {
  return (
    <div className='absolute bottom-[-130px] bg-white w-full shadow-md rounded-lg h-[120px] z-30'>
        <div className='flex justify-between items-center py-3 px-4 duration-200 cursor-pointer hover:bg-[#F7F7F7] rounded-t-lg'>
            <div className='flex items-center gap-3'>
                <p className='text-[#151515] text-[.875rem] leading-4 font-semibold'>Polygon</p>
            </div>
        </div>
        <div className='flex justify-between items-center py-3 px-4 duration-200 cursor-pointer hover:bg-[#F7F7F7]'>
            <div className='flex items-center gap-3'>
                <p className='text-[#151515] text-[.875rem] leading-4 font-semibold'>Bitcoin</p>
            </div>
        </div>
        <div className='flex justify-between items-center py-3 px-4 duration-200 cursor-pointer hover:bg-[#F7F7F7] rounded-b-lg'>
            <div className='flex items-center gap-3'>
                <p className='text-[#151515] text-[.875rem] leading-4 font-semibold'>Ethereum</p>
            </div>
        </div>
    </div>
  )
}

export default ShowFrequency