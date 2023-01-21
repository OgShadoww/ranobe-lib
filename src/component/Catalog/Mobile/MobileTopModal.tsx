import React, { FC } from 'react';

interface props {
    isVisible: boolean,
    setIsVisible: any,
    children: React.ReactNode
}

const MobileTopModal:FC<props> = ({isVisible, children, setIsVisible}) => {
    const baseStyles = ['modal-inner']
    const contentStyles = ['modal-content z-[10] foreground']

    if(isVisible) {
        baseStyles.push('modal-inner-backgorund-open')
        contentStyles.push('bottom-0')
        document.body.classList.add('overwflow-hidden')
    }
    else {
        baseStyles.push('modal-inner-backgorund-close pointer-events-none')
        contentStyles.push('bottom-[-50%] opacity-1')
        document.body.classList.remove('overwflow-hidden')
    }

    return (
        <div onClick={() => setIsVisible(false)} className={baseStyles.join(' ')}>
            <div onClick={(e) => e.stopPropagation()} className={contentStyles.join(' ')}>
                {children}
            </div>
        </div>
    );
};

export default MobileTopModal;