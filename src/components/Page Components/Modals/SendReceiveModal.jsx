import React from 'react'
import Send from './Send'
import Receive from './Receive'

const SendReceiveModal = ({sendReceiveModal, setSendReceiveModal}) => {
  return (
    <div className='w-full h-screen modalBg fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-[999]'>
        <div className='bg-white w-[482px] h-[649px] rounded-lg gap-[3px] flex flex-col justify-center items-start'>
          <div className='w-full pt-8 pb-4 flex justify-between items-start gap-[10px] flex-col'>
            <div className='flex items-start gap-6 px-8 self-stretch border-b border-[#E9E9E9]'>
              <p onClick={() => setSendReceiveModal('Send')} className={`${sendReceiveModal === 'Send' ? ` border-b-2 text-[#2F4EED] border-[#2F4EED]` : ` border-b-2 text-[#9C9C9C] border-transparent`} cursor-pointer text-base font-semibold leading-6 pb-2 gap-2`}>
                Send
              </p>
              <p onClick={() => setSendReceiveModal('Receive')} className={`${sendReceiveModal === 'Receive' ? ` border-b-2 text-[#2F4EED] border-[#2F4EED]` : ` border-b-2 text-[#9C9C9C] border-transparent`} cursor-pointer text-base font-semibold leading-6 pb-2 gap-2`}>
                Receive
              </p>
            </div>
            {/* <FaXmark className='text-base text-[#000000] font-bold' /> */}
          </div>
          {
            sendReceiveModal === 'Send' ? (<Send/>) : (<Receive/>)
          }
        </div>
    </div>
  )
}

export default SendReceiveModal