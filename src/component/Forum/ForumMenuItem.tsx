import React, { FC } from 'react';

interface props {
    text: string,
    value: string,
    forum: string,
    onClick: (id: string) => void
}

const ForumMenuItem:FC<props> = ({text, value, onClick, forum}) => {
    return (
        <div onClick={() => onClick(value)} className={forum === value ? 'py-[7px] px-[6px] pl-[30px] text-left cursor-pointer light-hover text-[14px] transition-colors rounded-[4px] foreground' : 'py-[7px] px-[6px] pl-[30px] text-left cursor-pointer light-hover text-[14px] transition-colors rounded-[4px]'}>
            {text}
        </div>
    );
};

export default ForumMenuItem;