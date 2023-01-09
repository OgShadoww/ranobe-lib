import React, { useEffect, useState } from 'react';

const Setting = () => {
    const [value, setValue] = useState(false)

    useEffect(() => {
        setValue(JSON.parse(localStorage.getItem('censored') || 'false') || false)
    }, [])

    const handleClick = () => {
        setValue(!value)
        localStorage.setItem('censored', JSON.stringify(!value))
    }

    return (
        <div className='flex flex-col lg:flex-row md:flex-row sm:flex-col items-start justify-start gap-[30px] my-[20px] w-full relative px-[15px] lg:px-[250px]'>
            <div className='flex flex-col'>
                <div className='px-[10px] py-[12px] text-[14px] transition-colors cursor-pointer font-medium foreground rounded-[3px]'>
                    Налаштування сайта
                </div>
            </div>
            <div className='main-wrapper flex-col w-full text-left rounded-[3px]'>
                <h3 className='border-b-[#38383a] border-b-[1px] mb-[10px] pb-[10px] w-full'>Головна сторінка</h3>
                <label className='flex items-center gap-[10px] cursor-pointer'>
                    <input className='hidden check-input' value='Check' checked={value} onChange={() => handleClick()} type="checkbox" />
                    <span className='w-[16px] h-[16px] relative cursor-pointer transition-all custom-checkbox'></span>
                    <span className='text-[14px]'>Приховати 18+ </span>
                </label>
            </div>
        </div>
    );
};

export default Setting;