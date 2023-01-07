import React, { FC } from 'react';
import { IRanobe } from '../../types/RanobeType';

interface props {
    items: IRanobe
}

const PopularRanobeitem:FC<props> = ({items}) => {
    return (
        <div className='flex cursor-pointer popular-ranobe gap-[10px] last:mb-0 relative'>
            <img src={`https://moe.shikimori.one${items.image.original}`} className='w-[65px] shrink-0 block' alt="" />
            <div className='flex flex-col justify-start items-start text-left gap-[5px]'>
                <p className='popular-ranobe-title'>{items.russian}</p>
                <p className='popular-ranobe-name'>{items.name}</p>
                <p className='popular-ranobe-name'>{items.score}</p>
            </div>
        </div>
    );
};

export default PopularRanobeitem;