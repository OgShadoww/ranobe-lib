import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface props {
    text: string,
    iconMore?: any,
    icon?: any,
    to?: string,
    onClick?: () => void
} 

const AdaptiveNavbarItem:FC<props> = ({text, icon, iconMore, to, onClick}) => {
    if(to) {
        return (
            <Link onClick={onClick} to={to} className='adaptive-navbar-item hover:text-[#fff]'>
                {icon}
                <span className='font-semibold text-[16px]'>{text}</span>
            </Link>
        )
    }

    return (
        <div onClick={onClick} className='adaptive-navbar-item cursor-pointer'>
            {iconMore}
            {icon}
            <span className='font-semibold text-[16px]'>{text}</span>
        </div>
    );
};

export default AdaptiveNavbarItem;