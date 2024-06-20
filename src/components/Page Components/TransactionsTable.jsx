import React, { useState } from 'react'
import bitcoin from '/svg/Bitcoin Badge.svg'
// import polygon from '/svg/Coinnomad logo.svg'
import ethereum from '/svg/Eth (1).svg'
import { BsDownload } from 'react-icons/bs'
import { RxArrowTopRight } from 'react-icons/rx'
import { IoSwapVerticalOutline } from 'react-icons/io5'

const TransactionsTable = () => {
  const [existData, setExistData] = useState(false);
  return (
    <section className='w-full gap-[10px]'>
      <div className='py-[16px] pr-[32px] flex justify-between items-center gap-6'>
        <div className='flex px-[32px] gap-2 items-center'>
          <button className='py-[4px] px-[16px] gap-[8px] flex justify-center items-center bg-[#2F4EED] text-white rounded-[50px] text-[1rem] font-semibold leading-6'>All</button>
          <button className='py-[4px] px-[16px] gap-[8px] flex justify-center items-center text-[#9C9C9C] text-[1rem] font-semibold leading-6'>Bitcoin</button>
          <button className='py-[4px] px-[16px] gap-[8px] flex justify-center items-center text-[#9C9C9C] text-[1rem] font-semibold leading-6'>Ethereum</button>
          <button className='py-[4px] px-[16px] gap-[8px] flex justify-center items-center text-[#9C9C9C] text-[1rem] font-semibold leading-6'>Polygon</button>
        </div>
        <div className='bg-[#E9E9E9] w-10 h-10 rounded-full px-[8px] flex justify-center items-center cursor-pointer'>
          <BsDownload className='text-[1rem] text-[#1F2937] font-black' />
        </div>
      </div>
      <>
        {
            existData ? (
              <div>
                  <p className='pl-[32px] pr-[10px] py-[16px] gap-[10px] text-[.875rem] text-[#9C9C9C] font-semibold leading-4'>Today</p>
                  <table className='w-full'>
                    <tbody className='w-full'>
                        <tr className='flex items-center self-stretch gap-[12px] w-full'>
                            <td className='flex items-center self-stretch gap-[12px] w-full py-[12px] px-[32px] '>
                                <div className='relative flex justify-center items-center p-2 rounded-full bg-[#EAEDFD]'>
                                  <RxArrowTopRight className='text-[1.25rem]' />
                                  <img className='absolute w-[16px] top-[-5px] left-[-6px] h-[16px] object-contain' src={ethereum} alt="Ethereum" />
                                </div>
                                <div className='flex flex-col justify-center items-start'>
                                    <h1 className='text-[1.125rem] font-bold text-[#151515] leading-7'>Received</h1>
                                    <p className='text-[#9C9C9C] text-[.875rem] font-semibold leading-4'>10:27 pm</p>
                                </div>
                            </td>
                            <td className='flex flex-col justify-center px-[12px] py-[10px] w-full items-start self-stretch'>
                              <h1 className='text-[1.125rem] font-bold text-[#151515] leading-7'>From</h1>
                              <p className='text-[#9C9C9C] text-[.875rem] font-semibold leading-4'>0xdac0...80037e</p>
                            </td>
                            <td className='flex flex-col justify-center px-[32px] py-[12px] w-full items-start self-stretch'>
                              <h1 className='text-[1.125rem] font-bold text-[#23AE5E] leading-7'>+$100.00</h1>
                              <p className='text-[#9C9C9C] text-[.875rem] font-semibold leading-4'>0.05 ETH</p>
                            </td>
                        </tr>

                        <tr className='flex items-center self-stretch gap-[12px] w-full'>
                            <td className='flex items-center self-stretch gap-[12px] w-full py-[12px] px-[32px] '>
                                <div className='relative flex justify-center items-center p-2 rounded-full bg-[#EAEDFD]'>
                                  <RxArrowTopRight className='text-[1.25rem]' />
                                  <img className='absolute w-[16px] top-[-5px] left-[-6px] h-[16px] object-contain' src={bitcoin} alt="Bitcoin" />
                                </div>
                                <div className='flex flex-col justify-center items-start'>
                                    <h1 className='text-[1.125rem] font-bold text-[#151515] leading-7'>Sent</h1>
                                    <p className='text-[#9C9C9C] text-[.875rem] font-semibold leading-4'>10:27 pm</p>
                                </div>
                            </td>
                            <td className='flex flex-col justify-center px-[12px] py-[10px] w-full items-start self-stretch'>
                              <h1 className='text-[1.125rem] font-bold text-[#151515] leading-7'>To</h1>
                              <p className='bg-[#EAEDFD] py-[4px] px-[8px] gap-[10px] flex justify-center items-start rounded-[50px] text-[#9C9C9C] text-[.875rem] font-semibold leading-4'>Daniel Adegoke</p>
                            </td>
                            <td className='flex flex-col justify-center px-[12px] py-[10px] w-full items-start self-stretch'>
                              <h1 className='text-[1.125rem] font-bold text-[#ED2F2F] leading-7'>-$100.00</h1>
                              <p className='text-[#9C9C9C] text-[.875rem] font-semibold leading-4'>0.05 BTC</p>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <p className='pl-[32px] pr-[10px] py-[16px] gap-[10px] text-[.875rem] text-[#9C9C9C] font-semibold leading-4'>Yesterday</p>
                <table className='w-full'>
                    <tbody className='w-full'>
                        <tr className='flex items-center self-stretch gap-[12px] w-full'>
                            <td className='flex items-center self-stretch gap-[12px] w-full py-[12px] px-[32px] '>
                                <div className='relative flex justify-center items-center p-2 rounded-full bg-[#EAEDFD]'>
                                  <RxArrowTopRight className='text-[1.25rem]' />
                                  <img className='absolute w-[16px] top-[-5px] left-[-6px] h-[16px] object-contain' src={bitcoin} alt="Bitcoin" />
                                </div>
                                <div className='flex flex-col justify-center items-start'>
                                    <h1 className='text-[1.125rem] font-bold text-[#151515] leading-7'>Sent</h1>
                                    <p className='text-[#9C9C9C] text-[.875rem] font-semibold leading-4'>10:27 pm</p>
                                </div>
                            </td>
                            <td className='flex flex-col justify-center px-[12px] py-[10px] w-full items-start self-stretch'>
                              <h1 className='text-[1.125rem] font-bold text-[#151515] leading-7'>To</h1>
                              <p className='bg-[#EAEDFD] py-[4px] px-[8px] gap-[10px] flex justify-center items-start rounded-[50px] text-[#9C9C9C] text-[.875rem] font-semibold leading-4'>Daniel Adegoke</p>
                            </td>
                            <td className='flex flex-col justify-center px-[12px] py-[10px] w-full items-start self-stretch'>
                              <h1 className='text-[1.125rem] font-bold text-[#ED2F2F] leading-7'>-$100.00</h1>
                              <p className='text-[#9C9C9C] text-[.875rem] font-semibold leading-4'>0.05 BTC</p>
                            </td>
                        </tr>

                        <tr className='flex items-center self-stretch gap-[12px] w-full'>
                            <td className='flex items-center self-stretch gap-[12px] w-full py-[12px] px-[32px] '>
                                <div className='relative flex justify-center items-center p-2 rounded-full bg-[#EAEDFD]'>
                                  <RxArrowTopRight className='text-[1.25rem]' />
                                  <img className='absolute w-[16px] top-[-5px] left-[-6px] h-[16px] object-contain' src={bitcoin} alt="Bitcoin" />
                                </div>
                                <div className='flex flex-col justify-center items-start'>
                                    <h1 className='text-[1.125rem] font-bold text-[#151515] leading-7'>Sent</h1>
                                    <p className='text-[#9C9C9C] text-[.875rem] font-semibold leading-4'>10:27 pm</p>
                                </div>
                            </td>
                            <td className='flex flex-col justify-center px-[12px] py-[10px] w-full items-start self-stretch'>
                              <h1 className='text-[1.125rem] font-bold text-[#151515] leading-7'>To</h1>
                              <p className='bg-[#EAEDFD] py-[4px] px-[8px] gap-[10px] flex justify-center items-start rounded-[50px] text-[#9C9C9C] text-[.875rem] font-semibold leading-4'>Daniel Adegoke</p>
                            </td>
                            <td className='flex flex-col justify-center px-[12px] py-[10px] w-full items-start self-stretch'>
                              <h1 className='text-[1.125rem] font-bold text-[#ED2F2F] leading-7'>-$100.00</h1>
                              <p className='text-[#9C9C9C] text-[.875rem] font-semibold leading-4'>0.05 BTC</p>
                            </td>
                        </tr>
                    </tbody>
                </table>


                <p className='pl-[32px] pr-[10px] py-[16px] gap-[10px] text-[.875rem] text-[#9C9C9C] font-semibold leading-4'>May 3, 2024</p>
                <table className='w-full'>
                    <tbody className='w-full'>
                        <tr className='flex items-center self-stretch gap-[12px] w-full'>
                            <td className='flex items-center self-stretch gap-[12px] w-full py-[12px] px-[32px] '>
                                <div className='relative flex justify-center items-center p-2 rounded-full bg-[#EAEDFD]'>
                                  <RxArrowTopRight className='text-[1.25rem]' />
                                  <img className='absolute w-[16px] top-[-5px] left-[-6px] h-[16px] object-contain' src={bitcoin} alt="Bitcoin" />
                                </div>
                                <div className='flex flex-col justify-center items-start'>
                                    <h1 className='text-[1.125rem] font-bold text-[#151515] leading-7'>Sent</h1>
                                    <p className='text-[#9C9C9C] text-[.875rem] font-semibold leading-4'>10:27 pm</p>
                                </div>
                            </td>
                            <td className='flex flex-col justify-center px-[12px] py-[10px] w-full items-start self-stretch'>
                              <h1 className='text-[1.125rem] font-bold text-[#151515] leading-7'>To</h1>
                              <p className='bg-[#EAEDFD] py-[4px] px-[8px] gap-[10px] flex justify-center items-start rounded-[50px] text-[#9C9C9C] text-[.875rem] font-semibold leading-4'>Daniel Adegoke</p>
                            </td>
                            <td className='flex flex-col justify-center px-[12px] py-[10px] w-full items-start self-stretch'>
                              <h1 className='text-[1.125rem] font-bold text-[#ED2F2F] leading-7'>-$100.00</h1>
                              <p className='text-[#9C9C9C] text-[.875rem] font-semibold leading-4'>0.05 BTC</p>
                            </td>
                        </tr>

                        <tr className='flex items-center self-stretch gap-[12px] w-full'>
                            <td className='flex items-center self-stretch gap-[12px] w-full py-[12px] px-[32px] '>
                                <div className='relative flex justify-center items-center p-2 rounded-full bg-[#EAEDFD]'>
                                  <RxArrowTopRight className='text-[1.25rem]' />
                                  <img className='absolute w-[16px] top-[-5px] left-[-6px] h-[16px] object-contain' src={ethereum} alt="Ethereum" />
                                </div>
                                <div className='flex flex-col justify-center items-start'>
                                    <h1 className='text-[1.125rem] font-bold text-[#151515] leading-7'>Received</h1>
                                    <p className='text-[#9C9C9C] text-[.875rem] font-semibold leading-4'>10:27 pm</p>
                                </div>
                            </td>
                            <td className='flex flex-col justify-center px-[12px] py-[10px] w-full items-start self-stretch'>
                              <h1 className='text-[1.125rem] font-bold text-[#151515] leading-7'>From</h1>
                              <p className='text-[#9C9C9C] text-[.875rem] font-semibold leading-4'>0xdac0...80037e</p>
                            </td>
                            <td className='flex flex-col justify-center px-[32px] py-[12px] w-full items-start self-stretch'>
                              <h1 className='text-[1.125rem] font-bold text-[#23AE5E] leading-7'>+$100.00</h1>
                              <p className='text-[#9C9C9C] text-[.875rem] font-semibold leading-4'>0.05 ETH</p>
                            </td>
                        </tr>


                        <tr className='flex items-center self-stretch gap-[12px] w-full'>
                            <td className='flex items-center self-stretch gap-[12px] w-full py-[12px] px-[32px] '>
                                <div className='relative flex justify-center items-center p-2 rounded-full bg-[#EAEDFD]'>
                                  <RxArrowTopRight className='text-[1.25rem]' />
                                  <img className='absolute w-[16px] top-[-5px] left-[-6px] h-[16px] object-contain' src={ethereum} alt="Ethereum" />
                                </div>
                                <div className='flex flex-col justify-center items-start'>
                                    <h1 className='text-[1.125rem] font-bold text-[#151515] leading-7'>Received</h1>
                                    <p className='text-[#9C9C9C] text-[.875rem] font-semibold leading-4'>10:27 pm</p>
                                </div>
                            </td>
                            <td className='flex flex-col justify-center px-[12px] py-[10px] w-full items-start self-stretch'>
                              <h1 className='text-[1.125rem] font-bold text-[#151515] leading-7'>From</h1>
                              <p className='text-[#9C9C9C] text-[.875rem] font-semibold leading-4'>0xdac0...80037e</p>
                            </td>
                            <td className='flex flex-col justify-center px-[32px] py-[12px] w-full items-start self-stretch'>
                              <h1 className='text-[1.125rem] font-bold text-[#23AE5E] leading-7'>+$100.00</h1>
                              <p className='text-[#9C9C9C] text-[.875rem] font-semibold leading-4'>0.05 ETH</p>
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
    </section>
  )
}

export default TransactionsTable