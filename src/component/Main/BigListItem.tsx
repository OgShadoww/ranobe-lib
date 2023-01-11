import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IRanobe } from '../../types/RanobeType';

interface props {
    items: IRanobe
}

const BigListItem:FC<props> = ({items}) => {
    return (
        <Link to={`/${items.id}`} className='flex gap-[10px] lg:gap-[20px] md:gap-[20px] sm:gap-[10px] border-b-[#38383a] pb-[10px] '>
            <img className='w-[72px] sm:w-[72px] md:w-[100px] lg:w-[100px]' src={`https://moe.shikimori.one${items.image.original}`} alt="" />
            <div className='flex w-full flex-col text-left'>
                <div className='flex flex-col pb-[5px] border-b-[#2ea3e7] border-b-[1px] w-full'>
                    <p className='hover:underline cursor-pointer text-[13px] lg:text-[15px] md:text-[14px] sm:text-[13px]'>{items.russian}</p>
                    <p className='popular-ranobe-name cursor-pointer text-[12px] lg:text-[13px] md:text-[13px] sm:text-[12px]'>{items.name}</p>
                </div>
                <div className='w-full popular-ranobe-volumes'>
                    <p className='cursor-pointer font-semibold uppercase sm:uppercase lg:normal-case md:normal-case text-[11px] lg:text-[14px] md:text-[14px] sm:text-[13px]'>{items.volumes} Томів {items.chapters} Глав</p>
                </div>
            </div>
        </Link>
    );
};

export default BigListItem;