import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface props {
    icon?: any,
    text: string,
    to: string
}

const DropDownListItem:FC<props> = ({icon, text, to}) => {
    return (
        <Link to={to} className='min-w-[160px] px-[10px] py-[8px] flex items-center rounded-[4px] text-[14px] mx-[8px] text-primary gap-[10px] font-[500] leading-[1] mb-[10px] cursor-pointer light-hover'>
            {icon}
            {text}
        </Link>
    );
};

export default DropDownListItem;