import React, { FC, useEffect, useState } from 'react';

interface props {
    order: string,
    setOrder: any
}

const MobileSortMenu:FC<props> = ({order, setOrder}) => {
    const [visible, setVisible] = useState<boolean>(false)
    const [value, setValue] = useState('популярності')

    useEffect(() => {
        setValue('популярності')
        setOrder('popularity')
    }, [])

    const handleClick = (num: number) => {
        if(num === 1) {
            setOrder('ranked')
            setValue('рейтингу')
        }
        if(num === 2) {
            setOrder('popularity')
            setValue('популярності')
        }
        if(num === 3) {
            setOrder('name')
            setValue('алфавіту')
        }
        if(num === 4) {
            setOrder('aired_on')
            setValue('даті релізу')
        }
        if(num === 5) {
            setOrder('chapters')
            setValue('кількості глав')
        }
        if(num === 6) {
            setOrder('random')
            setValue('випадково')
        }
    }

    return (
        <> 
            <label className='py-[7px] px-[12px] text-[13px] flex gap-[8px] items-center cursor-pointer light-hover'>
                    <input checked={value === 'рейтингу' ? true : false} value='check' onChange={() => handleClick(1)} type="radio" className='control-input' />
                    <span className='rounded-[50%] input-border control-indicator'></span>
                    <span>Рейтингу</span>
                </label>
                <label className='py-[7px] px-[12px] text-[13px] flex gap-[8px] items-center cursor-pointer light-hover'>
                    <input checked={value === 'популярності' ? true : false} onChange={() => handleClick(2)} type="radio" className='control-input' />
                    <span className='rounded-[50%] input-border control-indicator'></span>
                    <span>Популярності</span>
                </label>
                <label className='py-[7px] px-[12px] text-[13px] flex gap-[8px] items-center cursor-pointer light-hover'>
                    <input checked={value === 'алфавіту' ? true : false}  onChange={() => handleClick(3)} type="radio" className='control-input' />
                    <span className='rounded-[50%] input-border control-indicator'></span>
                    <span>Алфавіту</span>
                </label>
                <label className='py-[7px] px-[12px] text-[13px] flex gap-[8px] items-center cursor-pointer light-hover'>
                    <input checked={value === 'даті релізу' ? true : false}  onChange={() => handleClick(4)} type="radio" className='control-input' />
                    <span className='rounded-[50%] input-border control-indicator'></span>
                    <span>Даті релізу</span>
                </label>
                <label className='py-[7px] px-[12px] text-[13px] flex gap-[8px] items-center cursor-pointer light-hover'>
                    <input checked={value === 'кількості глав' ? true : false}  onChange={() => handleClick(5)} type="radio" className='control-input' />
                    <span className='rounded-[50%] input-border control-indicator'></span>
                    <span>Кількості глав</span>
                </label>
                <label className='py-[7px] px-[12px] text-[13px] flex gap-[8px] items-center cursor-pointer light-hover'>
                    <input checked={value === 'випадково' ? true : false}  onChange={() => handleClick(6)} type="radio" className='control-input' />
                    <span className='rounded-[50%] input-border control-indicator'></span>
                    <span>Випадково</span>
                </label>     
        </>                    
    );
};

export default MobileSortMenu;