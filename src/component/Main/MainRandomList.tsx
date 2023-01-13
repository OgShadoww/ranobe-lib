import React from 'react';
import { ranobeApi } from '../../app/services/services';
import MainRandomItem from './MainRandomItem';
import { IRanobe } from '../../types/RanobeType';

const MainRandomList = () => {
    const {data: ranobeItem, isLoading} = ranobeApi.useFetchAllRanobeQuery({limit: 6, order:'random', censored: JSON.parse(localStorage.getItem('censored') || 'true') || true})

    return (
        <div className='flex lg:gap-[15px] gap-[10px] overflow-scroll flex-1 w-[100%] h-full'>
            {ranobeItem && ranobeItem.map(item => 
                <MainRandomItem key={item.id} randomRanobe={item}/>    
            )}
        </div>
    );
};

export default MainRandomList;