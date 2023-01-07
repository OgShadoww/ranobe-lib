import React, { FC } from 'react';

interface props {
    title: string,
    children: React.ReactNode
}

const MainRightWrapper:FC<props> = ({title, children}) => {
    return (
        <div className='main-wrapper-padding-out'>
            <h3 className='font-semibold text-left text-[15px] border-b-[#40abe9] border-b-[2px] w-full mb-[20px]'>
                <span className='px-[10px] py-[14px] block'>{title}</span>
            </h3>
            {children}
        </div>
    );
};

export default MainRightWrapper;