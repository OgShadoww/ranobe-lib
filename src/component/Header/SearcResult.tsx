import React, { FC, useState } from 'react';
import { ranobeApiSearch } from '../../app/services/services';
import SearchItem from './SearchItem';

interface props {
    searchTherm: string
}

const SearchResult:FC<props> = ({searchTherm}) => {
    const [filteredSearchTerm, setFilteredSearchTerm] = useState(searchTherm);
    const {data: ranobe} = ranobeApiSearch.useFetchAllRanobeQuery(searchTherm)

    if(ranobe?.length === 0) {
        return (
            <div className='relative rounded-[3px] overflow-hidden'>
                <div className='search-suggestions'>
                    <div className='autocomplete-empty'>
                        Нічого не найдено
                    </div>
                </div>  
            </div>  
        )
    }
    if(searchTherm === '' ) {
        return (
            <div className='relative rounded-[3px] overflow-hidden'>
                <div className='search-suggestions'></div>  
            </div>  
        )
    }

    return (
        <div className='relative rounded-[3px] overflow-hidden'>
            <div className='search-suggestions'>
                {ranobe?.map(ranobe => 
                    <SearchItem key={ranobe.id} item={ranobe}/>    
                )}
            </div>
        </div>
    );
};

export default SearchResult;