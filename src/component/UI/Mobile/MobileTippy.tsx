import React, { FC, useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ranobeMoreApi } from '../../../app/services/services';
import { IFullRanobe } from '../../../types/IFullRanobe';
import { IRanobe } from '../../../types/IRanobe';
import { IRoles } from '../../../types/IRoles';
import {GrClose} from 'react-icons/gr'
import AboutRanobe from '../../Ranobe/AboutRanobe';

interface props {
    isVisible: boolean,
    item: IRanobe,
    setIsVisible: any
}

const MobileTippy:FC<props> = ({isVisible, item, setIsVisible}) => {
    const [aboutRanobe, setAboutRanobe] = useState<IFullRanobe>()
    const [ranobeRole, setRanobeRole] = useState<IRoles[]>()
    let autor = ranobeRole?.filter(role => role.roles[0] === 'Story')
    let art = ranobeRole?.filter(role => role.roles[0] === 'Art')

    useEffect(() => {
        if(isVisible) {
            document.body.classList.add('overwflow-hidden')
            fetch(`https://shikimori.one/api/ranobe/${item.id}`).then(item => item.json()).then(item => setAboutRanobe(item))
            fetch(`https://shikimori.one/api/ranobe/${item.id}/roles`).then(item => item.json()).then(item => setRanobeRole(item))
        }
        else {
            document.body.classList.remove('overwflow-hidden')
        }
    }, [isVisible])
    if(ranobeRole) {
        console.log(autor)
    }


    return (
        <>
            <div className={isVisible ? 'pointer-events-all absolute translate-x-[0%] transition-all w-full foreground z-[30] top-0 left-0 duration-[0.4s] overflow-scroll max-h-[100vh] h-[100vh]' : 'foreground absolute translate-x-[100%] left-0 z-30 w-full h-[100vh] top-0 duration-[0.4s] pointer-events-none transition-all'}>
                <div className='z-[150] w-full transition-all relative'>
                    <div className="h-full overflow-y-auto overscroll-contain transition-all">
                        <div className="flex flex-col gap-[8px] p-[15px] pb-[60px]">
                            <div className='flex gap-[20px]'>
                                <img className='w-[100px] h-[140px] flex-shrink-0' src={`https://moe.shikimori.one${item?.image.original}`} alt="" />
                                <div className='flex justify-between flex-col flex-grow'>
                                    <div className='flex flex-col gap-[6px] items-start'>
                                        <div className='flex gap-[16px]'>
                                            <div className='flex gap-[4px] justify-center items-center'>
                                                <AiFillStar className='text-[#ffb656] text-[22px]'/>
                                                <AiFillStar className='text-[#ffb656] text-[22px]'/>
                                                <AiFillStar className='text-[#ffb656] text-[22px]'/>
                                                <AiFillStar className='text-[#ffb656] text-[22px]'/>
                                                <AiFillStar className='text-[#ffb656] text-[22px]'/>
                                            </div>
                                            <p className='text-white text-[22px] font-[600]'>{item?.score}</p>
                                        </div>
                                        <p className='text-white text-[17px] opacity-[0.7]'>
                                            Голосів {aboutRanobe?.rates_scores_stats.reduce((rate: number, initial) => {
                                                return (rate + initial.value)
                                            }, 0)}
                                        </p>
                                    </div>
                                    <button onClick={() => setIsVisible(false)} className='button-primary w-full block min-h-[16px] h-[32px] px-[16px] text-[14px] font-[600] text-center rounded-[4px] cursor-pointer select-none'>
                                        Добавити в список
                                    </button>   
                                </div>
                            </div>
                            <div className='flex flex-col justify-start items-start'>
                                <h2 className='text-[20px]'>
                                    {aboutRanobe?.english}
                                </h2>
                                <p className='text-[14px]'>
                                    {aboutRanobe?.russian}
                                </p>
                            </div>
                            <div className='mt-[16px] flex flex-col gap-[10px]'>
                                <div className='flex gap-[24px] rounded-[3px] cursor-pointer text-left light-hover'>
                                    <div className='text-[14px] font-[600]'>
                                        Автор
                                    </div>
                                    <div className='overflow-hidden text-[14px]'>
                                        {autor?.map(autor => autor.person?.name)}
                                    </div>
                                </div>
                                <div className='flex gap-[24px] rounded-[3px] cursor-pointer text-left light-hover'>
                                    <div className='text-[14px] font-[600]'>
                                        Художник
                                    </div>
                                    <div className='overflow-hidden text-[14px]'>
                                        {art?.map(art => art.person?.name)}
                                    </div>
                                </div>
                                <div className='flex gap-[24px] rounded-[3px] cursor-pointer text-left light-hover'>
                                    <div className='text-[14px] font-[600]'>
                                        Рік релізу
                                    </div>
                                    <div className='overflow-hidden text-[14px]'>
                                        {aboutRanobe?.aired_on.slice(0, 4)}
                                    </div>
                                </div>
                                <div className='flex gap-[24px] rounded-[3px] cursor-pointer text-left light-hover'>
                                    <div className='text-[14px] font-[600]'>
                                        Статус ранобе
                                    </div>
                                    <div className='overflow-hidden text-[14px]'>
                                        {
                                            aboutRanobe?.status === 'ongoing' ? 'Онгонинг' : 
                                            aboutRanobe?.status === 'released' ? 'Закінчений' : 
                                            aboutRanobe?.status === 'anons' ? 'Анонс' : 
                                            aboutRanobe?.status === 'paused' ? 'Призупиняно' : 
                                            aboutRanobe?.status === 'discontinued' ? 'Зупиняно' : ''
                                        }
                                    </div>
                                </div>
                                <div className='flex gap-[24px] rounded-[3px] cursor-pointer text-left light-hover'>
                                    <div className='text-[14px] font-[600]'>
                                        Всього глав
                                    </div>
                                    <div className='overflow-hidden text-[14px]'>
                                        {aboutRanobe?.chapters}
                                    </div>
                                </div>
                            </div>
                            <p className='text-[14px] text-left leading-[1.6] mt-[10px]'>
                                <div className='text-[14px] font-[600]'>
                                    Опис
                                </div>
                                {aboutRanobe?.description ? aboutRanobe.description.replace(/[^А-яЁё ]/g,"") : 'Немає опису'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fixed bottom-[0%] left-0 right-0 z-[1000] background-elevated-2 flex justify-around py-[6px]'>
                <Link to={`/${item.id}`} className='min-h-[16px] h-[32px] m-0 px-[16px] leading-[32px] text-[14px] text-link hover:underline font-[500] outline-0 cursor-pointer'>
                    Детальніше
                </Link>
                <GrClose className='text-muted translate-y-[50%]'/>
                <p className='min-h-[16px] h-[32px] m-0 px-[16px] leading-[32px] text-[14px] text-link font-[500] outline-0 cursor-pointer'>
                    Фільтрувати
                </p>
            </div>
        </>
    );
};

export default MobileTippy;