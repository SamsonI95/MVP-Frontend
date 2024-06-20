import React, { useState } from 'react'
import bitcoin from '/svg/Bitcoin Badge.svg'
import polygon from '/svg/Coinnomad logo.svg'
import ethereum from '/svg/Eth (1).svg'
import { IoSwapVerticalOutline } from 'react-icons/io5'

const AssetsTable = () => {

    const [existData, setExistData] = useState(false)
  return (
    <>
        {
            existData ? (
                <div>
                    <table className='w-full'>
                        <thead className='w-full'>
                            <tr className='border-b border-[#E9E9E9] flex justify-between items-start self-stretch gap-[10px] w-full'>
                                <th className='pt-0 pl-[32px] pb-[16px] pr-[10px] flex items-start w-full self-stretch gap-[10px] text-[#9C9C9C] text-[.875rem] font-semibold leading-[1rem]' scope='col'>Asset</th>
                                <th className='pt-0 pl-[12px] pb-[16px] flex items-start w-full self-stretch gap-[10px] text-[#9C9C9C] text-[.875rem] font-semibold leading-[1rem]' scope='col'>Price</th>
                                <th className='pt-0 pl-[12px] pb-[16px] flex items-start w-full self-stretch gap-[10px] text-[#9C9C9C] text-[.875rem] font-semibold leading-[1rem]' scope='col'>Balance</th>
                            </tr>
                        </thead>
                        <tbody className='w-full'>
                            <tr className='border-b border-[#E9E9E9] flex items-center self-stretch gap-[12px] w-full'>
                                <td className='flex items-center self-stretch gap-[12px] w-full py-[12px] px-[32px] '>
                                    <img className='w-[32px] h-[32px] object-contain' src={bitcoin} alt="Bitcoin" />
                                    <div className='flex flex-col justify-center items-start'>
                                        <h1 className='text-[1.125rem] font-bold text-[#151515] leading-7 uppercase'>btc</h1>
                                        <p className='text-[#9C9C9C] text-[.875rem] font-semibold leading-4'>Bitcoin</p>
                                    </div>
                                </td>
                                <td className='text-[1.125rem] text-[#151515] font-bold leading-7 px-[12px] py-[10px] flex items-start self-stretch gap-[10px] w-full'>$3,677.06</td>
                                <td className='flex flex-col justify-center px-[12px] py-[10px] w-full items-start self-stretch gap-[10px]'>
                                    <h1 className='text-[1.125rem] font-bold text-[#151515] leading-7 uppercase'>$200.00</h1>
                                    <p className='text-[#9C9C9C] text-[.875rem] font-semibold leading-4'>0.1 BTC</p>
                                </td>
                            </tr>
                            <tr className='border-b border-[#E9E9E9] flex items-center self-stretch gap-[12px] w-full'>
                                <td className='flex items-center self-stretch gap-[12px] w-full py-[12px] px-[32px] '>
                                    <img className='w-[32px] h-[32px] object-contain' src={polygon} alt="Polygon" />
                                    <div className='flex flex-col justify-center items-start'>
                                        <h1 className='text-[1.125rem] font-bold text-[#151515] leading-7 uppercase'>Matic</h1>
                                        <p className='text-[#9C9C9C] text-[.875rem] font-semibold leading-4'>Polygon</p>
                                    </div>
                                </td>
                                <td className='text-[1.125rem] text-[#151515] font-bold leading-7 px-[12px] py-[10px] flex items-start self-stretch gap-[10px] w-full'>$3,677.06</td>
                                <td className='flex flex-col justify-center px-[12px] py-[10px] w-full items-start self-stretch gap-[10px]'>
                                    <h1 className='text-[1.125rem] font-bold text-[#151515] leading-7 uppercase'>$200.00</h1>
                                    <p className='text-[#9C9C9C] text-[.875rem] font-semibold leading-4'>0.1 ETH</p>
                                </td>
                            </tr>
                            <tr className='border-b border-[#E9E9E9] flex items-center self-stretch gap-[12px] w-full'>
                                <td className='flex items-center self-stretch gap-[12px] w-full py-[12px] px-[32px] '>
                                    <img className='w-[32px] h-[32px] object-contain' src={ethereum} alt="Ethereum" />
                                    <div className='flex flex-col justify-center items-start'>
                                        <h1 className='text-[1.125rem] font-bold text-[#151515] leading-7 uppercase'>eth</h1>
                                        <p className='text-[#9C9C9C] text-[.875rem] font-semibold leading-4'>Ethereum</p>
                                    </div>
                                </td>
                                <td className='text-[1.125rem] text-[#151515] font-bold leading-7 px-[12px] py-[10px] flex items-start self-stretch gap-[10px] w-full'>$3,677.06</td>
                                <td className='flex flex-col justify-center px-[12px] py-[10px] w-full items-start self-stretch gap-[10px]'>
                                    <h1 className='text-[1.125rem] font-bold text-[#151515] leading-7 uppercase'>$200.00</h1>
                                    <p className='text-[#9C9C9C] text-[.875rem] font-semibold leading-4'>0.1 ETH</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className='flex flex-col justify-start items-center px-[10px] py-[80px] md:h-[612px] w-full gap-[10px]'>
                    <div className=' rounded-full p-[10px] bg-[#F7F7F7] gap-[10px] flex justify-center items-center'>
                        <IoSwapVerticalOutline className='text-[1.25rem] rotate-[45deg]' />
                    </div>
                    <p className='text-[#000000] text-[1.125rem] font-semibold leading-7'>No Activity</p>
                </div>
            )
        }
    </>
  )
}

export default AssetsTable