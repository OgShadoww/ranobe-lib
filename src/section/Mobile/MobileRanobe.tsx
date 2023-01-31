import React, { useState } from 'react';
import { AiFillStar, AiFillWarning } from 'react-icons/ai';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { FaFolder, FaPencilAlt, FaRss } from 'react-icons/fa';
import { SlArrowDown } from 'react-icons/sl';
import { useParams } from 'react-router-dom';
import { ranobeMoreApi, ranobeRelatedApi, ranobeRoleApi } from '../../app/services/services';
import AboutRanobe from '../../component/Ranobe/AboutRanobe';
import MediaStats from '../../component/Ranobe/MediaStats';
import RanobeGenreItem from '../../component/Ranobe/RanobeGenreItem';
import { links } from '../../variable/link';

const MobileRanobe = () => {
    const params = useParams()
    const [current, setCurrent] = useState(0)
    const {data: ranobe} = ranobeMoreApi.useFetchAllRanobeQuery(Number(params.id))
    let {data: role} = ranobeRoleApi.useFetchAllRanobeQuery(Number(params.id))
    let {data: related} = ranobeRelatedApi.useFetchAllRanobeQuery({num: Number(params.id), value: 'related'})
    let autor = role?.filter(role => role.roles[0] === 'Story')
    let art = role?.filter(role => role.roles[0] === 'Art')
    let allScoresStats = ranobe?.rates_scores_stats.reduce((rate: number, initial) => {
        return (rate + initial.value)
    }, 0)
    let allStatuseStats = ranobe?.rates_statuses_stats.reduce((rate: number, initial) => {
        return (rate + initial.value)
    }, 0)

    if(role) {
        role = role.filter(role => role.person !== null)
    }
    const tabLineStyles = ['tabs-line']
    if(current === 0) {
        tabLineStyles.push('block translate-x-[80px] w-[80px]')
    }
    if(current === 1) {
        tabLineStyles.push('block translate-x-[180px] w-[85px]')
    }
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
    return (
        <>
            <div className="media-header">
                <div className='media-header-background'></div>
                <div className='media-header-inner'>
                    <img className='dmedia-header-cover cover' src={`https://moe.shikimori.one${ranobe?.image.original}`} alt="" />
                </div>
            </div>
            <div className='media-content-mobile'>
                <div className='media-info-header'>
                    <div className='text-center'>
                        <h1 className='text-[18px] leading-[1.2] font-[600]'>
                            {ranobe?.russian}
                        </h1>
                        <h2 className='text-[15px] font-[400] whitespace-nowrap text-ellipsis overflow-hidden leading-[1.3]'>
                            {ranobe?.name}
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
                    <ul className='whitespace-nowrap relative text-[14px] list-none flex justify-center border-bottom-base'>
                        {links.map((link, index) => 
                            <li onClick={() => setCurrent(index)} key={link.id} className={current === index ? 'py-[13px] mr-[20px] cursor-pointer text-[14px]' : 'text-[#818181] media-links mr-[20px] cursor-pointer py-[13px] transition-colors text-[14px]'}>
                                {link.text}
                            </li>    
                        )}
                        <div className={tabLineStyles.join(' ')}>

                        </div>
                    </ul>
                </div>
                
                        {/* <div className='foreground px-[8px] py-[9px]'>
                            <AboutRanobe title='Тип' subtitle={ranobe?.kind === 'light_novel' ? 'Ранобе' : ranobe?.kind === 'novel' ? 'Новелла' : ''}/>
                            <AboutRanobe title='Рік релізу' subtitle={ranobe?.aired_on.slice(0, 4)}/>
                            <AboutRanobe 
                                title='Статус' 
                                subtitle={
                                    ranobe?.status === 'ongoing' ? 'Онгонинг' : 
                                    ranobe?.status === 'released' ? 'Закінчений' : 
                                    ranobe?.status === 'anons' ? 'Анонс' : 
                                    ranobe?.status === 'paused' ? 'Призупиняно' : 
                                    ranobe?.status === 'discontinued' ? 'Зупиняно' : ''
                                }
                            />
                            <AboutRanobe title='Автор' subtitle={autor?.map(autor => autor.person?.name.toString())}/>
                            <AboutRanobe title='Художник' subtitle={art?.map(art => art.person?.name.toString())}/>
                            <AboutRanobe title='Всього глав' subtitle={ranobe?.chapters}/>
                            <AboutRanobe title='Оригінальна назва' subtitle={ranobe?.japanese}/>
                        </div> */}
                    </div>
                    <div className='media-content-side'>
                        <div className='foreground rounded-[4px]'>
                            <div className='px-[18px]'>
                                {current === 0 ?
                                    <div className='flex flex-col gap-[10px]'>
                                        {/* <p className='text-[14px] text-left leading-[1.6]'>
                                            {ranobe?.description ? ranobe.description.replace(/[^А-яЁё ]/g,"") : 'Немає опису'}
                                        </p> */}
                                        {/* <div className='flex flex-wrap gap-[8px]'>
                                            {ranobe?.genres.map(genre => 
                                                <RanobeGenreItem key={genre.id} text={genre.russian}/>
                                            )}
                                        </div> */}
                                        {/* {related !== undefined ? <DecstopSimilarRanobe title="Зв'язанні" items={related}/> : ''} */}
                                        {/* <div className='flex gap-[36px]'>
                                            <MediaStats type='status' title={`В списках в ${allStatuseStats} людей`} allStats={allStatuseStats} stats={ranobe?.rates_statuses_stats}/>
                                            <MediaStats score={ranobe?.score} type='rates' title='Оцінки користувачів' allStats={allScoresStats} stats={FiveGradeScore}/>
                                        </div> */}
                                    </div>
                                : ''}
                            </div>
                    </div>
            </div>
        </>
    );
};

export default MobileRanobe;