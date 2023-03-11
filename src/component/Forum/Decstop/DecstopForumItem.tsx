import React, { FC } from 'react';
import { AiFillWechat } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ITopics } from '../../../types/ITopics';

interface props {
    item: ITopics
}

const DecstopForumItem:FC<props> = ({item}) => {
    return (
        <div className='foreground p-[16px] border-light rounded-[6px] transition-colors flex gap-[20px] relative pl-[110px]'>
            <div className='coment-count flex justify-center items-center gap-[10px] text-[#868e96] text-[15px] absolute top-[50%] translate-y-[-50%] left-[20px]'>
                <AiFillWechat/> {item.comments_count}
            </div>
            <div className='border-l-base pl-[16px] flex flex-col gap-[8px] items-start w-full'>
                <Link to={`/${item.id}/forum`} className='text-[15px] font-[600] text-primary hover:underline'>
                    {item.topic_title}
                </Link>
                <div className='text-[13px] text-mutted text-left'>
                    {item.body.replace(/[^А-яЁё ]/g,"").slice(0, 200)}
                </div>
                <div className='flex justify-between w-full'>
                   <div className='flex gap-[8px]'>
                        <img className='w-[28px]' src={`${item.user.image.x160}`} alt="" />
                        <a className='text-link cursor-pointer hover:underline text-[15px]'>
                            {item.user.nickname}
                        </a>
                   </div>
                    <button className='bg-[#2ea3e7] px-[6px] py-[3px] h-auto font-[700] leading-[1] text-[12px] cursor-pointer rounded-[3px]'>
                        {item.forum.name}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DecstopForumItem;