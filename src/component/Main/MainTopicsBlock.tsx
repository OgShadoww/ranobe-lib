import React, { FC } from 'react';
import { topicApi } from '../../app/services/services';
import MainTopicsItem from './MainTopicsItem';

interface props {
    title: string,
    type: string
}

const MainForumBlock:FC<props> = ({title, type}) => {
    const {data: topics} = topicApi.useFetchAllRanobeQuery({limit: 3, forum: type})

    return (
        <div className='main-wrapper flex-[2] flex flex-col justify-start items-start'>
            <h3 className='font-semibold text-[17px] mb-[10px]'>{title}</h3>
            {topics?.map(topic =>
                <MainTopicsItem key={topic.id} items={topic}/> 
            )}
        </div>
    );
};

export default MainForumBlock;