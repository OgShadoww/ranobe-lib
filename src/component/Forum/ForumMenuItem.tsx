import React, { FC } from 'react';

interface props {
    text: string,
    value: string,
    onClick: (id: string) => void
}

const ForumMenuItem:FC<props> = ({text, value, onClick}) => {
    return (
        <div onClick={() => onClick(value)} className='py-[7px] px-[6px] pl-[30px] text-left cursor-pointer light-hover text-[14px] transition-colors rounded-[4px]'>
            {text}
        </div>
    );
};

export default ForumMenuItem;