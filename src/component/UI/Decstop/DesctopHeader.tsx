import React, { useState } from 'react';
import Account from '../../Header/Account';
import Logo from '../../Header/Logo';
import Navbar from '../../Header/Decstop/Navbar';
import Search from '../../Header/Search';

const DesctopHeader = () => {
    const [visible, setVisible] = useState<boolean>(false)

    return (
        <div className='header fixed top-0 z-40 w-full h-[70px] hidden md:hidden sm:hidden lg:flex justify-around items-center'>   
            <Logo/>
            <Navbar setVisible={setVisible}/>
            <Account/>
            <Search visible={visible} setVisible={setVisible}/>
        </div>
    );
};

export default DesctopHeader;