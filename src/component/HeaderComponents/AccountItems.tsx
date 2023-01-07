import React, { FC } from 'react';

interface props {
    icon: any,
    onClick?: () => void
}

const AccountItems:FC<props> = ({icon, onClick}) => {
    return (
        <div onClick={onClick} className='px-[13px] py-[10px] header-hover mr-[7px] cursor-pointer'>
            {icon}
        </div>
    );
};

export default AccountItems;