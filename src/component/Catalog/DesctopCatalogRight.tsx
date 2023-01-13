import React from 'react';
import { BsChevronRight } from 'react-icons/bs';

const DecstopCatalogRight = () => {
    return (
       <div className='search-filter'>
            <div className='h-full foreground'>
                <div className='search-filter-wrap'>
                    <div className='main-wrapper'>
                        <div className='px-[7px] py-[8px] flex justify-between items-center cursor-pointer rounded-[3px]'>
                            <div className='font-[600] text-[14px]'>
                                Жанри
                            </div>
                            <div className='flex items-center'>
                                <span className='text-[12px] text-secondary font-[400] px-[10px]'>
                                            
                                </span>
                                <BsChevronRight/>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
       </div>
    );
};

export default DecstopCatalogRight;