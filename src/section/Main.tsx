import React, { FC, useState } from 'react';
import DecstopMain from './Decstop/DesctopMain';
import MobileMain from './Mobile/MobileMain';

const Main = () => {
    const [open, setOpen] = useState<boolean>(false)

    if(window.innerWidth > 1024) {
        return <DecstopMain/>
    }
    if(window.innerWidth <= 1024) {
       return <MobileMain/>
    }

    return (
        <></>
    );
};

export default Main;