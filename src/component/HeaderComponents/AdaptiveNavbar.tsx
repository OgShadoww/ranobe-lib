import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsBellSlash, BsBookmark, BsChevronLeft } from 'react-icons/bs';
import {CgMenu, CgProfile} from 'react-icons/cg'
import { FaHome, FaQuestionCircle } from 'react-icons/fa';
import {MdOutlineMailOutline} from 'react-icons/md'
import {TfiClose} from 'react-icons/tfi'
import {TiNews} from 'react-icons/ti'
import AccountItems from './AccountItems';
import AdaptiveNavbarItem from './AdaptiveNavbarItem';
import { AiFillWechat } from 'react-icons/ai';

const AdaptiveNavbar = () => {
    const [open, setOpen] = useState(false)

    const navbarMenuStyles = ['md:w-[80%] sm:w-[100%] w-[100%] h-[100vh] absolute z-[-10] adaptive-navbar top-0 py-[10px]', 'left-[-100%] top-0']

    if(open) {
        navbarMenuStyles.pop()
        navbarMenuStyles.push('left-0 right-0 top-0 z-30')
    }

    return (
        <div>
            <CgMenu onClick={() => setOpen(true)} className='text-[22px] cursor-pointer text-white relative'/>
            <div className={navbarMenuStyles.join(' ')}>
                <div className='bg-[#141414] py-[10px] w-full flex justify-end items-center px-[20px] mb-[10px]'>
                    <TfiClose onClick={() => setOpen(false)} className='text-white text-[18px] cursor-pointer'/>
                </div>
                <div className='flex items-center justify-around mb-[20px]'>
                    <AccountItems icon={<BsBellSlash/>}/>
                    <div className='cursor-pointer ml-[3px]'>
                        <img className='w-[70px] rounded-[4px]' src="https://ranobelib.me/uploads/users/3899409/cH6MOt7Uqy0e.jpg" alt="" />
                    </div>
                    <AccountItems icon={<BsBookmark/>}/>
                </div>
                <div className='flex flex-col'>
                    <AdaptiveNavbarItem onClick={() => setOpen(false)} to='/ranobe-lib' icon={<FaHome/>} text='Головна'/>
                    <AdaptiveNavbarItem onClick={() => setOpen(false)} to='/ranobe-lib' icon={<CgProfile/>} text='Профіль'/>
                    <AdaptiveNavbarItem iconMore={<BsChevronLeft className='absolute left-[5px] text-[#8f8e8e]'/>} icon={<GiHamburgerMenu className='text-[14px]'/>} text='Каталог'/>
                    <AdaptiveNavbarItem to='/ranobe-lib/forum' icon={<AiFillWechat/>} text='Форум'/>
                    <AdaptiveNavbarItem to='/ranobe-lib/faq' icon={<FaQuestionCircle className='text-[13px]'/>} text='FAQ'/>
                    <AdaptiveNavbarItem to='/ranobe-lib/news' icon={<TiNews />} text='Новини'/>
                    <AdaptiveNavbarItem to='/ranobe-lib/contact' icon={<MdOutlineMailOutline />} text='Контакти'/>
                </div>
            </div>
        </div>
    );
};

export default AdaptiveNavbar;