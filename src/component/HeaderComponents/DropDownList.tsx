import React, { FC } from 'react';

interface props {
    isVisible: boolean,
    children: React.ReactNode
}

const DropDownList:FC<props> = ({isVisible, children}) => {
    const baseStyles = ['tippy', 'top-[10px] opacity-0 pointer-event-none invisible']

    if(isVisible) {
        baseStyles.pop()
        baseStyles.push('top-0 opacity-[1] pointer-event-auto visible')
    }

    return (
        <div className={baseStyles.join(' ')}>
            <div className='py-[10px]'>
                {children}
            </div>
        </div>
    );
};

export default DropDownList;