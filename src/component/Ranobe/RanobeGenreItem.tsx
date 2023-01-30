import React, { FC } from 'react';

interface props {
    text: string
}

const RanobeGenreItem:FC<props> = ({text}) => {
    return (
        <div className='background-fill-4 border-base text-2 px-[10px] py-[5px] rounded-[4px] text-[13px] leading-[14px] cursor-pointer transition-colors genre-item-hover'>
            {text}
        </div>
    );
};

export default RanobeGenreItem;