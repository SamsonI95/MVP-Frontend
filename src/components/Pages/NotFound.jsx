import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NotFound = () => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(-1);
    }

    useEffect(() => {
        const handlePopState = () => {
          window.location.reload();
        };
    
        window.addEventListener('popstate', handlePopState);
        return () => {
          window.removeEventListener('popstate', handlePopState);
        };
    }, []);

  return (
    <section className='w-full h-screen flex flex-col justify-center items-center text-center gap-[16px]'>
        <div className='flex flex-col justify-center items-center'>
            <p className='font-black text-[#2F4EED] text-[1.65rem]'>404</p>
            <h1 className='font-bold uppercase text-[2rem] md:text-[3rem] w-full md:w-[80%]'>The page you&apos;re looking for does not exist. sorry.</h1>
        </div>
        <Link className='bg-[#2F4EED] shadow-customInset hover:bg-buttonPrimaryHover px-4 py-2 rounded-lg text-white h-[3.5em] gap-[40px] font-semibold flex justify-center items-center cursor-pointer' onClick={handleNavigate}>Go Back Home</Link>
    </section>
  )
}

export default NotFound