import React from 'react';
import { ranobeApi } from '../../app/services/services';
import PopularRanobeitem from './PopularRanobeitem';

const PopularRanobe = () => {
    const {data: popularRanobe} = ranobeApi.useFetchAllRanobeQuery({order: 'popularity', limit:20})

    return (
        <div className='flex flex-col'>
            {popularRanobe?.map(ranobe => 
                <PopularRanobeitem key={ranobe.id} items={ranobe}/>    
            )}
        </div>
    );
};

export default PopularRanobe;