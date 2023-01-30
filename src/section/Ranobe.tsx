import React from 'react';
import DecstopRanobe from './Decstop/DecstopRanobe';
import MobileRanobe from './Mobile/MobileRanobe';

const Ranobe = () => {
    if(window.innerWidth > 1024) {
        return <DecstopRanobe/>
    }
    if(window.innerWidth <= 1024) {
       return <MobileRanobe/>
    }

    return (
        <></>
    );
};

export default Ranobe;