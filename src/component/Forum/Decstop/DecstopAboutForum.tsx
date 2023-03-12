import React from 'react';
import { AiFillWechat } from 'react-icons/ai';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { forumMoreApi } from '../../../app/services/services';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const DecstopAboutForum = () => {
    const params = useParams()
    const {data: topic} = forumMoreApi.useAllForumsApiQuery(Number(params.id))

    return (
        <>
            {topic !== undefined ?
                <div className='background-background px-[80px] py-[20px] flex flex-col justify-start items-start text-left w-full gap-[10px]'>
                    <Link className='font-[600] flex gap-[6px] items-center justify-center text-[14px] text-mutted' to='/forum'>
                        <IoMdArrowRoundBack/>
                        Назад
                    </Link>
                    <div className='flex justify-center items-center gap-[20px]'>
                        <div className='flex justify-center items-center gap-[6px]'>
                            <img className='w-[26px] rounded-[50%]' src={`${topic?.user.image.x160}`} alt="" />
                            <a className='cursor-pointer hover:underline text-[14px]'>
                                {topic?.user.nickname}
                            </a>
                        </div>
                        <div className='text-[14px]'>
                            {topic?.created_at.slice(0, 4)} рік
                        </div>
                        <div>
                            <div className='coment-count flex justify-center items-center gap-[4px] text-[#868e96] text-[15px]'>
                                <AiFillWechat/> {topic?.comments_count}
                            </div>
                        </div>
                    </div>
                    <h2 className='font-[600] text-[22px]'>
                        {topic?.topic_title}
                    </h2>
                    <div className='text-[14px] text-left'>
                        {topic?.body.replace(/[^А-яЁё ]/g,"")}
                    </div>
                    {topic.linked ?
                        <div className='foreground min-w-[360px] flex items-center justify-center relative'>
                            <img className='w-[64px]' src={`https://kawai.shikimori.one/${topic.linked.image.preview}`} alt="" />
                            <div className='flex-1 gap-[4px] p-[10px] flex flex-col text-left'>
                                <div className='text-[13px] text-secondary'>
                                    {
                                        topic.linked.kind === 'tv' ? "Зв'язанно з аніме" :
                                        topic.linked.kind === 'ona' ? "Зв'язанно з аніме" :
                                        topic.linked_type === 'Character' ? "Зв'язанно з персонажем" :
                                        topic.linked_type === 'Contest' ? "Зв'язанно з контестом" :
                                        topic.linked.kind === 'manga' ? "Зв'язанно з мангою" :
                                        topic.linked.kind === 'ranobe' ? "Зв'язанно з ранобе" : ''
                                    }
                                </div>
                                <div className='text-[15px] font-[700] text-primary'>
                                    {topic.linked.russian}
                                </div>
                            </div>
                        </div>
                    :
                        ''
                    }
                </div>
            :
                <Loader inline />
            }
        </>
    );
};

export default DecstopAboutForum;