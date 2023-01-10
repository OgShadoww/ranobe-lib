import React, { FC, useEffect, useState } from 'react';
import { BsMoon, BsSearch } from 'react-icons/bs';
import { useTheme } from '../../app/hook/useTheme';
import Account from '../HeaderComponents/Account';
import AccountItems from '../HeaderComponents/AccountItems';
import AdaptiveNavbar from '../HeaderComponents/AdaptiveNavbar';
import Logo from '../HeaderComponents/Logo';
import Navbar from '../HeaderComponents/Navbar';
import Search from '../HeaderComponents/Search';
import DesctopHeader from './DesctopHeader';
import MobilleHeader from './MobilleHeader';


const Header:FC = () => {
    const [visible, setVisible] = useState<boolean>(false)
    const {theme, setTheme} = useTheme()
    const [show, setShow] = useState(false)
    
    const handleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

        
    if(window.innerWidth > 1024) {
        return <DesctopHeader/>
    }
    if(window.innerWidth <= 1024) {
       return <MobilleHeader/>
    }

    return (
        <>
            
        </>
    );
};

export default Header;