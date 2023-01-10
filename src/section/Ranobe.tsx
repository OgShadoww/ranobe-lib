import React from 'react';
import { useParams } from 'react-router-dom';
import { ranobeMoreApi } from '../app/services/services';
import {FaPencilAlt, FaRss} from 'react-icons/fa'
import { AiFillWarning } from 'react-icons/ai'
import {BsFillPlusSquareFill} from 'react-icons/bs'
import {FaFolder} from 'react-icons/fa'
import {SlArrowDown} from 'react-icons/sl'

const Ranobe = () => {
    const params = useParams()

    const {data: ranobe} = ranobeMoreApi.useFetchAllRanobeQuery(Number(params.id))

    return (
        <div>
            <div className='media-background'>

            </div>
            <div className='pt-[225px] relative z-20'>
                <div className='pt-[15px] flex gap-[30px]'>
                    <div className='w-[280px] flex gap-[17px] flex-col'>
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
                    </div>
                    <div className='media-content-side'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ranobe;