import React, { FC, useState } from 'react';
import { BsMoon, BsSearch } from 'react-icons/bs';
import { useTheme } from '../../app/hook/useTheme';
import Account from '../HeaderComponents/Account';
import AccountItems from '../HeaderComponents/AccountItems';
import AdaptiveNavbar from '../HeaderComponents/AdaptiveNavbar';
import Logo from '../HeaderComponents/Logo';
import Navbar from '../HeaderComponents/Navbar';
import Search from '../HeaderComponents/Search';


const Header:FC = () => {
    const [visible, setVisible] = useState<boolean>(false)
    const {theme, setTheme} = useTheme()

    const handleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
        <>
            <div className='header fixed top-0 z-40 w-full h-[70px] hidden md:hidden sm:hidden lg:flex justify-around items-center'>   
                <Logo/>
                <Navbar setVisible={setVisible}/>
                <Account/>
            </div>
            <div className='header fixed top-0 z-40 w-full h-[70px] flex lg:hidden md:flex sm:flex justify-between items-center px-[20px]'>   
                <AdaptiveNavbar/>
                <div className='flex items-center justify-center'>
                    <AccountItems icon={<BsMoon className='text-white'/>} onClick={() => handleTheme()}/>
                    <AccountItems onClick={() => setVisible(true)} icon={<BsSearch className='text-white'/>}/>
                </div>
            </div>
            <Search setVisible={setVisible} visible={visible}/>
        </>
    );
};

export default Header;