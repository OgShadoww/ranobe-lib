import React from 'react';
import {FaPencilAlt} from 'react-icons/fa'
import {BsBellSlash} from 'react-icons/bs'
import {BsBookmark} from 'react-icons/bs'
import {BsMoon} from 'react-icons/bs'
import AccountItems from './AccountItems';
import { useTheme } from '../../app/hook/useTheme';

const Account = () => {
    const {theme, setTheme} = useTheme()

    const handleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
        <div className='text-white flex justify-center items-center'>
            {/* <div className='px-[13px] py-[10px] header-hover'>
                <FaPencilAlt/>
            </div> */}
            <AccountItems icon={<FaPencilAlt/>}/>
            <AccountItems icon={<BsBellSlash/>}/>
            <AccountItems icon={<BsBookmark/>}/>
            <AccountItems icon={<BsMoon/>} onClick={() => handleTheme()}/>
            <div className='cursor-pointer ml-[3px]'>
                <img className='w-[40px] rounded-[4px]' src="https://ranobelib.me/uploads/users/3899409/cH6MOt7Uqy0e.jpg" alt="" />
            </div>
        </div>
    );
};

export default Account;