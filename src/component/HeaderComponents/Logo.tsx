import React, { ImgHTMLAttributes } from 'react';
import { Link } from 'react-router-dom'
import Main from '../../section/Main';


const Logo = () => {
    return (
        <Link to="/ranobe-lib">
            <div className='flex justify-center items-end hover:bg-opacity-[0.2]'>
                <img className='w-40% hover:bg-opacity-5' src="https://ranobelib.me/images/ranobe.png?435" alt="" />
            </div>
        </Link>
    );
};

export default Logo;