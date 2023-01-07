import React, { FC } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { ITopics } from '../../types/ITopics';

interface props {
    items: ITopics,
}

const MainTopicsItem:FC<props> = ({items}) => {
    return (
        <div className='flex justify-center items-start flex-col w-full mb-[10px] last:mb-0'>
            <a className='text-[13px] hover:underline text-left forum-title cursor-pointer'>{items.topic_title}</a>
            <div className='flex items-center news-item text-[12px]'>
                <FaUserAlt className='mr-[5px]'/>
                <p>{items.user.nickname}</p>
            </div>
        </div>
    );
};

export default MainTopicsItem;