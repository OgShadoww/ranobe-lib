import React, { useEffect, useState } from 'react';
import { forumApi, topicApi } from '../../app/services/services';
import DecstopForumItem from '../../component/Forum/Decstop/DecstopForumItem';
import ForumMenuItem from '../../component/Forum/ForumMenuItem';

const DecstopForum = () => {
    const [stateForum, setStateForum] = useState<string>('')
    const [page, setPage] = useState<number>(1)
    const {data:forums} = forumApi.useAllForumsApiQuery('')
    const {data: topics} = topicApi.useFetchAllRanobeQuery({limit: 6, page:page, forum: stateForum})

    const handleSetForum = (id:string) => {
        setStateForum(id)
    }
    useEffect(() => {
        setStateForum('animanga')
    }, [])

    return (
        <div className='container flex gap-[20px]'>
            <div className='w-[210px]'>
                <div>
                    <div className='forum-popup'>

                    </div>
                    <div className='flex flex-col gap-[5px]'>
                        {forums?.map(forum => 
                            <ForumMenuItem key={forum.id} forum={stateForum} onClick={handleSetForum} text={forum.name} value={forum.permalink}/>
                        )}
                    </div>
                </div>
            </div>
            <div className='flex-1'>
                {topics !== undefined ?
                    <div className='flex flex-col gap-[20px]'>
                        {topics.map(topic => 
                        <DecstopForumItem item={topic}/>  
                        )}
                    </div>
                :
                    'div'
                }
            </div>
        </div>
    );
};

export default DecstopForum;