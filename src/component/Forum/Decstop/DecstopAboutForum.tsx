import React from 'react';
import { useParams } from 'react-router-dom';
import { forumMoreApi } from '../../../app/services/services';

const DecstopAboutForum = () => {
    const params = useParams()
    const {data: topic} = forumMoreApi.useAllForumsApiQuery(Number(params.id))

    return (
        <div>
            <div>

            </div>
            <div>
                
            </div>
        </div>
    );
};

export default DecstopAboutForum;