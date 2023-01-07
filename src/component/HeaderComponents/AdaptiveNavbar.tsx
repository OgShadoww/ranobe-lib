import React, { useState } from 'react';
import {CgMenu} from 'react-icons/cg'
import {TfiClose} from 'react-icons/tfi'

const AdaptiveNavbar = () => {
    const [open, setOpen] = useState(false)

    const navbarMenuStyles = ['md:w-[80%] sm:w-[100%] w-[100%] h-[100vh] absolute z-[-10] adaptive-navbar top-0 py-[10px]', 'left-[-100%] top-0']

    if(open) {
        navbarMenuStyles.pop()
        navbarMenuStyles.push('left-0 right-0 top-0 z-30')
    }

    return (
        <div>
            <CgMenu onClick={() => setOpen(true)} className='text-[22px] cursor-pointer text-white'/>
            <div className={navbarMenuStyles.join(' ')}>
                <div className='bg-[#141414] py-[10px] w-full flex justify-end items-center px-[20px]'>
                    <TfiClose onClick={() => setOpen(false)} className='text-white text-[18px] cursor-pointer'/>
                </div>
            </div>
        </div>
    );
};

export default AdaptiveNavbar;