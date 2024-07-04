import FormButton from '@/components/Buttons/FormButton';
import InputField from '@/components/formFields/InputField';
import { toast } from '@/components/ui/use-toast';
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { HiOutlineXMark } from 'react-icons/hi2';
import { IoIosArrowForward } from 'react-icons/io';
import secureLocalStorage from 'react-secure-storage';
import calendar from '/src/assets/calendar.svg';
import DeleteButton from '@/components/Buttons/DeleteButton';

const UpdateDeleteEmployeeModal = ({ updateEmployees, setUpdateEmployees, employeeDetails, setExistData, setLoadEmployees }) => {
    const [updateloading, setUpdateLoading] = useState(false);
    const [deleteloading, setDeleteLoading] = useState(false);
    const accessToken = secureLocalStorage.getItem('accessToken');
    const [active, setActive] = useState('');

    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

    const formik = useFormik({
        initialValues: {
            firstName: employeeDetails.firstName || '',
            lastName: employeeDetails.lastName || '',
            email: employeeDetails.email || '',
            asset: employeeDetails.asset || '',
            walletAddress: employeeDetails.walletAddress || ''
        },
        onSubmit: (values) => {
                handleUpdate(formik.values);
                // handleDelete();
        }
    });

    const handleUpdate = (values) => {
        setUpdateLoading(true);
        setLoadEmployees(true);

        axios.put(`/api/employee/update/${employeeDetails.employeeId}`, {
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
                setUpdateEmployees(false);
                setExistData(true);
                setLoadEmployees(false);
            } else {
                toast({
                    title: "Something went wrong!",
                    variant: 'destructive'
                });
            }
        })
        .catch(err => {
            console.error('Update error:', err.response?.data || err.message);
            toast({
                title: err.response?.data?.message || 'An error occurred',
                variant: 'destructive'
            });
            setExistData(false);
        })
        .finally(() => {
            setUpdateLoading(false);
            setLoadEmployees(false);
        });
    };

    const handleDelete = () => {
        setDeleteLoading(true);

        axios.delete(`/api/employee/delete/${employeeDetails.employeeId}`, config)
        .then(res => {
            if (res.data.success === true) {
                toast({
                    title: res.data.message,
                });
                setUpdateEmployees(false);
            } else {
                toast({
                    title: "Failed to delete employee",
                    variant: 'destructive'
                });
            }
        })
        .catch(err => {
            console.error('Delete error:', err.response?.data || err.message);
            toast({
                title: err.response?.data?.message || 'An error occurred',
                variant: 'destructive'
            });
        })
        .finally(() => {
            setDeleteLoading(false);
        });
    };

    return (
        <>
            {updateEmployees && (
                <div className="w-full h-full fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-40 modalBg">
                    <div className="z-40 overflow-y-auto absolute bg-white w-[450px] max-h-full flex flex-col justify-start items-start duration-200 top-0 modalContainer right-0">
                        <div className='flex justify-end items-center gap-[152px] py-[18px] px-[24px] w-full'>
                            <HiOutlineXMark onClick={() => setUpdateEmployees(false)} className='cursor-pointer text-[1.75rem] text-[#1F2937]' />
                        </div>
                        <div className='w-full flex flex-col items-start gap-1 py-4 px-6'>
                            <h1 className='text-[#151515] text-[1.75rem] font-bold leading-9 tracking-[-.56px]'>Employee Details</h1>
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
                                        setUpdateEmployees(false);
                                    }} className='text-[#1F2937] text-[1.8rem] cursor-pointer font-bold' />
                                </div>
                            </div>
                            <div className='pt-4 pb-10 px-6 flex w-full flex-col justify-center items-center gap-[16px]'>
                                <FormButton
                                    btnName="Update"
                                    disabled={updateloading}
                                    loading={updateloading}
                                    onClick={() => setActive('update')}
                                    width={`w-[402px]`}
                                />
                                <DeleteButton
                                    btnName="Remove Employee"
                                    disabled={deleteloading}
                                    loading={deleteloading}
                                    onClick={() => setActive('delete')}
                                    width={`w-[402px]`}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default UpdateDeleteEmployeeModal;
