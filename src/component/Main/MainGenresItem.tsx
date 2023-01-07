import React, { FC } from 'react';

interface props {
    text: string
}

const MainGenresItem:FC<props> = ({text}) => {
    return (
        <a className='genres-item cursor-pointer text-[14px]'>
            {text}
        </a>
    );
};

export default MainGenresItem;