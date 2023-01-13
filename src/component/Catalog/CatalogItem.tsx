import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IRanobe } from '../../types/RanobeType';

interface props {
    items: IRanobe
}

const CatalogItem:FC<props> = ({items}) => {
    return (
        <div className='w-[33.333%] catalog-item lg:w-[20%] md:w-[20%] sm:w-[33.3%] lg:p-[8px] md:p-[8px] sm:p-[4px] p-[4px]'>
            <Link to={`/${items.id}`} className='relative block rounded-[4px] cursor-pointer'>
            <img className='w-[100%] rounded-[4px] max-w-full' src={`https://moe.shikimori.one${items.image.original}`} alt="" />
                <div className='main-random-chapter z-20 text-[13px] font-semibold media-card-caption'>
                    <span className='mr-[5px]  random-ranobe-name'>{items.russian ? items.russian : items.name}</span>
                </div>
            </Link>
        </div>
    );
};

export default CatalogItem;