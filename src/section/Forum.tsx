import React, { useEffect, useState } from 'react';
import { forumApi, topicApi } from '../app/services/services';
import ForumMenuItem from '../component/Forum/ForumMenuItem';

const Forum = () => {
    const [forum, setForum] = useState<string>('')
    const {data:forums} = forumApi.useAllForumsApiQuery('')
    const {data: topics} = topicApi.useFetchAllRanobeQuery({limit: 6, page:3, forum: 'news'})

    const handleSetForum = (id:string) => {
        setForum(id)
    }
    useEffect(() => {
        setForum('animanga')
    }, [])

    return (
        <div className='container flex'>
            <div className='w-[210px]'>
                <div>
                    <div className='forum-popup'>

                    </div>
                    <div className='flex flex-col gap-[5px]'>
                        {forums?.map(forum => 
                            <ForumMenuItem key={forum.id} onClick={handleSetForum} text={forum.name} value={forum.permalink}/>
                        )}
                    </div>
                </div>
            </div>
            <div className='flex-1'>

            </div>
        </div>
    );
};

export default Forum;