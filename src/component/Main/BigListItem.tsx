import React, { FC } from 'react';
import { IRanobe } from '../../types/RanobeType';

interface props {
    items: IRanobe
}

const BigListItem:FC<props> = ({items}) => {
    return (
        <div className='flex gap-[10px] lg:gap-[20px] md:gap-[20px] sm:gap-[10px] border-b-[#38383a] pb-[10px] '>
            <img className='w-[72px] sm:w-[72px] md:w-[100px] lg:w-[100px]' src={`https://moe.shikimori.one${items.image.original}`} alt="" />
            <div className='flex w-full flex-col text-left'>
                <div className='flex flex-col pb-[5px] border-b-[#2ea3e7] border-b-[1px] w-full'>
                    <a className='hover:underline cursor-pointer text-[13px] lg:text-[15px] md:text-[14px] sm:text-[13px]'>{items.russian}</a>
                    <a className='popular-ranobe-name cursor-pointer text-[12px] lg:text-[13px] md:text-[13px] sm:text-[12px]'>{items.name}</a>
                </div>
                <div className='w-full popular-ranobe-volumes'>
                    <a className='cursor-pointer font-semibold uppercase sm:uppercase lg:normal-case md:normal-case text-[11px] lg:text-[14px] md:text-[14px] sm:text-[13px]'>{items.volumes} Томів {items.chapters} Глав</a>
                </div>
            </div>
        </div>
    );
};

export default BigListItem;