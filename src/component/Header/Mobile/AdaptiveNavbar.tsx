import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsBellSlash, BsBookmark, BsChevronLeft } from 'react-icons/bs';
import {CgMenu, CgProfile} from 'react-icons/cg'
import { FaHome, FaQuestionCircle, FaUserAlt } from 'react-icons/fa';
import {MdOutlineMailOutline} from 'react-icons/md'
import {TfiClose} from 'react-icons/tfi'
import {TiNews} from 'react-icons/ti'
import AccountItems from '../AccountItems';
import AdaptiveNavbarItem from './AdaptiveNavbarItem';
import { AiFillSetting, AiFillWechat } from 'react-icons/ai';
import DropRightList from '../DropRightList';
import { BiUser } from 'react-icons/bi';

const AdaptiveNavbar = () => {
    const [open, setOpen] = useState(false)
    const [catalogOpen, setCatalogOpen] = useState<boolean>(false)
    const navbarMenuStyles = ['md:w-[80%] sm:w-[100%] w-[100%] h-[100vh] absolute z-[-10] adaptive-navbar top-0 py-[10px]', 'left-[-100%] top-0']
    const point = [
        {
            name:'Весь каталог',
            id:1,
            to:'/catalog'
        },
        {
            name:'Випадкова манга',
            id:2,
            to:'/random'
        }
    ]

    if(open) {
        navbarMenuStyles.pop()
        navbarMenuStyles.push('left-0 right-0 top-0 z-30')
        document.body.classList.add('overwflow-hidden')
    }
    else {
        document.body.classList.remove('overwflow-hidden')
    }

    return (
        <div>
            <CgMenu onClick={() => setOpen(true)} className='text-[22px] cursor-pointer text-white relative'/>
            <div className={navbarMenuStyles.join(' ')}>
                <div className='bg-[#141414] py-[10px] w-full flex justify-end items-center px-[20px] mb-[10px]'>
                    <TfiClose onClick={() => setOpen(false)} className='text-white text-[18px] cursor-pointer'/>
                </div>
                <div className='flex justify-around border-b-[#38383a] px-[15px] py-[24px] border-b-[1px]'>
                    <AccountItems icon={<BsBellSlash className='menu-icon'/>}/>
                    <div className='cursor-pointer ml-[3px]'>
                        <FaUserAlt className='text-[26px]'/>
                    </div>
                    <AccountItems icon={<BsBookmark className='menu-icon'/>}/>
                </div>
                <div className='flex flex-col'>
                    <AdaptiveNavbarItem onClick={() => setOpen(false)} to='/' icon={<FaHome/>} text='Головна'/>
                    <AdaptiveNavbarItem onClick={() => setOpen(false)} to='/profile' icon={<CgProfile/>} text='Профіль'/>
                    <AdaptiveNavbarItem onClick={() => setCatalogOpen(true)} iconMore={<BsChevronLeft className='absolute left-[5px] text-[#8f8e8e]'/>} icon={<GiHamburgerMenu className='text-[14px]'/>} text='Каталог'/>
                    <AdaptiveNavbarItem onClick={() => setOpen(false)} to='/forum' icon={<AiFillWechat/>} text='Форум'/>
                    <AdaptiveNavbarItem onClick={() => setOpen(false)} to='/faq' icon={<FaQuestionCircle className='text-[13px]'/>} text='FAQ'/>
                    <AdaptiveNavbarItem onClick={() => setOpen(false)} to='/news' icon={<TiNews />} text='Новини'/>
                    <AdaptiveNavbarItem onClick={() => setOpen(false)} to='/contact' icon={<MdOutlineMailOutline />} text='Контакти'/>
                    <AdaptiveNavbarItem onClick={() => setOpen(false)} to='/settings' icon={<AiFillSetting />} text='Налаштування'/>
                </div>
            </div>
            <DropRightList setNavOpen={setOpen} setIsOpen={setCatalogOpen} isOpen={catalogOpen} icon={<GiHamburgerMenu/>} point={point} name="Каталог"/>
        </div>
    );
};

export default AdaptiveNavbar;