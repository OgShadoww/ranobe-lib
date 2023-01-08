import React, { FC } from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import AdaptiveNavbarItem from './AdaptiveNavbarItem';

interface props {
    isOpen: boolean,
    name:string,
    icon: any,
    point: [string]
}

const DropRightList:FC<props> = ({isOpen, name, icon, point}) => {
    const navbarMenuStyles = ['w-[100%] h-[100vh] absolute z-[-10] adaptive-navbar top-0 py-[10px]', 'left-[-100%] top-0']

    if(isOpen) {
        navbarMenuStyles.pop()
        navbarMenuStyles.push('left-0 right-0 top-0 z-30')
    }

    return (
        <div className='adaptive-navbar w-[100%] h-[100%] absolute'>
            <div className='text-center text-[22px]'>
                {icon}
                {name}
            </div>
            <div className='bg-[#141414] py-[10px] w-full flex justify-between items-center px-[20px] mb-[10px]'>
                <span className='text-white'>Назад</span>
                <BsFillArrowRightCircleFill className='text-white'/>
            </div>
            <div>
                {point.map(point =>
                    <AdaptiveNavbarItem text={point}/>    
                )}
            </div>
        </div>
    );
};

export default DropRightList;