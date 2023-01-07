import React, { FC, useCallback, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { TfiClose } from 'react-icons/tfi';
import { useDebounce } from '../../app/hook/useDebounse';
import { ranobeApiSearch } from '../../app/services/services';
import SearchResult from './SearcResult';

interface props {
    visible: boolean,
    setVisible: any
}

const Search:FC<props> = ({visible, setVisible}) => {
    const mainStyles = ['absolute opacity-0 pointer-events-none']
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    if(visible) {
        mainStyles.pop()
        mainStyles.push('search')
    }
    else {
        mainStyles.push('opacity-0 pointer-events-none')
    }
        
    return (
        <div className={mainStyles.join(' ')}>
            <div className='search-container'>
                <div className="search-inner">
                    <div className='relative flex items-center'>
                        <BsSearch className='text-black absolute left-[10px] cursor-pointer'/>
                        <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} type="text" placeholder='Пошук Ранобе' className='h-[38px] w-full border-[0] rounded-[3px] bg-[#fff] text-[#212529] outline-none px-[38px] text-[14px]' />
                        <TfiClose onClick={() => setVisible(false)} className='text-black absolute right-[10px] cursor-pointer'/>
                    </div>
                    <div className='flex flex-col'>
                        <SearchResult searchTherm={debouncedSearchTerm}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;