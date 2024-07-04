import React from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import bitcoin from '/svg/Bitcoin Badge.svg';
import polygon from '/svg/Coinnomad logo.svg';
import ethereum from '/svg/Eth (1).svg';

const CustomSelectField = () => {
    return (
        <Select className='outline-none border-none'>
            <SelectTrigger className='outline-none border-none bg-[#F7F7F7] h-[56px] px-4 w-full self-stretch flex items-center text-base text-[#838385] font-normal leading-6 rounded-lg'>
                <SelectValue placeholder="Select asset" 
            />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {/* <SelectLabel>Fruits</SelectLabel> */}
                    <SelectItem value="POLY">
                        <div className='flex justify-between items-center w-full gap-[10em]'>
                            <div className='flex items-center gap-3'>
                                <img className='h-8 w-8' src={polygon} alt="Polygon" />
                                <div>
                                    <h1 className='text-[#151515] text-lg font-bold uppercase'>Matic</h1>
                                    <p className='text-[#9C9C9C] text-[.875rem] leading-4 font-semibold'>Polygon</p>
                                </div>
                            </div>
                            <div>
                                <h1 className='text-[#151515] text-lg font-bold'>$200.00</h1>
                                <p className='text-[#9C9C9C] text-[.875rem] leading-4 font-semibold uppercase'>0.1 btc</p>
                            </div>
                        </div>
                    </SelectItem>
                    <SelectItem value="BTC">
                        <div className='flex justify-between items-center w-full gap-[11em]'>
                            <div className='flex items-center gap-3'>
                                <img className='h-8 w-8' src={bitcoin} alt="Bitcoin" />
                                <div>
                                    <h1 className='text-[#151515] text-lg font-bold uppercase'>btc</h1>
                                    <p className='text-[#9C9C9C] text-[.875rem] leading-4 font-semibold'>Bitcoin</p>
                                </div>
                            </div>
                            <div>
                                <h1 className='text-[#151515] text-lg font-bold'>$200.00</h1>
                                <p className='text-[#9C9C9C] text-[.875rem] leading-4 font-semibold uppercase'>0.1 btc</p>
                            </div>
                        </div>
                    </SelectItem>
                    <SelectItem value="ETH">
                        <div className='flex justify-between items-center w-full gap-[10em]'>
                            <div className='flex items-center gap-3'>
                                <img className='h-8 w-8' src={ethereum} alt="Ethereum" />
                                <div>
                                    <h1 className='text-[#151515] text-lg font-bold uppercase'>eth</h1>
                                    <p className='text-[#9C9C9C] text-[.875rem] leading-4 font-semibold'>Ethereum</p>
                                </div>
                            </div>
                            <div className='text-right'>
                                <h1 className='text-[#151515] text-lg font-bold'>$200.00</h1>
                                <p className='text-[#9C9C9C] text-[.875rem] leading-4 font-semibold uppercase'>0.1 btc</p>
                            </div>
                        </div>
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default CustomSelectField;
