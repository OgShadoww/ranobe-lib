import React from 'react';
import { ranobeApi } from '../../app/services/services';
import MainRandomItem from './MainRandomItem';
import { IRanobe } from '../../types/RanobeType';

const MainRandomList = () => {
    const {data: ranobeItem, isLoading} = ranobeApi.useFetchAllRanobeQuery({limit: 6, order:'random'})

    return (
        <div className='flex gap-[15px] overflow-scroll flex-1 w-[100%] h-full'>
            {ranobeItem && ranobeItem.map(item => 
                <MainRandomItem key={item.id} randomRanobe={item}/>    
            )}
        </div>
    );
};

export default MainRandomList;