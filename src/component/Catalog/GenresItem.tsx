import React, { FC, useState } from 'react';

interface props {
    text: string,
    id: number,
    handleClick: (id: number, cheked: boolean) => void
}

const GenresItem:FC<props> = ({text, handleClick, id}) => {
    const [cheked, setCheked] = useState<boolean>(false)

    const handleChecking = () => {
        setCheked(!cheked)
        handleClick(id, cheked)
    }

    return (
        <label className='flex w-full px-[10px] py-[4px] items-center gap-[10px] cursor-pointer'>
            <input className='hidden check-input' checked={cheked} onChange={() => handleChecking()} type="checkbox" />
            {/* <span className={value === id ? 'w-[16px] h-[16px] relative cursor-pointer transition-all custom-checkbox-catalog bg-[#40abe9]' : 'w-[16px] h-[16px] relative cursor-pointer transition-all custom-checkbox-catalog input-background'}></span> */}
            <span className='w-[16px] h-[16px] relative cursor-pointer transition-all custom-checkbox'></span>
            <span className='text-[14px]'>{text}</span>
        </label>
    );
};

export default GenresItem;