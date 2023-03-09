import React from 'react';
import DecstopAboutForum from '../component/Forum/Decstop/DecstopAboutForum';
import MobileAboutForum from '../component/Forum/Mobile/MobileAboutForum';

const AboutForum = () => {
    if(window.innerWidth >= 1024) {
        return (
            <DecstopAboutForum/>
        )
    }
    if(window.innerWidth < 1024) {
        return (
            <MobileAboutForum/>
        )
    }
    return (
        <></>
    );
};

export default AboutForum;