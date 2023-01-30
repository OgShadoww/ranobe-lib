import React, { useState } from 'react';
import {FaPencilAlt, FaUser} from 'react-icons/fa'
import {BsBellSlash, BsFillBellFill, BsFillBookmarkFill} from 'react-icons/bs'
import {BsBookmark} from 'react-icons/bs'
import {BsMoon} from 'react-icons/bs'
import {RiInstagramFill} from 'react-icons/ri'
import AccountItems from './AccountItems';
import { useTheme } from '../../app/hook/useTheme';
import DropDownList from './DropDownList';
import DropDownListItem from './DropDownListItem';
import { AiFillSetting } from 'react-icons/ai';
import {SiTelegram} from 'react-icons/si'

const Account = () => {
    const {theme, setTheme} = useTheme()

    const handleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    const [visible, setVisible] = useState(false)

    return (
        <div className='text-white flex justify-center items-center relative'>
            <AccountItems icon={<FaPencilAlt/>}/>
            <AccountItems icon={<BsBellSlash/>}/>
            <AccountItems icon={<BsBookmark/>}/>
            <AccountItems icon={<BsMoon/>} onClick={() => handleTheme()}/>
            <div onClick={() => setVisible(!visible)} className='cursor-pointer ml-[3px]'>
                <img className='w-[40px] rounded-[4px]' src="https://ranobelib.me/uploads/users/3899409/cH6MOt7Uqy0e.jpg" alt="" />
            </div>
            <DropDownList isVisible={visible}>
                <DropDownListItem to='/profile' icon={<FaUser className='text-[14px]'/>} text='Профіль'/>
                <DropDownListItem to='/' icon={<BsFillBookmarkFill className='text-[13px]'/>} text='Мої закладки'/>
                <DropDownListItem to='/message' icon={<BsFillBellFill className='text-[15px]'/>} text='Повідомлення'/>
                <div className='h-[1px] m-[8px] border-bottom-base overflow-hidden'></div>
                <DropDownListItem to='/settings' icon={<AiFillSetting className='text-[14px]'/>} text='Налаштування'/>
                <div className='h-[1px] m-[8px] border-bottom-base overflow-hidden'></div>
                <div className='text-center text-secondary text-[12px] mx-[10px] mb-[5px]'>
                    Соц. мережі
                </div>
                <div className='px-[10px] flex gap-[5px]'>
                    <a className='text-[20px] rounded-[4px] flex justify-center items-center instagram-bg h-[26px] hover:text-white text-white px-[12px] min-h-[16px] font-[600] flex-1' href="https://www.instagram.com/orest_galenza/">
                        <RiInstagramFill/>
                    </a>
                    <a className='text-[20px] rounded-[4px] flex justify-center items-center bg-[#2AABEE] h-[26px] hover:text-white text-white px-[12px] min-h-[16px] font-[600] flex-1' href="https://OG_shadoww.t.me">
                        <SiTelegram/>
                    </a>
                </div>
            </DropDownList>
        </div>
    );
};

export default Account;