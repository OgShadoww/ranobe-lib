import React from 'react';
import { ranobeApi } from '../../app/services/services';
import BigListItem from './BigListItem';

const BigListRanobe = () => {
    const {data: ranobe} = ranobeApi.useFetchAllRanobeQuery({limit: 20, order:'popularity'})

    return (
        <div className='flex flex-col main-wrapper-padding-out'>
            <h3 className='font-semibold text-left text-[14px] border-b-[#38383a] border-b-[2px] w-full mb-[20px]'>
                <span className='px-[10px] py-[14px] block'>Найбільш популярне ранобе</span>
            </h3>
            <div className='px-[10px]'>
                {ranobe?.map(ranobe =>
                    <BigListItem key={ranobe.id} items={ranobe}/>    
                )}
            </div>
        </div>
    );
};

export default BigListRanobe;