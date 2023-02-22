import React, { FC } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { ranobeMoreApi } from '../../../app/services/services';
import { IRanobe } from '../../../types/IRanobe';

interface props {
    isVisible: number,
    item: IRanobe,

}

const MobileTippy:FC<props> = ({isVisible, item}) => {
    const {data: ranobe} = ranobeMoreApi.useFetchAllRanobeQuery(item.id)

    return (
        <div style={{transform: isVisible === item.id ? 'translateX(0)' : 'translateX(100%)', inset: isVisible === item.id ? '0' : '0', pointerEvents: isVisible === item.id ? 'all' : 'none'}} className='fixed w-full flex z-[100] flex-col items-center transition-transform duration-[0.3s] main-wrapper-padding-out foreground'>
            <div className='min-w-[92vw] flex items-center justify-center mt-auto mb-auto'>
                <div className='z-[150] w-full'>
                    <div className="h-full overflow-y-auto overscroll-contain">
                        <div className="p-[15px] pb-[60px]">
                            <div className='flex'>
                                <img className='w-[100px] h-[140px] flex-shrink-0' src={`https://moe.shikimori.one${ranobe?.image.original}`} alt="" />
                                <div className='flex flex-col justify-between flex-grow'>
                                    <div className='flex'>
                                        <AiFillStar className='text-[#ffb656] text-[22px]'/>
                                        <p className='text-white text-[22px] font-[600]'>{ranobe?.score}</p>
                                    </div>
                                    <p className='text-white text-[16px] opacity-[0.7]'>
                                        Голосів {ranobe?.rates_scores_stats.reduce((rate: number, initial) => {
                                            return (rate + initial.value)
                                        }, 0)}
                                    </p>
                                    <button className='button-primary w-full block min-h-[16px] h-[32px] px-[16px] text-[14px] font-[600] text-center rounded-[4px] cursor-pointer select-none'>
                                        Добавити в список
                                    </button>   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileTippy;