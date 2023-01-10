import React, { FC, useState } from 'react';
import DecstopMain from './DesctopMain';
import MobileMain from './MobileMain';

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