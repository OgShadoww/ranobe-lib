import React, { FC, useEffect, useState } from 'react';
import { useTheme } from '../../app/hook/useTheme';
import DesctopHeader from './Decstop/DesctopHeader';
import MobilleHeader from './Mobile/MobilleHeader';


const Header:FC = () => {        
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