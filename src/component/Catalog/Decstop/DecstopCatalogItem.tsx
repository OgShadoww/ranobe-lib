import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { ranobeMoreApi, ranobeRoleApi } from '../../../app/services/services';
import { IRanobe } from '../../../types/IRanobe';
import Tippy from '../../UI/Decstop/DecstopTippy';

interface props {
    item: IRanobe
}

const CatalogItem:FC<props> = ({item}) => {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const moreInformation = () => {
        setIsVisible(true) 
    }   

    return (
        <div onMouseEnter={() => moreInformation()} onMouseLeave={() => setIsVisible(false)} className='relative w-[33.333%] catalog-item lg:w-[20%] md:w-[20%] sm:w-[33.3%] lg:p-[8px] md:p-[8px] sm:p-[4px] p-[4px]'>
            <Link to={`/${item.id}`} className='relative block rounded-[4px] cursor-pointer w-full h-full hover:text-[#fff]'>
            <img className='w-[100%] h-[100%] rounded-[4px] max-w-full' src={`https://moe.shikimori.one${item.image.original}`} alt="" />
                <div className='main-random-chapter z-20 text-[13px] font-semibold media-card-caption'>
                    <span className='mr-[5px]  random-ranobe-name'>{item.russian ? item.russian : item.name}</span>
                </div>
            </Link>
            <Tippy isVisible={isVisible} ranobe={item}/>
        </div>
    );
};

export default CatalogItem;