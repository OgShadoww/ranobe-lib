import React, { useRef, useState } from 'react';
import { AiFillStar, AiFillWarning } from 'react-icons/ai';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { FaFolder, FaPencilAlt, FaRss } from 'react-icons/fa';
import { SlArrowDown } from 'react-icons/sl';
import { useParams } from 'react-router-dom';
import { ranobeMoreApi, ranobeRelatedApi, ranobeRoleApi } from '../../app/services/services';
import AboutRanobe from '../../component/Ranobe/AboutRanobe';
import MediaStats from '../../component/Ranobe/Decstop/DecstopMediaStats';
import MobileMediaStats from '../../component/Ranobe/Mobile/MobileMediaStats';
import MobileSimilarRanobe from '../../component/Ranobe/Mobile/MobileSimilarRanobe';
import RanobeGenreItem from '../../component/Ranobe/RanobeGenreItem';
import { links } from '../../variable/link';

const MobileRanobe = () => {
    const params = useParams()
    const [current, setCurrent] = useState(0)
    const {data: ranobe} = ranobeMoreApi.useFetchAllRanobeQuery(Number(params.id))
    const {data: related} = ranobeRelatedApi.useFetchAllRanobeQuery({num: Number(params.id), value: 'related'})
    const [descHeight, setDescHeight] = useState(false)

    let {data: role} = ranobeRoleApi.useFetchAllRanobeQuery(Number(params.id))
    let autor = role?.filter(role => role.roles[0] === 'Story')
    let art = role?.filter(role => role.roles[0] === 'Art')

    let allScoresStats = ranobe?.rates_scores_stats.reduce((rate: number, initial) => {
        return (rate + initial.value)
    }, 0)
    let allStatuseStats = ranobe?.rates_statuses_stats.reduce((rate: number, initial) => {
        return (rate + initial.value)
    }, 0)

    const getScore = (num: number, num2: number) => {
        return ranobe?.rates_scores_stats.filter(stat => (stat.name > num) && (stat.name <= num2)).reduce((stat: number, initial) => {
            return (stat + initial.value)
        }, 0)
    }
    const FiveGradeScore: any = [
        {
            name:5,
            value: getScore(8, 10)
        },
        {
            name:4,
            value: getScore(6, 8)
        },
        {
            name:3,
            value: getScore(4, 6)
        },
        {
            name:2,
            value: getScore(2, 4)
        },
        {
            name:1,
            value: getScore(0, 2)
        },
    ]

    if(role) {
        role = role.filter(role => role.person !== null)
    }
    const firstLi = useRef<HTMLLIElement>(document.createElement("li"))
    const secondLi = useRef<HTMLLIElement>(document.createElement("li"))
    const mainRef = useRef<HTMLUListElement>(document.createElement("ul"))

    return (
        <>
            <div className="media-header">
                <div className='media-header-background'></div>
                <div className='media-header-inner'>
                    <img className='dmedia-header-cover cover' src={`https://moe.shikimori.one${ranobe?.image.original}`} alt="" />
                </div>
            </div>
            <div className='media-content-mobile w-full'>
                <div className='media-info-header'>
                    <div className='text-center'>
                        <h1 className='text-[17px] leading-[1.2] font-[600] mb-[5px]'>
                            {ranobe?.russian}
                        </h1>
                        <h2 className='text-[15px] font-[400] whitespace-nowrap text-ellipsis overflow-hidden leading-[1.3] mb-[10px]'>
                            {ranobe?.english}
                        </h2>
                    </div>
                    <div className='flex flex-wrap justify-center'>
                        <div className='px-[8px] text-[14px] py-[5px] text-mutted whitespace-nowrap'>
                            {ranobe?.aired_on.slice(0, 4)}
                        </div>
                        <div className='px-[8px] text-[14px] py-[5px] text-mutted whitespace-nowrap'>
                            {ranobe?.kind === 'light_novel' ? 'Ранобе' : ranobe?.kind === 'novel' ? 'Новелла' : ''}
                        </div>
                        <div className='px-[8px] text-[14px] py-[5px] text-mutted whitespace-nowrap'>
                            <div className='flex justify-center items-center gap-[4px]'>
                                <AiFillStar className='text-[#ffb656] text-[12px]'/>
                                <p className='text-white text-[14px] font-[600]'>{ranobe?.score}</p>
                                <p className='text-white text-[12px] opacity-[0.7]'>
                                    {ranobe?.rates_scores_stats.reduce((rate: number, initial) => {
                                        return (rate + initial.value)
                                    }, 0)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='foreground text-center'>
                    <ul ref={mainRef} className='whitespace-nowrap relative text-[14px] list-none flex justify-center gap-[20px] border-bottom-base'>
                        <li ref={firstLi} onClick={() => setCurrent(0)} className={current === 0 ? 'py-[13px] cursor-pointer text-[14px]' : 'text-[#818181] media-links cursor-pointer py-[13px] transition-colors text-[14px]'}>
                            Інформація
                        </li>
                        <li ref={secondLi} onClick={() => setCurrent(1)} className={current === 1 ? 'py-[13px] cursor-pointer text-[14px]' : 'text-[#818181] media-links cursor-pointer py-[13px] transition-colors text-[14px]'}>
                            Обсудження
                        </li>
                        <div style={{width:current === 0 ? `${firstLi.current.offsetWidth}px` : `${secondLi.current.offsetWidth}px`, transform: current === 0 ? `translateX(${mainRef.current.offsetWidth / 2 - firstLi.current.offsetWidth - 15 }px)` : `translateX(${mainRef.current.offsetWidth / 2 + 7}px)`}} className='tabs-line'>

                        </div>
                    </ul>
                </div>
                {current === 0 ?
                    <div className=''>
                        <div className='px-[8px] py-[9px] foreground'>
                            <AboutRanobe 
                                type='mobile'
                                title='Статус' 
                                subtitle={
                                    ranobe?.status === 'ongoing' ? 'Онгонинг' : 
                                    ranobe?.status === 'released' ? 'Закінчений' : 
                                    ranobe?.status === 'anons' ? 'Анонс' : 
                                    ranobe?.status === 'paused' ? 'Призупиняно' : 
                                    ranobe?.status === 'discontinued' ? 'Зупиняно' : ''
                                }
                            />
                            <AboutRanobe type='mobile' title='Всього глав' subtitle={ranobe?.chapters}/>
                            <AboutRanobe type='mobile' title='Автор' subtitle={autor?.map(autor => autor.person?.name.toString())}/>
                            <AboutRanobe type='mobile' title='Художник' subtitle={art?.map(art => art.person?.name.toString())}/>
                            <AboutRanobe type='mobile' title='Рік релізу' subtitle={ranobe?.aired_on.slice(0, 4)}/>
                        </div>
                        <div className='foreground py-[5px] mb-[10px]'>
                            <div style={{maxHeight:descHeight ? 'fit-content' : 125}} className='foreground text-[14px] overflow-hidden text-left leading-[1.6] p-[12px] pb-[6px]'>
                                {ranobe?.description ? ranobe.description.replace(/[^А-яЁё ]/g,"") : 'Немає опису'}
                            </div>
                            {ranobe ? ranobe?.description.length > 400 ? <button onClick={() => setDescHeight(!descHeight)} className='flex justify-start px-[12px] text-link text-[12px] mt-[3px] mb-[5px]'>{descHeight ? 'Меньше' : 'Детальніше...'}</button> : 'Немає опису' : ''}
                            <div className='flex flex-wrap gap-[8px] px-[12px] py-[9px]'>
                                {ranobe?.genres.map(genre => 
                                    <RanobeGenreItem key={genre.id} text={genre.russian}/>
                                )}
                            </div>
                        </div>
                        {related !== undefined ? <MobileSimilarRanobe title="Зв'язанні" items={related}/> : ''}
                        <div className='flex flex-col justify-center items-center gap-[10px]'>
                            <MobileMediaStats type='status' title={`В списках в ${allStatuseStats} людей`} allStats={allStatuseStats} stats={ranobe?.rates_statuses_stats}/>
                            <MobileMediaStats score={ranobe?.score} type='rates' title='Оцінки користувачів' allStats={allScoresStats} stats={FiveGradeScore}/>
                        </div>
                    </div>
                :
                    ''
                }
            </div>
        </>
    );
};

export default MobileRanobe;