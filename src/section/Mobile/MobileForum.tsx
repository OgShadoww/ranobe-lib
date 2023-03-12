import React, { useEffect, useState } from 'react';
import { forumApi, topicApi } from '../../app/services/services';
import ForumMenuItem from '../../component/Forum/ForumMenuItem';
import MobileForumItem from '../../component/Forum/Mobile/MobileForumItem';

const MobileForum = () => {
    const [stateForum, setStateForum] = useState<string>('')
    const [visible, setVisible] = useState<boolean>(false)
    const [page, setPage] = useState<number>(1)
    const {data:forums} = forumApi.useAllForumsApiQuery('')
    const {data: topics} = topicApi.useFetchAllRanobeQuery({limit: 6, page:page, forum: stateForum})

    const handleSetForum = (id:string) => {
        setStateForum(id)
    }
    useEffect(() => {
        setStateForum('animanga')
    }, [])
    useEffect(() => {
        if(visible) {
            document.body.classList.add('overflow-hidden')
        }
        else {
            document.body.classList.remove('overflow-hidden')
        }
    }, [visible])

    return (
        <div className='container flex gap-[20px]'>
            <div className='flex-1 pt-[20px] px-[10px] pb-[20px]'>
                {topics !== undefined ?
                    <div className='flex flex-col gap-[20px]'>
                        {topics.map(topic => 
                            <MobileForumItem key={topic.id} item={topic}/>  
                        )}
                    </div>
                :
                    'div'
                }
            </div>
            <div onClick={() => setVisible(false)} className={visible ? 'fixed bg-[#00000073] w-full h-full inset-0 transition-all duration-[0.3s] z-[70000]' : 'w-full h-full transition-all duration-[0.3s] absolute pointer-events-none opacity-0'}>
                <div onClick={(e) => e.stopPropagation()} className={visible ? 'background-dropdown bottom-0 left-0 right-0 absolute translate-y-[0] z-[70000] transition-all duration-[0.3s]' : 'background-dropdown bottom-0 left-0 right-0 absolute translate-y-[100%] z-[7000] transition-all duration-[0.3s]'}>
                    {forums?.map(forum => 
                        <ForumMenuItem key={forum.id} forum={stateForum} onClick={handleSetForum} text={forum.name} value={forum.permalink}/>
                    )}
                </div>
            </div>
            <div className='fixed bottom-0 left-0 z-[600] p-[10px] w-full dropdown-background flex justify-center items-center gap-[20px]'>
                <button onClick={() => setVisible(true)} className='min-h-[16px] h-[32px] px-[16px] leading-[32px] text-[14px] font-[600] text-center rounded-[4px] border-none cursor-pointer button-default-bg flex-1'>
                    Всі категорії
                </button>
                <button className='min-h-[16px] h-[32px] px-[16px] leading-[32px] text-[14px] font-[600] text-center rounded-[4px] border-none cursor-pointer button-primary flex-1'>
                    Створити тему
                </button>
            </div>
        </div>
    );
};

export default MobileForum;