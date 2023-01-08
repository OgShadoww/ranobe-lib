import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IRanobe } from '../../types/RanobeType';

interface propsRanobeItem {
    randomRanobe: IRanobe
}

const MainRandomItem:FC<propsRanobeItem> = ({randomRanobe}) => {
    return (
        <Link to={`/${randomRanobe.id}`} className='flex flex-col justify-start overflow-hidden lg:min-w-[133px]  lg:max-w-[153px] sm:min-w-[113px] sm:max-w-[133px] min-w-[113px] max-w-[103px]'>
            <div className='relative flex flex-col lg:min-w-[133px] lg:min-h-[178px] lg:max-w-[153px] lg:max-h-[208px] sm:min-w-[113px] sm:min-h-[158px] sm:max-w-[133px] sm:max-h-[188px] min-w-[113px] min-h-[158px] max-w-[103px] max-h-[158px]'>
                <img className='lg:min-w-[133px] lg:min-h-[178px] lg:max-w-[153px] lg:max-h-[208px] sm:min-w-[113px] sm:min-h-[158px] sm:max-w-[133px] sm:max-h-[188px] min-w-[113px] min-h-[158px] max-w-[103px] max-h-[158px] rounded-[4px]' src={`https://moe.shikimori.one${randomRanobe.image.original}`} alt="" />
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
        </Link>
    );
};

export default MainRandomItem;