import React, { FC } from 'react';
import { AiFillWechat } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ITopics } from '../../../types/ITopics';

interface props {
    item: ITopics
}

const MobileForumItem:FC<props> = ({item}) => {
    return (
        <Link to={`/${item.id}`} className='foreground p-[10px] border-light rounded-[6px] transition-colors flex gap-[20px] relative w-full'>
            <div className='flex flex-col gap-[8px] items-start w-full'>
                <div className='text-[15px] font-[600] text-primary flex justify-between w-full'>
                    {item.topic_title}
                    <div className='coment-count flex justify-center items-center gap-[8px] text-[#868e96] text-[15px]'>
                        <AiFillWechat/> {item.comments_count}
                    </div>
                </div>
                <div className='text-[13px] text-mutted text-left'>
                    {item.body.replace(/[^А-яЁё ]/g,"").slice(0, 100)}
                </div>
                <div className='flex justify-between w-full'>
                   <div className='flex gap-[8px]'>
                        <img className='w-[24px]' src={`${item.user.image.x160}`} alt="" />
                        <a className='text-link cursor-pointer hover:underline text-[14px]'>
                            {item.user.nickname}
                        </a>
                   </div>
                    <button className='bg-[#2ea3e7] px-[6px] py-[3px] h-auto font-[700] leading-[1] text-[12px] cursor-pointer rounded-[3px]'>
                        {item.forum.name}
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default MobileForumItem;