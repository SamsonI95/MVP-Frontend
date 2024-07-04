import useIdleTimeout from '@/Data/useIdleTimeout';
import Account from '@/components/Page Components/Account';
import ChangePassword from '@/components/Page Components/ChangePassword';
import Notification from '@/components/Page Components/Notification';
import SettingsAssets from '@/components/Page Components/SettingsAssets';
import React, { useState } from 'react'

const Settings = () => {

    useIdleTimeout();

    const [currentTab, setCurrentTab] = useState('Account');
  return (
    <section>
        <div className='py-[16px] px-0 gap-[10px] flex flex-col justify-center items-start self-stretch'>
            <div className='gap-[24px] flex items-start px-[10px] md:px-[32px] py-0 self-stretch border-b border-[#E9E9E9]'>
                <h1 onClick={() => setCurrentTab('Account')} className={`text-[1rem] font-semibold leading-6 gap-2 pb-2 duration-200 relative cursor-pointer ${currentTab === 'Account' ? `text-[#2F4EED]` : `text-[#9C9C9C]`}`}>
                Account
                {
                    currentTab === 'Account' && (<div className='bg-[#2F4EED] rounded-full w-[63px] h-[2px] absolute bottom-[-1px]'></div>)
                }
                </h1>
                <h1 onClick={() => setCurrentTab('Change-Password')} className={`text-[1rem] font-semibold leading-6 gap-2 pb-2 duration-200 relative cursor-pointer ${currentTab === 'Change-Password' ? `text-[#2F4EED]` : `text-[#9C9C9C]`}`}>
                Change Password
                {
                    currentTab === 'Change-Password' && (<div className='bg-[#2F4EED] rounded-full w-[136px] h-[2px] absolute bottom-[-1px]'></div>)
                }
                </h1>
                <h1 onClick={() => setCurrentTab('Notification')} className={`text-[1rem] font-semibold leading-6 gap-2 pb-2 duration-200 relative cursor-pointer ${currentTab === 'Notification' ? `text-[#2F4EED]` : `text-[#9C9C9C]`}`}>
                Notification
                {
                    currentTab === 'Notification' && (<div className='bg-[#2F4EED] rounded-full w-[92px] h-[2px] absolute bottom-[-1px]'></div>)
                }
                </h1>
                <h1 onClick={() => setCurrentTab('Assets')} className={`text-[1rem] font-semibold leading-6 gap-2 pb-2 duration-200 relative cursor-pointer ${currentTab === 'Assets' ? `text-[#2F4EED]` : `text-[#9C9C9C]`}`}>
                Assets
                {
                    currentTab === 'Assets' && (<div className='bg-[#2F4EED] rounded-full w-[50px] h-[2px] absolute bottom-[-1px]'></div>)
                }
                </h1>
            </div>
        </div>
        <div className='flex flex-col md:flex-row h-[856px] w-full py-4 px-8 gap-8 items-start'>
            {
                currentTab === 'Account' ? (<Account/>) : currentTab === 'Change-Password' ? (<ChangePassword/>) : currentTab === 'Notification' ? (<Notification/>) : currentTab === 'Assets' ? (<SettingsAssets/>) : ''
            }
        </div>
    </section>
  )
}

export default Settings