import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ranobeMoreApi, ranobeRoleApi } from '../app/services/services';
import {FaPencilAlt, FaRss} from 'react-icons/fa'
import { AiFillStar, AiFillWarning } from 'react-icons/ai'
import {BsFillPlusSquareFill} from 'react-icons/bs'
import {FaFolder} from 'react-icons/fa'
import {SlArrowDown} from 'react-icons/sl'
import { links } from '../variable/link';
import AboutRanobe from '../component/Ranobe/AboutRanobe';

const Ranobe = () => {
    const params = useParams()
    const [current, setCurrent] = useState(0)
    const {data: ranobe} = ranobeMoreApi.useFetchAllRanobeQuery(Number(params.id))
    let {data: role} = ranobeRoleApi.useFetchAllRanobeQuery(Number(params.id))
    let autor = role?.filter(role => role.roles[0] === 'Story')
    let art = role?.filter(role => role.roles[0] === 'Art')

    if(role) {
        role = role.filter(role => role.person !== null)
    }

    const tabLineStyles = ['tabs-line']
    if(current === 0) {
        tabLineStyles.push('block translate-x-0 w-[88px]')
    }
    if(current === 1) {
        tabLineStyles.push('block translate-x-[102px] w-[85px]')
    }
    return (
        <>
            <div className='media-background'></div>
            <img className='w-[20px] h-[20px] z-[100]' src={`https://kawai.shikimori.one${ranobe?.image.original}`} alt="" />
            <div className='pt-[225px] relative z-20 conteiner px-[15px] w-[100%] max-w-[1200px]'>
                <div className='pt-[15px] flex gap-[40px]'>
                    <div className='w-[240px] flex-shrink-0 flex gap-[17px] flex-col'>
                        <div className='relative overflow-hidden'>
                            <img className='overflow-hidden max-w-full w-full' src={`https://moe.shikimori.one${ranobe?.image.original}`} alt="" />
                            <div className='absolute bottom-0 left-0 right-0 flex pb-[5px] media-bottom-menu justify-around items-center'>
                                <FaRss className='media-sidebar-actions-item text-[22px]'/>
                                <AiFillWarning className='media-sidebar-actions-item text-[34px]'/>
                                <BsFillPlusSquareFill className='media-sidebar-actions-item text-[28px]'/>
                                <FaPencilAlt className='media-sidebar-actions-item text-[22px]'/>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                            <button className='button-primary px-[26px] w-full py-[5px] rounded-[5px] text-[14px]'>Почати читати</button>
                            <button className='bg-[#6f42c1] text-white px-[10px] w-full py-[5px] rounded-[5px] flex items-center justify-between text-[14px]'><FaFolder/> 傑作 <SlArrowDown/></button>
                        </div>
                        <div className='foreground px-[8px] py-[9px]'>
                            <AboutRanobe title='Тип' subtitle={ranobe?.kind === 'light_novel' ? 'Ранобе (LN)' : ''}/>
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
                        </div>
                    </div>
                    <div className='media-content-side'>
                        <div className='flex items-center mb-[8px]'>
                            <div className='text-white flex-1 text-left text-shadow'>
                                <div className='text-[24px] leading-[1.2] font-[600]'>
                                    {ranobe?.russian} (LN) (Новелла) 
                                </div>
                                <div className='text-[18px] font-[400]'>
                                    {ranobe?.english}
                                </div>
                            </div>
                            <div className='flex justify-end items-baseline gap-[4px]'>
                                <AiFillStar className='text-[#ffb656] text-[22px]'/>
                                <p className='text-white text-[22px] font-[600]'>{ranobe?.score}</p>
                                <p className='text-white text-[16px] opacity-[0.7]'>
                                    {ranobe?.rates_scores_stats.reduce((rate: number, initial) => {
                                        return (rate + initial.value)
                                    }, 0)}
                                </p>
                            </div>
                        </div>
                        <div className='foreground rounded-[4px]'>
                            <div className='px-[18px]'>
                                <ul className='foreground overflow-y-hidden overflow-x-auto relative text-[14px] border-b-[#] text-left list-none flex border-base'>
                                    {links.map((link, index) => 
                                        <li onClick={() => setCurrent(index)} key={link.id} className={current === index ? 'py-[13px] mr-[20px] cursor-pointer' : 'text-[#818181] media-links mr-[20px] cursor-pointer py-[13px] transition-colors'}>
                                            {link.text}
                                        </li>    
                                    )}
                                    <div className={tabLineStyles.join(' ')}>

                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ranobe;