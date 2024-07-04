import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import calendar from '/src/assets/calendar.svg';
import { HiOutlineXMark } from 'react-icons/hi2';
import InputField from '@/components/formFields/InputField';
import { useFormik } from 'formik';
import { addEmployeesSchema } from '@/Data/formikUtils';
import axios from 'axios';
import { toast } from '@/components/ui/use-toast';
import ShowAssets from './ShowAssets';
import FormButton from '@/components/Buttons/FormButton';
import secureLocalStorage from 'react-secure-storage';

const AddEmployee = ({ setSchEmployees, addEmployees, setAddEmployees, existData, setExistData, loadEmployees, setLoadEmployees }) => {
    const [loading, setLoading] = useState(false);
    const [showAssets, setShowAssets] = useState(false);
    const [selectedAsset, setSelectedAsset] = useState({ name: '', value: '' });

    const accessToken = secureLocalStorage.getItem('accessToken');

    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            asset: '',
            walletAddress: ''
        },
        validationSchema: addEmployeesSchema,
        onSubmit: (values) => {
            setLoading(true);
        
            axios.post(`/api/employee/register`, {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                asset: values.asset,
                walletAddress: values.walletAddress
            }, config)
            .then(res => {
                if (res.data.success === true) {
                    toast({
                        title: res.data.message,
                    });
                    setAddEmployees(false);
                    setExistData(true);
                    setLoadEmployees(true);
                } else {
                    toast({
                        title: "Something went wrong!",
                        variant: 'destructive'
                    });
                }
            })
            .catch(err => {
                setExistData(false);
                setLoadEmployees(false);
                console.error('Error registering employee:', err);
                toast({
                    title: err.response?.data?.message || 'An error occurred',
                    variant: 'destructive'
                });
            })
            .finally(() => {
                setLoading(false);
            });
        }
    });        

    const handleAssetClick = (asset) => {
        setSelectedAsset(asset);
        formik.setFieldValue('asset', asset.name);
        setShowAssets(false);
    };

    return (
        <>
            {addEmployees && (
                <div className="w-full h-full fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-40 modalBg">
                    <div className="z-40 overflow-y-auto absolute bg-white w-[450px] max-h-full flex flex-col justify-start items-start duration-200 top-0 modalContainer right-0">
                        <div className='flex justify-end items-center gap-[152px] py-[18px] px-[24px] w-full'>
                            <HiOutlineXMark onClick={() => setAddEmployees(false)} className='cursor-pointer text-[1.75rem] text-[#1F2937]' />
                        </div>
                        <div className='w-full flex flex-col items-start gap-1 py-4 px-6'>
                            <h1 className='text-[#151515] text-[1.75rem] font-bold leading-9 tracking-[-.56px]'>Add employee</h1>
                            <p className='text-[1rem] text-[#9C9C9C] font-semibold leading-6'>Enter employee details</p>
                        </div>
                        <form className='w-full flex flex-col items-start gap-8 p-6' onSubmit={formik.handleSubmit}>
                            <InputField
                                label="First Name"
                                placeholder="Enter First Name"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                name="firstName"
                                value={formik.values.firstName}
                                type="text"
                                error={formik.touched.firstName && formik.errors.firstName}
                            />
                            <InputField
                                label="Last Name"
                                placeholder="Enter Last Name"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                name="lastName"
                                value={formik.values.lastName}
                                type="text"
                                error={formik.touched.lastName && formik.errors.lastName}
                            />
                            <InputField
                                label="Email Address"
                                placeholder="Enter Email Address"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                name="email"
                                value={formik.values.email}
                                type="text"
                                error={formik.touched.email && formik.errors.email}
                            />
                            <InputField
                                label="Wallet Address"
                                placeholder="Enter Wallet Address"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                name="walletAddress"
                                value={formik.values.walletAddress}
                                type="text"
                                error={formik.touched.walletAddress && formik.errors.walletAddress}
                            />
                            <div className='relative flex flex-col items-start gap-2 w-full'>
                                <label className='relative text-[#151515] text-[.875rem] font-semibold leading-4' htmlFor="Send from">Assets</label>
                                <div className='outline-none border-none bg-[#F7F7F7] h-[56px] px-4 gap-2 w-full self-stretch flex items-center text-base placeholder:text-[#838385] font-normal leading-6 text-[#000000] rounded-lg'>
                                    <input name='asset' disabled className='outline-none border-none bg-transparent w-full' type="text" placeholder='Select Asset' value={formik.values.asset}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                    />
                                    <IoIosArrowDown onClick={() => setShowAssets(prev => !prev)} className={`text-[1.125rem] text-[#151515] font-bold cursor-pointer ${showAssets ? `rotate-[180deg] duration-200` : `rotate-0 duration-200`}`} />
                                </div>
                                {showAssets && (<ShowAssets onAssetClick={handleAssetClick} />)}
                            </div>
                            <div className='bg-[#EAEDFD] rounded-lg flex items-center self-stretch gap-6 py-6 px-4'>
                                <div className='flex justify-center items-center gap-4'>
                                    <div className='flex items-start gap-4'>
                                        <img className='object-contain w-6 h-6' src={calendar} alt="Calendar" />
                                        <div className='flex flex-col items-start gap-1'>
                                            <h1 className='text-[#000000] text-[1rem] leading-[18px] font-semibold'>Schedule</h1>
                                            <p className='text-[#9C9C9C] text-[.875rem] font-semibold leading-5'>Automate payment and control how you want to pay this employee</p>
                                        </div>
                                    </div>
                                    <IoIosArrowForward onClick={() => {
                                        setAddEmployees(false);
                                        setSchEmployees(true);
                                    }} className='text-[#1F2937] text-[1.8rem] cursor-pointer font-bold' />
                                </div>
                            </div>
                            <div className='pt-4 pb-10 px-6 flex w-full flex-col justify-center items-center gap-[10px]'>
                                <FormButton
                                    btnName="Add"
                                    disabled={loading}
                                    loading={loading}
                                    width={`w-[402px]`}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default AddEmployee;