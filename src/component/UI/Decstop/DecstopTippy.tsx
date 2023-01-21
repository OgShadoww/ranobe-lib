import React, { FC } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { IRanobe } from '../../../types/RanobeType';

interface props {
    ranobe: IRanobe,
    isVisible: boolean
}

const Tippy:FC<props> = ({ranobe, isVisible}) => {

    return (
        <div className={isVisible ? 'tippy-box translate-x-0 transition-all' : 'tippy-box translate-x-[-10%] pointer-events-none opacity-0 transition-all'}>
            <div className='outline-none relative rounded-[4px] text-[14px] leading-[1.4] tippy-bg'>
                <div className='px-[15px] py-[10px] relative transition-all'>
                    <div className='flex flex-col gap-[20px] px-[5px] py-[10px] min-w-[280px]'>
                        <div className='flex flex-col justify-start items-start'>
                            <h1 className='font-[500] text-[15px] text-left'>
                                {ranobe.name}
                            </h1>
                            <h3 className='font-[400] text-[13px] text-left text-mutted'>
                                {ranobe.russian}
                            </h3>
                        </div>  
                        <div className='flex flex-col gap-[5px]'>
                            <div className='flex gap-[5px]'>
                                <strong>Дата релізу:</strong> <p className='text-[#74c0c8]'>{ranobe.aired_on.slice(0, 4)}</p>
                            </div>
                        </div>
                        <div className='border-b-[2px] border-t-[2px] border-t-[#212a30] border-b-[#212a30] py-[10px] text-left flex gap-[10px]'>
                            <div className='flex'>
                                <AiFillStar className='text-[#ffb656] text-[22px]'/>
                                <AiFillStar className='text-[#ffb656] text-[22px]'/>
                                <AiFillStar className='text-[#ffb656] text-[22px]'/>
                                <AiFillStar className='text-[#ffb656] text-[22px]'/>
                                <AiFillStar className='text-[#ffb656] text-[22px]'/>
                            </div>
                            <div className='font-[700] text-[16px] leading-[20px]'>
                                {ranobe.score}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tippy;