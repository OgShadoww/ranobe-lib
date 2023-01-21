import React, { FC } from 'react';
import {AiOutlineAlignLeft} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import {AiFillWechat} from 'react-icons/ai'
import {FaQuestionCircle} from 'react-icons/fa'
import NavbarItem from './NavbarItem';
import Search from '../Search';

    interface props {
        setVisible: any
    }

    const Navbar:FC<props> = ({setVisible}) => {
    return (
        <nav className='flex justify-between items-end'>
            <NavbarItem to='/catalog' firstIcon={<AiOutlineAlignLeft className='text-white mr-[10px]'/>} text="Каталог"/>
            <NavbarItem onClick={() => setVisible(true)} firstIcon={<BsSearch className='text-white mr-[10px]'/>} text="Пошук"/>
            <NavbarItem firstIcon={<AiFillWechat className='text-white mr-[10px]'/>} text="Форум"/>
            <div className='flex justify-start items-center mr-[20px] last:mr-0 cursor-pointer px-[13px] py-[10px] header-hover'>
                <FaQuestionCircle className='text-white mr-[10px]'/>
                <p className='font-bold text-[16px] text-white'>FAQ</p>
            </div>
        </nav>
    );
};

export default Navbar;