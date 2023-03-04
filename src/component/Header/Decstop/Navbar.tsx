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
            <NavbarItem to='/forum' firstIcon={<AiFillWechat className='text-white mr-[10px]'/>} text="Форум"/>
            <NavbarItem to='/faq' firstIcon={<FaQuestionCircle className='text-white mr-[10px]'/>} text="FAQ"/>
        </nav>
    );
};

export default Navbar;