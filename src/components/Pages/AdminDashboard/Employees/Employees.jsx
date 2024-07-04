import React, { useState } from 'react'
import { FiArrowLeft, FiSearch } from 'react-icons/fi'
import EmployeeTable from '../../../Page Components/EmployeeTable'
import AddEmployees from '../../../Page Components/Modals/AddEmployee';
import SchedulePayments from '../../../Page Components/Modals/SchedulePayments';
import UpdateDeleteEmployeeModal from '@/components/Page Components/Modals/UpdateDeleteEmployeeModal';
import useIdleTimeout from '@/Data/useIdleTimeout';

const Employees = () => {

  useIdleTimeout();


  const [existData, setExistData] = useState(true);
  const [loadEmployees, setLoadEmployees] = useState(false);
  const [searchClick, setSearchClick] = useState(false);
  const [addEmployees, setAddEmployees] = useState(false);
  const [schEmployees, setSchEmployees] = useState(false);
  const [assets, setAssets] = useState(false);
  const [freq, setFreq] = useState(false);
  const [updateEmployees, setUpdateEmployees] = useState(false);
  const [eachEmployee, setEachEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
    asset: '',
    walletAddress: ''
});

  return (

    <section className='w-full lg:w-auto'>

      <div className='gap-[24px] py-[16px] px-[10px] md:px-[32px] flex flex-col justify-center items-start self-stretch'>
        <h1 className='text-[#151515] flex lg:hidden text-[1.75rem] font-bold leading-9 tracking-[-0.56px] py-[16px]'>Employees</h1>
        <div className='flex flex-row justify-end md:justify-between items-center w-full gap-x-4 md:gap-x-0'>
          {
            searchClick === true ? (
              <div className='hidden gap-2 px-[16px] py-[12px] w-full justify-end items-center'>
                <div onClick={() => setSearchClick(true)} className='flex md:hidden cursor-pointer justify-between items-center h-[40px] px-2 self-stretch gap-2 rounded-[50px] bg-[#F7F7F7] text-[#000000] font-normal leading-6'>
                  <FiSearch className='text-[#1F2937] text-[1.25rem]' />
                </div>
                <button onClick={() => setAddEmployees(true)} className='flex justify-center items-center bg-[#2F4EED] rounded-[50px] px-2 w-[129px] h-[40px] text-white leading-4 text-[.875rem] font-semibold'>Add Employee</button>
              </div>
              <button
                onClick={() => setAddEmployees(true)}
                className="flex justify-center items-center bg-[#2F4EED] rounded-[50px] px-2 w-[129px] h-[40px] text-white leading-4 text-[.875rem] font-semibold"
              >
                Add Employee
              </button>
            </div>
          ) : (
            <div className="flex gap-2 px-[16px] py-[12px] w-full justify-end items-center md:hidden">
              <div
                onClick={() => setSearchClick(true)}
                className="flex md:hidden cursor-pointer justify-between items-center md:w-[350px] h-[40px] px-2 md:px-[16px] self-stretch gap-2 rounded-[50px] bg-[#F7F7F7] text-[#000000] placeholder:text-[#838385] text-[1rem] font-normal leading-6"
              >
                <FiSearch className="text-[#1F2937] text-[1.25rem]" />
              </div>
              <button className="flex md:hidden justify-center items-center bg-[#2F4EED] rounded-[50px] px-2 w-[129px] h-[40px] text-white leading-4 text-[.875rem] font-semibold">
                Add Employee
              </button>
            </div>
          )}

          <div className="hidden md:flex justify-between items-center w-[350px] h-[40px] px-[16px] self-stretch gap-2 rounded-[50px] bg-[#F7F7F7] text-[#000000] placeholder:text-[#838385] text-[1rem] font-normal leading-6">
            <FiSearch className="text-[#1F2937] text-[1.25rem]" />
            <input
              className="hidden md:flex w-[350px] flex-col items-start bg-transparent outline-none border-none"
              type="text"
              placeholder="Place"
            />
          </div>

          {searchClick === false ? (
            <div className="hidden w-full">
              <div className="flex justify-end items-center gap-4 px-[16px] py-[12px] w-full">
                <FiArrowLeft
                  onClick={() => setSearchClick(false)}
                  className="cursor-pointer text-[#1F2937] text-[1.25rem]"
                />
                <div className="flex md:hidden justify-between items-center w-[350px] h-[40px] px-2 md:px-[16px] self-stretch gap-2 rounded-[50px] bg-[#F7F7F7] text-[#000000] placeholder:text-[#838385] text-[1rem] font-normal leading-6">
                  <input
                    className="hidden md:flex w-[350px] flex-col items-start bg-transparent outline-none border-none"
                    type="text"
                    placeholder="Place"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex md:hidden w-full">
              <div className="flex justify-end items-center gap-4 px-[16px] py-[12px] w-full">
                <FiArrowLeft
                  onClick={() => setSearchClick(false)}
                  className="cursor-pointer text-[#1F2937] text-[1.25rem]"
                />
                <div className="flex md:hidden justify-between items-center w-[295px] h-[40px] px-[16px] self-stretch gap-2 rounded-[50px] bg-[#F7F7F7] text-[#000000] placeholder:text-[#838385] text-[1rem] font-normal leading-6">
                  <input
                    className="flex w-[295px] flex-col items-start bg-transparent outline-none border-none"
                    type="text"
                    placeholder="Place"
                  />
                </div>
              </div>
            </div>
          )}

          <button
            onClick={() => setAddEmployees(true)}
            className="hidden md:flex justify-center items-center bg-[#2F4EED] rounded-[50px] px-2 w-[129px] h-[40px] text-white leading-4 text-[.875rem] font-semibold"
          >
            Add Employee
          </button>
        </div>
      </div>

      {/* EMployee Table */}

      <EmployeeTable existData={existData} setExistData={setExistData} loadEmployees={loadEmployees} setLoadEmployees={setLoadEmployees} eachEmployee={eachEmployee} setEachEmployee={setEachEmployee} updateEmployees={updateEmployees} setUpdateEmployees={setUpdateEmployees} />

      {/* Add Employee Modal */}
      {
        addEmployees ? (<AddEmployees existData={existData} setExistData={setExistData} loadEmployees={loadEmployees} setLoadEmployees={setLoadEmployees} assets={assets} setAssets={setAssets} schEmployees={schEmployees} setSchEmployees={setSchEmployees} addEmployees={addEmployees} setAddEmployees={setAddEmployees}/>) : ``
      }

      {/* Schedule Payments */}
      {
        schEmployees ? (<SchedulePayments freq={freq} setFreq={setFreq} assets={assets} setAssets={setAssets} schEmployees={schEmployees} setSchEmployees={setSchEmployees} />) : ``
      }

      {/* Update Delete Employees */}
      {
        updateEmployees ? (<UpdateDeleteEmployeeModal existData={existData} setExistData={setExistData} loadEmployees={loadEmployees} setLoadEmployees={setLoadEmployees} eachEmployee={eachEmployee} setEachEmployee={setEachEmployee} updateEmployees={updateEmployees} setUpdateEmployees={setUpdateEmployees} schEmployees={schEmployees} setSchEmployees={setSchEmployees} />) : ``
      }
    </section>
  );
};

export default Employees;
