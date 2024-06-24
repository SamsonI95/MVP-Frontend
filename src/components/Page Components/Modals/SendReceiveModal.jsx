import React from 'react'
import qrcode from '/public/Coinnomad QR Code.png'

const SendReceiveModal = ({sendReceiveModal, setSendReceiveModal}) => {
  return (
    <div className='w-full h-screen modalBg fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-[999]'>
        <div className='bg-white w-[482px] h-[649px] rounded-lg gap-[3px] flex flex-col justify-center items-start'>
          <div className='border-b border-[#E9E9E9] w-full pt-8 pb-4 flex justify-between items-start gap-[10px] flex-col'>
            <div className='flex items-start gap-6 px-8 self-stretch'>
              <p className='text-[#9C9C9C] text-base font-semibold leading-6'>Send</p>
              <p className='text-[#9C9C9C] text-base font-semibold leading-6'>Receive</p>
            </div>
            {/* <FaXmark className='text-base text-[#000000] font-bold' /> */}
          </div>
          {
            sendReceiveModal === 'Send' ? (<p>Send</p>) : (<p>Receive</p>)
          }
        </div>
    </div>
  )
}

export default SendReceiveModal