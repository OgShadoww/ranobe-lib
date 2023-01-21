import React, { FC } from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { IPointsCatalog } from '../../types/IPointsCatalog';
import AdaptiveNavbarItem from './Mobile/AdaptiveNavbarItem';

interface props {
    isOpen: boolean,
    setIsOpen: any,
    name:string,
    icon: any,
    point: IPointsCatalog[]
}

const DropRightList:FC<props> = ({isOpen, setIsOpen, name, icon, point}) => {
    const navbarMenuStyles = ['w-[100%] h-[100vh] absolute z-[-10] adaptive-navbar top-0 py-[10px]', 'left-[-100%] top-0 opacity-0']

    if(isOpen) {
        navbarMenuStyles.pop()
        navbarMenuStyles.push('left-0 right-0 top-0 z-[100000]')
        document.body.classList.add('overwflow-hidden')
    }
    else {
        document.body.classList.remove('overwflow-hidden')
        navbarMenuStyles.pop()
        navbarMenuStyles.push('left-[-100%]')
    }

    return (
        <div className={navbarMenuStyles.join(' ')}>
            <div className='text-center items-center justify-center gap-[10px] flex mb-[10px] px-[20px] py-[10px] text-[22px]'>
                {icon}
                {name}
            </div>
            <div className='bg-[#141414] py-[10px] w-full flex justify-between items-center px-[20px] mb-[10px]'>
                <span className='text-white'>Назад</span>
                <BsFillArrowRightCircleFill onClick={() => setIsOpen(false)} className='text-white'/>
            </div>
            <div>
                {point.map(point =>
                    <AdaptiveNavbarItem onClick={() => setIsOpen(false)} key={point.id} to={point.to} text={point.name}/>    
                )}
            </div>
        </div>
    );
};

export default DropRightList;