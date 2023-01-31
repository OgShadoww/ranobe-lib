import React, { FC } from 'react';
import { IRanobeRelatedAnime } from '../../types/IRelatedAnime';
import { IRanobeRelatedManga } from '../../types/IRelatedManga';

interface props {
    item: IRanobeRelatedManga | IRanobeRelatedAnime,
    type: string
}

const SimilarRanobeItem:FC<props> = ({item, type}) => {
    if(type === 'decstop') {
        return (
            <div className='px-[9px] py-[6px]'>
                <a href='' className='w-[320px] h-[122px] rounded-[6px] background-elevated-2 ranobe-related-shadow flex text-primary'>
                    <img src={`https://moe.shikimori.one${item.anime === null ? item.manga.image.original : item.anime.image.original}`} className='w-[85px] h-full' alt="" />
                    <div className='min-h-[100%] flex flex-col gap-[10px] flex-1 justify-center py-[7px] px-[12px]'>
                        <div className='text-blue text-[12px]'>
                            {item?.relation_russian}
                        </div>
                        <div className='font-[600] text-[14px] ranobe-related-name overflow-hidden'>
                            {item.anime === null ? item.manga.russian : item.anime.russian}
                        </div>
                        <div className='text-[13px] flex gap-[10px] mt-[10px] text-secondary'>
                            <span>
                                {item.anime === null ? 
                                    item.manga.kind === 'manga' ? 'Манга' : 
                                    item.manga.kind === 'light_novel' ? 'Ранобе': ''
                                :
                                    item.anime.kind === 'ona' ? 'ONA' :
                                    item.anime.kind === 'tv' ? 'Аніме' : ''
                                }
                            </span>
                            <span className='text-[13px]'>
                                {item.anime === null ?
                                    item?.manga.status === 'ongoing' ? 'Онгоінг' : 
                                    item?.manga.status === 'released' ? 'Закінчений' : 
                                    item?.manga.status === 'anons' ? 'Анонс' : 
                                    item?.manga.status === 'paused' ? 'Призупиняно' : 
                                    item?.manga.status === 'discontinued' ? 'Зупиняно' : ''
                                :
                                    item?.anime.status === 'ongoing' ? 'Онгоінг' : 
                                    item?.anime.status === 'released' ? 'Закінчений' : 
                                    item?.anime.status === 'anons' ? 'Анонс' : 
                                    item?.anime.status === 'paused' ? 'Призупиняно' : 
                                    item?.anime.status === 'discontinued' ? 'Зупиняно' : ''   
                                }
                            </span>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
    else {
        return (
            <div className='px-[9px] py-[6px]'>
                <a href='' className='w-[320px] h-[122px] rounded-[6px] background-elevated-2 ranobe-related-shadow flex text-primary'>
                    <img src={`https://moe.shikimori.one${item.anime === null ? item.manga.image.original : item.anime.image.original}`} className='w-[85px] h-full' alt="" />
                    <div className='min-h-[100%] flex flex-col gap-[10px] flex-1 justify-center py-[7px] px-[12px]'>
                        <div className='text-blue text-[12px]'>
                            {item?.relation_russian}
                        </div>
                        <div className='font-[600] text-[14px] ranobe-related-name overflow-hidden'>
                            {item.anime === null ? item.manga.russian : item.anime.russian}
                        </div>
                        <div className='text-[13px] flex gap-[10px] mt-[10px] text-secondary'>
                            <span>
                                {item.anime === null ? 
                                    item.manga.kind === 'manga' ? 'Манга' : 
                                    item.manga.kind === 'light_novel' ? 'Ранобе': ''
                                :
                                    item.anime.kind === 'ona' ? 'ONA' :
                                    item.anime.kind === 'tv' ? 'Аніме' : ''
                                }
                            </span>
                            <span className='text-[13px]'>
                                {item.anime === null ?
                                    item?.manga.status === 'ongoing' ? 'Онгоінг' : 
                                    item?.manga.status === 'released' ? 'Закінчений' : 
                                    item?.manga.status === 'anons' ? 'Анонс' : 
                                    item?.manga.status === 'paused' ? 'Призупиняно' : 
                                    item?.manga.status === 'discontinued' ? 'Зупиняно' : ''
                                :
                                    item?.anime.status === 'ongoing' ? 'Онгоінг' : 
                                    item?.anime.status === 'released' ? 'Закінчений' : 
                                    item?.anime.status === 'anons' ? 'Анонс' : 
                                    item?.anime.status === 'paused' ? 'Призупиняно' : 
                                    item?.anime.status === 'discontinued' ? 'Зупиняно' : ''   
                                }
                            </span>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
    return (
        <></>
    );
};

export default SimilarRanobeItem;