import React, { FC, ReactNode } from 'react';
import { IconType } from 'react-icons';
import { IconBaseProps } from 'react-icons/lib';
import { Link } from 'react-router-dom';

interface props {
    firstIcon: any,
    text: string,
    onClick?: () => void,
    to?: string
}

const NavbarItem:FC<props> = ({firstIcon, text, onClick, to}) => {
    if(to) {
        return (
            <Link to={to} onClick={onClick} className='flex justify-start items-center mr-[10px] last:mr-0 cursor-pointer px-[13px] py-[10px] header-hover'>
                {firstIcon}
                <p className='font-bold text-[16px] text-white'>{text}</p>
            </Link>
        )
    }

    return (
        <div onClick={onClick} className='flex justify-start items-center mr-[10px] last:mr-0 cursor-pointer px-[13px] py-[10px] header-hover'>
            {firstIcon}
            <p className='font-bold text-[16px] text-white'>{text}</p>
        </div>
    );
};

export default NavbarItem;