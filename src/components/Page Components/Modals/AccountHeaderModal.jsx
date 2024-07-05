import React from 'react'
import { BsChat } from 'react-icons/bs'
import { HiMiniUser } from 'react-icons/hi2'
import { IoCopyOutline, IoLogOutOutline, IoMoonOutline, IoSettingsOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import secureLocalStorage from 'react-secure-storage'

const AccountHeaderModal = ({isClicked}) => {

    const navigate = useNavigate();

    const handleLogout = () => {
        secureLocalStorage.removeItem("user");
        navigate("/sign-in", { replace: true });
      };
  return (
    <div className={`bg-white duration-200 w-[263px] absolute right-8 top-[15%] rounded-lg shadow-lg flex flex-col items-start justify-start gap-2 ${isClicked ? `opacity-100 scale-[1]` : `opacity-0 scale-0`}`}>
        <div className='flex items-center w-full px-4 py-3 gap-3 border-b border-[#E9E9E9] duration-200 hover:bg-[#F7F7F7] cursor-pointer'>
            <div className='bg-[#2F4EED] w-[40px] h-[40px] p-[10px] rounded-full flex justify-center items-center'>
                <HiMiniUser className='text-[1.45rem] text-white' />
            </div>
            <p className='text-[#151515] text-[.875rem] font-semibold leading-4'>
                0x8bfb...70b1ae
            </p>
            <IoCopyOutline
              className="text-[#1F2937] font-bold text-[1.35rem]"
            />
        </div>
        <div className='flex items-center w-full px-4 py-3 gap-3 duration-200 hover:bg-[#F7F7F7] cursor-pointer'>
            <IoSettingsOutline className='text-[1.35rem] text-[#2F4EED]' />
            <p className='text-[#151515] text-[.875rem] font-semibold leading-4'>Settings</p>
        </div>
        <div className='flex justify-between items-center self-stretch w-full px-4 py-3 gap-3 duration-200 hover:bg-[#F7F7F7] cursor-pointer'>
            <div className='flex items-center gap-2'>
                <IoMoonOutline className='text-[1.35rem] text-[#2F4EED]' />
                <p className='text-[#151515] text-[.875rem] font-semibold leading-4'>Dark Mode</p>
            </div>
        </div>
        <div className='flex items-center w-full px-4 py-3 gap-3 duration-200 hover:bg-[#F7F7F7] cursor-pointer'>
            <BsChat className="text-[1.35rem] text-[#2F4EED]" />
            <p className='text-[#151515] text-[.875rem] font-semibold leading-4'>Support</p>
        </div>
        <div onClick={handleLogout} className='flex items-center w-full px-4 py-3 gap-3 duration-200 hover:bg-[#F7F7F7] cursor-pointer'>
            <IoLogOutOutline className="text-[1.35rem] text-[#ED2F2F]" />
            <p className='text-[#151515] text-[.875rem] font-semibold leading-4'>Logout</p>
        </div>
    </div>
  )
}

export default AccountHeaderModal