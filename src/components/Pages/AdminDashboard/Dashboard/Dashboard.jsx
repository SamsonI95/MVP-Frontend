import React, { useState } from 'react'
import { HiOutlineEyeSlash } from 'react-icons/hi2'
import { RxArrowBottomLeft, RxArrowTopRight } from 'react-icons/rx'
import AssetsTable from '../../../Page Components/AssetsTable'
import TransactionsTable from '../../../Page Components/TransactionsTable'
import secureLocalStorage from 'react-secure-storage'

const Dashboard = () => {


  const storedUser = secureLocalStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;
  const [isClicked, setIsClicked] = useState('Assets')
  return (
    <section className='w-full lg:w-auto'>

      <div className='gap-[24px] py-[16px] px-[10px] md:px-[32px] flex flex-col justify-center items-start self-stretch'>
        <h1 className='text-[#151515] flex lg:hidden text-[1.75rem] font-bold leading-9 tracking-[-0.56px] py-[16px]'>Hey there, {user}!</h1>

        <div className='flex flex-col justify-center items-start gap-[16px]'>
          <h2 className='text-[#9C9C9C] text-[1.125rem] font-semibold leading-7'>Total Balance</h2>
          <div className='flex justify-start items-center gap-[16px]'>
            <h1 className='text-[2.25rem] md:text-[4rem] text-[#151515] font-semibold leading-[48px] tracking-[-0.88px]'>$1,200.00</h1>
            <HiOutlineEyeSlash className='text-[1.125rem] text-[#151515]'/>
          </div>
        </div>

        <div className='flex justify-center items-start gap-[16px]'>
            <button className='px-2 py-0 w-[140px] h-[40px] bg-[#2F4EED] flex justify-center items-center text-white rounded-[50px]'>
              <p className='px-2'>Send</p> <RxArrowTopRight />
            </button>
            <button className='px-2 py-0 w-[140px] h-[40px] bg-[#2F4EED] flex justify-center items-center text-white rounded-[50px]'>
              <p className='px-2'>Receive</p> <RxArrowBottomLeft />
            </button>
        </div>
      </div>
      <div className='py-[16px] px-0 gap-[10px] flex flex-col justify-center items-start self-stretch'>
        <div className='gap-[24px] flex items-start px-[10px] md:px-[32px] py-0 self-stretch border-b border-[#E9E9E9]'>
          <h1 onClick={() => setIsClicked('Assets')} className={`text-[1rem] font-semibold leading-6 gap-2 pb-2 duration-200 relative cursor-pointer ${isClicked === 'Assets' ? `text-[#2F4EED]` : `text-[#9C9C9C]`}`}>
            Assets
            {
              isClicked === 'Assets' && (<div className='bg-[#2F4EED] rounded-full w-[50px] h-[2px] absolute bottom-[-1px]'></div>)
            }
          </h1>
          <h1 onClick={() => setIsClicked('Transactions')} className={`text-[1rem] font-semibold leading-6 gap-2 pb-2 duration-200 relative cursor-pointer ${isClicked === 'Transactions' ? `text-[#2F4EED]` : `text-[#9C9C9C]`}`}>
            Transactions
            {
              isClicked === 'Transactions' && (<div className='bg-[#2F4EED] rounded-full w-[100px] h-[2px] absolute bottom-[-1px]'></div>)
            }
          </h1>
        </div>
      </div>
      <div className='pt-[16px] flex items-start self-stretch w-full'>
        {
          isClicked === 'Assets' ? (<AssetsTable/>) : (<TransactionsTable/>)
        }
      </div>
    </section>
  )
}

export default Dashboard