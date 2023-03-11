import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { ranobeMoreApi, ranobeRoleApi } from '../../app/services/services';
import { IRanobe } from '../../types/IRanobe';
import Tippy from '../UI/Decstop/DecstopTippy';
import MobileTippy from '../UI/Mobile/MobileTippy';

interface props {
    item: IRanobe,
    type: string,
    visible?: number,
    setVisible?: (value: number) => void
}

const CatalogItem:FC<props> = ({item, type, visible, setVisible}) => { 
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [mobileVisible, setMobileVisible] = useState<boolean>(false)
    const moreInformation = () => {
        setIsVisible(true) 
    }

    if(type === 'decstop') {  
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
    }
    else {  
        return (
            <div className='w-[33.333%] catalog-item lg:w-[20%] md:w-[20%] sm:w-[33.3%] lg:p-[8px] md:p-[8px] sm:p-[4px] p-[4px]'>
                <div onClick={() => setMobileVisible(true)} className='relative block rounded-[4px] cursor-pointer w-full h-full hover:text-[#fff]'>
                    <img className='w-[100%] h-[100%] rounded-[4px] max-w-full' src={`https://moe.shikimori.one${item.image.original}`} alt="" />
                    <div className='main-random-chapter z-20 text-[13px] font-semibold media-card-caption'>
                        <span className='mr-[5px]  random-ranobe-name'>{item.russian ? item.russian : item.name}</span>
                    </div>
                </div>
                <MobileTippy isVisible={mobileVisible} setIsVisible={setMobileVisible} item={item}/>
            </div>
        );
    }
    return (
        <>
        </>
    );
};

export default CatalogItem;