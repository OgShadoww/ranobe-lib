import React, { FC } from 'react';

interface props {
    title: string,
    subtitle: string | undefined | any
}

const AboutRanobe:FC<props> = ({title, subtitle}) => {
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
};

export default AboutRanobe;