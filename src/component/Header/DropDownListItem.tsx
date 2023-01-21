import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface props {
    icon?: any,
    text: string,
    to?: string,
    onClick?: () => void
}

const DropDownListItem:FC<props> = ({icon, text, to, onClick}) => {
    if(to) {
        return (
            <Link onClick={onClick} to={to} className='min-w-[160px] px-[10px] py-[8px] flex items-center rounded-[4px] text-[14px] mx-[8px] text-primary gap-[10px] font-[500] leading-[1] mb-[10px] cursor-pointer light-hover'>
                {icon}
                {text}
            </Link>
        )
    }

    return (
        <div onClick={onClick} className='min-w-[140px] px-[10px] py-[8px] flex items-center rounded-[4px] text-[14px] mx-[8px] text-primary gap-[10px] font-[500] leading-[1] mb-[10px] cursor-pointer light-hover'>
            {icon}
            {text}
        </div>
    );
};

export default DropDownListItem;