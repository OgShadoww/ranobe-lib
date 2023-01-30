import React, { FC } from 'react';
import { AiFillStar } from 'react-icons/ai';

interface props {
    name: string | number,
    width: string | number,
    value: number,
    type: string
}

const MediaStatsItem:FC<props> = ({name, width, value, type}) => {
    if(type === 'status') {
        return (
            <div className='table-row'>
                <div className='pl-0 whitespace-nowrap text-left leading-[1] text-[13px] align-middle table-cell py-[4px] px-[6px]'>
                    {name}
                </div>
                <div className='w-full table-cell py-[4px] px-[6px]'>
                    <div className='h-[8px] rounded-[8px] background-hover relative overflow-hidden'>
                        <div className='absolute h-[100%] background-primary-lighten top-0 left-0' style={{width:`${width}%`}}></div>
                    </div>
                </div>
                <div className='font-[700] text-[13px] table-cell'>
                    {width}%
                </div>
                <div className='table-cell text-[13px] text-mutted px-[6px] py-[4px]'>
                    {value}
                </div>
            </div>
        );
    }
    else {
        return (
            <div className='table-row'>
                <div className='pl-0 whitespace-nowrap text-left leading-[1] text-[13px] align-middle table-cell  py-[4px] px-[6px]'>
                    <div className='flex gap-[5px]'>
                        <span>{name}</span> <AiFillStar className='text-mutted'/>
                    </div>
                </div>
                <div className='w-full table-cell py-[4px] px-[6px]'>
                    <div className='h-[8px] rounded-[8px] background-hover relative overflow-hidden'>
                        <div className='absolute h-[100%] bg-[#76db98] top-0 left-0' style={{width:`${width}%`}}></div>
                    </div>
                </div>
                <div className='font-[700] text-[13px] table-cell'>
                    {width}%
                </div>
                <div className='table-cell text-[13px] text-mutted px-[6px] py-[4px]'>
                    {value}
                </div>
            </div>
        );
    }
    return (
        <>

        </>
    );
};

export default MediaStatsItem;