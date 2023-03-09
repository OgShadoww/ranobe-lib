import React from 'react';
import DecstopForum from './Decstop/DecstopForum';
import MobileForum from './Mobile/MobileForum';

const Forum = () => {
    if(window.innerWidth > 1024) {
        return <DecstopForum/>
    }
    if(window.innerWidth <= 1024) {
       return <MobileForum/>
    }
    return (
        <></>
    );
};

export default Forum;