import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import ShowAssets from './ShowAssets'
import { useFormik } from 'formik'
import axios from 'axios'
import { sendBitcoin, signIn } from '@/Data/formikUtils'
import { toast } from '@/components/ui/use-toast'
import InputField from '@/components/formFields/InputField'
import FormButton from '@/components/Buttons/FormButton'

const Send = ({sendAssets, setSendAssets}) => {
    
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            employeeId: "",
            amount: "",
        },
        validationSchema: sendBitcoin,
        onSubmit: async (values) => {
            setLoading(true);

            try {
                const response = await axios.post('/api/wallet/send-to-employee/bitcoin/', {
                    employeeId: values.employeeId,
                    amount: values.amount,
                });

                if(response.data.success === true){
                    toast({
                        title: response.data.message
                    })
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error signing in:', error);
                setLoading(false);
                toast({
                    title: error?.response?.message || 'Something went wrong',
                    variant: 'destructive'
                })
            }
        },
    });

  return (
    <form className='w-full h-full flex flex-col justify-between items-center' action="">
        <div className='px-6 py-8 gap-6 inline-flex flex-col items-start justify-between w-full'>
            <div className='relative flex flex-col items-start gap-2 w-full'>
                <label className='relative text-[#151515] text-[.875rem] font-semibold leading-4' htmlFor="Send from">Send from</label>
                <div className='outline-none border-none bg-[#F7F7F7] h-[56px] px-4 gap-2 w-full self-stretch flex items-center text-base placeholder:text-[#838385] font-normal leading-6 text-[#000000] rounded-lg'>
                    <input disabled className='outline-none border-none bg-transparent w-full' type="text" placeholder='Select Asset' />
                    <IoIosArrowDown onClick={() => setSendAssets(prev => !prev)} className={`text-[1.125rem] text-[#151515] font-bold cursor-pointer ${sendAssets ? `rotate-[180deg] duration-200` : `rotate-0 duration-200`}`} />
                </div>
                {
                    sendAssets && (<ShowAssets/>)
                }
            </div>
            <InputField
                placeholder={`Enter address`}
                label={`Send to`}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                name="employeeId"
                value={formik.values.employeeId}
                type="text"
                error={formik.touched.employeeId && formik.errors.employeeId}
            />
            <InputField
                placeholder={`Input`}
                label={`Amount`}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                name="Amount"
                value={formik.values.amount}
                type="text"
                error={formik.touched.amount && formik.errors.amount}
            />
        </div>
        <div className='flex justify-center items-center flex-col gap-[10px] pt-4 pb-8 px-6 w-full'>
            <FormButton
                btnName="Send"
                disabled={loading}
                loading={loading}
                width={`w-[402px]`}
            />
        </div>
    </form>
  )
}

export default Send