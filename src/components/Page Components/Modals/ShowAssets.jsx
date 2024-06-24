import React from 'react'
import bitcoin from '/svg/Bitcoin Badge.svg'
import polygon from '/svg/Coinnomad logo.svg'
import ethereum from '/svg/Eth (1).svg'

const ShowAssets = () => {
  return (
    <div className='absolute bottom-[-220px] bg-white w-full shadow-md rounded-lg h-[204px]'>
        <div className='flex justify-between items-center py-3 px-4 duration-200 cursor-pointer hover:bg-[#F7F7F7] rounded-t-lg'>
            <div className='flex items-center gap-3'>
                <img className='h-8 w-8' src={polygon} alt="Polygon" />
                <div>
                    <h1 className='text-[#151515] text-lg font-bold uppercase'>Matic</h1>
                    <p className='text-[#9C9C9C] text-[.875rem] leading-4 font-semibold'>Polygon</p>
                </div>
            </div>
            <div>
                <h1 className='text-[#151515] text-lg font-bold'>$200.00</h1>
                <p className='text-[#9C9C9C] text-[.875rem] leading-4 font-semibold uppercase'>0.1 btc</p>
            </div>
        </div>
        <div className='flex justify-between items-center py-3 px-4 duration-200 cursor-pointer hover:bg-[#F7F7F7]'>
            <div className='flex items-center gap-3'>
                <img className='h-8 w-8' src={bitcoin} alt="Bitcoin" />
                <div>
                    <h1 className='text-[#151515] text-lg font-bold uppercase'>btc</h1>
                    <p className='text-[#9C9C9C] text-[.875rem] leading-4 font-semibold'>Bitcoin</p>
                </div>
            </div>
            <div>
                <h1 className='text-[#151515] text-lg font-bold'>$200.00</h1>
                <p className='text-[#9C9C9C] text-[.875rem] leading-4 font-semibold uppercase'>0.1 btc</p>
            </div>
        </div>
        <div className='flex justify-between items-center py-3 px-4 duration-200 cursor-pointer hover:bg-[#F7F7F7] rounded-b-lg'>
            <div className='flex items-center gap-3'>
                <img className='h-8 w-8' src={ethereum} alt="Ethereum" />
                <div>
                    <h1 className='text-[#151515] text-lg font-bold uppercase'>eth</h1>
                    <p className='text-[#9C9C9C] text-[.875rem] leading-4 font-semibold'>Ethereum</p>
                </div>
            </div>
            <div>
                <h1 className='text-[#151515] text-lg font-bold'>$200.00</h1>
                <p className='text-[#9C9C9C] text-[.875rem] leading-4 font-semibold uppercase'>0.1 btc</p>
            </div>
        </div>
    </div>
  )
}

export default ShowAssets