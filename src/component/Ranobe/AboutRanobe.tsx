import React, { FC } from 'react';

interface props {
    title: string,
    subtitle: string | undefined | any,
    type: string
}

const AboutRanobe:FC<props> = ({title, subtitle, type}) => {
    if(type === 'decstop') {
        return (
            <div className='px-[8px] py-[4px] w-full rounded-[3px] cursor-pointer block text-left light-hover'>
                <div className='text-[12px] min-w-[140px] text-mutted'>
                    {title}
                </div>
                <div className='overflow-hidden text-[14px]'>
                    {subtitle}
                </div>
            </div>
        );
    }
    else {
        return (
            <div className='flex flex-wrap leading-[23px] px-[8px] py-[4px] w-full rounded-[3px] cursor-pointer text-left light-hover'>
                <div className='text-[14px] min-w-[120px] text-mutted'>
                    {title}
                </div>
                <div className='overflow-hidden text-[14px]'>
                    {subtitle}
                </div>
            </div>
        );
    }

    return (
        <>

        </>
    );
};

export default AboutRanobe;