import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { IoIosSearch } from 'react-icons/io'
import EmployeeTable from '../../../Page Components/EmployeeTable'

const Employees = () => {
  return (
    <section className='w-full lg:w-auto'>

      <div className='gap-[24px] py-[16px] px-[10px] md:px-[32px] flex flex-col justify-center items-start self-stretch'>
        <h1 className='text-[#151515] flex lg:hidden text-[1.75rem] font-bold leading-9 tracking-[-0.56px] py-[16px]'>Employees</h1>
        <div className='flex justify-between items-center w-full'>
          <div className='flex justify-between items-center w-[350px] h-[40px] px-[16px] self-stretch gap-2 rounded-[50px] bg-[#F7F7F7] text-[#000000] placeholder:text-[#838385] text-[1rem] font-normal leading-6'>
            <FiSearch className='text-[#1F2937] text-[1.25rem]' />
            <input className='w-[350px] flex flex-col items-start bg-transparent outline-none border-none' type="text" placeholder='Place' />
          </div>
          <button className='flex justify-center items-center bg-[#2F4EED] rounded-[50px] px-2 w-[129px] h-[40px] text-white leading-4 text-[.875rem] font-semibold'>Add Employee</button>
        </div>
      </div>

      {/* EMployee Table */}
      <EmployeeTable/>
    </section>
  )
}

export default Employees