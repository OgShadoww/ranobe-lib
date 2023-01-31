import React, { FC, ReactElement, useEffect, useRef, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { IRanobeRelatedAnime } from '../../../types/IRelatedAnime';
import { IRanobeRelatedManga } from '../../../types/IRelatedManga';
import SimilarRanobeItem from '../SimilarRanobeItem';

interface props {
    title: string,
    items: [IRanobeRelatedManga] | [IRanobeRelatedAnime]
}

const MobileSimilarRanobe:FC<props> = ({title, items}) => {
    return (
        <div className='text-left px-[12px] foreground snap-mandatory overflow-scroll'>
            <div className='flex justify-between mb-[5px]'>
                <h2 className='font-semibold'>{title}</h2>
            </div>
            <div className='box-border'>
                <div className='w-fit flex duration-[0.4s] translate-x-[0px] box-border'>
                    {items?.map(item => 
                        <SimilarRanobeItem type='mobile' key={item.anime === null ? item.manga.id : item.anime.id} item={item}/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MobileSimilarRanobe;