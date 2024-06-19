import React from 'react'
import { HiMiniUser, HiOutlineBell } from 'react-icons/hi2'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import logo from '/Coinnomad Frame.svg'

const ResponsiveDashboardHeader = ({menuClicked, setMenuClicked}) => {
  return (
    <header className='p-[32px] flex lg:hidden justify-between items-center w-full'>
        <Link to={'/dashboard'}>
            <img className='w-[159.846px] h-[34.615px] object-cover' src={logo} alt="Coinomad Logo" />
        </Link>

      <div className='flex items-center gap-[24px]'>
        <div className='w-[40px] h-[40px] bg-[#F7F7F7] rounded-[50px] px-[8px] py-[0px] flex justify-center items-center relative'>
          <HiOutlineBell className='text-[1.45rem]' />
          <div className='absolute top-[-6.5px] right-[-8.5px] bg-[#E12929] rounded-full p-[2px] text-[12px] font-medium w-[20px] h-[20px] flex justify-center items-center leading-[18px] tracking-[-0.1px] text-white'>
            12
          </div>
        </div>
        <div className='bg-[#2F4EED] w-[40px] h-[40px] p-[10px] rounded-full flex justify-center items-center'>
        <HiMiniUser className='text-[1.45rem] text-white' />
        </div>

        <RxHamburgerMenu onClick={() => setMenuClicked(true)} className='text-[1.25rem] cursor-pointer flex lg:hidden' /> 
      </div>
    </header>
  )
}

export default ResponsiveDashboardHeader