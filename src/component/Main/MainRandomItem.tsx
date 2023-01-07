import React, { FC } from 'react';
import { IRanobe } from '../../types/RanobeType';

interface propsRanobeItem {
    randomRanobe: IRanobe
}

const MainRandomItem:FC<propsRanobeItem> = ({randomRanobe}) => {
    return (
        <div className='flex flex-col justify-start'>
            <div className='relative flex flex-col'>
                <img className='min-w-[133px] min-h-[178px] max-w-[153px] max-h-[208px] rounded-[4px]' src={`https://moe.shikimori.one${randomRanobe.image.original}`} alt="" />
                <div className='main-random-chapter z-20 text-[13px] font-semibold'>
                    <span className='mr-[5px]'>Томів {randomRanobe.volumes}</span>
                    <span>Глав {randomRanobe.chapters}</span>
                </div>
            </div>
            <span className='random-ranobe-name'>
                {randomRanobe.name ? 
                    randomRanobe.name
                : 'Немає назви'
                }
            </span>
        </div>
    );
};

export default MainRandomItem;