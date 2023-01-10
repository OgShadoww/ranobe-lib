import React, { useState } from 'react';
import { BsMoon, BsSearch } from 'react-icons/bs';
import { useTheme } from '../../app/hook/useTheme';
import AccountItems from '../HeaderComponents/AccountItems';
import AdaptiveNavbar from '../HeaderComponents/AdaptiveNavbar';
import Search from '../HeaderComponents/Search';

const MobilleHeader = () => {
    const [visible, setVisible] = useState<boolean>(false)
    const {theme, setTheme} = useTheme()
    const [show, setShow] = useState(false)

    const handleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    return (
        <div className='header fixed top-0 z-40 w-full h-[70px] flex lg:hidden md:flex sm:flex justify-between items-center pl-[20px] pr-[5px]'>   
            <AdaptiveNavbar/>
            <div className='flex items-center justify-center'>
                <AccountItems icon={<BsMoon className='text-white'/>} onClick={() => handleTheme()}/>
                <AccountItems onClick={() => setVisible(true)} icon={<BsSearch className='text-white'/>}/>
            </div>
            <Search visible={visible} setVisible={setVisible}/>
        </div>
    );
};

export default MobilleHeader;